import { AnswerBlank, Question } from "../types";

export interface GradeResult {
	isCorrect: boolean;
	blankResults: boolean[];
}

// 입력 앞에 붙인 원문자 라벨 제거 (예: "① 기능" → "기능")
const stripLeadingLabel = (s: string) => s.replace(/^\s*[①-⑳]\s*[:.)]?\s*/, "");

// 공백 제거 + 호환 문자 정규화 (㉠ → ㄱ, ① → 1, 전각 → 반각)
const basic = (s: string, strict: boolean) => {
	const normalized = s.normalize("NFKC").replace(/\s+/g, "");
	return strict ? normalized : normalized.toLowerCase();
};

// 괄호, 하이픈, 마침표 등 구두점까지 제거한 느슨한 비교용 문자열
const loose = (s: string) => s.replace(/[()[\]{}\-_.,·'"`‘’“”:;!?~]/g, "");

// "한글(English)" 형태의 정답은 한글, 영문, 전체 표기를 모두 인정
const expandVariants = (answer: string): string[] => {
	const match = answer.match(/^(.+?)\s*\((.+)\)$/);
	if (!match) return [answer];
	return [answer, ...[match[1], match[2]].map((v) => v.trim()).filter(Boolean)];
};

// strict: 대소문자를 구분하고 구두점 무시 비교도 하지 않음 (코드 빈칸의 연산자·예약어용)
const matchesText = (input: string, accepted: string, strict: boolean) => {
	const a = basic(stripLeadingLabel(input), strict);
	if (!a) return false;
	if (strict) return a === basic(accepted, strict);
	return expandVariants(accepted).some((variant) => {
		const b = basic(variant, strict);
		if (a === b) return true;
		const looseA = loose(a);
		return looseA !== "" && looseA === loose(b);
	});
};

// 실행 결과 비교: 줄 앞뒤 공백과 연속 공백은 무시하고, 줄 구성과 대소문자는 정확히 비교
export const normalizeOutput = (s: string) =>
	s
		.replace(/\r\n?/g, "\n")
		.split("\n")
		.map((line) => line.trim().replace(/[ \t]+/g, " "))
		.join("\n")
		.replace(/^\n+|\n+$/g, "");

const acceptedAnswers = (blank: AnswerBlank) => [blank.answer, ...(blank.accepts ?? [])];

const matchesBlank = (question: Question, input: string, blank: AnswerBlank) => {
	if (question.type === "code") {
		const output = normalizeOutput(input);
		return output !== "" && acceptedAnswers(blank).some((acc) => normalizeOutput(acc) === output);
	}
	// 코드 문제의 빈칸(예약어, 연산자)은 엄격하게 비교
	const strict = question.language !== undefined;
	return acceptedAnswers(blank).some((acc) => matchesText(input, acc, strict));
};

export const gradeAnswer = (question: Question, inputs: string[]): GradeResult => {
	const { blanks } = question;

	if (question.unordered) {
		const used = new Set<number>();
		const blankResults = blanks.map((_, i) => {
			const idx = blanks.findIndex((blank, j) => !used.has(j) && matchesBlank(question, inputs[i] ?? "", blank));
			if (idx === -1) return false;
			used.add(idx);
			return true;
		});
		// '모두 고르기'에서 정답보다 많이 고른 경우도 오답
		const filledCount = inputs.filter((v) => v.trim() !== "").length;
		return { isCorrect: filledCount === blanks.length && blankResults.every(Boolean), blankResults };
	}

	const blankResults = blanks.map((blank, i) => matchesBlank(question, inputs[i] ?? "", blank));
	return { isCorrect: blankResults.every(Boolean), blankResults };
};

// 선택형 채점: 고른 보기 값이 정답(또는 인정 답안)과 정확히 같은지 비교
export const gradeChoice = (question: Question, inputs: string[]): GradeResult => {
	const { blanks } = question;
	const isAccepted = (value: string, blank: AnswerBlank) => acceptedAnswers(blank).includes(value);

	if (question.unordered) {
		const used = new Set<number>();
		const blankResults = blanks.map((_, i) => {
			const idx = blanks.findIndex((blank, j) => !used.has(j) && isAccepted(inputs[i] ?? "", blank));
			if (idx === -1) return false;
			used.add(idx);
			return true;
		});
		return { isCorrect: inputs.length === blanks.length && blankResults.every(Boolean), blankResults };
	}

	const blankResults = blanks.map((blank, i) => isAccepted(inputs[i] ?? "", blank));
	return { isCorrect: blankResults.every(Boolean), blankResults };
};
