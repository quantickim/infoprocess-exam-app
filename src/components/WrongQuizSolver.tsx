import React, { useState, useMemo } from 'react';
import QuestionCard from './QuestionCard';
import { RotateCcw, ChevronLeft, ChevronRight, XCircle } from 'lucide-react';
import { Question, UserAnswersMap } from '../types';

interface WrongQuizSolverProps {
  questions: Question[];
  userAnswers: UserAnswersMap;
  bookmarks: string[];
  onSelectOption: (questionId: string, selectedOption: number, session: string) => void;
  onResetAnswer: (questionId: string) => void;
  onToggleBookmark: (questionId: string) => void;
}

export default function WrongQuizSolver({
  questions,
  userAnswers,
  bookmarks,
  onSelectOption,
  onResetAnswer,
  onToggleBookmark
}: WrongQuizSolverProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 틀린 문제만 필터링 (한 번이라도 오답 처리된 문제)
  const wrongQuestions = useMemo(() => {
    return questions.filter(q => {
      const ans = userAnswers[q.id];
      return ans && !ans.isCorrect;
    });
  }, [questions, userAnswers]);

  if (wrongQuestions.length === 0) {
    return (
      <div className="glass-card animate-fade-in" style={{ padding: '60px', textAlign: 'center' }}>
        <XCircle size={56} style={{ color: 'var(--correct)', marginBottom: '20px' }} />
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px' }}>오답 문제가 없습니다! 🎉</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
          아직 풀이한 문제가 없거나, 풀었던 문제를 모두 맞추셨습니다.<br />
          회차별 문제풀이 메뉴에서 문제를 먼저 풀어보세요.
        </p>
      </div>
    );
  }

  const currentQuestion = wrongQuestions[currentIndex];
  const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
  const isBookmarked = currentQuestion ? bookmarks.includes(currentQuestion.id) : false;

  const progressPercent = Math.round(((currentIndex + 1) / wrongQuestions.length) * 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div className="glass-card" style={{ padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, #f43f5e, #e11d48)',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <XCircle size={22} color="#fff" />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>오답 문제풀이</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            총 <strong style={{ color: 'var(--wrong)' }}>{wrongQuestions.length}개</strong>의 오답 문제를 다시 풀어보세요
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ background: 'rgba(255, 255, 255, 0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            background: 'linear-gradient(90deg, #f43f5e, #f59e0b)',
            transition: 'width 0.3s ease'
          }}
        />
      </div>

      {/* Current Question Card */}
      <QuestionCard
        question={currentQuestion}
        currentIndex={currentIndex}
        totalCount={wrongQuestions.length}
        userAnswer={currentAnswer}
        isBookmarked={isBookmarked}
        onSelectOption={(optNum) => onSelectOption(currentQuestion.id, optNum, currentQuestion.session)}
        onToggleBookmark={onToggleBookmark}
      />

      {/* Footer Controls */}
      <div className="footer-controls">
        <button
          className="btn-secondary"
          onClick={() => onResetAnswer(currentQuestion.id)}
          disabled={!currentAnswer}
          style={{ opacity: currentAnswer ? 1 : 0.5, cursor: currentAnswer ? 'pointer' : 'not-allowed' }}
        >
          <RotateCcw size={18} />
          다시풀기
        </button>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            className="btn-secondary"
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            style={{ opacity: currentIndex === 0 ? 0.5 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
          >
            <ChevronLeft size={18} />
            이전문제
          </button>

          <button
            className="btn-primary"
            onClick={() => setCurrentIndex(prev => Math.min(wrongQuestions.length - 1, prev + 1))}
            disabled={currentIndex === wrongQuestions.length - 1}
            style={{
              opacity: currentIndex === wrongQuestions.length - 1 ? 0.5 : 1,
              cursor: currentIndex === wrongQuestions.length - 1 ? 'not-allowed' : 'pointer',
              background: 'linear-gradient(135deg, #f43f5e, #e11d48)'
            }}
          >
            다음문제
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
