import type {
	CompanionSidecarToolName,
	SidecarToolResult,
} from "@anysphere/computer-use/protocol";
import { type Context, createContext } from "@anysphere/context";
import { describe, expect, it, vi } from "vitest";
import {
	ComputerUseBackendError,
	type ComputerUseBackend,
} from "../backends/types";
import { ComputerUseMcpToolset } from "./tools";

// The app-scoped companion tools this bench drives exist only where the macOS
// sidecar does; the toolset specializes for the host platform when it loads.
vi.hoisted(() => {
	Object.defineProperty(process, "platform", { value: "darwin" });
});

// The companion form-fill loop tax, measured as sidecar RPCs.
//
// `computer_use_set_value` used to consume the `snapshot_id` it acted on (the
// Swift `invalidateInputState` dropped the AX snapshot), so a model filling
// several fields had to `computer_app_state` again before every set. PR3 keeps
// the snapshot valid until the tree changes, so one observe covers every set.
// This harness records the RPC count each contract forces for a three-field
// fill, against a fake sidecar that enforces the chosen rule and refuses a
// reused snapshot exactly as the sidecar does under consume-once. The
// persistent number is what PR5 (batch fill) must beat further.
//
// A screenshot stays image-only on first observe. A later verify shot reuses
// a live snapshot_id when the tree is unchanged and does not walk.

const APP_TARGET = { scope: "app", pid: 42, target_id: "target-42" } as const;
const FIELDS = [
	{ element_id: 2, value: "first" },
	{ element_id: 3, value: "second" },
	{ element_id: 4, value: "third" },
];

type FillTool = "computer_set_value" | "computer_type";

/**
 * A companion sidecar that mints a fresh `snapshot_id` on every
 * `computer_use_app_state` and, while `consumesSnapshotOnAction` is true,
 * invalidates it the moment a `computer_use_set_value` or
 * `computer_use_typing` acts — so the next edit against the same snapshot is
 * refused as stale, just like the real sidecar.
 * A verify screenshot reuses the live snapshot when one exists. First
 * observe stays image-only and still needs `computer_use_app_state`.
 */
class FakeCompanionSidecar implements ComputerUseBackend {
	rpcCount = 0;
	appStateRpcCount = 0;
	screenshotWalkCount = 0;
	readonly consumesSnapshotOnAction: boolean;
	private liveSnapshotId: string | undefined;
	private minted = 0;

	constructor(options: { consumesSnapshotOnAction: boolean }) {
		this.consumesSnapshotOnAction = options.consumesSnapshotOnAction;
	}

	private mintSnapshot(tool: "computer_use_app_state"): SidecarToolResult {
		this.minted += 1;
		this.liveSnapshotId = `snap-${this.minted}`;
		return {
			message: "Snapshot: 3 element(s).",
			isError: false,
			structuredContent: {
				tool,
				status: "ok",
				message: "Snapshot: 3 element(s).",
				snapshotID: this.liveSnapshotId,
			},
		};
	}

	callCompanion(
		_ctx: Context,
		name: CompanionSidecarToolName,
		args: Record<string, unknown>
	): Promise<SidecarToolResult> {
		this.rpcCount += 1;
		if (name === "computer_use_app_state") {
			this.appStateRpcCount += 1;
			return Promise.resolve(this.mintSnapshot("computer_use_app_state"));
		}
		if (name === "computer_use_screenshot") {
			if (this.liveSnapshotId !== undefined) {
				return Promise.resolve({
					message: "Reused live snapshot (tree unchanged).",
					isError: false,
					structuredContent: {
						tool: "computer_use_screenshot",
						status: "ok",
						message: "Reused live snapshot (tree unchanged).",
						snapshotID: this.liveSnapshotId,
					},
				});
			}
			return Promise.resolve({
				message: "Captured a screenshot.",
				isError: false,
				structuredContent: {
					tool: "computer_use_screenshot",
					status: "ok",
					message: "Captured a screenshot.",
				},
			});
		}
		if (name === "computer_use_set_value" || name === "computer_use_typing") {
			if (args.snapshot_id !== this.liveSnapshotId) {
				throw new ComputerUseBackendError(
					`Accessibility snapshot ${String(args.snapshot_id)} is stale.`
				);
			}
			if (this.consumesSnapshotOnAction) {
				this.liveSnapshotId = undefined;
			}
			return Promise.resolve({
				message: name === "computer_use_typing" ? "Typed." : "Set the value.",
				isError: false,
			});
		}
		throw new Error(`unexpected companion tool ${name}`);
	}

