import { createHash } from "node:crypto";
import {
	lstat,
	mkdir,
	mkdtemp,
	readdir,
	readFile,
	rename,
	rm,
	writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import * as path from "node:path";
import { SIDECAR_PROTOCOL_MAJOR } from "@anysphere/computer-use/protocol";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ComputerUseRPCError } from "../common/errors";

/**
 * Stands in for Windows refusing a rename while a scanner holds the source
 * open: the next `remaining` renames onto a path ending in `denyRenamesOnto`
 * fail with `EBUSY`. Everything else in `node:fs/promises` is real.
 */
const renameFailures = vi.hoisted(() => ({ remaining: 0, denyRenamesOnto: "" }));

vi.mock("node:fs/promises", async importOriginal => {
	const actual = await importOriginal<typeof import("node:fs/promises")>();
	return {
		...actual,
		rename: async (...args: Parameters<typeof actual.rename>) => {
			if (
				renameFailures.remaining > 0 &&
				renameFailures.denyRenamesOnto !== "" &&
				String(args[1]).endsWith(renameFailures.denyRenamesOnto)
			) {
				renameFailures.remaining -= 1;
				throw Object.assign(new Error("EBUSY: resource busy or locked"), {
					code: "EBUSY",
				});
			}
			return actual.rename(...args);
		},
	};
});
import {
	SIDECAR_INSTALL_LOCK_NAME,
	SIDECAR_INSTALL_LOCK_OWNER_NAME,
} from "../common/sidecar-install-lock";
import {
	WINDOWS_SIDECAR_EXECUTABLE_NAME,
	WINDOWS_SIDECAR_INSTALL_METADATA_NAME,
	hasCommittedWindowsSidecarInstall,
	windowsSidecarInstallRoot,
} from "./pipe-discovery";
import {
	CURSOR_PRODUCT_PROFILE,
	WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS,
} from "./product-profile";
import {
	windowsSidecarArtifactName,
	windowsSidecarArtifactPath,
	windowsSidecarManifestPath,
	type WindowsSidecarArch,
} from "./release-manifest";
import {
	WINDOWS_SIDECAR_CACHED_MANIFEST_NAME,
	WINDOWS_SIDECAR_REFRESH_BACKOFF_MS,
	WINDOWS_SIDECAR_RETRY_INTERVAL_MS,
	WindowsSidecarInstaller,
	WindowsSidecarUnavailableError,
	compareCursorVersions,
	hostVersionMeetsWindowsFloor,
	verifyWindowsExecutableImage,
	type WindowsSidecarDownloadDependencies,
	type WindowsSidecarFailureCode,
	type WindowsSidecarInstallerOptions,
	type WindowsSidecarLogLevel,
} from "./sidecar-download";
import type { SignerVerdict } from "./signer";

const PROFILE = CURSOR_PRODUCT_PROFILE;
const TARGETS = { x64: "x86_64-pc-windows-msvc", arm64: "aarch64-pc-windows-msvc" } as const;
const HOST = "https://downloads.cursor.com";
const SOURCE_SHA = "b".repeat(40);
const SECOND_SOURCE_SHA = "c".repeat(40);
const PINNED: SignerVerdict = { kind: "trusted", subject: "Anysphere, Inc." };

function manifestUrl(sourceSha = SOURCE_SHA, arch: WindowsSidecarArch = "x64"): string {
	return `${HOST}${windowsSidecarManifestPath({
		lane: "explicit",
		cursorVersion: "3.21.0-pre.4",
		sourceSha,
		arch,
	})}`;
}

/** A minimal PE32+ image: MZ stub, PE signature, machine field, optional-header magic. */
function fakeExecutable(arch: WindowsSidecarArch = "x64", fill = 0x61): Buffer {
	const bytes = Buffer.alloc(0x200, fill);
	bytes.writeUInt16LE(0x5a4d, 0);
	bytes.writeUInt32LE(0x80, 0x3c);
	bytes.writeUInt32LE(0x00004550, 0x80);
	bytes.writeUInt16LE(arch === "x64" ? 0x8664 : 0xaa64, 0x84);
	bytes.writeUInt16LE(0x20b, 0x80 + 24);
	return bytes;
}

function sha256(bytes: Buffer): string {
	return createHash("sha256").update(bytes).digest("hex");
}

function releaseManifest(
	artifact: Buffer,
	options: { sourceSha?: string; arch?: WindowsSidecarArch; sidecarVersion?: string } = {}
) {
	const arch = options.arch ?? "x64";
	const sidecarVersion = options.sidecarVersion ?? "0.1.0";
	const digest = sha256(artifact);
	const name = windowsSidecarArtifactName(sidecarVersion, arch);
	const sourceSha = options.sourceSha ?? SOURCE_SHA;
	return {
		schemaVersion: 1,
		platform: "win32",
		arch,
		lane: "explicit",
		sourceBranch: "main",
		sourceSha,
		runtimeSha: sourceSha,
		cursorVersion: "3.21.0-pre.4",
		sidecarVersion,
		sidecarBuild: 3,
		parentPipeline: null,
		parentBuildId: null,
		protocolMajor: SIDECAR_PROTOCOL_MAJOR,
		toolchain: { rustc: "1.91.1", target: TARGETS[arch] },
		artifact: {
			name,
			sha256: digest,
			bytes: artifact.length,
			url: `${HOST}${windowsSidecarArtifactPath(digest, name)}`,
		},
		executable: {
			name: PROFILE.executableName,
			signedSha256: digest,
			unsignedSha256: "d".repeat(64),
			bytes: artifact.length,
		},
		signature: {
			publisherCommonName: PROFILE.pinnedSignerSubjects[0],
			thumbprint: "a".repeat(40),
			account: "Anysphere",
			profile: "Cursor",
			timestamped: true,
		},
		manifestEmbedded: true,
	};
}

function response(
	value: string | Buffer,
	status = 200,
	headers: Record<string, string> = {}
): Response {
	const bytes = Buffer.from(value);
	return new Response(status >= 300 && status < 400 ? null : bytes, {
		status,
		headers: { "content-length": String(bytes.length), ...headers },
	});
}

interface Harness {
	installer: WindowsSidecarInstaller;
	fetches: string[];
	signerChecks: string[];
	logs: Array<{ level: WindowsSidecarLogLevel; message: string }>;
	clock: { now: number };
	/**
	 * The Statsig stand-in the installer reads on every prepare. Mutable so a
	 * test can change what the next launch sees; `reads` counts the reads.
	 */
	release: { manifestUrl: string | undefined; unreadable: boolean; reads: number };
}

