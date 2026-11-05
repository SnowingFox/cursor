// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/safe-node-http-client.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: safe-node-http-client.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.988Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { UniversalClientFn, UniversalClientRequest } from "@connectrpc/connect/protocol";
import { type NodeHttpClientOptions } from "@connectrpc/connect-node";
/**
 * connect-node only attaches a swallowing `.catch()` on its internal sentinel
 * promise when `req.signal` is set. Ensure every universal client request has a
 * signal so late stream/transport failures do not surface as unhandled rejections
 * at the process level.
 */
export declare function withRequestAbortSignal(req: UniversalClientRequest): UniversalClientRequest;
export declare function createSafeNodeHttpClient(options: NodeHttpClientOptions): UniversalClientFn;
