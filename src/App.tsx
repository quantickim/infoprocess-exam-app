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
import {
	getQuestions,
	getBookmarks,
	toggleBookmark,
	getUserAnswers,
	saveUserAnswer,
	resetUserAnswer,
	clearAllUserAnswers,
	getDailyStats,
	recordDailyAnswer,
	resetDailyStats,
	DailyStats,
} from "./utils/storage";

export default function App() {
	const [questions, setQuestions] = useState<Question[]>([]);
	const [bookmarks, setBookmarks] = useState<string[]>([]);
	const [userAnswers, setUserAnswers] = useState<UserAnswersMap>({});
	const [wrongAnswers, setWrongAnswers] = useState<string[]>([]);
	const [activeTab, setActiveTab] = useState<TabType>("home");
	const [wrongQuizSession, setWrongQuizSession] = useState<string>("all");

	// 💡 당일 측정 데이터 상태
	const [dailyStats, setDailyStats] = useState<DailyStats>({ date: "", total: 0, correct: 0, wrong: 0 });

	useEffect(() => {
		const loadedQuestions = getQuestions();
		const loadedBookmarks = getBookmarks();
		const loadedUserAnswers = getUserAnswers();
		const loadedDailyStats = getDailyStats();

		setQuestions(loadedQuestions);
		setBookmarks(loadedBookmarks);
		setUserAnswers(loadedUserAnswers);
		setDailyStats(loadedDailyStats);

		let savedWrong: string[] = [];
		const storedWrong = localStorage.getItem("wrong_answers");

		if (storedWrong) {
			try {
				savedWrong = JSON.parse(storedWrong);
			} catch (e) {
				savedWrong = [];
			}
		} else {
			savedWrong = Object.entries(loadedUserAnswers)
				.filter(([id, ans]) => !ans.isCorrect)
				.map(([id]) => String(id));
			localStorage.setItem("wrong_answers", JSON.stringify(savedWrong));
		}
		setWrongAnswers(savedWrong);
	}, []);

	const saveWrongAnswersToStorage = (updated: string[]) => {
		setWrongAnswers(updated);
		localStorage.setItem("wrong_answers", JSON.stringify(updated));
	};

	const handleSelectOption = (questionId: string, selectedOption: number, session: string) => {
		const question = questions.find((q) => q.id === questionId);
		if (!question) return;
		const isCorrect = selectedOption === question.answer;

		// 1. 회차 풀이 기록 저장
		const updatedAnswers = saveUserAnswer(questionId, selectedOption, isCorrect, session);
		setUserAnswers({ ...updatedAnswers });

		// 2. 💡 당일 풀이 측정 데이터 집계
		const updatedDaily = recordDailyAnswer(isCorrect);
		setDailyStats(updatedDaily);

		// 3. 틀린 경우 독립된 오답노트 목록에 추가
		if (!isCorrect) {
			if (!wrongAnswers.includes(String(questionId))) {
				saveWrongAnswersToStorage([...wrongAnswers, String(questionId)]);
			}
		}
	};

	// 💡 당일 측정 데이터 초기화 버튼 핸들러
	const handleResetDailyStats = () => {
		const reset = resetDailyStats();
		setDailyStats(reset);
	};

	const handleRemoveWrongAnswer = (questionId: string) => {
		const updated = wrongAnswers.filter((id) => id !== String(questionId));
		saveWrongAnswersToStorage(updated);
	};

	const handleResetAnswer = (questionId: string) => {
		const updatedAnswers = resetUserAnswer(questionId);
		setUserAnswers({ ...updatedAnswers });
	};

	const handleResetAllAnswers = () => {
		const emptyAnswers = clearAllUserAnswers();
		setUserAnswers(emptyAnswers);
	};

	const handleResetSessionAnswers = (sessionName: string) => {
		const sessionQuestionIds = questions.filter((q) => q.session === sessionName).map((q) => q.id);

		let updated = { ...userAnswers };
		sessionQuestionIds.forEach((id) => {
			updated = resetUserAnswer(id);
		});
		setUserAnswers({ ...updated });
	};

	const handleToggleBookmark = (questionId: string) => {
		const updated = toggleBookmark(questionId);
		setBookmarks([...updated]);
	};

	const handleFinishQuiz = () => {
		setActiveTab("result");
	};

	const handleRetryWrongQuestions = (sessionName?: string) => {
		setWrongQuizSession(sessionName || "all");
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
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

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
				{activeTab === "home" && (
					<Home
						setActiveTab={setActiveTab}
						questions={questions}
						userAnswers={userAnswers}
						bookmarkCount={bookmarks.length}
						wrongAnswers={wrongAnswers}
						dailyStats={dailyStats}
						onResetDailyStats={handleResetDailyStats}
					/>
				)}

				{/* ... 다른 solver 태그들은 기존과 동일 */}
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
						wrongAnswers={wrongAnswers}
						bookmarks={bookmarks}
						initialSession={wrongQuizSession}
						onSelectOption={handleSelectOption}
						onRemoveWrongAnswer={handleRemoveWrongAnswer}
						onToggleBookmark={handleToggleBookmark}
					/>
				)}

				{activeTab === "result" && (
					<QuizResult
						questions={questions}
						userAnswers={userAnswers}
						wrongAnswers={wrongAnswers}
						onRetryWrongQuestions={handleRetryWrongQuestions}
						onResetSessionAnswers={handleResetSessionAnswers}
					/>
				)}

				{activeTab === "bookmark" && (
					<BookmarkList
						questions={questions}
						bookmarks={bookmarks}
						userAnswers={userAnswers}
						onSelectOption={handleSelectOption}
						onResetAnswer={handleResetAnswer}
						onToggleBookmark={handleToggleBookmark}
					/>
				)}
			</main>

			<footer style={{ marginTop: "40px", padding: "20px 0", textAlign: "center", color: "var(--text-dim)", fontSize: "0.85rem" }}>정보처리기사 필기 마스터 • TypeScript + Vite + React</footer>
		</div>
	);
}
