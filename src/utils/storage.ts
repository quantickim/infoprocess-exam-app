import { Question, Subject, UserAnswersMap } from "../types";

export const SUBJECTS: Subject[] = [
	{ id: 1, name: "1과목: 소프트웨어 설계" },
	{ id: 2, name: "2과목: 소프트웨어 개발" },
	{ id: 3, name: "3과목: 데이터베이스 구축" },
	{ id: 4, name: "4과목: 프로그래밍 언어 활용" },
	{ id: 5, name: "5과목: 정보시스템 구축 관리" },
];

const STORAGE_KEYS = {
	BOOKMARKS: "infoprocess_bookmarks_v1",
	USER_ANSWERS: "infoprocess_user_answers_v1",
	RESULTS_HISTORY: "infoprocess_results_history_v1",
};

// Vite의 import.meta.glob을 이용해 src/data/*.json 파일들을 동적으로 전부 불러옴
const jsonModules = import.meta.glob("../data/*.json", { eager: true });

// JSON 파일들로부터 문제 목록을 취합하는 함수
const loadQuestionsFromFiles = (): Question[] => {
	let allQuestions: Question[] = [];

	for (const path in jsonModules) {
		const mod = jsonModules[path] as { default?: Question[] | any; questions?: Question[] | any };
		const content = mod.default || mod;

		// JSON 형식이 배열이거나 { questions: [...] } 형태인 경우 모두 대응
		const fileQuestions = Array.isArray(content) ? content : content && Array.isArray(content.questions) ? content.questions : [];

		allQuestions = [...allQuestions, ...fileQuestions];
	}

	return allQuestions;
};

// 1. 문제 데이터베이스 불러오기 (캐시 없이 매번 최신 JSON 파일을 읽어옴)
export const getQuestions = (): Question[] => {
	try {
		return loadQuestionsFromFiles();
	} catch (e) {
		console.error("Failed to load questions from files", e);
		return [];
	}
};

export const saveCustomQuestions = (newQuestions: Question[]): Question[] => {
	// 파일 기반 운영으로 변경되었으므로 현재 파일 기반 목록을 반환
	return getQuestions();
};

// 2. 북마크 관리
export const getBookmarks = (): string[] => {
	try {
		const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
		return data ? JSON.parse(data) : [];
	} catch (e) {
		return [];
	}
};

export const toggleBookmark = (questionId: string): string[] => {
	const bookmarks = getBookmarks();
	const index = bookmarks.indexOf(questionId);
	let updated: string[];
	if (index >= 0) {
		updated = bookmarks.filter((id) => id !== questionId);
	} else {
		updated = [...bookmarks, questionId];
	}
	localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
	return updated;
};

// 3. 사용자 정답 기록 관리
export const getUserAnswers = (): UserAnswersMap => {
	try {
		const data = localStorage.getItem(STORAGE_KEYS.USER_ANSWERS);
		return data ? JSON.parse(data) : {};
	} catch (e) {
		return {};
	}
};

export const saveUserAnswer = (questionId: string, selectedOption: number, isCorrect: boolean, session: string): UserAnswersMap => {
	const answers = getUserAnswers();
	answers[questionId] = {
		selectedOption,
		isCorrect,
		session,
		timestamp: new Date().toISOString(),
	};
	localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(answers));
	return answers;
};

export const resetUserAnswer = (questionId: string): UserAnswersMap => {
	const answers = getUserAnswers();
	delete answers[questionId];
	localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(answers));
	return answers;
};

// 4. 전체 풀이 기록 초기화
export const clearAllUserAnswers = (): UserAnswersMap => {
	localStorage.removeItem(STORAGE_KEYS.USER_ANSWERS);
	return {};
};
