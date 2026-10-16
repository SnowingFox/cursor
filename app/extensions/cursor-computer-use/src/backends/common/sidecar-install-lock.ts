import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import * as path from "node:path";

export const SIDECAR_INSTALL_LOCK_NAME = ".lock";
/** Written inside the lock directory by callers that opt into stale recovery. */
export const SIDECAR_INSTALL_LOCK_OWNER_NAME = "owner.json";
/**
 * Comfortably longer than any install or launch held under the lock, so a
 * live holder is never stolen from, and short enough that a lock nobody will
 * release (an anonymous one written by a build that predates owner records)
 * clears itself within one sitting.
 */
export const SIDECAR_INSTALL_LOCK_STALE_AFTER_MS = 10 * 60_000;

const LOCKED_MESSAGE =
	"Another Cursor window is installing Cursor Computer Use. Reload after it finishes.";

/** The lock is held by a live installer in another window. */
export class SidecarInstallLockedError extends Error {
	constructor() {
		super(LOCKED_MESSAGE);
		this.name = "SidecarInstallLockedError";
	}
}

export interface SidecarInstallLockStaleRecovery {
	/** A lock older than this is stolen even if its owner still looks alive. */
	staleAfterMs: number;
	/** Defaults to `process.kill(pid, 0)`; injectable for tests. */
	isPidAlive?: (pid: number) => boolean;
	/** Defaults to `Date.now`. */
	now?: () => number;
	/** Defaults to `process.pid`. */
	pid?: number;
	/** Told about each stale lock taken over, so the recovery can be logged. */
	onRecovered?: (lock: RecoveredSidecarInstallLock) => void;
}

export interface RecoveredSidecarInstallLock {
	/** Undefined for a lock without a readable owner record. */
	ownerPid: number | undefined;
	ownerAlive: boolean;
	ageMs: number;
}

/** One log line for a recovered lock; the same wording on every platform. */
export function describeRecoveredSidecarInstallLock(
	lock: RecoveredSidecarInstallLock
): string {
	const age = `${Math.max(0, Math.round(lock.ageMs / 60_000))} min old`;
	const owner =
		lock.ownerPid === undefined
			? "no owner record"
			: `owner pid ${lock.ownerPid} ${lock.ownerAlive ? "still running" : "no longer running"}`;
	return `recovered a stale Cursor Computer Use install lock (${owner}, ${age})`;
}

export interface SidecarInstallLockOptions {
	/**
	 * Recover from a lock whose owner died mid-install. Without it an existing
	 * lock is always somebody else's, and a crash leaves every later attempt
	 * refusing until the directory is removed by hand.
	 */
	staleRecovery?: SidecarInstallLockStaleRecovery;
	/**
	 * Called instead of throwing when the lock directory cannot be removed
	 * after `operation` has settled, so the operation's own result or error is
	 * what the caller sees. On Windows a scanner briefly holding `owner.json`
	 * open makes the remove fail after a successful install; without this the
	 * success would be reported as a failure. The leftover lock still names
	 * this process, so peers wait for it to exit or for the stale bound.
	 * Without the callback a remove failure propagates.
	 */
	onReleaseError?: (error: unknown) => void;
	/** Waits between remove attempts; the default is tuned for scanner holds. */
	releaseRetryDelaysMs?: readonly number[];
}

interface LockOwner {
	pid: number;
	createdAt: number;
}

const DEFAULT_RELEASE_RETRY_DELAYS_MS: readonly number[] = [50, 150, 400, 1000];

/**
 * Run `operation` while holding the per-install-root lock directory.
 *
 * `mkdir` without `recursive` is the atomic test-and-set: it fails with
 * `EEXIST` when another process holds the lock. With `staleRecovery`, an
 * existing lock is inspected before it is honoured — its `owner.json` names
 * the pid and time that took it — and one that belongs to a dead process, or
 * is older than the bound, is moved aside and taken over. The steal is a
 * `rename` rather than an `rm`: two windows that find the same stale lock
 * can both try, but only one rename of the same source succeeds, and a
 * remove could otherwise delete the lock the other window had just re-made.
 */
export async function withSidecarInstallLock<T>(
	installRoot: string,
	operation: () => Promise<T>,
	options: SidecarInstallLockOptions = {}
): Promise<T> {
	const lockPath = path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME);
	await acquire(lockPath, options.staleRecovery);
	try {
		return await operation();
	} finally {
		await release(lockPath, options);
	}
}

async function release(
	lockPath: string,
	options: SidecarInstallLockOptions
): Promise<void> {
	const delays = options.releaseRetryDelaysMs ?? DEFAULT_RELEASE_RETRY_DELAYS_MS;
	let lastError: unknown;
	for (let attempt = 0; attempt <= delays.length; attempt += 1) {
		if (attempt > 0) {
			await sleep(delays[attempt - 1]);
		}
		try {
			await rm(lockPath, { recursive: true, force: true });
			return;
		} catch (error) {
			lastError = error;
		}
	}
	if (options.onReleaseError === undefined) {
		throw lastError;
	}
	options.onReleaseError(lastError);
}

