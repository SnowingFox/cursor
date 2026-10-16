/**
 * NDJSON framing over a local stream endpoint, and the one-shot request/reply
 * exchange built on it.
 *
 * The wire layer is deliberately platform-agnostic: Node's
 * `net.createConnection({ path })` dials a Unix domain socket on macOS and a
 * `\\.\pipe\...` named pipe on Windows with the same call, and both sidecars
 * speak the same newline-delimited JSON. Discovering and launching the sidecar
 * is the transport's job (see `./transport`), as is any per-connection
 * preamble — Windows requires a launch-binding handshake as the first line,
 * macOS requires nothing.
 */

import { createConnection, type Socket } from 'node:net';
import type { SidecarResponse } from '@anysphere/computer-use/protocol';
import { ComputerUseRPCError } from './errors';
import { SidecarRpcCodec } from './rpc-codec';

/**
 * Every connection carries exactly one request, so a constant id is enough to
 * correlate the response; the diagnostic `requestID` is the per-call unique.
 */
export const SIDECAR_REQUEST_ID = 1;

/**
 * The line-level view of a live connection handed to a transport preamble.
 * Deliberately narrow: a preamble may exchange framed lines and nothing else.
 */
export interface SidecarLineChannel {
	writeLine(line: string): Promise<void>;
	/** Resolve the next complete frame, or reject on close/timeout. */
	readLine(timeoutMs: number): Promise<Buffer>;
}

/**
 * One connection's framing state machine.
 *
 * Reads are served from a queue so a preamble and the RPC exchange can each
 * await their own frame in order. The `requestDelivered` flag is what lets the
 * caller distinguish a failure that provably happened before the RPC request
 * was written (safe to retry) from one after (retrying could duplicate a real
 * click or keystroke) — a preamble write does not set it, because a handshake
 * actuates nothing.
 */
class SidecarConnection implements SidecarLineChannel {
	private readonly socket: Socket;
	private bufferedChunks: Buffer[] = [];
	private bufferedBytes = 0;
	private readonly frames: Buffer[] = [];
	private readonly waiters: {
		resolve: (frame: Buffer) => void;
		reject: (error: unknown) => void;
	}[] = [];
	private failure: unknown;
	private closed = false;
	private destroyed = false;

	requestDelivered = false;

	constructor(endpoint: string) {
		this.socket = createConnection({ path: endpoint });
		this.socket.on('data', chunk => this.onData(chunk));
		this.socket.on('error', error => this.onError(error));
		this.socket.on('close', () => this.onClose());
	}

