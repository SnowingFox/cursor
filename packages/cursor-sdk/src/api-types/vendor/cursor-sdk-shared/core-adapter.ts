// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/vendor/cursor-sdk-shared/core-adapter.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: vendor/cursor-sdk-shared/core-adapter.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.994Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { InteractionUpdate as CoreInteractionUpdate } from "@anysphere/proto/agent/v1/agent_pb.js";
import type { InteractionUpdate as SdkInteractionUpdate } from "./delta-types.js";
export declare function coreToSdkUpdate(core: CoreInteractionUpdate, sessionId: string): SdkInteractionUpdate | null;
