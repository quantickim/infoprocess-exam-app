import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Home, { TabType } from "./components/Home";
import RandomQuizSolver from "./components/RandomQuizSolver";
import QuizSolver from "./components/QuizSolver";
import SubjectQuizSolver from "./components/SubjectQuizSolver";
import QuizResult from "./components/QuizResult";
import BookmarkList from "./components/BookmarkList";
import WrongQuizSolver from "./components/WrongQuizSolver";
import CustomConfirmModal from "./components/CustomConfirmModal";
import { Question, UserAnswersMap } from "./types";
import { getQuestions, getBookmarks, toggleBookmark, getUserAnswers, saveUserAnswer, resetUserAnswer, getDailyStats, recordDailyAnswer, resetDailyStats, DailyStats } from "./utils/storage";

export default function App() {
	const [questions, setQuestions] = useState<Question[]>([]);
	const [bookmarks, setBookmarks] = useState<string[]>([]);
	const [userAnswers, setUserAnswers] = useState<UserAnswersMap>({});
	const [wrongAnswers, setWrongAnswers] = useState<string[]>([]);
	const [activeTab, setActiveTab] = useState<TabType>("home");
	const [wrongQuizSession, setWrongQuizSession] = useState<string>("all");
	const [dailyStats, setDailyStats] = useState<DailyStats>({ date: "", total: 0, correct: 0, wrong: 0 });

	// 제작자 정보 이스터에그 모달 상태
	const [isCreatorModalOpen, setIsCreatorModalOpen] = useState<boolean>(false);

	// 푸터 연타 감지용 타임스탬프 Ref
	const clickTimestampsRef = useRef<number[]>([]);

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
				.filter(([_, ans]) => !ans.isCorrect)
				.map(([id]) => String(id));
			localStorage.setItem("wrong_answers", JSON.stringify(savedWrong));
		}
		setWrongAnswers(savedWrong);
	}, []);

	const saveWrongAnswersToStorage = (updated: string[]) => {
		setWrongAnswers(updated);
		localStorage.setItem("wrong_answers", JSON.stringify(updated));
	};

	const handleQuizSelectOption = (questionId: string, selectedOption: number, session: string) => {
		const question = questions.find((q) => q.id === questionId);
		if (!question) return;
		const isCorrect = selectedOption === question.answer;

		const updatedAnswers = saveUserAnswer(questionId, selectedOption, isCorrect, session);
		setUserAnswers({ ...updatedAnswers });

		const updatedDaily = recordDailyAnswer(isCorrect);
		setDailyStats(updatedDaily);

		if (!isCorrect && !wrongAnswers.includes(String(questionId))) {
			saveWrongAnswersToStorage([...wrongAnswers, String(questionId)]);
		}
	};

	const handleOtherSelectOption = (questionId: string, selectedOption: number, session: string) => {
		const question = questions.find((q) => q.id === questionId);
		if (!question) return;
		const isCorrect = selectedOption === question.answer;

		const updatedDaily = recordDailyAnswer(isCorrect);
		setDailyStats(updatedDaily);

		if (!isCorrect && !wrongAnswers.includes(String(questionId))) {
			saveWrongAnswersToStorage([...wrongAnswers, String(questionId)]);
		}
	};

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

	// 푸터 연타 핸들러 (5초 이내 50회 클릭 시 이스터에그 모달 오픈)
	const handleFooterClick = () => {
		const now = Date.now();
		const recentClicks = clickTimestampsRef.current.filter((timestamp) => now - timestamp <= 5000);
		recentClicks.push(now);
		clickTimestampsRef.current = recentClicks;

		if (recentClicks.length >= 30) {
			setIsCreatorModalOpen(true);
			clickTimestampsRef.current = [];
		}
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

				{activeTab === "random" && (
					<RandomQuizSolver questions={questions} bookmarks={bookmarks} onSelectOption={handleOtherSelectOption} onToggleBookmark={handleToggleBookmark} onFinishQuiz={handleFinishQuiz} />
				)}

				{activeTab === "quiz" && (
					<QuizSolver
						questions={questions}
						userAnswers={userAnswers}
						bookmarks={bookmarks}
						onSelectOption={handleQuizSelectOption}
						onResetAnswer={handleResetAnswer}
						onToggleBookmark={handleToggleBookmark}
						onFinishQuiz={handleFinishQuiz}
					/>
				)}

				{activeTab === "subject" && (
					<SubjectQuizSolver questions={questions} bookmarks={bookmarks} onSelectOption={handleOtherSelectOption} onToggleBookmark={handleToggleBookmark} onFinishQuiz={handleFinishQuiz} />
				)}

				{activeTab === "wrong" && (
					<WrongQuizSolver
						questions={questions}
						wrongAnswers={wrongAnswers}
						bookmarks={bookmarks}
						initialSession={wrongQuizSession}
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

				{activeTab === "bookmark" && <BookmarkList questions={questions} bookmarks={bookmarks} onSelectOption={handleOtherSelectOption} onToggleBookmark={handleToggleBookmark} />}
			</main>

			<footer
				onClick={handleFooterClick}
				style={{
					padding: "70px 0",
					textAlign: "center",
					color: "var(--text-dim)",
					fontSize: "0.85rem",
					cursor: "pointer",
					userSelect: "none",
					WebkitUserSelect: "none",
					WebkitTapHighlightColor: "transparent",
				}}
			>
				정보처리기사 필기 마스터 • TypeScript + Vite + React
			</footer>

			{/* 제작자 정보 이스터에그 모달 */}
			<CustomConfirmModal
				isOpen={isCreatorModalOpen}
				type="info"
				title="개발자 정보 🚀"
				confirmText="확인"
				showCancel={false}
				onConfirm={() => setIsCreatorModalOpen(false)}
				onClose={() => setIsCreatorModalOpen(false)}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "12px",
						background: "rgba(15, 23, 42, 0.6)",
						padding: "16px",
						borderRadius: "var(--radius-md)",
						border: "1px solid var(--border-color)",
					}}
				>
					<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>만든이</span>
						<span style={{ fontSize: "1rem", color: "var(--text-main)", fontWeight: 700 }}>김형태</span>
					</div>
					<div style={{ height: "1px", background: "var(--border-color)" }} />
					<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>Email</span>
						<a href="mailto:quantickim@gmail.com" style={{ fontSize: "0.9rem", color: "#38bdf8", textDecoration: "none", fontWeight: 600 }}>
							quantickim@gmail.com
						</a>
					</div>
				</div>
			</CustomConfirmModal>
		</div>
	);
}