	startControl(): Promise<void> {
		return Promise.reject(new Error("screen control is out of scope"));
	}
	releaseControl(): Promise<void> {
		return Promise.resolve();
	}
	screenshot(): Promise<SidecarToolResult> {
		return Promise.reject(new Error("screen scope is out of scope"));
	}
	click(): Promise<SidecarToolResult> {
		return Promise.reject(new Error("out of scope"));
	}
	scroll(): Promise<SidecarToolResult> {
		return Promise.reject(new Error("out of scope"));
	}
	move(): Promise<SidecarToolResult> {
		return Promise.reject(new Error("out of scope"));
	}
	drag(): Promise<SidecarToolResult> {
		return Promise.reject(new Error("out of scope"));
	}
	typeText(): Promise<SidecarToolResult> {
		return Promise.reject(new Error("out of scope"));
	}
	pressKey(): Promise<SidecarToolResult> {
		return Promise.reject(new Error("out of scope"));
	}
	checkPermissions(): Promise<SidecarToolResult> {
		return Promise.reject(new Error("out of scope"));
	}
}

function snapshotIdFromResult(result: {
	content: Array<{ type: string; text?: string }>;
}): string | undefined {
	for (const part of result.content) {
		const match = part.text?.match(/^snapshot_id=(.+)$/m);
		if (match) {
			return match[1];
		}
	}
	return undefined;
}

function snapshotIdFrom(result: { content: Array<{ type: string; text?: string }> }): string {
	const id = snapshotIdFromResult(result);
	if (id === undefined) {
		throw new Error("result carried no snapshot_id");
	}
	return id;
}

async function observeAppState(
	toolset: ComputerUseMcpToolset,
	ctx: Context
): Promise<string> {
	return snapshotIdFrom(await toolset.callTool(ctx, "computer_app_state", { target: APP_TARGET }));
}

function setField(
	toolset: ComputerUseMcpToolset,
	ctx: Context,
	element_id: number,
	value: string,
	snapshot_id: string,
	tool: FillTool
): Promise<unknown> {
	return tool === "computer_type"
		? toolset.callTool(ctx, "computer_type", {
			target: APP_TARGET,
			element_id,
			snapshot_id,
			text: value,
		})
		: toolset.callTool(ctx, "computer_set_value", {
			target: APP_TARGET,
			element_id,
			snapshot_id,
			value,
		});
}

/**
 * Set each field, re-observing via computer_app_state whenever a set is refused
 * as stale. `initialSnapshotId` is the snapshot the caller already holds (from
 * app_state or a verify screenshot); when undefined the first field observes
 * first. It never assumes how long a snapshot lasts — it reacts to the sidecar
 * — so the RPC count is exactly what the contract costs.
 */
async function fillWith(
	toolset: ComputerUseMcpToolset,
	ctx: Context,
	fields: ReadonlyArray<{ element_id: number; value: string }>,
	initialSnapshotId: string | undefined,
	tool: FillTool = "computer_set_value"
): Promise<void> {
	let snapshotId = initialSnapshotId;
	for (const field of fields) {
		if (snapshotId === undefined) {
			snapshotId = await observeAppState(toolset, ctx);
		}
		try {
			await setField(toolset, ctx, field.element_id, field.value, snapshotId, tool);
		} catch (error) {
			if (!(error instanceof ComputerUseBackendError)) {
				throw error;
			}
			snapshotId = await observeAppState(toolset, ctx);
			await setField(toolset, ctx, field.element_id, field.value, snapshotId, tool);
		}
	}
}

