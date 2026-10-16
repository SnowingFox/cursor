/**
 * The Cursor Computer Use product profile, read from the sidecar crate's
 * checked-in JSON (`packages/computer-use/windows/profiles/cursor-product-profile.json`).
 *
 * That file is the one description of the product every consumer reads: the
 * crate's tests pin it to the `ProductProfile` literal the executable
 * bootstraps, `build.rs` renders the version resource from it, the release
 * pipeline names artifacts and checks the signed binary against it, the CLI
 * installer reads it, and this client resolves, launches, and pins the sidecar
 * by it. Nothing on this side spells a product string; a client that did would
 * be the second table that drifts.
 *
 * Only the Cursor product exists in the client. The Grok Computer Use sidecar
 * is built for the Grok Desktop host, which installs and launches it itself; a
 * product is fixed when the executable is linked, never selected by a Cursor
 * user or client.
 */

import { z } from 'zod';
import cursorProfileJson from '@anysphere/computer-use/windows/profiles/cursor-product-profile.json';

/** The JSON shape, mirroring `ProductProfileJson` in the crate's `product.rs`. */
const ProductProfileSchema = z.strictObject({
	id: z.literal('cursor'),
	productName: z.string().min(1),
	clientBrandName: z.string().min(1),
	companyName: z.string().min(1),
	/** The file name the client resolves and launches. */
	executableName: z.string().regex(/^[a-z0-9-]+\.exe$/),
	/** The per-user pipe is `\\.\pipe\<pipeNamePrefix>-<user SID>`. */
	pipeNamePrefix: z.string().regex(/^[a-z0-9-]+$/),
	/** Directory under `%LOCALAPPDATA%` holding the launch token. */
	launchTokenDirectory: z.tuple([z.string().min(1), z.string().min(1)]),
	/**
	 * The per-user install directory, `/`-separated, relative to the profile:
	 * the slot the CLI installer and a developer fill, and the client's
	 * `dev-install` source.
	 */
	installRelativePath: z
		.string()
		.regex(/^\.cursor\/[a-z0-9-]+$/, 'must be a single directory under .cursor'),
	/** Authenticode leaf subjects accepted in both directions; exact match. */
	pinnedSignerSubjects: z.array(z.string().min(1)).min(1),
});

export type WindowsProductProfile = Readonly<z.infer<typeof ProductProfileSchema>>;

function checked(raw: unknown): WindowsProductProfile {
	const parsed = ProductProfileSchema.safeParse(raw);
	if (!parsed.success) {
		throw new Error(
			`cursor-product-profile.json is not a usable Cursor product profile: ${parsed.error.issues
				.map(issue => `${issue.path.join('.') || '<root>'}: ${issue.message}`)
				.join('; ')}`
		);
	}
	return parsed.data;
}

export const CURSOR_PRODUCT_PROFILE: WindowsProductProfile = checked(cursorProfileJson);

/**
 * The canonical per-user pipe name for `userSid`, exactly as the crate's
 * `ProductProfile::pipe_name` formats it. Pure formatting; the SID is
 * validated by the caller (`pipe-discovery.ts`).
 */
export function formatWindowsSidecarPipeName(userSid: string): string {
	return `\\\\.\\pipe\\${CURSOR_PRODUCT_PROFILE.pipeNamePrefix}-${userSid}`;
}

/** `installRelativePath` as path segments, for `path.join(homeDir, ...)`. */
export const WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS: readonly string[] =
	CURSOR_PRODUCT_PROFILE.installRelativePath.split('/');
