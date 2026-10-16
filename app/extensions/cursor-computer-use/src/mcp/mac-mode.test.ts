import { describe, expect, it } from "vitest";
import {
	DARWIN_COMPANION_INSTRUCTIONS,
	DARWIN_REMOTE_INSTRUCTIONS,
	resolveComputerUseMacMode,
	selectDarwinMcpInstructions,
} from "./mac-mode";

describe("resolveComputerUseMacMode", () => {
	it("is companion for Glass and remote for private workers", () => {
		expect(resolveComputerUseMacMode("glass")).toBe("companion");
		expect(resolveComputerUseMacMode("private_worker")).toBe("remote");
	});
});

describe("selectDarwinMcpInstructions", () => {
	it("uses the compiled fallback when Statsig has no per-mode row", () => {
		expect(selectDarwinMcpInstructions({ mode: "companion" })).toBe(
			DARWIN_COMPANION_INSTRUCTIONS
		);
		expect(selectDarwinMcpInstructions({ mode: "remote" })).toBe(
			DARWIN_REMOTE_INSTRUCTIONS
		);
	});

	it("ignores a legacy single darwin string", () => {
		expect(
			selectDarwinMcpInstructions({
				mode: "companion",
				statsig: { darwin: "Use screen scope only.", win32: "" },
			})
		).toBe(DARWIN_COMPANION_INSTRUCTIONS);
		expect(
			selectDarwinMcpInstructions({
				mode: "remote",
				statsig: { darwin: "Default to an app target.", win32: "" },
			})
		).toBe(DARWIN_REMOTE_INSTRUCTIONS);
	});

	it("uses the per-mode Statsig row for the resolved mode only", () => {
		const statsig = {
			darwin: {
				companion: "Companion live copy.",
				remote: "Remote live copy.",
			},
			win32: "",
		};
		expect(selectDarwinMcpInstructions({ mode: "companion", statsig })).toBe(
			"Companion live copy."
		);
		expect(selectDarwinMcpInstructions({ mode: "remote", statsig })).toBe(
			"Remote live copy."
		);
	});

	it("falls back when the matching per-mode row is empty", () => {
		expect(
			selectDarwinMcpInstructions({
				mode: "companion",
				statsig: { darwin: { companion: "", remote: "Remote live copy." } },
			})
		).toBe(DARWIN_COMPANION_INSTRUCTIONS);
	});
});
