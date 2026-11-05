// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/store/local-agent-record-conversion.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: store/local-agent-record-conversion.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.995Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { AgentRecord, RunRecord } from "../run-store-public-types.js";
import type { LocalAgentDocument, LocalAgentRunDocument } from "./local-agent-store.js";
export declare function localAgentDocumentFromAgentRecord(record: AgentRecord): LocalAgentDocument;
export declare function localAgentRunDocumentFromRunRecord(record: RunRecord): LocalAgentRunDocument;
export declare function agentRecordFromLocalAgentDocument(document: LocalAgentDocument): AgentRecord;
export declare function runRecordFromLocalAgentRunDocument(run: LocalAgentRunDocument): RunRecord;
