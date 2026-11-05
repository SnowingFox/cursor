// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 68100 range:10583133..10619520
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68100: (e, t, r) => {
    "use strict";
    r.d(t, { BU: () => C, HJ: () => b, Hi: () => k, Il: () => _, JF: () => Q, JH: () => Z, KD: () => x, KE: () => I, KS: () => y, Ov: () => P, Oy: () => v, Pg: () => j, QI: () => M, TW: () => pe, Tu: () => R, W$: () => D, W3: () => U, Y3: () => E, dw: () => K, eE: () => F, gq: () => w, hs: () => de, ic: () => ue, k4: () => J, k5: () => se, kA: () => f, mw: () => A, pe: () => B, sY: () => T, uK: () => N, uu: () => ee, uw: () => X, vw: () => S, wq: () => L, xk: () => $, yD: () => q, zP: () => G });
    var n = r(36038), s = r(69584), o = r(86209), i = r(34175), a = r(55094), c = r(54386), l = r(8592);
    const u = "agent.v1.";
    class d extends l.HL {
      static get runtime() {
        return (0, l.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return u;
      }
    }
    var p = (0, l.QT)(n.proto3, u, "LocalPromptQualityInvocationStatus", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "ERRORED"], [3, "ABORTED"]], 1), m = (0, l.QT)(n.proto3, u, "LocalAgentMailboxGapReason", [[0, "UNSPECIFIED"], [1, "TRIMMED"], [2, "LOST"]], 1), h = (0, l.QT)(n.proto3, u, "LocalAgentMailboxEndedReason", [[0, "UNSPECIFIED"], [1, "NO_ACTIVE_SUBSCRIPTIONS"], [2, "STORE_DELETED"], [3, "MIGRATED_TO_CLOUD"]], 1);
    class f extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new f().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new f().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new f().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(f, e2, t2);
      }
      static $() {
        return ["ClientHeartbeat"];
      }
    }
    class g extends d {
      constructor(e2) {
        super(), this.selectedSubagentModels = [], this.selectedSubagentModelDetails = [], this.preFetchedBlobs = [], this.subagentModelOverrides = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new g().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new g().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new g().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(g, e2, t2);
      }
      static $() {
        return ["PrewarmRequest|1 model_details #0|9 requested_model #1?|2 conversation_id 9?|3 conversation_state #2|4 mcp_tools #3|5 mcp_file_system_options #4?|6 best_of_n_group_id 9?|7 try_use_best_of_n_promotion 8?|8 custom_system_prompt 9?|10 suggest_next_prompt 8?|11 subagent_type_name 9?|12 exclude_workspace_context 8?|13 harness 9?|14 selected_subagent_models #1*|15 selected_subagent_model_details #0*|16 conversation_group_id 9?|17 pre_fetched_blobs #5*|18 client_supports_inline_images 8?|19 subagent_model_overrides #6*|20 can_create_cloud_subagents 8?|21 suppress_subagent_progress_update_tool 8?|22 client_supports_send_to_user 8?|23 computer_use_coordinate_mode 9?|24 agent_session_id 9?|26 client_supports_routed_model_update 8?|27 client_llm_gateway_credential #7?|28 client_supports_preview_card 8?|29 started_as_new_project 8?|30 first_project_onboarding 8?", s.Gmx, o.G4, s.Y9z, i.Or, i.Is, s.onr, s.Bjv, s.Ibo];
      }
    }
    class y extends d {
      constructor(e2) {
        super(), this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new y().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new y().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new y().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(y, e2, t2);
      }
      static $() {
        return ["AgentClientMessage|1 run_request #0 message|2 exec_client_message #1 message|5 exec_client_control_message #2 message|3 kv_client_message #3 message|4 conversation_action #4 message|6 interaction_response #5 message|7 client_heartbeat #6 message|8 prewarm_request #7 message", s.Mpn, a.yT, a.$Y, c.gm, s.QFf, s.Y5, f, g];
      }
    }
    class w extends d {
      constructor(e2) {
        super(), this.serverFirstTokenMs = 0, this.preStreamSetupMs = 0, this.waitForFirstEventMs = 0, this.slowPoolWaitMs = 0, this.clientClock = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new w().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new w().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new w().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(w, e2, t2);
      }
      static $() {
        return ["TtftBreakdown|1 server_first_token_ms 1|2 pre_stream_setup_ms 1|3 wait_for_first_event_ms 1|4 provider_ttft_ms 1?|5 slow_pool_wait_ms 1|6 client_prep_ms 1?|7 client_clock 8"];
      }
    }
    class v extends d {
      constructor(e2) {
        super(), this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new v().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new v().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new v().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(v, e2, t2);
      }
      static $() {
        return ["AgentServerMessage|1 interaction_update #0 message|2 exec_server_message #1 message|5 exec_server_control_message #2 message|3 conversation_checkpoint_update #3 message|4 kv_server_message #4 message|7 interaction_query #5 message|8 ttft_breakdown #6", s.Uq, a.Ye, a.Nv, s.Y9z, c.km, s.Pd7, w];
      }
    }
    class _ extends d {
      constructor(e2) {
        super(), this.userMessage = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_, e2, t2);
      }
      static $() {
        return ["NameAgentRequest|1 user_message 9"];
      }
    }
    class A extends d {
      constructor(e2) {
        super(), this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new A().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new A().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new A().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(A, e2, t2);
      }
      static $() {
        return ["NameAgentResponse|1 name 9"];
      }
    }
    class S extends d {
      constructor(e2) {
        super(), this.conversationId = "", this.workspacePaths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new S().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new S().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new S().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(S, e2, t2);
      }
      static $() {
        return ["UpdateConversationMetadataRequest|1 conversation_id 9|2 name 9?|3 only_set_name_if_empty 8?|4 workspace_paths 9*"];
      }
    }
    class b extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new b().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new b().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new b().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(b, e2, t2);
      }
      static $() {
        return ["UpdateConversationMetadataResponse"];
      }
    }
    class E extends d {
      constructor(e2) {
        super(), this.conversationId = "", this.rootPromptMessagesJson = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new E().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new E().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new E().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(E, e2, t2);
      }
      static $() {
        return ["GetPromptContextUsageRequest|1 conversation_id 9|3 root_prompt_messages_json 12*"];
      }
    }
    class I extends d {
      constructor(e2) {
        super(), this.unavailableBlobCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new I().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new I().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new I().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(I, e2, t2);
      }
      static $() {
        return ["GetPromptContextUsageResponse|2 unavailable_blob_count 13|3 tree #0", s.d2k];
      }
    }
    class C extends d {
      constructor(e2) {
        super(), this.formattedConversation = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new C().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new C().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new C().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(C, e2, t2);
      }
      static $() {
        return ["CreateTranscriptOverviewRequest|1 formatted_conversation 9"];
      }
    }
    class k extends d {
      constructor(e2) {
        super(), this.overview = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new k().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new k().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new k().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(k, e2, t2);
      }
      static $() {
        return ["CreateTranscriptOverviewResponse|1 overview 9"];
      }
    }
    class x extends d {
      constructor(e2) {
        super(), this.customModelIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new x().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new x().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new x().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(x, e2, t2);
      }
      static $() {
        return ["GetUsableModelsRequest|1 custom_model_ids 9*"];
      }
    }
    class T extends d {
      constructor(e2) {
        super(), this.models = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new T().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new T().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new T().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(T, e2, t2);
      }
      static $() {
        return ["GetUsableModelsResponse|1 models #0*", s.Gmx];
      }
    }
    class R extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new R().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new R().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new R().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(R, e2, t2);
      }
      static $() {
        return ["GetDefaultModelForCliRequest"];
      }
    }
    class B extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new B().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new B().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new B().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(B, e2, t2);
      }
      static $() {
        return ["GetDefaultModelForCliResponse|1 model #0", s.Gmx];
      }
    }
    class P extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new P().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new P().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new P().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(P, e2, t2);
      }
      static $() {
        return ["GetAllowedModelIntentsRequest"];
      }
    }
    class J extends d {
      constructor(e2) {
        super(), this.modelIntents = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new J().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new J().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new J().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(J, e2, t2);
      }
      static $() {
        return ["GetAllowedModelIntentsResponse|1 model_intents 9*"];
      }
    }
    class M extends d {
      constructor(e2) {
        super(), this.id = new Uint8Array(0), this.value = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new M().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new M().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new M().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(M, e2, t2);
      }
      static $() {
        return ["BlobEntry|1 id 12|2 value 12"];
      }
    }
    class q extends d {
      constructor(e2) {
        super(), this.conversationId = "", this.blobs = [], this.chunkIndex = 0, this.totalChunks = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new q().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new q().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new q().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(q, e2, t2);
      }
      static $() {
        return ["UploadConversationBlobsRequest|1 conversation_id 9|2 blobs #0*|3 chunk_index 5|4 total_chunks 5", M];
      }
    }
    class D extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new D().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new D().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new D().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(D, e2, t2);
      }
      static $() {
        return ["UploadConversationBlobsResponse"];
      }
    }
    class O extends d {
      constructor(e2) {
        super(), this.invocationId = "", this.attemptRequestId = "", this.attempt = 0, this.startedAt = "", this.completedAt = "", this.modelId = "", this.providerName = "", this.status = p.UNSPECIFIED, this.messages = [], this.responseMessages = [], this.toolsJson = "", this.promptTokens = n.protoInt64.zero, this.completionTokens = n.protoInt64.zero, this.totalTokens = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new O().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new O().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new O().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(O, e2, t2);
      }
      static $() {
        return ["LocalPromptQualityInvocation|1 invocation_id 9|2 attempt_request_id 9|3 attempt 5|4 started_at 9|5 completed_at 9|6 model_id 9|7 provider_name 9|8 status #0|9 messages 12*|10 response_messages 12*|11 tools_json 9|12 prompt_tokens 3|13 completion_tokens 3|14 total_tokens 3|15 token_limit 3?|16 error_message 9?|17 prompt_tag 9?|18 feature_type 9?", p];
      }
    }
    class N extends d {
      constructor(e2) {
        super(), this.schemaVersion = 0, this.generationUuid = "", this.conversationId = "", this.payloadDigest = "", this.invocations = [], this.terminalStatus = p.UNSPECIFIED, this.createdAt = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new N().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new N().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new N().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(N, e2, t2);
      }
      static $() {
        return ["UploadLocalAgentRunToPromptQualityRequest|1 schema_version 5|2 generation_uuid 9|3 conversation_id 9|4 payload_digest 9|5 invocations #0*|6 terminal_status #1|7 created_at 9", O, p];
      }
    }
    class F extends d {
      constructor(e2) {
        super(), this.requestId = "", this.primaryInvocationId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new F().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new F().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new F().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(F, e2, t2);
      }
      static $() {
        return ["UploadLocalAgentRunToPromptQualityResponse|1 request_id 9|2 primary_invocation_id 9"];
      }
    }
    class U extends d {
      constructor(e2) {
        super(), this.conversationId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new U().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new U().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new U().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(U, e2, t2);
      }
      static $() {
        return ["GetSignedUrlForAttachedMediaRequest|3 conversation_id 9|1 key 9?|2 mime_type 9?|4 content_length_bytes 3?"];
      }
    }
    class L extends d {
      constructor(e2) {
        super(), this.key = "", this.postUrl = "", this.getUrl = "", this.expiresAtUnixMs = n.protoInt64.zero, this.refreshAfterUnixMs = n.protoInt64.zero, this.postFields = {}, this.putUrl = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new L().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new L().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new L().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(L, e2, t2);
      }
      static $() {
        return ["GetSignedUrlForAttachedMediaResponse|1 key 9|2 post_url 9|3 get_url 9|4 expires_at_unix_ms 3|5 refresh_after_unix_ms 3|6 post_fields 9,9|7 put_url 9"];
      }
    }
    class $ extends d {
      constructor(e2) {
        super(), this.conversationId = "", this.sourceConversationId = "", this.sourceRequestId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($, e2, t2);
      }
      static $() {
        return ["NotifyConversationCloneRequest|1 conversation_id 9|2 source_conversation_id 9|3 source_request_id 9"];
      }
    }
    class Q extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Q().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Q().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Q().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Q, e2, t2);
      }
      static $() {
        return ["NotifyConversationCloneResponse"];
      }
    }
    class j extends d {
      constructor(e2) {
        super(), this.currentModel = "", this.maxMode = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new j().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new j().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new j().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(j, e2, t2);
      }
      static $() {
        return ["GetNewChatNudgeLegacyModelPickerRequest|1 current_model 9|2 max_mode 8"];
      }
    }
    class G extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new G().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new G().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new G().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(G, e2, t2);
      }
      static $() {
        return ["GetNewChatNudgeLegacyModelPickerResponse|1 nudge #0?", V];
      }
    }
    class H extends d {
      constructor(e2) {
        super(), this.bannerMessage = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new H().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new H().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new H().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(H, e2, t2);
      }
      static $() {
        return ["NudgeBumpVariant|1 banner_message 9|2 banner_description 9?"];
      }
    }
    class z extends d {
      constructor(e2) {
        super(), this.popupMessage = "", this.acceptLabel = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(z, e2, t2);
      }
      static $() {
        return ["NudgeAskVariant|1 popup_message 9|2 accept_label 9"];
      }
    }
    class W extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new W().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new W().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new W().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(W, e2, t2);
      }
      static $() {
        return ["NudgeSilentSwitchVariant"];
      }
    }
    class V extends d {
      constructor(e2) {
        super(), this.nudgeId = "", this.targetModel = "", this.experimentName = "", this.variant = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new V().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new V().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new V().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(V, e2, t2);
      }
      static $() {
        return ["NewChatNudge|1 nudge_id 9|2 target_model 9|3 experiment_name 9|4 bump #0 variant|5 ask #1 variant|6 silent_switch #2 variant", H, z, W];
      }
    }
    class K extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new K().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new K().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new K().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(K, e2, t2);
      }
      static $() {
        return ["ListLocalSubscriptionToolsRequest"];
      }
    }
    class Y extends d {
      constructor(e2) {
        super(), this.toolName = "", this.description = "", this.inputSchemaJson = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Y().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Y().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Y().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Y, e2, t2);
      }
      static $() {
        return ["LocalSubscriptionToolDefinition|1 tool_name 9|2 description 9|3 input_schema_json 9"];
      }
    }
    class Z extends d {
      constructor(e2) {
        super(), this.tools = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Z, e2, t2);
      }
      static $() {
        return ["ListLocalSubscriptionToolsResponse|1 tools #0*", Y];
      }
    }
    class X extends d {
      constructor(e2) {
        super(), this.conversationId = "", this.toolName = "", this.toolArgsJson = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new X().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new X().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new X().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(X, e2, t2);
      }
      static $() {
        return ["CallLocalSubscriptionToolRequest|1 conversation_id 9|2 tool_name 9|3 tool_args_json 9"];
      }
    }
    class ee extends d {
      constructor(e2) {
        super(), this.resultJson = "", this.isError = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ee().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ee().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ee().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ee, e2, t2);
      }
      static $() {
        return ["CallLocalSubscriptionToolResponse|1 result_json 9|2 is_error 8|3 watch_expires_at_unix_ms 3?"];
      }
    }
    class te extends d {
      constructor(e2) {
        super(), this.subscriptionId = "", this.eventId = "", this.inboxRelPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new te().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new te().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new te().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(te, e2, t2);
      }
      static $() {
        return ["SubscriptionDeliveryEntry|1 subscription_id 9|2 event_id 9|3 inbox_rel_path 9"];
      }
    }
    class re extends d {
      constructor(e2) {
        super(), this.subscriptionId = "", this.inboxRelPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new re().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new re().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new re().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(re, e2, t2);
      }
      static $() {
        return ["SubscriptionRemovedEntry|1 subscription_id 9|2 inbox_rel_path 9"];
      }
    }
    class ne extends d {
      constructor(e2) {
        super(), this.localAgentMailboxEntryId = "", this.payload = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ne().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ne().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ne().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ne, e2, t2);
      }
      static $() {
        return ["LocalAgentMailboxEntry|1 local_agent_mailbox_entry_id 9|2 subscription_delivery #0 payload|3 subscription_removed #1 payload", te, re];
      }
    }
    class se extends d {
      constructor(e2) {
        super(), this.conversations = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new se().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new se().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new se().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(se, e2, t2);
      }
      static $() {
        return ["StreamLocalAgentMailboxRequest|1 conversations #0*", oe];
      }
    }
    class oe extends d {
      constructor(e2) {
        super(), this.conversationId = "", this.afterOffset = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new oe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new oe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new oe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(oe, e2, t2);
      }
      static $() {
        return ["StreamLocalAgentMailboxRequest.ConversationCursor|1 conversation_id 9|2 after_offset 9"];
      }
    }
    class ie extends d {
      constructor(e2) {
        super(), this.conversationId = "", this.offset = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ie().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ie().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ie().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ie, e2, t2);
      }
      static $() {
        return ["LocalAgentMailboxDelivery|1 conversation_id 9|2 offset 9|3 entry #0", ne];
      }
    }
    class ae extends d {
      constructor(e2) {
        super(), this.conversationId = "", this.afterOffset = "", this.resumeOffset = "", this.reason = m.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ae().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ae().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ae().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ae, e2, t2);
      }
      static $() {
        return ["LocalAgentMailboxGap|1 conversation_id 9|2 after_offset 9|3 resume_offset 9|4 reason #0", m];
      }
    }
    class ce extends d {
      constructor(e2) {
        super(), this.conversationId = "", this.reason = h.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ce().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ce().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ce().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ce, e2, t2);
      }
      static $() {
        return ["LocalAgentMailboxEnded|1 conversation_id 9|2 reason #0", h];
      }
    }
    class le extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new le().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new le().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new le().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(le, e2, t2);
      }
      static $() {
        return ["StreamLocalAgentMailboxHeartbeat"];
      }
    }
    class ue extends d {
      constructor(e2) {
        super(), this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ue().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ue().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ue().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ue, e2, t2);
      }
      static $() {
        return ["StreamLocalAgentMailboxResponse|1 delivery #0 message|2 heartbeat #1 message|3 gap #2 message|4 ended #3 message", ie, le, ae, ce];
      }
    }
    class de extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new de().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new de().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new de().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(de, e2, t2);
      }
      static $() {
        return ["GetNewChatNudgeParameterizedModelPickerRequest|1 current_model #0|2 model_nudges_enabled 8?", o.G4];
      }
    }
    class pe extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pe, e2, t2);
      }
      static $() {
        return ["GetNewChatNudgeParameterizedModelPickerResponse|1 nudge #0?", me];
      }
    }
    class me extends d {
      constructor(e2) {
        super(), this.nudgeId = "", this.experimentName = "", this.variant = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new me().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new me().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new me().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(me, e2, t2);
      }
      static $() {
        return ["NewChatNudgeV2|1 nudge_id 9|2 target_model #0|3 experiment_name 9|4 bump #1 variant|5 ask #2 variant|6 silent_switch #3 variant", o.G4, H, z, W];
      }
    }
  }