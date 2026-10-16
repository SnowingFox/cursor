/** Transport-agnostic newline-JSON RPC client for a computer-use sidecar. */

import { randomUUID } from 'node:crypto';
import {
	computerUseRefusal,
	type ComputerUseMode,
	type ComputerUseRefusal,
	type RemoteSidecarToolName,
	type SidecarResponse,
	type SidecarToolResult,
} from '@anysphere/computer-use/protocol';
import type { Context } from '@anysphere/context';
import { createLogger } from '@anysphere/context';
import { ComputerUseRPCError } from './errors';
import { SidecarProtocolError } from './rpc-codec';
import { SIDECAR_REQUEST_ID, sendSidecarRequest } from './rpc-connection';
import type { SidecarTransport } from './transport';
import {
	ComputerUseRefusalError,
	type ComputerUseBackend,
	type ComputerUseBatch,
	type ComputerUseClick,
	type ComputerUseDrag,
	type ComputerUsePoint,
	type ComputerUseScroll,
	type ComputerUseZoomAim,
	type ComputerUseZoomRegion,
} from '../types';

/** `zoom_id` goes on the wire only when an action carries one. */
function zoomIdArgument(aim: ComputerUseZoomAim | undefined): Record<string, unknown> {
	return aim?.zoomId === undefined ? {} : { zoom_id: aim.zoomId };
}

/** The two lease methods, the only non-tool requests this client sends. */
type SidecarLeaseMethod = 'control/start' | 'control/release';

/** What a log line or a refusal names the request by. */
type SidecarRequestName = RemoteSidecarToolName | SidecarLeaseMethod;

/**
 * Speaks the sidecar RPC contract over whatever endpoint its transport
 * resolves. The macOS and Windows sidecars implement the same methods,
 * argument names, and response arms, so only discovery and launch differ —
 * that is the transport's job.
 */
export class SidecarRpcClient implements ComputerUseBackend {
	private static readonly logger = createLogger('computer-use:rpc');
	private static readonly defaultCallTimeoutMs = 15_000;
	/**
	 * Per-character budget added on top of the base for a `computer_use_typing`
	 * call, so the client waits for a long value to finish landing instead of
	 * cutting it off. The sidecar now batches typing (≈1–3 s for 2k chars), but
	 * this covers even the paced fallback (≈13 ms/char over RDP), so the client
	 * never gives up on a type that is still progressing — the bug this fixes,
	 * where a 2,233-char value hit the flat 15 s deadline mid-type and the model
	 * was told to switch tools while the sidecar typed on.
	 */
	private static readonly typingTimeoutPerCharMs = 13;
	/** Headroom over the per-character budget for settle, encode, and hooks. */
	private static readonly typingTimeoutBaseMs = 8_000;

	/**
	 * The call timeout for a `computer_use_typing` value of `charCount`
	 * characters: the base plus the per-character budget, floored at the same
	 * 15 s every other tool uses so a short type is never given *less* time.
	 * This is both the client's patience and the deadline the sidecar honours,
	 * so it must comfortably exceed how long the sidecar takes to type the value.
	 */
	static typingCallTimeoutMs(charCount: number): number {
		const scaled =
			SidecarRpcClient.typingTimeoutBaseMs +
			Math.ceil(Math.max(0, charCount) * SidecarRpcClient.typingTimeoutPerCharMs);
		return Math.max(SidecarRpcClient.defaultCallTimeoutMs, scaled);
	}

	/**
	 * The call timeout for a `computer_use_batch`: what each step would have
	 * been given as a lone call, summed, since the steps run back to back and
	 * the sidecar stops at this deadline rather than leaving a step half-run.
	 */
	static batchCallTimeoutMs(batch: ComputerUseBatch): number {
		let total = 0;
		for (const step of batch.steps) {
			const value = step.arguments.value;
			total +=
				step.name === 'computer_use_typing' && typeof value === 'string'
					? SidecarRpcClient.typingCallTimeoutMs(value.length)
					: SidecarRpcClient.defaultCallTimeoutMs;
		}
		return Math.max(SidecarRpcClient.defaultCallTimeoutMs, total);
	}

	private endpointDiscovery:
		| { forceLaunch: boolean; promise: Promise<string> }
		| undefined;

	/** The session `control/start` handed out, until it is released. */
	private activeSessionId: string | undefined;

	constructor(
		private readonly mode: ComputerUseMode,
		private readonly transport: SidecarTransport
	) { }

