import { createHash } from "node:crypto";
import {
	lstat,
	mkdir,
	mkdtemp,
	readFile,
	rename,
	rm,
	utimes,
	writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import * as path from "node:path";
import { SIDECAR_PROTOCOL_MAJOR } from "@anysphere/computer-use/protocol";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
	parseManifest,
	resolveMacHelperAppForLaunch,
	type SidecarDownloadDependencies,
	verifyUniversalMachO,
} from "./sidecar-download";
import { MAC_DEV_HELPER_IDENTITY } from "./helper-discovery";
import {
	SIDECAR_INSTALL_LOCK_NAME,
	SIDECAR_INSTALL_LOCK_STALE_AFTER_MS,
	SidecarInstallLockedError,
} from "../common/sidecar-install-lock";

const SOURCE_SHA = "b".repeat(40);
const MANIFEST_URL =
	`https://downloads.cursor.com/computer-use-sidecar/releases/explicit/` +
	`3.21.0/${SOURCE_SHA}.json`;
const SECOND_SOURCE_SHA = "c".repeat(40);
const SECOND_MANIFEST_URL =
	`https://downloads.cursor.com/computer-use-sidecar/releases/explicit/` +
	`3.22.0/${SECOND_SOURCE_SHA}.json`;
const APP_NAME = "Cursor Computer Use.app";
const tempDirs: string[] = [];
let homeDir: string;

function universalMachO(
	firstCpu = 0x0100000c,
	secondCpu = 0x01000007
): Buffer {
	const executable = Buffer.alloc(50);
	executable.writeUInt32BE(0xcafebabe, 0);
	executable.writeUInt32BE(2, 4);
	for (const [index, cpuType] of [firstCpu, secondCpu].entries()) {
		const entry = 8 + index * 20;
		executable.writeUInt32BE(cpuType, entry);
		executable.writeUInt32BE(48 + index, entry + 8);
		executable.writeUInt32BE(1, entry + 12);
	}
	return executable;
}

const UNIVERSAL_EXECUTABLE = universalMachO();

interface ZipEntryFixture {
	name: string;
	mode: number;
	content?: string | Buffer;
	crc32?: number;
}

function crc32(bytes: Buffer): number {
	let crc = 0xffffffff;
	for (const byte of bytes) {
		crc ^= byte;
		for (let bit = 0; bit < 8; bit += 1) {
			crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
		}
	}
	return (crc ^ 0xffffffff) >>> 0;
}

function makeZip(
	entries: readonly ZipEntryFixture[],
	comment = ""
): Buffer {
	const localRecords: Buffer[] = [];
	const centralRecords: Buffer[] = [];
	let localOffset = 0;
	for (const entry of entries) {
		const name = Buffer.from(entry.name);
		const content = Buffer.from(entry.content ?? "");
		const checksum = entry.crc32 ?? crc32(content);
		const local = Buffer.alloc(30 + name.length + content.length);
		local.writeUInt32LE(0x04034b50, 0);
		local.writeUInt16LE(20, 4);
		local.writeUInt16LE(0x800, 6);
		local.writeUInt32LE(checksum, 14);
		local.writeUInt32LE(content.length, 18);
		local.writeUInt32LE(content.length, 22);
		local.writeUInt16LE(name.length, 26);
		name.copy(local, 30);
		content.copy(local, 30 + name.length);
		localRecords.push(local);

		const central = Buffer.alloc(46 + name.length);
		central.writeUInt32LE(0x02014b50, 0);
		central.writeUInt16LE((3 << 8) | 20, 4);
		central.writeUInt16LE(20, 6);
		central.writeUInt16LE(0x800, 8);
		central.writeUInt32LE(checksum, 16);
		central.writeUInt32LE(content.length, 20);
		central.writeUInt32LE(content.length, 24);
		central.writeUInt16LE(name.length, 28);
		central.writeUInt32LE((entry.mode << 16) >>> 0, 38);
		central.writeUInt32LE(localOffset, 42);
		name.copy(central, 46);
		centralRecords.push(central);
		localOffset += local.length;
	}
	const central = Buffer.concat(centralRecords);
	const commentBytes = Buffer.from(comment);
	const end = Buffer.alloc(22 + commentBytes.length);
	end.writeUInt32LE(0x06054b50, 0);
	end.writeUInt16LE(entries.length, 8);
	end.writeUInt16LE(entries.length, 10);
	end.writeUInt32LE(central.length, 12);
	end.writeUInt32LE(localOffset, 16);
	end.writeUInt16LE(commentBytes.length, 20);
	commentBytes.copy(end, 22);
	return Buffer.concat([...localRecords, central, end]);
}

