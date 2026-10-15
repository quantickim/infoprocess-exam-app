export interface Subject {
	id: number;
	name: string;
}

// 문제 본문에 들어가는 지문 블록 (설명 박스, 표, 그림)
export type ContentBlock =
	| { type: "text"; text: string }
	| { type: "table"; caption?: string; headers?: string[]; rows: string[][] }
	| { type: "image"; src: string; alt?: string };

export interface AnswerBlank {
	label?: string; // 빈칸 이름 (①, ②, 팬인(Fan-In) 등)
	answer: string; // 대표 정답 (화면 표시 및 채점에 사용)
	accepts?: string[]; // 추가로 정답 인정하는 표현
}

// text: 단답형 자동 채점, code: 실행 결과(여러 줄) 자동 채점, essay: 서술형 자기 채점
export type AnswerType = "text" | "code" | "essay";

export interface Question {
	id: string;
	session: string; // 문제 유형 (키워드, 코드 · 제어문 등)
	subjectId: number;
	subjectName: string;
	type: AnswerType;
	question: string;
	blocks?: ContentBlock[];
	choices?: string[]; // <보기>
	codeSnippet?: string;
	language?: "c" | "java" | "python" | "sql";
	blanks: AnswerBlank[];
	unordered?: boolean; // 빈칸 순서와 상관없이 채점
	explanation: string;
}

export interface UserAnswerRecord {
	inputs: string[];
	isCorrect: boolean;
	manual?: boolean; // 자기 채점 또는 '정답으로 인정'으로 판정된 경우
	session: string;
	timestamp: string;
}

export type UserAnswersMap = Record<string, UserAnswerRecord>;

export interface SubjectStat {
	name: string;
	total: number;
	correct: number;
}
