import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

interface MockMcpProvider {
	id: string;
	name?: string;
	featureGateName?: string;
	instructions?: string;
	listOfferings: () => Promise<{ tools: unknown[]; prompts: unknown[] }>;
	callTool: (
		toolName: string,
		args: Record<string, unknown>,
		options?: { conversationId?: string }
	) => unknown;
}

// The toolset is specialized for the host platform when its module loads;
// activation on macOS must see the macOS toolset regardless of the test host.
vi.hoisted(() => {
	Object.defineProperty(process, "platform", { value: "darwin" });
});

const mocks = vi.hoisted(() => {
	class MockDisposable {
		constructor(private readonly fn: () => void = () => { }) { }
		dispose(): void {
			this.fn();
		}
	}
	const registerMcpProvider = vi.fn(
		(_provider: MockMcpProvider) => new MockDisposable()
	);
	const checkFeatureGate = vi.fn<(gate: string) => Promise<boolean>>();
	/** Every line the extension wrote to its output channel, in order. */
	const channelLines: string[] = [];
	type GateChange = {
		changedGates?: string[];
		changedExperiments?: string[];
		changedConfigs?: string[];
	};
	/** Live `vscode.cursor.onDidChangeGates` listeners; the experiment service stand-in fires them. */
	const gateListeners = new Set<(event: GateChange) => unknown>();
	const onDidChangeGates = vi.fn((listener: (event: GateChange) => unknown) => {
		gateListeners.add(listener);
		return new MockDisposable(() => gateListeners.delete(listener));
	});
	const getDynamicConfigValue = vi.fn<
		(configName: string) => Promise<Record<string, unknown> | undefined>
	>();
	const readProductJson = vi.fn<() => Promise<string>>();
	const resolveMacHelperAppForLaunch = vi.fn<
		() => Promise<
			{ appPath: string; source: "download-cache" } | undefined
		>
	>(() =>
		Promise.resolve({
			appPath: "/cache/Cursor Computer Use.app",
			source: "download-cache" as const,
		})
	);
	const shutdown = vi.fn<() => Promise<void>>();
	const executeCommand = vi.fn<(...args: unknown[]) => Promise<unknown>>();
	const registeredCommands = new Map<
		string,
		(...args: unknown[]) => unknown
	>();
	const registerCommand = vi.fn(
		(command: string, callback: (...args: unknown[]) => unknown) => {
			registeredCommands.set(command, callback);
			return new MockDisposable(() => registeredCommands.delete(command));
		}
	);
	const permissionStatus = {
		accessibilityTrusted: false,
		screenRecordingGranted: false,
	};
	const glass: {
		workspaceRole: "rootWorkspace" | "agentWorkspace" | undefined;
	} = { workspaceRole: "rootWorkspace" };
	const clientCalls: Array<{
		method: string;
		permission?: string;
		conversationId?: string;
	}> = [];
	/** The Windows installer's `prepare`. Activation must not call it. */
	const prepareWindows = vi.fn<
		() => Promise<
			| { ok: true; resolved: { executablePath: string; source: string } }
			| { ok: false; failure: { code: string; message: string; retryable: boolean } }
		>
	>();
	/** The Windows installer's launch-time resolution, which the transport calls. */
	const resolveForLaunchWindows = vi.fn<
		() => Promise<{ executablePath: string; source: string }>
	>();
	/** Options every Windows installer was constructed with. */
	const windowsInstallerOptions: Array<Record<string, unknown>> = [];
	/** Options every Windows backend was constructed with. */
	const windowsBackendOptions: Array<Record<string, unknown> | undefined> = [];
	/** Records that the backend's own teardown was reached from `deactivate`. */
	const disposeBackend = vi.fn<() => Promise<void>>();
	/** Which backend class the extension constructed, in order. */
	const constructedBackends: string[] = [];
	/** Options every toolset was constructed with, in order. */
	const toolsetOptions: Array<Record<string, unknown> | undefined> = [];
	/** `ExtensionContext.globalState`, shared by every activation like the real one. */
	const globalState = new Map<string, unknown>();
	/** When set, a preflight reports the missing permissions and refuses, like the client's blocked episode. */
	const preflight: { blocked: boolean; prompted?: unknown } = { blocked: false };
	return {
		MockDisposable,
		globalState,
		preflight,
		toolsetOptions,
		checkFeatureGate,
		channelLines,
		gateListeners,
		onDidChangeGates,
		getDynamicConfigValue,
		readProductJson,
		resolveMacHelperAppForLaunch,
		registerMcpProvider,
		shutdown,
		executeCommand,
		registeredCommands,
		registerCommand,
		permissionStatus,
		glass,
		clientCalls,
		prepareWindows,
		resolveForLaunchWindows,
		windowsInstallerOptions,
		windowsBackendOptions,
		disposeBackend,
		constructedBackends,
	};
});

vi.mock("vscode", () => ({
	cursorVersion: "3.21.0-pre.4",
	env: {
		appRoot: "/test/app",
	},
	window: {
		createOutputChannel: vi.fn(() => ({
			appendLine: (line: string) => {
				mocks.channelLines.push(line);
			},
			dispose: vi.fn(),
		})),
	},
	commands: {
		executeCommand: mocks.executeCommand,
		registerCommand: mocks.registerCommand,
	},
	cursor: {
		get glassWorkspaceRole() {
			return mocks.glass.workspaceRole;
		},
		checkFeatureGate: mocks.checkFeatureGate,
		onDidChangeGates: mocks.onDidChangeGates,
		getDynamicConfigValue: mocks.getDynamicConfigValue,
		registerMcpProvider: mocks.registerMcpProvider,
	},
}));

vi.mock("node:fs/promises", () => ({
	readFile: mocks.readProductJson,
}));

vi.mock("./backends/mac/sidecar-download", () => ({
	resolveMacHelperAppForLaunch: mocks.resolveMacHelperAppForLaunch,
}));