function validEntries(
	executable?: Partial<ZipEntryFixture>
): ZipEntryFixture[] {
	return [
		{ name: `${APP_NAME}/`, mode: 0o040755 },
		{ name: `${APP_NAME}/Contents/`, mode: 0o040755 },
		{
			name: `${APP_NAME}/Contents/Info.plist`,
			mode: 0o100644,
			content: "plist",
		},
		{ name: `${APP_NAME}/Contents/MacOS/`, mode: 0o040755 },
		{
			name: `${APP_NAME}/Contents/MacOS/CUCursorService`,
			mode: 0o100755,
			content: UNIVERSAL_EXECUTABLE,
			...executable,
		},
	];
}

function releaseManifest(
	artifact: Buffer,
	options: { sourceSha?: string; cursorVersion?: string } = {}
) {
	const digest = createHash("sha256").update(artifact).digest("hex");
	const name = "Cursor-Computer-Use-0.0.14-universal.zip";
	const sourceSha = options.sourceSha ?? SOURCE_SHA;
	return {
		schemaVersion: 1,
		lane: "explicit",
		sourceBranch: "main",
		sourceSha,
		runtimeSha: sourceSha,
		cursorVersion: options.cursorVersion ?? "3.21.0",
		sidecarVersion: "0.0.14",
		sidecarBuild: 14,
		parentPipeline: null,
		parentBuildId: null,
		protocolMajor: SIDECAR_PROTOCOL_MAJOR,
		toolchain: { xcodeVersion: "26.0", swiftVersion: "6.2" },
		artifact: {
			name,
			sha256: digest,
			bytes: artifact.length,
			url:
				`https://downloads.cursor.com/computer-use-sidecar/artifacts/` +
				`sha256/${digest}/${name}`,
		},
		app: {
			name: APP_NAME,
			bytes: 5 + UNIVERSAL_EXECUTABLE.length,
			bundleIdentifier: "co.anysphere.cursor-computer-use",
			teamIdentifier: "DCNK4UB866",
			designatedRequirement: "published requirement",
			entitlements: {
				"pipeline.fixture-entitlement": true,
			},
			architectures: ["arm64", "x86_64"],
		},
		executable: {
			name: "CUCursorService",
			unsignedSha256: "1".repeat(64),
			signedSha256: createHash("sha256")
				.update(UNIVERSAL_EXECUTABLE)
				.digest("hex"),
			bytes: UNIVERSAL_EXECUTABLE.length,
		},
		notarization: {
			status: "Accepted",
			submissionId: "notary-id",
			stapled: true,
		},
	};
}

function response(value: string | Buffer, status = 200): Response {
	const bytes = Buffer.from(value);
	return new Response(bytes, {
		status,
		headers: { "content-length": String(bytes.length) },
	});
}

function fixture(
	artifact: Buffer,
	options?: {
		failTool?: string;
		artifactResponse?: Buffer;
		manifest?: ReturnType<typeof releaseManifest>;
		manifestUrl?: string;
	}
) {
	const manifest = options?.manifest ?? releaseManifest(artifact);
	const manifestUrl = options?.manifestUrl ?? MANIFEST_URL;
	const fetches: Array<{ url: string; init: RequestInit }> = [];
	const tools: string[] = [];
	const dependencies: SidecarDownloadDependencies = {
		fetch: async (url, init) => {
			fetches.push({ url, init });
			return response(
				url === manifestUrl
					? JSON.stringify(manifest)
					: options?.artifactResponse ?? artifact
			);
		},
		runTool: async (command, args) => {
			const call = `${command} ${args.join(" ")}`;
			tools.push(call);
			if (command === "/usr/bin/lipo" || command === "/usr/bin/xcrun") {
				throw new Error("developer tools unavailable");
			}
			if (options?.failTool && call.includes(options.failTool)) {
				throw new Error("stubbed verifier rejection");
			}
			return { stdout: "", stderr: "" };
		},
		assertNoRunningHelper: async () => { },
	};
	return {
		dependencies,
		fetches,
		tools,
		install: (
			signal = new AbortController().signal,
			log?: (message: string) => void
		) =>
			resolveMacHelperAppForLaunch({
				builtProduct: true,
				env: {},
				homeDir,
				manifestUrl,
				signal,
				dependencies,
				log,
			}),
	};
}

beforeEach(async () => {
	homeDir = await mkdtemp(path.join(tmpdir(), "sidecar-download-"));
	tempDirs.push(homeDir);
});

