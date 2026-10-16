import {
	COMPUTER_USE_BATCH_MAX_KEYBOARD_STEPS,
	COMPUTER_USE_BATCH_MAX_STEPS,
	COMPUTER_USE_CANVASES,
	COMPUTER_USE_DRAG_PATH_MAX_POINTS,
	COMPUTER_USE_DRAG_PATH_MIN_POINTS,
	COMPUTER_USE_ESCALATIONS,
	COMPUTER_USE_REFUSAL_CODES,
	COMPUTER_USE_REFUSAL_ESCALATIONS,
	COMPUTER_USE_ZOOM_MAX_EDGE_PX,
	computerUseCanvasForPlatform,
	type SidecarToolImage,
	type SidecarToolResult,
} from "@anysphere/computer-use/protocol";
import { type Context, createContext } from "@anysphere/context";
import { WEBP_PASSTHROUGH_DIMENSIONS } from "@anysphere/utils/image-resize";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { beforeEach, describe, expect, it, type Mock, vi } from "vitest";
import {
	ComputerUseBackendError,
	ComputerUseRefusalError,
	conversationIdKey,
	type ComputerUseBackend,
} from "../backends/types";
import { encodeModelScreenshot } from "./screenshot-codec";
import {
	COMPUTER_USE_LOCAL_INSTRUCTIONS,
	COMPUTER_USE_MCP_TOOLS,
	changeFraction,
	clickTarget,
	computerUseMcpTools,
	ComputerUseMcpToolset,
	composeComputerUseInstructions,
	describeRefusalContract,
} from "./tools";

// The toolset is specialized for the host platform when the module loads, and
// these tests exercise the macOS toolset (the only one with app targets).
vi.hoisted(() => {
	Object.defineProperty(process, "platform", { value: "darwin" });
});

vi.mock("./screenshot-codec", () => ({
	encodeModelScreenshot: vi.fn(async (image: SidecarToolImage) => ({
		data: `webp:${image.data}`,
		mimeType: "image/webp",
	})),
	encodeZoomImage: vi.fn(async (image: SidecarToolImage) => ({
		data: `zoom-webp:${image.data}`,
		mimeType: "image/webp",
	})),
}));

const encodeModelScreenshotMock = vi.mocked(encodeModelScreenshot);

// The tool schema advertises the canvas of the sidecar on this machine.
const CANVAS = computerUseCanvasForPlatform(process.platform);

const SCREENSHOT_RESULT: SidecarToolResult = {
	message: "Captured primary display.",
	screenshot: { data: "png-bytes", mimeType: "image/png" },
	isError: false,
};

const ACTION_RESULT: SidecarToolResult = {
	message: "Performed the action.",
	screenshot: { data: "after-bytes", mimeType: "image/png" },
	isError: false,
};

const ZOOM_RESULT: SidecarToolResult = {
	message: "Zoomed into canvas region (700, 400)-(760, 430) … zoom_id=zoom-3f9a-1.",
	screenshot: { data: "zoom-bytes", mimeType: "image/png" },
	isError: false,
};

// `NonNullable` because optional members (`dispose`, `callCompanion`, `zoom`)
// carry `undefined` in their type, which `Mock` will not accept. The mapped
// type stays homomorphic, so those members remain optional here; the companion
// and zoom entries are then re-required because every mock below provides them.
type MockSidecar = Omit<
	{
		[Method in keyof ComputerUseBackend]: Mock<
			NonNullable<ComputerUseBackend[Method]>
		>;
	},
	"callCompanion" | "zoom"
> & {
	callCompanion: Mock<NonNullable<ComputerUseBackend["callCompanion"]>>;
	zoom: Mock<NonNullable<ComputerUseBackend["zoom"]>>;
};

function mockSidecar(): MockSidecar {
	return {
		startControl: vi
			.fn<ComputerUseBackend["startControl"]>()
			.mockResolvedValue(undefined),
		releaseControl: vi
			.fn<ComputerUseBackend["releaseControl"]>()
			.mockResolvedValue(undefined),
		screenshot: vi
			.fn<ComputerUseBackend["screenshot"]>()
			.mockResolvedValue(SCREENSHOT_RESULT),
		click: vi
			.fn<ComputerUseBackend["click"]>()
			.mockResolvedValue(ACTION_RESULT),
		scroll: vi
			.fn<ComputerUseBackend["scroll"]>()
			.mockResolvedValue(ACTION_RESULT),
		move: vi
			.fn<ComputerUseBackend["move"]>()
			.mockResolvedValue(ACTION_RESULT),
		drag: vi
			.fn<ComputerUseBackend["drag"]>()
			.mockResolvedValue(ACTION_RESULT),
		typeText: vi
			.fn<ComputerUseBackend["typeText"]>()
			.mockResolvedValue(ACTION_RESULT),
		pressKey: vi
			.fn<ComputerUseBackend["pressKey"]>()
			.mockResolvedValue(ACTION_RESULT),
		checkPermissions: vi
			.fn<ComputerUseBackend["checkPermissions"]>()
			.mockResolvedValue({
				message: "Reported permission state.",
				isError: false,
			}),
		callCompanion: vi
			.fn<NonNullable<ComputerUseBackend["callCompanion"]>>()
			.mockResolvedValue({ message: "App action done.", isError: false }),
		zoom: vi
			.fn<NonNullable<ComputerUseBackend["zoom"]>>()
			.mockResolvedValue(ZOOM_RESULT),
	};
}

const APP_TARGET = { scope: "app", pid: 42, target_id: "target-42" } as const;
const APP_TOOL_NAMES = [
	"computer_apps",
	"computer_resolve_app",
	"computer_app_state",
	"computer_set_value",
	"computer_app_action",
];

function toolset(sidecar: ComputerUseBackend): {
	ctx: Context;
	callTool: (
		name: string,
		args: Record<string, unknown>
	) => ReturnType<ComputerUseMcpToolset["callTool"]>;
} {
	const ctx = createContext();
	const instance = new ComputerUseMcpToolset(sidecar);
	return {
		ctx,
		callTool: (name, args) => instance.callTool(ctx, name, args),
	};
}

beforeEach(() => {
	encodeModelScreenshotMock.mockClear();
});

const SCREEN_TOOL_NAMES = [
	"computer_screenshot",
	"computer_click",
	"computer_move",
	"computer_drag",
	"computer_type",
	"computer_key",
	"computer_scroll",
	"computer_wait",
	"computer_check_permissions",
	"computer_start_control",
	"computer_release_control",
];

describe("COMPUTER_USE_MCP_TOOLS descriptors", () => {
	it("exposes the generic toolset plus the app-only tools", () => {
		expect(COMPUTER_USE_MCP_TOOLS.map(tool => tool.name)).toEqual([
			...SCREEN_TOOL_NAMES,
			...APP_TOOL_NAMES,
		]);
	});

	// The Windows sidecar has no companion mode, so a Windows model must see
	// the toolset exactly as it was before app targets existed — plus the zoom
	// surface, which exists only where the Windows sidecar is. The fixture is
	// the descriptor array this module produces on win32.
	it("advertises the Windows toolset, byte for byte", async () => {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			const windows = await import("./tools");
			expect(windows.COMPUTER_USE_MCP_TOOLS).toEqual(
				JSON.parse(
					readFileSync(
						join(__dirname, "__fixtures__", "windows-tools.json"),
						"utf8"
					)
				)
			);
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
			vi.resetModules();
		}
	});

	// The agent runtime answers a GetDynamicTools namespace lookup inline only
	// while the pretty-printed payload — the namespace's instructions plus
	// every descriptor with its schema — is under `FILE_OUTPUT_THRESHOLD_BYTES`
	// in packages/agent's get-mcp-tools.ts; past that the model is handed a
	// file path to read back (13.7 s in one live Windows session; fetching the
	// schemas one at a time instead cost 48 s in another). The payload is
	// rebuilt here the way that module builds it: the fields a namespace
	// lookup returns, text whitespace-collapsed as `sanitizeDescription` does,
	// tools sorted by name, two-space indentation.
	const GET_DYNAMIC_TOOLS_INLINE_LIMIT_BYTES = 12_000;
	// Head room for the runtime's status fields and a few more words. It was
	// 1 000 before the 2026-09-13 session audit put its Windows app patterns
	// and small-target rule into the instructions, which ride in the same
	// payload; that guidance saved minutes per session, the head room did not.
	// A Statsig win32 body replaces the compiled one and has to fit the same
	// budget; the lasting fix is the runtime not repeating the instructions
	// the system prompt already carries.
	const WIN32_LISTING_MARGIN_BYTES = 500;

	it("fits the GetDynamicTools inline limit with margin on Windows, instructions included", async () => {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			const windows = await import("./tools");
			const sanitize = (text: string): string =>
				text
					.replace(/[\u0000-\u001F\u007F]/g, " ")
					.replace(/\s+/g, " ")
					.trim();
			const payload = {
				namespace: windows.COMPUTER_USE_MCP_SERVER_ID,
				namespaceStatus: "connected",
				namespaceDescription: sanitize(
					windows.composeComputerUseInstructions({
						local: windows.COMPUTER_USE_LOCAL_INSTRUCTIONS,
						body: windows.COMPUTER_USE_FALLBACK_INSTRUCTIONS,
					})
				),
				tools: [...windows.COMPUTER_USE_MCP_TOOLS]
					.map(tool => ({
						tool: tool.name,
						description: sanitize(tool.description),
						inputSchema: JSON.parse(tool.parameters) as unknown,
					}))
					.sort((a, b) => a.tool.localeCompare(b.tool)),
			};
			const bytes = Buffer.byteLength(JSON.stringify(payload, null, 2), "utf8");
			expect(bytes, `the Windows listing is ${bytes} bytes`).toBeLessThanOrEqual(
				GET_DYNAMIC_TOOLS_INLINE_LIMIT_BYTES - WIN32_LISTING_MARGIN_BYTES
			);
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
			vi.resetModules();
		}
	});

	it("offers the target on every shared action but not on wait, control, or permissions", () => {
		const targeted = new Set([
			"computer_screenshot",
			"computer_click",
			"computer_move",
			"computer_drag",
			"computer_type",
			"computer_key",
			"computer_scroll",
			"computer_app_state",
			"computer_set_value",
			"computer_app_action",
		]);
		for (const tool of COMPUTER_USE_MCP_TOOLS) {
			const schema: { properties: Record<string, unknown> } = JSON.parse(
				tool.parameters
			);
			expect("target" in schema.properties, tool.name).toBe(
				targeted.has(tool.name)
			);
		}
	});

	it("serializes every parameters field as a JSON Schema object", () => {
		for (const tool of COMPUTER_USE_MCP_TOOLS) {
			const schema: unknown = JSON.parse(tool.parameters);
			expect(schema, tool.name).toMatchObject({ type: "object" });
			expect(tool.description.length, tool.name).toBeGreaterThan(0);
		}
	});

	// Zoom exists only where the Windows sidecar does. Off Windows no
	// descriptor, parameter, or instruction may so much as mention it.
	it("keeps zoom out of the macOS surface entirely", () => {
		for (const tool of COMPUTER_USE_MCP_TOOLS) {
			expect(tool.name).not.toBe("computer_zoom");
			expect(tool.description.toLowerCase(), tool.name).not.toContain("zoom");
			expect(tool.parameters.toLowerCase(), tool.name).not.toContain("zoom");
		}
		expect(COMPUTER_USE_LOCAL_INSTRUCTIONS.toLowerCase()).not.toContain("zoom");
	});

	it("states the coordinate space on every coordinate tool", () => {
		for (const name of [
			"computer_screenshot",
			"computer_click",
			"computer_move",
			"computer_drag",
			"computer_scroll",
		]) {
			const tool = COMPUTER_USE_MCP_TOOLS.find(
				candidate => candidate.name === name
			);
			expect(tool?.description, name).toContain(
				`fixed ${CANVAS.width}×${CANVAS.height}`
			);
		}
		expect(COMPUTER_USE_LOCAL_INSTRUCTIONS).toContain(
			`${CANVAS.width}×${CANVAS.height}`
		);
		expect(COMPUTER_USE_LOCAL_INSTRUCTIONS).toContain("(0, 0)");

		const click = COMPUTER_USE_MCP_TOOLS.find(
			tool => tool.name === "computer_click"
		);
		expect(JSON.parse(click?.parameters ?? "{}")).toMatchObject({
			properties: {
				x: { minimum: 0, maximum: CANVAS.width - 1 },
				y: { minimum: 0, maximum: CANVAS.height - 1 },
			},
		});
	});
});

describe("composeComputerUseInstructions", () => {
	it("joins the local text and the body with a blank line", () => {
		const local = "Local canvas bounds.";
		const body = "Body from Statsig or the fallback.";
		expect(composeComputerUseInstructions({ local, body })).toBe(
			`${local}\n\n${body}`
		);
	});
});

describe("Glass companion default", () => {
	it("refuses screen-scope type and sends untargeted app type to the sidecar", async () => {
		const sidecar = mockSidecar();
		const { callTool } = toolset(sidecar);

		await expect(callTool("computer_type", { text: "hello" })).rejects.toThrow(
			/Screen-scope typing is refused/
		);
		await callTool("computer_type", { target: APP_TARGET, text: "hello" });
		expect(sidecar.callCompanion).toHaveBeenCalledOnce();
		const [, name, args] = sidecar.callCompanion.mock.calls[0];
		expect(name).toBe("computer_use_typing");
		expect(JSON.parse(JSON.stringify(args))).toEqual({
			pid: 42,
			target_id: "target-42",
			value: "hello",
		});
		expect(sidecar.typeText).not.toHaveBeenCalled();
	});

	it("keeps whole-screen type for remote / private-worker mode", async () => {
		const sidecar = mockSidecar();
		const ctx = createContext();
		const instance = new ComputerUseMcpToolset(sidecar, {
			companionDefault: false,
		});

		await instance.callTool(ctx, "computer_type", { text: "hello" });
		expect(sidecar.typeText).toHaveBeenCalledWith(ctx, "hello");
		expect(sidecar.callCompanion).not.toHaveBeenCalled();
	});

	it("advertises remote type and start_control copy when companion is off", () => {
		const tools = computerUseMcpTools({ companionDefault: false });
		const type = tools.find(tool => tool.name === "computer_type");
		const start = tools.find(tool => tool.name === "computer_start_control");
		expect(type?.description).not.toMatch(/refused/i);
		expect(start?.description).not.toMatch(/do not call this to type/i);
		expect(tools.some(tool => tool.name === "computer_apps")).toBe(false);
	});

	it("advertises companion type refusal when companion is on", () => {
		const tools = computerUseMcpTools({ companionDefault: true });
		const type = tools.find(tool => tool.name === "computer_type");
		const start = tools.find(tool => tool.name === "computer_start_control");
		expect(type?.description).toMatch(/refused/i);
		expect(start?.description).toMatch(/do not call this to type/i);
		expect(tools.some(tool => tool.name === "computer_apps")).toBe(true);
	});

	it("does not advertise wait as a display screenshot in companion", () => {
		const companion = computerUseMcpTools({ companionDefault: true }).find(
			tool => tool.name === "computer_wait"
		);
		const remote = computerUseMcpTools({ companionDefault: false }).find(
			tool => tool.name === "computer_wait"
		);
		expect(companion?.description).toMatch(/text only/i);
		expect(companion?.description).not.toMatch(/fresh screenshot/i);
		expect(remote?.description).toMatch(/fresh screenshot/i);
	});
});

