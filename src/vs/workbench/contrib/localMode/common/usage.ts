/**
 * Usage of custom providers, recorded per agent request (one user message and
 * every model call the agent makes for it, like Cursor's own usage events).
 * Pure data and aggregation; the store lives in browser/usageStore.ts.
 */
import type { ApiType } from './localMode.js';
import { estimateCost, type TokenCounts } from './pricing.js';

export type RequestType = 'agent' | 'resume';

export interface UsageRecord {
	/** Cursor's generation id for the run. */
	id: string;
	conversationId: string;
	type: RequestType;
	/** Start and end, epoch ms. */
	at: number;
	endedAt: number;
	provider: string;
	model: string;
	apiType?: ApiType;
	effort?: string;
	project?: string;
	/** Model calls (agent steps) in the request. */
	steps: number;
	/** New (uncached) input tokens. */
	input: number;
	output: number;
	cacheRead: number;
	cacheWrite: number;
	/** Part of `output` spent on reasoning, when the provider reports it. */
	reasoning: number;
}

/** Raw counters from the runtime's turnEnded update. */
export interface RawUsage {
	inputTokens?: bigint | number;
	outputTokens?: bigint | number;
	cacheReadTokens?: bigint | number;
	cacheWriteTokens?: bigint | number;
	reasoningTokens?: bigint | number;
}

const n = (v: bigint | number | undefined) => Math.max(0, Number(v ?? 0) || 0);

/**
 * The runtime reports the whole prompt as inputTokens, cache reads and writes
 * included, for every API format (measured against Anthropic and OpenAI
 * responses). Split it so each kind is priced once.
 */
export function normalizeUsage(raw: RawUsage): TokenCounts & { reasoning: number } {
	const cacheRead = n(raw.cacheReadTokens);
	const cacheWrite = n(raw.cacheWriteTokens);
	return {
		input: Math.max(0, n(raw.inputTokens) - cacheRead - cacheWrite),
		output: n(raw.outputTokens),
		cacheRead,
		cacheWrite,
		reasoning: n(raw.reasoningTokens),
	};
}

export const totalTokens = (r: TokenCounts) => r.input + r.output + r.cacheRead + r.cacheWrite;

export function recordCost(r: UsageRecord): number | undefined {
	return estimateCost(r.model, r);
}

