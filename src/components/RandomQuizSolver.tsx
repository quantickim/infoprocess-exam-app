import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { RotateCcw, ChevronLeft, ChevronRight, Shuffle, Award } from "lucide-react";
import { Question, UserAnswersMap } from "../types";

interface RandomQuizSolverProps {
	questions: Question[];
	userAnswers: UserAnswersMap;
	bookmarks: string[];
	onSelectOption: (questionId: string, selectedOption: number, session: string) => void;
	onResetAnswer: (questionId: string) => void;
	onToggleBookmark: (questionId: string) => void;
	onFinishQuiz: () => void;
}

export default function RandomQuizSolver({ questions, userAnswers, bookmarks, onSelectOption, onResetAnswer, onToggleBookmark, onFinishQuiz }: RandomQuizSolverProps) {
	const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const handleReshuffle = () => {
		const shuffled = [...questions].sort(() => Math.random() - 0.5);
		setShuffledQuestions(shuffled);
		setCurrentIndex(0);
	};

	useEffect(() => {
		handleReshuffle();
	}, [questions]);

	if (shuffledQuestions.length === 0) return null;

	const currentQuestion = shuffledQuestions[currentIndex];
	const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
	const isBookmarked = currentQuestion ? bookmarks.includes(currentQuestion.id) : false;
	const progressPercent = Math.round(((currentIndex + 1) / shuffledQuestions.length) * 100);

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			{/* Header Bar */}
			<div className="glass-card" style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
				<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
					<div
						style={{
							width: "40px",
							height: "40px",
							background: "linear-gradient(135deg, #a855f7, #7e22ce)",
							borderRadius: "var(--radius-sm)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Shuffle size={22} color="#fff" />
					</div>
					<div>
						<div style={{ fontWeight: 700, fontSize: "1.05rem" }}>랜덤 문제풀이</div>
						<div style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>전체 {shuffledQuestions.length}문제 중 무작위 출제</div>
					</div>
				</div>

				<button className="btn-secondary" onClick={handleReshuffle} style={{ padding: "8px 14px", fontSize: "0.88rem" }}>
					<Shuffle size={16} /> 문제 다시 섞기
				</button>
			</div>

			{/* Progress Bar */}
			<div style={{ background: "rgba(255, 255, 255, 0.05)", height: "6px", borderRadius: "3px", overflow: "hidden" }}>
				<div
					style={{
						height: "100%",
						width: `${progressPercent}%`,
						background: "linear-gradient(90deg, #a855f7, #ec4899)",
						transition: "width 0.3s ease",
					}}
				/>
			</div>

			{/* Question Card */}
			<QuestionCard
				question={currentQuestion}
				currentIndex={currentIndex}
				totalCount={shuffledQuestions.length}
				userAnswer={currentAnswer}
				isBookmarked={isBookmarked}
				onSelectOption={(optNum) => onSelectOption(currentQuestion.id, optNum, currentQuestion.session)}
				onToggleBookmark={onToggleBookmark}
			/>

			{/* Footer Controls */}
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

					{currentIndex < shuffledQuestions.length - 1 ? (
						<button
							className="btn-primary"
							style={{ background: "linear-gradient(135deg, #a855f7, #7e22ce)" }}
							onClick={() => setCurrentIndex((prev) => Math.min(shuffledQuestions.length - 1, prev + 1))}
						>
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
