// Ports of formatDuration / formatNumber from Claude Code (src/utils/format.ts),
// so turn stats read the same as its spinner: "38m 42s · ↓ 112.2k tokens".

export function formatDuration(ms: number): string {
	if (ms < 60_000) {
		return `${Math.floor(ms / 1000)}s`;
	}
	let h = Math.floor(ms / 3_600_000);
	let m = Math.floor((ms % 3_600_000) / 60_000);
	let s = Math.round((ms % 60_000) / 1000);
	if (s === 60) {
		s = 0;
		m++;
	}
	if (m === 60) {
		m = 0;
		h++;
	}
	return h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`;
}

const compactShort = new Intl.NumberFormat('en-US', {
	notation: 'compact',
	maximumFractionDigits: 1,
	minimumFractionDigits: 0,
});
const compactLong = new Intl.NumberFormat('en-US', {
	notation: 'compact',
	maximumFractionDigits: 1,
	minimumFractionDigits: 1,
});

export function formatTokens(n: number): string {
	return (n >= 1000 ? compactLong : compactShort).format(n).toLowerCase();
}

/** Usage page style: "999", "1.0K", "64.3M". */
export function formatTokenCount(n: number): string {
	return formatTokens(n).toUpperCase();
}

const contextFormat = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 });

/** Context windows the way model cards print them: "1M", "200K", "128K". */
export function formatContextWindow(n: number): string {
	return contextFormat.format(n);
}

/** Parses "200000", "200_000", "200k", "1m" or "1.5M"; undefined for anything else. */
export function parseTokenCount(text: string): number | undefined {
	const m = /^(\d+(?:\.\d+)?)\s*([km]?)$/iu.exec(text.replace(/[_,\s]/gu, ''));
	if (m === null) {
		return undefined;
	}
	const scale = { '': 1, k: 1_000, m: 1_000_000 }[m[2].toLowerCase() as '' | 'k' | 'm'];
	const n = Math.floor(Number(m[1]) * scale);
	return n > 0 ? n : undefined;
}

/** "$12.34", "<$0.01", "$1,204". */
export function formatCost(usd: number): string {
	if (usd === 0) {
		return '$0.00';
	}
	if (usd < 0.01) {
		return '<$0.01';
	}
	return usd < 1000 ? `$${usd.toFixed(2)}` : `$${Math.round(usd).toLocaleString('en-US')}`;
}
