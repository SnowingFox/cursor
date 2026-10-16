/**
 * The accessibility-tree half of `computer_attempt`: parse the sidecar's
 * `computer_app_state` lines, pick the elements the decision may choose from,
 * diff two snapshots, and render the compact final screen the model reads.
 */

/** One `[id] AXRole name="…" value="…" settable actions=a,b` line of `computer_app_state`. */
export interface AxCandidate {
	id: number;
	role: string;
	depth: number;
	/** Every quoted attribute on the line: `name`, `description`, `value`, `placeholder`, `url` today. */
	attributes: Record<string, string>;
	/** Bare markers on the line: `settable`, `disabled`, `selected`. */
	flags: string[];
	actions: string[];
	/** The line as the model reads it, trimmed. */
	line: string;
}

const AX_LINE = /^( *)\[(\d+)\] (AX\w+)(.*)$/;
const QUOTED_ATTRIBUTE = /(\w+)="((?:[^"\\]|\\.)*)"/g;
/** Invisible bidi controls; Calculator wraps every display token in U+200E, so "1+2" arrives as six characters. */
const BIDI_MARKS = /[\u200E\u200F\u202A-\u202E\u2066-\u2069]/g;
/**
 * Listed actions that duplicate a verb the decision already has: the hover-UI
 * toggles every AppKit row carries, which read as "press", and the scroll
 * variants, which are `scroll`. A row whose only actions are these is not
 * actionable.
 */
const DUPLICATE_ACTION = /^(?:showdefaultui|showalternateui|scroll.*)$/;

/** Every element line of a `computer_app_state` text, in tree order. */
export function parseAxLines(text: string): AxCandidate[] {
	const out: AxCandidate[] = [];
	for (const raw of text.split("\n")) {
		const match = AX_LINE.exec(raw);
		if (match === null) {
			continue;
		}
		const [, indent, id, role, rest] = match;
		const attributes: Record<string, string> = {};
		for (const attribute of rest.matchAll(QUOTED_ATTRIBUTE)) {
			attributes[attribute[1]] = attribute[2].replace(/\\(.)/g, "$1").replace(BIDI_MARKS, "");
		}
		const bare = rest.replace(QUOTED_ATTRIBUTE, " ").replace(/\(\+\d+ descendants omitted\)/, " ");
		const actions: string[] = [];
		const flags: string[] = [];
		for (const token of bare.split(/\s+/).filter(token => token.length > 0)) {
			if (token.startsWith("actions=")) {
				actions.push(...token.slice("actions=".length).split(",").filter(action => !DUPLICATE_ACTION.test(action)));
			} else {
				flags.push(token);
			}
		}
		out.push({ id: Number(id), role, depth: indent.length, attributes, flags, actions, line: raw.trim().replace(BIDI_MARKS, "") });
	}
	return out;
}

/** Layout-only roles; one without an action is never a target. */
const CONTAINER_ROLES = new Set([
	"AXApplication",
	"AXWindow",
	"AXGroup",
	"AXScrollArea",
	"AXSplitGroup",
	"AXSplitter",
	"AXToolbar",
	"AXLayoutArea",
	"AXList",
	"AXOutline",
	"AXTable",
	"AXUnknown",
]);

/** Under the decision's choice ceiling of 255 labels, with room for `none`. */
export const MAX_CANDIDATES = 240;

/** The elements the decision may pick: anything actionable, or anything with words on it that is not bare layout. */
export function candidatesOf(lines: readonly AxCandidate[]): AxCandidate[] {
	return lines
		.filter(
			element =>
				element.flags.includes("settable") ||
				element.actions.length > 0 ||
				(Object.keys(element.attributes).length > 0 && !CONTAINER_ROLES.has(element.role))
		)
		.slice(0, MAX_CANDIDATES);
}

/** Diff lines per category; Calculator's display change is one line, a page change is dozens. */
const MAX_DIFF_LINES = 12;

