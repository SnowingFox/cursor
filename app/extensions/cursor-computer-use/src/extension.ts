import type { McpProvider, McpProviderTurnEnd } from '@cursor/types';
import type {
	PermissionKind,
	SidecarPermissionStatus,
	SidecarPermissionSettingsResult,
} from '@anysphere/computer-use/protocol';
import {
	createContext,
	loggerKey,
	type Context,
	type LogEntry,
	type LoggerBackend,
} from '@anysphere/context';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import * as vscode from 'vscode';
import {
	resolveComputerUseBackendFactory,
	type ComputerUseBackendFactory,
} from './backends';
import type { ResolvedMacHelperApp } from './backends/mac/helper-discovery';
import { resolveMacHelperAppForLaunch } from './backends/mac/sidecar-download';
import { MacComputerUseRPCClient } from './backends/mac/sidecar-client';
import { conversationIdKey } from './backends/types';
import { WindowsComputerUseRPCClient } from './backends/windows/sidecar-client';
import { WindowsSidecarInstaller } from './backends/windows/sidecar-download';
import {
	COMPUTER_USE_FALLBACK_INSTRUCTIONS,
	COMPUTER_USE_LOCAL_INSTRUCTIONS,
	COMPUTER_USE_MCP_SERVER_ID,
	computerUseMcpTools,
	ComputerUseMcpToolset,
	composeComputerUseInstructions,
} from './mcp/tools';
import {
	resolveComputerUseMacMode,
	selectDarwinMcpInstructions,
	type ComputerUseMacResolvedMode,
} from './mcp/mac-mode';
import { BackendClientService } from './backendClient';
import { decideNextAction } from './mcp/next-action';

const LOCAL_COMPUTER_USE_FEATURE_GATE = 'local_computer_use';
const MAC_COMPUTER_USE_FEATURE_GATE = 'mac_computer_use';
/**
 * Lists `computer_batch` on Windows while on, and lets a `computer_batch`
 * call run; off, the call is refused as an unknown tool. Read at each listing
 * and each call rather than at activation — the activation-time read races
 * Statsig's hydration — and never read on macOS, where the batch does not
 * exist.
 */
const WINDOWS_COMPUTER_USE_BATCH_FEATURE_GATE = 'windows_computer_use_batch';
/**
 * Lists `computer_attempt` on the macOS companion path while on, and lets a
 * call run; read at each listing and each call like the batch gate. The
 * backend checks the same gate, and an internal user, before answering.
 */
const COMPUTER_USE_NEXT_ACTION_FEATURE_GATE = 'computer_use_next_action';
const MAC_COMPUTER_USE_DYNAMIC_CONFIG = 'mac_computer_use_sidecar_manifest';
const WINDOWS_COMPUTER_USE_DYNAMIC_CONFIG = 'windows_computer_use_sidecar_manifest';
const MCP_INSTRUCTIONS_DYNAMIC_CONFIG = 'computer_use_mcp_instructions';
const GET_PERMISSION_STATUS_COMMAND =
	'cursor.computerUse.getPermissionStatus';
const OPEN_PERMISSION_SETTINGS_COMMAND =
	'cursor.computerUse.openPermissionSettings';
const RESTART_AND_GET_PERMISSION_STATUS_COMMAND =
	'cursor.computerUse.restartAndGetPermissionStatus';
/**
 * Tells the Glass command a blocked action opened the window, so a window
 * that is already open is reused as is rather than brought forward again.
 */
const PERMISSIONS_PROMPT_AUTOMATIC_OPEN = { reason: 'computerUseCall' } as const;
/** Written by builds that waited a day between automatic opens. */
const LEGACY_PERMISSIONS_PROMPT_SHOWN_AT_KEY = 'computerUse.permissionsPromptShownAt';
const PREFLIGHTED_TOOLS = new Set(
	computerUseMcpTools({ attempt: true }).map(({ name }) => name).filter(
		(name) =>
			name !== 'computer_check_permissions' &&
			name !== 'computer_wait' &&
			name !== 'computer_start_control' &&
			name !== 'computer_release_control' &&
			name !== 'computer_apps' &&
			name !== 'computer_resolve_app'
	)
);
/**
 * Held so `deactivate` can stop the sidecar. Not a `context.subscriptions`
 * entry: `Disposable.dispose` is synchronous and nothing waits for the
 * promise it would return, whereas the extension host awaits `deactivate`.
 */
