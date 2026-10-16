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
