import { describe, expect, it } from "vitest";
import {
	candidatesOf,
	diffTrees,
	parseAxLines,
	quotedText,
	renderNow,
	summaryDiff,
} from "./attempt-ax";

// The renderer's shape (`CUAXTreeRenderer.line`): one-space indent per depth,
// quoted attributes escaped like JSON strings, bare `settable`, `actions=`.
const MUSIC_TREE = [
	'OK tool=computer_use_app_state message="Read the app state."',
	"[1] AXApplication name=\"Music\"",
	" [2] AXWindow name=\"Music\"",
	"  [3] AXGroup",
	"   [4] AXOutline",
	"    [5] AXRow selected actions=showdefaultui,showalternateui",
	"     [6] AXStaticText name=\"Home\"",
	"    [7] AXRow actions=show-menu,scroll-to-visible",
	"     [8] AXStaticText name=\"Search\"",
	"   [9] AXTextField name=\"Search\" value=\"\" placeholder=\"Search\" settable actions=confirm",
	"   [10] AXButton name=\"Say \\\"hi\\\"\" description=\"Greets\"",
	"   [11] AXStaticText (+3 descendants omitted)",
	"   [12] AXButton description=\"7\"",
	"snapshot_id=abc",
].join("\n");

describe("parseAxLines", () => {
	it("reads id, role, depth, every quoted attribute, bare flags and actions", () => {
		const lines = parseAxLines(MUSIC_TREE);
		expect(lines.map(line => line.id)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(lines[8]).toEqual({
			id: 9,
			role: "AXTextField",
			depth: 3,
			attributes: { name: "Search", value: "", placeholder: "Search" },
			flags: ["settable"],
			actions: ["confirm"],
			line: '[9] AXTextField name="Search" value="" placeholder="Search" settable actions=confirm',
		});
		expect(lines[4]).toMatchObject({ flags: ["selected"], actions: [] });
		expect(lines[6]).toMatchObject({ flags: [], actions: ["show-menu"] });
		expect(lines[9].attributes).toEqual({ name: 'Say "hi"', description: "Greets" });
		expect(lines[10]).toMatchObject({ attributes: {}, flags: [], actions: [] });
	});

	it("strips bidi marks and skips header and snapshot lines", () => {
		expect(parseAxLines('[1] AXStaticText value="\u200E1\u200E+\u200E2"')[0].attributes.value).toBe("1+2");
		expect(parseAxLines("OK tool=x\nsnapshot_id=abc\n")).toEqual([]);
	});
});

describe("candidatesOf", () => {
	it("keeps actionable elements and described leaves, drops bare containers and hover-only rows", () => {
		expect(candidatesOf(parseAxLines(MUSIC_TREE)).map(candidate => candidate.id)).toEqual([6, 7, 8, 9, 10, 12]);
	});

	it("caps at 240", () => {
		const many = Array.from({ length: 300 }, (_, index) => `[${index + 1}] AXButton name="b${index}"`).join("\n");
		expect(candidatesOf(parseAxLines(many))).toHaveLength(240);
	});
});

describe("quotedText", () => {
	it("takes the first quoted span, straight, curly or single", () => {
		expect(quotedText('type "house music" into the search field and submit')).toBe("house music");
		expect(quotedText("type \u201Chello world\u201D into the document")).toBe("hello world");
		expect(quotedText("type 'hello' then press Return")).toBe("hello");
		expect(quotedText("open Search from the sidebar")).toBeUndefined();
	});
});

describe("diffTrees", () => {
	const before = parseAxLines(['[1] AXStaticText value="7"', '[2] AXButton description="Add"', "[3] AXRow selected", '[4] AXCell description="old"'].join("\n"));

	it("reports attribute and flag changes on elements that kept their identity", () => {
		const after = parseAxLines(['[1] AXStaticText value="7+"', '[2] AXButton description="Add" disabled', "[3] AXRow", '[4] AXCell description="old"'].join("\n"));
		expect(diffTrees({ before, after })).toEqual({
			value_changes: ['[1] AXStaticText value "7" -> "7+"', "[2] AXButton +disabled", "[3] AXRow -selected"],
			added: [],
			removed: [],
		});
	});

	it("reports added and removed lines, and the direction follows the names", () => {
		const after = parseAxLines(['[1] AXStaticText value="7"', '[2] AXButton description="Add"', "[3] AXRow selected", '[9] AXStaticText value="82"'].join("\n"));
		expect(diffTrees({ before, after })).toEqual({ value_changes: [], added: ['[9] AXStaticText value="82"'], removed: ['[4] AXCell description="old"'] });
		expect(diffTrees({ after, before })).toEqual(diffTrees({ before, after }));
	});

	it("matches elements by role and words, not by id, so renumbering is not a change", () => {
		const after = parseAxLines(['[5] AXStaticText value="7+"', '[6] AXButton description="Add"', "[7] AXRow selected", '[8] AXCell description="old"'].join("\n"));
		expect(diffTrees({ before, after })).toEqual({ value_changes: ['[5] AXStaticText value "7" -> "7+"'], added: [], removed: [] });
	});

	it("caps long diffs", () => {
		const many = parseAxLines(Array.from({ length: 20 }, (_, i) => `[${i + 10}] AXButton name="b${i}"`).join("\n"));
		const diff = diffTrees({ before: [], after: many });
		expect(diff.added).toHaveLength(13);
		expect(diff.added[12]).toBe("... 8 more");
	});
});

describe("renderNow and summaryDiff", () => {
	it("groups candidates under the nearest named container, dedupes, drops ids, and names sheets", () => {
		const lines = parseAxLines([
			'[1] AXWindow name="Music"',
			' [2] AXOutline description="Sidebar"',
			'  [3] AXStaticText value="Home"',
			'  [4] AXStaticText value="Home"',
			"  [5] AXRow selected actions=show-menu",
			' [6] AXSheet name="New Playlist"',
			'  [7] AXTextField value="" settable',
			'  [8] AXButton name="OK" disabled',
			' [9] AXButton description="Play"',
		].join("\n"));
		const now = renderNow(lines);
		expect(now.presence).toEqual(['window: "Music"', 'sheet open: "New Playlist"']);
		expect(now.candidates).toEqual([
			'in AXOutline "Sidebar": AXStaticText value="Home"',
			'in AXOutline "Sidebar": AXRow selected',
			'in AXSheet "New Playlist": AXTextField settable',
			'in AXSheet "New Playlist": AXButton "OK" disabled',
			'AXButton "Play"',
		]);
	});

	it("caps the now list at 40 lines", () => {
		const now = renderNow(parseAxLines(Array.from({ length: 50 }, (_, i) => `[${i + 1}] AXButton name="b${i}"`).join("\n")));
		expect(now.candidates).toHaveLength(41);
		expect(now.candidates[40]).toBe("... 10 more");
	});

	it("summarizes start to end without ids", () => {
		const before = parseAxLines('[1] AXTextArea value="" settable\n[2] AXButton name="Save"');
		const after = parseAxLines('[1] AXTextArea value="hello" settable\n[2] AXButton name="Save"');
		expect(summaryDiff({ before, after })).toEqual({
			value_changes: ['AXTextArea value "" -> "hello"'],
			added: ['AXTextArea value="hello" settable'],
			removed: ["AXTextArea settable"],
		});
	});
});
