import type { Context } from '@anysphere/context';
import type { SidecarLineChannel } from './rpc-connection';

/**
 * The platform-specific half of talking to a sidecar: how to find a running
 * one, how to start one that is not running, what endpoint string to dial, and
 * what (if anything) has to happen on a connection before it may carry RPC.
 * Everything after that — request framing, response parsing, retries — is
 * shared (`./sidecar-rpc-client`).
 *
 * macOS discovers the sidecar through the `service.json` rendezvous file it
 * publishes, launches the helper app, and needs no preamble. Windows derives
 * the per-user pipe name from the caller's SID, launches the sidecar with a
 * freshly minted launch token, and presents that token in a handshake on every
 * connection.
 */
export interface SidecarTransport {
	/** Short identifier for logs, e.g. `unix-socket` or `named-pipe`. */
	readonly id: string;

	/**
	 * Resolve the endpoint to dial, launching the sidecar if needed.
	 *
	 * `forceLaunch` is set when a previous call failed before the request
	 * could reach the sidecar, so the transport must not reuse a cached or
	 * published endpoint it already handed out.
	 *
	 * **Callers must not overlap calls to this method.** `SidecarRpcClient`
	 * guarantees that by coalescing concurrent discovery, and the Windows
	 * transport depends on it: two launches in flight together overwrite each
	 * other's bookkeeping, and the second finds no binding to retire, so it can
	 * spawn while the first sidecar still holds the single pipe instance. The
	 * requirement is stated here because it lives in the caller, and a new
	 * transport would otherwise inherit it without being told.
	 */
	resolveEndpoint(ctx: Context, forceLaunch: boolean): Promise<string>;

	/**
	 * Per-connection preamble, run after connect and before the first RPC
	 * line. Throwing abandons the connection with the request unsent. Absent
	 * on transports whose sidecar admits a connection unconditionally.
	 */
	openSession?(ctx: Context, channel: SidecarLineChannel): Promise<void>;

	/**
	 * Release anything this transport is holding, called when the extension is
	 * torn down. Absent on transports that leave no process behind: macOS
	 * launches a shared helper app it does not own, while Windows owns the
	 * sidecar it spawned and must stop it, or the next window's launch inherits
	 * a process still holding the single pipe instance.
	 */
	dispose?(ctx: Context): Promise<void>;
}
