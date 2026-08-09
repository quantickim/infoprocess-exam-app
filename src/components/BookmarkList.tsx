import React, { useState, useMemo, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { Bookmark, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { Question, UserAnswerRecord } from "../types";
import { SUBJECTS } from "../utils/storage";

interface BookmarkListProps {
	questions: Question[];
	bookmarks: string[];
	onSelectOption: (questionId: string, selectedOption: number, session: string) => void;
	onToggleBookmark: (questionId: string) => void;
}

export default function BookmarkList({ questions, bookmarks, onSelectOption, onToggleBookmark }: BookmarkListProps) {
	const [selectedSubject, setSelectedSubject] = useState<number>(0);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [localAnswers, setLocalAnswers] = useState<Record<string, UserAnswerRecord>>({});

	const bookmarkedQuestions = useMemo(() => {
		const strBookmarks = bookmarks.map(String);
		return questions.filter((q) => strBookmarks.includes(String(q.id)));
	}, [questions, bookmarks]);

	const filteredBookmarked = useMemo(() => {
		if (selectedSubject === 0) return bookmarkedQuestions;
		return bookmarkedQuestions.filter((q) => q.subjectId === selectedSubject);
	}, [bookmarkedQuestions, selectedSubject]);

	const handleSubjectChange = (subjectId: number) => {
		setSelectedSubject(subjectId);
		setCurrentIndex(0);
	};

	useEffect(() => {
		if (currentIndex >= filteredBookmarked.length && filteredBookmarked.length > 0) {
			setCurrentIndex(filteredBookmarked.length - 1);
		}
	}, [filteredBookmarked.length, currentIndex]);

	if (bookmarkedQuestions.length === 0) {
		return (
			<div className="glass-card animate-fade-in" style={{ padding: "60px", textAlign: "center" }}>
				<Bookmark size={48} style={{ color: "var(--bookmark)", marginBottom: "16px" }} />
				<h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>북마크한 문제가 없습니다.</h3>
				<p style={{ color: "var(--text-muted)" }}>문제 풀이 중 중요하거나 헷갈리는 문제의 오른쪽 상단 북마크 아이콘을 눌러 추가해보세요!</p>
			</div>
		);
	}

	const currentQuestion = filteredBookmarked[currentIndex];
	const currentLocalAnswer = currentQuestion ? localAnswers[currentQuestion.id] : undefined;
	const isBookmarked = currentQuestion ? bookmarks.map(String).includes(String(currentQuestion.id)) : false;
	const progressPercent = filteredBookmarked.length > 0 ? Math.round(((currentIndex + 1) / filteredBookmarked.length) * 100) : 0;

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
		<div style={{ display: "flex", flexDirection: "column", gap: "10px" }} className="animate-fade-in">
			{/* Header Bar */}
			<div className="glass-card" style={{ padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
				<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
					<Bookmark size={22} color="var(--bookmark)" fill="var(--bookmark)" />
					<h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>북마크 문제 모음 ({filteredBookmarked.length}개)</h3>
				</div>

				{/* Subject Filter */}
				<div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
					<button className={`nav-btn ${selectedSubject === 0 ? "active" : ""}`} onClick={() => handleSubjectChange(0)} style={{ padding: "6px 12px", fontSize: "0.85rem" }}>
						전체
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

			{filteredBookmarked.length === 0 ? (
				<div className="glass-card" style={{ padding: "60px", textAlign: "center" }}>
					<h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>선택한 과목에 저장된 북마크 문제가 없습니다.</h3>
					<p style={{ color: "var(--text-muted)" }}>다른 과목 필터를 선택해 주세요.</p>
				</div>
			) : (
				<>
					{/* Progress Bar */}
					<div style={{ background: "rgba(255, 255, 255, 0.05)", height: "6px", borderRadius: "3px", overflow: "hidden" }}>
						<div
							style={{
								height: "100%",
								width: `${progressPercent}%`,
								background: "linear-gradient(90deg, #eab308, #ca8a04)",
								transition: "width 0.3s ease",
							}}
						/>
					</div>

					{/* Current Question Card */}
					<QuestionCard
						question={currentQuestion}
						currentIndex={currentIndex}
						totalCount={filteredBookmarked.length}
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

							<button
								className="btn-primary"
								onClick={() => setCurrentIndex((prev) => Math.min(filteredBookmarked.length - 1, prev + 1))}
								disabled={currentIndex === filteredBookmarked.length - 1}
								style={{
									background: "linear-gradient(135deg, #eab308, #ca8a04)",
									opacity: currentIndex === filteredBookmarked.length - 1 ? 0.5 : 1,
									cursor: currentIndex === filteredBookmarked.length - 1 ? "not-allowed" : "pointer",
								}}
							>
								다음문제
								<ChevronRight size={18} />
							</button>
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
				</>
			)}
		</div>
	);
}
