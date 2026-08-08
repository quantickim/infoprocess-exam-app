export interface Subject {
	id: number;
	name: string;
}

export interface Question {
	imgsrc: string;
	id: string;
	session: string;
	subjectId: number;
	subjectName: string;
	question: string;
	codeSnippet?: string;
	options: string[];
	answer: number; // 1-based index (1, 2, 3, 4)
	explanation: string;
}

export interface UserAnswerRecord {
	selectedOption: number;
	isCorrect: boolean;
	session: string;
	timestamp: string;
}

export type UserAnswersMap = Record<string, UserAnswerRecord>;

export interface SubjectStat {
	name: string;
	total: number;
	correct: number;
}

export interface SessionStat {
	total: number;
	correct: number;
}

export interface ResultAnalytics {
	totalQuestions: number;
	totalCorrect: number;
	averageScore: number;
	isPassed: boolean;
	hasFailSubject: boolean;
	subjectStats: Record<number, SubjectStat>;
	sessionStats: Record<string, SessionStat>;
}
