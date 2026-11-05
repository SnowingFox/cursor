// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 77620 range:11366680..11565541
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77620: (e, t, r) => {
    "use strict";
    r.d(t, { $PL: () => ce, $rP: () => Wn, AUe: () => N, Dm_: () => ct, Faf: () => F, I8K: () => lt, KRm: () => W, MtQ: () => T, PfC: () => S, TE4: () => P, Ue3: () => J, WtZ: () => xs, XaY: () => _, bR2: () => U, kWq: () => Ln, q20: () => Cr, tze: () => ks });
    var n = r(36038), s = r(67918), o = r(44498), i = r(11531), a = r(85814), c = r(97747), l = r(75178), u = r(81563), d = r(13574), p = r(62671), m = r(11491), h = r(72730), f = r(43643), g = r(60867), y = r(8592);
    const w = "aiserver.v1.";
    class v extends y.HL {
      static get runtime() {
        return (0, y.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return w;
      }
    }
    var _ = (0, y.QT)(n.proto3, w, "ClientSideToolV2", [[0, "UNSPECIFIED"], [1, "READ_SEMSEARCH_FILES"], [3, "RIPGREP_SEARCH"], [5, "READ_FILE"], [6, "LIST_DIR"], [7, "EDIT_FILE"], [8, "FILE_SEARCH"], [9, "SEMANTIC_SEARCH_FULL"], [11, "DELETE_FILE"], [12, "REAPPLY"], [15, "RUN_TERMINAL_COMMAND_V2"], [16, "FETCH_RULES"], [18, "WEB_SEARCH"], [19, "MCP"], [23, "SEARCH_SYMBOLS"], [24, "BACKGROUND_COMPOSER_FOLLOWUP"], [25, "KNOWLEDGE_BASE"], [26, "FETCH_PULL_REQUEST"], [27, "DEEP_SEARCH"], [28, "CREATE_DIAGRAM"], [29, "FIX_LINTS"], [30, "READ_LINTS"], [31, "GO_TO_DEFINITION"], [32, "TASK"], [33, "AWAIT_TASK"], [34, "TODO_READ"], [35, "TODO_WRITE"], [38, "EDIT_FILE_V2"], [39, "LIST_DIR_V2"], [40, "READ_FILE_V2"], [41, "RIPGREP_RAW_SEARCH"], [42, "GLOB_FILE_SEARCH"], [43, "CREATE_PLAN"], [44, "LIST_MCP_RESOURCES"], [45, "READ_MCP_RESOURCE"], [46, "READ_PROJECT"], [47, "UPDATE_PROJECT"], [48, "TASK_V2"], [49, "CALL_MCP_TOOL"], [50, "APPLY_AGENT_DIFF"], [51, "ASK_QUESTION"], [52, "SWITCH_MODE"], [53, "GENERATE_IMAGE"], [54, "COMPUTER_USE"], [55, "WRITE_SHELL_STDIN"], [56, "RECORD_SCREEN"], [57, "WEB_FETCH"], [58, "REPORT_BUGFIX_RESULTS"], [59, "AI_ATTRIBUTION"], [60, "MCP_AUTH"], [61, "REFLECT"], [62, "AWAIT"], [63, "GET_MCP_TOOLS"], [65, "SEND_TO_USER"], [66, "CONNECT_SCM"]], 1), A = (0, y.QT)(n.proto3, w, "BuiltinTool", [[0, "UNSPECIFIED"], [1, "SEARCH"], [2, "READ_CHUNK"], [3, "GOTODEF"], [4, "EDIT"], [5, "UNDO_EDIT"], [6, "END"], [7, "NEW_FILE"], [8, "ADD_TEST"], [9, "RUN_TEST"], [10, "DELETE_TEST"], [11, "SAVE_FILE"], [12, "GET_TESTS"], [13, "GET_SYMBOLS"], [14, "SEMANTIC_SEARCH"], [15, "GET_PROJECT_STRUCTURE"], [16, "CREATE_RM_FILES"], [17, "RUN_TERMINAL_COMMANDS"], [18, "NEW_EDIT"], [19, "READ_WITH_LINTER"]], 1), S = (0, y.QT)(n.proto3, w, "RunTerminalCommandEndedReason", [[0, "UNSPECIFIED"], [1, "EXECUTION_COMPLETED"], [2, "EXECUTION_ABORTED"], [3, "EXECUTION_FAILED"], [4, "ERROR_OCCURRED_CHECKING_REASON"], [5, "IDLE_TIMEOUT"]], 1);
    class b extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["ReapplyParams|1 relative_workspace_path 9"];
      }
    }
    class E extends v {
      constructor(e2) {
        super(), this.agentId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ApplyAgentDiffParams|1 agent_id 9"];
      }
    }
    class I extends v {
      constructor(e2) {
        super(), this.isApplied = false, this.applyFailed = false, this.linterErrors = [], n.proto3.util.initPartial(e2, this);
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
        return ["ReapplyResult|1 diff #0|2 is_applied 8|3 apply_failed 8|4 linter_errors #1*|5 rejected 8?", W, s.LinterError];
      }
    }
    class C extends v {
      constructor(e2) {
        super(), this.ruleNames = [], n.proto3.util.initPartial(e2, this);
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
        return ["FetchRulesParams|1 rule_names 9*"];
      }
    }
    class k extends v {
      constructor(e2) {
        super(), this.rules = [], n.proto3.util.initPartial(e2, this);
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
        return ["FetchRulesResult|1 rules #0*", s.CursorRule];
      }
    }
    class x extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ReapplyStream"];
      }
    }
    class T extends v {
      constructor(e2) {
        super(), this.clientVisibleErrorMessage = "", this.modelVisibleErrorMessage = "", this.errorDetails = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ToolResultError|1 client_visible_error_message 9|2 model_visible_error_message 9|3 actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk 9?|5 edit_file_error_details #0 error_details|6 search_replace_error_details #1 error_details", R, B];
      }
    }
    class R extends v {
      constructor(e2) {
        super(), this.numLinesInFileBeforeEdit = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ToolResultError.EditFileError|1 num_lines_in_file_before_edit 5"];
      }
    }
    class B extends v {
      constructor(e2) {
        super(), this.numLinesInFileBeforeEdit = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ToolResultError.SearchReplaceError|1 num_lines_in_file_before_edit 5"];
      }
    }
    class P extends v {
      constructor(e2) {
        super(), this.tool = _.UNSPECIFIED, this.params = { case: void 0 }, this.toolCallId = "", this.name = "", this.isStreaming = false, this.isLastMessage = false, this.internal = false, this.rawArgs = "", n.proto3.util.initPartial(e2, this);
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
        return ["ClientSideToolV2Call|1 tool #0|2 read_semsearch_files_params #1 params|5 ripgrep_search_params #2 params|8 read_file_params #3 params|12 list_dir_params #4 params|13 edit_file_params #5 params|16 file_search_params #6 params|17 semantic_search_full_params #7 params|19 delete_file_params #8 params|20 reapply_params #9 params|23 run_terminal_command_v2_params #10 params|24 fetch_rules_params #11 params|26 web_search_params #12 params|27 mcp_params #13 params|31 search_symbols_params #14 params|41 gotodef_params #15 params|32 background_composer_followup_params #16 params|33 knowledge_base_params #17 params|34 fetch_pull_request_params #18 params|35 deep_search_params #19 params|36 create_diagram_params #20 params|37 fix_lints_params #21 params|38 read_lints_params #22 params|42 task_params #23 params|43 await_task_params #24 params|44 todo_read_params #25 params|45 todo_write_params #26 params|50 edit_file_v2_params #27 params|52 list_dir_v2_params #28 params|53 read_file_v2_params #29 params|54 ripgrep_raw_search_params #30 params|55 glob_file_search_params #31 params|56 create_plan_params #32 params|57 list_mcp_resources_params #33 params|58 read_mcp_resource_params #34 params|59 read_project_params #35 params|60 update_project_params #36 params|61 task_v2_params #37 params|62 call_mcp_tool_params #38 params|63 apply_agent_diff_params #39 params|64 ask_question_params #40 params|65 switch_mode_params #41 params|66 computer_use_params #42 params|67 write_shell_stdin_params #43 params|68 record_screen_params #44 params|69 web_fetch_params #45 params|70 report_bugfix_results_params #46 params|71 mcp_auth_params #47 params|72 get_mcp_tools_params #48 params|73 connect_scm_params #49 params|3 tool_call_id 9|6 timeout_ms 1?|9 name 9|14 is_streaming 8|15 is_last_message 8|51 internal 8|10 raw_args 9|48 tool_index 13?|49 model_call_id 9?", _, Qe, he, de, ae, H, ne, Ke, Xe, b, fr, C, Ar, Ir, Fr, Nt, Qr, Hr, Vr, en, nn, an, dn, fn, Dn, Un, jn, L, zn, Zn, bn, ts, ds, Rr, Jr, ys, As, _n, qr, E, Es, Rs, Js, o.LL, i.zH, Os, Us, Qs, Or, Hs];
      }
    }
    class J extends v {
      constructor(e2) {
        super(), this.tool = _.UNSPECIFIED, this.result = { case: void 0 }, this.toolCallId = "", n.proto3.util.initPartial(e2, this);
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
        return ["ClientSideToolV2Result|1 tool #0|2 read_semsearch_files_result #1 result|4 ripgrep_search_result #2 result|6 read_file_result #3 result|9 list_dir_result #4 result|10 edit_file_result #5 result|11 file_search_result #6 result|18 semantic_search_full_result #7 result|20 delete_file_result #8 result|21 reapply_result #9 result|24 run_terminal_command_v2_result #10 result|25 fetch_rules_result #11 result|27 web_search_result #12 result|28 mcp_result #13 result|32 search_symbols_result #14 result|33 background_composer_followup_result #15 result|34 knowledge_base_result #16 result|36 fetch_pull_request_result #17 result|37 deep_search_result #18 result|38 create_diagram_result #19 result|39 fix_lints_result #20 result|40 read_lints_result #21 result|41 gotodef_result #22 result|42 task_result #23 result|43 await_task_result #24 result|44 todo_read_result #25 result|45 todo_write_result #26 result|51 edit_file_v2_result #27 result|52 list_dir_v2_result #28 result|53 read_file_v2_result #29 result|54 ripgrep_raw_search_result #30 result|55 glob_file_search_result #31 result|56 create_plan_result #32 result|57 list_mcp_resources_result #33 result|58 read_mcp_resource_result #34 result|59 read_project_result #35 result|60 update_project_result #36 result|61 task_v2_result #37 result|62 call_mcp_tool_result #38 result|63 apply_agent_diff_result #39 result|64 ask_question_result #40 result|65 switch_mode_result #41 result|66 computer_use_result #42 result|67 generate_image_result #43 result|68 write_shell_stdin_result #44 result|69 record_screen_result #45 result|70 web_fetch_result #46 result|71 report_bugfix_results_result #47 result|72 ai_attribution_result #48 result|73 mcp_auth_result #49 result|74 get_mcp_tools_result #50 result|75 connect_scm_result #51 result|35 tool_call_id 9|8 error #52?|48 model_call_id 9?|49 tool_index 13?|50 attachments #53?", _, We, Ee, pe, ce, z, oe, Ye, et, I, wr, k, Sr, xr, Ur, jr, zr, Kr, tn, sn, cn, pn, Ut, gn, On, $n, Gn, j, Wn, Xn, En, rs, ps, Br, Mr, ws, Ss, An, Dr, a.y$, ks, Bs, Ms, c.k4, o.nt, i.Tj, Ns, Ls, l.Zc, js, Nr, Vs, T, q];
      }
    }
    class M extends v {
      constructor(e2) {
        super(), this.rawMessage = "", n.proto3.util.initPartial(e2, this);
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
        return ["NudgeMessage|1 raw_message 9"];
      }
    }
    class q extends v {
      constructor(e2) {
        super(), this.originalTodos = [], this.updatedTodos = [], this.nudgeMessages = [], this.shouldShowTodoWriteReminder = false, this.todoReminderType = D.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["ToolResultAttachments|1 original_todos #0*|2 updated_todos #0*|3 nudge_messages #1*|4 should_show_todo_write_reminder 8|5 todo_reminder_type #2|6 discovery_budget_reminder #3?", Ln, M, D, O];
      }
    }
    var D = (0, y.QT)(n.proto3, w, "ToolResultAttachments.TodoReminderType", [[0, "UNSPECIFIED"], [1, "EVERY_10_TURNS"], [2, "AFTER_EDIT"]], 1);
    class O extends v {
      constructor(e2) {
        super(), this.discoveryRoundsRemaining = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ToolResultAttachments.DiscoveryBudgetReminder|1 discovery_rounds_remaining 5|2 discovery_effort 9?"];
      }
    }
    class N extends v {
      constructor(e2) {
        super(), this.tool = _.UNSPECIFIED, this.toolCallId = "", this.name = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamedBackPartialToolCall|1 tool #0|2 tool_call_id 9|3 name 9|4 tool_index 13?|5 model_call_id 9?", _];
      }
    }
    class F extends v {
      constructor(e2) {
        super(), this.tool = _.UNSPECIFIED, this.toolCallId = "", this.params = { case: void 0 }, this.name = "", this.rawArgs = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamedBackToolCall|1 tool #0|2 tool_call_id 9|3 read_semsearch_files_stream #1 params|5 ripgrep_search_stream #2 params|7 read_file_stream #3 params|12 list_dir_stream #4 params|13 edit_file_stream #5 params|14 file_search_stream #6 params|19 semantic_search_full_stream #7 params|21 delete_file_stream #8 params|22 reapply_stream #9 params|25 run_terminal_command_v2_stream #10 params|26 fetch_rules_stream #11 params|28 web_search_stream #12 params|29 mcp_stream #13 params|33 search_symbols_stream #14 params|41 gotodef_stream #15 params|34 background_composer_followup_stream #16 params|35 knowledge_base_stream #17 params|36 fetch_pull_request_stream #18 params|37 deep_search_stream #19 params|38 create_diagram_stream #20 params|39 fix_lints_stream #21 params|40 read_lints_stream #22 params|42 task_stream #23 params|43 await_task_stream #24 params|44 todo_read_stream #25 params|45 todo_write_stream #26 params|52 edit_file_v2_stream #27 params|53 list_dir_v2_stream #28 params|54 read_file_v2_stream #29 params|55 ripgrep_raw_search_stream #30 params|56 glob_file_search_stream #31 params|57 create_plan_stream #32 params|58 list_mcp_resources_stream #33 params|59 read_mcp_resource_stream #34 params|60 read_project_stream #35 params|61 update_project_stream #36 params|62 task_v2_stream #37 params|63 call_mcp_tool_stream #38 params|64 ask_question_stream #39 params|65 switch_mode_stream #40 params|66 computer_use_stream #41 params|67 write_shell_stdin_stream #42 params|68 web_fetch_stream #43 params|69 report_bugfix_results_stream #44 params|70 mcp_auth_stream #45 params|71 connect_scm_stream #46 params|8 name 9|9 raw_args 9|10 error #47?|50 tool_index 13?|51 model_call_id 9?", _, Ve, $e, me, ue, re, se, Ze, tt, x, vr, _r, Er, Tr, $r, hn, Gr, Wr, Zr, rn, on, un, mn, vn, Fn, Qn, Hn, G, Yn, es, qn, os, gs, is, cs, vs, bs, Sn, as, Ts, Ps, qs, Ds, Fs, $s, Gs, Ks, T];
      }
    }
    class U extends v {
      constructor(e2) {
        super(), this.tool = _.UNSPECIFIED, this.toolCallId = "", this.params = { case: void 0 }, this.name = "", this.rawArgs = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamedBackToolCallV2|1 tool #0|2 tool_call_id 9|3 read_semsearch_files_params #1 params|5 ripgrep_search_params #2 params|9 read_file_params #3 params|12 list_dir_params #4 params|13 edit_file_params #5 params|16 file_search_params #6 params|17 semantic_search_full_params #7 params|19 delete_file_params #8 params|20 reapply_params #9 params|23 run_terminal_command_v2_params #10 params|24 fetch_rules_params #11 params|26 web_search_params #12 params|27 mcp_params #13 params|31 search_symbols_params #14 params|41 gotodef_params #15 params|32 background_composer_followup_params #16 params|33 knowledge_base_params #17 params|34 fetch_pull_request_params #18 params|35 deep_search_params #19 params|36 create_diagram_params #20 params|37 fix_lints_params #21 params|38 read_lints_params #22 params|42 task_params #23 params|43 await_task_params #24 params|44 todo_read_params #25 params|45 todo_write_params #26 params|48 edit_file_v2_params #27 params|49 list_dir_v2_params #28 params|61 read_file_v2_params #29 params|62 ripgrep_raw_search_params #30 params|63 glob_file_search_params #31 params|64 create_plan_params #32 params|65 list_mcp_resources_params #33 params|66 read_mcp_resource_params #34 params|67 read_project_params #35 params|68 update_project_params #36 params|69 task_v2_params #37 params|70 call_mcp_tool_params #38 params|71 apply_agent_diff_params #39 params|72 ask_question_params #40 params|73 switch_mode_params #41 params|74 computer_use_params #42 params|75 write_shell_stdin_params #43 params|76 record_screen_params #44 params|77 web_fetch_params #45 params|78 report_bugfix_results_params #46 params|79 mcp_auth_params #47 params|80 get_mcp_tools_params #48 params|81 connect_scm_params #49 params|8 name 9|10 raw_args 9|11 error #50?|50 tool_index 13?|51 model_call_id 9?", _, Qe, he, de, ae, H, ne, Ke, Xe, b, fr, C, Ar, Ir, Fr, Nt, Qr, Hr, Vr, en, nn, an, dn, fn, Dn, Un, jn, L, zn, Zn, bn, ts, ds, Rr, Jr, ys, As, _n, qr, E, Es, Rs, Js, o.LL, i.zH, Os, Us, Qs, Or, Hs, T];
      }
    }
    class L extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.streamingEdit = { case: void 0 }, this.shouldSendBackLinterErrors = false, this.resultForModel = "", n.proto3.util.initPartial(e2, this);
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
        return ["EditFileV2Params|1 relative_workspace_path 9|2 contents_after_edit 9?|3 waiting_for_file_contents 8?|4 text #0 streaming_edit|5 code #1 streaming_edit|6 should_send_back_linter_errors 8|7 diff #2?|8 result_for_model 9|9 streaming_content 9?|10 no_codeblock 8?|11 cloud_agent_edit 8?", $, Q, W];
      }
    }
    class $ extends v {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["EditFileV2Params.StreamingEditText|1 text 9"];
      }
    }
    class Q extends v {
      constructor(e2) {
        super(), this.code = "", n.proto3.util.initPartial(e2, this);
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
        return ["EditFileV2Params.StreamingEditCode|1 code 9"];
      }
    }
    class j extends v {
      constructor(e2) {
        super(), this.fileWasCreated = false, this.linterErrors = [], this.sentBackLinterErrors = false, this.shouldAutoFixLints = false, this.resultForModel = "", this.afterContentId = "", n.proto3.util.initPartial(e2, this);
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
        return ["EditFileV2Result|1 contents_before_edit 9?|9 eol_sequence 9?|11 detected_language 9?|2 file_was_created 8|3 diff #0?|4 rejected 8?|5 linter_errors #1*|6 sent_back_linter_errors 8|8 should_auto_fix_lints 8|7 human_review_v2 #2?|10 result_for_model 9|12 contents_after_edit 9?|13 before_content_id 9?|14 after_content_id 9", W, s.LinterError, te];
      }
    }
    class G extends v {
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
        return ["EditFileV2Stream"];
      }
    }
    class H extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.language = "", this.blocking = false, this.contents = "", this.lineRanges = [], n.proto3.util.initPartial(e2, this);
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
        return ["EditFileParams|1 relative_workspace_path 9|2 language 9|4 blocking 8|3 contents 9|5 instructions 9?|12 should_edit_file_fail_for_large_files 8?|6 old_string 9?|7 new_string 9?|8 allow_multiple_matches 8?|10 use_whitespace_insensitive_fallback 8?|11 use_did_you_mean_fuzzy_match 8?|16 gracefully_handle_recoverable_errors 8?|9 line_ranges #0*|13 notebook_cell_idx 5?|14 is_new_cell 8?|15 cell_language 9?|17 edit_category 9?|18 should_eagerly_process_lints 8?", s.LineRange];
      }
    }
    class z extends v {
      constructor(e2) {
        super(), this.isApplied = false, this.applyFailed = false, this.linterErrors = [], n.proto3.util.initPartial(e2, this);
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
        return ["EditFileResult|1 diff #0|2 is_applied 8|3 apply_failed 8|4 linter_errors #1*|5 rejected 8?|6 num_matches 5?|7 whitespace_insensitive_fallback_found_match 8?|8 no_match_found_in_line_ranges 8?|11 recoverable_error #2?|9 num_lines_in_file 5?|10 is_subagent_edit 8?|12 diff_became_no_op_due_to_on_save_fixes 8?|13 human_review #3?|14 human_feedback #4?|15 should_eagerly_process_lints 8?|16 human_review_v2 #5?|17 were_all_new_linter_errors_resolved_by_this_edit 8?", W, s.LinterError, Y, X, ee, te];
      }
    }
    class W extends v {
      constructor(e2) {
        super(), this.chunks = [], this.editor = V.UNSPECIFIED, this.hitTimeout = false, n.proto3.util.initPartial(e2, this);
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
        return ["EditFileResult.FileDiff|1 chunks #0*|2 editor #1|3 hit_timeout 8", K, V];
      }
    }
    var V = (0, y.QT)(n.proto3, w, "EditFileResult.FileDiff.Editor", [[0, "UNSPECIFIED"], [1, "AI"], [2, "HUMAN"]], 1);
    class K extends v {
      constructor(e2) {
        super(), this.diffString = "", this.oldStart = 0, this.newStart = 0, this.oldLines = 0, this.newLines = 0, this.linesRemoved = 0, this.linesAdded = 0, n.proto3.util.initPartial(e2, this);
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
        return ["EditFileResult.FileDiff.ChunkDiff|1 diff_string 9|2 old_start 5|3 new_start 5|4 old_lines 5|5 new_lines 5|6 lines_removed 5|7 lines_added 5"];
      }
    }
    class Y extends v {
      constructor(e2) {
        super(), this.errorType = Z.UNSPECIFIED, this.modelMessage = "", n.proto3.util.initPartial(e2, this);
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
        return ["EditFileResult.RecoverableError|1 error_type #0|2 model_message 9", Z];
      }
    }
    var Z = (0, y.QT)(n.proto3, w, "EditFileResult.RecoverableError.RecoverableErrorType", [[0, "UNSPECIFIED"], [1, "SEARCH_STRING_NOT_FOUND"], [2, "AMBIGUOUS_SEARCH_STRING"]], 1);
    class X extends v {
      constructor(e2) {
        super(), this.isEditAccepted = false, this.textResult = "", this.stopAndGetNewUserInput = false, n.proto3.util.initPartial(e2, this);
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
        return ["EditFileResult.EditFileHumanReview|1 is_edit_accepted 8|2 text_result 9|3 stop_and_get_new_user_input 8"];
      }
    }
    class ee extends v {
      constructor(e2) {
        super(), this.selectedOption = "", this.feedbackText = "", this.submitFeedbackAsNewMessage = false, this.bubbleId = "", n.proto3.util.initPartial(e2, this);
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
        return ["EditFileResult.HumanFeedback|1 selected_option 9|2 feedback_text 9|3 submit_feedback_as_new_message 8|4 bubble_id 9"];
      }
    }
    class te extends v {
      constructor(e2) {
        super(), this.selectedOption = "", this.feedbackText = "", this.submitFeedbackAsNewMessage = false, this.bubbleId = "", n.proto3.util.initPartial(e2, this);
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
        return ["HumanReview|1 selected_option 9|2 feedback_text 9|3 submit_feedback_as_new_message 8|4 bubble_id 9"];
      }
    }
    class re extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["EditFileStream"];
      }
    }
    class ne extends v {
      constructor(e2) {
        super(), this.query = "", n.proto3.util.initPartial(e2, this);
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
        return ["ToolCallFileSearchParams|1 query 9"];
      }
    }
    class se extends v {
      constructor(e2) {
        super(), this.query = "", n.proto3.util.initPartial(e2, this);
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
        return ["ToolCallFileSearchStream|1 query 9"];
      }
    }
    class oe extends v {
      constructor(e2) {
        super(), this.files = [], this.numResults = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ToolCallFileSearchResult|1 files #0*|2 limit_hit 8?|3 num_results 5", ie];
      }
    }
    class ie extends v {
      constructor(e2) {
        super(), this.uri = "", n.proto3.util.initPartial(e2, this);
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
        return ["ToolCallFileSearchResult.File|1 uri 9"];
      }
    }
    class ae extends v {
      constructor(e2) {
        super(), this.directoryPath = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListDirParams|1 directory_path 9"];
      }
    }
    class ce extends v {
      constructor(e2) {
        super(), this.files = [], this.directoryRelativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["ListDirResult|1 files #0*|2 directory_relative_workspace_path 9", le];
      }
    }
    class le extends v {
      constructor(e2) {
        super(), this.name = "", this.isDirectory = false, n.proto3.util.initPartial(e2, this);
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
        return ["ListDirResult.File|1 name 9|2 is_directory 8|3 size 3?|4 last_modified #0?|5 num_children 5?|6 num_lines 5?", n.Timestamp];
      }
    }
    class ue extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ListDirStream"];
      }
    }
    class de extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.readEntireFile = false, this.fileIsAllowedToBeReadEntirely = false, n.proto3.util.initPartial(e2, this);
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
        return ["ReadFileParams|1 relative_workspace_path 9|2 read_entire_file 8|3 start_line_one_indexed 5?|4 end_line_one_indexed_inclusive 5?|5 file_is_allowed_to_be_read_entirely 8|6 max_lines 5?|7 max_chars 5?|8 min_lines 5?"];
      }
    }
    class pe extends v {
      constructor(e2) {
        super(), this.contents = "", this.didDowngradeToLineRange = false, this.didShortenLineRange = false, this.didSetDefaultLineRange = false, this.relativeWorkspacePath = "", this.didShortenCharRange = false, this.matchingCursorRules = [], n.proto3.util.initPartial(e2, this);
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
        return ["ReadFileResult|1 contents 9|2 did_downgrade_to_line_range 8|3 did_shorten_line_range 8|4 did_set_default_line_range 8|5 full_file_contents 9?|6 outline 9?|7 start_line_one_indexed 5?|8 end_line_one_indexed_inclusive 5?|9 relative_workspace_path 9|10 did_shorten_char_range 8|11 read_full_file 8?|12 total_lines 5?|13 matching_cursor_rules #0*|14 file_git_context #1", s.CursorRule, s.FileGit];
      }
    }
    class me extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ReadFileStream"];
      }
    }
    class he extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchParams|1 options #0|2 pattern_info #1", ye, fe];
      }
    }
    class fe extends v {
      constructor(e2) {
        super(), this.pattern = "", n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchParams.IPatternInfoProto|1 pattern 9|2 is_reg_exp 8?|3 is_word_match 8?|4 word_separators 9?|5 is_multiline 8?|6 is_unicode 8?|7 is_case_sensitive 8?|8 notebook_info #0|9 pattern_was_escaped 8?", ge];
      }
    }
    class ge extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto|1 is_in_notebook_markdown_input 8?|2 is_in_notebook_markdown_preview 8?|3 is_in_notebook_cell_input 8?|4 is_in_notebook_cell_output 8?"];
      }
    }
    class ye extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto|1 preview_options #0|2 file_encoding 9?|3 surrounding_context 5?|4 is_smart_case 8?|5 notebook_search_config #1|6 exclude_pattern #2|7 include_pattern #3|8 expand_patterns 8?|9 max_results 5?|10 max_file_size 5?|11 disregard_ignore_files 8?|12 disregard_global_ignore_files 8?|13 disregard_parent_ignore_files 8?|14 disregard_exclude_settings 8?|15 disregard_search_exclude_settings 8?|16 ignore_symlinks 8?|17 only_open_editors 8?|18 only_file_scheme 8?|19 reason 9?|20 extra_file_resources #4", Se, be, ve, Ae, we];
      }
    }
    class we extends v {
      constructor(e2) {
        super(), this.extraFileResources = [], n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto|1 extra_file_resources 9*"];
      }
    }
    class ve extends v {
      constructor(e2) {
        super(), this.excludePattern = [], n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto|1 exclude_pattern #0*", _e];
      }
    }
    class _e extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto|1 uri 9?|2 pattern #0", Ae];
      }
    }
    class Ae extends v {
      constructor(e2) {
        super(), this.patterns = [], n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto|1 pattern 9?|2 patterns 9*"];
      }
    }
    class Se extends v {
      constructor(e2) {
        super(), this.matchLines = 0, this.charsPerLine = 0, n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto|1 match_lines 5|2 chars_per_line 5"];
      }
    }
    class be extends v {
      constructor(e2) {
        super(), this.includeMarkupInput = false, this.includeMarkupPreview = false, this.includeCodeInput = false, this.includeOutput = false, n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto|1 include_markup_input 8|2 include_markup_preview 8|3 include_code_input 8|4 include_output 8"];
      }
    }
    class Ee extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResult|1 internal #0", Ie];
      }
    }
    class Ie extends v {
      constructor(e2) {
        super(), this.results = [], this.messages = [], this.stats = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ie().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ie().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ie().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ie, e2, t2);
      }
      static $() {
        return ["RipgrepSearchResultInternal|1 results #0*|2 exit #1?|3 limit_hit 8?|4 messages #2*|5 file_search_stats #3 stats|6 text_search_stats #4 stats", xe, ke, Me, qe, Oe];
      }
    }
    var Ce = (0, y.QT)(n.proto3, w, "RipgrepSearchResultInternal.TextSearchCompleteMessageType", [[0, "UNSPECIFIED"], [1, "INFORMATION"], [2, "WARNING"]], 1), ke = (0, y.QT)(n.proto3, w, "RipgrepSearchResultInternal.SearchCompletionExitCode", [[0, "UNSPECIFIED"], [1, "NORMAL"], [2, "NEW_SEARCH_STARTED"]], 1);
    class xe extends v {
      constructor(e2) {
        super(), this.resource = "", this.results = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xe, e2, t2);
      }
      static $() {
        return ["RipgrepSearchResultInternal.IFileMatch|1 resource 9|2 results #0*", Te];
      }
    }
    class Te extends v {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Te().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Te().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Te().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Te, e2, t2);
      }
      static $() {
        return ["RipgrepSearchResultInternal.ITextSearchResult|1 match #0 result|2 context #1 result", Re, Be];
      }
    }
    class Re extends v {
      constructor(e2) {
        super(), this.rangeLocations = [], this.previewText = "", n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResultInternal.ITextSearchMatch|1 uri 9?|2 range_locations #0*|3 preview_text 9|4 webview_index 5?|5 cell_fragment 9?", Pe];
      }
    }
    class Be extends v {
      constructor(e2) {
        super(), this.text = "", this.lineNumber = 0, n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResultInternal.ITextSearchContext|1 uri 9?|2 text 9|3 line_number 5"];
      }
    }
    class Pe extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResultInternal.ISearchRangeSetPairing|1 source #0|2 preview #0", Je];
      }
    }
    class Je extends v {
      constructor(e2) {
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResultInternal.ISearchRange|1 start_line_number 5|2 start_column 5|3 end_line_number 5|4 end_column 5"];
      }
    }
    class Me extends v {
      constructor(e2) {
        super(), this.text = "", this.type = Ce.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResultInternal.ITextSearchCompleteMessage|1 text 9|2 type #0|3 trusted 8?", Ce];
      }
    }
    class qe extends v {
      constructor(e2) {
        super(), this.fromCache = false, this.detailStats = { case: void 0 }, this.resultCount = 0, this.type = De.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResultInternal.IFileSearchStats|1 from_cache 8|2 search_engine_stats #0 detail_stats|3 cached_search_stats #1 detail_stats|4 file_search_provider_stats #2 detail_stats|5 result_count 5|6 type #3|7 sorting_time 5?", Fe, Ue, Le, De];
      }
    }
    var De = (0, y.QT)(n.proto3, w, "RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [[0, "UNSPECIFIED"], [1, "FILE_SEARCH_PROVIDER"], [2, "SEARCH_PROCESS"]], 1);
    class Oe extends v {
      constructor(e2) {
        super(), this.type = Ne.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResultInternal.ITextSearchStats|1 type #0", Ne];
      }
    }
    var Ne = (0, y.QT)(n.proto3, w, "RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [[0, "UNSPECIFIED"], [1, "TEXT_SEARCH_PROVIDER"], [2, "SEARCH_PROCESS"], [3, "AI_TEXT_SEARCH_PROVIDER"]], 1);
    class Fe extends v {
      constructor(e2) {
        super(), this.fileWalkTime = 0, this.directoriesWalked = 0, this.filesWalked = 0, this.cmdTime = 0, n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResultInternal.ISearchEngineStats|1 file_walk_time 5|2 directories_walked 5|3 files_walked 5|4 cmd_time 5|5 cmd_result_count 5?"];
      }
    }
    class Ue extends v {
      constructor(e2) {
        super(), this.cacheWasResolved = false, this.cacheLookupTime = 0, this.cacheFilterTime = 0, this.cacheEntryCount = 0, n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResultInternal.ICachedSearchStats|1 cache_was_resolved 8|2 cache_lookup_time 5|3 cache_filter_time 5|4 cache_entry_count 5"];
      }
    }
    class Le extends v {
      constructor(e2) {
        super(), this.providerTime = 0, this.postProcessTime = 0, n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchResultInternal.IFileSearchProviderStats|1 provider_time 5|2 post_process_time 5"];
      }
    }
    class $e extends v {
      constructor(e2) {
        super(), this.query = "", n.proto3.util.initPartial(e2, this);
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
        return ["RipgrepSearchStream|1 query 9"];
      }
    }
    class Qe extends v {
      constructor(e2) {
        super(), this.codeResults = [], this.query = "", this.prReferences = [], n.proto3.util.initPartial(e2, this);
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
        return ["ReadSemsearchFilesParams|1 repository_info #0|2 code_results #1*|3 query 9|4 pr_references #2*|5 pr_search_on 8?", u.bn, u.PT, Xr];
      }
    }
    class je extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.missingReason = Ge.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["MissingFile|1 relative_workspace_path 9|2 missing_reason #0|3 num_lines 5?", Ge];
      }
    }
    var Ge = (0, y.QT)(n.proto3, w, "MissingFile.MissingReason", [[0, "UNSPECIFIED"], [1, "TOO_LARGE"], [2, "NOT_FOUND"]], 1);
    class He extends v {
      constructor(e2) {
        super(), this.knowledge = "", this.title = "", n.proto3.util.initPartial(e2, this);
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
        return ["Knowledge|1 knowledge 9|2 title 9"];
      }
    }
    class ze extends v {
      constructor(e2) {
        super(), this.sha = "", this.fullPrContents = "", this.score = 0, this.changedFiles = [], n.proto3.util.initPartial(e2, this);
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
        return ["ToolPullRequestResult|1 sha 9|2 full_pr_contents 9|3 score 2|4 title 9?|5 summary 9?|6 pr_number 13?|7 changed_files 9*|8 author 9?|9 date 9?"];
      }
    }
    class We extends v {
      constructor(e2) {
        super(), this.codeResults = [], this.allFiles = [], this.missingFiles = [], this.knowledgeResults = [], this.prResults = [], n.proto3.util.initPartial(e2, this);
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
        return ["ReadSemsearchFilesResult|1 code_results #0*|2 all_files #1*|3 missing_files #2*|4 knowledge_results #3*|5 pr_results #4*|6 git_remote_url 9?|7 pr_hydration_timed_out 8?", u.PT, s.File, je, He, ze];
      }
    }
    class Ve extends v {
      constructor(e2) {
        super(), this.numFiles = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ReadSemsearchFilesStream|1 num_files 5"];
      }
    }
    class Ke extends v {
      constructor(e2) {
        super(), this.query = "", this.topK = 0, this.prReferences = [], this.codeResults = [], n.proto3.util.initPartial(e2, this);
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
        return ["SemanticSearchFullParams|1 repository_info #0|2 query 9|3 include_pattern 9?|4 exclude_pattern 9?|5 top_k 5|6 pr_references #1*|7 pr_search_on 8?|8 explanation 9?|9 code_results #2*", u.bn, Xr, u.PT];
      }
    }
    class Ye extends v {
      constructor(e2) {
        super(), this.codeResults = [], this.allFiles = [], this.missingFiles = [], this.knowledgeResults = [], this.prResults = [], n.proto3.util.initPartial(e2, this);
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
        return ["SemanticSearchFullResult|1 code_results #0*|2 all_files #1*|3 missing_files #2*|4 knowledge_results #3*|5 pr_results #4*|6 git_remote_url 9?|7 pr_hydration_timed_out 8?", u.PT, s.File, je, He, ze];
      }
    }
    class Ze extends v {
      constructor(e2) {
        super(), this.numFiles = 0, n.proto3.util.initPartial(e2, this);
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
        return ["SemanticSearchFullStream|1 num_files 5"];
      }
    }
    class Xe extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["DeleteFileParams|1 relative_workspace_path 9"];
      }
    }
    class et extends v {
      constructor(e2) {
        super(), this.rejected = false, this.fileNonExistent = false, this.fileDeletedSuccessfully = false, n.proto3.util.initPartial(e2, this);
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
        return ["DeleteFileResult|1 rejected 8|2 file_non_existent 8|3 file_deleted_successfully 8"];
      }
    }
    class tt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["DeleteFileStream|1 relative_workspace_path 9"];
      }
    }
    class rt extends v {
      constructor(e2) {
        super(), this.tool = A.UNSPECIFIED, this.params = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["BuiltinToolCall|1 tool #0|2 search_params #1 params|3 read_chunk_params #2 params|4 gotodef_params #3 params|5 edit_params #4 params|6 undo_edit_params #5 params|7 end_params #6 params|8 new_file_params #7 params|9 add_test_params #8 params|10 run_test_params #9 params|11 delete_test_params #10 params|12 save_file_params #11 params|13 get_tests_params #12 params|14 get_symbols_params #13 params|15 semantic_search_params #14 params|16 get_project_structure_params #15 params|17 create_rm_files_params #16 params|18 run_terminal_commands_params #17 params|19 new_edit_params #18 params|20 read_with_linter_params #19 params|21 add_ui_step_params #20 params|23 read_semsearch_files_params #21 params|26 delete_file_params #22 params|22 tool_call_id 9?", A, It, Tt, Nt, jt, Bt, Pt, vt, Vt, Xt, sr, ir, tr, cr, _t, gt, ht, pt, $t, ut, st, Qe, Xe];
      }
    }
    class nt extends v {
      constructor(e2) {
        super(), this.tool = A.UNSPECIFIED, this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["BuiltinToolResult|1 tool #0|2 search_result #1 result|3 read_chunk_result #2 result|4 gotodef_result #3 result|5 edit_result #4 result|6 undo_edit_result #5 result|7 end_result #6 result|8 new_file_result #7 result|9 add_test_result #8 result|10 run_test_result #9 result|11 delete_test_result #10 result|12 save_file_result #11 result|13 get_tests_result #12 result|14 get_symbols_result #13 result|15 semantic_search_result #14 result|16 get_project_structure_result #15 result|17 create_rm_files_result #16 result|18 run_terminal_commands_result #17 result|19 new_edit_result #18 result|20 read_with_linter_result #19 result|21 add_ui_step_result #20 result|22 read_semsearch_files_result #21 result|24 delete_file_result #22 result", A, xt, Rt, Ut, Ht, Mt, qt, Jt, Kt, er, or, ar, rr, ur, bt, yt, ft, mt, Qt, dt, at, We, et];
      }
    }
    class st extends v {
      constructor(e2) {
        super(), this.conversationId = "", this.step = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["AddUiStepParams|1 conversation_id 9|2 search_results #0 step", it];
      }
    }
    class ot extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["AddUiStepParams.SearchResult|1 relative_workspace_path 9"];
      }
    }
    class it extends v {
      constructor(e2) {
        super(), this.searchResults = [], n.proto3.util.initPartial(e2, this);
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
        return ["AddUiStepParams.SearchResults|1 search_results #0*", ot];
      }
    }
    class at extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AddUiStepResult"];
      }
    }
    class ct extends v {
      constructor(e2) {
        super(), this.toolCall = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ToolCall|1 builtin_tool_call #0 tool_call|2 custom_tool_call #1 tool_call", rt, Dt];
      }
    }
    class lt extends v {
      constructor(e2) {
        super(), this.toolResult = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lt, e2, t2);
      }
      static $() {
        return ["ToolResult|1 builtin_tool_result #0 tool_result|2 custom_tool_result #1 tool_result|3 error_tool_result #2 tool_result", nt, Ot, Lt];
      }
    }
    class ut extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["ReadWithLinterParams|1 relative_workspace_path 9"];
      }
    }
    class dt extends v {
      constructor(e2) {
        super(), this.contents = "", this.diagnostics = [], n.proto3.util.initPartial(e2, this);
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
        return ["ReadWithLinterResult|1 contents 9|2 diagnostics #0*", s.Diagnostic];
      }
    }
    class pt extends v {
      constructor(e2) {
        super(), this.commands = [], this.commandsUuid = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pt, e2, t2);
      }
      static $() {
        return ["RunTerminalCommandsParams|1 commands 9*|2 commands_uuid 9"];
      }
    }
    class mt extends v {
      constructor(e2) {
        super(), this.outputs = [], n.proto3.util.initPartial(e2, this);
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
        return ["RunTerminalCommandsResult|1 outputs 9*"];
      }
    }
    class ht extends v {
      constructor(e2) {
        super(), this.removedFilePaths = [], this.createdFilePaths = [], this.createdDirectoryPaths = [], n.proto3.util.initPartial(e2, this);
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
        return ["CreateRmFilesParams|1 removed_file_paths 9*|2 created_file_paths 9*|3 created_directory_paths 9*"];
      }
    }
    class ft extends v {
      constructor(e2) {
        super(), this.createdFilePaths = [], this.removedFilePaths = [], n.proto3.util.initPartial(e2, this);
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
        return ["CreateRmFilesResult|1 created_file_paths 9*|2 removed_file_paths 9*"];
      }
    }
    class gt extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetProjectStructureParams"];
      }
    }
    class yt extends v {
      constructor(e2) {
        super(), this.files = [], this.rootWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yt, e2, t2);
      }
      static $() {
        return ["GetProjectStructureResult|1 files #0*|2 root_workspace_path 9", wt];
      }
    }
    class wt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.outline = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wt, e2, t2);
      }
      static $() {
        return ["GetProjectStructureResult.File|1 relative_workspace_path 9|2 outline 9"];
      }
    }
    class vt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
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
        return ["NewFileParams|1 relative_workspace_path 9"];
      }
    }
    class _t extends v {
      constructor(e2) {
        super(), this.query = "", this.topK = 0, this.grabWholeFile = false, n.proto3.util.initPartial(e2, this);
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
        return ["SemanticSearchParams|1 query 9|2 include_pattern 9?|3 exclude_pattern 9?|4 top_k 5|5 index_id 9?|6 grab_whole_file 8"];
      }
    }
    class At extends v {
      constructor(e2) {
        super(), this.startLine = 0, this.startCharacter = 0, this.endLine = 0, this.endCharacter = 0, n.proto3.util.initPartial(e2, this);
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
        return ["Range|1 start_line 5|2 start_character 5|3 end_line 5|4 end_character 5"];
      }
    }
    class St extends v {
      constructor(e2) {
        super(), this.start = 0, this.end = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new St().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new St().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new St().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(St, e2, t2);
      }
      static $() {
        return ["MatchRange|1 start 5|2 end 5"];
      }
    }
    class bt extends v {
      constructor(e2) {
        super(), this.results = [], this.files = {}, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bt, e2, t2);
      }
      static $() {
        return ["SemanticSearchResult|1 results #0*|2 files 9,9", Et];
      }
    }
    class Et extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.score = 0, this.content = "", this.detailedLines = [], n.proto3.util.initPartial(e2, this);
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
        return ["SemanticSearchResult.Item|1 relative_workspace_path 9|2 score 2|3 content 9|4 range #0|5 original_content 9?|6 detailed_lines #1*", s.SimpleRange, s.DetailedLine];
      }
    }
    class It extends v {
      constructor(e2) {
        super(), this.query = "", this.regex = false, this.includePattern = "", this.excludePattern = "", this.filenameSearch = false, n.proto3.util.initPartial(e2, this);
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
        return ["SearchParams|1 query 9|2 regex 8|3 include_pattern 9|4 exclude_pattern 9|5 filename_search 8"];
      }
    }
    class Ct extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.numMatches = 0, this.potentiallyRelevantLines = [], this.cropped = false, n.proto3.util.initPartial(e2, this);
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
        return ["SearchToolFileSearchResult|1 relative_workspace_path 9|2 num_matches 5|3 potentially_relevant_lines #0*|4 cropped 8", kt];
      }
    }
    class kt extends v {
      constructor(e2) {
        super(), this.lineNumber = 0, this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["SearchToolFileSearchResult.Line|1 line_number 5|2 text 9"];
      }
    }
    class xt extends v {
      constructor(e2) {
        super(), this.fileResults = [], this.numTotalMatches = 0, this.numTotalMatchedFiles = 0, this.numTotalMayBeIncomplete = false, this.filesOnly = false, n.proto3.util.initPartial(e2, this);
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
        return ["SearchResult|1 file_results #0*|2 num_total_matches 5|3 num_total_matched_files 5|4 num_total_may_be_incomplete 8|5 files_only 8", Ct];
      }
    }
    class Tt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ReadChunkParams|1 relative_workspace_path 9|2 start_line_number 5|3 num_lines 5?"];
      }
    }
    class Rt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.totalNumLines = 0, this.cropped = false, n.proto3.util.initPartial(e2, this);
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
        return ["ReadChunkResult|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 total_num_lines 5|5 cropped 8"];
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
        return ["UndoEditParams"];
      }
    }
    class Pt extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["EndParams"];
      }
    }
    class Jt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.fileTotalLines = 0, n.proto3.util.initPartial(e2, this);
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
        return ["NewFileResult|1 relative_workspace_path 9|2 file_total_lines 5"];
      }
    }
    class Mt extends v {
      constructor(e2) {
        super(), this.feedback = [], this.relativeWorkspacePath = "", this.contextStartLineNumber = 0, this.contextLines = [], this.contextTotalNumLines = 0, this.fileTotalLines = 0, n.proto3.util.initPartial(e2, this);
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
        return ["UndoEditResult|1 feedback 9*|4 relative_workspace_path 9|2 context_start_line_number 5|3 context_lines 9*|5 context_total_num_lines 5|6 file_total_lines 5"];
      }
    }
    class qt extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["EndResult"];
      }
    }
    class Dt extends v {
      constructor(e2) {
        super(), this.toolId = "", this.params = "", n.proto3.util.initPartial(e2, this);
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
        return ["CustomToolCall|1 tool_id 9|2 params 9"];
      }
    }
    class Ot extends v {
      constructor(e2) {
        super(), this.toolId = "", this.result = "", n.proto3.util.initPartial(e2, this);
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
        return ["CustomToolResult|1 tool_id 9|2 result 9"];
      }
    }
    class Nt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.symbol = "", this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(e2, this);
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
        return ["GotodefParams|1 relative_workspace_path 9|2 symbol 9|3 start_line 5|4 end_line 5"];
      }
    }
    class Ft extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.startLine = 0, this.endLine = 0, this.codeContextLines = [], n.proto3.util.initPartial(e2, this);
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
        return ["GotodefDefinition|1 relative_workspace_path 9|2 fully_qualified_name 9?|3 symbol_kind 9?|4 start_line 5|5 end_line 5|6 code_context_lines 9*"];
      }
    }
    class Ut extends v {
      constructor(e2) {
        super(), this.definitions = [], n.proto3.util.initPartial(e2, this);
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
        return ["GotodefResult|1 definitions #0*", Ft];
      }
    }
    class Lt extends v {
      constructor(e2) {
        super(), this.errorMessage = "", n.proto3.util.initPartial(e2, this);
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
        return ["ErrorToolResult|1 error_message 9"];
      }
    }
    class $t extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.text = "", this.editId = "", this.firstEdit = false, n.proto3.util.initPartial(e2, this);
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
        return ["NewEditParams|1 relative_workspace_path 9|2 start_line_number 5?|3 end_line_number 5?|4 text 9|5 edit_id 9|6 first_edit 8"];
      }
    }
    class Qt extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qt, e2, t2);
      }
      static $() {
        return ["NewEditResult"];
      }
    }
    class jt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.replaceNumLines = 0, this.newLines = [], this.editId = "", this.frontendEditType = Gt.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jt, e2, t2);
      }
      static $() {
        return ["EditParams|1 relative_workspace_path 9|2 line_number 5?|3 replace_num_lines 5|4 new_lines 9*|7 replace_whole_file 8?|5 edit_id 9|6 frontend_edit_type #0|8 auto_fix_all_linter_errors_in_file 8?", Gt];
      }
    }
    var Gt = (0, y.QT)(n.proto3, w, "EditParams.FrontendEditType", [[0, "UNSPECIFIED"], [1, "INLINE_DIFFS"], [2, "SIMPLE"]], 1);
    class Ht extends v {
      constructor(e2) {
        super(), this.feedback = [], this.contextStartLineNumber = 0, this.contextLines = [], this.file = "", this.fileTotalLines = 0, this.structuredFeedback = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ht().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ht().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ht().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ht, e2, t2);
      }
      static $() {
        return ["EditResult|1 feedback 9*|2 context_start_line_number 5|3 context_lines 9*|4 file 9|5 file_total_lines 5|6 structured_feedback #0*", Wt];
      }
    }
    class zt extends v {
      constructor(e2) {
        super(), this.message = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zt, e2, t2);
      }
      static $() {
        return ["EditResult.RelatedInformation|1 message 9|2 start_line_number 5|3 end_line_number 5|4 relative_workspace_path 9"];
      }
    }
    class Wt extends v {
      constructor(e2) {
        super(), this.message = "", this.severity = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relatedInformation = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wt, e2, t2);
      }
      static $() {
        return ["EditResult.Feedback|1 message 9|2 severity 9|3 start_line_number 5|4 end_line_number 5|5 related_information #0*", zt];
      }
    }
    class Vt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.testName = "", this.testCode = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vt, e2, t2);
      }
      static $() {
        return ["AddTestParams|1 relative_workspace_path 9|2 test_name 9|3 test_code 9"];
      }
    }
    class Kt extends v {
      constructor(e2) {
        super(), this.feedback = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kt, e2, t2);
      }
      static $() {
        return ["AddTestResult|1 feedback #0*", Zt];
      }
    }
    class Yt extends v {
      constructor(e2) {
        super(), this.message = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yt, e2, t2);
      }
      static $() {
        return ["AddTestResult.RelatedInformation|1 message 9|2 start_line_number 5|3 end_line_number 5|4 relative_workspace_path 9"];
      }
    }
    class Zt extends v {
      constructor(e2) {
        super(), this.message = "", this.severity = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relatedInformation = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zt, e2, t2);
      }
      static $() {
        return ["AddTestResult.Feedback|1 message 9|2 severity 9|3 start_line_number 5|4 end_line_number 5|5 related_information #0*", Yt];
      }
    }
    class Xt extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xt, e2, t2);
      }
      static $() {
        return ["RunTestParams|1 relative_workspace_path 9|2 test_name 9?"];
      }
    }
    class er extends v {
      constructor(e2) {
        super(), this.result = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new er().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new er().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new er().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(er, e2, t2);
      }
      static $() {
        return ["RunTestResult|1 result 9"];
      }
    }
    class tr extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tr, e2, t2);
      }
      static $() {
        return ["GetTestsParams|1 relative_workspace_path 9"];
      }
    }
    class rr extends v {
      constructor(e2) {
        super(), this.tests = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rr, e2, t2);
      }
      static $() {
        return ["GetTestsResult|1 tests #0*", nr];
      }
    }
    class nr extends v {
      constructor(e2) {
        super(), this.name = "", this.lines = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nr, e2, t2);
      }
      static $() {
        return ["GetTestsResult.Test|1 name 9|2 lines 9*"];
      }
    }
    class sr extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sr, e2, t2);
      }
      static $() {
        return ["DeleteTestParams|1 relative_workspace_path 9|2 test_name 9?"];
      }
    }
    class or extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new or().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new or().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new or().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(or, e2, t2);
      }
      static $() {
        return ["DeleteTestResult"];
      }
    }
    class ir extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ir().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ir().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ir().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ir, e2, t2);
      }
      static $() {
        return ["SaveFileParams|1 relative_workspace_path 9"];
      }
    }
    class ar extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ar().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ar().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ar().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ar, e2, t2);
      }
      static $() {
        return ["SaveFileResult"];
      }
    }
    class cr extends v {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.includeChildren = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cr, e2, t2);
      }
      static $() {
        return ["GetSymbolsParams|1 relative_workspace_path 9|2 line_range #0?|3 include_children 8", lr];
      }
    }
    class lr extends v {
      constructor(e2) {
        super(), this.startLineNumber = 0, this.endLineNumberInclusive = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lr, e2, t2);
      }
      static $() {
        return ["GetSymbolsParams.LineRange|1 start_line_number 5|2 end_line_number_inclusive 5"];
      }
    }
    class ur extends v {
      constructor(e2) {
        super(), this.symbols = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ur().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ur().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ur().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ur, e2, t2);
      }
      static $() {
        return ["GetSymbolsResult|1 symbols #0*", s.DocumentSymbol];
      }
    }
    class dr extends v {
      constructor(e2) {
        super(), this.parsingFailed = false, this.executableCommands = [], this.hasRedirects = false, this.hasCommandSubstitution = false, this.redirects = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dr, e2, t2);
      }
      static $() {
        return ["ShellCommandParsingResult|1 parsing_failed 8|2 executable_commands #0*|3 has_redirects 8|4 has_command_substitution 8|5 all_redirects_are_dev_null 8?|6 redirects #1*", mr, hr];
      }
    }
    class pr extends v {
      constructor(e2) {
        super(), this.type = "", this.value = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pr, e2, t2);
      }
      static $() {
        return ["ShellCommandParsingResult.ExecutableCommandArg|1 type 9|2 value 9"];
      }
    }
    class mr extends v {
      constructor(e2) {
        super(), this.name = "", this.args = [], this.fullText = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mr, e2, t2);
      }
      static $() {
        return ["ShellCommandParsingResult.ExecutableCommand|1 name 9|2 args #0*|3 full_text 9", pr];
      }
    }
    class hr extends v {
      constructor(e2) {
        super(), this.operator = "", this.destinationFds = [], this.targetNodeType = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hr, e2, t2);
      }
      static $() {
        return ["ShellCommandParsingResult.Redirect|1 operator 9|2 destination_fds 13*|3 target_node_type 9|4 target_text 9?"];
      }
    }
    class fr extends v {
      constructor(e2) {
        super(), this.command = "", this.isBackground = false, this.requireUserApproval = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fr, e2, t2);
      }
      static $() {
        return ["RunTerminalCommandV2Params|1 command 9|2 cwd 9?|3 new_session 8?|4 options #0?|5 is_background 8|6 require_user_approval 8|7 parsing_result #1?|8 idle_timeout_seconds 5?|9 requested_sandbox_policy #2?|10 file_output_threshold_bytes 3?|11 command_description 9?|12 classifier_result #3?", gr, dr, d.Mw, p.E4];
      }
    }
    class gr extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gr, e2, t2);
      }
      static $() {
        return ["RunTerminalCommandV2Params.ExecutionOptions|1 timeout 5?|2 skip_ai_check 8?|3 command_run_timeout_ms 5?|4 command_change_check_interval_ms 5?|5 ai_finish_check_max_attempts 5?|6 ai_finish_check_interval_ms 5?|7 delayer_interval_ms 5?|8 ai_check_for_hangs 8?"];
      }
    }
    class yr extends v {
      constructor(e2) {
        super(), this.filePath = "", this.sizeBytes = n.protoInt64.zero, this.lineCount = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yr, e2, t2);
      }
      static $() {
        return ["OutputLocation|1 file_path 9|2 size_bytes 3|3 line_count 3"];
      }
    }
    class wr extends v {
      constructor(e2) {
        super(), this.output = "", this.exitCode = 0, this.poppedOutIntoBackground = false, this.isRunningInBackground = false, this.notInterrupted = false, this.resultingWorkingDirectory = "", this.didUserChange = false, this.endedReason = S.UNSPECIFIED, this.outputRaw = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wr, e2, t2);
      }
      static $() {
        return ["RunTerminalCommandV2Result|1 output 9|2 exit_code 5|3 rejected 8?|4 popped_out_into_background 8|5 is_running_in_background 8|6 not_interrupted 8|7 resulting_working_directory 9|8 did_user_change 8|9 ended_reason #0|10 exit_code_v2 5?|11 updated_command 9?|12 output_raw 9|13 human_review_v2 #1?|14 effective_sandbox_policy #2?|15 terminal_instance_id 5?|16 output_location #3?|17 terminal_instance_path 9?|18 background_shell_id 13?", S, te, d.Mw, yr];
      }
    }
    class vr extends v {
      constructor(e2) {
        super(), this.command = "", this.isBackground = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vr, e2, t2);
      }
      static $() {
        return ["RunTerminalCommandV2Stream|1 command 9|2 is_background 8|7 parsing_result #0?|8 idle_timeout_seconds 5?|9 requested_sandbox_policy #1?", dr, d.Mw];
      }
    }
    class _r extends v {
      constructor(e2) {
        super(), this.ruleNames = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _r().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _r().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _r().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_r, e2, t2);
      }
      static $() {
        return ["FetchRulesStream|1 rule_names 9*"];
      }
    }
    class Ar extends v {
      constructor(e2) {
        super(), this.searchTerm = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ar().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ar().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ar().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ar, e2, t2);
      }
      static $() {
        return ["WebSearchParams|1 search_term 9"];
      }
    }
    class Sr extends v {
      constructor(e2) {
        super(), this.references = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sr, e2, t2);
      }
      static $() {
        return ["WebSearchResult|1 references #0*|2 is_final 8?|3 rejected 8?", br];
      }
    }
    class br extends v {
      constructor(e2) {
        super(), this.title = "", this.url = "", this.chunk = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new br().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new br().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new br().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(br, e2, t2);
      }
      static $() {
        return ["WebSearchResult.WebReference|1 title 9|2 url 9|3 chunk 9"];
      }
    }
    class Er extends v {
      constructor(e2) {
        super(), this.searchTerm = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Er().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Er().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Er().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Er, e2, t2);
      }
      static $() {
        return ["WebSearchStream|1 search_term 9"];
      }
    }
    class Ir extends v {
      constructor(e2) {
        super(), this.tools = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ir().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ir().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ir().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ir, e2, t2);
      }
      static $() {
        return ["MCPParams|1 tools #0*|2 file_output_threshold_bytes 3?", Cr];
      }
    }
    class Cr extends v {
      constructor(e2) {
        super(), this.name = "", this.description = "", this.parameters = "", this.serverName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cr, e2, t2);
      }
      static $() {
        return ["MCPParams.Tool|1 name 9|2 description 9|3 parameters 9|4 server_name 9|5 transcript_display #0?", kr];
      }
    }
    class kr extends v {
      constructor(e2) {
        super(), this.loading = "", this.success = "", this.error = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kr, e2, t2);
      }
      static $() {
        return ["MCPParams.TranscriptDisplay|1 loading 9|2 success 9|3 error 9"];
      }
    }
    class xr extends v {
      constructor(e2) {
        super(), this.selectedTool = "", this.result = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xr, e2, t2);
      }
      static $() {
        return ["MCPResult|1 selected_tool 9|2 result 9"];
      }
    }
    class Tr extends v {
      constructor(e2) {
        super(), this.tools = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tr, e2, t2);
      }
      static $() {
        return ["MCPStream|1 tools #0*", Cr];
      }
    }
    class Rr extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rr, e2, t2);
      }
      static $() {
        return ["ListMcpResourcesParams|1 server 9?"];
      }
    }
    class Br extends v {
      constructor(e2) {
        super(), this.resources = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Br().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Br().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Br().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Br, e2, t2);
      }
      static $() {
        return ["ListMcpResourcesResult|1 resources #0*", Pr];
      }
    }
    class Pr extends v {
      constructor(e2) {
        super(), this.uri = "", this.server = "", this.annotations = {}, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pr, e2, t2);
      }
      static $() {
        return ["ListMcpResourcesResult.MCPResource|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 server 9|6 annotations 9,9"];
      }
    }
    class Jr extends v {
      constructor(e2) {
        super(), this.server = "", this.uri = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jr, e2, t2);
      }
      static $() {
        return ["ReadMcpResourceParams|1 server 9|2 uri 9|3 download_path 9?"];
      }
    }
    class Mr extends v {
      constructor(e2) {
        super(), this.uri = "", this.content = { case: void 0 }, this.annotations = {}, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mr, e2, t2);
      }
      static $() {
        return ["ReadMcpResourceResult|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 text 9 content|6 blob 12 content|7 annotations 9,9"];
      }
    }
    class qr extends v {
      constructor(e2) {
        super(), this.server = "", this.toolName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qr, e2, t2);
      }
      static $() {
        return ["CallMcpToolParams|1 server 9|2 tool_name 9|3 tool_args #0", n.Struct];
      }
    }
    class Dr extends v {
      constructor(e2) {
        super(), this.server = "", this.toolName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dr, e2, t2);
      }
      static $() {
        return ["CallMcpToolResult|1 server 9|2 tool_name 9|3 result #0", n.Struct];
      }
    }
    class Or extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Or().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Or().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Or().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Or, e2, t2);
      }
      static $() {
        return ["GetMcpToolsParams|1 server 9?|2 tool_name 9?|3 pattern 9?"];
      }
    }
    class Nr extends v {
      constructor(e2) {
        super(), this.content = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nr, e2, t2);
      }
      static $() {
        return ["GetMcpToolsResult|1 content 9|2 output_file_path 9?"];
      }
    }
    class Fr extends v {
      constructor(e2) {
        super(), this.query = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fr, e2, t2);
      }
      static $() {
        return ["SearchSymbolsParams|1 query 9"];
      }
    }
    class Ur extends v {
      constructor(e2) {
        super(), this.matches = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ur().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ur().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ur().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ur, e2, t2);
      }
      static $() {
        return ["SearchSymbolsResult|1 matches #0*|2 rejected 8?", Lr];
      }
    }
    class Lr extends v {
      constructor(e2) {
        super(), this.name = "", this.uri = "", this.secondaryText = "", this.labelMatches = [], this.descriptionMatches = [], this.score = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lr, e2, t2);
      }
      static $() {
        return ["SearchSymbolsResult.SymbolMatch|1 name 9|2 uri 9|3 range #0|4 secondary_text 9|5 label_matches #1*|6 description_matches #1*|7 score 1", At, St];
      }
    }
    class $r extends v {
      constructor(e2) {
        super(), this.query = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $r().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $r().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $r().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($r, e2, t2);
      }
      static $() {
        return ["SearchSymbolsStream|1 query 9"];
      }
    }
    class Qr extends v {
      constructor(e2) {
        super(), this.proposedFollowup = "", this.bcId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qr, e2, t2);
      }
      static $() {
        return ["BackgroundComposerFollowupParams|1 proposed_followup 9|2 bc_id 9"];
      }
    }
    class jr extends v {
      constructor(e2) {
        super(), this.proposedFollowup = "", this.isSent = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jr, e2, t2);
      }
      static $() {
        return ["BackgroundComposerFollowupResult|1 proposed_followup 9|2 is_sent 8"];
      }
    }
    class Gr extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gr, e2, t2);
      }
      static $() {
        return ["BackgroundComposerFollowupStream"];
      }
    }
    class Hr extends v {
      constructor(e2) {
        super(), this.knowledgeToStore = "", this.title = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hr, e2, t2);
      }
      static $() {
        return ["KnowledgeBaseParams|1 knowledge_to_store 9|2 title 9|3 existing_knowledge_id 9?|4 action 9?"];
      }
    }
    class zr extends v {
      constructor(e2) {
        super(), this.success = false, this.confirmationMessage = "", this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zr, e2, t2);
      }
      static $() {
        return ["KnowledgeBaseResult|1 success 8|2 confirmation_message 9|3 id 9"];
      }
    }
    class Wr extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wr, e2, t2);
      }
      static $() {
        return ["KnowledgeBaseStream"];
      }
    }
    class Vr extends v {
      constructor(e2) {
        super(), this.pullNumberOrCommitHash = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vr, e2, t2);
      }
      static $() {
        return ["FetchPullRequestParams|1 pull_number_or_commit_hash 9|2 repo 9?|3 is_github 8?"];
      }
    }
    class Kr extends v {
      constructor(e2) {
        super(), this.content = "", this.prNumber = 0, this.title = "", this.body = "", this.author = "", this.date = "", this.diff = "", this.comments = [], this.labels = [], this.assignees = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kr, e2, t2);
      }
      static $() {
        return ["FetchPullRequestResult|1 content 9|2 pr_number 13|3 title 9|4 body 9|5 author 9|6 date 9|7 diff 9|8 sha 9?|9 external_link 9?|10 url 9?|11 comments #0*|12 labels 9*|13 assignees 9*|14 is_issue 8?|15 state 9?|16 prompt_connect_github 8?", Yr];
      }
    }
    class Yr extends v {
      constructor(e2) {
        super(), this.id = 0, this.body = "", this.createdAt = "", this.updatedAt = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yr, e2, t2);
      }
      static $() {
        return ["IssueComment|1 id 13|2 body 9|3 author 9?|4 created_at 9|5 updated_at 9|6 author_association 9?"];
      }
    }
    class Zr extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zr, e2, t2);
      }
      static $() {
        return ["FetchPullRequestStream"];
      }
    }
    class Xr extends v {
      constructor(e2) {
        super(), this.sha = "", this.score = 0, this.changedFiles = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xr, e2, t2);
      }
      static $() {
        return ["PullRequestReference|1 sha 9|2 score 2|3 title 9?|4 summary 9?|5 pr_number 13?|6 author 9?|7 date 9?|8 changed_files 9*"];
      }
    }
    class en extends v {
      constructor(e2) {
        super(), this.query = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new en().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new en().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new en().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(en, e2, t2);
      }
      static $() {
        return ["DeepSearchParams|1 query 9"];
      }
    }
    class tn extends v {
      constructor(e2) {
        super(), this.success = false, this.result = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tn, e2, t2);
      }
      static $() {
        return ["DeepSearchResult|1 success 8|2 result 9"];
      }
    }
    class rn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rn, e2, t2);
      }
      static $() {
        return ["DeepSearchStream"];
      }
    }
    class nn extends v {
      constructor(e2) {
        super(), this.content = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nn, e2, t2);
      }
      static $() {
        return ["CreateDiagramParams|1 content 9"];
      }
    }
    class sn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sn, e2, t2);
      }
      static $() {
        return ["CreateDiagramResult|1 error 9?"];
      }
    }
    class on extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new on().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new on().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new on().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(on, e2, t2);
      }
      static $() {
        return ["CreateDiagramStream"];
      }
    }
    class an extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new an().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new an().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new an().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(an, e2, t2);
      }
      static $() {
        return ["FixLintsParams"];
      }
    }
    class cn extends v {
      constructor(e2) {
        super(), this.fileResults = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cn, e2, t2);
      }
      static $() {
        return ["FixLintsResult|1 file_results #0*", ln];
      }
    }
    class ln extends v {
      constructor(e2) {
        super(), this.filePath = "", this.isApplied = false, this.applyFailed = false, this.linterErrors = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ln().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ln().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ln().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ln, e2, t2);
      }
      static $() {
        return ["FixLintsResult.FileResult|1 file_path 9|2 diff #0|3 is_applied 8|4 apply_failed 8|5 error 9?|6 linter_errors #1*", W, s.LinterError];
      }
    }
    class un extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new un().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new un().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new un().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(un, e2, t2);
      }
      static $() {
        return ["FixLintsStream"];
      }
    }
    class dn extends v {
      constructor(e2) {
        super(), this.path = "", this.paths = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dn, e2, t2);
      }
      static $() {
        return ["ReadLintsParams|1 path 9|2 paths 9*"];
      }
    }
    class pn extends v {
      constructor(e2) {
        super(), this.path = "", this.linterErrors = [], this.linterErrorsByFile = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pn, e2, t2);
      }
      static $() {
        return ["ReadLintsResult|1 path 9|2 linter_errors #0*|3 linter_errors_by_file #1*", s.LinterError, s.LinterErrors];
      }
    }
    class mn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mn, e2, t2);
      }
      static $() {
        return ["ReadLintsStream"];
      }
    }
    class hn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hn, e2, t2);
      }
      static $() {
        return ["GotodefStream"];
      }
    }
    class fn extends v {
      constructor(e2) {
        super(), this.taskDescription = "", this.taskTitle = "", this.allowedWriteDirectories = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fn, e2, t2);
      }
      static $() {
        return ["TaskParams|1 task_description 9|4 task_title 9|2 async 8?|3 allowed_write_directories 9*|5 model_override 9?|6 max_mode_override 8?|7 default_expanded_while_running 8?"];
      }
    }
    class gn extends v {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gn, e2, t2);
      }
      static $() {
        return ["TaskResult|1 completed_task_result #0 result|2 async_task_result #1 result", yn, wn];
      }
    }
    class yn extends v {
      constructor(e2) {
        super(), this.summary = "", this.fileResults = [], this.userAborted = false, this.subagentErrored = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yn, e2, t2);
      }
      static $() {
        return ["TaskResult.CompletedTaskResult|1 summary 9|2 file_results #0*|3 user_aborted 8|4 subagent_errored 8", ln];
      }
    }
    class wn extends v {
      constructor(e2) {
        super(), this.taskId = "", this.userAborted = false, this.subagentErrored = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wn, e2, t2);
      }
      static $() {
        return ["TaskResult.AsyncTaskResult|1 task_id 9|2 user_aborted 8|3 subagent_errored 8"];
      }
    }
    class vn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vn, e2, t2);
      }
      static $() {
        return ["TaskStream"];
      }
    }
    class _n extends v {
      constructor(e2) {
        super(), this.description = "", this.prompt = "", this.subagentType = "", this.name = "", this.mode = m.FL.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _n().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _n().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _n().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_n, e2, t2);
      }
      static $() {
        return ["TaskV2Params|1 description 9|2 prompt 9|3 subagent_type 9|4 model 9?|5 name 9|6 mode #0", m.FL];
      }
    }
    class An extends v {
      constructor(e2) {
        super(), this.isBackground = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new An().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new An().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new An().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(An, e2, t2);
      }
      static $() {
        return ["TaskV2Result|1 agent_id 9?|2 is_background 8|3 cloud_agent_bc_id 9?"];
      }
    }
    class Sn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sn, e2, t2);
      }
      static $() {
        return ["TaskV2Stream"];
      }
    }
    class bn extends v {
      constructor(e2) {
        super(), this.pattern = "", this.ignoreGlobs = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchParams|1 pattern 9|2 path 9?|3 glob 9?|4 output_mode 9?|5 context_before 5?|6 context_after 5?|7 context 5?|8 case_insensitive 8?|9 type 9?|10 head_limit 5?|11 multiline 8?|12 sort 9?|13 sort_ascending 8?|14 ignore_globs 9*|15 offset 5?"];
      }
    }
    class En extends v {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new En().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new En().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new En().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(En, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchResult|1 success #0 result|2 error #1 result", Cn, In];
      }
    }
    class In extends v {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new In().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new In().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new In().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(In, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchError|1 error 9"];
      }
    }
    class Cn extends v {
      constructor(e2) {
        super(), this.pattern = "", this.path = "", this.outputMode = "", this.workspaceResults = {}, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchSuccess|1 pattern 9|2 path 9|3 output_mode 9|4 workspace_results 9,#0|5 active_editor_result #0?", kn];
      }
    }
    class kn extends v {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchUnionResult|1 count #0 result|2 files #1 result|3 content #2 result", xn, Rn, Pn];
      }
    }
    class xn extends v {
      constructor(e2) {
        super(), this.counts = [], this.totalFiles = 0, this.totalMatches = 0, this.clientTruncated = false, this.ripgrepTruncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchCountResult|1 counts #0*|2 total_files 5|3 total_matches 5|4 client_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?|5 ripgrep_truncated 8", Tn];
      }
    }
    class Tn extends v {
      constructor(e2) {
        super(), this.file = "", this.count = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchFileCount|1 file 9|2 count 5|3 is_dirty 8?|4 is_out_of_workspace 8?|5 absolute_path 9?"];
      }
    }
    class Rn extends v {
      constructor(e2) {
        super(), this.files = [], this.totalFiles = 0, this.clientTruncated = false, this.ripgrepTruncated = false, this.filesWithMeta = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchFilesResult|1 files 9*|2 total_files 5|3 client_truncated 8|4 ripgrep_truncated 8|5 files_with_meta #0*|6 head_limit_applied 5?|7 offset_applied 5?", Bn];
      }
    }
    class Bn extends v {
      constructor(e2) {
        super(), this.file = "", this.isDirty = false, this.isOutOfWorkspace = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchFilesResult.FileEntry|1 file 9|2 is_dirty 8|3 is_out_of_workspace 8|4 absolute_path 9?"];
      }
    }
    class Pn extends v {
      constructor(e2) {
        super(), this.matches = [], this.totalLines = 0, this.totalMatchedLines = 0, this.clientTruncated = false, this.ripgrepTruncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchContentResult|1 matches #0*|2 total_lines 5|3 total_matched_lines 5|4 client_truncated 8|5 ripgrep_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?", Jn];
      }
    }
    class Jn extends v {
      constructor(e2) {
        super(), this.file = "", this.matches = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchFileMatch|1 file 9|2 matches #0*|3 is_dirty 8?|4 is_out_of_workspace 8?|5 absolute_path 9?", Mn];
      }
    }
    class Mn extends v {
      constructor(e2) {
        super(), this.lineNumber = 0, this.content = "", this.contentTruncated = false, this.isContextLine = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchContentMatch|1 line_number 5|2 content 9|3 content_truncated 8|4 is_context_line 8"];
      }
    }
    class qn extends v {
      constructor(e2) {
        super(), this.pattern = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qn, e2, t2);
      }
      static $() {
        return ["RipgrepRawSearchStream|1 pattern 9"];
      }
    }
    class Dn extends v {
      constructor(e2) {
        super(), this.ids = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dn, e2, t2);
      }
      static $() {
        return ["AwaitTaskParams|1 ids 9*"];
      }
    }
    class On extends v {
      constructor(e2) {
        super(), this.taskResults = [], this.missingTaskIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new On().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new On().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new On().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(On, e2, t2);
      }
      static $() {
        return ["AwaitTaskResult|1 task_results #0*|2 missing_task_ids 9*", Nn];
      }
    }
    class Nn extends v {
      constructor(e2) {
        super(), this.taskId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nn, e2, t2);
      }
      static $() {
        return ["AwaitTaskResult.TaskResultItem|1 task_id 9|2 result #0", yn];
      }
    }
    class Fn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fn, e2, t2);
      }
      static $() {
        return ["AwaitTaskStream"];
      }
    }
    class Un extends v {
      constructor(e2) {
        super(), this.read = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Un().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Un().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Un().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Un, e2, t2);
      }
      static $() {
        return ["TodoReadParams|1 read 8"];
      }
    }
    class Ln extends v {
      constructor(e2) {
        super(), this.content = "", this.status = "", this.id = "", this.dependencies = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ln().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ln().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ln().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ln, e2, t2);
      }
      static $() {
        return ["TodoItem|1 content 9|2 status 9|3 id 9|4 dependencies 9*"];
      }
    }
    class $n extends v {
      constructor(e2) {
        super(), this.todos = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $n().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $n().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $n().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($n, e2, t2);
      }
      static $() {
        return ["TodoReadResult|1 todos #0*", Ln];
      }
    }
    class Qn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qn, e2, t2);
      }
      static $() {
        return ["TodoReadStream"];
      }
    }
    class jn extends v {
      constructor(e2) {
        super(), this.todos = [], this.merge = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jn, e2, t2);
      }
      static $() {
        return ["TodoWriteParams|1 todos #0*|2 merge 8", Ln];
      }
    }
    class Gn extends v {
      constructor(e2) {
        super(), this.success = false, this.readyTaskIds = [], this.needsInProgressTodos = false, this.finalTodos = [], this.initialTodos = [], this.wasMerge = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gn, e2, t2);
      }
      static $() {
        return ["TodoWriteResult|1 success 8|2 ready_task_ids 9*|3 needs_in_progress_todos 8|4 final_todos #0*|5 initial_todos #0*|6 was_merge 8", Ln];
      }
    }
    class Hn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hn, e2, t2);
      }
      static $() {
        return ["TodoWriteStream"];
      }
    }
    class zn extends v {
      constructor(e2) {
        super(), this.targetDirectory = "", this.ignoreGlobs = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zn, e2, t2);
      }
      static $() {
        return ["ListDirV2Params|1 target_directory 9|2 ignore_globs 9*|3 should_enrich_terminal_metadata 8?"];
      }
    }
    class Wn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wn, e2, t2);
      }
      static $() {
        return ["ListDirV2Result|1 directory_tree_root #0", Vn];
      }
    }
    class Vn extends v {
      constructor(e2) {
        super(), this.absPath = "", this.childrenDirs = [], this.childrenFiles = [], this.childrenWereProcessed = false, this.fullSubtreeExtensionCounts = {}, this.numFiles = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vn, e2, t2);
      }
      static $() {
        return ["ListDirV2Result.DirectoryTreeNode|1 abs_path 9|2 children_dirs #0*|3 children_files #1*|4 children_were_processed 8|5 full_subtree_extension_counts 9,5|6 num_files 5", Vn, Kn];
      }
    }
    class Kn extends v {
      constructor(e2) {
        super(), this.name = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kn, e2, t2);
      }
      static $() {
        return ["ListDirV2Result.DirectoryTreeNode.File|1 name 9|2 terminal_metadata #0?", h.Y$];
      }
    }
    class Yn extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yn, e2, t2);
      }
      static $() {
        return ["ListDirV2Stream"];
      }
    }
    class Zn extends v {
      constructor(e2) {
        super(), this.targetFile = "", this.charsLimit = 0, this.effectiveUri = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zn, e2, t2);
      }
      static $() {
        return ["ReadFileV2Params|1 target_file 9|2 offset 5?|3 limit 5?|4 chars_limit 5|5 effective_uri 9|6 enable_line_numbers 8?"];
      }
    }
    class Xn extends v {
      constructor(e2) {
        super(), this.numCharactersInRequestedRange = 0, this.matchingCursorRules = [], this.images = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xn, e2, t2);
      }
      static $() {
        return ["ReadFileV2Result|1 contents 9?|2 num_characters_in_requested_range 5|3 offset_is_bigger_than_number_of_lines_in_file 8?|4 total_lines_in_file 5?|5 matching_cursor_rules #0*|6 images #1*", s.CursorRule, s.ImageProto];
      }
    }
    class es extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new es().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new es().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new es().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(es, e2, t2);
      }
      static $() {
        return ["ReadFileV2Stream|1 params #0?", Zn];
      }
    }
    class ts extends v {
      constructor(e2) {
        super(), this.targetDirectory = "", this.globPattern = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ts().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ts().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ts().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ts, e2, t2);
      }
      static $() {
        return ["GlobFileSearchParams|1 target_directory 9|2 glob_pattern 9"];
      }
    }
    class rs extends v {
      constructor(e2) {
        super(), this.directories = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rs, e2, t2);
      }
      static $() {
        return ["GlobFileSearchResult|1 directories #0*", ss];
      }
    }
    class ns extends v {
      constructor(e2) {
        super(), this.relPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ns().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ns().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ns().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ns, e2, t2);
      }
      static $() {
        return ["GlobFileSearchResult.File|1 rel_path 9"];
      }
    }
    class ss extends v {
      constructor(e2) {
        super(), this.absPath = "", this.files = [], this.totalFiles = 0, this.ripgrepTruncated = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ss().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ss().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ss().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ss, e2, t2);
      }
      static $() {
        return ["GlobFileSearchResult.Directory|1 abs_path 9|2 files #0*|3 total_files 5|4 ripgrep_truncated 8", ns];
      }
    }
    class os extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new os().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new os().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new os().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(os, e2, t2);
      }
      static $() {
        return ["GlobFileSearchStream"];
      }
    }
    class is extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new is().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new is().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new is().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(is, e2, t2);
      }
      static $() {
        return ["ListMcpResourcesStream"];
      }
    }
    class as extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new as().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new as().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new as().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(as, e2, t2);
      }
      static $() {
        return ["CallMcpToolStream"];
      }
    }
    class cs extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cs, e2, t2);
      }
      static $() {
        return ["ReadMcpResourceStream"];
      }
    }
    class ls extends v {
      constructor(e2) {
        super(), this.id = "", this.title = "", this.description = "", this.instructions = "", this.prerequisites = [], this.subComposerId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ls().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ls().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ls().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ls, e2, t2);
      }
      static $() {
        return ["Step|1 id 9|2 title 9|3 description 9|4 instructions 9|5 prerequisites 9*|6 sub_composer_id 9"];
      }
    }
    class us extends v {
      constructor(e2) {
        super(), this.name = "", this.todos = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new us().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new us().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new us().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(us, e2, t2);
      }
      static $() {
        return ["PlanPhase|1 name 9|2 todos #0*", Ln];
      }
    }
    class ds extends v {
      constructor(e2) {
        super(), this.plan = "", this.title = "", this.summary = "", this.steps = [], this.oldStr = "", this.newStr = "", this.name = "", this.todos = [], this.overview = "", this.isSpec = false, this.isProject = false, this.phases = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ds().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ds().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ds().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ds, e2, t2);
      }
      static $() {
        return ["CreatePlanParams|1 plan 9|2 title 9|3 summary 9|4 steps #0*|5 old_str 9|6 new_str 9|7 name 9|8 todos #1*|9 overview 9|10 is_spec 8|11 is_project 8|12 phases #2*", ls, Ln, us];
      }
    }
    class ps extends v {
      constructor(e2) {
        super(), this.result = { case: void 0 }, this.planUri = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ps().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ps().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ps().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ps, e2, t2);
      }
      static $() {
        return ["CreatePlanResult|1 accepted #0 result|2 rejected #1 result|3 modified #2 result|4 plan_uri 9", ms, hs, fs];
      }
    }
    class ms extends v {
      constructor(e2) {
        super(), this.finalTodos = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ms().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ms().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ms().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ms, e2, t2);
      }
      static $() {
        return ["CreatePlanResult.Accepted|1 final_todos #0*", Ln];
      }
    }
    class hs extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hs, e2, t2);
      }
      static $() {
        return ["CreatePlanResult.Rejected"];
      }
    }
    class fs extends v {
      constructor(e2) {
        super(), this.newPlan = "", this.finalTodos = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fs, e2, t2);
      }
      static $() {
        return ["CreatePlanResult.Modified|1 new_plan 9|2 final_todos #0*", Ln];
      }
    }
    class gs extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gs, e2, t2);
      }
      static $() {
        return ["CreatePlanStream"];
      }
    }
    class ys extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ys().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ys().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ys().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ys, e2, t2);
      }
      static $() {
        return ["ReadProjectParams"];
      }
    }
    class ws extends v {
      constructor(e2) {
        super(), this.plan = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ws().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ws().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ws().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ws, e2, t2);
      }
      static $() {
        return ["ReadProjectResult|1 plan 9"];
      }
    }
    class vs extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vs, e2, t2);
      }
      static $() {
        return ["ReadProjectStream"];
      }
    }
    class _s extends v {
      constructor(e2) {
        super(), this.oldString = "", this.newString = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _s().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _s().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _s().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_s, e2, t2);
      }
      static $() {
        return ["UpdateProjectStringReplacement|1 old_string 9|2 new_string 9"];
      }
    }
    class As extends v {
      constructor(e2) {
        super(), this.stringReplacements = [], this.summary = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new As().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new As().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new As().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(As, e2, t2);
      }
      static $() {
        return ["UpdateProjectParams|1 string_replacements #0*|2 summary 9", _s];
      }
    }
    class Ss extends v {
      constructor(e2) {
        super(), this.success = false, this.updatedPlan = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ss().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ss().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ss().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ss, e2, t2);
      }
      static $() {
        return ["UpdateProjectResult|1 success 8|2 updated_plan 9"];
      }
    }
    class bs extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bs, e2, t2);
      }
      static $() {
        return ["UpdateProjectStream"];
      }
    }
    class Es extends v {
      constructor(e2) {
        super(), this.title = "", this.questions = [], this.runAsync = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Es().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Es().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Es().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Es, e2, t2);
      }
      static $() {
        return ["AskQuestionParams|1 title 9|2 questions #0*|3 run_async 8", Is];
      }
    }
    class Is extends v {
      constructor(e2) {
        super(), this.id = "", this.prompt = "", this.options = [], this.allowMultiple = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Is().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Is().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Is().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Is, e2, t2);
      }
      static $() {
        return ["AskQuestionParams.Question|1 id 9|2 prompt 9|3 options #0*|4 allow_multiple 8", Cs];
      }
    }
    class Cs extends v {
      constructor(e2) {
        super(), this.id = "", this.label = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cs, e2, t2);
      }
      static $() {
        return ["AskQuestionParams.Option|1 id 9|2 label 9"];
      }
    }
    class ks extends v {
      constructor(e2) {
        super(), this.answers = [], this.isAsync = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ks().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ks().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ks().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ks, e2, t2);
      }
      static $() {
        return ["AskQuestionResult|1 answers #0*|2 is_async 8", xs];
      }
    }
    class xs extends v {
      constructor(e2) {
        super(), this.questionId = "", this.selectedOptionIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xs, e2, t2);
      }
      static $() {
        return ["AskQuestionResult.Answer|1 question_id 9|2 selected_option_ids 9*|3 freeform_text 9?"];
      }
    }
    class Ts extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ts().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ts().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ts().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ts, e2, t2);
      }
      static $() {
        return ["AskQuestionStream|1 params #0", Es];
      }
    }
    class Rs extends v {
      constructor(e2) {
        super(), this.fromModeId = "", this.toModeId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rs, e2, t2);
      }
      static $() {
        return ["SwitchModeParams|1 from_mode_id 9|2 to_mode_id 9|3 explanation 9?"];
      }
    }
    class Bs extends v {
      constructor(e2) {
        super(), this.fromModeId = "", this.toModeId = "", this.autoApproved = false, this.userApproved = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bs, e2, t2);
      }
      static $() {
        return ["SwitchModeResult|1 from_mode_id 9|2 to_mode_id 9|3 auto_approved 8|4 user_approved 8"];
      }
    }
    class Ps extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ps().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ps().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ps().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ps, e2, t2);
      }
      static $() {
        return ["SwitchModeStream|1 params #0", Rs];
      }
    }
    class Js extends v {
      constructor(e2) {
        super(), this.actions = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Js().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Js().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Js().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Js, e2, t2);
      }
      static $() {
        return ["ComputerUseParams|1 actions #0*", f.ho];
      }
    }
    class Ms extends v {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ms().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ms().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ms().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ms, e2, t2);
      }
      static $() {
        return ["ComputerUseResult|1 success #0 result|2 error #1 result", f.Wd, f.Jb];
      }
    }
    class qs extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qs, e2, t2);
      }
      static $() {
        return ["ComputerUseStream|1 params #0", Js];
      }
    }
    class Ds extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ds().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ds().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ds().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ds, e2, t2);
      }
      static $() {
        return ["WriteShellStdinStream|1 params #0", o.LL];
      }
    }
    class Os extends v {
      constructor(e2) {
        super(), this.url = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Os().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Os().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Os().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Os, e2, t2);
      }
      static $() {
        return ["WebFetchParams|1 url 9"];
      }
    }
    class Ns extends v {
      constructor(e2) {
        super(), this.url = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ns().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ns().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ns().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ns, e2, t2);
      }
      static $() {
        return ["WebFetchResult|1 url 9|2 markdown 9?|3 error 9?"];
      }
    }
    class Fs extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fs, e2, t2);
      }
      static $() {
        return ["WebFetchStream|1 params #0", Os];
      }
    }
    class Us extends v {
      constructor(e2) {
        super(), this.summary = "", this.results = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Us().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Us().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Us().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Us, e2, t2);
      }
      static $() {
        return ["ReportBugfixResultsParams|1 summary 9|2 results #0*", g.Y6];
      }
    }
    class Ls extends v {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ls().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ls().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ls().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ls, e2, t2);
      }
      static $() {
        return ["ReportBugfixResultsResult|1 success #0 result|2 error #1 result", g.RH, g.q3];
      }
    }
    class $s extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $s().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $s().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $s().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($s, e2, t2);
      }
      static $() {
        return ["ReportBugfixResultsStream|1 params #0", Us];
      }
    }
    class Qs extends v {
      constructor(e2) {
        super(), this.serverIdentifier = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qs, e2, t2);
      }
      static $() {
        return ["McpAuthParams|1 server_identifier 9"];
      }
    }
    class js extends v {
      constructor(e2) {
        super(), this.success = false, this.message = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new js().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new js().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new js().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(js, e2, t2);
      }
      static $() {
        return ["McpAuthResult|1 success 8|2 message 9"];
      }
    }
    class Gs extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gs, e2, t2);
      }
      static $() {
        return ["McpAuthStream"];
      }
    }
    class Hs extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hs, e2, t2);
      }
      static $() {
        return ["ConnectScmParams|1 github #0", zs];
      }
    }
    class zs extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zs, e2, t2);
      }
      static $() {
        return ["ConnectScmGithub|1 repository #0|2 ghe_application 9?", Ws];
      }
    }
    class Ws extends v {
      constructor(e2) {
        super(), this.owner = "", this.repo = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ws().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ws().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ws().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ws, e2, t2);
      }
      static $() {
        return ["ConnectScmGithubRepository|1 owner 9|2 repo 9"];
      }
    }
    class Vs extends v {
      constructor(e2) {
        super(), this.success = false, this.message = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vs().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vs().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vs().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vs, e2, t2);
      }
      static $() {
        return ["ConnectScmResult|1 success 8|2 message 9"];
      }
    }
    class Ks extends v {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ks().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ks().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ks().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ks, e2, t2);
      }
      static $() {
        return ["ConnectScmStream"];
      }
    }
  }