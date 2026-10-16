import { describe, expect, it } from 'vitest';
import { SidecarRpcClient } from './sidecar-rpc-client';

describe('SidecarRpcClient.typingCallTimeoutMs', () => {
	it('floors a short type at the flat 15 s every other tool uses', () => {
		// A short type is never given *less* time than the default.
		expect(SidecarRpcClient.typingCallTimeoutMs(0)).toBe(15_000);
		expect(SidecarRpcClient.typingCallTimeoutMs(1)).toBe(15_000);
	});

	it('scales past the floor for a long type', () => {
		// 2k characters is the size the flat 15 s cut off mid-type; the scaled
		// deadline must give it more than the floor.
		expect(SidecarRpcClient.typingCallTimeoutMs(2000)).toBeGreaterThan(15_000);
	});

	it('never shrinks as the text grows', () => {
		let previous = 0;
		for (const chars of [0, 100, 1000, 2000, 4000]) {
			const timeout = SidecarRpcClient.typingCallTimeoutMs(chars);
			expect(timeout).toBeGreaterThanOrEqual(previous);
			previous = timeout;
		}
	});

	it('treats a negative length as zero rather than shrinking the deadline', () => {
		expect(SidecarRpcClient.typingCallTimeoutMs(-100)).toBe(15_000);
	});
});
