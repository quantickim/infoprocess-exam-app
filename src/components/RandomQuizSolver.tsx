import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { RotateCcw, ChevronLeft, ChevronRight, Shuffle, Award } from "lucide-react";
import { Question, UserAnswersMap, UserAnswerRecord } from "../types";

interface RandomQuizSolverProps {
	questions: Question[];
	userAnswers: UserAnswersMap;
	bookmarks: string[];
	onSelectOption: (questionId: string, selectedOption: number, session: string) => void;
	onResetAnswer: (questionId: string) => void;
	onToggleBookmark: (questionId: string) => void;
	onFinishQuiz: () => void;
}

export default function RandomQuizSolver({ questions, bookmarks, onSelectOption, onToggleBookmark, onFinishQuiz }: RandomQuizSolverProps) {
	const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	// 전역 저장소(userAnswers)와 분리된 랜덤 문제풀이 전용 로컬 풀이 상태 (진입 시 항상 빈 상태)
	const [localAnswers, setLocalAnswers] = useState<Record<string, UserAnswerRecord>>({});

	const handleReshuffle = () => {
		const shuffled = [...questions].sort(() => Math.random() - 0.5);
		setShuffledQuestions(shuffled);
		setLocalAnswers({}); // 다시 섞을 때 로컬 풀이 기록도 초기화
		setCurrentIndex(0);
	};

	useEffect(() => {
		handleReshuffle();
	}, [questions]);

	if (shuffledQuestions.length === 0) return null;

	const currentQuestion = shuffledQuestions[currentIndex];
	// 전역 답안 대신 랜덤 세션용 로컬 답안 조회 (이전에 풀었어도 안 푼 것처럼 표시됨)
	const currentLocalAnswer = currentQuestion ? localAnswers[currentQuestion.id] : undefined;

	// ID 타입을 String으로 통일하여 비교
	const isBookmarked = currentQuestion ? bookmarks.map(String).includes(String(currentQuestion.id)) : false;

	const progressPercent = Math.round(((currentIndex + 1) / shuffledQuestions.length) * 100);

	// 답안 선택 처리 (맞추면 전역 영향 없음, 틀리면 오답노트 등록)
	const handleLocalSelectOption = (optionNum: number) => {
		if (!currentQuestion) return;
		const isCorrect = optionNum === currentQuestion.answer;

		// 1. 현재 랜덤 세션 화면에 결과 표시를 위해 localAnswers에 저장
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

		// 2. 틀렸을 때만 전역 저장소에 오답으로 등록 (오답노트 반영)
		// 맞았을 때는 전역 저장소에 아무런 영향을 주지 않음
		if (!isCorrect) {
			onSelectOption(String(currentQuestion.id), optionNum, currentQuestion.session);
		}
	};

	// 현재 문제의 로컬 풀이 기록만 초기화 (다시 풀 수 있게 함)
	const handleLocalResetAnswer = () => {
		if (!currentQuestion) return;
		setLocalAnswers((prev) => {
			const updated = { ...prev };
			delete updated[currentQuestion.id];
			return updated;
		});
	};

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
				userAnswer={currentLocalAnswer}
				isBookmarked={isBookmarked}
				onSelectOption={handleLocalSelectOption}
				onToggleBookmark={() => onToggleBookmark(String(currentQuestion.id))}
			/>

			{/* Footer Controls */}
			<div className="footer-controls">
				<button
					className="btn-secondary"
					onClick={handleLocalResetAnswer}
					disabled={!currentLocalAnswer}
					style={{ opacity: currentLocalAnswer ? 1 : 0.5, cursor: currentLocalAnswer ? "pointer" : "not-allowed" }}
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
						이전문제
					</button>

					{currentIndex < shuffledQuestions.length - 1 ? (
						<button
							className="btn-primary"
							style={{ background: "linear-gradient(135deg, #a855f7, #7e22ce)" }}
							onClick={() => setCurrentIndex((prev) => Math.min(shuffledQuestions.length - 1, prev + 1))}
						>
							다음문제
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
