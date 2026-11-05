// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/auth/mint-api-key.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: auth/mint-api-key.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.952Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { CreateUserApiKeyRequest, GetMeRequest } from "@anysphere/proto/aiserver/v1/dashboard_pb.js";
/**
 * Post-login step: use the (short-lived hold on the) browser-login session
 * token to mint a named, expiring user API key via
 * `DashboardService/CreateUserApiKey`, then discard the session token. The
 * minted key is the credential the SDK persists and uses everywhere.
 */
export interface MintApiKeyOptions {
    backendUrl: string;
    accessToken: string;
    name: string;
    /** Epoch ms; omit for a key that never expires. */
    expiresAtMs?: number;
}
export interface MintApiKeyResult {
    apiKey: string;
    email?: string;
}
/** The two DashboardService methods the mint step needs; a test seam. */
export interface MintClient {
    createUserApiKey(req: CreateUserApiKeyRequest): Promise<{
        apiKey: string;
    }>;
    getMe(req: GetMeRequest): Promise<{
        email?: string;
    }>;
}
export declare function mintUserApiKey(options: MintApiKeyOptions, clientForTests?: MintClient): Promise<MintApiKeyResult>;
