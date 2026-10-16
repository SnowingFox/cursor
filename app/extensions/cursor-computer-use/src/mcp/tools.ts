/**
 * Generic, model-agnostic MCP toolset for local computer use.
 *
 * Every tool executes by calling the computer-use sidecar for the host
 * platform (packages/computer-use) over its local RPC; this layer never
 * synthesizes input or captures the screen itself, and it is unaware of which
 * platform answered. The descriptors match the workbench MCPTool shape
 * ({ name, description, parameters-as-JSON-string }) so a first-party MCP
 * provider can expose them directly.
 */

import {
	COMPUTER_USE_BATCH_MAX_KEYBOARD_STEPS,
	COMPUTER_USE_BATCH_MAX_STEPS,
	COMPUTER_USE_DRAG_PATH_MAX_POINTS,
	COMPUTER_USE_DRAG_PATH_MIN_POINTS,
	COMPUTER_USE_ESCALATIONS,
	COMPUTER_USE_REFUSAL_CODES,
	COMPUTER_USE_REFUSAL_ESCALATIONS,
	COMPUTER_USE_ZOOM_MAX_EDGE_PX,
	COMPUTER_USE_ZOOM_MAX_MAGNIFICATION,
	COMPUTER_USE_ZOOM_MAX_REGION_LONG_EDGE_PX,
	COMPUTER_USE_ZOOM_MIN_REGION,
	COMPUTER_USE_ZOOM_PADDING,
	COMPUTER_USE_VISION_TOKEN_BUDGET,
	computerUseBatchStepsAllowed,
	computerUseCanvasForPlatform,
	computerUseRefusal,
	computerUseZoomRegionFitsOutput,
	computerUseZoomRegionWidened,
	type CompanionSidecarToolName,
	type ComputerUseBatchStepTool,
	type ComputerUseEscalation,
	type ComputerUseRefusal,
	type SidecarToolImage,
	type SidecarToolResult,
} from "@anysphere/computer-use/protocol";
import {
	DARWIN_COMPANION_INSTRUCTIONS,
	DARWIN_REMOTE_INSTRUCTIONS,
} from "./mac-mode";
import type { Context } from "@anysphere/context";
import { delay } from "@anysphere/utils";
import { z } from "zod";
import {
	ComputerUseBackendError,
	ComputerUseRefusalError,
	conversationIdKey,
	type ComputerUseBackend,
	type ComputerUseBatchStep,
} from "../backends/types";
import { encodeModelScreenshot, encodeZoomImage } from "./screenshot-codec";
import {
	attemptSequence,
	DEFAULT_MAX_STEPS,
	type AttemptSummary,
	type DecideInput,
	type NextActionAnswers,
} from "./attempt";

export interface ComputerUseMcpToolDescriptor {
	name: string;
	description: string;
	/** JSON Schema for the tool's arguments, serialized as a string. */
	parameters: string;
}

export type ComputerUseMcpContent =
	| { type: "text"; text: string }
	| { type: "image"; data: string; mimeType: string };

export interface ComputerUseMcpResult {
	content: ComputerUseMcpContent[];
	isError?: boolean;
	/**
	 * Machine-readable outcome the model receives alongside the text. A
	 * refusal is the full `{ code, message, escalation }` shape; the macOS
	 * lease's `user_aborted` keeps its original code-only shape.
	 */
	structuredContent?:
	| { code: "user_aborted" }
	| ComputerUseRefusal
	/** `computer_attempt`: the machine-readable twin of its result text. */
	| { code: "attempt"; attempt: AttemptSummary };
}

export const COMPUTER_USE_MCP_SERVER_ID = "cursor-computer-use";

// The sidecar runs on this machine, so the coordinate space advertised to the
// model is this platform's canvas.
const CANVAS = computerUseCanvasForPlatform(process.platform);
const CANVAS_DESCRIPTION = `${CANVAS.width}×${CANVAS.height}`;
// App-scoped (companion) tools exist only where the macOS sidecar does. Every
// app-target word in a descriptor is gated on this, so other platforms see the
// toolset exactly as it was before app targets existed.
const APP_SCOPE = process.platform === "darwin";
// Zoom exists only where the Windows sidecar does (`computer_use_zoom` and the
// `zoom_id` argument, `windows/src/zoom.rs`). Gated the same way, so macOS sees
// the toolset exactly as it was before zoom existed.
const ZOOM_SCOPE = process.platform === "win32";
const ZOOM_PADDING_PERCENT = Math.round(COMPUTER_USE_ZOOM_PADDING * 100);
// The action-result inset exists only where the Windows sidecar does
// (`windows/src/inset.rs`): a click, drag, typing or key-press result may
// carry a 2x look around what the action did, registered as a zoom context
// so the model can act in its pixels. In an audited Paint session 19 of 20
// zooms followed an action to read what the action frame should have shown;
// the inset is that look, without the round trip. Gated like zoom, so macOS
// results are exactly what they were.
const INSET_SCOPE = process.platform === "win32";
// The batch exists only where the Windows sidecar does (`computer_use_batch`,
// `windows/src/batch.rs`), and it is advertised and runnable only while the
// `windows_computer_use_batch` Statsig gate is on, so it can ship dark: the
// extension reads the gate at each listing (`computerUseMcpTools({ batch })`)
// and hands the toolset the same read for each call
// (`ComputerUseMcpToolOptions.batch`), so with the gate off a call by name is
// the unknown tool it is on a build without the batch — same refusal, no
// lease taken, nothing sent to the sidecar. macOS sees the toolset exactly as
// it was.
const BATCH_SCOPE = process.platform === "win32";
const BATCH_TOOL_NAME = "computer_batch";
// `computer_attempt` exists only on the macOS companion path, where the
// toolset is handed a decider (`ComputerUseMcpToolOptions.attempt`). Like the
// batch it is listed and runnable only while its Statsig gate
// (`computer_use_next_action`) is on: read at each listing and at each call.
const ATTEMPT_TOOL_NAME = "computer_attempt";
// Multi-point drag paths exist only where the Windows sidecar does
// (`windows/src/drag_path.rs`): `computer_drag` there takes a `path` of 2–64
// points as an alternative to `from`/`to`, so one call draws a whole polyline
// instead of one round trip per leg (an audited Paint session spent 17 drags
// on four to six shapes). The sidecar confines a path of more than two
// points to the window it starts in and refuses one that leaves it. Gated
// the same way as zoom, so macOS sees the drag tool exactly as it was.
const DRAG_PATHS = process.platform === "win32";
// Structured refusals are produced by the shared RPC client over the Windows
// sidecar. The contract is documented to the model only where it is honoured,
// so the macOS instructions stay exactly as they were.
const STRUCTURED_REFUSALS = process.platform === "win32";
// The Windows sidecar names the Windows key `win` and presses it on its own
// (`keymap.rs`); the macOS one maps the same spellings to Command. The key
// tool's description says which keyboard it is on only where the sidecar
// honours it, so the macOS descriptor stays exactly as it was.
const WINDOWS_KEYBOARD = process.platform === "win32";
// The remote-control lease is the model's to take and give back only on macOS,
// where `computer_start_control` takes the exclusive lease (the Stop overlay,
// the real cursor) and input without it is refused. On Windows the lease gates
// nothing: it only times the on-screen presence, and the sidecar shows that
// presence on the first input and hides it once the client has gone quiet
// (`presence/lifecycle.rs`), so the two tools would buy the model nothing —
// while a live session paid a model turn plus the tool hooks for each of them
// (about 13 s of a 208 s session). They are not advertised there; the macOS
// toolset stays exactly as it was.
const LEASE_TOOLS = process.platform !== "win32";
// The permission probe is the model's to run only on macOS, where the sidecar
// needs Accessibility and Screen Recording and a denied grant is the answer.
// The Windows sidecar needs no per-app permission and always answers granted,
// so there the probe's only effect was to host the sidecar's cold launch —
// which the first real call, the screenshot, hosts through the same transport
// with the same refusal surface — while a live session called it three times,
// each a model turn plus the tool hooks. It is not advertised there; the macOS
// toolset stays exactly as it was.
const PERMISSION_TOOL = process.platform !== "win32";
// The agent runtime answers a GetDynamicTools namespace lookup inline only
// while the pretty-printed JSON — the namespace's instructions plus every
// descriptor with its schema — stays under `FILE_OUTPUT_THRESHOLD_BYTES`
// (12 000 bytes, `packages/agent/src/tools/mcp/get-mcp-tools.ts`); past that
// it is written to a file the model has to read back. In live Windows
// sessions the spilled listing cost 13.7 s (the model mistyped the path
// twice) and fetching the schemas one at a time instead cost 48 s. So the
// Windows descriptors say each thing once: what the instructions already
// state — the canvas, the zoom_id rule, that every action returns a
// screenshot, what the Windows key does — is not repeated per tool or per
// argument, and the long-form guidance is condensed. `tools.test.ts` holds
// the listing under the limit with margin. macOS keeps its wording exactly
// as it was.
const COMPACT_DESCRIPTORS = process.platform === "win32";
// A scroll with no amount. The Windows instructions ask for one scroll of
// 10–15 ticks to read down a page; in a live session the model followed that
// until a context summary dropped the schemas, then sent amounts of 3–6 (or
// none) and read pages a third at a time. The default is the page-reading
// amount on Windows, so a forgotten argument still reads a page; macOS keeps
// the three it always had.
const SCROLL_DEFAULT_TICKS = process.platform === "win32" ? 10 : 3;
// A Windows computer_wait returns the frame only when the screen changed during
// the wait; when nothing changed, the model's last screenshot still stands, so
// the sidecar answers text-only and the wait costs neither the encode nor the
// image tokens (a no-op wait is common — the model waits for a load that has
// already finished). Only where the sidecar compares frames; macOS keeps
// returning a fresh screenshot from every remote wait.
const WAIT_FRAME_ON_DEMAND = process.platform === "win32";
// The names are the sidecar's own vocabulary (`keymap.rs`, `NAMED_KEYS`); its
// refusal repeats them, but a model that reads them here does not pay a
// refused call to learn them — two refusals cost 11.8 s in a live session.
// What the Windows key does is the instructions' bullet; the descriptor keeps
// the syntax and the vocabulary. It describes the deployed sidecar: the text
// and the sidecar ship on independent schedules (Cursor builds against the
// Statsig manifest), so a sentence about a capability the deployed sidecar
// lacks would send the model into refusals. The bare-modifier sentence is
// exactly such a sentence — it describes the sidecar with bare modifier taps
// (alt, shift, ctrl and their right-hand forms; win was always a tap), and an
// older sidecar refuses a bare "alt" as invalid_arguments — so it merges only
// once that sidecar release is in the published manifest. It earns its place:
// Office KeyTips (Alt, then the tab letter) is the fastest ribbon route, and
// a live session burned 17 calls after a refused bare alt.
const WINDOWS_KEY_DESCRIPTION =
	'Press a key or chord on the Windows keyboard, e.g. "Return", "Escape", "Tab", "ctrl+l", "win+r". Join modifiers with "+" (ctrl, alt, shift, win; cmd, super and meta also mean win). A modifier alone taps that key: "alt" taps Alt (Office KeyTips and the classic menu bar; follow with the tab letter, "alt h", or a second call); "shift" and "ctrl" tap those keys. Key names: space, backspace, delete (forward), insert, left, right, up, down, home, end, pageup, pagedown, f1–f12, apps (context menu), printscreen, capslock, numlock, scrolllock, pause, volumeup, volumedown, volumemute, mediaplaypause, medianext, mediaprev, mediastop, or any single character. Separate independent presses with a space ("win r" taps Win, then r).';

/** What the model should do for each escalation, in the words it is given. */
const ESCALATION_GUIDANCE: Readonly<Record<ComputerUseEscalation, string>> = {
	retry:
		"call the same tool again, correcting any argument the message names; nothing was actuated",
	ask_user:
		"stop and tell the user what the message says; only the person at the machine can clear it",
	use_different_tool:
		"run the tool the reason names first (usually computer_screenshot), then repeat the action",
	stop: "end computer use for this turn; call no more input or control tools",
};

/**
 * The refusal contract, spelled out for the model from the same tables the
 * code runs on. Codes are listed under the escalation they carry by default so
 * the model can route on the code alone when a hint is missing.
 */
export function describeRefusalContract(): string {
	const byEscalation = COMPUTER_USE_ESCALATIONS.map(escalation => {
		const codes = COMPUTER_USE_REFUSAL_CODES.filter(
			code => COMPUTER_USE_REFUSAL_ESCALATIONS[code] === escalation
		);
		return `${escalation} (${ESCALATION_GUIDANCE[escalation]}): ${codes.join(", ")}`;
	});
	return [
		"A refused call returns isError=true with structuredContent {code, message, escalation: {recommended, reason}}; act on escalation.recommended and read the reason for the next step.",
		`Escalations, with the codes that carry them by default — ${byEscalation.join("; ")}.`,
	].join(" ");
}

