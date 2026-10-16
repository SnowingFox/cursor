/**
 * Windows discovery, launch, and admission for the computer-use sidecar.
 *
 * The endpoint is derived, not published: the sidecar serves
 * `\\.\pipe\cursor-cua-<user-SID>` and writes no rendezvous file. Everything
 * else here implements the four steps of the client handshake contract in
 * `packages/computer-use/windows/README.md`: mint a launch token, write it
 * where the sidecar will look, present it as the first line of every
 * connection, and verify the server that answers.
 *
 * The sidecar binds one token per launch, so there is no "attach to a sidecar
 * that is already running" path — a sidecar from an earlier launch would
 * refuse this client's token, and we would have no provenance for it either
 * (see `./server-identity`). This transport always launches the sidecar it
 * talks to, and refuses to connect when it has no launch record.
 */

import { spawn, type ChildProcess } from 'node:child_process';
import { performance } from 'node:perf_hooks';
import type { Context } from '@anysphere/context';
import { createLogger } from '@anysphere/context';
import { SIDECAR_HANDSHAKE_TIMEOUT_MS } from '@anysphere/computer-use/protocol';
import { ComputerUseRPCError } from '../common/errors';
import {
	SIDECAR_REQUEST_ID,
	sendSidecarRequest,
	type SidecarLineChannel,
} from '../common/rpc-connection';
import type { SidecarTransport } from '../common/transport';
import {
	SidecarHandshakeDeniedError,
	encodeHelloLine,
	parseWelcomePid,
} from './handshake';
import {
	launchTokenPath,
	localAppDataDirectory,
	mintLaunchToken,
	removeLaunchToken,
	writeLaunchToken,
} from './launch-token';
import {
	resolveWindowsSidecarExecutable,
	resolveWindowsUserSid,
	windowsSidecarPipeName,
	type ResolvedWindowsSidecar,
} from './pipe-discovery';
import {
	ALLOW_UNSIGNED_SIDECAR_ENV,
	LaunchProvenanceVerifier,
	derivePolicyFromClientVerdict,
	developerUnsignedSidecarAllowed,
	enforceSidecarImageSigner,
} from './server-identity';
import { verifyAuthenticodeSigner, type SignerVerdict } from './signer';

const logger = createLogger('computer-use:windows-transport');

const LAUNCH_READY_TIMEOUT_MS = 15_000;
const PING_TIMEOUT_MS = 5_000;
/**
 * How often a sidecar nobody has talked to is pinged, so it stays warm for
 * the life of the window instead of exiting and cold-starting on the next
 * task. The sidecar exits after 120 s without a connection (its
 * `DEFAULT_IDLE_EXIT`; the extension cannot set it, by design). Every ping is
 * one handshaken connection, so this holds the idle clock under half the
 * window and survives one missed ping. Nothing else changes hands: the
 * launch token, the peer check and the pipe's single instance are exactly
 * what a tool call goes through. An extension host that dies stops pinging,
 * and the sidecar exits on its own two minutes later — the crash fallback is
 * untouched.
 */
const KEEPALIVE_INTERVAL_MS = 45_000;
/**
 * How long a retiring sidecar gets to exit before it is killed outright, and
 * then before we stop waiting for it at all.
 *
 * Waiting is not politeness. The pipe name is a single-instance resource
 * released by the kernel when the owning process exits, so relaunching while
 * the previous sidecar is still dying makes the new one lose
 * `FILE_FLAG_FIRST_PIPE_INSTANCE` and abort as though a squatter held the
 * name — turning an ordinary relaunch into the one error that tells the user
 * to restart their machine.
 */
const RETIRE_GRACE_MS = 2_000;
const RETIRE_HARD_MS = 3_000;
/**
 * How long `dispose` may spend before it gives up and returns.
 *
 * `ExtHostExtensionService.terminate` races `deactivate` against 5s and then
 * calls `exit()`, so an unbounded teardown can forfeit the entire budget and
 * still be holding a live child when the host dies. Bounding it trades a
 * *guaranteed* orphan in the slow case for a *possible* one: within the
 * deadline we kill the sidecar as before, and past it we have at least
 * signalled the in-flight child and left `disposed` set, which stops the
 * launch installing itself. A best-effort kill inside the budget beats a
 * perfect kill the host does not wait for.
 *
 * Strictly less than `RETIRE_HARD_MS` on purpose. Equal values put the
 * retirement's give-up log at almost exactly the moment `dispose` stops
 * waiting and the host disposes the output channel, so the log-after-close
 * window would be aligned by construction rather than by chance.
 */
