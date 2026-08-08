import { Question, Subject, UserAnswersMap } from "../types";

export const SUBJECTS: Subject[] = [
	{ id: 1, name: "1과목: 소프트웨어 설계" },
	{ id: 2, name: "2과목: 소프트웨어 개발" },
	{ id: 3, name: "3과목: 데이터베이스 구축" },
	{ id: 4, name: "4과목: 프로그래밍 언어 활용" },
	{ id: 5, name: "5과목: 정보시스템 구축 관리" },
];

const STORAGE_KEYS = {
	BOOKMARKS: "bookmarks",
	USER_ANSWERS: "infoprocess_user_answers_v1",
	WRONG_ANSWERS: "wrong_answers",
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
	const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
	if (!data) return [];
	try {
		const parsed = JSON.parse(data);
		if (Array.isArray(parsed)) {
			return parsed.map(String).filter((id) => id && id.trim() !== "");
		}
		return [];
	} catch {
		return data
			.split(",")
			.map((s) => s.trim())
			.filter(Boolean);
	}
};

export const toggleBookmark = (id: string | number): string[] => {
	const strId = String(id);
	const currentBookmarks = getBookmarks();
	const exists = currentBookmarks.includes(strId);

	const updated = exists ? currentBookmarks.filter((b) => b !== strId) : [...currentBookmarks, strId];

	localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
	return updated;
};

// 3. 사용자 정답 기록 관리 (회차/일반 풀이 기록)
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

// 회차 풀이 답안 초기화 (💡 독립된 오답노트 'wrong_answers'는 절대 영향을 받지 않습니다)
export const resetUserAnswer = (questionId: string): UserAnswersMap => {
	const answers = getUserAnswers();
	delete answers[questionId];
	localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(answers));
	return answers;
};

// 4. 전체 회차 풀이 기록 초기화 (💡 독립된 오답노트 'wrong_answers'는 안전하게 보존됩니다)
export const clearAllUserAnswers = (): UserAnswersMap => {
	localStorage.removeItem(STORAGE_KEYS.USER_ANSWERS);
	return {};
};

// 5. 독립된 오답노트 전용 관리
export const getWrongAnswers = (): string[] => {
	try {
		const data = localStorage.getItem(STORAGE_KEYS.WRONG_ANSWERS);
		if (!data) return [];
		const parsed = JSON.parse(data);
		return Array.isArray(parsed) ? parsed.map(String) : [];
	} catch (e) {
		return [];
	}
};

export const saveWrongAnswers = (wrongAnswers: string[]): string[] => {
	localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(wrongAnswers));
	return wrongAnswers;
};

export const addWrongAnswer = (questionId: string): string[] => {
	const strId = String(questionId);
	const current = getWrongAnswers();
	if (!current.includes(strId)) {
		const updated = [...current, strId];
		saveWrongAnswers(updated);
		return updated;
	}
	return current;
};

export const removeWrongAnswer = (questionId: string): string[] => {
	const strId = String(questionId);
	const current = getWrongAnswers();
	const updated = current.filter((id) => id !== strId);
	saveWrongAnswers(updated);
	return updated;
};
// ... 기존 코드 유지

export interface DailyStats {
	date: string; // YYYY-MM-DD
	total: number;
	correct: number;
	wrong: number;
}

const getTodayString = (): string => {
	const d = new Date();
	const year = d.getFullYear();
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};

// 당일 풀이 통계 가져오기 (날짜가 바뀌면 자동으로 0으로 리셋)
export const getDailyStats = (): DailyStats => {
	const today = getTodayString();
	try {
		const data = localStorage.getItem("infoprocess_daily_stats_v1");
		if (data) {
			const parsed: DailyStats = JSON.parse(data);
			if (parsed.date === today) {
				return parsed;
			}
		}
	} catch (e) {
		console.error("Failed to load daily stats", e);
	}
	return { date: today, total: 0, correct: 0, wrong: 0 };
};

// 당일 풀이 통계 기록 추가
export const recordDailyAnswer = (isCorrect: boolean): DailyStats => {
	const current = getDailyStats();
	const updated: DailyStats = {
		...current,
		total: current.total + 1,
		correct: isCorrect ? current.correct + 1 : current.correct,
		wrong: isCorrect ? current.wrong : current.wrong + 1,
	};
	localStorage.setItem("infoprocess_daily_stats_v1", JSON.stringify(updated));
	return updated;
};

// 당일 측정 데이터 초기화 (0으로 되돌림)
export const resetDailyStats = (): DailyStats => {
	const today = getTodayString();
	const reset: DailyStats = { date: today, total: 0, correct: 0, wrong: 0 };
	localStorage.setItem("infoprocess_daily_stats_v1", JSON.stringify(reset));
	return reset;
};