describe("ComputerUseMcpToolset dispatch", () => {
	interface DispatchCase {
		tool: string;
		args: Record<string, unknown>;
		method: keyof ComputerUseBackend;
		/** Expected sidecar call arguments after ctx. */
		expected: unknown[];
	}

	it.each<DispatchCase>([
		{
			tool: "computer_screenshot",
			args: {},
			method: "screenshot",
			expected: [],
		},
		{
			tool: "computer_click",
			args: { x: 10, y: 20 },
			method: "click",
			expected: [{ coordinate: { x: 10, y: 20 }, button: "left", count: 1 }],
		},
		{
			tool: "computer_click",
			args: { x: 1, y: 2, button: "right", count: 2 },
			method: "click",
			expected: [{ coordinate: { x: 1, y: 2 }, button: "right", count: 2 }],
		},
		{
			tool: "computer_move",
			args: { x: 5, y: 6 },
			method: "move",
			expected: [{ x: 5, y: 6 }],
		},
		{
			tool: "computer_drag",
			args: { from: { x: 1, y: 2 }, to: { x: 3, y: 4 } },
			method: "drag",
			expected: [
				{
					button: "left",
					path: [
						{ x: 1, y: 2 },
						{ x: 3, y: 4 },
					],
				},
			],
		},
		{
			tool: "computer_key",
			args: { key: "cmd+shift+s" },
			method: "pressKey",
			expected: ["cmd+shift+s"],
		},
		{
			tool: "computer_scroll",
			args: { x: 7, y: 8 },
			method: "scroll",
			expected: [{ coordinate: { x: 7, y: 8 }, direction: "down", amount: 3 }],
		},
		{
			tool: "computer_scroll",
			args: { x: 7, y: 8, direction: "left", amount: 10 },
			method: "scroll",
			expected: [
				{ coordinate: { x: 7, y: 8 }, direction: "left", amount: 10 },
			],
		},
		{
			tool: "computer_check_permissions",
			args: {},
			method: "checkPermissions",
			expected: [],
		},
		{
			tool: "computer_start_control",
			args: {},
			method: "startControl",
			expected: [],
		},
		{
			tool: "computer_release_control",
			args: {},
			method: "releaseControl",
			expected: [],
		},
	])("maps $tool $args to sidecar $method", async testCase => {
		const sidecar = mockSidecar();
		const { ctx, callTool } = toolset(sidecar);

		const result = await callTool(testCase.tool, testCase.args);

		expect(sidecar[testCase.method]).toHaveBeenCalledWith(
			ctx,
			...testCase.expected
		);
		if (
			testCase.method === "checkPermissions" ||
			testCase.method === "startControl" ||
			testCase.method === "releaseControl"
		) {
			expect(result.content).not.toContainEqual(
				expect.objectContaining({ type: "image" })
			);
			expect(encodeModelScreenshotMock).not.toHaveBeenCalled();
			if (testCase.method === "startControl") {
				expect(result.content).toEqual([
					{ type: "text", text: "Remote control is ready." },
				]);
			}
			if (testCase.method === "releaseControl") {
				expect(result.content).toEqual([
					{ type: "text", text: "Released remote control." },
				]);
			}
		} else {
			expect(result.content).toContainEqual({
				type: "image",
				data:
					testCase.method === "screenshot"
						? "webp:png-bytes"
						: "webp:after-bytes",
				mimeType: "image/webp",
			});
			expect(encodeModelScreenshotMock).toHaveBeenCalledOnce();
		}
	});

	it("returns sidecar text and the screenshot as image content", async () => {
		const { callTool } = toolset(mockSidecar());

		const result = await callTool("computer_screenshot", {});

		expect(result.content).toEqual([
			{ type: "text", text: "Captured primary display." },
			{ type: "image", data: "webp:png-bytes", mimeType: "image/webp" },
		]);
	});

	it("treats an explicit screen target like no target", async () => {
		const sidecar = mockSidecar();
		const { ctx, callTool } = toolset(sidecar);

		await callTool("computer_click", { target: { scope: "screen" }, x: 1, y: 2 });

		expect(sidecar.click).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 1, y: 2 },
			button: "left",
			count: 1,
		});
		expect(sidecar.callCompanion).not.toHaveBeenCalled();
	});

	// A model cannot learn about zoom_id on macOS, but if one arrives anyway it
	// must be dropped exactly as an unknown key was before zoom existed —
	// never forwarded, never a validation error.
	it("drops a zoom_id off Windows without forwarding or rejecting it", async () => {
		const sidecar = mockSidecar();
		const { ctx, callTool } = toolset(sidecar);

		await callTool("computer_click", { x: 1, y: 2, zoom_id: "zoom-3f9a-1" });
		await callTool("computer_move", { x: 3, y: 4, zoom_id: 7 });
		await callTool("computer_scroll", { x: 5, y: 6, zoom_id: "" });
		await callTool("computer_drag", {
			from: { x: 1, y: 2 },
			to: { x: 3, y: 4 },
			zoom_id: "zoom-3f9a-1",
		});

		expect(sidecar.click).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 1, y: 2 },
			button: "left",
			count: 1,
		});
		expect(sidecar.move).toHaveBeenCalledWith(ctx, { x: 3, y: 4 });
		expect(sidecar.move.mock.calls[0]).toHaveLength(2);
		expect(sidecar.scroll).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 5, y: 6 },
			direction: "down",
			amount: 3,
		});
		expect(sidecar.drag).toHaveBeenCalledWith(ctx, {
			button: "left",
			path: [
				{ x: 1, y: 2 },
				{ x: 3, y: 4 },
			],
		});
		for (const call of [
			...sidecar.click.mock.calls,
			...sidecar.scroll.mock.calls,
			...sidecar.drag.mock.calls,
		]) {
			expect(call[1]).not.toHaveProperty("zoomId");
		}
		await expect(callTool("computer_zoom", { x1: 0, y1: 0, x2: 10, y2: 10 })).rejects.toThrow(
			"Unknown computer-use tool: computer_zoom"
		);
		expect(sidecar.zoom).not.toHaveBeenCalled();
	});

	interface AppDispatchCase {
		tool: string;
		args: Record<string, unknown>;
		/** Expected companion wire tool name and arguments. */
		expected: [string, Record<string, unknown>];
	}

	it.each<AppDispatchCase>([
		{
			tool: "computer_screenshot",
			args: { target: APP_TARGET },
			expected: ["computer_use_screenshot", { pid: 42, target_id: "target-42" }],
		},
		{
			tool: "computer_click",
			args: { target: APP_TARGET, x: 10, y: 20, coordinate_token: "c-1" },
			expected: [
				"computer_use_click",
				{ pid: 42, target_id: "target-42", x: 10, y: 20, coordinate_token: "c-1" },
			],
		},
		{
			tool: "computer_click",
			args: {
				target: APP_TARGET,
				x: 1,
				y: 2,
				button: "right",
				count: 2,
				coordinate_token: "c-1",
			},
			expected: [
				"computer_use_click",
				{
					pid: 42,
					target_id: "target-42",
					x: 1,
					y: 2,
					button: "right",
					count: 2,
					coordinate_token: "c-1",
				},
			],
		},
		{
			tool: "computer_move",
			args: { target: APP_TARGET, x: 5, y: 6, coordinate_token: "c-1" },
			expected: [
				"computer_use_mouse_move",
				{ pid: 42, target_id: "target-42", x: 5, y: 6, coordinate_token: "c-1" },
			],
		},
		{
			tool: "computer_drag",
			args: {
				target: APP_TARGET,
				from: { x: 1, y: 2 },
				to: { x: 3, y: 4 },
				coordinate_token: "c-1",
			},
			expected: [
				"computer_use_drag",
				{
					pid: 42,
					target_id: "target-42",
					path: [
						{ x: 1, y: 2 },
						{ x: 3, y: 4 },
					],
					coordinate_token: "c-1",
				},
			],
		},
		{
			tool: "computer_type",
			args: { target: APP_TARGET, text: "hello", element_id: 7, snapshot_id: "s-1" },
			expected: [
				"computer_use_typing",
				{
					pid: 42,
					target_id: "target-42",
					value: "hello",
					element_id: 7,
					snapshot_id: "s-1",
				},
			],
		},
		{
			tool: "computer_type",
			args: {
				target: APP_TARGET,
				text: "hello",
				element_id: 7,
				snapshot_id: "s-1",
			},
			expected: [
				"computer_use_typing",
				{
					pid: 42,
					target_id: "target-42",
					value: "hello",
					element_id: 7,
					snapshot_id: "s-1",
				},
			],
		},
		{
			tool: "computer_type",
			args: {
				target: APP_TARGET,
				text: "hello",
				coordinate_token: "c-1",
			},
			expected: [
				"computer_use_typing",
				{
					pid: 42,
					target_id: "target-42",
					value: "hello",
					coordinate_token: "c-1",
				},
			],
		},
		{
			tool: "computer_key",
			args: { target: APP_TARGET, key: "Return" },
			expected: [
				"computer_use_press_key",
				{ pid: 42, target_id: "target-42", key: "Return" },
			],
		},
		{
			tool: "computer_scroll",
			args: { target: APP_TARGET, x: 7, y: 8, coordinate_token: "c-1" },
			expected: [
				"computer_use_scroll",
				{
					pid: 42,
					target_id: "target-42",
					x: 7,
					y: 8,
					direction: "down",
					coordinate_token: "c-1",
				},
			],
		},
		{
			tool: "computer_apps",
			args: {},
			expected: ["computer_use_apps_list", {}],
		},
		{
			tool: "computer_resolve_app",
			args: { app_name: "Calculator" },
			expected: ["computer_use_select_app", { app_name: "Calculator" }],
		},
		{
			tool: "computer_app_state",
			args: { target: APP_TARGET },
			expected: ["computer_use_app_state", { pid: 42, target_id: "target-42" }],
		},
		{
			tool: "computer_app_state",
			args: { target: APP_TARGET, element_id: 9, snapshot_id: "s-1" },
			expected: [
				"computer_use_app_state",
				{ pid: 42, target_id: "target-42", element_id: 9, snapshot_id: "s-1" },
			],
		},
		{
			tool: "computer_set_value",
			args: { target: APP_TARGET, element_id: 3, snapshot_id: "s-1", value: "" },
			expected: [
				"computer_use_set_value",
				{ pid: 42, target_id: "target-42", element_id: 3, snapshot_id: "s-1", value: "" },
			],
		},
		{
			tool: "computer_app_action",
			args: { target: APP_TARGET, element_id: 3, snapshot_id: "s-1", action: "press" },
			expected: [
				"computer_use_perform_secondary_action",
				{
					pid: 42,
					target_id: "target-42",
					element_id: 3,
					snapshot_id: "s-1",
					action: "press",
				},
			],
		},
	])("routes app-scoped $tool to the companion sidecar", async testCase => {
		const sidecar = mockSidecar();
		const { ctx, callTool } = toolset(sidecar);

		const result = await callTool(testCase.tool, testCase.args);

		expect(sidecar.callCompanion).toHaveBeenCalledOnce();
		const [, name, args] = sidecar.callCompanion.mock.calls[0];
		expect(name).toBe(testCase.expected[0]);
		// The wire drops undefined optionals; the sidecar must not see them either.
		expect(JSON.parse(JSON.stringify(args))).toEqual(testCase.expected[1]);
		// App scope never joins screen control or the remote input path.
		for (const method of [
			"startControl",
			"releaseControl",
			"screenshot",
			"click",
			"scroll",
			"move",
			"drag",
			"typeText",
			"pressKey",
		] as const) {
			expect(sidecar[method], method).not.toHaveBeenCalled();
		}
		expect(result.content).toEqual([{ type: "text", text: "App action done." }]);
	});

	it("appends the handles the sidecar keeps only in structured content", async () => {
		const sidecar = mockSidecar();
		sidecar.callCompanion
			.mockResolvedValueOnce({
				message: "OK tool=computer_use_apps_list message=\"Listed 2 running app(s).\"",
				isError: false,
				structuredContent: {
					tool: "computer_use_apps_list",
					status: "ok",
					message: "Listed 2 running app(s).",
					system: {
						osVersion: "15",
						runningAppCount: 2,
						displays: [],
						permissions: { accessibilityTrusted: true, screenRecordingGranted: true },
						apps: [
							{
								pid: 42,
								targetID: "target-42",
								localizedName: "Calculator",
								bundleIdentifier: "com.apple.calculator",
								isActive: true,
							},
							{ pid: 43, targetID: "target-43", isActive: false },
						],
					},
				},
			})
			.mockResolvedValueOnce({
				message: "OK tool=computer_use_screenshot message=\"Captured window 7.\"",
				screenshot: { data: "window-bytes", mimeType: "image/png" },
				isError: false,
				structuredContent: {
					tool: "computer_use_screenshot",
					status: "ok",
					message: "Captured window 7.",
					coordinateToken: "coord-1",
				},
			})
			.mockResolvedValueOnce({
				message: 'OK tool=computer_use_app_state message="2 elements."\n[1] AXWindow name="Calculator"\n [2] AXButton name="7" (+3 descendants omitted)',
				isError: false,
				structuredContent: {
					tool: "computer_use_app_state",
					status: "ok",
					message: "2 elements.",
					snapshotID: "snap-1",
				},
			});
		const { callTool } = toolset(sidecar);

		const apps = await callTool("computer_apps", {});
		const screenshot = await callTool("computer_screenshot", { target: APP_TARGET });
		const state = await callTool("computer_app_state", { target: APP_TARGET });

		expect(apps.content).toEqual([
			{ type: "text", text: "OK tool=computer_use_apps_list message=\"Listed 2 running app(s).\"" },
			{
				type: "text",
				text: [
					'APP pid=42 target_id="target-42" active=true app="Calculator" bundle="com.apple.calculator"',
					'APP pid=43 target_id="target-43" active=false',
				].join("\n"),
			},
		]);
		expect(screenshot.content).toEqual([
			{ type: "text", text: "OK tool=computer_use_screenshot message=\"Captured window 7.\"" },
			{ type: "image", data: "webp:window-bytes", mimeType: "image/webp" },
			{ type: "text", text: "coordinate_token=coord-1" },
		]);
		// The tree text is the sidecar's, byte for byte; only the handle follows.
		expect(state.content).toEqual([
			{
				type: "text",
				text: 'OK tool=computer_use_app_state message="2 elements."\n[1] AXWindow name="Calculator"\n [2] AXButton name="7" (+3 descendants omitted)',
			},
			{ type: "text", text: "snapshot_id=snap-1" },
		]);
	});

	it("reuses snapshot_id on a verify screenshot after computer_app_state", async () => {
		const sidecar = mockSidecar();
		sidecar.callCompanion = vi
			.fn<NonNullable<ComputerUseBackend["callCompanion"]>>()
			.mockResolvedValueOnce({
				message: 'OK tool=computer_use_app_state message="2 elements."\n[1] AXWindow name="Calculator"\n [2] AXButton name="7"',
				isError: false,
				structuredContent: {
					tool: "computer_use_app_state",
					status: "ok",
					message: "2 elements.",
					snapshotID: "snap-1",
				},
			})
			.mockResolvedValueOnce({
				message: "OK tool=computer_use_screenshot message=\"Captured window 7. Reused live snapshot (tree unchanged).\"",
				screenshot: { data: "window-bytes", mimeType: "image/png" },
				isError: false,
				structuredContent: {
					tool: "computer_use_screenshot",
					status: "ok",
					message: "Captured window 7. Reused live snapshot (tree unchanged).",
					coordinateToken: "coord-1",
					snapshotID: "snap-1",
				},
			});
		const { callTool } = toolset(sidecar);

		await callTool("computer_app_state", { target: APP_TARGET });
		const screenshot = await callTool("computer_screenshot", { target: APP_TARGET });

		expect(sidecar.callCompanion).toHaveBeenCalledTimes(2);
		expect(sidecar.callCompanion).toHaveBeenNthCalledWith(
			2,
			expect.anything(),
			"computer_use_screenshot",
			{ pid: 42, target_id: "target-42" }
		);
		expect(screenshot.content).toEqual([
			{
				type: "text",
				text: "OK tool=computer_use_screenshot message=\"Captured window 7. Reused live snapshot (tree unchanged).\"",
			},
			{ type: "image", data: "webp:window-bytes", mimeType: "image/webp" },
			{ type: "text", text: "coordinate_token=coord-1\nsnapshot_id=snap-1" },
		]);
	});

	it("refuses an app target on a backend without companion mode", async () => {
		const { callCompanion: _unused, ...screenOnly } = mockSidecar();
		const { callTool } = toolset(screenOnly);

		await expect(
			callTool("computer_click", {
				target: APP_TARGET,
				x: 1,
				y: 2,
				coordinate_token: "c-1",
			})
		).rejects.toThrow("App targets need the macOS computer-use helper");
		expect(screenOnly.click).not.toHaveBeenCalled();
	});

	// The sidecar rejects these on the wire; failing at validation names the
	// argument instead of surfacing a sidecar error after a round trip.
	it.each<{ tool: string; args: Record<string, unknown>; issue: string }>([
		{
			tool: "computer_click",
			args: { target: APP_TARGET, x: 1, y: 2 },
			issue: "coordinate_token",
		},
		{
			tool: "computer_move",
			args: { target: APP_TARGET, x: 1, y: 2 },
			issue: "coordinate_token",
		},
		{
			tool: "computer_drag",
			args: { target: APP_TARGET, from: { x: 1, y: 2 }, to: { x: 3, y: 4 } },
			issue: "coordinate_token",
		},
		{
			tool: "computer_scroll",
			args: { target: APP_TARGET, x: 1, y: 2 },
			issue: "coordinate_token",
		},
		{
			tool: "computer_type",
			args: { text: "hello" },
			issue: "target",
		},
		{
			tool: "computer_type",
			args: { target: { scope: "screen" }, text: "hello" },
			issue: "target",
		},
		{
			tool: "computer_type",
			args: { target: APP_TARGET, text: "hi", element_id: 7 },
			issue: "snapshot_id",
		},
		{
			tool: "computer_type",
			args: { target: APP_TARGET, text: "hi", snapshot_id: "s-1" },
			issue: "element_id",
		},
		{
			tool: "computer_type",
			args: {
				target: APP_TARGET,
				text: "hi",
				element_id: 7,
				snapshot_id: "s-1",
				coordinate_token: "c-1",
			},
			issue: "coordinate_token",
		},
		{
			tool: "computer_app_state",
			args: { target: APP_TARGET, element_id: 7 },
			issue: "snapshot_id",
		},
		{
			tool: "computer_app_state",
			args: { target: APP_TARGET, snapshot_id: "s-1" },
			issue: "element_id",
		},
		{
			tool: "computer_resolve_app",
			args: {},
			issue: "arguments",
		},
		{
			tool: "computer_resolve_app",
			args: { pid: 42, app_name: "Calculator" },
			issue: "arguments",
		},
	])(
		"rejects $tool $args before it reaches the sidecar",
		async ({ tool, args, issue }) => {
			const sidecar = mockSidecar();
			const { callTool } = toolset(sidecar);

			await expect(callTool(tool, args)).rejects.toThrow(
				new RegExp(`^Invalid arguments for ${tool}: ${issue}:`)
			);
			expect(sidecar.callCompanion).not.toHaveBeenCalled();
		}
	);

	it("waits locally in companion and returns no screenshot", async () => {
		const sidecar = mockSidecar();
		const waits: number[] = [];
		const order: string[] = [];
		sidecar.screenshot.mockImplementation(async () => {
			order.push("screenshot");
			return SCREENSHOT_RESULT;
		});
		const ctx = createContext();
		const instance = new ComputerUseMcpToolset(sidecar, {
			delay: async ms => {
				waits.push(ms);
				order.push("delay");
			},
			preflight: async () => {
				order.push("preflight");
			},
		});

		const result = await instance.callTool(ctx, "computer_wait", { ms: 500 });

		expect(waits).toEqual([500]);
		expect(order).toEqual(["delay"]);
		expect(sidecar.screenshot).not.toHaveBeenCalled();
		expect(sidecar.callCompanion).not.toHaveBeenCalled();
		expect(result.content).toEqual([{
			type: "text",
			text: "Waited 500ms. Observe with computer_screenshot (app target) or computer_app_state.",
		}]);
		expect(encodeModelScreenshotMock).not.toHaveBeenCalled();
	});

	it("keeps a post-wait primary-display screenshot in remote mode", async () => {
		const sidecar = mockSidecar();
		const waits: number[] = [];
		const order: string[] = [];
		sidecar.screenshot.mockImplementation(async () => {
			order.push("screenshot");
			return SCREENSHOT_RESULT;
		});
		const ctx = createContext();
		const instance = new ComputerUseMcpToolset(sidecar, {
			companionDefault: false,
			delay: async ms => {
				waits.push(ms);
				order.push("delay");
			},
			preflight: async () => {
				order.push("preflight");
			},
		});

		const result = await instance.callTool(ctx, "computer_wait", { ms: 500 });

		expect(waits).toEqual([500]);
		expect(order).toEqual(["delay", "preflight", "screenshot"]);
		expect(sidecar.screenshot).toHaveBeenCalledWith(ctx);
		expect(result.content).toEqual([
			{ type: "text", text: "Waited 500ms." },
			{ type: "text", text: "Captured primary display." },
			{ type: "image", data: "webp:png-bytes", mimeType: "image/webp" },
		]);
		expect(encodeModelScreenshotMock).toHaveBeenCalledOnce();
	});

	it("defaults computer_wait to 1000ms", async () => {
		const waits: number[] = [];
		const instance = new ComputerUseMcpToolset(mockSidecar(), {
			delay: async ms => {
				waits.push(ms);
			},
		});

		await instance.callTool(createContext(), "computer_wait", {});

		expect(waits).toEqual([1000]);
	});

	it("returns fallback text when the sidecar message is empty", async () => {
		const sidecar = mockSidecar();
		sidecar.click.mockResolvedValue({ message: "  ", isError: false });
		const { callTool } = toolset(sidecar);

		const result = await callTool("computer_click", { x: 0, y: 0 });

		expect(result.content).toEqual([{ type: "text", text: "Clicked." }]);
	});

	it("rejects an unknown tool name", async () => {
		const { callTool } = toolset(mockSidecar());

		await expect(callTool("computer_teleport", {})).rejects.toThrow(
			"Unknown computer-use tool: computer_teleport"
		);
	});

	it("rejects invalid arguments without calling the sidecar", async () => {
		const sidecar = mockSidecar();
		const { callTool } = toolset(sidecar);

		await expect(callTool("computer_click", { x: 10 })).rejects.toThrow(
			"Invalid arguments for computer_click"
		);
		await expect(callTool("computer_click", { x: -1, y: 5 })).rejects.toThrow(
			"Invalid arguments for computer_click"
		);
		await expect(
			callTool("computer_click", {
				x: CANVAS.width,
				y: CANVAS.height - 1,
			})
		).rejects.toThrow("Invalid arguments for computer_click");
		await expect(
			callTool("computer_click", {
				x: CANVAS.width - 1,
				y: CANVAS.height,
			})
		).rejects.toThrow("Invalid arguments for computer_click");
		// The sidecar rejects empty typing text; the MCP layer must fail the
		// call locally with a clear argument error instead.
		await expect(callTool("computer_type", { text: "" })).rejects.toThrow(
			"Invalid arguments for computer_type"
		);
		// The wire contract caps scroll at 20 ticks; a larger advertised
		// amount would under-scroll silently.
		await expect(
			callTool("computer_scroll", { x: 0, y: 0, amount: 21 })
		).rejects.toThrow("Invalid arguments for computer_scroll");
		expect(sidecar.click).not.toHaveBeenCalled();
		expect(sidecar.typeText).not.toHaveBeenCalled();
		expect(sidecar.scroll).not.toHaveBeenCalled();
	});

	it("accepts the canvas's bottom-right coordinate", async () => {
		const sidecar = mockSidecar();
		const { ctx, callTool } = toolset(sidecar);

		await callTool("computer_click", {
			x: CANVAS.width - 1,
			y: CANVAS.height - 1,
		});

		expect(sidecar.click).toHaveBeenCalledWith(ctx, {
			coordinate: {
				x: CANVAS.width - 1,
				y: CANVAS.height - 1,
			},
			button: "left",
			count: 1,
		});
	});

	it("accepts the contract's maximum scroll amount", async () => {
		const sidecar = mockSidecar();
		const { ctx, callTool } = toolset(sidecar);

		await callTool("computer_scroll", { x: 0, y: 0, amount: 20 });

		expect(sidecar.scroll).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 0, y: 0 },
			direction: "down",
			amount: 20,
		});
	});

	it("propagates sidecar errors", async () => {
		const sidecar = mockSidecar();
		sidecar.screenshot.mockRejectedValue(
			new Error("Screen Recording permission is required.")
		);
		const { callTool } = toolset(sidecar);

		await expect(callTool("computer_screenshot", {})).rejects.toThrow(
			"Screen Recording permission is required."
		);
	});

	it("stops input but keeps passive tools available after user_aborted", async () => {
		const sidecar = mockSidecar();
		sidecar.click.mockRejectedValue(
			new ComputerUseBackendError(
				"The user stopped remote control.",
				"user_aborted"
			)
		);
		const { callTool } = toolset(sidecar);

		await expect(
			callTool("computer_click", { x: 1, y: 2 })
		).resolves.toEqual({
			content: [{
				type: "text",
				text: "USER_ABORTED: The user stopped the current control session. Do not call input, start-control, or release-control tools again in this turn.",
			}],
			isError: true,
			structuredContent: { code: "user_aborted" },
		});
		await callTool("computer_screenshot", {});
		await callTool("computer_wait", { ms: 0 });
		await callTool("computer_check_permissions", {});
		expect(sidecar.screenshot).toHaveBeenCalledTimes(1);
		expect(sidecar.checkPermissions).toHaveBeenCalledOnce();
		expect(sidecar.startControl).not.toHaveBeenCalled();
	});

	it("does not map a busy session to user_aborted", async () => {
		const sidecar = mockSidecar();
		sidecar.click.mockRejectedValue(
			new ComputerUseBackendError(
				"Remote control is busy with another session."
			)
		);
		const { callTool } = toolset(sidecar);

		await expect(
			callTool("computer_click", { x: 1, y: 2 })
		).rejects.toThrow("Remote control is busy");
	});

	// A refusal is returned, not thrown: a thrown error reaches the model as
	// prose only, and the whole point is that it gets the code and the hint.
	it("returns a structured refusal with the code and escalation the backend gave", async () => {
		const sidecar = mockSidecar();
		const refusal = {
			code: "secure_desktop",
			message:
				'Refusing to actuate: the active desktop is "Winlogon", not the interactive desktop.',
			escalation: {
				recommended: "ask_user",
				reason: "Only the person at the machine can dismiss it.",
			},
		} as const;
		sidecar.click.mockRejectedValue(new ComputerUseRefusalError(refusal));
		const { callTool } = toolset(sidecar);

		const result = await callTool("computer_click", { x: 1, y: 2 });

		expect(result.isError).toBe(true);
		expect(result.structuredContent).toEqual(refusal);
		expect(result.content).toHaveLength(1);
		const [text] = result.content;
		if (text.type !== "text") {
			throw new Error("a refusal carries text, not an image");
		}
		// The message the model always saw comes first, verbatim; the trailer
		// repeats the code and next step for a reader of the text alone.
		expect(text.text.startsWith(refusal.message)).toBe(true);
		expect(text.text).toContain("Refusal code: secure_desktop");
		expect(text.text).toContain("Recommended next step: ask_user");
		expect(text.text).toContain(refusal.escalation.reason);
		// Nothing about a refusal is a screenshot; the codec is not consulted.
		expect(encodeModelScreenshotMock).not.toHaveBeenCalled();
	});

	it("returns a refusal from any tool, including passive ones", async () => {
		const sidecar = mockSidecar();
		const refusal = {
			code: "sidecar_unavailable",
			message: "The Cursor Computer Use sidecar was not found.",
			escalation: { recommended: "ask_user", reason: "Nothing was actuated." },
		} as const;
		sidecar.screenshot.mockRejectedValue(new ComputerUseRefusalError(refusal));
		sidecar.checkPermissions.mockRejectedValue(
			new ComputerUseRefusalError(refusal)
		);
		const { callTool } = toolset(sidecar);

		for (const [name, args] of [
			["computer_screenshot", {}],
			["computer_check_permissions", {}],
		] as const) {
			const result = await callTool(name, args);
			expect(result.isError, name).toBe(true);
			expect(result.structuredContent, name).toEqual(refusal);
		}

		const wait = await callTool("computer_wait", { ms: 0 });
		expect(wait.isError).toBeUndefined();
		expect(sidecar.screenshot).toHaveBeenCalledTimes(1);
	});

	it("leaves the user_aborted shape alone when a refusal carries that code", async () => {
		// The lease's own user_aborted path is unchanged (previous test); a
		// structured refusal that happens to carry the code is still a
		// structured refusal, so a backend that adopts the shape later gets
		// the full contract rather than the code-only one.
		const sidecar = mockSidecar();
		sidecar.click.mockRejectedValue(
			new ComputerUseRefusalError({
				code: "user_aborted",
				message: "The user stopped remote control.",
				escalation: { recommended: "stop", reason: "Do not call input tools again." },
			})
		);
		const { callTool } = toolset(sidecar);

		await expect(
			callTool("computer_click", { x: 1, y: 2 })
		).resolves.toMatchObject({
			isError: true,
			structuredContent: {
				code: "user_aborted",
				escalation: { recommended: "stop" },
			},
		});
	});
});

