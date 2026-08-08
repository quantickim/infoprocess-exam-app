import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";

interface Option {
	value: string | number;
	label: string;
}

interface CustomSelectProps {
	options: Option[];
	value: string | number;
	onChange: (value: any) => void;
	placeholder?: string;
}

export default function CustomSelect({ options, value, onChange, placeholder = "선택하세요" }: CustomSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [coords, setCoords] = useState<{ top: number; left: number; width: number } | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null); // 포탈 드롭다운 영역 참조용 ref 추가

	const selectedOption = options.find((opt) => opt.value === value);

	const updateCoords = () => {
		if (containerRef.current) {
			const rect = containerRef.current.getBoundingClientRect();
			setCoords({
				top: rect.bottom + 6,
				left: rect.left,
				width: rect.width,
			});
		}
	};

	const handleToggle = () => {
		if (!isOpen) {
			updateCoords();
		}
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const target = e.target as Node;
			const clickedInsideContainer = containerRef.current && containerRef.current.contains(target);
			const clickedInsideDropdown = dropdownRef.current && dropdownRef.current.contains(target);

			// 선택 박스 버튼이나 드롭다운 메뉴 바깥쪽을 클릭했을 때만 닫기
			if (!clickedInsideContainer && !clickedInsideDropdown) {
				setIsOpen(false);
			}
		};

		const handleScrollOrResize = () => {
			if (isOpen) {
				updateCoords();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		window.addEventListener("scroll", handleScrollOrResize, true);
		window.addEventListener("resize", handleScrollOrResize);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			window.removeEventListener("scroll", handleScrollOrResize, true);
			window.removeEventListener("resize", handleScrollOrResize);
		};
	}, [isOpen]);

	return (
		<div ref={containerRef} style={{ position: "relative", width: "100%" }}>
			<div
				onClick={handleToggle}
				style={{
					background: "rgba(15, 23, 42, 0.8)",
					border: "1px solid var(--border-color)",
					borderRadius: "var(--radius-sm)",
					padding: "10px 14px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					cursor: "pointer",
					color: selectedOption ? "var(--text-main)" : "var(--text-muted)",
					fontSize: "0.9rem",
					fontWeight: 600,
					transition: "all 0.2s",
				}}
			>
				<span>{selectedOption ? selectedOption.label : placeholder}</span>
				<ChevronDown size={16} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", color: "var(--text-muted)" }} />
			</div>

			{isOpen &&
				coords &&
				createPortal(
					<div
						ref={dropdownRef}
						className="glass-card animate-fade-in"
						style={{
							position: "fixed",
							top: `${coords.top}px`,
							left: `${coords.left}px`,
							width: `${coords.width}px`,
							maxHeight: "240px",
							overflowY: "auto",
							zIndex: 99999,
							padding: "6px",
							boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.8)",
							background: "rgba(15, 23, 42, 0.98)",
						}}
					>
						{options.map((opt) => (
							<div
								key={opt.value}
								onClick={() => {
									onChange(opt.value);
									setIsOpen(false);
								}}
								style={{
									padding: "10px 12px",
									borderRadius: "6px",
									cursor: "pointer",
									fontSize: "0.9rem",
									fontWeight: opt.value === value ? 700 : 500,
									color: opt.value === value ? "#fff" : "var(--text-muted)",
									background: opt.value === value ? "var(--primary)" : "transparent",
									transition: "background 0.15s",
								}}
								onMouseEnter={(e) => {
									if (opt.value !== value) e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
								}}
								onMouseLeave={(e) => {
									if (opt.value !== value) e.currentTarget.style.background = "transparent";
								}}
							>
								{opt.label}
							</div>
						))}
					</div>,
					document.body,
				)}
		</div>
	);
}
