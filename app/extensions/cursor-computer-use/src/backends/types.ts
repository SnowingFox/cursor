import type {
	CompanionSidecarToolName,
	ComputerUseBatchStepTool,
	ComputerUseRefusal,
	ComputerUseRefusalCode,
	PortableMouseButton,
	SidecarToolResult,
} from '@anysphere/computer-use/protocol';
import { createKey, type Context } from '@anysphere/context';

/**
 * The agent conversation making a call, when the MCP layer supplied one. A
 * backend with a companion mode scopes the sidecar's per-target app state to
 * it, so two conversations driving the same app do not share handles.
 */
export const conversationIdKey = createKey<string | undefined>(
	Symbol('computer-use:conversation-id'),
	undefined
);

export class ComputerUseBackendError extends Error {
	constructor(
		message: string,
		readonly code?: ComputerUseRefusalCode
	) {
		super(message);
		this.name = 'ComputerUseBackendError';
	}
}

/**
 * A refusal with its full machine-readable shape: the code, the message the
 * model has always seen, and the escalation hint. The MCP layer returns it to
 * the model as an `isError` result with `structuredContent`, instead of a
 * thrown error whose prose is all the model would get.
 *
 * Thrown only by a backend that produces the structured shape (the shared RPC
 * client over the Windows sidecar today); a backend that throws a plain
 * `ComputerUseBackendError` is surfaced exactly as before.
 */
export class ComputerUseRefusalError extends ComputerUseBackendError {
	constructor(
		readonly refusal: ComputerUseRefusal,
		/** The transport or protocol error this refusal classifies, when there is one. */
		override readonly cause?: unknown
	) {
		super(refusal.message, refusal.code);
		this.name = 'ComputerUseRefusalError';
	}
}

/**
 * The neutral backend surface the MCP toolset calls. A backend executes the
 * operations on the local desktop (the macOS one talks to the sidecar app
 * over its socket RPC); wire message shapes come from
 * `@anysphere/computer-use/protocol`, and the interfaces here are the typed
 * arguments a backend accepts.
 */

export type ComputerUseScrollDirection = 'up' | 'down' | 'left' | 'right';

export interface ComputerUsePoint {
	x: number;
	y: number;
}

/**
 * Names the `zoom` result whose image the action's coordinates are pixels of.
 * Absent means canvas pixels of the latest screenshot. Windows only: the
 * macOS backend never receives one, because the MCP layer only advertises
 * zoom where the Windows sidecar is.
 */
export interface ComputerUseZoomAim {
	zoomId?: string;
}

export interface ComputerUseClick extends ComputerUseZoomAim {
	coordinate: ComputerUsePoint;
	button: PortableMouseButton;
	count: number;
}

export interface ComputerUseScroll extends ComputerUseZoomAim {
	coordinate: ComputerUsePoint;
	direction: ComputerUseScrollDirection;
	amount: number;
}

export interface ComputerUseDrag extends ComputerUseZoomAim {
	button: PortableMouseButton;
	path: readonly ComputerUsePoint[];
}

/** Inclusive corners of a canvas region: top-left (x1, y1), bottom-right (x2, y2). */
export interface ComputerUseZoomRegion {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
}

/**
 * One step of a `computer_use_batch`: a step tool by wire name with the
 * arguments a lone call would carry, and whether a step that changes nothing
 * visible should stop the batch. Windows only, like zoom.
 */
export interface ComputerUseBatchStep {
	name: ComputerUseBatchStepTool;
	arguments: Record<string, unknown>;
	expectChange: boolean;
}

export interface ComputerUseBatch {
	steps: readonly ComputerUseBatchStep[];
	/** Whether a step may press a key that deletes, cuts, closes or locks. */
	allowDestructive: boolean;
}

export interface ComputerUseBackend {
	startControl(ctx: Context): Promise<void>;
	/**
	 * A no-op, never reaching the sidecar, when no screen session is active:
	 * the model releases after its last screen action, and app-only work
	 * never opened one.
	 */
	releaseControl(ctx: Context): Promise<void>;
	screenshot(ctx: Context): Promise<SidecarToolResult>;
	/**
	 * A screenshot for a `computer_wait`: it returns the frame only when the
	 * screen changed since the last one the model was shown, and otherwise a
	 * text-only "no visible change" result with no image — the model's previous
	 * screenshot still stands, so the encode and the image tokens are saved.
	 * Optional: only the Windows sidecar compares frames. Callers that lack it
	 * fall back to `screenshot`, so wait keeps returning a frame every time.
	 */
	screenshotAfterWait?(ctx: Context): Promise<SidecarToolResult>;
	/**
	 * Native-resolution crop of a canvas region, returned as its own image
	 * with a `zoom_id` later actions may aim by. Optional: only the Windows
	 * sidecar implements it.
	 */
	zoom?(ctx: Context, region: ComputerUseZoomRegion): Promise<SidecarToolResult>;
	/**
	 * Several input actions in one call, with one end frame and a record per
	 * step. Optional: only the Windows sidecar implements it.
	 */
	batch?(ctx: Context, batch: ComputerUseBatch): Promise<SidecarToolResult>;
	click(ctx: Context, click: ComputerUseClick): Promise<SidecarToolResult>;
	scroll(ctx: Context, scroll: ComputerUseScroll): Promise<SidecarToolResult>;
	move(
		ctx: Context,
		coordinate: ComputerUsePoint,
		aim?: ComputerUseZoomAim
	): Promise<SidecarToolResult>;
	drag(ctx: Context, drag: ComputerUseDrag): Promise<SidecarToolResult>;
	typeText(ctx: Context, text: string): Promise<SidecarToolResult>;
	pressKey(ctx: Context, key: string): Promise<SidecarToolResult>;
	checkPermissions(ctx: Context): Promise<SidecarToolResult>;
	/**
	 * App-scoped (companion) call: `args` carry the app target and tokens the
	 * wire contract requires; the sidecar session comes from `conversationIdKey`
	 * on `ctx`. Optional: only the macOS sidecar has a companion mode. Never
	 * joins the screen session.
	 */
	callCompanion?(
		ctx: Context,
		name: CompanionSidecarToolName,
		args: Record<string, unknown>
	): Promise<SidecarToolResult>;
	/** Stop anything the backend launched. Optional: not every backend owns a process. */
	dispose?(ctx: Context): Promise<void>;
}