describe("refusal contract instructions", () => {
	it("lists every code exactly once under its default escalation", () => {
		// Checked against the vocabulary tables the text is generated from,
		// never against its wording: a dropped or misfiled code fails, a
		// rewording does not.
		const text = describeRefusalContract();
		// Each group opens with its escalation followed by the parenthesised
		// guidance; codes are never followed by " (".
		const groupHeading = new RegExp(
			`\\b(${COMPUTER_USE_ESCALATIONS.join("|")}) \\(`,
			"g"
		);
		const groups = new Map<string, string>();
		const headings = [...text.matchAll(groupHeading)];
		headings.forEach((heading, index) => {
			const end = headings[index + 1]?.index ?? text.length;
			groups.set(heading[1], text.slice(heading.index, end));
		});
		expect([...groups.keys()].sort()).toEqual([...COMPUTER_USE_ESCALATIONS].sort());
		for (const code of COMPUTER_USE_REFUSAL_CODES) {
			expect(text.split(code).length - 1, code).toBe(1);
			const escalation = COMPUTER_USE_REFUSAL_ESCALATIONS[code];
			expect(groups.get(escalation), `${code} under ${escalation}`).toContain(code);
		}
	});

	it("refuses bad arguments and unknown tools structurally on Windows, and throws elsewhere", async () => {
		// On the platform this module loaded for (darwin) an argument problem
		// is the thrown error it always was.
		const darwin = toolset(mockSidecar());
		await expect(
			darwin.callTool("computer_click", { x: 5000, y: 10 })
		).rejects.toThrow("Invalid arguments for computer_click");
		await expect(darwin.callTool("computer_fly", {})).rejects.toThrow(
			"Unknown computer-use tool: computer_fly"
		);

		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			const windows = await import("./tools");
			const sidecar = mockSidecar();
			const instance = new windows.ComputerUseMcpToolset(sidecar);
			const ctx = createContext();

			const invalid = await instance.callTool(ctx, "computer_click", { x: 5000, y: 10 });
			expect(invalid.isError).toBe(true);
			expect(invalid.structuredContent).toMatchObject({
				code: "invalid_arguments",
				escalation: { recommended: "retry" },
			});
			expect(invalid.structuredContent?.code === "invalid_arguments" && invalid.structuredContent.message).toContain(
				"Invalid arguments for computer_click"
			);
			expect(sidecar.click).not.toHaveBeenCalled();

			const unknown = await instance.callTool(ctx, "computer_fly", {});
			expect(unknown.isError).toBe(true);
			expect(unknown.structuredContent).toMatchObject({
				code: "unknown_tool",
				escalation: { recommended: "use_different_tool" },
			});
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
			vi.resetModules();
		}
	});

	it("documents the contract to the model only where it is honoured", async () => {
		// The shared RPC client produces structured refusals on Windows, so the
		// contract paragraph is appended there and nowhere else; the macOS
		// instructions must stay byte-identical to what they were. Compared
		// against the generator's output, not its wording.
		const contract = describeRefusalContract();
		expect(COMPUTER_USE_LOCAL_INSTRUCTIONS.endsWith(contract)).toBe(false);

		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			const windows = await import("./tools");
			const suffix = `\n\n${windows.describeRefusalContract()}`;
			expect(windows.COMPUTER_USE_LOCAL_INSTRUCTIONS.endsWith(suffix)).toBe(true);
			// Appended once, after the canvas text every platform gets, which
			// on this platform is sized for the Windows canvas.
			const lead = windows.COMPUTER_USE_LOCAL_INSTRUCTIONS.slice(0, -suffix.length);
			const canvas = computerUseCanvasForPlatform("win32");
			expect(lead.endsWith(suffix)).toBe(false);
			expect(lead).toContain(`${canvas.width}×${canvas.height}`);
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
			vi.resetModules();
		}
	});
});

