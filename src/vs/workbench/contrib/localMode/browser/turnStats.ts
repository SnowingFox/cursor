/**
 * Live turn stats, modelled on Claude Code's spinner line:
 * "12s · ↓ 1.2k tokens · thinking with high effort" while a turn runs and
 * "for 34s · ↓ 2.3k tokens" once it ends.
 *
 * Fed from the local agent's interaction stream (AgentClientService), keyed by
 * the turn's user message id. Finished turns persist in localStorage so the
 * transcript keeps its numbers across reloads.
 */
import type { RequestedModel } from '../../../../glass/host/cursorHost.js';
import { formatDuration, formatTokens } from '../common/format.js';

export interface TurnStats {
	startedAt: number;
	/** First streamed byte; until then the arrow points up ("↑ sending"). */
	firstByteAt?: number;
	/**
	 * Characters the model has streamed: text, thinking and tool-call arguments
	 * (file contents for edits included), but not tool results. Tokens ≈ chars
	 * / 4, the same count as Claude Code's spinner.
	 */
	chars: number;
	effort?: string;
	/** Set while the model is streaming a thinking block. */
	thinkingSince?: number;
	endedAt?: number;
	/** Exact output tokens from the provider's usage, once the turn ends. */
	outputTokens?: number;
}

/** The slice of an InteractionUpdate (protobuf oneof) the stats care about. */
export interface InteractionUpdate {
	message: { case: string | undefined; value?: any };
}

const STORAGE_KEY = 'cursorLocalMode.turnStats';
const MAX_TURNS = 300;

interface Store {
	turns: Map<string, TurnStats>;
	byConversation: Map<string, string>;
	/** Argument characters already counted per tool call id. */
	toolArgs: Map<string, number>;
	listeners: Set<() => void>;
	notifyPending: boolean;
}

declare global {
	var __cursorLocalModeTurnStats: Store | undefined;
}

// Kept on globalThis so hot-reloading this module keeps the running turns.
globalThis.__cursorLocalModeTurnStats ??= {
	turns: load(),
	byConversation: new Map(),
	toolArgs: new Map(),
	listeners: new Set(),
	notifyPending: false,
};
const store: Store = globalThis.__cursorLocalModeTurnStats;
store.toolArgs ??= new Map();

function load(): Map<string, TurnStats> {
	try {
		const value = JSON.parse(globalThis.localStorage?.getItem(STORAGE_KEY) ?? '[]');
		return new Map(
			Array.isArray(value)
				? value.filter((e) => Array.isArray(e) && typeof e[0] === 'string' && e[1] && typeof e[1] === 'object')
				: [],
		);
	} catch {
		return new Map();
	}
}

function save(): void {
	try {
		const finished = [...store.turns].filter(([, s]) => s.endedAt !== undefined).slice(-MAX_TURNS);
		globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(finished));
	} catch {}
}

function notify(): void {
	if (store.notifyPending) {
		return;
	}
	store.notifyPending = true;
	queueMicrotask(() => {
		store.notifyPending = false;
		for (const listener of store.listeners) {
			listener();
		}
	});
}

function patch(key: string, values: Partial<TurnStats>): void {
	const prev = store.turns.get(key);
	if (prev !== undefined) {
		store.turns.set(key, { ...prev, ...values });
		notify();
	}
}

export function subscribe(listener: () => void): () => void {
	store.listeners.add(listener);
	return () => store.listeners.delete(listener);
}

export function getTurn(key: string): TurnStats | undefined {
	return store.turns.get(key);
}

/**
 * Called once per local run. A new user message starts a turn; resumes and
 * retries keep counting into the turn the conversation's last message started.
 */
export function turnBegin(
	conversationId: string,
	action: { action?: { case?: string; value?: any } } | undefined,
	requestedModel: RequestedModel | undefined,
): string | undefined {
	const messageId: string | undefined =
		action?.action?.case === 'userMessageAction' ? action.action.value?.userMessage?.messageId : undefined;
	const key = messageId || store.byConversation.get(conversationId);
	if (!key) {
		return undefined;
	}
	store.byConversation.set(conversationId, key);
	const effort = requestedModel?.parameters?.find((p) => p.id === 'reasoning' || p.id === 'effort')?.value || undefined;
	const prev = store.turns.get(key);
	store.toolArgs.clear();
	store.turns.set(
		key,
		prev !== undefined && messageId === undefined
			? { ...prev, effort: effort ?? prev.effort, endedAt: undefined }
			: { startedAt: Date.now(), chars: 0, effort },
	);
	for (const k of store.turns.keys()) {
		if (store.turns.size <= MAX_TURNS) {
			break;
		}
		store.turns.delete(k);
	}
	notify();
	return key;
}