// Local instructions: always injected; derived from code; Statsig cannot provide these.
export const COMPUTER_USE_LOCAL_INSTRUCTIONS: string =
	`Screenshots use a fixed ${CANVAS_DESCRIPTION} canvas. Coordinates are pixels in the most recent computer_screenshot image, with (0, 0) at the top-left; x grows rightward and y grows downward. Valid coordinates are x=0..${CANVAS.width - 1} and y=0..${CANVAS.height - 1}.` +
	(ZOOM_SCOPE
		? ` When something is too small to read or to aim at, call computer_zoom on that region; with the zoom_id it returns, an action's x and y are pixels of that zoom image, whose size the zoom result quotes (an edge can reach ${COMPUTER_USE_ZOOM_MAX_EDGE_PX} pixels, so a zoom y may exceed the canvas height).`
		: "") +
	(STRUCTURED_REFUSALS ? `\n\n${describeRefusalContract()}` : "");

// Fallback instructions: used only when Statsig has no per-mode darwin row.
// Darwin Glass uses companion copy. Remote workers use
// `DARWIN_REMOTE_INSTRUCTIONS` via `selectDarwinMcpInstructions`.
export { DARWIN_COMPANION_INSTRUCTIONS, DARWIN_REMOTE_INSTRUCTIONS };

// The Windows body. Its bullets come from live-session audits. 2026-09-12: a
// taskbar click that launched Edge returned a frame showing only the icon
// highlight and the model spent 30 s reopening an app that was already open;
// two refused `win` key presses cost 11.8 s; three small scrolls did one
// larger scroll's work. 2026-09-13 (73 min, 5120×2756 at 3.5× downscale): 29
// "did not visibly change" results, 21 of them clicks on close buttons and
// menu items a few canvas pixels wide, each cluster ending in the zoom that
// worked; three Save As dialogs that opened 2–4 s after the menu item, each
// re-clicked; seven clicks hunting the Save As name field that was already
// selected; two scripts that could not bring a window to the front; ten calls
// under a consent overlay; twenty PageDowns to review a deck. It names no
// lease tool and no permission probe: Windows does not advertise them
// (`LEASE_TOOLS`, `PERMISSION_TOOL`). This text is also the draft for the
// Statsig `computer_use_mcp_instructions.win32` value, which is empty today.
const WINDOWS_FALLBACK_INSTRUCTIONS: string = [
	"These tools control the local Windows desktop: they read the real screen and send real mouse and keyboard input. No permission has to be checked or granted first; begin with computer_screenshot.",
	"",
	"- Do not call Computer Use tools in parallel; they act on one machine and run one at a time.",
	"- Look before you click: screenshot before your first coordinate action, rely on the fresh screenshot every input action returns, and take another before retrying anything unexpected.",
	"- Windows cannot confirm an injected event was delivered: a changed screen is evidence something happened, not proof it was this action, and no visible change is not failure.",
	"- Anything under about 15 canvas pixels (a close X, a menu item, a checkbox, a taskbar icon) needs computer_zoom first; aim with its zoom_id, and never retry a missed click by nudging the coordinates.",
	"- App launches, page loads and dialogs outlast the screenshot an action returns. If little changed after a click or key meant to launch, navigate or open a dialog (a taskbar icon, a Start tile, Return in an address bar, a context-menu item such as Save As or Print), call computer_wait with 1000–3000 ms and read that screenshot before repeating the action or trying another route.",
	'- "win" is the Windows key: "win" opens Start, "win+r" opens Run, and ctrl+esc opens Start too; cmd, super and meta also mean the Windows key here, so "cmd+l" is Win+L and locks the workstation.',
	"- To read down a page, use one computer_scroll of 10–15 ticks (one wheel notch each) rather than several small scrolls.",
	"- Save As dialogs open with the file name selected: type the new name, then press alt+s.",
	"- Switch apps with the app's taskbar button (bottom of the canvas) or alt+tab; a script cannot bring a window to the front.",
	"- Escape closes most consent and notification overlays; if one survives two attempts, read or scroll the page behind it instead.",
	"- PowerPoint: review many slides with View → Slide Sorter rather than PageDown per slide; select an object and press Delete to remove it; to edit notes, click the notes pane, ctrl+a, then type.",
].join("\n");

export const COMPUTER_USE_FALLBACK_INSTRUCTIONS: string = APP_SCOPE
	? DARWIN_COMPANION_INSTRUCTIONS
	: WINDOWS_FALLBACK_INSTRUCTIONS;

const COORDINATE_SPACE_NOTE =
	`Coordinates are pixels in the fixed ${CANVAS_DESCRIPTION} screenshot canvas, origin (0, 0) at the top-left.`;

/**
 * A screen action's description: its lead sentence, the canvas sentence, the
 * detail, and the returned-screenshot sentence — or, where the instructions
 * already carry the canvas and the screenshot rule (`COMPACT_DESCRIPTORS`),
 * the lead and the detail alone.
 */
/**
 * A per-tool "look first" reminder. The Windows instructions say it once for
 * every action ("Look before you click"), so the compact descriptors omit
 * it; the macOS descriptors keep saying it per tool, as they always have.
 */
function lookFirst(sentence: string): string | undefined {
	return COMPACT_DESCRIPTORS ? undefined : sentence;
}

function screenActionDescription(parts: {
	/** The action, as its own sentence. */
	lead: string;
	/** Guidance specific to the action, as a sentence; omitted where there is none. */
	detail?: string;
	/** What "Returns a screenshot taken after …" names, e.g. "the click". */
	returns: string;
}): string {
	return (
		COMPACT_DESCRIPTORS
			? [parts.lead, parts.detail]
			: [
				parts.lead,
				COORDINATE_SPACE_NOTE,
				parts.detail,
				`Returns a screenshot taken after ${parts.returns}.`,
			]
	)
		.filter((part): part is string => part !== undefined && part.length > 0)
		.join(" ");
}

// An integer that cannot be negative. The bound is validated either way; it
// is spelled out to the model only where the descriptor is not compacted,
// since a wait cannot be negative.
const nonNegativeInteger = COMPACT_DESCRIPTORS
	? ({ type: "integer" } as const)
	: ({ type: "integer", minimum: 0 } as const);

// An aim's advertised range. Where zoom exists it is the union of two spaces
// (the canvas, the largest zoom image), exact for neither; the instructions
// state each range and `requireAimInItsSpace` refuses with the space named.
// So it is spelled out only where the descriptor is not compacted; the zoom
// region's corners, which are exactly canvas pixels, keep theirs regardless.
function aimRange(maximum: number): { minimum: 0; maximum: number } | Record<never, never> {
	return COMPACT_DESCRIPTORS ? {} : { minimum: 0, maximum };
}

const xPixel = z.number().int().min(0).max(CANVAS.width - 1);
const yPixel = z.number().int().min(0).max(CANVAS.height - 1);
const noArguments = z.object({});

// A zoom image is never larger than this on either edge (`fit_output` in
// `windows/src/zoom.rs`, mirrored by `zoomOutputFits`), so with a zoom_id an
// action's coordinates range over at most a square of this size.
const ZOOM_IMAGE_BOUND = {
	width: COMPUTER_USE_ZOOM_MAX_EDGE_PX,
	height: COMPUTER_USE_ZOOM_MAX_EDGE_PX,
};
// Where zoom exists, an action's x and y are pixels of the screenshot canvas
// or, with a zoom_id, of a zoom image — and the two bounds differ: a portrait
// zoom is taller than the canvas. The advertised maximum admits both spaces
// and `requireAimInItsSpace` applies the exact bound of the space the call
// names. Elsewhere the canvas bound stays the type, exactly as before zoom.
const AIM_MAX = ZOOM_SCOPE
	? {
		x: Math.max(CANVAS.width, ZOOM_IMAGE_BOUND.width) - 1,
		y: Math.max(CANVAS.height, ZOOM_IMAGE_BOUND.height) - 1,
	}
	: { x: CANVAS.width - 1, y: CANVAS.height - 1 };
const aimX = ZOOM_SCOPE ? z.number().int().min(0) : xPixel;
const aimY = ZOOM_SCOPE ? z.number().int().min(0) : yPixel;
const point = z.object({ x: aimX, y: aimY });

interface Aim {
	x: number;
	y: number;
}

/**
 * Refuse a coordinate outside the space the call names: the canvas without a
 * zoom_id, the largest possible zoom image with one (the sidecar then checks
 * the actual image's size and refuses with it named). Only where zoom exists;
 * elsewhere `xPixel`/`yPixel` already carry the canvas bound.
 */
function requireAimInItsSpace(
	args: { zoom_id?: string } & (
		| { x: number; y: number }
		| { from?: Aim; to?: Aim; path?: readonly Aim[] }
	),
	ctx: z.RefinementCtx
): void {
	if (!ZOOM_SCOPE) {
		return;
	}
	const zoomed = args.zoom_id !== undefined;
	const bound = zoomed ? ZOOM_IMAGE_BOUND : CANVAS;
	const aims: Array<[Aim, (string | number)[]]> = [];
	if ("x" in args) {
		aims.push([args, []]);
	} else {
		if (args.from !== undefined) {
			aims.push([args.from, ["from"]]);
		}
		if (args.to !== undefined) {
			aims.push([args.to, ["to"]]);
		}
		// A path is one aim per point, each named by its index so the
		// refusal says which point to correct.
		for (const [index, point] of (args.path ?? []).entries()) {
			aims.push([point, ["path", index]]);
		}
	}
	for (const [aim, path] of aims) {
		for (const axis of ["x", "y"] as const) {
			const limit = (axis === "x" ? bound.width : bound.height) - 1;
			if (aim[axis] > limit) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					path: [...path, axis],
					message: zoomed
						? `${axis} is ${aim[axis]}, but with zoom_id coordinates are pixels of that zoom image, which is at most ${ZOOM_IMAGE_BOUND.width}×${ZOOM_IMAGE_BOUND.height} (${axis}=0..${limit}). The computer_zoom result quotes its actual size.`
						: `${axis} is ${aim[axis]}, but without zoom_id coordinates are pixels of the ${CANVAS_DESCRIPTION} screenshot canvas (${axis}=0..${limit}). To aim in a zoom image, pass its zoom_id.`,
				});
			}
		}
	}
}

const appTarget = z.object({
	scope: z.literal("app"),
	pid: z.number().int().positive(),
	target_id: z.string().min(1),
});
type AppTarget = z.infer<typeof appTarget>;
/** Omitted means the screen, so remote-only callers are unchanged. */
const target = z
	.discriminatedUnion("scope", [
		z.object({ scope: z.literal("screen") }),
		appTarget,
	])
	.optional();
// Per-observation handles the sidecar hands out in app scope. The wire
// contract's rules for them are checked here too, so a call the sidecar would
// reject fails at validation with the argument named.
const coordinateToken = z.string().min(1).optional();
const snapshotId = z.string().min(1).optional();
const elementId = z.number().int().positive().optional();
// Off Windows the argument is never advertised, and whatever a model sends for
// it is dropped exactly as an unknown key would have been before zoom existed.
const zoomId: z.ZodType<string | undefined, z.ZodTypeDef, unknown> = ZOOM_SCOPE
	? z.string().min(1).max(64).optional()
	: z.unknown().transform((): string | undefined => undefined);

const zoomArguments = z
	.object({ x1: xPixel, y1: yPixel, x2: xPixel, y2: yPixel })
	.superRefine((region, ctx) => {
		if (region.x2 <= region.x1 || region.y2 <= region.y1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: [region.x2 <= region.x1 ? "x2" : "y2"],
				message:
					"(x1, y1) must be the top-left corner and (x2, y2) the bottom-right: x2 > x1 and y2 > y1.",
			});
		}
		// The same rule as the sidecar's `region_fits_output`: padded 20%, the
		// region has to fit the output at the screenshot's own resolution.
		// The per-axis half-canvas cap this replaces refused an 801×71 text
		// line the output carries with room to spare.
		const width = region.x2 - region.x1 + 1;
		const height = region.y2 - region.y1 + 1;
		if (!computerUseZoomRegionFitsOutput({ width, height })) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: [width >= height ? "x2" : "y2"],
				message: `The region is ${width}×${height}; with ${ZOOM_PADDING_PERCENT}% padding it does not fit the ${COMPUTER_USE_ZOOM_MAX_EDGE_PX} px output edge and the ${COMPUTER_USE_VISION_TOKEN_BUDGET}-patch budget at the screenshot's own resolution, so it would come back no sharper than the screenshot. The long edge may be up to ${COMPUTER_USE_ZOOM_MAX_REGION_LONG_EDGE_PX} canvas pixels at any aspect when the other edge is modest; zoom into a smaller area, or read the screenshot directly.`,
			});
		}
	});

