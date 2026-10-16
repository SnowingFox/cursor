import { describe, expect, it } from 'vitest';
import { formatDuration, formatTokens } from '../../common/format.js';

describe('formatDuration', () => {
	it('shows seconds under a minute', () => {
		expect(formatDuration(0)).toBe('0s');
		expect(formatDuration(59_999)).toBe('59s');
	});

	it('shows minutes and hours', () => {
		expect(formatDuration(72_000)).toBe('1m 12s');
		expect(formatDuration(38 * 60_000 + 42_000)).toBe('38m 42s');
		expect(formatDuration(3_600_000 + 61_000)).toBe('1h 1m 1s');
	});

	it('carries rounded seconds into minutes and hours', () => {
		expect(formatDuration(119_600)).toBe('2m 0s');
		expect(formatDuration(3_599_600)).toBe('1h 0m 0s');
	});
});

describe('formatTokens', () => {
	it('matches Claude Code', () => {
		expect(formatTokens(0)).toBe('0');
		expect(formatTokens(999)).toBe('999');
		expect(formatTokens(1000)).toBe('1.0k');
		expect(formatTokens(112_200)).toBe('112.2k');
		expect(formatTokens(2_500_000)).toBe('2.5m');
	});
});