// Everything above runs as the macOS toolset. Zoom exists only where the
// Windows sidecar does, so its surface is covered by loading the module with
// `process.platform` reporting win32.
describe("zoom on Windows", () => {
	type WindowsTools = typeof import("./tools");
	const WIN32_CANVAS = computerUseCanvasForPlatform("win32");

	async function loadAsWin32(): Promise<WindowsTools> {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			return await import("./tools");
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
		}
	}

	function windowsToolset(
		tools: WindowsTools,
		sidecar: ComputerUseBackend
	): {
		ctx: Context;
		callTool: (
			name: string,
			args: Record<string, unknown>
		) => ReturnType<ComputerUseMcpToolset["callTool"]>;
	} {
		const ctx = createContext();
		const instance = new tools.ComputerUseMcpToolset(sidecar);
		return { ctx, callTool: (name, args) => instance.callTool(ctx, name, args) };
	}

	/**
	 * On Windows an argument problem is a structured `invalid_arguments`
	 * refusal returned to the model, not a thrown error. Returns the refusal
	 * message so a caller can check the issue it names.
	 */
	async function expectInvalidArguments(
		call: ReturnType<ComputerUseMcpToolset["callTool"]>,
		issue: string
	): Promise<string> {
		const result = await call;
		expect(result.isError).toBe(true);
		expect(result.structuredContent).toMatchObject({
			code: "invalid_arguments",
			escalation: { recommended: "retry" },
		});
		const message = (result.structuredContent as { message: string }).message;
		expect(message).toContain(issue);
		return message;
	}

	// The region is always a canvas rectangle, so its corners keep the canvas
	// bound even though the actions' aims (below) do not.
	it("advertises computer_zoom with canvas-bounded corners", async () => {
		const tools = await loadAsWin32();
		const zoom = tools.COMPUTER_USE_MCP_TOOLS.find(tool => tool.name === "computer_zoom");
		expect(zoom).toBeDefined();
		expect(JSON.parse(zoom?.parameters ?? "{}")).toMatchObject({
			required: ["x1", "y1", "x2", "y2"],
			properties: {
				x1: { type: "integer", minimum: 0, maximum: WIN32_CANVAS.width - 1 },
				y2: { type: "integer", minimum: 0, maximum: WIN32_CANVAS.height - 1 },
			},
		});
	});

	// With a zoom_id the aim is a pixel of the zoom image, which can be up to
	// COMPUTER_USE_ZOOM_MAX_EDGE_PX on either edge — taller than the canvas
	// for a portrait zoom. A single advertised bound would have to be the
	// union of the two spaces, exact for neither, so the compact Windows
	// descriptors advertise none: the instructions carry each space's bound,
	// the zoom_id argument states the switch, and validation refuses an aim
	// outside its own space with that space named (the `it.each` below).
	it("advertises aims by type alone, leaving the two spaces' ranges to the instructions", async () => {
		const tools = await loadAsWin32();
		expect(COMPUTER_USE_ZOOM_MAX_EDGE_PX).toBeGreaterThan(WIN32_CANVAS.height);
		// The bounds themselves, from the constants the text is generated
		// from — never the wording around them.
		for (const bound of [
			WIN32_CANVAS.width - 1,
			WIN32_CANVAS.height - 1,
			COMPUTER_USE_ZOOM_MAX_EDGE_PX,
		]) {
			expect(tools.COMPUTER_USE_LOCAL_INSTRUCTIONS).toMatch(new RegExp(`\\b${bound}\\b`));
		}
		for (const name of ["computer_click", "computer_move", "computer_scroll"]) {
			const tool = tools.COMPUTER_USE_MCP_TOOLS.find(candidate => candidate.name === name);
			const { properties } = JSON.parse(tool?.parameters ?? "{}");
			expect(properties.x, name).toEqual({ type: "integer" });
			expect(properties.y, name).toEqual({ type: "integer" });
			expect(properties.zoom_id.description, name).toContain("pixels of that zoom image");
		}
		const drag = tools.COMPUTER_USE_MCP_TOOLS.find(tool => tool.name === "computer_drag");
		const { properties } = JSON.parse(drag?.parameters ?? "{}");
		for (const end of ["from", "to"]) {
			expect(properties[end].properties, end).toEqual({
				x: { type: "integer" },
				y: { type: "integer" },
			});
		}
	});

	it("passes an aim in the lower part of a tall zoom image through to the sidecar", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { ctx, callTool } = windowsToolset(tools, sidecar);
		const edge = COMPUTER_USE_ZOOM_MAX_EDGE_PX - 1;

		await callTool("computer_click", { x: 40, y: WIN32_CANVAS.height, zoom_id: "zoom-3f9a-1" });
		await callTool("computer_move", { x: edge, y: edge, zoom_id: "zoom-3f9a-1" });
		await callTool("computer_scroll", { x: 0, y: edge, zoom_id: "zoom-3f9a-1", direction: "down" });
		await callTool("computer_drag", {
			from: { x: 0, y: WIN32_CANVAS.height },
			to: { x: edge, y: edge },
			zoom_id: "zoom-3f9a-1",
		});

		expect(sidecar.click).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 40, y: WIN32_CANVAS.height },
			button: "left",
			count: 1,
			zoomId: "zoom-3f9a-1",
		});
		expect(sidecar.move).toHaveBeenCalledWith(ctx, { x: edge, y: edge }, { zoomId: "zoom-3f9a-1" });
		expect(sidecar.scroll).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 0, y: edge },
			direction: "down",
			// The Windows default: one page-reading scroll (see SCROLL_DEFAULT_TICKS).
			amount: 10,
			zoomId: "zoom-3f9a-1",
		});
		expect(sidecar.drag).toHaveBeenCalledWith(ctx, {
			button: "left",
			path: [
				{ x: 0, y: WIN32_CANVAS.height },
				{ x: edge, y: edge },
			],
			zoomId: "zoom-3f9a-1",
		});
	});

	// The wider advertised bound must not loosen canvas aims: without a zoom_id
	// the canvas is still the space, and the refusal says which space applies.
	it.each<{ name: string; args: Record<string, unknown>; issue: string }>([
		{
			name: "computer_click",
			args: { x: 10, y: WIN32_CANVAS.height },
			issue: `y: y is ${WIN32_CANVAS.height}, but without zoom_id coordinates are pixels of the 1456×840 screenshot canvas (y=0..${WIN32_CANVAS.height - 1}). To aim in a zoom image, pass its zoom_id.`,
		},
		{
			name: "computer_move",
			args: { x: WIN32_CANVAS.width, y: 10 },
			issue: `x: x is ${WIN32_CANVAS.width}, but without zoom_id coordinates are pixels of the 1456×840 screenshot canvas (x=0..${WIN32_CANVAS.width - 1}).`,
		},
		{
			name: "computer_scroll",
			args: { x: 10, y: WIN32_CANVAS.height, direction: "down" },
			issue: `y: y is ${WIN32_CANVAS.height}, but without zoom_id`,
		},
		{
			name: "computer_drag",
			args: { from: { x: 0, y: 0 }, to: { x: 5, y: WIN32_CANVAS.height } },
			issue: `to.y: y is ${WIN32_CANVAS.height}, but without zoom_id`,
		},
		{
			name: "computer_click",
			args: { x: COMPUTER_USE_ZOOM_MAX_EDGE_PX, y: 0, zoom_id: "zoom-3f9a-1" },
			issue: `x: x is ${COMPUTER_USE_ZOOM_MAX_EDGE_PX}, but with zoom_id coordinates are pixels of that zoom image, which is at most ${COMPUTER_USE_ZOOM_MAX_EDGE_PX}×${COMPUTER_USE_ZOOM_MAX_EDGE_PX} (x=0..${COMPUTER_USE_ZOOM_MAX_EDGE_PX - 1}). The computer_zoom result quotes its actual size.`,
		},
		{
			name: "computer_drag",
			args: {
				from: { x: 0, y: COMPUTER_USE_ZOOM_MAX_EDGE_PX },
				to: { x: 5, y: 5 },
				zoom_id: "zoom-3f9a-1",
			},
			issue: `from.y: y is ${COMPUTER_USE_ZOOM_MAX_EDGE_PX}, but with zoom_id`,
		},
		{ name: "computer_click", args: { x: -1, y: 0, zoom_id: "zoom-3f9a-1" }, issue: "x:" },
		{ name: "computer_click", args: { x: 1.5, y: 0, zoom_id: "zoom-3f9a-1" }, issue: "x:" },
	])("refuses $name $args as outside its coordinate space", async ({ name, args, issue }) => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { callTool } = windowsToolset(tools, sidecar);

		await expectInvalidArguments(
			callTool(name, args),
			`Invalid arguments for ${name}: ${issue}`
		);
		expect(sidecar.click).not.toHaveBeenCalled();
		expect(sidecar.move).not.toHaveBeenCalled();
		expect(sidecar.scroll).not.toHaveBeenCalled();
		expect(sidecar.drag).not.toHaveBeenCalled();
	});

	// Issues are joined with "; ", so a bound that is checked twice (schema and
	// refinement) or a message containing the separator would garble the list.
	it("reports one issue per out-of-space axis, not one per bound", async () => {
		const tools = await loadAsWin32();
		const { callTool } = windowsToolset(tools, mockSidecar());

		const message = await expectInvalidArguments(
			callTool("computer_click", {
				x: COMPUTER_USE_ZOOM_MAX_EDGE_PX + 500,
				y: WIN32_CANVAS.height + 500,
				zoom_id: "zoom-3f9a-1",
			}),
			"Invalid arguments for computer_click: x: "
		);

		const issues = message.split("; ");
		expect(issues).toHaveLength(2);
		expect(issues[0]).toMatch(/^Invalid arguments for computer_click: x: /);
		expect(issues[1]).toMatch(/^y: /);
	});

	it("offers zoom_id on exactly the coordinate actions", async () => {
		const tools = await loadAsWin32();
		const withZoomId = new Set([
			"computer_click",
			"computer_move",
			"computer_drag",
			"computer_scroll",
		]);
		for (const tool of tools.COMPUTER_USE_MCP_TOOLS) {
			const schema: { properties: Record<string, unknown>; required?: string[] } =
				JSON.parse(tool.parameters);
			expect("zoom_id" in schema.properties, tool.name).toBe(withZoomId.has(tool.name));
			// Optional everywhere: canvas coordinates remain the default.
			expect(schema.required ?? [], tool.name).not.toContain("zoom_id");
		}
	});

	it("dispatches computer_zoom to the sidecar and encodes the zoom image at its own size", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { ctx, callTool } = windowsToolset(tools, sidecar);

		const result = await callTool("computer_zoom", { x1: 700, y1: 400, x2: 819, y2: 459 });

		expect(sidecar.zoom).toHaveBeenCalledWith(ctx, { x1: 700, y1: 400, x2: 819, y2: 459 });
		expect(result.content).toEqual([
			{ type: "text", text: ZOOM_RESULT.message },
			// The zoom encoder, not the canvas one: the image is not canvas-sized.
			{ type: "image", data: "zoom-webp:zoom-bytes", mimeType: "image/webp" },
		]);
		expect(sidecar.screenshot).not.toHaveBeenCalled();
	});

	// Three zooms of 60×35, 40×20 and 47×18 canvas px in an audited session
	// came back as 0–1 KB images with nothing recognisable in them. A region
	// under the 120×60 minimum is widened around itself before it is sent —
	// so a sidecar without the rule benefits too — and the result says so.
	it("widens a region under the minimum before sending it, and tells the model", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { ctx, callTool } = windowsToolset(tools, sidecar);

		const result = await callTool("computer_zoom", { x1: 700, y1: 400, x2: 760, y2: 430 });

		// The zoom-region conformance case: 61×31 → 120×60 around it.
		expect(sidecar.zoom).toHaveBeenCalledWith(ctx, { x1: 671, y1: 386, x2: 790, y2: 445 });
		const text = result.content[0];
		expect(text.type === "text" ? text.text : "").toBe(
			`${ZOOM_RESULT.message} The requested 61×31 canvas px region was widened to the 120×60 minimum around it, so the target has its surroundings in view.`
		);

		// In a corner the widened region is shifted to stay inside the canvas.
		sidecar.zoom.mockClear();
		await callTool("computer_zoom", { x1: 1400, y1: 800, x2: 1439, y2: 819 });
		expect(sidecar.zoom).toHaveBeenCalledWith(ctx, { x1: 1336, y1: 780, x2: 1455, y2: 839 });

		// A refusal from the sidecar is passed through without the note.
		sidecar.zoom.mockResolvedValue({
			message: "Zoom region lies entirely on the letterbox padding bars.",
			isError: true,
		});
		const refused = await callTool("computer_zoom", { x1: 100, y1: 0, x2: 200, y2: 20 });
		const refusedText = refused.content[0];
		expect(refusedText.type === "text" ? refusedText.text : "").not.toContain("widened");
	});

	it.each<{ args: Record<string, unknown>; issue: string }>([
		{ args: { x1: 100, y1: 100, x2: 50, y2: 150 }, issue: "x2: (x1, y1) must be the top-left corner" },
		{ args: { x1: 100, y1: 100, x2: 150, y2: 100 }, issue: "y2: (x1, y1) must be the top-left corner" },
		// 915 wide pads to 1281, one over the output edge; 900×839 pads past
		// the patch budget. Both name the rule and the 914 px long edge.
		{ args: { x1: 0, y1: 0, x2: 914, y2: 10 }, issue: "x2: The region is 915×11; with 20% padding it does not fit the 1280 px output edge and the 1568-patch budget at the screenshot's own resolution, so it would come back no sharper than the screenshot. The long edge may be up to 914 canvas pixels" },
		{ args: { x1: 0, y1: 0, x2: 899, y2: 838 }, issue: "x2: The region is 900×839; with 20% padding" },
		{ args: { x1: 0, y1: 0, x2: 799, y2: 838 }, issue: "y2: The region is 800×839; with 20% padding" },
		{ args: { x1: 0, y1: 0, x2: WIN32_CANVAS.width, y2: 10 }, issue: "x2:" },
		{ args: { x1: 0, y1: 0, x2: 10 }, issue: "y2:" },
		{ args: { x1: 0.5, y1: 0, x2: 10, y2: 10 }, issue: "x1:" },
	])("refuses the zoom region $args before it reaches the sidecar", async ({ args, issue }) => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { callTool } = windowsToolset(tools, sidecar);

		await expectInvalidArguments(
			callTool("computer_zoom", args),
			`Invalid arguments for computer_zoom: ${issue}`
		);
		expect(sidecar.zoom).not.toHaveBeenCalled();
	});

	it("accepts the longest permitted edge, the audited 801×71 text line, and a tall region", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { ctx, callTool } = windowsToolset(tools, sidecar);

		// 914 wide (pads to exactly 1280); the height is widened to the minimum.
		await callTool("computer_zoom", { x1: 10, y1: 20, x2: 923, y2: 24 });
		expect(sidecar.zoom).toHaveBeenCalledWith(ctx, { x1: 10, y1: 0, x2: 923, y2: 59 });
		// The 801×71 line the old 728-wide cap refused (composer 24510f30, #324).
		await callTool("computer_zoom", { x1: 300, y1: 500, x2: 1100, y2: 570 });
		expect(sidecar.zoom).toHaveBeenCalledWith(ctx, { x1: 300, y1: 500, x2: 1100, y2: 570 });
		// Taller than the old 420 cap: the aspect is free.
		await callTool("computer_zoom", { x1: 0, y1: 0, x2: 699, y2: 699 });
		expect(sidecar.zoom).toHaveBeenCalledWith(ctx, { x1: 0, y1: 0, x2: 699, y2: 699 });
	});

	it("forwards zoom_id on click, move, scroll, and drag, and omits it otherwise", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { ctx, callTool } = windowsToolset(tools, sidecar);

		await callTool("computer_click", { x: 608, y: 308, zoom_id: "zoom-3f9a-1", button: "right" });
		await callTool("computer_move", { x: 1, y: 2, zoom_id: "zoom-3f9a-1" });
		await callTool("computer_scroll", { x: 3, y: 4, zoom_id: "zoom-3f9a-1", direction: "up" });
		await callTool("computer_drag", {
			from: { x: 1, y: 2 },
			to: { x: 3, y: 4 },
			zoom_id: "zoom-3f9a-1",
		});

		expect(sidecar.click).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 608, y: 308 },
			button: "right",
			count: 1,
			zoomId: "zoom-3f9a-1",
		});
		expect(sidecar.move).toHaveBeenCalledWith(ctx, { x: 1, y: 2 }, { zoomId: "zoom-3f9a-1" });
		expect(sidecar.scroll).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 3, y: 4 },
			direction: "up",
			amount: 10,
			zoomId: "zoom-3f9a-1",
		});
		expect(sidecar.drag).toHaveBeenCalledWith(ctx, {
			button: "left",
			path: [
				{ x: 1, y: 2 },
				{ x: 3, y: 4 },
			],
			zoomId: "zoom-3f9a-1",
		});

		// Without a zoom_id the calls are exactly what they were before zoom.
		await callTool("computer_click", { x: 10, y: 20 });
		await callTool("computer_move", { x: 5, y: 6 });
		expect(sidecar.click).toHaveBeenLastCalledWith(ctx, {
			coordinate: { x: 10, y: 20 },
			button: "left",
			count: 1,
		});
		expect(sidecar.click.mock.lastCall?.[1]).not.toHaveProperty("zoomId");
		expect(sidecar.move).toHaveBeenLastCalledWith(ctx, { x: 5, y: 6 });
		expect(sidecar.move.mock.lastCall).toHaveLength(2);
	});

	it("refuses an empty or non-string zoom_id", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { callTool } = windowsToolset(tools, sidecar);

		await expectInvalidArguments(
			callTool("computer_click", { x: 1, y: 2, zoom_id: "" }),
			"Invalid arguments for computer_click: zoom_id:"
		);
		await expectInvalidArguments(
			callTool("computer_click", { x: 1, y: 2, zoom_id: 7 }),
			"Invalid arguments for computer_click: zoom_id:"
		);
		expect(sidecar.click).not.toHaveBeenCalled();
	});

	it("refuses to zoom on a backend without a zoom method", async () => {
		const tools = await loadAsWin32();
		const { zoom: _unused, ...withoutZoom } = mockSidecar();
		const { callTool } = windowsToolset(tools, withoutZoom);

		await expect(callTool("computer_zoom", { x1: 0, y1: 0, x2: 10, y2: 10 })).rejects.toThrow(
			"Zoom needs the Windows computer-use sidecar"
		);
	});

	it("propagates a sidecar zoom refusal", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		sidecar.zoom.mockRejectedValue(
			new Error("Zoom region lies entirely on the letterbox padding bars")
		);
		const { callTool } = windowsToolset(tools, sidecar);

		await expect(callTool("computer_zoom", { x1: 100, y1: 0, x2: 200, y2: 20 })).rejects.toThrow(
			"letterbox padding bars"
		);
	});
});

// A Windows click, drag, typing or key-press result may carry the
// action-result inset (`inset.rs`): a 2x look around what the action did,
// shown after the full frame with its caption in between, so the model reads
// which image is which. macOS results are exactly what they were.
describe("the action-result inset on Windows", () => {
	type WindowsTools = typeof import("./tools");

	async function loadAsWin32(): Promise<WindowsTools> {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			return await import("./tools");
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
		}
	}

	const CAPTION =
		'Inset, not the full screen: canvas x 560..839, y 320..479 around the click at 2.0x the screenshot\'s scale, 560x320 px. To act on something in it, pass zoom_id "zoom-3f9a-7" with x 0..559 and y 0..319 in inset pixels; without zoom_id, coordinates are full-canvas as usual.';

	function insetResult(tool: string, caption: string | undefined): SidecarToolResult {
		return {
			message: "Clicked (700, 400) with left button (count 1). No visible change.",
			screenshot: { data: "after-bytes", mimeType: "image/png" },
			inset: { data: "inset-bytes", mimeType: "image/png" },
			structuredContent: {
				tool,
				status: "ok",
				message: "Clicked (700, 400) with left button (count 1). No visible change.",
				...(caption === undefined
					? {}
					: {
						inset: {
							zoomId: "zoom-3f9a-7",
							anchor: "point",
							canvasRegion: { x1: 560, y1: 320, x2: 839, y2: 479 },
							physicalCrop: { x: 1969, y: 1026, width: 985, height: 563 },
							width: 560,
							height: 320,
							sharpness: 2,
							magnification: 0.5685,
							tokens: 240,
							caption,
						},
					}),
			},
			isError: false,
		};
	}

	it.each([
		["computer_click", "click", { x: 700, y: 400 }],
		["computer_drag", "drag", { from: { x: 1, y: 2 }, to: { x: 3, y: 4 } }],
		["computer_key", "pressKey", { key: "Return" }],
		["computer_type", "typeText", { text: "mspaint" }],
	] as const)("shows %s's inset after the full frame, captioned, at its own size", async (name, method, args) => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		sidecar[method].mockResolvedValue(insetResult(`computer_use_${name.slice("computer_".length)}`, CAPTION));
		const instance = new tools.ComputerUseMcpToolset(sidecar);

		const result = await instance.callTool(createContext(), name, args);

		expect(result.isError).toBeUndefined();
		expect(result.content.map(item => item.type)).toEqual(["text", "image", "text", "image"]);
		const [message, frame, caption, inset] = result.content;
		expect(message).toMatchObject({ type: "text" });
		expect(message.type === "text" ? message.text : "").toContain("No visible change.");
		// The full frame goes through the canvas encoder, the inset through
		// the variable-size one: the inset is not canvas-sized.
		expect(frame).toEqual({ type: "image", data: "webp:after-bytes", mimeType: "image/webp" });
		expect(caption).toEqual({ type: "text", text: CAPTION });
		expect(inset).toEqual({ type: "image", data: "zoom-webp:inset-bytes", mimeType: "image/webp" });
	});

	it("keeps the launch hint on the result text, not on the caption", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const launch = insetResult("computer_use_click", CAPTION);
		launch.structuredContent = {
			...launch.structuredContent!,
			change: { changedPixels: 200, totalPixels: 1_223_040, fraction: 0.00016 },
			click: { target: "taskbar" },
		} as SidecarToolResult["structuredContent"];
		sidecar.click.mockResolvedValue(launch);
		const instance = new tools.ComputerUseMcpToolset(sidecar);

		const result = await instance.callTool(createContext(), "computer_click", { x: 700, y: 800 });

		expect(result.content).toHaveLength(4);
		const [message, , caption] = result.content;
		expect(message.type === "text" ? message.text : "").toContain("If this click was meant to open");
		expect(caption).toEqual({ type: "text", text: CAPTION });
	});

	// An inset image without its caption would read as a second screenshot,
	// so it is not shown at all.
	it("drops an inset the sidecar sent without a caption", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		sidecar.click.mockResolvedValue(insetResult("computer_use_click", undefined));
		const instance = new tools.ComputerUseMcpToolset(sidecar);

		const result = await instance.callTool(createContext(), "computer_click", { x: 700, y: 400 });

		expect(result.content.map(item => item.type)).toEqual(["text", "image"]);
	});

	it("shows no inset for a result that carries none", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const instance = new tools.ComputerUseMcpToolset(sidecar);

		const result = await instance.callTool(createContext(), "computer_click", { x: 700, y: 400 });

		expect(result.content).toEqual([
			{ type: "text", text: ACTION_RESULT.message },
			{ type: "image", data: "webp:after-bytes", mimeType: "image/webp" },
		]);
	});

	// The macOS module is the one loaded at the top of this file: an `inset`
	// field on a result changes nothing there.
	it("ignores an inset on macOS, where no sidecar sends one", async () => {
		const sidecar = mockSidecar();
		sidecar.click.mockResolvedValue(insetResult("computer_use_click", CAPTION));
		const { callTool } = toolset(sidecar);

		const result = await callTool("computer_click", { x: 10, y: 20 });

		expect(result.content).toEqual([
			{ type: "text", text: "Clicked (700, 400) with left button (count 1). No visible change." },
			{ type: "image", data: "webp:after-bytes", mimeType: "image/webp" },
		]);
	});
});