function requireCoordinateTokenForApp(
	args: { target?: z.infer<typeof target>; coordinate_token?: string },
	ctx: z.RefinementCtx
): void {
	if (args.target?.scope === "app" && args.coordinate_token === undefined) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			path: ["coordinate_token"],
			message:
				"Required with an app target; pass the coordinate_token from the latest computer_screenshot of this app.",
		});
	}
}

function requireElementPair(
	args: { element_id?: number; snapshot_id?: string },
	ctx: z.RefinementCtx
): void {
	if ((args.element_id === undefined) !== (args.snapshot_id === undefined)) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			path: [args.element_id === undefined ? "element_id" : "snapshot_id"],
			message:
				"element_id and snapshot_id go together; pass both from the same computer_app_state result, or neither.",
		});
	}
}

const clickArguments = z
	.object({
		target,
		x: aimX,
		y: aimY,
		button: z.enum(["left", "right", "middle"]).optional(),
		count: z.number().int().min(1).max(3).optional(),
		coordinate_token: coordinateToken,
		zoom_id: zoomId,
	})
	.superRefine(requireCoordinateTokenForApp)
	.superRefine(requireAimInItsSpace);

const moveArguments = z
	.object({
		target,
		x: aimX,
		y: aimY,
		coordinate_token: coordinateToken,
		zoom_id: zoomId,
	})
	.superRefine(requireCoordinateTokenForApp)
	.superRefine(requireAimInItsSpace);

interface DragArguments {
	target?: z.infer<typeof target>;
	from?: Aim;
	to?: Aim;
	path?: readonly Aim[];
	button?: "left" | "right" | "middle";
	coordinate_token?: string;
	zoom_id?: string;
}

// The two-point drag every platform has always had. Kept as its own schema,
// not a relaxation of one shared with the path form, so its parse — and its
// messages for a malformed call — are exactly what they were.
const twoPointDragArguments: z.ZodType<DragArguments, z.ZodTypeDef, unknown> = z
	.object({
		target,
		from: point,
		to: point,
		button: z.enum(["left", "right", "middle"]).optional(),
		coordinate_token: coordinateToken,
		zoom_id: zoomId,
	})
	.superRefine(requireCoordinateTokenForApp)
	.superRefine(requireAimInItsSpace);

// Where the sidecar takes a path: `from`/`to` as before, or a `path` of
// 2–64 points, and exactly one of the two forms. The bound is the sidecar's
// (`drag_path::path_argument`), applied here first so an over-long path is
// refused before the RPC with the rule named.
const pathDragArguments: z.ZodType<DragArguments, z.ZodTypeDef, unknown> = z
	.object({
		target,
		from: point.optional(),
		to: point.optional(),
		path: z
			.array(point)
			.min(COMPUTER_USE_DRAG_PATH_MIN_POINTS)
			.max(COMPUTER_USE_DRAG_PATH_MAX_POINTS)
			.optional(),
		button: z.enum(["left", "right", "middle"]).optional(),
		coordinate_token: coordinateToken,
		zoom_id: zoomId,
	})
	.superRefine((args, ctx) => {
		const ends = args.from !== undefined || args.to !== undefined;
		if (args.path !== undefined && ends) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["path"],
				message: "Pass either from and to, or path — not both.",
			});
		} else if (args.path === undefined && (args.from === undefined || args.to === undefined)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: [args.from === undefined ? "from" : "to"],
				message: `Required unless path is given: pass from and to, or a path of ${COMPUTER_USE_DRAG_PATH_MIN_POINTS}–${COMPUTER_USE_DRAG_PATH_MAX_POINTS} points.`,
			});
		}
	})
	.superRefine(requireCoordinateTokenForApp)
	.superRefine(requireAimInItsSpace);

const dragArguments: z.ZodType<DragArguments, z.ZodTypeDef, unknown> = DRAG_PATHS
	? pathDragArguments
	: twoPointDragArguments;

/** The points a drag travels, in order: the path, or the two ends. */
function dragPath(args: DragArguments): Aim[] {
	if (args.path !== undefined) {
		return [...args.path];
	}
	// Both are present here: the schemas require the ends when there is no path.
	return [args.from as Aim, args.to as Aim];
}

/**
 * The drag arguments a companion call forwards beside the path — the button
 * and the coordinate token — exactly as the parse left them: a key the model
 * set is forwarded, a key it did not is absent.
 */
function companionDragArguments(args: DragArguments): Record<string, unknown> {
	const forwarded: Record<string, unknown> = {};
	if ("button" in args) {
		forwarded.button = args.button;
	}
	if ("coordinate_token" in args) {
		forwarded.coordinate_token = args.coordinate_token;
	}
	return forwarded;
}

const typeArguments = z
	.object({
		target,
		text: z.string().min(1).max(4000),
		element_id: elementId,
		snapshot_id: snapshotId,
		coordinate_token: coordinateToken,
	})
	.superRefine((args, ctx) => {
		requireElementPair(args, ctx);
		if (args.element_id !== undefined && args.coordinate_token !== undefined) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["coordinate_token"],
				message:
					"Typing into an element by element_id takes no coordinate_token.",
			});
		}
	});

const keyArguments = z.object({ target, key: z.string().min(1).max(100) });

const scrollArguments = z
	.object({
		target,
		x: aimX,
		y: aimY,
		direction: z.enum(["up", "down", "left", "right"]).optional(),
		// The wire contract (and the sidecar) cap scroll at 20 ticks; advertising
		// more would under-scroll silently.
		amount: z.number().int().min(1).max(20).optional(),
		coordinate_token: coordinateToken,
		zoom_id: zoomId,
	})
	.superRefine(requireCoordinateTokenForApp)
	.superRefine(requireAimInItsSpace);

const waitArguments = z.object({
	ms: z.number().int().min(0).max(30_000).optional(),
});

// The tools a batch step may name, by the names the model knows them by, and
// the sidecar's wire name for each. Observations (`computer_screenshot`,
// `computer_zoom`, `computer_wait`) return their own frame and have no place
// in a batch that returns one; a batch cannot nest.
const BATCH_STEP_TOOLS = {
	computer_click: "computer_use_click",
	computer_drag: "computer_use_drag",
	computer_key: "computer_use_press_key",
	computer_type: "computer_use_typing",
	computer_scroll: "computer_use_scroll",
	computer_move: "computer_use_mouse_move",
} as const satisfies Record<string, ComputerUseBatchStepTool>;
type BatchStepToolName = keyof typeof BATCH_STEP_TOOLS;
const BATCH_STEP_TOOL_NAMES = [
	"computer_click",
	"computer_drag",
	"computer_key",
	"computer_type",
	"computer_scroll",
	"computer_move",
] as const satisfies readonly BatchStepToolName[];

// A step's `args` are the lone tool's, checked with that tool's own schema and
// advertised keys once the tool is known (`wireBatchStep`), so a refusal is
// worded as the lone tool would word it, at the step's index.
const batchStepArguments = z.object({
	tool: z.enum(BATCH_STEP_TOOL_NAMES),
	args: z.record(z.unknown()),
	expect_change: z.boolean().optional(),
});

const batchArguments = z
	.object({
		steps: z
			.array(batchStepArguments)
			.min(1)
			.max(COMPUTER_USE_BATCH_MAX_KEYBOARD_STEPS),
		allow_destructive: z.boolean().optional(),
	})
	.superRefine((batch, ctx) => {
		// The mix-dependent cap: the wire schema's maximum is the keyboard
		// cap, and the shared predicate (the sidecar applies the same one)
		// brings it down to the pointer cap when any step aims.
		const names = batch.steps.map(step => BATCH_STEP_TOOLS[step.tool]);
		if (!computerUseBatchStepsAllowed(names)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["steps"],
				message: `${batch.steps.length} steps; a batch may have at most ${COMPUTER_USE_BATCH_MAX_STEPS} when any step is computer_click, computer_drag, computer_scroll or computer_move (${COMPUTER_USE_BATCH_MAX_KEYBOARD_STEPS} when every step is computer_key or computer_type). Split it into several batches and look at the screen between them.`,
			});
		}
	});

const APP_SELECTORS = ["pid", "bundle_id", "app_path", "app_name"] as const;

const resolveAppArguments = z
	.object({
		pid: z.number().int().positive().optional(),
		bundle_id: z.string().min(1).optional(),
		app_path: z.string().min(1).optional(),
		app_name: z.string().min(1).optional(),
	})
	.refine(
		args => APP_SELECTORS.filter(key => args[key] !== undefined).length === 1,
		"Pass exactly one of pid, bundle_id, app_path, or app_name."
	);

const appStateArguments = z
	.object({
		target: appTarget,
		element_id: elementId,
		snapshot_id: snapshotId,
	})
	.superRefine(requireElementPair);

const elementArguments = z.object({
	target: appTarget,
	element_id: z.number().int().positive(),
	snapshot_id: z.string().min(1),
});

const setValueArguments = elementArguments.extend({ value: z.string() });

const appActionArguments = elementArguments.extend({
	action: z.string().min(1).max(100),
});

// With a zoom_id the same x and y are pixels of the zoom image, whose bound
// differs from the canvas; the model needs both ranges spelled out.
const ZOOM_AIM_NOTE = ZOOM_SCOPE
	? ` With zoom_id, a pixel of that zoom image instead (its size is quoted in the computer_zoom result; never more than ${COMPUTER_USE_ZOOM_MAX_EDGE_PX}).`
	: "";

// Where the descriptors are compacted the instructions state the canvas and
// the zoom_id argument states the switch to zoom-image pixels, so an axis
// carries its type and nothing more.
function coordinateDescription(axis: "X" | "Y"): { description: string } | Record<never, never> {
	return COMPACT_DESCRIPTORS
		? {}
		: {
			description:
				`${axis} pixel coordinate in the ${CANVAS_DESCRIPTION} screenshot canvas.` + ZOOM_AIM_NOTE,
		};
}

const coordinateProperties = {
	x: {
		type: "integer",
		...aimRange(AIM_MAX.x),
		...coordinateDescription("X"),
	},
	y: {
		type: "integer",
		...aimRange(AIM_MAX.y),
		...coordinateDescription("Y"),
	},
} as const;

const pointSchemaJson = {
	type: "object",
	properties: {
		x: { type: "integer", ...aimRange(AIM_MAX.x) },
		y: { type: "integer", ...aimRange(AIM_MAX.y) },
	},
	// Both axes are validated (`point`); the requirement is advertised only
	// where the descriptor is not compacted.
	...(COMPACT_DESCRIPTORS ? {} : { required: ["x", "y"] }),
} as const;

// A drag end's description; the zoom_id rule is the zoom_id argument's and
// the instructions' where the descriptors are compacted.
function dragPointDescription(end: "start" | "end"): string {
	return COMPACT_DESCRIPTORS
		? `Drag ${end} point.`
		: `Drag ${end} point in latest-screenshot pixels.` + ZOOM_AIM_NOTE;
}

// A drag end's schema. Where the tool also takes a path, `from` and `to`
// carry no description: the names say it, the lead sentence says it, and the
// bytes pay for the path form inside the listing budget.
function dragEndSchemaJson(end: "start" | "end"): Record<string, unknown> {
	return DRAG_PATHS
		? pointSchemaJson
		: { ...pointSchemaJson, description: dragPointDescription(end) };
}

// The drag tool's detail where paths exist: the one sentence that tells the
// model a polyline is one call, and the rule the sidecar holds it to. Every
// word here and in the `path` property below is paid for out of the listing
// budget (`tools.test.ts`), which is why the property carries no `items`
// schema (the two ends above show the point shape) and the tool no longer
// lists `required` (either form is complete on its own).
const DRAG_PATH_DETAIL = `Or pass path (${COMPUTER_USE_DRAG_PATH_MIN_POINTS}–${COMPUTER_USE_DRAG_PATH_MAX_POINTS} points) to drag through them in order in one call (a whole outline); a path of over two points must stay inside the window it starts in.`;

/** Advertised only where the sidecar takes a path; the model never sees it on macOS. */
const dragPathProperty = DRAG_PATHS
	? {
		path: {
			type: "array",
			minItems: COMPUTER_USE_DRAG_PATH_MIN_POINTS,
			maxItems: COMPUTER_USE_DRAG_PATH_MAX_POINTS,
			description: "{x, y} points, in order; replaces from and to.",
		},
	}
	: {};

