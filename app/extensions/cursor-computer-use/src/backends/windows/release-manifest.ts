/**
 * The client's admission of a Windows sidecar release manifest.
 *
 * The release pipeline (`.buildkite/pipelines/computer_use_sidecar`) publishes
 * one immutable manifest per release, platform, and architecture at
 *
 *   https://downloads.cursor.com/computer-use-sidecar/releases/<lane>/<cursorVersion>/<sourceSha>-win32-<arch>.json
 *
 * naming the bare signed executable under
 *
 *   https://downloads.cursor.com/computer-use-sidecar/artifacts/sha256/<sha256>/Cursor-Computer-Use-<sidecarVersion>-win32-<arch>.exe
 *
 * There is no `latest` anywhere in the scheme; the bucket denies overwrites.
 * The shape here is the one the pipeline's own validator
 * (`validate_release_manifest.py`, `validate_win32`) enforces at publish time,
 * field for field, and `__fixtures__/pipeline-win32-release-manifest.json` is
 * that validator's accepted fixture, so a manifest the pipeline publishes is a
 * manifest this client admits. Everything product-specific — executable name,
 * pinned publisher — comes from the crate's checked-in profile.
 */

import { SIDECAR_PROTOCOL_MAJOR } from '@anysphere/computer-use/protocol';
import { z } from 'zod';
import { CURSOR_PRODUCT_PROFILE } from './product-profile';

export type WindowsSidecarArch = 'x64' | 'arm64';

/**
 * Node's `process.arch` for the two published builds. An arm64 host gets the
 * arm64 build rather than the x64 one under emulation, because the sidecar
 * reads real display geometry and posts real input and an emulation layer
 * under that is one more place for coordinate math to go wrong. `ia32` has
 * no published build: the sidecar is 64-bit only.
 */
export function windowsSidecarArchForNodeArch(
	nodeArch: string
): WindowsSidecarArch | undefined {
	return nodeArch === 'x64' || nodeArch === 'arm64' ? nodeArch : undefined;
}

/** The only host a sidecar release may be fetched from. */
export const RELEASE_HOST = 'downloads.cursor.com';
/** Key prefix shared with the macOS releases in the same bucket. */
export const RELEASE_PREFIX = 'computer-use-sidecar';
/** Hard cap on a downloaded sidecar; the release build is a few megabytes. */
export const WINDOWS_SIDECAR_MAX_ARTIFACT_BYTES = 16 * 1024 * 1024;
export const WINDOWS_SIDECAR_MAX_MANIFEST_BYTES = 256 * 1024;

/**
 * What the pipeline's sign step records and its validator pins. These are not
 * in the product profile because they describe the release lane, not the
 * product: the Azure Trusted Signing account and certificate profile
 * (`sign-windows.ps1`) and the Rust target that produces each architecture.
 */
const RELEASE_SIGNING = { account: 'Anysphere', profile: 'Cursor' } as const;
const TARGET_TRIPLES: Readonly<Record<WindowsSidecarArch, string>> = {
	x64: 'x86_64-pc-windows-msvc',
	arm64: 'aarch64-pc-windows-msvc',
};
const ARTIFACT_NAME_PREFIX = 'Cursor-Computer-Use-';

const RELEASE_PATH_SEGMENT = '[A-Za-z0-9][A-Za-z0-9._-]*';
const RELEASE_SEGMENT_RE = new RegExp(`^${RELEASE_PATH_SEGMENT}$`);
const MANIFEST_PATH_RE = new RegExp(
	`^/${RELEASE_PREFIX}/releases/${RELEASE_PATH_SEGMENT}/${RELEASE_PATH_SEGMENT}/[0-9a-f]{40}-win32-(x64|arm64)\\.json$`
);
/** The validator's `WIN32_ARTIFACT_RE`. */
const ARTIFACT_NAME_RE = /^Cursor-Computer-Use-[A-Za-z0-9._-]+-win32-(x64|arm64)\.exe$/;
const SHA256_HEX_RE = /^[0-9a-f]{64}$/;
const GIT_SHA_RE = /^[0-9a-f]{40}$/;
/** Lowercase, as the sign step normalizes it and the validator requires. */
const CERT_THUMBPRINT_RE = /^[0-9a-f]{40}$/;

const nonempty = z.string().min(1);

/**
 * Strict, like the validator's exact key-set check: an unknown field is a
 * manifest this client was not written for, and it fails closed like the
 * macOS one. The published artifact *is* the bare signed executable (no
 * archive), so `artifact` and `executable` describe the same bytes and
 * `parseWindowsSidecarReleaseManifest` requires their digests and sizes to
 * agree.
 */