export interface TreeDiff {
	/** Attribute and flag changes on elements that kept their identity, as `[id] Role key "old" -> "new"`. */
	value_changes: string[];
	added: string[];
	removed: string[];
}

export interface TreePair {
	before: readonly AxCandidate[];
	after: readonly AxCandidate[];
}

const cap = (lines: string[]): string[] =>
	lines.length > MAX_DIFF_LINES
		? [...lines.slice(0, MAX_DIFF_LINES), `... ${lines.length - MAX_DIFF_LINES} more`]
		: lines;

/** What identifies an element across two snapshots: ids are pre-order indices and shift whenever the tree's shape changes. */
const identityOf = (line: AxCandidate): string =>
	[line.role, line.attributes.name, line.attributes.description, line.attributes.placeholder].map(part => part ?? "").join("\u0000");
const stateOf = (line: AxCandidate): string => line.line.replace(/^\[\d+\] /, "");

function groupByIdentity(lines: readonly AxCandidate[]): Map<string, AxCandidate[]> {
	const groups = new Map<string, AxCandidate[]>();
	for (const line of lines) {
		groups.set(identityOf(line), [...(groups.get(identityOf(line)) ?? []), line]);
	}
	return groups;
}

function describeChange(old: AxCandidate, line: AxCandidate): string {
	const changes: string[] = [];
	for (const key of new Set([...Object.keys(old.attributes), ...Object.keys(line.attributes)])) {
		if (old.attributes[key] !== line.attributes[key]) {
			changes.push(`${key} ${JSON.stringify(old.attributes[key] ?? "")} -> ${JSON.stringify(line.attributes[key] ?? "")}`);
		}
	}
	for (const flag of line.flags) {
		if (!old.flags.includes(flag)) {
			changes.push(`+${flag}`);
		}
	}
	for (const flag of old.flags) {
		if (!line.flags.includes(flag)) {
			changes.push(`-${flag}`);
		}
	}
	return `[${line.id}] ${line.role} ${changes.join(" ")}`;
}

/**
 * What one action changed, in the smallest form that still shows the
 * before-state. An element present once on each side is a value change;
 * look-alikes are compared as sets of stateful lines.
 */
export function diffTrees({ before, after }: TreePair): TreeDiff {
	const was = groupByIdentity(before);
	const now = groupByIdentity(after);
	const value_changes: string[] = [];
	const added: string[] = [];
	const removed: string[] = [];
	for (const [identity, lines] of now) {
		const olds = was.get(identity) ?? [];
		if (olds.length === 1 && lines.length === 1) {
			if (stateOf(olds[0]) !== stateOf(lines[0])) {
				value_changes.push(describeChange(olds[0], lines[0]));
			}
			continue;
		}
		const oldStates = new Set(olds.map(stateOf));
		added.push(...lines.filter(line => !oldStates.has(stateOf(line))).map(line => line.line));
	}
	for (const [identity, olds] of was) {
		const lines = now.get(identity) ?? [];
		if (olds.length === 1 && lines.length === 1) {
			continue;
		}
		const newStates = new Set(lines.map(stateOf));
		removed.push(...olds.filter(old => !newStates.has(stateOf(old))).map(old => old.line));
	}
	return { value_changes: cap(value_changes), added: cap(added), removed: cap(removed) };
}

export const isEmptyDiff = (diff: TreeDiff): boolean =>
	diff.value_changes.length === 0 && diff.added.length === 0 && diff.removed.length === 0;

/** The literal text a goal quotes, such as `house music` in `type "house music" into the search field`. */
export function quotedText(step: string): string | undefined {
	const match = /["\u201C\u201D]([^"\u201C\u201D]+)["\u201C\u201D]|'([^']+)'/.exec(step);
	return match === null ? undefined : (match[1] ?? match[2]);
}

