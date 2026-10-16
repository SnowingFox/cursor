import {
	COMPUTER_USE_ESCALATIONS,
	COMPUTER_USE_REFUSAL_CODES,
	COMPUTER_USE_REFUSAL_ESCALATIONS,
	computerUseRefusal,
} from "@anysphere/computer-use/protocol";
import { createContext } from "@anysphere/context";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { describe, expect, it, vi } from "vitest";
import type { ComputerUseBackend } from "../backends/types";
import {
	MCP_CATALOG_SWIFT_PATH,
	confirmationPolicySection,
	glassConfirmationPolicy,
	mcpCatalog,
	renderCatalogSwift,
	withoutSelectorOneOf,
	withoutWindowsClause,
} from "./catalog-export";
import {
	COMPUTER_USE_LOCAL_INSTRUCTIONS,
	ComputerUseMcpToolset,
	DARWIN_COMPANION_INSTRUCTIONS,
	composeComputerUseInstructions,
	computerUseMcpTools,
	describeRefusalContract,
} from "./tools";

// The toolset is specialized for the host platform when the module loads, and
// the catalog is the macOS toolset's (the only one with app targets).
vi.hoisted(() => {
	Object.defineProperty(process, "platform", { value: "darwin" });
});

const catalog = mcpCatalog();
const companion = computerUseMcpTools();
// Checks on the helper's own wording skip Glass's confirmation policy
const helperInstructions = catalog.instructions.replace(glassConfirmationPolicy(), "");

function targetOf(schema: Record<string, unknown>): Record<string, unknown> | undefined {
	const properties = schema.properties as Record<string, unknown> | undefined;
	return properties?.target as Record<string, unknown> | undefined;
}

