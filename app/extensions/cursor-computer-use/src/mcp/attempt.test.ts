import { describe, expect, it } from "vitest";
import { candidatesOf, parseAxLines } from "./attempt-ax";
import {
	attemptSequence,
	gateDecision,
	type NextActionDecider,
	type CompanionCall,
	type DecideInput,
	type NextActionAnswers,
} from "./attempt";

const TREE = [
	'OK tool=computer_use_app_state message="Snapshot."',
	"[1] AXApplication name=\"Music\"",
	"  [6] AXStaticText name=\"Home\"",
	"  [8] AXStaticText name=\"Search\"",
	"  [9] AXTextField name=\"Search\" value=\"\" settable actions=confirm",
].join("\n");

function answers(overrides: {
	kind: Record<string, number>;
	item?: Record<string, number>;
	key?: Record<string, number>;
	present?: number;
	goalReached?: number;
	unreachable?: number;
	lastLanded?: number;
	expect?: number;
}): NextActionAnswers {
	const pick = (probabilities: Record<string, number>) => ({
		label: Object.entries(probabilities).sort((left, right) => right[1] - left[1])[0][0],
		probabilities,
	});
	return {
		kind: pick(overrides.kind),
		item: pick(overrides.item ?? { "8": 1 }),
		key: pick(overrides.key ?? { none: 1 }),
		present: overrides.present ?? 0.9,
		goalReached: overrides.goalReached ?? 0.1,
		unreachable: overrides.unreachable ?? 0.05,
		...(overrides.lastLanded === undefined ? {} : { lastLanded: overrides.lastLanded }),
		...(overrides.expect === undefined ? {} : { expect: overrides.expect }),
	};
}

describe("gateDecision", () => {
	const candidates = candidatesOf(parseAxLines(TREE));
	const goal = 'type "house music" into the search field';

	for (const c of [
		{
			name: "press with a confident kind and item passes",
			answers: answers({ kind: { press: 0.8, type: 0.2 }, item: { "8": 0.7, "6": 0.3 } }),
			expected: { ok: true, act: "element", kind: "press", p: 0.7, present: 0.9 },
		},
		{
			name: "present below 0.35 refuses as target not present",
			answers: answers({ kind: { press: 0.9 }, present: 0.2 }),
			expected: { ok: false, reason: "target not present" },
		},
		{
			name: "min(p_kind, p_item) below 0.5 refuses as low confidence",
			answers: answers({ kind: { press: 0.9 }, item: { "8": 0.45, "6": 0.4, "9": 0.15 } }),
			expected: { ok: false, reason: "low confidence" },
		},
		{
			name: "an item id outside the candidates is target not present",
			answers: answers({ kind: { press: 0.9 }, item: { "3": 1 } }),
			expected: { ok: false, reason: "target not present" },
		},
		{
			name: "kind none is the medium band: refused with the noul numbers",
			answers: answers({ kind: { none: 0.6, press: 0.4 }, goalReached: 0.45, unreachable: 0.3 }),
			expected: { ok: false, reason: "low confidence", detail: "kind=none p=0.60 goal_reached=0.45 unreachable=0.30" },
		},
		{
			name: "key none refuses",
			answers: answers({ kind: { key: 0.9 }, key: { none: 0.9 } }),
			expected: { ok: false, reason: "low confidence" },
		},
		{
			name: "a key label outside the client's keys refuses",
			answers: answers({ kind: { key: 0.9 }, key: { F13: 0.9 } }),
			expected: { ok: false, reason: "low confidence" },
		},
		{
			name: "key passes with a confident key",
			answers: answers({ kind: { key: 0.7 }, key: { Escape: 0.9 } }),
			expected: { ok: true, act: "key", key: "Escape", p: 0.7 },
		},
		{
			name: "set_value passes with the quoted text",
			answers: answers({ kind: { set_value: 0.8 }, item: { "9": 0.9 } }),
			expected: { ok: true, act: "element", kind: "set_value" },
		},
	]) {
		it(c.name, () => {
			expect(gateDecision({ answers: c.answers, candidates, goal })).toMatchObject(c.expected);
		});
	}

	it("a typing kind without quoted text refuses", () => {
		expect(
			gateDecision({ answers: answers({ kind: { type: 0.8 }, item: { "9": 0.9 } }), candidates, goal: "type something in the search field" })
		).toMatchObject({ ok: false, reason: "no quoted text" });
	});
});