const MAX_WORDS = 60;
const clip = (text: string): string => (text.length > MAX_WORDS ? `${text.slice(0, MAX_WORDS - 1)}…` : text);
const stripIds = (lines: string[]): string[] => lines.map(line => line.replace(/\[\d+\] /g, ""));

/** `Role "words" value="v" settable selected`: an element without its id, which the model could not use anyway. */
export function describeElement(element: AxCandidate): string {
	const words = element.attributes.name ?? element.attributes.description ?? element.attributes.placeholder;
	const value = element.attributes.value;
	const parts = [element.role];
	if (words !== undefined && words.length > 0) {
		parts.push(JSON.stringify(clip(words)));
	}
	if (value !== undefined && value !== words && value.length > 0 && value.length <= 40) {
		parts.push(`value=${JSON.stringify(value)}`);
	}
	parts.push(...element.flags.filter(flag => flag === "selected" || flag === "disabled" || flag === "settable"));
	return parts.join(" ");
}

const MAX_NOW_LINES = 40;
const PRESENCE_ROLES: Record<string, string> = {
	AXWindow: "window",
	AXSheet: "sheet open",
	AXDialog: "dialog open",
	AXMenu: "menu open",
	AXPopover: "popover open",
	AXMenuBarItem: "",
};
const GROUP_ROLES = new Set(["AXToolbar", "AXOutline", "AXList", "AXTable", "AXGroup", "AXScrollArea", "AXSheet", "AXMenu", "AXTabGroup", "AXSplitGroup"]);

export interface NowView {
	candidates: string[];
	presence: string[];
}

/**
 * The final screen for the model: candidates grouped under the nearest named
 * container (by indentation), deduped, no ids, capped; plus one line naming
 * the windows, sheets, menus, and popovers present.
 */
export function renderNow(lines: readonly AxCandidate[]): NowView {
	const presence: string[] = [];
	for (const line of lines) {
		const kind = PRESENCE_ROLES[line.role];
		if (kind) {
			const words = line.attributes.name ?? line.attributes.description;
			presence.push(words ? `${kind}: ${JSON.stringify(clip(words))}` : kind);
		}
	}
	const candidateIds = new Set(candidatesOf(lines).map(line => line.id));
	const groups = new Map<string, string[]>();
	const stack: AxCandidate[] = [];
	for (const line of lines) {
		while (stack.length > 0 && stack[stack.length - 1].depth >= line.depth) {
			stack.pop();
		}
		if (candidateIds.has(line.id) && !PRESENCE_ROLES[line.role]) {
			const container = [...stack]
				.reverse()
				.find(ancestor => GROUP_ROLES.has(ancestor.role) && (ancestor.attributes.name ?? ancestor.attributes.description) !== undefined);
			const label = container === undefined
				? ""
				: `in ${container.role} ${JSON.stringify(clip(container.attributes.name ?? container.attributes.description ?? ""))}: `;
			const items = groups.get(label) ?? [];
			const item = describeElement(line);
			if (!items.includes(item)) {
				items.push(item);
			}
			groups.set(label, items);
		}
		stack.push(line);
	}
	const all = [...groups].flatMap(([label, items]) => items.map(item => `${label}${item}`));
	const candidates = all.length > MAX_NOW_LINES ? [...all.slice(0, MAX_NOW_LINES), `... ${all.length - MAX_NOW_LINES} more`] : all;
	return { candidates, presence: [...new Set(presence)] };
}

/** Start-to-end diff as the model reads it: value changes without ids, added and removed elements as `describeElement` lines, deduped. */
export function summaryDiff({ before, after }: TreePair): TreeDiff {
	const was = new Set(before.map(describeElement));
	const now = new Set(after.map(describeElement));
	return {
		value_changes: stripIds(diffTrees({ before, after }).value_changes),
		added: cap([...now].filter(line => !was.has(line))),
		removed: cap([...was].filter(line => !now.has(line))),
	};
}