afterEach(async () => {
	await Promise.all(
		tempDirs.splice(0).map(directory =>
			rm(directory, { recursive: true, force: true })
		)
	);
});

describe("manifest admission", () => {
	it.each([
		["mutable path", "https://downloads.cursor.com/computer-use-sidecar/latest.json", {}],
		["off-domain", MANIFEST_URL.replace("downloads.cursor.com", "example.com"), {}],
		["query", `${MANIFEST_URL}?latest=1`, {}],
		["unknown field", MANIFEST_URL, { extra: true }],
		["wrong protocol", MANIFEST_URL, { protocolMajor: SIDECAR_PROTOCOL_MAJOR + 1 }],
		["identity mismatch", MANIFEST_URL, { cursorVersion: "3.21.1" }],
	])("rejects %s", (_name, url, patch) => {
		const artifact = makeZip(validEntries());
		expect(() =>
			parseManifest({
				raw: JSON.stringify({ ...releaseManifest(artifact), ...patch }),
				manifestUrl: url as string,
			})
		).toThrow();
	});

	it("does not impose product policy on entitlement metadata", () => {
		const artifact = makeZip(validEntries());
		const manifest = releaseManifest(artifact);
		expect(() =>
			parseManifest({
				raw: JSON.stringify({
					...manifest,
					app: {
						...manifest.app,
						entitlements: {
							"pipeline.producer-owned-entitlement": true,
						},
					},
				}),
				manifestUrl: MANIFEST_URL,
			})
		).not.toThrow();
		expect(() =>
			parseManifest({
				raw: JSON.stringify({
					...manifest,
					app: {
						...manifest.app,
						entitlements: {
							"pipeline.producer-owned-entitlement": "invalid",
						},
					},
				}),
				manifestUrl: MANIFEST_URL,
			})
		).toThrow("manifest schema is invalid");
	});
});