	/** Release the transport's resources; a no-op for transports that hold none. */
	async dispose(ctx: Context): Promise<void> {
		this.endpointDiscovery = undefined;
		this.activeSessionId = undefined;
		await this.transport.dispose?.(ctx);
	}

	/**
	 * The remote-control lease. `control/start` is what puts the sidecar's
	 * on-screen presence up — the border and the agent cursor — and
	 * `control/release` is what takes it down; the sidecar answers start with
	 * the `sessionId` release
	 * has to name. Neither gates input on Windows (access to the pipe is
	 * gated by launch binding and peer verification), and a sidecar that
	 * receives input with no session shows the presence anyway, so a model
	 * that skips the tool still leaves the user informed. On Windows the
	 * toolset takes the lease with a turn's first input action and releases
	 * it when the turn ends (`ComputerUseMcpToolset.onTurnEnded`).
	 *
	 * A sidecar that predates the lease answers both with
	 * `unsupported_request`; that is treated as "nothing to show", not as a
	 * failure, so a mixed-version dev setup keeps working.
	 */
	async startControl(ctx: Context): Promise<void> {
		const response = await this.sendLease(ctx, 'control/start', {});
		if (response === undefined) {
			return;
		}
		if (response.ok !== true || response.sessionId === undefined) {
			throw new ComputerUseRPCError(
				'computer-use control start returned no session'
			);
		}
		this.activeSessionId = response.sessionId;
	}

	async releaseControl(ctx: Context): Promise<void> {
		const sessionId = this.activeSessionId;
		if (sessionId === undefined) {
			return;
		}
		// Cleared before the request goes out: whatever the sidecar answers,
		// this client no longer holds the session, and a second release must
		// not re-send it.
		this.activeSessionId = undefined;
		await this.sendLease(ctx, 'control/release', { sessionId });
	}

	/**
	 * One lease request. Resolves `undefined` for a sidecar that does not
	 * implement the lease (see `startControl`); any other refusal or transport
	 * failure is classified exactly as a tool call's would be.
	 */
	private async sendLease(
		ctx: Context,
		method: SidecarLeaseMethod,
		fields: Record<string, unknown>
	): Promise<SidecarResponse | undefined> {
		const response = await this.exchange(
			ctx,
			method,
			() => ({
				id: SIDECAR_REQUEST_ID,
				method,
				requestID: randomUUID(),
				mode: this.mode,
				...fields,
			}),
			SidecarRpcClient.defaultCallTimeoutMs
		);
		if (response.error === undefined) {
			return response;
		}
		if (response.errorCode === 'unsupported_request') {
			SidecarRpcClient.logger.info(
				ctx,
				'computer-use sidecar predates the remote-control lease; continuing without it',
				{ method, transport: this.transport.id }
			);
			return undefined;
		}
		if (response.errorCode !== undefined) {
			throw this.refuse(
				ctx,
				method,
				computerUseRefusal(
					response.errorCode,
					response.error,
					response.escalation
				)
			);
		}
		throw new ComputerUseRPCError(response.error);
	}

	screenshot(ctx: Context): Promise<SidecarToolResult> {
		return this.callTool(ctx, 'computer_use_screenshot', {});
	}

	/**
	 * The post-wait capture: the sidecar compares it to the last frame the model
	 * was shown and answers text-only (no image) when nothing changed, so a
	 * no-op wait costs neither the encode nor the image tokens. `computer_wait`
	 * uses this; the plain screenshot tool never sends the flag, so it always
	 * returns an image.
	 */
	screenshotAfterWait(ctx: Context): Promise<SidecarToolResult> {
		return this.callTool(ctx, 'computer_use_screenshot', {
			compare_to_last_frame: true,
		});
	}

	zoom(
		ctx: Context,
		region: ComputerUseZoomRegion
	): Promise<SidecarToolResult> {
		return this.callTool(ctx, 'computer_use_zoom', {
			x1: region.x1,
			y1: region.y1,
			x2: region.x2,
			y2: region.y2,
		});
	}

	click(ctx: Context, click: ComputerUseClick): Promise<SidecarToolResult> {
		return this.callTool(ctx, 'computer_use_click', {
			x: click.coordinate.x,
			y: click.coordinate.y,
			button: click.button,
			count: click.count,
			...zoomIdArgument(click),
		});
	}

