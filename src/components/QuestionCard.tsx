import React from "react";
import { Bookmark, CheckCircle2, XCircle, HelpCircle, Code2 } from "lucide-react";
import { Question, UserAnswerRecord } from "../types";

interface QuestionCardProps {
	question: Question;
	currentIndex: number;
	totalCount: number;
	userAnswer?: UserAnswerRecord;
	isBookmarked: boolean;
	onSelectOption: (optionNum: number) => void;
	onToggleBookmark: (questionId: string) => void;
}

export default function QuestionCard({ question, currentIndex, totalCount, userAnswer, isBookmarked, onSelectOption, onToggleBookmark }: QuestionCardProps) {
	if (!question) return null;

	const hasAnswered = userAnswer !== undefined && userAnswer !== null;
	const isCorrect = hasAnswered && userAnswer.selectedOption === question.answer;

	// question.id (예: "2025-1-21")의 마지막 숫자를 실제 문제 번호로 사용
	// 파싱에 실패할 경우에는 목록 내 순번(currentIndex + 1)으로 대체
	const idParts = question.id.split("-");
	const parsedNumber = parseInt(idParts[idParts.length - 1], 10);
	const displayNumber = !isNaN(parsedNumber) ? parsedNumber : currentIndex + 1;

	return (
		<div className="glass-card animate-fade-in" style={{ padding: "32px", position: "relative" }}>
			{/* Top Meta Bar */}
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
				<div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
					<span className="badge badge-session">{question.session}</span>
					<span className="badge badge-subject">{question.subjectName}</span>
					<span style={{ fontSize: "0.88rem", color: "var(--text-muted)", fontWeight: 600 }}>
						{currentIndex + 1} / {totalCount} 문제
					</span>
				</div>

				{/* 북마크 버튼 영역 (크기 확대 및 시인성 개선) */}
				<button
					className={`btn-icon ${isBookmarked ? "active-bookmark" : ""}`}
					onClick={() => onToggleBookmark(question.id)}
					title={isBookmarked ? "북마크 해제" : "북마크 추가"}
					style={{
						background: isBookmarked ? "rgba(234, 179, 8, 0.15)" : "rgba(255, 255, 255, 0.05)",
						border: "1px solid",
						borderColor: isBookmarked ? "rgba(234, 179, 8, 0.4)" : "var(--border-color)",
						borderRadius: "var(--radius-sm)",
						padding: "8px 12px",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						transition: "all 0.2s",
					}}
				>
					<Bookmark size={26} fill={isBookmarked ? "var(--bookmark)" : "none"} color={isBookmarked ? "var(--bookmark)" : "var(--text-muted)"} />
				</button>
			</div>

			{/* Question Text */}
			<h2 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text-main)", lineHeight: "1.6", marginBottom: "16px" }}>
				{displayNumber}. {question.question}
			</h2>

			{/* Optional Code Snippet */}
			{question.codeSnippet && (
				<div
					style={{
						background: "rgba(15, 23, 42, 0.95)",
						border: "1px solid rgba(255, 255, 255, 0.1)",
						borderRadius: "var(--radius-md)",
						padding: "16px 20px",
						marginBottom: "24px",
						fontFamily: "var(--font-mono)",
						fontSize: "0.9rem",
						color: "#38bdf8",
						overflowX: "auto",
					}}
				>
					<div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", marginBottom: "8px", fontSize: "0.8rem" }}>
						<Code2 size={14} /> 코드 예시
					</div>
					<pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>{question.codeSnippet}</pre>
				</div>
			)}

			{/* Optional Image (imgsrc가 존재할 경우 질문과 보기 사이에 표시) */}
			{question.imgsrc && (
				<div style={{ marginBottom: "24px", textAlign: "center" }}>
					<img
						src={question.imgsrc}
						alt="문제 관련 이미지"
						style={{
							maxWidth: "100%",
							maxHeight: "350px",
							borderRadius: "var(--radius-md)",
							border: "1px solid var(--border-color)",
							background: "rgba(255, 255, 255, 0.02)",
							padding: "8px",
						}}
					/>
				</div>
			)}

			{/* 4 Options */}
			<div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
				{question.options.map((optText, idx) => {
					const optionNum = idx + 1;
					let optionClass = "option-item";

					if (hasAnswered) {
						optionClass += " disabled";
						if (optionNum === question.answer) {
							optionClass += " correct-answer";
						} else if (userAnswer.selectedOption === optionNum) {
							optionClass += " wrong-answer";
						}
					}

					return (
						<div
							key={idx}
							className={optionClass}
							onClick={() => {
								if (!hasAnswered) {
									onSelectOption(optionNum);
								}
							}}
						>
							<div className="option-number">{optionNum}</div>
							<div style={{ flex: 1, fontSize: "0.98rem", paddingTop: "2px", color: "var(--text-main)" }}>{optText}</div>

							{/* Correct / Wrong Indicators */}
							{hasAnswered && optionNum === question.answer && (
								<div style={{ color: "var(--correct)", display: "flex", alignItems: "center", gap: "4px", fontWeight: 600, fontSize: "0.88rem" }}>
									<CheckCircle2 size={20} /> 정답
								</div>
							)}
							{hasAnswered && userAnswer.selectedOption === optionNum && optionNum !== question.answer && (
								<div style={{ color: "var(--wrong)", display: "flex", alignItems: "center", gap: "4px", fontWeight: 600, fontSize: "0.88rem" }}>
									<XCircle size={20} /> 내가 선택한 오답
								</div>
							)}
						</div>
					);
				})}
			</div>

			{/* Immediate Explanation Box */}
			{hasAnswered && (
				<div className="explanation-box animate-fade-in">
					<div className="explanation-header">
						<HelpCircle size={20} />
						<span>정답 및 해설</span>
						<span className={`badge ${isCorrect ? "badge-subject" : "badge-session"}`} style={{ marginLeft: "auto" }}>
							{isCorrect ? "⭕ 정답입니다!" : "❌ 틀렸습니다"}
						</span>
					</div>

					<div style={{ marginBottom: "8px", fontSize: "0.95rem", fontWeight: 600, color: "var(--correct)" }}>
						정답: {question.answer}번 ({question.options[question.answer - 1]})
					</div>

					<div className="explanation-content">{question.explanation}</div>
				</div>
			)}
		</div>
	);
}
