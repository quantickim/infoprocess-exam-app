import React, { useEffect } from "react";
import { AlertTriangle, Sparkles } from "lucide-react";

interface CustomConfirmModalProps {
	isOpen: boolean;
	title: string;
	message?: string;
	confirmText?: string;
	cancelText?: string;
	type?: "danger" | "info"; // 모달 테마 (기본값: danger)
	icon?: React.ReactNode;
	showCancel?: boolean; // 취소 버튼 노출 여부 (기본값: true)
	children?: React.ReactNode; // 커스텀 본문 요소
	onConfirm: () => void;
	onClose: () => void;
}

export default function CustomConfirmModal({
	isOpen,
	title,
	message,
	confirmText = "확인",
	cancelText = "취소",
	type = "danger",
	icon,
	showCancel = true,
	children,
	onConfirm,
	onClose,
}: CustomConfirmModalProps) {
	// ESC 키 누를 때 모달 닫기
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const isInfo = type === "info";

	return (
		<div
			onClick={onClose} // 배경 클릭 시 닫기
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				background: "rgba(15, 23, 42, 0.75)",
				backdropFilter: "blur(6px)",
				WebkitBackdropFilter: "blur(6px)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				zIndex: 9999,
				padding: "16px",
			}}
			className="animate-fade-in"
		>
			<div
				className="glass-card"
				onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
				style={{
					width: "100%",
					maxWidth: "380px",
					padding: "24px",
					display: "flex",
					flexDirection: "column",
					gap: "16px",
					boxShadow: isInfo ? "0 20px 25px -5px rgba(99, 102, 241, 0.3)" : "0 20px 25px -5px rgba(244, 63, 94, 0.3)",
					border: isInfo ? "1px solid rgba(99, 102, 241, 0.3)" : "1px solid rgba(244, 63, 94, 0.3)",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
					<div
						style={{
							width: "40px",
							height: "40px",
							background: isInfo ? "rgba(99, 102, 241, 0.15)" : "rgba(244, 63, 94, 0.15)",
							borderRadius: "50%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: isInfo ? "var(--primary)" : "var(--wrong)",
							flexShrink: 0,
						}}
					>
						{icon ? icon : isInfo ? <Sparkles size={22} /> : <AlertTriangle size={22} />}
					</div>
					<h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-main)" }}>{title}</h3>
				</div>

				{message && <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.5" }}>{message}</p>}

				{children}

				<div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
					{showCancel && (
						<button className="btn-secondary" onClick={onClose} style={{ flex: 1, justifyContent: "center" }}>
							{cancelText}
						</button>
					)}
					<button
						className="btn-primary"
						onClick={() => {
							onConfirm();
							onClose();
						}}
						style={{
							flex: 1,
							justifyContent: "center",
							background: isInfo ? "linear-gradient(135deg, var(--primary), var(--primary-hover))" : "linear-gradient(135deg, #f43f5e, #e11d48)",
						}}
					>
						{confirmText}
					</button>
				</div>
			</div>
		</div>
	);
}