	writeLine(line: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this.failure !== undefined) {
				reject(this.failure);
				return;
			}
			this.socket.write(`${line}\n`, error => {
				if (error == null) {
					resolve();
					return;
				}
				// Prefer the socket's own failure. A dial that fails destroys
				// the socket, and the queued write is then rejected with a
				// generic "closed before the connection was established" that
				// has lost the errno; the retry policy keys on ENOENT and
				// ECONNREFUSED, so surfacing the write error instead would
				// silently stop the client relaunching a dead sidecar. Yield a
				// turn first because the two arrive in either order.
				setImmediate(() => reject(this.failure ?? error));
			});
		});
	}

	readLine(timeoutMs: number): Promise<Buffer> {
		return new Promise((resolve, reject) => {
			const ready = this.frames.shift();
			if (ready !== undefined) {
				resolve(ready);
				return;
			}
			if (this.failure !== undefined) {
				reject(this.failure);
				return;
			}
			if (this.closed) {
				reject(
					new ComputerUseRPCError(this.closeMessage(), this.requestDelivered)
				);
				return;
			}
			const timer = setTimeout(() => {
				const index = this.waiters.indexOf(waiter);
				if (index >= 0) {
					this.waiters.splice(index, 1);
				}
				reject(
					new ComputerUseRPCError(
						`computer-use RPC timed out after ${timeoutMs}ms`,
						this.requestDelivered
					)
				);
			}, timeoutMs);
			const waiter = {
				resolve: (frame: Buffer) => {
					clearTimeout(timer);
					resolve(frame);
				},
				reject: (error: unknown) => {
					clearTimeout(timer);
					reject(error);
				},
			};
			this.waiters.push(waiter);
		});
	}

	destroy(): void {
		if (this.destroyed) {
			return;
		}
		this.destroyed = true;
		this.socket.destroy();
	}

	private onData(chunk: Buffer): void {
		let rest = chunk;
		for (; ;) {
			const newlineIndex = rest.indexOf(0x0a);
			const frameBytes =
				this.bufferedBytes + (newlineIndex < 0 ? rest.length : newlineIndex);
			if (frameBytes > SidecarRpcCodec.responseMaxBytes) {
				// An oversized reply is still a reply: after the request was
				// written the sidecar has run the tool, so this is an unknown
				// outcome, not an unreachable sidecar.
				this.fail(
					new ComputerUseRPCError(
						'computer-use RPC response exceeded the size limit',
						this.requestDelivered
					)
				);
				return;
			}
			if (newlineIndex < 0) {
				if (rest.length > 0) {
					this.bufferedChunks.push(rest);
					this.bufferedBytes += rest.length;
				}
				return;
			}
			this.bufferedChunks.push(rest.subarray(0, newlineIndex));
			this.deliver(Buffer.concat(this.bufferedChunks, frameBytes));
			this.bufferedChunks = [];
			this.bufferedBytes = 0;
			rest = rest.subarray(newlineIndex + 1);
		}
	}

	private deliver(frame: Buffer): void {
		const waiter = this.waiters.shift();
		if (waiter === undefined) {
			this.frames.push(frame);
			return;
		}
		waiter.resolve(frame);
	}

	private onError(error: unknown): void {
		this.fail(
			this.requestDelivered
				? new ComputerUseRPCError(
					'computer-use RPC connection failed after request delivery',
					true
				)
				: error
		);
	}

	private onClose(): void {
		this.closed = true;
		if (this.failure !== undefined || this.waiters.length === 0) {
			return;
		}
		this.fail(
			new ComputerUseRPCError(this.closeMessage(), this.requestDelivered)
		);
	}

	private closeMessage(): string {
		if (this.bufferedBytes > 0) {
			return 'computer-use RPC response ended without a newline';
		}
		return this.requestDelivered
			? 'computer-use RPC connection closed after request delivery'
			: 'computer-use RPC connection closed';
	}

	private fail(error: unknown): void {
		if (this.failure !== undefined) {
			return;
		}
		this.failure = error;
		while (this.waiters.length > 0) {
			this.waiters.shift()?.reject(error);
		}
	}
}

export interface SendSidecarRequestOptions {
	/**
	 * Transport preamble run after connect and before the RPC line. Throwing
	 * abandons the connection without the request ever being written.
	 */
	openSession?: (channel: SidecarLineChannel) => Promise<void>;
}

/** Send one newline-delimited JSON-RPC request over one connection. */
export async function sendSidecarRequest(
	endpoint: string,
	request: Record<string, unknown>,
	timeoutMs: number,
	options: SendSidecarRequestOptions = {}
): Promise<SidecarResponse> {
	const connection = new SidecarConnection(endpoint);
	// One deadline for the whole exchange, not per read: connecting, the
	// preamble, and the reply all have to fit inside the caller's timeout, and
	// a dial that never completes must not hang the tool call forever.
	let expire: (() => void) | undefined;
	const expired = new Promise<never>((_resolve, reject) => {
		const timer = setTimeout(() => {
			// Read before destroying: the flag is what tells the caller whether
			// the sidecar may have acted on a request it never answered.
			const requestDelivered = connection.requestDelivered;
			connection.destroy();
			reject(
				new ComputerUseRPCError(
					`computer-use RPC timed out after ${timeoutMs}ms`,
					requestDelivered
				)
			);
		}, timeoutMs);
		expire = () => clearTimeout(timer);
	});
	// The rejection is always consumed by the race below; this only silences
	// the unhandled-rejection warning for the path where the race is already
	// settled by the time the timer fires.
	expired.catch(() => { });

	const exchange = async (): Promise<SidecarResponse> => {
		if (options.openSession !== undefined) {
			await options.openSession(connection);
		}
		await connection.writeLine(JSON.stringify(request));
		connection.requestDelivered = true;
		const line = await connection.readLine(timeoutMs);
		return SidecarRpcCodec.parseResponse({
			line,
			expectedID: SIDECAR_REQUEST_ID,
		});
	};

	try {
		return await Promise.race([exchange(), expired]);
	} finally {
		expire?.();
		connection.destroy();
	}
}