export function turnUpdate(key: string | undefined, update: InteractionUpdate): void {
	const s = key === undefined ? undefined : store.turns.get(key);
	if (key === undefined || s === undefined) {
		return;
	}
	const m = update.message;
	const now = Date.now();
	const firstByteAt = s.firstByteAt ?? now;
	switch (m.case) {
		case 'textDelta':
			patch(key, { chars: s.chars + m.value.text.length, firstByteAt, thinkingSince: undefined });
			return;
		case 'thinkingDelta':
			patch(key, { chars: s.chars + m.value.text.length, firstByteAt, thinkingSince: s.thinkingSince ?? now });
			return;
		case 'thinkingCompleted':
			patch(key, { firstByteAt, thinkingSince: undefined });
			return;
		case 'partialToolCall':
			patch(key, { firstByteAt, thinkingSince: undefined });
			return;
		case 'toolCallDelta': {
			// File contents of edit tools stream here while the model writes them.
			const delta: unknown = m.value.toolCallDelta?.delta?.value?.streamContentDelta;
			const n = typeof delta === 'string' ? delta.length : 0;
			store.toolArgs.set(m.value.callId, (store.toolArgs.get(m.value.callId) ?? 0) + n);
			patch(key, { chars: s.chars + n, firstByteAt, thinkingSince: undefined });
			return;
		}
		case 'toolCallStarted': {
			// The complete arguments; count whatever did not stream as a delta.
			const total = argsLength(m.value.toolCall);
			const counted = store.toolArgs.get(m.value.callId) ?? 0;
			store.toolArgs.set(m.value.callId, Math.max(total, counted));
			patch(key, { chars: s.chars + Math.max(0, total - counted), firstByteAt, thinkingSince: undefined });
			return;
		}
		case 'turnEnded': {
			const out = m.value.outputTokens === undefined ? undefined : Number(m.value.outputTokens);
			patch(key, {
				endedAt: now,
				thinkingSince: undefined,
				outputTokens: out !== undefined && out > 0 ? out : undefined,
			});
			save();
			return;
		}
	}
}

/** Length of a tool call's arguments as JSON (a protobuf ToolCall: `tool` is a oneof). */
function argsLength(toolCall: any): number {
	const args = toolCall?.tool?.value?.args;
	if (args === undefined || args === null) {
		return 0;
	}
	try {
		return typeof args.toJsonString === 'function'
			? args.toJsonString().length
			: JSON.stringify(args, (_, v) => (typeof v === 'bigint' ? String(v) : v)).length;
	} catch {
		return 0;
	}
}

/** "12s · ↓ 1.2k tokens · thinking with high effort" / "for 34s · ↓ 2.3k tokens". */
export function turnText(s: TurnStats, active: boolean, durationMs?: number, now = Date.now()): string {
	const parts: string[] = [];
	if (active) {
		parts.push(formatDuration(now - s.startedAt));
		const tokens = Math.round(s.chars / 4);
		if (tokens > 0) {
			parts.push(`${s.firstByteAt === undefined ? '↑' : '↓'} ${formatTokens(tokens)} tokens`);
		} else if (s.firstByteAt === undefined && now - s.startedAt > 3000) {
			parts.push('waiting for the model');
		}
		if (s.thinkingSince !== undefined) {
			parts.push(s.effort ? `thinking with ${s.effort} effort` : 'thinking');
		}
	} else {
		const ms = durationMs ?? (s.endedAt === undefined ? undefined : s.endedAt - s.startedAt);
		if (ms !== undefined && ms > 0) {
			parts.push(`for ${formatDuration(ms)}`);
		}
		// The provider's usage is exact, but some gateways under-report it; never
		// show less than what visibly streamed.
		const tokens = Math.max(s.outputTokens ?? 0, Math.round(s.chars / 4));
		if (tokens > 0) {
			parts.push(`↓ ${formatTokens(tokens)} tokens`);
		}
	}
	return parts.join(' · ');
}

/** "4s · high effort" for the native "Thinking" row. */
export function thinkingText(s: TurnStats, now = Date.now()): string {
	const parts = [formatDuration(now - (s.thinkingSince ?? now))];
	if (s.effort) {
		parts.push(`${s.effort} effort`);
	}
	return parts.join(' · ');
}

/**
 * The native "Thinking" row has no turn id, so it follows the most recently
 * started turn that is currently thinking.
 */
export function currentThinkingTurn(): TurnStats | undefined {
	let best: TurnStats | undefined;
	for (const s of store.turns.values()) {
		if (
			s.thinkingSince !== undefined &&
			s.endedAt === undefined &&
			(best === undefined || s.startedAt > best.startedAt)
		) {
			best = s;
		}
	}
	return best;
}

/**
 * The transcript's tail status ("Planning next moves", "Running …") has no turn
 * id of its own; it belongs to the conversation's last user message.
 */
export function turnKeyFromRows(
	rows: { kind?: string; rowId?: string; turnHumanRowId?: unknown }[],
): string | undefined {
	for (let i = rows.length - 1; i >= 0; i--) {
		const r = rows[i];
		if (r?.kind === 'human') {
			return r.rowId;
		}
		if (typeof r?.turnHumanRowId === 'string') {
			return r.turnHumanRowId;
		}
	}
	return undefined;
}

/** Transcript row ids are `human:<messageId>`. */
export function turnKeyFromRowId(rowId: unknown): string | undefined {
	return typeof rowId === 'string' ? rowId.replace(/^human:/u, '') : undefined;
}