/**
 * The installer's options as the tests spell them: the x64 release URL and
 * whether the config read fails stand in for the reader the installer takes.
 * `manifestUrl` left out is the harness's default release; passed as
 * undefined or empty it is "no release configured".
 */
type HarnessInstallerOptions = Partial<
	Omit<WindowsSidecarInstallerOptions, "readManifestConfig">
> & {
	manifestUrl?: string;
	manifestConfigUnreadable?: boolean;
};

let homeDir: string;
let installRoot: string;
let livePath: string;

beforeEach(async () => {
	homeDir = await mkdtemp(path.join(tmpdir(), "cua-windows-installer-"));
	installRoot = windowsSidecarInstallRoot(homeDir);
	livePath = path.join(installRoot, WINDOWS_SIDECAR_EXECUTABLE_NAME);
});

afterEach(async () => {
	renameFailures.remaining = 0;
	renameFailures.denyRenamesOnto = "";
	await rm(homeDir, { recursive: true, force: true });
});

/**
 * An installer wired to an in-memory CDN. `releases` maps a manifest URL to
 * its manifest and artifact; anything else is a 404. Every seam the real
 * flow shells out through is recorded.
 */
function harness(options: {
	releases?: Array<{ url: string; manifest: ReturnType<typeof releaseManifest>; artifact: Buffer }>;
	fetch?: WindowsSidecarDownloadDependencies["fetch"];
	verdict?: SignerVerdict | ((imagePath: string) => SignerVerdict);
	pidAlive?: boolean;
	installer?: HarnessInstallerOptions;
} = {}): Harness {
	const fetches: string[] = [];
	const signerChecks: string[] = [];
	const logs: Harness["logs"] = [];
	const clock = { now: 1_000_000 };
	const {
		manifestUrl: configuredUrl,
		manifestConfigUnreadable,
		...installerOptions
	} = options.installer ?? {};
	const release: Harness["release"] = {
		manifestUrl:
			options.installer !== undefined && "manifestUrl" in options.installer
				? configuredUrl
				: manifestUrl(),
		unreadable: manifestConfigUnreadable ?? false,
		reads: 0,
	};
	const releases = options.releases ?? [];
	const fetchImpl: WindowsSidecarDownloadDependencies["fetch"] =
		options.fetch ??
		(async url => {
			const release = releases.find(candidate => candidate.url === url);
			if (release !== undefined) {
				return response(JSON.stringify(release.manifest));
			}
			const artifact = releases.find(candidate => candidate.manifest.artifact.url === url);
			if (artifact !== undefined) {
				return response(artifact.artifact);
			}
			return response("", 404);
		});
	const installer = new WindowsSidecarInstaller({
		env: {},
		homeDir,
		allowManifestDownload: true,
		hostVersion: "3.21.0-pre.4",
		nodeArch: "x64",
		log: (level, message) => logs.push({ level, message }),
		...installerOptions,
		readManifestConfig: async () => {
			release.reads += 1;
			if (release.unreadable) {
				throw new Error("statsig unavailable");
			}
			return { x64: release.manifestUrl ?? "", arm64: "" };
		},
		dependencies: {
			fetch: async (url, init) => {
				fetches.push(url);
				return fetchImpl(url, init);
			},
			verifySigner: async imagePath => {
				signerChecks.push(imagePath);
				const verdict = options.verdict ?? PINNED;
				return typeof verdict === "function" ? verdict(imagePath) : verdict;
			},
			backoff: async () => undefined,
			isPidAlive: () => options.pidAlive ?? true,
			now: () => clock.now,
		},
	});
	return { installer, fetches, signerChecks, logs, clock, release };
}

function release(artifact: Buffer, sourceSha = SOURCE_SHA, arch: WindowsSidecarArch = "x64") {
	return {
		url: manifestUrl(sourceSha, arch),
		manifest: releaseManifest(artifact, { sourceSha, arch }),
		artifact,
	};
}

async function place(...segments: string[]): Promise<string> {
	const target = path.join(homeDir, ...segments);
	await mkdir(path.dirname(target), { recursive: true });
	await writeFile(target, "dev");
	return target;
}

async function exists(target: string): Promise<boolean> {
	try {
		await lstat(target);
		return true;
	} catch {
		return false;
	}
}

async function expectFailure(
	harnessUnderTest: Harness,
	code: WindowsSidecarFailureCode,
	retryable: boolean
): Promise<string> {
	const result = await harnessUnderTest.installer.prepare();
	expect(result.ok, `expected ${code}, got ${JSON.stringify(result)}`).toBe(false);
	if (result.ok) {
		throw new Error("unreachable");
	}
	expect(result.failure.code).toBe(code);
	expect(result.failure.retryable).toBe(retryable);
	return result.failure.message;
}

