import { type ReactNode, useEffect, useState, useSyncExternalStore } from 'react';
import { currentThinkingTurn, getTurn, subscribe, thinkingText, turnKeyFromRowId, turnText } from '../turnStats.js';

/** Re-renders every second while `active`, for live elapsed time. */
function useTicker(active: boolean): void {
	const [, setTick] = useState(0);
	useEffect(() => {
		if (!active) {
			return undefined;
		}
		const handle = setInterval(() => setTick((x) => x + 1), 1000);
		return () => clearInterval(handle);
	}, [active]);
}

/**
 * Work-group header details: "Working 12s · ↓ 1.2k tokens · thinking with high
 * effort", then "Worked for 34s · ↓ 2.3k tokens".
 */
export function TurnDetails(props: {
	turnKey: unknown;
	active: boolean;
	durationMs?: number;
	fallback?: ReactNode;
}): ReactNode {
	const { active, durationMs, fallback } = props;
	const key = turnKeyFromRowId(props.turnKey);
	const stats = useSyncExternalStore(subscribe, () => (key === undefined ? undefined : getTurn(key)));
	useTicker(active && stats !== undefined);
	// Keep Cursor's own rich completed header (e.g. file stats) when it has one.
	if (stats === undefined || (!active && typeof fallback !== 'string' && fallback != null)) {
		return fallback ?? null;
	}
	const text = turnText(stats, active, durationMs);
	return text ? <span className="local-mode-tabular">{text}</span> : (fallback ?? null);
}

/** Suffix for the tail status: "Planning next moves · 12s · ↓ 1.2k tokens". */
export function TurnStatusSuffix(props: { turnKey: string }): ReactNode {
	const key = turnKeyFromRowId(props.turnKey);
	const stats = useSyncExternalStore(subscribe, () => (key === undefined ? undefined : getTurn(key)));
	const live = stats !== undefined && stats.endedAt === undefined;
	useTicker(live);
	const text = live ? turnText(stats, true) : '';
	return text ? (
		<span data-slot="local-turn-stats" className="local-mode-turn-stats">
			· {text}
		</span>
	) : null;
}

/** Details for the native "Thinking" row: "4s · high effort". */
export function ThinkingDetails(props: { fallback?: ReactNode }): ReactNode {
	const stats = useSyncExternalStore(subscribe, currentThinkingTurn);
	useTicker(stats !== undefined);
	return stats === undefined ? (
		(props.fallback ?? null)
	) : (
		<span className="local-mode-tabular">{thinkingText(stats)}</span>
	);
}