/** Local calendar day, "2026-10-17". */
export function dayKey(ms: number): string {
	const d = new Date(ms);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export interface Totals extends TokenCounts {
	requests: number;
	steps: number;
	reasoning: number;
	tokens: number;
	/** Estimated USD over the records that have a known price. */
	cost: number;
	/** Requests whose model has no known price. */
	unpriced: number;
	durationMs: number;
}

export function emptyTotals(): Totals {
	return {
		requests: 0,
		steps: 0,
		input: 0,
		output: 0,
		cacheRead: 0,
		cacheWrite: 0,
		reasoning: 0,
		tokens: 0,
		cost: 0,
		unpriced: 0,
		durationMs: 0,
	};
}

function add(t: Totals, r: UsageRecord): void {
	t.requests++;
	t.steps += r.steps;
	t.input += r.input;
	t.output += r.output;
	t.cacheRead += r.cacheRead;
	t.cacheWrite += r.cacheWrite;
	t.reasoning += r.reasoning;
	t.tokens += totalTokens(r);
	t.durationMs += Math.max(0, r.endedAt - r.at);
	const cost = recordCost(r);
	if (cost === undefined) {
		t.unpriced++;
	} else {
		t.cost += cost;
	}
}

/** Share of prompt tokens served from cache: cacheRead / (input + cacheRead + cacheWrite). */
export function cacheHitRate(t: TokenCounts): number {
	const prompt = t.input + t.cacheRead + t.cacheWrite;
	return prompt === 0 ? 0 : t.cacheRead / prompt;
}

export interface Group extends Totals {
	key: string;
	/** Provider of a model group. */
	provider?: string;
}

export interface Summary {
	totals: Totals;
	days: Map<string, Totals>;
	byModel: Group[];
	byProvider: Group[];
	byProject: Group[];
	activeDays: number;
}

function groupBy(records: UsageRecord[], key: (r: UsageRecord) => string): Group[] {
	const groups = new Map<string, Group>();
	for (const r of records) {
		const k = key(r);
		let g = groups.get(k);
		if (g === undefined) {
			g = { ...emptyTotals(), key: k };
			groups.set(k, g);
		}
		add(g, r);
	}
	return [...groups.values()].sort((a, b) => b.tokens - a.tokens);
}

export function summarize(records: UsageRecord[]): Summary {
	const totals = emptyTotals();
	const days = new Map<string, Totals>();
	for (const r of records) {
		add(totals, r);
		const k = dayKey(r.at);
		let d = days.get(k);
		if (d === undefined) {
			d = emptyTotals();
			days.set(k, d);
		}
		add(d, r);
	}
	const byModel = groupBy(records, (r) => `${r.provider}\u0000${r.model}`).map((g) => {
		const [provider, model] = g.key.split('\u0000');
		return { ...g, key: model, provider };
	});
	return {
		totals,
		days,
		byModel,
		byProvider: groupBy(records, (r) => r.provider),
		byProject: groupBy(records, (r) => r.project || 'No project'),
		activeDays: days.size,
	};
}

/** Days in [from, to], oldest first. */
export function dayRange(fromMs: number, toMs: number): string[] {
	const out: string[] = [];
	const d = new Date(fromMs);
	d.setHours(12, 0, 0, 0);
	const end = dayKey(toMs);
	for (let i = 0; i < 4000; i++) {
		const k = dayKey(d.getTime());
		out.push(k);
		if (k === end) {
			break;
		}
		d.setDate(d.getDate() + 1);
	}
	return out;
}

export interface HeatCell {
	day: string;
	tokens: number;
	/** 0 (none) to 4 (busiest), at quarters of the busiest day like orca. */
	level: 0 | 1 | 2 | 3 | 4;
	future: boolean;
}

/** `weeks` columns of Sunday-to-Saturday cells ending with the current week. */
export function heatmap(days: Map<string, Totals>, weeks: number, now: number): HeatCell[][] {
	const today = new Date(now);
	const start = new Date(today);
	start.setHours(12, 0, 0, 0);
	start.setDate(start.getDate() - start.getDay() - (weeks - 1) * 7);
	const keys = dayRange(start.getTime(), start.getTime() + (weeks * 7 - 1) * 86_400_000);
	const todayKey = dayKey(now);
	let max = 0;
	for (const k of keys) {
		max = Math.max(max, days.get(k)?.tokens ?? 0);
	}
	const cells = keys.map((k): HeatCell => {
		const tokens = days.get(k)?.tokens ?? 0;
		const ratio = max === 0 ? 0 : tokens / max;
		const level = tokens === 0 ? 0 : ratio <= 0.25 ? 1 : ratio <= 0.5 ? 2 : ratio <= 0.75 ? 3 : 4;
		return { day: k, tokens, level, future: k > todayKey };
	});
	return Array.from({ length: weeks }, (_, w) => cells.slice(w * 7, w * 7 + 7));
}

/** The day `delta` days after `key`. */
export function shiftDay(key: string, delta: number): string {
	const d = new Date(`${key}T12:00:00`);
	d.setDate(d.getDate() + delta);
	return dayKey(d.getTime());
}

/** Consecutive active days ending today (or yesterday), and the longest run. */
export function streaks(days: Map<string, Totals>, now: number): { current: number; longest: number } {
	let longest = 0;
	let run = 0;
	let prev: string | undefined;
	for (const k of [...days.keys()].sort()) {
		run = prev !== undefined && shiftDay(prev, 1) === k ? run + 1 : 1;
		longest = Math.max(longest, run);
		prev = k;
	}
	let day = dayKey(now);
	if (!days.has(day)) {
		day = shiftDay(day, -1);
	}
	let current = 0;
	while (days.has(day)) {
		current++;
		day = shiftDay(day, -1);
	}
	return { current, longest };
}

const csvCell = (v: string | number) => {
	const s = String(v);
	return /[",\n]/u.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
};

export const TYPE_LABELS: Record<RequestType, string> = { agent: 'Agent', resume: 'Resume' };

/** Same columns as the Usage table, plus the token breakdown. Dates are UTC. */
export function toCsv(records: UsageRecord[]): string {
	const header = [
		'Date (UTC)',
		'Type',
		'Provider',
		'Model',
		'Input',
		'Output',
		'Cache Read',
		'Cache Write',
		'Total Tokens',
		'Cost (USD, est.)',
		'Duration (s)',
		'Steps',
		'Project',
		'Conversation',
		'Request ID',
	];
	const rows = records.map((r) => {
		const cost = recordCost(r);
		return [
			new Date(r.at).toISOString(),
			TYPE_LABELS[r.type] ?? r.type,
			r.provider,
			r.model,
			r.input,
			r.output,
			r.cacheRead,
			r.cacheWrite,
			totalTokens(r),
			cost === undefined ? '' : cost.toFixed(4),
			((r.endedAt - r.at) / 1000).toFixed(1),
			r.steps,
			r.project ?? '',
			r.conversationId,
			r.id,
		];
	});
	return [header, ...rows].map((row) => row.map(csvCell).join(',')).join('\n');
}