const DISPOSE_BUDGET_MS = 2_500;
const LISTENING_LINE = 'listening on ';
const SQUATTER_LINE = 'possible squatter';
const NO_BINDING_LINE = 'refusing to listen without a launch binding';

/** One launched sidecar and everything a connection needs to trust it. */
interface ActiveSidecar {
	pipeName: string;
	token: string;
	tokenPath: string;
	child: ChildProcess;
	verifier: LaunchProvenanceVerifier;
}

export interface WindowsSidecarTransportOptions {
	/** Injectable for tests; defaults to the SID-derived per-user pipe name. */
	resolvePipeName?: () => Promise<string>;
	/** Injectable for tests; defaults to the SID-derived token file path. */
	resolveTokenPath?: () => Promise<string>;
	/**
	 * Which executable to launch. Defaults to the on-disk resolution order;
	 * the extension passes the installer's `resolveForLaunch`, which may
	 * refresh the download cache before answering and throws a coded
	 * `ComputerUseRPCError` when the sidecar cannot be made available.
	 */
	resolveExecutable?: () =>
		| ResolvedWindowsSidecar
		| undefined
		| Promise<ResolvedWindowsSidecar | undefined>;
	/**
	 * Spawn the sidecar. Must return a child whose stderr is piped: the
	 * `listening on …` line it prints is this client's proof that the child it
	 * started is the process holding the pipe name.
	 */
	spawnSidecar?: (executablePath: string) => ChildProcess;
	/** Authenticode check; defaults to the real PowerShell-backed one. */
	verifySigner?: (imagePath: string) => Promise<SignerVerdict>;
	/** Defaults to `process.execPath` — the image whose signature sets policy. */
	clientImagePath?: string;
	/**
	 * Defaults to `process.env`; read for the developer escape hatch
	 * (`CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR`, see `./server-identity`).
	 */
	env?: Record<string, string | undefined>;
	/**
	 * How often an idle sidecar is pinged to keep it warm; `0` disables the
	 * keep-alive. Injectable for tests; defaults to `KEEPALIVE_INTERVAL_MS`.
	 */
	keepAliveIntervalMs?: number;
}

function spawnWindowsSidecar(executablePath: string): ChildProcess {
	return spawn(executablePath, [], {
		stdio: ['ignore', 'ignore', 'pipe'],
		windowsHide: true,
	});
}

export class WindowsSidecarTransport implements SidecarTransport {
	readonly id = 'named-pipe';

	private readonly resolvePipeName: () => Promise<string>;
	private readonly resolveTokenPath: () => Promise<string>;
	private readonly resolveExecutable: () =>
		| ResolvedWindowsSidecar
		| undefined
		| Promise<ResolvedWindowsSidecar | undefined>;
	/** Shelling out for the SID is not free, and both paths derive from it. */
	private userSid: Promise<string> | undefined;
	private readonly spawnSidecar: (executablePath: string) => ChildProcess;
	private readonly verifySigner: (
		imagePath: string
	) => Promise<SignerVerdict>;
	private readonly clientImagePath: string;
	private readonly env: Record<string, string | undefined>;
	private readonly keepAliveIntervalMs: number;