function sleep(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function acquire(
	lockPath: string,
	staleRecovery: SidecarInstallLockStaleRecovery | undefined
): Promise<void> {
	try {
		await mkdir(lockPath, { mode: 0o700 });
	} catch (error) {
		if (!isEexist(error)) {
			throw error;
		}
		if (staleRecovery === undefined) {
			throw new SidecarInstallLockedError();
		}
		const inspection = await inspectLock(lockPath, staleRecovery);
		if (!inspection.stale) {
			throw new SidecarInstallLockedError();
		}
		const asidePath = `${lockPath}.stale-${randomUUID()}`;
		let movedAside = false;
		try {
			await rename(lockPath, asidePath);
			movedAside = true;
		} catch (renameError) {
			// Somebody else moved it first; contend for the fresh name below.
			if (!isEnoent(renameError)) {
				throw renameError;
			}
		}
		await rm(asidePath, { recursive: true, force: true });
		if (movedAside && inspection.recovered !== undefined) {
			staleRecovery.onRecovered?.(inspection.recovered);
		}
		try {
			await mkdir(lockPath, { mode: 0o700 });
		} catch (retryError) {
			if (isEexist(retryError)) {
				throw new SidecarInstallLockedError();
			}
			throw retryError;
		}
	}
	if (staleRecovery !== undefined) {
		try {
			const owner: LockOwner = {
				pid: staleRecovery.pid ?? process.pid,
				createdAt: (staleRecovery.now ?? Date.now)(),
			};
			await writeFile(
				path.join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME),
				JSON.stringify(owner),
				{ mode: 0o600 }
			);
		} catch (error) {
			// The directory is ours but nobody will release it: without an owner
			// record it would read as a fresh anonymous lock and block every
			// window for the whole stale bound.
			await rm(lockPath, { recursive: true, force: true });
			throw error;
		}
	}
}

/**
 * Whether an existing lock may be stolen. A readable owner record decides on
 * liveness and age; a lock with no record (a crash between `mkdir` and the
 * write, or a caller that never writes one) is stale only once the directory
 * itself is older than the bound.
 */
async function inspectLock(
	lockPath: string,
	recovery: SidecarInstallLockStaleRecovery
): Promise<{ stale: boolean; recovered?: RecoveredSidecarInstallLock }> {
	const now = (recovery.now ?? Date.now)();
	const isPidAlive = recovery.isPidAlive ?? defaultIsPidAlive;
	const owner = await readOwner(
		path.join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME)
	);
	if (owner !== undefined) {
		const ownerAlive = isPidAlive(owner.pid);
		const ageMs = now - owner.createdAt;
		return {
			stale: !ownerAlive || ageMs > recovery.staleAfterMs,
			recovered: { ownerPid: owner.pid, ownerAlive, ageMs },
		};
	}
	try {
		const ageMs = now - (await stat(lockPath)).mtimeMs;
		return {
			stale: ageMs > recovery.staleAfterMs,
			recovered: { ownerPid: undefined, ownerAlive: false, ageMs },
		};
	} catch {
		// The lock vanished between the failed mkdir and this stat: whoever held
		// it finished, so a retry will simply succeed.
		return { stale: true };
	}
}

async function readOwner(ownerPath: string): Promise<LockOwner | undefined> {
	try {
		const parsed: unknown = JSON.parse(await readFile(ownerPath, "utf8"));
		if (
			typeof parsed === "object" &&
			parsed !== null &&
			"pid" in parsed &&
			typeof parsed.pid === "number" &&
			Number.isInteger(parsed.pid) &&
			parsed.pid > 0 &&
			"createdAt" in parsed &&
			typeof parsed.createdAt === "number" &&
			Number.isFinite(parsed.createdAt)
		) {
			return { pid: parsed.pid, createdAt: parsed.createdAt };
		}
	} catch {
		// Missing or malformed: fall back to the directory's age.
	}
	return undefined;
}

/**
 * Signal 0 probes for existence without delivering anything. `ESRCH` means
 * gone; `EPERM` means alive but not ours to signal, which for a lock owner is
 * still alive.
 */
function defaultIsPidAlive(pid: number): boolean {
	try {
		process.kill(pid, 0);
		return true;
	} catch (error) {
		return (
			error instanceof Error && "code" in error && error.code === "EPERM"
		);
	}
}

function isEexist(error: unknown): boolean {
	return error instanceof Error && "code" in error && error.code === "EEXIST";
}

function isEnoent(error: unknown): boolean {
	return error instanceof Error && "code" in error && error.code === "ENOENT";
}
