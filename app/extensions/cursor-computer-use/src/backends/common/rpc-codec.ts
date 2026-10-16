import {
	SidecarResponseSchema,
	type SidecarResponse,
} from '@anysphere/computer-use/protocol';

/**
 * Client-side codec over the shared sidecar wire contract
 * (`@anysphere/computer-use/protocol`). The contract owns the message
 * shapes; this layer owns what only a client needs: response-to-request id
 * correlation and the transport frame-size policy.
 *
 * Nothing here is platform-specific: both sidecars answer with the same
 * newline-delimited JSON frames over whatever endpoint the transport dialed.
 */

export class SidecarProtocolError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'SidecarProtocolError';
	}
}

interface ParseSidecarResponseOptions {
	line: Buffer;
	expectedID: number;
}

export class SidecarRpcCodec {
	/**
	 * Transport policy mirroring Swift `maxRPCResponseBytes` in
	 * `CULocalRPCConnection` and Rust `RESPONSE_MAX_BYTES` in
	 * `packages/computer-use/windows/src/protocol.rs`; a frame-size bound, not
	 * part of the shared message contract.
	 */
	static readonly responseMaxBytes: number = 32 * 1024 * 1024;

	static parseResponse({
		line,
		expectedID,
	}: ParseSidecarResponseOptions): SidecarResponse {
		const parsed = SidecarResponseSchema.safeParse(
			SidecarRpcCodec.parseJSON(line.toString('utf8'), 'RPC response')
		);
		if (!parsed.success) {
			throw new SidecarProtocolError(
				'computer-use RPC response is malformed'
			);
		}
		if (
			parsed.data.id !== undefined &&
			parsed.data.id !== null &&
			parsed.data.id !== expectedID
		) {
			throw new SidecarProtocolError(
				'computer-use RPC response ID did not match'
			);
		}
		return parsed.data;
	}

	private static parseJSON(raw: string, description: string): unknown {
		try {
			return JSON.parse(raw);
		} catch {
			throw new SidecarProtocolError(
				`computer-use ${description} is not valid JSON`
			);
		}
	}
}
