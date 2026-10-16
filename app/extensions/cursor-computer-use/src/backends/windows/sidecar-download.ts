/**
 * Download, verify, install, and update the Windows computer-use sidecar
 * (`cursor-cua-sidecar.exe`) from the release CDN — the Windows counterpart of
 * `backends/mac/sidecar-download.ts`, with three deliberate departures:
 *
 * 1. **Cache first.** A committed install whose `installed.json` names the
 *    configured manifest is verified (size, SHA-256, PE header, Authenticode)
 *    and used without touching the network. The macOS flow fetches the
 *    manifest before it looks at the cache, so an offline machine loses a
 *    feature it already has; here offline is the ordinary case.
 * 2. **A lock that recovers.** The install lock records its owner and is
 *    stolen once the owner is dead or the lock is older than a bound, so a
 *    crash mid-install does not wedge every later launch.
 * 3. **Authenticode plus SHA-256 in place of `codesign`/`spctl`**, and no
 *    archive: the pipeline publishes the bare signed executable, so there is no
 *    ZIP-hardening surface at all. The signer is pinned to the product
 *    profile's common name and the check is on the file that will be spawned.
 *
 * Every way this can fail is a `WindowsSidecarFailure` with a stable
 * machine-readable code (`./sidecar-failure`), so the output channel, the
 * refusal the model sees, and a bug report all say the same thing. Failures
 * that can clear on their own (offline, proxy, CDN, lock, filesystem) are
 * retried on the next tool call rather than only on window reload.
 *
 * Resolution order is `pipe-discovery`'s: `CUA_SERVICE_EXE` → download
 * cache → dev-install. The override never touches the network. The
 * dev-install slot is only reached when the download cache is empty and the
 * CDN could not fill it; it is never written to.
 *
 * Install root layout (`%USERPROFILE%\.cursor\computer-use-sidecar\`):
 * `cursor-cua-sidecar.exe` (the live image), `manifest.json` (the manifest as
 * fetched, for offline verification), `installed.json` (the commit record,
 * written last), `.lock/` while installing, and transient `.staged-*.exe`,
 * `.retired-*.exe`, `.metadata-*` files that a sweep removes.
 */

import { createHash, randomUUID } from 'node:crypto';
import {
	lstat,
	mkdir,
	readdir,
	readFile,
	rename,
	rm,
	writeFile,
} from 'node:fs/promises';
import { homedir } from 'node:os';
import * as path from 'node:path';
import { z } from 'zod/v3';
import {
	describeRecoveredSidecarInstallLock,
	SIDECAR_INSTALL_LOCK_STALE_AFTER_MS,
	SidecarInstallLockedError,
	withSidecarInstallLock,
	type SidecarInstallLockOptions,
} from '../common/sidecar-install-lock';
import {
	WINDOWS_MINIMUM_HOST_VERSION,
	hostVersionMeetsWindowsFloor,
} from './host-version';
import { verifyWindowsExecutableImage } from './pe-image';
import {
	WINDOWS_SIDECAR_EXECUTABLE_NAME,
	WINDOWS_SIDECAR_INSTALL_METADATA_NAME,
	resolveWindowsSidecarExecutable,
	windowsSidecarInstallRoot,
	type ResolveWindowsSidecarOptions,
	type ResolvedWindowsSidecar,
} from './pipe-discovery';
import {
	CURSOR_PRODUCT_PROFILE,
	WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS,
} from './product-profile';
import {
	classifyReleaseFetchError,
	defaultReleaseBackoff,
	fetchReleaseWithRetries,
	type ReleaseBackoff,
	type ReleaseFetch,
} from './release-fetch';
import {
	WINDOWS_SIDECAR_MAX_ARTIFACT_BYTES,
	WINDOWS_SIDECAR_MAX_MANIFEST_BYTES,
	WindowsSidecarManifestError,
	parseWindowsSidecarReleaseManifest,
	validateWindowsSidecarManifestUrl,
	windowsSidecarArchForNodeArch,
	type WindowsSidecarArch,
	type WindowsSidecarReleaseManifest,
} from './release-manifest';
import {
	WindowsSidecarInstallError,
	WindowsSidecarUnavailableError,
	describeWindowsSidecarFailure,
	errorText,
	windowsSidecarFailure,
	type WindowsSidecarFailure,
} from './sidecar-failure';
import {
	isPinnedSigner,
	verifyAuthenticodeSigner,
	type SignerVerdict,
} from './signer';

export {
	WINDOWS_MINIMUM_HOST_VERSION,
	compareCursorVersions,
	hostVersionMeetsWindowsFloor,
} from './host-version';
export { verifyWindowsExecutableImage } from './pe-image';
export {
	WindowsSidecarUnavailableError,
	describeWindowsSidecarFailure,
	isRetryableWindowsSidecarFailure,
	type WindowsSidecarFailure,
	type WindowsSidecarFailureCode,
} from './sidecar-failure';