describe("resolution order", () => {
	it("uses CUA_SERVICE_EXE without touching the network or the release config", async () => {
		const override = await place("custom", "sidecar.exe");
		const testHarness = harness({ installer: { env: { CUA_SERVICE_EXE: override } } });

		await expect(testHarness.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: override, source: "env-override" },
		});
		expect(testHarness.fetches).toEqual([]);
		expect(testHarness.release.reads).toBe(0);
	});

	it("installs from the CDN ahead of the dev-install slot", async () => {
		await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		const testHarness = harness({ releases: [release(fakeExecutable())] });

		await expect(testHarness.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: livePath, source: "download-cache" },
		});
	});

	it("falls through to the dev-install slot when the CDN cannot fill an empty cache", async () => {
		const devInstall = await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		const testHarness = harness({
			fetch: async () => {
				throw offlineError();
			},
		});

		await expect(testHarness.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: devInstall, source: "dev-install" },
		});
		expect(testHarness.logs.map(({ level }) => level)).toEqual(["info", "warn"]);
		expect(testHarness.logs[1].message).toContain("[offline]");
		expect(testHarness.logs[1].message).toContain("falling back to the dev-install sidecar");
	});

	// The Statsig fallback is empty for every architecture, so an empty read
	// is indistinguishable from a pulled release here; the message says so.
	it("reports unavailable when nothing is configured and nothing is on disk", async () => {
		const testHarness = harness({ installer: { manifestUrl: "" } });
		const message = await expectFailure(testHarness, "unavailable", false);
		expect(message).toContain("read empty for x64");
		expect(message).toContain("Statsig fallback");
		expect(testHarness.fetches).toEqual([]);
	});

	it("uses the dev-install slot when no release is configured, and says which sidecar it kept", async () => {
		const devInstall = await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		const testHarness = harness({ installer: { manifestUrl: undefined } });

		await expect(testHarness.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: devInstall, source: "dev-install" },
		});
		expect(testHarness.logs).toEqual([
			{
				level: "warn",
				message: expect.stringContaining("release config read empty for x64"),
			},
		]);
		expect(testHarness.logs[0].message).toContain(`the dev-install sidecar at ${devInstall} is kept`);
	});

	// The bug this guards: the config used to be read once at activation,
	// where it raced Statsig's startup hydration, and what it got — the
	// fallback, or the previous session's persisted value — stuck for the
	// session. Every launch now reads it, so the value Statsig serves once it
	// has hydrated is the one the next launch installs. Fallback first:
	it("reads the release config on every launch, so the launch after an empty read installs the release", async () => {
		const artifact = fakeExecutable();
		const testHarness = harness({ releases: [release(artifact)], installer: { manifestUrl: "" } });

		await expect(testHarness.installer.resolveForLaunch()).rejects.toMatchObject({
			failure: { code: "unavailable" },
		});
		expect(testHarness.fetches).toEqual([]);
		expect(testHarness.logs).toEqual([
			{ level: "error", message: expect.stringContaining("[unavailable]") },
		]);
		expect(testHarness.logs[0].message).toContain("read empty for x64");

		// Statsig has loaded. Within the retry interval the refusal is repeated
		// without a re-read (a model cannot turn Statsig into a retry loop)...
		testHarness.release.manifestUrl = manifestUrl();
		await expect(testHarness.installer.resolveForLaunch()).rejects.toMatchObject({
			failure: { code: "unavailable" },
		});
		expect(testHarness.release.reads).toBe(1);

		// ...and the first launch after it reads the config again and installs.
		testHarness.clock.now += WINDOWS_SIDECAR_RETRY_INTERVAL_MS;
		await expect(testHarness.installer.resolveForLaunch()).resolves.toEqual({
			executablePath: livePath,
			source: "download-cache",
		});
		expect(testHarness.release.reads).toBe(2);
		expect(testHarness.fetches).toEqual([manifestUrl(), releaseManifest(artifact).artifact.url]);
		expect(testHarness.logs.slice(1)).toEqual([
			{ level: "info", message: `${PROFILE.productName} release for x64, from the Statsig config: ${manifestUrl()}` },
			{ level: "info", message: expect.stringContaining("installed Cursor Computer Use sidecar 0.1.0 (explicit, bbbbbbbbbbbb) for x64") },
		]);
	});

	// And the path the real box took: the early read returned the previous
	// session's persisted value, which named the release already in the
	// download cache, so the cache hit served the old release (logged as
	// `download-cache`, no warning) and the newer one waited for a restart.
	// The next launch now reads the value Statsig has since hydrated.
	it("reads the release config on every launch, so the launch after a stale read updates to the newer release", async () => {
		const previous = fakeExecutable();
		const newer = fakeExecutable("x64", 0x62);
		// The previous session installed the release the persisted value names.
		await harness({ releases: [release(previous)] }).installer.prepare();

		const testHarness = harness({
			releases: [release(previous), release(newer, SECOND_SOURCE_SHA)],
		});
		await expect(testHarness.installer.resolveForLaunch()).resolves.toEqual({
			executablePath: livePath,
			source: "download-cache",
		});
		expect(testHarness.fetches).toEqual([]);
		await expect(readFile(livePath)).resolves.toEqual(previous);

		// Statsig has hydrated from the network with the newer release.
		testHarness.release.manifestUrl = manifestUrl(SECOND_SOURCE_SHA);
		await expect(testHarness.installer.resolveForLaunch()).resolves.toEqual({
			executablePath: livePath,
			source: "download-cache",
		});
		await expect(readFile(livePath)).resolves.toEqual(newer);
		expect(testHarness.release.reads).toBe(2);
		expect(JSON.parse(await readFile(path.join(installRoot, WINDOWS_SIDECAR_INSTALL_METADATA_NAME), "utf8")).manifestUrl).toBe(
			manifestUrl(SECOND_SOURCE_SHA)
		);
		// The channel names both reads and what each launch ran.
		expect(testHarness.logs).toEqual([
			{ level: "info", message: `${PROFILE.productName} release for x64, from the Statsig config: ${manifestUrl()}` },
			{ level: "info", message: expect.stringContaining("release 0.1.0 (explicit, bbbbbbbbbbbb) is already installed for x64; nothing to download") },
			{ level: "info", message: `${PROFILE.productName} release for x64, from the Statsig config: ${manifestUrl(SECOND_SOURCE_SHA)}` },
			{ level: "info", message: expect.stringContaining("installed Cursor Computer Use sidecar 0.1.0 (explicit, cccccccccccc) for x64") },
		]);
	});

	// A cached release that Statsig no longer points at has been pulled. It
	// must not keep launching just because the bytes are still on disk.
	it("ignores a committed download cache once the release is unconfigured", async () => {
		await harness({ releases: [release(fakeExecutable())] }).installer.prepare();
		expect(hasCommittedWindowsSidecarInstall(homeDir)).toBe(true);

		const testHarness = harness({ installer: { manifestUrl: "" } });
		await expectFailure(testHarness, "unavailable", false);
	});

	// A config that could not be read is not a pull. The committed release is
	// verified against its own cached manifest and served, with no network,
	// and the dev slot is not preferred over it.
	it("keeps serving a verified cache when the release config cannot be read", async () => {
		await harness({ releases: [release(fakeExecutable())] }).installer.prepare();
		await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);

		const testHarness = harness({
			installer: { manifestUrl: undefined, manifestConfigUnreadable: true },
		});
		await expect(testHarness.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: livePath, source: "download-cache" },
		});
		expect(testHarness.fetches).toEqual([]);
		expect(testHarness.signerChecks).toEqual([livePath]);
		// The failed read is logged with its cause, then the release it kept.
		expect(testHarness.logs).toEqual([
			{ level: "warn", message: expect.stringContaining("could not be read") },
			{ level: "warn", message: expect.stringContaining("could not be read") },
		]);
		expect(testHarness.logs[0].message).toContain("statsig unavailable");
		expect(testHarness.logs[1].message).toContain(`using the verified cached release 0.1.0 (explicit, bbbbbbbbbbbb) at ${livePath}`);
		await expect(testHarness.installer.resolveForLaunch()).resolves.toEqual({
			executablePath: livePath,
			source: "download-cache",
		});
	});

	it("does not serve a cache that fails verification while the config is unreadable", async () => {
		await harness({ releases: [release(fakeExecutable())] }).installer.prepare();
		const devInstall = await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);

		const testHarness = harness({
			installer: { manifestUrl: undefined, manifestConfigUnreadable: true },
			verdict: { kind: "unsigned", detail: "NotSigned" },
		});
		await expect(testHarness.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: devInstall, source: "dev-install" },
		});
		expect(testHarness.fetches).toEqual([]);

		await rm(devInstall);
		const nothingElse = harness({
			installer: { manifestUrl: undefined, manifestConfigUnreadable: true },
			verdict: { kind: "unsigned", detail: "NotSigned" },
		});
		const message = await expectFailure(nothingElse, "unavailable", false);
		expect(message).toContain("could not be read");
	});

	it("ignores the manifest in Cursor Dev and uses the local sidecar", async () => {
		const devInstall = await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		const testHarness = harness({
			releases: [release(fakeExecutable())],
			installer: { allowManifestDownload: false },
		});

		await expect(testHarness.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: devInstall, source: "dev-install" },
		});
		expect(testHarness.fetches).toEqual([]);
		expect(testHarness.logs.map(({ level }) => level)).toEqual(["info", "info"]);
		expect(testHarness.logs[0].message).toContain(manifestUrl());
		expect(testHarness.logs[1].message).toContain("Ignoring");
	});

	it("names what Cursor Dev needs when it has no local sidecar", async () => {
		const testHarness = harness({
			releases: [release(fakeExecutable())],
			installer: { allowManifestDownload: false },
		});
		const message = await expectFailure(testHarness, "unavailable", false);
		expect(message).toContain("Cursor Dev");
		expect(message).toContain("CUA_SERVICE_EXE");
		expect(testHarness.fetches).toEqual([]);
	});
});