let activeToolset: ComputerUseMcpToolset | undefined;
/** The activation's context, held so teardown failures reach the output channel. */
let activeContext: Context | undefined;
/**
 * macOS only: the permission-surface client, so `deactivate` can send the
 * sidecar its graceful `shutdown` RPC. The Windows sidecar has no shutdown
 * method; its teardown is `activeToolset.dispose` stopping the child.
 */
let rpcClient: MacComputerUseRPCClient | undefined;
let helperResolutionAbortController: AbortController | undefined;

async function isBuiltProduct(appRoot: string): Promise<boolean> {
	try {
		const product: unknown = JSON.parse(
			await readFile(join(appRoot, 'product.json'), 'utf8')
		);
		return (
			typeof product === 'object' &&
			product !== null &&
			'commit' in product &&
			typeof product.commit === 'string' &&
			/^[0-9a-f]{40}$/.test(product.commit)
		);
	} catch {
		return false;
	}
}

/**
 * The channel with every line stamped with the ISO time it was written, so
 * launches, lease events and overlay shows and hides can be placed in time
 * from the log alone — an audit of a 73-minute session had to infer all of
 * them. Every other member of the channel is the real one's.
 */
export function withTimestamps(channel: vscode.OutputChannel): vscode.OutputChannel {
	return new Proxy(channel, {
		get(target, property, receiver) {
			if (property === 'appendLine') {
				return (line: string): void => {
					target.appendLine(`${new Date().toISOString()} ${line}`);
				};
			}
			const value: unknown = Reflect.get(target, property, receiver);
			return typeof value === 'function' ? value.bind(target) : value;
		},
	});
}

/** Exported so a test can pin the swallow directly; nothing else constructs it. */
export class OutputChannelLoggerBackend implements LoggerBackend {
	constructor(private readonly channel: vscode.OutputChannel) { }

	log(_ctx: Context, entry: LogEntry): void {
		try {
			// Serialization is inside the guard on purpose. This backend is the
			// extension-wide swallow, so it has to hold for callers it does not
			// know about, and `JSON.stringify` throws on a circular or `bigint`
			// value. Formatting a diagnostic outside the guard would let a
			// caller with richer metadata than today's `{pid}` walk straight
			// past it.
			const metadata = entry.metadata
				? ` ${JSON.stringify(entry.metadata)}`
				: '';
			this.channel.appendLine(`[${entry.level}] ${entry.message}${metadata}`);
		} catch {
			// `ExtHostOutputChannel.appendLine` throws `Channel has been closed`
			// once `context.subscriptions` is disposed, and teardown deliberately
			// outlives `deactivate` now, so late logging is expected rather than
			// exceptional. Nothing may fail because a diagnostic could not be
			// written — least of all the sidecar teardown, whose whole job is to
			// run when everything else is going away. This also covers the
			// sidecar stderr drain, where the throw would escape a stream
			// handler uncaught rather than as a rejection.
		}
	}
}

/**
 * The `computer_use_mcp_instructions` config, or undefined when the read
 * fails. Statsig can serve any shape, so the registered type is not trusted.
 */
async function readStatsigInstructionConfig(
	channel: vscode.OutputChannel
): Promise<Record<string, unknown> | undefined> {
	try {
		return await vscode.cursor.getDynamicConfigValue(
			MCP_INSTRUCTIONS_DYNAMIC_CONFIG
		);
	} catch {
		channel.appendLine(
			'[warn] Failed to read the Computer Use instructions config; using the fallback instructions'
		);
		return undefined;
	}
}

function win32InstructionBody(config: Record<string, unknown> | undefined): string | undefined {
	const body = config?.win32;
	return typeof body === 'string' && body.length > 0 ? body : undefined;
}

