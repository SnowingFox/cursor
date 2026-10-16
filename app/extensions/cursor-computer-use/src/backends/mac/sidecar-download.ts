import { execFile } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { createWriteStream } from "node:fs";
import {
	chmod,
	lstat,
	mkdir,
	mkdtemp,
	readdir,
	readFile,
	rename,
	rm,
	writeFile,
} from "node:fs/promises";
import { homedir } from "node:os";
import * as path from "node:path";
import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";
import { setTimeout as delay } from "node:timers/promises";
import { promisify } from "node:util";
import { SIDECAR_PROTOCOL_MAJOR } from "@anysphere/computer-use/protocol";
import { z } from "zod/v3";
import {
	fromBuffer,
	type Entry,
	type ZipFile,
} from "yauzl";
import {
	MAC_HELPER_IDENTITY,
	type ResolvedMacHelperApp,
	resolveMacHelperApp,
	type ResolveMacHelperAppOptions,
} from "./helper-discovery";
import { MacComputerUseRPCClient } from "./sidecar-client";
import { withSidecarInstallLock } from "../common/sidecar-install-lock";
import { macSidecarInstallLockOptions } from "./install-lock";

const APP_NAME = "Cursor Computer Use.app";
const EXECUTABLE_NAME = "CUCursorService";
const EXECUTABLE_RELATIVE_PATH = `Contents/MacOS/${EXECUTABLE_NAME}`;
const INFO_PLIST_RELATIVE_PATH = "Contents/Info.plist";
const EXPECTED_REQUIREMENT =
	'identifier "co.anysphere.cursor-computer-use" and anchor apple generic and certificate 1[field.1.2.840.113635.100.6.2.6] exists and certificate leaf[field.1.2.840.113635.100.6.1.13] exists and certificate leaf[subject.OU] = "DCNK4UB866"';
const INSTALL_METADATA_NAME = "installed.json";
const INSTALL_BACKUP_NAME = ".previous";
const MAX_MANIFEST_BYTES = 256 * 1024;
const MAX_ARTIFACT_BYTES = 64 * 1024 * 1024;
const MAX_EXPANDED_BYTES = 128 * 1024 * 1024;
const MAX_ZIP_ENTRIES = 5_000;
const PREPARE_TIMEOUT_MS = 30_000;
const TOOL_TIMEOUT_MS = 5_000;
const DOWNLOAD_ATTEMPTS = 3;
const SHA256_RE = /^[0-9a-f]{64}$/;
const SOURCE_SHA_RE = /^[0-9a-f]{40}$/;
const PATH_SEGMENT_RE = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const MANIFEST_PATH_RE =
	/^\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}\.json$/;
const FILE_TYPE_MASK = 0xf000;
const DIRECTORY_TYPE = 0x4000;
const REGULAR_FILE_TYPE = 0x8000;
const FAT_MAGIC = 0xcafebabe;
const FAT_CIGAM = 0xbebafeca;
const CPU_TYPE_X86_64 = 0x01000007;
const CPU_TYPE_ARM64 = 0x0100000c;