// A multi-point drag path is one call for a whole polyline where the Windows
// sidecar is (`drag_path.rs`); the two-point form every platform has always
// had is untouched, and macOS never sees the path argument.
describe("drag paths on Windows", () => {
	type WindowsTools = typeof import("./tools");
	const WIN32_CANVAS = computerUseCanvasForPlatform("win32");

	async function loadAsWin32(): Promise<WindowsTools> {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			return await import("./tools");
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
		}
	}

	function windowsToolset(
		tools: WindowsTools,
		sidecar: ComputerUseBackend
	): {
		ctx: Context;
		callTool: (
			name: string,
			args: Record<string, unknown>
		) => ReturnType<ComputerUseMcpToolset["callTool"]>;
	} {
		const ctx = createContext();
		const instance = new tools.ComputerUseMcpToolset(sidecar);
		return { ctx, callTool: (name, args) => instance.callTool(ctx, name, args) };
	}

	async function expectInvalidArguments(
		call: ReturnType<ComputerUseMcpToolset["callTool"]>,
		issue: string
	): Promise<string> {
		const result = await call;
		expect(result.isError).toBe(true);
		expect(result.structuredContent).toMatchObject({
			code: "invalid_arguments",
			escalation: { recommended: "retry" },
		});
		const message = (result.structuredContent as { message: string }).message;
		expect(message).toContain(issue);
		return message;
	}

	function polyline(count: number): Array<{ x: number; y: number }> {
		return Array.from({ length: count }, (_, index) => ({ x: 100 + index, y: 200 + index }));
	}

	it("advertises the path form with the sidecar's bound and neither form as required", async () => {
		const tools = await loadAsWin32();
		const drag = tools.COMPUTER_USE_MCP_TOOLS.find(tool => tool.name === "computer_drag");
		expect(drag?.description).toContain(
			`Or pass path (${COMPUTER_USE_DRAG_PATH_MIN_POINTS}–${COMPUTER_USE_DRAG_PATH_MAX_POINTS} points)`
		);
		expect(drag?.description).toContain("must stay inside the window it starts in");
		const schema: { properties: Record<string, unknown>; required?: string[] } = JSON.parse(
			drag?.parameters ?? "{}"
		);
		expect(schema.properties.path).toMatchObject({
			type: "array",
			minItems: COMPUTER_USE_DRAG_PATH_MIN_POINTS,
			maxItems: COMPUTER_USE_DRAG_PATH_MAX_POINTS,
		});
		expect(schema.required).toBeUndefined();
		// The ends are still advertised, so a model that sends them is not
		// refused for an unknown argument.
		expect(Object.keys(schema.properties)).toEqual(["from", "to", "path", "button", "zoom_id"]);
	});

	// The macOS module is the one loaded at the top of this file.
	it("keeps the macOS drag tool exactly as it was: no path, both ends required", () => {
		const drag = COMPUTER_USE_MCP_TOOLS.find(tool => tool.name === "computer_drag");
		expect(drag?.description).toBe(
			`Press the mouse button at one coordinate, drag to another, and release. Coordinates are pixels in the fixed ${CANVAS.width}×${CANVAS.height} screenshot canvas, origin (0, 0) at the top-left. Locate both points in a fresh screenshot first. Returns a screenshot taken after the drag. With an app target the result is text only; observe again before the next action.`
		);
		const schema: { properties: Record<string, unknown>; required?: string[] } = JSON.parse(
			drag?.parameters ?? "{}"
		);
		expect("path" in schema.properties).toBe(false);
		expect(schema.required).toEqual(["from", "to"]);
		expect(schema.properties.from).toMatchObject({ description: expect.stringContaining("Drag start point") });
	});

	it("forwards a path to the sidecar in order, in canvas or zoom pixels", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { ctx, callTool } = windowsToolset(tools, sidecar);
		const house = [
			{ x: 400, y: 500 },
			{ x: 400, y: 300 },
			{ x: 500, y: 200 },
			{ x: 600, y: 300 },
			{ x: 600, y: 500 },
			{ x: 400, y: 500 },
		];

		const result = await callTool("computer_drag", { path: house });
		expect(sidecar.drag).toHaveBeenCalledWith(ctx, { button: "left", path: house });
		expect(sidecar.drag.mock.lastCall?.[1]).not.toHaveProperty("zoomId");
		expect(result.isError).toBeUndefined();
		expect(result.content[0]).toEqual({ type: "text", text: ACTION_RESULT.message });

		await callTool("computer_drag", {
			path: [
				{ x: 10, y: 20 },
				{ x: 30, y: 40 },
				{ x: 50, y: WIN32_CANVAS.height + 100 },
			],
			zoom_id: "zoom-3f9a-1",
			button: "right",
		});
		expect(sidecar.drag).toHaveBeenLastCalledWith(ctx, {
			button: "right",
			path: [
				{ x: 10, y: 20 },
				{ x: 30, y: 40 },
				{ x: 50, y: WIN32_CANVAS.height + 100 },
			],
			zoomId: "zoom-3f9a-1",
		});
	});

	it("still forwards the two-point form as the same two-point path", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { ctx, callTool } = windowsToolset(tools, sidecar);

		await callTool("computer_drag", { from: { x: 1, y: 2 }, to: { x: 3, y: 4 } });
		expect(sidecar.drag).toHaveBeenCalledWith(ctx, {
			button: "left",
			path: [
				{ x: 1, y: 2 },
				{ x: 3, y: 4 },
			],
		});
	});

	it("accepts the longest permitted path and refuses one point over it before the RPC", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { ctx, callTool } = windowsToolset(tools, sidecar);

		await callTool("computer_drag", { path: polyline(COMPUTER_USE_DRAG_PATH_MAX_POINTS) });
		expect(sidecar.drag).toHaveBeenCalledWith(ctx, {
			button: "left",
			path: polyline(COMPUTER_USE_DRAG_PATH_MAX_POINTS),
		});

		sidecar.drag.mockClear();
		await expectInvalidArguments(
			callTool("computer_drag", { path: polyline(COMPUTER_USE_DRAG_PATH_MAX_POINTS + 1) }),
			`Invalid arguments for computer_drag: path: Array must contain at most ${COMPUTER_USE_DRAG_PATH_MAX_POINTS} element(s)`
		);
		await expectInvalidArguments(
			callTool("computer_drag", { path: polyline(1) }),
			`Invalid arguments for computer_drag: path: Array must contain at least ${COMPUTER_USE_DRAG_PATH_MIN_POINTS} element(s)`
		);
		expect(sidecar.drag).not.toHaveBeenCalled();
	});

	it("refuses both forms at once, and neither", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { callTool } = windowsToolset(tools, sidecar);

		await expectInvalidArguments(
			callTool("computer_drag", {
				from: { x: 1, y: 2 },
				to: { x: 3, y: 4 },
				path: polyline(3),
			}),
			"Invalid arguments for computer_drag: path: Pass either from and to, or path — not both."
		);
		await expectInvalidArguments(
			callTool("computer_drag", { from: { x: 1, y: 2 } }),
			`Invalid arguments for computer_drag: to: Required unless path is given: pass from and to, or a path of ${COMPUTER_USE_DRAG_PATH_MIN_POINTS}–${COMPUTER_USE_DRAG_PATH_MAX_POINTS} points.`
		);
		await expectInvalidArguments(
			callTool("computer_drag", { button: "left" }),
			"Invalid arguments for computer_drag: from: Required unless path is given"
		);
		expect(sidecar.drag).not.toHaveBeenCalled();
	});

	// Each point is an aim in the space the call names, and the refusal says
	// which point to correct.
	it("refuses a path point outside its coordinate space by index", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		const { callTool } = windowsToolset(tools, sidecar);

		await expectInvalidArguments(
			callTool("computer_drag", {
				path: [
					{ x: 1, y: 2 },
					{ x: 3, y: 4 },
					{ x: 5, y: WIN32_CANVAS.height },
				],
			}),
			`Invalid arguments for computer_drag: path.2.y: y is ${WIN32_CANVAS.height}, but without zoom_id coordinates are pixels of the 1456×840 screenshot canvas`
		);
		await expectInvalidArguments(
			callTool("computer_drag", {
				path: [
					{ x: COMPUTER_USE_ZOOM_MAX_EDGE_PX, y: 2 },
					{ x: 3, y: 4 },
				],
				zoom_id: "zoom-3f9a-1",
			}),
			`Invalid arguments for computer_drag: path.0.x: x is ${COMPUTER_USE_ZOOM_MAX_EDGE_PX}, but with zoom_id`
		);
		await expectInvalidArguments(
			callTool("computer_drag", { path: [{ x: 1, y: 2 }, { x: 3 }] }),
			"Invalid arguments for computer_drag: path.1.y:"
		);
		expect(sidecar.drag).not.toHaveBeenCalled();
	});

	// A sidecar refusal — a point that left the starting window — reaches the
	// model with its code and next step, like any other refusal.
	it("returns the sidecar's confinement refusal as a structured result", async () => {
		const tools = await loadAsWin32();
		// The reloaded Windows module classifies refusals with its own copy of
		// the error class, so the sidecar it is given has to throw that one.
		const { ComputerUseRefusalError: WindowsRefusalError } = await import("../backends/types");
		const sidecar = mockSidecar();
		sidecar.drag.mockRejectedValue(
			new WindowsRefusalError({
				code: "invalid_arguments",
				message:
					"path[2] = (1300, 500) is outside the window the drag starts in (canvas x 28..255, y 85..227). A path of more than two points is confined to the window under its first point, so nothing was pressed; keep every point inside that window, or split the gesture into separate drags.",
				escalation: {
					recommended: "retry",
					reason: "Nothing was actuated. Correct the argument the message names and call again.",
				},
			})
		);
		const { callTool } = windowsToolset(tools, sidecar);

		const result = await callTool("computer_drag", { path: polyline(3) });
		expect(result.isError).toBe(true);
		expect(result.structuredContent).toMatchObject({
			code: "invalid_arguments",
			escalation: { recommended: "retry" },
		});
		const text = result.content[0];
		expect(text.type === "text" ? text.text : "").toContain("path[2] = (1300, 500) is outside the window");
	});
});

// A taskbar click that launches an app shows only the icon highlight in the
// frame the action returns; the hint tells the model to wait rather than open
// the app a second way. Windows only, judged on the sidecar's structured
// content — the change it measured (`change.fraction`) and, when it
// classifies clicks, the surface (`click.target`) — never on the result
// text, which is the sidecar's to reword.
describe("taskbar launch hint", () => {
	async function loadAsWin32(): Promise<typeof import("./tools")> {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			return await import("./tools");
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
		}
	}

	// One clause per fact, as the sidecar writes it; the numbers ride in the
	// structured content.
	const MESSAGE = "Clicked (754, 799) with left button (count 1). Screen changed 1.4%.";
	const SMALL = { change: { changedPixels: 17492, totalPixels: 1223040, fraction: 0.0143 } };
	const LARGE = { change: { changedPixels: 545000, totalPixels: 1223040, fraction: 0.4456 } };
	const NONE = { change: { changedPixels: 0, totalPixels: 1223040, fraction: 0 } };

	async function clickResult(
		tools: typeof import("./tools"),
		args: Record<string, unknown>,
		structuredContent?: Record<string, unknown>
	): Promise<string> {
		const sidecar = mockSidecar();
		sidecar.click.mockResolvedValue({
			message: MESSAGE,
			screenshot: { data: "after-bytes", mimeType: "image/png" },
			isError: false,
			...(structuredContent === undefined
				? {}
				: { structuredContent: structuredContent as never }),
		});
		const toolsetInstance = new tools.ComputerUseMcpToolset(sidecar);
		const result = await toolsetInstance.callTool(createContext(), "computer_click", args);
		const text = result.content[0];
		return text.type === "text" ? text.text : "";
	}

	const HINT = "If this click was meant to open or switch to an app";

	it("appends the hint to a small-change click in the taskbar band on Windows", async () => {
		const tools = await loadAsWin32();
		const text = await clickResult(tools, { x: 754, y: 799 }, SMALL);
		expect(text.startsWith(MESSAGE)).toBe(true);
		expect(text).toContain(HINT);
		expect(text).toContain("computer_wait (1000–3000 ms)");
		// The old wording diagnosed a taskbar click; the band also holds a
		// page's bottom edge, so the hint is now a condition the model checks.
		expect(text).not.toContain("a click on the taskbar");
		// No visible change at all is the same situation.
		expect(await clickResult(tools, { x: 754, y: 799 }, NONE)).toContain(HINT);
	});

	it("stays quiet when the click was elsewhere, when much changed, or when aiming in a zoom image", async () => {
		const tools = await loadAsWin32();
		expect(await clickResult(tools, { x: 538, y: 374 }, SMALL)).toBe(MESSAGE);
		expect(await clickResult(tools, { x: 754, y: 799 }, LARGE)).toBe(MESSAGE);
		expect(await clickResult(tools, { x: 754, y: 799, zoom_id: "zoom-3f9a-1" }, SMALL)).toBe(
			MESSAGE
		);
	});

	// A sidecar that does not measure the change (before the settle work)
	// gives the hint nothing to judge; it stays out rather than guessing from
	// the text, whatever the text says.
	it("is a no-op for a sidecar that sends no change measure", async () => {
		const tools = await loadAsWin32();
		expect(await clickResult(tools, { x: 754, y: 799 })).toBe(MESSAGE);
		expect(await clickResult(tools, { x: 754, y: 799 }, { click: { target: "taskbar" } })).toBe(
			MESSAGE
		);
		expect(await clickResult(tools, { x: 754, y: 799 }, { change: { fraction: "1.43%" } })).toBe(
			MESSAGE
		);
	});

	// A sidecar that classifies the click's surface (`structuredContent.click.
	// target`) replaces the band: the taskbar, Start and the desktop launch
	// wherever the click was aimed, including through a zoom image, and a
	// window does not, however low on the canvas it sits.
	it("keys on the sidecar's click.target when it sends one", async () => {
		const tools = await loadAsWin32();
		for (const target of ["taskbar", "start", "desktop"]) {
			expect(
				await clickResult(tools, { x: 538, y: 374 }, { ...SMALL, click: { target } }),
				target
			).toContain(HINT);
			expect(
				await clickResult(
					tools,
					{ x: 40, y: 900, zoom_id: "zoom-3f9a-1" },
					{ ...NONE, click: { target } }
				),
				`${target} through a zoom`
			).toContain(HINT);
		}
		expect(
			await clickResult(tools, { x: 754, y: 799 }, { ...SMALL, click: { target: "window" } })
		).toBe(MESSAGE);
		// Much changed: the app is visibly there, whatever the surface.
		expect(
			await clickResult(tools, { x: 754, y: 799 }, { ...LARGE, click: { target: "taskbar" } })
		).toBe(MESSAGE);
		// A target this build does not know falls back to the band.
		expect(
			await clickResult(tools, { x: 754, y: 799 }, { ...SMALL, click: { target: "tray" } })
		).toContain(HINT);
		expect(
			await clickResult(tools, { x: 538, y: 374 }, { ...SMALL, click: { target: "tray" } })
		).toBe(MESSAGE);
	});

	it("reads change.fraction and click.target defensively", () => {
		const result = (structuredContent: unknown): SidecarToolResult =>
			({ message: "", isError: false, structuredContent }) as never;
		expect(changeFraction(result(SMALL))).toBeCloseTo(0.0143);
		expect(changeFraction(result(NONE))).toBe(0);
		expect(changeFraction(result({ change: { fraction: 1 } }))).toBe(1);
		expect(changeFraction(result({ change: { fraction: 1.43 } }))).toBeUndefined();
		expect(changeFraction(result({ change: { fraction: -0.1 } }))).toBeUndefined();
		expect(changeFraction(result({ change: { fraction: Number.NaN } }))).toBeUndefined();
		expect(changeFraction(result({ change: { fraction: "0.0143" } }))).toBeUndefined();
		expect(changeFraction(result({ change: null }))).toBeUndefined();
		expect(changeFraction(result({}))).toBeUndefined();
		expect(changeFraction(result(undefined))).toBeUndefined();
		expect(clickTarget(result({ click: { target: "taskbar" } }))).toBe("taskbar");
		expect(clickTarget(result({ click: { target: "window" } }))).toBe("window");
		expect(clickTarget(result({ click: { target: 7 } }))).toBeUndefined();
		expect(clickTarget(result({ click: "taskbar" }))).toBeUndefined();
		expect(clickTarget(result({ click: null }))).toBeUndefined();
		expect(clickTarget(result({}))).toBeUndefined();
		expect(clickTarget(result(undefined))).toBeUndefined();
	});

	it("is not applied off Windows", async () => {
		const sidecar = mockSidecar();
		sidecar.click.mockResolvedValue({
			message: MESSAGE,
			screenshot: { data: "after-bytes", mimeType: "image/png" },
			isError: false,
			structuredContent: SMALL as never,
		});
		const { callTool } = toolset(sidecar);
		const result = await callTool("computer_click", { x: 754, y: 790 });
		const text = result.content[0];
		expect(text.type === "text" ? text.text : "").toBe(MESSAGE);
	});
});

// The lease tools are the model's to call only where the lease gates input
// (macOS, exercised by everything above). On Windows the sidecar shows the
// on-screen presence on the first input and hides it once the client goes
// quiet, so a Windows model is not offered two tools that each cost a turn
// and do nothing it needs. A live session (Cursor 3.21.0-pre.38) paid about
// 13 s of 208 s for them.
describe("remote-control lease tools on Windows", () => {
	const LEASE_TOOL_NAMES = ["computer_start_control", "computer_release_control"];

	async function loadAsWin32(): Promise<typeof import("./tools")> {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			return await import("./tools");
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
		}
	}

	it("advertises neither lease tool, and its instructions never ask for one", async () => {
		const windows = await loadAsWin32();
		const names = windows.COMPUTER_USE_MCP_TOOLS.map(tool => tool.name);
		for (const name of LEASE_TOOL_NAMES) {
			expect(names).not.toContain(name);
		}
		// The rest of the Windows session is intact.
		expect(names).toEqual(
			expect.arrayContaining([
				"computer_screenshot",
				"computer_zoom",
				"computer_click",
				"computer_type",
				"computer_key",
				"computer_scroll",
				"computer_wait",
			])
		);
		// Neither the compiled Windows body nor the local text (with its
		// refusal-contract guidance) may send the model to a tool it lacks.
		for (const text of [
			windows.COMPUTER_USE_FALLBACK_INSTRUCTIONS,
			windows.COMPUTER_USE_LOCAL_INSTRUCTIONS,
		]) {
			expect(text).not.toMatch(/computer_(start|release)_control/);
		}
	});

	// The lease is the client's: the toolset takes control on the turn's
	// first input action (not for the screenshot) and releases it when the
	// turn ends, so the model never has to. The session opens with the
	// screenshot: Windows advertises no permission probe either.
	it("runs screenshot and actions with the toolset taking the lease on the first input", async () => {
		const windows = await loadAsWin32();
		const sidecar = mockSidecar();
		const instance = new windows.ComputerUseMcpToolset(sidecar);
		const ctx = createContext();

		const screenshot = await instance.callTool(ctx, "computer_screenshot", {});
		expect(sidecar.startControl).not.toHaveBeenCalled();
		const click = await instance.callTool(ctx, "computer_click", { x: 10, y: 20 });
		expect(sidecar.startControl).toHaveBeenCalledOnce();
		const typed = await instance.callTool(ctx, "computer_type", { text: "hello" });
		const key = await instance.callTool(ctx, "computer_key", { key: "Return" });

		for (const result of [screenshot, click, typed, key]) {
			expect(result.isError).not.toBe(true);
		}
		expect(sidecar.checkPermissions).not.toHaveBeenCalled();
		expect(sidecar.screenshot).toHaveBeenCalledOnce();
		expect(sidecar.click).toHaveBeenCalledWith(
			ctx,
			expect.objectContaining({ coordinate: { x: 10, y: 20 }, button: "left", count: 1 })
		);
		expect(sidecar.typeText).toHaveBeenCalledWith(ctx, "hello");
		expect(sidecar.pressKey).toHaveBeenCalledWith(ctx, "Return");
		// One start for the turn, and no release: that is the turn end's.
		expect(sidecar.startControl).toHaveBeenCalledOnce();
		expect(sidecar.releaseControl).not.toHaveBeenCalled();
	});

	// A model that remembers the tools from another platform gets the routed
	// refusal, not a thrown error, and the sidecar is never asked to lease.
	it("refuses a lease call structurally as an unknown tool", async () => {
		const windows = await loadAsWin32();
		const sidecar = mockSidecar();
		const instance = new windows.ComputerUseMcpToolset(sidecar);
		const ctx = createContext();

		for (const name of LEASE_TOOL_NAMES) {
			const result = await instance.callTool(ctx, name, {});
			expect(result.isError).toBe(true);
			expect(result.structuredContent).toMatchObject({
				code: "unknown_tool",
				escalation: { recommended: "use_different_tool" },
			});
		}
		expect(sidecar.startControl).not.toHaveBeenCalled();
		expect(sidecar.releaseControl).not.toHaveBeenCalled();
	});

	// The macOS toolset above is loaded once for the whole file; this pins the
	// split itself, so a gate that drifts to "nowhere" fails here and not only
	// in the descriptor snapshot.
	it("keeps both lease tools on macOS", () => {
		const names = COMPUTER_USE_MCP_TOOLS.map(tool => tool.name);
		for (const name of LEASE_TOOL_NAMES) {
			expect(names).toContain(name);
		}
	});
});