const appTargetSchemaJson = {
	type: "object",
	properties: {
		scope: { type: "string", const: "app" },
		pid: {
			type: "integer",
			minimum: 1,
			description: "pid from computer_apps or computer_resolve_app.",
		},
		target_id: {
			type: "string",
			minLength: 1,
			description: "target_id from computer_apps or computer_resolve_app.",
		},
	},
	required: ["scope", "pid", "target_id"],
} as const;

/** Advertised only where app targets exist; the model never sees them on Windows. */
function appScopeOnly<Properties extends Record<string, unknown>>(
	properties: Properties
): Properties | Record<never, never> {
	return APP_SCOPE ? properties : {};
}

const targetProperty = appScopeOnly({
	target: {
		description:
			'Default: {"scope":"app","pid":…,"target_id":…} from computer_apps or computer_resolve_app. That drives one macOS app without taking screen control or moving the real cursor (a cursor overlay is still shown), and needs no computer_start_control. Omit (or {"scope":"screen"}) only to escalate to full-display remote control.',
		oneOf: [
			{
				type: "object",
				properties: { scope: { type: "string", const: "screen" } },
				required: ["scope"],
			},
			appTargetSchemaJson,
		],
	},
});

const appTargetProperty = {
	target: {
		...appTargetSchemaJson,
		description: "The app to act on.",
	},
} as const;

const coordinateTokenProperty = appScopeOnly({
	coordinate_token: {
		type: "string",
		minLength: 1,
		description:
			"Required with an app target: the coordinate_token from the latest computer_screenshot of this app. It stays valid until the next screenshot or until the window moves or resizes; screenshot again when an action reports it stale.",
	},
});

/** Advertised only where zoom exists; the model never sees it on macOS. */
function zoomScopeOnly<Properties extends Record<string, unknown>>(
	properties: Properties
): Properties | Record<never, never> {
	return ZOOM_SCOPE ? properties : {};
}

// Zoom exists only on Windows, whose descriptors are compacted: the argument
// names the space it switches to and the staleness rule, and the instructions
// carry the rest. The id's length is validated (`zoomId`) but not advertised:
// the model copies it from the zoom result, it never composes one.
const zoomIdProperty = zoomScopeOnly({
	zoom_id: {
		type: "string",
		description:
			"Id from a computer_zoom result: x and y are then pixels of that zoom image.",
	},
});

const zoomDragIdProperty = zoomScopeOnly({
	zoom_id: {
		type: "string",
		description:
			"Id from a computer_zoom result: the points are then pixels of that zoom image.",
	},
});

// The region is a canvas rectangle, so its corners' bound is exact and is
// advertised (unlike an aim's, see `aimRange`). The corners carry no
// description of their own: the tool's description names which corner is
// which, that both are inclusive, and the long-edge cap, and the listing
// budget (`tools.test.ts`) is spent on the drag path instead.
const zoomCornerProperties = {
	x1: { type: "integer", minimum: 0, maximum: CANVAS.width - 1 },
	y1: { type: "integer", minimum: 0, maximum: CANVAS.height - 1 },
	x2: { type: "integer", minimum: 0, maximum: CANVAS.width - 1 },
	y2: { type: "integer", minimum: 0, maximum: CANVAS.height - 1 },
} as const;

const snapshotIdProperty = {
	snapshot_id: {
		type: "string",
		minLength: 1,
		description:
			"The snapshot_id from computer_app_state, or from a screenshot that reused a live handle. It stays valid across actions until you read a new tree, the window or app changes, or an edit opens a sheet or replaces the tree. Do not call computer_app_state after a screenshot that reused snapshot_id; read computer_app_state when a screenshot omitted the tree or an action reports the snapshot stale.",
	},
} as const;

const elementIdProperty = {
	element_id: {
		type: "integer",
		minimum: 1,
		description: "An element id in brackets from computer_app_state.",
	},
} as const;

interface ComputerUseMcpToolOptions {
	/** Injectable for tests; defaults to a real sleep. */
	delay?: (ms: number) => Promise<void>;
	/** Extension-owned permission preflight for delayed screenshots. */
	preflight?: (ctx: Context) => Promise<void>;
	/**
	 * Glass companion path: refuse screen-scope `computer_type`.
	 * Off for private-worker `--computer-use` (whole-screen typing only).
	 */
	companionDefault?: boolean;
	/**
	 * Hold the remote-control lease for the turn: take it with a turn's first
	 * input action and release it when the turn ends (`onTurnEnded`), so the
	 * presence the sidecar keys to the lease comes up with the first action
	 * and goes down with the turn whether or not the model calls the control
	 * tools. Off, the control tools are the model's alone and a turn end is
	 * ignored. Defaults to `TURN_LEASE`: on for Windows, off for macOS.
	 */
	turnLease?: boolean;
	/**
	 * The Windows batch gate (`windows_computer_use_batch`), read at each
	 * `computer_batch` call exactly as the extension reads it at each listing,
	 * so the batch runs when and only when it is listed. Off, or unreadable,
	 * a call by name is the unknown tool it is on a build without the batch.
	 * Defaults to off: a toolset that was not handed the gate never runs one.
	 */
	batch?: () => Promise<boolean>;
	/**
	 * macOS companion `computer_attempt`: its decider (`ComputerUseDecideNextAction`)
	 * and the `computer_use_next_action` gate, read at each call exactly as
	 * the extension reads it at each listing. Without it the tool is not
	 * registered.
	 */
	attempt?: {
		decide: (input: DecideInput, signal: AbortSignal) => Promise<NextActionAnswers>;
		enabled: () => Promise<boolean>;
	};
}

/** Every option defaulted; `attempt` stays optional because there is no default decider. */
type ResolvedToolOptions = Required<Omit<ComputerUseMcpToolOptions, "attempt">> &
	Pick<ComputerUseMcpToolOptions, "attempt">;

interface ToolDefinition<Schema extends z.ZodType> {
	descriptor: ComputerUseMcpToolDescriptor;
	schema: Schema;
	run: (
		ctx: Context,
		sidecar: ComputerUseBackend,
		args: z.infer<Schema>,
		options: ResolvedToolOptions
	) => Promise<ComputerUseMcpResult>;
}

interface RegisteredTool {
	descriptor: ComputerUseMcpToolDescriptor;
	/** The argument names the descriptor advertises: the keys a strict call may carry. */
	advertised: ReadonlySet<string>;
	validateAndRun: (
		ctx: Context,
		sidecar: ComputerUseBackend,
		args: Record<string, unknown>,
		options: ResolvedToolOptions
	) => Promise<ComputerUseMcpResult>;
}

async function sidecarContent(
	result: SidecarToolResult,
	fallbackMessage: string
): Promise<ComputerUseMcpResult> {
	const content: ComputerUseMcpContent[] = [
		{
			type: "text",
			text: result.message.trim().length > 0 ? result.message : fallbackMessage,
		},
	];
	if (result.screenshot !== undefined) {
		const screenshot = await encodeModelScreenshot(result.screenshot);
		content.push({
			type: "image",
			data: screenshot.data,
			mimeType: screenshot.mimeType,
		});
	}
	const inset = insetContent(result);
	if (inset !== undefined) {
		// After the full frame, with its caption between the two images, so
		// the model reads which image is which before it sees the second.
		const image = await encodeZoomImage(inset.image);
		content.push(
			{ type: "text", text: inset.caption },
			{ type: "image", data: image.data, mimeType: image.mimeType }
		);
	}
	return { content };
}

/**
 * The action-result inset a Windows sidecar attached to a click, drag,
 * typing or key-press result (`result.inset`, described by
 * `structuredContent.inset`): a 2x look around what the action did, with
 * its own zoom_id. Only where that sidecar is; the macOS sidecar sends none,
 * and off Windows an `inset` field is ignored so the result is exactly what
 * it was. An image without its caption is dropped too: the caption is the
 * model's whole contract for the second image, and an unlabelled crop would
 * read as another screenshot.
 */
function insetContent(
	result: SidecarToolResult
): { image: SidecarToolImage; caption: string } | undefined {
	if (!INSET_SCOPE || result.inset === undefined) {
		return undefined;
	}
	const caption = result.structuredContent?.inset?.caption;
	if (caption === undefined || caption.trim().length === 0) {
		return undefined;
	}
	return { image: result.inset, caption };
}

/**
 * A zoom result carries its image at the zoom's own size rather than the
 * canvas's, so it takes the variable-size encoder. The sidecar's text already
 * quotes the `zoom_id` and the image's coordinate range.
 */
async function zoomContent(
	result: SidecarToolResult,
	fallbackMessage: string
): Promise<ComputerUseMcpResult> {
	const content: ComputerUseMcpContent[] = [
		{
			type: "text",
			text: result.message.trim().length > 0 ? result.message : fallbackMessage,
		},
	];
	if (result.screenshot !== undefined) {
		const image = await encodeZoomImage(result.screenshot);
		content.push({ type: "image", data: image.data, mimeType: image.mimeType });
	}
	return { content };
}

/** The zoom aim to hand a backend, or nothing when the action is in canvas pixels. */
function zoomAim(zoom_id: string | undefined): { zoomId: string } | undefined {
	return zoom_id === undefined ? undefined : { zoomId: zoom_id };
}

// The bottom band of the canvas where the Windows taskbar (and its Start
// button) sits: 8 % of the height covers a 48-logical-pixel taskbar at every
// display scale the canvas is drawn at, letterbox bars included. The fallback
// for a sidecar that does not classify the click's surface (below).
const TASKBAR_BAND_FRACTION = 0.92;
// Below this share of the canvas changing, a launch click reads as "nothing
// happened" — the audited launch click measured 0.0143. The sidecar's own
// launch-settle threshold is the same 0.02.
const SMALL_CHANGE_FRACTION = 0.02;
// Phrased as a condition, not a diagnosis: the band also holds a page's
// bottom edge (an audited cookie-banner close at y=774 drew the old "you
// clicked the taskbar" wording), and the model knows what it meant to do.
const LAUNCH_HINT =
	"If this click was meant to open or switch to an app, its window may take a second: call computer_wait (1000–3000 ms) and look again before trying another route.";
// The hint reads the Windows sidecar's structured content; the macOS sidecar
// reports no change measure, and its taskbar is not at the bottom.
const TASKBAR_LAUNCH_HINT = process.platform === "win32";

/**
 * The shell surface a click landed on, as a sidecar that classifies clicks
 * reports it in `structuredContent.click.target` (settle rev 3). Older
 * sidecars report none.
 */
type ClickTarget = "taskbar" | "start" | "desktop" | "window";
const CLICK_TARGETS: ReadonlySet<string> = new Set<ClickTarget>([
	"taskbar",
	"start",
	"desktop",
	"window",
]);

/**
 * A named object of the sidecar's structured content, which the protocol
 * schema passes through untyped: the settle fields (`change`, `click`) are
 * newer than the schema, and an older sidecar sends none of them.
 */
function structuredField(result: SidecarToolResult, name: string): Record<string, unknown> | undefined {
	const field: unknown = (result.structuredContent as Record<string, unknown> | undefined)?.[name];
	return typeof field === "object" && field !== null ? (field as Record<string, unknown>) : undefined;
}

/** `structuredContent.click.target` when the sidecar sent one it knows; undefined otherwise. */
export function clickTarget(result: SidecarToolResult): ClickTarget | undefined {
	const target: unknown = structuredField(result, "click")?.target;
	return typeof target === "string" && CLICK_TARGETS.has(target)
		? (target as ClickTarget)
		: undefined;
}

/**
 * The share of the canvas the Windows sidecar measured as changed by the
 * action, `structuredContent.change.fraction` (settle rev 1; 0 when nothing
 * visibly changed). Undefined from a sidecar that sends none, or one that
 * sends something that is not a fraction. Read from the structured content,
 * never the text: the result text is the sidecar's to reword.
 */
export function changeFraction(result: SidecarToolResult): number | undefined {
	const fraction: unknown = structuredField(result, "change")?.fraction;
	return typeof fraction === "number" && Number.isFinite(fraction) && fraction >= 0 && fraction <= 1
		? fraction
		: undefined;
}

/**
 * The sentence to append to a click result when the click landed on a launch
 * surface and little changed — the situation a fixed after-capture misreads
 * as a failed launch (measured: a 30 s detour reopening an app that was
 * already open). Windows only, and only from a sidecar that measures the
 * change (`change.fraction`); without it there is nothing to judge and the
 * hint stays out. The surface is the sidecar's `click.target` when it sends
 * one: the taskbar, Start and the desktop launch, a window does not, and a
 * zoom-aimed click counts like any other since the surface is known. Without
 * one, the taskbar band of the canvas stands in, and a zoom-aimed click is
 * left alone because its coordinates are not canvas pixels. Undefined when no
 * hint applies.
 */