describe("archive and install boundary", () => {
	it("parses exactly arm64 and x86_64 from the fat Mach-O header", () => {
		expect(() => verifyUniversalMachO(UNIVERSAL_EXECUTABLE)).not.toThrow();
		expect(() =>
			verifyUniversalMachO(universalMachO(0x0100000c, 0x0100000c))
		).toThrow("not universal");
	});

	it("throws in Dev without a local helper but preserves CUA_SERVICE_APP", async () => {
		const artifact = makeZip(validEntries());
		const testFixture = fixture(artifact);
		const options = {
			builtProduct: false,
			homeDir,
			manifestUrl: MANIFEST_URL,
			signal: new AbortController().signal,
			dependencies: testFixture.dependencies,
		};

		await expect(
			resolveMacHelperAppForLaunch({ ...options, env: {} })
		).rejects.toThrow("signed Labs or production Cursor client");
		await expect(
			resolveMacHelperAppForLaunch({
				...options,
				env: { CUA_SERVICE_APP: "/unsafe-local-helper.app" },
			})
		).resolves.toEqual({
			appPath: "/unsafe-local-helper.app",
			source: "env-override",
			identity: MAC_DEV_HELPER_IDENTITY,
		});
		expect(testFixture.fetches).toHaveLength(0);
	});

	it("uses the existing dev-install in Dev instead of the CDN", async () => {
		const devInstall = path.join(
			homeDir,
			".cursor",
			"computer-use-sidecar-dev",
			"Cursor Computer Use Dev.app"
		);
		await mkdir(path.join(devInstall, "Contents"), { recursive: true });
		await writeFile(path.join(devInstall, "Contents", "Info.plist"), "plist");
		const testFixture = fixture(makeZip(validEntries()));

		await expect(
			resolveMacHelperAppForLaunch({
				builtProduct: false,
				env: {},
				homeDir,
				manifestUrl: MANIFEST_URL,
				signal: new AbortController().signal,
				dependencies: testFixture.dependencies,
			})
		).resolves.toEqual({
			appPath: devInstall,
			source: "dev-install",
			identity: MAC_DEV_HELPER_IDENTITY,
		});
		expect(testFixture.fetches).toHaveLength(0);
	});

	it.each([
		["traversal", { name: `${APP_NAME}/../escape`, mode: 0o100644 }],
		["dot segment", { name: `${APP_NAME}/Contents/./extra`, mode: 0o100644 }],
		["symlink", { name: `${APP_NAME}/link`, mode: 0o120777 }],
		["special file", { name: `${APP_NAME}/fifo`, mode: 0o010644 }],
		["case collision", { name: `${APP_NAME}/contents/info.plist`, mode: 0o100644 }],
	])("rejects %s entries", async (_name, extra) => {
		const artifact = makeZip([...validEntries(), extra]);
		const testFixture = fixture(artifact);
		await expect(testFixture.install()).rejects.toThrow();
		expect(testFixture.tools).toHaveLength(0);
	});

	it.each([
		["binary without owner-execute", { mode: 0o100011 }],
		["wrong decompressed CRC", { crc32: 1 }],
	])("rejects %s", async (_name, executable) => {
		const artifact = makeZip(validEntries(executable));
		const testFixture = fixture(artifact);
		await expect(testFixture.install()).rejects.toThrow();
		expect(testFixture.tools).toHaveLength(0);
	});

	it("checks the artifact digest before platform verification", async () => {
		const artifact = makeZip(validEntries());
		const corrupted = Buffer.from(artifact);
		corrupted[35] ^= 1;
		const testFixture = fixture(artifact, { artifactResponse: corrupted });
		await expect(testFixture.install()).rejects.toThrow(
			"SHA-256 did not match"
		);
		expect(testFixture.tools).toHaveLength(0);
	});

	it.each(["/usr/bin/codesign", "/usr/sbin/spctl"])(
		"publishes no cache when %s rejects",
		async failTool => {
			const artifact = makeZip(validEntries());
			const testFixture = fixture(artifact, { failTool });
			await expect(testFixture.install()).rejects.toThrow(
				"stubbed verifier rejection"
			);
		}
	);

	it("selects the signed-product CDN helper, reuses cache, and repairs it", async () => {
		const artifact = makeZip(validEntries());
		const testFixture = fixture(artifact);
		const installRoot = path.join(
			homeDir,
			".cursor",
			"computer-use-sidecar"
		);
		const ignoredLegacyApp = path.join(
			installRoot,
			"f".repeat(64),
			APP_NAME
		);
		await mkdir(ignoredLegacyApp, { recursive: true });
		const first = await testFixture.install();
		const second = await testFixture.install();
		if (!first || !second) {
			throw new Error("sidecar was not selected");
		}
		expect(first.appPath).toBe(path.join(installRoot, APP_NAME));
		expect(second.appPath).toBe(first.appPath);
		expect(
			JSON.parse(
				await readFile(path.join(installRoot, "installed.json"), "utf8")
			)
		).toEqual({ schemaVersion: 1, manifestUrl: MANIFEST_URL });
		expect(
			testFixture.fetches.filter(({ url }) => url !== MANIFEST_URL)
		).toHaveLength(1);
		expect(
			testFixture.tools.some(tool => /\/(lipo|xcrun)\b/.test(tool))
		).toBe(false);

		await writeFile(
			path.join(first.appPath, EXECUTABLE_RELATIVE_PATH),
			Buffer.alloc(UNIVERSAL_EXECUTABLE.length),
			{ mode: 0o755 }
		);
		await testFixture.install();
		expect(
			testFixture.fetches.filter(({ url }) => url !== MANIFEST_URL)
		).toHaveLength(2);
		await expect(
			readFile(path.join(first.appPath, EXECUTABLE_RELATIVE_PATH))
		).resolves.toEqual(UNIVERSAL_EXECUTABLE);

		const currentArtifact = makeZip(validEntries(), "current");
		const currentFixture = fixture(currentArtifact, {
			manifest: releaseManifest(currentArtifact, {
				sourceSha: SECOND_SOURCE_SHA,
				cursorVersion: "3.22.0",
			}),
			manifestUrl: SECOND_MANIFEST_URL,
		});
		const upgraded = await currentFixture.install();
		expect(upgraded?.appPath).toBe(first.appPath);
		expect(
			JSON.parse(
				await readFile(path.join(installRoot, "installed.json"), "utf8")
			)
		).toEqual({
			schemaVersion: 1,
			manifestUrl: SECOND_MANIFEST_URL,
		});
	});

	it("fails before publication while another helper is active", async () => {
		const artifact = makeZip(validEntries());
		const installRoot = path.join(
			homeDir,
			".cursor",
			"computer-use-sidecar"
		);
		const running = fixture(artifact);
		running.dependencies.assertNoRunningHelper = async () => {
			throw new Error("Another Cursor Computer Use helper is running");
		};
		await expect(running.install()).rejects.toThrow(
			"Another Cursor Computer Use helper is running"
		);
		await expect(lstat(path.join(installRoot, APP_NAME))).rejects.toMatchObject({
			code: "ENOENT",
		});
	});

	it("takes over an install lock that a closed window never released", async () => {
		const installRoot = path.join(homeDir, ".cursor", "computer-use-sidecar");
		const lockPath = path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME);
		// What an older build leaves when its window quits mid-install: an
		// empty lock directory with no owner record, weeks old.
		await mkdir(lockPath, { recursive: true });
		const weeksAgo = new Date(Date.now() - 21 * 24 * 60 * 60_000);
		await utimes(lockPath, weeksAgo, weeksAgo);
		const logs: string[] = [];

		const installed = await fixture(makeZip(validEntries())).install(
			undefined,
			message => logs.push(message)
		);

		expect(installed?.appPath).toBe(path.join(installRoot, APP_NAME));
		await expect(lstat(lockPath)).rejects.toMatchObject({ code: "ENOENT" });
		expect(logs).toEqual([
			"recovered a stale Cursor Computer Use install lock (no owner record, 30240 min old)",
		]);
	});

	it("still waits for an install lock another window has just taken", async () => {
		const installRoot = path.join(homeDir, ".cursor", "computer-use-sidecar");
		const lockPath = path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME);
		await mkdir(lockPath, { recursive: true });
		const recent = new Date(Date.now() - SIDECAR_INSTALL_LOCK_STALE_AFTER_MS / 2);
		await utimes(lockPath, recent, recent);

		await expect(fixture(makeZip(validEntries())).install()).rejects.toBeInstanceOf(
			SidecarInstallLockedError
		);
		expect((await lstat(lockPath)).isDirectory()).toBe(true);
		await expect(lstat(path.join(installRoot, APP_NAME))).rejects.toMatchObject({
			code: "ENOENT",
		});
	});

	it("recovers one interrupted swap", async () => {
		const artifact = makeZip(validEntries());
		const testFixture = fixture(artifact);
		const installed = await testFixture.install();
		if (installed === undefined) {
			throw new Error("sidecar was not selected");
		}
		const installRoot = path.dirname(installed.appPath);
		const metadataPath = path.join(installRoot, "installed.json");
		await rename(installed.appPath, path.join(installRoot, ".previous"));
		await rm(metadataPath);

		await expect(testFixture.install()).resolves.toEqual(installed);
		await expect(lstat(path.join(installRoot, ".previous"))).rejects.toMatchObject({
			code: "ENOENT",
		});
	});

	it("keeps the stable app when the backup rename fails", async () => {
		const installed = await fixture(makeZip(validEntries())).install();
		if (installed === undefined) {
			throw new Error("sidecar was not selected");
		}
		const installRoot = path.dirname(installed.appPath);
		await writeFile(path.join(installRoot, ".previous"), "blocked");
		const currentArtifact = makeZip(validEntries(), "current");
		const currentFixture = fixture(currentArtifact, {
			manifest: releaseManifest(currentArtifact, {
				sourceSha: SECOND_SOURCE_SHA,
				cursorVersion: "3.22.0",
			}),
			manifestUrl: SECOND_MANIFEST_URL,
		});

		await expect(currentFixture.install()).rejects.toThrow();
		await expect(
			readFile(path.join(installed.appPath, EXECUTABLE_RELATIVE_PATH))
		).resolves.toEqual(UNIVERSAL_EXECUTABLE);
	});

	it("retries transient responses, refuses redirects, and supports cancellation", async () => {
		const artifact = makeZip(validEntries());
		const manifest = releaseManifest(artifact);
		let attempts = 0;
		const retrying = fixture(artifact);
		retrying.dependencies.fetch = async (url, init) => {
			retrying.fetches.push({ url, init });
			if (url === MANIFEST_URL && attempts++ < 2) {
				return response("", 503);
			}
			return response(
				url === MANIFEST_URL ? JSON.stringify(manifest) : artifact
			);
		};
		await retrying.install();
		expect(attempts).toBe(3);
		expect(retrying.fetches[0].init.redirect).toBe("manual");

		const redirected = fixture(artifact);
		redirected.dependencies.fetch = async () =>
			new Response("", {
				status: 302,
				headers: { location: "https://example.com/sidecar" },
			});
		await expect(redirected.install()).rejects.toThrow("redirects are refused");

		const controller = new AbortController();
		const pending = fixture(artifact);
		pending.dependencies.fetch = async (_url, init) =>
			new Promise((_resolve, reject) => {
				init.signal?.addEventListener("abort", () => reject(init.signal?.reason), {
					once: true,
				});
			});
		const resolution = pending.install(controller.signal);
		controller.abort(new Error("cancelled"));
		await expect(resolution).rejects.toThrow("cancelled");
	});
});

const EXECUTABLE_RELATIVE_PATH = "Contents/MacOS/CUCursorService";
