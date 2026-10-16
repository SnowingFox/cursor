/**
 * Platform selection for the computer-use backend.
 *
 * Both supported platforms speak the same sidecar RPC contract
 * (`@anysphere/computer-use/protocol`); they differ only in how the client
 * finds the sidecar and what it dials — a Unix domain socket on macOS, a
 * named pipe on Windows.
 */

import type { ComputerUseMode } from '@anysphere/computer-use/protocol';
import { MacComputerUseRPCClient } from './mac/sidecar-client';
import { WindowsComputerUseRPCClient } from './windows/sidecar-client';
import type { ComputerUseBackend } from './types';

export interface ComputerUseBackendFactory {
	/** Which sidecar this factory builds a client for, for logs. */
	readonly platform: 'darwin' | 'win32';
	/** Whether a sidecar is installed. Cheap; never launches anything. */
	isInstalled(): boolean;
	create(mode: ComputerUseMode): ComputerUseBackend;
}

const macBackendFactory: ComputerUseBackendFactory = {
	platform: 'darwin',
	isInstalled: () => MacComputerUseRPCClient.isInstalled(),
	create: mode => new MacComputerUseRPCClient(mode),
};

const windowsBackendFactory: ComputerUseBackendFactory = {
	platform: 'win32',
	isInstalled: () => WindowsComputerUseRPCClient.isInstalled(),
	create: mode => new WindowsComputerUseRPCClient(mode),
};

/**
 * The backend for this platform, or undefined where no sidecar exists (Linux
 * has no computer-use sidecar in this repo).
 *
 * Windows was gated off behind a `WINDOWS_BACKEND_ENABLED` interlock while the
 * sidecar's peer verification and launch binding were no-op stubs, because a
 * successful `ping` on the predictable `\\.\pipe\cursor-cua-<SID>` name proved
 * only that *something* had claimed the name. The sidecar now enforces both
 * (`windows/src/sys/peer.rs`, `windows/src/launch_binding.rs`) and the client
 * implements its half of the handshake, including the server-identity check in
 * `windows/server-identity.ts`, so the interlock is gone.
 */
export function resolveComputerUseBackendFactory(
	platform: NodeJS.Platform = process.platform
): ComputerUseBackendFactory | undefined {
	switch (platform) {
		case 'darwin':
			return macBackendFactory;
		case 'win32':
			return windowsBackendFactory;
		default:
			return undefined;
	}
}
