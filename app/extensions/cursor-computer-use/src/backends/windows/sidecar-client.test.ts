/**
 * The Windows backend end to end, over a Unix socket rather than a real named
 * pipe: `net.createConnection({ path })` dials both with the same call and the
 * contract is identical, so a POSIX CI host can cover minting, the token file,
 * the handshake on every connection, the server-identity check, launch
 * provenance, and the failure modes.
 *
 * `__fixtures__/fake-sidecar.cjs` is a real child process, so the parts of the
 * identity chain that matter are genuine: the `listening on …` line arrives on
 * a stderr pipe this client owns, the welcome pid is really that process, and
 * killing it really does fail the liveness check.
 *
 * What this cannot cover is Win32 pipe semantics — single instance, `EBUSY`,
 * the token file's DACL, and Authenticode itself. Those need a Windows runner.
 */

import { spawn, type ChildProcess } from "node:child_process";
import { rmSync } from "node:fs";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
	COMPUTER_USE_DRAG_PATH_MAX_POINTS,
	RemoteSidecarToolCallSchema,
	SIDECAR_LAUNCH_TOKEN_HEX_LENGTH,
	SidecarRequestSchema,
	type ComputerUseRefusal,
} from "@anysphere/computer-use/protocol";
import { createContext, loggerKey } from "@anysphere/context";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ComputerUseMcpToolset } from "../../mcp/tools";
import { SidecarRpcCodec } from "../common/rpc-codec";
import { ComputerUseRefusalError, conversationIdKey } from "../types";
import { WindowsComputerUseRPCClient } from "./sidecar-client";
import { WindowsSidecarTransport } from "./transport";
import type { WindowsSidecarTransportOptions } from "./transport";

const FIXTURE = join(__dirname, "__fixtures__", "fake-sidecar.cjs");

const resolvedSidecar = {
	executablePath: String.raw`C:\Users\jdoe\.cursor\computer-use-sidecar\cursor-cua-sidecar.exe`,
	source: "download-cache",
} as const;

const signedByAnysphere = {
	kind: "trusted",
	subject: "Anysphere, Inc.",
} as const;