vi.mock("./backends/mac/sidecar-client", () => ({
	MacComputerUseRPCClient: class {
		shutdown = mocks.shutdown;
		constructor(
			_mode: string,
			_launch: unknown,
			private readonly onPermissionsBlocked?: (
				status: typeof mocks.permissionStatus
			) => void | Promise<void>,
			_selectedHelper?: unknown
		) {
			mocks.constructedBackends.push("mac");
		}
		async checkPermissions() {
			mocks.clientCalls.push({ method: "check" });
			return { message: "missing", isError: false };
		}
		async preflight() {
			mocks.clientCalls.push({ method: "preflight" });
			if (mocks.preflight.blocked) {
				mocks.preflight.prompted = await this.onPermissionsBlocked?.({ ...mocks.permissionStatus });
				throw new Error("Computer Use requires Accessibility and Screen Recording.");
			}
		}
		screenshot() {
			mocks.clientCalls.push({ method: "dispatch" });
			return Promise.resolve({ message: "ok", isError: false });
		}
		click() {
			return this.screenshot();
		}
		move() {
			return this.screenshot();
		}
		drag() {
			return this.screenshot();
		}
		typeText() {
			return this.screenshot();
		}
		pressKey() {
			return this.screenshot();
		}
		scroll() {
			return this.screenshot();
		}
		callCompanion(ctx: Context) {
			mocks.clientCalls.push({
				method: "companion",
				conversationId: ctx.get(conversationIdKey),
			});
			return Promise.resolve({ message: "ok", isError: false });
		}
		getOrLaunchPermissionStatus() {
			mocks.clientCalls.push({ method: "get" });
			return Promise.resolve({ ...mocks.permissionStatus });
		}
		openPermissionSettings(_ctx: unknown, permission: string) {
			mocks.clientCalls.push({ method: "open", permission });
			return Promise.resolve({ permission, opened: true });
		}
		refreshPermissionEpisode() {
			mocks.clientCalls.push({ method: "restart" });
			return Promise.resolve({ ...mocks.permissionStatus });
		}
	},
}));

vi.mock("./backends/windows/sidecar-client", () => ({
	WindowsComputerUseRPCClient: class {
		constructor(_mode: string, options?: Record<string, unknown>) {
			mocks.constructedBackends.push("windows");
			mocks.windowsBackendOptions.push(options);
		}
		dispose = mocks.disposeBackend;
	},
}));

// The real toolset, with what the extension constructs it with recorded.
vi.mock("./mcp/tools", async importOriginal => {
	const actual = await importOriginal<typeof import("./mcp/tools")>();
	return {
		...actual,
		ComputerUseMcpToolset: class extends actual.ComputerUseMcpToolset {
			constructor(
				sidecar: ConstructorParameters<typeof actual.ComputerUseMcpToolset>[0],
				options?: ConstructorParameters<typeof actual.ComputerUseMcpToolset>[1]
			) {
				super(sidecar, options);
				mocks.toolsetOptions.push(options as Record<string, unknown> | undefined);
			}
		},
	};
});

vi.mock("./backends/windows/sidecar-download", async importOriginal => {
	const actual = await importOriginal<
		typeof import("./backends/windows/sidecar-download")
	>();
	return {
		...actual,
		WindowsSidecarInstaller: class {
			constructor(options: Record<string, unknown>) {
				mocks.windowsInstallerOptions.push(options);
			}
			prepare = mocks.prepareWindows;
			resolveForLaunch = mocks.resolveForLaunchWindows;
			verifySigner = vi.fn();
		},
	};
});

import { type Context, createContext } from "@anysphere/context";
import * as vscode from "vscode";
import { conversationIdKey } from "./backends/types";
import {
	COMPUTER_ATTEMPT_INSTRUCTIONS,
	COMPUTER_USE_FALLBACK_INSTRUCTIONS,
	COMPUTER_USE_LOCAL_INSTRUCTIONS,
} from "./mcp/tools";

const LOCAL_PLUS_FALLBACK = `${COMPUTER_USE_LOCAL_INSTRUCTIONS}\n\n${COMPUTER_USE_FALLBACK_INSTRUCTIONS}`;
const gateReads = (gate: string): number =>
	mocks.checkFeatureGate.mock.calls.filter(([name]) => name === gate).length;
import {
	OutputChannelLoggerBackend,
	activate,
	deactivate,
	withTimestamps,
} from "./extension";
import { computerUseMcpTools } from "./mcp/tools";

function makeContext(): {
	subscriptions: { dispose: () => void }[];
	globalState: {
		get: (key: string) => unknown;
		update: (key: string, value: unknown) => Promise<void>;
	};
} {
	return {
		subscriptions: [],
		globalState: {
			get: key => mocks.globalState.get(key),
			update: (key, value) => {
				if (value === undefined) {
					mocks.globalState.delete(key);
				} else {
					mocks.globalState.set(key, value);
				}
				return Promise.resolve();
			},
		},
	};
}

/**
 * The experiment service reporting a change to every live listener, as the
 * extension host relays it: an empty event after a full Statsig refresh, or
 * the changed gates by name. Resolves once the listeners have run.
 */
async function reportGateChange(
	event: { changedGates?: string[] } = {}
): Promise<void> {
	await Promise.all([...mocks.gateListeners].map(listener => listener(event)));
}

function mockDynamicConfigs(values: Record<string, Record<string, unknown>>): void {
	mocks.getDynamicConfigValue.mockImplementation(configName =>
		Promise.resolve(values[configName])
	);
}

const realPlatform = process.platform;

function setPlatform(platform: string): void {
	Object.defineProperty(process, "platform", { value: platform });
}

async function expectUnavailablePermissionCommands(
	message = "not available"
): Promise<void> {
	expect(mocks.registeredCommands.size).toBe(3);
	await expect(
		mocks.registeredCommands.get(
			"cursor.computerUse.getPermissionStatus"
		)?.()
	).resolves.toBeUndefined();
	await expect(
		mocks.registeredCommands.get(
			"cursor.computerUse.openPermissionSettings"
		)?.("screenRecording")
	).rejects.toThrow(message);
	await expect(
		mocks.registeredCommands.get(
			"cursor.computerUse.restartAndGetPermissionStatus"
		)?.()
	).rejects.toThrow(message);
	expect(mocks.constructedBackends).toEqual([]);
	expect(mocks.clientCalls).toEqual([]);
}

