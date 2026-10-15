# 정보처리기사 실기 마스터 - 프로젝트 구조 정리

## 1. 개요

- **프로젝트명**: infoprocess-exam-app (정보처리기사 실기 마스터)
- **브랜치**: `feature/practical-exam` (필기 버전은 `main` 브랜치)
- **스택**: React 18.3.1 + TypeScript + Vite 5, 아이콘은 lucide-react
- **상태관리/라우팅**: 별도 라이브러리 없음. `App.tsx`의 `activeTab` state(TabType)로 화면 전환하는 단일 SPA 구조
- **데이터 저장**: 문제 데이터는 `src/data/*.json` 파일 기반(`import.meta.glob`으로 동적 로드), 사용자 답안/북마크는 localStorage

## 2. 파일 구조

```
├── package.json
├── index.html
├── vite.config.js
├── tsconfig.json
├── data/                       # 문제 원본 PDF (git 제외, .gitignore)
├── public/img/practical/       # 그림 문제 이미지 (kw-007.png 등, 문제 id와 동일한 파일명)
└── src/
    ├── main.tsx
    ├── index.css
    ├── App.tsx
    ├── types/index.ts
    ├── utils/
    │   ├── storage.ts          # 주제 목록, localStorage 관리
    │   └── grading.ts          # 답안 자동 채점
    ├── data/
    │   ├── 01-keyword.json         # 키워드 130문제
    │   ├── 02-code-control.json    # 코드 · 제어문 14문제
    │   ├── 03-code-pointer.json    # 코드 · 포인터 5문제
    │   ├── 04-code-struct.json     # 코드 · 구조체 3문제
    │   ├── 05-code-function.json   # 코드 · 사용자 정의 함수 9문제
    │   ├── 06-code-java.json       # 코드 · Java 활용 9문제
    │   ├── 07-code-python.json     # 코드 · Python 활용 6문제
    │   └── 08~12-YYYY-RR.json      # 2026년 2회 ~ 2025년 1회 복원 기반 문항 (회차당 20문제)
    └── components/
        ├── Navbar.tsx
        ├── Home.tsx
        ├── RandomQuizSolver.tsx
        ├── QuizSolver.tsx
        ├── SubjectQuizSolver.tsx
        ├── WrongQuizSolver.tsx
        ├── BookmarkList.tsx
        ├── QuizResult.tsx
        ├── QuestionCard.tsx
        ├── ChoiceAnswer.tsx
        ├── CustomSelect.tsx
        └── CustomConfirmModal.tsx
```

- 데이터 파일 이름의 숫자 접두어가 유형(session) 표시 순서를 결정한다.

## 3. 문제 데이터 형식 (`types/index.ts`)

```jsonc
{
	"id": "kw-003",                 // 키워드: kw-001~130, 코드: ctrl-01, ptr-01, st-01, fn-01, java-01, py-01
	"session": "키워드",             // 문제 유형 (유형별 풀이의 선택 단위)
	"subjectId": 1,                 // 주제 (storage.ts의 SUBJECTS)
	"subjectName": "소프트웨어 설계",
	"type": "text",                 // text: 단답형 자동 채점 / code: 실행 결과 자동 채점 / essay: 서술형 자기 채점
	"question": "발문",
	"blocks": [                     // (선택) 지문 박스, 표, 그림을 순서대로 표시
		{ "type": "text", "text": "..." },
		{ "type": "table", "caption": "<회원>", "headers": ["ID", "이름"], "rows": [["...", "..."]] },
		{ "type": "image", "src": "img/practical/kw-007.png", "alt": "..." }
	],
	"choices": ["㉠ Hybrid", "..."], // 보기. 원래 <보기>가 있던 문제는 원문 보기, 나머지는 정답 + 오답을 섞어 만든 선택지
	"codeSnippet": "...",           // (선택) 코드 문제의 코드
	"language": "c",                // (선택) c | java | python
	"blanks": [                     // 빈칸별 정답. 빈칸 수만큼 입력칸이 생김
		{ "label": "①", "answer": "기능", "accepts": ["기능 요구사항", "Functional"] }
	],
	"unordered": false,             // (선택) true면 빈칸 순서와 상관없이 채점 (예: "3가지를 쓰시오")
	"explanation": "해설"
}
```

- **주제(SUBJECTS)**: 1 소프트웨어 설계, 2 데이터베이스, 3 인터페이스·UI, 4 애플리케이션 테스트, 5 정보 보안, 6 OS·네트워크·신기술, 7 C 언어, 8 Java, 9 Python
- 코드 빈칸 문제는 `codeSnippet` 안에 `( ① )` 형태로 빈칸을 표시하고 `type`은 `text`로 둔다.
- `choices`가 있는 단답형은 선택형이 된다. `"㉣ Full"`처럼 기호가 붙은 보기는 기호(`㉣`)가, 그 외에는 보기 전체가 답안 값이므로 `blanks[].answer`도 그 값으로 적는다.

## 4. 채점 규칙 (`utils/grading.ts`)

- 현재는 모든 문제에 `choices`가 있어 아래의 직접 입력 채점(`gradeAnswer`)과 서술형 자기 채점 화면은 쓰이지 않는다. `choices`가 없는 문제를 추가하면 다시 입력형으로 표시된다.
- **단답형(text)**: 공백·대소문자 무시, 괄호·하이픈 등 구두점 차이 허용
    - `"애자일(Agile)"`처럼 `한글(영문)` 형태의 정답은 `애자일`, `Agile`만 써도 정답
    - `㉠`과 `ㄱ`, `①`과 `1`은 같은 문자로 취급 (NFKC 정규화)
    - 코드 빈칸(`language`가 있는 문제)은 대소문자를 구분하고 구두점 무시 비교도 하지 않음 (`=`이 `!=`로 인정되지 않도록)
