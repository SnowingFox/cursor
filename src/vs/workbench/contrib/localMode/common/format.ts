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