describe("attemptSequence", () => {
	const tree = (value: string) =>
		[
			'OK tool=computer_use_app_state message="Snapshot."',
			"[1] AXWindow name=\"TextEdit\"",
			` [2] AXTextArea value="${value}" settable`,
			" [3] AXButton name=\"Save\"",
		].join("\n");
	type Read = string | { error: string } | Error;
	const sidecar = (reads: Read[], act: (name: string) => Promise<unknown> = async () => ({ message: "OK", isError: false })) => {
		const calls: string[] = [];
		let index = 0;
		const call: CompanionCall = async (name, args) => {
			calls.push(name === "computer_use_app_state" ? name : `${name} ${JSON.stringify(args)}`);
			if (name === "computer_use_app_state") {
				const read = reads[Math.min(index, reads.length - 1)];
				index += 1;
				if (read instanceof Error) throw read;
				if (typeof read !== "string") return { message: read.error, isError: true } as never;
				return { message: tree(read), isError: false, structuredContent: { snapshotID: `snap-${index}` } } as never;
			}
			return (await act(name)) as never;
		};
		return { call, calls };
	};
	const decider = (script: Array<Parameters<typeof answers>[0] | Error>) => {
		const inputs: DecideInput[] = [];
		let index = 0;
		const scripted: NextActionDecider = {
			decide: async input => {
				inputs.push(input);
				const entry = script[index++];
				if (entry === undefined) throw new Error(`unscripted call ${input.stepIndex}.${input.iteration}`);
				if (entry instanceof Error) throw entry;
				return answers(entry);
			},
		};
		return { scripted, inputs };
	};
	const wait = () => Promise.resolve();
	const normalize = (text: string) => text.split("\n").map(line => line.replace(/\d+ ms/, "N ms"));

	it("acts until goal_reached clears its bar, shares the tree between goals, and lists each as done", async () => {
		const { call, calls } = sidecar(["", "hello", "hello"]);
		const { scripted, inputs } = decider([
			{ kind: { set_value: 0.9 }, item: { "2": 1 } },
			{ kind: { none: 0.8 }, goalReached: 0.95, lastLanded: 0.97 },
			{ kind: { none: 0.9 }, goalReached: 0.8 },
		]);
		const result = await attemptSequence({
			decider: scripted,
			call,
			args: { steps: [{ step: 'type "hello" into the document' }, { step: "make sure the text is there" }] },
			wait,
			attemptId: "attempt-1",
		});
		expect(result.isError).toBe(false);
		expect(normalize(result.text)).toEqual([
			"OK attempt: 2/2 steps done",
			'1. done (1 action, 2 decisions, N ms, goal_reached=0.95): type "hello" into the document',
			"2. done (0 actions, 1 decision, N ms, goal_reached=0.80): make sure the text is there",
			"changed:",
			'  AXTextArea value "" -> "hello"',
			'  + AXTextArea value="hello" settable',
			"  - AXTextArea settable",
			'now: window: "TextEdit"',
			'  AXTextArea value="hello" settable',
			'  AXButton "Save"',
			"trace:",
			'  1.1. set_value [2] "hello" [2] AXTextArea value="" settable p_kind=0.90 p_item=1.00 present=0.90 goal_reached=0.10 unreachable=0.05 -> [2] AXTextArea value "" -> "hello" landed=0.97',
			"  1.2. reached goal_reached=0.95 unreachable=0.05",
			"  2.1. reached goal_reached=0.80 unreachable=0.05",
			"snapshot_id=snap-2",
			"To act by element_id, read computer_app_state first.",
		]);
		expect(calls[1]).toBe('computer_use_set_value {"element_id":2,"snapshot_id":"snap-1","value":"hello"}');
		expect(inputs.map(input => [input.attemptId, input.stepIndex, input.iteration])).toEqual([
			["attempt-1", 1, 1],
			["attempt-1", 1, 2],
			["attempt-1", 2, 1],
		]);
		// The first request of each goal has no prior action; the second request of goal 1 carries the action and the diff.
		expect(inputs[0].actions).toEqual([]);
		expect(inputs[0].changedSinceLastAction).toBeUndefined();
		expect(inputs[1].actions).toMatchObject([{ kind: "set_value", element: { id: 2 }, treeChanged: true }]);
		expect(inputs[1].changedSinceLastAction).toEqual({ value_changes: ['[2] AXTextArea value "" -> "hello"'], added: [], removed: [] });
		expect(inputs[2].actions).toEqual([]);
		expect(calls.filter(name => name === "computer_use_app_state")).toHaveLength(2);
	});

	it("does not conclude while expect is below 0.6, and does once it clears", async () => {
		const first = decider([{ kind: { none: 0.6 }, goalReached: 0.9, expect: 0.2, item: { "3": 0.5 } }]);
		const refused = await attemptSequence({ decider: first.scripted, call: sidecar([""]).call, args: { steps: [{ step: "save", expect: "the file is saved" }] }, wait });
		expect(normalize(refused.text).slice(0, 2)).toEqual([
			"ERR attempt: 0/1 done, step 1 failed: low confidence at iteration 1",
			"1. failed: low confidence at iteration 1 (0 actions, 1 decision, N ms): save",
		]);
		const second = decider([{ kind: { press: 0.9 }, item: { "3": 1 }, goalReached: 0.9, expect: 0.2 }, { kind: { none: 0.9 }, goalReached: 0.9, expect: 0.9 }]);
		const done = await attemptSequence({ decider: second.scripted, call: sidecar([""]).call, args: { steps: [{ step: "save", expect: "the file is saved" }] }, wait });
		expect(done.isError).toBe(false);
	});

	it("stops a goal on unreachable and marks the rest not run", async () => {
		const { call, calls } = sidecar([""]);
		const { scripted } = decider([{ kind: { none: 0.7 }, goalReached: 0.8 }, { kind: { press: 0.5 }, item: { "3": 1 }, unreachable: 0.85 }]);
		const result = await attemptSequence({ decider: scripted, call, args: { steps: [{ step: "a" }, { step: "b" }, { step: "c" }] }, wait });
		expect(result.isError).toBe(true);
		expect(normalize(result.text).slice(0, 4)).toEqual([
			"ERR attempt: 1/3 done, step 2 failed: concluded unreachable (p=0.85) at iteration 1",
			"1. done (0 actions, 1 decision, N ms, goal_reached=0.80): a",
			"2. failed: concluded unreachable (p=0.85) at iteration 1 (0 actions, 1 decision, N ms): b",
			"3. not run: c",
		]);
		expect(normalize(result.text).at(-1)).toBe(
			"Step 2 was not tried; nothing changed. Do step 2 yourself with the element tools. Then call computer_attempt with the remaining steps: c"
		);
		expect(result.summary.steps.map(step => step.status)).toEqual(["done", "failed", "not run"]);
		expect(calls).toEqual(["computer_use_app_state"]);
	});

	it("counts two unchanged trees as no change after action", async () => {
		const { scripted, inputs } = decider([{ kind: { press: 0.9 }, item: { "3": 1 } }, { kind: { press: 0.9 }, item: { "3": 1 } }]);
		const result = await attemptSequence({ decider: scripted, call: sidecar([""]).call, args: { steps: [{ step: "press Save" }] }, wait });
		expect(result.text.split("\n")[0]).toBe("ERR attempt: 0/1 done, step 1 failed: no change after action at iteration 2");
		expect(result.text.split("\n").at(-1)).toBe(
			"Step 1 acted but was not confirmed. Check now: if it already shows the result, step 1 is done; otherwise do step 1 yourself with the element tools."
		);
		expect(inputs[1].actions[0]?.treeChanged).toBe(false);
	});

	it("names the remaining steps after a step that acted", async () => {
		const { scripted } = decider([{ kind: { press: 0.9 }, item: { "3": 1 } }, { kind: { press: 0.9 }, item: { "3": 1 } }]);
		const result = await attemptSequence({
			decider: scripted,
			call: sidecar([""]).call,
			args: { steps: [{ step: "press Save" }, { step: "press Close" }, { step: "type \"x\" into the name field" }] },
			wait,
		});
		expect(result.text.split("\n").at(-1)).toBe(
			'Step 1 acted but was not confirmed. Check now: if it already shows the result, step 1 is done; otherwise do step 1 yourself with the element tools. Then call computer_attempt with the remaining steps: press Close; type "x" into the name field'
		);
	});

	it("judges the tree an action left on the last allowed action", async () => {
		const { scripted: reaching } = decider([{ kind: { set_value: 0.9 }, item: { "2": 1 } }, { kind: { none: 0.9 }, goalReached: 0.95 }]);
		const done = await attemptSequence({
			decider: reaching,
			call: sidecar(["", "hello"]).call,
			args: { steps: [{ step: 'type "hello" into the document' }], max_steps: 1 },
			wait,
		});
		expect(normalize(done.text)[1]).toBe('1. done (1 action, 2 decisions, N ms, goal_reached=0.95): type "hello" into the document');

		const { scripted: short } = decider([{ kind: { set_value: 0.9 }, item: { "2": 1 } }, { kind: { set_value: 0.9 }, item: { "2": 1 } }]);
		const failed = await attemptSequence({
			decider: short,
			call: sidecar(["", "hello"]).call,
			args: { steps: [{ step: 'type "hello" into the document' }], max_steps: 1 },
			wait,
		});
		expect(normalize(failed.text)[0]).toBe("ERR attempt: 0/1 done, step 1 failed: max steps at iteration 2");
		expect(failed.summary.steps[0]).toMatchObject({ status: "failed", actions: 1, calls: 2 });
	});

	it("keeps per-step results and the screen when the decision fails mid-sequence", async () => {
		const { scripted } = decider([
			{ kind: { none: 0.9 }, goalReached: 0.9 },
			new Error("[unavailable] The next-action model did not answer (timeout).\nstack"),
		]);
		const result = await attemptSequence({ decider: scripted, call: sidecar(["hello"]).call, args: { steps: [{ step: "a" }, { step: "b" }, { step: "c" }] }, wait });
		expect(result.isError).toBe(true);
		expect(normalize(result.text)).toEqual(
			expect.arrayContaining([
				"ERR attempt: 1/3 done, step 2 failed: decision failed ([unavailable] The next-action model did not answer (timeout).) at iteration 1",
				"1. done (0 actions, 1 decision, N ms, goal_reached=0.90): a",
				"2. failed: decision failed ([unavailable] The next-action model did not answer (timeout).) at iteration 1 (0 actions, 1 decision, N ms): b",
				"3. not run: c",
				"changed: nothing",
				'now: window: "TextEdit"',
				'  AXTextArea value="hello" settable',
			])
		);
		expect(result.summary.snapshot_id).toBe("snap-1");
	});

	it("keeps per-step results when a sidecar action throws", async () => {
		const { call } = sidecar([""], async () => {
			throw new Error("helper exited");
		});
		const { scripted } = decider([{ kind: { press: 0.9 }, item: { "3": 1 } }]);
		const result = await attemptSequence({ decider: scripted, call, args: { steps: [{ step: "press Save" }, { step: "b" }] }, wait });
		expect(result.text.split("\n").slice(0, 3)).toEqual([
			"ERR attempt: 0/2 done, step 1 failed: sidecar failed (helper exited) at iteration 1",
			expect.stringMatching(/^1\. failed: sidecar failed \(helper exited\) at iteration 1 \(0 actions, 1 decision, \d+ ms\): press Save$/),
			"2. not run: b",
		]);
	});

	it("treats an error read after an action as a failure, not an empty tree", async () => {
		const { scripted } = decider([{ kind: { press: 0.9 }, item: { "3": 1 } }]);
		const result = await attemptSequence({
			decider: scripted,
			call: sidecar(["", { error: 'ERR tool=computer_use_app_state message="The app quit."' }]).call,
			args: { steps: [{ step: "press Save" }] },
			wait,
		});
		expect(result.text.split("\n")[0]).toBe(
			'ERR attempt: 0/1 done, step 1 failed: could not read the app state (ERR tool=computer_use_app_state message="The app quit.") at iteration 1'
		);
		expect(result.summary.steps[0]).toMatchObject({ status: "failed", actions: 1 });
		expect(result.text).toContain('now: window: "TextEdit"');
	});

	it("renders the same sections when the first read fails", async () => {
		const { scripted, inputs } = decider([]);
		const result = await attemptSequence({
			decider: scripted,
			call: sidecar([{ error: 'ERR tool=computer_use_app_state message="No window."' }]).call,
			args: { steps: [{ step: "a", expect: "x" }, { step: "b" }] },
			wait,
		});
		expect(result.isError).toBe(true);
		expect(result.text.split("\n").slice(0, 5)).toEqual([
			'ERR attempt: 0/2 done, step 1 failed: could not read the app state (ERR tool=computer_use_app_state message="No window.")',
			'1. failed: could not read the app state (ERR tool=computer_use_app_state message="No window.") (0 actions, 0 decisions, 0 ms): a',
			"2. not run: b",
			"changed: nothing",
			"now: ",
		]);
		expect(result.summary.steps[0]).toMatchObject({ expect: "x", status: "failed" });
		expect(inputs).toEqual([]);
	});
});