- **실행 결과(code)**: 줄 앞뒤 공백과 연속 공백만 무시하고 줄 구성·대소문자는 정확히 비교
- **선택형(모든 문제, `components/ChoiceAnswer.tsx`)**: 보기를 터치해서 고른 값이 `answer` 또는 `accepts`와 정확히 같으면 정답 (`gradeChoice`)
    - 빈칸 1개: 보기를 터치하는 즉시 채점 (필기 4지선다와 같은 방식)
    - 빈칸 여러 개: 빈칸(①, ②…)을 고르고 보기를 터치해 채운 뒤 채점, 채점 전에는 바꿀 수 있음
    - `unordered` 문제("모두 고르시오"): 보기를 여러 개 선택한 뒤 채점, 정답보다 많이 고르면 오답
- **서술형(essay)**: 모범 답안을 보여주고 사용자가 "맞았어요 / 틀렸어요"로 직접 채점
- 입력형 자동 채점에서 오답 처리됐지만 같은 뜻인 경우 **정답으로 인정하기** 버튼으로 정답 처리할 수 있음 (오답노트에서도 제외됨, 선택형에는 없음)
- 채점 직후에는 모바일 키보드를 닫고 정답·해설 영역이 보이도록 자동 스크롤

## 5. 데이터/저장 로직 (`utils/storage.ts`)

- `getQuestions()`: `import.meta.glob("../data/*.json", { eager: true })`로 모든 JSON 파일을 취합해 문제 배열 반환
- localStorage 키는 필기 앱과 같은 도메인에 배포돼도 섞이지 않도록 모두 `practical_` 접두어 사용 (`STORAGE_KEYS`)
    - 북마크, 유형별 풀이 기록(`UserAnswerRecord`: 입력값·정오·자기 채점 여부), 오답노트, 당일 통계, 주제별 풀이 기록/위치

## 6. 화면/컴포넌트별 요약

| 컴포넌트                 | 역할                                         | 비고                                                       |
| ------------------------ | -------------------------------------------- | ---------------------------------------------------------- |
| `App.tsx`                | 최상위 상태 관리, 탭 전환, 핸들러 정의       | questions/bookmarks/userAnswers/wrongAnswers state 보유    |
| `Home.tsx`               | 홈 화면, 6개 메뉴 카드 + 오늘의 학습 성과    | `TabType` 타입이 이 파일에서 정의됨                        |
| `Navbar.tsx`             | 상단 네비게이션, 모바일 토글 메뉴            |                                                            |
| `RandomQuizSolver.tsx`   | 전체 문제 무작위 셔플 풀이                   | 기록은 화면 안에서만 유지, 당일 통계·오답노트에는 반영     |
| `QuizSolver.tsx`         | 유형(키워드/코드 유형) 선택 후 순차 풀이     | 풀이 기록이 저장되어 풀이결과에 집계됨                     |
| `SubjectQuizSolver.tsx`  | 주제 선택 → 해당 주제 문제 풀이              | 주제별 풀이 기록과 이어풀기 위치를 별도 저장               |
| `WrongQuizSolver.tsx`    | 오답 문제만 모아 재풀이                      | 당일 통계·오답노트에 영향 없음, "오답 제외하기" 지원       |
| `BookmarkList.tsx`       | 북마크한 문제 풀이                           |                                                            |
| `QuestionCard.tsx`       | 문제 표시 + 답안 입력/채점 공통 컴포넌트     | 지문·표·그림·코드 렌더링, 빈칸별 입력칸과 정오 표시        |
| `ChoiceAnswer.tsx`       | <보기> 문제의 터치 선택형 답안 영역          | QuestionCard 안에서 `choices`가 있는 단답형에 사용         |
| `QuizResult.tsx`         | 유형별 점수(100점 환산)와 주제별 정답률      | 실기는 과락이 없으므로 60점 이상이면 "합격권"으로 표시     |
| `CustomSelect.tsx`       | 커스텀 드롭다운 (유형 선택용)                | `createPortal`로 body에 렌더링                             |
| `CustomConfirmModal.tsx` | 범용 확인 모달                               | 풀이결과 초기화 시 사용                                    |

## 7. 문제 데이터 출처와 검증

- 문제와 정답은 `data/` 폴더의 정보처리기사 실기 유형별 기출 PDF를 바탕으로 정리했다. 해설은 원본을 옮기지 않고 새로 작성했다.
- 코드 문제 46개는 C(clang), Java(javac), Python으로 실제 실행해 출력이 정답과 일치하는지 확인했다.
- 원래 <보기>가 없던 152문제의 오답 선택지는 새로 만들었다. 코드 빈칸 문제의 오답 선택지는 실제로 넣어 실행해 정답과 같은 결과가 나오지 않는지 확인했다.
- 원본 PDF의 키워드 128번 정답 표기 `CSV`는 `CVS`의 오타로 보고 수정했다.
- PDF 텍스트 추출 시 일부 숫자(굵은 `1`)가 누락되는 경우가 있어, 코드 문제는 원본 페이지와 실행 결과로 대조했다.
- 2025년 1~3회, 2026년 1~2회 문항(`08~12-*.json`)은 사용자가 제공한 복원 기반 재서술 자료(원자료: sqldpass.com 회차별 복원)를 옮긴 것으로, 한국산업인력공단 공식 기출·정답이 아니다. 2026년 2회 4번(정규형)과 6번(OSPF)은 복원 가답안이라 해설에 불확실성을 적었다. 오답 선택지는 새로 만들었다.