	private active: ActiveSidecar | undefined;
	/** The pending keep-alive tick for `active`, if one is scheduled. */
	private keepAlive: NodeJS.Timeout | undefined;
	/**
	 * When a connection last opened a session (a tool call or a lease
	 * request). A keep-alive tick that finds one within its interval has
	 * nothing to do: the sidecar's idle clock restarted with it.
	 */
	private lastSessionAt = 0;
	/** The signer policy is a property of this client, so it is resolved once. */
	private clientVerdict: Promise<SignerVerdict> | undefined;
	/**
	 * Tail of the retirement chain. Every launch waits on it, so a relaunch
	 * cannot race the previous sidecar's grip on the single pipe instance.
	 */
	private retiring: Promise<void> = Promise.resolve();
	/**
	 * The launch currently in flight, if any. A launch is not yet `active`, so
	 * it is invisible to `retire()` until it finishes — `dispose` has to wait
	 * for it rather than for the field it will eventually populate.
	 */
	private launching: Promise<ActiveSidecar> | undefined;
	/**
	 * The in-flight launch's child, from the moment it is spawned rather than
	 * from the moment the launch completes. `dispose` needs the handle, not
	 * the finished launch, and the gap between the two is up to 20s of
	 * readiness wait.
	 */
	private pendingChild: ChildProcess | undefined;
	/**
	 * A sidecar that did not exit within the retirement bound. It may still
	 * hold the single pipe instance, so launching over it would abort as a
	 * squatter and blame the user. Cleared once it is actually gone.
	 */
	private lingering: ChildProcess | undefined;
	private disposed = false;

	constructor(options: WindowsSidecarTransportOptions = {}) {
		this.resolvePipeName =
			options.resolvePipeName ??
			(async () => windowsSidecarPipeName(await this.ensureUserSid()));
		this.resolveTokenPath =
			options.resolveTokenPath ??
			(async () =>
				launchTokenPath(await this.ensureUserSid(), localAppDataDirectory()));
		this.resolveExecutable =
			options.resolveExecutable ?? resolveWindowsSidecarExecutable;
		this.spawnSidecar = options.spawnSidecar ?? spawnWindowsSidecar;
		this.verifySigner = options.verifySigner ?? verifyAuthenticodeSigner;
		this.clientImagePath = options.clientImagePath ?? process.execPath;
		this.env = options.env ?? process.env;
		this.keepAliveIntervalMs =
			options.keepAliveIntervalMs ?? KEEPALIVE_INTERVAL_MS;
	}

	async resolveEndpoint(ctx: Context, forceLaunch: boolean): Promise<string> {
		// Never start a sidecar the teardown has already finished waiting for.
		// The check below catches a dispose that lands mid-launch, but by then
		// `dispose` has returned and the extension host is free to unload, so
		// the retirement it triggers may not outlive the process. Refusing up
		// front is the half that cannot leak.
		this.throwIfDisposed();
		const active = this.active;
		if (!forceLaunch && active !== undefined && isAlive(active.child)) {
			return active.pipeName;
		}
		this.retire(ctx);
		const launching = this.launch(ctx);
		this.launching = launching;
		let launched: ActiveSidecar;
		try {
			launched = await launching;
		} finally {
			if (this.launching === launching) {
				this.launching = undefined;
			}
		}
		// A teardown that landed while this launch was in flight found no
		// `active` to retire, so without this the sidecar we just started would
		// outlive the client holding the single pipe instance — the exact
		// failure `dispose` exists to prevent.
		if (this.disposed) {
			await this.retireAndTrack(ctx, launched);
			throw new ComputerUseRPCError(
				'computer-use sidecar was shut down while it was starting'
			);
		}
		this.active = launched;
		this.scheduleKeepAlive(ctx, launched);
		return launched.pipeName;
	}

	/**
	 * Arm the next keep-alive tick for `active`. Unref'd: a timer must never
	 * be what keeps the extension host — or a test runner — alive.
	 */
	private scheduleKeepAlive(ctx: Context, active: ActiveSidecar): void {
		this.cancelKeepAlive();
		if (this.keepAliveIntervalMs <= 0) {
			return;
		}
		this.keepAlive = setTimeout(() => {
			this.keepAlive = undefined;
			void this.keepAliveTick(ctx, active);
		}, this.keepAliveIntervalMs);
		this.keepAlive.unref();
	}

	private cancelKeepAlive(): void {
		if (this.keepAlive !== undefined) {
			clearTimeout(this.keepAlive);
			this.keepAlive = undefined;
		}
	}

