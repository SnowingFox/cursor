// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 464 range:223373..316193
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
464: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { O9: () => w, gn: () => ie, yf: () => K, An: () => le, hS: () => Et, jF: () => Ht, I8: () => Lt, ZP: () => Ct, KR: () => R, Db: () => Fe, xb: () => Le, TS: () => U, cf: () => x, Bh: () => gt, K4: () => ye, jp: () => T, dq: () => L, pf: () => $, D8: () => pt, XE: () => F, fN: () => J, w1: () => z, jc: () => B, Wu: () => k, QX: () => ot, pV: () => b, gr: () => q, Bo: () => ht, oP: () => he, O0: () => N });
    var n2 = r2(6038), s2 = r2(7620), i2 = r2(7918), o2 = r2(5610), a = r2(1563), u = r2(9825), c = r2(6993), l = r2(9639), m = r2(9582), d = (r2(6885), r2(8592));
    class f extends d.HL {
      static get runtime() {
        return (0, d.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class p extends f {
      constructor(t3) {
        super(), this.lints = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetLintsForChangeResponse|1 lints #0*", h];
      }
    }
    class h extends f {
      constructor(t3) {
        super(), this.message = "", this.severity = "", this.relativeWorkspacePath = "", this.startLineNumberOneIndexed = 0, this.startColumnOneIndexed = 0, this.endLineNumberInclusiveOneIndexed = 0, this.endColumnOneIndexed = 0, this.quickFixes = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetLintsForChangeResponse.Lint|1 message 9|2 severity 9|3 relative_workspace_path 9|4 start_line_number_one_indexed 5|5 start_column_one_indexed 5|6 end_line_number_inclusive_one_indexed 5|7 end_column_one_indexed 5|9 quick_fixes #0*", g];
      }
    }
    class g extends f {
      constructor(t3) {
        super(), this.message = "", this.kind = "", this.isPreferred = false, this.edits = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetLintsForChangeResponse.Lint.QuickFix|1 message 9|2 kind 9|3 is_preferred 8|4 edits #0*", A];
      }
    }
    class A extends f {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.text = "", this.startLineNumberOneIndexed = 0, this.startColumnOneIndexed = 0, this.endLineNumberInclusiveOneIndexed = 0, this.endColumnOneIndexed = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new A().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new A().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new A().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(A, t3, e3);
      }
      static $() {
        return ["GetLintsForChangeResponse.Lint.QuickFix.Edit|1 relative_workspace_path 9|2 text 9|3 start_line_number_one_indexed 5|4 start_column_one_indexed 5|5 end_line_number_inclusive_one_indexed 5|6 end_column_one_indexed 5"];
      }
    }
    const _ = "aiserver.v1.";
    class y extends d.HL {
      static get runtime() {
        return (0, d.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return _;
      }
    }
    var w = (0, d.QT)(n2.proto3, _, "ChunkType", [[0, "UNSPECIFIED"], [1, "CODEBASE"], [2, "LONG_FILE"], [3, "DOCS"]], 1), S = (0, d.QT)(n2.proto3, _, "SubagentType", [[0, "UNSPECIFIED"], [1, "DEEP_SEARCH"], [2, "FIX_LINTS"], [3, "TASK"], [4, "SPEC"]], 1);
    class J extends y {
      constructor(t3) {
        super(), this.requestId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamReplayChatRequest|1 request_id 9|3 tokens_per_second 1?"];
      }
    }
    class B extends y {
      constructor(t3) {
        super(), this.request = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatRequestWithTools|1 stream_unified_chat_request #0 request|2 client_side_tool_v2_result #1 request", z, s2.Ue3];
      }
    }
    class E extends y {
      constructor(t3) {
        super(), this.rules = [], n2.proto3.util.initPartial(t3, this);
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
        return ["UserRules|1 rules #0*", Ht];
      }
    }
    class I extends y {
      constructor(t3) {
        super(), this.padding = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamStart|1 padding 9"];
      }
    }
    class C extends y {
      constructor(t3) {
        super(), this.traceId = "", this.spanId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SpanContext|1 trace_id 9|2 span_id 9|3 trace_flags 13?|4 trace_state 9?"];
      }
    }
    class b extends y {
      constructor(t3) {
        super(), this.response = { case: void 0 }, this.eventId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatResponseWithTools|1 client_side_tool_v2_call #0 response|2 stream_unified_chat_response #1 response|3 conversation_summary #2 response|4 user_rules #3 response|5 stream_start #4 response|6 tracing_context #5?|7 event_id 9", s2.TE4, ot, R, E, I, C];
      }
    }
    class k extends y {
      constructor(t3) {
        super(), this.request = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatRequestWithToolsIdempotent|1 client_chunk #0 request|2 abort #1 request|3 close #1 request|4 idempotency_key 9?|5 seqno 13?", B, n2.Empty];
      }
    }
    class v extends y {
      constructor(t3) {
        super(), this.message = "", this.isDegradedMode = false, n2.proto3.util.initPartial(t3, this);
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
        return ["WelcomeMessage|1 message 9|2 is_degraded_mode 8"];
      }
    }
    class q extends y {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatResponseWithToolsIdempotent|1 server_chunk #0 response|3 welcome_message #1 response|4 seqno_ack 13 response", b, v];
      }
    }
    class R extends y {
      constructor(t3) {
        super(), this.summary = "", this.truncationLastBubbleIdInclusive = "", this.clientShouldStartSendingFromInclusiveBubbleId = "", this.previousConversationSummaryBubbleId = "", this.includesToolResults = false, this.strategy = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ConversationSummary|1 summary 9|2 truncation_last_bubble_id_inclusive 9|3 client_should_start_sending_from_inclusive_bubble_id 9|4 previous_conversation_summary_bubble_id 9|5 includes_tool_results 8|6 strategy 9"];
      }
    }
    class P extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.contents = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ContextToRank|1 relative_workspace_path 9|2 contents 9|3 line_range #0?|4 code_block #1?", i2.LineRange, i2.CodeBlock];
      }
    }
    class T extends y {
      constructor(t3) {
        super(), this.score = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RankedContext|1 context #0|2 score 2", P];
      }
    }
    class x extends y {
      constructor(t3) {
        super(), this.chunks = [], n2.proto3.util.initPartial(t3, this);
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
        return ["DocumentationCitation|1 chunks #0*", o2.ci];
      }
    }
    class N extends y {
      constructor(t3) {
        super(), this.references = [], n2.proto3.util.initPartial(t3, this);
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
        return ["WebCitation|1 references #0*", D];
      }
    }
    class D extends y {
      constructor(t3) {
        super(), this.title = "", this.url = "", this.chunk = "", n2.proto3.util.initPartial(t3, this);
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
        return ["WebReference|2 title 9|1 url 9|3 chunk 9"];
      }
    }
    class U extends y {
      constructor(t3) {
        super(), this.title = "", this.url = "", this.chunk = "", this.name = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DocsReference|1 title 9|2 url 9|3 chunk 9|4 name 9"];
      }
    }
    class Q extends y {
      constructor(t3) {
        super(), this.content = "", this.title = "", n2.proto3.util.initPartial(t3, this);
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
        return ["AiWebSearchResult|1 content 9|2 title 9"];
      }
    }
    class M extends y {
      constructor(t3) {
        super(), this.results = [], n2.proto3.util.initPartial(t3, this);
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
        return ["AiWebSearchResults|1 results #0*", Q];
      }
    }
    class O extends y {
      constructor(t3) {
        super(), this.message = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StatusUpdate|1 message 9|2 metadata 9?"];
      }
    }
    class F extends y {
      constructor(t3) {
        super(), this.updates = [], n2.proto3.util.initPartial(t3, this);
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
        return ["StatusUpdates|1 updates #0*", O];
      }
    }
    class L extends y {
      constructor(t3) {
        super(), this.query = "", this.documents = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RerankDocumentsRequest|1 query 9|2 documents #0*", G];
      }
    }
    class $ extends y {
      constructor(t3) {
        super(), this.documents = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RerankDocumentsResponse|1 documents #0*", H];
      }
    }
    class G extends y {
      constructor(t3) {
        super(), this.content = "", this.id = "", n2.proto3.util.initPartial(t3, this);
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
        return ["Document|1 content 9|2 id 9"];
      }
    }
    class H extends y {
      constructor(t3) {
        super(), this.documentId = "", this.score = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["DocumentIdsWithScores|1 document_id 9|2 score 2"];
      }
    }
    class K extends y {
      constructor(t3) {
        super(), this.fileName = "", this.diffHistory = [], this.diffHistoryTimestamps = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerFileDiffHistory|1 file_name 9|2 diff_history 9*|3 diff_history_timestamps 1*"];
      }
    }
    class V extends y {
      constructor(t3) {
        super(), this.uri = "", this.name = "", n2.proto3.util.initPartial(t3, this);
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
        return ["WorkspaceFolder|1 uri 9|2 name 9"];
      }
    }
    class z extends y {
      constructor(t3) {
        super(), this.conversation = [], this.fullConversationHeadersOnly = [], this.documentationIdentifiers = [], this.externalLinks = [], this.diffsForCompressingFiles = [], this.multiFileLinterErrors = [], this.fileDiffHistories = [], this.quotes = [], this.additionalRankedContext = [], this.isChat = false, this.conversationId = "", this.replyingToRequestId = "", this.repositoryInfoShouldQueryStaging = false, this.repositoryInfoShouldQueryProd = false, this.repoQueryAuthToken = "", this.isAgentic = false, this.supportedTools = [], this.enableYoloMode = false, this.yoloPrompt = "", this.useUnifiedChatPrompt = false, this.mcpTools = [], this.isHeadless = false, this.isBackgroundComposer = false, this.toolsRequiringAcceptedReturn = [], this.projectLayouts = [], this.supportsGitIndex = false, this.forceIsNotDev = false, this.allowServerSideSemanticSearch = false, this.workspaceFolders = [], n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatRequest|1 conversation #0*|30 full_conversation_headers_only #1*|2 allow_long_file_scan 8?|3 explicit_context #2|4 can_handle_filenames_after_language_ids 8?|5 model_details #3|6 linter_errors #4|7 documentation_identifiers 9*|8 use_web 9?|9 external_links #5*|10 project_context #0?|11 diffs_for_compressing_files #6*|12 compress_edits 8?|13 should_cache 8?|14 multi_file_linter_errors #4*|15 current_file #7|16 recent_edits #8?|17 use_reference_composer_diff_prompt 8?|18 file_diff_histories #9*|19 use_new_compression_scheme 8?|21 quotes #10*|20 additional_ranked_context #11*|22 is_chat 8|23 conversation_id 9|72 replying_to_request_id 9|24 repository_info #12|25 repository_info_should_query_staging 8|39 repository_info_should_query_prod 8|52 query_only_repo_access #13|44 repo_query_auth_token 9|26 environment_info #14|27 is_agentic 8|28 conversation_summary #15?|29 supported_tools #16*|31 enable_yolo_mode 8|32 yolo_prompt 9|33 use_unified_chat_prompt 8|34 mcp_tools #17*|35 use_full_inputs_context 8?|36 is_resume 8?|37 allow_model_fallbacks 8?|38 number_of_times_shown_fallback_model_warning 5?|40 context_bank_session_id 9?|41 context_bank_version 5?|43 context_bank_encryption_key 12?|45 is_headless 8|68 is_background_composer 8|42 uses_codebase_results #18?|46 unified_mode #19?|47 tools_requiring_accepted_return #16*|48 should_disable_tools 8?|49 thinking_level #20?|50 should_use_chat_prompt 8?|55 background_composer_id 9?|51 uses_rules 8?|53 mode_uses_auto_apply 8?|54 unified_mode_name 9?|56 use_generate_rules_prompt 8?|57 edit_tool_supports_search_and_replace 8?|58 project_layouts #21*|59 repository_name_if_unindexed 9?|60 indexing_progress 1?|61 full_file_cmd_k_options #22?|62 indexing_phase_if_unindexed 9?|63 use_knowledge_base_prompt 8?|64 indexing_num_files_if_unindexed 5?|66 subagent_info #23?|67 supports_git_index 8|69 force_is_not_dev 8|70 disable_edit_file_timeout 8?|71 should_attach_linter_errors 8?|73 should_speculatively_route_gpt5 8?|74 force_terminal_hanging_detection 8?|75 force_summarization 8?|76 is_quick_search_query 8?|77 is_spec_mode 8?|78 allow_server_side_semantic_search 8|79 speculative_summarization_encryption_key 12?|81 workspace_folders #24*|82 does_readfile_support_images 8?|83 sandboxing_support_enabled 8?|84 custom_planning_instructions 9?|85 enable_terminal_file_persistence 8?|86 terminals_folder 9?|93 agent_transcripts_folder 9?|87 agent_notes_folder 9?|88 agent_tools_folder 9?|89 current_plan #25?|90 has_mcp_descriptors 8?|91 best_of_n_group_id 9?|92 try_use_best_of_n_promotion 8?", Et, _t, i2.ExplicitContext, i2.ModelDetails, i2.LinterErrors, i2.ComposerExternalLink, j, i2.CurrentFileInfo, X, K, i2.ChatQuote, T, a.bn, a.bq, i2.EnvironmentInfo, R, s2.XaY, s2.q20, et, W, Y, Ue, rt, Ce, V, nt];
      }
    }
    var W = (0, d.QT)(n2.proto3, _, "StreamUnifiedChatRequest.UnifiedMode", [[0, "UNSPECIFIED"], [1, "CHAT"], [2, "AGENT"], [3, "EDIT"], [4, "CUSTOM"], [5, "PLAN"], [6, "DEBUG"]], 1), Y = (0, d.QT)(n2.proto3, _, "StreamUnifiedChatRequest.ThinkingLevel", [[0, "UNSPECIFIED"], [1, "MEDIUM"], [2, "HIGH"]], 1);
    class j extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.redRanges = [], this.redRangesReversed = [], this.startHash = "", this.endHash = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatRequest.RedDiff|1 relative_workspace_path 9|2 red_ranges #0*|3 red_ranges_reversed #0*|4 start_hash 9|5 end_hash 9", i2.SimplestRange];
      }
    }
    class X extends y {
      constructor(t3) {
        super(), this.codeBlockInfo = [], this.finalFileValues = [], n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatRequest.RecentEdits|1 code_block_info #0*|2 final_file_values #1*|3 edits_belong_to_composer_generation_uuid 9?", Z, tt];
      }
    }
    class Z extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatRequest.RecentEdits.CodeBlockInfo|1 relative_workspace_path 9|2 content_before 9?|3 content_after 9?|4 generation_uuid 9?|5 version 5?"];
      }
    }
    class tt extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.content = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatRequest.RecentEdits.FileInfo|1 relative_workspace_path 9|2 content 9"];
      }
    }
    class et extends y {
      constructor(t3) {
        super(), this.results = [], this.allFiles = [], n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatRequest.CodeSearchResult|1 results #0*|2 all_files #1*", a.PT, i2.File];
      }
    }
    class rt extends y {
      constructor(t3) {
        super(), this.filePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatRequest.FullFileCmdKOptions|1 file_path 9"];
      }
    }
    class nt extends y {
      constructor(t3) {
        super(), this.content = "", this.name = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatRequest.CurrentPlan|1 content 9|2 name 9"];
      }
    }
    class st extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.content = "", this.score = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextPiece|1 relative_workspace_path 9|2 content 9|3 score 2"];
      }
    }
    class it extends y {
      constructor(t3) {
        super(), this.pieces = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ContextPieceUpdate|1 pieces #0*", st];
      }
    }
    class ot extends y {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatResponse|1 text 9|22 server_bubble_id 9?|2 debugging_only_chat_prompt 9?|3 debugging_only_token_count 5?|4 document_citation #0|5 filled_prompt 9?|6 is_big_file 8?|7 intermediate_text 9?|10 is_using_slow_request 8?|8 chunk_identity #1?|9 docs_reference #2?|11 web_citation #3?|33 ai_web_search_results #4?|12 status_updates #5?|13 tool_call #6?|36 tool_call_v2 #7?|14 should_break_ai_message 8?|15 partial_tool_call #8?|16 final_tool_result #9?|17 symbol_link #10?|19 file_link #11?|18 conversation_summary #12?|20 service_status_update #13?|21 viewable_git_context #14?|23 context_piece_update #15?|24 used_code #16?|25 thinking #17?|37 thinking_style #18?|26 stop_using_dsv3_agentic_model 8?|27 usage_uuid 9?|28 conversation_summary_starter #19?|29 subagent_return #20?|30 context_window_status #21?|31 image_description #22?|32 parallel_tool_calls_complete 8?|34 stars_feedback_request #23?|35 model_provider_request_json 9?", x, ut, U, N, M, F, s2.Faf, s2.bR2, s2.AUe, ct, ht, gt, R, pt, Bt, it, at, Lt, Ct, ft, Ie, mt, lt, dt];
      }
    }
    class at extends y {
      constructor(t3) {
        super(), this.codeResults = [], n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatResponse.UsedCode|1 code_results #0*", a.PT];
      }
    }
    class ut extends y {
      constructor(t3) {
        super(), this.fileName = "", this.startLine = 0, this.endLine = 0, this.text = "", this.chunkType = w.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatResponse.ChunkIdentity|1 file_name 9|2 start_line 5|3 end_line 5|4 text 9|5 chunk_type #0", w];
      }
    }
    class ct extends y {
      constructor(t3) {
        super(), this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatResponse.FinalToolResult|1 tool_call_id 9|2 result #0", s2.Ue3];
      }
    }
    class lt extends y {
      constructor(t3) {
        super(), this.description = "", this.imageUuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamUnifiedChatResponse.ImageDescription|1 description 9|2 image_uuid 9"];
      }
    }
    class mt extends y {
      constructor(t3) {
        super(), this.percentageRemaining = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextWindowStatus|1 percentage_remaining 5|2 tokens_used 5?|3 token_limit 5?|4 percentage_remaining_float 2?"];
      }
    }
    class dt extends y {
      constructor(t3) {
        super(), this.bubbleId = "", this.message = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StarsFeedbackRequest|1 bubble_id 9|2 message 9"];
      }
    }
    class ft extends y {
      constructor(t3) {
        super(), this.message = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ConversationSummaryStarter|1 message 9"];
      }
    }
    class pt extends y {
      constructor(t3) {
        super(), this.message = "", this.codicon = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ServiceStatusUpdate|1 message 9|2 codicon 9|3 allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown 8?|4 action_to_run_on_status_update 9?"];
      }
    }
    class ht extends y {
      constructor(t3) {
        super(), this.symbolName = "", this.symbolSearchString = "", this.relativeWorkspacePath = "", this.roughLineNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["SymbolLink|1 symbol_name 9|2 symbol_search_string 9|3 relative_workspace_path 9|4 rough_line_number 5"];
      }
    }
    class gt extends y {
      constructor(t3) {
        super(), this.displayName = "", this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["FileLink|1 display_name 9|2 relative_workspace_path 9"];
      }
    }
    class At extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.redRanges = [], this.redRangesReversed = [], this.startHash = "", this.endHash = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RedDiff|1 relative_workspace_path 9|2 red_ranges #0*|3 red_ranges_reversed #0*|4 start_hash 9|5 end_hash 9", i2.SimplestRange];
      }
    }
    class _t extends y {
      constructor(t3) {
        super(), this.bubbleId = "", this.type = It.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["ConversationMessageHeader|1 bubble_id 9|2 server_bubble_id 9?|3 type #0", It];
      }
    }
    class yt extends y {
      constructor(t3) {
        super(), this.fileDetails = "", this.fileName = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DiffFile|1 file_details 9|2 file_name 9"];
      }
    }
    class wt extends y {
      constructor(t3) {
        super(), this.description = "", this.message = "", this.files = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ViewableCommitProps|1 description 9|2 message 9|3 files #0*", yt];
      }
    }
    class St extends y {
      constructor(t3) {
        super(), this.title = "", this.body = "", this.files = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new St().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new St().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new St().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(St, t3, e3);
      }
      static $() {
        return ["ViewablePRProps|1 title 9|2 body 9|3 files #0*", yt];
      }
    }
    class Jt extends y {
      constructor(t3) {
        super(), this.files = [], this.diffPreface = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jt, t3, e3);
      }
      static $() {
        return ["ViewableDiffProps|1 files #0*|2 diff_preface 9", yt];
      }
    }
    class Bt extends y {
      constructor(t3) {
        super(), this.diffData = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bt, t3, e3);
      }
      static $() {
        return ["ViewableGitContext|1 commit_data #0?|2 pull_request_data #1?|3 diff_data #2*", wt, St, Jt];
      }
    }
    class Et extends y {
      constructor(t3) {
        super(), this.text = "", this.type = It.UNSPECIFIED, this.attachedCodeChunks = [], this.codebaseContextChunks = [], this.commits = [], this.pullRequests = [], this.gitDiffs = [], this.assistantSuggestedDiffs = [], this.interpreterResults = [], this.images = [], this.attachedFolders = [], this.approximateLintErrors = [], this.bubbleId = "", this.attachedFoldersNew = [], this.lints = [], this.userResponsesToSuggestedCodeBlocks = [], this.relevantFiles = [], this.toolResults = [], this.notepads = [], this.capabilities = [], this.editTrailContexts = [], this.suggestedCodeBlocks = [], this.diffsForCompressingFiles = [], this.multiFileLinterErrors = [], this.diffHistories = [], this.recentlyViewedFiles = [], this.recentLocationsHistory = [], this.isAgentic = false, this.fileDiffTrajectories = [], this.existedSubsequentTerminalCommand = false, this.existedPreviousTerminalCommand = false, this.docsReferences = [], this.webReferences = [], this.aiWebSearchResults = [], this.attachedFoldersListDirResults = [], this.humanChanges = [], this.attachedHumanChanges = false, this.summarizedComposers = [], this.cursorRules = [], this.contextPieces = [], this.allThinkingBlocks = [], this.diffsSinceLastApply = [], this.deletedFiles = [], this.supportedTools = [], this.consoleLogs = [], this.knowledgeItems = [], this.uiElementPicked = [], this.documentationSelections = [], this.externalLinks = [], this.projectLayouts = [], this.capabilityContexts = [], this.todos = [], this.requestId = "", this.createdAt = "", this.mcpDescriptors = [], this.workspaceUris = [], this.cursorCommands = [], this.cursorCommandsExplicitlySet = false, this.pastChats = [], this.pastChatsExplicitlySet = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Et().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Et().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Et().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Et, t3, e3);
      }
      static $() {
        return ["ConversationMessage|1 text 9|2 type #0|3 attached_code_chunks #1*|4 codebase_context_chunks #2*|5 commits #3*|6 pull_requests #4*|7 git_diffs #5*|8 assistant_suggested_diffs #6*|9 interpreter_results #7*|10 images #8*|11 attached_folders 9*|12 approximate_lint_errors #9*|13 bubble_id 9|32 server_bubble_id 9?|14 attached_folders_new #10*|15 lints #11*|16 user_responses_to_suggested_code_blocks #12*|17 relevant_files 9*|18 tool_results #13*|19 notepads #14*|20 is_capability_iteration 8?|21 capabilities #15*|22 edit_trail_contexts #16*|23 suggested_code_blocks #17*|24 diffs_for_compressing_files #18*|25 multi_file_linter_errors #19*|26 diff_histories #20*|27 recently_viewed_files #1*|28 recent_locations_history #21*|29 is_agentic 8|30 file_diff_trajectories #22*|31 conversation_summary #23?|33 existed_subsequent_terminal_command 8|34 existed_previous_terminal_command 8|35 docs_references #24*|36 web_references #25*|75 ai_web_search_results #26*|37 git_context #27?|38 attached_folders_list_dir_results #28*|39 cached_conversation_summary #23?|40 human_changes #29*|41 attached_human_changes 8|42 summarized_composers #30*|43 cursor_rules #31*|44 context_pieces #32*|45 thinking #33?|46 all_thinking_blocks #33*|85 thinking_style #34?|47 unified_mode #35?|98 agent_mode #36?|48 diffs_since_last_apply #37*|49 deleted_files #38*|50 usage_uuid 9?|51 supported_tools #39*|52 current_file_location_data #40?|53 edit_tool_supports_search_and_replace 8?|54 last_terminal_cwd 9?|55 user_explicitly_asked_to_generate_cursor_rules 8?|56 console_logs #41*|57 rich_text 9?|58 knowledge_items #42*|59 ui_element_picked #43*|60 user_explicitly_asked_to_add_to_knowledge_base 8?|61 documentation_selections #44*|62 external_links #45*|63 use_web 8?|64 project_layouts #46*|65 thinking_duration_ms 5?|88 step_duration_ms 5?|66 subagent_return #47?|67 is_simple_looping_message 8?|68 capability_contexts #48*|69 checkpoint_commit_hash 9?|70 git_status_raw 9?|71 todos #49*|72 is_review_edits_followup 8?|74 request_id 9|73 ide_editors_state #50?|76 context_window_status #51?|77 is_plan_execution 8?|78 created_at 9|79 model_info #52|80 is_quick_search_query 8?|81 plan_update #53?|82 is_simulated_msg 8?|95 simulated_msg_reason #54?|97 simulated_message_metadata #55?|83 mcp_descriptors #56*|84 workspace_project_dir 9?|87 workspace_uris 9*|86 debug_mode_config #57?|89 text_blob_id 12?|90 rich_text_blob_id 12?|91 cursor_commands #58*|92 cursor_commands_explicitly_set 8|93 past_chats #59*|94 past_chats_explicitly_set 8|96 triggering_user_info #60?|99 turn_steer 8?|100 sent_by_agent_id 9?|101 sent_by_voice_call 8?|102 sender #61?", It, bt, i2.CodeBlock, ie, oe, i2.GitDiff, ne, re, i2.ImageProto, Ut, te, Qt, ue, Pt, Tt, u.Gn, Dt, ae, At, i2.LinterErrorsWithoutFileContents, pe, Mt, K, R, U, D, Q, Bt, s2.$PL, Ft, xt, i2.CursorRule, st, Lt, Ct, W, c.xyI, $t, Gt, s2.XaY, Zt, i2.RCPLogEntry, Ht, i2.RCPUIElementPicked, Kt, i2.ComposerExternalLink, Ue, Ie, u.Km, s2.kWq, Vt, mt, i2.ModelInfo, Wt, c.c_h, Yt, jt, l.TT, m.Ps, m.AW, c.iHX, c.D$r];
      }
    }
    var It = (0, d.QT)(n2.proto3, _, "ConversationMessage.MessageType", [[0, "UNSPECIFIED"], [1, "HUMAN"], [2, "AI"]], 1), Ct = (0, d.QT)(n2.proto3, _, "ConversationMessage.ThinkingStyle", [[0, "UNSPECIFIED"], [1, "DEFAULT"], [2, "CODEX"], [3, "GPT5"]], 1);
    class bt extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.languageIdentifier = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.CodeChunk|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 summarization_strategy #0?|5 language_identifier 9|6 intent #1?|7 is_final_version 8?|8 is_first_version 8?|9 contents_are_missing 8?|10 is_only_included_from_folder 8?|11 code_chunk_git_context #2?", vt, kt, qt];
      }
    }
    var kt = (0, d.QT)(n2.proto3, _, "ConversationMessage.CodeChunk.Intent", [[0, "UNSPECIFIED"], [1, "COMPOSER_FILE"], [2, "COMPRESSED_COMPOSER_FILE"], [3, "RECENTLY_VIEWED_FILE"], [4, "OUTLINE"], [5, "MENTIONED_FILE"], [6, "CODE_SELECTION"], [7, "AI_EDITED_FILE"], [8, "VISIBLE_FILE"], [9, "TERMINAL_SELECTION"]], 1), vt = (0, d.QT)(n2.proto3, _, "ConversationMessage.CodeChunk.SummarizationStrategy", [[0, "NONE_UNSPECIFIED"], [1, "SUMMARIZED"], [2, "EMBEDDED"]], 1);
    class qt extends y {
      constructor(t3) {
        super(), this.gitInfo = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.CodeChunk.CodeChunkGitContext|1 git_info #0*", Rt];
      }
    }
    class Rt extends y {
      constructor(t3) {
        super(), this.commit = "", this.author = "", this.date = "", this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo|1 commit 9|2 author 9|3 date 9|4 message 9"];
      }
    }
    class Pt extends y {
      constructor(t3) {
        super(), this.toolCallId = "", this.toolName = "", this.toolIndex = 0, this.args = "", this.rawArgs = "", this.attachedCodeChunks = [], this.images = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.ToolResult|1 tool_call_id 9|2 tool_name 9|3 tool_index 13|12 model_call_id 9?|4 args 9|5 raw_args 9|6 attached_code_chunks #0*|7 content 9?|8 result #1|9 error #2?|10 images #3*|11 tool_call #4?|13 started_at_ms 4?|14 completed_at_ms 4?", bt, s2.Ue3, s2.MtQ, i2.ImageProto, s2.TE4];
      }
    }
    class Tt extends y {
      constructor(t3) {
        super(), this.name = "", this.text = "", this.attachedCodeChunks = [], this.attachedFolders = [], this.commits = [], this.pullRequests = [], this.gitDiffs = [], this.images = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.NotepadContext|1 name 9|2 text 9|3 attached_code_chunks #0*|4 attached_folders 9*|5 commits #1*|6 pull_requests #2*|7 git_diffs #3*|8 images #4*", bt, ie, oe, i2.GitDiff, i2.ImageProto];
      }
    }
    class xt extends y {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.ComposerContext|1 name 9|2 conversation_summary #0", R];
      }
    }
    class Nt extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.contextLines = "", this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.EditLocation|1 relative_workspace_path 9|3 range #0|4 initial_range #0|5 context_lines 9|6 text 9|7 text_range #0", i2.SimplestRange];
      }
    }
    class Dt extends y {
      constructor(t3) {
        super(), this.uniqueId = "", this.editTrailSorted = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.EditTrailContext|1 unique_id 9|2 edit_trail_sorted #0*", Nt];
      }
    }
    class Ut extends y {
      constructor(t3) {
        super(), this.message = "", this.value = "", this.startLine = 0, this.endLine = 0, this.startColumn = 0, this.endColumn = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ut().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ut().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ut().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ut, t3, e3);
      }
      static $() {
        return ["ConversationMessage.ApproximateLintError|1 message 9|2 value 9|3 start_line 5|4 end_line 5|5 start_column 5|6 end_column 5"];
      }
    }
    class Qt extends y {
      constructor(t3) {
        super(), this.chatCodeblockModelValue = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.Lints|1 lints #0|2 chat_codeblock_model_value 9", p];
      }
    }
    class Mt extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.lineNumber = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.RecentLocation|1 relative_workspace_path 9|2 line_number 5"];
      }
    }
    class Ot extends y {
      constructor(t3) {
        super(), this.startLineNumber = 0, this.endLineNumberExclusive = 0, this.beforeContextLines = [], this.removedLines = [], this.addedLines = [], this.afterContextLines = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ot().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ot().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ot().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ot, t3, e3);
      }
      static $() {
        return ["ConversationMessage.RenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"];
      }
    }
    class Ft extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.renderedDiffs = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ft().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ft().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ft().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ft, t3, e3);
      }
      static $() {
        return ["ConversationMessage.HumanChange|1 relative_workspace_path 9|2 rendered_diffs #0*", Ot];
      }
    }
    class Lt extends y {
      constructor(t3) {
        super(), this.text = "", this.signature = "", this.redactedThinking = "", this.isLastThinkingChunk = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.Thinking|1 text 9|2 signature 9|3 redacted_thinking 9|4 is_last_thinking_chunk 8"];
      }
    }
    class $t extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $t().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $t().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $t().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($t, t3, e3);
      }
      static $() {
        return ["ConversationMessage.DiffSinceLastApply|1 relative_workspace_path 9|2 diff #0?|4 is_accepted 8?|5 is_rejected 8?|6 last_apply_chained_from_n_human_messages_ago 5?", s2.KRm];
      }
    }
    class Gt extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.DeletedFile|1 relative_workspace_path 9"];
      }
    }
    class Ht extends y {
      constructor(t3) {
        super(), this.title = "", this.knowledge = "", this.knowledgeId = "", this.isGenerated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ht().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ht().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ht().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ht, t3, e3);
      }
      static $() {
        return ["ConversationMessage.KnowledgeItem|1 title 9|2 knowledge 9|3 knowledge_id 9|4 is_generated 8"];
      }
    }
    class Kt extends y {
      constructor(t3) {
        super(), this.docId = "", this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.DocumentationSelection|1 doc_id 9|2 name 9"];
      }
    }
    class Vt extends y {
      constructor(t3) {
        super(), this.isPillDisplayed = false, this.visibleFilePaths = [], this.recentlyViewedFilePaths = [], this.visibleFiles = [], this.recentlyViewedFiles = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.IdeEditorsState|1 is_pill_displayed 8|2 visible_file_paths 9*|3 recently_viewed_file_paths 9*|4 visible_files #0*|5 recently_viewed_files #0*", zt];
      }
    }
    class zt extends y {
      constructor(t3) {
        super(), this.relativePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.IdeEditorsState.File|1 relative_path 9|2 is_currently_focused 8?|3 current_line_number 5?|4 current_line_text 9?|5 line_count 5?|6 absolute_path 9?"];
      }
    }
    class Wt extends y {
      constructor(t3) {
        super(), this.currentPlan = "", this.isFirstTimeSeen = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.PlanUpdate|1 current_plan 9|2 is_first_time_seen 8"];
      }
    }
    class Yt extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.SimulatedMessageMetadata|1 title 9?|2 task_id 9?|3 fsd_finding_action 9?|4 url 9?|5 subscription_source #0?|6 subscription_event_display #1?|7 interaction_response #2?", c.vns, c.gan, c.nh0];
      }
    }
    class jt extends y {
      constructor(t3) {
        super(), this.folderPath = "", this.tools = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.McpDescriptor|1 folder_path 9|2 server_name 9?|3 tools #0*|4 server_use_instructions 9?", Xt];
      }
    }
    class Xt extends y {
      constructor(t3) {
        super(), this.toolName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xt, t3, e3);
      }
      static $() {
        return ["ConversationMessage.McpDescriptor.Tool|1 tool_name 9|2 description 9?"];
      }
    }
    class Zt extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.lineNumber = 0, this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zt, t3, e3);
      }
      static $() {
        return ["CurrentFileLocationData|1 relative_workspace_path 9|2 line_number 5|3 text 9"];
      }
    }
    class te extends y {
      constructor(t3) {
        super(), this.relativePath = "", this.files = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new te().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new te().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new te().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(te, t3, e3);
      }
      static $() {
        return ["FolderInfo|1 relative_path 9|2 files #0*", ee];
      }
    }
    class ee extends y {
      constructor(t3) {
        super(), this.relativePath = "", this.content = "", this.truncated = false, this.score = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ee().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ee().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ee().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ee, t3, e3);
      }
      static $() {
        return ["FolderFileInfo|1 relative_path 9|2 content 9|3 truncated 8|4 score 2"];
      }
    }
    class re extends y {
      constructor(t3) {
        super(), this.output = "", this.success = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new re().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new re().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new re().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(re, t3, e3);
      }
      static $() {
        return ["InterpreterResult|1 output 9|2 success 8"];
      }
    }
    class ne extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.chunks = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ne().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ne().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ne().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ne, t3, e3);
      }
      static $() {
        return ["SimpleFileDiff|1 relative_workspace_path 9|3 chunks #0*", se];
      }
    }
    class se extends y {
      constructor(t3) {
        super(), this.oldLines = [], this.newLines = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new se().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new se().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new se().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(se, t3, e3);
      }
      static $() {
        return ["SimpleFileDiff.Chunk|1 old_lines 9*|2 new_lines 9*|3 old_range #0|4 new_range #0", i2.LineRange];
      }
    }
    class ie extends y {
      constructor(t3) {
        super(), this.sha = "", this.message = "", this.description = "", this.diff = [], this.author = "", this.date = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ie().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ie().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ie().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ie, t3, e3);
      }
      static $() {
        return ["Commit|1 sha 9|2 message 9|3 description 9|4 diff #0*|5 author 9|6 date 9", i2.FileDiff];
      }
    }
    class oe extends y {
      constructor(t3) {
        super(), this.title = "", this.body = "", this.diff = [], this.id = n2.protoInt64.zero, this.number = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oe, t3, e3);
      }
      static $() {
        return ["PullRequest|1 title 9|2 body 9|3 diff #0*|4 id 3|5 number 3", i2.FileDiff];
      }
    }
    class ae extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ae().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ae().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ae().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ae, t3, e3);
      }
      static $() {
        return ["SuggestedCodeBlock|1 relative_workspace_path 9"];
      }
    }
    class ue extends y {
      constructor(t3) {
        super(), this.userResponseType = ce.UNSPECIFIED, this.filePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ue().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ue().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ue().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ue, t3, e3);
      }
      static $() {
        return ["UserResponseToSuggestedCodeBlock|1 user_response_type #0|2 file_path 9|3 user_modifications_to_suggested_code_blocks #1?", ce, i2.FileDiff];
      }
    }
    var ce = (0, d.QT)(n2.proto3, _, "UserResponseToSuggestedCodeBlock.UserResponseType", [[0, "UNSPECIFIED"], [1, "ACCEPT"], [2, "REJECT"], [3, "MODIFY"]], 1);
    class le extends y {
      constructor(t3) {
        super(), this.fileName = "", this.fileContent = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new le().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new le().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new le().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(le, t3, e3);
      }
      static $() {
        return ["ContextRerankingCandidateFile|1 file_name 9|2 file_content 9"];
      }
    }
    class me extends y {
      constructor(t3) {
        super(), this.chunks = [], this.editor = de.UNSPECIFIED, this.hitTimeout = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new me().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new me().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new me().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(me, t3, e3);
      }
      static $() {
        return ["ComposerFileDiff|1 chunks #0*|2 editor #1|3 hit_timeout 8", fe, de];
      }
    }
    var de = (0, d.QT)(n2.proto3, _, "ComposerFileDiff.Editor", [[0, "UNSPECIFIED"], [1, "AI"], [2, "HUMAN"]], 1);
    class fe extends y {
      constructor(t3) {
        super(), this.diffString = "", this.oldStart = 0, this.newStart = 0, this.oldLines = 0, this.newLines = 0, this.linesRemoved = 0, this.linesAdded = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fe, t3, e3);
      }
      static $() {
        return ["ComposerFileDiff.ChunkDiff|1 diff_string 9|2 old_start 5|3 new_start 5|4 old_lines 5|5 new_lines 5|6 lines_removed 5|7 lines_added 5"];
      }
    }
    class pe extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.diffs = [], this.timestamp = 0, this.uniqueId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pe, t3, e3);
      }
      static $() {
        return ["DiffHistoryData|1 relative_workspace_path 9|2 diffs #0*|3 timestamp 1|4 unique_id 9|5 start_to_end_diff #0", me];
      }
    }
    class he extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new he().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new he().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new he().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(he, t3, e3);
      }
      static $() {
        return ["WarmStreamUnifiedChatWithToolsResponse"];
      }
    }
    class ge extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.endLineNumberInclusive = 0, this.intent = Ae.UNSPECIFIED, this.inclusionType = _e.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ge().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ge().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ge().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ge, t3, e3);
      }
      static $() {
        return ["CodeChunkContextInclusionInfoV2|1 relative_workspace_path 9|2 start_line_number 5|3 end_line_number_inclusive 5|4 intent #0|10 inclusion_type #1|6 tooltip_text 9?|9 pill_is_dashed 8?|8 pill_sub_codicon_name 9?|5 detail_text 9?|7 codicon_name 9?", Ae, _e];
      }
    }
    var Ae = (0, d.QT)(n2.proto3, _, "CodeChunkContextInclusionInfoV2.Intent", [[0, "UNSPECIFIED"], [1, "FILE"], [2, "SELECTION"]], 1), _e = (0, d.QT)(n2.proto3, _, "CodeChunkContextInclusionInfoV2.InclusionType", [[0, "UNSPECIFIED"], [1, "FULL"], [2, "OUTLINE"], [3, "FILENAME"]], 1);
    class ye extends y {
      constructor(t3) {
        super(), this.codeChunks = [], this.userMessageTokenLimit = 0, this.codeChunksV2 = [], this.folderExclusionTooltip = "", this.barFraction = 0, this.didBarOverflow = false, this.shouldShowNewChatHint = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ye().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ye().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ye().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ye, t3, e3);
      }
      static $() {
        return ["GetPromptDryRunResponse|1 code_chunks #0*|3 user_message_token_limit 5|4 user_message_token_count #1|5 full_conversation_token_count #1|6 code_chunks_v2 #2*|2 folder_exclusion_tooltip 9|7 bar_fraction 2|8 did_bar_overflow 8|9 should_show_new_chat_hint 8", Se, we, ge];
      }
    }
    class we extends y {
      constructor(t3) {
        super(), this.isOverTokenLimit = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new we().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new we().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new we().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(we, t3, e3);
      }
      static $() {
        return ["GetPromptDryRunResponse.TokenCount|1 is_over_token_limit 8|2 num_tokens 5?"];
      }
    }
    class Se extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.endLineNumberInclusive = 0, this.inclusionType = Je.UNSPECIFIED, this.fullFileTokenCount = 0, this.promptTokenCount = 0, this.intent = Be.UNSPECIFIED, this.chunkIsFromLastUserMessage = false, this.isCompressed = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Se().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Se().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Se().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Se, t3, e3);
      }
      static $() {
        return ["CodeChunkContextInclusionInfo|1 relative_workspace_path 9|2 start_line_number 5|3 end_line_number_inclusive 5|4 inclusion_type #0|5 full_file_token_count 5|6 prompt_token_count 5|11 full_file_tokens_count #1|7 exclusion_tooltip 9?|8 intent #2|9 chunk_is_from_last_user_message 8|10 is_compressed 8", Je, Ee, Be];
      }
    }
    var Je = (0, d.QT)(n2.proto3, _, "CodeChunkContextInclusionInfo.InclusionType", [[0, "UNSPECIFIED"], [1, "FULL"], [2, "OUTLINE"], [3, "FILENAME"]], 1), Be = (0, d.QT)(n2.proto3, _, "CodeChunkContextInclusionInfo.Intent", [[0, "UNSPECIFIED"], [1, "FILE"], [2, "SELECTION"]], 1);
    class Ee extends y {
      constructor(t3) {
        super(), this.isTooLargeToCount = false, this.numTokens = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ee().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ee().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ee().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ee, t3, e3);
      }
      static $() {
        return ["CodeChunkContextInclusionInfo.TokenCount|1 is_too_large_to_count 8|2 num_tokens 5"];
      }
    }
    class Ie extends y {
      constructor(t3) {
        super(), this.subagentType = S.UNSPECIFIED, this.returnValue = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ie().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ie().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ie().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ie, t3, e3);
      }
      static $() {
        return ["SubagentReturnCall|1 subagent_type #0|2 deep_search_return_value #1 return_value|3 fix_lints_return_value #2 return_value|4 task_return_value #3 return_value|5 spec_return_value #4 return_value", S, ke, Re, Te, Ne];
      }
    }
    class Ce extends y {
      constructor(t3) {
        super(), this.subagentType = S.UNSPECIFIED, this.subagentId = "", this.params = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ce().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ce().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ce().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ce, t3, e3);
      }
      static $() {
        return ["SubagentInfo|1 subagent_type #0|2 subagent_id 9|3 deep_search_params #1 params|4 fix_lints_params #2 params|6 task_params #3 params|7 spec_params #4 params|5 parent_request_id 9?", S, be, qe, Pe, xe];
      }
    }
    class be extends y {
      constructor(t3) {
        super(), this.query = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new be().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new be().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new be().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(be, t3, e3);
      }
      static $() {
        return ["DeepSearchSubagentParams|1 query 9"];
      }
    }
    class ke extends y {
      constructor(t3) {
        super(), this.contextItems = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ke().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ke().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ke().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ke, t3, e3);
      }
      static $() {
        return ["DeepSearchSubagentReturnValue|1 context_items #0*", ve];
      }
    }
    class ve extends y {
      constructor(t3) {
        super(), this.file = "", this.explanation = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ve().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ve().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ve().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ve, t3, e3);
      }
      static $() {
        return ["DeepSearchSubagentReturnValue.ContextItem|1 file 9|2 line_range #0?|3 explanation 9", i2.LineRange];
      }
    }
    class qe extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qe, t3, e3);
      }
      static $() {
        return ["FixLintsSubagentParams"];
      }
    }
    class Re extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Re().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Re().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Re().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Re, t3, e3);
      }
      static $() {
        return ["FixLintsSubagentReturnValue"];
      }
    }
    class Pe extends y {
      constructor(t3) {
        super(), this.taskDescription = "", this.allowedWriteDirectories = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pe, t3, e3);
      }
      static $() {
        return ["TaskSubagentParams|1 task_description 9|2 allowed_write_directories 9*"];
      }
    }
    class Te extends y {
      constructor(t3) {
        super(), this.summary = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Te().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Te().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Te().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Te, t3, e3);
      }
      static $() {
        return ["TaskSubagentReturnValue|1 summary 9"];
      }
    }
    class xe extends y {
      constructor(t3) {
        super(), this.plan = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xe, t3, e3);
      }
      static $() {
        return ["SpecSubagentParams|1 plan 9"];
      }
    }
    class Ne extends y {
      constructor(t3) {
        super(), this.summary = "", this.stringReplacements = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ne().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ne().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ne().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ne, t3, e3);
      }
      static $() {
        return ["SpecSubagentReturnValue|1 summary 9|2 string_replacements #0*", De];
      }
    }
    class De extends y {
      constructor(t3) {
        super(), this.oldString = "", this.newString = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new De().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new De().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new De().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(De, t3, e3);
      }
      static $() {
        return ["StringReplacement|1 old_string 9|2 new_string 9"];
      }
    }
    class Ue extends y {
      constructor(t3) {
        super(), this.rootPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ue().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ue().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ue().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ue, t3, e3);
      }
      static $() {
        return ["ProjectLayout|1 root_path 9|2 content #0|3 list_dir_v2_result #1?", Qe, s2.$rP];
      }
    }
    class Qe extends y {
      constructor(t3) {
        super(), this.directories = [], this.files = [], this.hiddenFiles = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qe, t3, e3);
      }
      static $() {
        return ["ProjectLayoutDirectoryContent|1 directories #0*|2 files #1*|3 total_files 5?|4 total_subfolders 5?|5 hidden_files #1*", Me, Oe];
      }
    }
    class Me extends y {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Me().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Me().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Me().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Me, t3, e3);
      }
      static $() {
        return ["ProjectLayoutDirectory|1 name 9|2 content #0", Qe];
      }
    }
    class Oe extends y {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Oe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Oe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Oe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Oe, t3, e3);
      }
      static $() {
        return ["ProjectLayoutFile|1 name 9"];
      }
    }
    class Fe extends y {
      constructor(t3) {
        super(), this.fileStates = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fe, t3, e3);
      }
      static $() {
        return ["ConvertOALToNALRequest|1 request #0|2 file_states 9,#1", z, c.Mzv];
      }
    }
    class Le extends y {
      constructor(t3) {
        super(), this.blobs = {}, this.bubbleCheckpoints = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Le().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Le().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Le().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Le, t3, e3);
      }
      static $() {
        return ["ConvertOALToNALResponse|1 conversation_state #0|2 blobs 9,12|3 bubble_checkpoints 9,#0", c.Y9z];
      }
    }
  }