export function taskbarLaunchHint(
	click: { y: number; zoom_id?: string },
	result: SidecarToolResult
): string | undefined {
	if (!TASKBAR_LAUNCH_HINT) {
		return undefined;
	}
	const fraction = changeFraction(result);
	if (fraction === undefined || fraction >= SMALL_CHANGE_FRACTION) {
		return undefined;
	}
	const target = clickTarget(result);
	if (target !== undefined) {
		return target === "window" ? undefined : LAUNCH_HINT;
	}
	if (click.zoom_id !== undefined || click.y < CANVAS.height * TASKBAR_BAND_FRACTION) {
		return undefined;
	}
	return LAUNCH_HINT;
}

/** `sidecarContent` for a click, with the launch hint appended when it applies. */
async function clickContent(
	result: SidecarToolResult,
	click: { y: number; zoom_id?: string }
): Promise<ComputerUseMcpResult> {
	const mcp = await sidecarContent(result, "Clicked.");
	const hint = taskbarLaunchHint(click, result);
	const text = mcp.content[0];
	if (hint !== undefined && text?.type === "text") {
		text.text = `${text.text} ${hint}`;
	}
	return mcp;
}

/**
 * The sidecar keeps the handles a follow-up app call must quote only in
 * `structuredContent`, which never reaches the model, so they are appended as
 * text lines after the sidecar's own text. The AX tree is already in that text.
 */
async function appContent(
	result: SidecarToolResult,
	fallbackMessage: string
): Promise<ComputerUseMcpResult> {
	const mcp = await sidecarContent(result, fallbackMessage);
	const structured = result.structuredContent;
	const lines: string[] = [];
	for (const app of structured?.system?.apps ?? []) {
		lines.push(
			`APP pid=${app.pid} target_id=${JSON.stringify(app.targetID)} active=${app.isActive}` +
			(app.localizedName === undefined
				? ""
				: ` app=${JSON.stringify(app.localizedName)}`) +
			(app.bundleIdentifier === undefined
				? ""
				: ` bundle=${JSON.stringify(app.bundleIdentifier)}`)
		);
	}
	if (structured?.coordinateToken !== undefined) {
		lines.push(`coordinate_token=${structured.coordinateToken}`);
	}
	if (structured?.snapshotID !== undefined) {
		lines.push(`snapshot_id=${structured.snapshotID}`);
	}
	if (lines.length > 0) {
		mcp.content.push({ type: "text", text: lines.join("\n") });
	}
	return mcp;
}

async function callApp(
	ctx: Context,
	sidecar: ComputerUseBackend,
	name: CompanionSidecarToolName,
	target: AppTarget | undefined,
	args: Record<string, unknown>,
	fallbackMessage: string
): Promise<ComputerUseMcpResult> {
	if (sidecar.callCompanion === undefined) {
		throw new Error(
			"App targets need the macOS computer-use helper. Use the screen target."
		);
	}
	const result = await sidecar.callCompanion(ctx, name, {
		...(target && { pid: target.pid, target_id: target.target_id }),
		...args,
	});
	return appContent(result, fallbackMessage);
}

function refuseCompanionTyping(
	args: {
		target?: z.infer<typeof target>;
	},
	options: ResolvedToolOptions
): void {
	if (!options.companionDefault || !APP_SCOPE) {
		return;
	}
	if (args.target?.scope !== "app") {
		throw localRefusal(
			"invalid_arguments",
			'Invalid arguments for computer_type: target: Screen-scope typing is refused. Pass {"scope":"app","pid":…,"target_id":…}. Prefer computer_set_value or computer_type with element_id when the field is marked settable. Without element_id, click a text field first if nothing text-like is focused.'
		);
	}
}

/**
 * An argument or tool-name problem caught before anything reaches the sidecar.
 * Where refusals are structured it is one too, so the model gets the same
 * `invalid_arguments` / `unknown_tool` codes the sidecar would have used;
 * elsewhere it stays the thrown error it always was.
 */
function localRefusal(
	code: "invalid_arguments" | "unknown_tool",
	message: string
): Error {
	if (!STRUCTURED_REFUSALS) {
		return new Error(message);
	}
	return new ComputerUseRefusalError(
		computerUseRefusal(
			code,
			message,
			code === "invalid_arguments"
				? {
					recommended: "retry",
					reason:
						"Nothing was actuated. Correct the argument the message names and call the same tool again.",
				}
				: {
					recommended: "use_different_tool",
					reason:
						"No tool by that name exists here; use one of the advertised computer-use tools.",
				}
		)
	);
}

// The schemas are `z.object`s, which drop keys they do not declare. In a live
// Windows session a context summary took the schemas out of the model's
// context; it then sent computer_scroll {"ticks": 6}, {"ticks": 4}, {"ticks":
// -4} and each ran as the default scroll (84 s, one of them the wrong way)
// with nothing said. On Windows an argument the tool does not advertise is
// refused with the advertised ones named, so one retry fixes it. macOS keeps
// the lenient parse it always had: its remote mode accepts arguments its
// descriptors do not show (`zoom_id`, the companion `target`) and drops them
// by design, and its errors are thrown rather than structured.
const STRICT_ARGUMENTS = process.platform === "win32";

/** An unknown-argument refusal, or undefined when every key is advertised. */
function unknownArgumentRefusal(
	descriptor: ComputerUseMcpToolDescriptor,
	advertised: ReadonlySet<string>,
	args: Record<string, unknown>
): Error | undefined {
	const unknown = Object.keys(args).filter(key => !advertised.has(key));
	if (unknown.length === 0) {
		return undefined;
	}
	const list = (keys: readonly string[]): string => keys.map(key => `"${key}"`).join(", ");
	return localRefusal(
		"invalid_arguments",
		`Invalid arguments for ${descriptor.name}: unknown argument${unknown.length === 1 ? "" : "s"} ${list(unknown)}; ` +
		(advertised.size === 0
			? `${descriptor.name} takes no arguments.`
			: `the arguments of ${descriptor.name} are ${list([...advertised])}.`)
	);
}

function defineTool<Schema extends z.ZodType>(
	definition: ToolDefinition<Schema>
): RegisteredTool {
	// The advertised parameters, from the JSON the model reads — the one
	// source that cannot disagree with what it was told.
	const advertised: ReadonlySet<string> = new Set(
		Object.keys(
			(JSON.parse(definition.descriptor.parameters) as { properties?: Record<string, unknown> })
				.properties ?? {}
		)
	);
	return {
		descriptor: definition.descriptor,
		advertised,
		validateAndRun: (ctx, sidecar, args, options) => {
			if (STRICT_ARGUMENTS) {
				const refusal = unknownArgumentRefusal(definition.descriptor, advertised, args);
				if (refusal !== undefined) {
					throw refusal;
				}
			}
			const parsed = definition.schema.safeParse(args);
			if (!parsed.success) {
				throw localRefusal(
					"invalid_arguments",
					`Invalid arguments for ${definition.descriptor.name}: ${schemaIssues(parsed.error)}`
				);
			}
			return definition.run(ctx, sidecar, parsed.data, options);
		},
	};
}

/** A schema failure's issues as one line: `path: message; path: message`. */
function schemaIssues(error: z.ZodError): string {
	return error.issues
		.map(issue => `${issue.path.join(".") || "arguments"}: ${issue.message}`)
		.join("; ");
}

/**
 * One batch step as the sidecar runs it: the step's `args` checked exactly as
 * a lone call of that tool would be — the advertised keys, then the tool's
 * schema — and converted to the wire arguments the lone tool's `run` sends.
 * A failure is an `invalid_arguments` refusal naming the step, so nothing
 * runs when any step is malformed.
 */
function wireBatchStep(
	lone: ReadonlyMap<string, RegisteredTool>,
	step: z.infer<typeof batchStepArguments>,
	index: number
): ComputerUseBatchStep {
	const tool = lone.get(step.tool);
	if (tool === undefined) {
		throw localRefusal(
			"invalid_arguments",
			`Invalid arguments for computer_batch: steps[${index}] names ${step.tool}, which is not a tool of this toolset.`
		);
	}
	const at = `Invalid arguments for computer_batch: steps[${index}] (${step.tool})`;
	if (STRICT_ARGUMENTS) {
		const unknown = Object.keys(step.args).filter(key => !tool.advertised.has(key));
		if (unknown.length > 0) {
			const list = (keys: readonly string[]): string => keys.map(key => `"${key}"`).join(", ");
			throw localRefusal(
				"invalid_arguments",
				`${at}: unknown argument${unknown.length === 1 ? "" : "s"} ${list(unknown)}; the arguments of ${step.tool} are ${list([...tool.advertised])}.`
			);
		}
	}
	const refuse = (error: z.ZodError): Error =>
		localRefusal("invalid_arguments", `${at}: ${schemaIssues(error)}`);
	const wire = (name: ComputerUseBatchStepTool, args: Record<string, unknown>): ComputerUseBatchStep => ({
		name,
		arguments: args,
		expectChange: step.expect_change ?? false,
	});
	const zoom = (zoom_id: string | undefined): Record<string, unknown> =>
		zoom_id === undefined ? {} : { zoom_id };
	// Each arm mirrors the lone tool's `run` — same defaults, same wire keys —
	// so a batched step and a lone call reach the sidecar identically.
	switch (step.tool) {
		case "computer_click": {
			const parsed = clickArguments.safeParse(step.args);
			if (!parsed.success) {
				throw refuse(parsed.error);
			}
			const { x, y, button, count, zoom_id } = parsed.data;
			return wire("computer_use_click", {
				x,
				y,
				button: button ?? "left",
				count: count ?? 1,
				...zoom(zoom_id),
			});
		}
		case "computer_move": {
			const parsed = moveArguments.safeParse(step.args);
			if (!parsed.success) {
				throw refuse(parsed.error);
			}
			const { x, y, zoom_id } = parsed.data;
			return wire("computer_use_mouse_move", { x, y, ...zoom(zoom_id) });
		}
		case "computer_drag": {
			const parsed = dragArguments.safeParse(step.args);
			if (!parsed.success) {
				throw refuse(parsed.error);
			}
			// Two ends or a path, whichever the lone tool takes here.
			return wire("computer_use_drag", {
				button: parsed.data.button ?? "left",
				path: dragPath(parsed.data),
				...zoom(parsed.data.zoom_id),
			});
		}
		case "computer_type": {
			const parsed = typeArguments.safeParse(step.args);
			if (!parsed.success) {
				throw refuse(parsed.error);
			}
			return wire("computer_use_typing", { value: parsed.data.text });
		}
		case "computer_key": {
			const parsed = keyArguments.safeParse(step.args);
			if (!parsed.success) {
				throw refuse(parsed.error);
			}
			return wire("computer_use_press_key", { key: parsed.data.key });
		}
		case "computer_scroll": {
			const parsed = scrollArguments.safeParse(step.args);
			if (!parsed.success) {
				throw refuse(parsed.error);
			}
			const { x, y, direction, amount, zoom_id } = parsed.data;
			return wire("computer_use_scroll", {
				x,
				y,
				direction: direction ?? "down",
				amount: amount ?? SCROLL_DEFAULT_TICKS,
				...zoom(zoom_id),
			});
		}
		default: {
			const exhaustive: never = step.tool;
			throw new Error(`Unhandled batch step tool ${String(exhaustive)}`);
		}
	}
}

/**
 * Windows only (`BATCH_SCOPE`), behind the batch gate at listing time and
 * again at call time (`ComputerUseMcpToolset.offered`). The description is
 * the model's guide to *what* to batch — a sequence it has
 * already planned from one look — and to the rules that stop one, in the
 * fewest words (`COMPACT_DESCRIPTORS`); each step's arguments are the lone
 * tool's and are not repeated here.
 */