const nonempty = z.string().min(1);
const sha256 = z.string().regex(SHA256_RE);
const sourceSha = z.string().regex(SOURCE_SHA_RE);
const segment = z.string().regex(PATH_SEGMENT_RE);
const manifestSchema = z.strictObject({
	schemaVersion: z.literal(1),
	lane: segment,
	sourceBranch: nonempty,
	sourceSha,
	runtimeSha: sourceSha,
	cursorVersion: segment,
	sidecarVersion: segment,
	sidecarBuild: z.number().int().positive(),
	parentPipeline: nonempty.nullable(),
	parentBuildId: nonempty.nullable(),
	protocolMajor: z.number().int().positive(),
	toolchain: z.strictObject({
		xcodeVersion: nonempty,
		swiftVersion: nonempty,
	}),
	artifact: z.strictObject({
		name: z.string().regex(/^[A-Za-z0-9][A-Za-z0-9._-]*\.zip$/),
		sha256,
		bytes: z.number().int().positive().max(MAX_ARTIFACT_BYTES),
		url: nonempty,
	}),
	app: z.strictObject({
		name: z.literal(APP_NAME),
		bytes: z.number().int().positive().max(MAX_EXPANDED_BYTES),
		bundleIdentifier: z.literal("co.anysphere.cursor-computer-use"),
		teamIdentifier: z.literal("DCNK4UB866"),
		designatedRequirement: nonempty,
		entitlements: z.record(z.string(), z.boolean()),
		architectures: z.tuple([z.literal("arm64"), z.literal("x86_64")]),
	}),
	executable: z.strictObject({
		name: z.literal(EXECUTABLE_NAME),
		unsignedSha256: sha256,
		signedSha256: sha256,
		bytes: z.number().int().positive().max(MAX_EXPANDED_BYTES),
	}),
	notarization: z.strictObject({
		status: z.literal("Accepted"),
		submissionId: nonempty,
		stapled: z.literal(true),
	}),
});
const installMetadataSchema = z.strictObject({
	schemaVersion: z.literal(1),
	manifestUrl: nonempty,
});

type ReleaseManifest = z.infer<typeof manifestSchema>;
type InstallMetadata = z.infer<typeof installMetadataSchema>;

interface ToolResult {
	stdout: string;
	stderr: string;
}

export interface SidecarDownloadDependencies {
	fetch(url: string, init: RequestInit): Promise<Response>;
	runTool(
		command: string,
		args: readonly string[],
		signal: AbortSignal
	): Promise<ToolResult>;
	assertNoRunningHelper(): Promise<void>;
}

export interface ResolveMacHelperForLaunchOptions
	extends ResolveMacHelperAppOptions {
	manifestUrl?: string;
	signal: AbortSignal;
	dependencies?: SidecarDownloadDependencies;
	/** Receives what the install did that the caller cannot see, such as a stale lock it took over. */
	log?: (message: string) => void;
}

const execFileAsync = promisify(execFile);
const defaultDependencies: SidecarDownloadDependencies = {
	fetch: (url, init) => fetch(url, init),
	runTool: async (command, args, signal) => {
		const result = await execFileAsync(command, args, {
			encoding: "utf8",
			maxBuffer: 1024 * 1024,
			signal,
			timeout: TOOL_TIMEOUT_MS,
		});
		return { stdout: result.stdout, stderr: result.stderr };
	},
	assertNoRunningHelper: () =>
		MacComputerUseRPCClient.assertNoRunningHelperForInstall(),
};

export async function resolveMacHelperAppForLaunch(
	options: ResolveMacHelperForLaunchOptions
): Promise<ResolvedMacHelperApp | undefined> {
	const existing = resolveMacHelperApp(options);
	if (existing?.source === "env-override" || !options.manifestUrl) {
		return existing;
	}
	if (options.builtProduct === false) {
		if (existing === undefined) {
			throw new Error(
				"The downloaded Cursor Computer Use helper requires a signed Labs or production Cursor client. Cursor Dev needs a local helper: run `mise //packages/computer-use/mac:package-cursor-dev` or set CUA_SERVICE_APP."
			);
		}
		return existing;
	}
	options.signal.throwIfAborted();
	const signal = AbortSignal.any([
		options.signal,
		AbortSignal.timeout(PREPARE_TIMEOUT_MS),
	]);
	return prepareDogfoodSidecar(
		validateManifestUrl(options.manifestUrl).toString(),
		options.homeDir ?? homedir(),
		signal,
		options.dependencies ?? defaultDependencies,
		options.log
	);
}

async function prepareDogfoodSidecar(
	manifestUrl: string,
	homeDir: string,
	signal: AbortSignal,
	dependencies: SidecarDownloadDependencies,
	log: ((message: string) => void) | undefined
): Promise<ResolvedMacHelperApp> {
	const manifest = parseManifest({
		raw: (await fetchWithRetries(
			manifestUrl,
			MAX_MANIFEST_BYTES,
			undefined,
			signal,
			dependencies.fetch
		)).toString("utf8"),
		manifestUrl,
	});
	const installRoot = path.join(
		homeDir,
		".cursor",
		"computer-use-sidecar"
	);
	await mkdir(installRoot, { recursive: true, mode: 0o700 });
	return withSidecarInstallLock(
		installRoot,
		() =>
			installStableApp({
				installRoot,
				manifestUrl,
				manifest,
				signal,
				dependencies,
			}),
		macSidecarInstallLockOptions(log)
	);
}

