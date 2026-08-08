# 정보처리기사 필기 마스터 - 프로젝트 구조 파악 정리

## 1. 개요

- **프로젝트명**: infoprocess-exam-app (정보처리기사 필기 마스터)
- **스택**: React 18.3.1 + TypeScript + Vite 5, 아이콘은 lucide-react
- **상태관리/라우팅**: 별도 라이브러리 없음. `App.tsx`의 `activeTab` state(TabType)로 화면 전환하는 단일 SPA 구조
- **데이터 저장**: 문제 데이터는 `src/data/*.json` 파일 기반(`import.meta.glob`으로 동적 로드), 사용자 답안/북마크는 localStorage

## 2. 파일 구조

```
├── package.json
├── index.html
├── vite.config.js
├── tsconfig.json
├── src/
│   ├── main.tsx
│   ├── index.css
│   ├── App.tsx
│   ├── types/index.ts
│   ├── utils/storage.ts
│   ├── data/2025-01.json (이후 회차 데이터 추가 예정)
│   └── components/
│       ├── Navbar.tsx
│       ├── Home.tsx
│       ├── RandomQuizSolver.tsx
│       ├── QuizSolver.tsx
│       ├── SubjectQuizSolver.tsx
│       ├── WrongQuizSolver.tsx
│       ├── BookmarkList.tsx
│       ├── QuizResult.tsx
│       ├── QuestionCard.tsx
│       ├── CustomSelect.tsx
│       └── CustomConfirmModal.tsx
└── img/
    └── 2025-1-24.png 등 (Question.id와 동일한 파일명 규칙)
```

## 3. 핵심 타입 (`types/index.ts`)

- `Subject`: id, name
- `Question`: imgsrc, id, session, subjectId, subjectName, question, codeSnippet?, options[], answer(1-based), explanation
- `UserAnswerRecord` / `UserAnswersMap`: 사용자 풀이 기록 (selectedOption, isCorrect, session, timestamp)
- `SubjectStat`, `SessionStat`, `ResultAnalytics`: 과목별/회차별 통계, 합격여부(`isPassed`), 과락여부(`hasFailSubject`) 포함

## 4. 데이터/저장 로직 (`utils/storage.ts`)

- `SUBJECTS` 상수: 5과목 정의 ("1과목: 소프트웨어 설계" ~ "5과목: 정보시스템 구축 관리")
- `getQuestions()`: `import.meta.glob("../data/*.json", { eager: true })`로 모든 JSON 파일을 취합해 문제 배열 반환 (배열/`{questions:[]}` 형태 모두 대응)
- 북마크: localStorage 키 `infoprocess_bookmarks_v1`
- 사용자 답안: localStorage 키 `infoprocess_user_answers_v1`
- `RESULTS_HISTORY` 키는 정의만 있고 미사용
- `saveCustomQuestions`: 이름만 남은 사실상 레거시 함수 (파일 기반 전환 후 getQuestions()만 반환)

## 5. 문제 데이터 (`src/data/2025-01.json`)

- 2025년 1회 기출 100문제 (id: `2025-1-01` ~ `2025-1-100`)
- 20문제씩 5과목 순서대로 구성
- 일부 문제는 `imgsrc`로 이미지 참조 (트리, 정렬, 코드 스니펫 문제 등), 이미지 파일은 `img/` 폴더에 문제 id와 동일한 파일명으로 저장

## 6. 화면/컴포넌트별 요약