function batchToolDefinition(lone: ReadonlyMap<string, RegisteredTool>): RegisteredTool {
	return defineTool({
		descriptor: {
			name: BATCH_TOOL_NAME,
			description:
				`Run up to ${COMPUTER_USE_BATCH_MAX_STEPS} actions as one call with one screenshot at the end (${COMPUTER_USE_BATCH_MAX_KEYBOARD_STEPS} when every step is computer_key or computer_type), for a sequence already planned from the current screenshot: pick a tool, then a color, then draw; type a value, then press Return.` +
				" Each step names a tool and its usual args; coordinates and zoom_ids describe the screen as it is now." +
				" The batch stops at the first refused step, at an expect_change step that changed nothing visible, or when the foreground window or its title changes; the result reports each step's change and target and names the steps that did not run." +
				" Do not batch past a step that opens a window, menu or dialog the next step needs to see." +
				" Delete, Backspace, Alt+F4, Ctrl+W, Ctrl+Q, Ctrl+X and Win+L need allow_destructive.",
			parameters: JSON.stringify({
				type: "object",
				properties: {
					steps: {
						type: "array",
						minItems: 1,
						maxItems: COMPUTER_USE_BATCH_MAX_KEYBOARD_STEPS,
						items: {
							type: "object",
							properties: {
								tool: { type: "string", enum: BATCH_STEP_TOOL_NAMES },
								args: {
									type: "object",
									description: "That tool's arguments, as for a lone call.",
								},
								expect_change: {
									type: "boolean",
									description: "Stop the batch if this step changes nothing visible.",
								},
							},
							required: ["tool", "args"],
						},
					},
					allow_destructive: {
						type: "boolean",
						description: "Allow keys that delete, cut, close or lock.",
					},
				},
				required: ["steps"],
			}),
		},
		schema: batchArguments,
		run: async (ctx, sidecar, { steps, allow_destructive }) => {
			if (sidecar.batch === undefined) {
				throw new Error(
					"The batch needs the Windows computer-use sidecar. Run the steps as separate calls."
				);
			}
			const wired = steps.map((step, index) => wireBatchStep(lone, step, index));
			return sidecarContent(
				await sidecar.batch(ctx, {
					steps: wired,
					allowDestructive: allow_destructive ?? false,
				}),
				"Ran the batch."
			);
		},
	});
}

/**
 * The registered tools: the shared set, then — with `batch`, where the
 * Windows sidecar is — the batch, which runs the shared actions by name and
 * so is built from them, and — with `attempt`, on the companion path —
 * `computer_attempt`.
 */
function toolDefinitions({
	companionScope,
	batch,
	attempt,
}: {
	companionScope: boolean;
	batch: boolean;
	attempt: boolean;
}): RegisteredTool[] {
	const shared = sharedToolDefinitions(companionScope);
	return [
		...shared,
		...(batch && BATCH_SCOPE
			? [batchToolDefinition(new Map(shared.map(tool => [tool.descriptor.name, tool])))]
			: []),
		...(attempt && companionScope ? [attemptToolDefinition()] : []),
	];
}

function sharedToolDefinitions(companionScope: boolean): RegisteredTool[] {
	const resultNote = companionScope
		? " With an app target the result is text only; observe again before the next action."
		: "";
	const advertisedTarget = companionScope ? targetProperty : {};
	const advertisedCoordinateToken = companionScope ? coordinateTokenProperty : {};
	const advertisedElement = companionScope
		? { ...elementIdProperty, ...snapshotIdProperty }
		: {};
	return [
		defineTool({
			descriptor: {
				name: "computer_screenshot",
				description:
					"Take a screenshot of the primary display" +
					(companionScope ? ", or of one app's window with an app target." : ".") +
					// The instructions' "look before you click" bullet says when.
					(COMPACT_DESCRIPTORS
						? ""
						: ` ${COORDINATE_SPACE_NOTE} Take one before your first coordinate-based action and whenever the screen may have changed.`) +
					(companionScope
						? " An app-target screenshot is the image. When a live snapshot is still fresh it reuses that snapshot_id and does not walk. If snapshot_id is present, do not call computer_app_state. Otherwise the image returns without a tree; call computer_app_state when you need element ids."
						: ""),
				parameters: JSON.stringify({
					type: "object",
					properties: { ...advertisedTarget },
				}),
			},
			schema: z.object({ target }),
			run: async (ctx, sidecar, { target }) =>
				target?.scope === "app"
					? callApp(ctx, sidecar, "computer_use_screenshot", target, {}, "Captured a screenshot.")
					: sidecarContent(await sidecar.screenshot(ctx), "Captured a screenshot."),
		}),
		...(ZOOM_SCOPE ? [zoomToolDefinition()] : []),
		defineTool({
			descriptor: {
				name: "computer_click",
				description:
					screenActionDescription({
						lead: "Click at a screen coordinate.",
						detail: lookFirst("Locate the target in a fresh screenshot first."),
						returns: "the click",
					}) + resultNote,
				parameters: JSON.stringify({
					type: "object",
					properties: {
						...advertisedTarget,
						...coordinateProperties,
						button: {
							type: "string",
							enum: ["left", "right", "middle"],
							description: "Mouse button. Defaults to left.",
						},
						count: {
							type: "integer",
							minimum: 1,
							maximum: 3,
							description: "Click count; 2 double-clicks. Defaults to 1.",
						},
						...advertisedCoordinateToken,
						...zoomIdProperty,
					},
					required: ["x", "y"],
				}),
			},
			schema: clickArguments,
			run: async (ctx, sidecar, { target, zoom_id, ...args }) =>
				target?.scope === "app"
					? callApp(ctx, sidecar, "computer_use_click", target, args, "Clicked.")
					: clickContent(
						await sidecar.click(ctx, {
							coordinate: { x: args.x, y: args.y },
							button: args.button ?? "left",
							count: args.count ?? 1,
							...zoomAim(zoom_id),
						}),
						{ y: args.y, zoom_id }
					),
		}),
		defineTool({
			descriptor: {
				name: "computer_move",
				description:
					screenActionDescription({
						lead: "Move the mouse cursor to a screen coordinate without clicking.",
						detail: "Useful for revealing hover UI.",
						returns: "the move",
					}) + resultNote,
				parameters: JSON.stringify({
					type: "object",
					properties: {
						...advertisedTarget,
						...coordinateProperties,
						...advertisedCoordinateToken,
						...zoomIdProperty,
					},
					required: ["x", "y"],
				}),
			},
			schema: moveArguments,
			run: async (ctx, sidecar, { target, zoom_id, ...args }) => {
				if (target?.scope === "app") {
					return callApp(ctx, sidecar, "computer_use_mouse_move", target, args, "Moved the cursor.");
				}
				const aim = zoomAim(zoom_id);
				return sidecarContent(
					aim === undefined
						? await sidecar.move(ctx, { x: args.x, y: args.y })
						: await sidecar.move(ctx, { x: args.x, y: args.y }, aim),
					"Moved the cursor."
				);
			},
		}),
		defineTool({
			descriptor: {
				name: "computer_drag",
				description:
					screenActionDescription({
						lead: "Press the mouse button at one coordinate, drag to another, and release.",
						detail: DRAG_PATHS ? DRAG_PATH_DETAIL : lookFirst("Locate both points in a fresh screenshot first."),
						returns: "the drag",
					}) + resultNote,
				parameters: JSON.stringify({
					type: "object",
					properties: {
						...advertisedTarget,
						from: dragEndSchemaJson("start"),
						to: dragEndSchemaJson("end"),
						...dragPathProperty,
						button: {
							type: "string",
							enum: ["left", "right", "middle"],
							description: DRAG_PATHS
								? "Defaults to left."
								: "Mouse button to hold. Defaults to left.",
						},
						...advertisedCoordinateToken,
						...zoomDragIdProperty,
					},
					// With a path the ends are one of two complete forms, so
					// neither is required on its own; the description says so.
					...(DRAG_PATHS ? {} : { required: ["from", "to"] }),
				}),
			},
			schema: dragArguments,
			run: async (ctx, sidecar, args) => {
				const path = dragPath(args);
				return args.target?.scope === "app"
					? callApp(
						ctx,
						sidecar,
						"computer_use_drag",
						args.target,
						{ ...companionDragArguments(args), path },
						"Dragged."
					)
					: sidecarContent(
						await sidecar.drag(ctx, {
							button: args.button ?? "left",
							path,
							...zoomAim(args.zoom_id),
						}),
						"Dragged."
					);
			},
		}),
		defineTool({
			descriptor: {
				name: "computer_type",
				description:
					companionScope
						? "Type into a macOS app. Prefer computer_set_value or computer_type with element_id. Without element_id, inserts into the click-selected field via AX, or the focused field. A missed click target is refused. If nothing is focused, click a field first. Does not raise or move the real cursor. Screen-scope typing is refused. The result is text only."
						: COMPACT_DESCRIPTORS
							? "Type text into the focused element using the keyboard. Click the target first so it has focus. A newline in the text presses Enter (it submits or navigates) and a tab presses Tab (next field or cell), so do not send a separate Return or Tab key press for them."
							: "Type text into the focused element using the keyboard. Click the target first so it has focus. Returns a screenshot taken after typing.",
				parameters: JSON.stringify({
					type: "object",
					properties: {
						...advertisedTarget,
						text: {
							type: "string",
							minLength: 1,
							maxLength: 4000,
							description: "Text to type.",
						},
						...advertisedElement,
						...advertisedCoordinateToken,
					},
					required: ["text"],
				}),
			},
			schema: typeArguments,
			run: async (ctx, sidecar, { target, text, ...args }, options) => {
				refuseCompanionTyping({ target }, options);
				return target?.scope === "app"
					? callApp(
						ctx,
						sidecar,
						"computer_use_typing",
						target,
						{ ...args, value: text },
						"Typed."
					)
					: sidecarContent(await sidecar.typeText(ctx, text), "Typed.");
			},
		}),
		defineTool({
			descriptor: {
				name: "computer_key",
				description:
					(WINDOWS_KEYBOARD
						? WINDOWS_KEY_DESCRIPTION
						: 'Press a key or shortcut, such as "Return", "Escape", "Tab", or a chord like "cmd+l" on macOS and "ctrl+l" on Windows. Combine modifiers with "+" (cmd, ctrl, alt, shift). Returns a screenshot taken after the key press.') +
					resultNote,
				parameters: JSON.stringify({
					type: "object",
					properties: {
						...advertisedTarget,
						key: {
							type: "string",
							maxLength: 100,
							description: WINDOWS_KEYBOARD
								? "Key or chord."
								: 'Key or shortcut, e.g. "Return", "Tab", or "cmd+shift+s".',
						},
					},
					required: ["key"],
				}),
			},
			schema: keyArguments,
			run: async (ctx, sidecar, { target, ...args }) =>
				target?.scope === "app"
					? callApp(ctx, sidecar, "computer_use_press_key", target, args, "Pressed the key.")
					: sidecarContent(await sidecar.pressKey(ctx, args.key), "Pressed the key."),
		}),
		defineTool({
			descriptor: {
				name: "computer_scroll",
				description:
					screenActionDescription({
						lead: "Scroll at a screen coordinate.",
						returns: "scrolling",
					}) + resultNote,
				parameters: JSON.stringify({
					type: "object",
					properties: {
						...advertisedTarget,
						...coordinateProperties,
						direction: {
							type: "string",
							enum: ["up", "down", "left", "right"],
							description: "Scroll direction. Defaults to down.",
						},
						amount: {
							type: "integer",
							minimum: 1,
							maximum: 20,
							description: `Scroll amount in wheel ticks. Defaults to ${SCROLL_DEFAULT_TICKS}.`,
						},
						...advertisedCoordinateToken,
						...zoomIdProperty,
					},
					required: ["x", "y"],
				}),
			},
			schema: scrollArguments,
			run: async (ctx, sidecar, { target, zoom_id, ...args }) =>
				target?.scope === "app"
					? callApp(
						ctx,
						sidecar,
						"computer_use_scroll",
						target,
						{ ...args, direction: args.direction ?? "down" },
						"Scrolled."
					)
					: sidecarContent(
						await sidecar.scroll(ctx, {
							coordinate: { x: args.x, y: args.y },
							direction: args.direction ?? "down",
							amount: args.amount ?? SCROLL_DEFAULT_TICKS,
							...zoomAim(zoom_id),
						}),
						"Scrolled."
					),
		}),
		defineTool({
			descriptor: {
				name: "computer_wait",
				description: companionScope
					? "Wait for a page load or animation to settle. Returns text only; it does not capture the display. Observe afterward with computer_screenshot (app target) or computer_app_state."
					: WAIT_FRAME_ON_DEMAND
						? "Wait for the screen to settle (page load, animation). Returns a screenshot only if the screen changed; otherwise text that your last one still stands. Prefer over repeated screenshots."
						: "Wait for the screen to settle, such as during a page load or animation, then return a fresh screenshot. Prefer this over repeated screenshots in a tight loop.",
				parameters: JSON.stringify({
					type: "object",
					properties: {
						ms: {
							...nonNegativeInteger,
							maximum: 30000,
							description: "Milliseconds to wait. Defaults to 1000.",
						},
					},
				}),
			},
			schema: waitArguments,
			run: async (ctx, sidecar, args, options) => {
				const ms = args.ms ?? 1000;
				await options.delay(ms);
				// Companion wait has no app target. Capturing here would
				// take the primary display.
				if (companionScope) {
					return {
						content: [{
							type: "text",
							text: `Waited ${ms}ms. Observe with computer_screenshot (app target) or computer_app_state.`,
						}],
					};
				}
				await options.preflight(ctx);
				// On Windows the wait returns the frame only when the screen
				// changed during it: an unchanged screen answers text-only, so
				// the model's last screenshot still stands and the encode and
				// image tokens are saved. Elsewhere every wait returns a shot.
				const shot =
					WAIT_FRAME_ON_DEMAND && sidecar.screenshotAfterWait !== undefined
						? await sidecar.screenshotAfterWait(ctx)
						: await sidecar.screenshot(ctx);
				const result = await sidecarContent(shot, "Captured a screenshot.");
				return {
					content: [{ type: "text", text: `Waited ${ms}ms.` }, ...result.content],
				};
			},
		}),
		...(PERMISSION_TOOL ? [permissionToolDefinition()] : []),
		...(LEASE_TOOLS ? leaseToolDefinitions(companionScope) : []),
		...(companionScope ? appToolDefinitions() : []),
	];
}

