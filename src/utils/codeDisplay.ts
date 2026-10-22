// 표시용 코드만 정리한다. 문제 데이터와 실행 결과는 바꾸지 않는다.
export function formatCodeForDisplay(source: string, language?: string): string {
	const code = source.replace(/\r\n?/g, "\n").trim();
	if (language !== "c" && language !== "java") {
		// Python은 들여쓰기가 문법이므로 블록의 상대적인 깊이를 유지한다.
		const lines = code.split("\n");
		const widths = lines.filter((line) => line.trim()).map((line) => line.match(/^[ \t]*/)?.[0].replace(/\t/g, "    ").length ?? 0);
		const unit = Math.min(...widths.filter((width) => width > 0));
		return lines.map((line) => {
			const width = line.match(/^[ \t]*/)?.[0].replace(/\t/g, "    ").length ?? 0;
			return `${"  ".repeat(Number.isFinite(unit) ? Math.floor(width / unit) : 0)}${line.trim()}`;
		}).join("\n");
	}

	const lines: string[] = [];
	let line = "";
	let depth = 0;
	let parentheses = 0;
	const flush = () => {
		if (line.trim()) lines.push(`${"  ".repeat(depth)}${line.trim()}`);
		line = "";
	};

	for (let i = 0; i < code.length; i++) {
		const char = code[i];
		// 문자열·문자 리터럴·주석 안의 괄호나 세미콜론에서는 줄을 나누지 않는다.
		if (char === '"' || char === "'" || char === "/") {
			const token = code.slice(i).match(/^(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/[^\n]*|\/\*[\s\S]*?\*\/)/)?.[0];
			if (token) {
				line += token;
				i += token.length - 1;
				if (token.startsWith("//")) flush();
				continue;
			}
		}
		if (char === "#" && !line.trim()) {
			const end = code.indexOf("\n", i);
			line += code.slice(i, end === -1 ? code.length : end);
			i = end === -1 ? code.length : end;
			flush();
		} else if (char === "{") {
			line += char;
			flush();
			depth++;
		} else if (char === "}") {
			flush();
			depth = Math.max(0, depth - 1);
			line = char;
			const next = code.slice(i + 1).trimStart()[0];
			if (!next || !";,)]".includes(next)) flush();
		} else if (char === ";") {
			line += char;
			if (parentheses === 0) flush();
		} else if (char === "\n") {
			flush();
		} else if (/\s/.test(char)) {
			if (line && !line.endsWith(" ")) line += " ";
		} else {
			if (char === "(") parentheses++;
			if (char === ")") parentheses = Math.max(0, parentheses - 1);
			line += char;
		}
	}
	flush();
	return lines.join("\n");
}
