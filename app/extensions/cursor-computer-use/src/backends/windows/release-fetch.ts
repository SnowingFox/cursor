/**
 * Bounded HTTPS fetches for the Windows sidecar release, and the mapping from
 * whatever the network threw onto a failure code.
 *
 * Mirrors the macOS download rules: manual redirect handling (a redirect is
 * refused), `Content-Length` and streamed-byte caps, three attempts with a
 * short jittered backoff, and no retry of a refusal that will not change. The
 * extension host patches `globalThis.fetch`, so `http.proxy`, the system
 * proxy, and the system certificate store apply to these calls exactly as
 * they do to the macOS download.
 */

import { setTimeout as delay } from 'node:timers/promises';
import { CURSOR_PRODUCT_PROFILE } from './product-profile';
import {
	errorCodes,
	errorText,
	windowsSidecarFailure,
	type WindowsSidecarFailure,
	type WindowsSidecarFailureCode,
} from './sidecar-failure';

const DOWNLOAD_ATTEMPTS = 3;

export type ReleaseFetch = (url: string, init: RequestInit) => Promise<Response>;
/** The backoff sleep between attempts; injectable so tests need not wait. */
export type ReleaseBackoff = (ms: number, signal: AbortSignal) => Promise<void>;

export const defaultReleaseBackoff: ReleaseBackoff = (ms, signal) =>
	delay(ms, undefined, { signal });

/** A refusal that retrying the same request cannot change. */
export class PermanentDownloadError extends Error {
	constructor(
		message: string,
		readonly code: WindowsSidecarFailureCode,
		readonly detail?: string
	) {
		super(message);
		this.name = 'PermanentDownloadError';
	}
}

export interface ReleaseFetchLimits {
	/** Hard cap on the body; anything larger is refused before it is read. */
	readonly maxBytes: number;
	/** The size the manifest promised, when known; a body of another size is refused. */
	readonly expectedBytes?: number;
}

/**
 * Up to {@link DOWNLOAD_ATTEMPTS} tries with short jittered backoff; a
 * permanent refusal is not retried, and the caller's signal ends everything.
 */
export async function fetchReleaseWithRetries(
	url: string,
	limits: ReleaseFetchLimits,
	signal: AbortSignal,
	fetchImpl: ReleaseFetch,
	backoff: ReleaseBackoff = defaultReleaseBackoff
): Promise<Buffer> {
	let lastError: unknown;
	for (let attempt = 0; attempt < DOWNLOAD_ATTEMPTS; attempt += 1) {
		if (attempt > 0) {
			await backoff(100 * attempt + Math.floor(Math.random() * 50), signal);
		}
		try {
			return await fetchOnce(url, limits, signal, fetchImpl);
		} catch (error) {
			if (signal.aborted || error instanceof PermanentDownloadError) {
				throw error;
			}
			lastError = error;
		}
	}
	throw lastError ??
	new Error(`${CURSOR_PRODUCT_PROFILE.productName} download failed`);
}

async function fetchOnce(
	url: string,
	{ maxBytes, expectedBytes }: ReleaseFetchLimits,
	signal: AbortSignal,
	fetchImpl: ReleaseFetch
): Promise<Buffer> {
	signal.throwIfAborted();
	const response = await fetchImpl(url, {
		method: 'GET',
		redirect: 'manual',
		signal,
	});
	if (
		response.redirected ||
		(response.status >= 300 && response.status < 400)
	) {
		throw new PermanentDownloadError(
			'the release host redirected the download; a proxy or captive portal may be intercepting it',
			'proxy_blocked',
			`HTTP ${response.status}`
		);
	}
	if (!response.ok || response.body === null) {
		const detail = `HTTP ${response.status}`;
		if (response.status === 401 || response.status === 407) {
			throw new PermanentDownloadError(
				'a proxy refused the download; sign in to the proxy or configure http.proxy',
				'proxy_blocked',
				detail
			);
		}
		if (
			response.status === 408 ||
			response.status === 429 ||
			response.status >= 500
		) {
			throw new TransientStatusError(response.status);
		}
		throw new PermanentDownloadError(
			response.status === 403 || response.status === 404
				? 'the release host has no such release; the configured manifest may not be published yet'
				: 'the release host refused the download',
			'cdn_error',
			detail
		);
	}
	const contentType = response.headers.get('content-type') ?? '';
	if (/^text\/html\b/i.test(contentType)) {
		throw new PermanentDownloadError(
			'a web page answered instead of the release host; a proxy or captive portal is intercepting the download',
			'proxy_blocked',
			`content-type ${contentType}`
		);
	}
	const header = response.headers.get('content-length');
	const declaredBytes =
		header === null || !/^(0|[1-9][0-9]*)$/.test(header)
			? undefined
			: Number(header);
	if (
		(header !== null && declaredBytes === undefined) ||
		(declaredBytes !== undefined &&
			(!Number.isSafeInteger(declaredBytes) ||
				declaredBytes < 0 ||
				declaredBytes > maxBytes ||
				(expectedBytes !== undefined && declaredBytes !== expectedBytes)))
	) {
		throw new PermanentDownloadError(
			'the download announced a size that does not match the manifest',
			'download_corrupt',
			`content-length ${header ?? 'missing'}`
		);
	}
	const chunks: Buffer[] = [];
	let bytes = 0;
	for (const reader = response.body.getReader(); ;) {
		const next = await reader.read();
		if (next.done) {
			break;
		}
		bytes += next.value.byteLength;
		if (bytes > maxBytes) {
			await reader.cancel();
			throw new PermanentDownloadError(
				'the download exceeded its size limit',
				'download_corrupt',
				`more than ${maxBytes} bytes`
			);
		}
		chunks.push(Buffer.from(next.value));
	}
	if (expectedBytes !== undefined && bytes !== expectedBytes) {
		throw new PermanentDownloadError(
			'the download was not the size the manifest promised',
			'download_corrupt',
			`${bytes} of ${expectedBytes} bytes`
		);
	}
	return Buffer.concat(chunks, bytes);
}