/** The permission probe, where a grant is the model's to check (see `PERMISSION_TOOL`). */
function permissionToolDefinition(): RegisteredTool {
	return defineTool({
		descriptor: {
			name: "computer_check_permissions",
			description:
				"Passively report whether the Accessibility and Screen Recording permissions the computer-use helper needs are granted. On Windows both are always granted. Not needed before acting: an action that needs a missing permission is refused with what the user has to do. Do not call Computer Use tools in parallel; they act on one machine and run one at a time.",
			parameters: JSON.stringify({ type: "object", properties: {} }),
		},
		schema: noArguments,
		run: async (ctx, sidecar) =>
			sidecarContent(
				await sidecar.checkPermissions(ctx),
				"Reported permission state."
			),
	});
}

/** The remote-control lease, where it is the model's to take (see `LEASE_TOOLS`). */
function leaseToolDefinitions(companionScope: boolean): RegisteredTool[] {
	return [
		defineTool({
			descriptor: {
				name: "computer_start_control",
				description:
					companionScope
						? "Escalation only: take over the display and move the real cursor. App targets need no session. Do not call this to type or fill a form."
						: "Start a new remote-control session before sending input.",
				parameters: JSON.stringify({ type: "object", properties: {} }),
			},
			schema: noArguments,
			run: async (ctx, sidecar) => {
				await sidecar.startControl(ctx);
				return {
					content: [{ type: "text", text: "Remote control is ready." }],
				};
			},
		}),
		defineTool({
			descriptor: {
				name: "computer_release_control",
				description:
					"Release remote control after the final " +
					(companionScope ? "screen-scope" : "computer-use") +
					" action.",
				parameters: JSON.stringify({ type: "object", properties: {} }),
			},
			schema: noArguments,
			run: async (ctx, sidecar) => {
				await sidecar.releaseControl(ctx);
				return {
					content: [{ type: "text", text: "Released remote control." }],
				};
			},
		}),
	];
}

/**
 * Windows only. The description is the model's guide to *when* to zoom and
 * how the two coordinate spaces relate: every rule once, in the fewest words
 * (`COMPACT_DESCRIPTORS`); the canvas itself is the instructions' to state.
 */
function zoomToolDefinition(): RegisteredTool {
	return defineTool({
		descriptor: {
			name: "computer_zoom",
			description:
				"Return a region of the latest screenshot as a separate image at native resolution" +
				` (up to ${COMPUTER_USE_ZOOM_MAX_MAGNIFICATION}×), so small or dense UI becomes legible.` +
				" (x1, y1) is the top-left corner and (x2, y2) the bottom-right, inclusive;" +
				` ${ZOOM_PADDING_PERCENT}% padding is added; the region may be up to ${COMPUTER_USE_ZOOM_MAX_REGION_LONG_EDGE_PX} canvas px on its long edge at any aspect, and one under ${COMPUTER_USE_ZOOM_MIN_REGION.width}×${COMPUTER_USE_ZOOM_MIN_REGION.height} is widened to it.` +
				" The result quotes a zoom_id and the image size: pass that zoom_id with x and y in zoom-image pixels to computer_click, computer_move, computer_scroll, or computer_drag." +
				" Actions still return a full-canvas screenshot, and a zoom_id describes the screen as it was when taken.",
			parameters: JSON.stringify({
				type: "object",
				properties: { ...zoomCornerProperties },
				required: ["x1", "y1", "x2", "y2"],
			}),
		},
		schema: zoomArguments,
		run: async (ctx, sidecar, requested) => {
			if (sidecar.zoom === undefined) {
				throw new Error(
					"Zoom needs the Windows computer-use sidecar. Read the screenshot instead."
				);
			}
			// Widened here as well as in the sidecar (`widened_to_minimum`), so
			// a sidecar that predates the minimum still shows the target's
			// surroundings; a sidecar that has it sees a region already wide
			// enough and adds no note of its own.
			const { region, widenedFrom } = computerUseZoomRegionWidened(requested, CANVAS);
			const result = await sidecar.zoom(ctx, region);
			const mcp = await zoomContent(result, "Zoomed.");
			const text = mcp.content[0];
			if (widenedFrom !== undefined && !result.isError && text?.type === "text") {
				// The text is the one channel the model reads: an ok result's
				// structured content stays inside the extension
				// (`ComputerUseMcpResult.structuredContent` carries refusals
				// only), so the sidecar's `zoom.widenedFrom`, written when the
				// sidecar itself widened, has no reader here to keep in step.
				text.text = `${text.text} The requested ${widenedFrom.width}×${widenedFrom.height} canvas px region was widened to the ${COMPUTER_USE_ZOOM_MIN_REGION.width}×${COMPUTER_USE_ZOOM_MIN_REGION.height} minimum around it, so the target has its surroundings in view.`;
			}
			return mcp;
		},
	});
}

/** Tools with no screen equivalent; every one takes an app target. */
function appToolDefinitions(): RegisteredTool[] {
	return [
		defineTool({
			descriptor: {
				name: "computer_apps",
				description:
					"List running macOS apps, frontmost first, with the pid and target_id an app target needs. Regular applications only: Spotlight, Notification Center, and menu extras are unsupported. No permission or screen control is required.",
				parameters: JSON.stringify({ type: "object", properties: {} }),
			},
			schema: noArguments,
			run: (ctx, sidecar) =>
				callApp(ctx, sidecar, "computer_use_apps_list", undefined, {}, "Listed apps."),
		}),
		defineTool({
			descriptor: {
				name: "computer_resolve_app",
				description:
					"Resolve one macOS app by exactly one selector, launching it without activating it if it is not running, and return the pid and target_id for its app target.",
				parameters: JSON.stringify({
					type: "object",
					properties: {
						pid: { type: "integer", minimum: 1 },
						bundle_id: {
							type: "string",
							description: 'Bundle identifier, e.g. "com.apple.calculator".',
						},
						app_path: { type: "string", description: "Path to the .app bundle." },
						app_name: {
							type: "string",
							description: 'Localized app name, e.g. "Calculator".',
						},
					},
					oneOf: APP_SELECTORS.map(key => ({ required: [key] })),
				}),
			},
			schema: resolveAppArguments,
			run: (ctx, sidecar, args) =>
				callApp(ctx, sidecar, "computer_use_select_app", undefined, args, "Resolved the app."),
		}),
		defineTool({
			descriptor: {
				name: "computer_app_state",
				description:
					'Read the app\'s accessibility tree as text (no image): one element per line, "[id] ROLE name=… value=… settable actions=…", indented by depth; settable means computer_set_value can replace the value. The last line is the snapshot_id that element actions must quote. Call this when you need the tree (first observe, or a screenshot that omitted snapshot_id). Skip it when a screenshot reused a live snapshot_id. Call again when an action reports the snapshot stale. A line ending in "(+N descendants omitted)" was cut to fit: pass that element_id with the current snapshot_id to expand it, and the new ids join the same snapshot.',
				parameters: JSON.stringify({
					type: "object",
					properties: {
						...appTargetProperty,
						...elementIdProperty,
						...snapshotIdProperty,
					},
					required: ["target"],
				}),
			},
			schema: appStateArguments,
			run: (ctx, sidecar, { target, ...args }) =>
				callApp(ctx, sidecar, "computer_use_app_state", target, args, "Read the app state."),
		}),
		defineTool({
			descriptor: {
				name: "computer_set_value",
				description:
					"Replace the value of a settable element by id through accessibility, without keystrokes. Returns text only; the snapshot_id stays valid while the tree is unchanged, so fill the other elements from the same computer_screenshot or computer_app_state result. If the edit opens a sheet or replaces rows, the result says the snapshot is stale — take a screenshot or read computer_app_state before using element ids.",
				parameters: JSON.stringify({
					type: "object",
					properties: {
						...appTargetProperty,
						...elementIdProperty,
						...snapshotIdProperty,
						value: { type: "string", description: "The new value." },
					},
					required: ["target", "element_id", "snapshot_id", "value"],
				}),
			},
			schema: setValueArguments,
			run: (ctx, sidecar, { target, ...args }) =>
				callApp(ctx, sidecar, "computer_use_set_value", target, args, "Set the value."),
		}),
		defineTool({
			descriptor: {
				name: "computer_app_action",
				description:
					'Perform an accessibility action on an element by id: "press" for buttons, links, menu items, checkboxes, and tabs (implied, so not listed), or an entry from the element\'s actions= list such as "show-menu" or "scroll-to-visible". Prefer this over coordinate clicks when the element is in the tree. Returns text only; the snapshot_id stays valid until the tree changes, so act on more elements from the same computer_screenshot or computer_app_state result.',
				parameters: JSON.stringify({
					type: "object",
					properties: {
						...appTargetProperty,
						...elementIdProperty,
						...snapshotIdProperty,
						action: {
							type: "string",
							description:
								'"press", or an action name from the element\'s actions= list.',
						},
					},
					required: ["target", "element_id", "snapshot_id", "action"],
				}),
			},
			schema: appActionArguments,
			run: (ctx, sidecar, { target, ...args }) =>
				callApp(
					ctx,
					sidecar,
					"computer_use_perform_secondary_action",
					target,
					args,
					"Performed the action."
				),
		}),
	];
}

const attemptStepRequest = z.object({
	step: z.string().min(1).max(500),
	expect: z.string().min(1).max(500).optional(),
});
const attemptArguments = z
	.object({
		target: appTarget,
		step: z.string().min(1).max(500).optional(),
		expect: z.string().min(1).max(500).optional(),
		steps: z.array(attemptStepRequest).min(1).max(24).optional(),
		max_steps: z.number().int().min(1).max(12).optional(),
	})
	.superRefine((args, ctx) => {
		if ((args.step === undefined) === (args.steps === undefined)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["steps"],
				message: "Pass either step (with optional expect) or steps, not both and not neither.",
			});
		}
	});

/** macOS companion only, behind `computer_use_next_action`: UI steps carried out by the next-action loop in `attempt.ts`. */
function attemptToolDefinition(): RegisteredTool {
	return defineTool({
		descriptor: {
			name: ATTEMPT_TOOL_NAME,
			description:
				`Carry out a list of small UI steps in a macOS app without reading the tree yourself. Prefer it when you know the next few UI steps; for a single action on an element you already know, call the element tool directly. Decompose the task first: each step is ONE control or ONE visible state change (press one button, open one sidebar item, type "text" into one field, confirm one field), with an expect naming what the screen shows once it is done. Never make a step that only focuses or clicks a field: typing into a field focuses it, so put the text in the typing step (type "x" into the search field). Each expect must name a control or value that appears in the tree ("a button named X appears", not "search results are visible" or "the field is focused"). Do not pass a multi-step task as one step (not "enter 1+2+3+4"; pass press 1 / press Add / press 2 ... as separate steps, each with its expected display); the decider inside is fast and accurate at picking one control and checking one outcome, and does not plan sequences. For each step a deterministic loop reads computer_app_state, asks the decider for the next action, acts, and checks the outcome, up to max_steps actions (default ${DEFAULT_MAX_STEPS}); it stops the step as done when the screen shows its result and expect holds, or as failed when its target is absent, disabled, or blocked. Steps run in order and stop at the first that fails. Text to enter goes in quotes inside the step. Returns OK or ERR with one status line per step (done, failed, not run), then changed: (what the call changed on screen), now: (a compact view of the final screen: its controls and values, windows, sheets, and menus), a short trace, and the final snapshot_id. Plan your next steps from that view, and read values from now: before calling computer_app_state, which you need only for element ids or more detail. A failed step with 0 actions was not tried and changed nothing; one that acted may have landed, so check now: before redoing it. On ERR do only the failed step with the element tools, then send the remaining steps back to computer_attempt. Text only, no image.`,
			parameters: JSON.stringify({
				type: "object",
				properties: {
					...appTargetProperty,
					step: {
						type: "string",
						description:
							'A single small step: one control or one visible state change, in plain words, with any text to type in quotes (e.g. press the Add key; type "house music" into the search field). Pass this or steps.',
					},
					expect: {
						type: "string",
						description:
							"What the screen shows once this step is done, e.g. the display shows 1+. Give it on every step; the loop does not mark a step done until it holds.",
					},
					steps: {
						type: "array",
						minItems: 1,
						maxItems: 24,
						description: "The decomposed task: one {step, expect} per control or state change, in order. Pass this or step.",
						items: {
							type: "object",
							properties: {
								step: { type: "string", description: "One control or one visible state change." },
								expect: { type: "string", description: "What the screen shows once this step is done." },
							},
							required: ["step"],
						},
					},
					max_steps: {
						type: "integer",
						minimum: 1,
						maximum: 12,
						description: `Actions to try per step before giving up. Default ${DEFAULT_MAX_STEPS}; a well-decomposed step needs one.`,
					},
				},
				required: ["target"],
			}),
		},
		schema: attemptArguments,
		run: async (ctx, sidecar, { target, ...args }, options) => {
			const attempt = options.attempt;
			if (attempt === undefined || sidecar.callCompanion === undefined) {
				throw new Error("computer_attempt needs the macOS computer-use helper and a signed-in Cursor account.");
			}
			const callCompanion = sidecar.callCompanion.bind(sidecar);
			const { text, isError, summary } = await attemptSequence({
				decider: { decide: input => attempt.decide(input, ctx.signal) },
				call: (name, wireArgs) =>
					callCompanion(ctx, name, { pid: target.pid, target_id: target.target_id, ...wireArgs }),
				args: {
					steps: args.steps ?? [{ step: args.step ?? "", ...(args.expect === undefined ? {} : { expect: args.expect }) }],
					max_steps: args.max_steps,
				},
			});
			return {
				content: [{ type: "text", text }],
				...(isError ? { isError } : {}),
				structuredContent: { code: "attempt", attempt: summary },
			};
		},
	});
}

