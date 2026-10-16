/**
 * Step 4 of the Windows client handshake contract: prove the connection
 * reached the sidecar Cursor launched, not a squatter.
 *
 * The handshake only establishes who the *client* is. The `welcome` frame's
 * `pid` is the server's own assertion, so on its own it is worth nothing — a
 * squatter reads the token file and claims whatever pid it likes.
 *
 * ## How this gets its kernel-backed fact, and why not `GetNamedPipeServerProcessId`
 *
 * The contract names `GetNamedPipeServerProcessId` on the connected handle.
 * Node's `net.Socket` never exposes the underlying `HANDLE` — `_handle.fd` is
 * not usable for a Windows pipe — so calling it requires either a native addon
 * or a helper process. Both were considered and rejected:
 *
 * - A native N-API addon means node-gyp, prebuilds for `win32-x64` and
 *   `win32-arm64`, and packaging them into an extension that has never shipped
 *   one. That is a build-system change, not a client change.
 * - A PowerShell helper holding its own connection cannot work here. The pipe
 *   is created with `nMaxInstances = 1`, so a probe cannot run alongside the
 *   real connection; and the sidecar peer-checks every accepted client against
 *   the pinned signer *before* the handshake, so on a signed build the probe
 *   (`powershell.exe`, signed by Microsoft) would be rejected and would log a
 *   rejected-peer line on every launch — training operators to ignore the one
 *   alert that matters.
 *
 * What this uses instead is the kernel fact the sidecar already publishes to
 * us. The chain:
 *
 * 1. The sidecar creates the pipe with `FILE_FLAG_FIRST_PIPE_INSTANCE` and
 *    **aborts** when the name is taken — `pipe.rs` has no fallback path — and
 *    holds that single instance for its whole process lifetime. So the name is
 *    owned by exactly one process, from `CreateNamedPipeW` until it exits.
 * 2. It prints `listening on <pipe name>` to stderr only after that create
 *    succeeded. We read that line off a stderr pipe we handed our own child, so
 *    nothing but our child can produce it. That is the launch provenance.
 * 3. Node holds the child's process handle until exit is reaped, so the pid
 *    cannot be recycled underneath us while we are watching it.
 * 4. Therefore, while our child is alive, every successful dial of that name
 *    reaches our child — and `welcome.pid` must equal its pid.
 *
 * The attacks this closes are the same ones step 4.1 closes. A squatter that
 * already holds the name makes our child abort, so it never prints `listening`
 * and we never hand out an endpoint. A squatter that kills our child to steal
 * the name leaves the child dead, which is checked before every connection.
 *
 * Where it is weaker than the contract's wording: it only covers a sidecar
 * *this client launched*. There is deliberately no fall-through for a sidecar
 * found already running — {@link LaunchProvenanceVerifier} is the only
 * verifier, and without a launch record the transport refuses to connect.
 *
 * ## Signer pinning
 *
 * Step 4.2 asks for the signer of the server image. This verifies the sidecar
 * binary on disk immediately before spawning it, which covers the same
 * tampering and is strictly earlier than checking it after the fact. As on the
 * sidecar side, enforcement is derived: an unsigned client audits rather than
 * enforces. Until the sidecar ships Authenticode-signed, a passing signer check
 * proves nothing — the launch-binding token and the provenance chain above are
 * what is actually protecting this path today.
 */

import type { Context } from '@anysphere/context';
import { createLogger } from '@anysphere/context';
import { ComputerUseRPCError } from '../common/errors';
import type { WindowsSidecarSource } from './pipe-discovery';
import {
	WindowsSidecarUnavailableError,
	windowsSidecarFailure,
} from './sidecar-failure';
import type { SignerVerdict } from './signer';

const logger = createLogger('computer-use:windows-identity');

/** Mirrors `PeerPolicy::from_self_verdict`: only a signed build enforces. */
export type SignerPolicy = 'enforce' | 'audit';

export function derivePolicyFromClientVerdict(
	clientVerdict: SignerVerdict
): SignerPolicy {
	return clientVerdict.kind === 'trusted' ? 'enforce' : 'audit';
}

/**
 * The developer escape hatch from the signer pin.
 *
 * A pinned-signed Cursor enforces the pin, so a locally built, unsigned
 * sidecar in the dev-install slot stops launching on a Labs or production
 * build — the right default, and exactly what breaks the local testing
 * recipe. Setting this variable to the literal `1` in Cursor's environment
 * (a launcher script; there is deliberately no setting a launcher could flip
 * by accident) lets an unpinned image launch anyway, with three limits:
 *
 * - only for the two developer sources, the `CUA_SERVICE_EXE` override and
 *   the hand-staged dev-install slot — never for a release the client
 *   downloaded and verified itself;
 * - only the exact value `1`, so `true`, `yes`, or a stray non-empty value
 *   do nothing;
 * - logged as `DEVELOPER OVERRIDE` at warn level on every launch, so a box
 *   running with it cannot mistake itself for a verified setup.
 *
 * This does not touch the sidecar's own verification of the client; the
 * sidecar keeps deriving its policy from its own image.
 */
