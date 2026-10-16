/**
 * `computer_attempt`: plain-language UI steps carried out by a loop above the
 * sidecar. Each iteration reads the tree, asks `AiService.ComputerUseDecideNextAction`
 * for the next action over observed facts
 * only, gates the answer in code, and acts. The server owns every question;
 * this loop owns control flow, thresholds, and the sidecar calls. Typed text
 * comes verbatim from the step's quotes.
 */

import type {
	CompanionSidecarToolName,
	SidecarToolResult,
} from "@anysphere/computer-use/protocol";
import { delay } from "@anysphere/utils";
import {
	candidatesOf,
	diffTrees,
	isEmptyDiff,
	parseAxLines,
	quotedText,
	renderNow,
	summaryDiff,
	type AxCandidate,
	type TreeDiff,
} from "./attempt-ax";

/** `do`'s gates: refuse the pick unless the target is on screen and the decision is sure of the verb and the element. */
export const PRESENT_MIN = 0.35;
export const CONFIDENCE_MIN = 0.5;
/** Stops are the irreversible branch, so they take a higher bar than acting. */
export const GOAL_REACHED_MIN = 0.7;
export const UNREACHABLE_MIN = 0.7;
export const EXPECT_MIN = 0.6;
export const DEFAULT_MAX_STEPS = 8;
/** Wait after an action before the next read, and once more when the tree has not changed yet. */
const SETTLE_MS = 600;
const SETTLE_RETRY_MS = 1_500;

const ACTION_KEYS = ["Return", "Escape", "Tab", "Delete", "Down", "Up"] as const;
export type ActionKey = (typeof ACTION_KEYS)[number];
const isActionKey = (label: string): label is ActionKey => (ACTION_KEYS as readonly string[]).includes(label);

/** One action this goal already took, as the decider is told about it. */
export type PastAction =
	| { kind: "key"; key: ActionKey; treeChanged: boolean }
	| { kind: string; element: AxCandidate; treeChanged: boolean };

/** The observed facts of one iteration: everything the next-action request is built from. */
export interface DecideInput {
	attemptId: string;
	stepIndex: number;
	iteration: number;
	goal: string;
	expect?: string;
	candidates: readonly AxCandidate[];
	actions: readonly PastAction[];
	changedSinceLastAction?: TreeDiff;
}

export interface ActionChoice {
	label: string;
	probabilities: Record<string, number>;
}

/** The decider's typed answers: `kind` over the server's verbs, `item` over the candidate ids, `key` over its keys. */
export interface NextActionAnswers {
	kind: ActionChoice;
	item: ActionChoice;
	key: ActionChoice;
	present: number;
	goalReached: number;
	unreachable: number;
	lastLanded?: number;
	expect?: number;
}

export interface NextActionDecider {
	decide(input: DecideInput): Promise<NextActionAnswers>;
}

export type Decision =
	| { ok: true; act: "key"; key: ActionKey; p: number }
	| { ok: true; act: "element"; kind: string; item: AxCandidate; p: number; present: number }
	| { ok: false; reason: string; detail: string };

const f2 = (n: number) => n.toFixed(2);
const pOf = (choice: ActionChoice, label = choice.label): number => choice.probabilities[label] ?? 0;