describe.sequential("WindowsComputerUseRPCClient", () => {
	let directory: string;
	let children: ChildProcess[];
	let restoreKills: (() => void)[];

	beforeEach(async () => {
		directory = await mkdtemp(join(tmpdir(), "cua-windows-client-"));
		children = [];
		restoreKills = [];
	});

	afterEach(async () => {
		for (const restore of restoreKills) {
			restore();
		}
		for (const child of children) {
			child.kill("SIGKILL");
		}
		await rm(directory, { recursive: true, force: true });
	});

	/**
	 * Make `kill()` succeed without signalling anything — the shape of
	 * `TerminateProcess` initiating teardown while the pipe instance is still
	 * held — so the child outlives the retirement bound. The real `kill` is
	 * handed back at cleanup so the suite can still reap the process; without
	 * that, every run left one of these orphaned on the runner.
	 */
	function makeUndying(child: ChildProcess): void {
		const realKill = child.kill.bind(child);
		child.kill = (() => true) as typeof child.kill;
		restoreKills.push(() => {
			child.kill = realKill;
		});
	}

	interface Harness {
		client: WindowsComputerUseRPCClient;
		endpoint: string;
		tokenPath: string;
		spawns: string[];
		/**
		 * Whether the previous sidecar was still alive at the moment each
		 * relaunch spawned. Any `true` after the first entry is the pipe-name
		 * race: on Windows the kernel releases the single pipe instance when
		 * the owner exits, so spawning before then makes the new sidecar abort
		 * as a squatter.
		 */
		priorAliveAtSpawn: boolean[];
		lastChild: () => ChildProcess | undefined;
	}

	/**
	 * Wire the transport to a fake sidecar. `fixtureOptions` is forwarded to
	 * the child so a test can make it deny, misreport its pid, or refuse to
	 * start; `overrides` replaces transport collaborators.
	 */
	function harness(
		fixtureOptions: Record<string, unknown> = {},
		overrides: WindowsSidecarTransportOptions = {},
		name = "sidecar"
	): Harness {
		const endpoint = join(directory, `${name}.sock`);
		const tokenPath = join(directory, `${name}.token`);
		const spawns: string[] = [];
		const priorAliveAtSpawn: boolean[] = [];
		let child: ChildProcess | undefined;
		const client = new WindowsComputerUseRPCClient("remote", {
			resolvePipeName: async () => endpoint,
			resolveTokenPath: async () => tokenPath,
			resolveExecutable: () => resolvedSidecar,
			verifySigner: async () => signedByAnysphere,
			clientImagePath: String.raw`C:\Cursor\Cursor.exe`,
			// Isolated from the host: the escape hatch must never leak in.
			env: {},
			spawnSidecar: executablePath => {
				spawns.push(executablePath);
				priorAliveAtSpawn.push(
					child !== undefined &&
					child.exitCode === null &&
					child.signalCode === null
				);
				child = spawn(
					process.execPath,
					[FIXTURE, endpoint, tokenPath, JSON.stringify(fixtureOptions)],
					{ stdio: ["ignore", "ignore", "pipe"] }
				);
				children.push(child);
				return child;
			},
			...overrides,
		});
		return {
			client,
			endpoint,
			tokenPath,
			spawns,
			priorAliveAtSpawn,
			lastChild: () => child,
		};
	}

	it("mints a token, launches the sidecar, and speaks the tool contract", async () => {
		const { client, tokenPath, spawns } = harness();

		const result = await client.click(createContext(), {
			coordinate: { x: 11, y: 12 },
			button: "right",
			count: 2,
		});

		expect(spawns).toEqual([resolvedSidecar.executablePath]);
		expect(JSON.parse(result.message)).toEqual({
			name: "computer_use_click",
			arguments: { x: 11, y: 12, button: "right", count: 2 },
			mode: "remote",
		});
		// Contract steps 1 and 2: 64 lowercase hex, nothing else in the file.
		const token = await readFile(tokenPath, "utf8");
		expect(token).toMatch(
			new RegExp(`^[0-9a-f]{${SIDECAR_LAUNCH_TOKEN_HEX_LENGTH}}$`)
		);
	});

	it("asks the wait screenshot to compare against the last frame", async () => {
		// The wait's post-delay capture rides the screenshot tool with the
		// compare flag set; the sidecar returns text-only when nothing changed.
		// The plain screenshot never sets it, so it always returns an image.
		const { client } = harness({}, {}, "wait-frame");
		const ctx = createContext();

		const waitShot = await client.screenshotAfterWait(ctx);
		expect(JSON.parse(waitShot.message)).toEqual({
			name: "computer_use_screenshot",
			arguments: { compare_to_last_frame: true },
			mode: "remote",
		});

		const plainShot = await client.screenshot(ctx);
		expect(JSON.parse(plainShot.message).arguments).toEqual({});
	});

	it("puts zoom and zoom_id on the wire exactly as the sidecar reads them", async () => {
		const { client } = harness({}, {}, "zoom");
		const ctx = createContext();

		const zoom = await client.zoom(ctx, { x1: 700, y1: 400, x2: 760, y2: 430 });
		expect(JSON.parse(zoom.message)).toEqual({
			name: "computer_use_zoom",
			arguments: { x1: 700, y1: 400, x2: 760, y2: 430 },
			mode: "remote",
		});

		const zoomed = await client.click(ctx, {
			coordinate: { x: 608, y: 308 },
			button: "left",
			count: 1,
			zoomId: "zoom-3f9a-1",
		});
		expect(JSON.parse(zoomed.message)).toEqual({
			name: "computer_use_click",
			arguments: { x: 608, y: 308, button: "left", count: 1, zoom_id: "zoom-3f9a-1" },
			mode: "remote",
		});
		const moved = await client.move(ctx, { x: 1, y: 2 }, { zoomId: "zoom-3f9a-1" });
		expect(JSON.parse(moved.message).arguments).toEqual({
			x: 1,
			y: 2,
			zoom_id: "zoom-3f9a-1",
		});

		// No aim, no key: the request is byte-identical to the pre-zoom one.
		const plain = await client.click(ctx, {
			coordinate: { x: 11, y: 12 },
			button: "right",
			count: 2,
		});
		expect(JSON.parse(plain.message).arguments).toEqual({
			x: 11,
			y: 12,
			button: "right",
			count: 2,
		});
		const plainMove = await client.move(ctx, { x: 1, y: 2 });
		expect(JSON.parse(plainMove.message).arguments).toEqual({ x: 1, y: 2 });
	});

	it("puts a batch on the wire as the sidecar reads it, with the steps' deadlines summed", async () => {
		const requestLog = join(directory, "batch-requests.jsonl");
		const { client } = harness({ requestLog }, {}, "batch");
		const ctx = createContext();

		const longText = "x".repeat(2000);
		const result = await client.batch(ctx, {
			steps: [
				{
					name: "computer_use_click",
					arguments: { x: 11, y: 12, button: "left", count: 1, zoom_id: "zoom-3f9a-1" },
					expectChange: true,
				},
				{ name: "computer_use_typing", arguments: { value: longText }, expectChange: false },
				{ name: "computer_use_press_key", arguments: { key: "Return" }, expectChange: false },
			],
			allowDestructive: false,
		});
		// Flags ride only when set: the sidecar's defaults are false, and a
		// sidecar that predates a flag is not handed a key it does not read.
		const echoed = JSON.parse(result.message) as Record<string, unknown>;
		expect(echoed).toEqual({
			name: "computer_use_batch",
			arguments: {
				steps: [
					{
						name: "computer_use_click",
						arguments: { x: 11, y: 12, button: "left", count: 1, zoom_id: "zoom-3f9a-1" },
						expect_change: true,
					},
					{ name: "computer_use_typing", arguments: { value: longText } },
					{ name: "computer_use_press_key", arguments: { key: "Return" } },
				],
			},
			mode: "remote",
		});
		// The request is one the wire contract admits …
		expect(
			SidecarRequestSchema.safeParse({
				id: 1,
				method: "tools/call",
				requestID: "request-1",
				sessionId: "11111111-1111-4111-8111-111111111111",
				...echoed,
			}).success
		).toBe(true);
		// … and its deadline is what the three steps would have had alone.
		const raw = await readFile(requestLog, "utf8");
		const request = raw
			.split("\n")
			.filter(line => line.length > 0)
			.map(line => JSON.parse(line) as { name?: string; timeoutSeconds?: number })
			.find(line => line.name === "computer_use_batch");
		expect(request?.timeoutSeconds).toBe(
			WindowsComputerUseRPCClient.batchCallTimeoutMs({
				steps: [
					{ name: "computer_use_click", arguments: {}, expectChange: false },
					{ name: "computer_use_typing", arguments: { value: longText }, expectChange: false },
					{ name: "computer_use_press_key", arguments: {}, expectChange: false },
				],
				allowDestructive: false,
			}) / 1000
		);
		expect(request?.timeoutSeconds).toBe(
			(15_000 + WindowsComputerUseRPCClient.typingCallTimeoutMs(longText.length) + 15_000) / 1000
		);

		const destructive = await client.batch(ctx, {
			steps: [{ name: "computer_use_press_key", arguments: { key: "Delete" }, expectChange: false }],
			allowDestructive: true,
		});
		expect(JSON.parse(destructive.message).arguments).toEqual({
			steps: [{ name: "computer_use_press_key", arguments: { key: "Delete" } }],
			allow_destructive: true,
		});
		await client.dispose(ctx);
	});

	// A drag path goes to the sidecar as the `path` array it always read,
	// every point in order, up to the bound the sidecar applies; the client
	// adds nothing and reorders nothing.
	it("puts a drag path on the wire in order, at the sidecar's bound", async () => {
		const { client } = harness({}, {}, "drag");
		const ctx = createContext();
		const path = Array.from({ length: COMPUTER_USE_DRAG_PATH_MAX_POINTS }, (_, index) => ({
			x: 100 + index,
			y: 700 - index,
		}));

		const dragged = await client.drag(ctx, { button: "left", path });
		const request = JSON.parse(dragged.message);
		expect(request.name).toBe("computer_use_drag");
		expect(request.arguments).toEqual({ button: "left", path });
		expect(request.arguments.path).toHaveLength(COMPUTER_USE_DRAG_PATH_MAX_POINTS);
		// The request is the wire contract's drag call, bound included.
		expect(
			RemoteSidecarToolCallSchema.safeParse({
				id: 1,
				method: "tools/call",
				sessionId: "11111111-1111-4111-8111-111111111111",
				...request,
			}).success
		).toBe(true);

		const zoomed = await client.drag(ctx, {
			button: "right",
			path: path.slice(0, 3),
			zoomId: "zoom-3f9a-1",
		});
		expect(JSON.parse(zoomed.message).arguments).toEqual({
			button: "right",
			path: path.slice(0, 3),
			zoom_id: "zoom-3f9a-1",
		});
	});

	describe("remote-control lease", () => {
		const UUID_V4 =
			/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

		async function leaseLines(path: string): Promise<Record<string, unknown>[]> {
			const raw = await readFile(path, "utf8").catch(() => "");
			return raw
				.split("\n")
				.filter(line => line.length > 0)
				.map(line => JSON.parse(line) as Record<string, unknown>);
		}

		it("starts control on the wire and releases the session it was given", async () => {
			const leaseLog = join(directory, "lease.jsonl");
			const { client } = harness({ leaseLog }, {}, "lease");
			const ctx = createContext();

			await client.startControl(ctx);
			await client.releaseControl(ctx);

			const lines = await leaseLines(leaseLog);
			expect(lines).toHaveLength(2);
			expect(lines[0]).toMatchObject({ method: "control/start", mode: "remote" });
			expect(lines[0]).not.toHaveProperty("sessionId");
			expect(lines[1]).toMatchObject({ method: "control/release", mode: "remote" });
			// The release names the session the start was answered with — a
			// UUID the sidecar minted, not something the client made up.
			expect(lines[1].sessionId).toMatch(UUID_V4);
			expect(lines[0].requestID).not.toEqual(lines[1].requestID);
		});

		it("does not release a session it never started, and releases each start once", async () => {
			const leaseLog = join(directory, "lease.jsonl");
			const { client } = harness({ leaseLog }, {}, "lease-once");
			const ctx = createContext();

			await client.releaseControl(ctx);
			expect(await leaseLines(leaseLog)).toEqual([]);

			await client.startControl(ctx);
			await client.releaseControl(ctx);
			await client.releaseControl(ctx);
			const methods = (await leaseLines(leaseLog)).map(line => line.method);
			expect(methods).toEqual(["control/start", "control/release"]);

			// A new start after a release is a new session.
			await client.startControl(ctx);
			await client.releaseControl(ctx);
			const sessions = (await leaseLines(leaseLog))
				.filter(line => line.method === "control/release")
				.map(line => line.sessionId);
			expect(sessions).toHaveLength(2);
			expect(sessions[0]).not.toEqual(sessions[1]);
		});

		it("tolerates a sidecar that predates the lease", async () => {
			// An older sidecar refuses the method as `unsupported_request`. It
			// has no presence to show, so there is nothing to fail: start and
			// release resolve, no session is held, and nothing else is sent.
			const leaseLog = join(directory, "lease.jsonl");
			const { client } = harness({ leaseLog, noLease: true }, {}, "lease-old");
			const ctx = createContext();

			await expect(client.startControl(ctx)).resolves.toBeUndefined();
			await expect(client.releaseControl(ctx)).resolves.toBeUndefined();
			const methods = (await leaseLines(leaseLog)).map(line => line.method);
			expect(methods).toEqual(["control/start"]);

			// And the tools still work on such a sidecar.
			await expect(client.screenshot(ctx)).resolves.toMatchObject({
				isError: false,
			});
		});

		it("refuses to start control when the sidecar cannot be reached", async () => {
			const { client } = harness(
				{},
				{
					resolveExecutable: () => undefined,
				},
				"lease-unreachable"
			);
			const error = await client
				.startControl(createContext())
				.catch((caught: unknown) => caught);
			expect(error).toBeInstanceOf(ComputerUseRefusalError);
			expect((error as ComputerUseRefusalError).refusal.code).toBe(
				"sidecar_unavailable"
			);
		});

		it("the toolset takes the lease with a turn's first input and releases it when the turn ends", async () => {
			// The whole Windows path: the toolset the extension registers, over
			// this client, against the fake sidecar — what goes on the wire, and
			// in what order, from the first action to the turn's end.
			const requestLog = join(directory, "requests.jsonl");
			const leaseLog = join(directory, "lease.jsonl");
			const { client } = harness({ requestLog, leaseLog }, {}, "lease-turn");
			const toolset = new ComputerUseMcpToolset(client, { turnLease: true });
			const turn = createContext().with(conversationIdKey, "composer-1");
			const wire = async (): Promise<string[]> => {
				const raw = await readFile(requestLog, "utf8").catch(() => "");
				return raw
					.split("\n")
					.filter(line => line.length > 0)
					.map(line => JSON.parse(line) as { method: string; name?: string })
					.map(line => line.name ?? line.method);
			};

			// A screenshot takes nothing; the first input starts control, and
			// only then does the action go out.
			await toolset.callTool(turn, "computer_screenshot", {});
			await toolset.callTool(turn, "computer_click", { x: 1, y: 2 });
			await toolset.callTool(turn, "computer_key", { key: "Return" });
			expect(await wire()).toEqual([
				"ping", // the launch's own handshaken ping
				"computer_use_screenshot",
				"control/start",
				"computer_use_click",
				"computer_use_press_key",
			]);

			// The turn ends: one release, naming the sidecar's session; a
			// second notice sends nothing.
			await toolset.onTurnEnded(createContext(), "composer-1");
			await toolset.onTurnEnded(createContext(), "composer-1");
			expect((await wire()).slice(5)).toEqual(["control/release"]);
			const released = (await leaseLines(leaseLog)).filter(
				line => line.method === "control/release"
			);
			expect(released).toHaveLength(1);
			expect(released[0].sessionId).toMatch(UUID_V4);

			// The next turn opens a new session and its end releases that one.
			await toolset.callTool(turn, "computer_click", { x: 3, y: 4 });
			await toolset.onTurnEnded(createContext(), "composer-1");
			expect((await wire()).slice(6)).toEqual([
				"control/start",
				"computer_use_click",
				"control/release",
			]);
			const sessions = (await leaseLines(leaseLog))
				.filter(line => line.method === "control/release")
				.map(line => line.sessionId);
			expect(sessions).toHaveLength(2);
			expect(sessions[1]).toMatch(UUID_V4);
			expect(sessions[1]).not.toEqual(sessions[0]);
			await toolset.dispose(createContext());
		});
	});

	// A tripwire for the loop-tax wins that landed on the Windows path: the
	// toolset takes control once for the turn (not per action), never probes a
	// permission Windows always grants, and each input action is one sidecar
	// round trip. A regression that re-adds a probe, a per-action start, or a
	// second RPC per action shows up here as a count, before a live session
	// pays ≈3.4 s of hooks plus a model turn for it. This drives the real
	// spawned fixture, so the assertion is what actually went on the wire.
	describe("loop-tax tripwire", () => {
		const UUID_V4 =
			/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

		async function jsonl(path: string): Promise<Record<string, unknown>[]> {
			const raw = await readFile(path, "utf8").catch(() => "");
			return raw
				.split("\n")
				.filter(line => line.length > 0)
				.map(line => JSON.parse(line) as Record<string, unknown>);
		}

		it("takes control once and spends one RPC per input action, with no probe", async () => {
			const requestLog = join(directory, "requests.jsonl");
			const leaseLog = join(directory, "lease.jsonl");
			// Keep-alive off so the only pings are the launch's own handshaken
			// one; otherwise a slow run could interleave a keep-alive ping and
			// make the count time-dependent.
			const { client } = harness(
				{ requestLog, leaseLog },
				{ keepAliveIntervalMs: 0 },
				"loop-tax"
			);
			// The tripwire models the Windows loop, whose toolset is the
			// screen-scope one (`companionDefault` is off there). Pinning it
			// keeps the test faithful to Windows and lets it run on a macOS
			// host too, where the default would be the companion toolset and
			// `computer_type` without an app target would be refused before
			// anything reached the wire.
			const toolset = new ComputerUseMcpToolset(client, {
				turnLease: true,
				companionDefault: false,
			});
			const turn = createContext().with(conversationIdKey, "composer-1");

			// One observe, then every input action once. Each returns a
			// screenshot from the same call; none is a separate capture RPC.
			await toolset.callTool(turn, "computer_screenshot", {});
			await toolset.callTool(turn, "computer_click", { x: 10, y: 20 });
			await toolset.callTool(turn, "computer_move", { x: 30, y: 40 });
			await toolset.callTool(turn, "computer_type", { text: "hi" });
			await toolset.callTool(turn, "computer_key", { key: "Return" });
			await toolset.callTool(turn, "computer_scroll", { x: 50, y: 60, amount: 10 });
			await toolset.callTool(turn, "computer_drag", {
				from: { x: 1, y: 2 },
				to: { x: 3, y: 4 },
			});
			await toolset.onTurnEnded(createContext(), "composer-1");

			const requests = await jsonl(requestLog);
			const toolCalls = requests.filter(line => line.method === "tools/call");
			// The six input actions plus the screenshot: one tool RPC each, no
			// more. A per-action re-observe or re-admission would double a row.
			expect(toolCalls.map(line => line.name)).toEqual([
				"computer_use_screenshot",
				"computer_use_click",
				"computer_use_mouse_move",
				"computer_use_typing",
				"computer_use_press_key",
				"computer_use_scroll",
				"computer_use_drag",
			]);
			// Windows grants both permissions unconditionally, so the toolset
			// must never spend a round trip asking.
			expect(
				toolCalls.some(line => line.name === "computer_use_check_permissions")
			).toBe(false);
			// The only ping is the launch's; nothing re-admits per action.
			expect(requests.filter(line => line.method === "ping")).toHaveLength(1);

			const lease = await jsonl(leaseLog);
			// One start for the whole turn, one release at its end — not a
			// start/release straddling each action.
			expect(lease.map(line => line.method)).toEqual([
				"control/start",
				"control/release",
			]);
			expect(lease[1].sessionId).toMatch(UUID_V4);

			// Control is taken with the first input, after the screenshot —
			// never before it, and never as its own leading round trip.
			const wire = requests
				.filter(
					line => line.method === "tools/call" || line.method === "control/start"
				)
				.map(line => line.name ?? line.method);
			expect(wire).toEqual([
				"computer_use_screenshot",
				"control/start",
				"computer_use_click",
				"computer_use_mouse_move",
				"computer_use_typing",
				"computer_use_press_key",
				"computer_use_scroll",
				"computer_use_drag",
			]);

			await toolset.dispose(createContext());
		});
	});

	describe("keep-alive", () => {
		async function requestLines(path: string): Promise<{ at: number; method: string }[]> {
			const raw = await readFile(path, "utf8").catch(() => "");
			return raw
				.split("\n")
				.filter(line => line.length > 0)
				.map(line => JSON.parse(line) as { at: number; method: string });
		}
		const pings = (lines: { method: string }[]): number =>
			lines.filter(line => line.method === "ping").length;

		it("pings an idle sidecar every interval, and stops when the client is torn down", async () => {
			const requestLog = join(directory, "requests.jsonl");
			const { client, lastChild } = harness(
				{ requestLog },
				{ keepAliveIntervalMs: 150 },
				"keepalive"
			);
			const ctx = createContext();
			await client.screenshot(ctx);
			// The launch's own handshaken ping, then the tool call.
			const afterLaunch = await requestLines(requestLog);
			expect(afterLaunch.map(line => line.method)).toEqual(["ping", "tools/call"]);

			// Idle: pings arrive on the interval, each over a fresh handshaken
			// connection, and the sidecar is left alone otherwise.
			await new Promise(resolve => setTimeout(resolve, 700));
			const idle = await requestLines(requestLog);
			expect(pings(idle)).toBeGreaterThanOrEqual(3);
			expect(idle.filter(line => line.method === "tools/call")).toHaveLength(1);
			const child = lastChild();
			expect(child?.exitCode).toBeNull();

			// Torn down: no more pings, the sidecar is stopped as before.
			await client.dispose(ctx);
			const atDispose = pings(await requestLines(requestLog));
			await new Promise(resolve => setTimeout(resolve, 400));
			expect(pings(await requestLines(requestLog))).toBe(atDispose);
			expect(child?.exitCode !== null || child?.signalCode !== null).toBe(true);
		});

		it("does not ping while tool calls keep the sidecar busy", async () => {
			const requestLog = join(directory, "requests.jsonl");
			const { client } = harness(
				{ requestLog },
				{ keepAliveIntervalMs: 200 },
				"keepalive-busy"
			);
			const ctx = createContext();
			await client.screenshot(ctx);
			// A call every 80 ms for 700 ms: every tick finds a recent session.
			for (let i = 0; i < 8; i++) {
				await new Promise(resolve => setTimeout(resolve, 80));
				await client.screenshot(ctx);
			}
			const lines = await requestLines(requestLog);
			expect(pings(lines)).toBe(1); // the launch's own
			expect(lines.filter(line => line.method === "tools/call")).toHaveLength(9);
			await client.dispose(ctx);
		});

		it("stops pinging a sidecar that has exited and lets the next call relaunch it", async () => {
			const requestLog = join(directory, "requests.jsonl");
			const { client, lastChild, spawns } = harness(
				{ requestLog },
				{ keepAliveIntervalMs: 150 },
				"keepalive-dead"
			);
			const ctx = createContext();
			await client.screenshot(ctx);
			const first = lastChild();
			first?.kill("SIGKILL");
			await new Promise<void>(resolve => first?.once("exit", () => resolve()));
			const atDeath = pings(await requestLines(requestLog));
			await new Promise(resolve => setTimeout(resolve, 500));
			// No keep-alive relaunch: only a tool call may start a sidecar.
			expect(spawns).toHaveLength(1);
			expect(pings(await requestLines(requestLog))).toBe(atDeath);

			await client.screenshot(ctx);
			expect(spawns).toHaveLength(2);
			await new Promise(resolve => setTimeout(resolve, 400));
			expect(pings(await requestLines(requestLog))).toBeGreaterThan(atDeath + 1);
			await client.dispose(ctx);
		});

		it("is off with keepAliveIntervalMs 0", async () => {
			const requestLog = join(directory, "requests.jsonl");
			const { client } = harness({ requestLog }, { keepAliveIntervalMs: 0 }, "keepalive-off");
			const ctx = createContext();
			await client.screenshot(ctx);
			await new Promise(resolve => setTimeout(resolve, 400));
			expect(pings(await requestLines(requestLog))).toBe(1);
			await client.dispose(ctx);
		});
	});

	it("handshakes on every connection, not just the first", async () => {
		// Each tool call is its own connection, and the sidecar requires the
		// hello first on all of them; a second call proves the token is
		// presented again rather than the session being assumed.
		const { client } = harness();
		const ctx = createContext();

		await client.screenshot(ctx);
		await client.screenshot(ctx);
		await expect(client.typeText(ctx, "hello")).resolves.toMatchObject({
			isError: false,
		});
	});

	it("mints a fresh token for every launch", async () => {
		const first = harness({}, {}, "rotate-a");
		await first.client.screenshot(createContext());
		const second = harness({}, {}, "rotate-b");
		await second.client.screenshot(createContext());

		expect(await readFile(first.tokenPath, "utf8")).not.toEqual(
			await readFile(second.tokenPath, "utf8")
		);
	});

	it("drops the binding and clears the token when the handshake is denied", async () => {
		// Every refusal carries the same generic reason, so there is nothing to
		// branch on: a client that retried in place would spin. The binding is
		// dropped instead, and the live credential leaves disk with it.
		const { client, tokenPath } = harness({ rejectAll: true }, {}, "denier");

		await expect(client.screenshot(createContext())).rejects.toThrow(
			"refused the connection: handshake rejected"
		);
		await expect(readFile(tokenPath, "utf8")).rejects.toThrow("ENOENT");
	});

	it("refuses a welcome frame whose pid is not the sidecar it launched", async () => {
		// This is contract step 4: the welcome pid is the server's own claim,
		// so a squatter answering the handshake must not be believed.
		const { client } = harness({ reportPid: 999_999 }, {}, "impostor");

		await expect(client.screenshot(createContext())).rejects.toThrow(
			"computer-use sidecar identity mismatch"
		);
	});

	it("surfaces a squatted pipe name instead of retrying it", async () => {
		const { client } = harness({ squatted: true }, {}, "squatted");

		await expect(client.screenshot(createContext())).rejects.toThrow(
			"already owns"
		);
	});

	it("reports a sidecar that refuses its launch token file", async () => {
		// A wrongly owned or wrongly ACL'd token file makes the real sidecar
		// exit at startup rather than listen; to a client that looks like the
		// fixture failing to read the token it was pointed at.
		const { client } = harness(
			{},
			{
				spawnSidecar: () => {
					const child = spawn(
						process.execPath,
						[
							FIXTURE,
							join(directory, "no-binding.sock"),
							join(directory, "never-written.token"),
							"{}",
						],
						{ stdio: ["ignore", "ignore", "pipe"] }
					);
					children.push(child);
					return child;
				},
			},
			"no-binding"
		);

		await expect(client.screenshot(createContext())).rejects.toThrow(
			"rejected its launch token file"
		);
	});

	it("relaunches when the sidecar it was bound to has exited", async () => {
		const first = harness({}, {}, "restart");
		await first.client.screenshot(createContext());
		const originalPid = first.lastChild()?.pid;
		expect(originalPid).toBeDefined();

		// Idle exit, a crash, or a user killing it all look like this.
		first.lastChild()?.kill("SIGKILL");
		await new Promise<void>(resolve =>
			first.lastChild()?.once("exit", () => resolve())
		);

		await expect(
			first.client.screenshot(createContext())
		).resolves.toMatchObject({ isError: false });
		expect(first.lastChild()?.pid).not.toBe(originalPid);
		expect(first.spawns).toHaveLength(2);
	});

	it("reports a missing sidecar instead of hanging", async () => {
		const { client } = harness({}, { resolveExecutable: () => undefined });

		await expect(client.screenshot(createContext())).rejects.toThrow(
			"The Cursor Computer Use sidecar was not found"
		);
	});

	describe("refusal codes", () => {
		/** The refusal a call rejected with, asserting it is the structured kind. */
		async function refusalOf(call: Promise<unknown>): Promise<ComputerUseRefusal> {
			try {
				await call;
			} catch (error) {
				expect(error).toBeInstanceOf(ComputerUseRefusalError);
				return (error as ComputerUseRefusalError).refusal;
			}
			throw new Error("the call was expected to be refused");
		}

		it("passes a refused result's code and hint through untouched", async () => {
			// The sidecar's own classification wins: whatever it put in
			// structuredContent is what the model gets, message included.
			const { client } = harness(
				{
					refuse: {
						code: "secure_desktop",
						message:
							'Refusing to actuate: the active desktop is "Winlogon", not the interactive desktop.',
						recommended: "ask_user",
						reason: "Only the person at the machine can dismiss it.",
					},
				},
				{},
				"secure"
			);

			const refusal = await refusalOf(
				client.click(createContext(), {
					coordinate: { x: 1, y: 2 },
					button: "left",
					count: 1,
				})
			);
			expect(refusal).toEqual({
				code: "secure_desktop",
				message:
					'Refusing to actuate: the active desktop is "Winlogon", not the interactive desktop.',
				escalation: {
					recommended: "ask_user",
					reason: "Only the person at the machine can dismiss it.",
				},
			});
		});

		it("keeps a per-instance escalation override rather than the code's default", async () => {
			// input_failed defaults to retry; a partially accepted batch sends
			// the model to look first, and that override must survive the trip.
			const { client } = harness(
				{
					refuse: {
						code: "input_failed",
						message: "SendInput injected 1 of 3 events.",
						recommended: "use_different_tool",
						reason: "Part of the gesture was accepted.",
					},
				},
				{},
				"partial"
			);

			const refusal = await refusalOf(client.typeText(createContext(), "hi"));
			expect(refusal.code).toBe("input_failed");
			expect(refusal.escalation.recommended).toBe("use_different_tool");
		});

		it("classifies a refused envelope by its errorCode", async () => {
			const { client } = harness(
				{
					envelope: {
						code: "timeout",
						message: "Timed out while starting tool call",
						recommended: "retry",
						reason: "Nothing ran.",
					},
				},
				{},
				"expired"
			);

			const refusal = await refusalOf(client.screenshot(createContext()));
			expect(refusal).toEqual({
				code: "timeout",
				message: "Timed out while starting tool call",
				escalation: { recommended: "retry", reason: "Nothing ran." },
			});
		});

		it("still throws prose for a sidecar that predates the codes", async () => {
			// An isError result with no code is what an older sidecar sends. It
			// must not be dressed up as a structured refusal it never made.
			const { client } = harness(
				{ legacyError: "Failed to capture a display screenshot." },
				{},
				"legacy"
			);

			const call = client.screenshot(createContext());
			await expect(call).rejects.toThrow(
				"Failed to capture a display screenshot."
			);
			await expect(call).rejects.not.toBeInstanceOf(ComputerUseRefusalError);
		});

		it("refuses as sidecar_unavailable when the sidecar cannot be started", async () => {
			// Nothing was written, so nothing can have actuated; the message is
			// the transport's own, and the code tells the model to hand off.
			const { client } = harness(
				{},
				{ resolveExecutable: () => undefined },
				"absent"
			);

			const refusal = await refusalOf(client.screenshot(createContext()));
			expect(refusal.code).toBe("sidecar_unavailable");
			expect(refusal.message).toContain(
				"The Cursor Computer Use sidecar was not found"
			);
			expect(refusal.escalation.recommended).toBe("ask_user");
		});

		it("refuses as sidecar_unavailable when the handshake is denied", async () => {
			// The handshake runs before the request is written, so a denial is
			// an unreachable sidecar, not an unknown outcome.
			const { client } = harness({ rejectAll: true }, {}, "denied");

			const refusal = await refusalOf(client.screenshot(createContext()));
			expect(refusal.code).toBe("sidecar_unavailable");
			expect(refusal.message).toContain("handshake rejected");
		});

		it("refuses as outcome_unknown when the sidecar hangs up after the request", async () => {
			// The request was delivered and the sidecar died without answering:
			// the click may have landed, so the hint is a screenshot, never a
			// retry — and the client must not have retried on its own either.
			const { client, spawns } = harness(
				{ dropAfterRequest: true },
				{},
				"dropped"
			);

			const refusal = await refusalOf(
				client.click(createContext(), {
					coordinate: { x: 1, y: 2 },
					button: "left",
					count: 1,
				})
			);
			expect(refusal.code).toBe("outcome_unknown");
			expect(refusal.message).toContain("after request delivery");
			expect(refusal.escalation.recommended).toBe("use_different_tool");
			expect(refusal.escalation.reason).toContain("screenshot");
			expect(spawns).toHaveLength(1);
		});

		it("refuses as outcome_unknown when the answer is not a response", async () => {
			// Garbage back means the sidecar ran something and could not say
			// what; a protocol error after delivery is an unknown outcome too.
			const { client } = harness(
				{ garbageAfterRequest: true },
				{},
				"garbage"
			);

			const refusal = await refusalOf(client.typeText(createContext(), "x"));
			expect(refusal.code).toBe("outcome_unknown");
			expect(refusal.message).toContain("not valid JSON");
			// Typing's unknown-outcome hint is the truthful one, not the generic
			// switch-tools one (see the dedicated test below).
			expect(refusal.escalation.recommended).toBe("ask_user");
		});

		it("tells the truth on a typing timeout instead of 'use a different tool'", async () => {
			// The bug: a long type outran the flat deadline, the client refused
			// with outcome_unknown + use_different_tool, and the model abandoned
			// typing while the text was in fact landing. Typing keeps the
			// outcome_unknown code but must not tell the model to switch tools —
			// the text has very likely landed, so the honest next step is to look
			// and not retype.
			const { client, spawns } = harness(
				{ dropAfterRequest: true },
				{},
				"typing-unknown"
			);

			const refusal = await refusalOf(client.typeText(createContext(), "a long value"));
			expect(refusal.code).toBe("outcome_unknown");
			expect(refusal.escalation.recommended).toBe("ask_user");
			expect(refusal.escalation.recommended).not.toBe("use_different_tool");
			expect(refusal.escalation.reason).toContain("screenshot");
			expect(refusal.escalation.reason).toContain("retype");
			// And it did not silently retry the delivered request.
			expect(spawns).toHaveLength(1);
		});

		it("refuses as outcome_unknown when the answer exceeds the size limit", async () => {
			// The size check fails the connection from inside the framing
			// layer, which has to carry the delivered flag like every other
			// post-delivery failure: the sidecar answered, so it ran the tool,
			// and "nothing was actuated" would be a lie.
			const { client, spawns } = harness(
				{ oversizedAfterRequest: SidecarRpcCodec.responseMaxBytes + 1 },
				{},
				"oversized"
			);

			const refusal = await refusalOf(
				client.click(createContext(), {
					coordinate: { x: 1, y: 2 },
					button: "left",
					count: 1,
				})
			);
			expect(refusal.code).toBe("outcome_unknown");
			expect(refusal.message).toContain("exceeded the size limit");
			expect(refusal.escalation.recommended).toBe("use_different_tool");
			expect(spawns).toHaveLength(1);
		});
	});

	describe("typing deadline", () => {
		async function toolCalls(
			path: string
		): Promise<{ name?: string; timeoutSeconds?: number }[]> {
			const raw = await readFile(path, "utf8").catch(() => "");
			return raw
				.split("\n")
				.filter(line => line.length > 0)
				.map(
					line =>
						JSON.parse(line) as {
							method: string;
							name?: string;
							timeoutSeconds?: number;
						}
				)
				.filter(line => line.method === "tools/call");
		}

		it("scales a typing call's deadline with the text length, past the flat default", async () => {
			// A screenshot uses the flat 15 s; a long type is given the
			// length-scaled deadline instead, so the sidecar has time to finish
			// and the client does not cut it off mid-type.
			const requestLog = join(directory, "requests.jsonl");
			const { client } = harness({ requestLog }, {}, "typing-deadline");
			const ctx = createContext();

			await client.screenshot(ctx);
			const longText = "x".repeat(2000);
			await client.typeText(ctx, longText);

			const calls = await toolCalls(requestLog);
			const screenshot = calls.find(c => c.name === "computer_use_screenshot");
			const typing = calls.find(c => c.name === "computer_use_typing");
			expect(screenshot?.timeoutSeconds).toBe(15);
			expect(typing?.timeoutSeconds).toBe(
				WindowsComputerUseRPCClient.typingCallTimeoutMs(longText.length) / 1000
			);
			expect(typing!.timeoutSeconds!).toBeGreaterThan(
				screenshot!.timeoutSeconds!
			);
			await client.dispose(ctx);
		});
	});

	it("refuses to launch an unpinned sidecar when the client is pinned-signed", async () => {
		// Derived enforcement: a signed client enforces the signer pin.
		const { client } = harness(
			{},
			{
				verifySigner: async imagePath =>
					imagePath.endsWith("Cursor.exe")
						? signedByAnysphere
						: { kind: "untrusted-signer", subject: "Contoso Ltd." },
			},
			"unpinned"
		);

		await expect(client.screenshot(createContext())).rejects.toThrow(
			'is signed by Contoso Ltd., not "Anysphere, Inc."'
		);
	});

	// The local testing recipe: a signed Cursor driving a locally built,
	// unsigned sidecar in the dev-install slot. Enforcement would refuse it;
	// the escape hatch lets it through, from that slot only, and says so.
	describe("developer escape hatch", () => {
		const devInstall = {
			executablePath: String.raw`C:\Users\jdoe\.cursor\cursor-computer-use\cursor-cua-sidecar.exe`,
			source: "dev-install",
		} as const;
		const signedClientUnsignedSidecar = async (imagePath: string) =>
			imagePath.endsWith("Cursor.exe")
				? signedByAnysphere
				: ({ kind: "unsigned", detail: "NotSigned" } as const);

		it("refuses an unsigned dev-install sidecar under enforce and names the remedy", async () => {
			const { client, spawns } = harness(
				{},
				{
					resolveExecutable: () => devInstall,
					verifySigner: signedClientUnsignedSidecar,
				},
				"dev-refused"
			);

			await expect(client.screenshot(createContext())).rejects.toThrow(
				"CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR=1"
			);
			expect(spawns).toHaveLength(0);
		});

		it("launches it with CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR=1", async () => {
			const { client, spawns } = harness(
				{},
				{
					resolveExecutable: () => devInstall,
					verifySigner: signedClientUnsignedSidecar,
					env: { CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR: "1" },
				},
				"dev-allowed"
			);

			await expect(
				client.screenshot(createContext())
			).resolves.toMatchObject({ isError: false });
			expect(spawns).toEqual([devInstall.executablePath]);
		});

		it("does not honour it for a release the client downloaded itself", async () => {
			const { client, spawns } = harness(
				{},
				{
					resolveExecutable: () => ({
						executablePath: String.raw`C:\Users\jdoe\.cursor\computer-use-sidecar\cursor-cua-sidecar.exe`,
						source: "download-cache",
					}),
					verifySigner: signedClientUnsignedSidecar,
					env: { CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR: "1" },
				},
				"downloaded-unsigned"
			);

			await expect(client.screenshot(createContext())).rejects.toThrow(
				"[unsigned_sidecar]"
			);
			expect(spawns).toHaveLength(0);
		});
	});

	it("audits rather than enforces when the client itself is unsigned", async () => {
		// A dev build driving a dev sidecar must keep working, matching the
		// sidecar's own derived enforce-vs-audit rule.
		const { client } = harness(
			{},
			{
				verifySigner: async () => ({
					kind: "unsigned",
					detail: "NotSigned",
				}),
			},
			"dev"
		);

		await expect(
			client.screenshot(createContext())
		).resolves.toMatchObject({ isError: false });
	});

	it("stops the sidecar it launched when the extension is torn down", async () => {
		// A sidecar that outlives its client keeps the single pipe instance,
		// so the next window's launch aborts as a squatter and tells the user
		// to restart the machine. The sidecar's idle timer is the fallback for
		// a hard host crash, not the mechanism for an orderly shutdown.
		const { client, tokenPath, lastChild } = harness({}, {}, "teardown");
		await client.screenshot(createContext());
		expect(lastChild()?.exitCode).toBeNull();

		await client.dispose(createContext());

		const child = lastChild();
		expect(child?.exitCode !== null || child?.signalCode !== null).toBe(true);
		// The live credential leaves disk with the process that was bound to it.
		await expect(readFile(tokenPath, "utf8")).rejects.toThrow("ENOENT");
	});

	// F1. `stopChild`'s timer handles were declared after the `try`, so the
	// `kill()` catch path read them in the temporal dead zone. The
	// `ReferenceError` escaped the promise executor, `stopChild` returned a
	// rejected promise, the retirement chain went with it, and `deactivate`'s
	// swallow hid all of it — leaving a live sidecar still holding the pipe
	// while teardown reported success. Node throws from `kill()` on
	// UV_EINVAL/UV_ENOSYS, and also when a second kill finds no `error`
	// listener left on the child.
	it("keeps retiring after a child whose kill() throws", async () => {
		const endpoint = join(directory, "kill-throws.sock");
		const tokenPath = join(directory, "kill-throws.token");
		const spawns: string[] = [];
		let patched = false;
		const client = new WindowsComputerUseRPCClient("remote", {
			resolvePipeName: async () => endpoint,
			resolveTokenPath: async () => tokenPath,
			resolveExecutable: () => resolvedSidecar,
			verifySigner: async () => signedByAnysphere,
			clientImagePath: String.raw`C:\Cursor\Cursor.exe`,
			spawnSidecar: () => {
				const child = spawn(
					process.execPath,
					[FIXTURE, endpoint, tokenPath, "{}"],
					{ stdio: ["ignore", "ignore", "pipe"] }
				);
				children.push(child);
				spawns.push("spawn");
				if (!patched) {
					patched = true;
					const real = child.kill.bind(child);
					// Only the teardown call (no signal) throws, so the suite's
					// own cleanup can still reap the process.
					child.kill = ((signal?: NodeJS.Signals) =>
						signal === undefined
							? (() => {
								throw new Error("kill EPERM");
							})()
							: real(signal)) as typeof child.kill;
				}
				return child;
			},
		});
		const ctx = createContext();
		await client.screenshot(ctx);

		rmSync(endpoint);
		// The forced relaunch retires the first child, whose kill() throws, so
		// it never exits. Two properties at once: retirement absorbs the throw
		// rather than poisoning the chain (a poisoned chain surfaces the TDZ
		// ReferenceError here instead), and the relaunch is refused rather than
		// spawning over a predecessor that may still hold the pipe name.
		await expect(client.screenshot(ctx)).rejects.toThrow(
			"did not exit and may still hold the pipe"
		);
		expect(spawns).toHaveLength(1);
	});

	// F8, and the test that finally isolates F2. I had recorded that F2's
	// rejection guard could not be pinned alone, because with F1 fixed nothing
	// in `retireSidecar` can reject. That was true of `retireSidecar` and false
	// of the chain: the guard's own `.catch` callback logs, and the output
	// channel throws `Channel has been closed` once the extension host has
	// disposed it — which teardown now deliberately outlives. A `.catch` whose
	// callback can throw is not a guard, so the chain re-entered the absorbing
	// state the guard exists to prevent.
	it("survives a logger that throws while retiring", async () => {
		const endpoint = join(directory, "throwing-logger.sock");
		const tokenPath = join(directory, "throwing-logger.token");
		const spawns: string[] = [];
		let patched = false;
		const client = new WindowsComputerUseRPCClient("remote", {
			resolvePipeName: async () => endpoint,
			resolveTokenPath: async () => tokenPath,
			resolveExecutable: () => resolvedSidecar,
			verifySigner: async () => signedByAnysphere,
			clientImagePath: String.raw`C:\Cursor\Cursor.exe`,
			spawnSidecar: () => {
				spawns.push("spawn");
				const child = spawn(
					process.execPath,
					[FIXTURE, endpoint, tokenPath, "{}"],
					{ stdio: ["ignore", "ignore", "pipe"] }
				);
				children.push(child);
				if (!patched) {
					patched = true;
					// Force the timed-out-retirement path, which is the one
					// that logs from inside the chain.
					makeUndying(child);
				}
				return child;
			},
		});
		// Scoped to the chain's own messages on purpose. In the real system a
		// closed channel breaks *every* logger call, which is why the fix that
		// matters is in `OutputChannelLoggerBackend` (covered in
		// extension.test.ts). Holding everything else constant is what makes
		// this a test of the chain rather than of the logger.
		const ctx = createContext().with(loggerKey, {
			log: (_c, entry) => {
				if (/retirement|did not exit within/.test(entry.message)) {
					throw new Error("Channel has been closed");
				}
			},
		});

		await client.screenshot(ctx);
		rmSync(endpoint);

		// The chain must still be fulfilled: the next launch reaches its own
		// refusal rather than rejecting with the logger's error forwarded from
		// `await this.retiring`.
		await expect(client.screenshot(ctx)).rejects.toThrow(
			"did not exit and may still hold the pipe"
		);
		expect(spawns).toHaveLength(1);
	}, 15_000);

	// T4. The fixture normally dies in microseconds, so every existing test
	// passes with any non-zero wait: they separate "no wait" from "some wait",
	// not "waited for exit" from "gave up". A child that takes 150 ms must
	// still be waited for — cutting RETIRE_HARD_MS below that has to redden
	// something, or the bound is pinned by nothing.
	it("waits out a slow exit rather than giving up on it", async () => {
		const { client, endpoint, spawns, priorAliveAtSpawn } = harness(
			{ exitDelayMs: 150 },
			{},
			"slow-exit"
		);
		const ctx = createContext();
		await client.screenshot(ctx);

		rmSync(endpoint);
		await expect(client.screenshot(ctx)).resolves.toMatchObject({
			isError: false,
		});
		expect(spawns).toHaveLength(2);
		expect(priorAliveAtSpawn).toEqual([false, false]);
	});

	// F6. `openSession` reads `active` before a handshake that can take five
	// seconds, and `retire()` used to re-read it afterwards — so a denial that
	// arrived after a relaunch destroyed the healthy replacement. Driven at the
	// transport, because the interleaving needs a connection parked inside the
	// handshake window while a relaunch completes underneath it.
	it("ignores a handshake denial for a binding that has been replaced", async () => {
		const endpoint = join(directory, "stale-denial.sock");
		const spawns: string[] = [];
		const transport = new WindowsSidecarTransport({
			resolvePipeName: async () => endpoint,
			resolveTokenPath: async () => join(directory, "stale-denial.token"),
			resolveExecutable: () => resolvedSidecar,
			verifySigner: async () => signedByAnysphere,
			clientImagePath: String.raw`C:\Cursor\Cursor.exe`,
			spawnSidecar: () => {
				spawns.push("spawn");
				const child = spawn(
					process.execPath,
					[
						FIXTURE,
						endpoint,
						join(directory, "stale-denial.token"),
						"{}",
					],
					{ stdio: ["ignore", "ignore", "pipe"] }
				);
				children.push(child);
				return child;
			},
		});
		const ctx = createContext();
		await transport.resolveEndpoint(ctx, false);

		// Park a connection inside the handshake window: it has read `active`
		// (binding A) and is waiting for a reply that has not arrived.
		let deliverReply: (line: Buffer) => void = () => { };
		const parked = transport.openSession(ctx, {
			writeLine: async () => undefined,
			readLine: async () =>
				new Promise<Buffer>(resolve => {
					deliverReply = resolve;
				}),
		});
		parked.catch(() => undefined);

		// Relaunch underneath it. `active` is now binding B.
		await transport.resolveEndpoint(ctx, true);
		expect(spawns).toHaveLength(2);

		// Now let A's connection be refused. It must retire A, which is already
		// gone — not B, which is healthy and freshly handshaken.
		deliverReply(
			Buffer.from(
				JSON.stringify({ cua: "denied", reason: "handshake rejected" })
			)
		);
		await expect(parked).rejects.toThrow("handshake rejected");

		// B survived: a cached-endpoint call reuses it instead of relaunching.
		await transport.resolveEndpoint(ctx, false);
		expect(spawns).toHaveLength(2);
		await transport.dispose(ctx);
	});

	// F7. A kill that returns cleanly without the process dying — the shape of
	// TerminateProcess initiating teardown while handles, and the pipe instance
	// with them, are still held. `stopChild` gives up after the bound; what it
	// must not do is report that as an exit, because the caller then spawns
	// into a name the predecessor still owns.
	it("refuses to relaunch over a predecessor that would not die", async () => {
		const endpoint = join(directory, "undying.sock");
		const tokenPath = join(directory, "undying.token");
		const spawns: string[] = [];
		let patched = false;
		const client = new WindowsComputerUseRPCClient("remote", {
			resolvePipeName: async () => endpoint,
			resolveTokenPath: async () => tokenPath,
			resolveExecutable: () => resolvedSidecar,
			verifySigner: async () => signedByAnysphere,
			clientImagePath: String.raw`C:\Cursor\Cursor.exe`,
			spawnSidecar: () => {
				spawns.push("spawn");
				const child = spawn(
					process.execPath,
					[FIXTURE, endpoint, tokenPath, "{}"],
					{ stdio: ["ignore", "ignore", "pipe"] }
				);
				children.push(child);
				if (!patched) {
					patched = true;
					// Indistinguishable from a real kill until the child
					// fails to exit.
					makeUndying(child);
				}
				return child;
			},
		});
		const ctx = createContext();
		await client.screenshot(ctx);

		rmSync(endpoint);
		await expect(client.screenshot(ctx)).rejects.toThrow(
			"did not exit and may still hold the pipe"
		);
		// The point: no second spawn racing a live predecessor for the name.
		expect(spawns).toHaveLength(1);
	}, 15_000);

	// F7 through the other door. The chain records a child that outlives the
	// retirement bound, but `launch` retires inline when the readiness ping
	// fails after the child already owns the name, and that path threw
	// `stopChild`'s verdict away — so the undying predecessor was never
	// recorded and the next launch spawned straight into its pipe name.
	it("refuses to relaunch over a launch-failed sidecar that would not die", async () => {
		const endpoint = join(directory, "undying-launch.sock");
		const tokenPath = join(directory, "undying-launch.token");
		const spawns: string[] = [];
		let patched = false;
		const client = new WindowsComputerUseRPCClient("remote", {
			resolvePipeName: async () => endpoint,
			resolveTokenPath: async () => tokenPath,
			resolveExecutable: () => resolvedSidecar,
			verifySigner: async () => signedByAnysphere,
			clientImagePath: String.raw`C:\Cursor\Cursor.exe`,
			spawnSidecar: () => {
				spawns.push("spawn");
				// Listens, then denies the launch-time ping's handshake: the
				// launch fails only after the child holds the name.
				const child = spawn(
					process.execPath,
					[FIXTURE, endpoint, tokenPath, JSON.stringify({ rejectAll: true })],
					{ stdio: ["ignore", "ignore", "pipe"] }
				);
				children.push(child);
				if (!patched) {
					patched = true;
					makeUndying(child);
				}
				return child;
			},
		});
		const ctx = createContext();

		await expect(client.screenshot(ctx)).rejects.toThrow("handshake rejected");
		// The point: refuse rather than spawn a second sidecar to race the
		// live predecessor for the name.
		await expect(client.screenshot(ctx)).rejects.toThrow(
			"did not exit and may still hold the pipe"
		);
		expect(spawns).toHaveLength(1);
	}, 15_000);

	// T1. The previous relaunch test drives `rejectAll`, which fails at the
	// launch-time ping — so `launch`'s own inline retire runs and the chain is
	// never involved. This reaches a live, bound sidecar first and then forces
	// a relaunch the way production does, via the pre-delivery retry, which is
	// the only path that retires a live `active` through `this.retiring`.
	it("waits for a live sidecar to exit before a forced relaunch", async () => {
		const { client, endpoint, spawns, priorAliveAtSpawn, lastChild } =
			harness({}, {}, "forced");
		const ctx = createContext();
		await client.screenshot(ctx);
		const first = lastChild();
		expect(first?.exitCode).toBeNull();

		// Remove the socket while its owner lives: the next dial fails
		// pre-delivery with ENOENT, which is what triggers `forceLaunch`.
		rmSync(endpoint);
		await expect(client.screenshot(ctx)).resolves.toMatchObject({
			isError: false,
		});

		expect(spawns).toHaveLength(2);
		// A `true` here is the pipe-name race: the replacement spawned while
		// its predecessor still held the single instance.
		expect(priorAliveAtSpawn).toEqual([false, false]);
	});

	// T3. `rejectAll` never gets past the launch ping, so the denial branch in
	// `openSession` — the only one that retires a live, bound sidecar with no
	// relaunch behind it — was executed by no test at all.
	it("drops a live binding when a later connection is denied", async () => {
		// Admit the launch-time ping, deny everything after it.
		const { client, spawns, priorAliveAtSpawn, lastChild } = harness(
			{ denyAfter: 1 },
			{},
			"denied-later"
		);
		const ctx = createContext();

		await expect(client.screenshot(ctx)).rejects.toThrow(
			"refused the connection: handshake rejected"
		);
		const denied = lastChild();
		expect(spawns).toHaveLength(1);

		// The binding is dropped, so the next call relaunches exactly once and
		// must not race the predecessor for the pipe name.
		await expect(client.screenshot(ctx)).rejects.toThrow();
		expect(spawns).toHaveLength(2);
		expect(priorAliveAtSpawn).toEqual([false, false]);
		expect(denied?.exitCode !== null || denied?.signalCode !== null).toBe(
			true
		);
	});

	// T2. Asserting after the launch has also settled cannot tell "dispose
	// killed it" from "the launch's own cleanup killed it, moments after the
	// host was already free to exit". The extension host calls exit() the
	// instant deactivate resolves, so the liveness that matters is the
	// liveness at that instant.
	it("has already stopped the child by the time dispose resolves", async () => {
		// A child that spawns and never reports listening, so the launch is
		// parked after the spawn with a real process to orphan.
		let spawned: ChildProcess | undefined;
		const { client } = harness(
			{},
			{
				spawnSidecar: () => {
					spawned = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], {
						stdio: ["ignore", "ignore", "pipe"],
					});
					children.push(spawned);
					return spawned;
				},
			},
			"never-ready"
		);

		const call = client.screenshot(createContext());
		call.catch(() => undefined);
		while (spawned === undefined) {
			await new Promise(resolve => setTimeout(resolve, 5));
		}

		await client.dispose(createContext());
		const aliveAtResolution =
			spawned!.exitCode === null && spawned!.signalCode === null;

		await expect(call).rejects.toThrow();
		expect(aliveAtResolution).toBe(false);
	});

	it("stops a sidecar that was still launching when the client shut down", async () => {
		// A reload during the very first tool call has a spawn in progress and
		// nothing in `active` yet, so a teardown that only retires `active`
		// finds nothing and the sidecar it started outlives the client — the
		// same orphan the teardown exists to prevent, in the race window.
		let releaseSigner = (): void => { };
		const signerGate = new Promise<void>(resolve => {
			releaseSigner = resolve;
		});
		const { client, tokenPath, spawns, lastChild } = harness(
			{},
			{
				verifySigner: async () => {
					await signerGate;
					return signedByAnysphere;
				},
			},
			"inflight"
		);

		const call = client.screenshot(createContext());
		await Promise.resolve();
		const teardown = client.dispose(createContext());
		releaseSigner();

		await expect(call).rejects.toThrow("transport has been shut down");
		await teardown;

		// The launch now short-circuits at the signer boundary rather than
		// spawning and retiring: nothing is created, so nothing can be
		// orphaned, and the token never reaches disk.
		expect(spawns).toEqual([]);
		expect(lastChild()).toBeUndefined();
		await expect(readFile(tokenPath, "utf8")).rejects.toThrow("ENOENT");
	});

	it("refuses to launch once the client has shut down", async () => {
		// The mid-launch check cannot cover this: by the time a call arrives
		// after `dispose` has returned, the extension host is free to unload,
		// so a spawn-then-retire may not outlive the process. Not spawning is
		// the only half that cannot leak a sidecar holding the pipe.
		const { client, spawns } = harness({}, {}, "after-teardown");
		await client.screenshot(createContext());
		expect(spawns).toHaveLength(1);

		await client.dispose(createContext());

		await expect(client.screenshot(createContext())).rejects.toThrow(
			"transport has been shut down"
		);
		expect(spawns).toHaveLength(1);
	});

	it("waits for a retired sidecar to exit before relaunching", async () => {
		// `kill()` returns long before the process dies and the kernel
		// releases the pipe name, so a relaunch that does not wait races the
		// corpse and loses FILE_FLAG_FIRST_PIPE_INSTANCE.
		const { client, priorAliveAtSpawn } = harness(
			{ rejectAll: true },
			{},
			"relaunch"
		);
		const ctx = createContext();

		await expect(client.screenshot(ctx)).rejects.toThrow();
		await expect(client.screenshot(ctx)).rejects.toThrow();

		expect(priorAliveAtSpawn).toEqual([false, false]);
	});
});