	scroll(ctx: Context, scroll: ComputerUseScroll): Promise<SidecarToolResult> {
		return this.callTool(ctx, 'computer_use_scroll', {
			x: scroll.coordinate.x,
			y: scroll.coordinate.y,
			direction: scroll.direction,
			amount: scroll.amount,
			...zoomIdArgument(scroll),
		});
	}

	move(
		ctx: Context,
		coordinate: ComputerUsePoint,
		aim?: ComputerUseZoomAim
	): Promise<SidecarToolResult> {
		return this.callTool(ctx, 'computer_use_mouse_move', {
			x: coordinate.x,
			y: coordinate.y,
			...zoomIdArgument(aim),
		});
	}

	drag(ctx: Context, drag: ComputerUseDrag): Promise<SidecarToolResult> {
		return this.callTool(ctx, 'computer_use_drag', {
			button: drag.button,
			path: drag.path,
			...zoomIdArgument(drag),
		});
	}

	typeText(ctx: Context, text: string): Promise<SidecarToolResult> {
		return this.callTool(
			ctx,
			'computer_use_typing',
			{ value: text },
			SidecarRpcClient.typingCallTimeoutMs(text.length)
		);
	}

	pressKey(ctx: Context, key: string): Promise<SidecarToolResult> {
		return this.callTool(ctx, 'computer_use_press_key', { key });
	}

	batch(ctx: Context, batch: ComputerUseBatch): Promise<SidecarToolResult> {
		return this.callTool(
			ctx,
			'computer_use_batch',
			{
				steps: batch.steps.map(step => ({
					name: step.name,
					arguments: step.arguments,
					// On the wire only when set: the sidecar's default is false.
					...(step.expectChange ? { expect_change: true } : {}),
				})),
				...(batch.allowDestructive ? { allow_destructive: true } : {}),
			},
			SidecarRpcClient.batchCallTimeoutMs(batch)
		);
	}

	checkPermissions(ctx: Context): Promise<SidecarToolResult> {
		return this.callTool(ctx, 'computer_use_check_permissions', {});
	}

	/**
	 * One tool call. Every way it can fail is classified into a refusal the
	 * model can route on, thrown as `ComputerUseRefusalError`:
	 *
	 * - the sidecar refused the call — its own `code` and `escalation` are
	 *   passed through untouched, from `structuredContent` on a result or
	 *   `errorCode` on an envelope;
	 * - the sidecar could not be started or reached, or the connection failed
	 *   before the request was written — `sidecar_unavailable`, since nothing
	 *   can have actuated;
	 * - the request was written and no well-formed answer came back —
	 *   `outcome_unknown`, since the sidecar may already have acted on it.
	 *
	 * Only a sidecar that predates the codes still produces a plain
	 * `ComputerUseRPCError` here (an `isError` result with no `code`).
	 */
	async callTool(
		ctx: Context,
		name: RemoteSidecarToolName,
		args: Record<string, unknown>,
		timeoutMs: number = SidecarRpcClient.defaultCallTimeoutMs
	): Promise<SidecarToolResult> {
		// Fresh timestamps per attempt: a pre-delivery relaunch can take seconds, and
		// reusing the first attempt's deadline would present an already-elapsed window.
		const response = await this.exchange(
			ctx,
			name,
			() => {
				const startedAtEpochSeconds = Date.now() / 1000;
				return {
					id: SIDECAR_REQUEST_ID,
					method: 'tools/call',
					requestID: randomUUID(),
					name,
					arguments: args,
					timeoutSeconds: timeoutMs / 1000,
					startedAtEpochSeconds,
					deadlineEpochSeconds: startedAtEpochSeconds + timeoutMs / 1000,
					mode: this.mode,
				};
			},
			timeoutMs
		);
		if (response.error !== undefined) {
			if (response.errorCode !== undefined) {
				throw this.refuse(
					ctx,
					name,
					computerUseRefusal(
						response.errorCode,
						response.error,
						response.escalation
					)
				);
			}
			throw new ComputerUseRPCError(response.error);
		}
		const result = response.result;
		if (result === undefined) {
			// The sidecar answered, so it may have acted, but not with a result
			// arm: the outcome is as unknown as after a dropped connection.
			throw this.refuse(
				ctx,
				name,
				computerUseRefusal(
					'outcome_unknown',
					`computer-use tool ${name} returned no result`,
					SidecarRpcClient.outcomeUnknownHint(name)
				)
			);
		}
		// Surface tool-level failures (e.g. missing Screen Recording permission)
		// instead of silently returning an empty result.
		if (result.isError) {
			const text = result.message.trim();
			const message =
				text.length > 0 ? text : `computer-use tool ${name} reported an error`;
			const structured = result.structuredContent;
			if (structured?.code !== undefined) {
				throw this.refuse(
					ctx,
					name,
					computerUseRefusal(structured.code, message, structured.escalation)
				);
			}
			throw new ComputerUseRPCError(message);
		}
		return result;
	}