/** `do`'s action gates over one decision: present, then min(p_kind, p_item or p_key), then the text a typing kind needs. */
export function gateDecision({
	answers,
	candidates,
	goal,
}: {
	answers: NextActionAnswers;
	candidates: readonly AxCandidate[];
	goal: string;
}): Decision {
	const kind = answers.kind.label;
	const pKind = pOf(answers.kind);
	if (kind === "none") {
		return {
			ok: false,
			reason: "low confidence",
			detail: `kind=none p=${f2(pKind)} goal_reached=${f2(answers.goalReached)} unreachable=${f2(answers.unreachable)}`,
		};
	}
	if (kind === "key") {
		const key = answers.key.label;
		const p = Math.min(pKind, pOf(answers.key));
		return isActionKey(key) && p >= CONFIDENCE_MIN
			? { ok: true, act: "key", key, p }
			: { ok: false, reason: "low confidence", detail: `kind=key p_kind=${f2(pKind)} key=${key} p_key=${f2(pOf(answers.key))}` };
	}
	const itemId = answers.item.label;
	const item = candidates.find(candidate => String(candidate.id) === itemId);
	if (answers.present < PRESENT_MIN || item === undefined) {
		return { ok: false, reason: "target not present", detail: `present=${f2(answers.present)} kind=${kind} item=[${itemId}]` };
	}
	const p = Math.min(pKind, pOf(answers.item));
	if (p < CONFIDENCE_MIN) {
		return {
			ok: false,
			reason: "low confidence",
			detail: `kind=${kind} p_kind=${f2(pKind)} item=[${itemId}] p_item=${f2(pOf(answers.item))}`,
		};
	}
	if ((kind === "type" || kind === "set_value") && quotedText(goal) === undefined) {
		return { ok: false, reason: "no quoted text", detail: `kind=${kind} needs the text to enter in quotes in the goal` };
	}
	return { ok: true, act: "element", kind, item, p, present: answers.present };
}

/** The companion RPC the loop drives: `callApp`'s sidecar call with the target bound. */
export type CompanionCall = (
	name: CompanionSidecarToolName,
	args: Record<string, unknown>
) => Promise<SidecarToolResult>;

export interface Tree {
	text: string;
	snapshotId: string | undefined;
	/** Every element line, for diffing and the final view. */
	lines: AxCandidate[];
	candidates: AxCandidate[];
}

const firstLine = (error: unknown): string => {
	const text = error instanceof Error ? error.message : String(error);
	return text.split("\n")[0].slice(0, 200);
};

/** One `computer_use_app_state` read. An error result is a failure, not an empty tree. */
async function readTree(call: CompanionCall): Promise<Tree> {
	const result = await call("computer_use_app_state", {});
	if (result.isError) {
		throw new Error(result.message.split("\n")[0]);
	}
	const lines = parseAxLines(result.message);
	return { text: result.message, snapshotId: result.structuredContent?.snapshotID, lines, candidates: candidatesOf(lines) };
}

interface WireAction {
	name: CompanionSidecarToolName;
	args: Record<string, unknown>;
	label: string;
}

function wireAction({
	decision,
	goal,
	snapshotId,
}: {
	decision: Extract<Decision, { ok: true }>;
	goal: string;
	snapshotId: string;
}): WireAction {
	if (decision.act === "key") {
		return { name: "computer_use_press_key", args: { key: decision.key }, label: `key ${decision.key}` };
	}
	const element = { element_id: decision.item.id, snapshot_id: snapshotId };
	const text = quotedText(goal) ?? "";
	const label = `${decision.kind} [${decision.item.id}]`;
	switch (decision.kind) {
		case "press":
			return { name: "computer_use_click", args: element, label };
		case "set_value":
			return { name: "computer_use_set_value", args: { ...element, value: text }, label: `${label} ${JSON.stringify(text)}` };
		case "type":
			return { name: "computer_use_typing", args: { ...element, value: text }, label: `${label} ${JSON.stringify(text)}` };
		case "scroll":
			return { name: "computer_use_scroll", args: element, label };
		default:
			return {
				name: "computer_use_perform_secondary_action",
				args: { ...element, action: decision.kind.slice("app_action:".length) },
				label,
			};
	}
}

export interface StepRequest {
	step: string;
	expect?: string;
}

export interface StepOutcome {
	ok: boolean;
	/** Set when `ok` is false: the stop reason and the iteration it stopped at. */
	reason?: string;
	at?: number;
	actions: number;
	/** Next-action requests made for this goal, and their summed latency. */
	calls: number;
	ms: number;
	/** `goal_reached` on the concluding iteration. */
	p: number;
	trace: string[];
	/** The last tree read, so the next goal starts from it without reading again. */
	tree: Tree;
}

interface LoopOptions {
	maxSteps: number;
	/** Injectable for tests; defaults to a real sleep. */
	wait: (ms: number) => Promise<void>;
}

