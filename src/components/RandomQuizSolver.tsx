import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { RotateCcw, ChevronLeft, ChevronRight, Shuffle, Award } from "lucide-react";
import { Question, UserAnswerRecord } from "../types";

interface RandomQuizSolverProps {
	questions: Question[];
	bookmarks: string[];
	onSelectOption: (questionId: string, selectedOption: number, session: string) => void;
	onToggleBookmark: (questionId: string) => void;
	onFinishQuiz: () => void;
}

export default function RandomQuizSolver({ questions, bookmarks, onSelectOption, onToggleBookmark, onFinishQuiz }: RandomQuizSolverProps) {
	const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [localAnswers, setLocalAnswers] = useState<Record<string, UserAnswerRecord>>({});

	const handleReshuffle = () => {
		const shuffled = [...questions].sort(() => Math.random() - 0.5);
		setShuffledQuestions(shuffled);
		setLocalAnswers({});
		setCurrentIndex(0);
	};

	useEffect(() => {
		handleReshuffle();
	}, [questions]);

	if (shuffledQuestions.length === 0) return null;

	const currentQuestion = shuffledQuestions[currentIndex];
	const currentLocalAnswer = currentQuestion ? localAnswers[currentQuestion.id] : undefined;
	const isBookmarked = currentQuestion ? bookmarks.map(String).includes(String(currentQuestion.id)) : false;
	const progressPercent = Math.round(((currentIndex + 1) / shuffledQuestions.length) * 100);

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

		// 당일 통계 집계 및 오답노트 추가 처리 (userAnswers 성적에는 미영향)
		onSelectOption(String(currentQuestion.id), optionNum, currentQuestion.session);
	};

	const handleLocalResetAnswer = () => {
		if (!currentQuestion) return;
		setLocalAnswers((prev) => {
			const updated = { ...prev };
			delete updated[currentQuestion.id];
			return updated;
		});
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
				userAnswer={currentLocalAnswer}
				isBookmarked={isBookmarked}
				onSelectOption={handleLocalSelectOption}
				onToggleBookmark={() => onToggleBookmark(String(currentQuestion.id))}
			/>

			{/* Footer Controls */}
			<div className="footer-controls">
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
				<button
					className="btn-secondary"
					onClick={handleLocalResetAnswer}
					disabled={!currentLocalAnswer}
					style={{ opacity: currentLocalAnswer ? 1 : 0.5, cursor: currentLocalAnswer ? "pointer" : "not-allowed" }}
				>
					<RotateCcw size={18} />
					다시풀기
				</button>
			</div>
		</div>
	);
}