	/**
	 * One request/reply exchange over a fresh connection, relaunching the
	 * sidecar and retrying once when the request provably never reached it.
	 * `buildRequest` is called per attempt so timestamps are fresh. Every
	 * failure is already classified as a refusal when this throws.
	 */
	private async exchange(
		ctx: Context,
		name: SidecarRequestName,
		buildRequest: () => Record<string, unknown>,
		timeoutMs: number
	): Promise<SidecarResponse> {
		let endpoint: string;
		try {
			endpoint = await this.ensureEndpoint(ctx);
		} catch (error) {
			throw this.refuseUnreachable(ctx, name, error);
		}
		const send = (target: string): Promise<SidecarResponse> =>
			sendSidecarRequest(target, buildRequest(), timeoutMs, {
				...(this.transport.openSession !== undefined && {
					openSession: channel => this.transport.openSession!(ctx, channel),
				}),
			});
		try {
			return await send(endpoint);
		} catch (error) {
			// Retry only when the request provably never reached the sidecar, so
			// no input can have been synthesized. See
			// `preDeliveryConnectionErrorCode` for why this must stay that narrow.
			const errorCode = SidecarRpcClient.preDeliveryConnectionErrorCode(error);
			if (errorCode === undefined) {
				throw this.refuseTransportFailure(ctx, name, error);
			}
			SidecarRpcClient.logger.warn(
				ctx,
				'computer-use request failed; relaunching and retrying',
				{
					tool: name,
					transport: this.transport.id,
					errorCode,
				}
			);
			try {
				const retryEndpoint = await this.ensureEndpoint(ctx, true);
				return await send(retryEndpoint);
			} catch (retryError) {
				throw this.refuseTransportFailure(ctx, name, retryError);
			}
		}
	}

	/** Log the refusal where the output channel shows it, then wrap it. */
	private refuse(
		ctx: Context,
		name: SidecarRequestName,
		refusal: ComputerUseRefusal,
		cause?: unknown
	): ComputerUseRefusalError {
		SidecarRpcClient.logger.warn(ctx, 'computer-use tool refused', {
			tool: name,
			transport: this.transport.id,
			code: refusal.code,
			escalation: refusal.escalation.recommended,
		});
		return new ComputerUseRefusalError(refusal, cause);
	}

	/**
	 * Nothing was written to the sidecar, so nothing can have actuated: the
	 * sidecar is simply not there to talk to. Persistent or not (a missing
	 * executable versus a launch that will succeed next time), a model cannot
	 * tell, so the hand-off is to the user rather than a retry loop.
	 */
	private refuseUnreachable(
		ctx: Context,
		name: SidecarRequestName,
		error: unknown
	): ComputerUseRefusalError {
		return this.refuse(
			ctx,
			name,
			computerUseRefusal(
				'sidecar_unavailable',
				SidecarRpcClient.describe(error),
				{
					recommended: 'ask_user',
					reason:
						'The computer-use helper could not be started or reached, so nothing was actuated. Tell the user what the message says and ask them to check the "Cursor Computer Use" output channel; do not keep retrying on your own.',
				}
			),
			error
		);
	}

	/**
	 * A failure from the send path. `requestDelivered` on the connection error
	 * is what separates the two honest answers: before delivery the sidecar was
	 * unreachable; after it, the sidecar may have acted and the model has to
	 * look before it acts again. A malformed or mis-correlated response can only
	 * arise after delivery, so it is the second kind.
	 */
	private refuseTransportFailure(
		ctx: Context,
		name: SidecarRequestName,
		error: unknown
	): ComputerUseRefusalError {
		const delivered =
			error instanceof SidecarProtocolError ||
			(error instanceof ComputerUseRPCError && error.requestDelivered);
		if (!delivered) {
			return this.refuseUnreachable(ctx, name, error);
		}
		return this.refuse(
			ctx,
			name,
			computerUseRefusal(
				'outcome_unknown',
				SidecarRpcClient.describe(error),
				SidecarRpcClient.outcomeUnknownHint(name)
			),
			error
		);
	}

