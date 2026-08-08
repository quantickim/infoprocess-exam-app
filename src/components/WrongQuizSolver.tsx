import React, { useState, useMemo, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { RotateCcw, ChevronLeft, ChevronRight, XCircle, Trash2, Filter } from "lucide-react";
import { Question, UserAnswerRecord } from "../types";
import CustomSelect from "./CustomSelect";
import { SUBJECTS } from "../utils/storage";

interface WrongQuizSolverProps {
	questions: Question[];
	wrongAnswers: string[]; // 독립된 오답 ID 목록
	bookmarks: string[];
	initialSession?: string;
	onSelectOption: (questionId: string, selectedOption: number, session: string) => void;
	onRemoveWrongAnswer: (questionId: string) => void; // 오답 제외 핸들러
	onToggleBookmark: (questionId: string) => void;
}

export default function WrongQuizSolver({
	questions,
	wrongAnswers,
	bookmarks,
	initialSession,
	onSelectOption, // 👈 Props 수신 추가
	onRemoveWrongAnswer,
	onToggleBookmark,
}: WrongQuizSolverProps) {
	const [selectedSession, setSelectedSession] = useState<string>(initialSession || "all");
	const [selectedSubject, setSelectedSubject] = useState<number>(0);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	// 오답노트 전용 로컬 풀이 상태
	const [localAnswers, setLocalAnswers] = useState<Record<string, UserAnswerRecord>>({});

	useEffect(() => {
		setSelectedSession(initialSession || "all");
		setSelectedSubject(0);
		setCurrentIndex(0);
	}, [initialSession]);

	// 1. 독립된 wrongAnswers 목록을 기반으로 오답 문제 추출
	const allWrongQuestions = useMemo(() => {
		return questions.filter((q) => wrongAnswers.includes(String(q.id)));
	}, [questions, wrongAnswers]);

	// 2. CustomSelect용 회차 옵션 목록
	const sessionOptions = useMemo(() => {
		const sessions = Array.from(new Set(allWrongQuestions.map((q) => q.session)))
			.sort()
			.reverse();

		return [
			{ value: "all", label: `전체 회차 (${allWrongQuestions.length}개)` },
			...sessions.map((s) => {
				const count = allWrongQuestions.filter((q) => q.session === s).length;
				return { value: s, label: `${s} (${count}개)` };
			}),
		];
	}, [allWrongQuestions]);

	// 3. 선택한 회차 및 과목 조건으로 필터링
	const filteredWrongQuestions = useMemo(() => {
		return allWrongQuestions.filter((q) => {
			const matchSession = selectedSession === "all" || q.session === selectedSession;
			const matchSubject = selectedSubject === 0 || q.subjectId === selectedSubject;
			return matchSession && matchSubject;
		});
	}, [allWrongQuestions, selectedSession, selectedSubject]);

	const handleSessionChange = (val: string | number) => {
		setSelectedSession(val as string);
		setSelectedSubject(0);
		setCurrentIndex(0);
	};

	const handleSubjectChange = (subjectId: number) => {
		setSelectedSubject(subjectId);
		setCurrentIndex(0);
	};

	useEffect(() => {
		if (currentIndex >= filteredWrongQuestions.length && filteredWrongQuestions.length > 0) {
			setCurrentIndex(filteredWrongQuestions.length - 1);
		}
	}, [filteredWrongQuestions.length, currentIndex]);

	if (allWrongQuestions.length === 0) {
		return (
			<div className="glass-card animate-fade-in" style={{ padding: "60px", textAlign: "center" }}>
				<XCircle size={56} style={{ color: "var(--correct)", marginBottom: "20px" }} />
				<h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" }}>오답 문제가 없습니다! 🎉</h3>
				<p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
					아직 등록된 오답 문제가 없거나, 오답노트에서 모두 제외하셨습니다.
					<br />
					회차별 문제풀이 메뉴에서 문제를 먼저 풀어보세요.
				</p>
			</div>
		);
	}

	const currentQuestion = filteredWrongQuestions[currentIndex];
	const currentLocalAnswer = currentQuestion ? localAnswers[currentQuestion.id] : undefined;
	const isBookmarked = currentQuestion ? bookmarks.map(String).includes(String(currentQuestion.id)) : false;

	const progressPercent = filteredWrongQuestions.length > 0 ? Math.round(((currentIndex + 1) / filteredWrongQuestions.length) * 100) : 0;

	// 로컬 답안 선택 처리 (오답노트 화면 내 채점 표시 및 당일 측정 데이터 연동)
	const handleLocalSelectOption = (optionNum: number) => {
		if (!currentQuestion) return;
		const isCorrect = optionNum === currentQuestion.answer;
		setLocalAnswers((prev) => ({
			...prev,
			[currentQuestion.id]: {
				questionId: String(currentQuestion.id),
				selectedOption: optionNum,
				isCorrect,
				session: currentQuestion.session,
				timestamp: new Date().toISOString(),
			},
		}));

		// 💡 오답노트 풀이 내역을 당일 측정 통계에 상위 전달
		onSelectOption(String(currentQuestion.id), optionNum, currentQuestion.session);
	};

	// 다시풀기 (로컬 선택 초기화)
	const handleLocalResetAnswer = () => {
		if (!currentQuestion) return;
		setLocalAnswers((prev) => {
			const updated = { ...prev };
			delete updated[currentQuestion.id];
			return updated;
		});
	};

	// 오답 제외하기 버튼 (오답노트 목록에서 완전히 삭제)
	const handleExcludeFromWrong = () => {
		if (!currentQuestion) return;
		handleLocalResetAnswer();
		onRemoveWrongAnswer(String(currentQuestion.id));
	};

	const controlBar = (
		<div
			className="glass-card"
			style={{
				padding: "18px 24px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				flexWrap: "wrap",
				gap: "16px",
				position: "relative",
				zIndex: 50,
			}}
		>
			<div style={{ display: "flex", alignItems: "center", gap: "12px", flex: "1" }}>
				<label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-muted)", whiteSpace: "nowrap" }}>회차 선택:</label>
				<div style={{ width: "100%", maxWidth: "300px" }}>
					<CustomSelect options={sessionOptions} value={selectedSession} onChange={handleSessionChange} placeholder="회차를 선택해주세요" />
				</div>
			</div>

			<div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
				<button className={`nav-btn ${selectedSubject === 0 ? "active" : ""}`} onClick={() => handleSubjectChange(0)} style={{ padding: "6px 12px", fontSize: "0.85rem" }}>
					전체 과목
				</button>
				{SUBJECTS.map((sub) => (
					<button
						key={sub.id}
						className={`nav-btn ${selectedSubject === sub.id ? "active" : ""}`}
						onClick={() => handleSubjectChange(sub.id)}
						style={{ padding: "6px 12px", fontSize: "0.85rem" }}
					>
						{sub.id}과목
					</button>
				))}
			</div>
		</div>
	);

	if (!filteredWrongQuestions.length) {
		return (
			<div style={{ display: "flex", flexDirection: "column", gap: "10px" }} className="animate-fade-in">
				{controlBar}

				<div className="glass-card" style={{ padding: "60px", textAlign: "center" }}>
					<Filter size={48} style={{ color: "var(--text-muted)", marginBottom: "16px" }} />
					<h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>해당 조건의 오답 문제가 없습니다.</h3>
					<p style={{ color: "var(--text-muted)" }}>다른 회차나 과목 필터를 선택해 주세요.</p>
				</div>
			</div>
		);
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "10px" }} className="animate-fade-in">
			{controlBar}

			<div style={{ background: "rgba(255, 255, 255, 0.05)", height: "6px", borderRadius: "3px", overflow: "hidden" }}>
				<div
					style={{
						height: "100%",
						width: `${progressPercent}%`,
						background: "linear-gradient(90deg, #f43f5e, #f59e0b)",
						transition: "width 0.3s ease",
					}}
				/>
			</div>

			<QuestionCard
				question={currentQuestion}
				currentIndex={currentIndex}
				totalCount={filteredWrongQuestions.length}
				userAnswer={currentLocalAnswer}
				isBookmarked={isBookmarked}
				onSelectOption={handleLocalSelectOption}
				onToggleBookmark={() => onToggleBookmark(String(currentQuestion.id))}
			/>

			<div className="footer-controls" style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "space-between" }}>
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

					<button
						className="btn-primary"
						onClick={() => setCurrentIndex((prev) => Math.min(filteredWrongQuestions.length - 1, prev + 1))}
						disabled={currentIndex === filteredWrongQuestions.length - 1}
						style={{
							opacity: currentIndex === filteredWrongQuestions.length - 1 ? 0.5 : 1,
							cursor: currentIndex === filteredWrongQuestions.length - 1 ? "not-allowed" : "pointer",
							background: "linear-gradient(135deg, #f43f5e, #e11d48)",
						}}
					>
						다음문제
						<ChevronRight size={18} />
					</button>
				</div>
				<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
					<button
						className="btn-secondary"
						onClick={handleLocalResetAnswer}
						disabled={!currentLocalAnswer}
						style={{ opacity: currentLocalAnswer ? 1 : 0.5, cursor: currentLocalAnswer ? "pointer" : "not-allowed" }}
					>
						<RotateCcw size={18} />
						다시풀기
					</button>

					<button
						className="btn-secondary"
						onClick={handleExcludeFromWrong}
						style={{
							borderColor: "rgba(244, 63, 94, 0.4)",
							color: "#f43f5e",
							display: "flex",
							alignItems: "center",
							gap: "6px",
						}}
						title="이 문제를 오답 목록에서 제외합니다"
					>
						<Trash2 size={18} />
						오답 제외하기
					</button>
				</div>
			</div>
		</div>
	);
}