async function installStableApp(options: {
	installRoot: string;
	manifestUrl: string;
	manifest: ReleaseManifest;
	signal: AbortSignal;
	dependencies: SidecarDownloadDependencies;
}): Promise<ResolvedMacHelperApp> {
	const { installRoot, manifestUrl, manifest, signal, dependencies } = options;
	const stableApp = path.join(installRoot, APP_NAME);
	const backupApp = path.join(installRoot, INSTALL_BACKUP_NAME);
	const metadataPath = path.join(installRoot, INSTALL_METADATA_NAME);
	const expectedMetadata: InstallMetadata = {
		schemaVersion: 1,
		manifestUrl,
	};
	await recoverInterruptedInstall({ stableApp, backupApp });
	await removeTransientInstallPaths(installRoot);

	if (
		(await readInstallMetadata(metadataPath))?.manifestUrl === manifestUrl &&
		(await isDirectory(stableApp))
	) {
		try {
			await verifyApp(stableApp, manifest, signal, dependencies);
			return { appPath: stableApp, source: "download-cache", identity: MAC_HELPER_IDENTITY };
		} catch (error) {
			if (signal.aborted) {
				throw error;
			}
		}
	}

	const workDir = await mkdtemp(
		path.join(installRoot, `.staging-${manifest.artifact.sha256}-`)
	);
	try {
		const artifact = await fetchWithRetries(
			manifest.artifact.url,
			MAX_ARTIFACT_BYTES,
			manifest.artifact.bytes,
			signal,
			dependencies.fetch
		);
		if (
			createHash("sha256").update(artifact).digest("hex") !==
			manifest.artifact.sha256
		) {
			throw new Error("Cursor Computer Use artifact SHA-256 did not match");
		}
		const extractRoot = path.join(workDir, "extract");
		await mkdir(extractRoot, { mode: 0o700 });
		await extractArchive(artifact, extractRoot, manifest, signal);
		const extractedApp = path.join(extractRoot, APP_NAME);
		await verifyApp(extractedApp, manifest, signal, dependencies);

		await dependencies.assertNoRunningHelper();
		let movedPrevious = false;
		try {
			if (await isDirectory(stableApp)) {
				await rename(stableApp, backupApp);
				movedPrevious = true;
			}
			await rename(extractedApp, stableApp);
			await writeInstallMetadata(metadataPath, expectedMetadata);
		} catch (error) {
			if (movedPrevious) {
				await rm(stableApp, { recursive: true, force: true });
				await rename(backupApp, stableApp);
			}
			throw error;
		}
		await rm(backupApp, { recursive: true, force: true });
		return { appPath: stableApp, source: "download-cache", identity: MAC_HELPER_IDENTITY };
	} finally {
		await rm(workDir, { recursive: true, force: true });
	}
}

async function recoverInterruptedInstall(options: {
	stableApp: string;
	backupApp: string;
}): Promise<void> {
	const { stableApp, backupApp } = options;
	if (!(await isDirectory(backupApp))) {
		return;
	}
	if (await isDirectory(stableApp)) {
		await rm(backupApp, { recursive: true, force: true });
	} else {
		await rename(backupApp, stableApp);
	}
}

async function readInstallMetadata(
	metadataPath: string
): Promise<InstallMetadata | undefined> {
	try {
		const parsed: unknown = JSON.parse(await readFile(metadataPath, "utf8"));
		const result = installMetadataSchema.safeParse(parsed);
		return result.success ? result.data : undefined;
	} catch {
		return undefined;
	}
}

