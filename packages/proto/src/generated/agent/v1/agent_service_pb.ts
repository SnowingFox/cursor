// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/agent_service_pb.js" range:621375..647711
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "./agent_pb";
import * as __dep2 from "./requested_model_pb";
import * as __dep3 from "./mcp_pb";
import * as __dep4 from "./exec_pb";
import * as __dep5 from "./kv_pb";
import * as __dep6 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1,
  i = __dep2,
  o = __dep3,
  a = __dep4,
  u = __dep5,
  c = __dep6;
const l = "agent.v1.";
class m extends c.HL {
  static get runtime() {
    return (0, c.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return l;
  }
}
var d = (0, c.QT)(n.proto3, l, "LocalPromptQualityInvocationStatus", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "ERRORED"], [3, "ABORTED"]], 1),
  p = (0, c.QT)(n.proto3, l, "LocalAgentMailboxGapReason", [[0, "UNSPECIFIED"], [1, "TRIMMED"], [2, "LOST"]], 1),
  f = (0, c.QT)(n.proto3, l, "LocalAgentMailboxEndedReason", [[0, "UNSPECIFIED"], [1, "NO_ACTIVE_SUBSCRIPTIONS"], [2, "STORE_DELETED"], [3, "MIGRATED_TO_CLOUD"]], 1);