/**
 * Registers the first-party local computer-use MCP provider. Every tool call
 * goes to the computer-use sidecar for the host platform over its local RPC
 * (a Unix socket on macOS, a named pipe on Windows); nothing here (or in the
 * toolset) touches the screen or synthesizes input directly.
 *
 * Gating is registration-time: activation checks the gate before registering
 * any Computer Use surface, and `McpProviderService` checks the provider's
 * `featureGateName` again for central admission. The gate defaults to off,
 * and the activation-time read races Statsig's startup hydration — that
 * early it can see the default, or the value the previous session persisted
 * — so a gate that reads off is re-checked each time the experiment service
 * reports a change (a full refresh, or this gate by name) and the surface is
 * registered on the first report that says on. Nothing polls. The extension
 * still registers exactly once, so a gate that turns off later takes effect
 * on the next window reload and cannot dispose an active agent lease
 * mid-session.
 *
 * Helper selection is activation-time only on macOS: the dogfood config may
 * prepare a verified cached helper; otherwise `CUA_SERVICE_APP` or the Cursor
 * Dev helper applies, and a missing helper leaves computer use unavailable
 * until the next window reload. On Windows nothing is resolved at activation:
 * the release config names a signed sidecar to download and is read when a
 * tool call launches the sidecar, because an activation-time read races
 * Statsig's startup hydration — that early it returns the fallback or the
 * previous session's persisted value — and whatever it read would stick for
 * the session. A cached install is used offline, and every failure reaches the model as a
 * coded refusal and the output channel as an error; one that can clear on
 * its own (offline, proxy, CDN, lock) is retried on the next tool call.
 */
export async function activate(context: vscode.ExtensionContext): Promise<void> {
	const backendFactory = resolveComputerUseBackendFactory();
	if (backendFactory === undefined) {
		return;
	}
	const featureGate =
		backendFactory.platform === 'darwin'
			? MAC_COMPUTER_USE_FEATURE_GATE
			: LOCAL_COMPUTER_USE_FEATURE_GATE;
	const activatedAt = Date.now();
	if (await vscode.cursor.checkFeatureGate(featureGate)) {
		await registerComputerUse(
			context,
			backendFactory,
			featureGate,
			`${featureGate} gate on at activation`
		);
		return;
	}
	// Off this early is either the answer or Statsig not hydrated yet: the
	// value is the gate's default, or the bootstrap persisted by the previous
	// session. `checkFeatureGate` cannot tell the two apart, so the
	// distinction is left to the experiment service, which reports every
	// later hydration — an empty diff after a full refresh, or the gate by
	// name — and the extension host drops its cached value first. One
	// listener, disposed on the first report that says on or with the
	// extension; a window whose gate really is off keeps it for nothing more
	// than a re-check per refresh.
	logToExtensionHost(
		'info',
		`${featureGate} gate off at activation (the gate's default, or Statsig not hydrated yet); Computer Use registers if a later Statsig refresh turns it on`
	);
	let pending = true;
	const listener = vscode.cursor.onDidChangeGates(async event => {
		if (
			!pending ||
			(event.changedGates !== undefined && !event.changedGates.includes(featureGate))
		) {
			return;
		}
		const named = event.changedGates !== undefined;
		const on = await vscode.cursor.checkFeatureGate(featureGate);
		if (!pending) {
			return;
		}
		if (!on) {
			// Full refreshes recur for the window's life; only a change that
			// named this gate and still reads off is worth a line.
			if (named) {
				logToExtensionHost(
					'info',
					`${featureGate} gate still off after a Statsig gate change`
				);
			}
			return;
		}
		pending = false;
		listener.dispose();
		const gateNote = `${featureGate} gate on after a Statsig ${named ? 'gate change' : 'refresh'}, ${((Date.now() - activatedAt) / 1000).toFixed(1)} s after activation`;
		logToExtensionHost('info', `${gateNote}; registering Computer Use now`);
		try {
			await registerComputerUse(context, backendFactory, featureGate, gateNote);
		} catch (error) {
			logToExtensionHost(
				'error',
				`registering Computer Use after the gate turned on failed: ${String(error)}`
			);
		}
	});
	context.subscriptions.push(listener, {
		dispose: () => {
			pending = false;
		},
	});
}

