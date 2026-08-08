import React, { useState, useMemo } from "react";
import QuestionCard from "./QuestionCard";
import { RotateCcw, ChevronLeft, ChevronRight, Layers, Award } from "lucide-react";
import { Question, UserAnswersMap } from "../types";
import { SUBJECTS } from "../utils/storage";
interface SubjectQuizSolverProps {
	questions: Question[];
	userAnswers: UserAnswersMap;
	bookmarks: string[];
	onSelectOption: (questionId: string, selectedOption: number, session: string) => void;
	onResetAnswer: (questionId: string) => void;
	onToggleBookmark: (questionId: string) => void;
	onFinishQuiz: () => void;
}

const SUBJECT_COLORS: Record<number, { gradient: string; glow: string }> = {
	1: { gradient: "linear-gradient(135deg, #6366f1, #4f46e5)", glow: "rgba(99,102,241,0.35)" },
	2: { gradient: "linear-gradient(135deg, #10b981, #059669)", glow: "rgba(16,185,129,0.35)" },
	3: { gradient: "linear-gradient(135deg, #f59e0b, #d97706)", glow: "rgba(245,158,11,0.35)" },
	4: { gradient: "linear-gradient(135deg, #f43f5e, #e11d48)", glow: "rgba(244,63,94,0.35)" },
	5: { gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", glow: "rgba(139,92,246,0.35)" },
};

export default function SubjectQuizSolver({ questions, userAnswers, bookmarks, onSelectOption, onResetAnswer, onToggleBookmark, onFinishQuiz }: SubjectQuizSolverProps) {
	const [selectedSubjectId, setSelectedSubjectId] = useState<number | null>(null);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	// 과목별 문제 수 및 풀이 현황 계산
	const subjectStats = useMemo(() => {
		return SUBJECTS.map((sub) => {
			const subQuestions = questions.filter((q) => q.subjectId === sub.id);
			const answered = subQuestions.filter((q) => userAnswers[q.id]).length;
			const correct = subQuestions.filter((q) => userAnswers[q.id]?.isCorrect).length;
			return {
				...sub,
				total: subQuestions.length,
				answered,
				correct,
				score: answered > 0 ? Math.round((correct / answered) * 100) : null,
			};
		});
	}, [questions, userAnswers]);

	// 선택한 과목의 문제 목록
	const filteredQuestions = useMemo(() => {
		if (selectedSubjectId === null) return [];
		return questions.filter((q) => q.subjectId === selectedSubjectId);
	}, [questions, selectedSubjectId]);

	const handleSelectSubject = (subjectId: number) => {
		setSelectedSubjectId(subjectId);
		setCurrentIndex(0);
	};

	const handleBack = () => {
		setSelectedSubjectId(null);
		setCurrentIndex(0);
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
							}}
						>
							<Layers size={22} color="#fff" />
						</div>
						<div>
							<div style={{ fontWeight: 700, fontSize: "1.1rem" }}>과목별 문제풀이</div>
							<div style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>원하는 과목을 선택해 집중 학습하세요</div>
						</div>
					</div>
				</div>

				{/* 과목 선택 카드 */}
				<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
					{subjectStats.map((sub) => {
						const colors = SUBJECT_COLORS[sub.id];
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
								{/* Glow */}
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

								{/* 과목 번호 뱃지 + 이름 */}
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
										<div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-main)" }}>{sub.name.replace(/^\d과목: /, "")}</div>
										<div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "2px" }}>{sub.id}과목</div>
									</div>
								</div>

								{/* 통계 */}
								<div>
									<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.85rem" }}>
										<span style={{ color: "var(--text-muted)" }}>{sub.total > 0 ? `총 ${sub.total}문제 · 풀이 ${sub.answered}문제` : "문제 없음"}</span>
										{sub.score !== null && (
											<span
												style={{
													color: sub.score >= 60 ? "var(--correct)" : sub.score >= 40 ? "var(--warning)" : "var(--wrong)",
													fontWeight: 700,
												}}
											>
												{sub.score}점
											</span>
										)}
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
			</div>
		);
	}

	// ─────────────────────────────────────────
	// 문제 풀이 화면
	// ─────────────────────────────────────────
	const currentQuestion = filteredQuestions[currentIndex];
	const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
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
			<div className="glass-card" style={{ padding: "16px 24px", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
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
					<div style={{ fontWeight: 700 }}>{selectedSubject.name}</div>
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
				onSelectOption={(optNum) => onSelectOption(currentQuestion.id, optNum, currentQuestion.session)}
				onToggleBookmark={onToggleBookmark}
			/>

			{/* 하단 컨트롤 */}
			<div className="footer-controls">
				<button
					className="btn-secondary"
					onClick={() => onResetAnswer(currentQuestion.id)}
					disabled={!currentAnswer}
					style={{ opacity: currentAnswer ? 1 : 0.5, cursor: currentAnswer ? "pointer" : "not-allowed" }}
				>
					<RotateCcw size={18} />
					다시풀기
				</button>

				<div style={{ display: "flex", gap: "12px" }}>
					<button
						className="btn-secondary"
						onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
						disabled={currentIndex === 0}
						style={{ opacity: currentIndex === 0 ? 0.5 : 1, cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}
					>
						<ChevronLeft size={18} />
						이전문제
					</button>

					{currentIndex < filteredQuestions.length - 1 ? (
						<button className="btn-primary" style={{ background: colors.gradient }} onClick={() => setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}>
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
