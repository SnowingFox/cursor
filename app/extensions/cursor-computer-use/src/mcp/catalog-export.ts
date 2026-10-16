/**
 * The darwin MCP catalog for the native helper's own MCP server
 * (packages/computer-use/mac), checked in as the Swift literal
 * `CUMcpCatalogData.json` at `MCP_CATALOG_SWIFT_PATH`: the companion toolset
 * as Glass advertises it, whose rules `CUMcpToolset` applies (screen-scope
 * typing refused, no capture after a wait), minus the clauses about Windows,
 * which the helper never runs on, plus the refusal contract the helper
 * honours on every refusal (Glass only states it on Windows, the one
 * platform where its own toolset honours it), with `computer_resolve_app`'s
 * selector oneOf lowered into its description, the observation tools
 * marked read-only (`READ_ONLY_TOOLS`) and an optional `step` on the acting
 * tools (`STEP_TOOLS`).
 * The instructions end with Glass's confirmation policy (`glassConfirmationPolicy`).
 * `catalog-export.test.ts` regenerates the literal.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
	COMPUTER_USE_ESCALATIONS,
	COMPUTER_USE_REFUSAL_ESCALATIONS,
	defaultEscalationReason,
	type ComputerUseEscalation,
	type ComputerUseRefusalCode,
} from "@anysphere/computer-use/protocol";
import {
	COMPUTER_USE_LOCAL_INSTRUCTIONS,
	DARWIN_COMPANION_INSTRUCTIONS,
	composeComputerUseInstructions,
	computerUseMcpTools,
	describeRefusalContract,
} from "./tools";

export interface McpCatalogTool {
	name: string;
	description: string;
	inputSchema: Record<string, unknown>;
	annotations?: { readOnlyHint: true };
}

/**
 * The refusal vocabulary (sidecar-protocol.ts), so the helper's typed mirror
 * of it (`CUMcpRefusalCode`, `CUMcpEscalation`) is checked against this
 * source rather than re-typed from it.
 */
export interface McpCatalogRefusals {
	/** The default escalation for every refusal code, in vocabulary order. */
	escalationByCode: Readonly<Record<ComputerUseRefusalCode, ComputerUseEscalation>>;
	/** The reason a client attaches to each escalation when the producer gave none. */
	reasonByEscalation: Record<ComputerUseEscalation, string>;
}

export interface McpCatalog {
	tools: McpCatalogTool[];
	instructions: string;
	refusals: McpCatalogRefusals;
}

/** The checked-in Swift embedding, relative to this extension. */
export const MCP_CATALOG_SWIFT_PATH =
	"../../../packages/computer-use/mac/Sources/CUCore/Mcp/CUMcpCatalogData.swift";

/**
 * Clauses in the toolset's descriptors that only apply to the Windows
 * sidecar, by the tool that carries each. A reworded clause fails the
 * catalog loudly here instead of surviving into the helper.
 */
const WINDOWS_CLAUSES: ReadonlyMap<string, string> = new Map([
	["computer_key", ' on macOS and "ctrl+l" on Windows'],
	["computer_check_permissions", " On Windows both are always granted."],
]);

/**
 * The tools that only observe: hosts that confirm each MCP call skip the
 * prompt for these. Glass's toolset carries no annotations, so this is the
 * helper's alone. Not `computer_resolve_app`, which launches the app.
 */
const READ_ONLY_TOOLS: ReadonlySet<string> = new Set([
	"computer_screenshot",
	"computer_apps",
	"computer_check_permissions",
	"computer_app_state",
	"computer_wait",
]);

/**
 * The tools that act on the machine or open an app: the model may attach a
 * `step` for the client's activity list. Glass's toolset has none, so this
 * is the helper's alone. Not `computer_move`, which clients fold into the
 * observation that follows it.
 */
const STEP_TOOLS: ReadonlySet<string> = new Set([
	"computer_click",
	"computer_drag",
	"computer_type",
	"computer_key",
	"computer_scroll",
	"computer_set_value",
	"computer_app_action",
	"computer_resolve_app",
]);

const STEP_PROPERTY = {
	type: "string",
	maxLength: 120,
	description:
		"A few words for the user about this action, shown in the client's activity list, e.g. Filter for unanswered emails.",
} as const;

/** Glass's computer-use skill, relative to this extension's root. */
const GLASS_SKILL_PATH = "../../../packages/computer-use-mac/assets/skills/computer-use/SKILL.md";

const CONFIRMATION_POLICY_HEADING = "## Confirmation policy";

/**
 * The helper's catalog. The toolset specializes itself for `process.platform`
 * when it loads, and only the darwin toolset has the app-target tools the
 * helper serves, so any other platform is a caller's mistake.
 */
