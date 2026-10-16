import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { RequestedModel } from '../../../../../glass/host/cursorHost.js';
import {
	currentThinkingTurn,
	getTurn,
	thinkingText,
	turnBegin,
	turnKeyFromRowId,
	turnKeyFromRows,
	turnText,
	turnUpdate,
} from '../../browser/turnStats.js';

const userMessage = (messageId: string) => ({
	action: { case: 'userMessageAction', value: { userMessage: { messageId } } },
});
const model = (effort: string) =>
	({ modelId: 'm', parameters: [{ id: 'reasoning', value: effort }] }) as RequestedModel;
const update = (kase: string, value: object = {}) => ({ message: { case: kase, value } });

describe('turn stats', () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.setSystemTime(1_000_000);
	});

	it('tracks a turn from first byte to turnEnded', () => {
		const key = turnBegin('conv-1', userMessage('msg-1'), model('high'));
		expect(key).toBe('msg-1');
		const s0 = getTurn('msg-1')!;
		expect(turnText(s0, true, undefined, 1_000_000 + 2_000)).toBe('2s');
		expect(turnText(s0, true, undefined, 1_000_000 + 4_000)).toBe('4s · waiting for the model');

		turnUpdate(key, update('thinkingDelta', { text: 'x'.repeat(4000) }));
		const thinking = getTurn('msg-1')!;
		expect(turnText(thinking, true, undefined, 1_000_000 + 5_000)).toBe(
			'5s · ↓ 1.0k tokens · thinking with high effort',
		);
		expect(currentThinkingTurn()).toBe(thinking);
		expect(thinkingText(thinking, 1_000_000 + 3_000)).toBe('3s · high effort');

		turnUpdate(key, update('textDelta', { text: 'y'.repeat(400) }));
		expect(currentThinkingTurn()).toBeUndefined();

		vi.setSystemTime(1_000_000 + 34_000);
		turnUpdate(key, update('turnEnded', { outputTokens: 2300n }));
		const done = getTurn('msg-1')!;
		expect(turnText(done, false)).toBe('for 34s · ↓ 2.3k tokens');
		expect(turnText(done, false, 12_000)).toBe('for 12s · ↓ 2.3k tokens');
	});

	it('keeps counting into the same turn on resume', () => {
		turnBegin('conv-2', userMessage('msg-2'), model('low'));
		turnUpdate('msg-2', update('partialToolCall', { argsTextDelta: 'abcd' }));
		expect(turnBegin('conv-2', { action: { case: 'resumeAction' } }, model('max'))).toBe('msg-2');
		expect(getTurn('msg-2')).toMatchObject({ chars: 4, effort: 'max' });
		expect(turnBegin('conv-unknown', undefined, undefined)).toBeUndefined();
	});
});

describe('turn keys', () => {
	it('finds the turn a tail status belongs to', () => {
		expect(turnKeyFromRows([{ kind: 'human', rowId: 'human:a' }, { kind: 'activity' }])).toBe('human:a');
		expect(turnKeyFromRows([{ kind: 'workGroup', turnHumanRowId: 'human:b' }])).toBe('human:b');
		expect(turnKeyFromRows([])).toBeUndefined();
		expect(turnKeyFromRowId('human:a')).toBe('a');
		expect(turnKeyFromRowId(undefined)).toBeUndefined();
	});
});
