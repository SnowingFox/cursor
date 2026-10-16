import { lstat, mkdir, mkdtemp, readdir, readFile, rm, utimes, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
	SIDECAR_INSTALL_LOCK_NAME,
	SIDECAR_INSTALL_LOCK_OWNER_NAME,
	describeRecoveredSidecarInstallLock,
	type RecoveredSidecarInstallLock,
	SidecarInstallLockedError,
	withSidecarInstallLock,
} from "./sidecar-install-lock";

/**
 * Stands in for Windows refusing to remove the lock directory while a scanner
 * holds `owner.json` open: the next `remaining` removes of a path ending in
 * `.lock` fail with `EBUSY`.
 */
const rmFailures = vi.hoisted(() => ({ remaining: 0, attempts: 0 }));

vi.mock("node:fs/promises", async importOriginal => {
	const actual = await importOriginal<typeof import("node:fs/promises")>();
	return {
		...actual,
		rm: async (...args: Parameters<typeof actual.rm>) => {
			if (String(args[0]).endsWith(".lock") && rmFailures.remaining > 0) {
				rmFailures.remaining -= 1;
				rmFailures.attempts += 1;
				throw Object.assign(new Error("EBUSY: resource busy or locked"), {
					code: "EBUSY",
				});
			}
			return actual.rm(...args);
		},
	};
});

let installRoot: string;
let lockPath: string;

beforeEach(async () => {
	installRoot = await mkdtemp(join(tmpdir(), "cua-install-lock-"));
	lockPath = join(installRoot, SIDECAR_INSTALL_LOCK_NAME);
});

afterEach(async () => {
	rmFailures.remaining = 0;
	rmFailures.attempts = 0;
	await rm(installRoot, { recursive: true, force: true });
});

async function exists(target: string): Promise<boolean> {
	try {
		await lstat(target);
		return true;
	} catch {
		return false;
	}
}

const STALE_AFTER_MS = 10 * 60_000;

function recovery(overrides: {
	alive?: boolean;
	now?: number;
	pid?: number;
} = {}) {
	return {
		staleAfterMs: STALE_AFTER_MS,
		isPidAlive: () => overrides.alive ?? true,
		now: () => overrides.now ?? 1_000_000,
		pid: overrides.pid ?? 4242,
	};
}

