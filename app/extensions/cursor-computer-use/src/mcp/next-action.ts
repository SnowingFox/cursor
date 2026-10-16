import {
	ComputerUseAxElement,
	ComputerUseDecideNextActionRequest,
	ComputerUsePastAction,
	ComputerUseTreeDiff,
	type ComputerUseActionChoice,
	type ComputerUseDecideNextActionResponse,
} from 'proto/aiserver/v1/aiserver_pb.js';
import type { BackendClientService } from '../backendClient';
import type { AxCandidate, TreeDiff } from './attempt-ax';
import type { ActionChoice, DecideInput, NextActionAnswers } from './attempt';

/** Mirrors the server's per-field limits (`COMPUTER_USE_NEXT_ACTION_LIMITS`); the server rejects anything longer. */
const LIMITS = {
	nameChars: 200,
	valueChars: 200,
	actionsPerElement: 12,
	actionChars: 64,
	diffLineChars: 300,
} as const;
/** The server gives its model 5 s; this covers that plus the round trip. */
const DECIDE_TIMEOUT_MS = 10_000;

const clipTo = (text: string, max: number): string => (text.length > max ? `${text.slice(0, max - 1)}…` : text);

function toElement(candidate: AxCandidate): ComputerUseAxElement {
	const { name, description, placeholder, value } = candidate.attributes;
	const words = [name, description, placeholder].find(word => word !== undefined && word.length > 0) ?? '';
	return new ComputerUseAxElement({
		id: candidate.id,
		role: candidate.role,
		name: clipTo(words, LIMITS.nameChars),
		...(value === undefined ? {} : { value: clipTo(value, LIMITS.valueChars) }),
		flags: candidate.flags,
		actions: candidate.actions.filter(action => action.length <= LIMITS.actionChars).slice(0, LIMITS.actionsPerElement),
	});
}

function toDiff(diff: TreeDiff): ComputerUseTreeDiff {
	const clip = (lines: string[]) => lines.map(line => clipTo(line, LIMITS.diffLineChars));
	return new ComputerUseTreeDiff({
		valueChanges: clip(diff.value_changes),
		added: clip(diff.added),
		removed: clip(diff.removed),
	});
}

/** The observed facts as the RPC carries them: data only, clipped to the server's limits. */
export function toDecideRequest(input: DecideInput): ComputerUseDecideNextActionRequest {
	return new ComputerUseDecideNextActionRequest({
		attemptId: input.attemptId,
		stepIndex: input.stepIndex,
		iteration: input.iteration,
		goal: input.goal,
		...(input.expect === undefined ? {} : { expect: input.expect }),
		candidates: input.candidates.map(toElement),
		actions: input.actions.map(action =>
			'key' in action
				? new ComputerUsePastAction({ kind: 'key', key: action.key, treeChanged: action.treeChanged })
				: new ComputerUsePastAction({ kind: action.kind, element: toElement(action.element), treeChanged: action.treeChanged })
		),
		...(input.changedSinceLastAction === undefined ? {} : { changedSinceLastAction: toDiff(input.changedSinceLastAction) }),
	});
}

function toChoice(choice: ComputerUseActionChoice | undefined, field: string): ActionChoice {
	if (choice === undefined) {
		throw new Error(`ComputerUseDecideNextAction returned no ${field} answer`);
	}
	return { label: choice.label, probabilities: { ...choice.probabilities } };
}

export function fromDecideResponse(response: ComputerUseDecideNextActionResponse): NextActionAnswers {
	return {
		kind: toChoice(response.kind, 'kind'),
		item: toChoice(response.item, 'item'),
		key: toChoice(response.key, 'key'),
		present: response.present,
		goalReached: response.goalReached,
		unreachable: response.unreachable,
		...(response.lastLanded === undefined ? {} : { lastLanded: response.lastLanded }),
		...(response.expect === undefined ? {} : { expect: response.expect }),
	};
}

const top = (choice: ActionChoice): string => `${choice.label}:${(choice.probabilities[choice.label] ?? 0).toFixed(2)}`;

/** `computer_attempt`'s decider: one `ComputerUseDecideNextAction` call. Logs the answer's labels and latency, never the request. */
export async function decideNextAction({
	backendClient,
	input,
	signal,
	log,
}: {
	backendClient: Pick<BackendClientService, 'getAIClient'>;
	input: DecideInput;
	signal: AbortSignal;
	log: (line: string) => void;
}): Promise<NextActionAnswers> {
	const started = Date.now();
	const client = await backendClient.getAIClient();
	const response = await client.computerUseDecideNextAction(toDecideRequest(input), {
		signal: AbortSignal.any([signal, AbortSignal.timeout(DECIDE_TIMEOUT_MS)]),
	});
	const answers = fromDecideResponse(response);
	log(
		`[info] next action ${input.stepIndex}.${input.iteration} ${Date.now() - started}ms kind=${top(answers.kind)} item=${top(answers.item)} key=${top(answers.key)} present=${answers.present.toFixed(2)} goal_reached=${answers.goalReached.toFixed(2)} unreachable=${answers.unreachable.toFixed(2)}`
	);
	return answers;
}
