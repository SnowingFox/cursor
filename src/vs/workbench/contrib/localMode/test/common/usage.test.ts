import { describe, expect, it } from 'vitest';
import { formatCost } from '../../common/format.js';
import { estimateCost, priceFor } from '../../common/pricing.js';
import {
	cacheHitRate,
	dayKey,
	heatmap,
	normalizeUsage,
	streaks,
	summarize,
	toCsv,
	type UsageRecord,
} from '../../common/usage.js';

const at = (day: string, hour = 12) => new Date(`${day}T${String(hour).padStart(2, '0')}:00:00`).getTime();

function record(overrides: Partial<UsageRecord> = {}): UsageRecord {
	return {
		id: 'req-1',
		conversationId: 'conv-1',
		type: 'agent',
		at: at('2026-10-15'),
		endedAt: at('2026-10-15') + 30_000,
		provider: 'Gateway',
		model: 'claude-opus-4-8',
		apiType: 'anthropic',
		steps: 3,
		input: 1_000,
		output: 2_000,
		cacheRead: 100_000,
		cacheWrite: 10_000,
		reasoning: 0,
		...overrides,
	};
}

describe('pricing', () => {
	it('matches model families', () => {
		expect(priceFor('claude-opus-4-8')?.input).toBe(5);
		expect(priceFor('Claude-Opus-4.8-thinking')?.input).toBe(5);
		expect(priceFor('claude-opus-4-1-20250805')?.input).toBe(15);
		expect(priceFor('claude-opus-4-20250514')?.input).toBe(15);
		expect(priceFor('claude-fable-5-1')?.output).toBe(50);
		expect(priceFor('claude-sonnet-4-5')?.cacheRead).toBe(0.3);
		expect(priceFor('claude-3-5-haiku-20241022')?.input).toBe(0.8);
		expect(priceFor('gpt-5-mini')?.input).toBe(0.25);
		expect(priceFor('gpt-5.2')?.input).toBe(1.25);
		expect(priceFor('o3')?.output).toBe(8);
		expect(priceFor('some-local-model')).toBeUndefined();
	});

	it('estimates cost', () => {
		// 1k*5 + 2k*25 + 100k*0.5 + 10k*6.25 per million
		expect(estimateCost('claude-opus-4-8', record())).toBeCloseTo(0.1675, 6);
		expect(estimateCost('llama3', record())).toBeUndefined();
		expect(formatCost(0)).toBe('$0.00');
		expect(formatCost(0.004)).toBe('<$0.01');
		expect(formatCost(12.345)).toBe('$12.35');
		expect(formatCost(1204.4)).toBe('$1,204');
	});
});

describe('normalizeUsage', () => {
	it('splits cached tokens out of the prompt', () => {
		// Anthropic input_tokens 100 + cache_read 5000 + cache_creation 300, as the runtime reports it.
		const raw = { inputTokens: 5_400n, outputTokens: 20n, cacheReadTokens: 5_000n, cacheWriteTokens: 300n };
		expect(normalizeUsage(raw)).toEqual({ input: 100, output: 20, cacheRead: 5_000, cacheWrite: 300, reasoning: 0 });
		expect(normalizeUsage({})).toEqual({ input: 0, output: 0, cacheRead: 0, cacheWrite: 0, reasoning: 0 });
	});
});

describe('summarize', () => {
	it('totals, groups and days', () => {
		const s = summarize([
			record(),
			record({ id: 'r2', at: at('2026-10-16'), model: 'llama3', provider: 'Ollama', project: 'web' }),
		]);
		expect(s.totals.requests).toBe(2);
		expect(s.totals.tokens).toBe(2 * 113_000);
		expect(s.totals.unpriced).toBe(1);
		expect(s.totals.cost).toBeCloseTo(0.1675, 6);
		expect(s.activeDays).toBe(2);
		expect(s.byProvider.map((g) => g.key)).toEqual(['Gateway', 'Ollama']);
		expect(s.byModel[1]).toMatchObject({ key: 'llama3', provider: 'Ollama' });
		expect(s.byProject.map((g) => g.key).sort()).toEqual(['No project', 'web']);
		expect(cacheHitRate(s.totals)).toBeCloseTo(100_000 / 111_000, 6);
	});
});

describe('heatmap and streaks', () => {
	it('lays out whole weeks and buckets by the busiest day', () => {
		const days = summarize([
			record({ at: at('2026-10-14') }),
			record({ at: at('2026-10-15'), output: 400_000 }),
			record({ at: at('2026-10-16') }),
		]).days;
		const columns = heatmap(days, 4, at('2026-10-16'));
		expect(columns).toHaveLength(4);
		expect(columns.every((c) => c.length === 7)).toBe(true);
		const cells = columns.flat();
		expect(cells.find((c) => c.day === '2026-10-15')?.level).toBe(4);
		expect(cells.find((c) => c.day === '2026-10-14')?.level).toBe(1);
		expect(cells.find((c) => c.day === '2026-10-17')?.future).toBe(true);
		expect(streaks(days, at('2026-10-17'))).toEqual({ current: 3, longest: 3 });
		expect(streaks(days, at('2026-10-20'))).toEqual({ current: 0, longest: 3 });
	});

	it('uses local days', () => {
		expect(dayKey(at('2026-10-15', 23))).toBe('2026-10-15');
	});
});

describe('toCsv', () => {
	it('quotes fields and dates in UTC', () => {
		const csv = toCsv([record({ project: 'a,"b"' })]).split('\n');
		expect(csv[0]).toMatch(/^Date \(UTC\),Type,Provider,Model,/);
		expect(csv[1]).toContain(new Date(at('2026-10-15')).toISOString());
		expect(csv[1]).toContain('Agent,Gateway,claude-opus-4-8,1000,2000,100000,10000,113000,0.1675,30.0,3,"a,""b"""');
	});
});
