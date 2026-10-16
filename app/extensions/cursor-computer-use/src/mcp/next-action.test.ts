import { describe, expect, it, vi } from "vitest";
import { ComputerUseDecideNextActionResponse } from "proto/aiserver/v1/aiserver_pb.js";
import { parseAxLines } from "./attempt-ax";
import { decideNextAction, fromDecideResponse, toDecideRequest } from "./next-action";

const [field, button, row] = parseAxLines(
	[
		`[9] AXTextField name="Search" value="${"v".repeat(250)}" placeholder="Search" settable actions=confirm`,
		'[12] AXButton description="7"',
		`[14] AXRow actions=show-menu,${"x".repeat(70)}`,
	].join("\n")
);

describe("toDecideRequest", () => {
	it("sends observed data only, clipped to the server's limits", () => {
		const request = toDecideRequest({
			attemptId: "attempt-1",
			stepIndex: 2,
			iteration: 3,
			goal: "press the 7 key",
			expect: "the display shows 7",
			candidates: [field, button, row],
			actions: [
				{ kind: "press", element: button, treeChanged: true },
				{ kind: "key", key: "Return", treeChanged: false },
			],
			changedSinceLastAction: { value_changes: ["y".repeat(400)], added: [], removed: [] },
		});
		expect(request.toJson()).toEqual({
			attemptId: "attempt-1",
			stepIndex: 2,
			iteration: 3,
			goal: "press the 7 key",
			expect: "the display shows 7",
			candidates: [
				{ id: 9, role: "AXTextField", name: "Search", value: `${"v".repeat(199)}…`, flags: ["settable"], actions: ["confirm"] },
				{ id: 12, role: "AXButton", name: "7" },
				{ id: 14, role: "AXRow", actions: ["show-menu"] },
			],
			actions: [
				{ kind: "press", element: { id: 12, role: "AXButton", name: "7" }, treeChanged: true },
				{ kind: "key", key: "Return" },
			],
			changedSinceLastAction: { valueChanges: [`${"y".repeat(299)}…`] },
		});
	});

	it("keeps an empty value distinct from no value", () => {
		const [empty] = parseAxLines('[3] AXTextField value=""');
		const request = toDecideRequest({ attemptId: "a", stepIndex: 1, iteration: 1, goal: "g", candidates: [empty, button], actions: [] });
		expect(request.candidates[0].value).toBe("");
		expect(request.candidates[1].value).toBeUndefined();
	});
});

describe("fromDecideResponse", () => {
	it("maps labels and probabilities", () => {
		const response = new ComputerUseDecideNextActionResponse({
			kind: { label: "press", probabilities: { press: 0.8, none: 0.2 } },
			item: { label: "12", probabilities: { "12": 0.9 } },
			key: { label: "none", probabilities: { none: 1 } },
			present: 0.9,
			goalReached: 0.1,
			unreachable: 0.05,
			lastLanded: 0.7,
		});
		expect(fromDecideResponse(response)).toEqual({
			kind: { label: "press", probabilities: { press: 0.8, none: 0.2 } },
			item: { label: "12", probabilities: { "12": 0.9 } },
			key: { label: "none", probabilities: { none: 1 } },
			present: 0.9,
			goalReached: 0.1,
			unreachable: 0.05,
			lastLanded: 0.7,
		});
	});

	it("rejects a response without a choice", () => {
		expect(() => fromDecideResponse(new ComputerUseDecideNextActionResponse({ present: 1 }))).toThrow(
			"ComputerUseDecideNextAction returned no kind answer"
		);
	});
});

describe("decideNextAction", () => {
	it("sends the built request through the backend client with a bounded signal, and maps the answer", async () => {
		const computerUseDecideNextAction = vi.fn().mockResolvedValue(
			new ComputerUseDecideNextActionResponse({
				kind: { label: "press", probabilities: { press: 0.9 } },
				item: { label: "12", probabilities: { "12": 0.9 } },
				key: { label: "none", probabilities: { none: 1 } },
				present: 0.9,
				goalReached: 0.1,
				unreachable: 0.05,
			})
		);
		const log = vi.fn();
		const answers = await decideNextAction({
			backendClient: { getAIClient: async () => ({ computerUseDecideNextAction }) as never },
			input: { attemptId: "a", stepIndex: 1, iteration: 2, goal: "press the 7 key", candidates: [button], actions: [] },
			signal: new AbortController().signal,
			log,
		});
		expect(answers.kind.label).toBe("press");
		const [request, options] = computerUseDecideNextAction.mock.calls[0];
		expect(request.toJson()).toMatchObject({ attemptId: "a", stepIndex: 1, iteration: 2, goal: "press the 7 key" });
		expect(options.signal).toBeInstanceOf(AbortSignal);
		expect(log.mock.calls[0][0]).toMatch(/^\[info\] next action 1\.2 \d+ms kind=press:0\.90 item=12:0\.90/);
		expect(log.mock.calls[0][0]).not.toContain("press the 7 key");
	});
});