class h extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new h().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new h().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new h().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(h, t, r);
  }
  static $() {
    return ["ClientHeartbeat"];
  }
}
class g extends m {
  constructor(t) {
    super(), this.selectedSubagentModels = [], this.selectedSubagentModelDetails = [], this.preFetchedBlobs = [], this.subagentModelOverrides = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new g().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new g().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new g().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(g, t, r);
  }
  static $() {
    return ["PrewarmRequest|1 model_details #0|9 requested_model #1?|2 conversation_id 9?|3 conversation_state #2|4 mcp_tools #3|5 mcp_file_system_options #4?|6 best_of_n_group_id 9?|7 try_use_best_of_n_promotion 8?|8 custom_system_prompt 9?|11 subagent_type_name 9?|12 exclude_workspace_context 8?|13 harness 9?|14 selected_subagent_models #1*|15 selected_subagent_model_details #0*|16 conversation_group_id 9?|17 pre_fetched_blobs #5*|18 client_supports_inline_images 8?|19 subagent_model_overrides #6*|20 can_create_cloud_subagents 8?|21 suppress_subagent_progress_update_tool 8?|22 client_supports_send_to_user 8?|23 computer_use_coordinate_mode 9?|24 agent_session_id 9?|26 client_supports_routed_model_update 8?|27 client_llm_gateway_credential #7?|28 client_supports_preview_card 8?|29 started_as_new_project 8?|30 first_project_onboarding 8?", s.Gmx, i.G4, s.Y9z, o.Or, o.Is, s.onr, s.Bjv, s.Ibo];
  }
}
class _ extends m {
  constructor(t) {
    super(), this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_, t, r);
  }
  static $() {
    return ["AgentClientMessage|1 run_request #0 message|2 exec_client_message #1 message|5 exec_client_control_message #2 message|3 kv_client_message #3 message|4 conversation_action #4 message|6 interaction_response #5 message|7 client_heartbeat #6 message|8 prewarm_request #7 message", s.Mpn, a.yT, a.$Y, u.gm, s.QFf, s.Y5, h, g];
  }
}
class w extends m {
  constructor(t) {
    super(), this.serverFirstTokenMs = 0, this.preStreamSetupMs = 0, this.waitForFirstEventMs = 0, this.slowPoolWaitMs = 0, this.clientClock = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new w().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new w().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new w().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(w, t, r);
  }
  static $() {
    return ["TtftBreakdown|1 server_first_token_ms 1|2 pre_stream_setup_ms 1|3 wait_for_first_event_ms 1|4 provider_ttft_ms 1?|5 slow_pool_wait_ms 1|6 client_prep_ms 1?|7 client_clock 8|8 pre_handler_ms 1?"];
  }
}
class y extends m {
  constructor(t) {
    super(), this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new y().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new y().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new y().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(y, t, r);
  }
  static $() {
    return ["AgentServerMessage|1 interaction_update #0 message|2 exec_server_message #1 message|5 exec_server_control_message #2 message|3 conversation_checkpoint_update #3 message|4 kv_server_message #4 message|7 interaction_query #5 message|8 ttft_breakdown #6", s.Uq, a.Ye, a.Nv, s.Y9z, u.km, s.Pd7, w];
  }
}
class J extends m {
  constructor(t) {
    super(), this.userMessage = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new J().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new J().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new J().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(J, t, r);
  }
  static $() {
    return ["NameAgentRequest|1 user_message 9"];
  }
}
class S extends m {
  constructor(t) {
    super(), this.name = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new S().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new S().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new S().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(S, t, r);
  }
  static $() {
    return ["NameAgentResponse|1 name 9"];
  }
}
class q extends m {
  constructor(t) {
    super(), this.conversationId = "", this.workspacePaths = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new q().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new q().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new q().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(q, t, r);
  }
  static $() {
    return ["UpdateConversationMetadataRequest|1 conversation_id 9|2 name 9?|3 only_set_name_if_empty 8?|4 workspace_paths 9*"];
  }
}
class B extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new B().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new B().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new B().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(B, t, r);
  }
  static $() {
    return ["UpdateConversationMetadataResponse"];
  }
}
class b extends m {
  constructor(t) {
    super(), this.conversationId = "", this.rootPromptMessagesJson = [], this.selfContained = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new b().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new b().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new b().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(b, t, r);
  }
  static $() {
    return ["GetPromptContextUsageRequest|1 conversation_id 9|3 root_prompt_messages_json 12*|5 self_contained 8"];
  }
}
class P extends m {
  constructor(t) {
    super(), this.unavailableBlobCount = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new P().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new P().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new P().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(P, t, r);
  }
  static $() {
    return ["GetPromptContextUsageResponse|2 unavailable_blob_count 13|3 tree #0", s.d2k];
  }
}
class I extends m {
  constructor(t) {
    super(), this.formattedConversation = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new I().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new I().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new I().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(I, t, r);
  }
  static $() {
    return ["CreateTranscriptOverviewRequest|1 formatted_conversation 9"];
  }
}
class x extends m {
  constructor(t) {
    super(), this.overview = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new x().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new x().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new x().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(x, t, r);
  }
  static $() {
    return ["CreateTranscriptOverviewResponse|1 overview 9"];
  }
}
class v extends m {
  constructor(t) {
    super(), this.customModelIds = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new v().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new v().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new v().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(v, t, r);
  }
  static $() {
    return ["GetUsableModelsRequest|1 custom_model_ids 9*"];
  }
}
class R extends m {
  constructor(t) {
    super(), this.models = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new R().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new R().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new R().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(R, t, r);
  }
  static $() {
    return ["GetUsableModelsResponse|1 models #0*", s.Gmx];
  }
}
class E extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new E().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new E().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new E().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(E, t, r);
  }
  static $() {
    return ["GetDefaultModelForCliRequest"];
  }
}
class k extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new k().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new k().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new k().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(k, t, r);
  }
  static $() {
    return ["GetDefaultModelForCliResponse|1 model #0", s.Gmx];
  }
}
class T extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new T().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new T().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new T().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(T, t, r);
  }
  static $() {
    return ["GetAllowedModelIntentsRequest"];
  }
}
class C extends m {
  constructor(t) {
    super(), this.modelIntents = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new C().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new C().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new C().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(C, t, r);
  }
  static $() {
    return ["GetAllowedModelIntentsResponse|1 model_intents 9*"];
  }
}
class U extends m {
  constructor(t) {
    super(), this.id = new Uint8Array(0), this.value = new Uint8Array(0), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new U().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new U().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new U().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(U, t, r);
  }
  static $() {
    return ["BlobEntry|1 id 12|2 value 12"];
  }
}
class A extends m {
  constructor(t) {
    super(), this.conversationId = "", this.blobs = [], this.chunkIndex = 0, this.totalChunks = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new A().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new A().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new A().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(A, t, r);
  }
  static $() {
    return ["UploadConversationBlobsRequest|1 conversation_id 9|2 blobs #0*|3 chunk_index 5|4 total_chunks 5", U];
  }
}
class $ extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals($, t, r);
  }
  static $() {
    return ["UploadConversationBlobsResponse"];
  }
}
class O extends m {
  constructor(t) {
    super(), this.invocationId = "", this.attemptRequestId = "", this.attempt = 0, this.startedAt = "", this.completedAt = "", this.modelId = "", this.providerName = "", this.status = d.UNSPECIFIED, this.messages = [], this.responseMessages = [], this.toolsJson = "", this.promptTokens = n.protoInt64.zero, this.completionTokens = n.protoInt64.zero, this.totalTokens = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new O().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new O().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new O().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(O, t, r);
  }
  static $() {
    return ["LocalPromptQualityInvocation|1 invocation_id 9|2 attempt_request_id 9|3 attempt 5|4 started_at 9|5 completed_at 9|6 model_id 9|7 provider_name 9|8 status #0|9 messages 12*|10 response_messages 12*|11 tools_json 9|12 prompt_tokens 3|13 completion_tokens 3|14 total_tokens 3|15 token_limit 3?|16 error_message 9?|17 prompt_tag 9?|18 feature_type 9?", d];
  }
}
class j extends m {
  constructor(t) {
    super(), this.schemaVersion = 0, this.generationUuid = "", this.conversationId = "", this.payloadDigest = "", this.invocations = [], this.terminalStatus = d.UNSPECIFIED, this.createdAt = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new j().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new j().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new j().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(j, t, r);
  }
  static $() {
    return ["UploadLocalAgentRunToPromptQualityRequest|1 schema_version 5|2 generation_uuid 9|3 conversation_id 9|4 payload_digest 9|5 invocations #0*|6 terminal_status #1|7 created_at 9", O, d];
  }
}
class M extends m {
  constructor(t) {
    super(), this.requestId = "", this.primaryInvocationId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new M().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new M().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new M().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(M, t, r);
  }
  static $() {
    return ["UploadLocalAgentRunToPromptQualityResponse|1 request_id 9|2 primary_invocation_id 9"];
  }
}
class D extends m {
  constructor(t) {
    super(), this.conversationId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new D().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new D().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new D().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(D, t, r);
  }
  static $() {
    return ["GetSignedUrlForAttachedMediaRequest|3 conversation_id 9|1 key 9?|2 mime_type 9?|4 content_length_bytes 3?"];
  }
}
class N extends m {
  constructor(t) {
    super(), this.key = "", this.postUrl = "", this.getUrl = "", this.expiresAtUnixMs = n.protoInt64.zero, this.refreshAfterUnixMs = n.protoInt64.zero, this.postFields = {}, this.putUrl = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new N().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new N().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new N().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(N, t, r);
  }
  static $() {
    return ["GetSignedUrlForAttachedMediaResponse|1 key 9|2 post_url 9|3 get_url 9|4 expires_at_unix_ms 3|5 refresh_after_unix_ms 3|6 post_fields 9,9|7 put_url 9"];
  }
}
class G extends m {
  constructor(t) {
    super(), this.conversationId = "", this.sourceConversationId = "", this.sourceRequestId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new G().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new G().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new G().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(G, t, r);
  }
  static $() {
    return ["NotifyConversationCloneRequest|1 conversation_id 9|2 source_conversation_id 9|3 source_request_id 9"];
  }
}
class L extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new L().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new L().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new L().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(L, t, r);
  }
  static $() {
    return ["NotifyConversationCloneResponse"];
  }
}
class F extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new F().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new F().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new F().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(F, t, r);
  }
  static $() {
    return ["WarmUpRequest"];
  }
}
class K extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new K().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new K().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new K().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(K, t, r);
  }
  static $() {
    return ["WarmUpResponse"];
  }
}
class z extends m {
  constructor(t) {
    super(), this.currentModel = "", this.maxMode = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new z().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new z().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new z().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(z, t, r);
  }
  static $() {
    return ["GetNewChatNudgeLegacyModelPickerRequest|1 current_model 9|2 max_mode 8"];
  }
}
class W extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new W().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new W().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new W().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(W, t, r);
  }
  static $() {
    return ["GetNewChatNudgeLegacyModelPickerResponse|1 nudge #0?", X];
  }
}
class H extends m {
  constructor(t) {
    super(), this.bannerMessage = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new H().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new H().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new H().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(H, t, r);
  }
  static $() {
    return ["NudgeBumpVariant|1 banner_message 9|2 banner_description 9?"];
  }
}
class V extends m {
  constructor(t) {
    super(), this.popupMessage = "", this.acceptLabel = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new V().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new V().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new V().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(V, t, r);
  }
  static $() {
    return ["NudgeAskVariant|1 popup_message 9|2 accept_label 9"];
  }
}
class Q extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Q().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Q().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Q().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Q, t, r);
  }
  static $() {
    return ["NudgeSilentSwitchVariant"];
  }
}
class X extends m {
  constructor(t) {
    super(), this.nudgeId = "", this.targetModel = "", this.experimentName = "", this.variant = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new X().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new X().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new X().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(X, t, r);
  }
  static $() {
    return ["NewChatNudge|1 nudge_id 9|2 target_model 9|3 experiment_name 9|4 bump #0 variant|5 ask #1 variant|6 silent_switch #2 variant", H, V, Q];
  }
}
class Y extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Y().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Y().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Y().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Y, t, r);
  }
  static $() {
    return ["ListLocalSubscriptionToolsRequest"];
  }
}
class Z extends m {
  constructor(t) {
    super(), this.toolName = "", this.description = "", this.inputSchemaJson = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Z().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Z().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Z().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Z, t, r);
  }
  static $() {
    return ["LocalSubscriptionToolDefinition|1 tool_name 9|2 description 9|3 input_schema_json 9"];
  }
}
class tt extends m {
  constructor(t) {
    super(), this.tools = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new tt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new tt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new tt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(tt, t, r);
  }
  static $() {
    return ["ListLocalSubscriptionToolsResponse|1 tools #0*", Z];
  }
}
class rt extends m {
  constructor(t) {
    super(), this.conversationId = "", this.toolName = "", this.toolArgsJson = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new rt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new rt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new rt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(rt, t, r);
  }
  static $() {
    return ["CallLocalSubscriptionToolRequest|1 conversation_id 9|2 tool_name 9|3 tool_args_json 9"];
  }
}
class et extends m {
  constructor(t) {
    super(), this.resultJson = "", this.isError = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new et().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new et().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new et().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(et, t, r);
  }
  static $() {
    return ["CallLocalSubscriptionToolResponse|1 result_json 9|2 is_error 8|3 watch_expires_at_unix_ms 3?"];
  }
}
class nt extends m {
  constructor(t) {
    super(), this.subscriptionId = "", this.eventId = "", this.inboxRelPath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new nt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new nt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new nt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(nt, t, r);
  }
  static $() {
    return ["SubscriptionDeliveryEntry|1 subscription_id 9|2 event_id 9|3 inbox_rel_path 9"];
  }
}
class st extends m {
  constructor(t) {
    super(), this.subscriptionId = "", this.inboxRelPath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new st().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new st().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new st().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(st, t, r);
  }
  static $() {
    return ["SubscriptionRemovedEntry|1 subscription_id 9|2 inbox_rel_path 9"];
  }
}
class it extends m {
  constructor(t) {
    super(), this.localAgentMailboxEntryId = "", this.payload = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new it().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new it().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new it().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(it, t, r);
  }
  static $() {
    return ["LocalAgentMailboxEntry|1 local_agent_mailbox_entry_id 9|2 subscription_delivery #0 payload|3 subscription_removed #1 payload", nt, st];
  }
}
class ot extends m {
  constructor(t) {
    super(), this.conversations = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ot().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ot().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ot().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ot, t, r);
  }
  static $() {
    return ["StreamLocalAgentMailboxRequest|1 conversations #0*", at];
  }
}
class at extends m {
  constructor(t) {
    super(), this.conversationId = "", this.afterOffset = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new at().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new at().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new at().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(at, t, r);
  }
  static $() {
    return ["StreamLocalAgentMailboxRequest.ConversationCursor|1 conversation_id 9|2 after_offset 9"];
  }
}
class ut extends m {
  constructor(t) {
    super(), this.conversationId = "", this.offset = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ut().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ut().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ut().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ut, t, r);
  }
  static $() {
    return ["LocalAgentMailboxDelivery|1 conversation_id 9|2 offset 9|3 entry #0", it];
  }
}
class ct extends m {
  constructor(t) {
    super(), this.conversationId = "", this.afterOffset = "", this.resumeOffset = "", this.reason = p.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ct().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ct().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ct().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ct, t, r);
  }
  static $() {
    return ["LocalAgentMailboxGap|1 conversation_id 9|2 after_offset 9|3 resume_offset 9|4 reason #0", p];
  }
}
class lt extends m {
  constructor(t) {
    super(), this.conversationId = "", this.reason = f.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new lt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new lt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new lt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(lt, t, r);
  }
  static $() {
    return ["LocalAgentMailboxEnded|1 conversation_id 9|2 reason #0", f];
  }
}
class mt extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new mt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new mt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new mt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(mt, t, r);
  }
  static $() {
    return ["StreamLocalAgentMailboxHeartbeat"];
  }
}
class dt extends m {
  constructor(t) {
    super(), this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new dt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new dt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new dt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(dt, t, r);
  }
  static $() {
    return ["StreamLocalAgentMailboxResponse|1 delivery #0 message|2 heartbeat #1 message|3 gap #2 message|4 ended #3 message", ut, mt, ct, lt];
  }
}
class pt extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new pt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new pt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new pt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(pt, t, r);
  }
  static $() {
    return ["GetNewChatNudgeParameterizedModelPickerRequest|1 current_model #0|2 model_nudges_enabled 8?", i.G4];
  }
}
class ft extends m {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ft().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ft().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ft().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ft, t, r);
  }
  static $() {
    return ["GetNewChatNudgeParameterizedModelPickerResponse|1 nudge #0?", ht];
  }
}
class ht extends m {
  constructor(t) {
    super(), this.nudgeId = "", this.experimentName = "", this.variant = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ht().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ht().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ht().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ht, t, r);
  }
  static $() {
    return ["NewChatNudgeV2|1 nudge_id 9|2 target_model #0|3 experiment_name 9|4 bump #1 variant|5 ask #2 variant|6 silent_switch #3 variant", i.G4, H, V, Q];
  }
}
export { I as BU, F as EC, B as HJ, x as Hi, J as Il, L as JF, tt as JH, v as KD, P as KE, _ as KS, K as M2, T as Ov, y as Oy, z as Pg, ft as TW, E as Tu, $ as W$, D as W3, b as Y3, Y as dw, M as eE, pt as hs, dt as ic, C as k4, ot as k5, h as kA, S as mw, k as pe, R as sY, j as uK, et as uu, rt as uw, q as vw, N as wq, G as xk, A as yD, W as zP };