/** A status worth another attempt; reported as `cdn_error` once they run out. */
class TransientStatusError extends Error {
	constructor(readonly status: number) {
		super(
			`${CURSOR_PRODUCT_PROFILE.productName} download returned HTTP ${status}`
		);
		this.name = 'TransientStatusError';
	}
}

const OFFLINE_CODES = new Set([
	'ENOTFOUND',
	'EAI_AGAIN',
	'EAI_FAIL',
	'ECONNREFUSED',
	'ECONNRESET',
	'ETIMEDOUT',
	'EHOSTUNREACH',
	'ENETUNREACH',
	'ENETDOWN',
	'EPIPE',
	'UND_ERR_CONNECT_TIMEOUT',
	'UND_ERR_SOCKET',
	'UND_ERR_HEADERS_TIMEOUT',
	'UND_ERR_BODY_TIMEOUT',
]);
const TLS_INTERCEPTION_CODES = new Set([
	'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
	'UNABLE_TO_GET_ISSUER_CERT',
	'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
	'SELF_SIGNED_CERT_IN_CHAIN',
	'DEPTH_ZERO_SELF_SIGNED_CERT',
	'CERT_HAS_EXPIRED',
	'CERT_UNTRUSTED',
	'CERT_SIGNATURE_FAILURE',
	'ERR_TLS_CERT_ALTNAME_INVALID',
	'HOSTNAME_MISMATCH',
]);

/**
 * Map a network error onto a failure, or undefined when it is not one.
 * Undici puts the socket-level `code` on `cause`: name resolution, connect,
 * reset, and timeout are `offline`; a TLS chain failure is a corporate proxy
 * re-signing traffic; a proxy status or an HTML answer is the proxy itself.
 */
export function classifyReleaseFetchError(
	error: unknown
): WindowsSidecarFailure | undefined {
	if (error instanceof PermanentDownloadError) {
		return windowsSidecarFailure(error.code, error.message, error.detail);
	}
	if (error instanceof TransientStatusError) {
		return windowsSidecarFailure(
			'cdn_error',
			'the release host kept answering with an error; try again later',
			`HTTP ${error.status}`
		);
	}
	const codes = errorCodes(error);
	const text = errorText(error);
	if (codes.some(code => TLS_INTERCEPTION_CODES.has(code))) {
		return windowsSidecarFailure(
			'proxy_blocked',
			`the release host's TLS certificate could not be verified; a corporate proxy may be intercepting HTTPS — trust its root certificate or allow ${CURSOR_PRODUCT_PROFILE.productName} downloads`,
			text
		);
	}
	if (
		codes.some(code => OFFLINE_CODES.has(code)) ||
		codes.includes('ABORT_ERR') ||
		(error instanceof Error &&
			(error.name === 'AbortError' || error.name === 'TimeoutError')) ||
		/fetch failed|network|timed? ?out/i.test(text)
	) {
		return windowsSidecarFailure(
			'offline',
			'the release host could not be reached; check the network connection or proxy and try again',
			text
		);
	}
	return undefined;
}
