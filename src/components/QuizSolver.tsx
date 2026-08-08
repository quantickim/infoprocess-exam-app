import React, { useState, useMemo } from "react";
import QuestionCard from "./QuestionCard";
import { RotateCcw, ChevronLeft, ChevronRight, Award, Filter, ListChecks } from "lucide-react";
import { Question, UserAnswersMap } from "../types";
import CustomSelect from "./CustomSelect";

const SUBJECTS = [
	{ id: 1, name: "소프트웨어 설계" },
	{ id: 2, name: "소프트웨어 개발" },
	{ id: 3, name: "데이터베이스 구축" },
	{ id: 4, name: "프로그래밍 언어 활용" },
	{ id: 5, name: "정보시스템 구축 관리" },
];

interface QuizSolverProps {
	questions: Question[];
	userAnswers: UserAnswersMap;
	bookmarks: string[];
	onSelectOption: (questionId: string, selectedOption: number, session: string) => void;
	onResetAnswer: (questionId: string) => void;
	onToggleBookmark: (questionId: string) => void;
	onFinishQuiz: (filteredQuestions: Question[]) => void;
}

export default function QuizSolver({ questions, userAnswers, bookmarks, onSelectOption, onResetAnswer, onToggleBookmark, onFinishQuiz }: QuizSolverProps) {
	// 기본값을 빈 문자열("")로 두어 아무 회차도 선택되지 않은 상태로 시작
	const [selectedSession, setSelectedSession] = useState<string>("");
	const [selectedSubject, setSelectedSubject] = useState<number>(0);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const sessionOptions = useMemo(() => {
		const sessions = Array.from(new Set(questions.map((q) => q.session)))
			.sort()
			.reverse();
		return sessions.map((s) => ({ value: s, label: s }));
	}, [questions]);

	const filteredQuestions = useMemo(() => {
		if (!selectedSession) return [];
		return questions.filter((q) => {
			const matchSession = q.session === selectedSession;
			const matchSubject = selectedSubject === 0 || q.subjectId === selectedSubject;
			return matchSession && matchSubject;
		});
	}, [questions, selectedSession, selectedSubject]);

	const handleSessionChange = (val: string | number) => {
		setSelectedSession(val as string);
		setSelectedSubject(0); // 회차 변경 시 과목 선택 상태를 전체 과목(0)으로 초기화
		setCurrentIndex(0);
	};

	const handleSubjectChange = (subjectId: number) => {
		setSelectedSubject(subjectId);
		setCurrentIndex(0);
	};

	const currentQuestion = filteredQuestions[currentIndex];
	const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
	const isBookmarked = currentQuestion ? bookmarks.includes(currentQuestion.id) : false;

	const progressPercent = filteredQuestions.length > 0 ? Math.round(((currentIndex + 1) / filteredQuestions.length) * 100) : 0;

	// 회차 선택 컨트롤 바 (항상 상단에 노출)
	const controlBar = (
		<div
			className="glass-card"
			style={{ padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", position: "relative", zIndex: 50 }}
		>
			<div style={{ display: "flex", alignItems: "center", gap: "12px", width: "260px" }}>
				<label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-muted)", whiteSpace: "nowrap" }}>회차 선택:</label>
				<div style={{ width: "100%" }}>
					<CustomSelect options={sessionOptions} value={selectedSession} onChange={handleSessionChange} placeholder="회차를 선택해주세요" />
				</div>
			</div>

			{/* 회차(selectedSession)가 선택되었을 때만 과목 선택 Chip 노출 */}
			{selectedSession && (
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
			)}
		</div>
	);

	// 아직 회차를 선택하지 않은 경우 안내 메시지 표시
	if (!selectedSession) {
		return (
			<div style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="animate-fade-in">
				{controlBar}

				<div className="glass-card" style={{ padding: "60px", textAlign: "center" }}>
					<ListChecks size={48} style={{ color: "var(--text-muted)", marginBottom: "16px" }} />
					<h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>회차를 선택해주세요</h3>
					<p style={{ color: "var(--text-muted)" }}>상단에서 풀고 싶은 회차를 선택하면 문제풀이가 시작됩니다.</p>
				</div>
			</div>
		);
	}

	if (!filteredQuestions.length) {
		return (
			<div style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="animate-fade-in">
				{controlBar}

				<div className="glass-card" style={{ padding: "60px", textAlign: "center" }}>
					<Filter size={48} style={{ color: "var(--text-muted)", marginBottom: "16px" }} />
					<h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>해당 조건의 문제가 없습니다.</h3>
					<p style={{ color: "var(--text-muted)" }}>다른 회차나 과목 필터를 선택해 주세요.</p>
				</div>
			</div>
		);
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			{/* Control Bar */}
			{controlBar}

			{/* Progress Bar */}
			<div style={{ background: "rgba(255, 255, 255, 0.05)", height: "6px", borderRadius: "3px", overflow: "hidden" }}>
				<div
					style={{
						height: "100%",
						width: `${progressPercent}%`,
						background: "linear-gradient(90deg, var(--primary), var(--correct))",
						transition: "width 0.3s ease",
					}}
				/>
			</div>

			{/* Current Question Card */}
			<QuestionCard
				question={currentQuestion}
				currentIndex={currentIndex}
				totalCount={filteredQuestions.length}
				userAnswer={currentAnswer}
				isBookmarked={isBookmarked}
				onSelectOption={(optNum) => onSelectOption(currentQuestion.id, optNum, currentQuestion.session)}
				onToggleBookmark={onToggleBookmark}
			/>

			{/* Bottom Footer Controls */}
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
						<button className="btn-primary" onClick={() => setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}>
							다음문제
							<ChevronRight size={18} />
						</button>
					) : (
						<button className="btn-primary" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }} onClick={() => onFinishQuiz(filteredQuestions)}>
							<Award size={18} />
							결과 제출하기
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