	/**
	 * One keep-alive tick. Pings only a sidecar that is still the live binding
	 * and has heard nothing for a whole interval; a recent tool call already
	 * restarted its idle clock. A failed ping is logged and nothing more —
	 * never a retirement, because the likeliest cause is a tool call holding
	 * the single pipe instance, and killing a healthy sidecar mid-action is
	 * far worse than a cold start. A sidecar that has exited stops the
	 * keep-alive; the next tool call relaunches it as before.
	 *
	 * The other direction costs nothing: a tool call that dials while a ping
	 * session holds the instance does not fail with `EBUSY`. On
	 * `ERROR_PIPE_BUSY` libuv waits for the instance (`WaitNamedPipeW`, up to
	 * 30 s) and connects once the sidecar re-accepts, which after a
	 * handshake-plus-ping session is milliseconds later. `EBUSY` reaches
	 * JavaScript only when an instance stays held for those 30 s, longer than
	 * any timeout in this file.
	 */
	private async keepAliveTick(ctx: Context, active: ActiveSidecar): Promise<void> {
		if (this.disposed || this.active !== active || !isAlive(active.child)) {
			return;
		}
		if (Date.now() - this.lastSessionAt >= this.keepAliveIntervalMs) {
			try {
				await sendSidecarRequest(
					active.pipeName,
					{ id: SIDECAR_REQUEST_ID, method: 'ping' },
					PING_TIMEOUT_MS,
					{ openSession: channel => handshake(ctx, active, channel) }
				);
			} catch (error) {
				logger.debug(ctx, 'computer-use sidecar keep-alive ping failed', {
					pid: active.child.pid,
					error: error instanceof Error ? error.message : String(error),
				});
			}
		}
		if (!this.disposed && this.active === active) {
			this.scheduleKeepAlive(ctx, active);
		}
	}

	/**
	 * Contract steps 3 and 4, run on every connection: present the launch
	 * token as the first line, then check who answered before any RPC.
	 */
	async openSession(ctx: Context, channel: SidecarLineChannel): Promise<void> {
		const active = this.active;
		if (active === undefined) {
			throw new ComputerUseRPCError(
				'computer-use sidecar has no launch binding; refusing to connect'
			);
		}
		this.lastSessionAt = Date.now();
		try {
			await handshake(ctx, active, channel);
		} catch (error) {
			// Every refusal carries the same generic reason by design, so there
			// is nothing to branch on and retrying the same token cannot
			// distinguish the causes. Drop the binding instead: the next call
			// re-mints and relaunches exactly once.
			if (error instanceof SidecarHandshakeDeniedError) {
				logger.warn(
					ctx,
					'computer-use sidecar denied the handshake; dropping this launch binding',
					{ pid: active.child.pid }
				);
				this.retire(ctx, active);
			}
			throw error;
		}
	}

	/**
	 * Stop the sidecar and drop the token.
	 *
	 * The extension calls this when it is torn down, because a sidecar that
	 * outlives its client keeps the single pipe instance and makes the *next*
	 * window's launch look like a squatter. A hard extension-host crash still
	 * skips this, which is what the sidecar's own idle timer is for — that
	 * timer is the fallback, not the mechanism.
	 */
	async dispose(ctx: Context): Promise<void> {
		this.disposed = true;
		this.cancelKeepAlive();
		// Kill an in-flight launch's child directly rather than only waiting
		// for the launch to finish. `waitForListening` alone can spend 15s of
		// a 5s budget, and killing the child collapses that wait immediately:
		// the child's `exit` fails the launch, whose own catch retires it.
		killQuietly(this.pendingChild);
		await withDeadline(this.teardown(ctx), DISPOSE_BUDGET_MS);
	}

	/**
	 * The teardown proper, run under a deadline by `dispose`.
	 *
	 * Waiting for an in-flight launch is what stops it orphaning its child: a
	 * reload during the first tool call has a spawn in progress and nothing in
	 * `active` yet. A launch that fails cleans up after itself.
	 */
	private async teardown(ctx: Context): Promise<void> {
		const launching = this.launching;
		if (launching !== undefined) {
			await launching.then(
				launched => this.retireAndTrack(ctx, launched),
				() => undefined
			);
		}
		this.retire(ctx);
		await this.retiring;
	}

