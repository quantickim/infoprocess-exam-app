import React, { useEffect, useRef, useState } from "react";
import { Bookmark, CheckCircle2, XCircle, HelpCircle, Code2, PenLine, ThumbsUp, ThumbsDown, BadgeCheck } from "lucide-react";
import { ContentBlock, Question, UserAnswerRecord } from "../types";
import { formatScore, gradeAnswer, scoreAnswer } from "../utils/grading";
import ChoiceAnswer, { choiceText } from "./ChoiceAnswer";

interface QuestionCardProps {
	question: Question;
	currentIndex: number;
	totalCount: number;
	userAnswer?: UserAnswerRecord;
	isBookmarked: boolean;
	onSubmitAnswer: (inputs: string[], isCorrect: boolean, manual: boolean) => void;
	onMarkCorrect: () => void;
	onToggleBookmark: (questionId: string) => void;
}

const LANGUAGE_LABEL: Record<string, string> = { c: "C", java: "Java", python: "Python", sql: "SQL" };

function renderBlock(block: ContentBlock, idx: number) {
	if (block.type === "text") {
		return (
			<div key={idx} className="passage-box">
				{block.text}
			</div>
		);
	}

	if (block.type === "table") {
		return (
			<div key={idx} className="q-table-wrap">
				<table className={`q-table${block.headers ? "" : " desc"}`}>
					{block.caption && <caption>{block.caption}</caption>}
					{block.headers && (
						<thead>
							<tr>
								{block.headers.map((h, i) => (
									<th key={i}>{h}</th>
								))}
							</tr>
						</thead>
					)}
					<tbody>
						{block.rows.map((row, r) => (
							<tr key={r}>
								{row.map((cell, c) => (
									<td key={c}>{cell}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}

	return (
		<div key={idx} style={{ marginBottom: "16px", textAlign: "center" }}>
			<img src={`${import.meta.env.BASE_URL}${block.src.replace(/^\//, "")}`} alt={block.alt ?? "문제 이미지"} className="q-image" />
		</div>
	);
}

export default function QuestionCard({ question, currentIndex, totalCount, userAnswer, isBookmarked, onSubmitAnswer, onMarkCorrect, onToggleBookmark }: QuestionCardProps) {
	const [inputs, setInputs] = useState<string[]>(() => question.blanks.map((_, i) => userAnswer?.inputs[i] ?? ""));
	// 서술형: 정답을 확인했지만 아직 스스로 채점하지 않은 상태
	const [revealed, setRevealed] = useState<boolean>(false);
	const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement | null)[]>([]);
	const resultRef = useRef<HTMLDivElement>(null);

	const hasAnswered = userAnswer !== undefined && userAnswer !== null;
	const showResult = hasAnswered || revealed;
	const prevShowResultRef = useRef<boolean>(showResult);

	// 문제가 바뀌거나 다시풀기로 기록이 지워지면 입력값 초기화
	useEffect(() => {
		setInputs(question.blanks.map((_, i) => userAnswer?.inputs[i] ?? ""));
		setRevealed(false);
	}, [question.id, userAnswer]);

	// 채점 직후: 모바일 키보드를 닫고 정답·해설이 보이도록 스크롤
	useEffect(() => {
		if (showResult && !prevShowResultRef.current) {
			(document.activeElement as HTMLElement | null)?.blur();
			resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
		}
		prevShowResultRef.current = showResult;
	}, [showResult]);

	if (!question) return null;

	const isEssay = question.type === "essay";
	// 보기가 있는 문제는 보기를 터치해서 고르는 선택형으로 풀이
	const isChoice = !!question.choices?.length;
	const isMultiline = question.type !== "text";
	const isLocked = hasAnswered || revealed;

	// 자동 채점된 답안은 빈칸별 정오를 다시 계산해서 표시
	const grade = hasAnswered && !userAnswer.manual && !isEssay ? gradeAnswer(question, userAnswer.inputs) : null;

	// question.id가 숫자일 경우를 대비해 String으로 명시적 변환
	const idStr = String(question.id);
	const idParts = idStr.split("-");
	const parsedNumber = parseInt(idParts[idParts.length - 1], 10);
	const displayNumber = !isNaN(parsedNumber) ? parsedNumber : currentIndex + 1;

	const blankLabel = (i: number) => question.blanks[i].label ?? (question.blanks.length > 1 ? String(i + 1) : "");
	const isAllEmpty = inputs.every((v) => v.trim() === "");

	const handleChange = (idx: number, value: string) => {
		setInputs((prev) => prev.map((v, i) => (i === idx ? value : v)));
	};

	const handleSubmit = () => {
		if (isLocked) return;
		if (isEssay) {
			setRevealed(true);
			return;
		}
		onSubmitAnswer(inputs, gradeAnswer(question, inputs).isCorrect, false);
	};

	// 한글 조합 중 Enter는 무시 (조합 확정용 Enter로 채점되는 것 방지)
	const isComposingEnter = (e: React.KeyboardEvent) => e.nativeEvent.isComposing || e.keyCode === 229;

	const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
		if (e.key !== "Enter" || isComposingEnter(e)) return;
		e.preventDefault();
		if (idx < question.blanks.length - 1) {
			inputRefs.current[idx + 1]?.focus();
		} else {
			handleSubmit();
		}
	};

	const handleTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && (e.ctrlKey || e.metaKey) && !isComposingEnter(e)) {
			e.preventDefault();
			handleSubmit();
		}
	};

	const renderAnswer = () => {
		const answer = question.blanks[0].answer;
		if (question.type === "code" || (isEssay && question.language)) {
			return <pre className="answer-pre">{answer}</pre>;
		}
		if (isEssay) {
			return <div className="answer-text">{answer}</div>;
		}
		return (
			<ul className="answer-list">
				{question.blanks.map((blank, i) => (
					<li key={i}>
						{blankLabel(i) && <span className="blank-label">{blankLabel(i)}</span>}
						<span>{choiceText(question, blank.answer)}</span>
					</li>
				))}
			</ul>
		);
	};

	let resultBadge: React.ReactNode = <span className="badge badge-session" style={{ marginLeft: "auto" }}>✍️ 스스로 채점해 보세요</span>;
	if (hasAnswered) {
		// 빈칸 여러 개 중 일부만 맞힌 경우 부분 점수 표시
		const partial = userAnswer.isCorrect ? 0 : scoreAnswer(question, userAnswer) * question.blanks.length;
		let badgeText = "❌ 틀렸습니다";
		if (userAnswer.isCorrect) badgeText = userAnswer.manual ? "⭕ 정답 처리" : "⭕ 정답입니다!";
		else if (partial > 0) badgeText = `🔺 부분 정답 (${formatScore(partial)}/${question.blanks.length})`;
		resultBadge = (
			<span className={`badge ${userAnswer.isCorrect ? "badge-subject" : "badge-session"}`} style={{ marginLeft: "auto" }}>
				{badgeText}
			</span>
		);
	}

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

				{/* 북마크 버튼 영역 (String 타입으로 일치시켜 핸들러 호출) */}
				<button
					className={`btn-icon ${isBookmarked ? "active-bookmark" : ""}`}
					onClick={() => onToggleBookmark(idStr)}
					title={isBookmarked ? "북마크 해제" : "북마크 추가"}
					style={{
						background: isBookmarked ? "rgba(234, 179, 8, 0.15)" : "rgba(255, 255, 255, 0.05)",
						border: "1px solid",
						borderColor: isBookmarked ? "rgba(234, 179, 8, 0.4)" : "var(--border-color)",
						borderRadius: "var(--radius-sm)",
						padding: "8px",
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

			{/* Question Text (💡 whiteSpace: "pre-line" 적용) */}
			<h2 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text-main)", lineHeight: "1.6", marginBottom: "16px", whiteSpace: "pre-line" }}>
				{displayNumber}. {question.question}
			</h2>

			{/* 지문, 표, 그림 */}
			{question.blocks?.map(renderBlock)}

			{/* Optional Code Snippet */}
			{question.codeSnippet && (
				<div className="code-box">
					<div className="code-box-header">
						<Code2 size={14} /> {question.language ? LANGUAGE_LABEL[question.language] : "코드"}
					</div>
					<pre>{question.codeSnippet}</pre>
				</div>
			)}

			{/* <보기> (선택형 문제는 아래 답안 영역에서 보기를 직접 터치하므로 표시하지 않음) */}
			{question.choices && !isChoice && (
				<div className="choices-box">
					<div className="choices-title">&lt;보기&gt;</div>
					<div className="choices-list">
						{question.choices.map((choice, i) => (
							<span key={i} className="choice-chip">
								{choice}
							</span>
						))}
					</div>
				</div>
			)}

			{/* 답안 입력 영역 */}
			{isChoice ? (
				<ChoiceAnswer question={question} userAnswer={userAnswer} onSubmitAnswer={onSubmitAnswer} />
			) : (
				<div className="answer-area">
					<div className="answer-area-title">
						<PenLine size={16} />
						{isEssay ? "답안 작성 (서술형 · 스스로 채점)" : question.type === "code" ? "실행 결과 입력" : "답안 입력"}
						{question.unordered && <span className="answer-hint">순서는 상관없습니다</span>}
					</div>

					{question.blanks.map((_, i) => {
						const label = blankLabel(i);
						const blankResult = grade?.blankResults[i];
						const stateClass = blankResult === undefined ? "" : blankResult ? " correct" : " wrong";
						const commonProps = {
							value: inputs[i] ?? "",
							disabled: isLocked,
							autoComplete: "off",
							autoCapitalize: "off",
							autoCorrect: "off",
							spellCheck: false,
						};

						return (
							<div key={i} className="blank-row">
								{label && <span className="blank-label">{label}</span>}
								{isMultiline ? (
									<textarea
										{...commonProps}
										ref={(el) => (inputRefs.current[i] = el)}
										className={`answer-input${question.type === "code" ? " mono" : ""}${stateClass}`}
										rows={question.type === "code" ? 4 : 3}
										placeholder={question.type === "code" ? "실행 결과를 입력하세요 (여러 줄이면 줄을 바꿔 입력)" : "답안을 작성해 보세요 (비워 두고 정답을 확인해도 됩니다)"}
										onChange={(e) => handleChange(i, e.target.value)}
										onKeyDown={handleTextareaKeyDown}
									/>
								) : (
									<input
										{...commonProps}
										ref={(el) => (inputRefs.current[i] = el)}
										type="text"
										enterKeyHint={i < question.blanks.length - 1 ? "next" : "done"}
										className={`answer-input${question.language ? " mono" : ""}${stateClass}`}
										placeholder="정답 입력"
										onChange={(e) => handleChange(i, e.target.value)}
										onKeyDown={(e) => handleInputKeyDown(e, i)}
									/>
								)}
								{blankResult !== undefined && (
									<span className="blank-result" style={{ color: blankResult ? "var(--correct)" : "var(--wrong)" }}>
										{blankResult ? <CheckCircle2 size={22} /> : <XCircle size={22} />}
									</span>
								)}
							</div>
						);
					})}

					{!isLocked && (
						<div className="answer-actions">
							<button className="btn-primary answer-submit" onClick={handleSubmit}>
								{isEssay ? "정답 확인" : isAllEmpty ? "정답 보기" : "채점하기"}
							</button>
							{!isEssay && (
								<span className="answer-hint answer-key-hint">{isMultiline ? "Ctrl(⌘) + Enter로 채점" : question.blanks.length > 1 ? "Enter로 다음 칸 이동 · 마지막 칸에서 채점" : "Enter로 채점"}</span>
							)}
						</div>
					)}
				</div>
			)}

			{/* 정답 및 해설 */}
			{showResult && (
				<div ref={resultRef} className="explanation-box animate-fade-in" style={{ scrollMarginBottom: "16px" }}>
					<div className="explanation-header">
						<HelpCircle size={20} />
						<span>정답 및 해설</span>
						{resultBadge}
					</div>

					<div style={{ marginBottom: "8px", fontSize: "0.88rem", fontWeight: 700, color: "var(--text-muted)" }}>{isEssay ? "모범 답안" : "정답"}</div>
					{renderAnswer()}

					{/* 서술형: 정답 확인 후 스스로 채점 */}
					{!hasAnswered && revealed && (
						<div className="answer-actions" style={{ marginBottom: "16px" }}>
							<button className="btn-primary answer-submit" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }} onClick={() => onSubmitAnswer(inputs, true, true)}>
								<ThumbsUp size={18} />
								맞았어요
							</button>
							<button className="btn-secondary answer-submit" style={{ color: "var(--wrong)", borderColor: "var(--wrong-border)" }} onClick={() => onSubmitAnswer(inputs, false, true)}>
								<ThumbsDown size={18} />
								틀렸어요
							</button>
						</div>
					)}

					{/* 자동 채점 오답: 표현 차이로 틀린 경우 직접 정답 처리 (선택형은 표현 차이가 없으므로 제외) */}
					{hasAnswered && !userAnswer.isCorrect && !isEssay && !isChoice && (
						<div className="answer-actions" style={{ marginBottom: "16px" }}>
							<button className="btn-secondary answer-submit" onClick={onMarkCorrect}>
								<BadgeCheck size={18} />
								정답으로 인정하기
							</button>
							<span className="answer-hint">같은 뜻인데 표현이 달라 오답 처리되었다면 눌러 주세요</span>
						</div>
					)}

					<div className="explanation-content">{question.explanation}</div>
				</div>
			)}
		</div>
	);
}
