// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5801 range:1292017..1332848
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5801: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { KS: () => E, Oy: () => C, uw: () => ot, uu: () => at, BU: () => T, Hi: () => x, Ov: () => M, k4: () => O, Tu: () => U, pe: () => Q, Pg: () => j, zP: () => X, hs: () => _t, TW: () => yt, Y3: () => R, KE: () => P, W3: () => V, wq: () => z, KD: () => N, sY: () => D, dw: () => nt, JH: () => it, Il: () => b, mw: () => k, xk: () => W, JF: () => Y, k5: () => mt, ic: () => At, vw: () => v, HJ: () => q, yD: () => L, W$: () => $, uK: () => H, eE: () => K });
    var n2 = r2(6038), s2 = r2(6993), i2 = r2(6209), o2 = r2(4175), a = r2(7595), u = r2(8592);
    class c extends u.HL {
      static get runtime() {
        return (0, u.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class l extends c {
      constructor(t3) {
        super(), this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(l, t3, e3);
      }
      static $() {
        return ["Error|1 message 9"];
      }
    }
    class m extends c {
      constructor(t3) {
        super(), this.blobId = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new m().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new m().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new m().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(m, t3, e3);
      }
      static $() {
        return ["GetBlobArgs|1 blob_id 12"];
      }
    }
    class d extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new d().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new d().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new d().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(d, t3, e3);
      }
      static $() {
        return ["GetBlobResult|1 blob_data 12?|2 error #0?", l];
      }
    }
    class f extends c {
      constructor(t3) {
        super(), this.blobId = new Uint8Array(0), this.blobData = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new f().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new f().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new f().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(f, t3, e3);
      }
      static $() {
        return ["SetBlobArgs|1 blob_id 12|2 blob_data 12"];
      }
    }
    class p extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new p().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new p().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new p().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(p, t3, e3);
      }
      static $() {
        return ["SetBlobResult|1 error #0?", l];
      }
    }
    class h extends c {
      constructor(t3) {
        super(), this.id = 0, this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new h().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new h().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new h().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(h, t3, e3);
      }
      static $() {
        return ["KvServerMessage|1 id 13|2 get_blob_args #0 message|3 set_blob_args #1 message|4 span_context #2?", m, f, a.Kg];
      }
    }
    class g extends c {
      constructor(t3) {
        super(), this.id = 0, this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new g().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new g().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new g().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(g, t3, e3);
      }
      static $() {
        return ["KvClientMessage|1 id 13|2 get_blob_result #0 message|3 set_blob_result #1 message", d, p];
      }
    }
    const A = "agent.v1.";
    class _ extends u.HL {
      static get runtime() {
        return (0, u.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return A;
      }
    }
    var y = (0, u.QT)(n2.proto3, A, "LocalPromptQualityInvocationStatus", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "ERRORED"], [3, "ABORTED"]], 1), w = (0, u.QT)(n2.proto3, A, "LocalAgentMailboxGapReason", [[0, "UNSPECIFIED"], [1, "TRIMMED"], [2, "LOST"]], 1), S = (0, u.QT)(n2.proto3, A, "LocalAgentMailboxEndedReason", [[0, "UNSPECIFIED"], [1, "NO_ACTIVE_SUBSCRIPTIONS"], [2, "STORE_DELETED"], [3, "MIGRATED_TO_CLOUD"]], 1);
    class J extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new J().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new J().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new J().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(J, t3, e3);
      }
      static $() {
        return ["ClientHeartbeat"];
      }
    }
    class B extends _ {
      constructor(t3) {
        super(), this.selectedSubagentModels = [], this.selectedSubagentModelDetails = [], this.preFetchedBlobs = [], this.subagentModelOverrides = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new B().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new B().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new B().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(B, t3, e3);
      }
      static $() {
        return ["PrewarmRequest|1 model_details #0|9 requested_model #1?|2 conversation_id 9?|3 conversation_state #2|4 mcp_tools #3|5 mcp_file_system_options #4?|6 best_of_n_group_id 9?|7 try_use_best_of_n_promotion 8?|8 custom_system_prompt 9?|10 suggest_next_prompt 8?|11 subagent_type_name 9?|12 exclude_workspace_context 8?|13 harness 9?|14 selected_subagent_models #1*|15 selected_subagent_model_details #0*|16 conversation_group_id 9?|17 pre_fetched_blobs #5*|18 client_supports_inline_images 8?|19 subagent_model_overrides #6*|20 can_create_cloud_subagents 8?|21 suppress_subagent_progress_update_tool 8?|22 client_supports_send_to_user 8?|23 computer_use_coordinate_mode 9?|24 agent_session_id 9?|26 client_supports_routed_model_update 8?|27 client_llm_gateway_credential #7?|28 client_supports_preview_card 8?|29 started_as_new_project 8?|30 first_project_onboarding 8?", s2.Gmx, i2.G4, s2.Y9z, o2.Or, o2.Is, s2.onr, s2.Bjv, s2.Ibo];
      }
    }
    class E extends _ {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new E().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new E().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new E().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(E, t3, e3);
      }
      static $() {
        return ["AgentClientMessage|1 run_request #0 message|2 exec_client_message #1 message|5 exec_client_control_message #2 message|3 kv_client_message #3 message|4 conversation_action #4 message|6 interaction_response #5 message|7 client_heartbeat #6 message|8 prewarm_request #7 message", s2.Mpn, a.yT, a.$Y, g, s2.QFf, s2.Y5, J, B];
      }
    }
    class I extends _ {
      constructor(t3) {
        super(), this.serverFirstTokenMs = 0, this.preStreamSetupMs = 0, this.waitForFirstEventMs = 0, this.slowPoolWaitMs = 0, this.clientClock = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new I().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new I().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new I().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(I, t3, e3);
      }
      static $() {
        return ["TtftBreakdown|1 server_first_token_ms 1|2 pre_stream_setup_ms 1|3 wait_for_first_event_ms 1|4 provider_ttft_ms 1?|5 slow_pool_wait_ms 1|6 client_prep_ms 1?|7 client_clock 8"];
      }
    }
    class C extends _ {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new C().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new C().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new C().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(C, t3, e3);
      }
      static $() {
        return ["AgentServerMessage|1 interaction_update #0 message|2 exec_server_message #1 message|5 exec_server_control_message #2 message|3 conversation_checkpoint_update #3 message|4 kv_server_message #4 message|7 interaction_query #5 message|8 ttft_breakdown #6", s2.Uq, a.Ye, a.Nv, s2.Y9z, h, s2.Pd7, I];
      }
    }
    class b extends _ {
      constructor(t3) {
        super(), this.userMessage = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new b().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new b().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new b().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(b, t3, e3);
      }
      static $() {
        return ["NameAgentRequest|1 user_message 9"];
      }
    }
    class k extends _ {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new k().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new k().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new k().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(k, t3, e3);
      }
      static $() {
        return ["NameAgentResponse|1 name 9"];
      }
    }
    class v extends _ {
      constructor(t3) {
        super(), this.conversationId = "", this.workspacePaths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new v().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new v().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new v().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(v, t3, e3);
      }
      static $() {
        return ["UpdateConversationMetadataRequest|1 conversation_id 9|2 name 9?|3 only_set_name_if_empty 8?|4 workspace_paths 9*"];
      }
    }
    class q extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(q, t3, e3);
      }
      static $() {
        return ["UpdateConversationMetadataResponse"];
      }
    }
    class R extends _ {
      constructor(t3) {
        super(), this.conversationId = "", this.rootPromptMessagesJson = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new R().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new R().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new R().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(R, t3, e3);
      }
      static $() {
        return ["GetPromptContextUsageRequest|1 conversation_id 9|3 root_prompt_messages_json 12*"];
      }
    }
    class P extends _ {
      constructor(t3) {
        super(), this.unavailableBlobCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new P().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new P().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new P().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(P, t3, e3);
      }
      static $() {
        return ["GetPromptContextUsageResponse|2 unavailable_blob_count 13|3 tree #0", s2.d2k];
      }
    }
    class T extends _ {
      constructor(t3) {
        super(), this.formattedConversation = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new T().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new T().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new T().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(T, t3, e3);
      }
      static $() {
        return ["CreateTranscriptOverviewRequest|1 formatted_conversation 9"];
      }
    }
    class x extends _ {
      constructor(t3) {
        super(), this.overview = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new x().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new x().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new x().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(x, t3, e3);
      }
      static $() {
        return ["CreateTranscriptOverviewResponse|1 overview 9"];
      }
    }
    class N extends _ {
      constructor(t3) {
        super(), this.customModelIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new N().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new N().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new N().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(N, t3, e3);
      }
      static $() {
        return ["GetUsableModelsRequest|1 custom_model_ids 9*"];
      }
    }
    class D extends _ {
      constructor(t3) {
        super(), this.models = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new D().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new D().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new D().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(D, t3, e3);
      }
      static $() {
        return ["GetUsableModelsResponse|1 models #0*", s2.Gmx];
      }
    }
    class U extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new U().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new U().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new U().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(U, t3, e3);
      }
      static $() {
        return ["GetDefaultModelForCliRequest"];
      }
    }
    class Q extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Q, t3, e3);
      }
      static $() {
        return ["GetDefaultModelForCliResponse|1 model #0", s2.Gmx];
      }
    }
    class M extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new M().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new M().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new M().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(M, t3, e3);
      }
      static $() {
        return ["GetAllowedModelIntentsRequest"];
      }
    }
    class O extends _ {
      constructor(t3) {
        super(), this.modelIntents = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new O().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new O().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new O().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(O, t3, e3);
      }
      static $() {
        return ["GetAllowedModelIntentsResponse|1 model_intents 9*"];
      }
    }
    class F extends _ {
      constructor(t3) {
        super(), this.id = new Uint8Array(0), this.value = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new F().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new F().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new F().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(F, t3, e3);
      }
      static $() {
        return ["BlobEntry|1 id 12|2 value 12"];
      }
    }
    class L extends _ {
      constructor(t3) {
        super(), this.conversationId = "", this.blobs = [], this.chunkIndex = 0, this.totalChunks = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new L().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new L().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new L().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(L, t3, e3);
      }
      static $() {
        return ["UploadConversationBlobsRequest|1 conversation_id 9|2 blobs #0*|3 chunk_index 5|4 total_chunks 5", F];
      }
    }
    class $ extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($, t3, e3);
      }
      static $() {
        return ["UploadConversationBlobsResponse"];
      }
    }
    class G extends _ {
      constructor(t3) {
        super(), this.invocationId = "", this.attemptRequestId = "", this.attempt = 0, this.startedAt = "", this.completedAt = "", this.modelId = "", this.providerName = "", this.status = y.UNSPECIFIED, this.messages = [], this.responseMessages = [], this.toolsJson = "", this.promptTokens = n2.protoInt64.zero, this.completionTokens = n2.protoInt64.zero, this.totalTokens = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new G().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new G().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new G().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(G, t3, e3);
      }
      static $() {
        return ["LocalPromptQualityInvocation|1 invocation_id 9|2 attempt_request_id 9|3 attempt 5|4 started_at 9|5 completed_at 9|6 model_id 9|7 provider_name 9|8 status #0|9 messages 12*|10 response_messages 12*|11 tools_json 9|12 prompt_tokens 3|13 completion_tokens 3|14 total_tokens 3|15 token_limit 3?|16 error_message 9?|17 prompt_tag 9?|18 feature_type 9?", y];
      }
    }
    class H extends _ {
      constructor(t3) {
        super(), this.schemaVersion = 0, this.generationUuid = "", this.conversationId = "", this.payloadDigest = "", this.invocations = [], this.terminalStatus = y.UNSPECIFIED, this.createdAt = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new H().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new H().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new H().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(H, t3, e3);
      }
      static $() {
        return ["UploadLocalAgentRunToPromptQualityRequest|1 schema_version 5|2 generation_uuid 9|3 conversation_id 9|4 payload_digest 9|5 invocations #0*|6 terminal_status #1|7 created_at 9", G, y];
      }
    }
    class K extends _ {
      constructor(t3) {
        super(), this.requestId = "", this.primaryInvocationId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new K().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new K().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new K().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(K, t3, e3);
      }
      static $() {
        return ["UploadLocalAgentRunToPromptQualityResponse|1 request_id 9|2 primary_invocation_id 9"];
      }
    }
    class V extends _ {
      constructor(t3) {
        super(), this.conversationId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new V().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new V().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new V().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(V, t3, e3);
      }
      static $() {
        return ["GetSignedUrlForAttachedMediaRequest|3 conversation_id 9|1 key 9?|2 mime_type 9?|4 content_length_bytes 3?"];
      }
    }
    class z extends _ {
      constructor(t3) {
        super(), this.key = "", this.postUrl = "", this.getUrl = "", this.expiresAtUnixMs = n2.protoInt64.zero, this.refreshAfterUnixMs = n2.protoInt64.zero, this.postFields = {}, this.putUrl = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new z().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new z().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new z().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(z, t3, e3);
      }
      static $() {
        return ["GetSignedUrlForAttachedMediaResponse|1 key 9|2 post_url 9|3 get_url 9|4 expires_at_unix_ms 3|5 refresh_after_unix_ms 3|6 post_fields 9,9|7 put_url 9"];
      }
    }
    class W extends _ {
      constructor(t3) {
        super(), this.conversationId = "", this.sourceConversationId = "", this.sourceRequestId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new W().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new W().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new W().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(W, t3, e3);
      }
      static $() {
        return ["NotifyConversationCloneRequest|1 conversation_id 9|2 source_conversation_id 9|3 source_request_id 9"];
      }
    }
    class Y extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Y().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Y().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Y().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Y, t3, e3);
      }
      static $() {
        return ["NotifyConversationCloneResponse"];
      }
    }
    class j extends _ {
      constructor(t3) {
        super(), this.currentModel = "", this.maxMode = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new j().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new j().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new j().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(j, t3, e3);
      }
      static $() {
        return ["GetNewChatNudgeLegacyModelPickerRequest|1 current_model 9|2 max_mode 8"];
      }
    }
    class X extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new X().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new X().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new X().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(X, t3, e3);
      }
      static $() {
        return ["GetNewChatNudgeLegacyModelPickerResponse|1 nudge #0?", rt];
      }
    }
    class Z extends _ {
      constructor(t3) {
        super(), this.bannerMessage = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Z().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Z().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Z().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Z, t3, e3);
      }
      static $() {
        return ["NudgeBumpVariant|1 banner_message 9|2 banner_description 9?"];
      }
    }
    class tt extends _ {
      constructor(t3) {
        super(), this.popupMessage = "", this.acceptLabel = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tt, t3, e3);
      }
      static $() {
        return ["NudgeAskVariant|1 popup_message 9|2 accept_label 9"];
      }
    }
    class et extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new et().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new et().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new et().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(et, t3, e3);
      }
      static $() {
        return ["NudgeSilentSwitchVariant"];
      }
    }
    class rt extends _ {
      constructor(t3) {
        super(), this.nudgeId = "", this.targetModel = "", this.experimentName = "", this.variant = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rt, t3, e3);
      }
      static $() {
        return ["NewChatNudge|1 nudge_id 9|2 target_model 9|3 experiment_name 9|4 bump #0 variant|5 ask #1 variant|6 silent_switch #2 variant", Z, tt, et];
      }
    }
    class nt extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nt, t3, e3);
      }
      static $() {
        return ["ListLocalSubscriptionToolsRequest"];
      }
    }
    class st extends _ {
      constructor(t3) {
        super(), this.toolName = "", this.description = "", this.inputSchemaJson = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new st().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new st().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new st().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(st, t3, e3);
      }
      static $() {
        return ["LocalSubscriptionToolDefinition|1 tool_name 9|2 description 9|3 input_schema_json 9"];
      }
    }
    class it extends _ {
      constructor(t3) {
        super(), this.tools = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new it().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new it().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new it().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(it, t3, e3);
      }
      static $() {
        return ["ListLocalSubscriptionToolsResponse|1 tools #0*", st];
      }
    }
    class ot extends _ {
      constructor(t3) {
        super(), this.conversationId = "", this.toolName = "", this.toolArgsJson = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ot().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ot().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ot().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ot, t3, e3);
      }
      static $() {
        return ["CallLocalSubscriptionToolRequest|1 conversation_id 9|2 tool_name 9|3 tool_args_json 9"];
      }
    }
    class at extends _ {
      constructor(t3) {
        super(), this.resultJson = "", this.isError = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new at().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new at().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new at().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(at, t3, e3);
      }
      static $() {
        return ["CallLocalSubscriptionToolResponse|1 result_json 9|2 is_error 8|3 watch_expires_at_unix_ms 3?"];
      }
    }
    class ut extends _ {
      constructor(t3) {
        super(), this.subscriptionId = "", this.eventId = "", this.inboxRelPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ut().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ut().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ut().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ut, t3, e3);
      }
      static $() {
        return ["SubscriptionDeliveryEntry|1 subscription_id 9|2 event_id 9|3 inbox_rel_path 9"];
      }
    }
    class ct extends _ {
      constructor(t3) {
        super(), this.subscriptionId = "", this.inboxRelPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ct().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ct().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ct().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ct, t3, e3);
      }
      static $() {
        return ["SubscriptionRemovedEntry|1 subscription_id 9|2 inbox_rel_path 9"];
      }
    }
    class lt extends _ {
      constructor(t3) {
        super(), this.localAgentMailboxEntryId = "", this.payload = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lt, t3, e3);
      }
      static $() {
        return ["LocalAgentMailboxEntry|1 local_agent_mailbox_entry_id 9|2 subscription_delivery #0 payload|3 subscription_removed #1 payload", ut, ct];
      }
    }
    class mt extends _ {
      constructor(t3) {
        super(), this.conversations = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mt, t3, e3);
      }
      static $() {
        return ["StreamLocalAgentMailboxRequest|1 conversations #0*", dt];
      }
    }
    class dt extends _ {
      constructor(t3) {
        super(), this.conversationId = "", this.afterOffset = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dt, t3, e3);
      }
      static $() {
        return ["StreamLocalAgentMailboxRequest.ConversationCursor|1 conversation_id 9|2 after_offset 9"];
      }
    }
    class ft extends _ {
      constructor(t3) {
        super(), this.conversationId = "", this.offset = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ft().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ft().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ft().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ft, t3, e3);
      }
      static $() {
        return ["LocalAgentMailboxDelivery|1 conversation_id 9|2 offset 9|3 entry #0", lt];
      }
    }
    class pt extends _ {
      constructor(t3) {
        super(), this.conversationId = "", this.afterOffset = "", this.resumeOffset = "", this.reason = w.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pt, t3, e3);
      }
      static $() {
        return ["LocalAgentMailboxGap|1 conversation_id 9|2 after_offset 9|3 resume_offset 9|4 reason #0", w];
      }
    }
    class ht extends _ {
      constructor(t3) {
        super(), this.conversationId = "", this.reason = S.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ht().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ht().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ht().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ht, t3, e3);
      }
      static $() {
        return ["LocalAgentMailboxEnded|1 conversation_id 9|2 reason #0", S];
      }
    }
    class gt extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gt, t3, e3);
      }
      static $() {
        return ["StreamLocalAgentMailboxHeartbeat"];
      }
    }
    class At extends _ {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new At().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new At().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new At().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(At, t3, e3);
      }
      static $() {
        return ["StreamLocalAgentMailboxResponse|1 delivery #0 message|2 heartbeat #1 message|3 gap #2 message|4 ended #3 message", ft, gt, pt, ht];
      }
    }
    class _t extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _t().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _t().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _t().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_t, t3, e3);
      }
      static $() {
        return ["GetNewChatNudgeParameterizedModelPickerRequest|1 current_model #0|2 model_nudges_enabled 8?", i2.G4];
      }
    }
    class yt extends _ {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yt, t3, e3);
      }
      static $() {
        return ["GetNewChatNudgeParameterizedModelPickerResponse|1 nudge #0?", wt];
      }
    }
    class wt extends _ {
      constructor(t3) {
        super(), this.nudgeId = "", this.experimentName = "", this.variant = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wt, t3, e3);
      }
      static $() {
        return ["NewChatNudgeV2|1 nudge_id 9|2 target_model #0|3 experiment_name 9|4 bump #1 variant|5 ask #2 variant|6 silent_switch #3 variant", i2.G4, Z, tt, et];
      }
    }
  }