describe("the native helper's MCP catalog", () => {
	// Regenerate the helper's literal with: vitest run src/mcp/catalog-export.test.ts -u
	it("is checked into the helper as rendered here", async () => {
		const swiftPath = resolve(__dirname, "..", "..", MCP_CATALOG_SWIFT_PATH);
		// Outside CI a missing snapshot file is written and passes.
		expect(existsSync(swiftPath), swiftPath).toBe(true);
		await expect(renderCatalogSwift(catalog)).toMatchFileSnapshot(swiftPath);
	});

	it("includes the companion toolset's tools, schemas and instructions, the refusal contract and the confirmation policy", () => {
		expect(catalog.tools.map(tool => tool.name)).toEqual(
			companion.map(tool => tool.name)
		);

		// withoutSelectorOneOf moves computer_resolve_app's oneOf into its description.
		// withStep adds an optional step property to the tools listed below.
		const lowered: string[] = [];
		const stepped: string[] = [];
		for (const [index, tool] of catalog.tools.entries()) {
			const { oneOf, ...schema } = JSON.parse(companion[index].parameters) as Record<string, unknown>;
			if (oneOf !== undefined) {
				lowered.push(tool.name);
			}
			const { step, ...properties } = (tool.inputSchema.properties ?? {}) as Record<string, unknown>;
			expect({ ...tool.inputSchema, properties }, tool.name).toEqual(schema);
			if (step === undefined) {
				continue;
			}
			stepped.push(tool.name);
			expect(step, tool.name).toEqual({
				type: "string",
				maxLength: 120,
				description:
					"A few words for the user about this action, shown in the client's activity list, e.g. Filter for unanswered emails.",
			});
		}

		expect(lowered).toEqual(["computer_resolve_app"]);
		expect(new Set(stepped)).toEqual(
			new Set([
				"computer_click",
				"computer_drag",
				"computer_type",
				"computer_key",
				"computer_scroll",
				"computer_set_value",
				"computer_app_action",
				"computer_resolve_app",
			])
		);

		// Compared against the generator's output, not its wording.
		const companionInstructions = composeComputerUseInstructions({
			local: COMPUTER_USE_LOCAL_INSTRUCTIONS,
			body: DARWIN_COMPANION_INSTRUCTIONS,
		});
		expect(catalog.instructions).toBe(
			`${companionInstructions}\n\n${describeRefusalContract()}\n\n${glassConfirmationPolicy()}`
		);
		// Glass's local text carries the contract itself where refusals are structured.
		expect(catalog.instructions.split(describeRefusalContract())).toHaveLength(2);
	});

	it("takes the confirmation policy section word for word, up to the next section", () => {
		const policy = "## Confirmation policy\n\n- **Ask** first.\n### Detail\nKept.";

		// The policy ends the skill, or a heading at the same level or higher follows it
		for (const rest of ["", "\n\n## Next\nDropped.", "\n\n# Next\nDropped."]) {
			const skill = `# Skill\n\nIntro.\n\n${policy}${rest}`;
			expect(confirmationPolicySection(skill), rest).toBe(policy);
		}

		expect(() => confirmationPolicySection("# Skill\n")).toThrow('no "## Confirmation policy" section');
	});

	// A Windows checkout with core.autocrlf gives the skill CRLF line endings
	it("takes the same section from a skill with Windows line endings", () => {
		const policy = "## Confirmation policy\n\n- **Ask** first.\n### Detail\nKept.";
		const skill = `# Skill\n\nIntro.\n\n${policy}\n\n## Next\nDropped.`;
		expect(confirmationPolicySection(skill.replaceAll("\n", "\r\n"))).toBe(policy);
	});

	it("keeps the companion descriptions, minus the Windows clauses, plus the lowered selector rule", () => {
		for (const [index, tool] of catalog.tools.entries()) {
			const glass = withoutWindowsClause(tool.name, companion[index].description);
			expect(tool.description, tool.name).toBe(
				tool.name === "computer_resolve_app"
					? `${glass} Exactly one of pid, bundle_id, app_path or app_name must be given.`
					: glass
			);
		}
	});

	it("lowers only a oneOf of single required keys, and leaves any other schema alone", () => {
		const selectors = {
			name: "t",
			description: "Pick one.",
			inputSchema: {
				type: "object",
				properties: { a: {}, b: {} },
				oneOf: [{ required: ["a"] }, { required: ["b"] }],
			},
		};
		expect(withoutSelectorOneOf(selectors)).toEqual({
			name: "t",
			description: "Pick one. Exactly one of a or b must be given.",
			inputSchema: { type: "object", properties: { a: {}, b: {} } },
		});
		const branches = {
			...selectors,
			inputSchema: { type: "object", oneOf: [{ required: ["a"] }, { properties: { b: {} } }] },
		};
		expect(withoutSelectorOneOf(branches)).toBe(branches);
		const plain = { ...selectors, inputSchema: { type: "object", properties: { a: {} } } };
		expect(withoutSelectorOneOf(plain)).toBe(plain);
	});

	it("states the rules the helper's toolset enforces", () => {
		const description = (name: string) =>
			catalog.tools.find(tool => tool.name === name)?.description ?? "";
		expect(description("computer_type")).toContain("Prefer computer_set_value");
		expect(description("computer_type")).toContain("click-selected field");
		expect(description("computer_type")).toContain("A missed click target is refused");
		expect(description("computer_type")).toContain("Screen-scope typing is refused");
		expect(catalog.instructions).toContain("Screen-scope typing is refused");
		expect(catalog.instructions).not.toContain("Untargeted and screen-scope typing are refused");
		expect(description("computer_wait")).toContain("does not capture the display");
		expect(description("computer_start_control")).toContain("Escalation only");
		for (const name of ["computer_app_state", "computer_set_value", "computer_app_action"]) {
			const target = targetOf(
				catalog.tools.find(tool => tool.name === name)?.inputSchema ?? {}
			);
			expect(target?.properties, name).toMatchObject({ scope: { const: "app" } });
		}
	});

	// Screen-scope typing is the one Glass text the helper carries by hand
	// (CUMcpToolset.swift's screenScopeTypingRefusal). App-target type without
	// element_id is forwarded to the sidecar.
	it("refuses typing in the words Glass's toolset uses", async () => {
		const swift = readFileSync(
			resolve(__dirname, "..", "..", dirname(MCP_CATALOG_SWIFT_PATH), "CUMcpToolset.swift"),
			"utf8"
		);
		const glass = new ComputerUseMcpToolset({} as ComputerUseBackend, { companionDefault: true });
		const message = await glass.callTool(createContext(), "computer_type", { text: "hi" }).then(
			() => "not refused",
			(error: unknown) => (error as Error).message
		);
		const prefix = "Invalid arguments for computer_type: ";
		expect(message.startsWith(prefix), message).toBe(true);
		expect(swift).toContain(`"${message.slice(prefix.length)}"`);
	});

	it("carries the protocol's refusal vocabulary for the helper's mirror to check against", () => {
		expect(catalog.refusals.escalationByCode).toEqual(COMPUTER_USE_REFUSAL_ESCALATIONS);
		expect(Object.keys(catalog.refusals.reasonByEscalation)).toEqual([...COMPUTER_USE_ESCALATIONS]);
		for (const code of COMPUTER_USE_REFUSAL_CODES) {
			const { escalation } = computerUseRefusal(code, "");
			expect(catalog.refusals.reasonByEscalation[escalation.recommended], code).toBe(escalation.reason);
		}
	});

	it("refuses to build on any platform but darwin", () => {
		Object.defineProperty(process, "platform", { value: "win32" });
		try {
			expect(() => mcpCatalog()).toThrow("this process is win32");
		} finally {
			Object.defineProperty(process, "platform", { value: "darwin" });
		}
	});

	// A bullet or descriptor that outlives a renamed tool fails here whatever the prose.
	it("names only tools it advertises", () => {
		const advertised = new Set(catalog.tools.map(tool => tool.name));
		const helperCatalog = JSON.stringify({ ...catalog, instructions: helperInstructions });
		for (const [name] of helperCatalog.matchAll(/\bcomputer_[a-z_]+/g)) {
			expect(advertised.has(name), `${name} is named but not advertised`).toBe(true);
		}
	});

	// Glass's toolset has no annotations; the hint is the helper's, for hosts
	// that confirm each MCP call. Everything else in the catalog acts or launches.
	it("annotates exactly these tools read-only", () => {
		const annotated = catalog.tools.filter(tool => "annotations" in tool);
		expect(new Set(annotated.map(tool => tool.name))).toEqual(
			new Set([
				"computer_screenshot",
				"computer_apps",
				"computer_check_permissions",
				"computer_app_state",
				"computer_wait",
			])
		);
		for (const tool of annotated) {
			expect(tool.annotations, tool.name).toEqual({ readOnlyHint: true });
		}
	});

	it("has no Windows clauses, since the helper is macOS-only", () => {
		for (const tool of catalog.tools) {
			expect(tool.description, tool.name).not.toContain("Windows");
			expect(JSON.stringify(tool.inputSchema), tool.name).not.toContain("Windows");
		}
		expect(helperInstructions).not.toContain("Windows");
		expect(() => withoutWindowsClause("computer_key", "a chord like cmd+l")).toThrow(
			"computer_key no longer carries the Windows clause"
		);
	});

	// The xAI gateway's grammar lowering drops any tool whose root schema carries one of these.
	it("combines no schema at the root", () => {
		for (const tool of catalog.tools) {
			for (const keyword of ["oneOf", "anyOf", "allOf"]) {
				expect(tool.inputSchema, `${tool.name} has a root ${keyword}`).not.toHaveProperty(keyword);
			}
		}
	});
});