/**
 * The descriptors the model is shown. `batch` lists `computer_batch` — only
 * where the Windows sidecar is, and meant to be the Statsig gate's answer at
 * the moment of listing; off by default so the toolset without the gate is
 * exactly what it was. `attempt` lists `computer_attempt` on the companion
 * path, likewise the answer of its gate at the moment of listing.
 */
export function computerUseMcpTools(options?: {
	companionDefault?: boolean;
	batch?: boolean;
	attempt?: boolean;
}): readonly ComputerUseMcpToolDescriptor[] {
	const companionScope = APP_SCOPE && (options?.companionDefault ?? true);
	return toolDefinitions({
		companionScope,
		batch: options?.batch ?? false,
		attempt: options?.attempt ?? false,
	}).map(
		definition => definition.descriptor
	);
}

export const COMPUTER_USE_MCP_TOOLS: readonly ComputerUseMcpToolDescriptor[] =
	computerUseMcpTools();

/**
 * A refusal as the model receives it: the message it has always seen, a
 * trailer naming the code and next step for a reader of the text alone, and
 * the full shape in `structuredContent`. Returned rather than thrown, because
 * a thrown error reaches the model as prose only.
 */
export function refusalResult(refusal: ComputerUseRefusal): ComputerUseMcpResult {
	return {
		content: [
			{
				type: "text",
				text: `${refusal.message}\n\nRefusal code: ${refusal.code}. Recommended next step: ${refusal.escalation.recommended} — ${refusal.escalation.reason}`,
			},
		],
		isError: true,
		structuredContent: {
			code: refusal.code,
			message: refusal.message,
			escalation: {
				recommended: refusal.escalation.recommended,
				reason: refusal.escalation.reason,
			},
		},
	};
}

// The toolset holds the remote-control lease for the turn only where the
// Windows sidecar is: that sidecar keys its on-screen presence to the lease
// and gates no input on it, so taking it changes what the user sees, never
// what the model may do. The macOS helper's lease gates input, a
// `user_aborted` there must not be undone by the next action, and in
// companion mode taking control is an escalation — so on macOS the control
// tools stay the model's alone and the toolset stays exactly as it was.
const TURN_LEASE = process.platform === "win32";

/**
 * The tools that put input on the desktop; with `turnLease` each takes the
 * turn's remote-control lease if nothing holds it yet.
 */
const INPUT_TOOLS: ReadonlySet<string> = new Set([
	"computer_click",
	"computer_move",
	"computer_drag",
	"computer_type",
	"computer_key",
	"computer_scroll",
	"computer_batch",
]);

/**
 * The holder recorded for a call that carried no conversation id. Nothing
 * better is known about whose turn it was, so any turn end releases it.
 */
const ANY_CONVERSATION = "";

/**
 * Dispatches generic MCP computer-use tool calls to the sidecar. Stateless
 * apart from the sidecar client it wraps and, with `turnLease`, who holds
 * remote control; argument validation failures and sidecar errors throw,
 * which the MCP layer surfaces as failed tool calls. Structured refusals
 * (`ComputerUseRefusalError`) are the exception: they are returned as
 * `isError` results so their code and escalation reach the model.
 */
export class ComputerUseMcpToolset {
	private readonly options: ResolvedToolOptions;
	private readonly tools: readonly RegisteredTool[];
	/**
	 * Who holds remote control, while the toolset holds it for the turn: the
	 * conversation whose input acted last — a subagent's own id, the root's
	 * own — and the ordinal of that call. The desktop is one, so there is one
	 * lease, and it follows the last conversation to act: a parent's turn
	 * ending does not take the desktop from a background subagent that acted
	 * after it, and a turn whose end is never reported (one that did not run
	 * through the composer) cannot hold the lease against the turns after it.
	 */
	private lease: { conversation: string; call: number } | undefined;
	/**
	 * The lease calls in flight: input actions and the model's own start. A
	 * turn end releases only after the ones in flight at that moment, so an
	 * action the user aborted mid-way finishes before the presence goes down
	 * and a take of control still in progress has joined the lease by the
	 * time it is read. Tool calls are meant to be sequential, but the MCP
	 * layer does not enforce that, so this is a set rather than the latest.
	 */
	private readonly inflight = new Set<Promise<void>>();
	/** The `control/start` in flight, so overlapping first actions share one. */
	private starting: Promise<void> | undefined;
	/** Lease calls made so far; each is stamped with its ordinal. */
	private calls = 0;

	constructor(
		private readonly sidecar: ComputerUseBackend,
		options?: ComputerUseMcpToolOptions
	) {
		this.options = {
			delay: options?.delay ?? delay,
			preflight: options?.preflight ?? (() => Promise.resolve()),
			companionDefault: options?.companionDefault ?? APP_SCOPE,
			turnLease: options?.turnLease ?? TURN_LEASE,
			batch: options?.batch ?? (() => Promise.resolve(false)),
			attempt: options?.attempt,
		};
		// The batch is registered wherever the sidecar has it, and the attempt
		// wherever the toolset has a decider; whether a call may run either is
		// its gate's answer at that moment (`offered`).
		this.tools = toolDefinitions({
			companionScope: APP_SCOPE && this.options.companionDefault,
			batch: BATCH_SCOPE,
			attempt: this.options.attempt !== undefined,
		});
	}

	/**
	 * Whether the model may call this registered tool now: every tool but the
	 * batch and the attempt, always; those two while their gate is on — the
	 * same read the listing makes, so each is runnable exactly when it is
	 * listed, and a gate that is off or cannot be read leaves the call the
	 * unknown tool it is on a build without it. Read at each call, because the
	 * gate can turn off between a listing and the call that follows it.
	 */
	private async offered(tool: RegisteredTool): Promise<boolean> {
		const gate =
			tool.descriptor.name === BATCH_TOOL_NAME
				? this.options.batch
				: tool.descriptor.name === ATTEMPT_TOOL_NAME
					? this.options.attempt?.enabled
					: undefined;
		if (gate === undefined) {
			return true;
		}
		try {
			return await gate();
		} catch {
			return false;
		}
	}

	/** Tear down the sidecar this toolset was talking to, if it owns one. */
	async dispose(ctx: Context): Promise<void> {
		this.lease = undefined;
		await this.sidecar.dispose?.(ctx);
	}

	/**
	 * An agent turn ended: if that conversation holds remote control, it is
	 * released. A turn that never touched the desktop, a turn that another
	 * conversation acted after, a turn end after the model's own release, and
	 * every turn end without `turnLease` are no-ops.
	 *
	 * The notice is fire-and-forget and an aborted action may still be
	 * finishing, so a conversation's next turn can act before its previous
	 * turn's end is delivered. An input of the same conversation that arrived
	 * after this notice was reported is that newer turn's, and the lease is
	 * left to it: the next turn's own end releases.
	 */
	async onTurnEnded(ctx: Context, conversationId: string): Promise<void> {
		const reportedAt = this.calls;
		await Promise.all([...this.inflight]);
		const lease = this.lease;
		if (
			lease === undefined ||
			(lease.conversation !== conversationId &&
				lease.conversation !== ANY_CONVERSATION) ||
			lease.call > reportedAt
		) {
			return;
		}
		this.lease = undefined;
		await this.sidecar.releaseControl(ctx);
	}

	callTool(
		ctx: Context,
		toolName: string,
		args: Record<string, unknown>
	): Promise<ComputerUseMcpResult> {
		if (
			!this.options.turnLease ||
			!(INPUT_TOOLS.has(toolName) || toolName === "computer_start_control")
		) {
			return this.runTool(ctx, toolName, args, undefined);
		}
		const call = this.runTool(ctx, toolName, args, ++this.calls);
		const settled: Promise<void> = call.then(
			() => undefined,
			() => undefined
		);
		this.inflight.add(settled);
		void settled.then(() => this.inflight.delete(settled));
		return call;
	}

	/** `leaseCall` is the call's ordinal when it takes the turn's lease. */
	private async runTool(
		ctx: Context,
		toolName: string,
		args: Record<string, unknown>,
		leaseCall: number | undefined
	): Promise<ComputerUseMcpResult> {
		const tool = this.tools.find(
			candidate => candidate.descriptor.name === toolName
		);
		try {
			// Before the lease: an unknown tool takes no control and reaches no
			// sidecar, and a gated-off batch is an unknown tool.
			if (tool === undefined || !(await this.offered(tool))) {
				throw localRefusal(
					"unknown_tool",
					`Unknown computer-use tool: ${toolName}`
				);
			}
			if (leaseCall !== undefined) {
				await this.takeControl(ctx, leaseCall);
				if (toolName === "computer_start_control") {
					// The model's own start joins the lease rather than opening
					// a second session on the sidecar.
					return {
						content: [{ type: "text", text: "Remote control is ready." }],
					};
				}
			}
			const result = await tool.validateAndRun(
				ctx,
				this.sidecar,
				args,
				this.options
			);
			if (toolName === "computer_release_control") {
				// The model let go: the turn's end has nothing left to release,
				// and its next action takes the lease afresh.
				this.lease = undefined;
			}
			return result;
		} catch (error) {
			if (error instanceof ComputerUseRefusalError) {
				return refusalResult(error.refusal);
			}
			if (
				error instanceof ComputerUseBackendError &&
				error.code === "user_aborted"
			) {
				return {
					content: [{
						type: "text",
						text: "USER_ABORTED: The user stopped the current control session. Do not call input, start-control, or release-control tools again in this turn.",
					}],
					isError: true,
					structuredContent: { code: "user_aborted" },
				};
			}
			throw error;
		}
	}

	/**
	 * Take remote control unless a turn already holds it, then make the
	 * calling conversation the holder, with this call's ordinal. Overlapping
	 * first actions share one `control/start`, so the sidecar hands out one
	 * session. A failed start leaves no lease; the next action tries again.
	 */
	private async takeControl(ctx: Context, call: number): Promise<void> {
		if (this.lease === undefined) {
			this.starting ??= this.sidecar.startControl(ctx).finally(() => {
				this.starting = undefined;
			});
			await this.starting;
		}
		this.lease = {
			conversation: ctx.get(conversationIdKey) ?? ANY_CONVERSATION,
			call,
		};
	}
}

// Outside the Statsig-overridable body, so an override cannot drop it.
export const COMPUTER_ATTEMPT_INSTRUCTIONS: string =
	"When you roughly know the next few UI steps, send them all in one computer_attempt call, each with an expect that names a specific visible control or value. Skip focus-only steps; typing into a field focuses it. When a step fails, do only that step with the element tools, then send the remaining steps back to computer_attempt. For a single action on an element you already know, call the element tool directly.";

// Assembly: the local text, the computer_attempt section when that tool is
// listed, then the body (Statsig's or the fallback), separated by blank lines.
export function composeComputerUseInstructions(parts: {
	local: string;
	attempt?: boolean;
	body: string;
}): string {
	return [parts.local, ...(parts.attempt === true ? [COMPUTER_ATTEMPT_INSTRUCTIONS] : []), parts.body].join("\n\n");
}