async function writeInstallMetadata(
	metadataPath: string,
	metadata: InstallMetadata
): Promise<void> {
	const temporaryPath = path.join(
		path.dirname(metadataPath),
		`.metadata-${randomUUID()}`
	);
	try {
		await writeFile(temporaryPath, `${JSON.stringify(metadata)}\n`, {
			mode: 0o600,
		});
		await rename(temporaryPath, metadataPath);
	} finally {
		await rm(temporaryPath, { force: true });
	}
}

async function removeTransientInstallPaths(installRoot: string): Promise<void> {
	for (const entry of await readdir(installRoot, { withFileTypes: true })) {
		if (
			entry.name.startsWith(".staging-") ||
			entry.name.startsWith(".install-") ||
			entry.name.startsWith(".metadata-")
		) {
			await rm(path.join(installRoot, entry.name), {
				recursive: true,
				force: true,
			});
		}
	}
}

export function parseManifest(options: {
	raw: string;
	manifestUrl: string;
}): ReleaseManifest {
	const { raw, manifestUrl } = options;
	const parsedUrl = validateManifestUrl(manifestUrl);
	let value: unknown;
	try {
		value = JSON.parse(raw);
	} catch {
		throw new Error("Cursor Computer Use manifest is not valid JSON");
	}
	const result = manifestSchema.safeParse(value);
	if (!result.success) {
		throw new Error("Cursor Computer Use manifest schema is invalid");
	}
	const manifest = result.data;
	if (manifest.protocolMajor !== SIDECAR_PROTOCOL_MAJOR) {
		throw new Error("Cursor Computer Use manifest protocol is incompatible");
	}
	const identityPath =
		`/computer-use-sidecar/releases/${manifest.lane}/` +
		`${manifest.cursorVersion}/${manifest.sourceSha}.json`;
	if (parsedUrl.pathname !== identityPath) {
		throw new Error("Cursor Computer Use manifest URL does not match its identity");
	}
	const artifactUrl = validateDownloadUrl(manifest.artifact.url, "artifact");
	const artifactPath =
		`/computer-use-sidecar/artifacts/sha256/${manifest.artifact.sha256}/` +
		manifest.artifact.name;
	if (artifactUrl.pathname !== artifactPath) {
		throw new Error("Cursor Computer Use artifact URL is not content-addressed");
	}
	return manifest;
}

function validateManifestUrl(raw: string): URL {
	const url = validateDownloadUrl(raw, "manifest");
	if (!MANIFEST_PATH_RE.test(url.pathname)) {
		throw new Error(
			"Cursor Computer Use manifest URL must name an exact immutable release"
		);
	}
	return url;
}

function validateDownloadUrl(raw: string, kind: string): URL {
	let url: URL;
	try {
		url = new URL(raw);
	} catch {
		throw new Error(`Cursor Computer Use ${kind} URL is invalid`);
	}
	if (
		url.protocol !== "https:" ||
		url.hostname !== "downloads.cursor.com" ||
		url.port ||
		url.username ||
		url.password ||
		url.search ||
		url.hash
	) {
		throw new Error(`Cursor Computer Use ${kind} URL is not allowed`);
	}
	return url;
}

class PermanentDownloadError extends Error { }

async function fetchWithRetries(
	url: string,
	maxBytes: number,
	expectedBytes: number | undefined,
	signal: AbortSignal,
	fetchImpl: SidecarDownloadDependencies["fetch"]
): Promise<Buffer> {
	let lastError: unknown;
	for (let attempt = 0; attempt < DOWNLOAD_ATTEMPTS; attempt += 1) {
		if (attempt > 0) {
			await delay(100 * attempt + Math.floor(Math.random() * 50), undefined, {
				signal,
			});
		}
		try {
			return await fetchOnce(url, maxBytes, expectedBytes, signal, fetchImpl);
		} catch (error) {
			if (signal.aborted || error instanceof PermanentDownloadError) {
				throw error;
			}
			lastError = error;
		}
	}
	throw lastError ?? new Error("Cursor Computer Use download failed");
}

