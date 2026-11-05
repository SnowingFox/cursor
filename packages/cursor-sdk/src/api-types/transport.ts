// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/transport.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: transport.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.981Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { Interceptor, Transport } from "@connectrpc/connect";
/**
 * Runtime-agnostic Connect transport seam.
 *
 * The SDK's RPC layer must not statically import `@connectrpc/connect-node`,
 * because that couples the whole load path to Node and forces fetch-only
 * runtimes to resolve a Node-only package at import time. This module is the
 * single place that decides which Connect transport implementation to use and
 * loads it dynamically:
 *
 * - **Node / Bun** → `@connectrpc/connect-node` (native HTTP/2 bidi, including
 *   the HTTP/1.1 vs HTTP/2 `httpVersion` selection the callers already compute).
 *   Bun implements `node:http2`, so it uses the same path as Node.
 * - **Deno / other fetch-only runtimes** → `@connectrpc/connect-web` (fetch).
 * - **Embedder override** → whatever `setConnectTransportFactory` installs.
 *
 * Call sites keep their synchronous shape via {@link createLazyConnectTransport}:
 * the dynamic import is deferred to the first RPC, so nothing about the existing
 * (synchronous) `buildTransport` signature has to change.
 */
export interface ConnectTransportSeamOptions {
    baseUrl: string;
    /**
     * Consumed by the connect-node transport (Node and Bun). The fetch-based
     * transport used on Deno/browser ignores it.
     */
    httpVersion: "1.1" | "2";
    interceptors?: Interceptor[];
}
export type ConnectTransportFactory = (options: ConnectTransportSeamOptions) => Promise<Transport>;
/**
 * Install a custom transport factory (e.g. for an exotic runtime or tests).
 * Pass `undefined` to restore the default runtime-selected behavior.
 */
export declare function setConnectTransportFactory(factory: ConnectTransportFactory | undefined): void;
/**
 * Resolve the runtime-appropriate Connect transport. Async because the
 * underlying implementation is dynamically imported.
 */
export declare function getConnectTransport(options: ConnectTransportSeamOptions): Promise<Transport>;
/**
 * Synchronous `Transport` whose real implementation is resolved lazily (and
 * memoized) on the first `unary`/`stream` call. Lets synchronous call sites
 * keep building transports without awaiting the dynamic import.
 */
export declare function createLazyConnectTransport(options: ConnectTransportSeamOptions): Transport;