describe("activate", () => {
	/** What the extension wrote to the extension host's log (`console`). */
	let hostLog: string[] = [];
	const consoleSpies: Array<{ mockRestore(): void }> = [];

	beforeEach(() => {
		setPlatform("darwin");
		mocks.checkFeatureGate.mockReset();
		mocks.checkFeatureGate.mockImplementation(gate => Promise.resolve(gate !== "computer_use_next_action"));
		mocks.channelLines.length = 0;
		vi.mocked(vscode.window.createOutputChannel).mockClear();
		hostLog = [];
		for (const level of ["info", "error"] as const) {
			consoleSpies.push(
				vi.spyOn(console, level).mockImplementation((...args: unknown[]) => {
					hostLog.push(`${level}: ${args.map(String).join(" ")}`);
				})
			);
		}
		mocks.gateListeners.clear();
		mocks.onDidChangeGates.mockClear();
		mocks.getDynamicConfigValue.mockReset();
		mockDynamicConfigs({
			mac_computer_use_sidecar_manifest: { sidecarManifestUrl: "" },
			windows_computer_use_sidecar_manifest: { x64: "", arm64: "" },
			computer_use_mcp_instructions: { darwin: "", win32: "" },
		});
		mocks.readProductJson.mockReset();
		mocks.readProductJson.mockResolvedValue(
			JSON.stringify({ commit: "a".repeat(40) })
		);
		mocks.resolveMacHelperAppForLaunch.mockReset();
		mocks.resolveMacHelperAppForLaunch.mockResolvedValue({
			appPath: "/cache/Cursor Computer Use.app",
			source: "download-cache",
		});
		mocks.registerMcpProvider.mockClear();
		mocks.executeCommand.mockReset();
		mocks.executeCommand.mockResolvedValue(undefined);
		mocks.registerCommand.mockClear();
		mocks.registeredCommands.clear();
		mocks.permissionStatus.accessibilityTrusted = false;
		mocks.permissionStatus.screenRecordingGranted = false;
		mocks.glass.workspaceRole = "rootWorkspace";
		mocks.clientCalls.length = 0;
		mocks.shutdown.mockReset();
		mocks.shutdown.mockResolvedValue(undefined);
		mocks.prepareWindows.mockReset();
		mocks.prepareWindows.mockResolvedValue({
			ok: true,
			resolved: {
				executablePath: "C:\\Users\\jdoe\\.cursor\\computer-use-sidecar\\cursor-cua-sidecar.exe",
				source: "download-cache",
			},
		});
		mocks.resolveForLaunchWindows.mockReset();
		mocks.resolveForLaunchWindows.mockResolvedValue({
			executablePath: "C:\\Users\\jdoe\\.cursor\\computer-use-sidecar\\cursor-cua-sidecar.exe",
			source: "download-cache",
		});
		mocks.windowsInstallerOptions.length = 0;
		mocks.windowsBackendOptions.length = 0;
		mocks.constructedBackends.length = 0;
		mocks.toolsetOptions.length = 0;
		mocks.globalState.clear();
		mocks.preflight.blocked = false;
		mocks.preflight.prompted = undefined;
		mocks.disposeBackend.mockReset();
		mocks.disposeBackend.mockResolvedValue(undefined);
	});

	afterEach(async () => {
		await deactivate();
		setPlatform(realPlatform);
		for (const spy of consoleSpies.splice(0)) {
			spy.mockRestore();
		}
	});

	it("registers all intended surfaces when the production gate is on", async () => {
		await activate(makeContext() as never);

		expect(gateReads("mac_computer_use")).toBe(1);
		expect(mocks.registerMcpProvider).toHaveBeenCalledTimes(1);
		expect(mocks.constructedBackends).toEqual(["mac"]);
		const provider = mocks.registerMcpProvider.mock.calls[0][0];
		expect(provider.id).toBe("cursor-computer-use");
		expect(provider.name).toBe("Computer Use");
		expect(provider.featureGateName).toBe("mac_computer_use");
		expect(provider.instructions).toBe(LOCAL_PLUS_FALLBACK);
		const offerings = await provider.listOfferings();
		expect(offerings.tools).toEqual([...computerUseMcpTools()]);
	});

	it("adds the attempt section after the local text only when computer_attempt is listed", async () => {
		mocks.checkFeatureGate.mockResolvedValue(true);
		await activate(makeContext() as never);
		const provider = mocks.registerMcpProvider.mock.calls[0][0];
		expect(provider.instructions).toBe(
			`${COMPUTER_USE_LOCAL_INSTRUCTIONS}\n\n${COMPUTER_ATTEMPT_INSTRUCTIONS}\n\n${COMPUTER_USE_FALLBACK_INSTRUCTIONS}`
		);
		expect((await provider.listOfferings()).tools).toEqual([...computerUseMcpTools({ attempt: true })]);
	});

	it("keeps the attempt section when the Statsig companion row replaces the body", async () => {
		mocks.checkFeatureGate.mockResolvedValue(true);
		const companion = "Prefer set_value on marked fields.";
		mockDynamicConfigs({
			mac_computer_use_sidecar_manifest: { sidecarManifestUrl: "" },
			computer_use_mcp_instructions: {
				darwin: { companion, remote: "Worker screen-scope copy." },
				win32: "",
			},
		});

		await activate(makeContext() as never);

		expect(mocks.registerMcpProvider.mock.calls[0][0].instructions).toBe(
			`${COMPUTER_USE_LOCAL_INSTRUCTIONS}\n\n${COMPUTER_ATTEMPT_INSTRUCTIONS}\n\n${companion}`
		);
	});

	it("uses the companion Statsig row after the local text", async () => {
		const companion = "Prefer set_value on marked fields.";
		mockDynamicConfigs({
			mac_computer_use_sidecar_manifest: { sidecarManifestUrl: "" },
			computer_use_mcp_instructions: {
				darwin: { companion, remote: "Worker screen-scope copy." },
				win32: "",
			},
		});

		await activate(makeContext() as never);

		expect(mocks.getDynamicConfigValue).toHaveBeenCalledWith(
			"computer_use_mcp_instructions"
		);
		expect(mocks.registerMcpProvider.mock.calls[0][0].instructions).toBe(
			`${COMPUTER_USE_LOCAL_INSTRUCTIONS}\n\n${companion}`
		);
	});

	it("ignores a legacy single darwin instruction blob", async () => {
		mockDynamicConfigs({
			mac_computer_use_sidecar_manifest: { sidecarManifestUrl: "" },
			computer_use_mcp_instructions: {
				darwin: "Use screen scope only.",
				win32: "",
			},
		});

		await activate(makeContext() as never);

		expect(mocks.registerMcpProvider.mock.calls[0][0].instructions).toBe(
			LOCAL_PLUS_FALLBACK
		);
	});

	it.each([
		{ name: "the config is absent", platform: "darwin", value: undefined },
		{ name: "the platform's value is empty", platform: "darwin", value: { darwin: "", win32: "" } },
		{ name: "the platform's value is not a string", platform: "darwin", value: { darwin: ["no"], win32: "" } },
		{ name: "only another platform has a value", platform: "win32", value: { darwin: "macOS only", win32: "" } },
	])("uses the fallback body when $name", async ({ platform, value }) => {
		setPlatform(platform);
		mockDynamicConfigs({
			mac_computer_use_sidecar_manifest: { sidecarManifestUrl: "" },
			...(value === undefined ? {} : { computer_use_mcp_instructions: value }),
		});

		await activate(makeContext() as never);

		expect(mocks.registerMcpProvider.mock.calls[0][0].instructions).toBe(
			LOCAL_PLUS_FALLBACK
		);
	});

	it("uses the fallback body when the config read fails", async () => {
		mocks.getDynamicConfigValue.mockImplementation(configName =>
			configName === "computer_use_mcp_instructions"
				? Promise.reject(new Error("statsig down"))
				: Promise.resolve({ sidecarManifestUrl: "" })
		);

		await activate(makeContext() as never);

		expect(mocks.registerMcpProvider.mock.calls[0][0].instructions).toBe(
			LOCAL_PLUS_FALLBACK
		);
	});

	// A window whose gate is off gets no output channel — that would put a
	// "Cursor Computer Use" channel in every install without the feature — so
	// the one line that says why is in the extension host's log instead.
	it("leaks no tools and no channel when the production gate is off, and says so in the host log", async () => {
		mocks.checkFeatureGate.mockResolvedValue(false);
		const context = makeContext();

		await activate(context as never);

		expect(mocks.checkFeatureGate).toHaveBeenCalledWith("mac_computer_use");
		expect(mocks.registerMcpProvider).not.toHaveBeenCalled();
		expect(mocks.registeredCommands.size).toBe(0);
		expect(mocks.constructedBackends).toEqual([]);
		expect(mocks.resolveMacHelperAppForLaunch).not.toHaveBeenCalled();
		expect(vi.mocked(vscode.window.createOutputChannel)).not.toHaveBeenCalled();
		expect(mocks.channelLines).toEqual([]);
		// Only the gate listener (and its fence) is held, nothing behind the gate.
		expect(context.subscriptions).toHaveLength(2);
		expect(mocks.gateListeners.size).toBe(1);
		expect(hostLog).toEqual([
			"info: [cursor-computer-use] mac_computer_use gate off at activation (the gate's default, or Statsig not hydrated yet); Computer Use registers if a later Statsig refresh turns it on",
		]);
	});

	it("logs the gate on at activation as the channel's first line", async () => {
		await activate(makeContext() as never);

		// Every channel line carries the ISO time it was written (`withTimestamps`).
		expect(mocks.channelLines[0]).toMatch(
			/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z \[info\] mac_computer_use gate on at activation$/
		);
		expect(hostLog).toEqual([]);
		// Nothing to wait for once the gate is on.
		expect(mocks.gateListeners.size).toBe(0);
	});

	// The gate defaults to off and the activation-time read races Statsig's
	// startup hydration, so "off" that early may be the default or the
	// previous session's persisted value. The experiment service reports a
	// full refresh as an empty diff; the extension re-checks then and
	// registers on the first report that says on — once, with no polling.
	describe("gate that turns on after activation", () => {
		it("registers the macOS surface once the experiment service reports the gate on", async () => {
			mocks.checkFeatureGate.mockResolvedValue(false);
			await activate(makeContext() as never);
			expect(mocks.registerMcpProvider).not.toHaveBeenCalled();

			mocks.checkFeatureGate.mockResolvedValue(true);
			await reportGateChange({});

			expect(gateReads("mac_computer_use")).toBe(2);
			expect(mocks.registerMcpProvider).toHaveBeenCalledTimes(1);
			expect(mocks.constructedBackends).toEqual(["mac"]);
			expect(mocks.registeredCommands.size).toBe(3);
			expect(mocks.registerMcpProvider.mock.calls[0][0].featureGateName).toBe("mac_computer_use");
			// The host log has the whole story; the channel, created only now,
			// opens with how the gate resolved.
			expect(hostLog).toEqual([
				expect.stringContaining("mac_computer_use gate off at activation"),
				expect.stringMatching(
					/^info: \[cursor-computer-use\] mac_computer_use gate on after a Statsig refresh, \d+\.\d s after activation; registering Computer Use now$/
				),
			]);
			expect(vi.mocked(vscode.window.createOutputChannel)).toHaveBeenCalledTimes(1);
			expect(mocks.channelLines[0]).toMatch(
				/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z \[info\] mac_computer_use gate on after a Statsig refresh, \d+\.\d s after activation$/
			);
			// The listener is gone: a later report cannot register a second time.
			expect(mocks.gateListeners.size).toBe(0);
			await reportGateChange({});
			expect(mocks.registerMcpProvider).toHaveBeenCalledTimes(1);
		});

		// Late registration is the same lazy registration as the on-time one
		// above: the installer is constructed with a live read of the release
		// config, and nothing is prepared or read until a tool call launches
		// the sidecar.
		it("registers the Windows backend once the gate turns on late", async () => {
			setPlatform("win32");
			mocks.checkFeatureGate.mockResolvedValue(false);
			await activate(makeContext() as never);
			expect(mocks.windowsInstallerOptions).toHaveLength(0);

			mocks.checkFeatureGate.mockResolvedValue(true);
			await reportGateChange({ changedGates: ["local_computer_use"] });

			expect(mocks.checkFeatureGate).toHaveBeenCalledWith("local_computer_use");
			expect(mocks.windowsInstallerOptions).toHaveLength(1);
			expect(mocks.windowsInstallerOptions[0]).toMatchObject({
				readManifestConfig: expect.any(Function),
			});
			expect(mocks.prepareWindows).not.toHaveBeenCalled();
			expect(mocks.getDynamicConfigValue).not.toHaveBeenCalledWith(
				"windows_computer_use_sidecar_manifest"
			);
			expect(mocks.constructedBackends).toEqual(["windows"]);
			expect(mocks.registerMcpProvider).toHaveBeenCalledTimes(1);
			expect(mocks.windowsBackendOptions[0]).toMatchObject({
				resolveExecutable: expect.any(Function),
				verifySigner: expect.any(Function),
			});
			expect(mocks.channelLines[0]).toContain(
				"local_computer_use gate on after a Statsig gate change"
			);
		});

		it("re-checks only reports that could carry this gate, and keeps listening while it stays off", async () => {
			mocks.checkFeatureGate.mockResolvedValue(false);
			await activate(makeContext() as never);

			// Another gate changed: nothing to re-check.
			await reportGateChange({ changedGates: ["some_other_gate"] });
			expect(mocks.checkFeatureGate).toHaveBeenCalledTimes(1);

			// A full refresh that still says off is re-checked quietly (they
			// recur for the window's life), and the wait goes on.
			await reportGateChange({});
			expect(mocks.checkFeatureGate).toHaveBeenCalledTimes(2);
			expect(mocks.registerMcpProvider).not.toHaveBeenCalled();
			expect(hostLog).toHaveLength(1);
			expect(mocks.gateListeners.size).toBe(1);

			// A change that named this gate and still reads off gets a line.
			await reportGateChange({ changedGates: ["mac_computer_use"] });
			expect(mocks.checkFeatureGate).toHaveBeenCalledTimes(3);
			expect(hostLog.at(-1)).toBe(
				"info: [cursor-computer-use] mac_computer_use gate still off after a Statsig gate change"
			);
			expect(mocks.channelLines).toEqual([]);

			mocks.checkFeatureGate.mockResolvedValue(true);
			await reportGateChange({ changedGates: ["mac_computer_use"] });
			expect(mocks.registerMcpProvider).toHaveBeenCalledTimes(1);
		});

		it("does not register after the extension has been disposed", async () => {
			mocks.checkFeatureGate.mockResolvedValue(false);
			const context = makeContext();
			await activate(context as never);

			for (const subscription of context.subscriptions) {
				subscription.dispose();
			}
			mocks.checkFeatureGate.mockResolvedValue(true);
			await reportGateChange({});

			expect(mocks.gateListeners.size).toBe(0);
			expect(mocks.registerMcpProvider).not.toHaveBeenCalled();
			expect(mocks.constructedBackends).toEqual([]);
		});

		it("registers once when two reports race", async () => {
			mocks.checkFeatureGate.mockResolvedValue(false);
			await activate(makeContext() as never);

			// Both reports read the gate before either has registered.
			mocks.checkFeatureGate.mockResolvedValue(true);
			await Promise.all([reportGateChange({}), reportGateChange({})]);

			expect(mocks.registerMcpProvider).toHaveBeenCalledTimes(1);
			expect(mocks.constructedBackends).toEqual(["mac"]);
		});
	});

	// The macOS flow resolves its helper at activation. On Windows nothing is
	// resolved there: an activation-time read of the release config races
	// Statsig's startup hydration, and whatever it returned that early — the
	// fallback, or the previous session's persisted value — stuck for the
	// session (a real box kept its previous release from the download cache
	// until the next restart). The installer reads the config when a tool
	// call launches the sidecar.
	it("registers the Windows backend on win32 without reading the release config or preparing the sidecar", async () => {
		setPlatform("win32");

		await activate(makeContext() as never);

		expect(mocks.checkFeatureGate).toHaveBeenCalledWith("local_computer_use");
		expect(mocks.prepareWindows).not.toHaveBeenCalled();
		expect(mocks.getDynamicConfigValue).not.toHaveBeenCalledWith(
			"windows_computer_use_sidecar_manifest"
		);
		expect(mocks.constructedBackends).toEqual(["windows"]);
		expect(mocks.registerMcpProvider).toHaveBeenCalledTimes(1);
		expect(mocks.registerMcpProvider.mock.calls[0][0].featureGateName).toBe(
			"local_computer_use"
		);
		// The transport launches what the installer resolves, and re-checks the
		// signer through the installer's memoized verifier.
		expect(mocks.windowsBackendOptions[0]).toMatchObject({
			resolveExecutable: expect.any(Function),
			verifySigner: expect.any(Function),
		});
	});

	// The batch descriptor ships dark: each listing on win32 asks the batch
	// gate then, so a gate that turns on after activation lists the tool at
	// the next listing, and a read that fails lists the toolset without it.
	// macOS never asks — the batch does not exist there.
	it("reads the Windows batch gate at each listing, never at activation and never on macOS", async () => {
		setPlatform("win32");
		mocks.checkFeatureGate.mockImplementation(gate =>
			Promise.resolve(gate === "local_computer_use")
		);

		await activate(makeContext() as never);

		expect(mocks.checkFeatureGate).not.toHaveBeenCalledWith("windows_computer_use_batch");
		const provider = mocks.registerMcpProvider.mock.calls[0][0];
		const off = await provider.listOfferings();
		expect(mocks.checkFeatureGate).toHaveBeenCalledWith("windows_computer_use_batch");
		expect(off.tools).toEqual([...computerUseMcpTools({ companionDefault: false, batch: false })]);

		mocks.checkFeatureGate.mockResolvedValue(true);
		const on = await provider.listOfferings();
		expect(on.tools).toEqual([...computerUseMcpTools({ companionDefault: false, batch: true })]);

		mocks.checkFeatureGate.mockImplementation(gate =>
			gate === "windows_computer_use_batch"
				? Promise.reject(new Error("statsig unavailable"))
				: Promise.resolve(true)
		);
		const failed = await provider.listOfferings();
		expect(failed.tools).toEqual([...computerUseMcpTools({ companionDefault: false, batch: false })]);
	});

	it("never reads the Windows batch gate on macOS", async () => {
		await activate(makeContext() as never);

		const provider = mocks.registerMcpProvider.mock.calls[0][0];
		mocks.checkFeatureGate.mockClear();
		await provider.listOfferings();
		expect(mocks.checkFeatureGate).not.toHaveBeenCalledWith("windows_computer_use_batch");
	});

	// `computer_attempt` ships dark like the batch: each macOS listing asks
	// its gate, registration asks once for the instructions, and Windows
	// never asks.
	it("reads the attempt gate at registration and at each macOS listing", async () => {
		mocks.checkFeatureGate.mockImplementation(gate =>
			Promise.resolve(gate === "mac_computer_use")
		);

		await activate(makeContext() as never);

		expect(gateReads("computer_use_next_action")).toBe(1);
		const provider = mocks.registerMcpProvider.mock.calls[0][0];
		const off = await provider.listOfferings();
		expect(gateReads("computer_use_next_action")).toBe(2);
		expect(off.tools).toEqual([...computerUseMcpTools()]);

		mocks.checkFeatureGate.mockResolvedValue(true);
		const on = await provider.listOfferings();
		expect(on.tools).toEqual([...computerUseMcpTools({ attempt: true })]);

		mocks.checkFeatureGate.mockImplementation(gate =>
			gate === "computer_use_next_action"
				? Promise.reject(new Error("statsig unavailable"))
				: Promise.resolve(true)
		);
		const failed = await provider.listOfferings();
		expect(failed.tools).toEqual([...computerUseMcpTools()]);
	});

	it("hands the macOS toolset the attempt gate read and a decider, for each call", async () => {
		mocks.checkFeatureGate.mockImplementation(gate =>
			Promise.resolve(gate === "mac_computer_use")
		);

		await activate(makeContext() as never);

		const attempt = mocks.toolsetOptions[0]?.attempt as
			| { decide: unknown; enabled: () => Promise<boolean> }
			| undefined;
		expect(attempt?.decide).toBeTypeOf("function");
		await expect(attempt?.enabled()).resolves.toBe(false);
		mocks.checkFeatureGate.mockResolvedValue(true);
		await expect(attempt?.enabled()).resolves.toBe(true);
	});

	it("never reads the attempt gate on Windows", async () => {
		setPlatform("win32");
		mocks.checkFeatureGate.mockResolvedValue(true);

		await activate(makeContext() as never);

		const provider = mocks.registerMcpProvider.mock.calls[0][0];
		const offerings = await provider.listOfferings();
		expect(mocks.checkFeatureGate).not.toHaveBeenCalledWith("computer_use_next_action");
		expect(offerings.tools).toEqual([...computerUseMcpTools({ companionDefault: false, batch: true })]);
		expect(provider.instructions).toBe(LOCAL_PLUS_FALLBACK);
		expect(mocks.toolsetOptions[0]?.attempt).toBeUndefined();
	});

	// The toolset is handed the same gate read the listing makes, so a
	// `computer_batch` call runs when and only when the descriptor is listed:
	// a listing that turned the gate off, or one that could not read it,
	// leaves the call the unknown tool it is on a build without the batch.
	it("hands the Windows toolset the listing's batch gate read, for each call", async () => {
		setPlatform("win32");
		mocks.checkFeatureGate.mockImplementation(gate =>
			Promise.resolve(gate === "local_computer_use")
		);

		await activate(makeContext() as never);

		expect(mocks.toolsetOptions).toHaveLength(1);
		const batch = mocks.toolsetOptions[0]?.batch;
		expect(batch).toBeTypeOf("function");
		const read = batch as () => Promise<boolean>;
		// Constructing the toolset did not read the gate; each call does.
		expect(mocks.checkFeatureGate).not.toHaveBeenCalledWith("windows_computer_use_batch");
		await expect(read()).resolves.toBe(false);
		expect(mocks.checkFeatureGate).toHaveBeenCalledWith("windows_computer_use_batch");

		mocks.checkFeatureGate.mockResolvedValue(true);
		await expect(read()).resolves.toBe(true);

		mocks.checkFeatureGate.mockImplementation(gate =>
			gate === "windows_computer_use_batch"
				? Promise.reject(new Error("statsig unavailable"))
				: Promise.resolve(true)
		);
		await expect(read()).resolves.toBe(false);
	});

	it("constructs the macOS toolset without a batch gate", async () => {
		await activate(makeContext() as never);

		expect(mocks.toolsetOptions).toHaveLength(1);
		expect(mocks.toolsetOptions[0]).not.toHaveProperty("batch");
	});

	it("hands the installer a live read of the release config, the host version, and the product check", async () => {
		setPlatform("win32");
		const url =
			"https://downloads.cursor.com/computer-use-sidecar/releases/explicit/3.21.0-pre.4/" +
			"a".repeat(40) +
			"-win32-x64.json";
		mockDynamicConfigs({
			windows_computer_use_sidecar_manifest: { x64: url, arm64: "" },
		});

		await activate(makeContext() as never);

		expect(mocks.windowsInstallerOptions[0]).toMatchObject({
			readManifestConfig: expect.any(Function),
			allowManifestDownload: true,
			hostVersion: "3.21.0-pre.4",
		});
		const readManifestConfig = mocks.windowsInstallerOptions[0]
			.readManifestConfig as () => Promise<unknown>;
		// Each read goes to Statsig then, not to a value captured at activation,
		// so a launch after Statsig has loaded sees what it serves now.
		await expect(readManifestConfig()).resolves.toEqual({ x64: url, arm64: "" });
		expect(mocks.getDynamicConfigValue).toHaveBeenCalledWith(
			"windows_computer_use_sidecar_manifest"
		);
		mockDynamicConfigs({
			windows_computer_use_sidecar_manifest: { x64: "", arm64: "" },
		});
		await expect(readManifestConfig()).resolves.toEqual({ x64: "", arm64: "" });
	});

	// A read that fails must reach the installer as a rejection, which it
	// treats as "unreadable" (keep a verified cache) rather than as a pull.
	it("lets a failed release config read reach the installer as a rejection", async () => {
		setPlatform("win32");
		mocks.getDynamicConfigValue.mockImplementation(configName =>
			configName === "windows_computer_use_sidecar_manifest"
				? Promise.reject(new Error("statsig unavailable"))
				: Promise.resolve(undefined)
		);

		await activate(makeContext() as never);

		expect(mocks.registerMcpProvider).toHaveBeenCalledTimes(1);
		const readManifestConfig = mocks.windowsInstallerOptions[0]
			.readManifestConfig as () => Promise<unknown>;
		await expect(readManifestConfig()).rejects.toThrow("statsig unavailable");
	});

	it("ignores the Windows release manifest in unbuilt Cursor Dev", async () => {
		setPlatform("win32");
		mocks.readProductJson.mockResolvedValue("{}");

		await activate(makeContext() as never);

		expect(mocks.windowsInstallerOptions[0]).toMatchObject({
			allowManifestDownload: false,
		});
	});

	// Every install outcome, including one that cannot be retried, is now a
	// launch-time result: the transport asks the installer on each launch,
	// and a refusal reaches the model as a coded error and the channel as a
	// log line, so nothing about registration depends on the config read.
	it("routes the transport's executable resolution through the installer's launch-time path", async () => {
		setPlatform("win32");
		const resolved = {
			executablePath: "C:\\Users\\jdoe\\.cursor\\computer-use-sidecar\\cursor-cua-sidecar.exe",
			source: "download-cache",
		};
		mocks.resolveForLaunchWindows.mockResolvedValue(resolved);

		await activate(makeContext() as never);

		const resolveExecutable = mocks.windowsBackendOptions[0]
			?.resolveExecutable as () => Promise<unknown>;
		await expect(resolveExecutable()).resolves.toEqual(resolved);
		expect(mocks.resolveForLaunchWindows).toHaveBeenCalledOnce();
		expect(mocks.prepareWindows).not.toHaveBeenCalled();
	});

	it("registers nothing on a platform with no sidecar", async () => {
		setPlatform("linux");

		await activate(makeContext() as never);

		expect(mocks.checkFeatureGate).not.toHaveBeenCalled();
		expect(mocks.prepareWindows).not.toHaveBeenCalled();
		expect(mocks.registerMcpProvider).not.toHaveBeenCalled();
	});

	it("keeps the permission commands without the provider when no helper app resolves", async () => {
		mocks.resolveMacHelperAppForLaunch.mockResolvedValue(undefined);
		await activate(makeContext() as never);

		expect(mocks.registerMcpProvider).not.toHaveBeenCalled();
		await expectUnavailablePermissionCommands();
	});

	it("selects the exact Statsig manifest once for the activation", async () => {
		const manifestUrl =
			"https://downloads.cursor.com/computer-use-sidecar/releases/explicit/3.20.0-pre.7/aef70f206ecfa960fdc027893b7f9b362a3c44d4.json";
		mockDynamicConfigs({ mac_computer_use_sidecar_manifest: { sidecarManifestUrl: manifestUrl } });

		await activate(makeContext() as never);

		expect(mocks.getDynamicConfigValue).toHaveBeenCalledWith(
			"mac_computer_use_sidecar_manifest"
		);
		expect(mocks.resolveMacHelperAppForLaunch).toHaveBeenCalledWith(
			expect.objectContaining({
				builtProduct: true,
				manifestUrl,
			})
		);
	});

	it("keeps the CDN helper unavailable in unbuilt Cursor Dev", async () => {
		const manifestUrl =
			"https://downloads.cursor.com/computer-use-sidecar/releases/explicit/3.20.0-pre.7/aef70f206ecfa960fdc027893b7f9b362a3c44d4.json";
		mockDynamicConfigs({ mac_computer_use_sidecar_manifest: { sidecarManifestUrl: manifestUrl } });
		mocks.readProductJson.mockResolvedValue("{}");
		mocks.resolveMacHelperAppForLaunch.mockRejectedValue(
			new Error(
				"The downloaded Cursor Computer Use helper requires a signed Labs or production Cursor client."
			)
		);

		await activate(makeContext() as never);

		expect(mocks.resolveMacHelperAppForLaunch).toHaveBeenCalledWith(
			expect.objectContaining({
				builtProduct: false,
				manifestUrl,
			})
		);
		await expectUnavailablePermissionCommands(
			"signed Labs or production Cursor client"
		);
	});

	it("logs a download failure and keeps the provider unavailable", async () => {
		mocks.resolveMacHelperAppForLaunch.mockRejectedValue(
			new Error("download returned 503")
		);

		await expect(activate(makeContext() as never)).resolves.toBeUndefined();

		expect(mocks.registerMcpProvider).not.toHaveBeenCalled();
		await expectUnavailablePermissionCommands("download returned 503");
	});

	it("registers the status, open, and restart command bridge", async () => {
		await activate(makeContext() as never);

		await mocks.registeredCommands.get(
			"cursor.computerUse.getPermissionStatus"
		)?.();
		await mocks.registeredCommands.get(
			"cursor.computerUse.openPermissionSettings"
		)?.("screenRecording");
		await mocks.registeredCommands.get(
			"cursor.computerUse.restartAndGetPermissionStatus"
		)?.();

		expect(mocks.clientCalls).toEqual([
			{ method: "get" },
			{ method: "open", permission: "screenRecording" },
			{ method: "restart" },
		]);
	});

	it("never opens the permissions window from a permission check", async () => {
		await activate(makeContext() as never);
		const provider = mocks.registerMcpProvider.mock.calls[0][0];

		await provider.callTool("computer_check_permissions", {});
		await provider.callTool("computer_apps", {});

		expect(mocks.clientCalls.map(({ method }) => method)).toContain("check");
		expect(mocks.executeCommand).not.toHaveBeenCalled();
	});

	it("opens the permissions window when an action is blocked", async () => {
		mocks.preflight.blocked = true;
		await activate(makeContext() as never);
		const provider = mocks.registerMcpProvider.mock.calls[0][0];

		await expect(provider.callTool("computer_screenshot", {})).rejects.toThrow(
			"requires Accessibility and Screen Recording"
		);

		expect(mocks.executeCommand).toHaveBeenCalledExactlyOnceWith(
			"glass.openComputerUsePermissions",
			{ reason: "computerUseCall" }
		);
		expect(mocks.preflight.prompted).toBe(true);
	});

	// The window's own Refresh, and the relaunch it asks for after Allow, come
	// back denied until the user grants; neither may ask for the window again.
	it("does not open the permissions window from its own refresh", async () => {
		await activate(makeContext() as never);

		await mocks.registeredCommands.get(
			"cursor.computerUse.restartAndGetPermissionStatus"
		)?.();

		expect(mocks.executeCommand).not.toHaveBeenCalled();
	});

	it("removes the stored time of the last automatic open", async () => {
		mocks.globalState.set("computerUse.permissionsPromptShownAt", 1_000);

		await activate(makeContext() as never);

		expect([...mocks.globalState.keys()]).toEqual([]);
	});

	it("does not route a blocked action to a modal outside Glass", async () => {
		mocks.glass.workspaceRole = undefined;
		mocks.preflight.blocked = true;
		await activate(makeContext() as never);
		const provider = mocks.registerMcpProvider.mock.calls[0][0];

		await expect(provider.callTool("computer_screenshot", {})).rejects.toThrow();

		expect(mocks.executeCommand).not.toHaveBeenCalled();
		expect(mocks.preflight.prompted).toBe(false);
	});

	// Every preflighted tool call invokes the permission preflight, so N calls
	// drive N preflights here regardless of caching. The grant cache lives
	// inside the client: the preflight still runs per call, but a granted one
	// no longer opens a permissions/status RPC (asserted at the client layer in
	// sidecar-client.test.ts).
	it("preflights every screenshot and input tool", async () => {
		await activate(makeContext() as never);
		const provider = mocks.registerMcpProvider.mock.calls[0][0];
		for (const [toolName, args] of [
			["computer_screenshot", {}],
			["computer_click", { x: 1, y: 2 }],
			["computer_move", { x: 1, y: 2 }],
			["computer_drag", { from: { x: 1, y: 2 }, to: { x: 3, y: 4 } }],
			["computer_key", { key: "Return" }],
			["computer_scroll", { x: 1, y: 2 }],
			["computer_wait", { ms: 0 }],
		] as const) {
			await provider.callTool(toolName, args);
		}

		expect(
			mocks.clientCalls.filter(({ method }) => method === "preflight")
		).toHaveLength(6);
		expect(
			mocks.clientCalls.filter(({ method }) => method === "dispatch")
		).toHaveLength(6);
	});

	// App-scoped actions need the same Accessibility grant, so they ride the
	// same permission preflight, and they reach the sidecar through the
	// companion path rather than any remote input method, carrying the calling
	// conversation so the sidecar scopes app state to it. Listing and resolving
	// apps need no permission or control, as their descriptions say, so they
	// skip the preflight and cannot fail with the missing-permissions block.
	it("preflights app-scoped actions but not app listing, and routes them to companion mode", async () => {
		await activate(makeContext() as never);
		const provider = mocks.registerMcpProvider.mock.calls[0][0];
		const target = { scope: "app", pid: 42, target_id: "target-42" };
		for (const [toolName, args, conversationId] of [
			["computer_screenshot", { target }, "conv-a"],
			["computer_click", { target, x: 1, y: 2, coordinate_token: "c" }, "conv-b"],
			[
				"computer_type",
				{ target, text: "hello", element_id: 7, snapshot_id: "s-1" },
				"conv-c",
			],
			["computer_apps", {}, "conv-a"],
			["computer_resolve_app", { app_name: "Calculator" }, undefined],
			["computer_app_state", { target }, "conv-a"],
		] as const) {
			await provider.callTool(toolName, args, { conversationId });
		}

		expect(mocks.clientCalls).toEqual([
			{ method: "preflight" },
			{ method: "companion", conversationId: "conv-a" },
			{ method: "preflight" },
			{ method: "companion", conversationId: "conv-b" },
			{ method: "preflight" },
			{ method: "companion", conversationId: "conv-c" },
			{ method: "companion", conversationId: "conv-a" },
			{ method: "companion", conversationId: undefined },
			{ method: "preflight" },
			{ method: "companion", conversationId: "conv-a" },
		]);
	});

	it("still refuses a blocked action with the guidance when the window fails to open", async () => {
		mocks.executeCommand.mockRejectedValueOnce(new Error("route failed"));
		mocks.preflight.blocked = true;
		await activate(makeContext() as never);
		const provider = mocks.registerMcpProvider.mock.calls[0][0];

		await expect(provider.callTool("computer_screenshot", {})).rejects.toThrow(
			"requires Accessibility and Screen Recording"
		);
		expect(mocks.preflight.prompted).toBe(false);
	});

	// A gate change the experiment service reports is applied in-session (see
	// "gate that turns on after activation"); one it never reports — the
	// listener sees nothing — still waits for the next activation.
	it("applies a gate change nobody reported only on the next activation", async () => {
		mocks.checkFeatureGate.mockResolvedValue(false);
		await activate(makeContext() as never);

		mocks.checkFeatureGate.mockResolvedValue(true);
		await activate(makeContext() as never);
		expect(gateReads("mac_computer_use")).toBe(2);
		expect(mocks.registerMcpProvider).toHaveBeenCalledTimes(1);
	});

	it("best-effort releases a known session on deactivate", async () => {
		await activate(makeContext() as never);

		await deactivate();

		expect(mocks.shutdown).toHaveBeenCalledOnce();
	});

	// Forwarding only: that the sidecar process actually dies is asserted at
	// the transport layer, where there is a real child to inspect ("stops the
	// sidecar it launched when the extension is torn down"). Naming this after
	// the outcome rather than the link it checks would overstate it.
	it("forwards teardown to the backend on deactivate", async () => {
		// A window reload runs deactivate. On Windows the sidecar owns the one
		// instance of the per-user pipe, so leaving it running makes the next
		// window's launch abort as a squatter.
		setPlatform("win32");
		await activate(makeContext() as never);
		expect(mocks.constructedBackends).toEqual(["windows"]);

		await deactivate();

		expect(mocks.disposeBackend).toHaveBeenCalledTimes(1);
	});

	it("keeps unloading when sidecar teardown fails", async () => {
		setPlatform("win32");
		mocks.disposeBackend.mockRejectedValueOnce(new Error("kill failed"));
		await activate(makeContext() as never);

		await expect(deactivate()).resolves.toBeUndefined();
	});
});