async function fetchOnce(
	url: string,
	maxBytes: number,
	expectedBytes: number | undefined,
	signal: AbortSignal,
	fetchImpl: SidecarDownloadDependencies["fetch"]
): Promise<Buffer> {
	const response = await fetchImpl(url, {
		method: "GET",
		redirect: "manual",
		signal,
	});
	if (response.redirected || (response.status >= 300 && response.status < 400)) {
		throw new PermanentDownloadError("Cursor Computer Use redirects are refused");
	}
	if (!response.ok || response.body === null) {
		const error = new Error(`Cursor Computer Use download returned ${response.status}`);
		if (response.status === 408 || response.status === 429 || response.status >= 500) {
			throw error;
		}
		throw new PermanentDownloadError(error.message);
	}
	const header = response.headers.get("content-length");
	const declaredBytes =
		header === null || !/^(0|[1-9][0-9]*)$/.test(header)
			? undefined
			: Number(header);
	if (
		(header !== null && declaredBytes === undefined) ||
		(declaredBytes !== undefined &&
			(!Number.isSafeInteger(declaredBytes) ||
				declaredBytes < 0 ||
				declaredBytes > maxBytes ||
				(expectedBytes !== undefined && declaredBytes !== expectedBytes)))
	) {
		throw new PermanentDownloadError("Cursor Computer Use download size is invalid");
	}
	const chunks: Buffer[] = [];
	let bytes = 0;
	for (const reader = response.body.getReader(); ;) {
		const next = await reader.read();
		if (next.done) {
			break;
		}
		bytes += next.value.byteLength;
		if (bytes > maxBytes) {
			await reader.cancel();
			throw new PermanentDownloadError(
				"Cursor Computer Use download exceeded its size limit"
			);
		}
		chunks.push(Buffer.from(next.value));
	}
	if (expectedBytes !== undefined && bytes !== expectedBytes) {
		throw new PermanentDownloadError(
			"Cursor Computer Use download size did not match"
		);
	}
	return Buffer.concat(chunks, bytes);
}

interface ArchiveEntry {
	entry: Entry;
	kind: "directory" | "file";
	mode: number;
}

async function extractArchive(
	archive: Buffer,
	destination: string,
	manifest: ReleaseManifest,
	signal: AbortSignal
): Promise<void> {
	const zip = await openZip(archive);
	try {
		const entries = await collectEntries(zip, signal);
		let expandedBytes = 0;
		const paths = new Map<string, ArchiveEntry["kind"]>();
		for (const candidate of entries) {
			const name = candidate.entry.fileName;
			const normalized = candidate.kind === "directory" ? name.slice(0, -1) : name;
			const segments = normalized.split("/");
			if (
				name.normalize("NFC") !== name ||
				(normalized !== APP_NAME &&
					!normalized.startsWith(`${APP_NAME}/`)) ||
				normalized.includes("\0") ||
				segments.some(segment => segment === "" || segment === ".")
			) {
				throw new Error("Cursor Computer Use ZIP entry path is unsafe");
			}
			const collisionKey = normalized.normalize("NFD").toLowerCase();
			assertNoCollision(paths, collisionKey, candidate.kind);
			expandedBytes += candidate.entry.uncompressedSize;
			if (expandedBytes > MAX_EXPANDED_BYTES) {
				throw new Error("Cursor Computer Use ZIP expands past its size limit");
			}
		}
		const executable = entries.find(
			candidate => candidate.entry.fileName === `${APP_NAME}/${EXECUTABLE_RELATIVE_PATH}`
		);
		const infoPlist = entries.find(
			candidate => candidate.entry.fileName === `${APP_NAME}/${INFO_PLIST_RELATIVE_PATH}`
		);
		if (
			executable?.kind !== "file" ||
			(executable.mode & 0o100) === 0 ||
			infoPlist?.kind !== "file" ||
			expandedBytes !== manifest.app.bytes
		) {
			throw new Error("Cursor Computer Use ZIP app contract is invalid");
		}
		for (const candidate of entries) {
			await extractEntry(zip, candidate, destination, signal);
		}
	} finally {
		zip.close();
	}
}