describe("host checks", () => {
	it("refuses a host below the floor before looking anywhere", async () => {
		const override = await place("custom", "sidecar.exe");
		const testHarness = harness({
			installer: { env: { CUA_SERVICE_EXE: override }, hostVersion: "3.19.0-pre.25" },
		});
		const message = await expectFailure(testHarness, "unsupported_host", false);
		expect(message).toContain("3.20.0-pre.7");
	});

	it.each(["3.20.0-pre.7", "3.20.0-pre.28", "3.20.0", "3.21.0-pre.1", "4.0.0"])(
		"accepts host %s",
		async hostVersion => {
			const testHarness = harness({ releases: [release(fakeExecutable())], installer: { hostVersion } });
			await expect(testHarness.installer.prepare()).resolves.toMatchObject({ ok: true });
		}
	);

	it("refuses an architecture no build is published for, before reading the release config", async () => {
		const testHarness = harness({ installer: { nodeArch: "ia32" } });
		await expectFailure(testHarness, "unsupported_host", false);
		expect(testHarness.fetches).toEqual([]);
		expect(testHarness.release.reads).toBe(0);
	});

	it.each([
		["the other architecture's manifest", manifestUrl(SOURCE_SHA, "arm64")],
		["a mutable pointer", `${HOST}/computer-use-sidecar/latest.json`],
		["the macOS manifest shape", `${HOST}/computer-use-sidecar/releases/explicit/3.21.0/${SOURCE_SHA}.json`],
		["another host", manifestUrl().replace("downloads.cursor.com", "example.com")],
	])("refuses %s as config_invalid without fetching", async (_name, url) => {
		const testHarness = harness({ installer: { manifestUrl: url } });
		await expectFailure(testHarness, "config_invalid", false);
		expect(testHarness.fetches).toEqual([]);
	});
});

