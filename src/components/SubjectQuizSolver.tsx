import React, { useState, useMemo, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { RotateCcw, ChevronLeft, ChevronRight, Layers, Award, Shrink } from "lucide-react";
import { Question, UserAnswersMap, UserAnswerRecord } from "../types";
import { SUBJECTS } from "../utils/storage";
import CustomConfirmModal from "./CustomConfirmModal";

interface SubjectQuizSolverProps {
	questions: Question[];
	userAnswers?: UserAnswersMap; // 추가
	bookmarks: string[];
	onSelectOption: (questionId: string, selectedOption: number, session: string) => void;
	onResetAnswer: (questionId: string) => void;
	onToggleBookmark: (questionId: string) => void;
	onFinishQuiz: () => void;
}

const STORAGE_KEY_SUBJECT_ANSWERS = "subject_quiz_answers_v1";
const STORAGE_KEY_LAST_INDEX = "subject_quiz_last_index_v1";

const SUBJECT_COLORS: Record<number, { gradient: string; glow: string }> = {
	1: { gradient: "linear-gradient(135deg, #6366f1, #4f46e5)", glow: "rgba(99,102,241,0.35)" },
	2: { gradient: "linear-gradient(135deg, #10b981, #059669)", glow: "rgba(16,185,129,0.35)" },
	3: { gradient: "linear-gradient(135deg, #f59e0b, #d97706)", glow: "rgba(245,158,11,0.35)" },
	4: { gradient: "linear-gradient(135deg, #f43f5e, #e11d48)", glow: "rgba(244,63,94,0.35)" },
	5: { gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", glow: "rgba(139,92,246,0.35)" },
};

export default function SubjectQuizSolver({ questions, bookmarks, onSelectOption, onResetAnswer, onToggleBookmark, onFinishQuiz }: SubjectQuizSolverProps) {
	const [selectedSubjectId, setSelectedSubjectId] = useState<number | null>(null);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [resetTargetSubjectId, setResetTargetSubjectId] = useState<number | null>(null);

	// 과목별 문제풀이 전용 독립 답안 상태 (localStorage)
	const [subjectAnswers, setSubjectAnswers] = useState<UserAnswersMap>(() => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY_SUBJECT_ANSWERS);
			return saved ? JSON.parse(saved) : {};
		} catch (e) {
			console.error("Failed to load subject answers from localStorage", e);
			return {};
		}
	});

	// 과목별 마지막 풀이 위치 (localStorage)
	const [lastIndexes, setLastIndexes] = useState<Record<number, number>>(() => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY_LAST_INDEX);
			return saved ? JSON.parse(saved) : {};
		} catch (e) {
			console.error("Failed to load last indexes from localStorage", e);
			return {};
		}
	});

	// 상태 변경 시 localStorage 자동 저장
	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY_SUBJECT_ANSWERS, JSON.stringify(subjectAnswers));
		} catch (e) {
			console.error("Failed to save subject answers to localStorage", e);
		}
	}, [subjectAnswers]);

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY_LAST_INDEX, JSON.stringify(lastIndexes));
		} catch (e) {
			console.error("Failed to save last indexes to localStorage", e);
		}
	}, [lastIndexes]);

	// 과목별 통계 계산
	const subjectStats = useMemo(() => {
		return SUBJECTS.map((sub) => {
			const subQuestions = questions.filter((q) => q.subjectId === sub.id);
			const answeredList = subQuestions.filter((q) => subjectAnswers[q.id]);
			const answered = answeredList.length;
			const correct = answeredList.filter((q) => subjectAnswers[q.id]?.isCorrect).length;
			const wrong = answered - correct;

			return {
				...sub,
				total: subQuestions.length,
				answered,
				correct,
				wrong,
			};
		});
	}, [questions, subjectAnswers]);

	// 선택된 과목의 문제 리스트
	const filteredQuestions = useMemo(() => {
		if (selectedSubjectId === null) return [];
		return questions.filter((q) => q.subjectId === selectedSubjectId);
	}, [questions, selectedSubjectId]);

	// 과목 선택 처리
	const handleSelectSubject = (subjectId: number) => {
		const subQuestions = questions.filter((q) => q.subjectId === subjectId);
		if (subQuestions.length === 0) return;

		setSelectedSubjectId(subjectId);

		const savedIndex = lastIndexes[subjectId] ?? 0;
		const targetIndex = Math.min(Math.max(0, savedIndex), subQuestions.length - 1);

		let startIndex = targetIndex;
		if (subjectAnswers[subQuestions[startIndex]?.id]) {
			const nextUnansweredIndex = subQuestions.findIndex((q, idx) => idx >= targetIndex && !subjectAnswers[q.id]);
			if (nextUnansweredIndex !== -1) {
				startIndex = nextUnansweredIndex;
			}
		}

		setCurrentIndex(startIndex);
	};

	const handleBack = () => {
		setSelectedSubjectId(null);
		setCurrentIndex(0);
	};

	const handleSetIndex = (newIndex: number) => {
		setCurrentIndex(newIndex);
		if (selectedSubjectId !== null) {
			setLastIndexes((prev) => ({
				...prev,
				[selectedSubjectId]: newIndex,
			}));
		}
	};

	// 단일 과목 상태 초기화 처리
	const handleConfirmResetSubject = () => {
		if (resetTargetSubjectId === null) return;

		const subQIds = new Set(questions.filter((q) => q.subjectId === resetTargetSubjectId).map((q) => q.id));

		setSubjectAnswers((prev) => {
			const next = { ...prev };
			Object.keys(next).forEach((qId) => {
				if (subQIds.has(qId)) {
					delete next[qId];
				}
			});
			return next;
		});

		setLastIndexes((prev) => ({
			...prev,
			[resetTargetSubjectId]: 0,
		}));

		setResetTargetSubjectId(null);
	};

	// 보기 선택 (독립 답안 저장 + 오답노트 연동)
	const handleSelectOptionLocal = (questionId: string, selectedOption: number, session: string) => {
		const question = questions.find((q) => q.id === questionId);
		if (!question) return;

		const correctAnswer = question.answer ?? (question as any).correctOption ?? (question as any).correctAnswer;
		const isCorrect = correctAnswer === selectedOption;

		const newAnswer: UserAnswerRecord = {
			selectedOption,
			isCorrect,
			session,
			timestamp: new Date().toISOString(),
		};

		setSubjectAnswers((prev) => ({
			...prev,
			[questionId]: newAnswer,
		}));

		onSelectOption(questionId, selectedOption, session);
	};

	// 다시풀기 처리
	const handleResetAnswerLocal = (questionId: string) => {
		setSubjectAnswers((prev) => {
			const next = { ...prev };
			delete next[questionId];
			return next;
		});

		onResetAnswer(questionId);
	};

	// ─────────────────────────────────────────
	// 과목 선택 화면
	// ─────────────────────────────────────────
	if (selectedSubjectId === null) {
		return (
			<div style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="animate-fade-in">
				<div className="glass-card" style={{ padding: "24px 28px" }}>
					<div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
						<div
							style={{
								width: "40px",
								height: "40px",
								background: "linear-gradient(135deg, #06b6d4, #0891b2)",
								borderRadius: "var(--radius-sm)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexShrink: "0",
							}}
						>
							<Layers size={22} color="#fff" />
						</div>
						<div>
							<div style={{ fontWeight: 700, fontSize: "1.1rem" }}>과목별 문제풀이</div>
							<div style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>원하는 과목을 선택해 집중 학습하세요 (이전 학습 위치부터 이어서 풀어볼 수 있습니다)</div>
						</div>
					</div>
				</div>

				{/* 과목 선택 카드 그리드 */}
				<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
					{subjectStats.map((sub) => {
						const colors = SUBJECT_COLORS[sub.id];
						const hasHistory = (lastIndexes[sub.id] ?? 0) > 0 || sub.answered > 0;

						return (
							<button
								key={sub.id}
								onClick={() => handleSelectSubject(sub.id)}
								style={{
									background: "var(--bg-card)",
									border: "1px solid var(--border-color)",
									borderRadius: "var(--radius-lg)",
									padding: "24px",
									cursor: sub.total > 0 ? "pointer" : "not-allowed",
									textAlign: "left",
									display: "flex",
									flexDirection: "column",
									gap: "14px",
									transition: "all 0.25s ease",
									position: "relative",
									overflow: "hidden",
									opacity: sub.total > 0 ? 1 : 0.5,
								}}
								disabled={sub.total === 0}
								onMouseEnter={(e) => {
									if (sub.total === 0) return;
									const el = e.currentTarget;
									el.style.transform = "translateY(-3px)";
									el.style.boxShadow = `0 10px 30px ${colors.glow}`;
									el.style.borderColor = "rgba(255,255,255,0.2)";
								}}
								onMouseLeave={(e) => {
									const el = e.currentTarget;
									el.style.transform = "translateY(0)";
									el.style.boxShadow = "none";
									el.style.borderColor = "var(--border-color)";
								}}
							>
								{/* Background Glow */}
								<div
									style={{
										position: "absolute",
										top: "-20px",
										right: "-20px",
										width: "100px",
										height: "100px",
										background: colors.glow,
										borderRadius: "50%",
										filter: "blur(25px)",
										opacity: 0.4,
										pointerEvents: "none",
									}}
								/>

								{/* 과목 헤더 */}
								<div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", width: "100%" }}>
									<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
										<div
											style={{
												width: "52px",
												height: "52px",
												background: colors.gradient,
												borderRadius: "var(--radius-md)",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "1.4rem",
												fontWeight: 900,
												color: "#fff",
												flexShrink: 0,
												boxShadow: `0 6px 20px ${colors.glow}`,
											}}
										>
											{sub.id}
										</div>
										<div>
											<div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-main)" }}>{sub.name.replace(/^\d과목:\s*/, "")}</div>
											<div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "2px" }}>
												{sub.id}과목 {hasHistory && <span style={{ color: "#06b6d4", fontWeight: 600 }}> · 학습 진행 중</span>}
											</div>
										</div>
									</div>

									{/* 회색계열 아이콘 전용 초기화 버튼 */}
									{hasHistory && (
										<div
											onClick={(e) => {
												e.stopPropagation();
												setResetTargetSubjectId(sub.id);
											}}
											title="이 과목 풀이 기록 및 진행 위치 초기화"
											style={{
												display: "inline-flex",
												alignItems: "center",
												justifyContent: "center",
												width: "30px",
												height: "30px",
												background: "rgba(255, 255, 255, 0.06)",
												border: "1px solid rgba(255, 255, 255, 0.12)",
												color: "var(--text-muted)",
												borderRadius: "var(--radius-sm)",
												cursor: "pointer",
												zIndex: 2,
												transition: "all 0.2s",
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
												e.currentTarget.style.color = "var(--text-main)";
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
												e.currentTarget.style.color = "var(--text-muted)";
											}}
										>
											<RotateCcw size={14} />
										</div>
									)}
								</div>

								{/* 통계 정보 (점수 제거 및 풀이 / 정답 / 오답 형식) */}
								<div style={{ marginTop: "auto" }}>
									<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", fontSize: "0.85rem" }}>
										<span style={{ color: "var(--text-muted)" }}>{sub.total > 0 ? `풀이 ${sub.answered} / 정답 ${sub.correct} / 오답 ${sub.wrong}` : "문제 없음"}</span>
										{sub.total > 0 && <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", opacity: 0.8 }}>총 {sub.total}문제</span>}
									</div>

									{/* 진행 바 */}
									{sub.total > 0 && (
										<div style={{ background: "rgba(255,255,255,0.08)", height: "6px", borderRadius: "3px", overflow: "hidden" }}>
											<div
												style={{
													height: "100%",
													width: `${Math.round((sub.answered / sub.total) * 100)}%`,
													background: colors.gradient,
													transition: "width 0.4s ease",
												}}
											/>
										</div>
									)}
								</div>
							</button>
						);
					})}
				</div>

				{/* 과목별 초기화 확인 모달 */}
				<CustomConfirmModal
					isOpen={resetTargetSubjectId !== null}
					title={`${resetTargetSubjectId}과목 풀이 기록 초기화`}
					message={`선택하신 ${resetTargetSubjectId}과목의 모든 풀이 기록과 학습 위치가 초기화됩니다. 계속 진행하시겠습니까?`}
					confirmText="초기화"
					cancelText="취소"
					onConfirm={handleConfirmResetSubject}
					onClose={() => setResetTargetSubjectId(null)}
				/>
			</div>
		);
	}

	// ─────────────────────────────────────────
	// 문제 풀이 화면
	// ─────────────────────────────────────────
	const currentQuestion = filteredQuestions[currentIndex];
	const currentAnswer = currentQuestion ? subjectAnswers[currentQuestion.id] : undefined;
	const isBookmarked = currentQuestion ? bookmarks.includes(currentQuestion.id) : false;
	const progressPercent = filteredQuestions.length > 0 ? Math.round(((currentIndex + 1) / filteredQuestions.length) * 100) : 0;
	const selectedSubject = SUBJECTS.find((s) => s.id === selectedSubjectId)!;
	const colors = SUBJECT_COLORS[selectedSubjectId];

	if (filteredQuestions.length === 0) {
		return (
			<div className="glass-card animate-fade-in" style={{ padding: "60px", textAlign: "center" }}>
				<Layers size={48} style={{ color: "var(--text-muted)", marginBottom: "16px" }} />
				<h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>해당 과목에 문제가 없습니다.</h3>
				<button className="btn-secondary" onClick={handleBack} style={{ marginTop: "16px" }}>
					← 과목 선택으로 돌아가기
				</button>
			</div>
		);
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			{/* 상단 헤더 */}
			<div className="glass-card" style={{ padding: "16px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
				<button
					onClick={handleBack}
					style={{
						background: "rgba(255,255,255,0.05)",
						border: "1px solid var(--border-color)",
						color: "var(--text-muted)",
						padding: "6px 14px",
						borderRadius: "var(--radius-sm)",
						cursor: "pointer",
						fontSize: "0.88rem",
						display: "flex",
						alignItems: "center",
						gap: "6px",
					}}
				>
					← 과목 선택
				</button>

				{/* 과목 번호 뱃지 */}
				<div
					style={{
						width: "36px",
						height: "36px",
						background: colors.gradient,
						borderRadius: "var(--radius-sm)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "1.1rem",
						fontWeight: 900,
						color: "#fff",
					}}
				>
					{selectedSubjectId}
				</div>

				<div>
					<div style={{ fontWeight: 700 }}>
						<span className="subject-prefix">{selectedSubject.name.match(/^\d과목:\s*/)?.[0]}</span>
						{selectedSubject.name.replace(/^\d과목:\s*/, "")}
					</div>
					<div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
						{currentIndex + 1} / {filteredQuestions.length} 문제
					</div>
				</div>
			</div>

			{/* 진행 바 */}
			<div style={{ background: "rgba(255,255,255,0.05)", height: "6px", borderRadius: "3px", overflow: "hidden" }}>
				<div
					style={{
						height: "100%",
						width: `${progressPercent}%`,
						background: colors.gradient,
						transition: "width 0.3s ease",
					}}
				/>
			</div>

			{/* 문제 카드 */}
			<QuestionCard
				question={currentQuestion}
				currentIndex={currentIndex}
				totalCount={filteredQuestions.length}
				userAnswer={currentAnswer}
				isBookmarked={isBookmarked}
				onSelectOption={(optNum) => handleSelectOptionLocal(currentQuestion.id, optNum, currentQuestion.session)}
				onToggleBookmark={onToggleBookmark}
			/>

			{/* 하단 컨트롤 */}
			<div className="footer-controls">
				<button
					className="btn-secondary"
					onClick={() => handleResetAnswerLocal(currentQuestion.id)}
					disabled={!currentAnswer}
					style={{ opacity: currentAnswer ? 1 : 0.5, cursor: currentAnswer ? "pointer" : "not-allowed" }}
				>
					<RotateCcw size={18} />
					다시풀기
				</button>

				<div style={{ display: "flex", gap: "12px" }}>
					<button
						className="btn-secondary"
						onClick={() => handleSetIndex(Math.max(0, currentIndex - 1))}
						disabled={currentIndex === 0}
						style={{ opacity: currentIndex === 0 ? 0.5 : 1, cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}
					>
						<ChevronLeft size={18} />
						이전문제
					</button>

					{currentIndex < filteredQuestions.length - 1 ? (
						<button className="btn-primary" style={{ background: colors.gradient }} onClick={() => handleSetIndex(Math.min(filteredQuestions.length - 1, currentIndex + 1))}>
							다음문제
							<ChevronRight size={18} />
						</button>
					) : (
						<button className="btn-primary" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }} onClick={onFinishQuiz}>
							<Award size={18} />
							결과 보기
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