const PROFILE = CURSOR_PRODUCT_PROFILE;
/** The manifest as fetched, kept beside the install for offline verification. */
export const WINDOWS_SIDECAR_CACHED_MANIFEST_NAME = 'manifest.json';
const STAGED_PREFIX = '.staged-';
const RETIRED_PREFIX = '.retired-';
const METADATA_TEMP_PREFIX = '.metadata-';
const MANIFEST_FETCH_TIMEOUT_MS = 15_000;
const ARTIFACT_FETCH_TIMEOUT_MS = 60_000;
/** Two failed prepares closer than this reuse the first failure. */
export const WINDOWS_SIDECAR_RETRY_INTERVAL_MS = 15_000;
/**
 * After a failed release refresh, how long a usable fallback (the verified
 * cache or the dev-install slot) is launched without asking the CDN again.
 * Without it, an offline machine would pay the manifest attempts on every
 * launch of a sidecar it already has.
 */
export const WINDOWS_SIDECAR_REFRESH_BACKOFF_MS = 5 * 60_000;

const installMetadataSchema = z.strictObject({
	schemaVersion: z.literal(1),
	manifestUrl: z.string().min(1),
	sha256: z.string().regex(/^[0-9a-f]{64}$/),
});
type InstallMetadata = z.infer<typeof installMetadataSchema>;

export interface WindowsSidecarDownloadDependencies {
	fetch: ReleaseFetch;
	/** Sleep between download attempts. */
	backoff: ReleaseBackoff;
	verifySigner(imagePath: string): Promise<SignerVerdict>;
	isPidAlive(pid: number): boolean;
	now(): number;
}

export type WindowsSidecarLogLevel = 'info' | 'warn' | 'error';

export interface WindowsSidecarInstallerOptions
	extends ResolveWindowsSidecarOptions {
	/**
	 * Reads the Statsig release config: one manifest URL per published
	 * architecture. It is read on every prepare — when a tool call launches
	 * the sidecar — rather than once at activation, where it races Statsig's
	 * startup hydration: that early the value is the registered fallback
	 * (`{x64: '', arm64: ''}`) or the bootstrap persisted by the previous
	 * session, and either would stick for the whole window. A real box did
	 * the latter: the read named the release it already had, the download
	 * cache matched it, and the newer release waited for the next restart.
	 * Empty or absent for this architecture means no CDN release is
	 * configured, so the download cache is ignored (a cached release nothing
	 * points at any more has been pulled). A rejected read means the config
	 * could not be read at all, which is not a pull: a committed release that
	 * still verifies against its own cached manifest keeps serving, with no
	 * network.
	 */
	readManifestConfig: () => PromiseLike<Record<string, unknown> | undefined>;
	/** False in unbuilt Cursor Dev, where the manifest is ignored as on macOS. */
	allowManifestDownload: boolean;
	/** `vscode.cursorVersion`, checked against the host floor. */
	hostVersion: string;
	/** Defaults to `process.arch`. */
	nodeArch?: string;
	dependencies?: Partial<WindowsSidecarDownloadDependencies>;
	log?: (level: WindowsSidecarLogLevel, message: string) => void;
}

export type WindowsSidecarPrepareResult =
	| { ok: true; resolved: ResolvedWindowsSidecar }
	| { ok: false; failure: WindowsSidecarFailure };

const defaultDependencies: WindowsSidecarDownloadDependencies = {
	fetch: (url, init) => fetch(url, init),
	backoff: defaultReleaseBackoff,
	verifySigner: verifyAuthenticodeSigner,
	isPidAlive: pid => {
		try {
			process.kill(pid, 0);
			return true;
		} catch (error) {
			return (
				error instanceof Error && 'code' in error && error.code === 'EPERM'
			);
		}
	},
	now: () => Date.now(),
};

/**
 * Owns the download cache for one extension host.
 *
 * `prepare` never throws (short of the caller's abort): it reads the release
 * config, then returns either the executable to launch or a coded failure.
 * `resolveForLaunch` is what the transport calls before every launch; it
 * re-runs the config read and the cache-first check (cheap: one Statsig
 * lookup, two small files and one hash), logs what it decided, and turns a
 * failure into a `ComputerUseRPCError` the tool call surfaces. Nothing runs
 * at activation, so a release Statsig had not loaded yet when the window
 * started is picked up by the launch that needs it. `verifySigner` memoizes
 * Authenticode verdicts per file digest so a session pays PowerShell once per
 * distinct set of bytes.
 */
export class WindowsSidecarInstaller {
	private readonly options: WindowsSidecarInstallerOptions;
	private readonly dependencies: WindowsSidecarDownloadDependencies;
	private readonly log: (level: WindowsSidecarLogLevel, message: string) => void;
	private readonly signerVerdicts = new Map<string, Promise<SignerVerdict>>();
	private inFlight: Promise<WindowsSidecarPrepareResult> | undefined;
	private lastFailure:
		| { failure: WindowsSidecarFailure; at: number }
		| undefined;
	/** The most recent failed attempt to reach the CDN, while a fallback serves. */
	private lastRefreshFailure:
		| { failure: WindowsSidecarFailure; at: number }
		| undefined;

