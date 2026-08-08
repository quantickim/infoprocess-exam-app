import React, { useState } from "react";
import { BookOpen, Award, Bookmark, Sparkles, XCircle, Layers, Shuffle, Menu, X } from "lucide-react";
import { TabType } from "./Home";

interface NavbarProps {
	activeTab: TabType;
	setActiveTab: (tab: TabType) => void;
	bookmarkCount: number;
}

export default function Navbar({ activeTab, setActiveTab, bookmarkCount }: NavbarProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleNavClick = (tab: TabType) => {
		setActiveTab(tab);
		setIsMobileMenuOpen(false);
	};

	return (
		<header className="site-header">
			<div className="header-top-row">
				<div className="logo-wrapper" onClick={() => handleNavClick("home")}>
					<div className="logo-icon">
						<BookOpen size={20} />
					</div>
					<span className="logo-text">정처기 마스터</span>
				</div>

				{/* 모바일 드롭다운 토글 버튼 */}
				<button className="mobile-toggle-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="메뉴 토글">
					{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
				</button>
			</div>

			{/* 네비게이션 카드 */}
			<nav className={`nav-card glass-card ${isMobileMenuOpen ? "mobile-open" : ""}`}>
				<button
					className={`nav-btn ${activeTab === "random" ? "active" : ""}`}
					onClick={() => handleNavClick("random")}
					style={activeTab === "random" ? { background: "linear-gradient(135deg, #a855f7, #7e22ce)" } : {}}
				>
					<Shuffle size={18} />
					<span>랜덤문제</span>
				</button>

				<button className={`nav-btn ${activeTab === "quiz" ? "active" : ""}`} onClick={() => handleNavClick("quiz")}>
					<Sparkles size={18} />
					<span>회차별</span>
				</button>

				<button
					className={`nav-btn ${activeTab === "subject" ? "active" : ""}`}
					onClick={() => handleNavClick("subject")}
					style={activeTab === "subject" ? { background: "linear-gradient(135deg, #06b6d4, #0891b2)" } : {}}
				>
					<Layers size={18} />
					<span>과목별</span>
				</button>

				<button
					className={`nav-btn ${activeTab === "wrong" ? "active" : ""}`}
					onClick={() => handleNavClick("wrong")}
					style={activeTab === "wrong" ? { background: "linear-gradient(135deg, #f43f5e, #e11d48)" } : {}}
				>
					<XCircle size={18} />
					<span>오답노트</span>
				</button>

				<button className={`nav-btn ${activeTab === "bookmark" ? "active" : ""}`} onClick={() => handleNavClick("bookmark")}>
					<Bookmark size={18} />
					<span>북마크</span>
				</button>

				<button className={`nav-btn ${activeTab === "result" ? "active" : ""}`} onClick={() => handleNavClick("result")}>
					<Award size={18} />
					<span>풀이결과</span>
				</button>
			</nav>
		</header>
	);
}
