import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";
import {
	CURSOR_PRODUCT_PROFILE,
	WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS,
	formatWindowsSidecarPipeName,
} from "./product-profile";
import { PINNED_SIGNER_SUBJECTS, isPinnedSigner } from "./signer";

/**
 * The client reads the crate's profile rather than restating it; these tests
 * pin the *reading*, not the values. The values are pinned once, by the
 * crate's own tests against its compiled literal.
 */
describe("Cursor product profile", () => {
	// Node's resolver, not the vitest alias: a missing exports entry fails here as it does in the dev extension host.
	it("is the crate's checked-in JSON, byte for byte", () => {
		const onDisk: unknown = createRequire(__filename)(
			"@anysphere/computer-use/windows/profiles/cursor-product-profile.json"
		);
		expect(CURSOR_PRODUCT_PROFILE).toEqual(onDisk);
	});

	it("describes the Cursor product with every field the client launches by", () => {
		expect(CURSOR_PRODUCT_PROFILE.id).toBe("cursor");
		expect(CURSOR_PRODUCT_PROFILE.executableName).toMatch(/^[a-z0-9-]+\.exe$/);
		expect(CURSOR_PRODUCT_PROFILE.pipeNamePrefix).toMatch(/^[a-z0-9-]+$/);
		expect(CURSOR_PRODUCT_PROFILE.launchTokenDirectory).toHaveLength(2);
		expect(CURSOR_PRODUCT_PROFILE.installRelativePath).toMatch(/^\.cursor\/[a-z0-9-]+$/);
		expect(CURSOR_PRODUCT_PROFILE.pinnedSignerSubjects.length).toBeGreaterThan(0);
	});

	it("formats the per-user pipe the way the crate's ProductProfile::pipe_name does", () => {
		expect(formatWindowsSidecarPipeName("S-1-5-21-1-2-3-1001")).toBe(
			"\\\\.\\pipe\\" + `${CURSOR_PRODUCT_PROFILE.pipeNamePrefix}-S-1-5-21-1-2-3-1001`
		);
	});

	it("splits the install path into segments without inventing any", () => {
		expect(WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS.join("/")).toBe(
			CURSOR_PRODUCT_PROFILE.installRelativePath
		);
		expect(WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS[0]).toBe(".cursor");
	});

	it("is what the signer pin reads", () => {
		expect(PINNED_SIGNER_SUBJECTS).toEqual(CURSOR_PRODUCT_PROFILE.pinnedSignerSubjects);
		for (const subject of CURSOR_PRODUCT_PROFILE.pinnedSignerSubjects) {
			expect(isPinnedSigner(subject)).toBe(true);
		}
	});
});
