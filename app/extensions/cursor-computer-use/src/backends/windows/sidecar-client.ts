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