/** Observe with computer_app_state, then fill. */
async function fillFields(
	toolset: ComputerUseMcpToolset,
	ctx: Context,
	fields: ReadonlyArray<{ element_id: number; value: string }>,
	tool: FillTool = "computer_set_value"
): Promise<void> {
	await fillWith(toolset, ctx, fields, undefined, tool);
}

/**
 * Look at the screen, then fill. The screenshot is image-only on first
 * observe, so fill still calls computer_app_state for the tree.
 */
async function screenshotThenFill(
	toolset: ComputerUseMcpToolset,
	ctx: Context,
	fields: ReadonlyArray<{ element_id: number; value: string }>
): Promise<void> {
	const shot = await toolset.callTool(ctx, "computer_screenshot", { target: APP_TARGET });
	const snapshotId = snapshotIdFromResult(shot);
	if (snapshotId === undefined) {
		await fillWith(toolset, ctx, fields, undefined);
		return;
	}
	await fillWith(toolset, ctx, fields, snapshotId);
}

describe("companion form-fill turn count", () => {
	// Consume-once (pre-PR3): observe, set field 1, then a stale-refused set plus
	// a re-observe for each of the remaining two fields — 8 RPCs for 3 fields.
	// Persistent (PR3): set_value keeps the snapshot valid, so one observe covers
	// all three sets — 4 RPCs. PR5's batch fill cuts the persistent case further.
	it.each([
		{ contract: "consume-once", tool: "computer_set_value" as const, consumesSnapshotOnAction: true, rpcs: 8 },
		{ contract: "persistent", tool: "computer_set_value" as const, consumesSnapshotOnAction: false, rpcs: 4 },
		{ contract: "consume-once", tool: "computer_type" as const, consumesSnapshotOnAction: true, rpcs: 8 },
		{ contract: "persistent", tool: "computer_type" as const, consumesSnapshotOnAction: false, rpcs: 4 },
	])(
		"a 3-field $tool fill costs $rpcs sidecar RPCs ($contract)",
		async ({ consumesSnapshotOnAction, rpcs, contract, tool }) => {
			const sidecar = new FakeCompanionSidecar({ consumesSnapshotOnAction });
			const toolset = new ComputerUseMcpToolset(sidecar);

			await fillFields(toolset, createContext(), FIELDS, tool);

			expect(sidecar.rpcCount).toBe(rpcs);
			console.log(
				`[bench] companion 3-field ${tool} fill (${contract}): ${sidecar.rpcCount} sidecar RPCs`
			);
		}
	);

	// Screenshot then fill: screenshot + computer_app_state + 3× set = 5 RPCs.
	it("a screenshot-then-3-field fill costs 5 sidecar RPCs (image-only screenshot)", async () => {
		const sidecar = new FakeCompanionSidecar({ consumesSnapshotOnAction: false });
		const toolset = new ComputerUseMcpToolset(sidecar);

		await screenshotThenFill(toolset, createContext(), FIELDS);

		expect(sidecar.rpcCount).toBe(5);
		expect(sidecar.appStateRpcCount).toBe(1);
		expect(sidecar.screenshotWalkCount).toBe(0);
		console.log(
			`[bench] companion screenshot-then-3-field fill (image-only): ${sidecar.rpcCount} sidecar RPCs, ${sidecar.appStateRpcCount} dedicated app_state`
		);
	});

	// Observe via app_state, then a verify screenshot reuses the live handle:
	// app_state + screenshot + 3× set = 5 RPCs, zero screenshot walks.
	it("a verify screenshot after computer_app_state does not walk or re-observe", async () => {
		const sidecar = new FakeCompanionSidecar({ consumesSnapshotOnAction: false });
		const toolset = new ComputerUseMcpToolset(sidecar);
		const ctx = createContext();

		const firstId = await observeAppState(toolset, ctx);
		const verify = await toolset.callTool(ctx, "computer_screenshot", { target: APP_TARGET });
		expect(snapshotIdFrom(verify)).toBe(firstId);

		await fillWith(toolset, ctx, FIELDS, snapshotIdFrom(verify));

		expect(sidecar.screenshotWalkCount).toBe(0);
		expect(sidecar.appStateRpcCount).toBe(1);
		expect(sidecar.rpcCount).toBe(5);
	});
});
