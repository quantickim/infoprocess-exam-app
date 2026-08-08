import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { Bookmark } from "lucide-react";
import { Question, UserAnswersMap } from "../types";
import { SUBJECTS } from "../utils/storage";
interface BookmarkListProps {
	questions: Question[];
	bookmarks: string[];
	userAnswers: UserAnswersMap;
	onSelectOption: (questionId: string, selectedOption: number, session: string) => void;
	onToggleBookmark: (questionId: string) => void;
}

export default function BookmarkList({ questions, bookmarks, userAnswers, onSelectOption, onToggleBookmark }: BookmarkListProps) {
	const [selectedSubject, setSelectedSubject] = useState<number>(0);

	const bookmarkedQuestions = questions.filter((q) => bookmarks.includes(q.id));
	const filteredBookmarked = bookmarkedQuestions.filter((q) => {
		return selectedSubject === 0 || q.subjectId === selectedSubject;
	});

	if (bookmarks.length === 0) {
		return (
			<div className="glass-card animate-fade-in" style={{ padding: "60px", textAlign: "center" }}>
				<Bookmark size={48} style={{ color: "var(--bookmark)", marginBottom: "16px" }} />
				<h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>북마크한 문제가 없습니다.</h3>
				<p style={{ color: "var(--text-muted)" }}>문제 풀이 중 중요하거나 헷갈리는 문제의 오른쪽 상단 북마크 아이콘을 눌러 추가해보세요!</p>
			</div>
		);
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="animate-fade-in">
			{/* Header Bar */}
			<div className="glass-card" style={{ padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
				<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
					<Bookmark size={22} color="var(--bookmark)" fill="var(--bookmark)" />
					<h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>북마크 문제 모음 ({filteredBookmarked.length}개)</h3>
				</div>

				{/* Subject Filter */}
				<div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
					<button className={`nav-btn ${selectedSubject === 0 ? "active" : ""}`} onClick={() => setSelectedSubject(0)} style={{ padding: "6px 12px", fontSize: "0.85rem" }}>
						전체 과목
					</button>
					{SUBJECTS.map((sub) => (
						<button
							key={sub.id}
							className={`nav-btn ${selectedSubject === sub.id ? "active" : ""}`}
							onClick={() => setSelectedSubject(sub.id)}
							style={{ padding: "6px 12px", fontSize: "0.85rem" }}
						>
							{sub.id}과목
						</button>
					))}
				</div>
			</div>

			{/* Bookmarked Questions List */}
			<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
				{filteredBookmarked.map((question, index) => {
					const uAns = userAnswers[question.id];
					return (
						<QuestionCard
							key={question.id}
							question={question}
							currentIndex={index}
							totalCount={filteredBookmarked.length}
							userAnswer={uAns}
							isBookmarked={true}
							onSelectOption={(optNum) => onSelectOption(question.id, optNum, question.session)}
							onToggleBookmark={onToggleBookmark}
						/>
					);
				})}
			</div>
		</div>
	);
}
