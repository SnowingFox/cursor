/**
 * Records one UsageRecord per local agent run that a custom provider served,
 * from the same interaction stream as the turn stats. Kept in localStorage on
 * this machine only; the Usage settings page reads it.
 */
import type { RequestedModel } from '../../../../glass/host/cursorHost.js';
import type { ApiType } from '../common/localMode.js';
import { normalizeUsage, type RequestType, type UsageRecord } from '../common/usage.js';
import type { InteractionUpdate } from './turnStats.js';

/** Which provider served a turn; set by routeTurn. */
export interface RouteInfo {
	provider: string;
	model: string;
	apiType: ApiType;
}

/** Extra context the glass bundle passes to turnBegin. */
export interface TurnContext {
	requestId?: string;
	route?: RouteInfo;
	/** Workspace folder paths of the agent window. */
	workspace?: string[];
}

type Pending = Omit<UsageRecord, 'endedAt' | 'input' | 'output' | 'cacheRead' | 'cacheWrite' | 'reasoning'>;

const STORAGE_KEY = 'cursorLocalMode.usage';
const MAX_RECORDS = 20_000;

interface Store {
	records: UsageRecord[];
	pending: Map<string, Pending>;
	listeners: Set<() => void>;
}

declare global {
	var __cursorLocalModeUsage: Store | undefined;
}

globalThis.__cursorLocalModeUsage ??= { records: load(), pending: new Map(), listeners: new Set() };
const store: Store = globalThis.__cursorLocalModeUsage;

function load(): UsageRecord[] {
	try {
		const value = JSON.parse(globalThis.localStorage?.getItem(STORAGE_KEY) ?? '{}');
		return Array.isArray(value?.records)
			? value.records.filter(
					(r: unknown) => typeof r === 'object' && r !== null && typeof (r as UsageRecord).at === 'number',
				)
			: [];
	} catch {
		return [];
	}
}

function save(): void {
	try {
		globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify({ version: 1, records: store.records }));
	} catch {}
}

function notify(): void {
	for (const listener of store.listeners) {
		listener();
	}
}

export function subscribeUsage(listener: () => void): () => void {
	store.listeners.add(listener);
	return () => store.listeners.delete(listener);
}

/** Oldest first. The array is replaced on every change, so it works as a snapshot. */
export function usageRecords(): UsageRecord[] {
	return store.records;
}

export function clearUsage(): void {
	store.records = [];
	save();
	notify();
}

/** Adds records directly (tests and the devtool's sample data). */
export function addUsageRecords(records: UsageRecord[]): void {
	store.records = [...store.records, ...records].sort((a, b) => a.at - b.at).slice(-MAX_RECORDS);
	save();
	notify();
}

function projectName(paths: string[] | undefined): string | undefined {
	const path = paths?.find((p) => typeof p === 'string' && p !== '');
	return (
		path
			?.replace(/[/\\]+$/u, '')
			.split(/[/\\]/u)
			.pop() || undefined
	);
}

export function usageBegin(
	key: string | undefined,
	conversationId: string,
	action: { action?: { case?: string } } | undefined,
	requestedModel: RequestedModel | undefined,
	context: TurnContext | undefined,
): void {
	const route = context?.route;
	if (key === undefined || route === undefined) {
		// Not served by a custom provider.
		return;
	}
	const at = Date.now();
	const type: RequestType = action?.action?.case === 'userMessageAction' ? 'agent' : 'resume';
	store.pending.set(key, {
		id: context?.requestId || `${key}:${at}`,
		conversationId,
		type,
		at,
		provider: route.provider,
		model: route.model,
		apiType: route.apiType,
		effort: requestedModel?.parameters?.find((p) => p.id === 'reasoning' || p.id === 'effort')?.value || undefined,
		project: projectName(context?.workspace),
		steps: 0,
	});
}

export function usageUpdate(key: string | undefined, update: InteractionUpdate): void {
	const pending = key === undefined ? undefined : store.pending.get(key);
	if (key === undefined || pending === undefined) {
		return;
	}
	const m = update.message;
	if (m.case === 'stepCompleted') {
		pending.steps++;
	} else if (m.case === 'turnEnded') {
		store.pending.delete(key);
		const tokens = normalizeUsage(m.value ?? {});
		if (tokens.input + tokens.output + tokens.cacheRead + tokens.cacheWrite === 0) {
			// Failed or cancelled before the provider reported anything.
			return;
		}
		addUsageRecords([{ ...pending, steps: Math.max(1, pending.steps), endedAt: Date.now(), ...tokens }]);
	}
}