const WindowsSidecarReleaseManifestSchema = z.strictObject({
	schemaVersion: z.literal(1),
	platform: z.literal('win32'),
	arch: z.enum(['x64', 'arm64']),
	lane: z.string().regex(RELEASE_SEGMENT_RE),
	sourceBranch: nonempty,
	sourceSha: z.string().regex(GIT_SHA_RE),
	runtimeSha: z.string().regex(GIT_SHA_RE),
	cursorVersion: z.string().regex(RELEASE_SEGMENT_RE),
	sidecarVersion: z.string().regex(RELEASE_SEGMENT_RE),
	sidecarBuild: z.number().int().positive(),
	/** The client-release build that triggered a `release` lane; null on `explicit`. */
	parentPipeline: nonempty.nullable(),
	parentBuildId: nonempty.nullable(),
	protocolMajor: z.number().int().positive(),
	toolchain: z.strictObject({
		rustc: nonempty,
		target: nonempty,
	}),
	artifact: z.strictObject({
		name: z.string().regex(ARTIFACT_NAME_RE),
		sha256: z.string().regex(SHA256_HEX_RE),
		bytes: z.number().int().positive().max(WINDOWS_SIDECAR_MAX_ARTIFACT_BYTES),
		url: nonempty,
	}),
	executable: z.strictObject({
		name: nonempty,
		unsignedSha256: z.string().regex(SHA256_HEX_RE),
		signedSha256: z.string().regex(SHA256_HEX_RE),
		bytes: z.number().int().positive().max(WINDOWS_SIDECAR_MAX_ARTIFACT_BYTES),
	}),
	signature: z.strictObject({
		publisherCommonName: nonempty,
		thumbprint: z.string().regex(CERT_THUMBPRINT_RE),
		account: nonempty,
		profile: nonempty,
		timestamped: z.literal(true),
	}),
	manifestEmbedded: z.literal(true),
});

export type WindowsSidecarReleaseManifest = z.infer<
	typeof WindowsSidecarReleaseManifestSchema
>;

export class WindowsSidecarManifestError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'WindowsSidecarManifestError';
	}
}

/**
 * A download URL a client may follow: https, the release host, nothing else.
 * No port, credentials, query, or fragment — each is a way to point the same
 * hostname somewhere else.
 */
function validateDownloadUrl(raw: string, kind: string): URL {
	let url: URL;
	try {
		url = new URL(raw);
	} catch {
		throw new WindowsSidecarManifestError(
			`${CURSOR_PRODUCT_PROFILE.productName} ${kind} URL is invalid`
		);
	}
	if (
		url.protocol !== 'https:' ||
		url.hostname !== RELEASE_HOST ||
		url.port !== '' ||
		url.username !== '' ||
		url.password !== '' ||
		url.search !== '' ||
		url.hash !== ''
	) {
		throw new WindowsSidecarManifestError(
			`${CURSOR_PRODUCT_PROFILE.productName} ${kind} URL is not allowed`
		);
	}
	return url;
}

/**
 * A Windows manifest URL that names an exact immutable release for `arch`.
 * The architecture is in the path, so a config that hands an x64 client an
 * arm64 manifest fails here rather than after a download.
 */
export function validateWindowsSidecarManifestUrl(
	raw: string,
	arch: WindowsSidecarArch
): URL {
	const url = validateDownloadUrl(raw, 'manifest');
	const match = MANIFEST_PATH_RE.exec(url.pathname);
	if (match === null) {
		throw new WindowsSidecarManifestError(
			`${CURSOR_PRODUCT_PROFILE.productName} manifest URL must name an exact immutable Windows release`
		);
	}
	if (match[1] !== arch) {
		throw new WindowsSidecarManifestError(
			`${CURSOR_PRODUCT_PROFILE.productName} manifest URL is for ${match[1]}, not ${arch}`
		);
	}
	return url;
}

export interface WindowsSidecarReleaseIdentity {
	readonly lane: string;
	readonly cursorVersion: string;
	readonly sourceSha: string;
	readonly arch: WindowsSidecarArch;
}

/** The URL path a manifest with this identity must have been published at. */
export function windowsSidecarManifestPath(
	identity: WindowsSidecarReleaseIdentity
): string {
	return (
		`/${RELEASE_PREFIX}/releases/${identity.lane}/` +
		`${identity.cursorVersion}/${identity.sourceSha}-win32-${identity.arch}.json`
	);
}