// A 73-minute session audit had to infer every launch, lease and overlay time
// from other sources because the channel's lines carried none.
describe("withTimestamps", () => {
	it("stamps every line with the ISO time it was written and leaves the rest of the channel alone", () => {
		const appendLine = vi.fn();
		const dispose = vi.fn();
		const channel = withTimestamps({
			name: "Cursor Computer Use",
			appendLine,
			dispose,
		} as never);

		vi.useFakeTimers();
		try {
			vi.setSystemTime(new Date("2026-09-14T01:02:03.456Z"));
			channel.appendLine("[info] sidecar launched");
		} finally {
			vi.useRealTimers();
		}
		expect(appendLine).toHaveBeenCalledWith("2026-09-14T01:02:03.456Z [info] sidecar launched");

		channel.dispose();
		expect(dispose).toHaveBeenCalledOnce();
		expect(channel.name).toBe("Cursor Computer Use");
	});
});

// F8. `ExtHostOutputChannel.appendLine` throws once the host has disposed the
// channel, and teardown now deliberately outlives `deactivate`, so late writes
// are expected rather than exceptional. Every logger call in the extension
// routes through this backend — including the sidecar stderr drain, where the
// throw would escape a stream `data` handler uncaught rather than as a
// rejection anyone could catch.
describe("OutputChannelLoggerBackend", () => {
	const entry = { level: "info", message: "anything" } as never;

	it("swallows a channel that has already been closed", () => {
		const backend = new OutputChannelLoggerBackend({
			appendLine: () => {
				throw new Error("Channel has been closed");
			},
		} as never);

		expect(() => backend.log(createContext(), entry)).not.toThrow();
	});

	it("swallows metadata that cannot be serialized", () => {
		// The backend is the extension-wide guard, so it has to hold for
		// callers it does not know about. Nothing on the lifecycle seam logs
		// anything richer than `{pid}` today, which is exactly why formatting
		// outside the guard would go unnoticed until a future caller hit it.
		const circular: Record<string, unknown> = {};
		circular.self = circular;
		const appendLine = vi.fn();
		const backend = new OutputChannelLoggerBackend({ appendLine } as never);

		expect(() =>
			backend.log(createContext(), {
				level: "info",
				message: "anything",
				metadata: circular,
			} as never)
		).not.toThrow();
	});

	it("still writes when the channel is open", () => {
		const appendLine = vi.fn();
		const backend = new OutputChannelLoggerBackend({ appendLine } as never);

		backend.log(createContext(), entry);

		expect(appendLine).toHaveBeenCalledWith("[info] anything");
	});
});
