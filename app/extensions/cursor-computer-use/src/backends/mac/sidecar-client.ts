/** macOS computer-use backend: the shared RPC client over the Unix-socket transport. */

import { execFile, spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { readFile, readlink, realpath } from "node:fs/promises";
import { createConnection, type Socket } from "node:net";
import * as os from "node:os";
import * as path from "node:path";
import { promisify } from "node:util";
import {
	SIDECAR_PROTOCOL_MAJOR,
	type CompanionSidecarToolName,
	type ComputerUseMode,
	type PermissionKind,
	type RemoteSidecarToolName,
	type SidecarPermissionStatus,
	type SidecarPermissionSettingsResult,
	type SidecarResponse,
	type SidecarToolResult,
} from "@anysphere/computer-use/protocol";
import type { Context } from "@anysphere/context";
import { createLogger } from "@anysphere/context";
import { delay } from "@anysphere/utils";
import {
	MAC_HELPER_IDENTITY,
	resolveMacHelperApp,
	type ResolvedMacHelperApp,
} from "./helper-discovery";
import { withSidecarInstallLock } from "../common/sidecar-install-lock";
import { macSidecarInstallLockOptions } from "./install-lock";
import { ComputerUseBackendError, conversationIdKey } from "../types";
import type {
	ComputerUseClick,
	ComputerUseDrag,
	ComputerUsePoint,
	ComputerUseScroll,
	ComputerUseBackend,
} from "../types";
import {
	MacRPCProtocol,
	MacRPCProtocolError,
	type MacServiceRendezvous,
} from "./rpc-codec";

const execFileAsync = promisify(execFile);
export const MAC_PROCESS_PATH_SCRIPT = `
function run(argv) {
	ObjC.import("Foundation");
	ObjC.bindFunction("proc_pidpath", [
		"int",
		["int", "void *", "unsigned int"],
	]);
	const data = $.NSMutableData.dataWithLength(4096);
	const buffer = data.mutableBytes;
	const byteCount = $.proc_pidpath(Number(argv[0]), buffer, 4096);
	if (byteCount <= 0) {
		return "";
	}
	const bytes = $.NSData.dataWithBytesLength(buffer, byteCount);
	return ObjC.unwrap(
		$.NSString.alloc.initWithDataEncoding(bytes, $.NSUTF8StringEncoding)
	) || "";
}`;
const INPUT_TOOL_NAMES = new Set<string>([
	"computer_use_click",
	"computer_use_mouse_move",
	"computer_use_drag",
	"computer_use_typing",
	"computer_use_press_key",
	"computer_use_scroll",
]);

/**
 * The remote sidecar paces typing at this many milliseconds per scalar, so a
 * long text outruns a fixed call timeout.
 */
const REMOTE_TYPING_MS_PER_SCALAR = 12;

const PERMISSIONS_REQUIRED_GUIDANCE =
	"Computer Use requires Accessibility and Screen Recording. Ask the user to turn both on for Cursor Computer Use in System Settings > Privacy & Security.";
/** The refusal once the user has been shown the Enable Computer Use window. */
const WAITING_FOR_ALLOW_GUIDANCE =
	"Computer Use requires Accessibility and Screen Recording. Waiting for the user to allow Computer Use in the Enable Computer Use window; tell the user, and retry after they allow it.";
/** A check reports; it must not read as a reason to skip the action. */
const CHECK_MISSING_GUIDANCE =
	"Go ahead with the Computer Use action the task needs; if a missing permission blocks it, the refusal says what the user has to do.";

function launchMacHelper(appPath: string): void {
	spawn("/usr/bin/open", ["-n", "-g", appPath], { stdio: "ignore" }).unref();
}

interface SidecarToolCall {
	name: string;
	args: Record<string, unknown>;
	mode: ComputerUseMode;
	sessionId?: string;
	/**
	 * Remote input has no per-observation token, so an unknown delivery outcome
	 * must latch until a new control session. Companion actions invalidate
	 * their token on delivery, which already forces a fresh observation, so
	 * they never touch the latch.
	 */
	latchesUnknownOutcome: boolean;
}

class MacComputerUseRPCError extends Error {
	constructor(
		message: string,
		readonly requestMayHaveBeenDelivered = false
	) {
		super(message);
		this.name = "MacComputerUseRPCError";
	}
}

/**
 * Client for the computer-use sidecar. Resolves + connects lazily, launching the
 * app the first time it is needed, mirroring the Swift `CUServiceConnector`
 * discover-or-launch dance.
 */
export class MacComputerUseRPCClient implements ComputerUseBackend {
	private static readonly logger = createLogger("computer-use:rpc");
	private static readonly appSupportOverrideEnv = "CUA_APP_SUPPORT_DIR";
	private static readonly legacyExecutableName = "CUService";
	private static readonly defaultCallTimeoutMs = 15_000;
	private static readonly launchReadyTimeoutMs = 8_000;
	private static readonly terminateTimeoutMs = 2_000;
	private static readonly launchPollIntervalMs = 200;
	private static readonly requestID = 1;

	private socketDiscovery:
		| { forceLaunch: boolean; promise: Promise<string> }
		| undefined;
	private sessionQueue: Promise<void> = Promise.resolve();
	private activeSessionId: string | undefined;
	/** Companion session for calls that carry no conversation id. */
	private readonly companionSessionId = randomUUID();
	private pendingStartRequestId: string | undefined;
	private activeToolCalls = 0;
	private hasUnknownInputOutcome = false;
	private permissionEpisodeBlocked = false;
	/** The blocked episode's report opened the Enable Computer Use window. */
	private permissionEpisodePrompted = false;
	/**
	 * A grant confirmed for the live helper session. While set, a preflight is
	 * answered without reopening a `permissions/status` RPC. Dropped on any
	 * observed denial, on the modal/refresh path, and on helper restart.
	 */
	private permissionGrantCached = false;
	private preflightPromise: Promise<void> | undefined;
	private restartPromise: Promise<SidecarPermissionStatus> | undefined;

	constructor(
		private readonly mode: ComputerUseMode,
		private readonly launchHelper: (appPath: string) => void = launchMacHelper,
		/**
		 * A preflighted action was refused on a denial a fresh helper
		 * confirmed. Resolves true once the user is shown the Enable Computer
		 * Use window, which the refusal then points at.
		 */
		private readonly onPermissionsBlocked?: (
			status: SidecarPermissionStatus
		) => unknown,
		private readonly selectedHelper?: ResolvedMacHelperApp
	) { }

	/** Where the selected helper's product profile puts its rendezvous. */
	private get appSupportFolder(): string {
		return (this.selectedHelper?.identity ?? MAC_HELPER_IDENTITY).appSupportFolder;
	}

	/** Cheap probe used to gate registration; does not launch anything. */
	static isInstalled(): boolean {
		return resolveMacHelperApp() !== undefined;
	}

	static async assertNoRunningHelperForInstall(): Promise<void> {
		const state = await MacComputerUseRPCClient.readServiceState(
			MAC_HELPER_IDENTITY.appSupportFolder
		);
		if (
			state !== undefined &&
			MacComputerUseRPCClient.isProcessAlive(state.pid)
		) {
			throw new MacComputerUseRPCError(
				"Another Cursor Computer Use helper is running. Quit other Cursor windows and retry."
			);
		}
	}

	screenshot(ctx: Context): Promise<SidecarToolResult> {
		return this.callTool(ctx, "computer_use_screenshot", {});
	}

	startControl(ctx: Context): Promise<void> {
		return this.enqueueSessionOperation(async () => {
			const requestID = this.pendingStartRequestId ?? randomUUID();
			this.pendingStartRequestId = requestID;
			const startRequest = () =>
				this.sendRequest(
					ctx,
					() => ({
						id: MacComputerUseRPCClient.requestID,
						method: "control/start",
						requestID,
						mode: this.mode,
					}),
					MacComputerUseRPCClient.defaultCallTimeoutMs,
					"control/start"
				);
			let response: SidecarResponse;
			try {
				response = await startRequest();
			} catch (error) {
				if (
					!(error instanceof MacComputerUseRPCError) ||
					!error.requestMayHaveBeenDelivered
				) {
					throw error;
				}
				response = await startRequest();
			}
			if (response.error !== undefined) {
				this.pendingStartRequestId = undefined;
				MacComputerUseRPCClient.throwIfRPCError(response);
			}
			if (response.sessionId === undefined) {
				throw new MacComputerUseRPCError(
					"computer-use control start returned no session"
				);
			}
			this.activeSessionId = response.sessionId;
			this.hasUnknownInputOutcome = false;
			this.pendingStartRequestId = undefined;
		});
	}

	releaseControl(ctx: Context): Promise<void> {
		return this.enqueueSessionOperation(() => {
			const sessionId = this.activeSessionId;
			if (sessionId === undefined) {
				return Promise.resolve();
			}
			return this.runWithSession(ctx, sessionId, async () => {
				const response = await this.sendRelease(ctx, sessionId);
				MacComputerUseRPCClient.throwIfRPCError(response);
				if (response.ok !== true) {
					throw new MacComputerUseRPCError(
						"computer-use control release returned no status"
					);
				}
				this.activeSessionId = undefined;
			});
		});
	}

	click(
		ctx: Context,
		click: ComputerUseClick
	): Promise<SidecarToolResult> {
		return this.callInput(ctx, "computer_use_click", {
			x: click.coordinate.x,
			y: click.coordinate.y,
			button: click.button,
			count: click.count,
		});
	}

	scroll(
		ctx: Context,
		scroll: ComputerUseScroll
	): Promise<SidecarToolResult> {
		return this.callInput(ctx, "computer_use_scroll", {
			x: scroll.coordinate.x,
			y: scroll.coordinate.y,
			direction: scroll.direction,
			amount: scroll.amount,
		});
	}

	move(
		ctx: Context,
		coordinate: ComputerUsePoint
	): Promise<SidecarToolResult> {
		return this.callInput(ctx, "computer_use_mouse_move", {
			x: coordinate.x,
			y: coordinate.y,
		});
	}

	drag(ctx: Context, drag: ComputerUseDrag): Promise<SidecarToolResult> {
		return this.callInput(ctx, "computer_use_drag", {
			button: drag.button,
			path: drag.path,
		});
	}

	typeText(ctx: Context, text: string): Promise<SidecarToolResult> {
		return this.callInput(ctx, "computer_use_typing", { value: text });
	}

	pressKey(ctx: Context, key: string): Promise<SidecarToolResult> {
		return this.callInput(ctx, "computer_use_press_key", { key });
	}

	async checkPermissions(ctx: Context): Promise<SidecarToolResult> {
		const result = await this.callTool(
			ctx,
			"computer_use_check_permissions",
			{}
		);
		const permissions = result.structuredContent?.permissions;
		if (permissions === undefined) {
			throw new MacComputerUseRPCError(
				"computer-use sidecar returned no permission status"
			);
		}
		// A check reports; only a blocked action asks for the permissions window.
		const status = this.observePermissionStatus({
			accessibilityTrusted: permissions.accessibilityTrusted,
			screenRecordingGranted: permissions.screenRecordingGranted,
		});
		if (status.accessibilityTrusted && status.screenRecordingGranted) {
			return result;
		}
		return {
			...result,
			message: `${result.message.trim()} ${CHECK_MISSING_GUIDANCE}`.trim(),
		};
	}

	callCompanion(
		ctx: Context,
		name: CompanionSidecarToolName,
		args: Record<string, unknown>
	): Promise<SidecarToolResult> {
		return this.callSidecarTool(ctx, {
			name,
			args: {
				...args,
				session_id: ctx.get(conversationIdKey) ?? this.companionSessionId,
			},
			mode: "companion",
			latchesUnknownOutcome: false,
		});
	}

	private callTool(
		ctx: Context,
		name: RemoteSidecarToolName,
		args: Record<string, unknown>,
		sessionId?: string
	): Promise<SidecarToolResult> {
		return this.callSidecarTool(ctx, {
			name,
			args,
			mode: this.mode,
			sessionId,
			latchesUnknownOutcome: INPUT_TOOL_NAMES.has(name),
		});
	}

	private async callSidecarTool(
		ctx: Context,
		call: SidecarToolCall
	): Promise<SidecarToolResult> {
		this.beginToolCall(call.latchesUnknownOutcome);
		try {
			return await this.callToolUnchecked(ctx, call);
		} finally {
			this.activeToolCalls -= 1;
		}
	}

	private beginToolCall(latchesUnknownOutcome: boolean): void {
		if (this.restartPromise !== undefined) {
			throw new MacComputerUseRPCError(
				"Computer Use permissions are refreshing. Wait for refresh to finish."
			);
		}
		if (this.hasUnknownInputOutcome && latchesUnknownOutcome) {
			throw new MacComputerUseRPCError(
				"Computer Use cannot send more input after an action with an unknown outcome. Start a new control session before trying again."
			);
		}
		this.activeToolCalls += 1;
	}

	getPermissionStatus(): Promise<SidecarPermissionStatus> {
		return this.sendPermissionStatus();
	}

	async getOrLaunchPermissionStatus(
		ctx: Context
	): Promise<SidecarPermissionStatus> {
		const socketPath = await this.ensureSocketPath(ctx);
		return this.sendPermissionStatus(socketPath);
	}

	preflight(ctx: Context): Promise<void> {
		const existing = this.preflightPromise;
		if (existing !== undefined) {
			return existing;
		}
		if (this.permissionEpisodeBlocked) {
			return Promise.reject(
				MacComputerUseRPCClient.permissionsBlockedError(this.permissionEpisodePrompted)
			);
		}
		const preflight = this.runPreflight(ctx).finally(() => {
			if (this.preflightPromise === preflight) {
				this.preflightPromise = undefined;
			}
		});
		this.preflightPromise = preflight;
		return preflight;
	}

	/**
	 * Only the permissions window asks for this, and it renders the status it
	 * gets back, so a denial here is not reported to `onPermissionsBlocked`:
	 * that would send the window's own answer back to it as a request to show
	 * the window again.
	 */
	async refreshPermissionEpisode(
		ctx: Context
	): Promise<SidecarPermissionStatus> {
		// A restart already in flight (a preflight's recovery) serves the
		// refresh. Otherwise let a pending preflight settle first, so the
		// restart cannot tear down a helper that preflight is still probing.
		let restart = this.restartPromise;
		if (restart === undefined) {
			while (this.preflightPromise !== undefined) {
				await this.preflightPromise.catch(() => undefined);
			}
			restart = this.restartAndGetPermissionStatus(ctx);
		}
		const status = await restart;
		this.permissionEpisodeBlocked =
			!status.accessibilityTrusted || !status.screenRecordingGranted;
		return status;
	}

	async openPermissionSettings(
		ctx: Context,
		permission: PermissionKind
	): Promise<SidecarPermissionSettingsResult> {
		const socketPath = await this.ensureSocketPath(ctx);
		const response = await MacComputerUseRPCClient.sendOnce(
			socketPath,
			{
				id: MacComputerUseRPCClient.requestID,
				method: "permissions/open-settings",
				permission,
			},
			MacComputerUseRPCClient.defaultCallTimeoutMs
		);
		if (response.error !== undefined) {
			throw new MacComputerUseRPCError(response.error);
		}
		const result = response.permissionSettings;
		if (result === undefined || result.permission !== permission) {
			throw new MacComputerUseRPCError(
				"computer-use sidecar returned an invalid permission settings result"
			);
		}
		if (!result.opened) {
			throw new MacComputerUseRPCError(
				`Could not open ${permission === "accessibility" ? "Accessibility" : "Screen & System Audio Recording"} in System Settings.`
			);
		}
		return result;
	}

	restartAndGetPermissionStatus(
		ctx: Context
	): Promise<SidecarPermissionStatus> {
		if (this.activeToolCalls > 0 || this.hasUnknownInputOutcome) {
			throw new MacComputerUseRPCError(
				"Computer Use cannot restart during an active action or after an input action with an unknown outcome."
			);
		}
		const existing = this.restartPromise;
		if (existing !== undefined) {
			return existing;
		}
		const restart = this.enqueueSessionOperation(() =>
			this.restartAndGetPermissionStatusUnchecked(ctx)
		).finally(() => {
			if (this.restartPromise === restart) {
				this.restartPromise = undefined;
			}
		});
		this.restartPromise = restart;
		return restart;
	}

	private async callToolUnchecked(
		ctx: Context,
		{ name, args, mode, sessionId, latchesUnknownOutcome }: SidecarToolCall
	): Promise<SidecarToolResult> {
		const timeoutMs = Math.max(
			MacComputerUseRPCClient.defaultCallTimeoutMs,
			mode === "remote" &&
				name === "computer_use_typing" &&
				typeof args.value === "string"
				? REMOTE_TYPING_MS_PER_SCALAR * args.value.length + 5_000
				: 0
		);
		// Fresh timestamps per attempt: a pre-delivery relaunch can take seconds, and
		// reusing the first attempt's deadline would present an already-elapsed window.
		const buildRequest = (): Record<string, unknown> => {
			const startedAtEpochSeconds = Date.now() / 1000;
			return {
				id: MacComputerUseRPCClient.requestID,
				method: "tools/call",
				requestID: randomUUID(),
				name,
				arguments: args,
				timeoutSeconds: timeoutMs / 1000,
				startedAtEpochSeconds,
				deadlineEpochSeconds: startedAtEpochSeconds + timeoutMs / 1000,
				mode,
				...(sessionId !== undefined && { sessionId }),
			};
		};
		const response = await this.sendRequest(
			ctx,
			buildRequest,
			timeoutMs,
			name,
			latchesUnknownOutcome
		);
		MacComputerUseRPCClient.throwIfRPCError(response);
		const result = response.result;
		if (result === undefined) {
			throw new MacComputerUseRPCError(
				`computer-use tool ${name} returned no result`
			);
		}
		// Surface tool-level failures (e.g. missing Screen Recording permission)
		// instead of silently returning an empty result.
		if (result.isError) {
			const text = result.message.trim();
			if (
				latchesUnknownOutcome &&
				result.structuredContent?.error?.type !== "user_aborted"
			) {
				this.hasUnknownInputOutcome = true;
				throw new MacComputerUseRPCError(
					text.length > 0
						? text
						: `computer-use tool ${name} reported an error`,
					true
				);
			}
			throw new ComputerUseBackendError(
				text.length > 0
					? text
					: `computer-use tool ${name} reported an error`,
				result.structuredContent?.error?.type === "user_aborted"
					? "user_aborted"
					: undefined
			);
		}
		return result;
	}

	private static throwIfRPCError(response: SidecarResponse): void {
		if (response.error !== undefined) {
			throw new ComputerUseBackendError(response.error, response.errorCode);
		}
	}

	private callInput(
		ctx: Context,
		name: RemoteSidecarToolName,
		args: Record<string, unknown>
	): Promise<SidecarToolResult> {
		return this.withSession(ctx, sessionId =>
			this.callTool(ctx, name, args, sessionId)
		);
	}

	private withSession<T>(
		ctx: Context,
		operation: (sessionId: string) => Promise<T>
	): Promise<T> {
		return this.enqueueSessionOperation(() => {
			const sessionId = this.activeSessionId;
			if (sessionId === undefined) {
				throw new ComputerUseBackendError(
					"Start remote control first."
				);
			}
			return this.runWithSession(ctx, sessionId, () => operation(sessionId));
		});
	}

	/** Runs inside the session queue; releases the session on errors that leave it unusable. */
	private async runWithSession<T>(
		ctx: Context,
		sessionId: string,
		operation: () => Promise<T>
	): Promise<T> {
		try {
			return await operation();
		} catch (error) {
			if (
				error instanceof ComputerUseBackendError &&
				error.code === "user_aborted" &&
				this.activeSessionId === sessionId
			) {
				this.activeSessionId = undefined;
			} else if (
				error instanceof MacRPCProtocolError ||
				(error instanceof MacComputerUseRPCError &&
					error.requestMayHaveBeenDelivered) ||
				(error instanceof ComputerUseBackendError &&
					(error.code === "session_busy" ||
						error.code === "session_required"))
			) {
				await this.releaseSessionBestEffort(ctx, sessionId);
			}
			throw error;
		}
	}

	async shutdown(ctx: Context): Promise<void> {
		const sessionId = this.activeSessionId;
		this.activeSessionId = undefined;
		if (sessionId !== undefined) {
			await this.releaseSessionBestEffort(ctx, sessionId);
		}
	}

	private sendRelease(
		ctx: Context,
		sessionId: string,
		timeoutMs = MacComputerUseRPCClient.defaultCallTimeoutMs
	): Promise<SidecarResponse> {
		return this.sendRequest(
			ctx,
			() => ({
				id: MacComputerUseRPCClient.requestID,
				method: "control/release",
				sessionId,
				mode: this.mode,
			}),
			timeoutMs,
			"control/release"
		);
	}

	private async releaseSessionBestEffort(
		ctx: Context,
		sessionId: string
	): Promise<void> {
		try {
			await this.sendRelease(ctx, sessionId, 2_000);
		} catch {
			// Best effort: native timeout still cancels the in-flight task.
		}
		if (this.activeSessionId === sessionId) {
			this.activeSessionId = undefined;
		}
	}

	private enqueueSessionOperation<T>(operation: () => Promise<T>): Promise<T> {
		const result = this.sessionQueue.then(operation);
		this.sessionQueue = result.then(
			() => { },
			() => { }
		);
		return result;
	}

	private async sendRequest(
		ctx: Context,
		buildRequest: () => Record<string, unknown>,
		timeoutMs: number,
		operation: string,
		latchesUnknownOutcome = false
	): Promise<SidecarResponse> {
		const isPassivePermissionCheck =
			operation === "computer_use_check_permissions";
		const socketPath = await this.ensureSocketPath(ctx);
		try {
			return await MacComputerUseRPCClient.sendOnce(
				socketPath,
				buildRequest(),
				timeoutMs
			);
		} catch (error) {
			// Retry only when the request could not have reached the sidecar. Retrying
			// a timeout or disconnect after write could duplicate a real click/type.
			const errorCode =
				MacComputerUseRPCClient.preDeliveryConnectionErrorCode(error);
			if (errorCode === undefined || isPassivePermissionCheck) {
				if (latchesUnknownOutcome) {
					this.hasUnknownInputOutcome = true;
				}
				throw error;
			}
			MacComputerUseRPCClient.logger.warn(
				ctx,
				"computer-use request failed before delivery; relaunching and retrying",
				{
					operation,
					errorCode,
				}
			);
			const retryPath = await this.ensureSocketPath(ctx, true);
			try {
				return await MacComputerUseRPCClient.sendOnce(
					retryPath,
					buildRequest(),
					timeoutMs
				);
			} catch (error) {
				if (latchesUnknownOutcome) {
					this.hasUnknownInputOutcome = true;
				}
				throw error;
			}
		}
	}

	private async sendPermissionStatus(
		socketPath?: string
	): Promise<SidecarPermissionStatus> {
		const resolvedSocketPath = socketPath ?? await this.passiveSocketPath();
		const response = await MacComputerUseRPCClient.sendOnce(
			resolvedSocketPath,
			{ id: MacComputerUseRPCClient.requestID, method: "permissions/status" },
			MacComputerUseRPCClient.defaultCallTimeoutMs
		);
		if (response.error !== undefined) {
			throw new MacComputerUseRPCError(response.error);
		}
		if (response.permissionStatus === undefined) {
			throw new MacComputerUseRPCError(
				"computer-use sidecar returned no permission status"
			);
		}
		return this.observePermissionStatus(response.permissionStatus);
	}

	/**
	 * Every permission status the sidecar reports passes through here, so a
	 * grant seen by any reader (modal poll, `computer_check_permissions`,
	 * preflight probe or restart) ends a blocked episode. Denial does not latch
	 * here: only a preflight or refresh whose restart confirmed it latches.
	 */
	private observePermissionStatus(
		status: SidecarPermissionStatus
	): SidecarPermissionStatus {
		const granted =
			status.accessibilityTrusted && status.screenRecordingGranted;
		// Cache a grant so later preflights skip the probe; drop it on denial so
		// the next preflight probes again. This mirrors the blocked-episode
		// reset below, which only a grant clears.
		this.permissionGrantCached = granted;
		if (granted) {
			this.permissionEpisodeBlocked = false;
			this.permissionEpisodePrompted = false;
		}
		return status;
	}

	private async passiveSocketPath(): Promise<string> {
		const state = await MacComputerUseRPCClient.readServiceState(this.appSupportFolder);
		if (state === undefined) {
			throw new MacComputerUseRPCError(
				"computer-use sidecar is not running"
			);
		}
		MacComputerUseRPCClient.requireCompatibleSocket(state);
		if (
			this.selectedHelper !== undefined &&
			!(await this.isExpectedHelperProcess(state.pid))
		) {
			throw new MacComputerUseRPCError(
				"Computer Use helper came from an unexpected app path."
			);
		}
		return state.rpcSocketPath;
	}

	/**
	 * The latch is set only from a permission status that came back denied. A
	 * probe or restart that could not run says nothing about permissions: on a
	 * cold start another tool call may be launching the helper (no rendezvous
	 * file yet) and a restart is refused while that call is active.
	 */
	private async runPreflight(ctx: Context): Promise<void> {
		// Read before any await: a restart in flight is this preflight's
		// recovery, so its status is consumed rather than probed around —
		// even when a grant is still cached. The cache is only dropped
		// inside the queued restart, after `restartPromise` is already set.
		const restart = this.restartPromise;
		if (restart === undefined && this.permissionGrantCached) {
			return;
		}
		const status =
			restart !== undefined
				? await restart
				: await this.probePermissionStatus(ctx);
		if (status.accessibilityTrusted && status.screenRecordingGranted) {
			return;
		}
		this.permissionEpisodeBlocked = true;
		this.permissionEpisodePrompted = (await this.onPermissionsBlocked?.(status)) === true;
		throw MacComputerUseRPCClient.permissionsBlockedError(this.permissionEpisodePrompted);
	}

	/**
	 * Passive probe first, so remote mode never launches from a preflight
	 * while the helper answers. If the probe fails and a launch is already in
	 * flight (another call is starting the helper), that launch is the
	 * recovery: its status is final for this preflight, and a status error
	 * from it surfaces as is, so the fresh helper is never restarted from
	 * here. Otherwise the existing one-shot restart recovers, and a denial
	 * from a running helper is restarted once so a grant made since it
	 * started takes effect.
	 */
	private async probePermissionStatus(
		ctx: Context
	): Promise<SidecarPermissionStatus> {
		let status: SidecarPermissionStatus;
		try {
			status = await this.sendPermissionStatus();
		} catch {
			const launch = this.socketDiscovery?.promise;
			if (launch !== undefined) {
				return this.sendPermissionStatus(await launch);
			}
			return this.restartAndGetPermissionStatus(ctx);
		}
		if (!status.accessibilityTrusted || !status.screenRecordingGranted) {
			return this.restartAndGetPermissionStatus(ctx);
		}
		return status;
	}

	private static permissionsBlockedError(prompted: boolean): MacComputerUseRPCError {
		return new MacComputerUseRPCError(
			prompted ? WAITING_FOR_ALLOW_GUIDANCE : PERMISSIONS_REQUIRED_GUIDANCE
		);
	}

	private async restartAndGetPermissionStatusUnchecked(
		ctx: Context
	): Promise<SidecarPermissionStatus> {
		// The restart replaces the helper, so any cached grant no longer applies
		// until the fresh helper reports its status below.
		this.permissionGrantCached = false;
		const sessionId = this.activeSessionId;
		if (sessionId !== undefined) {
			await this.releaseSessionBestEffort(ctx, sessionId);
		}
		this.activeSessionId = undefined;
		const state = await MacComputerUseRPCClient.readServiceState(this.appSupportFolder);
		if (state !== undefined) {
			const wasAlive = MacComputerUseRPCClient.isProcessAlive(state.pid);
			if (
				wasAlive &&
				!(await this.isExpectedHelperProcess(state.pid))
			) {
				throw new MacComputerUseRPCError(
					"Refusing to restart an unexpected process from computer-use service state."
				);
			}
			if (wasAlive) {
				try {
					const response = await MacComputerUseRPCClient.sendOnce(
						state.rpcSocketPath,
						{ id: MacComputerUseRPCClient.requestID, method: "shutdown" },
						MacComputerUseRPCClient.terminateTimeoutMs
					);
					if (response.error !== undefined) {
						throw new MacComputerUseRPCError(response.error);
					}
				} catch (error) {
					const message =
						error instanceof Error ? error.message : String(error);
					throw new MacComputerUseRPCError(
						`Computer Use shutdown was not acknowledged; refusing to signal the sidecar. ${message}`
					);
				}
				if (
					!(await MacComputerUseRPCClient.waitForProcessExit(
						state.pid,
						MacComputerUseRPCClient.terminateTimeoutMs
					))
				) {
					await this.signalExpectedHelper(
						state.pid,
						"SIGTERM"
					);
					if (
						!(await MacComputerUseRPCClient.waitForProcessExit(
							state.pid,
							MacComputerUseRPCClient.terminateTimeoutMs
						))
					) {
						await this.signalExpectedHelper(
							state.pid,
							"SIGKILL"
						);
						if (
							!(await MacComputerUseRPCClient.waitForProcessExit(
								state.pid,
								MacComputerUseRPCClient.terminateTimeoutMs
							))
						) {
							throw new MacComputerUseRPCError(
								"computer-use sidecar did not exit"
							);
						}
					}
				}
			}
			const replacement = await MacComputerUseRPCClient.readServiceState(this.appSupportFolder);
			if (
				replacement !== undefined &&
				!MacComputerUseRPCClient.sameServiceState(replacement, state)
			) {
				if (
					this.selectedHelper !== undefined &&
					!(await this.isExpectedHelperProcess(replacement.pid))
				) {
					throw new MacComputerUseRPCError(
						"Replacement Cursor Computer Use helper came from an unexpected app path."
					);
				}
				this.socketDiscovery = undefined;
				return this.sendPermissionStatus(replacement.rpcSocketPath);
			}
		}
		this.socketDiscovery = undefined;
		const socketPath = await this.launchAndWait(ctx, state);
		return this.sendPermissionStatus(socketPath);
	}

	private async ensureSocketPath(
		ctx: Context,
		forceLaunch = false
	): Promise<string> {
		const activeDiscovery = this.socketDiscovery;
		if (activeDiscovery !== undefined) {
			if (!forceLaunch || activeDiscovery.forceLaunch) {
				return activeDiscovery.promise;
			}
			return activeDiscovery.promise.then(() =>
				this.ensureSocketPath(ctx, true)
			);
		}
		const discovery = this.discoverSocketPath(ctx, forceLaunch).finally(() => {
			if (this.socketDiscovery?.promise === discovery) {
				this.socketDiscovery = undefined;
			}
		});
		this.socketDiscovery = { forceLaunch, promise: discovery };
		return discovery;
	}

	private async discoverSocketPath(
		ctx: Context,
		forceLaunch: boolean
	): Promise<string> {
		const previousState = await MacComputerUseRPCClient.readServiceState(this.appSupportFolder);
		if (!forceLaunch && previousState) {
			MacComputerUseRPCClient.requireCompatibleSocket(previousState);
			if (
				this.selectedHelper === undefined ||
				(await this.isExpectedHelperProcess(previousState.pid))
			) {
				return previousState.rpcSocketPath;
			}
			if (MacComputerUseRPCClient.isProcessAlive(previousState.pid)) {
				throw new MacComputerUseRPCError(
					"Another Cursor Computer Use helper is already running from a different app path."
				);
			}
		}
		return this.launchAndWait(ctx, previousState);
	}

	private static requireCompatibleSocket(
		state: MacServiceRendezvous
	): string {
		if (state.protocolMajor !== SIDECAR_PROTOCOL_MAJOR) {
			throw new MacComputerUseRPCError(
				"An incompatible Cursor Computer Use helper is already running. " +
				"Update or quit other Cursor versions, then retry."
			);
		}
		return state.rpcSocketPath;
	}

	private async isExpectedHelperProcess(pid: number): Promise<boolean> {
		const resolved = this.selectedHelper ?? resolveMacHelperApp();
		if (resolved === undefined) {
			return false;
		}
		try {
			const reportedPath =
				process.platform === "linux"
					? path.resolve(await readlink(`/proc/${pid}/exe`))
					: (
						await execFileAsync(
							"/usr/bin/osascript",
							[
								"-l",
								"JavaScript",
								"-e",
								MAC_PROCESS_PATH_SCRIPT,
								String(pid),
							],
							{ encoding: "utf8" }
						)
					).stdout.trim();
			if (reportedPath.length === 0) {
				return false;
			}
			const executablePath =
				await MacComputerUseRPCClient.canonicalExecutablePath(reportedPath);
			const { executableName } = resolved.identity;
			const executableNames =
				resolved.source === "download-cache" ||
					resolved.identity !== MAC_HELPER_IDENTITY
					? [executableName]
					: [executableName, MacComputerUseRPCClient.legacyExecutableName];
			const expectedPaths = await Promise.all(executableNames.map(name =>
				MacComputerUseRPCClient.canonicalExecutablePath(
					path.resolve(resolved.appPath, "Contents", "MacOS", name)
				)
			));
			return expectedPaths.includes(executablePath);
		} catch {
			return false;
		}
	}

	private static async canonicalExecutablePath(
		executablePath: string
	): Promise<string> {
		try {
			return await realpath(executablePath);
		} catch {
			return path.resolve(executablePath);
		}
	}

	private static isProcessAlive(pid: number): boolean {
		try {
			process.kill(pid, 0);
			return true;
		} catch {
			return false;
		}
	}

	private static async waitForProcessExit(
		pid: number,
		timeoutMs: number
	): Promise<boolean> {
		const deadline = Date.now() + timeoutMs;
		while (Date.now() < deadline) {
			if (!MacComputerUseRPCClient.isProcessAlive(pid)) {
				return true;
			}
			await delay(MacComputerUseRPCClient.launchPollIntervalMs);
		}
		return !MacComputerUseRPCClient.isProcessAlive(pid);
	}

	private async signalExpectedHelper(
		pid: number,
		signal: "SIGTERM" | "SIGKILL"
	): Promise<void> {
		if (!MacComputerUseRPCClient.isProcessAlive(pid)) {
			return;
		}
		if (!(await this.isExpectedHelperProcess(pid))) {
			throw new MacComputerUseRPCError(
				"Refusing to signal an unexpected computer-use process."
			);
		}
		try {
			process.kill(pid, signal);
		} catch (error) {
			if (
				error instanceof Error &&
				"code" in error &&
				error.code === "ESRCH"
			) {
				return;
			}
			throw error;
		}
	}

	private async launchAndWait(
		ctx: Context,
		previousState?: MacServiceRendezvous
	): Promise<string> {
		const resolved = this.selectedHelper ?? resolveMacHelperApp();
		if (resolved === undefined) {
			throw new MacComputerUseRPCError(
				"The Cursor Computer Use helper app was not found. Reload after " +
				"installing it, or set CUA_SERVICE_APP to a development build."
			);
		}
		if (resolved.source !== "download-cache") {
			return this.launchResolvedAndWait(ctx, resolved, previousState);
		}
		return withSidecarInstallLock(
			path.dirname(resolved.appPath),
			() => this.launchResolvedAndWait(ctx, resolved, previousState),
			macSidecarInstallLockOptions(message =>
				MacComputerUseRPCClient.logger.warn(ctx, message)
			)
		);
	}

	private async launchResolvedAndWait(
		ctx: Context,
		resolved: ResolvedMacHelperApp,
		previousState?: MacServiceRendezvous
	): Promise<string> {
		MacComputerUseRPCClient.logger.info(ctx, "launching computer-use sidecar", {
			source: resolved.source,
		});
		this.launchHelper(resolved.appPath);

		const deadline = Date.now() + MacComputerUseRPCClient.launchReadyTimeoutMs;
		while (Date.now() < deadline) {
			const state = await MacComputerUseRPCClient.readServiceState(this.appSupportFolder);
			if (
				state &&
				(previousState === undefined ||
					!MacComputerUseRPCClient.sameServiceState(state, previousState))
			) {
				const hasExpectedIdentity =
					this.selectedHelper === undefined ||
					await this.isExpectedHelperProcess(state.pid);
				if (hasExpectedIdentity) {
					MacComputerUseRPCClient.requireCompatibleSocket(state);
					try {
						const response = await MacComputerUseRPCClient.sendOnce(
							state.rpcSocketPath,
							{ id: MacComputerUseRPCClient.requestID, method: "ping" },
							2_000
						);
						if ("ok" in response) {
							return state.rpcSocketPath;
						}
					} catch {
						// keep polling
					}
				}
			}
			await delay(MacComputerUseRPCClient.launchPollIntervalMs);
		}
		throw new MacComputerUseRPCError(
			"computer-use sidecar did not become ready in time"
		);
	}

	private static sameServiceState(
		left: MacServiceRendezvous,
		right: MacServiceRendezvous
	): boolean {
		return (
			left.pid === right.pid &&
			left.rpcSocketPath === right.rpcSocketPath &&
			left.updatedAt === right.updatedAt
		);
	}

	private static preDeliveryConnectionErrorCode(
		error: unknown
	): "ENOENT" | "ECONNREFUSED" | undefined {
		if (!(error instanceof Error) || !("code" in error)) {
			return undefined;
		}
		return error.code === "ENOENT" || error.code === "ECONNREFUSED"
			? error.code
			: undefined;
	}

	private static appSupportDirectory(appSupportFolder: string): string {
		const override = process.env[MacComputerUseRPCClient.appSupportOverrideEnv];
		if (override && override.length > 0) {
			return override;
		}
		return path.join(
			os.homedir(),
			"Library",
			"Application Support",
			appSupportFolder
		);
	}

	private static serviceStatePath(appSupportFolder: string): string {
		return path.join(
			MacComputerUseRPCClient.appSupportDirectory(appSupportFolder),
			"service.json"
		);
	}

	private static async readServiceState(appSupportFolder: string): Promise<
		MacServiceRendezvous | undefined
	> {
		try {
			const raw = await readFile(
				MacComputerUseRPCClient.serviceStatePath(appSupportFolder),
				"utf8"
			);
			return MacRPCProtocol.parseServiceState(raw);
		} catch (error) {
			if (
				error instanceof Error &&
				"code" in error &&
				error.code === "ENOENT"
			) {
				return undefined;
			}
			if (error instanceof MacRPCProtocolError) {
				// A malformed or legacy-corrupt service.json must not wedge discovery
				// forever: treat it like a missing file so callers fall through to
				// relaunching the sidecar, which rewrites service.json on start.
				return undefined;
			}
			throw new MacComputerUseRPCError(
				"computer-use service state could not be read"
			);
		}
	}

	/** Send one newline-delimited JSON-RPC request over one connection. */
	private static sendOnce(
		socketPath: string,
		request: Record<string, unknown>,
		timeoutMs: number
	): Promise<SidecarResponse> {
		return new Promise((resolve, reject) => {
			let settled = false;
			let bufferedChunks: Buffer[] = [];
			let bufferedBytes = 0;
			let requestDelivered = false;
			const socket: Socket = createConnection({ path: socketPath });

			const finish = (fn: () => void): void => {
				if (settled) {
					return;
				}
				settled = true;
				clearTimeout(timer);
				socket.destroy();
				fn();
			};

			const timer = setTimeout(() => {
				finish(() =>
					reject(
						new MacComputerUseRPCError(
							`computer-use RPC timed out after ${timeoutMs}ms`,
							requestDelivered
						)
					)
				);
			}, timeoutMs);

			socket.on("connect", () => {
				socket.write(`${JSON.stringify(request)}\n`, error => {
					if (error != null) {
						finish(() => reject(error));
						return;
					}
					requestDelivered = true;
				});
			});
			socket.on("data", chunk => {
				const newlineIndex = chunk.indexOf(0x0a);
				const frameBytes =
					bufferedBytes + (newlineIndex < 0 ? chunk.length : newlineIndex);
				if (frameBytes > MacRPCProtocol.responseMaxBytes) {
					finish(() =>
						reject(
							new MacComputerUseRPCError(
								"computer-use RPC response exceeded the size limit"
							)
						)
					);
					return;
				}
				if (newlineIndex < 0) {
					bufferedChunks.push(chunk);
					bufferedBytes += chunk.length;
					return;
				}
				bufferedChunks.push(chunk.subarray(0, newlineIndex));
				const line = Buffer.concat(bufferedChunks, frameBytes);
				bufferedChunks = [];
				bufferedBytes = 0;
				try {
					const parsed = MacRPCProtocol.parseResponse({
						line,
						expectedID: MacComputerUseRPCClient.requestID,
					});
					finish(() => resolve(parsed));
				} catch (error) {
					finish(() => reject(error));
				}
			});
			socket.on("error", error => {
				if (requestDelivered) {
					finish(() =>
						reject(
							new MacComputerUseRPCError(
								"computer-use RPC connection failed after request delivery",
								true
							)
						)
					);
					return;
				}
				finish(() => reject(error));
			});
			socket.on("close", () => {
				const message =
					bufferedBytes > 0
						? "computer-use RPC response ended without a newline"
						: requestDelivered
							? "computer-use RPC connection closed after request delivery"
							: "computer-use RPC connection closed";
				finish(() =>
					reject(new MacComputerUseRPCError(message, requestDelivered))
				);
			});
		});
	}
}