	private async launch(ctx: Context): Promise<ActiveSidecar> {
		// Every phase is timed: a cold start is what the keep-alive exists to
		// avoid, and the log line at the end is how its cost is measured on a
		// real machine.
		const timing = new LaunchTiming();
		// A previous sidecar may still be releasing the pipe name.
		await this.retiring;
		this.throwIfPredecessorLingers();
		// May download and verify a release first; a teardown that lands in
		// that wait must not go on to spawn.
		const resolved = await this.resolveExecutable();
		timing.mark('executable');
		this.throwIfDisposed();
		if (resolved === undefined) {
			throw new ComputerUseRPCError(
				'The Cursor Computer Use sidecar was not found. It is downloaded ' +
				'from the release CDN on Windows; set CUA_SERVICE_EXE to point at a custom build.'
			);
		}
		// Two signer checks at 10s each. A teardown landing in them must not
		// go on to spawn something nobody is left to stop.
		const imageVerdict = await this.verifySigner(resolved.executablePath);
		timing.mark('sidecarSigner');
		const policy = derivePolicyFromClientVerdict(await this.resolveClientVerdict());
		timing.mark('clientSigner');
		enforceSidecarImageSigner(ctx, {
			imagePath: resolved.executablePath,
			verdict: imageVerdict,
			policy,
			source: resolved.source,
			env: this.env,
		});
		this.throwIfDisposed();

		const pipeName = await this.resolvePipeNameOrThrow();
		const tokenPath = await this.resolveTokenPath();
		this.throwIfDisposed();
		const token = mintLaunchToken();
		writeLaunchToken(tokenPath, token);
		timing.mark('binding');

		logger.info(ctx, 'launching computer-use sidecar', {
			source: resolved.source,
			policy,
			// Only present when the escape hatch actually carried this launch.
			...(imageVerdict.kind !== 'trusted' &&
				developerUnsignedSidecarAllowed(resolved.source, this.env) && {
				developerOverride: ALLOW_UNSIGNED_SIDECAR_ENV,
			}),
		});
		// Everything from the spawn onwards is inside the try that retires, so
		// no edit can add a step between creating the process and owning its
		// cleanup. `requirePid` in particular used to run outside it, leaving
		// the freshly written token on disk when a spawn failed.
		let active: ActiveSidecar;
		try {
			const child = this.spawnSidecar(resolved.executablePath);
			this.pendingChild = child;
			active = {
				pipeName,
				token,
				tokenPath,
				child,
				verifier: new LaunchProvenanceVerifier({
					pid: requirePid(child),
					isAlive: () => isAlive(child),
				}),
			};
		} catch (error) {
			removeLaunchToken(tokenPath);
			killQuietly(this.pendingChild);
			this.pendingChild = undefined;
			throw error;
		}

		try {
			await this.waitForListening(ctx, active.child, pipeName);
			timing.mark('listening');
			// One handshaken ping, so a bad token or an identity mismatch fails
			// here rather than on the user's first tool call, with the reason
			// intact — which is the whole point of doing it early.
			const response = await sendSidecarRequest(
				pipeName,
				{ id: SIDECAR_REQUEST_ID, method: 'ping' },
				PING_TIMEOUT_MS,
				{ openSession: channel => handshake(ctx, active, channel) }
			);
			timing.mark('handshakePing');
			if (!('ok' in response)) {
				throw new ComputerUseRPCError(
					'computer-use sidecar did not answer a handshaken ping after launch'
				);
			}
			logger.info(ctx, 'computer-use sidecar launched', {
				pid: active.child.pid,
				...timing.report(),
			});
		} catch (error) {
			// Tracked like a chained retirement: a child that got as far as
			// `listening` holds the pipe instance, and if it then survives the
			// retirement bound the next launch must refuse rather than spawn
			// into a name it still owns.
			await this.retireAndTrack(ctx, active);
			throw error;
		} finally {
			this.pendingChild = undefined;
		}
		return active;
	}