describe("install, cache, and update", () => {
	it("installs a fresh release: verified, swapped in, committed", async () => {
		const artifact = fakeExecutable();
		const testHarness = harness({ releases: [release(artifact)] });

		const result = await testHarness.installer.prepare();

		expect(result).toEqual({
			ok: true,
			resolved: { executablePath: livePath, source: "download-cache" },
		});
		expect(testHarness.fetches).toEqual([manifestUrl(), releaseManifest(artifact).artifact.url]);
		await expect(readFile(livePath)).resolves.toEqual(artifact);
		expect(JSON.parse(await readFile(path.join(installRoot, WINDOWS_SIDECAR_INSTALL_METADATA_NAME), "utf8"))).toEqual({
			schemaVersion: 1,
			manifestUrl: manifestUrl(),
			sha256: sha256(artifact),
		});
		expect(JSON.parse(await readFile(path.join(installRoot, WINDOWS_SIDECAR_CACHED_MANIFEST_NAME), "utf8"))).toEqual(
			releaseManifest(artifact)
		);
		// Authenticode ran on the staged copy, before it took the live name.
		expect(testHarness.signerChecks).toHaveLength(1);
		expect(path.basename(testHarness.signerChecks[0])).toMatch(/^\.staged-/);
		expect((await readdir(installRoot)).sort()).toEqual(
			[WINDOWS_SIDECAR_EXECUTABLE_NAME, WINDOWS_SIDECAR_INSTALL_METADATA_NAME, WINDOWS_SIDECAR_CACHED_MANIFEST_NAME].sort()
		);
		expect(hasCommittedWindowsSidecarInstall(homeDir)).toBe(true);
	});

	it("serves a committed install from the cache without touching the network", async () => {
		const artifact = fakeExecutable();
		const first = harness({ releases: [release(artifact)] });
		await first.installer.prepare();

		// A new extension host: nothing memoized, same configured release.
		const second = harness({
			fetch: async () => {
				throw new Error("the network must not be touched");
			},
		});
		await expect(second.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: livePath, source: "download-cache" },
		});
		expect(second.fetches).toEqual([]);
		// The cached image is still checked before it is trusted.
		expect(second.signerChecks).toEqual([livePath]);
		// The channel still answers "which sidecar" on a cache hit: the release
		// read, then the version it already had.
		expect(second.logs).toEqual([
			{ level: "info", message: expect.stringContaining(manifestUrl()) },
			{
				level: "info",
				message: expect.stringContaining(
					"release 0.1.0 (explicit, bbbbbbbbbbbb) is already installed for x64; nothing to download"
				),
			},
		]);
	});

	it("pays Authenticode once per distinct bytes within a session", async () => {
		const testHarness = harness({ releases: [release(fakeExecutable())] });
		await testHarness.installer.prepare();
		await testHarness.installer.prepare();
		await testHarness.installer.verifySigner(livePath);
		await testHarness.installer.resolveForLaunch();

		expect(testHarness.signerChecks).toHaveLength(1);
	});

	it("does not cache an unverifiable verdict", async () => {
		let calls = 0;
		const testHarness = harness({
			releases: [release(fakeExecutable())],
			verdict: () => (calls++ === 0 ? { kind: "unverifiable", detail: "powershell missing" } : PINNED),
		});
		await expect(testHarness.installer.prepare()).resolves.toMatchObject({
			ok: false,
			failure: { code: "signature_unverifiable", retryable: true },
		});
		testHarness.clock.now += WINDOWS_SIDECAR_REFRESH_BACKOFF_MS + 1;
		await expect(testHarness.installer.prepare()).resolves.toMatchObject({ ok: true });
		expect(testHarness.signerChecks).toHaveLength(2);
	});

	// The signer check not running says nothing about the bytes. It must not
	// read as a foreign signature (which would unregister Computer Use for the
	// session), and a new download would meet the same check, so the CDN is
	// left alone for the backoff window.
	it("reports a signer check that could not run as retryable and does not re-download for the backoff window", async () => {
		const testHarness = harness({
			releases: [release(fakeExecutable())],
			verdict: { kind: "unverifiable", detail: "powershell failed to start" },
		});
		const message = await expectFailure(testHarness, "signature_unverifiable", true);
		expect(message).toContain("could not be checked");
		expect(await exists(livePath)).toBe(false);
		expect(hasCommittedWindowsSidecarInstall(homeDir)).toBe(false);

		const attempts = testHarness.fetches.length;
		await expectFailure(testHarness, "signature_unverifiable", true);
		expect(testHarness.fetches).toHaveLength(attempts);

		testHarness.clock.now += WINDOWS_SIDECAR_REFRESH_BACKOFF_MS;
		await expectFailure(testHarness, "signature_unverifiable", true);
		expect(testHarness.fetches.length).toBeGreaterThan(attempts);
	});

	it("keeps a committed install whose signer check could not run, and neither launches nor replaces it", async () => {
		const artifact = fakeExecutable();
		await harness({ releases: [release(artifact)] }).installer.prepare();

		const testHarness = harness({
			releases: [release(artifact)],
			verdict: { kind: "unverifiable", detail: "powershell failed to start" },
		});
		await expectFailure(testHarness, "signature_unverifiable", true);
		expect(testHarness.fetches).toEqual([]);
		await expect(readFile(livePath)).resolves.toEqual(artifact);
		expect(hasCommittedWindowsSidecarInstall(homeDir)).toBe(true);
		expect(testHarness.logs.some(({ message }) => message.includes("kept but not launched"))).toBe(true);
		expect(testHarness.logs.some(({ message }) => message.includes("will be replaced"))).toBe(false);
		await expect(testHarness.installer.resolveForLaunch()).rejects.toMatchObject({
			failure: { code: "signature_unverifiable" },
		});
		// The launch path logs the refusal it hands the model, and says the
		// next tool call tries again.
		expect(testHarness.logs.at(-1)).toEqual({
			level: "error",
			message: expect.stringContaining("[signature_unverifiable]"),
		});
		expect(testHarness.logs.at(-1)?.message).toContain("retried on the next tool call");
	});

	it("keeps a verified cache when the release refresh fails offline", async () => {
		const artifact = fakeExecutable();
		await harness({ releases: [release(artifact)] }).installer.prepare();

		const offline = harness({
			fetch: async () => {
				throw offlineError();
			},
			installer: { manifestUrl: manifestUrl(SECOND_SOURCE_SHA) },
		});
		await expect(offline.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: livePath, source: "download-cache" },
		});
		// Only the manifest was attempted (with its retries); no artifact.
		expect(new Set(offline.fetches)).toEqual(new Set([manifestUrl(SECOND_SOURCE_SHA)]));
		expect(offline.logs.some(({ message }) => message.includes("using the cached"))).toBe(true);
		// The commit record still names the release that is actually installed.
		expect(JSON.parse(await readFile(path.join(installRoot, WINDOWS_SIDECAR_INSTALL_METADATA_NAME), "utf8")).manifestUrl).toBe(
			manifestUrl()
		);
	});

	it("stops asking the CDN for the backoff window while a verified cache serves", async () => {
		const artifact = fakeExecutable();
		await harness({ releases: [release(artifact)] }).installer.prepare();
		const offline = harness({
			fetch: async () => {
				throw offlineError();
			},
			installer: { manifestUrl: manifestUrl(SECOND_SOURCE_SHA) },
		});

		await expect(offline.installer.prepare()).resolves.toMatchObject({ ok: true });
		const attempts = offline.fetches.length;
		await expect(offline.installer.prepare()).resolves.toMatchObject({ ok: true });
		await expect(offline.installer.resolveForLaunch()).resolves.toMatchObject({ source: "download-cache" });
		expect(offline.fetches).toHaveLength(attempts);

		offline.clock.now += WINDOWS_SIDECAR_REFRESH_BACKOFF_MS;
		await expect(offline.installer.prepare()).resolves.toMatchObject({ ok: true });
		expect(offline.fetches.length).toBeGreaterThan(attempts);
	});

	it("stops asking the CDN for the backoff window while the dev-install slot serves", async () => {
		await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		const offline = harness({
			fetch: async () => {
				throw offlineError();
			},
		});

		await expect(offline.installer.prepare()).resolves.toMatchObject({
			ok: true,
			resolved: { source: "dev-install" },
		});
		const attempts = offline.fetches.length;
		await expect(offline.installer.prepare()).resolves.toMatchObject({
			ok: true,
			resolved: { source: "dev-install" },
		});
		expect(offline.fetches).toHaveLength(attempts);
	});

	it("keeps asking the CDN when nothing else can serve", async () => {
		const offline = harness({
			fetch: async () => {
				throw offlineError();
			},
		});
		await expectFailure(offline, "offline", true);
		const attempts = offline.fetches.length;
		await expectFailure(offline, "offline", true);
		expect(offline.fetches.length).toBeGreaterThan(attempts);
	});

	it("updates to a new release and leaves no retired image behind", async () => {
		const first = fakeExecutable("x64", 0x61);
		await harness({ releases: [release(first)] }).installer.prepare();
		const second = fakeExecutable("x64", 0x62);
		const testHarness = harness({
			releases: [release(second, SECOND_SOURCE_SHA)],
			installer: { manifestUrl: manifestUrl(SECOND_SOURCE_SHA) },
		});

		await expect(testHarness.installer.prepare()).resolves.toMatchObject({ ok: true });
		await expect(readFile(livePath)).resolves.toEqual(second);
		expect(JSON.parse(await readFile(path.join(installRoot, WINDOWS_SIDECAR_INSTALL_METADATA_NAME), "utf8"))).toEqual({
			schemaVersion: 1,
			manifestUrl: manifestUrl(SECOND_SOURCE_SHA),
			sha256: sha256(second),
		});
		expect((await readdir(installRoot)).filter(name => name.startsWith("."))).toEqual([]);
	});

	it("repairs a tampered cache by re-downloading", async () => {
		const artifact = fakeExecutable();
		await harness({ releases: [release(artifact)] }).installer.prepare();
		const tampered = Buffer.from(artifact);
		tampered[0x100] ^= 1;
		await writeFile(livePath, tampered);

		const testHarness = harness({ releases: [release(artifact)] });
		await expect(testHarness.installer.prepare()).resolves.toMatchObject({ ok: true });
		await expect(readFile(livePath)).resolves.toEqual(artifact);
		expect(testHarness.fetches).toHaveLength(2);
		expect(testHarness.logs.some(({ message }) => message.includes("failed verification and will be replaced"))).toBe(true);
	});

	it("recovers an interrupted swap from the retired image", async () => {
		const artifact = fakeExecutable();
		await harness({ releases: [release(artifact)] }).installer.prepare();
		await rename(livePath, path.join(installRoot, ".retired-1-abc.exe"));

		const testHarness = harness({
			fetch: async () => {
				throw offlineError();
			},
		});
		await expect(testHarness.installer.prepare()).resolves.toMatchObject({ ok: true });
		await expect(readFile(livePath)).resolves.toEqual(artifact);
		expect(testHarness.fetches).toEqual([]);
	});

	// The retired image is the only verified copy while the live name is
	// empty. A rename the filesystem refuses must not be followed by a sweep
	// that deletes it; the next pass puts it back.
	it("keeps the retired image when putting it back fails, and recovers it on the next pass", async () => {
		const artifact = fakeExecutable();
		await harness({ releases: [release(artifact)] }).installer.prepare();
		const retiredPath = path.join(installRoot, ".retired-1-abc.exe");
		await rename(livePath, retiredPath);
		renameFailures.denyRenamesOnto = WINDOWS_SIDECAR_EXECUTABLE_NAME;
		renameFailures.remaining = 1;

		const testHarness = harness({
			fetch: async () => {
				throw offlineError();
			},
		});
		await expectFailure(testHarness, "offline", true);
		expect(await exists(livePath)).toBe(false);
		await expect(readFile(retiredPath)).resolves.toEqual(artifact);

		await expect(testHarness.installer.prepare()).resolves.toMatchObject({
			ok: true,
			resolved: { executablePath: livePath, source: "download-cache" },
		});
		await expect(readFile(livePath)).resolves.toEqual(artifact);
		expect(await exists(retiredPath)).toBe(false);
	});

	it("recovers an interrupted swap while the release config is unreadable", async () => {
		const artifact = fakeExecutable();
		await harness({ releases: [release(artifact)] }).installer.prepare();
		await rename(livePath, path.join(installRoot, ".retired-1-abc.exe"));

		const testHarness = harness({
			installer: { manifestUrl: undefined, manifestConfigUnreadable: true },
		});
		await expect(testHarness.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: livePath, source: "download-cache" },
		});
		await expect(readFile(livePath)).resolves.toEqual(artifact);
		expect(testHarness.fetches).toEqual([]);
	});

	it("sweeps staging and metadata leftovers from a crashed install", async () => {
		await mkdir(installRoot, { recursive: true });
		await writeFile(path.join(installRoot, ".staged-deadbeef-1.exe"), "half");
		await writeFile(path.join(installRoot, ".metadata-1"), "half");
		const testHarness = harness({ releases: [release(fakeExecutable())] });

		await testHarness.installer.prepare();

		expect((await readdir(installRoot)).filter(name => name.startsWith("."))).toEqual([]);
	});

	it("rejects the prepare when the caller aborts", async () => {
		const controller = new AbortController();
		let fetchStarted!: () => void;
		const started = new Promise<void>(resolve => {
			fetchStarted = resolve;
		});
		const testHarness = harness({
			fetch: async (_url, init) =>
				new Promise((_resolve, reject) => {
					fetchStarted();
					init.signal?.addEventListener("abort", () => reject(init.signal?.reason), { once: true });
				}),
		});
		const pending = testHarness.installer.prepare(controller.signal);
		await started;
		controller.abort(new Error("cancelled"));
		await expect(pending).rejects.toThrow("cancelled");
		expect(await exists(path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME))).toBe(false);
	});

	it("rejects a prepare whose signal is already aborted before the network is reached", async () => {
		const controller = new AbortController();
		const testHarness = harness({ releases: [release(fakeExecutable())] });
		controller.abort(new Error("cancelled early"));
		await expect(testHarness.installer.prepare(controller.signal)).rejects.toThrow("cancelled early");
		expect(testHarness.fetches).toEqual([]);
	});
});