/**
 * One goal, reached in several actions if need be. Each iteration is one
 * next-action request; code composes the answers: stop with success on
 * `goal_reached` (and `expect` when given), stop with failure on
 * `unreachable`, otherwise act when the action gates pass. Mechanical stops:
 * two consecutive actions that changed nothing, `maxSteps`, a sidecar
 * refusal, and any decision or sidecar error, which ends this goal with its
 * reason instead of escaping the sequence.
 *
 * The actions and the diff are scoped to this goal: its first request carries
 * neither, and nothing carries across goals or tool calls.
 */
export async function attemptStep({
	decider,
	call,
	request,
	attempt,
	tree: startTree,
	options,
}: {
	decider: NextActionDecider;
	call: CompanionCall;
	request: StepRequest;
	attempt: { id: string; step: number };
	tree: Tree;
	options: LoopOptions;
}): Promise<StepOutcome> {
	let tree = startTree;
	const actions: PastAction[] = [];
	let diff: TreeDiff | undefined;
	const trace: string[] = [];
	let calls = 0;
	let ms = 0;
	let unchanged = 0;
	let reached = 0;
	const end = (failure?: { reason: string; at: number }): StepOutcome => ({
		ok: failure === undefined,
		...failure,
		actions: actions.length,
		calls,
		ms,
		p: reached,
		trace,
		tree,
	});
	for (let at = 1; ; at += 1) {
		if (tree.candidates.length === 0 || tree.snapshotId === undefined) {
			return end({ reason: "target not present", at });
		}
		const started = Date.now();
		calls += 1;
		let answers: NextActionAnswers;
		try {
			answers = await decider.decide({
				attemptId: attempt.id,
				stepIndex: attempt.step,
				iteration: at,
				goal: request.step,
				...(request.expect === undefined ? {} : { expect: request.expect }),
				candidates: tree.candidates,
				actions: [...actions],
				...(diff === undefined ? {} : { changedSinceLastAction: diff }),
			});
		} catch (error) {
			ms += Date.now() - started;
			trace.push(`${at}. decision failed: ${firstLine(error)}`);
			return end({ reason: `decision failed (${firstLine(error)})`, at });
		}
		ms += Date.now() - started;
		if (answers.lastLanded !== undefined && trace.length > 0) {
			trace[trace.length - 1] += ` landed=${f2(answers.lastLanded)}`;
		}
		reached = answers.goalReached;
		const verdict = `goal_reached=${f2(reached)} unreachable=${f2(answers.unreachable)}${answers.expect === undefined ? "" : ` expect=${f2(answers.expect)}`}`;
		if (reached >= GOAL_REACHED_MIN && (answers.expect === undefined || answers.expect >= EXPECT_MIN)) {
			trace.push(`${at}. reached ${verdict}`);
			return end();
		}
		if (answers.unreachable >= UNREACHABLE_MIN) {
			trace.push(`${at}. unreachable ${verdict}`);
			return end({ reason: `concluded unreachable (p=${f2(answers.unreachable)})`, at });
		}
		// `maxSteps` bounds actions, so the tree an action left is still judged above.
		if (actions.length >= options.maxSteps) {
			trace.push(`${at}. max steps ${verdict}`);
			return end({ reason: "max steps", at });
		}
		const decision = gateDecision({ answers, candidates: tree.candidates, goal: request.step });
		if (!decision.ok) {
			trace.push(`${at}. ${decision.reason}: ${decision.detail} ${verdict}`);
			return end({ reason: decision.reason, at });
		}
		const action = wireAction({ decision, goal: request.step, snapshotId: tree.snapshotId });
		const line =
			decision.act === "key"
				? `${at}. ${action.label} p_kind=${f2(pOf(answers.kind))} p_key=${f2(pOf(answers.key, decision.key))} ${verdict}`
				: `${at}. ${action.label} ${decision.item.line} p_kind=${f2(pOf(answers.kind))} p_item=${f2(pOf(answers.item))} present=${f2(decision.present)} ${verdict}`;
		const past = (treeChanged: boolean): PastAction =>
			decision.act === "key"
				? { kind: "key", key: decision.key, treeChanged }
				: { kind: decision.kind, element: decision.item, treeChanged };
		let acted: SidecarToolResult;
		try {
			acted = await call(action.name, action.args);
		} catch (error) {
			trace.push(`${line} -> sidecar failed: ${firstLine(error)}`);
			return end({ reason: `sidecar failed (${firstLine(error)})`, at });
		}
		if (acted.isError) {
			trace.push(`${line} -> sidecar ${acted.message.split("\n")[0]}`);
			return end({ reason: "action refused by the sidecar", at });
		}
		// Music's search results arrive well after `confirm` returns; an
		// immediate read judged a step that had landed as not landed.
		const before = tree;
		try {
			await options.wait(SETTLE_MS);
			tree = await readTree(call);
			// Read again when nothing changed yet, or when the walk came back
			// with less than half the elements: under load the sidecar's AX walk
			// times out partway and returns a truncated tree (Calculator once
			// lost 13 of 22 buttons), which would read as "half the app vanished".
			if (tree.text === before.text || tree.candidates.length * 2 < before.candidates.length) {
				await options.wait(SETTLE_RETRY_MS);
				tree = await readTree(call);
			}
		} catch (error) {
			actions.push(past(false));
			trace.push(`${line} -> could not read the app state: ${firstLine(error)}`);
			return end({ reason: `could not read the app state (${firstLine(error)})`, at });
		}
		diff = diffTrees({ before: before.lines, after: tree.lines });
		const changed = !isEmptyDiff(diff);
		unchanged = changed ? 0 : unchanged + 1;
		actions.push(past(changed));
		const result = changed
			? [...diff.value_changes, ...diff.added.map(l => `+ ${l}`), ...diff.removed.map(l => `- ${l}`)].slice(0, 3).join("; ")
			: "no change";
		trace.push(`${line} -> ${result}`);
		if (unchanged >= 2) {
			return end({ reason: "no change after action", at });
		}
	}
}

