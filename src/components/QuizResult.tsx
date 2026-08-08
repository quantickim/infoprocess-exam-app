import React, { useState, useMemo } from "react";
import { Award, BarChart3, Target, RotateCcw, Trash2 } from "lucide-react";
import { Question, UserAnswersMap, ResultAnalytics, SubjectStat, SessionStat } from "../types";
import CustomConfirmModal from "./CustomConfirmModal";
import { SUBJECTS } from "../utils/storage";
interface QuizResultProps {
	questions: Question[];
	userAnswers: UserAnswersMap;
	onRetryWrongQuestions: () => void;
	onResetAllAnswers: () => void;
}

export default function QuizResult({ questions, userAnswers, onRetryWrongQuestions, onResetAllAnswers }: QuizResultProps) {
	const [isResetModalOpen, setIsResetModalOpen] = useState(false);

	const analytics: ResultAnalytics = useMemo(() => {
		let totalQuestions = 0;
		let totalCorrect = 0;

		const subjectStats: Record<number, SubjectStat> = {};
		SUBJECTS.forEach((sub) => {
			subjectStats[sub.id] = { name: sub.name, total: 0, correct: 0 };
		});

		const sessionStats: Record<string, SessionStat> = {};

		questions.forEach((q) => {
			const ans = userAnswers[q.id];
			totalQuestions++;

			if (!sessionStats[q.session]) {
				sessionStats[q.session] = { total: 0, correct: 0 };
			}
			sessionStats[q.session].total++;

			if (subjectStats[q.subjectId]) {
				subjectStats[q.subjectId].total++;
			}

			if (ans && ans.isCorrect) {
				totalCorrect++;
				if (subjectStats[q.subjectId]) {
					subjectStats[q.subjectId].correct++;
				}
				sessionStats[q.session].correct++;
			}
		});

		const averageScore = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

		let hasFailSubject = false;
		Object.values(subjectStats).forEach((st) => {
			if (st.total > 0) {
				const subScore = (st.correct / st.total) * 100;
				if (subScore < 40) {
					hasFailSubject = true;
				}
			}
		});

		const isPassed = averageScore >= 60 && !hasFailSubject;

		return {
			totalQuestions,
			totalCorrect,
			averageScore,
			isPassed,
			hasFailSubject,
			subjectStats,
			sessionStats,
		};
	}, [questions, userAnswers]);

	const answeredCount = Object.keys(userAnswers).length;
	const wrongCount = answeredCount - analytics.totalCorrect;

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "24px" }} className="animate-fade-in">
			{/* Overview Score Card */}
			<div className="glass-card" style={{ padding: "36px", textAlign: "center", position: "relative", overflow: "hidden" }}>
				<div
					style={{
						position: "absolute",
						top: "-50px",
						right: "-50px",
						width: "200px",
						height: "200px",
						background: analytics.isPassed ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.15)",
						borderRadius: "50%",
						filter: "blur(40px)",
					}}
				/>

				<div style={{ display: "inline-flex", padding: "12px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.05)", marginBottom: "16px" }}>
					<Award size={48} color={analytics.isPassed ? "var(--correct)" : "#f59e0b"} />
				</div>

				<h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "8px" }}>{analytics.isPassed ? "🎉 시험 합격 기준 달성!" : "💔 아쉽습니다. 불합격입니다."}</h2>
				<p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>
					{analytics.isPassed
						? "평균 60점 이상 및 모든 과목 40점 이상을 달성하셨습니다!"
						: analytics.hasFailSubject
							? "평균 점수는 달성했으나, 과목 중 과락(40점 미만)이 발생했습니다."
							: "평균 60점 미만입니다. 부족한 과목을 집중 복습해보세요."}
				</p>

				{/* Score Numbers Grid */}
				<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", maxWidth: "700px", margin: "0 auto 24px auto" }}>
					<div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
						<div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "4px" }}>평균 점수</div>
						<div style={{ fontSize: "2rem", fontWeight: 800, color: analytics.averageScore >= 60 ? "var(--correct)" : "#f59e0b" }}>{analytics.averageScore}점</div>
					</div>

					<div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
						<div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "4px" }}>맞은 문제</div>
						<div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--correct)" }}>
							{analytics.totalCorrect} / {analytics.totalQuestions}
						</div>
					</div>

					<div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
						<div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "4px" }}>틀린 문제</div>
						<div style={{ fontSize: "2rem", fontWeight: 800, color: "#f59e0b" }}>{wrongCount >= 0 ? wrongCount : 0}개</div>
					</div>
				</div>

				{/* Action Buttons */}
				<div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
					{wrongCount > 0 && (
						<button className="btn-primary" onClick={onRetryWrongQuestions}>
							<RotateCcw size={18} />
							틀린 문제만 다시 풀기 ({wrongCount}문제)
						</button>
					)}

					<button className="btn-secondary" onClick={() => setIsResetModalOpen(true)} style={{ borderColor: "rgba(245, 158, 11, 0.4)", color: "#f59e0b" }}>
						<Trash2 size={18} />
						풀이결과 초기화
					</button>
				</div>
			</div>

			{/* Subject Analytics */}
			<div className="glass-card" style={{ padding: "28px" }}>
				<h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
					<BarChart3 size={20} color="var(--primary)" />
					과목별 성적 분석 (과락 기준: 40점 미만)
				</h3>

				<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
					{Object.values(analytics.subjectStats).map((st) => {
						if (st.total === 0) return null;
						const subScore = Math.round((st.correct / st.total) * 100);
						const isSubjectFail = subScore < 40;

						return (
							<div key={st.name} style={{ background: "rgba(15, 23, 42, 0.4)", padding: "16px 20px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
								<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", alignItems: "center" }}>
									<div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
										{st.name}
										{isSubjectFail && (
											<span className="badge badge-session" style={{ marginLeft: "10px", background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }}>
												⚠️ 과락
											</span>
										)}
									</div>
									<div style={{ fontWeight: 700, color: isSubjectFail ? "#f59e0b" : subScore >= 60 ? "var(--correct)" : "var(--warning)" }}>
										{subScore}점 ({st.correct}/{st.total})
									</div>
								</div>

								<div style={{ background: "rgba(255, 255, 255, 0.08)", height: "8px", borderRadius: "4px", overflow: "hidden" }}>
									<div
										style={{
											width: `${subScore}%`,
											height: "100%",
											background: isSubjectFail ? "#f59e0b" : subScore >= 60 ? "var(--correct)" : "var(--warning)",
											transition: "width 0.4s ease",
										}}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Session Analytics */}
			<div className="glass-card" style={{ padding: "28px" }}>
				<h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
					<Target size={20} color="var(--warning)" />
					회차별 성적 분석
				</h3>

				<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
					{Object.entries(analytics.sessionStats).map(([sessionName, st]) => {
						const sessScore = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
						return (
							<div key={sessionName} style={{ background: "rgba(15, 23, 42, 0.6)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
								<div className="badge badge-session" style={{ marginBottom: "10px" }}>
									{sessionName}
								</div>
								<div style={{ fontSize: "1.4rem", fontWeight: 800, color: sessScore >= 60 ? "var(--correct)" : "#f59e0b" }}>{sessScore}점</div>
								<div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>
									정답: {st.correct} / 총 {st.total}문제
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* 커스텀 초기화 확인 팝업 모달 */}
			<CustomConfirmModal
				isOpen={isResetModalOpen}
				title="풀이 기록 초기화"
				message="지금까지의 모든 문제 풀이 기록이 삭제됩니다. 정말로 초기화하시겠습니까?"
				confirmText="초기화"
				cancelText="취소"
				onConfirm={() => {
					onResetAllAnswers();
				}}
				onClose={() => setIsResetModalOpen(false)}
			/>
		</div>
	);
}