/**
 * The extension host's log (`exthost.log`), for the lines the output
 * channel cannot carry: the channel exists only behind the gate, so a
 * window whose gate reads off would otherwise have no record of why
 * Computer Use is absent — and a channel for every install, most of them
 * without the feature, is not the answer.
 */
function logToExtensionHost(level: 'info' | 'error', message: string): void {
	const line = `[cursor-computer-use] ${message}`;
	if (level === 'error') {
		// eslint-disable-next-line local/code-no-console -- intentional: the gate-off window has no output channel; the extension host forwards console to exthost.log
		console.error(line);
		return;
	}
	// eslint-disable-next-line local/code-no-console -- intentional: the gate-off window has no output channel; the extension host forwards console to exthost.log
	console.info(line);
}

/**
 * Everything behind the gate: the output channel, the sidecar for this
 * platform, its permission surface, and the MCP provider. Runs once, at
 * activation when the gate is on, or later on the first Statsig report that
 * turns it on; `gateNote` says which, as the channel's first line.
 */
async function registerComputerUse(
	context: vscode.ExtensionContext,
	backendFactory: ComputerUseBackendFactory,
	featureGate: string,
	gateNote: string
): Promise<void> {
	const channel = withTimestamps(
		vscode.window.createOutputChannel('Cursor Computer Use')
	);
	context.subscriptions.push(channel);
	channel.appendLine(`[info] ${gateNote}`);

	const ctx = createContext().with(loggerKey, new OutputChannelLoggerBackend(channel));

	// The Windows batch gate's answer at this moment. One read serves both
	// ends of the batch: the listing asks it to decide whether `computer_batch`
	// is advertised, and the toolset asks it at each `computer_batch` call, so
	// the batch runs when and only when it is listed. A read that fails
	// answers off, and macOS — where the batch does not exist — never reads it.
	const batchListed = async (): Promise<boolean> => {
		if (backendFactory.platform !== 'win32') {
			return false;
		}
		try {
			return await vscode.cursor.checkFeatureGate(WINDOWS_COMPUTER_USE_BATCH_FEATURE_GATE);
		} catch {
			return false;
		}
	};

	// The attempt gate's answer at this moment, for the listing and each call.
	// macOS only; a read that fails answers off.
	const attemptListed = async (): Promise<boolean> => {
		if (backendFactory.platform !== 'darwin') {
			return false;
		}
		try {
			return await vscode.cursor.checkFeatureGate(COMPUTER_USE_NEXT_ACTION_FEATURE_GATE);
		} catch {
			return false;
		}
	};

	// The permission surface (Glass modal routing plus the status/settings
	// commands) exists only on macOS, where the sidecar genuinely reports
	// Accessibility and Screen Recording state. The Windows sidecar's
	// permissions are constant-granted, so there is nothing to route or
	// preflight there.
	let toolset: ComputerUseMcpToolset;
	let preflight: (() => Promise<void>) | undefined;
	let resolvedMacMode: ComputerUseMacResolvedMode | undefined;
	if (backendFactory.platform === 'darwin') {
		const abortController = new AbortController();
		helperResolutionAbortController = abortController;
		let sidecarManifestUrl: string | undefined;
		try {
			const config = await vscode.cursor.getDynamicConfigValue(
				MAC_COMPUTER_USE_DYNAMIC_CONFIG
			);
			sidecarManifestUrl = config?.sidecarManifestUrl || undefined;
		} catch {
			channel.appendLine(
				'[warn] Failed to read macOS Computer Use dogfood config; using the CUA_SERVICE_APP or Cursor Dev helper, if any'
			);
		}
		const builtProduct = await isBuiltProduct(vscode.env.appRoot);
		let selectedHelper: ResolvedMacHelperApp | undefined;
		let unavailableReason = 'Cursor Computer Use is not available.';
		try {
			selectedHelper = await resolveMacHelperAppForLaunch({
				builtProduct,
				manifestUrl: sidecarManifestUrl,
				signal: abortController.signal,
				log: message => channel.appendLine(`[warn] ${message}`),
			});
			if (!builtProduct && sidecarManifestUrl !== undefined && selectedHelper !== undefined) {
				channel.appendLine(
					`[info] Ignoring the Cursor Computer Use CDN manifest in Cursor Dev; using the ${selectedHelper.source} helper at ${selectedHelper.appPath}`
				);
			}
		} catch (error) {
			if (abortController.signal.aborted) {
				return;
			}
			channel.appendLine(
				`[error] Failed to prepare Cursor Computer Use helper: ${String(error)}`
			);
			unavailableReason =
				error instanceof Error ? error.message : String(error);
		}

		if (context.globalState.get(LEGACY_PERMISSIONS_PROMPT_SHOWN_AT_KEY) !== undefined) {
			void context.globalState.update(LEGACY_PERMISSIONS_PROMPT_SHOWN_AT_KEY, undefined);
		}
		let client: MacComputerUseRPCClient | undefined;
		if (selectedHelper !== undefined) {
			// Only a preflighted action reports here, once per blocked episode:
			// later actions are refused without a report until a grant.
			client = new MacComputerUseRPCClient(
				'remote',
				undefined,
				async (): Promise<boolean> => {
					if (vscode.cursor.glassWorkspaceRole !== 'rootWorkspace') {
						return false;
					}
					try {
						await vscode.commands.executeCommand(
							'glass.openComputerUsePermissions',
							PERMISSIONS_PROMPT_AUTOMATIC_OPEN
						);
						return true;
					} catch (error) {
						channel.appendLine(
							`[error] Failed to open Computer Use permissions: ${String(error)}`
						);
						return false;
					}
				},
				selectedHelper
			);
		}
		const unavailable = (): Error => new Error(unavailableReason);
		context.subscriptions.push(
			vscode.commands.registerCommand(
				GET_PERMISSION_STATUS_COMMAND,
				(): Promise<SidecarPermissionStatus | undefined> =>
					client === undefined
						? Promise.resolve(undefined)
						: client.getOrLaunchPermissionStatus(ctx)
			),
			vscode.commands.registerCommand(
				OPEN_PERMISSION_SETTINGS_COMMAND,
				(
					permission: PermissionKind
				): Promise<SidecarPermissionSettingsResult> =>
					client === undefined
						? Promise.reject(unavailable())
						: client.openPermissionSettings(ctx, permission)
			),
			vscode.commands.registerCommand(
				RESTART_AND_GET_PERMISSION_STATUS_COMMAND,
				(): Promise<SidecarPermissionStatus> =>
					client === undefined
						? Promise.reject(unavailable())
						: client.refreshPermissionEpisode(ctx)
			)
		);

		if (client === undefined) {
			return;
		}
		rpcClient = client;
		preflight = () => client.preflight(ctx);
		resolvedMacMode = resolveComputerUseMacMode('glass');
		channel.appendLine(
			`[info] Mac computer-use mode ${resolvedMacMode} (caller glass)`
		);
		const backendClient = new BackendClientService();
		toolset = new ComputerUseMcpToolset(client, {
			preflight,
			companionDefault: true,
			attempt: {
				decide: (input, signal) =>
					decideNextAction({ backendClient, input, signal, log: line => channel.appendLine(line) }),
				enabled: attemptListed,
			},
		});
	} else {
		// The Statsig config carries one manifest URL per architecture; the
		// installer picks this host's, validates it, and logs what it read.
		// It is handed the read rather than a value so every launch sees the
		// config as it is then, not as it was at activation.
		const installer = new WindowsSidecarInstaller({
			readManifestConfig: () =>
				vscode.cursor.getDynamicConfigValue(
					WINDOWS_COMPUTER_USE_DYNAMIC_CONFIG
				),
			allowManifestDownload: await isBuiltProduct(vscode.env.appRoot),
			hostVersion: vscode.cursorVersion,
			log: (level, message) => channel.appendLine(`[${level}] ${message}`),
		});
		channel.appendLine(
			'[info] Computer Use registered; the Windows sidecar release is read from Statsig and installed when the first tool call launches it'
		);
		toolset = new ComputerUseMcpToolset(
			new WindowsComputerUseRPCClient('remote', {
				resolveExecutable: () => installer.resolveForLaunch(),
				verifySigner: installer.verifySigner,
			}),
			// The same gate read the listing makes, at each `computer_batch`
			// call: with the gate off a batch called by name is refused as the
			// unknown tool it is on a build without the batch.
			{ batch: batchListed }
		);
	}
	activeToolset = toolset;
	activeContext = ctx;
	// Mode is the agent type. Darwin copy is the per-mode Statsig row or the
	// compiled fallback. A legacy `darwin` string is ignored.
	const statsigConfig = await readStatsigInstructionConfig(channel);
	const body =
		resolvedMacMode === undefined
			? (win32InstructionBody(statsigConfig) ?? COMPUTER_USE_FALLBACK_INSTRUCTIONS)
			: selectDarwinMcpInstructions({
				mode: resolvedMacMode,
				statsig: statsigConfig,
			});
	// Instructions are fixed at registration, unlike the listing, so the
	// attempt section follows the gate as read now; a read that is off, or not
	// hydrated yet, leaves it out.
	const instructions = composeComputerUseInstructions({
		local: COMPUTER_USE_LOCAL_INSTRUCTIONS,
		attempt: computerUseMcpTools({
			companionDefault: resolvedMacMode === 'companion',
			attempt: await attemptListed(),
		}).some(({ name }) => name === 'computer_attempt'),
		body,
	});
	channel.appendLine(
		`[info] Using ${resolvedMacMode ?? 'win32'} instructions`
	);
	const provider: McpProvider = {
		id: COMPUTER_USE_MCP_SERVER_ID,
		name: 'Computer Use',
		featureGateName: featureGate,
		instructions,
		listOfferings: async () => ({
			tools: [
				...computerUseMcpTools({
					companionDefault: resolvedMacMode === 'companion',
					batch: await batchListed(),
					attempt: await attemptListed(),
				}),
			],
			prompts: [],
		}),
		callTool: async (toolName, args, options) => {
			if (preflight !== undefined && PREFLIGHTED_TOOLS.has(toolName)) {
				await preflight();
			}
			return toolset.callTool(
				ctx.with(conversationIdKey, options?.conversationId),
				toolName,
				args
			);
		},
		// The turn is over (the tool loop finished, the user stopped it, or it
		// failed): release remote control now rather than when the sidecar's
		// client-absent grace runs out — which the keep-alive never lets it.
		// A no-op wherever the toolset does not hold the lease for the turn.
		onTurnEnded: async (turn: McpProviderTurnEnd) => {
			try {
				await toolset.onTurnEnded(ctx, turn.conversationId);
			} catch (error) {
				channel.appendLine(
					`[warn] Failed to release remote control at the end of a turn: ${String(error)}`
				);
			}
		},
	};
	context.subscriptions.push(vscode.cursor.registerMcpProvider(provider));
}

/**
 * Tearing the sidecar down here is not just tidiness on Windows: it owns the
 * one instance of `\\.\pipe\cursor-cua-<SID>`, so a sidecar left running
 * across a window reload makes the next launch abort as though a squatter
 * held the name. A hard extension-host crash bypasses this and falls back to
 * the sidecar's idle timer, which is why that timer exists.
 */
export async function deactivate(): Promise<void> {
	helperResolutionAbortController?.abort();
	helperResolutionAbortController = undefined;
	const client = rpcClient;
	const toolset = activeToolset;
	const ctx = activeContext;
	rpcClient = undefined;
	activeToolset = undefined;
	activeContext = undefined;
	if (client !== undefined && ctx !== undefined) {
		await client.shutdown(ctx);
	}
	if (toolset !== undefined && ctx !== undefined) {
		try {
			await toolset.dispose(ctx);
		} catch {
			// Teardown must not block the extension host from unloading.
		}
	}
}
