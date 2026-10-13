import React, { useEffect, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Question, UserAnswerRecord } from "../types";
import { gradeChoice } from "../utils/grading";

interface ChoiceAnswerProps {
	question: Question;
	userAnswer?: UserAnswerRecord;
	onSubmitAnswer: (inputs: string[], isCorrect: boolean, manual: boolean) => void;
}

// "㉣ Full"처럼 기호가 붙은 보기는 기호를, 그 외에는 보기 전체를 답안 값으로 사용
export const choiceValue = (choice: string) => choice.match(/^([㉠-㉿])\s/)?.[1] ?? choice;

// 답안 값("㉣")을 화면 표시용 보기 전체("㉣ Full")로 변환
export const choiceText = (question: Question, value: string) => question.choices?.find((c) => choiceValue(c) === value) ?? value;

// 보기 선택형 답안 영역: 빈칸 1개는 터치 즉시 채점, 빈칸 여러 개는 칸을 채운 뒤 채점, '모두 고르기'는 다중 선택
export default function ChoiceAnswer({ question, userAnswer, onSubmitAnswer }: ChoiceAnswerProps) {
	const choices = question.choices ?? [];
	const isMultiSelect = question.unordered === true;
	const isSingle = !isMultiSelect && question.blanks.length === 1;
	const isSlotMode = !isSingle && !isMultiSelect;
	const isCodeOutput = question.type !== "text" && question.language !== undefined;
	// 문장이나 줄이 긴 코드 출력은 한 줄에 하나씩, 짧은 보기는 2열로 표시
	const longestLine = Math.max(...choices.flatMap((c) => c.split("\n").map((line) => line.length)));
	const isWide = longestLine > (isCodeOutput ? 14 : 22);
	const hasAnswered = userAnswer !== undefined && userAnswer !== null;

	const initialSelection = () => (isMultiSelect ? userAnswer?.inputs ?? [] : question.blanks.map((_, i) => userAnswer?.inputs[i] ?? ""));
	const [selected, setSelected] = useState<string[]>(initialSelection);
	const [activeSlot, setActiveSlot] = useState<number>(0);

	// 문제가 바뀌거나 다시풀기로 기록이 지워지면 선택 초기화
	useEffect(() => {
		setSelected(initialSelection());
		setActiveSlot(0);
	}, [question.id, userAnswer]);

	const answerValues = question.blanks.flatMap((b) => [b.answer, ...(b.accepts ?? [])]);
	const slotResults = hasAnswered && !isMultiSelect ? gradeChoice(question, userAnswer.inputs).blankResults : null;
	const slotLabel = (i: number) => question.blanks[i].label ?? String(i + 1);

	const handleChoice = (value: string) => {
		if (hasAnswered) return;

		if (isSingle) {
			onSubmitAnswer([value], gradeChoice(question, [value]).isCorrect, false);
			return;
		}

		if (isMultiSelect) {
			setSelected((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
			return;
		}

		// 현재 칸을 채우고 다음 빈 칸으로 이동
		const next = selected.map((v, i) => (i === activeSlot ? value : v));
		setSelected(next);
		const nextEmptyAfter = next.findIndex((v, i) => i > activeSlot && !v);
		const firstEmpty = next.findIndex((v) => !v);
		setActiveSlot(nextEmptyAfter !== -1 ? nextEmptyAfter : firstEmpty !== -1 ? firstEmpty : activeSlot);
	};

	const handleSubmit = () => {
		// 다중 선택은 보기 순서대로 정렬해서 기록
		const inputs = isMultiSelect ? choices.map(choiceValue).filter((v) => selected.includes(v)) : selected;
		onSubmitAnswer(inputs, gradeChoice(question, inputs).isCorrect, false);
	};

	const canSubmit = isMultiSelect ? selected.length > 0 : selected.every(Boolean);
	const userValues = hasAnswered ? userAnswer.inputs : selected;

	let hint = "보기를 터치하면 바로 채점됩니다";
	if (isMultiSelect) hint = "해당하는 보기를 모두 고른 뒤 채점하세요";
	else if (!isSingle) hint = "빈칸을 고르고 보기를 터치해 채우세요";

	return (
		<div className="choice-area">
			<div className="choices-title">
				&lt;보기&gt;
				{!hasAnswered && <span className="answer-hint">{hint}</span>}
			</div>

			{/* 빈칸 여러 개: 채울 칸 선택 */}
			{!isSingle && !isMultiSelect && (
				<div className="choice-slots">
					{question.blanks.map((_, i) => {
						const result = slotResults?.[i];
						let stateClass = !hasAnswered && i === activeSlot ? " active" : "";
						if (result !== undefined) stateClass = result ? " correct" : " wrong";

						return (
							<button key={i} type="button" className={`choice-slot${stateClass}`} disabled={hasAnswered} onClick={() => setActiveSlot(i)}>
								<span className="blank-label">{slotLabel(i)}</span>
								<span className={userValues[i] ? "" : "choice-slot-empty"}>{userValues[i] ? choiceText(question, userValues[i]) : "선택"}</span>
								{result !== undefined && (
									<span className="blank-result" style={{ marginLeft: "auto", color: result ? "var(--correct)" : "var(--wrong)" }}>
										{result ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
									</span>
								)}
							</button>
						);
					})}
				</div>
			)}

			<div className={`choice-grid${isWide ? " wide" : ""}`}>
				{choices.map((choice) => {
					const value = choiceValue(choice);
					const isPicked = userValues.includes(value);
					const isAnswer = answerValues.includes(value);
					// 빈칸 여러 개: 정오는 위쪽 ①② 칸에만 표시하고 보기 목록에는 색을 칠하지 않음
					const showResultOnOption = hasAnswered && !isSlotMode;

					let stateClass = "";
					if (showResultOnOption) {
						if (isAnswer) stateClass = " correct-answer";
						else if (isPicked) stateClass = " wrong-answer";
						else stateClass = " dimmed";
					} else if (isPicked && !hasAnswered) {
						stateClass = " selected";
					}

					// 빈칸 여러 개: 선택 중에만 내가 채운 칸 번호를 표시
					const tags = isSlotMode && !hasAnswered ? question.blanks.map((_, i) => (userValues[i] === value ? slotLabel(i) : "")).filter(Boolean) : [];

					return (
						<button key={choice} type="button" className={`choice-option${stateClass}`} disabled={hasAnswered} onClick={() => handleChoice(value)}>
							{isCodeOutput ? <pre className="choice-option-text choice-pre">{choice}</pre> : <span className={`choice-option-text${question.language ? " choice-mono" : ""}`}>{choice}</span>}
							{/* 칸 번호와 정오 아이콘은 모서리 배지로 표시해 좁은 화면에서도 보기 글자 폭을 확보 */}
							{(tags.length > 0 || (showResultOnOption && (isAnswer || isPicked))) && (
								<span className="choice-corner">
									{tags.length > 0 && <span className="choice-tags">{tags.join(" ")}</span>}
									{showResultOnOption && isAnswer && <CheckCircle2 size={18} color="var(--correct)" className="choice-corner-icon" />}
									{showResultOnOption && !isAnswer && isPicked && <XCircle size={18} color="var(--wrong)" className="choice-corner-icon" />}
								</span>
							)}
						</button>
					);
				})}
			</div>

			{!hasAnswered && !isSingle && (
				<div className="answer-actions">
					<button className="btn-primary answer-submit" onClick={handleSubmit} disabled={!canSubmit} style={{ opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? "pointer" : "not-allowed" }}>
						채점하기
					</button>
					{isMultiSelect && <span className="answer-hint">{selected.length}개 선택</span>}
				</div>
			)}
		</div>
	);
}