// The schemas drop keys they do not declare. After a context summary took the
// schemas out of the model's context in the audited session, computer_scroll
// {"ticks": 6} ran as the default scroll with nothing said, five times over
// (84 s, once the wrong way). On Windows an argument the tool does not
// advertise is refused with the advertised ones named; macOS keeps dropping
// them, by design (its remote mode accepts arguments its descriptors do not
// show) and its tests below prove valid calls are untouched either way.
describe("unknown arguments", () => {
	async function loadAsWin32(): Promise<typeof import("./tools")> {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			return await import("./tools");
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
		}
	}

	it("refuses an argument the Windows tool does not advertise, naming the ones it does", async () => {
		const windows = await loadAsWin32();
		const sidecar = mockSidecar();
		const instance = new windows.ComputerUseMcpToolset(sidecar);
		const ctx = createContext();

		const result = await instance.callTool(ctx, "computer_scroll", { x: 5, y: 6, ticks: 6 });

		expect(result.isError).toBe(true);
		expect(result.structuredContent).toMatchObject({
			code: "invalid_arguments",
			escalation: { recommended: "retry" },
		});
		const message =
			result.structuredContent?.code === "invalid_arguments" ? result.structuredContent.message : "";
		expect(message).toBe(
			'Invalid arguments for computer_scroll: unknown argument "ticks"; the arguments of computer_scroll are "x", "y", "direction", "amount", "zoom_id".'
		);
		// Nothing ran: the audited session scrolled the default amount instead.
		expect(sidecar.scroll).not.toHaveBeenCalled();
	});

	it("names every unknown argument, and says when a tool takes none", async () => {
		const windows = await loadAsWin32();
		const sidecar = mockSidecar();
		const instance = new windows.ComputerUseMcpToolset(sidecar);
		const ctx = createContext();

		const several = await instance.callTool(ctx, "computer_click", {
			x: 1,
			y: 2,
			ticks: 3,
			speed: "fast",
		});
		const severalMessage =
			several.structuredContent?.code === "invalid_arguments" ? several.structuredContent.message : "";
		expect(severalMessage).toContain('unknown arguments "ticks", "speed"');
		expect(severalMessage).toContain('the arguments of computer_click are "x", "y", "button", "count", "zoom_id".');

		const none = await instance.callTool(ctx, "computer_screenshot", { region: "all" });
		const noneMessage =
			none.structuredContent?.code === "invalid_arguments" ? none.structuredContent.message : "";
		expect(noneMessage).toBe(
			'Invalid arguments for computer_screenshot: unknown argument "region"; computer_screenshot takes no arguments.'
		);
		expect(sidecar.click).not.toHaveBeenCalled();
		expect(sidecar.screenshot).not.toHaveBeenCalled();
	});

	it("checks the advertised names, so every Windows tool's valid list is exactly its schema's properties", async () => {
		const windows = await loadAsWin32();
		const sidecar = mockSidecar();
		const instance = new windows.ComputerUseMcpToolset(sidecar);
		for (const tool of windows.COMPUTER_USE_MCP_TOOLS) {
			const advertised = Object.keys(JSON.parse(tool.parameters).properties ?? {});
			const result = await instance.callTool(createContext(), tool.name, { nonsense: 1 });
			const message =
				result.structuredContent?.code === "invalid_arguments" ? result.structuredContent.message : "";
			expect(message, tool.name).toContain(
				advertised.length === 0
					? `${tool.name} takes no arguments.`
					: `the arguments of ${tool.name} are ${advertised.map(key => `"${key}"`).join(", ")}.`
			);
		}
	});

	it("leaves valid Windows calls exactly as they were", async () => {
		const windows = await loadAsWin32();
		const sidecar = mockSidecar();
		const instance = new windows.ComputerUseMcpToolset(sidecar);
		const ctx = createContext();

		const result = await instance.callTool(ctx, "computer_scroll", {
			x: 5,
			y: 6,
			direction: "up",
			amount: 4,
		});
		expect(result.isError).not.toBe(true);
		expect(sidecar.scroll).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 5, y: 6 },
			direction: "up",
			amount: 4,
		});
	});

	it("keeps dropping unknown arguments on macOS, where the descriptors and the schemas differ by design", async () => {
		// This module is the macOS toolset. The same call that Windows refuses
		// runs as it always did, with the stray key dropped.
		const sidecar = mockSidecar();
		const { ctx, callTool } = toolset(sidecar);
		const result = await callTool("computer_scroll", { x: 5, y: 6, ticks: 6 });
		expect(result.isError).not.toBe(true);
		expect(sidecar.scroll).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 5, y: 6 },
			direction: "down",
			amount: 3,
		});
		// An argument the macOS descriptor does not show but the schema
		// accepts is still accepted: zoom_id is dropped, not refused.
		sidecar.click.mockClear();
		const zoomed = await callTool("computer_click", { x: 1, y: 2, zoom_id: "zoom-3f9a-1" });
		expect(zoomed.isError).not.toBe(true);
		expect(sidecar.click).toHaveBeenCalledWith(ctx, {
			coordinate: { x: 1, y: 2 },
			button: "left",
			count: 1,
		});
	});
});

// The Windows scroll default from the 2026-09-13 session audit: after a
// context summary dropped the schemas the model scrolled 3–6 ticks at a time,
// so an omitted amount now reads a page on Windows. What matters is that the
// number the descriptor promises is the number the sidecar receives, on each
// platform; the wording itself is the fixture's to pin.
describe("the scroll default", () => {
	async function loadAsWin32(): Promise<typeof import("./tools")> {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			return await import("./tools");
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
		}
	}

	/** The default the descriptor states for an omitted `amount`. */
	function statedDefault(tools: readonly { name: string; parameters: string }[]): number {
		const scroll = tools.find(tool => tool.name === "computer_scroll");
		const description: string = JSON.parse(scroll?.parameters ?? "{}").properties.amount.description;
		const stated = /Defaults to (\d+)\./.exec(description);
		expect(stated, description).not.toBeNull();
		return Number(stated?.[1]);
	}

	/** The amount the sidecar receives when the model omits it. */
	async function dispatchedDefault(
		toolset: { callTool: (ctx: Context, name: string, args: Record<string, unknown>) => Promise<unknown> },
		sidecar: MockSidecar
	): Promise<number> {
		await toolset.callTool(createContext(), "computer_scroll", { x: 5, y: 6 });
		const [, call] = sidecar.scroll.mock.calls[0] ?? [];
		return (call as { amount: number }).amount;
	}

	it("is a page on Windows, three on macOS, and the descriptor states the one that runs", async () => {
		const windows = await loadAsWin32();
		const windowsSidecar = mockSidecar();
		const onWindows = await dispatchedDefault(
			new windows.ComputerUseMcpToolset(windowsSidecar),
			windowsSidecar
		);
		expect(onWindows).toBe(10);
		expect(statedDefault(windows.COMPUTER_USE_MCP_TOOLS)).toBe(onWindows);

		const macSidecar = mockSidecar();
		const onMac = await dispatchedDefault(new ComputerUseMcpToolset(macSidecar), macSidecar);
		expect(onMac).toBe(3);
		expect(statedDefault(COMPUTER_USE_MCP_TOOLS)).toBe(onMac);
	});
});

// The Windows sidecar needs no permission and always answered granted, so
// the probe bought the model nothing there but the sidecar's cold launch,
// which the first screenshot hosts just as well; a live session paid three
// model turns plus the tool hooks for it.
describe("the permission probe on Windows", () => {
	const PROBE = "computer_check_permissions";

	async function loadAsWin32(): Promise<typeof import("./tools")> {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			return await import("./tools");
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
		}
	}

	// Checked as a relationship between the advertised tools and the text,
	// never against the text's wording: the instructions may name only
	// tools the platform advertises, so a bullet that outlives its tool —
	// or a tool dropped without its bullet — fails here whatever the prose.
	it("is not advertised, and the Windows instructions name no tool Windows lacks", async () => {
		const windows = await loadAsWin32();
		const advertised = new Set(windows.COMPUTER_USE_MCP_TOOLS.map(tool => tool.name));
		expect(advertised.has(PROBE)).toBe(false);
		const named = new Set<string>();
		for (const text of [
			windows.COMPUTER_USE_FALLBACK_INSTRUCTIONS,
			windows.COMPUTER_USE_LOCAL_INSTRUCTIONS,
		]) {
			for (const [name] of text.matchAll(/\bcomputer_[a-z_]+/g)) {
				named.add(name);
			}
		}
		expect(named.has(PROBE)).toBe(false);
		// The text still guides the model to tools it has.
		expect(named.size).toBeGreaterThan(0);
		for (const name of named) {
			expect(advertised.has(name), `${name} is named but not advertised`).toBe(true);
		}
	});

	it("refuses a probe call structurally as an unknown tool, without asking the sidecar", async () => {
		const windows = await loadAsWin32();
		const sidecar = mockSidecar();
		const instance = new windows.ComputerUseMcpToolset(sidecar);

		const result = await instance.callTool(createContext(), PROBE, {});

		expect(result.isError).toBe(true);
		expect(result.structuredContent).toMatchObject({
			code: "unknown_tool",
			escalation: { recommended: "use_different_tool" },
		});
		expect(sidecar.checkPermissions).not.toHaveBeenCalled();
	});

	// The cold launch moved from the probe to the screenshot, and so did its
	// failure: the model reads the same refusal — code, text, escalation —
	// from computer_screenshot on Windows that computer_check_permissions
	// gives it on macOS when the sidecar cannot be started.
	it("surfaces a launch failure on the first screenshot exactly as the probe did", async () => {
		const refusal = {
			code: "sidecar_unavailable",
			message:
				"The Cursor Computer Use sidecar was not found. Reinstall Cursor or run from a signed build.",
			escalation: {
				recommended: "ask_user",
				reason: "The sidecar has to be present before any computer-use tool can run.",
			},
		} as const;
		const windows = await loadAsWin32();
		// The reloaded Windows module classifies refusals with its own copy of
		// the error class, so the sidecar it is given has to throw that one.
		const { ComputerUseRefusalError: WindowsRefusalError } = await import(
			"../backends/types"
		);
		const windowsSidecar = mockSidecar();
		windowsSidecar.screenshot.mockRejectedValue(new WindowsRefusalError(refusal));
		const macSidecar = mockSidecar();
		macSidecar.checkPermissions.mockRejectedValue(new ComputerUseRefusalError(refusal));

		const fromScreenshot = await new windows.ComputerUseMcpToolset(windowsSidecar).callTool(
			createContext(),
			"computer_screenshot",
			{}
		);
		const fromProbe = await new ComputerUseMcpToolset(macSidecar).callTool(
			createContext(),
			PROBE,
			{}
		);

		expect(fromScreenshot.isError).toBe(true);
		expect(fromScreenshot.structuredContent).toEqual(refusal);
		expect(fromScreenshot).toEqual(fromProbe);
	});

	// The macOS toolset above is loaded once for the whole file; this pins the
	// split itself.
	it("stays advertised on macOS", () => {
		expect(COMPUTER_USE_MCP_TOOLS.map(tool => tool.name)).toContain(PROBE);
	});
});