function openZip(archive: Buffer): Promise<ZipFile> {
	return new Promise((resolve, reject) => {
		fromBuffer(
			archive,
			{
				lazyEntries: true,
				decodeStrings: true,
				validateEntrySizes: true,
				strictFileNames: true,
			},
			(error, zip) => (error ? reject(error) : resolve(zip))
		);
	});
}

function collectEntries(
	zip: ZipFile,
	signal: AbortSignal
): Promise<ArchiveEntry[]> {
	if (signal.aborted) {
		throw signal.reason;
	}
	if (zip.entryCount === 0 || zip.entryCount > MAX_ZIP_ENTRIES) {
		throw new Error("Cursor Computer Use ZIP entry count is invalid");
	}
	return new Promise((resolve, reject) => {
		const entries: ArchiveEntry[] = [];
		let finished = false;
		const finish = (error?: unknown): void => {
			if (finished) {
				return;
			}
			finished = true;
			signal.removeEventListener("abort", onAbort);
			zip.removeListener("error", onError);
			if (error !== undefined) {
				zip.close();
			}
			error === undefined ? resolve(entries) : reject(error);
		};
		const onAbort = (): void => finish(signal.reason);
		const onError = (error: Error): void => finish(error);
		signal.addEventListener("abort", onAbort, { once: true });
		zip.once("error", onError);
		zip.once("end", () => finish());
		zip.on("entry", entry => {
			try {
				if (
					entry.isEncrypted() ||
					entry.extraFields.some(
						(field: { id: number }) => field.id === 0x0001
					) ||
					![0, 8].includes(entry.compressionMethod)
				) {
					throw new Error("Cursor Computer Use ZIP entry is unsupported");
				}
				const host = entry.versionMadeBy >>> 8;
				const mode = entry.externalFileAttributes >>> 16;
				const type = mode & FILE_TYPE_MASK;
				const kind =
					type === DIRECTORY_TYPE
						? "directory"
						: type === REGULAR_FILE_TYPE
							? "file"
							: undefined;
				if (
					host !== 3 ||
					kind === undefined ||
					(kind === "directory") !== entry.fileName.endsWith("/")
				) {
					throw new Error(
						"Cursor Computer Use ZIP contains a symlink or special file"
					);
				}
				entries.push({ entry, kind, mode });
				zip.readEntry();
			} catch (error) {
				finish(error);
			}
		});
		zip.readEntry();
	});
}

function assertNoCollision(
	paths: Map<string, ArchiveEntry["kind"]>,
	name: string,
	kind: ArchiveEntry["kind"]
): void {
	if (paths.has(name)) {
		throw new Error("Cursor Computer Use ZIP contains colliding entries");
	}
	const segments = name.split("/");
	for (let index = 1; index < segments.length; index += 1) {
		if (paths.get(segments.slice(0, index).join("/")) === "file") {
			throw new Error("Cursor Computer Use ZIP contains colliding entries");
		}
	}
	if (
		kind === "file" &&
		[...paths.keys()].some(existing => existing.startsWith(`${name}/`))
	) {
		throw new Error("Cursor Computer Use ZIP contains colliding entries");
	}
	paths.set(name, kind);
}

async function extractEntry(
	zip: ZipFile,
	candidate: ArchiveEntry,
	destination: string,
	signal: AbortSignal
): Promise<void> {
	const target = path.join(destination, candidate.entry.fileName);
	if (candidate.kind === "directory") {
		await mkdir(target, { recursive: true, mode: candidate.mode & 0o777 });
		return;
	}
	await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
	const input = await new Promise<NodeJS.ReadableStream>((resolve, reject) => {
		zip.openReadStream(candidate.entry, (error, stream) =>
			error ? reject(error) : resolve(stream)
		);
	});
	let crc = 0xffffffff;
	const checksum = new Transform({
		transform(chunk: Buffer, _encoding, callback) {
			crc = updateCrc32(crc, chunk);
			callback(null, chunk);
		},
	});
	await pipeline(
		input,
		checksum,
		createWriteStream(target, {
			flags: "wx",
			mode: candidate.mode & 0o777,
		}),
		{ signal }
	);
	if ((crc ^ 0xffffffff) >>> 0 !== candidate.entry.crc32) {
		throw new Error("Cursor Computer Use ZIP entry CRC-32 did not match");
	}
	await chmod(target, candidate.mode & 0o777);
}

