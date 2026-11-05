// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/src/backends/mac/install-lock.ts sha256:7a454f811b3ec7c3ec4ba3975f6fc01e186559fc59b5d3d8853fec1f5462cc5d
// module: (adopted file)
// basis: shipped-source confidence: A
// method: adopted-source
// run: ext-p0 2026-11-05T10:09:48.889Z

import {
	describeRecoveredSidecarInstallLock,
	SIDECAR_INSTALL_LOCK_STALE_AFTER_MS,
	type SidecarInstallLockOptions,
} from "../common/sidecar-install-lock";

/**
 * The lock options both macOS holders use: installing a downloaded helper
 * and launching it. A lock left by a window that quit or crashed while
 * holding it is taken over once its owner is gone or the bound passes,
 * rather than refusing every later activation until removed by hand.
 */
export function macSidecarInstallLockOptions(
	log?: (message: string) => void
): SidecarInstallLockOptions {
	return {
		staleRecovery: {
			staleAfterMs: SIDECAR_INSTALL_LOCK_STALE_AFTER_MS,
			onRecovered: lock => log?.(describeRecoveredSidecarInstallLock(lock)),
		},
	};
}