	constructor(options: WindowsSidecarInstallerOptions) {
		this.options = options;
		this.dependencies = { ...defaultDependencies, ...options.dependencies };
		this.log = options.log ?? (() => undefined);
	}

	/** Resolve or install the sidecar. One prepare runs at a time. */
	prepare(signal?: AbortSignal): Promise<WindowsSidecarPrepareResult> {
		if (this.inFlight === undefined) {
			this.inFlight = this.prepareOnce(signal).finally(() => {
				this.inFlight = undefined;
			});
		}
		return this.inFlight;
	}

	/**
	 * The transport's `resolveExecutable`. A failure within
	 * `WINDOWS_SIDECAR_RETRY_INTERVAL_MS` of the previous one is reported
	 * again rather than re-attempted, so a model that ignores `ask_user`
	 * cannot turn the CDN into a retry loop. A fresh failure is logged here:
	 * the refusal the model relays carries the same text, but the output
	 * channel is where a user is sent to read it.
	 */
	async resolveForLaunch(): Promise<ResolvedWindowsSidecar> {
		const recent = this.lastFailure;
		if (
			recent !== undefined &&
			this.dependencies.now() - recent.at < WINDOWS_SIDECAR_RETRY_INTERVAL_MS &&
			this.inFlight === undefined
		) {
			throw new WindowsSidecarUnavailableError(recent.failure);
		}
		const result = await this.prepare();
		if (result.ok) {
			this.lastFailure = undefined;
			return result.resolved;
		}
		this.lastFailure = { failure: result.failure, at: this.dependencies.now() };
		this.log(
			'error',
			`${describeWindowsSidecarFailure(result.failure)}${result.failure.retryable ? '; retried on the next tool call' : ''}`
		);
		throw new WindowsSidecarUnavailableError(result.failure);
	}

	/**
	 * Authenticode verdict for `imagePath`, memoized on the file's SHA-256.
	 * The signature is embedded in the bytes, so the digest is the identity
	 * that matters: a same-size, same-mtime replacement misses the cache, and
	 * the staged copy verified before the swap is a hit when the transport
	 * re-checks the live path before spawning it. `unverifiable` is never
	 * cached because it is usually PowerShell failing to start, which the next
	 * call may not repeat.
	 */
	verifySigner = async (imagePath: string): Promise<SignerVerdict> => {
		let key: string;
		try {
			key = sha256Hex(await readFile(imagePath));
		} catch {
			return this.dependencies.verifySigner(imagePath);
		}
		const cached = this.signerVerdicts.get(key);
		if (cached !== undefined) {
			return cached;
		}
		const pending = this.dependencies.verifySigner(imagePath).then(
			verdict => {
				if (verdict.kind === 'unverifiable') {
					this.signerVerdicts.delete(key);
				}
				return verdict;
			},
			(error: unknown) => {
				this.signerVerdicts.delete(key);
				throw error;
			}
		);
		this.signerVerdicts.set(key, pending);
		return pending;
	};