// The batch exists only where the Windows sidecar does, and its descriptor is
// listed only when the caller says so — the extension's answer from the
// `windows_computer_use_batch` Statsig gate at the moment of listing — so it
// ships dark: the default listing is byte for byte what it was.
describe("the batch on Windows", () => {
	type WindowsTools = typeof import("./tools");

	async function loadAsWin32(): Promise<WindowsTools> {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			return await import("./tools");
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
		}
	}

	const BATCH_RESULT: SidecarToolResult = {
		message:
			"Ran all 3 steps.\n1. click [changed 0.4%]: Clicked.\n2. click [changed 1.2%]: Clicked.\n3. drag [changed 2.0%]: Dragged.",
		screenshot: { data: "end-frame-bytes", mimeType: "image/png" },
		isError: false,
		structuredContent: {
			tool: "computer_use_batch",
			status: "ok",
			message: "Ran all 3 steps.",
			batch: {
				planned: 3,
				ran: 3,
				steps: [],
				stop: null,
				endFrame: "last_step",
			},
		},
	};

	type BatchSidecar = MockSidecar & {
		batch: Mock<NonNullable<ComputerUseBackend["batch"]>>;
	};

	function batchSidecar(): BatchSidecar {
		return {
			...mockSidecar(),
			batch: vi
				.fn<NonNullable<ComputerUseBackend["batch"]>>()
				.mockResolvedValue(BATCH_RESULT),
		};
	}

	/**
	 * A Windows toolset handed the batch gate — on unless the test says
	 * otherwise — as the extension hands it the read the listing makes.
	 */
	function windowsToolset(
		tools: WindowsTools,
		sidecar: ComputerUseBackend,
		batch: () => Promise<boolean> = () => Promise.resolve(true)
	): {
		ctx: Context;
		callTool: (
			name: string,
			args: Record<string, unknown>
		) => ReturnType<ComputerUseMcpToolset["callTool"]>;
	} {
		const ctx = createContext();
		const instance = new tools.ComputerUseMcpToolset(sidecar, { batch });
		return { ctx, callTool: (name, args) => instance.callTool(ctx, name, args) };
	}

	async function expectInvalidArguments(
		call: ReturnType<ComputerUseMcpToolset["callTool"]>,
		issue: string
	): Promise<string> {
		const result = await call;
		expect(result.isError).toBe(true);
		expect(result.structuredContent).toMatchObject({
			code: "invalid_arguments",
			escalation: { recommended: "retry" },
		});
		const message = (result.structuredContent as { message: string }).message;
		expect(message).toContain(issue);
		return message;
	}

	const click = (x: number, y: number) => ({ tool: "computer_click", args: { x, y } });
	const key = (value: string) => ({ tool: "computer_key", args: { key: value } });

	it("is listed only when asked for, and then last, with the step tools and caps in its schema", async () => {
		const tools = await loadAsWin32();
		expect(tools.COMPUTER_USE_MCP_TOOLS.map(tool => tool.name)).not.toContain("computer_batch");
		expect(tools.computerUseMcpTools({ batch: false }).map(tool => tool.name)).not.toContain(
			"computer_batch"
		);
		const listed = tools.computerUseMcpTools({ batch: true });
		expect(listed.map(tool => tool.name)).toEqual([
			...tools.COMPUTER_USE_MCP_TOOLS.map(tool => tool.name),
			"computer_batch",
		]);
		const batch = listed.find(tool => tool.name === "computer_batch");
		const schema: {
			properties: Record<string, { items?: { properties: Record<string, unknown>; required?: string[] } } & Record<string, unknown>>;
			required?: string[];
		} = JSON.parse(batch?.parameters ?? "{}");
		expect(schema.required).toEqual(["steps"]);
		expect(schema.properties.steps).toMatchObject({ type: "array", minItems: 1, maxItems: 8 });
		// The caps and every optional flag the schema declares are named in
		// the description — the model's one source for what they mean.
		const optionalFlags = [
			...Object.keys(schema.properties).filter(key => !(schema.required ?? []).includes(key)),
			...Object.keys(schema.properties.steps.items?.properties ?? {}).filter(
				key => !(schema.properties.steps.items?.required ?? []).includes(key)
			),
		];
		expect(optionalFlags).toEqual(["allow_destructive", "expect_change"]);
		for (const flag of optionalFlags) {
			expect(batch?.description, flag).toContain(flag);
		}
		for (const cap of [COMPUTER_USE_BATCH_MAX_STEPS, COMPUTER_USE_BATCH_MAX_KEYBOARD_STEPS]) {
			expect(batch?.description).toMatch(new RegExp(`\\b${cap}\\b`));
		}
		expect(schema.properties.steps.items?.properties.tool).toEqual({
			type: "string",
			enum: [
				"computer_click",
				"computer_drag",
				"computer_key",
				"computer_type",
				"computer_scroll",
				"computer_move",
			],
		});
		expect(schema.properties.steps.items?.required).toEqual(["tool", "args"]);
		expect(Object.keys(schema.properties)).toEqual(["steps", "allow_destructive"]);
	});

	// The macOS module is the one loaded at the top of this file: no batch,
	// asked for or not, and no word of one anywhere in the surface.
	it("does not exist on macOS, even when asked for", () => {
		for (const descriptors of [
			COMPUTER_USE_MCP_TOOLS,
			computerUseMcpTools({ batch: true }),
			computerUseMcpTools({ companionDefault: false, batch: true }),
		]) {
			expect(descriptors.map(tool => tool.name)).not.toContain("computer_batch");
			for (const tool of descriptors) {
				expect(tool.description.toLowerCase(), tool.name).not.toContain("batch");
				expect(tool.parameters.toLowerCase(), tool.name).not.toContain("batch");
			}
		}
		expect(COMPUTER_USE_LOCAL_INSTRUCTIONS.toLowerCase()).not.toContain("batch");
	});

	// The descriptor rides in the same GetDynamicTools payload as the rest of
	// the Windows listing, which the runtime answers inline only under
	// 12 000 bytes (see the listing test above). Listed, the batch costs
	// what is pinned here (2 133 bytes when written); the default listing is
	// the fixture's and pays nothing. Turning the gate on therefore needs
	// that much head room in the listing — today it does not have it, and a
	// listing over the limit is spilled to a file the model reads back (one
	// extra round trip, once per listing) — so the number is the enablement
	// precondition, kept from growing here.
	const BATCH_DESCRIPTOR_BUDGET_BYTES = 2_200;

	it("costs the listing a bounded number of bytes when listed, and nothing when not", async () => {
		const tools = await loadAsWin32();
		const sanitize = (text: string): string =>
			text
				.replace(/[\u0000-\u001F\u007F]/g, " ")
				.replace(/\s+/g, " ")
				.trim();
		const payloadBytes = (descriptors: readonly { name: string; description: string; parameters: string }[]): number =>
			Buffer.byteLength(
				JSON.stringify(
					{
						namespace: tools.COMPUTER_USE_MCP_SERVER_ID,
						namespaceStatus: "connected",
						namespaceDescription: sanitize(
							tools.composeComputerUseInstructions({
								local: tools.COMPUTER_USE_LOCAL_INSTRUCTIONS,
								body: tools.COMPUTER_USE_FALLBACK_INSTRUCTIONS,
							})
						),
						tools: [...descriptors]
							.map(tool => ({
								tool: tool.name,
								description: sanitize(tool.description),
								inputSchema: JSON.parse(tool.parameters) as unknown,
							}))
							.sort((a, b) => a.tool.localeCompare(b.tool)),
					},
					null,
					2
				),
				"utf8"
			);
		const dark = payloadBytes(tools.computerUseMcpTools({ batch: false }));
		const listed = payloadBytes(tools.computerUseMcpTools({ batch: true }));
		expect(dark).toBe(payloadBytes(tools.COMPUTER_USE_MCP_TOOLS));
		expect(
			listed - dark,
			`the batch descriptor costs ${listed - dark} bytes; listed, the Windows listing is ${listed} bytes`
		).toBeLessThanOrEqual(BATCH_DESCRIPTOR_BUDGET_BYTES);
	});

	it("runs each step as the lone tool would have sent it, and returns the sidecar's report with the end frame", async () => {
		const tools = await loadAsWin32();
		const sidecar = batchSidecar();
		const { ctx, callTool } = windowsToolset(tools, sidecar);

		const result = await callTool("computer_batch", {
			steps: [
				{ tool: "computer_click", args: { x: 100, y: 200 }, expect_change: true },
				{ tool: "computer_click", args: { x: 300, y: 400, button: "right", count: 2, zoom_id: "zoom-3f9a-1" } },
				{ tool: "computer_drag", args: { from: { x: 1, y: 2 }, to: { x: 3, y: 4 } } },
				{ tool: "computer_type", args: { text: "hello" } },
				{ tool: "computer_key", args: { key: "ctrl+s" } },
				{ tool: "computer_scroll", args: { x: 5, y: 6 } },
			],
		});

		expect(sidecar.batch).toHaveBeenCalledTimes(1);
		expect(sidecar.batch).toHaveBeenCalledWith(ctx, {
			allowDestructive: false,
			steps: [
				{
					name: "computer_use_click",
					arguments: { x: 100, y: 200, button: "left", count: 1 },
					expectChange: true,
				},
				{
					name: "computer_use_click",
					arguments: { x: 300, y: 400, button: "right", count: 2, zoom_id: "zoom-3f9a-1" },
					expectChange: false,
				},
				{
					name: "computer_use_drag",
					arguments: { button: "left", path: [{ x: 1, y: 2 }, { x: 3, y: 4 }] },
					expectChange: false,
				},
				{ name: "computer_use_typing", arguments: { value: "hello" }, expectChange: false },
				{ name: "computer_use_press_key", arguments: { key: "ctrl+s" }, expectChange: false },
				{
					name: "computer_use_scroll",
					arguments: { x: 5, y: 6, direction: "down", amount: 10 },
					expectChange: false,
				},
			],
		});
		// The lone tools were not called: the sidecar ran the steps.
		expect(sidecar.click).not.toHaveBeenCalled();
		expect(sidecar.drag).not.toHaveBeenCalled();
		expect(sidecar.typeText).not.toHaveBeenCalled();
		expect(sidecar.pressKey).not.toHaveBeenCalled();
		expect(sidecar.scroll).not.toHaveBeenCalled();
		// The batch is an input action: it takes the turn's lease like a click.
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);
		expect(result.isError).toBeUndefined();
		expect(result.content).toEqual([
			{ type: "text", text: BATCH_RESULT.message },
			{ type: "image", data: "webp:end-frame-bytes", mimeType: "image/webp" },
		]);
		expect(encodeModelScreenshotMock).toHaveBeenCalledWith(BATCH_RESULT.screenshot);

		await callTool("computer_batch", {
			steps: [{ tool: "computer_move", args: { x: 7, y: 8, zoom_id: "zoom-3f9a-2" } }, key("Delete")],
			allow_destructive: true,
		});
		expect(sidecar.batch).toHaveBeenLastCalledWith(ctx, {
			allowDestructive: true,
			steps: [
				{ name: "computer_use_mouse_move", arguments: { x: 7, y: 8, zoom_id: "zoom-3f9a-2" }, expectChange: false },
				{ name: "computer_use_press_key", arguments: { key: "Delete" }, expectChange: false },
			],
		});

		// A drag step takes the path form the lone tool takes on Windows.
		const house = [
			{ x: 400, y: 500 },
			{ x: 400, y: 300 },
			{ x: 500, y: 200 },
		];
		await callTool("computer_batch", { steps: [{ tool: "computer_drag", args: { path: house, button: "right" } }] });
		expect(sidecar.batch).toHaveBeenLastCalledWith(ctx, {
			allowDestructive: false,
			steps: [{ name: "computer_use_drag", arguments: { button: "right", path: house }, expectChange: false }],
		});
		await expectInvalidArguments(
			callTool("computer_batch", {
				steps: [{ tool: "computer_drag", args: { path: house, from: { x: 1, y: 1 }, to: { x: 2, y: 2 } } }],
			}),
			"steps[0] (computer_drag): path: Pass either from and to, or path"
		);
	});

	it("refuses a batch over the cap for its mix before anything runs", async () => {
		const tools = await loadAsWin32();
		const sidecar = batchSidecar();
		const { callTool } = windowsToolset(tools, sidecar);
		const clicks = (count: number) => Array.from({ length: count }, (_, index) => click(index, index));
		const keys = (count: number) => Array.from({ length: count }, () => key("Return"));

		await expectInvalidArguments(
			callTool("computer_batch", { steps: clicks(7) }),
			"steps: 7 steps; a batch may have at most 6 when any step is computer_click, computer_drag, computer_scroll or computer_move (8 when every step is computer_key or computer_type)"
		);
		await expectInvalidArguments(callTool("computer_batch", { steps: keys(9) }), "steps:");
		// One pointer step among seven keys brings the pointer cap back.
		await expectInvalidArguments(
			callTool("computer_batch", { steps: [...keys(7), click(1, 1)] }),
			"steps: 8 steps; a batch may have at most 6"
		);
		await expectInvalidArguments(callTool("computer_batch", { steps: [] }), "steps:");
		await expectInvalidArguments(callTool("computer_batch", {}), "steps:");
		expect(sidecar.batch).not.toHaveBeenCalled();

		// The caps themselves run.
		await callTool("computer_batch", { steps: clicks(6) });
		await callTool("computer_batch", { steps: keys(8) });
		expect(sidecar.batch).toHaveBeenCalledTimes(2);
	});

	it("refuses a step that names a non-step tool, an unknown argument, or a malformed argument, by index", async () => {
		const tools = await loadAsWin32();
		const sidecar = batchSidecar();
		const { callTool } = windowsToolset(tools, sidecar);

		await expectInvalidArguments(
			callTool("computer_batch", {
				steps: [click(1, 1), { tool: "computer_zoom", args: { x1: 0, y1: 0, x2: 10, y2: 10 } }],
			}),
			"steps.1.tool:"
		);
		await expectInvalidArguments(
			callTool("computer_batch", { steps: [{ tool: "computer_batch", args: { steps: [] } }] }),
			"steps.0.tool:"
		);
		// The lone tool's advertised keys and schema judge the step's args,
		// worded as the lone tool would word it, at the step's index.
		await expectInvalidArguments(
			callTool("computer_batch", { steps: [click(1, 1), { tool: "computer_click", args: { x: 1, y: 2, foo: 3 } }] }),
			'steps[1] (computer_click): unknown argument "foo"; the arguments of computer_click are "x", "y", "button", "count", "zoom_id".'
		);
		await expectInvalidArguments(
			callTool("computer_batch", { steps: [{ tool: "computer_click", args: { x: 1 } }] }),
			"steps[0] (computer_click): y:"
		);
		await expectInvalidArguments(
			callTool("computer_batch", { steps: [{ tool: "computer_key", args: { key: "" } }] }),
			"steps[0] (computer_key): key:"
		);
		await expectInvalidArguments(
			callTool("computer_batch", { steps: [click(1, 1)], allow_destructive: "yes" }),
			"allow_destructive:"
		);
		await expectInvalidArguments(
			callTool("computer_batch", { steps: [{ tool: "computer_click", args: { x: 1, y: 1 }, expect_change: "yes" }] }),
			"steps.0.expect_change:"
		);
		await expectInvalidArguments(
			callTool("computer_batch", { steps: [click(1, 1)], extra: true }),
			'unknown argument "extra"'
		);
		expect(sidecar.batch).not.toHaveBeenCalled();
	});

	// A sidecar refusal — a destructive key without the flag, a step whose
	// coordinate the cached geometry cannot place — reaches the model with
	// its code and next step, like any other refusal.
	it("returns the sidecar's refusal as a structured result", async () => {
		const tools = await loadAsWin32();
		// The reloaded Windows module classifies refusals with its own copy of
		// the error class, so the sidecar it is given has to throw that one.
		const { ComputerUseRefusalError: WindowsRefusalError } = await import("../backends/types");
		const sidecar = batchSidecar();
		sidecar.batch.mockRejectedValue(
			new WindowsRefusalError({
				code: "invalid_arguments",
				message:
					"steps[1] presses `Ctrl+W`, which deletes, cuts, closes or locks; a batch runs it without a look in between, so pass allow_destructive: true to confirm, or press it as a lone computer_use_press_key.",
				escalation: {
					recommended: "retry",
					reason: "Nothing was actuated. Correct the argument the message names and call again.",
				},
			})
		);
		const { callTool } = windowsToolset(tools, sidecar);

		const result = await callTool("computer_batch", { steps: [click(1, 1), key("ctrl+w")] });
		expect(result.isError).toBe(true);
		expect(result.structuredContent).toMatchObject({
			code: "invalid_arguments",
			escalation: { recommended: "retry" },
		});
		const text = result.content[0];
		expect(text.type === "text" ? text.text : "").toContain("steps[1] presses `Ctrl+W`");
	});

	// The gate is read at each call as it is at each listing, so the batch
	// runs when and only when it is listed. With the gate off — or unreadable
	// — a call by name gets what a build without the batch gives it: the
	// unknown-tool refusal, byte for byte apart from the name, before any
	// lease is taken and without the sidecar hearing of it. A toolset never
	// handed the gate is off.
	it("with the gate off, a call by name is the unknown tool it is on a build without the batch", async () => {
		const tools = await loadAsWin32();
		const sidecar = batchSidecar();
		const gate = vi.fn<() => Promise<boolean>>().mockResolvedValue(false);
		const { callTool } = windowsToolset(tools, sidecar, gate);
		const plan = { steps: [click(1, 1), key("Return")] };

		const off = await callTool("computer_batch", plan);
		const neverExisted = await callTool("computer_fly", plan);
		expect(gate).toHaveBeenCalledTimes(1);
		expect(off.isError).toBe(true);
		expect(off.structuredContent).toMatchObject({
			code: "unknown_tool",
			escalation: { recommended: "use_different_tool" },
		});
		expect(JSON.stringify(off)).toBe(
			JSON.stringify(neverExisted).replaceAll("computer_fly", "computer_batch")
		);
		expect(sidecar.batch).not.toHaveBeenCalled();
		expect(sidecar.startControl).not.toHaveBeenCalled();

		// The gate turned on: the same call runs, and takes the lease as an input action.
		gate.mockResolvedValue(true);
		const on = await callTool("computer_batch", plan);
		expect(gate).toHaveBeenCalledTimes(2);
		expect(on.isError).toBeUndefined();
		expect(sidecar.batch).toHaveBeenCalledTimes(1);
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);

		// A read that fails is off, as it is for the listing.
		gate.mockRejectedValue(new Error("statsig unavailable"));
		const unreadable = await callTool("computer_batch", plan);
		expect(JSON.stringify(unreadable)).toBe(JSON.stringify(off));
		expect(sidecar.batch).toHaveBeenCalledTimes(1);

		// The lone tools never ask the gate.
		await callTool("computer_click", { x: 1, y: 1 });
		expect(gate).toHaveBeenCalledTimes(3);
		expect(sidecar.click).toHaveBeenCalledTimes(1);

		// Not handed the gate at all: off.
		const ungated = batchSidecar();
		const withoutGate = await new tools.ComputerUseMcpToolset(ungated).callTool(
			createContext(),
			"computer_batch",
			plan
		);
		expect(JSON.stringify(withoutGate)).toBe(JSON.stringify(off));
		expect(ungated.batch).not.toHaveBeenCalled();
		expect(ungated.startControl).not.toHaveBeenCalled();
	});

	it("is an unknown tool on macOS", async () => {
		const sidecar = mockSidecar();
		const { callTool } = toolset(sidecar);
		await expect(callTool("computer_batch", { steps: [click(1, 1)] })).rejects.toThrow(
			"Unknown computer-use tool: computer_batch"
		);
		expect(sidecar.click).not.toHaveBeenCalled();
	});
});

// The canvas has to be per-platform in every direction, or a shared consumer
// silently validates one platform's frame against another's bounds.
describe("canvas selection", () => {
	it("gives Windows the raised canvas and leaves the others alone", () => {
		expect(computerUseCanvasForPlatform("win32")).toEqual({
			width: 1456,
			height: 840,
		});
		for (const platform of ["darwin", "linux"]) {
			expect(computerUseCanvasForPlatform(platform)).toEqual({
				width: 1280,
				height: 800,
			});
		}
	});

	// The transport cap re-encodes anything it considers oversized, which would
	// move every pixel out from under the coordinates the model was given.
	it("lets every platform canvas through the webp transport untouched", () => {
		for (const canvas of COMPUTER_USE_CANVASES) {
			expect(
				WEBP_PASSTHROUGH_DIMENSIONS.some(
					d => d.width === canvas.width && d.height === canvas.height
				)
			).toBe(true);
		}
	});
});

