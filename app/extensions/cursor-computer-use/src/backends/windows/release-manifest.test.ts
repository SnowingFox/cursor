import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SIDECAR_PROTOCOL_MAJOR } from "@anysphere/computer-use/protocol";
import { describe, expect, it } from "vitest";
import { CURSOR_PRODUCT_PROFILE } from "./product-profile";
import {
	WINDOWS_SIDECAR_MAX_ARTIFACT_BYTES,
	WindowsSidecarManifestError,
	parseWindowsSidecarReleaseManifest,
	validateWindowsSidecarManifestUrl,
	windowsSidecarArchForNodeArch,
	windowsSidecarArtifactName,
	windowsSidecarArtifactPath,
	windowsSidecarManifestPath,
} from "./release-manifest";

const TARGETS = { x64: "x86_64-pc-windows-msvc", arm64: "aarch64-pc-windows-msvc" } as const;

/**
 * The manifest the release pipeline's own validator accepts:
 * `windows_manifest()` in `.buildkite/tests/test_computer_use_sidecar_scripts.py`,
 * copied byte for byte. If the pipeline changes what it publishes, this file
 * changes with it and the tests below say which side moved.
 */
const PIPELINE_FIXTURE_PATH = join(__dirname, "__fixtures__/pipeline-win32-release-manifest.json");
const PIPELINE_ARTIFACT = "Cursor-Computer-Use-0.0.42-win32-x64.exe";
const PIPELINE_DIGEST = "a".repeat(64);
const PIPELINE_MANIFEST_URL = `https://downloads.cursor.com/computer-use-sidecar/releases/explicit/3.20.0/${"b".repeat(40)}-win32-x64.json`;

function pipelineManifest(): Record<string, unknown> {
	return JSON.parse(readFileSync(PIPELINE_FIXTURE_PATH, "utf8")) as Record<string, unknown>;
}

describe("the pipeline validator's fixture", () => {
	it("is admitted by the client exactly as published", () => {
		const manifest = parseWindowsSidecarReleaseManifest(
			readFileSync(PIPELINE_FIXTURE_PATH, "utf8"),
			{ manifestUrl: PIPELINE_MANIFEST_URL, arch: "x64" }
		);
		expect(manifest.artifact.name).toBe(PIPELINE_ARTIFACT);
		expect(manifest.artifact.sha256).toBe(PIPELINE_DIGEST);
		expect(manifest.executable.name).toBe(CURSOR_PRODUCT_PROFILE.executableName);
		expect(manifest.signature.publisherCommonName).toBe(
			CURSOR_PRODUCT_PROFILE.pinnedSignerSubjects[0]
		);
		expect(manifest.parentPipeline).toBeNull();
		expect(manifest.protocolMajor).toBe(SIDECAR_PROTOCOL_MAJOR);
	});

	it("has exactly the key set validate_win32 requires", () => {
		expect(Object.keys(pipelineManifest()).sort()).toEqual(
			[
				"schemaVersion",
				"platform",
				"arch",
				"lane",
				"sourceBranch",
				"sourceSha",
				"runtimeSha",
				"cursorVersion",
				"sidecarVersion",
				"sidecarBuild",
				"parentPipeline",
				"parentBuildId",
				"protocolMajor",
				"toolchain",
				"artifact",
				"executable",
				"signature",
				"manifestEmbedded",
			].sort()
		);
	});

	// Every mutation the pipeline test proves its validator rejects; the
	// client must not admit what the publisher would have refused.
	it.each<[string, (m: Record<string, unknown>) => void]>([
		["arch flipped to arm64", m => { m.arch = "arm64"; }],
		["target triple for the other architecture", m => { (m.toolchain as Record<string, unknown>).target = "aarch64-pc-windows-msvc"; }],
		["another product's executable", m => { (m.executable as Record<string, unknown>).name = "grok-cua-sidecar.exe"; }],
		["unsignedSha256 equal to the signed digest", m => { (m.executable as Record<string, unknown>).unsignedSha256 = PIPELINE_DIGEST; }],
		["executable size that differs from the artifact's", m => { (m.executable as Record<string, unknown>).bytes = 99; }],
		["a publisher that is not the pinned subject", m => { (m.signature as Record<string, unknown>).publisherCommonName = "Anysphere"; }],
		["an untimestamped signature", m => { (m.signature as Record<string, unknown>).timestamped = false; }],
		["an uppercase thumbprint", m => { (m.signature as Record<string, unknown>).thumbprint = "E".repeat(40); }],
		["manifestEmbedded false", m => { m.manifestEmbedded = false; }],
		["manifestEmbedded as a number", m => { m.manifestEmbedded = 1; }],
		["a boolean sidecarBuild", m => { m.sidecarBuild = true; }],
		["a stray latest key", m => { m.latest = true; }],
		["no signature block", m => { delete m.signature; }],
	])("refuses the fixture with %s, as the pipeline does", (_name, mutate) => {
		const malformed = pipelineManifest();
		mutate(malformed);
		expect(() =>
			parseWindowsSidecarReleaseManifest(JSON.stringify(malformed), {
				manifestUrl: PIPELINE_MANIFEST_URL,
				arch: "x64",
			})
		).toThrow(WindowsSidecarManifestError);
	});

	it("refuses the fixture under a manifest URL for the other architecture", () => {
		expect(() =>
			parseWindowsSidecarReleaseManifest(readFileSync(PIPELINE_FIXTURE_PATH, "utf8"), {
				manifestUrl: PIPELINE_MANIFEST_URL.replace("-win32-x64", "-win32-arm64"),
				arch: "arm64",
			})
		).toThrow(WindowsSidecarManifestError);
	});
});

