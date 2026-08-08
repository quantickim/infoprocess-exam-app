import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home, { TabType } from "./components/Home";
import RandomQuizSolver from "./components/RandomQuizSolver";
import QuizSolver from "./components/QuizSolver";
import SubjectQuizSolver from "./components/SubjectQuizSolver";
import QuizResult from "./components/QuizResult";
import BookmarkList from "./components/BookmarkList";
import WrongQuizSolver from "./components/WrongQuizSolver";
import { Question, UserAnswersMap } from "./types";
import { getQuestions, getBookmarks, toggleBookmark, getUserAnswers, saveUserAnswer, resetUserAnswer, clearAllUserAnswers } from "./utils/storage";

export default function App() {
	const [questions, setQuestions] = useState<Question[]>([]);
	const [bookmarks, setBookmarks] = useState<string[]>([]);
	const [userAnswers, setUserAnswers] = useState<UserAnswersMap>({});
	const [activeTab, setActiveTab] = useState<TabType>("home");

	useEffect(() => {
		setQuestions(getQuestions());
		setBookmarks(getBookmarks());
		setUserAnswers(getUserAnswers());
	}, []);

	const handleSelectOption = (questionId: string, selectedOption: number, session: string) => {
		const question = questions.find((q) => q.id === questionId);
		if (!question) return;
		const isCorrect = selectedOption === question.answer;
		const updatedAnswers = saveUserAnswer(questionId, selectedOption, isCorrect, session);
		setUserAnswers({ ...updatedAnswers });
	};

	const handleResetAnswer = (questionId: string) => {
		const updatedAnswers = resetUserAnswer(questionId);
		setUserAnswers({ ...updatedAnswers });
	};

	const handleResetAllAnswers = () => {
		const emptyAnswers = clearAllUserAnswers();
		setUserAnswers(emptyAnswers);
	};

	const handleToggleBookmark = (questionId: string) => {
		const updated = toggleBookmark(questionId);
		setBookmarks([...updated]);
	};

	const handleFinishQuiz = () => {
		setActiveTab("result");
	};

	const handleRetryWrongQuestions = () => {
		setActiveTab("wrong");
	};

	const pageTitle: Record<TabType, string> = {
		home: "메인 홈",
		random: "랜덤문제 풀이",
		quiz: "회차별 문제풀이",
		subject: "과목별 문제풀이",
		wrong: "오답노트",
		bookmark: "북마크 문제풀이",
		result: "풀이결과",
	};

	return (
		<div className="app-container">
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} bookmarkCount={bookmarks.length} />

			{activeTab !== "home" && (
				<div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
					<button
						onClick={() => setActiveTab("home")}
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
						← 홈으로
					</button>
					<h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-main)" }}>{pageTitle[activeTab]}</h2>
				</div>
			)}

			<main className="main-content">
				{activeTab === "home" && <Home setActiveTab={setActiveTab} questions={questions} userAnswers={userAnswers} bookmarkCount={bookmarks.length} />}

				{activeTab === "random" && (
					<RandomQuizSolver
						questions={questions}
						userAnswers={userAnswers}
						bookmarks={bookmarks}
						onSelectOption={handleSelectOption}
						onResetAnswer={handleResetAnswer}
						onToggleBookmark={handleToggleBookmark}
						onFinishQuiz={handleFinishQuiz}
					/>
				)}

				{activeTab === "quiz" && (
					<QuizSolver
						questions={questions}
						userAnswers={userAnswers}
						bookmarks={bookmarks}
						onSelectOption={handleSelectOption}
						onResetAnswer={handleResetAnswer}
						onToggleBookmark={handleToggleBookmark}
						onFinishQuiz={handleFinishQuiz}
					/>
				)}

				{activeTab === "subject" && (
					<SubjectQuizSolver
						questions={questions}
						userAnswers={userAnswers}
						bookmarks={bookmarks}
						onSelectOption={handleSelectOption}
						onResetAnswer={handleResetAnswer}
						onToggleBookmark={handleToggleBookmark}
						onFinishQuiz={handleFinishQuiz}
					/>
				)}

				{activeTab === "wrong" && (
					<WrongQuizSolver
						questions={questions}
						userAnswers={userAnswers}
						bookmarks={bookmarks}
						onSelectOption={handleSelectOption}
						onResetAnswer={handleResetAnswer}
						onToggleBookmark={handleToggleBookmark}
					/>
				)}

				{activeTab === "result" && <QuizResult questions={questions} userAnswers={userAnswers} onRetryWrongQuestions={handleRetryWrongQuestions} onResetAllAnswers={handleResetAllAnswers} />}

				{activeTab === "bookmark" && (
					<BookmarkList questions={questions} bookmarks={bookmarks} userAnswers={userAnswers} onSelectOption={handleSelectOption} onToggleBookmark={handleToggleBookmark} />
				)}
			</main>

			<footer style={{ marginTop: "40px", padding: "20px 0", textAlign: "center", color: "var(--text-dim)", fontSize: "0.85rem" }}>정보처리기사 필기 마스터 • TypeScript + Vite + React</footer>
		</div>
	);
}