describe("the turn's remote-control lease", () => {
	/** The Windows toolset: the lease is the toolset's to take and release. */
	function leased(sidecar: ComputerUseBackend): ComputerUseMcpToolset {
		return new ComputerUseMcpToolset(sidecar, {
			companionDefault: false,
			turnLease: true,
		});
	}

	/**
	 * A call's identity is its leaf conversation: a subagent's own id, the
	 * root's own for the root. The turn-end notice names that same id.
	 */
	function conversation(id: string): Context {
		return createContext().with(conversationIdKey, id);
	}

	/** Resolve every continuation queued so far, without advancing timers. */
	const settle = (): Promise<void> => new Promise(resolve => setImmediate(resolve));

	it("takes control on the turn's first input action, once, and not for a screenshot", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		const ctx = conversation("c1");

		await instance.callTool(ctx, "computer_screenshot", {});
		expect(sidecar.startControl).not.toHaveBeenCalled();

		await instance.callTool(ctx, "computer_click", { x: 10, y: 10 });
		await instance.callTool(ctx, "computer_type", { text: "hi" });
		await instance.callTool(ctx, "computer_key", { key: "Return" });
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);
		// The start goes out before the action it enables.
		expect(sidecar.startControl.mock.invocationCallOrder[0]).toBeLessThan(
			sidecar.click.mock.invocationCallOrder[0]
		);
		expect(sidecar.releaseControl).not.toHaveBeenCalled();
	});

	it("releases when the turn that acted ends, once, and the next turn starts afresh", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);

		await instance.callTool(conversation("c1"), "computer_click", { x: 1, y: 1 });
		// Another composer's turn ending is not this lease's business.
		await instance.onTurnEnded(createContext(), "someone-else");
		expect(sidecar.releaseControl).not.toHaveBeenCalled();

		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
		// A second notice for the same turn has nothing left to release.
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);

		// The next turn takes control again and its end releases again.
		await instance.callTool(conversation("c2"), "computer_move", { x: 5, y: 5 });
		expect(sidecar.startControl).toHaveBeenCalledTimes(2);
		await instance.onTurnEnded(createContext(), "c2");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(2);
	});

	it("a turn that never touched the desktop releases nothing", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		await instance.callTool(conversation("c1"), "computer_screenshot", {});
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).not.toHaveBeenCalled();
	});

	it("a subagent's share is the subagent's: the parent's turn ending leaves it the desktop", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		await instance.callTool(conversation("sub"), "computer_click", { x: 1, y: 1 });
		// A background subagent outlives the parent's turn.
		await instance.onTurnEnded(createContext(), "parent");
		expect(sidecar.releaseControl).not.toHaveBeenCalled();
		await instance.onTurnEnded(createContext(), "sub");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
	});

	it("the lease follows the last conversation to act; the one before it ending releases nothing", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		// The parent acts first; a background subagent then acts under the
		// same session, so there is one start.
		await instance.callTool(conversation("parent"), "computer_click", { x: 1, y: 1 });
		await instance.callTool(conversation("sub"), "computer_click", { x: 2, y: 2 });
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);

		// The parent's turn ends while the subagent is still driving.
		await instance.onTurnEnded(createContext(), "parent");
		expect(sidecar.releaseControl).not.toHaveBeenCalled();
		await instance.callTool(conversation("sub"), "computer_type", { text: "x" });
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);
		await instance.onTurnEnded(createContext(), "sub");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);

		// The other way round: the subagent acts, the parent drives on after
		// it, and the parent's end is what releases.
		await instance.callTool(conversation("sub"), "computer_click", { x: 3, y: 3 });
		await instance.callTool(conversation("parent"), "computer_click", { x: 4, y: 4 });
		expect(sidecar.startControl).toHaveBeenCalledTimes(2);
		await instance.onTurnEnded(createContext(), "sub");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
		await instance.onTurnEnded(createContext(), "parent");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(2);
	});

	it("a conversation whose turn end is never reported cannot hold the lease against the next turn", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		// A turn that did not run through the composer acts and is never
		// reported over; the next turn to act owns the lease outright.
		await instance.callTool(conversation("unreported"), "computer_click", { x: 1, y: 1 });
		await instance.callTool(conversation("c1"), "computer_click", { x: 2, y: 2 });
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
	});

	it("a share taken by a call with no conversation id is released by any turn end", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		await instance.callTool(createContext(), "computer_click", { x: 1, y: 1 });
		await instance.onTurnEnded(createContext(), "whoever");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
	});

	it("a turn end reported before a newer turn's input leaves the lease to that turn", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		const ctx = conversation("c1");
		let finishClick: (result: SidecarToolResult) => void = () => undefined;
		sidecar.click.mockImplementationOnce(
			() => new Promise<SidecarToolResult>(resolve => { finishClick = resolve; })
		);

		// Turn 1's click is still finishing when the user's next message
		// supersedes the turn; its end is reported while the click is in flight.
		const oldClick = instance.callTool(ctx, "computer_click", { x: 1, y: 1 });
		await vi.waitFor(() => expect(sidecar.click).toHaveBeenCalled());
		const ended = instance.onTurnEnded(createContext(), "c1");
		// Turn 2 of the same conversation acts before that notice is processed.
		await instance.callTool(ctx, "computer_move", { x: 3, y: 3 });
		finishClick(ACTION_RESULT);
		await oldClick;
		await ended;
		expect(sidecar.releaseControl).not.toHaveBeenCalled();
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);

		// Turn 2's own end releases.
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
	});

	it("the model's own start joins the lease instead of opening a second session", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		const ctx = conversation("c1");
		await instance.callTool(ctx, "computer_click", { x: 1, y: 1 });
		const result = await instance.callTool(ctx, "computer_start_control", {});
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);
		expect(result.content[0]).toEqual({ type: "text", text: "Remote control is ready." });
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
	});

	it("does not start again after the model's own start, and the turn end releases what it took", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		const ctx = conversation("c1");
		await instance.callTool(ctx, "computer_start_control", {});
		await instance.callTool(ctx, "computer_click", { x: 1, y: 1 });
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
	});

	it("after the model's own release the turn end releases nothing, and the next action starts afresh", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		const ctx = conversation("c1");
		await instance.callTool(ctx, "computer_click", { x: 1, y: 1 });
		const released = await instance.callTool(ctx, "computer_release_control", {});
		expect(released.content[0]).toEqual({ type: "text", text: "Released remote control." });
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);

		// The model acted again after letting go: a new session, and the
		// turn's end releases that one.
		await instance.callTool(ctx, "computer_click", { x: 2, y: 2 });
		expect(sidecar.startControl).toHaveBeenCalledTimes(2);
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(2);
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(2);
	});

	it("waits for the action in flight before releasing, so an aborted action still finishes first", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		const ctx = conversation("c1");
		let finishClick: (result: SidecarToolResult) => void = () => undefined;
		sidecar.click.mockImplementationOnce(
			() => new Promise<SidecarToolResult>(resolve => { finishClick = resolve; })
		);

		const click = instance.callTool(ctx, "computer_click", { x: 1, y: 1 });
		await vi.waitFor(() => expect(sidecar.click).toHaveBeenCalled());
		const ended = instance.onTurnEnded(createContext(), "c1");
		await settle();
		expect(sidecar.releaseControl).not.toHaveBeenCalled();

		finishClick(ACTION_RESULT);
		await click;
		await ended;
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
		expect(sidecar.releaseControl.mock.invocationCallOrder[0]).toBeGreaterThan(
			sidecar.click.mock.invocationCallOrder[0]
		);
	});

	it("does not wait for a call that is not an action, so a stopped computer_wait does not hold the presence up", async () => {
		const sidecar = mockSidecar();
		let finishWait: () => void = () => undefined;
		const instance = new ComputerUseMcpToolset(sidecar, {
			companionDefault: false,
			turnLease: true,
			delay: () => new Promise<void>(resolve => { finishWait = resolve; }),
		});
		const ctx = conversation("c1");
		await instance.callTool(ctx, "computer_click", { x: 1, y: 1 });

		// The user stops the turn 30 s into a computer_wait: the release goes
		// out now, not when the wait's screenshot comes back.
		const wait = instance.callTool(ctx, "computer_wait", { ms: 30_000 });
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
		expect(sidecar.screenshot).not.toHaveBeenCalled();

		finishWait();
		await wait;
		expect(sidecar.screenshot).toHaveBeenCalledTimes(1);
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);
	});

	it("a turn end during the first action's control/start still releases once the start returns", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		const ctx = conversation("c1");
		let finishStart: () => void = () => undefined;
		sidecar.startControl.mockImplementationOnce(
			() => new Promise<void>(resolve => { finishStart = resolve; })
		);

		const click = instance.callTool(ctx, "computer_click", { x: 1, y: 1 });
		await vi.waitFor(() => expect(sidecar.startControl).toHaveBeenCalled());
		// The user stops the turn while control is still being taken.
		const ended = instance.onTurnEnded(createContext(), "c1");
		await settle();
		expect(sidecar.releaseControl).not.toHaveBeenCalled();

		finishStart();
		await click;
		await ended;
		expect(sidecar.click).toHaveBeenCalledTimes(1);
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
	});

	it("overlapping first actions share one control/start, and a turn end waits for all of them", async () => {
		const sidecar = mockSidecar();
		const instance = leased(sidecar);
		const ctx = conversation("c1");
		let finishStart: () => void = () => undefined;
		sidecar.startControl.mockImplementationOnce(
			() => new Promise<void>(resolve => { finishStart = resolve; })
		);
		let finishMove: (result: SidecarToolResult) => void = () => undefined;
		sidecar.move.mockImplementationOnce(
			() => new Promise<SidecarToolResult>(resolve => { finishMove = resolve; })
		);

		const click = instance.callTool(ctx, "computer_click", { x: 1, y: 1 });
		const move = instance.callTool(ctx, "computer_move", { x: 2, y: 2 });
		await vi.waitFor(() => expect(sidecar.startControl).toHaveBeenCalled());
		finishStart();
		await click;
		expect(sidecar.startControl).toHaveBeenCalledTimes(1);

		// The move is still on the wire when the turn ends: no release yet.
		const ended = instance.onTurnEnded(createContext(), "c1");
		await settle();
		expect(sidecar.releaseControl).not.toHaveBeenCalled();
		finishMove(ACTION_RESULT);
		await move;
		await ended;
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
		expect(sidecar.releaseControl.mock.invocationCallOrder[0]).toBeGreaterThan(
			sidecar.move.mock.invocationCallOrder[0]
		);
	});

	it("a failed control/start is the action's failure, leaves no lease, and the next action tries again", async () => {
		const sidecar = mockSidecar();
		sidecar.startControl.mockRejectedValueOnce(new Error("sidecar down"));
		const instance = leased(sidecar);
		const ctx = conversation("c1");
		await expect(instance.callTool(ctx, "computer_click", { x: 1, y: 1 })).rejects.toThrow("sidecar down");
		expect(sidecar.click).not.toHaveBeenCalled();
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).not.toHaveBeenCalled();

		await instance.callTool(ctx, "computer_click", { x: 1, y: 1 });
		expect(sidecar.startControl).toHaveBeenCalledTimes(2);
		expect(sidecar.click).toHaveBeenCalledTimes(1);
	});

	it("a refused control/start reaches the model as the refusal, like a refused action", async () => {
		const sidecar = mockSidecar();
		sidecar.startControl.mockRejectedValueOnce(
			new ComputerUseRefusalError({
				code: "sidecar_unavailable",
				message: "The helper could not be started.",
				escalation: { recommended: "ask_user", reason: "Nothing was actuated." },
			})
		);
		const instance = leased(sidecar);
		const result = await instance.callTool(conversation("c1"), "computer_click", { x: 1, y: 1 });
		expect(result.isError).toBe(true);
		expect(result.structuredContent).toMatchObject({ code: "sidecar_unavailable" });
		expect(sidecar.click).not.toHaveBeenCalled();
	});

	it("a failed action keeps the lease releasable", async () => {
		const sidecar = mockSidecar();
		sidecar.click.mockRejectedValueOnce(new Error("boom"));
		const instance = leased(sidecar);
		const ctx = conversation("c1");
		await expect(instance.callTool(ctx, "computer_click", { x: 1, y: 1 })).rejects.toThrow("boom");
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
	});

	it("a release the sidecar refuses still forgets the lease, so the next turn starts afresh", async () => {
		const sidecar = mockSidecar();
		sidecar.releaseControl.mockRejectedValueOnce(new Error("pipe closed"));
		const instance = leased(sidecar);
		await instance.callTool(conversation("c1"), "computer_click", { x: 1, y: 1 });
		await expect(instance.onTurnEnded(createContext(), "c1")).rejects.toThrow("pipe closed");
		await instance.callTool(conversation("c2"), "computer_click", { x: 1, y: 1 });
		expect(sidecar.startControl).toHaveBeenCalledTimes(2);
	});

	it("dispose forgets the lease", async () => {
		const sidecar = mockSidecar();
		const dispose = vi.fn<NonNullable<ComputerUseBackend["dispose"]>>().mockResolvedValue(undefined);
		const instance = leased({ ...sidecar, dispose });
		await instance.callTool(conversation("c1"), "computer_click", { x: 1, y: 1 });
		await instance.dispose(createContext());
		expect(dispose).toHaveBeenCalledTimes(1);
		await instance.onTurnEnded(createContext(), "c1");
		expect(sidecar.releaseControl).not.toHaveBeenCalled();
	});

	it("is on by default where the Windows sidecar is, and off by default on macOS", async () => {
		// This file's module is the macOS toolset; the Windows one is loaded
		// afresh. A context without a conversation id, since the reloaded
		// module's context key is not this file's.
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			const windows = await import("./tools");
			const sidecar = mockSidecar();
			const instance = new windows.ComputerUseMcpToolset(sidecar);
			await instance.callTool(createContext(), "computer_click", { x: 1, y: 1 });
			expect(sidecar.startControl).toHaveBeenCalledTimes(1);
			await instance.onTurnEnded(createContext(), "c1");
			expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
			vi.resetModules();
		}

		const sidecar = mockSidecar();
		const mac = new ComputerUseMcpToolset(sidecar, { companionDefault: false });
		await mac.callTool(createContext(), "computer_click", { x: 1, y: 1 });
		expect(sidecar.startControl).not.toHaveBeenCalled();
	});

	describe("without turnLease (macOS), the toolset is as it was", () => {
		it.each([
			["remote", { companionDefault: false }],
			["companion", { companionDefault: true }],
		])("in %s mode: inputs never take control, the control tools are the model's, a turn end is nothing", async (_mode, options) => {
			const sidecar = mockSidecar();
			const instance = new ComputerUseMcpToolset(sidecar, options);
			const ctx = conversation("c1");

			await instance.callTool(ctx, "computer_move", { x: 1, y: 1 });
			expect(sidecar.startControl).not.toHaveBeenCalled();

			const started = await instance.callTool(ctx, "computer_start_control", {});
			expect(sidecar.startControl).toHaveBeenCalledTimes(1);
			expect(started.content[0]).toEqual({ type: "text", text: "Remote control is ready." });
			// The model's second start reaches the sidecar too: the toolset
			// tracks nothing on its behalf.
			await instance.callTool(ctx, "computer_start_control", {});
			expect(sidecar.startControl).toHaveBeenCalledTimes(2);

			await instance.onTurnEnded(createContext(), "c1");
			expect(sidecar.releaseControl).not.toHaveBeenCalled();

			const released = await instance.callTool(ctx, "computer_release_control", {});
			expect(sidecar.releaseControl).toHaveBeenCalledTimes(1);
			expect(released.content[0]).toEqual({ type: "text", text: "Released remote control." });
		});
	});
});

// Windows computer_wait asks only "did anything change during the wait?": the
// sidecar returns the frame when the screen changed and a text-only note when
// it did not, so a no-op wait costs neither the encode nor the image tokens and
// the model stays on its last screenshot. The macOS remote wait (in the
// dispatch describe above) still captures a fresh screenshot every time.
describe("computer_wait frame-on-demand on Windows", () => {
	async function loadAsWin32(): Promise<typeof import("./tools")> {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			return await import("./tools");
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
		}
	}

	it("returns text only when the sidecar reports no change, and takes no plain screenshot", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		sidecar.screenshotAfterWait = vi
			.fn<NonNullable<ComputerUseBackend["screenshotAfterWait"]>>()
			.mockResolvedValue({
				message: "No visible change since the last screenshot; it is still current.",
				isError: false,
			});
		const waits: number[] = [];
		const instance = new tools.ComputerUseMcpToolset(sidecar, {
			delay: async ms => {
				waits.push(ms);
			},
		});

		const result = await instance.callTool(createContext(), "computer_wait", {
			ms: 1500,
		});

		expect(waits).toEqual([1500]);
		expect(sidecar.screenshotAfterWait).toHaveBeenCalledOnce();
		expect(sidecar.screenshot).not.toHaveBeenCalled();
		expect(result.content).toEqual([
			{ type: "text", text: "Waited 1500ms." },
			{
				type: "text",
				text: "No visible change since the last screenshot; it is still current.",
			},
		]);
		// No image: the model's previous screenshot still stands.
		expect(result.content.some(part => part.type === "image")).toBe(false);
	});

	it("returns the frame when the sidecar reports a change", async () => {
		const tools = await loadAsWin32();
		const sidecar = mockSidecar();
		sidecar.screenshotAfterWait = vi
			.fn<NonNullable<ComputerUseBackend["screenshotAfterWait"]>>()
			.mockResolvedValue(ACTION_RESULT);
		const instance = new tools.ComputerUseMcpToolset(sidecar, {
			delay: async () => { },
		});

		const result = await instance.callTool(createContext(), "computer_wait", {
			ms: 1000,
		});

		expect(sidecar.screenshotAfterWait).toHaveBeenCalledOnce();
		expect(result.content).toEqual([
			{ type: "text", text: "Waited 1000ms." },
			{ type: "text", text: "Performed the action." },
			{ type: "image", data: "webp:after-bytes", mimeType: "image/webp" },
		]);
	});
});

// `computer_attempt` exists only on the macOS companion path and only for a
// toolset handed a decider; like the batch it is listed and runnable only while
// its gate is on, read at each listing and at each call.
describe("computer_attempt", () => {
	const TREE = [
		'OK tool=computer_use_app_state message="Snapshot."',
		'[1] AXWindow name="TextEdit"',
		' [2] AXTextArea value="hello" settable',
	].join("\n");
	const DONE = {
		kind: { label: "none", probabilities: { none: 0.9 } },
		item: { label: "none", probabilities: { none: 1 } },
		key: { label: "none", probabilities: { none: 1 } },
		present: 0.1,
		goalReached: 0.95,
		unreachable: 0.02,
	};

	function attemptToolset(enabled: () => Promise<boolean>) {
		const sidecar = mockSidecar();
		sidecar.callCompanion.mockResolvedValue({
			message: TREE,
			isError: false,
			structuredContent: { snapshotID: "snap-1" },
		} as SidecarToolResult);
		const decide = vi.fn().mockResolvedValue(DONE);
		const ctx = createContext();
		const instance = new ComputerUseMcpToolset(sidecar, { attempt: { decide, enabled } });
		return { sidecar, decide, ctx, callTool: (name: string, args: Record<string, unknown>) => instance.callTool(ctx, name, args) };
	}

	it("is listed only when the caller's gate read says so", () => {
		expect(COMPUTER_USE_MCP_TOOLS.map(tool => tool.name)).not.toContain("computer_attempt");
		expect(computerUseMcpTools({ attempt: true }).map(tool => tool.name)).toContain("computer_attempt");
		expect(computerUseMcpTools({ attempt: true, companionDefault: false }).map(tool => tool.name)).not.toContain("computer_attempt");
	});

	it("with the gate off, a call by name is an unknown tool and nothing is asked", async () => {
		const gate = vi.fn<() => Promise<boolean>>().mockResolvedValue(false);
		const { callTool, decide, sidecar } = attemptToolset(gate);
		const args = { target: APP_TARGET, step: "check the text", expect: "the document says hello" };

		await expect(callTool("computer_attempt", args)).rejects.toThrow("Unknown computer-use tool: computer_attempt");
		expect(decide).not.toHaveBeenCalled();
		expect(sidecar.callCompanion).not.toHaveBeenCalled();

		gate.mockRejectedValue(new Error("statsig unavailable"));
		await expect(callTool("computer_attempt", args)).rejects.toThrow("Unknown computer-use tool: computer_attempt");

		gate.mockResolvedValue(true);
		const on = await callTool("computer_attempt", args);
		expect(on.isError).toBeUndefined();
		expect(on.content[0]).toMatchObject({ type: "text", text: expect.stringMatching(/^OK attempt: 1\/1 steps done/) });
		expect(on.structuredContent).toMatchObject({ code: "attempt", attempt: { steps: [{ status: "done", expect: "the document says hello" }] } });
		expect(decide).toHaveBeenCalledWith(
			expect.objectContaining({ goal: "check the text", expect: "the document says hello", iteration: 1 }),
			expect.any(AbortSignal)
		);
		expect(sidecar.callCompanion).toHaveBeenCalledWith(expect.anything(), "computer_use_app_state", { pid: 42, target_id: "target-42" });
	});

	it("is not registered for a toolset without a decider", async () => {
		const { callTool } = toolset(mockSidecar());
		await expect(callTool("computer_attempt", { target: APP_TARGET, step: "s" })).rejects.toThrow(
			"Unknown computer-use tool: computer_attempt"
		);
	});
});
