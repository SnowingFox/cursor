import {
	SidecarServiceStateSchema,
	SidecarResponseSchema,
	type SidecarResponse,
} from '@anysphere/computer-use/protocol';

/**
 * Client-side codec over the shared sidecar wire contract
 * (`@anysphere/computer-use/protocol`). The contract owns the message
 * shapes; this layer owns what only a client needs: response-to-request id
 * correlation, socket/legacy-path normalization for service discovery, and
 * the transport frame-size policy.
 */

export class MacRPCProtocolError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'MacRPCProtocolError';
	}
}

/** Normalized service rendezvous the client dials and health-checks. */
export interface MacServiceRendezvous {
	rpcSocketPath: string;
	pid: number;
	protocolMajor?: number;
	updatedAt: number;
}

interface ParseMacRPCResponseOptions {
	line: Buffer;
	expectedID: number;
}

export class MacRPCProtocol {
	/**
	 * Transport policy mirroring Swift `maxRPCResponseBytes` in
	 * `CULocalRPCConnection`; a frame-size bound, not part of the shared
	 * message contract.
	 */
	static readonly responseMaxBytes: number = 32 * 1024 * 1024;

	static parseServiceState(raw: string): MacServiceRendezvous {
		const parsed = SidecarServiceStateSchema.safeParse(
			MacRPCProtocol.parseJSON(raw, 'service state')
		);
		// The shared schema is a per-platform union; only the unix arms are a
		// valid macOS rendezvous, so a named-pipe state is malformed here. The
		// unix arms mirror the Swift decode order: new writers set
		// rpcSocketPath, legacy states carry only appControlSocketPath.
		const state =
			parsed.success && parsed.data.transport === 'unix-json-rpc'
				? parsed.data
				: undefined;
		const socketPath =
			state === undefined
				? undefined
				: (state.rpcSocketPath ?? state.appControlSocketPath);
		if (
			state === undefined ||
			socketPath == null ||
			!Number.isSafeInteger(state.pid) ||
			state.pid <= 0
		) {
			throw new MacRPCProtocolError('computer-use service state is malformed');
		}
		return {
			rpcSocketPath: socketPath,
			pid: state.pid,
			...(state.protocolMajor != null && {
				protocolMajor: state.protocolMajor,
			}),
			updatedAt: state.updatedAt,
		};
	}

	static parseResponse({
		line,
		expectedID,
	}: ParseMacRPCResponseOptions): SidecarResponse {
		const parsed = SidecarResponseSchema.safeParse(
			MacRPCProtocol.parseJSON(line.toString('utf8'), 'RPC response')
		);
		if (!parsed.success) {
			throw new MacRPCProtocolError('computer-use RPC response is malformed');
		}
		if (
			parsed.data.id !== undefined &&
			parsed.data.id !== null &&
			parsed.data.id !== expectedID
		) {
			throw new MacRPCProtocolError(
				'computer-use RPC response ID did not match'
			);
		}
		return parsed.data;
	}

	private static parseJSON(raw: string, description: string): unknown {
		try {
			return JSON.parse(raw);
		} catch {
			throw new MacRPCProtocolError(
				`computer-use ${description} is not valid JSON`
			);
		}
	}
}