describe("failure codes", () => {
	function failing(fetchImpl: WindowsSidecarDownloadDependencies["fetch"]) {
		return harness({ fetch: fetchImpl });
	}

	it("classifies name resolution and connection failures as offline", async () => {
		const testHarness = failing(async () => {
			throw offlineError();
		});
		const message = await expectFailure(testHarness, "offline", true);
		expect(message).toContain("could not be reached");
		expect(await exists(installRoot)).toBe(true);
		expect(await exists(livePath)).toBe(false);
	});

	it.each([
		["a 407 from the proxy", async () => response("", 407)],
		["a 401 from the proxy", async () => response("", 401)],
		["a redirect", async () => response("", 302, { location: "https://login.example.com" })],
		["an HTML page in place of the manifest", async () => response("<html>sign in</html>", 200, { "content-type": "text/html; charset=utf-8" })],
		[
			"a TLS chain a corporate proxy re-signed",
			async () => {
				throw fetchFailed("SELF_SIGNED_CERT_IN_CHAIN", "self signed certificate in certificate chain");
			},
		],
	] as const)("classifies %s as proxy_blocked", async (_name, fetchImpl) => {
		await expectFailure(failing(fetchImpl), "proxy_blocked", true);
	});

	it("classifies a missing release as cdn_error", async () => {
		const testHarness = failing(async () => response("", 404));
		const message = await expectFailure(testHarness, "cdn_error", true);
		expect(message).toContain("not be published yet");
	});

	it("retries transient statuses and reports cdn_error once they run out", async () => {
		const testHarness = failing(async () => response("", 503));
		await expectFailure(testHarness, "cdn_error", true);
		expect(testHarness.fetches).toHaveLength(3);
	});

	it("does not retry a permanent refusal", async () => {
		const testHarness = failing(async () => response("", 404));
		await testHarness.installer.prepare();
		expect(testHarness.fetches).toHaveLength(1);
	});

	it("classifies a refused manifest as manifest_invalid", async () => {
		const artifact = fakeExecutable();
		const broken = release(artifact);
		const testHarness = harness({
			releases: [{ ...broken, manifest: { ...broken.manifest, protocolMajor: SIDECAR_PROTOCOL_MAJOR + 1 } }],
		});
		await expectFailure(testHarness, "manifest_invalid", false);
		expect(testHarness.fetches).toHaveLength(1);
	});

	it("classifies bytes that do not match the manifest as download_corrupt", async () => {
		const artifact = fakeExecutable();
		const good = release(artifact);
		const corrupted = Buffer.from(artifact);
		corrupted[0x100] ^= 1;
		const testHarness = harness({ releases: [{ ...good, artifact: corrupted }] });

		await expectFailure(testHarness, "download_corrupt", true);
		expect(await exists(livePath)).toBe(false);
		expect(hasCommittedWindowsSidecarInstall(homeDir)).toBe(false);
	});

	it("classifies a size that disagrees with the manifest as download_corrupt", async () => {
		const artifact = fakeExecutable();
		const good = release(artifact);
		const testHarness = harness({
			fetch: async url =>
				url === good.url
					? response(JSON.stringify(good.manifest))
					: response(Buffer.concat([artifact, Buffer.from("extra")])),
		});
		await expectFailure(testHarness, "download_corrupt", true);
	});

	it("classifies an image signed by somebody else as signature_mismatch and installs nothing", async () => {
		const testHarness = harness({
			releases: [release(fakeExecutable())],
			verdict: { kind: "untrusted-signer", subject: "Contoso Ltd." },
		});
		const message = await expectFailure(testHarness, "signature_mismatch", false);
		expect(message).toContain("Contoso Ltd.");
		expect(await exists(livePath)).toBe(false);
		expect((await readdir(installRoot)).filter(name => name.startsWith(".staged-"))).toEqual([]);
	});

	it("classifies an unsigned image as signature_mismatch", async () => {
		const testHarness = harness({
			releases: [release(fakeExecutable())],
			verdict: { kind: "unsigned", detail: "NotSigned" },
		});
		await expectFailure(testHarness, "signature_mismatch", false);
	});

	it("never lets CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR=1 install or keep an unsigned release", async () => {
		// The developer escape hatch is for the dev-install/CUA_SERVICE_EXE
		// slots at launch time only; a downloaded release is verified the same
		// way with or without it, both when it is first installed and when a
		// cached copy is re-checked.
		const hatch = { CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR: "1" };
		const artifact = fakeExecutable();
		const fresh = harness({
			releases: [release(artifact)],
			verdict: { kind: "unsigned", detail: "NotSigned" },
			installer: { env: hatch },
		});
		await expectFailure(fresh, "signature_mismatch", false);
		expect(await exists(livePath)).toBe(false);
		expect(hasCommittedWindowsSidecarInstall(homeDir)).toBe(false);

		await harness({ releases: [release(artifact)] }).installer.prepare();
		expect(hasCommittedWindowsSidecarInstall(homeDir)).toBe(true);
		const cachedNowUnsigned = harness({
			releases: [release(artifact)],
			verdict: { kind: "unsigned", detail: "NotSigned" },
			installer: { env: hatch },
		});
		await expect(cachedNowUnsigned.installer.prepare()).resolves.toMatchObject({
			ok: false,
			failure: { code: "signature_mismatch" },
		});
		await expect(cachedNowUnsigned.installer.resolveForLaunch()).rejects.toThrow(
			"[signature_mismatch]"
		);
		expect(cachedNowUnsigned.signerChecks.length).toBeGreaterThan(0);
	});

	it("classifies a build for the other architecture as signature_mismatch before Authenticode", async () => {
		const artifact = fakeExecutable("arm64");
		// Manifest says x64; the bytes say arm64.
		const testHarness = harness({ releases: [release(artifact)] });
		await expectFailure(testHarness, "signature_mismatch", false);
		expect(testHarness.signerChecks).toEqual([]);
	});

	it("reports a live lock held by another window as install_locked and does not slide to the dev slot", async () => {
		await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		await mkdir(path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME), { recursive: true });
		await writeFile(
			path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME, SIDECAR_INSTALL_LOCK_OWNER_NAME),
			JSON.stringify({ pid: 77, createdAt: 1_000_000 - 1_000 })
		);
		const testHarness = harness({ releases: [release(fakeExecutable())], pidAlive: true });

		await expectFailure(testHarness, "install_locked", true);
		expect(testHarness.fetches).toEqual([]);
	});

	it("reports install_locked for a held lock while the release config is unreadable, and serves the cache once it is free", async () => {
		await harness({ releases: [release(fakeExecutable())] }).installer.prepare();
		await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		await mkdir(path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME), { recursive: true });
		await writeFile(
			path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME, SIDECAR_INSTALL_LOCK_OWNER_NAME),
			JSON.stringify({ pid: 77, createdAt: 1_000_000 - 1_000 })
		);
		const testHarness = harness({
			installer: { manifestUrl: undefined, manifestConfigUnreadable: true },
			pidAlive: true,
		});

		// Neither the dev slot nor non-retryable `unavailable`: the other window
		// is finishing with the cache this one will use.
		await expectFailure(testHarness, "install_locked", true);
		expect(testHarness.fetches).toEqual([]);

		await rm(path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME), { recursive: true, force: true });
		testHarness.clock.now += WINDOWS_SIDECAR_RETRY_INTERVAL_MS + 1;
		await expect(testHarness.installer.resolveForLaunch()).resolves.toEqual({
			executablePath: livePath,
			source: "download-cache",
		});
	});

	it("reports install_locked while a peer's first install holds the lock and the config is unreadable", async () => {
		// Nothing committed yet: the peer writes installed.json last.
		await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		await mkdir(path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME), { recursive: true });
		await writeFile(
			path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME, SIDECAR_INSTALL_LOCK_OWNER_NAME),
			JSON.stringify({ pid: 77, createdAt: 1_000_000 - 1_000 })
		);
		expect(hasCommittedWindowsSidecarInstall(homeDir)).toBe(false);
		const testHarness = harness({
			installer: { manifestUrl: undefined, manifestConfigUnreadable: true },
			pidAlive: true,
		});

		await expectFailure(testHarness, "install_locked", true);
		expect(testHarness.fetches).toEqual([]);
	});

	it("falls through without touching a lock when no install root exists and the config is unreadable", async () => {
		const devInstall = await place(...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS, WINDOWS_SIDECAR_EXECUTABLE_NAME);
		expect(await exists(installRoot)).toBe(false);
		const testHarness = harness({
			installer: { manifestUrl: undefined, manifestConfigUnreadable: true },
		});

		await expect(testHarness.installer.prepare()).resolves.toEqual({
			ok: true,
			resolved: { executablePath: devInstall, source: "dev-install" },
		});
		expect(await exists(installRoot)).toBe(false);
	});

	it("recovers a lock whose owner died mid-install", async () => {
		await mkdir(path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME), { recursive: true });
		await writeFile(
			path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME, SIDECAR_INSTALL_LOCK_OWNER_NAME),
			JSON.stringify({ pid: 77, createdAt: 1_000_000 - 1_000 })
		);
		const testHarness = harness({ releases: [release(fakeExecutable())], pidAlive: false });

		await expect(testHarness.installer.prepare()).resolves.toMatchObject({ ok: true });
		expect(await exists(path.join(installRoot, SIDECAR_INSTALL_LOCK_NAME))).toBe(false);
	});

	it("classifies an install root that cannot be written as install_failed", async () => {
		await mkdir(path.dirname(installRoot), { recursive: true });
		await writeFile(installRoot, "a file where the directory should be");
		const testHarness = harness({ releases: [release(fakeExecutable())] });
		await expectFailure(testHarness, "install_failed", true);
	});
});