/** `Cursor-Computer-Use-<sidecarVersion>-win32-<arch>.exe`. */
export function windowsSidecarArtifactName(
	sidecarVersion: string,
	arch: WindowsSidecarArch
): string {
	return `${ARTIFACT_NAME_PREFIX}${sidecarVersion}-win32-${arch}.exe`;
}

/** Content-addressed artifact path, shared with the macOS layout. */
export function windowsSidecarArtifactPath(
	sha256: string,
	artifactName: string
): string {
	return `/${RELEASE_PREFIX}/artifacts/sha256/${sha256}/${artifactName}`;
}

export interface ParseWindowsSidecarReleaseManifestOptions {
	readonly manifestUrl: string;
	readonly arch: WindowsSidecarArch;
	/** Defaults to the protocol package's `SIDECAR_PROTOCOL_MAJOR`. */
	readonly protocolMajor?: number;
}

/**
 * Parse and admit a release manifest. Beyond the schema this checks
 * everything the pipeline's validator checks at publish time and everything
 * the client must additionally agree with: the manifest's own identity equals
 * the URL it was fetched from, the artifact URL is content-addressed, the
 * product is the Cursor profile (executable name, artifact name, pinned
 * publisher), the release lane's signing account, profile, and target triple
 * are the ones the pipeline signs with, the architecture is the caller's, the
 * protocol major is this client's, and `artifact` and `executable` describe
 * one file. Throws `WindowsSidecarManifestError`.
 */
export function parseWindowsSidecarReleaseManifest(
	raw: string,
	options: ParseWindowsSidecarReleaseManifestOptions
): WindowsSidecarReleaseManifest {
	const product = CURSOR_PRODUCT_PROFILE;
	const manifestUrl = validateWindowsSidecarManifestUrl(
		options.manifestUrl,
		options.arch
	);
	let value: unknown;
	try {
		value = JSON.parse(raw);
	} catch {
		throw new WindowsSidecarManifestError(
			`${product.productName} manifest is not valid JSON`
		);
	}
	const result = WindowsSidecarReleaseManifestSchema.safeParse(value);
	if (!result.success) {
		throw new WindowsSidecarManifestError(
			`${product.productName} manifest schema is invalid`
		);
	}
	const manifest = result.data;
	const expectedProtocolMajor = options.protocolMajor ?? SIDECAR_PROTOCOL_MAJOR;
	if (manifest.protocolMajor !== expectedProtocolMajor) {
		throw new WindowsSidecarManifestError(
			`${product.productName} manifest protocol is incompatible`
		);
	}
	if (manifest.arch !== options.arch) {
		throw new WindowsSidecarManifestError(
			`${product.productName} manifest is for ${manifest.arch}, not ${options.arch}`
		);
	}
	if (manifestUrl.pathname !== windowsSidecarManifestPath(manifest)) {
		throw new WindowsSidecarManifestError(
			`${product.productName} manifest URL does not match its identity`
		);
	}
	if (
		manifest.executable.name !== product.executableName ||
		manifest.artifact.name !==
		windowsSidecarArtifactName(manifest.sidecarVersion, manifest.arch) ||
		manifest.toolchain.target !== TARGET_TRIPLES[manifest.arch]
	) {
		throw new WindowsSidecarManifestError(
			`${product.productName} manifest does not describe the ${product.productName} sidecar`
		);
	}
	if (
		!product.pinnedSignerSubjects.includes(manifest.signature.publisherCommonName) ||
		manifest.signature.account !== RELEASE_SIGNING.account ||
		manifest.signature.profile !== RELEASE_SIGNING.profile
	) {
		throw new WindowsSidecarManifestError(
			`${product.productName} manifest names a signer this client does not pin`
		);
	}
	if (
		manifest.artifact.sha256 !== manifest.executable.signedSha256 ||
		manifest.artifact.bytes !== manifest.executable.bytes ||
		manifest.executable.unsignedSha256 === manifest.executable.signedSha256
	) {
		throw new WindowsSidecarManifestError(
			`${product.productName} manifest artifact and executable disagree`
		);
	}
	const artifactUrl = validateDownloadUrl(manifest.artifact.url, 'artifact');
	if (
		artifactUrl.pathname !==
		windowsSidecarArtifactPath(manifest.artifact.sha256, manifest.artifact.name)
	) {
		throw new WindowsSidecarManifestError(
			`${product.productName} artifact URL is not content-addressed`
		);
	}
	return manifest;
}
