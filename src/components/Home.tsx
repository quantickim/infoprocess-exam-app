import React, { useState } from "react";
import { BookOpen, Award, Bookmark, XCircle, ArrowRight, Layers, Shuffle, Sparkles, RotateCcw } from "lucide-react";
import { UserAnswersMap, Question } from "../types";
import { DailyStats } from "../utils/storage";
import CustomConfirmModal from "./CustomConfirmModal";

export type TabType = "home" | "random" | "quiz" | "subject" | "wrong" | "bookmark" | "result";

interface HomeProps {
	setActiveTab: (tab: TabType) => void;
	questions: Question[];
	userAnswers: UserAnswersMap;
	bookmarkCount: number;
	wrongAnswers: string[];
	dailyStats: DailyStats;
	onResetDailyStats: () => void;
}

interface MenuCard {
	tab: TabType;
	icon: React.ReactNode;
	title: string;
	description: string;
	color: string;
	glow: string;
	stat?: string;
}

export default function Home({ setActiveTab, questions, userAnswers, bookmarkCount, wrongAnswers, dailyStats, onResetDailyStats }: HomeProps) {
	const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);

	const answeredCount = Object.keys(userAnswers).length;
	const correctCount = Object.values(userAnswers).filter((a) => a.isCorrect).length;
	const totalWrongCount = wrongAnswers.length;

	const cards: MenuCard[] = [
		{
			tab: "random",
			icon: <Shuffle size={32} />,
			title: "랜덤 문제풀이",
			description: "전체 기출문제 중에서 무작위로 추출하여 실전을 대비합니다.",
			color: "linear-gradient(135deg, #a855f7, #7e22ce)",
			glow: "rgba(168, 85, 247, 0.35)",
			stat: `전체 ${questions.length}문제`,
		},
		{
			tab: "quiz",
			icon: <Sparkles size={32} />,
			title: "회차별 문제풀이",
			description: "연도 및 회차별 기출문제를 선택하여 차례대로 풀어보세요.",
			color: "linear-gradient(135deg, #6366f1, #4f46e5)",
			glow: "rgba(99, 102, 241, 0.35)",
			stat: "회차별 완벽 지원",
		},
		{
			tab: "subject",
			icon: <Layers size={32} />,
			title: "과목별 문제풀이",
			description: "1~5과목 중 원하는 과목을 선택하여 취약 과목을 집중 학습하세요.",
			color: "linear-gradient(135deg, #06b6d4, #0891b2)",
			glow: "rgba(6, 182, 212, 0.35)",
			stat: "5개 과목 지원",
		},
		{
			tab: "wrong",
			icon: <XCircle size={32} />,
			title: "오답노트",
			description: "풀었던 문제 중 틀린 문제만 모아 집중 복습할 수 있습니다.",
			color: "linear-gradient(135deg, #f43f5e, #e11d48)",
			glow: "rgba(244, 63, 94, 0.35)",
			stat: totalWrongCount > 0 ? `${totalWrongCount}문제 오답` : "오답 없음",
		},
		{
			tab: "bookmark",
			icon: <Bookmark size={32} />,
			title: "북마크 문제풀이",
			description: "중요하거나 헷갈려서 저장해둔 문제를 따로 집중 점검하세요.",
			color: "linear-gradient(135deg, #eab308, #ca8a04)",
			glow: "rgba(234, 179, 8, 0.35)",
			stat: bookmarkCount > 0 ? `${bookmarkCount}문제 저장됨` : "저장된 문제 없음",
		},
		{
			tab: "result",
			icon: <Award size={32} />,
			title: "풀이결과",
			description: "전체 점수, 과목별 성적 및 과락(40점 미만) 여부를 확인하세요.",
			color: "linear-gradient(135deg, #10b981, #059669)",
			glow: "rgba(16, 185, 129, 0.35)",
			stat: "회차별 풀이 점수",
		},
	];

	return (
		<div className="animate-fade-in">
			{/* Hero Section */}
			<div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 0 20px" }}>
				<div>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "8px",
							background: "rgba(99, 102, 241, 0.1)",
							border: "1px solid rgba(99, 102, 241, 0.3)",
							borderRadius: "9999px",
							padding: "6px 16px",
							fontSize: "0.85rem",
							color: "#a5b4fc",
							fontWeight: 600,
						}}
					>
						<BookOpen size={15} />
						2025년 1회 - 2026년 2회 CBT 정처기 필기 기출문제
					</div>
				</div>

				{/* 당일 통계 카드 (카드 영역 내부 상단 배치) */}
				<div
					className="glass-card"
					style={{
						marginTop: "20px",
						padding: "16px 24px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "12px",
						maxWidth: "420px",
						width: "100%",
						borderRadius: "var(--radius-lg)",
						border: "1px solid var(--border-color)",
						background: "rgba(30, 41, 59, 0.8)",
					}}
				>
					{/* 카드 상단 제목 */}
					<div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.05em" }}>오늘의 학습 성과</div>

					{/* 카드 내부 스탯 수치 영역 */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "20px",
							width: "100%",
						}}
					>
						<div style={{ textAlign: "center", flex: 1 }}>
							<div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#a5b4fc" }}>{dailyStats.total}</div>
							<div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>풀이</div>
						</div>

						<div style={{ width: "1px", height: "30px", background: "var(--border-color)" }} />

						<div style={{ textAlign: "center", flex: 1 }}>
							<div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--correct)" }}>{dailyStats.correct}</div>
							<div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>정답</div>
						</div>

						<div style={{ width: "1px", height: "30px", background: "var(--border-color)" }} />

						<div style={{ textAlign: "center", flex: 1 }}>
							<div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--wrong)" }}>{dailyStats.wrong}</div>
							<div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>오답</div>
						</div>

						<div style={{ width: "1px", height: "30px", background: "var(--border-color)" }} />

						{/* 아이콘 전용 당일 측정 초기화 버튼 */}
						<button
							onClick={() => setIsResetModalOpen(true)}
							title="오늘 측정 데이터 초기화"
							style={{
								background: "rgba(255, 255, 255, 0.05)",
								border: "1px solid var(--border-color)",
								color: "var(--text-muted)",
								padding: "8px",
								borderRadius: "var(--radius-sm)",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								transition: "all 0.2s",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = "rgba(244, 63, 94, 0.15)";
								e.currentTarget.style.color = "#f43f5e";
								e.currentTarget.style.borderColor = "rgba(244, 63, 94, 0.4)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
								e.currentTarget.style.color = "var(--text-muted)";
								e.currentTarget.style.borderColor = "var(--border-color)";
							}}
						>
							<RotateCcw size={16} />
						</button>
					</div>
				</div>
			</div>

			{/* Menu Cards Grid */}
			<div className="menu-cards-grid">
				{cards.map((card) => (
					<button
						key={card.tab}
						onClick={() => setActiveTab(card.tab)}
						className="menu-card"
						onMouseEnter={(e) => {
							const el = e.currentTarget;
							el.style.transform = "translateY(-4px)";
							el.style.boxShadow = `0 12px 40px ${card.glow}`;
							el.style.borderColor = "rgba(255,255,255,0.2)";
						}}
						onMouseLeave={(e) => {
							const el = e.currentTarget;
							el.style.transform = "translateY(0)";
							el.style.boxShadow = "none";
							el.style.borderColor = "var(--border-color)";
						}}
					>
						<div
							style={{
								position: "absolute",
								top: "-30px",
								right: "-30px",
								width: "100px",
								height: "100px",
								background: card.glow,
								borderRadius: "50%",
								filter: "blur(25px)",
								opacity: 0.5,
								pointerEvents: "none",
							}}
						/>

						<div className="menu-card-icon" style={{ background: card.color, boxShadow: `0 8px 24px ${card.glow}` }}>
							{card.icon}
						</div>

						<div style={{ width: "100%" }}>
							<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
								<h3 className="menu-card-title">{card.title}</h3>
								<ArrowRight className="menu-card-arrow" size={16} />
							</div>
							<p className="menu-card-desc">{card.description}</p>
							{card.stat && <span className="menu-card-stat">{card.stat}</span>}
						</div>
					</button>
				))}
			</div>

			{/* 당일 측정 초기화 확인 모달 */}
			<CustomConfirmModal
				isOpen={isResetModalOpen}
				title="당일 통계 초기화"
				message="오늘 기록된 풀이, 정답, 오답 수량이 모두 0으로 초기화됩니다. 진행하시겠습니까?"
				confirmText="초기화"
				cancelText="취소"
				onConfirm={() => {
					onResetDailyStats();
					setIsResetModalOpen(false);
				}}
				onClose={() => setIsResetModalOpen(false)}
			/>
		</div>
	);
}
