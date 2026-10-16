/**
 * The Windows host floor and the Cursor version comparison behind it.
 *
 * Cursor versions are `major.minor.patch` with an optional `-pre.N`
 * prerelease tag (`3.20.0-pre.7`, `3.21.0`).
 */

/**
 * The oldest Cursor whose `cursor-agent-exec` forwards a 1456×840 WebP frame
 * untouched. Earlier hosts throw `webp codec not registered` on every
 * screenshot, so the feature is refused on them outright rather than
 * registered and broken. Statsig carries the same floor as a `clientVersion`
 * kill rule on the gate; this is the client-side half, and it is what catches
 * a newer extension run against an older host with `--extensionDevelopmentPath`.
 */
export const WINDOWS_MINIMUM_HOST_VERSION = '3.20.0-pre.7';

/**
 * Whether `hostVersion` is at least the Windows host floor. A release is newer
 * than every prerelease of the same triple. A version that does not parse is
 * treated as new enough — the floor is a guard against a known-broken host,
 * not a security boundary, and refusing on an unfamiliar string would take
 * the feature away from a build this code has never seen.
 */
export function hostVersionMeetsWindowsFloor(
	hostVersion: string,
	floor: string = WINDOWS_MINIMUM_HOST_VERSION
): boolean {
	const comparison = compareCursorVersions(hostVersion, floor);
	return comparison === undefined || comparison >= 0;
}

/** Negative, zero, or positive; undefined when either side does not parse. */
export function compareCursorVersions(
	left: string,
	right: string
): number | undefined {
	const a = parseCursorVersion(left);
	const b = parseCursorVersion(right);
	if (a === undefined || b === undefined) {
		return undefined;
	}
	for (let index = 0; index < 3; index += 1) {
		if (a.core[index] !== b.core[index]) {
			return a.core[index] < b.core[index] ? -1 : 1;
		}
	}
	if (a.prerelease === undefined || b.prerelease === undefined) {
		if (a.prerelease === b.prerelease) {
			return 0;
		}
		return a.prerelease === undefined ? 1 : -1;
	}
	const length = Math.max(a.prerelease.length, b.prerelease.length);
	for (let index = 0; index < length; index += 1) {
		const x = a.prerelease[index];
		const y = b.prerelease[index];
		if (x === undefined || y === undefined) {
			return x === undefined ? -1 : 1;
		}
		if (x === y) {
			continue;
		}
		const xNumber = /^\d+$/.test(x) ? Number(x) : undefined;
		const yNumber = /^\d+$/.test(y) ? Number(y) : undefined;
		if (xNumber !== undefined && yNumber !== undefined) {
			return xNumber < yNumber ? -1 : 1;
		}
		if (xNumber !== undefined) {
			return -1;
		}
		if (yNumber !== undefined) {
			return 1;
		}
		return x < y ? -1 : 1;
	}
	return 0;
}

function parseCursorVersion(
	version: string
): { core: [number, number, number]; prerelease?: string[] } | undefined {
	const match = /^v?(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?(?:\+.*)?$/.exec(
		version.trim()
	);
	if (match === null) {
		return undefined;
	}
	return {
		core: [Number(match[1]), Number(match[2]), Number(match[3])],
		prerelease: match[4]?.split('.'),
	};
}