// The admission mechanism beyond the pipeline's fixture: identity-vs-URL,
// content addressing, the URL shape, and the client's own compatibility rules.
describe("windows sidecar release manifest", () => {
	const product = CURSOR_PRODUCT_PROFILE;
	const sourceSha = "b".repeat(40);
	const digest = "c".repeat(64);
	const manifestUrl = `https://downloads.cursor.com${windowsSidecarManifestPath({
		lane: "explicit",
		cursorVersion: "3.21.0-pre.4",
		sourceSha,
		arch: "x64",
	})}`;
	const artifactName = windowsSidecarArtifactName("0.1.0", "x64");

	function artifact(patch: Record<string, unknown> = {}) {
		return {
			name: artifactName,
			sha256: digest,
			bytes: 4_096,
			url: `https://downloads.cursor.com${windowsSidecarArtifactPath(digest, artifactName)}`,
			...patch,
		};
	}

	function signature(patch: Record<string, unknown> = {}) {
		return {
			publisherCommonName: product.pinnedSignerSubjects[0],
			thumbprint: "a".repeat(40),
			account: "Anysphere",
			profile: "Cursor",
			timestamped: true,
			...patch,
		};
	}

	function manifest(patch: Record<string, unknown> = {}) {
		return {
			schemaVersion: 1,
			platform: "win32",
			arch: "x64",
			lane: "explicit",
			sourceBranch: "main",
			sourceSha,
			runtimeSha: sourceSha,
			cursorVersion: "3.21.0-pre.4",
			sidecarVersion: "0.1.0",
			sidecarBuild: 3,
			parentPipeline: null,
			parentBuildId: null,
			protocolMajor: SIDECAR_PROTOCOL_MAJOR,
			toolchain: { rustc: "1.91.1", target: TARGETS.x64 },
			artifact: artifact(),
			executable: {
				name: product.executableName,
				signedSha256: digest,
				unsignedSha256: "d".repeat(64),
				bytes: 4_096,
			},
			signature: signature(),
			manifestEmbedded: true,
			...patch,
		};
	}

	function parse(
		value: unknown,
		url: string = manifestUrl,
		arch: "x64" | "arm64" = "x64"
	) {
		return parseWindowsSidecarReleaseManifest(JSON.stringify(value), {
			manifestUrl: url,
			arch,
		});
	}

	it("admits a manifest whose identity, product, and digests all agree", () => {
		expect(parse(manifest()).sidecarVersion).toBe("0.1.0");
	});

	it("admits a release-lane manifest that names its parent build", () => {
		expect(
			parse(manifest({ parentPipeline: "client-release-package", parentBuildId: "parent-build" }))
				.parentPipeline
		).toBe("client-release-package");
	});

	it("maps process.arch onto the two published builds and nothing else", () => {
		expect(windowsSidecarArchForNodeArch("x64")).toBe("x64");
		expect(windowsSidecarArchForNodeArch("arm64")).toBe("arm64");
		expect(windowsSidecarArchForNodeArch("ia32")).toBeUndefined();
	});

	it("builds a manifest path the URL check recognises, per arch", () => {
		for (const arch of ["x64", "arm64"] as const) {
			const path = windowsSidecarManifestPath({
				lane: "explicit",
				cursorVersion: "3.21.0",
				sourceSha,
				arch,
			});
			expect(path).toBe(
				`/computer-use-sidecar/releases/explicit/3.21.0/${sourceSha}-win32-${arch}.json`
			);
			expect(() =>
				validateWindowsSidecarManifestUrl(`https://downloads.cursor.com${path}`, arch)
			).not.toThrow();
		}
	});

	it.each([
		["a mutable pointer", "https://downloads.cursor.com/computer-use-sidecar/latest.json"],
		["the macOS manifest shape", `https://downloads.cursor.com/computer-use-sidecar/releases/explicit/3.21.0/${sourceSha}.json`],
		["another host", manifestUrl.replace("downloads.cursor.com", "example.com")],
		["plain http", manifestUrl.replace("https://", "http://")],
		["a port", manifestUrl.replace("downloads.cursor.com", "downloads.cursor.com:8443")],
		["credentials", manifestUrl.replace("https://", "https://user:pw@")],
		["a query", `${manifestUrl}?v=2`],
		["a fragment", `${manifestUrl}#frag`],
		["the other architecture", manifestUrl.replace("-win32-x64", "-win32-arm64")],
		["not a URL", "not a url"],
	])("refuses a manifest URL with %s", (_name, url) => {
		expect(() => validateWindowsSidecarManifestUrl(url, "x64")).toThrow(
			WindowsSidecarManifestError
		);
	});

	it.each([
		["an unknown field", { extra: true }],
		["another platform", { platform: "darwin" }],
		["a protocol this client does not speak", { protocolMajor: SIDECAR_PROTOCOL_MAJOR + 1 }],
		["an identity that differs from its URL", { cursorVersion: "3.21.0-pre.5" }],
		["a source sha that differs from its URL", { sourceSha: "e".repeat(40) }],
		["an architecture that differs from its URL", { arch: "arm64", toolchain: { rustc: "1.91.1", target: TARGETS.arm64 } }],
		["an empty parentPipeline", { parentPipeline: "" }],
		["another product's executable", { executable: { name: "grok-cua-sidecar.exe", signedSha256: digest, unsignedSha256: "d".repeat(64), bytes: 4_096 } }],
		["an artifact name that is not this product's", { artifact: artifact({ name: "Grok-Computer-Use-0.1.0-win32-x64.exe", url: `https://downloads.cursor.com${windowsSidecarArtifactPath(digest, "Grok-Computer-Use-0.1.0-win32-x64.exe")}` }) }],
		["an artifact name for another version", { artifact: artifact({ name: "Cursor-Computer-Use-0.1.1-win32-x64.exe", url: `https://downloads.cursor.com${windowsSidecarArtifactPath(digest, "Cursor-Computer-Use-0.1.1-win32-x64.exe")}` }) }],
		["a target triple for the other architecture", { toolchain: { rustc: "1.91.1", target: TARGETS.arm64 } }],
		["a signer this client does not pin", { signature: signature({ publisherCommonName: "Contoso Ltd." }) }],
		["a signing account that is not the lane's", { signature: signature({ account: "Other" }) }],
		["a signing profile that is not the lane's", { signature: signature({ profile: "Other" }) }],
		["an untimestamped signature", { signature: signature({ timestamped: false }) }],
		["an artifact digest that differs from the executable's", { artifact: artifact({ sha256: "f".repeat(64), url: `https://downloads.cursor.com${windowsSidecarArtifactPath("f".repeat(64), artifactName)}` }) }],
		["an artifact size that differs from the executable's", { artifact: artifact({ bytes: 4_095 }) }],
		["an artifact URL that is not content-addressed", { artifact: artifact({ url: `https://downloads.cursor.com/computer-use-sidecar/artifacts/latest/${artifactName}` }) }],
		["an artifact URL on another host", { artifact: artifact({ url: `https://example.com${windowsSidecarArtifactPath(digest, artifactName)}` }) }],
		["an artifact above the size cap", { artifact: artifact({ bytes: WINDOWS_SIDECAR_MAX_ARTIFACT_BYTES + 1 }), executable: { name: product.executableName, signedSha256: digest, unsignedSha256: "d".repeat(64), bytes: WINDOWS_SIDECAR_MAX_ARTIFACT_BYTES + 1 } }],
		["a missing manifest-embedded assertion", { manifestEmbedded: false }],
	])("refuses a manifest with %s", (_name, patch) => {
		expect(() => parse(manifest(patch))).toThrow(WindowsSidecarManifestError);
	});

	it("refuses text that is not JSON with the same error type", () => {
		expect(() =>
			parseWindowsSidecarReleaseManifest("{not json", { manifestUrl, arch: "x64" })
		).toThrow("not valid JSON");
	});

	it("refuses a manifest fetched under the wrong URL for the caller's arch", () => {
		expect(() => parse(manifest(), manifestUrl, "arm64")).toThrow("is for x64, not arm64");
	});
});