export function mcpCatalog(): McpCatalog {
	if (process.platform !== "darwin") {
		throw new Error(`the helper's catalog is the darwin toolset's; this process is ${process.platform}`);
	}
	const companionInstructions = composeComputerUseInstructions({
		local: COMPUTER_USE_LOCAL_INSTRUCTIONS,
		body: DARWIN_COMPANION_INSTRUCTIONS,
	});
	return {
		tools: computerUseMcpTools({ companionDefault: true }).map(tool =>
			withoutSelectorOneOf({
				name: tool.name,
				description: withoutWindowsClause(tool.name, tool.description),
				inputSchema: withStep(tool.name, JSON.parse(tool.parameters) as Record<string, unknown>),
				...(READ_ONLY_TOOLS.has(tool.name) ? { annotations: { readOnlyHint: true as const } } : {}),
			})
		),
		instructions: [companionInstructions, describeRefusalContract(), glassConfirmationPolicy()].join("\n\n"),
		refusals: {
			escalationByCode: COMPUTER_USE_REFUSAL_ESCALATIONS,
			reasonByEscalation: Object.fromEntries(
				COMPUTER_USE_ESCALATIONS.map(escalation => [
					escalation,
					defaultEscalationReason(escalation),
				])
			) as Record<ComputerUseEscalation, string>,
		},
	};
}

/**
 * The xAI gateway drops any tool with a root oneOf, anyOf or allOf; the
 * service's handleSelectApp enforces exactly one selector at call time anyway.
 */
export function withoutSelectorOneOf(tool: McpCatalogTool): McpCatalogTool {
	const { oneOf, ...inputSchema } = tool.inputSchema;
	const keys = selectorKeys(oneOf);
	if (keys === undefined) {
		return tool;
	}
	const sentence = `Exactly one of ${keys.slice(0, -1).join(", ")} or ${keys[keys.length - 1]} must be given.`;
	return { ...tool, description: `${tool.description} ${sentence}`, inputSchema };
}

/** The key each `{ required: [key] }` branch names, or undefined for any other oneOf. */
function selectorKeys(oneOf: unknown): string[] | undefined {
	if (!Array.isArray(oneOf) || oneOf.length < 2) {
		return undefined;
	}
	const keys: string[] = [];
	for (const branch of oneOf as unknown[]) {
		if (typeof branch !== "object" || branch === null || Object.keys(branch).length !== 1) {
			return undefined;
		}
		const required = (branch as { required?: unknown }).required;
		if (!Array.isArray(required) || required.length !== 1 || typeof required[0] !== "string") {
			return undefined;
		}
		keys.push(required[0]);
	}
	return keys;
}

function withStep(name: string, inputSchema: Record<string, unknown>): Record<string, unknown> {
	if (!STEP_TOOLS.has(name)) {
		return inputSchema;
	}
	const properties = inputSchema.properties as Record<string, unknown> | undefined;
	return { ...inputSchema, properties: { ...properties, step: STEP_PROPERTY } };
}

export function withoutWindowsClause(name: string, description: string): string {
	const clause = WINDOWS_CLAUSES.get(name);
	if (clause === undefined) {
		return description;
	}
	if (!description.includes(clause)) {
		throw new Error(`${name} no longer carries the Windows clause ${JSON.stringify(clause)}`);
	}
	return description.replace(clause, "");
}

/**
 * Glass's confirmation policy, read from its computer-use skill when the catalog is generated.
 * The helper's hosts load no Cursor skill.
 */
export function glassConfirmationPolicy(): string {
	return confirmationPolicySection(readFileSync(resolve(__dirname, "..", "..", GLASS_SKILL_PATH), "utf8"));
}

/** The confirmation policy section of `skill`, word for word, up to the next `#` or `##` heading. */
export function confirmationPolicySection(skill: string): string {
	const lines = skill.split(/\r?\n/);
	const start = lines.indexOf(CONFIRMATION_POLICY_HEADING);
	if (start === -1) {
		throw new Error(`the skill has no "${CONFIRMATION_POLICY_HEADING}" section`);
	}
	const end = lines.findIndex((line, index) => index > start && /^#{1,2} /.test(line));
	return lines
		.slice(start, end === -1 ? undefined : end)
		.join("\n")
		.trimEnd();
}

/**
 * The Swift source that embeds `catalog` as JSON. The raw literal's closing
 * delimiter is indented four spaces, and Swift strips that indentation from
 * every line, so the JSON is indented to match.
 */
export function renderCatalogSwift(catalog: McpCatalog): string {
	const body = JSON.stringify(catalog, null, 2)
		.split("\n")
		.map(line => `    ${line}`)
		.join("\n");
	return [
		"// Generated by vscode/extensions/cursor-computer-use/src/mcp/catalog-export.test.ts (vitest -u) from",
		"// src/mcp/catalog-export.ts and packages/computer-use-mac/assets/skills/computer-use/SKILL.md. Do not edit by hand.",
		"",
		"enum CUMcpCatalogData {",
		'    static let json = #"""',
		body,
		'    """#',
		"}",
		"",
	].join("\n");
}