describe("resolveForLaunch", () => {
	it("throws a coded ComputerUseRPCError the tool call can relay", async () => {
		const testHarness = harness({
			fetch: async () => {
				throw offlineError();
			},
		});
		const error = await testHarness.installer.resolveForLaunch().catch((caught: unknown) => caught);

		expect(error).toBeInstanceOf(WindowsSidecarUnavailableError);
		expect(error).toBeInstanceOf(ComputerUseRPCError);
		expect((error as WindowsSidecarUnavailableError).failure.code).toBe("offline");
		expect((error as Error).message).toMatch(/^Cursor Computer Use is unavailable \[offline\]: /);
		expect((error as Error).message).toContain("ENOTFOUND");
	});

	it("reuses a recent failure instead of hammering the CDN, then retries after the interval", async () => {
		const testHarness = harness({
			fetch: async () => {
				throw offlineError();
			},
		});
		await expect(testHarness.installer.resolveForLaunch()).rejects.toThrow("[offline]");
		const attempts = testHarness.fetches.length;

		await expect(testHarness.installer.resolveForLaunch()).rejects.toThrow("[offline]");
		expect(testHarness.fetches).toHaveLength(attempts);

		testHarness.clock.now += WINDOWS_SIDECAR_RETRY_INTERVAL_MS;
		await expect(testHarness.installer.resolveForLaunch()).rejects.toThrow("[offline]");
		expect(testHarness.fetches.length).toBeGreaterThan(attempts);
	});

	it("returns the installed sidecar and clears the failure once the CDN is back", async () => {
		const artifact = fakeExecutable();
		let online = false;
		const good = release(artifact);
		const testHarness = harness({
			fetch: async url => {
				if (!online) {
					throw offlineError();
				}
				return url === good.url ? response(JSON.stringify(good.manifest)) : response(artifact);
			},
		});
		await expect(testHarness.installer.resolveForLaunch()).rejects.toThrow("[offline]");
		online = true;
		testHarness.clock.now += WINDOWS_SIDECAR_RETRY_INTERVAL_MS;

		await expect(testHarness.installer.resolveForLaunch()).resolves.toEqual({
			executablePath: livePath,
			source: "download-cache",
		});
	});
});