	/**
	 * Refuse rather than spawn into a name a predecessor may still hold. The
	 * squatter error the sidecar would produce blames the user and tells them
	 * to restart the machine; this says what actually happened.
	 */
	private throwIfPredecessorLingers(): void {
		const lingering = this.lingering;
		if (lingering === undefined) {
			return;
		}
		if (!isAlive(lingering)) {
			this.lingering = undefined;
			return;
		}
		throw new ComputerUseRPCError(
			`a previous computer-use sidecar (pid ${lingering.pid ?? 'unknown'}) did not exit and may still hold the pipe; not starting another until it does`
		);
	}

	private throwIfDisposed(): void {
		if (this.disposed) {
			throw new ComputerUseRPCError(
				'computer-use sidecar transport has been shut down'
			);
		}
	}

	/**
	 * Wait for the sidecar to say it owns the pipe.
	 *
	 * This is the launch-provenance step: the line arrives on a stderr pipe
	 * handed to our own child, and the sidecar only prints it once
	 * `CreateNamedPipeW` with `FILE_FLAG_FIRST_PIPE_INSTANCE` has succeeded, so
	 * it is proof that this child — and not a squatter — holds the name.
	 */
	private waitForListening(
		ctx: Context,
		child: ChildProcess,
		pipeName: string
	): Promise<void> {
		return new Promise((resolve, reject) => {
			let settled = false;
			let buffered = '';
			const finish = (error?: Error): void => {
				if (settled) {
					return;
				}
				settled = true;
				clearTimeout(timer);
				if (error === undefined) {
					resolve();
				} else {
					reject(error);
				}
			};
			const timer = setTimeout(
				() =>
					finish(
						new ComputerUseRPCError(
							'computer-use sidecar did not report that it was listening in time'
						)
					),
				LAUNCH_READY_TIMEOUT_MS
			);

			const stderr = child.stderr;
			if (stderr === null) {
				finish(
					new ComputerUseRPCError(
						'computer-use sidecar was spawned without a stderr pipe; its launch cannot be verified'
					)
				);
				return;
			}
			// Keep draining after startup: the sidecar logs a line per
			// connection, and a stderr pipe nobody reads eventually blocks it.
			stderr.setEncoding('utf8');
			stderr.on('data', (chunk: string) => {
				buffered += chunk;
				let newlineIndex = buffered.indexOf('\n');
				while (newlineIndex >= 0) {
					const line = buffered.slice(0, newlineIndex).trimEnd();
					buffered = buffered.slice(newlineIndex + 1);
					newlineIndex = buffered.indexOf('\n');
					if (line.length === 0) {
						continue;
					}
					logger.debug(ctx, 'sidecar', { line });
					if (settled) {
						continue;
					}
					if (line.includes(`${LISTENING_LINE}${pipeName}`)) {
						finish();
					} else if (line.includes(SQUATTER_LINE)) {
						finish(
							new ComputerUseRPCError(
								`another process already owns ${pipeName}; the computer-use sidecar refused to start. Sign out of other sessions or restart the machine rather than retrying.`
							)
						);
					} else if (line.includes(NO_BINDING_LINE)) {
						finish(
							new ComputerUseRPCError(
								'the computer-use sidecar rejected its launch token file; check the permissions on %LOCALAPPDATA%\\Cursor\\ComputerUse'
							)
						);
					}
				}
			});
			child.once('error', error => finish(toRPCError(error)));
			child.once('exit', code =>
				finish(
					new ComputerUseRPCError(
						`computer-use sidecar exited with code ${code ?? 'unknown'} before it began listening`
					)
				)
			);
		});
	}

	private ensureUserSid(): Promise<string> {
		return (this.userSid ??= resolveWindowsUserSid().catch(
			(error: unknown) => {
				// A failed lookup is not sticky: the next call retries it.
				this.userSid = undefined;
				throw error;
			}
		));
	}

	private resolveClientVerdict(): Promise<SignerVerdict> {
		return (this.clientVerdict ??= this.verifySigner(
			this.clientImagePath
		).catch((error: unknown) => {
			this.clientVerdict = undefined;
			throw error;
		}));
	}

	private async resolvePipeNameOrThrow(): Promise<string> {
		try {
			return await this.resolvePipeName();
		} catch (error) {
			throw new ComputerUseRPCError(
				`computer-use could not resolve the sidecar pipe name: ${error instanceof Error ? error.message : String(error)
				}`
			);
		}
	}

