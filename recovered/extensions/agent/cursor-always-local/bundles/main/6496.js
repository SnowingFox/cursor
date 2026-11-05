// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6496 range:3652285..3674335
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6496: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $2: () => C, D: () => Q, NF: () => d, Tv: () => U, V_: () => y, Xo: () => I, Xx: () => f, Z$: () => R, bO: () => _, jm: () => l, n9: () => m, xu: () => B });
    var n2 = r2(6038), s2 = r2(9524), i2 = r2(7918), o2 = r2(6938), a = r2(464), u = r2(8592);
    class c extends u.HL {
      static get runtime() {
        return (0, u.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class l extends c {
      constructor(t3) {
        super(), this.contextItems = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RerankCmdKContextRequest|1 context_items #0*|3 legacy_context #1|2 cmd_k_options #2", s2.oT, E, h];
      }
    }
    class m extends c {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["RerankCmdKContextResponse|1 context_status_update #0 response|2 missing_context_items #1 response|3 did_call 8?", s2.d$, s2._V];
      }
    }
    class d extends c {
      constructor(t3) {
        super(), this.contextItems = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RerankTerminalCmdKContextRequest|1 context_items #0*|2 cmd_k_options #1", s2.oT, p];
      }
    }
    class f extends c {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["RerankTerminalCmdKContextResponse|1 context_status_update #0 response|2 missing_context_items #1 response", s2.d$, s2._V];
      }
    }
    class p extends c {
      constructor(t3) {
        super(), this.chatMode = false, this.adaCmdKContext = false, n2.proto3.util.initPartial(t3, this);
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
        return ["TerminalCmdKOptions|3 model_details #0|1 chat_mode 8|2 ada_cmd_k_context 8|4 use_web 8?", i2.ModelDetails];
      }
    }
    class h extends c {
      constructor(t3) {
        super(), this.chatMode = false, this.adaCmdKContext = false, n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKOptions|3 model_details #0|1 chat_mode 8|2 ada_cmd_k_context 8|4 use_reranker 8?|5 use_web 8?|6 request_is_for_caching 8?", i2.ModelDetails];
      }
    }
    class g extends c {
      constructor(t3) {
        super(), this.originalLines = [], this.relativePath = "", this.extraContextAbove = [], this.extraContextBelow = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKUpcomingEdit|1 original_lines 9*|3 relative_path 9|4 extra_context_above 9*|5 extra_context_below 9*"];
      }
    }
    class A extends c {
      constructor(t3) {
        super(), this.originalLines = [], this.newLines = [], this.relativePath = "", this.extraContextAbove = [], this.extraContextBelow = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKPreviousEdit|1 original_lines 9*|2 new_lines 9*|3 relative_path 9|4 extra_context_above 9*|5 extra_context_below 9*"];
      }
    }
    class _ extends c {
      constructor(t3) {
        super(), this.contextItems = [], this.sessionId = "", this.previousEdits = [], this.upcomingEdits = [], this.images = [], this.links = [], this.diffHistory = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_, t3, e3);
      }
      static $() {
        return ["StreamHypermodeRequest|1 context_items #0*|2 cmd_k_options #1|4 cmd_k_debug_info #2|6 session_id 9|5 legacy_context #3|7 previous_edit #4?|8 previous_edits #4*|12 upcoming_edits #5*|9 use_big_cmdk_for_multi_file_edit 8?|10 images #6*|11 links #7*|13 diff_history #8*|14 hyper_model 9?|15 timing_info #9?", s2.oT, h, i2.CmdKDebugInfo, E, A, g, i2.ImageProto, i2.CmdKExternalLink, o2.lIu, J];
      }
    }
    class y extends c {
      constructor(t3) {
        super(), this.contextItems = [], this.sessionId = "", this.previousEdits = [], this.upcomingEdits = [], this.images = [], this.links = [], this.diffHistory = [], this.rules = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new y().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new y().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new y().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(y, t3, e3);
      }
      static $() {
        return ["StreamCmdKRequest|1 context_items #0*|2 cmd_k_options #1|4 cmd_k_debug_info #2|6 session_id 9|5 legacy_context #3|7 previous_edit #4?|8 previous_edits #4*|12 upcoming_edits #5*|9 use_big_cmdk_for_multi_file_edit 8?|10 images #6*|11 links #7*|13 diff_history #8*|14 diff_to_base_branch #9?|15 timing_info #10?|16 rules #11*", s2.oT, h, i2.CmdKDebugInfo, E, A, g, i2.ImageProto, i2.CmdKExternalLink, o2.lIu, w, J, i2.CursorRule];
      }
    }
    class w extends c {
      constructor(t3) {
        super(), this.fileDiffs = [], this.commits = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new w().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new w().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new w().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(w, t3, e3);
      }
      static $() {
        return ["StreamCmdKRequest.BranchDiff|1 file_diffs #0*|2 commits #1*", S, a.gn];
      }
    }
    class S extends c {
      constructor(t3) {
        super(), this.fileName = "", this.diff = "", this.tooBig = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new S().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new S().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new S().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(S, t3, e3);
      }
      static $() {
        return ["StreamCmdKRequest.BranchDiff.FileDiff|1 file_name 9|2 diff 9|3 too_big 8"];
      }
    }
    class J extends c {
      constructor(t3) {
        super(), this.userInputTime = 0, this.streamCmdkTime = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["TimingInfo|1 user_input_time 1|2 stream_cmdk_time 1"];
      }
    }
    class B extends c {
      constructor(t3) {
        super(), this.contextItems = [], this.sessionId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamTerminalCmdKRequest|1 context_items #0*|2 cmd_k_options #1|6 session_id 9|5 legacy_context #2", s2.oT, p, E];
      }
    }
    class E extends c {
      constructor(t3) {
        super(), this.promptCodeBlocks = [], this.documentationIdentifiers = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKLegacyContext|4 explicit_context #0|12 prompt_code_blocks #1*|10 documentation_identifiers 9*", i2.ExplicitContext, i2.CodeBlock];
      }
    }
    class I extends c {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCmdKResponseContextWrapped|1 real_response #0 response|2 context_status_update #1 response|3 missing_context_items #2 response", R, s2.d$, s2._V];
      }
    }
    class C extends c {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamTerminalCmdKResponseContextWrapped|1 real_response #0 response|2 context_status_update #1 response|3 missing_context_items #2 response", b, s2.d$, s2._V];
      }
    }
    class b extends c {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamTerminalCmdKResponse|1 terminal_command #0 response|4 chat #1 response|5 status_update #2 response", k, v, q];
      }
    }
    class k extends c {
      constructor(t3) {
        super(), this.partialCommand = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamTerminalCmdKResponse.TerminalCommand|1 partial_command 9"];
      }
    }
    class v extends c {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamTerminalCmdKResponse.Chat|1 text 9"];
      }
    }
    class q extends c {
      constructor(t3) {
        super(), this.messages = [], n2.proto3.util.initPartial(t3, this);
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
        return ["StreamTerminalCmdKResponse.StatusUpdate|1 messages 9*"];
      }
    }
    class R extends c {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCmdKResponse|1 edit_start #0 response|2 edit_stream #1 response|3 edit_end #2 response|4 chat #3 response|5 status_update #4 response", P, T, x, N, D];
      }
    }
    class P extends c {
      constructor(t3) {
        super(), this.startLineNumber = 0, this.editId = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCmdKResponse.EditStart|1 start_line_number 5|2 edit_id 5|3 max_end_line_number_exclusive 5?|4 file_path 9?"];
      }
    }
    class T extends c {
      constructor(t3) {
        super(), this.text = "", this.editId = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCmdKResponse.EditStream|1 text 9|2 edit_id 5|3 file_path 9?"];
      }
    }
    class x extends c {
      constructor(t3) {
        super(), this.endLineNumberExclusive = 0, this.editId = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCmdKResponse.EditEnd|1 end_line_number_exclusive 5|2 edit_id 5|3 file_path 9?"];
      }
    }
    class N extends c {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCmdKResponse.Chat|1 text 9"];
      }
    }
    class D extends c {
      constructor(t3) {
        super(), this.messages = [], n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCmdKResponse.StatusUpdate|1 messages 9*"];
      }
    }
    class U extends c {
      constructor(t3) {
        super(), this.codeBlocks = [], this.contextItems = [], this.sessionId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetRelevantChunksRequest|1 code_blocks #0*|2 cmd_k_options #1|3 context_items #2*|4 session_id 9|5 legacy_context #3", i2.CodeBlock, h, s2.oT, E];
      }
    }
    class Q extends c {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamGetRelevantChunksResponseContextWrapped|1 real_response #0 response", M];
      }
    }
    class M extends c {
      constructor(t3) {
        super(), this.response = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["GetRelevantChunksResponse|1 code_blocks #0 response|2 chain_of_thought_stream #1 response", F, O];
      }
    }
    class O extends c {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetRelevantChunksResponse.ChainOfThoughtStream|1 text 9"];
      }
    }
    class F extends c {
      constructor(t3) {
        super(), this.codeBlocks = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetRelevantChunksResponse.CodeBlocks|1 code_blocks #0*", i2.CodeBlock];
      }
    }
  }