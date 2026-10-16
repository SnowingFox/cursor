/**
 * Transport-level and tool-level failures talking to a computer-use sidecar.
 *
 * `requestDelivered` records whether the RPC request had been written to the
 * sidecar when the failure happened. It is the one fact a caller needs to
 * classify the failure honestly: before delivery nothing can have actuated, so
 * the failure is the sidecar being unreachable; after delivery the sidecar may
 * already have clicked or typed, so the outcome is unknown and a blind retry
 * could double it. The connection layer sets it; nothing else may.
 */
export class ComputerUseRPCError extends Error {
	constructor(
		message: string,
		readonly requestDelivered: boolean = false
	) {
		super(message);
		this.name = 'ComputerUseRPCError';
	}
}
