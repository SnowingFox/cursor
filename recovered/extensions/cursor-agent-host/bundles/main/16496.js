// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 16496 range:4161877..4183825
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16496: (e, t, r) => {
    "use strict";
    r.d(t, { $2: () => C, D: () => N, NF: () => p, Tv: () => O, V_: () => v, Xo: () => I, Xx: () => m, Z$: () => B, bO: () => w, jm: () => u, n9: () => d, xu: () => b });
    var n = r(36038), s = r(69524), o = r(67918), i = r(66938), a = r(50464), c = r(8592);
    class l extends c.HL {
      static get runtime() {
        return (0, c.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class u extends l {
      constructor(e2) {
        super(), this.contextItems = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(u, e2, t2);
      }
      static $() {
        return ["RerankCmdKContextRequest|1 context_items #0*|3 legacy_context #1|2 cmd_k_options #2", s.oT, E, f];
      }
    }
    class d extends l {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new d().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new d().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new d().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(d, e2, t2);
      }
      static $() {
        return ["RerankCmdKContextResponse|1 context_status_update #0 response|2 missing_context_items #1 response|3 did_call 8?", s.d$, s._V];
      }
    }
    class p extends l {
      constructor(e2) {
        super(), this.contextItems = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(p, e2, t2);
      }
      static $() {
        return ["RerankTerminalCmdKContextRequest|1 context_items #0*|2 cmd_k_options #1", s.oT, h];
      }
    }
    class m extends l {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new m().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new m().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new m().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(m, e2, t2);
      }
      static $() {
        return ["RerankTerminalCmdKContextResponse|1 context_status_update #0 response|2 missing_context_items #1 response", s.d$, s._V];
      }
    }
    class h extends l {
      constructor(e2) {
        super(), this.chatMode = false, this.adaCmdKContext = false, n.proto3.util.initPartial(e2, this);
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
        return ["TerminalCmdKOptions|3 model_details #0|1 chat_mode 8|2 ada_cmd_k_context 8|4 use_web 8?", o.ModelDetails];
      }
    }
    class f extends l {
      constructor(e2) {
        super(), this.chatMode = false, this.adaCmdKContext = false, n.proto3.util.initPartial(e2, this);
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
        return ["CmdKOptions|3 model_details #0|1 chat_mode 8|2 ada_cmd_k_context 8|4 use_reranker 8?|5 use_web 8?|6 request_is_for_caching 8?", o.ModelDetails];
      }
    }
    class g extends l {
      constructor(e2) {
        super(), this.originalLines = [], this.relativePath = "", this.extraContextAbove = [], this.extraContextBelow = [], n.proto3.util.initPartial(e2, this);
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
        return ["CmdKUpcomingEdit|1 original_lines 9*|3 relative_path 9|4 extra_context_above 9*|5 extra_context_below 9*"];
      }
    }
    class y extends l {
      constructor(e2) {
        super(), this.originalLines = [], this.newLines = [], this.relativePath = "", this.extraContextAbove = [], this.extraContextBelow = [], n.proto3.util.initPartial(e2, this);
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
        return ["CmdKPreviousEdit|1 original_lines 9*|2 new_lines 9*|3 relative_path 9|4 extra_context_above 9*|5 extra_context_below 9*"];
      }
    }
    class w extends l {
      constructor(e2) {
        super(), this.contextItems = [], this.sessionId = "", this.previousEdits = [], this.upcomingEdits = [], this.images = [], this.links = [], this.diffHistory = [], n.proto3.util.initPartial(e2, this);
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
        return ["StreamHypermodeRequest|1 context_items #0*|2 cmd_k_options #1|4 cmd_k_debug_info #2|6 session_id 9|5 legacy_context #3|7 previous_edit #4?|8 previous_edits #4*|12 upcoming_edits #5*|9 use_big_cmdk_for_multi_file_edit 8?|10 images #6*|11 links #7*|13 diff_history #8*|14 hyper_model 9?|15 timing_info #9?", s.oT, f, o.CmdKDebugInfo, E, y, g, o.ImageProto, o.CmdKExternalLink, i.lIu, S];
      }
    }
    class v extends l {
      constructor(e2) {
        super(), this.contextItems = [], this.sessionId = "", this.previousEdits = [], this.upcomingEdits = [], this.images = [], this.links = [], this.diffHistory = [], this.rules = [], n.proto3.util.initPartial(e2, this);
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
        return ["StreamCmdKRequest|1 context_items #0*|2 cmd_k_options #1|4 cmd_k_debug_info #2|6 session_id 9|5 legacy_context #3|7 previous_edit #4?|8 previous_edits #4*|12 upcoming_edits #5*|9 use_big_cmdk_for_multi_file_edit 8?|10 images #6*|11 links #7*|13 diff_history #8*|14 diff_to_base_branch #9?|15 timing_info #10?|16 rules #11*", s.oT, f, o.CmdKDebugInfo, E, y, g, o.ImageProto, o.CmdKExternalLink, i.lIu, _, S, o.CursorRule];
      }
    }
    class _ extends l {
      constructor(e2) {
        super(), this.fileDiffs = [], this.commits = [], n.proto3.util.initPartial(e2, this);
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
        return ["StreamCmdKRequest.BranchDiff|1 file_diffs #0*|2 commits #1*", A, a.gn];
      }
    }
    class A extends l {
      constructor(e2) {
        super(), this.fileName = "", this.diff = "", this.tooBig = false, n.proto3.util.initPartial(e2, this);
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
        return ["StreamCmdKRequest.BranchDiff.FileDiff|1 file_name 9|2 diff 9|3 too_big 8"];
      }
    }
    class S extends l {
      constructor(e2) {
        super(), this.userInputTime = 0, this.streamCmdkTime = 0, n.proto3.util.initPartial(e2, this);
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
        return ["TimingInfo|1 user_input_time 1|2 stream_cmdk_time 1"];
      }
    }
    class b extends l {
      constructor(e2) {
        super(), this.contextItems = [], this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamTerminalCmdKRequest|1 context_items #0*|2 cmd_k_options #1|6 session_id 9|5 legacy_context #2", s.oT, h, E];
      }
    }
    class E extends l {
      constructor(e2) {
        super(), this.promptCodeBlocks = [], this.documentationIdentifiers = [], n.proto3.util.initPartial(e2, this);
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
        return ["CmdKLegacyContext|4 explicit_context #0|12 prompt_code_blocks #1*|10 documentation_identifiers 9*", o.ExplicitContext, o.CodeBlock];
      }
    }
    class I extends l {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["StreamCmdKResponseContextWrapped|1 real_response #0 response|2 context_status_update #1 response|3 missing_context_items #2 response", B, s.d$, s._V];
      }
    }
    class C extends l {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["StreamTerminalCmdKResponseContextWrapped|1 real_response #0 response|2 context_status_update #1 response|3 missing_context_items #2 response", k, s.d$, s._V];
      }
    }
    class k extends l {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["StreamTerminalCmdKResponse|1 terminal_command #0 response|4 chat #1 response|5 status_update #2 response", x, T, R];
      }
    }
    class x extends l {
      constructor(e2) {
        super(), this.partialCommand = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamTerminalCmdKResponse.TerminalCommand|1 partial_command 9"];
      }
    }
    class T extends l {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamTerminalCmdKResponse.Chat|1 text 9"];
      }
    }
    class R extends l {
      constructor(e2) {
        super(), this.messages = [], n.proto3.util.initPartial(e2, this);
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
        return ["StreamTerminalCmdKResponse.StatusUpdate|1 messages 9*"];
      }
    }
    class B extends l {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["StreamCmdKResponse|1 edit_start #0 response|2 edit_stream #1 response|3 edit_end #2 response|4 chat #3 response|5 status_update #4 response", P, J, M, q, D];
      }
    }
    class P extends l {
      constructor(e2) {
        super(), this.startLineNumber = 0, this.editId = 0, n.proto3.util.initPartial(e2, this);
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
        return ["StreamCmdKResponse.EditStart|1 start_line_number 5|2 edit_id 5|3 max_end_line_number_exclusive 5?|4 file_path 9?"];
      }
    }
    class J extends l {
      constructor(e2) {
        super(), this.text = "", this.editId = 0, n.proto3.util.initPartial(e2, this);
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
        return ["StreamCmdKResponse.EditStream|1 text 9|2 edit_id 5|3 file_path 9?"];
      }
    }
    class M extends l {
      constructor(e2) {
        super(), this.endLineNumberExclusive = 0, this.editId = 0, n.proto3.util.initPartial(e2, this);
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
        return ["StreamCmdKResponse.EditEnd|1 end_line_number_exclusive 5|2 edit_id 5|3 file_path 9?"];
      }
    }
    class q extends l {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamCmdKResponse.Chat|1 text 9"];
      }
    }
    class D extends l {
      constructor(e2) {
        super(), this.messages = [], n.proto3.util.initPartial(e2, this);
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
        return ["StreamCmdKResponse.StatusUpdate|1 messages 9*"];
      }
    }
    class O extends l {
      constructor(e2) {
        super(), this.codeBlocks = [], this.contextItems = [], this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetRelevantChunksRequest|1 code_blocks #0*|2 cmd_k_options #1|3 context_items #2*|4 session_id 9|5 legacy_context #3", o.CodeBlock, f, s.oT, E];
      }
    }
    class N extends l {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["StreamGetRelevantChunksResponseContextWrapped|1 real_response #0 response", F];
      }
    }
    class F extends l {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["GetRelevantChunksResponse|1 code_blocks #0 response|2 chain_of_thought_stream #1 response", L, U];
      }
    }
    class U extends l {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetRelevantChunksResponse.ChainOfThoughtStream|1 text 9"];
      }
    }
    class L extends l {
      constructor(e2) {
        super(), this.codeBlocks = [], n.proto3.util.initPartial(e2, this);
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
        return ["GetRelevantChunksResponse.CodeBlocks|1 code_blocks #0*", o.CodeBlock];
      }
    }
  }