describe("host version comparison", () => {
	it.each([
		["3.20.0-pre.7", "3.20.0-pre.7", 0],
		["3.20.0-pre.28", "3.20.0-pre.7", 1],
		["3.20.0-pre.7", "3.20.0-pre.28", -1],
		["3.20.0", "3.20.0-pre.28", 1],
		["3.19.0-pre.25", "3.20.0-pre.7", -1],
		["3.21.0", "3.20.0", 1],
		["3.20.1", "3.20.0", 1],
		["4.0.0-pre.1", "3.99.99", 1],
		["3.20.0-pre.7.1", "3.20.0-pre.7", 1],
		["v3.20.0", "3.20.0", 0],
	])("compares %s to %s as %i", (left, right, expected) => {
		expect(Math.sign(compareCursorVersions(left, right) ?? Number.NaN)).toBe(expected);
	});

	it("treats a version it cannot parse as meeting the floor", () => {
		expect(compareCursorVersions("dev", "3.20.0-pre.7")).toBeUndefined();
		expect(hostVersionMeetsWindowsFloor("dev")).toBe(true);
		expect(hostVersionMeetsWindowsFloor("")).toBe(true);
	});

	it("applies the floor", () => {
		expect(hostVersionMeetsWindowsFloor("3.19.0-pre.25")).toBe(false);
		expect(hostVersionMeetsWindowsFloor("3.20.0-pre.6")).toBe(false);
		expect(hostVersionMeetsWindowsFloor("3.20.0-pre.7")).toBe(true);
		expect(hostVersionMeetsWindowsFloor("3.20.0-pre.28")).toBe(true);
	});
});

describe("verifyWindowsExecutableImage", () => {
	it("accepts a PE32+ image for the requested architecture", () => {
		expect(() => verifyWindowsExecutableImage(fakeExecutable("x64"), "x64")).not.toThrow();
		expect(() => verifyWindowsExecutableImage(fakeExecutable("arm64"), "arm64")).not.toThrow();
	});

	it("rejects the other architecture, a 32-bit image, and non-PE bytes", () => {
		expect(() => verifyWindowsExecutableImage(fakeExecutable("arm64"), "x64")).toThrow("not x64");
		const pe32 = fakeExecutable("x64");
		pe32.writeUInt16LE(0x10b, 0x80 + 24);
		expect(() => verifyWindowsExecutableImage(pe32, "x64")).toThrow("PE32+");
		expect(() => verifyWindowsExecutableImage(Buffer.from("#!/bin/sh"), "x64")).toThrow("MZ");
		const noPe = fakeExecutable("x64");
		noPe.writeUInt32LE(0x1000, 0x3c);
		expect(() => verifyWindowsExecutableImage(noPe, "x64")).toThrow("PE signature");
	});
});

/** What undici throws for a DNS failure: a TypeError whose cause carries the code. */
function offlineError(): Error {
	return fetchFailed("ENOTFOUND", "getaddrinfo ENOTFOUND downloads.cursor.com");
}

function fetchFailed(code: string, causeMessage: string): Error {
	const cause = Object.assign(new Error(causeMessage), { code });
	return Object.assign(new TypeError("fetch failed"), { cause });
}
