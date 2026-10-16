/**
 * Step 3 of the Windows client handshake contract: the launch-binding
 * handshake that must be the first NDJSON line on every connection, including
 * a reconnect, before any RPC.
 *
 * Authoritative shapes: `HandshakeRequest`, `encode_welcome_line`, and
 * `encode_denied_line` in `packages/computer-use/windows/src/launch_binding.rs`.
 */

import {
	SIDECAR_HANDSHAKE_MAX_BYTES,
	SIDECAR_HANDSHAKE_VERSION,
	SidecarHandshakeReplySchema,
} from '@anysphere/computer-use/protocol';
import { ComputerUseRPCError } from '../common/errors';

/** Raised when the sidecar refuses the handshake. Never retried in place. */
export class SidecarHandshakeDeniedError extends ComputerUseRPCError {
	constructor(reason: string) {
		super(`computer-use sidecar refused the connection: ${reason}`);
		this.name = 'SidecarHandshakeDeniedError';
	}
}

export function encodeHelloLine(token: string): string {
	const line = JSON.stringify({
		cua: 'hello',
		version: SIDECAR_HANDSHAKE_VERSION,
		token,
	});
	// The sidecar refuses to buffer a longer first line, so a client that
	// somehow built one should say why rather than get a generic denial.
	if (Buffer.byteLength(line, 'utf8') > SIDECAR_HANDSHAKE_MAX_BYTES) {
		throw new ComputerUseRPCError(
			'computer-use handshake frame exceeded the size limit'
		);
	}
	return line;
}

/**
 * Parse the sidecar's single reply frame and return the pid it claims.
 *
 * That pid is the sidecar's own assertion and proves nothing on its own — a
 * squatter would simply claim whatever pid it liked. Step 4
 * (`./server-identity`) is what turns it into evidence.
 */
export function parseWelcomePid(line: Buffer): number {
	let parsed: unknown;
	try {
		parsed = JSON.parse(line.toString('utf8'));
	} catch {
		throw new ComputerUseRPCError(
			'computer-use handshake reply is not valid JSON'
		);
	}
	const reply = SidecarHandshakeReplySchema.safeParse(parsed);
	if (!reply.success) {
		throw new ComputerUseRPCError(
			'computer-use handshake reply is malformed'
		);
	}
	if (reply.data.cua === 'denied') {
		throw new SidecarHandshakeDeniedError(reply.data.reason);
	}
	if (reply.data.version !== SIDECAR_HANDSHAKE_VERSION) {
		throw new ComputerUseRPCError(
			`computer-use sidecar speaks handshake version ${reply.data.version}, expected ${SIDECAR_HANDSHAKE_VERSION}`
		);
	}
	return reply.data.pid;
}