export const ALLOW_UNSIGNED_SIDECAR_ENV = 'CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR';

const DEVELOPER_SIDECAR_SOURCES: ReadonlySet<WindowsSidecarSource> =
	new Set<WindowsSidecarSource>(['env-override', 'dev-install']);

export function isDeveloperSidecarSource(source: WindowsSidecarSource): boolean {
	return DEVELOPER_SIDECAR_SOURCES.has(source);
}

/** Whether the escape hatch applies to a sidecar from `source`. */
export function developerUnsignedSidecarAllowed(
	source: WindowsSidecarSource,
	env: Record<string, string | undefined> = process.env
): boolean {
	return (
		env[ALLOW_UNSIGNED_SIDECAR_ENV] === '1' && isDeveloperSidecarSource(source)
	);
}

export function describeSignerVerdict(verdict: SignerVerdict): string {
	switch (verdict.kind) {
		case 'trusted':
			return `signed by ${verdict.subject}`;
		case 'untrusted-signer':
			return `signed by ${verdict.subject}, not "Anysphere, Inc."`;
		case 'unsigned':
			return `not validly signed (${verdict.detail})`;
		case 'unverifiable':
			return `could not be verified (${verdict.detail})`;
	}
}

/** The sidecar process this client started, and what we know about it. */
export interface SidecarLaunchRecord {
	pid: number;
	/** False once the child has exited; backed by a retained process handle. */
	isAlive(): boolean;
}

export class LaunchProvenanceVerifier {
	constructor(private readonly record: SidecarLaunchRecord) { }

	/**
	 * Called on every connection, after the `welcome` frame and before any RPC
	 * line. Throws to abandon the connection.
	 */
	verifyWelcome(ctx: Context, welcomePid: number): void {
		if (!this.record.isAlive()) {
			// The child that won the pipe name is gone, so whatever answered
			// took the name after it died.
			throw new ComputerUseRPCError(
				'computer-use sidecar exited; refusing to talk to whatever now holds the pipe'
			);
		}
		if (welcomePid !== this.record.pid) {
			throw new ComputerUseRPCError(
				`computer-use sidecar identity mismatch: the pipe answered as pid ${welcomePid}, but the sidecar this client launched is pid ${this.record.pid}`
			);
		}
		logger.debug(ctx, 'sidecar identity confirmed', { pid: welcomePid });
	}
}

/**
 * Apply the signer policy to the sidecar image before it is executed. Throws
 * under `enforce`; logs and continues under `audit`, or under the developer
 * escape hatch ({@link ALLOW_UNSIGNED_SIDECAR_ENV}) for a developer source.
 * A refusal of a developer-source image names the escape hatch, so a
 * developer sees the remedy rather than a bare refusal.
 */
export function enforceSidecarImageSigner(
	ctx: Context,
	options: {
		imagePath: string;
		verdict: SignerVerdict;
		policy: SignerPolicy;
		/** Where the image came from; decides whether the escape hatch can apply. */
		source?: WindowsSidecarSource;
		/** Defaults to `process.env`; injectable for tests. */
		env?: Record<string, string | undefined>;
	}
): void {
	if (options.verdict.kind === 'trusted') {
		return;
	}
	const description = describeSignerVerdict(options.verdict);
	const developerSource =
		options.source !== undefined && isDeveloperSidecarSource(options.source);
	if (
		options.source !== undefined &&
		developerUnsignedSidecarAllowed(options.source, options.env)
	) {
		logger.warn(
			ctx,
			`DEVELOPER OVERRIDE: launching an unpinned computer-use sidecar because ${ALLOW_UNSIGNED_SIDECAR_ENV}=1 is set; this never applies to a downloaded sidecar`,
			{ imagePath: options.imagePath, source: options.source, verdict: description }
		);
		return;
	}
	if (options.policy === 'enforce') {
		const remedy = developerSource
			? `; for development only, start Cursor with ${ALLOW_UNSIGNED_SIDECAR_ENV}=1 in its environment to launch it anyway (logged on every launch; never honoured for a downloaded release)`
			: '';
		// Coded, so the output channel and the refusal the model relays name
		// `unsigned_sidecar` and the remedy rather than a bare refusal.
		throw new WindowsSidecarUnavailableError(
			windowsSidecarFailure(
				'unsigned_sidecar',
				`refusing to launch the computer-use sidecar: ${options.imagePath} is ${description}${remedy}`
			)
		);
	}
	logger.warn(
		ctx,
		'AUDIT-ONLY: launching an unpinned computer-use sidecar because this client is not itself pinned-signed',
		{ imagePath: options.imagePath, verdict: description }
	);
}