	/**
	 * Drop the current binding: remove the token and stop the sidecar.
	 *
	 * Synchronous so callers on the error path stay simple, but the work it
	 * starts is chained onto `retiring` and awaited by the next launch.
	 */
	private retire(ctx: Context, expected?: ActiveSidecar): void {
		const active = this.active;
		if (active === undefined) {
			return;
		}
		// A caller that observed a specific binding may only retire that one.
		// `openSession` reads `active` before a handshake that can take five
		// seconds, and a denial arriving after a relaunch would otherwise kill
		// the healthy replacement — reproduced by audit probe: a stale refusal
		// destroyed a freshly handshaken binding. Comparing here rather than at
		// the call site means no future caller can retire what it did not see.
		if (expected !== undefined && expected !== active) {
			logger.debug(ctx, 'ignoring a retirement for a superseded binding', {
				pid: expected.child.pid,
			});
			return;
		}
		this.active = undefined;
		this.cancelKeepAlive();
		// Both `.catch`es are load-bearing. `.then` on a rejected promise
		// forwards the rejection without running the callback, so a single
		// failed retirement would leave the chain permanently rejected: every
		// later retire() would silently do nothing and every later launch()
		// and dispose() would reject on a stale, unrelated error. That state
		// is absorbing — computer use would be dead for the window's life.
		this.retiring = this.retiring
			.catch(() => undefined)
			.then(() => this.retireAndTrack(ctx, active))
			.catch((error: unknown) => {
				// Reported here rather than at an unrelated later caller, and
				// not rethrown: `deactivate` swallows by design, so a rejection
				// would be invisible anyway.
				//
				// `logQuietly` is the load-bearing part. A `.catch` whose own
				// callback can throw is not a guard: the output channel throws
				// once the extension host has disposed it, and teardown now
				// deliberately outlives `dispose`, so this callback can run
				// after the channel is gone and re-enter the absorbing state it
				// exists to prevent.
				logQuietly(() =>
					logger.error(
						ctx,
						'computer-use sidecar retirement failed; it may still hold the pipe',
						{ pid: active.child.pid, error }
					)
				);
			});
	}

	/**
	 * Remove the token, stop the sidecar, and remember a child that would not
	 * die. Every retirement goes through here — the chain and the inline
	 * failure paths alike — because `false` from `stopChild` means the bound
	 * elapsed, not that the child exited, and a launch that cannot tell them
	 * apart spawns into a pipe name the predecessor still holds (F7).
	 */
	private async retireAndTrack(
		ctx: Context,
		active: ActiveSidecar
	): Promise<void> {
		removeLaunchToken(active.tokenPath);
		if (await stopChild(active.child)) {
			return;
		}
		this.lingering = active.child;
		logQuietly(() =>
			logger.warn(
				ctx,
				'computer-use sidecar did not exit within the retirement window',
				{ pid: active.child.pid }
			)
		);
	}
}

/**
 * Wall-clock phases of one launch, in milliseconds, for the launch log line:
 * `executable` (resolving, possibly refreshing, the install), `sidecarSigner`
 * and `clientSigner` (the two Authenticode checks), `binding` (SID, pipe name,
 * token), `listening` (spawn until the sidecar owns the pipe) and
 * `handshakePing` (the first handshaken round trip), plus the total. The
 * client-signer check is cached per transport, so it is ~0 after the first
 * launch in a window.
 */
class LaunchTiming {
	private readonly started = performance.now();
	private last = this.started;
	private readonly phases: Record<string, number> = {};

	mark(phase: string): void {
		const now = performance.now();
		this.phases[phase] = Math.round(now - this.last);
		this.last = now;
	}

	report(): { totalMs: number; phasesMs: Record<string, number> } {
		return {
			totalMs: Math.round(performance.now() - this.started),
			phasesMs: { ...this.phases },
		};
	}
}

