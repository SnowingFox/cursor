/**
 * macOS computer-use mode is the agent type, not a Statsig override.
 * Glass / local → companion. Private / cloud `--computer-use` → remote.
 */

export type ComputerUseMacResolvedMode = "companion" | "remote";
export type ComputerUseMacCaller = "glass" | "private_worker";

/** Bullets every darwin instruction set carries word for word. */
export const DARWIN_ACT_FIRST_BULLET =
	"- When the task needs Computer Use, go straight to the action it needs; computer_check_permissions is not required first. Do not call Computer Use tools in parallel; they act on one machine and run one at a time.";
export const DARWIN_MISSING_PERMISSION_BULLET =
	"- If an action is refused because Accessibility or Screen Recording is off, tell the user what the refusal says and retry the action after they allow Computer Use.";
/** Opens the sets that drive the real display. */
export const DARWIN_DESKTOP_PREAMBLE =
	"These tools control the local desktop: they read the real screen and send real mouse and keyboard input.";

export const DARWIN_COMPANION_INSTRUCTIONS: string = [
	"These tools drive one macOS app in the background. They do not take the display or move the real cursor.",
	"",
	DARWIN_ACT_FIRST_BULLET,
	'- Default to an app target: call computer_apps or computer_resolve_app, then pass {"scope":"app","pid":…,"target_id":…} on every action. Do not call computer_start_control first.',
	"- Observe with computer_screenshot (app target) for the image. Call computer_app_state when you need element ids (first observe, or a screenshot that omitted snapshot_id). Skip computer_app_state when a screenshot reused a live snapshot_id. computer_wait only delays; it returns no image. Prefer computer_set_value or computer_type with element_id. Without element_id, computer_type inserts into the click-selected field via AX, or the focused field. A missed click target is refused. If nothing is focused, click a field first. Does not raise or move the real cursor. Screen-scope typing is refused.",
	"- Spotlight, Notification Center, and menu extras are not listed by computer_apps and are unsupported.",
	"- computer_start_control is escalation only: it takes the Mac and moves the real cursor. Use it only when the user asks to take over the display. After screen-scope work, call computer_release_control.",
	DARWIN_MISSING_PERMISSION_BULLET,
].join("\n");

export const DARWIN_REMOTE_INSTRUCTIONS: string = [
	DARWIN_DESKTOP_PREAMBLE,
	"",
	DARWIN_ACT_FIRST_BULLET,
	"- Look before you click: take a screenshot before your first coordinate action, and rely on the fresh screenshot every action returns instead of assuming the screen is unchanged.",
	"- Before the first input action, call computer_start_control. A later explicit start is required after the user stops control or the helper restarts.",
	"- Every input action returns a screenshot of the screen after the action. If the result is not what you expected, take another screenshot before retrying.",
	DARWIN_MISSING_PERMISSION_BULLET,
	"- After the final input action, call computer_release_control as cleanup.",
	"- Use screen scope. Private-worker computer-use has no app pid or element_id.",
].join("\n");

export function resolveComputerUseMacMode(
	caller: ComputerUseMacCaller
): ComputerUseMacResolvedMode {
	return caller === "private_worker" ? "remote" : "companion";
}

/**
 * Live copy for the already-resolved mode. Reads optional
 * `computer_use_mcp_instructions.darwin.companion` /
 * `computer_use_mcp_instructions.darwin.remote`. A legacy string at
 * `darwin` is ignored so it cannot teach the other path.
 */
export function selectDarwinMcpInstructions(options: {
	mode: ComputerUseMacResolvedMode;
	statsig?: unknown;
}): string {
	const live = perModeDarwinBody(options.statsig, options.mode);
	if (live !== undefined) {
		return live;
	}
	return options.mode === "companion"
		? DARWIN_COMPANION_INSTRUCTIONS
		: DARWIN_REMOTE_INSTRUCTIONS;
}

function perModeDarwinBody(
	statsig: unknown,
	mode: ComputerUseMacResolvedMode
): string | undefined {
	if (typeof statsig !== "object" || statsig === null) {
		return undefined;
	}
	const darwin = (statsig as Record<string, unknown>).darwin;
	if (typeof darwin !== "object" || darwin === null) {
		return undefined;
	}
	const body = (darwin as Record<string, unknown>)[mode];
	return typeof body === "string" && body.trim().length > 0 ? body : undefined;
}
