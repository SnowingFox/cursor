// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/src/backends/windows/sidecar-client.ts sha256:e2c93e7eb561122ea63a4ed9df4d03874115c8a27ff513c28cd23c04edf2ae25
// module: (adopted file)
// basis: shipped-source confidence: A
// method: adopted-source
// run: ext-p0 2026-11-05T10:09:48.889Z

/** Windows computer-use backend: the shared RPC client over the named-pipe transport. */

import type { ComputerUseMode } from '@anysphere/computer-use/protocol';
import { SidecarRpcClient } from '../common/sidecar-rpc-client';
import { resolveWindowsSidecarExecutable } from './pipe-discovery';
import {
	WindowsSidecarTransport,
	type WindowsSidecarTransportOptions,
} from './transport';

export class WindowsComputerUseRPCClient extends SidecarRpcClient {
	constructor(
		mode: ComputerUseMode,
		options?: WindowsSidecarTransportOptions
	) {
		super(mode, new WindowsSidecarTransport(options));
	}

	/** Cheap probe used to gate registration; does not launch anything. */
	static isInstalled(): boolean {
		return resolveWindowsSidecarExecutable() !== undefined;
	}
}
