/**
 * The failure vocabulary of the Windows sidecar installer.
 *
 * Every way the sidecar can fail to become available is one of these codes,
 * so the output channel, the refusal the model relays, and a bug report all
 * say the same thing. The code is the contract; the message is one user-facing
 * sentence naming what happened and what clears it.
 *
 * | Code | Meaning | Retried on the next tool call |
 * | --- | --- | --- |
 * | `unsupported_host` | Not x64/arm64, or Cursor older than the host floor | no |
 * | `config_invalid` | The Statsig manifest URL is not an exact immutable Windows release on the release host | no |
 * | `offline` | The release host could not be reached (DNS, connect, reset, timeout) | yes |
 * | `proxy_blocked` | A proxy or captive portal answered instead of the CDN, or TLS interception broke the chain | yes |
 * | `cdn_error` | The release host answered with an error status after retries | yes |
 * | `manifest_invalid` | The manifest failed schema, identity, product, or protocol admission | no |
 * | `download_corrupt` | The downloaded bytes did not match the manifest's size or SHA-256 | yes |
 * | `signature_mismatch` | A downloaded release is not `Valid` Authenticode from the pinned signer, or not a PE for this architecture; it is never installed | no |
 * | `signature_unverifiable` | The Authenticode check itself could not run (PowerShell failed to start or returned no report), so the release is neither installed nor launched; a cached release is kept, not replaced | yes |
 * | `unsigned_sidecar` | The sidecar about to be launched is not signed by the pinned signer. For the dev-install or `CUA_SERVICE_EXE` slot, set `CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR=1` in Cursor's environment (development only; never honoured for a downloaded release) | no |
 * | `install_locked` | Another Cursor window is installing right now | yes |
 * | `install_failed` | The install directory could not be written or the swap failed (AV holding the file, Controlled Folder Access) | yes |
 * | `unavailable` | No manifest is configured and nothing is on disk | no |
 */

import { CURSOR_PRODUCT_PROFILE } from './product-profile';
import { ComputerUseRPCError } from '../common/errors';

export type WindowsSidecarFailureCode =
	| 'unsupported_host'
	| 'config_invalid'
	| 'offline'
	| 'proxy_blocked'
	| 'cdn_error'
	| 'manifest_invalid'
	| 'download_corrupt'
	| 'signature_mismatch'
	| 'signature_unverifiable'
	| 'unsigned_sidecar'
	| 'install_locked'
	| 'install_failed'
	| 'unavailable';

export interface WindowsSidecarFailure {
	readonly code: WindowsSidecarFailureCode;
	/** One user-facing sentence: what happened and what clears it. */
	readonly message: string;
	/** The underlying error text, for the output channel. */
	readonly detail?: string;
	/** Whether the next tool call should try again. */
	readonly retryable: boolean;
}

const RETRYABLE_CODES: ReadonlySet<WindowsSidecarFailureCode> =
	new Set<WindowsSidecarFailureCode>([
		'offline',
		'proxy_blocked',
		'cdn_error',
		'download_corrupt',
		'signature_unverifiable',
		'install_locked',
		'install_failed',
	]);

export function isRetryableWindowsSidecarFailure(
	code: WindowsSidecarFailureCode
): boolean {
	return RETRYABLE_CODES.has(code);
}

/** Build a failure, deriving `retryable` from the code. */
export function windowsSidecarFailure(
	code: WindowsSidecarFailureCode,
	message: string,
	detail?: string
): WindowsSidecarFailure {
	return {
		code,
		message,
		...(detail !== undefined && detail.length > 0 ? { detail } : {}),
		retryable: isRetryableWindowsSidecarFailure(code),
	};
}

/** `Cursor Computer Use is unavailable [code]: message (detail)`. */
export function describeWindowsSidecarFailure(
	failure: WindowsSidecarFailure
): string {
	const detail =
		failure.detail !== undefined && failure.detail.length > 0
			? ` (${failure.detail})`
			: '';
	return `${CURSOR_PRODUCT_PROFILE.productName} is unavailable [${failure.code}]: ${failure.message}${detail}`;
}

/**
 * What a tool call sees when the sidecar cannot be made available. A
 * `ComputerUseRPCError` so the RPC client classifies it as
 * `sidecar_unavailable` (nothing was written to a sidecar), with the coded
 * description as the message the model relays to the user.
 */
export class WindowsSidecarUnavailableError extends ComputerUseRPCError {
	constructor(readonly failure: WindowsSidecarFailure) {
		super(describeWindowsSidecarFailure(failure));
		this.name = 'WindowsSidecarUnavailableError';
	}
}

/** A coded failure raised inside the install flow, before it is reported. */
export class WindowsSidecarInstallError extends Error {
	constructor(
		readonly code: WindowsSidecarFailureCode,
		message: string,
		readonly detail?: string
	) {
		super(message);
		this.name = 'WindowsSidecarInstallError';
	}

	toFailure(): WindowsSidecarFailure {
		return windowsSidecarFailure(this.code, this.message, this.detail);
	}
}

/** Every `code` on the error and its cause chain, outermost first. */
export function errorCodes(error: unknown): string[] {
	const codes: string[] = [];
	let current: unknown = error;
	for (let depth = 0; depth < 5 && current instanceof Error; depth += 1) {
		if ('code' in current && typeof current.code === 'string') {
			codes.push(current.code);
		}
		current = current.cause;
	}
	return codes;
}

/** The error's message with its cause's appended, for a log line. */
export function errorText(error: unknown): string {
	if (!(error instanceof Error)) {
		return String(error);
	}
	const cause = error.cause;
	const suffix =
		cause instanceof Error && cause.message !== error.message
			? `: ${cause.message}`
			: '';
	return `${error.message}${suffix}`;
}
