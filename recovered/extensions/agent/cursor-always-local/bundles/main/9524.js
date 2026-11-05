// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9524 range:6096416..6129053
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9524: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { _V: () => d, d$: () => m, oT: () => l, xJ: () => h });
    var n2 = r2(6038), s2 = r2(7918), i2 = r2(6938), o2 = r2(3341), a = r2(8592);
    const u = "aiserver.v1.";
    class c extends a.HL {
      static get runtime() {
        return (0, a.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return u;
      }
    }
    class l extends c {
      constructor(t3) {
        super(), this.item = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["PotentiallyCachedContextItem|1 context_item #0 item|2 context_item_hash 9 item", h];
      }
    }
    class m extends c {
      constructor(t3) {
        super(), this.contextItemStatuses = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ContextStatusUpdate|1 context_item_statuses #0*", f];
      }
    }
    class d extends c {
      constructor(t3) {
        super(), this.missingContextItemHashes = [], n2.proto3.util.initPartial(t3, this);
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
        return ["MissingContextItems|2 missing_context_item_hashes 9*"];
      }
    }
    class f extends c {
      constructor(t3) {
        super(), this.contextItemHash = "", this.shownToTheModel = false, this.score = 0, this.percentageOfAvailableSpace = 0, this.postGenerationEvaluation = p.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItemStatus|1 context_item_hash 9|2 shown_to_the_model 8|3 score 2|4 percentage_of_available_space 2|5 post_generation_evaluation #0", p];
      }
    }
    var p = (0, a.QT)(n2.proto3, u, "ContextItemStatus.PostGenerationEvaluation", [[0, "UNSPECIFIED"], [1, "USEFUL"], [2, "USELESS"]], 1);
    class h extends c {
      constructor(t3) {
        super(), this.item = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem|1 intent #0|2 file_chunk #1 item|3 outline_chunk #2 item|4 cmd_k_selection #3 item|5 cmd_k_immediate_context #4 item|6 cmd_k_query #5 item|7 cmd_k_query_history #6 item|8 custom_instructions #7 item|9 go_to_definition_result #8 item|10 documentation_chunk #9 item|11 lints #10 item|12 chat_history #11 item|13 notebook_cell_output #12 item|14 terminal_history #13 item|15 terminal_cmd_k_query #14 item|16 terminal_cmd_k_query_history #15 item|17 sparse_file_chunk #16 item|18 lsp_subgraph_chunk #17 item|19 commit_note_chunk #18 item|20 file_diff_history #19 item|21 cmd_k_query_history_in_diff_session #20 item|22 project_rule #21 item", O, g, y, w, J, E, b, P, T, x, N, q, U, R, I, C, A, Q, M, S, k, s2.CursorRule];
      }
    }
    class g extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.chunkContents = "", this.startLineNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.FileChunk|1 relative_workspace_path 9|2 chunk_contents 9|3 start_line_number 5"];
      }
    }
    class A extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.lines = [], this.totalNumberOfLinesInFile = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.SparseFileChunk|1 relative_workspace_path 9|2 lines #0*|3 total_number_of_lines_in_file 5|4 cell_number 5?", _];
      }
    }
    class _ extends c {
      constructor(t3) {
        super(), this.line = "", this.lineNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.SparseFileChunk.Line|1 line 9|2 line_number 5"];
      }
    }
    class y extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.contents = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.OutlineChunk|1 relative_workspace_path 9|2 contents 9|3 full_range #0", s2.LineRange];
      }
    }
    class w extends c {
      constructor(t3) {
        super(), this.lines = [], this.startLineNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.CmdKSelection|1 lines 9*|2 start_line_number 5"];
      }
    }
    class S extends c {
      constructor(t3) {
        super(), this.howManyDiffsAgo = 0, this.isVeryRecent = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.FileDiffHistory|1 cpp_file_diff_history #0|2 how_many_diffs_ago 5|3 is_very_recent 8", i2.lIu];
      }
    }
    class J extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.lines = [], this.totalNumberOfLinesInFile = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.CmdKImmediateContext|1 relative_workspace_path 9|2 lines #0*|3 total_number_of_lines_in_file 5|4 cell_number 5?", B];
      }
    }
    class B extends c {
      constructor(t3) {
        super(), this.line = "", this.lineNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.CmdKImmediateContext.Line|1 line 9|2 line_number 5"];
      }
    }
    class E extends c {
      constructor(t3) {
        super(), this.query = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.CmdKQuery|1 query 9"];
      }
    }
    class I extends c {
      constructor(t3) {
        super(), this.query = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.TerminalCmdKQuery|1 query 9"];
      }
    }
    class C extends c {
      constructor(t3) {
        super(), this.contextItemHashes = [], this.suggestedCommand = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.TerminalCmdKQueryHistory|1 query #0|2 query_history #1|5 context_item_hashes 9*|6 suggested_command 9", I, C];
      }
    }
    class b extends c {
      constructor(t3) {
        super(), this.contextItemHashes = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.CmdKQueryHistory|1 query #0|2 immediate_context #1|3 selection #2|4 query_history #3|5 context_item_hashes 9*|6 timestamp 3?|7 timestamp_double 1?", E, J, w, b];
      }
    }
    class k extends c {
      constructor(t3) {
        super(), this.pastCmdkQueries = [], this.currTimestampDouble = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.CmdKQueryHistoryInDiffSession|1 past_cmdk_queries #0*|3 curr_timestamp_double 1", v];
      }
    }
    class v extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.timestampDouble = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession|1 query #0|2 relative_workspace_path 9|5 cmdk_was_accepted 8?|6 timestamp_double 1|7 timestamp_for_diff_interleaving 1?|8 request_id 9?", E];
      }
    }
    class q extends c {
      constructor(t3) {
        super(), this.userMessage = "", this.assistantResponse = "", this.activeForCmdK = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.ChatHistory|1 user_message 9|2 assistant_response 9|3 chat_history #0|4 active_for_cmd_k 8|5 timestamp 3?|6 timestamp_double 1?", q];
      }
    }
    class R extends c {
      constructor(t3) {
        super(), this.history = "", this.cwdFull = "", this.cwdRelativeWorkspacePath = "", this.activeForCmdK = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.TerminalHistory|1 history 9|5 cwd_full 9|6 cwd_relative_workspace_path 9|4 active_for_cmd_k 8|7 timestamp 3?|8 timestamp_double 1?"];
      }
    }
    class P extends c {
      constructor(t3) {
        super(), this.instructions = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.CustomInstructions|1 instructions 9"];
      }
    }
    class T extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.line = "", this.lineNumber = 0, this.columnNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.GoToDefinitionResult|1 relative_workspace_path 9|2 line 9|3 line_number 5|4 column_number 5|5 definition_chunk #0", g];
      }
    }
    class x extends c {
      constructor(t3) {
        super(), this.docName = "", this.pageUrl = "", this.documentationChunk = "", this.score = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.DocumentationChunk|1 doc_name 9|2 page_url 9|3 documentation_chunk 9|4 score 2"];
      }
    }
    class N extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.lints = [], this.contextLines = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.Lints|1 relative_workspace_path 9|2 lints #0*|3 context_lines #1*", s2.Lint, D];
      }
    }
    class D extends c {
      constructor(t3) {
        super(), this.line = "", this.lineNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.Lints.Line|1 line 9|2 line_number 5"];
      }
    }
    class U extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.cellOutput = "", this.cellNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.NotebookCellOutput|1 relative_workspace_path 9|2 cell_output 9|3 cell_number 5"];
      }
    }
    class Q extends c {
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
        return ["ContextItem.LspSubgraphChunk|1 lsp_subgraph_full_context #0", o2.i9];
      }
    }
    class M extends c {
      constructor(t3) {
        super(), this.note = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ContextItem.CommitNoteChunk|1 note 9"];
      }
    }
    class O extends c {
      constructor(t3) {
        super(), this.type = F.UNSPECIFIED, this.uuid = "", this.intent = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent|1 type #0|15 uuid 9|2 file #1 intent|3 code_selection #2 intent|5 lints #3 intent|6 recent_locations #4 intent|8 cmd_k_current_file #5 intent|9 cmd_k_query_etc #6 intent|14 terminal_cmd_k_defaults #7 intent|10 cmd_k_definitions #8 intent|11 documentation #9 intent|12 custom_instructions #10 intent|13 chat_history #11 intent|16 terminal_history #12 intent|17 visible_tabs #13 intent|18 lsp_subgraph #14 intent|19 commit_notes #15 intent|20 diff_history #16 intent|21 past_cmdk_messages_in_diff_sessions #17 intent", F, $, H, V, Y, Z, tt, it, rt, L, et, nt, ot, X, at, K, st, j];
      }
    }
    var F = (0, a.QT)(n2.proto3, u, "ContextIntent.Type", [[0, "UNSPECIFIED"], [1, "USER_ADDED"], [2, "AUTOMATIC"]], 1);
    class L extends c {
      constructor(t3) {
        super(), this.documentationIdentifier = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.Documentation|1 documentation_identifier 9"];
      }
    }
    class $ extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.mode = G.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.File|1 relative_workspace_path 9|2 mode #0", G];
      }
    }
    var G = (0, a.QT)(n2.proto3, u, "ContextIntent.File.Mode", [[0, "UNSPECIFIED"], [1, "FULL"], [2, "OUTLINE"], [3, "CHUNKS"]], 1);
    class H extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.CodeSelection|1 relative_workspace_path 9|2 potentially_out_of_date_range #0|3 text 9", s2.SimpleRange];
      }
    }
    class K extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.CommitNotes"];
      }
    }
    class V extends c {
      constructor(t3) {
        super(), this.scope = { case: void 0 }, this.filterToSeverities = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.Lints|1 cmdk_scope #0 scope|2 file_scope #1 scope|3 filter_to_severities #2*", z, W, s2.LintSeverity];
      }
    }
    class z extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.Lints.CmdKScope"];
      }
    }
    class W extends c {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.Lints.FileScope|1 relative_workspace_path 9|2 filter_range #0?", s2.LineRange];
      }
    }
    class Y extends c {
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
        return ["ContextIntent.RecentLocations|2 timestamp 1?"];
      }
    }
    class j extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.PastCmdkConversationsInDiffSessions"];
      }
    }
    class X extends c {
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
        return ["ContextIntent.VisibleTabs"];
      }
    }
    class Z extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.CmdKCurrentFile"];
      }
    }
    class tt extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.CmdKQueryEtc"];
      }
    }
    class et extends c {
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
        return ["ContextIntent.CustomInstructions"];
      }
    }
    class rt extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.CmdKDefinitions"];
      }
    }
    class nt extends c {
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
        return ["ContextIntent.ChatHistory"];
      }
    }
    class st extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.DiffHistory"];
      }
    }
    class it extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.TerminalCmdKDefaults"];
      }
    }
    class ot extends c {
      constructor(t3) {
        super(), this.instanceId = 0, this.activeForCmdK = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.TerminalHistory|1 instance_id 5|2 active_for_cmd_k 8|3 use_active_instance_as_fallback 8?"];
      }
    }
    class at extends c {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ContextIntent.LspSubgraph"];
      }
    }
  }