	private static outcomeUnknownHint(name: SidecarRequestName): {
		recommended: 'use_different_tool' | 'ask_user';
		reason: string;
	} {
		// Typing is the one tool whose "no answer came back" should not read as
		// "switch tools". Long text is entered in ≈1–3 s and the deadline is
		// scaled to its length, so a typing timeout means the text has very
		// likely landed in full (or the helper is genuinely stuck) — never that
		// typing is the wrong tool. The truthful next step is to look, not to
		// retype (which would duplicate) and not to abandon typing.
		if (name === 'computer_use_typing') {
			return {
				recommended: 'ask_user',
				reason: `The ${name} request reached the computer-use helper but no answer came back in time. Long text is entered in about 1–3 seconds and this call's deadline was scaled to its length, so the text has very likely already been typed in full — take a screenshot to confirm what is in the field, and do not retype it, which would duplicate it. If the field is unexpectedly empty the helper may be stuck; tell the user rather than retrying on your own.`,
			};
		}
		return {
			recommended: 'use_different_tool',
			reason: `The ${name} request reached the computer-use helper but no well-formed answer came back, so the action may or may not have happened. Take a screenshot to see the current state before acting again; repeating the action blind could double a click or keystroke.`,
		};
	}

	private static describe(error: unknown): string {
		if (error instanceof Error && error.message.trim().length > 0) {
			return error.message;
		}
		return String(error);
	}

	/**
	 * Coalesce concurrent discovery so parallel first calls launch one sidecar.
	 * A forced relaunch waits out an in-flight non-forced discovery first, so a
	 * relaunch never races the launch it is meant to replace.
	 */
	private async ensureEndpoint(
		ctx: Context,
		forceLaunch = false
	): Promise<string> {
		const activeDiscovery = this.endpointDiscovery;
		if (activeDiscovery !== undefined) {
			if (!forceLaunch || activeDiscovery.forceLaunch) {
				return activeDiscovery.promise;
			}
			return activeDiscovery.promise.then(() =>
				this.ensureEndpoint(ctx, true)
			);
		}
		const discovery = this.transport
			.resolveEndpoint(ctx, forceLaunch)
			.finally(() => {
				if (this.endpointDiscovery?.promise === discovery) {
					this.endpointDiscovery = undefined;
				}
			});
		this.endpointDiscovery = { forceLaunch, promise: discovery };
		return discovery;
	}

	/**
	 * Connection failures that provably happened before the request was
	 * written: a missing socket/pipe, or a listener that refused the dial.
	 *
	 * **No post-delivery failure may ever reach this.** Once the request is on
	 * the wire the sidecar may already have actuated, and on Windows there is
	 * no way to find out afterwards. `Actuator::click` issues the move and the
	 * button-down as separate `SendInput` calls, so a retry can land somewhere
	 * else entirely; and a successful `SendInput` return does not mean the
	 * input arrived — a UIPI refusal returns the full event count with neither
	 * an error nor a meaningful `GetLastError`, which Microsoft documents. The
	 * only trustworthy did-anything-happen signal is perceptual: comparing the
	 * before and after frames the sidecar already returns. Nothing here may be
	 * built on a return value.
	 *
	 * Two things enforce that, and the allowlist below is the weaker one.
	 * `SidecarConnection.onError` replaces a post-delivery socket error with a
	 * plain `ComputerUseRPCError`, discarding the errno, so adding a code here
	 * cannot resurrect a delivered request — the "does not retry a disconnect
	 * after request delivery" test pins that. Preserving the raw error there
	 * is what would actually be dangerous.
	 *
	 * `EBUSY` (every named-pipe instance in use) is excluded for an unrelated
	 * reason: relaunching cannot free an instance, and a second sidecar would
	 * abort on `FILE_FLAG_FIRST_PIPE_INSTANCE`.
	 */
	private static preDeliveryConnectionErrorCode(
		error: unknown
	): 'ENOENT' | 'ECONNREFUSED' | undefined {
		if (!(error instanceof Error) || !('code' in error)) {
			return undefined;
		}
		return error.code === 'ENOENT' || error.code === 'ECONNREFUSED'
			? error.code
			: undefined;
	}
}