	private async prepareOnce(
		signal: AbortSignal | undefined
	): Promise<WindowsSidecarPrepareResult> {
		signal?.throwIfAborted();
		if (!hostVersionMeetsWindowsFloor(this.options.hostVersion)) {
			return fail(
				'unsupported_host',
				`Cursor ${this.options.hostVersion} predates the ${PROFILE.productName} host floor ${WINDOWS_MINIMUM_HOST_VERSION}; update Cursor`
			);
		}
		const existing = resolveWindowsSidecarExecutable({
			...this.options,
			skipDownloadCache: true,
		});
		if (existing?.source === 'env-override') {
			return { ok: true, resolved: existing };
		}
		// `existing` is now the dev-install or nothing; the release config
		// decides between the CDN and it, so it is read only from here on.
		const nodeArch = this.options.nodeArch ?? process.arch;
		const arch = windowsSidecarArchForNodeArch(nodeArch);
		if (arch === undefined) {
			return fail(
				'unsupported_host',
				`${PROFILE.productName} publishes x64 and arm64 builds only; this Cursor is ${nodeArch}`
			);
		}
		const release = await this.readRelease(arch);
		signal?.throwIfAborted();
		const manifestUrl = release.manifestUrl;
		if (manifestUrl === undefined) {
			if (release.unreadable) {
				const cached = await this.verifiedCommittedInstall(arch, signal);
				if (cached.kind === 'locked') {
					// Same as the configured path: another window is working on
					// the cache right now; do not slide past it to the dev slot.
					return fail(
						'install_locked',
						`another Cursor window is installing ${PROFILE.productName}; try again in a moment`
					);
				}
				if (cached.kind === 'resolved') {
					this.log(
						'warn',
						`the ${PROFILE.productName} release config could not be read; using the verified cached release ${describeRelease(cached.manifest)} at ${cached.resolved.executablePath}`
					);
					return { ok: true, resolved: cached.resolved };
				}
			} else if (existing !== undefined) {
				this.log(
					'warn',
					`the ${PROFILE.productName} release config read empty for ${arch} (the Statsig fallback, or no release is configured); no download is attempted and the ${existing.source} sidecar at ${existing.executablePath} is kept`
				);
			}
			if (existing !== undefined) {
				return { ok: true, resolved: existing };
			}
			return fail(
				'unavailable',
				release.unreadable
					? `no ${PROFILE.productName} sidecar is installed and the release config could not be read`
					: `no ${PROFILE.productName} sidecar is installed and the release config read empty for ${arch} (the Statsig fallback, or no release is configured for this build)`
			);
		}
		if (!this.options.allowManifestDownload) {
			if (existing !== undefined) {
				this.log(
					'info',
					`Ignoring the ${PROFILE.productName} CDN manifest in Cursor Dev; using the ${existing.source} sidecar at ${existing.executablePath}`
				);
				return { ok: true, resolved: existing };
			}
			return fail(
				'unavailable',
				`the downloaded ${PROFILE.productName} sidecar requires a signed Labs or production Cursor client; Cursor Dev needs a local sidecar in ${path.join('%USERPROFILE%', ...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS)} or CUA_SERVICE_EXE`
			);
		}
		try {
			validateWindowsSidecarManifestUrl(manifestUrl, arch);
		} catch (error) {
			return fail(
				'config_invalid',
				`the configured ${PROFILE.productName} release is not an exact immutable Windows release for ${arch}`,
				errorText(error)
			);
		}

		const installRoot = windowsSidecarInstallRoot(
			this.options.homeDir ?? homedir()
		);
		let result: WindowsSidecarPrepareResult;
		try {
			await mkdir(installRoot, { recursive: true, mode: 0o700 });
			result = await withSidecarInstallLock(
				installRoot,
				() =>
					this.installUnderLock(installRoot, manifestUrl, arch, {
						hasFallback: existing !== undefined,
						signal,
					}),
				this.lockOptions()
			);
		} catch (error) {
			if (signal?.aborted) {
				throw error;
			}
			if (error instanceof SidecarInstallLockedError) {
				// Another window is filling the cache right now. Do not slide
				// past it to the dev-install slot: the release will be there
				// in seconds, and the next tool call picks it up.
				return fail(
					'install_locked',
					`another Cursor window is installing ${PROFILE.productName}; try again in a moment`
				);
			}
			result = { ok: false, failure: classifyInstallError(error) };
		}
		if (result.ok || existing === undefined) {
			// The caller logs a failure it receives.
			return result;
		}
		this.log(
			'warn',
			`${describeWindowsSidecarFailure(result.failure)}; falling back to the ${existing.source} sidecar at ${existing.executablePath}`
		);
		return { ok: true, resolved: existing };
	}