const CRC32_TABLE = Array.from({ length: 256 }, (_, value) => {
	let crc = value;
	for (let bit = 0; bit < 8; bit += 1) {
		crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
	}
	return crc >>> 0;
});

function updateCrc32(crc: number, bytes: Buffer): number {
	for (const byte of bytes) {
		crc = CRC32_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
	}
	return crc >>> 0;
}

export function verifyUniversalMachO(executable: Buffer): void {
	if (executable.length < 48) {
		throw new Error("Cursor Computer Use executable is not a universal Mach-O");
	}
	const magic = executable.readUInt32BE(0);
	const readUInt32 =
		magic === FAT_MAGIC
			? (offset: number): number => executable.readUInt32BE(offset)
			: magic === FAT_CIGAM
				? (offset: number): number => executable.readUInt32LE(offset)
				: undefined;
	if (readUInt32 === undefined || readUInt32(4) !== 2) {
		throw new Error("Cursor Computer Use executable is not a universal Mach-O");
	}
	const architectures = new Set<number>();
	const slices: Array<{ offset: number; end: number }> = [];
	for (let index = 0; index < 2; index += 1) {
		const entryOffset = 8 + index * 20;
		const cpuType = readUInt32(entryOffset);
		const offset = readUInt32(entryOffset + 8);
		const size = readUInt32(entryOffset + 12);
		if (
			(cpuType !== CPU_TYPE_ARM64 && cpuType !== CPU_TYPE_X86_64) ||
			size === 0 ||
			offset < 48 ||
			offset + size > executable.length
		) {
			throw new Error("Cursor Computer Use executable is not universal");
		}
		architectures.add(cpuType);
		slices.push({ offset, end: offset + size });
	}
	slices.sort((left, right) => left.offset - right.offset);
	if (
		architectures.size !== 2 ||
		slices[0].end > slices[1].offset
	) {
		throw new Error("Cursor Computer Use executable is not universal");
	}
}

async function verifyApp(
	appPath: string,
	manifest: ReleaseManifest,
	signal: AbortSignal,
	dependencies: SidecarDownloadDependencies
): Promise<void> {
	const executable = path.join(appPath, EXECUTABLE_RELATIVE_PATH);
	const executableStat = await safeLstat(executable);
	const infoPlistStat = await safeLstat(
		path.join(appPath, INFO_PLIST_RELATIVE_PATH)
	);
	if (
		!(await isDirectory(appPath)) ||
		!infoPlistStat?.isFile() ||
		infoPlistStat.isSymbolicLink() ||
		!executableStat?.isFile() ||
		executableStat.isSymbolicLink() ||
		(executableStat.mode & 0o100) === 0
	) {
		throw new Error("Cursor Computer Use app bundle is incomplete");
	}
	const executableBytes = await readFile(executable);
	if (
		executableStat.size !== manifest.executable.bytes ||
		createHash("sha256").update(executableBytes).digest("hex") !==
		manifest.executable.signedSha256
	) {
		throw new Error("Cursor Computer Use executable did not match the manifest");
	}
	verifyUniversalMachO(executableBytes);
	await dependencies.runTool(
		"/usr/bin/codesign",
		[
			"--verify",
			"--deep",
			"--strict",
			"--verbose=4",
			`-R=${EXPECTED_REQUIREMENT}`,
			appPath,
		],
		signal
	);
	await dependencies.runTool(
		"/usr/sbin/spctl",
		["--assess", "--type", "exec", "--verbose=4", appPath],
		signal
	);
}

async function safeLstat(target: string) {
	try {
		return await lstat(target);
	} catch {
		return undefined;
	}
}

async function isDirectory(target: string): Promise<boolean> {
	const value = await safeLstat(target);
	return value?.isDirectory() === true && !value.isSymbolicLink();
}