| 컴포넌트                 | 역할                                   | 비고                                                                                |
| ------------------------ | -------------------------------------- | ----------------------------------------------------------------------------------- |
| `App.tsx`                | 최상위 상태 관리, 탭 전환, 핸들러 정의 | questions/bookmarks/userAnswers state 보유                                          |
| `Home.tsx`               | 홈 화면, 6개 메뉴 카드 + 요약 통계     | `TabType` 타입이 이 파일에서 정의됨                                                 |
| `Navbar.tsx`             | 상단 네비게이션, 모바일 토글 메뉴      | `bookmarkCount` prop 받지만 미사용                                                  |
| `RandomQuizSolver.tsx`   | 전체 문제 무작위 셔플 풀이             | `Math.random()-0.5` 셔플(편향 가능성 있음)                                          |
| `QuizSolver.tsx`         | 회차/과목 필터 후 순차 풀이            | `onFinishQuiz(filteredQuestions)` — 인자 있음(타 컴포넌트와 시그니처 다름)          |
| `SubjectQuizSolver.tsx`  | 과목 선택 → 해당 과목 문제 풀이        | 2단계 화면(선택→풀이), SUBJECT_COLORS 로컬 정의                                     |
| `WrongQuizSolver.tsx`    | 오답 문제만 필터링해 재풀이            | `onFinishQuiz` 없음(결과 개념 없음)                                                 |
| `BookmarkList.tsx`       | 북마크 문제 전체를 리스트로 나열       | 단일 문제 순회 아님, 여러 QuestionCard 동시 렌더                                    |
| `QuestionCard.tsx`       | 문제 표시 공통 컴포넌트                | 모든 Solver가 공유. explanation은 마크다운 파싱 없이 `white-space: pre-line`만 적용 |
| `QuizResult.tsx`         | 전체 통계 계산 및 결과 화면            | 항상 전체 `questions` 기준 계산 (필터링된 문제 미반영)                              |
| `CustomSelect.tsx`       | 커스텀 드롭다운 (회차 선택용)          | `createPortal`로 body에 렌더링                                                      |
| `CustomConfirmModal.tsx` | 범용 확인 모달                         | 풀이결과 초기화 시 사용                                                             |

## 7. 파악된 특이사항 (추후 논의/제안 시 참고용)

1. **`onFinishQuiz` 시그니처 불일치**
    - `App.tsx`의 `handleFinishQuiz`: `() => void` (인자 없음)
    - `RandomQuizSolver`, `SubjectQuizSolver`: `onFinishQuiz: () => void`
    - `QuizSolver`: `onFinishQuiz: (filteredQuestions: Question[]) => void` (필터링된 문제 목록 전달)
    - 하지만 `QuizResult.tsx`는 이 인자를 받지 않고 항상 전체 `questions`로 자체 통계 계산 → `QuizSolver`가 넘기는 `filteredQuestions`는 현재 어디서도 사용되지 않음

2. **`SUBJECTS` 상수 중복/불일치**
    - `utils/storage.ts`에 원본 정의 ("1과목: 소프트웨어 설계" 형식)
    - `QuizSolver.tsx`에는 로컬로 축약형 재정의 ("소프트웨어 설계"만, 접두어 없음)
    - `BookmarkList.tsx`, `SubjectQuizSolver.tsx`는 storage.ts 것을 import해서 사용
    - → 사용처마다 다른 소스를 참조하는 상태

3. **색상 테마 값 중복 하드코딩**
    - `Home.tsx`, `SubjectQuizSolver.tsx`(SUBJECT_COLORS), `Navbar.tsx`(active 스타일), 각 Solver 컴포넌트에서 동일/유사한 그라디언트 색상 값이 파일마다 반복 정의됨
    - 공유되는 상수나 CSS 변수로 통합되어 있지 않음

4. **`RandomQuizSolver`의 셔플 알고리즘**
    - `[...questions].sort(() => Math.random() - 0.5)` 방식은 균등분포가 보장되지 않는 것으로 잘 알려진 편향된 셔플 방식

5. **`Navbar`의 `bookmarkCount` prop 미사용**
    - props로 전달받지만 실제 JSX에서 배지 등으로 표시되고 있지 않음

6. **`explanation` 필드의 마크다운 미파싱**
    - JSON 데이터의 `explanation`에 `**볼드**`, `\n` 등 마크다운 문법이 포함되어 있으나, `QuestionCard.tsx`에서는 `white-space: pre-line` CSS만 적용하고 실제 마크다운 파서(react-markdown 등)를 사용하지 않아 `**` 기호가 그대로 텍스트로 노출될 가능성 있음

7. **`vite.config.js`가 `.js` 확장자**
    - 프로젝트는 TypeScript 기반인데 vite 설정 파일만 `.ts`가 아닌 `.js` (동작상 문제는 없음)

8. **`storage.ts`의 `RESULTS_HISTORY`, `saveCustomQuestions`**
    - 정의만 있고 실질적으로 사용되지 않는 레거시/미완성 코드로 보임

## 8. 다음 단계

- 추가로 다른 회차(2026-3, 2024-1 등) JSON 데이터 파일이 있다면 동일한 구조로 계속 추가될 것으로 예상됨