	/**
	 * Everything that reads or writes the install root. `hasFallback` says
	 * whether the caller has a dev-install to serve if this fails, which is
	 * what decides whether a recently failed refresh is worth repeating.
	 */
	private async installUnderLock(
		installRoot: string,
		manifestUrl: string,
		arch: WindowsSidecarArch,
		options: { hasFallback: boolean; signal: AbortSignal | undefined }
	): Promise<WindowsSidecarPrepareResult> {
		const { hasFallback, signal } = options;
		const livePath = path.join(installRoot, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		await recoverInterruptedSwap(installRoot, livePath);
		await sweepTransientFiles(installRoot);

		const committed = await readCommittedInstall(installRoot, arch);
		if (committed?.metadata.manifestUrl === manifestUrl) {
			try {
				await this.verifyImage(livePath, committed.manifest, arch);
				this.log(
					'info',
					`the configured ${PROFILE.productName} release ${describeRelease(committed.manifest)} is already installed for ${arch}; nothing to download`
				);
				return installed(livePath);
			} catch (error) {
				signal?.throwIfAborted();
				if (isUnverifiable(error)) {
					// The bytes still match the manifest; only the signer check
					// did not run. A fresh download would meet the same check,
					// so the cache is kept and the failure is retried instead.
					this.log(
						'warn',
						`cached ${PROFILE.productName} sidecar is kept but not launched: ${errorText(error)}`
					);
					return { ok: false, failure: classifyInstallError(error) };
				}
				this.log(
					'warn',
					`cached ${PROFILE.productName} sidecar failed verification and will be replaced: ${errorText(error)}`
				);
			}
		}
		const recentRefreshFailure = this.recentRefreshFailure();
		if (recentRefreshFailure !== undefined) {
			// The CDN was unreachable moments ago. Keep serving whatever
			// verified fallback there is rather than paying the attempts on
			// every launch; with nothing to serve, the refresh runs again —
			// unless it was the signer check that failed, which a new download
			// cannot fix.
			if (committed !== undefined) {
				try {
					await this.verifyImage(livePath, committed.manifest, arch);
					return installed(livePath);
				} catch (error) {
					signal?.throwIfAborted();
					if (isUnverifiable(error)) {
						return { ok: false, failure: classifyInstallError(error) };
					}
					// The cache is no longer usable; refresh after all.
				}
			} else if (
				hasFallback ||
				recentRefreshFailure.code === 'signature_unverifiable'
			) {
				return { ok: false, failure: recentRefreshFailure };
			}
		}

		let manifest: WindowsSidecarReleaseManifest;
		try {
			const raw = await fetchReleaseWithRetries(
				manifestUrl,
				{ maxBytes: WINDOWS_SIDECAR_MAX_MANIFEST_BYTES },
				combineSignals(signal, MANIFEST_FETCH_TIMEOUT_MS),
				this.dependencies.fetch,
				this.dependencies.backoff
			);
			manifest = parseWindowsSidecarReleaseManifest(raw.toString('utf8'), {
				manifestUrl,
				arch,
			});
		} catch (error) {
			return this.fallbackToCache(error, committed, livePath, arch, signal);
		}

		try {
			const artifact = await fetchReleaseWithRetries(
				manifest.artifact.url,
				{
					maxBytes: WINDOWS_SIDECAR_MAX_ARTIFACT_BYTES,
					expectedBytes: manifest.artifact.bytes,
				},
				combineSignals(signal, ARTIFACT_FETCH_TIMEOUT_MS),
				this.dependencies.fetch,
				this.dependencies.backoff
			);
			if (sha256Hex(artifact) !== manifest.artifact.sha256) {
				throw new WindowsSidecarInstallError(
					'download_corrupt',
					`the downloaded ${PROFILE.productName} sidecar did not match its published SHA-256`
				);
			}
			const stagedPath = path.join(
				installRoot,
				`${STAGED_PREFIX}${manifest.artifact.sha256}-${randomUUID()}.exe`
			);
			try {
				await writeInstallFile(stagedPath, artifact);
				await this.verifyImage(stagedPath, manifest, arch);
				await swapIntoPlace(installRoot, stagedPath, livePath);
			} finally {
				await rm(stagedPath, { force: true }).catch(() => undefined);
			}
			await writeAtomically(
				path.join(installRoot, WINDOWS_SIDECAR_CACHED_MANIFEST_NAME),
				`${JSON.stringify(manifest)}\n`
			);
			const metadata: InstallMetadata = {
				schemaVersion: 1,
				manifestUrl,
				sha256: manifest.executable.signedSha256,
			};
			await writeAtomically(
				path.join(installRoot, WINDOWS_SIDECAR_INSTALL_METADATA_NAME),
				`${JSON.stringify(metadata)}\n`
			);
			await sweepTransientFiles(installRoot);
			this.lastRefreshFailure = undefined;
			this.log(
				'info',
				`installed ${PROFILE.productName} sidecar ${describeRelease(manifest)} for ${arch}`
			);
			return installed(livePath);
		} catch (error) {
			return this.fallbackToCache(error, committed, livePath, arch, signal);
		}
	}

	/**
	 * This launch's release for `arch`, read from the Statsig config now and
	 * logged, so the output channel says which release a launch used and
	 * where the value came from. Only a non-empty URL can have come from
	 * Statsig: the config's fallback is empty for every architecture, so an
	 * empty value is either that fallback (Statsig not loaded yet) or a
	 * release that was pulled, and the two cannot be told apart here — the
	 * caller logs which sidecar it keeps in that case.
	 */
	private async readRelease(
		arch: WindowsSidecarArch
	): Promise<{ manifestUrl: string | undefined; unreadable: boolean }> {
		let config: Record<string, unknown> | undefined;
		try {
			config = await this.options.readManifestConfig();
		} catch (error) {
			this.log(
				'warn',
				`the ${PROFILE.productName} release config could not be read; a verified cached release or the development sidecar is used instead: ${errorText(error)}`
			);
			return { manifestUrl: undefined, unreadable: true };
		}
		const value = config?.[arch];
		if (typeof value !== 'string' || value === '') {
			return { manifestUrl: undefined, unreadable: false };
		}
		this.log(
			'info',
			`${PROFILE.productName} release for ${arch}, from the Statsig config: ${value}`
		);
		return { manifestUrl: value, unreadable: false };
	}

	/**
	 * The committed install, if it verifies against its own cached manifest
	 * (size, digest, PE header, Authenticode) — no network. Used when the
	 * release config cannot be read, which must not pull a good release.
	 * `locked` means another window holds the install lock and the caller
	 * must report that rather than slide to another source; `none` means
	 * there is no verified install and the caller falls through.
	 */
	private async verifiedCommittedInstall(
		arch: WindowsSidecarArch,
		signal: AbortSignal | undefined
	): Promise<
		| {
			kind: 'resolved';
			resolved: ResolvedWindowsSidecar;
			manifest: WindowsSidecarReleaseManifest;
		}
		| { kind: 'locked' }
		| { kind: 'none' }
	> {
		const installRoot = windowsSidecarInstallRoot(
			this.options.homeDir ?? homedir()
		);
		// Only an existing root can hold a lock or an install. Not the
		// committed-install check: a peer mid-way through the first download
		// holds the lock with `installed.json` still unwritten, and that
		// peer's release is what this window should wait for.
		if (!(await isDirectory(installRoot))) {
			return { kind: 'none' };
		}
		const livePath = path.join(installRoot, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		try {
			return await withSidecarInstallLock(
				installRoot,
				async () => {
					// A crash between the two renames of an update leaves the
					// verified previous image under a retired name; put it back
					// here too, or an unreadable config after such a crash would
					// find no image at all.
					await recoverInterruptedSwap(installRoot, livePath);
					const committed = await readCommittedInstall(installRoot, arch);
					if (committed === undefined) {
						return { kind: 'none' as const };
					}
					await this.verifyImage(livePath, committed.manifest, arch);
					return {
						kind: 'resolved' as const,
						resolved: { executablePath: livePath, source: 'download-cache' as const },
						manifest: committed.manifest,
					};
				},
				this.lockOptions()
			);
		} catch (error) {
			if (signal?.aborted) {
				throw error;
			}
			if (error instanceof SidecarInstallLockedError) {
				return { kind: 'locked' };
			}
			this.log(
				'warn',
				`cached ${PROFILE.productName} sidecar is not usable while the release config is unreadable: ${errorText(error)}`
			);
			return { kind: 'none' };
		}
	}

	/**
	 * Stale recovery for a crashed peer, and a release failure (a scanner
	 * holding `owner.json`) logged rather than thrown, so a finished install is
	 * reported as what it is. The leftover lock names this process: peers
	 * honour it until this window exits or the stale bound passes.
	 */
	private lockOptions(): SidecarInstallLockOptions {
		return {
			staleRecovery: {
				staleAfterMs: SIDECAR_INSTALL_LOCK_STALE_AFTER_MS,
				isPidAlive: this.dependencies.isPidAlive,
				now: this.dependencies.now,
				onRecovered: lock => this.log('warn', describeRecoveredSidecarInstallLock(lock)),
			},
			onReleaseError: error => {
				this.log(
					'warn',
					`the ${PROFILE.productName} install lock could not be released; other windows wait for this one to exit or for the lock to go stale: ${errorText(error)}`
				);
			},
		};
	}

	/** The last refresh failure, if it is still within the backoff window. */
	private recentRefreshFailure(): WindowsSidecarFailure | undefined {
		const recent = this.lastRefreshFailure;
		return recent !== undefined &&
			this.dependencies.now() - recent.at < WINDOWS_SIDECAR_REFRESH_BACKOFF_MS
			? recent.failure
			: undefined;
	}

	/**
	 * A refresh failed. A committed install that still verifies against its
	 * own manifest keeps working — that is the whole point of cache-first —
	 * and the failure is logged rather than returned. Without one, the failure
	 * stands.
	 */
	private async fallbackToCache(
		error: unknown,
		committed: CommittedInstall | undefined,
		livePath: string,
		arch: WindowsSidecarArch,
		signal: AbortSignal | undefined
	): Promise<WindowsSidecarPrepareResult> {
		if (signal?.aborted) {
			throw error;
		}
		const failure = classifyInstallError(error);
		this.lastRefreshFailure = { failure, at: this.dependencies.now() };
		if (committed !== undefined) {
			try {
				await this.verifyImage(livePath, committed.manifest, arch);
				this.log(
					'info',
					`using the cached ${PROFILE.productName} sidecar ${describeRelease(committed.manifest)}; release refresh failed: ${describeWindowsSidecarFailure(failure)}`
				);
				return installed(livePath);
			} catch (cacheError) {
				this.log(
					'warn',
					`cached ${PROFILE.productName} sidecar failed verification: ${errorText(cacheError)}`
				);
			}
		}
		return { ok: false, failure };
	}

	/**
	 * The image checks, in cost order: size and SHA-256 against the manifest,
	 * the PE header for this architecture, then Authenticode from the pinned
	 * signer. `trusted` is required regardless of the client's own policy: a
	 * downloaded file that is not provably ours is never installed or launched.
	 */
	private async verifyImage(
		imagePath: string,
		manifest: WindowsSidecarReleaseManifest,
		arch: WindowsSidecarArch
	): Promise<void> {
		let bytes: Buffer;
		try {
			const info = await lstat(imagePath);
			if (!info.isFile() || info.isSymbolicLink()) {
				throw new Error('not a regular file');
			}
			bytes = await readFile(imagePath);
		} catch (error) {
			throw new WindowsSidecarInstallError(
				'install_failed',
				`the ${PROFILE.productName} sidecar at ${imagePath} could not be read`,
				errorText(error)
			);
		}
		if (
			bytes.length !== manifest.executable.bytes ||
			sha256Hex(bytes) !== manifest.executable.signedSha256
		) {
			throw new WindowsSidecarInstallError(
				'download_corrupt',
				`the ${PROFILE.productName} sidecar at ${imagePath} does not match its manifest`
			);
		}
		try {
			verifyWindowsExecutableImage(bytes, arch);
		} catch (error) {
			throw new WindowsSidecarInstallError(
				'signature_mismatch',
				`the ${PROFILE.productName} sidecar at ${imagePath} is not a Windows ${arch} executable`,
				errorText(error)
			);
		}
		const verdict = await this.verifySigner(imagePath);
		if (verdict.kind === 'unverifiable') {
			// Nothing is known about the bytes either way: the check did not
			// run (PowerShell failed to start, or returned no report). That is
			// a condition of this machine right now, not of the release, so it
			// is retried rather than treated as a foreign signature.
			throw new WindowsSidecarInstallError(
				'signature_unverifiable',
				`the ${PROFILE.productName} sidecar at ${imagePath} could not be checked for its Authenticode signature; it is not launched until the check succeeds`,
				verdict.detail
			);
		}
		if (verdict.kind !== 'trusted' || !isPinnedSigner(verdict.subject)) {
			throw new WindowsSidecarInstallError(
				'signature_mismatch',
				`the ${PROFILE.productName} sidecar at ${imagePath} is ${describeVerdict(verdict)}; only a build signed by ${PROFILE.pinnedSignerSubjects.join(' or ')} is launched`
			);
		}
	}
}

function isUnverifiable(error: unknown): boolean {
	return (
		error instanceof WindowsSidecarInstallError &&
		error.code === 'signature_unverifiable'
	);
}

async function isDirectory(target: string): Promise<boolean> {
	try {
		return (await lstat(target)).isDirectory();
	} catch {
		return false;
	}
}

function fail(
	code: WindowsSidecarFailure['code'],
	message: string,
	detail?: string
): WindowsSidecarPrepareResult {
	return { ok: false, failure: windowsSidecarFailure(code, message, detail) };
}

function installed(executablePath: string): WindowsSidecarPrepareResult {
	return { ok: true, resolved: { executablePath, source: 'download-cache' } };
}

/** `0.0.24 (explicit, 1a2b3c4d5e6f)`: what the channel needs to answer "which sidecar". */
function describeRelease(manifest: WindowsSidecarReleaseManifest): string {
	return `${manifest.sidecarVersion} (${manifest.lane}, ${manifest.sourceSha.slice(0, 12)})`;
}

/**
 * Map whatever the install flow threw onto a coded failure: the flow's own
 * coded errors, a refused manifest, a network failure, and finally anything
 * else as a filesystem problem.
 */
export function classifyInstallError(error: unknown): WindowsSidecarFailure {
	if (error instanceof WindowsSidecarInstallError) {
		return error.toFailure();
	}
	if (error instanceof WindowsSidecarManifestError) {
		return windowsSidecarFailure(
			'manifest_invalid',
			`the published ${PROFILE.productName} release manifest was refused`,
			error.message
		);
	}
	return (
		classifyReleaseFetchError(error) ??
		windowsSidecarFailure(
			'install_failed',
			`installing the ${PROFILE.productName} sidecar failed`,
			errorText(error)
		)
	);
}

interface CommittedInstall {
	metadata: InstallMetadata;
	manifest: WindowsSidecarReleaseManifest;
}

/**
 * The install on disk, if there is a complete one: `installed.json` and a
 * `manifest.json` that re-admits under the recorded URL for this arch and
 * whose executable digest is the recorded one. Anything less is no install.
 */
async function readCommittedInstall(
	installRoot: string,
	arch: WindowsSidecarArch
): Promise<CommittedInstall | undefined> {
	try {
		const metadataResult = installMetadataSchema.safeParse(
			JSON.parse(
				await readFile(
					path.join(installRoot, WINDOWS_SIDECAR_INSTALL_METADATA_NAME),
					'utf8'
				)
			) as unknown
		);
		if (!metadataResult.success) {
			return undefined;
		}
		const metadata = metadataResult.data;
		const manifest = parseWindowsSidecarReleaseManifest(
			await readFile(
				path.join(installRoot, WINDOWS_SIDECAR_CACHED_MANIFEST_NAME),
				'utf8'
			),
			{ manifestUrl: metadata.manifestUrl, arch }
		);
		if (manifest.executable.signedSha256 !== metadata.sha256) {
			return undefined;
		}
		return { metadata, manifest };
	} catch {
		return undefined;
	}
}

/**
 * The swap renames the live image aside before the staged one moves in, so a
 * crash between the two leaves the live name empty and a `.retired-*` file
 * holding the verified previous install. Put it back; the cache-first check
 * then verifies it like any other install. A rename the filesystem refuses
 * (a scanner holding the retired file) is left for the next attempt: the
 * sweep keeps retired images while the live name is empty.
 */
async function recoverInterruptedSwap(
	installRoot: string,
	livePath: string
): Promise<void> {
	if (await exists(livePath)) {
		return;
	}
	let names: string[];
	try {
		names = await readdir(installRoot);
	} catch {
		return;
	}
	const newest = names
		.filter(name => name.startsWith(RETIRED_PREFIX))
		.sort()
		.at(-1);
	if (newest === undefined) {
		return;
	}
	await rename(path.join(installRoot, newest), livePath).catch(() => undefined);
}

/**
 * Remove staging, retirement, and metadata leftovers. A retired image that is
 * still running cannot be deleted on Windows (`EBUSY`/`EPERM`); it stays for
 * the next sweep, which is exactly why it was renamed rather than deleted.
 * While the live name is empty, retired images are the only verified bytes on
 * disk and are kept for `recoverInterruptedSwap`.
 */
async function sweepTransientFiles(installRoot: string): Promise<void> {
	let names: string[];
	try {
		names = await readdir(installRoot);
	} catch {
		return;
	}
	const keepRetired = !(await exists(
		path.join(installRoot, WINDOWS_SIDECAR_EXECUTABLE_NAME)
	));
	for (const name of names) {
		if (
			name.startsWith(STAGED_PREFIX) ||
			(name.startsWith(RETIRED_PREFIX) && !keepRetired) ||
			name.startsWith(METADATA_TEMP_PREFIX)
		) {
			await rm(path.join(installRoot, name), { force: true }).catch(
				() => undefined
			);
		}
	}
}

/**
 * Replace the live image with the staged one. Windows allows renaming an
 * executable that is running but not deleting or overwriting it, so the live
 * image is renamed aside first (another window's sidecar may be running from
 * it) and the staged file takes its name. If the second rename fails, the
 * first is undone so the previous install stays intact.
 */
async function swapIntoPlace(
	installRoot: string,
	stagedPath: string,
	livePath: string
): Promise<void> {
	const retiredPath = path.join(
		installRoot,
		`${RETIRED_PREFIX}${Date.now()}-${randomUUID()}.exe`
	);
	let retired = false;
	try {
		if (await exists(livePath)) {
			await rename(livePath, retiredPath);
			retired = true;
		}
		await rename(stagedPath, livePath);
	} catch (error) {
		if (retired) {
			await rm(livePath, { force: true }).catch(() => undefined);
			await rename(retiredPath, livePath).catch(() => undefined);
		}
		throw new WindowsSidecarInstallError(
			'install_failed',
			`the ${PROFILE.productName} sidecar could not be moved into ${installRoot}`,
			errorText(error)
		);
	}
	if (retired) {
		await rm(retiredPath, { force: true }).catch(() => undefined);
	}
}

async function writeInstallFile(target: string, bytes: Buffer): Promise<void> {
	try {
		await writeFile(target, bytes, { flag: 'wx', mode: 0o700 });
	} catch (error) {
		throw new WindowsSidecarInstallError(
			'install_failed',
			`the ${PROFILE.productName} sidecar could not be written to ${path.dirname(target)}`,
			errorText(error)
		);
	}
}

async function writeAtomically(target: string, contents: string): Promise<void> {
	const temporaryPath = path.join(
		path.dirname(target),
		`${METADATA_TEMP_PREFIX}${randomUUID()}`
	);
	try {
		await writeFile(temporaryPath, contents, { flag: 'wx', mode: 0o600 });
		await rename(temporaryPath, target);
	} catch (error) {
		throw new WindowsSidecarInstallError(
			'install_failed',
			`the ${PROFILE.productName} install record could not be written to ${path.dirname(target)}`,
			errorText(error)
		);
	} finally {
		await rm(temporaryPath, { force: true }).catch(() => undefined);
	}
}

function describeVerdict(verdict: SignerVerdict): string {
	switch (verdict.kind) {
		case 'trusted':
			return `signed by ${verdict.subject}`;
		case 'untrusted-signer':
			return `signed by ${verdict.subject}`;
		case 'unsigned':
			return `not validly signed (${verdict.detail})`;
		case 'unverifiable':
			return `unverifiable (${verdict.detail})`;
	}
}

function combineSignals(
	signal: AbortSignal | undefined,
	timeoutMs: number
): AbortSignal {
	const timeout = AbortSignal.timeout(timeoutMs);
	return signal === undefined ? timeout : AbortSignal.any([signal, timeout]);
}

function sha256Hex(bytes: Buffer): string {
	return createHash('sha256').update(bytes).digest('hex');
}

async function exists(target: string): Promise<boolean> {
	try {
		await lstat(target);
		return true;
	} catch {
		return false;
	}
}
