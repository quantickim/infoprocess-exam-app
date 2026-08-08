import React, { useState, useMemo } from "react";
import { Award, BarChart3, Target, RotateCcw, Trash2, ChevronLeft, PlayCircle } from "lucide-react";
import { Question, UserAnswersMap, SubjectStat } from "../types";
import CustomConfirmModal from "./CustomConfirmModal";
import { SUBJECTS } from "../utils/storage";

interface QuizResultProps {
	questions: Question[];
	userAnswers: UserAnswersMap;
	wrongAnswers: string[]; // 👈 독립된 오답노트 목록 추가
	onRetryWrongQuestions: (sessionName?: string) => void;
	onResetSessionAnswers: (sessionName: string) => void;
}

export default function QuizResult({ questions, userAnswers, wrongAnswers, onRetryWrongQuestions, onResetSessionAnswers }: QuizResultProps) {
	const [selectedSession, setSelectedSession] = useState<string | null>(null);
	const [sessionToReset, setSessionToReset] = useState<string | null>(null);

	// 회차별 데이터 분석 계산
	const sessionAnalyticsList = useMemo(() => {
		const sessionMap: Record<
			string,
			{
				total: number;
				answered: number;
				correct: number;
				subjectStats: Record<number, SubjectStat>;
			}
		> = {};

		questions.forEach((q) => {
			if (!sessionMap[q.session]) {
				const initialSubjectStats: Record<number, SubjectStat> = {};
				SUBJECTS.forEach((sub) => {
					initialSubjectStats[sub.id] = { name: sub.name, total: 0, correct: 0 };
				});
				sessionMap[q.session] = {
					total: 0,
					answered: 0,
					correct: 0,
					subjectStats: initialSubjectStats,
				};
			}

			const sess = sessionMap[q.session];
			sess.total++;

			if (sess.subjectStats[q.subjectId]) {
				sess.subjectStats[q.subjectId].total++;
			}

			const ans = userAnswers[q.id];
			if (ans) {
				sess.answered++;
				if (ans.isCorrect) {
					sess.correct++;
					if (sess.subjectStats[q.subjectId]) {
						sess.subjectStats[q.subjectId].correct++;
					}
				}
			}
		});

		return Object.entries(sessionMap).map(([sessionName, data]) => {
			const isCompleted = data.answered > 0 && data.answered === data.total;
			const score = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

			// 💡 해당 회차에 속하면서 오답노트에 등록된 문제 개수 계산 (회차 초기화와 무관하게 유지됨)
			const sessionWrongCount = questions.filter((q) => q.session === sessionName && wrongAnswers.includes(String(q.id))).length;

			let hasFailSubject = false;
			Object.values(data.subjectStats).forEach((st) => {
				if (st.total > 0) {
					const subScore = (st.correct / st.total) * 100;
					if (subScore < 40) {
						hasFailSubject = true;
					}
				}
			});

			const isPassed = isCompleted && score >= 60 && !hasFailSubject;

			// 회차 풀이 상태 메세지 및 뱃지 설정
			let statusBadgeText = "";
			let statusBadgeColor = "";
			let statusBadgeBg = "";

			if (!isCompleted) {
				if (data.answered === 0) {
					statusBadgeText = "미풀이";
					statusBadgeColor = "var(--text-muted)";
					statusBadgeBg = "rgba(255, 255, 255, 0.08)";
				} else {
					statusBadgeText = `풀이 진행 중 (${data.answered}/${data.total})`;
					statusBadgeColor = "var(--primary)";
					statusBadgeBg = "rgba(99, 102, 241, 0.15)";
				}
			} else {
				if (isPassed) {
					statusBadgeText = "합격";
					statusBadgeColor = "var(--correct)";
					statusBadgeBg = "rgba(16, 185, 129, 0.15)";
				} else if (hasFailSubject) {
					statusBadgeText = "과락 불합격";
					statusBadgeColor = "#f59e0b";
					statusBadgeBg = "rgba(245, 158, 11, 0.15)";
				} else {
					statusBadgeText = "불합격";
					statusBadgeColor = "#f59e0b";
					statusBadgeBg = "rgba(245, 158, 11, 0.15)";
				}
			}

			return {
				sessionName,
				totalQuestions: data.total,
				answeredCount: data.answered,
				correctCount: data.correct,
				wrongCount: sessionWrongCount, // 👈 독립 오답노트 기준 개수 적용
				score,
				isCompleted,
				isPassed,
				hasFailSubject,
				statusBadgeText,
				statusBadgeColor,
				statusBadgeBg,
				subjectStats: data.subjectStats,
			};
		});
	}, [questions, userAnswers, wrongAnswers]);

	// 선택된 회차 상세 정보
	const currentSessionData = useMemo(() => {
		if (!selectedSession) return null;
		return sessionAnalyticsList.find((s) => s.sessionName === selectedSession) || null;
	}, [selectedSession, sessionAnalyticsList]);

	// ─────────────────────────────────────────
	// 1. 회차 상세보기 화면
	// ─────────────────────────────────────────
	if (selectedSession && currentSessionData) {
		return (
			<div style={{ display: "flex", flexDirection: "column", gap: "24px" }} className="animate-fade-in">
				<div>
					<button
						onClick={() => setSelectedSession(null)}
						style={{
							background: "rgba(255,255,255,0.05)",
							border: "1px solid var(--border-color)",
							color: "var(--text-muted)",
							padding: "8px 16px",
							borderRadius: "var(--radius-sm)",
							cursor: "pointer",
							fontSize: "0.88rem",
							display: "inline-flex",
							alignItems: "center",
							gap: "6px",
						}}
					>
						<ChevronLeft size={18} />
						회차 목록으로 돌아가기
					</button>
				</div>

				{/* 회차 결과 요약 서머리 */}
				<div className="glass-card" style={{ padding: "36px", textAlign: "center", position: "relative", overflow: "hidden" }}>
					<div
						style={{
							position: "absolute",
							top: "-50px",
							right: "-50px",
							width: "200px",
							height: "200px",
							background: currentSessionData.isCompleted ? (currentSessionData.isPassed ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.15)") : "rgba(99, 102, 241, 0.12)",
							borderRadius: "50%",
							filter: "blur(40px)",
						}}
					/>

					<div style={{ display: "inline-flex", padding: "12px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.05)", marginBottom: "16px" }}>
						{!currentSessionData.isCompleted ? <PlayCircle size={48} color="var(--primary)" /> : <Award size={48} color={currentSessionData.isPassed ? "var(--correct)" : "#f59e0b"} />}
					</div>

					<div style={{ marginBottom: "12px" }}>
						<span className="badge badge-session" style={{ fontSize: "0.95rem", padding: "6px 14px" }}>
							{currentSessionData.sessionName}
						</span>
					</div>

					{/* 100문제 완료 여부에 따른 헤더 문구 */}
					<h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "8px" }}>
						{!currentSessionData.isCompleted
							? currentSessionData.answeredCount === 0
								? "아직 풀이를 시작하지 않은 회차입니다"
								: `📝 풀이가 진행 중인 회차입니다 (${currentSessionData.answeredCount}/${currentSessionData.totalQuestions}문제)`
							: currentSessionData.isPassed
								? "🎉 해당 회차 합격 기준 달성!"
								: "💔 아쉽습니다. 불합격입니다."}
					</h2>

					{/* 100문제 완료 여부에 따른 설명 문구 */}
					<p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>
						{!currentSessionData.isCompleted
							? currentSessionData.answeredCount === 0
								? "회차별 문제풀이 메뉴에서 모든 문제를 완료해야 최종 판정을 확인할 수 있습니다."
								: `현재 ${currentSessionData.totalQuestions}문제 중 ${currentSessionData.answeredCount}문제를 풀어보셨습니다. 100문제를 모두 제출하면 합격/과락 여부가 측정됩니다.`
							: currentSessionData.isPassed
								? "평균 60점 이상 및 모든 과목 40점 이상을 달성하셨습니다!"
								: currentSessionData.hasFailSubject
									? "평균 점수는 달성했으나, 과목 중 과락(40점 미만)이 발생했습니다."
									: "평균 60점 미만입니다. 부족한 과목을 집중 복습해보세요."}
					</p>

					<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", maxWidth: "700px", margin: "0 auto 24px auto" }}>
						<div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
							<div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "4px" }}>현재 점수</div>
							<div
								style={{
									fontSize: "2rem",
									fontWeight: 800,
									color: currentSessionData.isCompleted ? (currentSessionData.score >= 60 ? "var(--correct)" : "#f59e0b") : "var(--text-main)",
								}}
							>
								{currentSessionData.score}점
							</div>
						</div>

						<div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
							<div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "4px" }}>맞은 문제</div>
							<div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--correct)" }}>
								{currentSessionData.correctCount} / {currentSessionData.totalQuestions}
							</div>
						</div>

						<div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
							<div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "4px" }}>오답노트 등록</div>
							<div style={{ fontSize: "2rem", fontWeight: 800, color: "#f59e0b" }}>{currentSessionData.wrongCount}개</div>
						</div>
					</div>

					<div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
						{currentSessionData.wrongCount > 0 && (
							<button className="btn-primary" onClick={() => onRetryWrongQuestions(currentSessionData.sessionName)}>
								<RotateCcw size={18} />이 회차 오답노트 복습하기
							</button>
						)}

						{currentSessionData.answeredCount > 0 && (
							<button className="btn-secondary" onClick={() => setSessionToReset(currentSessionData.sessionName)} style={{ borderColor: "rgba(245, 158, 11, 0.4)", color: "#f59e0b" }}>
								<Trash2 size={18} />이 회차 풀이결과 초기화
							</button>
						)}
					</div>
				</div>

				{/* 과목별 성적 분석 */}
				<div className="glass-card" style={{ padding: "28px" }}>
					<h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
						<BarChart3 size={20} color="var(--primary)" />
						{currentSessionData.sessionName} 과목별 성적 분석 (과락 기준: 40점 미만)
					</h3>

					<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
						{Object.values(currentSessionData.subjectStats).map((st) => {
							if (st.total === 0) return null;
							const subScore = Math.round((st.correct / st.total) * 100);
							const isSubjectFail = currentSessionData.isCompleted && subScore < 40;

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

				{/* 초기화 확인 모달 */}
				<CustomConfirmModal
					isOpen={sessionToReset !== null}
					title="회차 풀이 기록 초기화"
					message={`[${sessionToReset}] 회차의 문제 풀이 기록이 모두 삭제됩니다. (기존 오답노트에 등록된 기록은 유지됩니다)`}
					confirmText="초기화"
					cancelText="취소"
					onConfirm={() => {
						if (sessionToReset) {
							onResetSessionAnswers(sessionToReset);
							setSessionToReset(null);
						}
					}}
					onClose={() => setSessionToReset(null)}
				/>
			</div>
		);
	}

	// ─────────────────────────────────────────
	// 2. 메인 풀이결과 화면 (회차 목록)
	// ─────────────────────────────────────────
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "24px" }} className="animate-fade-in">
			<div className="glass-card" style={{ padding: "28px" }}>
				<h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "6px", display: "flex", alignItems: "center", gap: "8px" }}>
					<Target size={22} color="var(--primary)" />
					회차별 성적 분석
				</h3>
				<p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "24px" }}>원하는 회차를 클릭해 과목별 세부 점수를 확인하거나 해당 회차 풀이 기록을 초기화할 수 있습니다.</p>

				<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
					{sessionAnalyticsList.map((sess) => (
						<div
							key={sess.sessionName}
							style={{
								background: "rgba(15, 23, 42, 0.6)",
								padding: "20px",
								borderRadius: "var(--radius-lg)",
								border: "1px solid var(--border-color)",
								display: "flex",
								flexDirection: "column",
								gap: "14px",
								transition: "all 0.2s ease",
							}}
						>
							<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
								<span className="badge badge-session">{sess.sessionName}</span>
								<span
									style={{
										fontSize: "0.8rem",
										fontWeight: 700,
										padding: "4px 8px",
										borderRadius: "4px",
										background: sess.statusBadgeBg,
										color: sess.statusBadgeColor,
									}}
								>
									{sess.statusBadgeText}
								</span>
							</div>

							<div>
								<div style={{ fontSize: "1.8rem", fontWeight: 800, color: sess.isCompleted ? (sess.score >= 60 ? "var(--correct)" : "#f59e0b") : "var(--text-main)" }}>
									{sess.score}점
								</div>
								<div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "2px" }}>
									풀이 {sess.answeredCount} / 총 {sess.totalQuestions}문제 (오답노트 {sess.wrongCount}개)
								</div>
							</div>

							{/* 하단 컨트롤 버튼 */}
							<div style={{ display: "flex", gap: "8px", marginTop: "auto", paddingTop: "8px" }}>
								<button className="btn-primary" onClick={() => setSelectedSession(sess.sessionName)} style={{ flex: 1, padding: "8px 12px", fontSize: "0.85rem" }}>
									상세보기 →
								</button>
								{sess.answeredCount > 0 && (
									<button
										className="btn-secondary"
										onClick={() => setSessionToReset(sess.sessionName)}
										style={{ padding: "8px 12px", color: "#f59e0b", borderColor: "rgba(245, 158, 11, 0.3)" }}
										title="이 회차 초기화"
									>
										<Trash2 size={16} />
									</button>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* 초기화 확인 모달 */}
			<CustomConfirmModal
				isOpen={sessionToReset !== null}
				title="회차 풀이 기록 초기화"
				message={`[${sessionToReset}] 회차의 문제 풀이 기록이 모두 삭제됩니다. (기존 오답노트에 등록된 기록은 유지됩니다)`}
				confirmText="초기화"
				cancelText="취소"
				onConfirm={() => {
					if (sessionToReset) {
						onResetSessionAnswers(sessionToReset);
						setSessionToReset(null);
					}
				}}
				onClose={() => setSessionToReset(null)}
			/>
		</div>
	);
}
