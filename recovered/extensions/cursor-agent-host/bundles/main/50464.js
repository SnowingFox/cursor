// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 50464 range:8181587..8274090
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50464: (e, t, r) => {
    "use strict";
    r.d(t, { O9: () => _, gn: () => ot, yf: () => H, An: () => ut, hS: () => Ee, jF: () => Ge, I8: () => $e, ZP: () => Ce, KR: () => B, Db: () => Lt, xb: () => $t, TS: () => O, cf: () => M, Bh: () => ge, K4: () => vt, jp: () => J, dq: () => $, pf: () => Q, D8: () => he, XE: () => L, fN: () => S, w1: () => W, jc: () => b, Wu: () => x, QX: () => ie, pV: () => k, gr: () => R, Bo: () => fe, oP: () => ft, O0: () => q });
    var n = r(36038), s = r(77620), o = r(67918), i = r(65610), a = r(81563), c = r(9825), l = r(69584), u = r(89396), d = r(89582), p = (r(26885), r(8592));
    class m extends p.HL {
      static get runtime() {
        return (0, p.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class h extends m {
      constructor(e2) {
        super(), this.lints = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new h().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new h().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new h().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(h, e2, t2);
      }
      static $() {
        return ["GetLintsForChangeResponse|1 lints #0*", f];
      }
    }
    class f extends m {
      constructor(e2) {
        super(), this.message = "", this.severity = "", this.relativeWorkspacePath = "", this.startLineNumberOneIndexed = 0, this.startColumnOneIndexed = 0, this.endLineNumberInclusiveOneIndexed = 0, this.endColumnOneIndexed = 0, this.quickFixes = [], n.proto3.util.initPartial(e2, this);
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
        return ["GetLintsForChangeResponse.Lint|1 message 9|2 severity 9|3 relative_workspace_path 9|4 start_line_number_one_indexed 5|5 start_column_one_indexed 5|6 end_line_number_inclusive_one_indexed 5|7 end_column_one_indexed 5|9 quick_fixes #0*", g];
      }
    }
    class g extends m {
      constructor(e2) {
        super(), this.message = "", this.kind = "", this.isPreferred = false, this.edits = [], n.proto3.util.initPartial(e2, this);
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
        return ["GetLintsForChangeResponse.Lint.QuickFix|1 message 9|2 kind 9|3 is_preferred 8|4 edits #0*", y];
      }
    }
    class y extends m {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.text = "", this.startLineNumberOneIndexed = 0, this.startColumnOneIndexed = 0, this.endLineNumberInclusiveOneIndexed = 0, this.endColumnOneIndexed = 0, n.proto3.util.initPartial(e2, this);
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
        return ["GetLintsForChangeResponse.Lint.QuickFix.Edit|1 relative_workspace_path 9|2 text 9|3 start_line_number_one_indexed 5|4 start_column_one_indexed 5|5 end_line_number_inclusive_one_indexed 5|6 end_column_one_indexed 5"];
      }
    }
    const w = "aiserver.v1.";
    class v extends p.HL {
      static get runtime() {
        return (0, p.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return w;
      }
    }
    var _ = (0, p.QT)(n.proto3, w, "ChunkType", [[0, "UNSPECIFIED"], [1, "CODEBASE"], [2, "LONG_FILE"], [3, "DOCS"]], 1), A = (0, p.QT)(n.proto3, w, "SubagentType", [[0, "UNSPECIFIED"], [1, "DEEP_SEARCH"], [2, "FIX_LINTS"], [3, "TASK"], [4, "SPEC"]], 1);
    class S extends v {
      constructor(e2) {
        super(), this.requestId = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamReplayChatRequest|1 request_id 9|3 tokens_per_second 1?"];
      }
    }
    class b extends v {
      constructor(e2) {
        super(), this.request = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatRequestWithTools|1 stream_unified_chat_request #0 request|2 client_side_tool_v2_result #1 request", W, s.Ue3];
      }
    }
    class E extends v {
      constructor(e2) {
        super(), this.rules = [], n.proto3.util.initPartial(e2, this);
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
        return ["UserRules|1 rules #0*", Ge];
      }
    }
    class I extends v {
      constructor(e2) {
        super(), this.padding = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamStart|1 padding 9"];
      }
    }
    class C extends v {
      constructor(e2) {
        super(), this.traceId = "", this.spanId = "", n.proto3.util.initPartial(e2, this);
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
        return ["SpanContext|1 trace_id 9|2 span_id 9|3 trace_flags 13?|4 trace_state 9?"];
      }
    }
    class k extends v {
      constructor(e2) {
        super(), this.response = { case: void 0 }, this.eventId = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatResponseWithTools|1 client_side_tool_v2_call #0 response|2 stream_unified_chat_response #1 response|3 conversation_summary #2 response|4 user_rules #3 response|5 stream_start #4 response|6 tracing_context #5?|7 event_id 9", s.TE4, ie, B, E, I, C];
      }
    }
    class x extends v {
      constructor(e2) {
        super(), this.request = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatRequestWithToolsIdempotent|1 client_chunk #0 request|2 abort #1 request|3 close #1 request|4 idempotency_key 9?|5 seqno 13?", b, n.Empty];
      }
    }
    class T extends v {
      constructor(e2) {
        super(), this.message = "", this.isDegradedMode = false, n.proto3.util.initPartial(e2, this);
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
        return ["WelcomeMessage|1 message 9|2 is_degraded_mode 8"];
      }
    }
    class R extends v {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatResponseWithToolsIdempotent|1 server_chunk #0 response|3 welcome_message #1 response|4 seqno_ack 13 response", k, T];
      }
    }
    class B extends v {
      constructor(e2) {
        super(), this.summary = "", this.truncationLastBubbleIdInclusive = "", this.clientShouldStartSendingFromInclusiveBubbleId = "", this.previousConversationSummaryBubbleId = "", this.includesToolResults = false, this.strategy = "", n.proto3.util.initPartial(e2, this);
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
        return ["ConversationSummary|1 summary 9|2 truncation_last_bubble_id_inclusive 9|3 client_should_start_sending_from_inclusive_bubble_id 9|4 previous_conversation_summary_bubble_id 9|5 includes_tool_results 8|6 strategy 9"];
      }
    }
    class P extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(e2, this);
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
        return ["ContextToRank|1 relative_workspace_path 9|2 contents 9|3 line_range #0?|4 code_block #1?", o.LineRange, o.CodeBlock];
      }
    }
    class J extends v {
      constructor(e2) {
        super(), this.score = 0, n.proto3.util.initPartial(e2, this);
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
        return ["RankedContext|1 context #0|2 score 2", P];
      }
    }
    class M extends v {
      constructor(e2) {
        super(), this.chunks = [], n.proto3.util.initPartial(e2, this);
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
        return ["DocumentationCitation|1 chunks #0*", i.ci];
      }
    }
    class q extends v {
      constructor(e2) {
        super(), this.references = [], n.proto3.util.initPartial(e2, this);
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
        return ["WebCitation|1 references #0*", D];
      }
    }
    class D extends v {
      constructor(e2) {
        super(), this.title = "", this.url = "", this.chunk = "", n.proto3.util.initPartial(e2, this);
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
        return ["WebReference|2 title 9|1 url 9|3 chunk 9"];
      }
    }
    class O extends v {
      constructor(e2) {
        super(), this.title = "", this.url = "", this.chunk = "", this.name = "", n.proto3.util.initPartial(e2, this);
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
        return ["DocsReference|1 title 9|2 url 9|3 chunk 9|4 name 9"];
      }
    }
    class N extends v {
      constructor(e2) {
        super(), this.content = "", this.title = "", n.proto3.util.initPartial(e2, this);
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
        return ["AiWebSearchResult|1 content 9|2 title 9"];
      }
    }
    class F extends v {
      constructor(e2) {
        super(), this.results = [], n.proto3.util.initPartial(e2, this);
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
        return ["AiWebSearchResults|1 results #0*", N];
      }
    }
    class U extends v {
      constructor(e2) {
        super(), this.message = "", n.proto3.util.initPartial(e2, this);
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
        return ["StatusUpdate|1 message 9|2 metadata 9?"];
      }
    }
    class L extends v {
      constructor(e2) {
        super(), this.updates = [], n.proto3.util.initPartial(e2, this);
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
        return ["StatusUpdates|1 updates #0*", U];
      }
    }
    class $ extends v {
      constructor(e2) {
        super(), this.query = "", this.documents = [], n.proto3.util.initPartial(e2, this);
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
        return ["RerankDocumentsRequest|1 query 9|2 documents #0*", j];
      }
    }
    class Q extends v {
      constructor(e2) {
        super(), this.documents = [], n.proto3.util.initPartial(e2, this);
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
        return ["RerankDocumentsResponse|1 documents #0*", G];
      }
    }
    class j extends v {
      constructor(e2) {
        super(), this.content = "", this.id = "", n.proto3.util.initPartial(e2, this);
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
        return ["Document|1 content 9|2 id 9"];
      }
    }
    class G extends v {
      constructor(e2) {
        super(), this.documentId = "", this.score = 0, n.proto3.util.initPartial(e2, this);
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
        return ["DocumentIdsWithScores|1 document_id 9|2 score 2"];
      }
    }
    class H extends v {
      constructor(e2) {
        super(), this.fileName = "", this.diffHistory = [], this.diffHistoryTimestamps = [], n.proto3.util.initPartial(e2, this);
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
        return ["ComposerFileDiffHistory|1 file_name 9|2 diff_history 9*|3 diff_history_timestamps 1*"];
      }
    }
    class z extends v {
      constructor(e2) {
        super(), this.uri = "", this.name = "", n.proto3.util.initPartial(e2, this);
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
        return ["WorkspaceFolder|1 uri 9|2 name 9"];
      }
    }
    class W extends v {
      constructor(e2) {
        super(), this.conversation = [], this.fullConversationHeadersOnly = [], this.documentationIdentifiers = [], this.externalLinks = [], this.diffsForCompressingFiles = [], this.multiFileLinterErrors = [], this.fileDiffHistories = [], this.quotes = [], this.additionalRankedContext = [], this.isChat = false, this.conversationId = "", this.replyingToRequestId = "", this.repositoryInfoShouldQueryStaging = false, this.repositoryInfoShouldQueryProd = false, this.repoQueryAuthToken = "", this.isAgentic = false, this.supportedTools = [], this.enableYoloMode = false, this.yoloPrompt = "", this.useUnifiedChatPrompt = false, this.mcpTools = [], this.isHeadless = false, this.isBackgroundComposer = false, this.toolsRequiringAcceptedReturn = [], this.projectLayouts = [], this.supportsGitIndex = false, this.forceIsNotDev = false, this.allowServerSideSemanticSearch = false, this.workspaceFolders = [], n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatRequest|1 conversation #0*|30 full_conversation_headers_only #1*|2 allow_long_file_scan 8?|3 explicit_context #2|4 can_handle_filenames_after_language_ids 8?|5 model_details #3|6 linter_errors #4|7 documentation_identifiers 9*|8 use_web 9?|9 external_links #5*|10 project_context #0?|11 diffs_for_compressing_files #6*|12 compress_edits 8?|13 should_cache 8?|14 multi_file_linter_errors #4*|15 current_file #7|16 recent_edits #8?|17 use_reference_composer_diff_prompt 8?|18 file_diff_histories #9*|19 use_new_compression_scheme 8?|21 quotes #10*|20 additional_ranked_context #11*|22 is_chat 8|23 conversation_id 9|72 replying_to_request_id 9|24 repository_info #12|25 repository_info_should_query_staging 8|39 repository_info_should_query_prod 8|52 query_only_repo_access #13|44 repo_query_auth_token 9|26 environment_info #14|27 is_agentic 8|28 conversation_summary #15?|29 supported_tools #16*|31 enable_yolo_mode 8|32 yolo_prompt 9|33 use_unified_chat_prompt 8|34 mcp_tools #17*|35 use_full_inputs_context 8?|36 is_resume 8?|37 allow_model_fallbacks 8?|38 number_of_times_shown_fallback_model_warning 5?|40 context_bank_session_id 9?|41 context_bank_version 5?|43 context_bank_encryption_key 12?|45 is_headless 8|68 is_background_composer 8|42 uses_codebase_results #18?|46 unified_mode #19?|47 tools_requiring_accepted_return #16*|48 should_disable_tools 8?|49 thinking_level #20?|50 should_use_chat_prompt 8?|55 background_composer_id 9?|51 uses_rules 8?|53 mode_uses_auto_apply 8?|54 unified_mode_name 9?|56 use_generate_rules_prompt 8?|57 edit_tool_supports_search_and_replace 8?|58 project_layouts #21*|59 repository_name_if_unindexed 9?|60 indexing_progress 1?|61 full_file_cmd_k_options #22?|62 indexing_phase_if_unindexed 9?|63 use_knowledge_base_prompt 8?|64 indexing_num_files_if_unindexed 5?|66 subagent_info #23?|67 supports_git_index 8|69 force_is_not_dev 8|70 disable_edit_file_timeout 8?|71 should_attach_linter_errors 8?|73 should_speculatively_route_gpt5 8?|74 force_terminal_hanging_detection 8?|75 force_summarization 8?|76 is_quick_search_query 8?|77 is_spec_mode 8?|78 allow_server_side_semantic_search 8|79 speculative_summarization_encryption_key 12?|81 workspace_folders #24*|82 does_readfile_support_images 8?|83 sandboxing_support_enabled 8?|84 custom_planning_instructions 9?|85 enable_terminal_file_persistence 8?|86 terminals_folder 9?|93 agent_transcripts_folder 9?|87 agent_notes_folder 9?|88 agent_tools_folder 9?|89 current_plan #25?|90 has_mcp_descriptors 8?|91 best_of_n_group_id 9?|92 try_use_best_of_n_promotion 8?", Ee, we, o.ExplicitContext, o.ModelDetails, o.LinterErrors, o.ComposerExternalLink, Y, o.CurrentFileInfo, Z, H, o.ChatQuote, J, a.bn, a.bq, o.EnvironmentInfo, B, s.XaY, s.q20, te, V, K, Ot, re, Ct, z, ne];
      }
    }
    var V = (0, p.QT)(n.proto3, w, "StreamUnifiedChatRequest.UnifiedMode", [[0, "UNSPECIFIED"], [1, "CHAT"], [2, "AGENT"], [3, "EDIT"], [4, "CUSTOM"], [5, "PLAN"], [6, "DEBUG"]], 1), K = (0, p.QT)(n.proto3, w, "StreamUnifiedChatRequest.ThinkingLevel", [[0, "UNSPECIFIED"], [1, "MEDIUM"], [2, "HIGH"]], 1);
    class Y extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.redRanges = [], this.redRangesReversed = [], this.startHash = "", this.endHash = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatRequest.RedDiff|1 relative_workspace_path 9|2 red_ranges #0*|3 red_ranges_reversed #0*|4 start_hash 9|5 end_hash 9", o.SimplestRange];
      }
    }
    class Z extends v {
      constructor(e2) {
        super(), this.codeBlockInfo = [], this.finalFileValues = [], n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatRequest.RecentEdits|1 code_block_info #0*|2 final_file_values #1*|3 edits_belong_to_composer_generation_uuid 9?", X, ee];
      }
    }
    class X extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatRequest.RecentEdits.CodeBlockInfo|1 relative_workspace_path 9|2 content_before 9?|3 content_after 9?|4 generation_uuid 9?|5 version 5?"];
      }
    }
    class ee extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.content = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatRequest.RecentEdits.FileInfo|1 relative_workspace_path 9|2 content 9"];
      }
    }
    class te extends v {
      constructor(e2) {
        super(), this.results = [], this.allFiles = [], n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatRequest.CodeSearchResult|1 results #0*|2 all_files #1*", a.PT, o.File];
      }
    }
    class re extends v {
      constructor(e2) {
        super(), this.filePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatRequest.FullFileCmdKOptions|1 file_path 9"];
      }
    }
    class ne extends v {
      constructor(e2) {
        super(), this.content = "", this.name = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatRequest.CurrentPlan|1 content 9|2 name 9"];
      }
    }
    class se extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.content = "", this.score = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ContextPiece|1 relative_workspace_path 9|2 content 9|3 score 2"];
      }
    }
    class oe extends v {
      constructor(e2) {
        super(), this.pieces = [], n.proto3.util.initPartial(e2, this);
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
        return ["ContextPieceUpdate|1 pieces #0*", se];
      }
    }
    class ie extends v {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatResponse|1 text 9|22 server_bubble_id 9?|2 debugging_only_chat_prompt 9?|3 debugging_only_token_count 5?|4 document_citation #0|5 filled_prompt 9?|6 is_big_file 8?|7 intermediate_text 9?|10 is_using_slow_request 8?|8 chunk_identity #1?|9 docs_reference #2?|11 web_citation #3?|33 ai_web_search_results #4?|12 status_updates #5?|13 tool_call #6?|36 tool_call_v2 #7?|14 should_break_ai_message 8?|15 partial_tool_call #8?|16 final_tool_result #9?|17 symbol_link #10?|19 file_link #11?|18 conversation_summary #12?|20 service_status_update #13?|21 viewable_git_context #14?|23 context_piece_update #15?|24 used_code #16?|25 thinking #17?|37 thinking_style #18?|26 stop_using_dsv3_agentic_model 8?|27 usage_uuid 9?|28 conversation_summary_starter #19?|29 subagent_return #20?|30 context_window_status #21?|31 image_description #22?|32 parallel_tool_calls_complete 8?|34 stars_feedback_request #23?|35 model_provider_request_json 9?", M, ce, O, q, F, L, s.Faf, s.bR2, s.AUe, le, fe, ge, B, he, be, oe, ae, $e, Ce, me, It, de, ue, pe];
      }
    }
    class ae extends v {
      constructor(e2) {
        super(), this.codeResults = [], n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatResponse.UsedCode|1 code_results #0*", a.PT];
      }
    }
    class ce extends v {
      constructor(e2) {
        super(), this.fileName = "", this.startLine = 0, this.endLine = 0, this.text = "", this.chunkType = _.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatResponse.ChunkIdentity|1 file_name 9|2 start_line 5|3 end_line 5|4 text 9|5 chunk_type #0", _];
      }
    }
    class le extends v {
      constructor(e2) {
        super(), this.toolCallId = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatResponse.FinalToolResult|1 tool_call_id 9|2 result #0", s.Ue3];
      }
    }
    class ue extends v {
      constructor(e2) {
        super(), this.description = "", this.imageUuid = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamUnifiedChatResponse.ImageDescription|1 description 9|2 image_uuid 9"];
      }
    }
    class de extends v {
      constructor(e2) {
        super(), this.percentageRemaining = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ContextWindowStatus|1 percentage_remaining 5|2 tokens_used 5?|3 token_limit 5?|4 percentage_remaining_float 2?"];
      }
    }
    class pe extends v {
      constructor(e2) {
        super(), this.bubbleId = "", this.message = "", n.proto3.util.initPartial(e2, this);
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
        return ["StarsFeedbackRequest|1 bubble_id 9|2 message 9"];
      }
    }
    class me extends v {
      constructor(e2) {
        super(), this.message = "", n.proto3.util.initPartial(e2, this);
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
        return ["ConversationSummaryStarter|1 message 9"];
      }
    }
    class he extends v {
      constructor(e2) {
        super(), this.message = "", this.codicon = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new he().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new he().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new he().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(he, e2, t2);
      }
      static $() {
        return ["ServiceStatusUpdate|1 message 9|2 codicon 9|3 allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown 8?|4 action_to_run_on_status_update 9?"];
      }
    }
    class fe extends v {
      constructor(e2) {
        super(), this.symbolName = "", this.symbolSearchString = "", this.relativeWorkspacePath = "", this.roughLineNumber = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fe, e2, t2);
      }
      static $() {
        return ["SymbolLink|1 symbol_name 9|2 symbol_search_string 9|3 relative_workspace_path 9|4 rough_line_number 5"];
      }
    }
    class ge extends v {
      constructor(e2) {
        super(), this.displayName = "", this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ge().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ge().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ge().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ge, e2, t2);
      }
      static $() {
        return ["FileLink|1 display_name 9|2 relative_workspace_path 9"];
      }
    }
    class ye extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.redRanges = [], this.redRangesReversed = [], this.startHash = "", this.endHash = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ye().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ye().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ye().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ye, e2, t2);
      }
      static $() {
        return ["RedDiff|1 relative_workspace_path 9|2 red_ranges #0*|3 red_ranges_reversed #0*|4 start_hash 9|5 end_hash 9", o.SimplestRange];
      }
    }
    class we extends v {
      constructor(e2) {
        super(), this.bubbleId = "", this.type = Ie.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new we().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new we().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new we().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(we, e2, t2);
      }
      static $() {
        return ["ConversationMessageHeader|1 bubble_id 9|2 server_bubble_id 9?|3 type #0", Ie];
      }
    }
    class ve extends v {
      constructor(e2) {
        super(), this.fileDetails = "", this.fileName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ve().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ve().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ve().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ve, e2, t2);
      }
      static $() {
        return ["DiffFile|1 file_details 9|2 file_name 9"];
      }
    }
    class _e extends v {
      constructor(e2) {
        super(), this.description = "", this.message = "", this.files = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _e().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _e().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _e().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_e, e2, t2);
      }
      static $() {
        return ["ViewableCommitProps|1 description 9|2 message 9|3 files #0*", ve];
      }
    }
    class Ae extends v {
      constructor(e2) {
        super(), this.title = "", this.body = "", this.files = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ae().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ae().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ae().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ae, e2, t2);
      }
      static $() {
        return ["ViewablePRProps|1 title 9|2 body 9|3 files #0*", ve];
      }
    }
    class Se extends v {
      constructor(e2) {
        super(), this.files = [], this.diffPreface = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Se().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Se().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Se().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Se, e2, t2);
      }
      static $() {
        return ["ViewableDiffProps|1 files #0*|2 diff_preface 9", ve];
      }
    }
    class be extends v {
      constructor(e2) {
        super(), this.diffData = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new be().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new be().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new be().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(be, e2, t2);
      }
      static $() {
        return ["ViewableGitContext|1 commit_data #0?|2 pull_request_data #1?|3 diff_data #2*", _e, Ae, Se];
      }
    }
    class Ee extends v {
      constructor(e2) {
        super(), this.text = "", this.type = Ie.UNSPECIFIED, this.attachedCodeChunks = [], this.codebaseContextChunks = [], this.commits = [], this.pullRequests = [], this.gitDiffs = [], this.assistantSuggestedDiffs = [], this.interpreterResults = [], this.images = [], this.attachedFolders = [], this.approximateLintErrors = [], this.bubbleId = "", this.attachedFoldersNew = [], this.lints = [], this.userResponsesToSuggestedCodeBlocks = [], this.relevantFiles = [], this.toolResults = [], this.notepads = [], this.capabilities = [], this.editTrailContexts = [], this.suggestedCodeBlocks = [], this.diffsForCompressingFiles = [], this.multiFileLinterErrors = [], this.diffHistories = [], this.recentlyViewedFiles = [], this.recentLocationsHistory = [], this.isAgentic = false, this.fileDiffTrajectories = [], this.existedSubsequentTerminalCommand = false, this.existedPreviousTerminalCommand = false, this.docsReferences = [], this.webReferences = [], this.aiWebSearchResults = [], this.attachedFoldersListDirResults = [], this.humanChanges = [], this.attachedHumanChanges = false, this.summarizedComposers = [], this.cursorRules = [], this.contextPieces = [], this.allThinkingBlocks = [], this.diffsSinceLastApply = [], this.deletedFiles = [], this.supportedTools = [], this.consoleLogs = [], this.knowledgeItems = [], this.uiElementPicked = [], this.documentationSelections = [], this.externalLinks = [], this.projectLayouts = [], this.capabilityContexts = [], this.todos = [], this.requestId = "", this.createdAt = "", this.mcpDescriptors = [], this.workspaceUris = [], this.cursorCommands = [], this.cursorCommandsExplicitlySet = false, this.pastChats = [], this.pastChatsExplicitlySet = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ee().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ee().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ee().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ee, e2, t2);
      }
      static $() {
        return ["ConversationMessage|1 text 9|2 type #0|3 attached_code_chunks #1*|4 codebase_context_chunks #2*|5 commits #3*|6 pull_requests #4*|7 git_diffs #5*|8 assistant_suggested_diffs #6*|9 interpreter_results #7*|10 images #8*|11 attached_folders 9*|12 approximate_lint_errors #9*|13 bubble_id 9|32 server_bubble_id 9?|14 attached_folders_new #10*|15 lints #11*|16 user_responses_to_suggested_code_blocks #12*|17 relevant_files 9*|18 tool_results #13*|19 notepads #14*|20 is_capability_iteration 8?|21 capabilities #15*|22 edit_trail_contexts #16*|23 suggested_code_blocks #17*|24 diffs_for_compressing_files #18*|25 multi_file_linter_errors #19*|26 diff_histories #20*|27 recently_viewed_files #1*|28 recent_locations_history #21*|29 is_agentic 8|30 file_diff_trajectories #22*|31 conversation_summary #23?|33 existed_subsequent_terminal_command 8|34 existed_previous_terminal_command 8|35 docs_references #24*|36 web_references #25*|75 ai_web_search_results #26*|37 git_context #27?|38 attached_folders_list_dir_results #28*|39 cached_conversation_summary #23?|40 human_changes #29*|41 attached_human_changes 8|42 summarized_composers #30*|43 cursor_rules #31*|44 context_pieces #32*|45 thinking #33?|46 all_thinking_blocks #33*|85 thinking_style #34?|47 unified_mode #35?|98 agent_mode #36?|48 diffs_since_last_apply #37*|49 deleted_files #38*|50 usage_uuid 9?|51 supported_tools #39*|52 current_file_location_data #40?|53 edit_tool_supports_search_and_replace 8?|54 last_terminal_cwd 9?|55 user_explicitly_asked_to_generate_cursor_rules 8?|56 console_logs #41*|57 rich_text 9?|58 knowledge_items #42*|59 ui_element_picked #43*|60 user_explicitly_asked_to_add_to_knowledge_base 8?|61 documentation_selections #44*|62 external_links #45*|63 use_web 8?|64 project_layouts #46*|65 thinking_duration_ms 5?|88 step_duration_ms 5?|66 subagent_return #47?|67 is_simple_looping_message 8?|68 capability_contexts #48*|69 checkpoint_commit_hash 9?|70 git_status_raw 9?|71 todos #49*|72 is_review_edits_followup 8?|74 request_id 9|73 ide_editors_state #50?|76 context_window_status #51?|77 is_plan_execution 8?|78 created_at 9|79 model_info #52|80 is_quick_search_query 8?|81 plan_update #53?|82 is_simulated_msg 8?|95 simulated_msg_reason #54?|97 simulated_message_metadata #55?|83 mcp_descriptors #56*|84 workspace_project_dir 9?|87 workspace_uris 9*|86 debug_mode_config #57?|89 text_blob_id 12?|90 rich_text_blob_id 12?|91 cursor_commands #58*|92 cursor_commands_explicitly_set 8|93 past_chats #59*|94 past_chats_explicitly_set 8|96 triggering_user_info #60?|99 turn_steer 8?|100 sent_by_agent_id 9?|101 sent_by_voice_call 8?|102 sender #61?", Ie, ke, o.CodeBlock, ot, it, o.GitDiff, nt, rt, o.ImageProto, Oe, et, Ne, ct, Pe, Je, c.Gn, De, at, ye, o.LinterErrorsWithoutFileContents, ht, Fe, H, B, O, D, N, be, s.$PL, Le, Me, o.CursorRule, se, $e, Ce, V, l.xyI, Qe, je, s.XaY, Xe, o.RCPLogEntry, Ge, o.RCPUIElementPicked, He, o.ComposerExternalLink, Ot, It, c.Km, s.kWq, ze, de, o.ModelInfo, Ve, l.c_h, Ke, Ye, u.TT, d.Ps, d.AW, l.iHX, l.D$r];
      }
    }
    var Ie = (0, p.QT)(n.proto3, w, "ConversationMessage.MessageType", [[0, "UNSPECIFIED"], [1, "HUMAN"], [2, "AI"]], 1), Ce = (0, p.QT)(n.proto3, w, "ConversationMessage.ThinkingStyle", [[0, "UNSPECIFIED"], [1, "DEFAULT"], [2, "CODEX"], [3, "GPT5"]], 1);
    class ke extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.languageIdentifier = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ke().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ke().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ke().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ke, e2, t2);
      }
      static $() {
        return ["ConversationMessage.CodeChunk|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 summarization_strategy #0?|5 language_identifier 9|6 intent #1?|7 is_final_version 8?|8 is_first_version 8?|9 contents_are_missing 8?|10 is_only_included_from_folder 8?|11 code_chunk_git_context #2?", Te, xe, Re];
      }
    }
    var xe = (0, p.QT)(n.proto3, w, "ConversationMessage.CodeChunk.Intent", [[0, "UNSPECIFIED"], [1, "COMPOSER_FILE"], [2, "COMPRESSED_COMPOSER_FILE"], [3, "RECENTLY_VIEWED_FILE"], [4, "OUTLINE"], [5, "MENTIONED_FILE"], [6, "CODE_SELECTION"], [7, "AI_EDITED_FILE"], [8, "VISIBLE_FILE"], [9, "TERMINAL_SELECTION"]], 1), Te = (0, p.QT)(n.proto3, w, "ConversationMessage.CodeChunk.SummarizationStrategy", [[0, "NONE_UNSPECIFIED"], [1, "SUMMARIZED"], [2, "EMBEDDED"]], 1);
    class Re extends v {
      constructor(e2) {
        super(), this.gitInfo = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Re().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Re().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Re().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Re, e2, t2);
      }
      static $() {
        return ["ConversationMessage.CodeChunk.CodeChunkGitContext|1 git_info #0*", Be];
      }
    }
    class Be extends v {
      constructor(e2) {
        super(), this.commit = "", this.author = "", this.date = "", this.message = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Be().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Be().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Be().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Be, e2, t2);
      }
      static $() {
        return ["ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo|1 commit 9|2 author 9|3 date 9|4 message 9"];
      }
    }
    class Pe extends v {
      constructor(e2) {
        super(), this.toolCallId = "", this.toolName = "", this.toolIndex = 0, this.args = "", this.rawArgs = "", this.attachedCodeChunks = [], this.images = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pe, e2, t2);
      }
      static $() {
        return ["ConversationMessage.ToolResult|1 tool_call_id 9|2 tool_name 9|3 tool_index 13|12 model_call_id 9?|4 args 9|5 raw_args 9|6 attached_code_chunks #0*|7 content 9?|8 result #1|9 error #2?|10 images #3*|11 tool_call #4?|13 started_at_ms 4?|14 completed_at_ms 4?", ke, s.Ue3, s.MtQ, o.ImageProto, s.TE4];
      }
    }
    class Je extends v {
      constructor(e2) {
        super(), this.name = "", this.text = "", this.attachedCodeChunks = [], this.attachedFolders = [], this.commits = [], this.pullRequests = [], this.gitDiffs = [], this.images = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Je().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Je().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Je().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Je, e2, t2);
      }
      static $() {
        return ["ConversationMessage.NotepadContext|1 name 9|2 text 9|3 attached_code_chunks #0*|4 attached_folders 9*|5 commits #1*|6 pull_requests #2*|7 git_diffs #3*|8 images #4*", ke, ot, it, o.GitDiff, o.ImageProto];
      }
    }
    class Me extends v {
      constructor(e2) {
        super(), this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Me().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Me().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Me().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Me, e2, t2);
      }
      static $() {
        return ["ConversationMessage.ComposerContext|1 name 9|2 conversation_summary #0", B];
      }
    }
    class qe extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.contextLines = "", this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qe, e2, t2);
      }
      static $() {
        return ["ConversationMessage.EditLocation|1 relative_workspace_path 9|3 range #0|4 initial_range #0|5 context_lines 9|6 text 9|7 text_range #0", o.SimplestRange];
      }
    }
    class De extends v {
      constructor(e2) {
        super(), this.uniqueId = "", this.editTrailSorted = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new De().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new De().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new De().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(De, e2, t2);
      }
      static $() {
        return ["ConversationMessage.EditTrailContext|1 unique_id 9|2 edit_trail_sorted #0*", qe];
      }
    }
    class Oe extends v {
      constructor(e2) {
        super(), this.message = "", this.value = "", this.startLine = 0, this.endLine = 0, this.startColumn = 0, this.endColumn = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Oe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Oe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Oe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Oe, e2, t2);
      }
      static $() {
        return ["ConversationMessage.ApproximateLintError|1 message 9|2 value 9|3 start_line 5|4 end_line 5|5 start_column 5|6 end_column 5"];
      }
    }
    class Ne extends v {
      constructor(e2) {
        super(), this.chatCodeblockModelValue = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ne().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ne().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ne().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ne, e2, t2);
      }
      static $() {
        return ["ConversationMessage.Lints|1 lints #0|2 chat_codeblock_model_value 9", h];
      }
    }
    class Fe extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.lineNumber = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fe, e2, t2);
      }
      static $() {
        return ["ConversationMessage.RecentLocation|1 relative_workspace_path 9|2 line_number 5"];
      }
    }
    class Ue extends v {
      constructor(e2) {
        super(), this.startLineNumber = 0, this.endLineNumberExclusive = 0, this.beforeContextLines = [], this.removedLines = [], this.addedLines = [], this.afterContextLines = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ue().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ue().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ue().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ue, e2, t2);
      }
      static $() {
        return ["ConversationMessage.RenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"];
      }
    }
    class Le extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.renderedDiffs = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Le().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Le().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Le().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Le, e2, t2);
      }
      static $() {
        return ["ConversationMessage.HumanChange|1 relative_workspace_path 9|2 rendered_diffs #0*", Ue];
      }
    }
    class $e extends v {
      constructor(e2) {
        super(), this.text = "", this.signature = "", this.redactedThinking = "", this.isLastThinkingChunk = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $e().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $e().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $e().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($e, e2, t2);
      }
      static $() {
        return ["ConversationMessage.Thinking|1 text 9|2 signature 9|3 redacted_thinking 9|4 is_last_thinking_chunk 8"];
      }
    }
    class Qe extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qe, e2, t2);
      }
      static $() {
        return ["ConversationMessage.DiffSinceLastApply|1 relative_workspace_path 9|2 diff #0?|4 is_accepted 8?|5 is_rejected 8?|6 last_apply_chained_from_n_human_messages_ago 5?", s.KRm];
      }
    }
    class je extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new je().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new je().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new je().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(je, e2, t2);
      }
      static $() {
        return ["ConversationMessage.DeletedFile|1 relative_workspace_path 9"];
      }
    }
    class Ge extends v {
      constructor(e2) {
        super(), this.title = "", this.knowledge = "", this.knowledgeId = "", this.isGenerated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ge().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ge().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ge().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ge, e2, t2);
      }
      static $() {
        return ["ConversationMessage.KnowledgeItem|1 title 9|2 knowledge 9|3 knowledge_id 9|4 is_generated 8"];
      }
    }
    class He extends v {
      constructor(e2) {
        super(), this.docId = "", this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new He().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new He().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new He().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(He, e2, t2);
      }
      static $() {
        return ["ConversationMessage.DocumentationSelection|1 doc_id 9|2 name 9"];
      }
    }
    class ze extends v {
      constructor(e2) {
        super(), this.isPillDisplayed = false, this.visibleFilePaths = [], this.recentlyViewedFilePaths = [], this.visibleFiles = [], this.recentlyViewedFiles = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ze().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ze().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ze().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ze, e2, t2);
      }
      static $() {
        return ["ConversationMessage.IdeEditorsState|1 is_pill_displayed 8|2 visible_file_paths 9*|3 recently_viewed_file_paths 9*|4 visible_files #0*|5 recently_viewed_files #0*", We];
      }
    }
    class We extends v {
      constructor(e2) {
        super(), this.relativePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new We().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new We().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new We().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(We, e2, t2);
      }
      static $() {
        return ["ConversationMessage.IdeEditorsState.File|1 relative_path 9|2 is_currently_focused 8?|3 current_line_number 5?|4 current_line_text 9?|5 line_count 5?|6 absolute_path 9?"];
      }
    }
    class Ve extends v {
      constructor(e2) {
        super(), this.currentPlan = "", this.isFirstTimeSeen = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ve().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ve().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ve().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ve, e2, t2);
      }
      static $() {
        return ["ConversationMessage.PlanUpdate|1 current_plan 9|2 is_first_time_seen 8"];
      }
    }
    class Ke extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ke().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ke().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ke().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ke, e2, t2);
      }
      static $() {
        return ["ConversationMessage.SimulatedMessageMetadata|1 title 9?|2 task_id 9?|3 fsd_finding_action 9?|4 url 9?|5 subscription_source #0?|6 subscription_event_display #1?|7 interaction_response #2?", l.vns, l.gan, l.nh0];
      }
    }
    class Ye extends v {
      constructor(e2) {
        super(), this.folderPath = "", this.tools = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ye().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ye().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ye().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ye, e2, t2);
      }
      static $() {
        return ["ConversationMessage.McpDescriptor|1 folder_path 9|2 server_name 9?|3 tools #0*|4 server_use_instructions 9?", Ze];
      }
    }
    class Ze extends v {
      constructor(e2) {
        super(), this.toolName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ze().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ze().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ze().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ze, e2, t2);
      }
      static $() {
        return ["ConversationMessage.McpDescriptor.Tool|1 tool_name 9|2 description 9?"];
      }
    }
    class Xe extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.lineNumber = 0, this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xe, e2, t2);
      }
      static $() {
        return ["CurrentFileLocationData|1 relative_workspace_path 9|2 line_number 5|3 text 9"];
      }
    }
    class et extends v {
      constructor(e2) {
        super(), this.relativePath = "", this.files = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new et().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new et().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new et().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(et, e2, t2);
      }
      static $() {
        return ["FolderInfo|1 relative_path 9|2 files #0*", tt];
      }
    }
    class tt extends v {
      constructor(e2) {
        super(), this.relativePath = "", this.content = "", this.truncated = false, this.score = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tt, e2, t2);
      }
      static $() {
        return ["FolderFileInfo|1 relative_path 9|2 content 9|3 truncated 8|4 score 2"];
      }
    }
    class rt extends v {
      constructor(e2) {
        super(), this.output = "", this.success = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rt, e2, t2);
      }
      static $() {
        return ["InterpreterResult|1 output 9|2 success 8"];
      }
    }
    class nt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.chunks = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nt, e2, t2);
      }
      static $() {
        return ["SimpleFileDiff|1 relative_workspace_path 9|3 chunks #0*", st];
      }
    }
    class st extends v {
      constructor(e2) {
        super(), this.oldLines = [], this.newLines = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new st().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new st().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new st().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(st, e2, t2);
      }
      static $() {
        return ["SimpleFileDiff.Chunk|1 old_lines 9*|2 new_lines 9*|3 old_range #0|4 new_range #0", o.LineRange];
      }
    }
    class ot extends v {
      constructor(e2) {
        super(), this.sha = "", this.message = "", this.description = "", this.diff = [], this.author = "", this.date = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ot().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ot().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ot().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ot, e2, t2);
      }
      static $() {
        return ["Commit|1 sha 9|2 message 9|3 description 9|4 diff #0*|5 author 9|6 date 9", o.FileDiff];
      }
    }
    class it extends v {
      constructor(e2) {
        super(), this.title = "", this.body = "", this.diff = [], this.id = n.protoInt64.zero, this.number = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new it().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new it().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new it().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(it, e2, t2);
      }
      static $() {
        return ["PullRequest|1 title 9|2 body 9|3 diff #0*|4 id 3|5 number 3", o.FileDiff];
      }
    }
    class at extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new at().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new at().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new at().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(at, e2, t2);
      }
      static $() {
        return ["SuggestedCodeBlock|1 relative_workspace_path 9"];
      }
    }
    class ct extends v {
      constructor(e2) {
        super(), this.userResponseType = lt.UNSPECIFIED, this.filePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ct().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ct().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ct().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ct, e2, t2);
      }
      static $() {
        return ["UserResponseToSuggestedCodeBlock|1 user_response_type #0|2 file_path 9|3 user_modifications_to_suggested_code_blocks #1?", lt, o.FileDiff];
      }
    }
    var lt = (0, p.QT)(n.proto3, w, "UserResponseToSuggestedCodeBlock.UserResponseType", [[0, "UNSPECIFIED"], [1, "ACCEPT"], [2, "REJECT"], [3, "MODIFY"]], 1);
    class ut extends v {
      constructor(e2) {
        super(), this.fileName = "", this.fileContent = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ut().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ut().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ut().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ut, e2, t2);
      }
      static $() {
        return ["ContextRerankingCandidateFile|1 file_name 9|2 file_content 9"];
      }
    }
    class dt extends v {
      constructor(e2) {
        super(), this.chunks = [], this.editor = pt.UNSPECIFIED, this.hitTimeout = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dt, e2, t2);
      }
      static $() {
        return ["ComposerFileDiff|1 chunks #0*|2 editor #1|3 hit_timeout 8", mt, pt];
      }
    }
    var pt = (0, p.QT)(n.proto3, w, "ComposerFileDiff.Editor", [[0, "UNSPECIFIED"], [1, "AI"], [2, "HUMAN"]], 1);
    class mt extends v {
      constructor(e2) {
        super(), this.diffString = "", this.oldStart = 0, this.newStart = 0, this.oldLines = 0, this.newLines = 0, this.linesRemoved = 0, this.linesAdded = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mt, e2, t2);
      }
      static $() {
        return ["ComposerFileDiff.ChunkDiff|1 diff_string 9|2 old_start 5|3 new_start 5|4 old_lines 5|5 new_lines 5|6 lines_removed 5|7 lines_added 5"];
      }
    }
    class ht extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.diffs = [], this.timestamp = 0, this.uniqueId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ht().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ht().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ht().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ht, e2, t2);
      }
      static $() {
        return ["DiffHistoryData|1 relative_workspace_path 9|2 diffs #0*|3 timestamp 1|4 unique_id 9|5 start_to_end_diff #0", dt];
      }
    }
    class ft extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ft().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ft().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ft().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ft, e2, t2);
      }
      static $() {
        return ["WarmStreamUnifiedChatWithToolsResponse"];
      }
    }
    class gt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.endLineNumberInclusive = 0, this.intent = yt.UNSPECIFIED, this.inclusionType = wt.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gt, e2, t2);
      }
      static $() {
        return ["CodeChunkContextInclusionInfoV2|1 relative_workspace_path 9|2 start_line_number 5|3 end_line_number_inclusive 5|4 intent #0|10 inclusion_type #1|6 tooltip_text 9?|9 pill_is_dashed 8?|8 pill_sub_codicon_name 9?|5 detail_text 9?|7 codicon_name 9?", yt, wt];
      }
    }
    var yt = (0, p.QT)(n.proto3, w, "CodeChunkContextInclusionInfoV2.Intent", [[0, "UNSPECIFIED"], [1, "FILE"], [2, "SELECTION"]], 1), wt = (0, p.QT)(n.proto3, w, "CodeChunkContextInclusionInfoV2.InclusionType", [[0, "UNSPECIFIED"], [1, "FULL"], [2, "OUTLINE"], [3, "FILENAME"]], 1);
    class vt extends v {
      constructor(e2) {
        super(), this.codeChunks = [], this.userMessageTokenLimit = 0, this.codeChunksV2 = [], this.folderExclusionTooltip = "", this.barFraction = 0, this.didBarOverflow = false, this.shouldShowNewChatHint = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vt, e2, t2);
      }
      static $() {
        return ["GetPromptDryRunResponse|1 code_chunks #0*|3 user_message_token_limit 5|4 user_message_token_count #1|5 full_conversation_token_count #1|6 code_chunks_v2 #2*|2 folder_exclusion_tooltip 9|7 bar_fraction 2|8 did_bar_overflow 8|9 should_show_new_chat_hint 8", At, _t, gt];
      }
    }
    class _t extends v {
      constructor(e2) {
        super(), this.isOverTokenLimit = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _t().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _t().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _t().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_t, e2, t2);
      }
      static $() {
        return ["GetPromptDryRunResponse.TokenCount|1 is_over_token_limit 8|2 num_tokens 5?"];
      }
    }
    class At extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.endLineNumberInclusive = 0, this.inclusionType = St.UNSPECIFIED, this.fullFileTokenCount = 0, this.promptTokenCount = 0, this.intent = bt.UNSPECIFIED, this.chunkIsFromLastUserMessage = false, this.isCompressed = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new At().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new At().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new At().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(At, e2, t2);
      }
      static $() {
        return ["CodeChunkContextInclusionInfo|1 relative_workspace_path 9|2 start_line_number 5|3 end_line_number_inclusive 5|4 inclusion_type #0|5 full_file_token_count 5|6 prompt_token_count 5|11 full_file_tokens_count #1|7 exclusion_tooltip 9?|8 intent #2|9 chunk_is_from_last_user_message 8|10 is_compressed 8", St, Et, bt];
      }
    }
    var St = (0, p.QT)(n.proto3, w, "CodeChunkContextInclusionInfo.InclusionType", [[0, "UNSPECIFIED"], [1, "FULL"], [2, "OUTLINE"], [3, "FILENAME"]], 1), bt = (0, p.QT)(n.proto3, w, "CodeChunkContextInclusionInfo.Intent", [[0, "UNSPECIFIED"], [1, "FILE"], [2, "SELECTION"]], 1);
    class Et extends v {
      constructor(e2) {
        super(), this.isTooLargeToCount = false, this.numTokens = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Et().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Et().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Et().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Et, e2, t2);
      }
      static $() {
        return ["CodeChunkContextInclusionInfo.TokenCount|1 is_too_large_to_count 8|2 num_tokens 5"];
      }
    }
    class It extends v {
      constructor(e2) {
        super(), this.subagentType = A.UNSPECIFIED, this.returnValue = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new It().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new It().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new It().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(It, e2, t2);
      }
      static $() {
        return ["SubagentReturnCall|1 subagent_type #0|2 deep_search_return_value #1 return_value|3 fix_lints_return_value #2 return_value|4 task_return_value #3 return_value|5 spec_return_value #4 return_value", A, xt, Bt, Jt, qt];
      }
    }
    class Ct extends v {
      constructor(e2) {
        super(), this.subagentType = A.UNSPECIFIED, this.subagentId = "", this.params = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ct().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ct().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ct().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ct, e2, t2);
      }
      static $() {
        return ["SubagentInfo|1 subagent_type #0|2 subagent_id 9|3 deep_search_params #1 params|4 fix_lints_params #2 params|6 task_params #3 params|7 spec_params #4 params|5 parent_request_id 9?", A, kt, Rt, Pt, Mt];
      }
    }
    class kt extends v {
      constructor(e2) {
        super(), this.query = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kt, e2, t2);
      }
      static $() {
        return ["DeepSearchSubagentParams|1 query 9"];
      }
    }
    class xt extends v {
      constructor(e2) {
        super(), this.contextItems = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xt, e2, t2);
      }
      static $() {
        return ["DeepSearchSubagentReturnValue|1 context_items #0*", Tt];
      }
    }
    class Tt extends v {
      constructor(e2) {
        super(), this.file = "", this.explanation = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tt, e2, t2);
      }
      static $() {
        return ["DeepSearchSubagentReturnValue.ContextItem|1 file 9|2 line_range #0?|3 explanation 9", o.LineRange];
      }
    }
    class Rt extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rt, e2, t2);
      }
      static $() {
        return ["FixLintsSubagentParams"];
      }
    }
    class Bt extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bt, e2, t2);
      }
      static $() {
        return ["FixLintsSubagentReturnValue"];
      }
    }
    class Pt extends v {
      constructor(e2) {
        super(), this.taskDescription = "", this.allowedWriteDirectories = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pt, e2, t2);
      }
      static $() {
        return ["TaskSubagentParams|1 task_description 9|2 allowed_write_directories 9*"];
      }
    }
    class Jt extends v {
      constructor(e2) {
        super(), this.summary = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jt, e2, t2);
      }
      static $() {
        return ["TaskSubagentReturnValue|1 summary 9"];
      }
    }
    class Mt extends v {
      constructor(e2) {
        super(), this.plan = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mt, e2, t2);
      }
      static $() {
        return ["SpecSubagentParams|1 plan 9"];
      }
    }
    class qt extends v {
      constructor(e2) {
        super(), this.summary = "", this.stringReplacements = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qt, e2, t2);
      }
      static $() {
        return ["SpecSubagentReturnValue|1 summary 9|2 string_replacements #0*", Dt];
      }
    }
    class Dt extends v {
      constructor(e2) {
        super(), this.oldString = "", this.newString = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dt, e2, t2);
      }
      static $() {
        return ["StringReplacement|1 old_string 9|2 new_string 9"];
      }
    }
    class Ot extends v {
      constructor(e2) {
        super(), this.rootPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ot().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ot().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ot().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ot, e2, t2);
      }
      static $() {
        return ["ProjectLayout|1 root_path 9|2 content #0|3 list_dir_v2_result #1?", Nt, s.$rP];
      }
    }
    class Nt extends v {
      constructor(e2) {
        super(), this.directories = [], this.files = [], this.hiddenFiles = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nt, e2, t2);
      }
      static $() {
        return ["ProjectLayoutDirectoryContent|1 directories #0*|2 files #1*|3 total_files 5?|4 total_subfolders 5?|5 hidden_files #1*", Ft, Ut];
      }
    }
    class Ft extends v {
      constructor(e2) {
        super(), this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ft().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ft().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ft().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ft, e2, t2);
      }
      static $() {
        return ["ProjectLayoutDirectory|1 name 9|2 content #0", Nt];
      }
    }
    class Ut extends v {
      constructor(e2) {
        super(), this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ut().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ut().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ut().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ut, e2, t2);
      }
      static $() {
        return ["ProjectLayoutFile|1 name 9"];
      }
    }
    class Lt extends v {
      constructor(e2) {
        super(), this.fileStates = {}, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lt, e2, t2);
      }
      static $() {
        return ["ConvertOALToNALRequest|1 request #0|2 file_states 9,#1", W, l.Mzv];
      }
    }
    class $t extends v {
      constructor(e2) {
        super(), this.blobs = {}, this.bubbleCheckpoints = {}, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $t().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $t().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $t().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($t, e2, t2);
      }
      static $() {
        return ["ConvertOALToNALResponse|1 conversation_state #0|2 blobs 9,12|3 bubble_checkpoints 9,#0", l.Y9z];
      }
    }
  }