export interface AttemptArguments {
	steps: StepRequest[];
	max_steps?: number;
}

export type StepStatus = {
	step: string;
	expect?: string;
} & (
		| { status: "done"; actions: number; calls: number; ms: number; goal_reached: number }
		| { status: "failed"; reason: string; actions: number; calls: number; ms: number }
		| { status: "not run" }
	);

/** The machine-readable twin of the result text, for `structuredContent`. */
export interface AttemptSummary {
	steps: StepStatus[];
	/** Start-of-call tree to final tree, ids stripped. */
	changed: TreeDiff;
	/** The final screen's candidates as the model reads them in `now:`. */
	candidates: string[];
	presence: string[];
	snapshot_id?: string;
}

const MAX_TRACE_LINES = 15;
const NO_CHANGE: TreeDiff = { value_changes: [], added: [], removed: [] };

function statusLine(step: StepStatus, index: number): string {
	if (step.status === "not run") {
		return `${index + 1}. not run: ${step.step}`;
	}
	const cost = `${step.actions} action${step.actions === 1 ? "" : "s"}, ${step.calls} decision${step.calls === 1 ? "" : "s"}, ${step.ms} ms`;
	return step.status === "done"
		? `${index + 1}. done (${cost}, goal_reached=${f2(step.goal_reached)}): ${step.step}`
		: `${index + 1}. failed: ${step.reason} (${cost}): ${step.step}`;
}

/** One path after a failed step: that step by hand, then the rest back through `computer_attempt`. */
function failureFooter({ steps, index, acted }: { steps: StepStatus[]; index: number; acted: boolean }): string {
	const n = index + 1;
	const remaining = steps.slice(n).map(step => step.step);
	const then = remaining.length === 0 ? "" : ` Then call computer_attempt with the remaining steps: ${remaining.join("; ")}`;
	return acted
		? `Step ${n} acted but was not confirmed. Check now: if it already shows the result, step ${n} is done; otherwise do step ${n} yourself with the element tools.${then}`
		: `Step ${n} was not tried; nothing changed. Do step ${n} yourself with the element tools.${then}`;
}