describe("withSidecarInstallLock", () => {
	it("holds the lock for the operation and releases it afterwards", async () => {
		let heldDuringOperation = false;
		await withSidecarInstallLock(installRoot, async () => {
			heldDuringOperation = await exists(lockPath);
		});
		expect(heldDuringOperation).toBe(true);
		expect(await exists(lockPath)).toBe(false);
	});

	it("releases the lock when the operation throws", async () => {
		await expect(
			withSidecarInstallLock(installRoot, async () => {
				throw new Error("install failed");
			})
		).rejects.toThrow("install failed");
		expect(await exists(lockPath)).toBe(false);
	});

	// Without stale recovery an existing lock is always somebody else's,
	// whatever its age, and nothing is written into it.
	describe("without stale recovery", () => {
		it("refuses an existing lock with the same message as before", async () => {
			await mkdir(lockPath);
			await expect(
				withSidecarInstallLock(installRoot, async () => "ran")
			).rejects.toThrow(
				"Another Cursor window is installing Cursor Computer Use. Reload after it finishes."
			);
			expect(await exists(lockPath)).toBe(true);
		});

		it("refuses even a lock that is old and owned by a dead process", async () => {
			await mkdir(lockPath);
			await writeFile(
				join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME),
				JSON.stringify({ pid: 999_999, createdAt: 0 })
			);
			const ancient = new Date(Date.now() - 365 * 24 * 60 * 60_000);
			await utimes(lockPath, ancient, ancient);

			await expect(
				withSidecarInstallLock(installRoot, async () => "ran")
			).rejects.toBeInstanceOf(SidecarInstallLockedError);
			expect(await exists(lockPath)).toBe(true);
		});

		it("writes no owner record into the lock it takes", async () => {
			await withSidecarInstallLock(installRoot, async () => {
				expect(await readdir(lockPath)).toEqual([]);
			});
		});
	});

	describe("with stale recovery", () => {
		it("records who took the lock", async () => {
			await withSidecarInstallLock(
				installRoot,
				async () => {
					const owner = JSON.parse(
						await readFile(join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME), "utf8")
					);
					expect(owner).toEqual({ pid: 4242, createdAt: 1_000_000 });
				},
				{ staleRecovery: recovery() }
			);
		});

		it("releases the directory it took when the owner record cannot be written", async () => {
			// A `now` that cannot be serialized stands in for the owner write
			// failing after `mkdir` succeeded (Defender or Controlled Folder
			// Access briefly holding a new directory, on a real box).
			let ran = false;
			await expect(
				withSidecarInstallLock(
					installRoot,
					async () => {
						ran = true;
					},
					{
						staleRecovery: {
							...recovery(),
							now: () => 1n as unknown as number,
						},
					}
				)
			).rejects.toThrow(TypeError);
			expect(ran).toBe(false);
			// Not a leaked anonymous lock that the next attempt honours for the
			// whole stale bound: the next taker simply succeeds.
			expect(await exists(lockPath)).toBe(false);
			await expect(
				withSidecarInstallLock(installRoot, async () => "ran", {
					staleRecovery: recovery(),
				})
			).resolves.toBe("ran");
		});

		it("honours a lock whose owner is alive and recent", async () => {
			await mkdir(lockPath);
			await writeFile(
				join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME),
				JSON.stringify({ pid: 77, createdAt: 1_000_000 - 1_000 })
			);
			await expect(
				withSidecarInstallLock(installRoot, async () => "ran", {
					staleRecovery: recovery({ alive: true }),
				})
			).rejects.toBeInstanceOf(SidecarInstallLockedError);
			expect(await exists(lockPath)).toBe(true);
		});

		it("steals a lock whose owner is dead", async () => {
			await mkdir(lockPath);
			await writeFile(
				join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME),
				JSON.stringify({ pid: 77, createdAt: 1_000_000 - 1_000 })
			);
			await expect(
				withSidecarInstallLock(installRoot, async () => "ran", {
					staleRecovery: recovery({ alive: false }),
				})
			).resolves.toBe("ran");
			expect(await exists(lockPath)).toBe(false);
		});

		it("steals a lock older than the bound even if its owner looks alive", async () => {
			await mkdir(lockPath);
			await writeFile(
				join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME),
				JSON.stringify({ pid: 77, createdAt: 1_000_000 - STALE_AFTER_MS - 1 })
			);
			await expect(
				withSidecarInstallLock(installRoot, async () => "ran", {
					staleRecovery: recovery({ alive: true }),
				})
			).resolves.toBe("ran");
		});

		it("falls back to the directory's age when the owner record is missing or malformed", async () => {
			await mkdir(lockPath);
			// Fresh directory, no record: a crash between mkdir and the write
			// looks like this, and so does a live installer that has not
			// written yet, so it is honoured until the bound passes.
			await expect(
				withSidecarInstallLock(installRoot, async () => "ran", {
					staleRecovery: { ...recovery(), now: Date.now },
				})
			).rejects.toBeInstanceOf(SidecarInstallLockedError);

			await writeFile(join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME), "{not json");
			const ancient = new Date(Date.now() - STALE_AFTER_MS - 60_000);
			await utimes(lockPath, ancient, ancient);
			await expect(
				withSidecarInstallLock(installRoot, async () => "ran", {
					staleRecovery: { ...recovery(), now: Date.now },
				})
			).resolves.toBe("ran");
		});

		it("reports each lock it takes over, and nothing for a lock it honours", async () => {
			const recovered: RecoveredSidecarInstallLock[] = [];
			const onRecovered = (lock: RecoveredSidecarInstallLock) => recovered.push(lock);
			await mkdir(lockPath);
			await writeFile(
				join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME),
				JSON.stringify({ pid: 77, createdAt: 1_000_000 - 1_000 })
			);
			await expect(
				withSidecarInstallLock(installRoot, async () => "ran", {
					staleRecovery: { ...recovery({ alive: true }), onRecovered },
				})
			).rejects.toBeInstanceOf(SidecarInstallLockedError);
			expect(recovered).toEqual([]);

			await expect(
				withSidecarInstallLock(installRoot, async () => "ran", {
					staleRecovery: { ...recovery({ alive: false }), onRecovered },
				})
			).resolves.toBe("ran");

			await mkdir(lockPath);
			const ancient = new Date(Date.now() - 2 * STALE_AFTER_MS);
			await utimes(lockPath, ancient, ancient);
			await expect(
				withSidecarInstallLock(installRoot, async () => "ran", {
					staleRecovery: { ...recovery(), now: Date.now, onRecovered },
				})
			).resolves.toBe("ran");

			expect(recovered).toEqual([
				{ ownerPid: 77, ownerAlive: false, ageMs: 1_000 },
				{ ownerPid: undefined, ownerAlive: false, ageMs: expect.any(Number) },
			]);
			expect(Math.round(recovered[1].ageMs / 60_000)).toBe(20);
			expect(recovered.map(describeRecoveredSidecarInstallLock)).toEqual([
				"recovered a stale Cursor Computer Use install lock (owner pid 77 no longer running, 0 min old)",
				"recovered a stale Cursor Computer Use install lock (no owner record, 20 min old)",
			]);
		});

		it("lets exactly one of two concurrent takers of a stale lock win", async () => {
			await mkdir(lockPath);
			await writeFile(
				join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME),
				JSON.stringify({ pid: 77, createdAt: 0 })
			);
			let inside = 0;
			let peak = 0;
			let recoveries = 0;
			const results = await Promise.allSettled(
				[1, 2].map(() =>
					withSidecarInstallLock(
						installRoot,
						async () => {
							inside += 1;
							peak = Math.max(peak, inside);
							await new Promise(resolve => setTimeout(resolve, 20));
							inside -= 1;
						},
						{
							staleRecovery: {
								...recovery({ alive: false }),
								onRecovered: () => {
									recoveries += 1;
								},
							},
						}
					)
				)
			);
			expect(peak).toBe(1);
			expect(recoveries).toBe(1);
			expect(results.filter(result => result.status === "fulfilled")).toHaveLength(1);
			expect(
				results.filter(
					result =>
						result.status === "rejected" &&
						result.reason instanceof SidecarInstallLockedError
				)
			).toHaveLength(1);
		});
	});

	describe("releasing the lock", () => {
		it("retries a remove the filesystem refuses, and the operation's result wins", async () => {
			rmFailures.remaining = 1;
			const releaseErrors: unknown[] = [];
			await expect(
				withSidecarInstallLock(installRoot, async () => "installed", {
					staleRecovery: recovery(),
					onReleaseError: error => releaseErrors.push(error),
					releaseRetryDelaysMs: [0, 0],
				})
			).resolves.toBe("installed");
			expect(rmFailures.attempts).toBe(1);
			expect(releaseErrors).toEqual([]);
			expect(await exists(lockPath)).toBe(false);
		});

		it("reports a remove that keeps failing instead of turning a success into an error", async () => {
			rmFailures.remaining = Number.POSITIVE_INFINITY;
			const releaseErrors: unknown[] = [];
			await expect(
				withSidecarInstallLock(installRoot, async () => "installed", {
					staleRecovery: recovery(),
					onReleaseError: error => releaseErrors.push(error),
					releaseRetryDelaysMs: [0, 0],
				})
			).resolves.toBe("installed");
			expect(rmFailures.attempts).toBe(3);
			expect(releaseErrors).toHaveLength(1);
			expect(releaseErrors[0]).toMatchObject({ code: "EBUSY" });
			// The lock stays, naming this process, so a peer honours it only
			// until this process exits or the stale bound passes.
			expect(await exists(lockPath)).toBe(true);
			expect(
				JSON.parse(await readFile(join(lockPath, SIDECAR_INSTALL_LOCK_OWNER_NAME), "utf8"))
			).toEqual({ pid: 4242, createdAt: 1_000_000 });
		});

		it("lets the operation's own error through when the remove also fails", async () => {
			rmFailures.remaining = Number.POSITIVE_INFINITY;
			const releaseErrors: unknown[] = [];
			await expect(
				withSidecarInstallLock(
					installRoot,
					async () => {
						throw new Error("install failed");
					},
					{
						staleRecovery: recovery(),
						onReleaseError: error => releaseErrors.push(error),
						releaseRetryDelaysMs: [],
					}
				)
			).rejects.toThrow("install failed");
			expect(releaseErrors).toHaveLength(1);
		});

		it("still throws the remove failure for a caller that does not observe it", async () => {
			rmFailures.remaining = Number.POSITIVE_INFINITY;
			await expect(
				withSidecarInstallLock(installRoot, async () => "ran", {
					releaseRetryDelaysMs: [],
				})
			).rejects.toMatchObject({ code: "EBUSY" });
		});
	});
});