/** Contract step 3 then 4 on one connection: present the token, check who answered. */
async function handshake(
	ctx: Context,
	active: ActiveSidecar,
	channel: SidecarLineChannel
): Promise<void> {
	await channel.writeLine(encodeHelloLine(active.token));
	const reply = await channel.readLine(SIDECAR_HANDSHAKE_TIMEOUT_MS);
	active.verifier.verifyWelcome(ctx, parseWelcomePid(reply));
}

/**
 * Signal the child and wait for it to actually exit, escalating if it does not.
 *
 * Exported only so a test can pin totality directly. It cannot be pinned
 * through the transport, because the retirement chain's own guard absorbs a
 * rejection here — which is the point of that guard, and the reason the two
 * fixes need separate coverage.
 *
 * Resolves `true` when the child actually exited and `false` when the bound
 * elapsed first. Those two must stay distinguishable: reporting a timeout as
 * success is the same shape as `SendInput` returning a full count after a UIPI
 * refusal — a call that can fail telling its caller it did not.
 *
 * Total by construction: teardown is the only caller, and a rejection here
 * poisons the retirement chain, so every path resolves. The timer handles are
 * declared before `finish` because `finish` runs from the `kill()` catch —
 * `const`s declared after the `try` would be in the temporal dead zone there,
 * and reading one throws a `ReferenceError` out of the promise executor,
 * leaving the sidecar alive and unsignalled.
 */
export function stopChild(child: ChildProcess): Promise<boolean> {
	if (!isAlive(child)) {
		return Promise.resolve(true);
	}
	return new Promise<boolean>(resolve => {
		let settled = false;
		let graceTimer: ReturnType<typeof setTimeout> | undefined;
		let hardTimer: ReturnType<typeof setTimeout> | undefined;
		const finish = (exited: boolean): void => {
			if (settled) {
				return;
			}
			settled = true;
			if (graceTimer !== undefined) {
				clearTimeout(graceTimer);
			}
			if (hardTimer !== undefined) {
				clearTimeout(hardTimer);
			}
			resolve(exited);
		};
		child.once('exit', () => finish(true));
		try {
			child.kill();
		} catch {
			// Already gone, or not ours to signal. Node also throws here when a
			// second kill finds no `error` listener left on the child. We did
			// not observe an exit, so we cannot claim one.
			finish(isAlive(child) === false);
			return;
		}
		// `kill()` is TerminateProcess on Windows, so the escalation only does
		// anything on POSIX; the bounded wait is what matters on both.
		graceTimer = setTimeout(() => {
			try {
				child.kill('SIGKILL');
			} catch {
				// Raced with a natural exit.
			}
		}, RETIRE_GRACE_MS);
		hardTimer = setTimeout(() => finish(false), RETIRE_HARD_MS);
	});
}

/**
 * Log without letting the logger fail its caller.
 *
 * Used on the retirement chain, where a throwing backend would reject the
 * chain and disable retirement and launching for the window's life.
 */
function logQuietly(write: () => void): void {
	try {
		write();
	} catch {
		// A diagnostic that cannot be written must not break the work it
		// describes; the channel is usually just already closed.
	}
}

/** Resolve when `work` settles or the deadline passes, whichever is first. */
function withDeadline(work: Promise<void>, ms: number): Promise<void> {
	return new Promise<void>(resolve => {
		const timer = setTimeout(resolve, ms);
		void work.then(
			() => {
				clearTimeout(timer);
				resolve();
			},
			() => {
				clearTimeout(timer);
				resolve();
			}
		);
	});
}

/** Signal a child we may not own and may already have reaped. */
function killQuietly(child: ChildProcess | undefined): void {
	if (child === undefined || !isAlive(child)) {
		return;
	}
	try {
		child.kill();
	} catch {
		// Already gone, or no `error` listener left to receive the failure.
	}
}

function isAlive(child: ChildProcess): boolean {
	return child.exitCode === null && child.signalCode === null;
}

function requirePid(child: ChildProcess): number {
	if (child.pid === undefined) {
		throw new ComputerUseRPCError(
			'computer-use sidecar could not be started (no process id)'
		);
	}
	return child.pid;
}

function toRPCError(error: unknown): ComputerUseRPCError {
	return new ComputerUseRPCError(
		`computer-use sidecar failed to start: ${error instanceof Error ? error.message : String(error)
		}`
	);
}