/** The model-facing text: header, per-step status, `changed:`, `now:`, a capped `trace:`, footer. */
export function renderAttempt({ summary, trace }: { summary: AttemptSummary; trace: string[] }): string {
	const done = summary.steps.filter(step => step.status === "done").length;
	const failedIndex = summary.steps.findIndex(step => step.status === "failed");
	const failed = summary.steps[failedIndex];
	const header =
		failed?.status === "failed"
			? `ERR attempt: ${done}/${summary.steps.length} done, step ${failedIndex + 1} failed: ${failed.reason}`
			: `OK attempt: ${done}/${summary.steps.length} steps done`;
	const changed = [
		...summary.changed.value_changes,
		...summary.changed.added.map(line => `+ ${line}`),
		...summary.changed.removed.map(line => `- ${line}`),
	];
	const hidden = trace.length - MAX_TRACE_LINES;
	const shownTrace = hidden > 0 ? [`... ${hidden} earlier line${hidden === 1 ? "" : "s"}`, ...trace.slice(-MAX_TRACE_LINES)] : trace;
	return [
		header,
		...summary.steps.map(statusLine),
		"changed:" + (changed.length === 0 ? " nothing" : ""),
		...changed.map(line => `  ${line}`),
		`now: ${summary.presence.join("; ")}`,
		...summary.candidates.map(line => `  ${line}`),
		"trace:",
		...shownTrace.map(line => `  ${line}`),
		...(summary.snapshot_id === undefined ? [] : [`snapshot_id=${summary.snapshot_id}`]),
		failed?.status === "failed"
			? failureFooter({ steps: summary.steps, index: failedIndex, acted: failed.actions > 0 })
			: "To act by element_id, read computer_app_state first.",
	].join("\n");
}

export interface AttemptResult {
	text: string;
	isError: boolean;
	summary: AttemptSummary;
}

/**
 * The goals in order, each through `attemptStep`, sharing the tree: a goal
 * starts from the tree its predecessor read last, so only the first reads
 * one. Stops at the first goal that fails. Every outcome, including a failed
 * first read, renders the same header, per-step status, `changed:` and
 * `now:` sections.
 */
export async function attemptSequence({
	decider,
	call,
	args,
	wait = delay,
	attemptId = new Date().toISOString().replace(/[:.]/g, "-"),
}: {
	decider: NextActionDecider;
	call: CompanionCall;
	args: AttemptArguments;
	wait?: (ms: number) => Promise<void>;
	attemptId?: string;
}): Promise<AttemptResult> {
	const withExpect = (request: StepRequest) => ({
		step: request.step,
		...(request.expect === undefined ? {} : { expect: request.expect }),
	});
	let start: Tree;
	try {
		start = await readTree(call);
	} catch (error) {
		const summary: AttemptSummary = {
			steps: args.steps.map((request, index) =>
				index === 0
					? { ...withExpect(request), status: "failed", reason: `could not read the app state (${firstLine(error)})`, actions: 0, calls: 0, ms: 0 }
					: { ...withExpect(request), status: "not run" }
			),
			changed: NO_CHANGE,
			candidates: [],
			presence: [],
		};
		return { isError: true, summary, text: renderAttempt({ summary, trace: [] }) };
	}
	const options: LoopOptions = { maxSteps: args.max_steps ?? DEFAULT_MAX_STEPS, wait };
	let tree = start;
	const trace: string[] = [];
	const steps: StepStatus[] = [];
	let failed = false;
	for (const [index, request] of args.steps.entries()) {
		if (failed) {
			steps.push({ ...withExpect(request), status: "not run" });
			continue;
		}
		const outcome = await attemptStep({ decider, call, request, attempt: { id: attemptId, step: index + 1 }, tree, options });
		tree = outcome.tree;
		const cost = { actions: outcome.actions, calls: outcome.calls, ms: outcome.ms };
		steps.push(
			outcome.ok
				? { ...withExpect(request), status: "done", ...cost, goal_reached: outcome.p }
				: { ...withExpect(request), status: "failed", reason: `${outcome.reason} at iteration ${outcome.at}`, ...cost }
		);
		trace.push(...outcome.trace.map(entry => `${index + 1}.${entry}`));
		failed = !outcome.ok;
	}
	const now = renderNow(tree.lines);
	const summary: AttemptSummary = {
		steps,
		changed: summaryDiff({ before: start.lines, after: tree.lines }),
		candidates: now.candidates,
		presence: now.presence,
		...(tree.snapshotId === undefined ? {} : { snapshot_id: tree.snapshotId }),
	};
	return { isError: failed, summary, text: renderAttempt({ summary, trace }) };
}
