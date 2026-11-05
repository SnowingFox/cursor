// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7620 range:4391470..4590928
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7620: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $PL: () => ut, $rP: () => zn, AUe: () => Q, Dm_: () => ue, Faf: () => M, I8K: () => ce, KRm: () => z, MtQ: () => v, PfC: () => J, TE4: () => P, Ue3: () => T, XaY: () => w, bR2: () => O, kWq: () => Fn, q20: () => Cr });
    var n2 = r2(6038), s2 = r2(7918), i2 = r2(4498), o2 = r2(1531), a = r2(5814), u = r2(7747), c = r2(5178), l = r2(1563), m = r2(3574), d = r2(2671), f = r2(1491), p = r2(2730), h = r2(3643), g = r2(867), A = r2(8592);
    const _ = "aiserver.v1.";
    class y extends A.HL {
      static get runtime() {
        return (0, A.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return _;
      }
    }
    var w = (0, A.QT)(n2.proto3, _, "ClientSideToolV2", [[0, "UNSPECIFIED"], [1, "READ_SEMSEARCH_FILES"], [3, "RIPGREP_SEARCH"], [5, "READ_FILE"], [6, "LIST_DIR"], [7, "EDIT_FILE"], [8, "FILE_SEARCH"], [9, "SEMANTIC_SEARCH_FULL"], [11, "DELETE_FILE"], [12, "REAPPLY"], [15, "RUN_TERMINAL_COMMAND_V2"], [16, "FETCH_RULES"], [18, "WEB_SEARCH"], [19, "MCP"], [23, "SEARCH_SYMBOLS"], [24, "BACKGROUND_COMPOSER_FOLLOWUP"], [25, "KNOWLEDGE_BASE"], [26, "FETCH_PULL_REQUEST"], [27, "DEEP_SEARCH"], [28, "CREATE_DIAGRAM"], [29, "FIX_LINTS"], [30, "READ_LINTS"], [31, "GO_TO_DEFINITION"], [32, "TASK"], [33, "AWAIT_TASK"], [34, "TODO_READ"], [35, "TODO_WRITE"], [38, "EDIT_FILE_V2"], [39, "LIST_DIR_V2"], [40, "READ_FILE_V2"], [41, "RIPGREP_RAW_SEARCH"], [42, "GLOB_FILE_SEARCH"], [43, "CREATE_PLAN"], [44, "LIST_MCP_RESOURCES"], [45, "READ_MCP_RESOURCE"], [46, "READ_PROJECT"], [47, "UPDATE_PROJECT"], [48, "TASK_V2"], [49, "CALL_MCP_TOOL"], [50, "APPLY_AGENT_DIFF"], [51, "ASK_QUESTION"], [52, "SWITCH_MODE"], [53, "GENERATE_IMAGE"], [54, "COMPUTER_USE"], [55, "WRITE_SHELL_STDIN"], [56, "RECORD_SCREEN"], [57, "WEB_FETCH"], [58, "REPORT_BUGFIX_RESULTS"], [59, "AI_ATTRIBUTION"], [60, "MCP_AUTH"], [61, "REFLECT"], [62, "AWAIT"], [63, "GET_MCP_TOOLS"], [65, "SEND_TO_USER"], [66, "CONNECT_SCM"]], 1), S = (0, A.QT)(n2.proto3, _, "BuiltinTool", [[0, "UNSPECIFIED"], [1, "SEARCH"], [2, "READ_CHUNK"], [3, "GOTODEF"], [4, "EDIT"], [5, "UNDO_EDIT"], [6, "END"], [7, "NEW_FILE"], [8, "ADD_TEST"], [9, "RUN_TEST"], [10, "DELETE_TEST"], [11, "SAVE_FILE"], [12, "GET_TESTS"], [13, "GET_SYMBOLS"], [14, "SEMANTIC_SEARCH"], [15, "GET_PROJECT_STRUCTURE"], [16, "CREATE_RM_FILES"], [17, "RUN_TERMINAL_COMMANDS"], [18, "NEW_EDIT"], [19, "READ_WITH_LINTER"]], 1), J = (0, A.QT)(n2.proto3, _, "RunTerminalCommandEndedReason", [[0, "UNSPECIFIED"], [1, "EXECUTION_COMPLETED"], [2, "EXECUTION_ABORTED"], [3, "EXECUTION_FAILED"], [4, "ERROR_OCCURRED_CHECKING_REASON"], [5, "IDLE_TIMEOUT"]], 1);
    class B extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReapplyParams|1 relative_workspace_path 9"];
      }
    }
    class E extends y {
      constructor(t3) {
        super(), this.agentId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ApplyAgentDiffParams|1 agent_id 9"];
      }
    }
    class I extends y {
      constructor(t3) {
        super(), this.isApplied = false, this.applyFailed = false, this.linterErrors = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ReapplyResult|1 diff #0|2 is_applied 8|3 apply_failed 8|4 linter_errors #1*|5 rejected 8?", z, s2.LinterError];
      }
    }
    class C extends y {
      constructor(t3) {
        super(), this.ruleNames = [], n2.proto3.util.initPartial(t3, this);
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
        return ["FetchRulesParams|1 rule_names 9*"];
      }
    }
    class b extends y {
      constructor(t3) {
        super(), this.rules = [], n2.proto3.util.initPartial(t3, this);
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
        return ["FetchRulesResult|1 rules #0*", s2.CursorRule];
      }
    }
    class k extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ReapplyStream"];
      }
    }
    class v extends y {
      constructor(t3) {
        super(), this.clientVisibleErrorMessage = "", this.modelVisibleErrorMessage = "", this.errorDetails = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ToolResultError|1 client_visible_error_message 9|2 model_visible_error_message 9|3 actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk 9?|5 edit_file_error_details #0 error_details|6 search_replace_error_details #1 error_details", q, R];
      }
    }
    class q extends y {
      constructor(t3) {
        super(), this.numLinesInFileBeforeEdit = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ToolResultError.EditFileError|1 num_lines_in_file_before_edit 5"];
      }
    }
    class R extends y {
      constructor(t3) {
        super(), this.numLinesInFileBeforeEdit = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ToolResultError.SearchReplaceError|1 num_lines_in_file_before_edit 5"];
      }
    }
    class P extends y {
      constructor(t3) {
        super(), this.tool = w.UNSPECIFIED, this.params = { case: void 0 }, this.toolCallId = "", this.name = "", this.isStreaming = false, this.isLastMessage = false, this.internal = false, this.rawArgs = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ClientSideToolV2Call|1 tool #0|2 read_semsearch_files_params #1 params|5 ripgrep_search_params #2 params|8 read_file_params #3 params|12 list_dir_params #4 params|13 edit_file_params #5 params|16 file_search_params #6 params|17 semantic_search_full_params #7 params|19 delete_file_params #8 params|20 reapply_params #9 params|23 run_terminal_command_v2_params #10 params|24 fetch_rules_params #11 params|26 web_search_params #12 params|27 mcp_params #13 params|31 search_symbols_params #14 params|41 gotodef_params #15 params|32 background_composer_followup_params #16 params|33 knowledge_base_params #17 params|34 fetch_pull_request_params #18 params|35 deep_search_params #19 params|36 create_diagram_params #20 params|37 fix_lints_params #21 params|38 read_lints_params #22 params|42 task_params #23 params|43 await_task_params #24 params|44 todo_read_params #25 params|45 todo_write_params #26 params|50 edit_file_v2_params #27 params|52 list_dir_v2_params #28 params|53 read_file_v2_params #29 params|54 ripgrep_raw_search_params #30 params|55 glob_file_search_params #31 params|56 create_plan_params #32 params|57 list_mcp_resources_params #33 params|58 read_mcp_resource_params #34 params|59 read_project_params #35 params|60 update_project_params #36 params|61 task_v2_params #37 params|62 call_mcp_tool_params #38 params|63 apply_agent_diff_params #39 params|64 ask_question_params #40 params|65 switch_mode_params #41 params|66 computer_use_params #42 params|67 write_shell_stdin_params #43 params|68 record_screen_params #44 params|69 web_fetch_params #45 params|70 report_bugfix_results_params #46 params|71 mcp_auth_params #47 params|72 get_mcp_tools_params #48 params|73 connect_scm_params #49 params|3 tool_call_id 9|6 timeout_ms 1?|9 name 9|14 is_streaming 8|15 is_last_message 8|51 internal 8|10 raw_args 9|48 tool_index 13?|49 model_call_id 9?", w, $t, pt, mt, at, K, nt, Yt, Zt, B, hr, C, Sr, Ir, Mr, Qe, $r, Kr, Wr, tn, nn, an, mn, hn, Dn, On, Gn, F, Vn, Xn, Bn, es, ms, qr, Tr, As, Ss, wn, Nr, E, Es, qs, Ts, i2.LL, o2.zH, Us, Os, $s, Ur, Ks];
      }
    }
    class T extends y {
      constructor(t3) {
        super(), this.tool = w.UNSPECIFIED, this.result = { case: void 0 }, this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ClientSideToolV2Result|1 tool #0|2 read_semsearch_files_result #1 result|4 ripgrep_search_result #2 result|6 read_file_result #3 result|9 list_dir_result #4 result|10 edit_file_result #5 result|11 file_search_result #6 result|18 semantic_search_full_result #7 result|20 delete_file_result #8 result|21 reapply_result #9 result|24 run_terminal_command_v2_result #10 result|25 fetch_rules_result #11 result|27 web_search_result #12 result|28 mcp_result #13 result|32 search_symbols_result #14 result|33 background_composer_followup_result #15 result|34 knowledge_base_result #16 result|36 fetch_pull_request_result #17 result|37 deep_search_result #18 result|38 create_diagram_result #19 result|39 fix_lints_result #20 result|40 read_lints_result #21 result|41 gotodef_result #22 result|42 task_result #23 result|43 await_task_result #24 result|44 todo_read_result #25 result|45 todo_write_result #26 result|51 edit_file_v2_result #27 result|52 list_dir_v2_result #28 result|53 read_file_v2_result #29 result|54 ripgrep_raw_search_result #30 result|55 glob_file_search_result #31 result|56 create_plan_result #32 result|57 list_mcp_resources_result #33 result|58 read_mcp_resource_result #34 result|59 read_project_result #35 result|60 update_project_result #36 result|61 task_v2_result #37 result|62 call_mcp_tool_result #38 result|63 apply_agent_diff_result #39 result|64 ask_question_result #40 result|65 switch_mode_result #41 result|66 computer_use_result #42 result|67 generate_image_result #43 result|68 write_shell_stdin_result #44 result|69 record_screen_result #45 result|70 web_fetch_result #46 result|71 report_bugfix_results_result #47 result|72 ai_attribution_result #48 result|73 mcp_auth_result #49 result|74 get_mcp_tools_result #50 result|75 connect_scm_result #51 result|35 tool_call_id 9|8 error #52?|48 model_call_id 9?|49 tool_index 13?|50 attachments #53?", w, zt, Et, dt, ut, V, it, jt, te, I, _r, b, Jr, kr, Or, Gr, Vr, Yr, en, sn, un, dn, Oe, gn, Un, Ln, Hn, G, zn, Zn, En, rs, ds, Rr, xr, _s, Js, Sn, Dr, a.y$, bs, Rs, xs, u.k4, i2.nt, o2.Tj, Qs, Fs, c.Zc, Gs, Qr, Ws, v, N];
      }
    }
    class x extends y {
      constructor(t3) {
        super(), this.rawMessage = "", n2.proto3.util.initPartial(t3, this);
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
        return ["NudgeMessage|1 raw_message 9"];
      }
    }
    class N extends y {
      constructor(t3) {
        super(), this.originalTodos = [], this.updatedTodos = [], this.nudgeMessages = [], this.shouldShowTodoWriteReminder = false, this.todoReminderType = D.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["ToolResultAttachments|1 original_todos #0*|2 updated_todos #0*|3 nudge_messages #1*|4 should_show_todo_write_reminder 8|5 todo_reminder_type #2|6 discovery_budget_reminder #3?", Fn, x, D, U];
      }
    }
    var D = (0, A.QT)(n2.proto3, _, "ToolResultAttachments.TodoReminderType", [[0, "UNSPECIFIED"], [1, "EVERY_10_TURNS"], [2, "AFTER_EDIT"]], 1);
    class U extends y {
      constructor(t3) {
        super(), this.discoveryRoundsRemaining = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ToolResultAttachments.DiscoveryBudgetReminder|1 discovery_rounds_remaining 5|2 discovery_effort 9?"];
      }
    }
    class Q extends y {
      constructor(t3) {
        super(), this.tool = w.UNSPECIFIED, this.toolCallId = "", this.name = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamedBackPartialToolCall|1 tool #0|2 tool_call_id 9|3 name 9|4 tool_index 13?|5 model_call_id 9?", w];
      }
    }
    class M extends y {
      constructor(t3) {
        super(), this.tool = w.UNSPECIFIED, this.toolCallId = "", this.params = { case: void 0 }, this.name = "", this.rawArgs = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamedBackToolCall|1 tool #0|2 tool_call_id 9|3 read_semsearch_files_stream #1 params|5 ripgrep_search_stream #2 params|7 read_file_stream #3 params|12 list_dir_stream #4 params|13 edit_file_stream #5 params|14 file_search_stream #6 params|19 semantic_search_full_stream #7 params|21 delete_file_stream #8 params|22 reapply_stream #9 params|25 run_terminal_command_v2_stream #10 params|26 fetch_rules_stream #11 params|28 web_search_stream #12 params|29 mcp_stream #13 params|33 search_symbols_stream #14 params|41 gotodef_stream #15 params|34 background_composer_followup_stream #16 params|35 knowledge_base_stream #17 params|36 fetch_pull_request_stream #18 params|37 deep_search_stream #19 params|38 create_diagram_stream #20 params|39 fix_lints_stream #21 params|40 read_lints_stream #22 params|42 task_stream #23 params|43 await_task_stream #24 params|44 todo_read_stream #25 params|45 todo_write_stream #26 params|52 edit_file_v2_stream #27 params|53 list_dir_v2_stream #28 params|54 read_file_v2_stream #29 params|55 ripgrep_raw_search_stream #30 params|56 glob_file_search_stream #31 params|57 create_plan_stream #32 params|58 list_mcp_resources_stream #33 params|59 read_mcp_resource_stream #34 params|60 read_project_stream #35 params|61 update_project_stream #36 params|62 task_v2_stream #37 params|63 call_mcp_tool_stream #38 params|64 ask_question_stream #39 params|65 switch_mode_stream #40 params|66 computer_use_stream #41 params|67 write_shell_stdin_stream #42 params|68 web_fetch_stream #43 params|69 report_bugfix_results_stream #44 params|70 mcp_auth_stream #45 params|71 connect_scm_stream #46 params|8 name 9|9 raw_args 9|10 error #47?|50 tool_index 13?|51 model_call_id 9?", w, Wt, Lt, ft, lt, rt, st, Xt, ee, k, yr, wr, Er, vr, Lr, pn, Hr, zr, Xr, rn, on, ln, fn, yn, Mn, $n, Kn, H, jn, ts, Nn, is, gs, os, us, ys, Bs, Jn, as, vs, Ps, Ns, Ds, Ms, Ls, Hs, Ys, v];
      }
    }
    class O extends y {
      constructor(t3) {
        super(), this.tool = w.UNSPECIFIED, this.toolCallId = "", this.params = { case: void 0 }, this.name = "", this.rawArgs = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamedBackToolCallV2|1 tool #0|2 tool_call_id 9|3 read_semsearch_files_params #1 params|5 ripgrep_search_params #2 params|9 read_file_params #3 params|12 list_dir_params #4 params|13 edit_file_params #5 params|16 file_search_params #6 params|17 semantic_search_full_params #7 params|19 delete_file_params #8 params|20 reapply_params #9 params|23 run_terminal_command_v2_params #10 params|24 fetch_rules_params #11 params|26 web_search_params #12 params|27 mcp_params #13 params|31 search_symbols_params #14 params|41 gotodef_params #15 params|32 background_composer_followup_params #16 params|33 knowledge_base_params #17 params|34 fetch_pull_request_params #18 params|35 deep_search_params #19 params|36 create_diagram_params #20 params|37 fix_lints_params #21 params|38 read_lints_params #22 params|42 task_params #23 params|43 await_task_params #24 params|44 todo_read_params #25 params|45 todo_write_params #26 params|48 edit_file_v2_params #27 params|49 list_dir_v2_params #28 params|61 read_file_v2_params #29 params|62 ripgrep_raw_search_params #30 params|63 glob_file_search_params #31 params|64 create_plan_params #32 params|65 list_mcp_resources_params #33 params|66 read_mcp_resource_params #34 params|67 read_project_params #35 params|68 update_project_params #36 params|69 task_v2_params #37 params|70 call_mcp_tool_params #38 params|71 apply_agent_diff_params #39 params|72 ask_question_params #40 params|73 switch_mode_params #41 params|74 computer_use_params #42 params|75 write_shell_stdin_params #43 params|76 record_screen_params #44 params|77 web_fetch_params #45 params|78 report_bugfix_results_params #46 params|79 mcp_auth_params #47 params|80 get_mcp_tools_params #48 params|81 connect_scm_params #49 params|8 name 9|10 raw_args 9|11 error #50?|50 tool_index 13?|51 model_call_id 9?", w, $t, pt, mt, at, K, nt, Yt, Zt, B, hr, C, Sr, Ir, Mr, Qe, $r, Kr, Wr, tn, nn, an, mn, hn, Dn, On, Gn, F, Vn, Xn, Bn, es, ms, qr, Tr, As, Ss, wn, Nr, E, Es, qs, Ts, i2.LL, o2.zH, Us, Os, $s, Ur, Ks, v];
      }
    }
    class F extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.streamingEdit = { case: void 0 }, this.shouldSendBackLinterErrors = false, this.resultForModel = "", n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileV2Params|1 relative_workspace_path 9|2 contents_after_edit 9?|3 waiting_for_file_contents 8?|4 text #0 streaming_edit|5 code #1 streaming_edit|6 should_send_back_linter_errors 8|7 diff #2?|8 result_for_model 9|9 streaming_content 9?|10 no_codeblock 8?|11 cloud_agent_edit 8?", L, $, z];
      }
    }
    class L extends y {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileV2Params.StreamingEditText|1 text 9"];
      }
    }
    class $ extends y {
      constructor(t3) {
        super(), this.code = "", n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileV2Params.StreamingEditCode|1 code 9"];
      }
    }
    class G extends y {
      constructor(t3) {
        super(), this.fileWasCreated = false, this.linterErrors = [], this.sentBackLinterErrors = false, this.shouldAutoFixLints = false, this.resultForModel = "", this.afterContentId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileV2Result|1 contents_before_edit 9?|9 eol_sequence 9?|11 detected_language 9?|2 file_was_created 8|3 diff #0?|4 rejected 8?|5 linter_errors #1*|6 sent_back_linter_errors 8|8 should_auto_fix_lints 8|7 human_review_v2 #2?|10 result_for_model 9|12 contents_after_edit 9?|13 before_content_id 9?|14 after_content_id 9", z, s2.LinterError, et];
      }
    }
    class H extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileV2Stream"];
      }
    }
    class K extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.language = "", this.blocking = false, this.contents = "", this.lineRanges = [], n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileParams|1 relative_workspace_path 9|2 language 9|4 blocking 8|3 contents 9|5 instructions 9?|12 should_edit_file_fail_for_large_files 8?|6 old_string 9?|7 new_string 9?|8 allow_multiple_matches 8?|10 use_whitespace_insensitive_fallback 8?|11 use_did_you_mean_fuzzy_match 8?|16 gracefully_handle_recoverable_errors 8?|9 line_ranges #0*|13 notebook_cell_idx 5?|14 is_new_cell 8?|15 cell_language 9?|17 edit_category 9?|18 should_eagerly_process_lints 8?", s2.LineRange];
      }
    }
    class V extends y {
      constructor(t3) {
        super(), this.isApplied = false, this.applyFailed = false, this.linterErrors = [], n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileResult|1 diff #0|2 is_applied 8|3 apply_failed 8|4 linter_errors #1*|5 rejected 8?|6 num_matches 5?|7 whitespace_insensitive_fallback_found_match 8?|8 no_match_found_in_line_ranges 8?|11 recoverable_error #2?|9 num_lines_in_file 5?|10 is_subagent_edit 8?|12 diff_became_no_op_due_to_on_save_fixes 8?|13 human_review #3?|14 human_feedback #4?|15 should_eagerly_process_lints 8?|16 human_review_v2 #5?|17 were_all_new_linter_errors_resolved_by_this_edit 8?", z, s2.LinterError, j, Z, tt, et];
      }
    }
    class z extends y {
      constructor(t3) {
        super(), this.chunks = [], this.editor = W.UNSPECIFIED, this.hitTimeout = false, n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileResult.FileDiff|1 chunks #0*|2 editor #1|3 hit_timeout 8", Y, W];
      }
    }
    var W = (0, A.QT)(n2.proto3, _, "EditFileResult.FileDiff.Editor", [[0, "UNSPECIFIED"], [1, "AI"], [2, "HUMAN"]], 1);
    class Y extends y {
      constructor(t3) {
        super(), this.diffString = "", this.oldStart = 0, this.newStart = 0, this.oldLines = 0, this.newLines = 0, this.linesRemoved = 0, this.linesAdded = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileResult.FileDiff.ChunkDiff|1 diff_string 9|2 old_start 5|3 new_start 5|4 old_lines 5|5 new_lines 5|6 lines_removed 5|7 lines_added 5"];
      }
    }
    class j extends y {
      constructor(t3) {
        super(), this.errorType = X.UNSPECIFIED, this.modelMessage = "", n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileResult.RecoverableError|1 error_type #0|2 model_message 9", X];
      }
    }
    var X = (0, A.QT)(n2.proto3, _, "EditFileResult.RecoverableError.RecoverableErrorType", [[0, "UNSPECIFIED"], [1, "SEARCH_STRING_NOT_FOUND"], [2, "AMBIGUOUS_SEARCH_STRING"]], 1);
    class Z extends y {
      constructor(t3) {
        super(), this.isEditAccepted = false, this.textResult = "", this.stopAndGetNewUserInput = false, n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileResult.EditFileHumanReview|1 is_edit_accepted 8|2 text_result 9|3 stop_and_get_new_user_input 8"];
      }
    }
    class tt extends y {
      constructor(t3) {
        super(), this.selectedOption = "", this.feedbackText = "", this.submitFeedbackAsNewMessage = false, this.bubbleId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["EditFileResult.HumanFeedback|1 selected_option 9|2 feedback_text 9|3 submit_feedback_as_new_message 8|4 bubble_id 9"];
      }
    }
    class et extends y {
      constructor(t3) {
        super(), this.selectedOption = "", this.feedbackText = "", this.submitFeedbackAsNewMessage = false, this.bubbleId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["HumanReview|1 selected_option 9|2 feedback_text 9|3 submit_feedback_as_new_message 8|4 bubble_id 9"];
      }
    }
    class rt extends y {
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
        return ["EditFileStream"];
      }
    }
    class nt extends y {
      constructor(t3) {
        super(), this.query = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ToolCallFileSearchParams|1 query 9"];
      }
    }
    class st extends y {
      constructor(t3) {
        super(), this.query = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ToolCallFileSearchStream|1 query 9"];
      }
    }
    class it extends y {
      constructor(t3) {
        super(), this.files = [], this.numResults = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ToolCallFileSearchResult|1 files #0*|2 limit_hit 8?|3 num_results 5", ot];
      }
    }
    class ot extends y {
      constructor(t3) {
        super(), this.uri = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ToolCallFileSearchResult.File|1 uri 9"];
      }
    }
    class at extends y {
      constructor(t3) {
        super(), this.directoryPath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListDirParams|1 directory_path 9"];
      }
    }
    class ut extends y {
      constructor(t3) {
        super(), this.files = [], this.directoryRelativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ListDirResult|1 files #0*|2 directory_relative_workspace_path 9", ct];
      }
    }
    class ct extends y {
      constructor(t3) {
        super(), this.name = "", this.isDirectory = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ListDirResult.File|1 name 9|2 is_directory 8|3 size 3?|4 last_modified #0?|5 num_children 5?|6 num_lines 5?", n2.Timestamp];
      }
    }
    class lt extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ListDirStream"];
      }
    }
    class mt extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.readEntireFile = false, this.fileIsAllowedToBeReadEntirely = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ReadFileParams|1 relative_workspace_path 9|2 read_entire_file 8|3 start_line_one_indexed 5?|4 end_line_one_indexed_inclusive 5?|5 file_is_allowed_to_be_read_entirely 8|6 max_lines 5?|7 max_chars 5?|8 min_lines 5?"];
      }
    }
    class dt extends y {
      constructor(t3) {
        super(), this.contents = "", this.didDowngradeToLineRange = false, this.didShortenLineRange = false, this.didSetDefaultLineRange = false, this.relativeWorkspacePath = "", this.didShortenCharRange = false, this.matchingCursorRules = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ReadFileResult|1 contents 9|2 did_downgrade_to_line_range 8|3 did_shorten_line_range 8|4 did_set_default_line_range 8|5 full_file_contents 9?|6 outline 9?|7 start_line_one_indexed 5?|8 end_line_one_indexed_inclusive 5?|9 relative_workspace_path 9|10 did_shorten_char_range 8|11 read_full_file 8?|12 total_lines 5?|13 matching_cursor_rules #0*|14 file_git_context #1", s2.CursorRule, s2.FileGit];
      }
    }
    class ft extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ReadFileStream"];
      }
    }
    class pt extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchParams|1 options #0|2 pattern_info #1", At, ht];
      }
    }
    class ht extends y {
      constructor(t3) {
        super(), this.pattern = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchParams.IPatternInfoProto|1 pattern 9|2 is_reg_exp 8?|3 is_word_match 8?|4 word_separators 9?|5 is_multiline 8?|6 is_unicode 8?|7 is_case_sensitive 8?|8 notebook_info #0|9 pattern_was_escaped 8?", gt];
      }
    }
    class gt extends y {
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
        return ["RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto|1 is_in_notebook_markdown_input 8?|2 is_in_notebook_markdown_preview 8?|3 is_in_notebook_cell_input 8?|4 is_in_notebook_cell_output 8?"];
      }
    }
    class At extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto|1 preview_options #0|2 file_encoding 9?|3 surrounding_context 5?|4 is_smart_case 8?|5 notebook_search_config #1|6 exclude_pattern #2|7 include_pattern #3|8 expand_patterns 8?|9 max_results 5?|10 max_file_size 5?|11 disregard_ignore_files 8?|12 disregard_global_ignore_files 8?|13 disregard_parent_ignore_files 8?|14 disregard_exclude_settings 8?|15 disregard_search_exclude_settings 8?|16 ignore_symlinks 8?|17 only_open_editors 8?|18 only_file_scheme 8?|19 reason 9?|20 extra_file_resources #4", Jt, Bt, yt, St, _t];
      }
    }
    class _t extends y {
      constructor(t3) {
        super(), this.extraFileResources = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto|1 extra_file_resources 9*"];
      }
    }
    class yt extends y {
      constructor(t3) {
        super(), this.excludePattern = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto|1 exclude_pattern #0*", wt];
      }
    }
    class wt extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto|1 uri 9?|2 pattern #0", St];
      }
    }
    class St extends y {
      constructor(t3) {
        super(), this.patterns = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto|1 pattern 9?|2 patterns 9*"];
      }
    }
    class Jt extends y {
      constructor(t3) {
        super(), this.matchLines = 0, this.charsPerLine = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto|1 match_lines 5|2 chars_per_line 5"];
      }
    }
    class Bt extends y {
      constructor(t3) {
        super(), this.includeMarkupInput = false, this.includeMarkupPreview = false, this.includeCodeInput = false, this.includeOutput = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto|1 include_markup_input 8|2 include_markup_preview 8|3 include_code_input 8|4 include_output 8"];
      }
    }
    class Et extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResult|1 internal #0", It];
      }
    }
    class It extends y {
      constructor(t3) {
        super(), this.results = [], this.messages = [], this.stats = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new It().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new It().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new It().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(It, t3, e3);
      }
      static $() {
        return ["RipgrepSearchResultInternal|1 results #0*|2 exit #1?|3 limit_hit 8?|4 messages #2*|5 file_search_stats #3 stats|6 text_search_stats #4 stats", kt, bt, xt, Nt, Ut];
      }
    }
    var Ct = (0, A.QT)(n2.proto3, _, "RipgrepSearchResultInternal.TextSearchCompleteMessageType", [[0, "UNSPECIFIED"], [1, "INFORMATION"], [2, "WARNING"]], 1), bt = (0, A.QT)(n2.proto3, _, "RipgrepSearchResultInternal.SearchCompletionExitCode", [[0, "UNSPECIFIED"], [1, "NORMAL"], [2, "NEW_SEARCH_STARTED"]], 1);
    class kt extends y {
      constructor(t3) {
        super(), this.resource = "", this.results = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kt, t3, e3);
      }
      static $() {
        return ["RipgrepSearchResultInternal.IFileMatch|1 resource 9|2 results #0*", vt];
      }
    }
    class vt extends y {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vt, t3, e3);
      }
      static $() {
        return ["RipgrepSearchResultInternal.ITextSearchResult|1 match #0 result|2 context #1 result", qt, Rt];
      }
    }
    class qt extends y {
      constructor(t3) {
        super(), this.rangeLocations = [], this.previewText = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResultInternal.ITextSearchMatch|1 uri 9?|2 range_locations #0*|3 preview_text 9|4 webview_index 5?|5 cell_fragment 9?", Pt];
      }
    }
    class Rt extends y {
      constructor(t3) {
        super(), this.text = "", this.lineNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResultInternal.ITextSearchContext|1 uri 9?|2 text 9|3 line_number 5"];
      }
    }
    class Pt extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResultInternal.ISearchRangeSetPairing|1 source #0|2 preview #0", Tt];
      }
    }
    class Tt extends y {
      constructor(t3) {
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResultInternal.ISearchRange|1 start_line_number 5|2 start_column 5|3 end_line_number 5|4 end_column 5"];
      }
    }
    class xt extends y {
      constructor(t3) {
        super(), this.text = "", this.type = Ct.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResultInternal.ITextSearchCompleteMessage|1 text 9|2 type #0|3 trusted 8?", Ct];
      }
    }
    class Nt extends y {
      constructor(t3) {
        super(), this.fromCache = false, this.detailStats = { case: void 0 }, this.resultCount = 0, this.type = Dt.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResultInternal.IFileSearchStats|1 from_cache 8|2 search_engine_stats #0 detail_stats|3 cached_search_stats #1 detail_stats|4 file_search_provider_stats #2 detail_stats|5 result_count 5|6 type #3|7 sorting_time 5?", Mt, Ot, Ft, Dt];
      }
    }
    var Dt = (0, A.QT)(n2.proto3, _, "RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [[0, "UNSPECIFIED"], [1, "FILE_SEARCH_PROVIDER"], [2, "SEARCH_PROCESS"]], 1);
    class Ut extends y {
      constructor(t3) {
        super(), this.type = Qt.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResultInternal.ITextSearchStats|1 type #0", Qt];
      }
    }
    var Qt = (0, A.QT)(n2.proto3, _, "RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [[0, "UNSPECIFIED"], [1, "TEXT_SEARCH_PROVIDER"], [2, "SEARCH_PROCESS"], [3, "AI_TEXT_SEARCH_PROVIDER"]], 1);
    class Mt extends y {
      constructor(t3) {
        super(), this.fileWalkTime = 0, this.directoriesWalked = 0, this.filesWalked = 0, this.cmdTime = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResultInternal.ISearchEngineStats|1 file_walk_time 5|2 directories_walked 5|3 files_walked 5|4 cmd_time 5|5 cmd_result_count 5?"];
      }
    }
    class Ot extends y {
      constructor(t3) {
        super(), this.cacheWasResolved = false, this.cacheLookupTime = 0, this.cacheFilterTime = 0, this.cacheEntryCount = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResultInternal.ICachedSearchStats|1 cache_was_resolved 8|2 cache_lookup_time 5|3 cache_filter_time 5|4 cache_entry_count 5"];
      }
    }
    class Ft extends y {
      constructor(t3) {
        super(), this.providerTime = 0, this.postProcessTime = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchResultInternal.IFileSearchProviderStats|1 provider_time 5|2 post_process_time 5"];
      }
    }
    class Lt extends y {
      constructor(t3) {
        super(), this.query = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RipgrepSearchStream|1 query 9"];
      }
    }
    class $t extends y {
      constructor(t3) {
        super(), this.codeResults = [], this.query = "", this.prReferences = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ReadSemsearchFilesParams|1 repository_info #0|2 code_results #1*|3 query 9|4 pr_references #2*|5 pr_search_on 8?", l.bn, l.PT, Zr];
      }
    }
    class Gt extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.missingReason = Ht.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["MissingFile|1 relative_workspace_path 9|2 missing_reason #0|3 num_lines 5?", Ht];
      }
    }
    var Ht = (0, A.QT)(n2.proto3, _, "MissingFile.MissingReason", [[0, "UNSPECIFIED"], [1, "TOO_LARGE"], [2, "NOT_FOUND"]], 1);
    class Kt extends y {
      constructor(t3) {
        super(), this.knowledge = "", this.title = "", n2.proto3.util.initPartial(t3, this);
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
        return ["Knowledge|1 knowledge 9|2 title 9"];
      }
    }
    class Vt extends y {
      constructor(t3) {
        super(), this.sha = "", this.fullPrContents = "", this.score = 0, this.changedFiles = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ToolPullRequestResult|1 sha 9|2 full_pr_contents 9|3 score 2|4 title 9?|5 summary 9?|6 pr_number 13?|7 changed_files 9*|8 author 9?|9 date 9?"];
      }
    }
    class zt extends y {
      constructor(t3) {
        super(), this.codeResults = [], this.allFiles = [], this.missingFiles = [], this.knowledgeResults = [], this.prResults = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ReadSemsearchFilesResult|1 code_results #0*|2 all_files #1*|3 missing_files #2*|4 knowledge_results #3*|5 pr_results #4*|6 git_remote_url 9?|7 pr_hydration_timed_out 8?", l.PT, s2.File, Gt, Kt, Vt];
      }
    }
    class Wt extends y {
      constructor(t3) {
        super(), this.numFiles = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ReadSemsearchFilesStream|1 num_files 5"];
      }
    }
    class Yt extends y {
      constructor(t3) {
        super(), this.query = "", this.topK = 0, this.prReferences = [], this.codeResults = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SemanticSearchFullParams|1 repository_info #0|2 query 9|3 include_pattern 9?|4 exclude_pattern 9?|5 top_k 5|6 pr_references #1*|7 pr_search_on 8?|8 explanation 9?|9 code_results #2*", l.bn, Zr, l.PT];
      }
    }
    class jt extends y {
      constructor(t3) {
        super(), this.codeResults = [], this.allFiles = [], this.missingFiles = [], this.knowledgeResults = [], this.prResults = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SemanticSearchFullResult|1 code_results #0*|2 all_files #1*|3 missing_files #2*|4 knowledge_results #3*|5 pr_results #4*|6 git_remote_url 9?|7 pr_hydration_timed_out 8?", l.PT, s2.File, Gt, Kt, Vt];
      }
    }
    class Xt extends y {
      constructor(t3) {
        super(), this.numFiles = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["SemanticSearchFullStream|1 num_files 5"];
      }
    }
    class Zt extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DeleteFileParams|1 relative_workspace_path 9"];
      }
    }
    class te extends y {
      constructor(t3) {
        super(), this.rejected = false, this.fileNonExistent = false, this.fileDeletedSuccessfully = false, n2.proto3.util.initPartial(t3, this);
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
        return ["DeleteFileResult|1 rejected 8|2 file_non_existent 8|3 file_deleted_successfully 8"];
      }
    }
    class ee extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DeleteFileStream|1 relative_workspace_path 9"];
      }
    }
    class re extends y {
      constructor(t3) {
        super(), this.tool = S.UNSPECIFIED, this.params = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["BuiltinToolCall|1 tool #0|2 search_params #1 params|3 read_chunk_params #2 params|4 gotodef_params #3 params|5 edit_params #4 params|6 undo_edit_params #5 params|7 end_params #6 params|8 new_file_params #7 params|9 add_test_params #8 params|10 run_test_params #9 params|11 delete_test_params #10 params|12 save_file_params #11 params|13 get_tests_params #12 params|14 get_symbols_params #13 params|15 semantic_search_params #14 params|16 get_project_structure_params #15 params|17 create_rm_files_params #16 params|18 run_terminal_commands_params #17 params|19 new_edit_params #18 params|20 read_with_linter_params #19 params|21 add_ui_step_params #20 params|23 read_semsearch_files_params #21 params|26 delete_file_params #22 params|22 tool_call_id 9?", S, Ie, ve, Qe, Ge, Re, Pe, ye, We, Ze, sr, or, er, ur, we, ge, pe, de, Le, le, se, $t, Zt];
      }
    }
    class ne extends y {
      constructor(t3) {
        super(), this.tool = S.UNSPECIFIED, this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["BuiltinToolResult|1 tool #0|2 search_result #1 result|3 read_chunk_result #2 result|4 gotodef_result #3 result|5 edit_result #4 result|6 undo_edit_result #5 result|7 end_result #6 result|8 new_file_result #7 result|9 add_test_result #8 result|10 run_test_result #9 result|11 delete_test_result #10 result|12 save_file_result #11 result|13 get_tests_result #12 result|14 get_symbols_result #13 result|15 semantic_search_result #14 result|16 get_project_structure_result #15 result|17 create_rm_files_result #16 result|18 run_terminal_commands_result #17 result|19 new_edit_result #18 result|20 read_with_linter_result #19 result|21 add_ui_step_result #20 result|22 read_semsearch_files_result #21 result|24 delete_file_result #22 result", S, ke, qe, Oe, Ke, xe, Ne, Te, Ye, tr, ir, ar, rr, lr, Be, Ae, he, fe, $e, me, ae, zt, te];
      }
    }
    class se extends y {
      constructor(t3) {
        super(), this.conversationId = "", this.step = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["AddUiStepParams|1 conversation_id 9|2 search_results #0 step", oe];
      }
    }
    class ie extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["AddUiStepParams.SearchResult|1 relative_workspace_path 9"];
      }
    }
    class oe extends y {
      constructor(t3) {
        super(), this.searchResults = [], n2.proto3.util.initPartial(t3, this);
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
        return ["AddUiStepParams.SearchResults|1 search_results #0*", ie];
      }
    }
    class ae extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["AddUiStepResult"];
      }
    }
    class ue extends y {
      constructor(t3) {
        super(), this.toolCall = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ToolCall|1 builtin_tool_call #0 tool_call|2 custom_tool_call #1 tool_call", re, De];
      }
    }
    class ce extends y {
      constructor(t3) {
        super(), this.toolResult = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ce().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ce().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ce().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ce, t3, e3);
      }
      static $() {
        return ["ToolResult|1 builtin_tool_result #0 tool_result|2 custom_tool_result #1 tool_result|3 error_tool_result #2 tool_result", ne, Ue, Fe];
      }
    }
    class le extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReadWithLinterParams|1 relative_workspace_path 9"];
      }
    }
    class me extends y {
      constructor(t3) {
        super(), this.contents = "", this.diagnostics = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ReadWithLinterResult|1 contents 9|2 diagnostics #0*", s2.Diagnostic];
      }
    }
    class de extends y {
      constructor(t3) {
        super(), this.commands = [], this.commandsUuid = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new de().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new de().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new de().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(de, t3, e3);
      }
      static $() {
        return ["RunTerminalCommandsParams|1 commands 9*|2 commands_uuid 9"];
      }
    }
    class fe extends y {
      constructor(t3) {
        super(), this.outputs = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RunTerminalCommandsResult|1 outputs 9*"];
      }
    }
    class pe extends y {
      constructor(t3) {
        super(), this.removedFilePaths = [], this.createdFilePaths = [], this.createdDirectoryPaths = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CreateRmFilesParams|1 removed_file_paths 9*|2 created_file_paths 9*|3 created_directory_paths 9*"];
      }
    }
    class he extends y {
      constructor(t3) {
        super(), this.createdFilePaths = [], this.removedFilePaths = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CreateRmFilesResult|1 created_file_paths 9*|2 removed_file_paths 9*"];
      }
    }
    class ge extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetProjectStructureParams"];
      }
    }
    class Ae extends y {
      constructor(t3) {
        super(), this.files = [], this.rootWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ae().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ae().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ae().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ae, t3, e3);
      }
      static $() {
        return ["GetProjectStructureResult|1 files #0*|2 root_workspace_path 9", _e];
      }
    }
    class _e extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.outline = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _e().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _e().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _e().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_e, t3, e3);
      }
      static $() {
        return ["GetProjectStructureResult.File|1 relative_workspace_path 9|2 outline 9"];
      }
    }
    class ye extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["NewFileParams|1 relative_workspace_path 9"];
      }
    }
    class we extends y {
      constructor(t3) {
        super(), this.query = "", this.topK = 0, this.grabWholeFile = false, n2.proto3.util.initPartial(t3, this);
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
        return ["SemanticSearchParams|1 query 9|2 include_pattern 9?|3 exclude_pattern 9?|4 top_k 5|5 index_id 9?|6 grab_whole_file 8"];
      }
    }
    class Se extends y {
      constructor(t3) {
        super(), this.startLine = 0, this.startCharacter = 0, this.endLine = 0, this.endCharacter = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["Range|1 start_line 5|2 start_character 5|3 end_line 5|4 end_character 5"];
      }
    }
    class Je extends y {
      constructor(t3) {
        super(), this.start = 0, this.end = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Je().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Je().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Je().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Je, t3, e3);
      }
      static $() {
        return ["MatchRange|1 start 5|2 end 5"];
      }
    }
    class Be extends y {
      constructor(t3) {
        super(), this.results = [], this.files = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Be().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Be().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Be().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Be, t3, e3);
      }
      static $() {
        return ["SemanticSearchResult|1 results #0*|2 files 9,9", Ee];
      }
    }
    class Ee extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.score = 0, this.content = "", this.detailedLines = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SemanticSearchResult.Item|1 relative_workspace_path 9|2 score 2|3 content 9|4 range #0|5 original_content 9?|6 detailed_lines #1*", s2.SimpleRange, s2.DetailedLine];
      }
    }
    class Ie extends y {
      constructor(t3) {
        super(), this.query = "", this.regex = false, this.includePattern = "", this.excludePattern = "", this.filenameSearch = false, n2.proto3.util.initPartial(t3, this);
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
        return ["SearchParams|1 query 9|2 regex 8|3 include_pattern 9|4 exclude_pattern 9|5 filename_search 8"];
      }
    }
    class Ce extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.numMatches = 0, this.potentiallyRelevantLines = [], this.cropped = false, n2.proto3.util.initPartial(t3, this);
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
        return ["SearchToolFileSearchResult|1 relative_workspace_path 9|2 num_matches 5|3 potentially_relevant_lines #0*|4 cropped 8", be];
      }
    }
    class be extends y {
      constructor(t3) {
        super(), this.lineNumber = 0, this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SearchToolFileSearchResult.Line|1 line_number 5|2 text 9"];
      }
    }
    class ke extends y {
      constructor(t3) {
        super(), this.fileResults = [], this.numTotalMatches = 0, this.numTotalMatchedFiles = 0, this.numTotalMayBeIncomplete = false, this.filesOnly = false, n2.proto3.util.initPartial(t3, this);
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
        return ["SearchResult|1 file_results #0*|2 num_total_matches 5|3 num_total_matched_files 5|4 num_total_may_be_incomplete 8|5 files_only 8", Ce];
      }
    }
    class ve extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ReadChunkParams|1 relative_workspace_path 9|2 start_line_number 5|3 num_lines 5?"];
      }
    }
    class qe extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.totalNumLines = 0, this.cropped = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ReadChunkResult|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 total_num_lines 5|5 cropped 8"];
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
        return ["UndoEditParams"];
      }
    }
    class Pe extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["EndParams"];
      }
    }
    class Te extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.fileTotalLines = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["NewFileResult|1 relative_workspace_path 9|2 file_total_lines 5"];
      }
    }
    class xe extends y {
      constructor(t3) {
        super(), this.feedback = [], this.relativeWorkspacePath = "", this.contextStartLineNumber = 0, this.contextLines = [], this.contextTotalNumLines = 0, this.fileTotalLines = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["UndoEditResult|1 feedback 9*|4 relative_workspace_path 9|2 context_start_line_number 5|3 context_lines 9*|5 context_total_num_lines 5|6 file_total_lines 5"];
      }
    }
    class Ne extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["EndResult"];
      }
    }
    class De extends y {
      constructor(t3) {
        super(), this.toolId = "", this.params = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CustomToolCall|1 tool_id 9|2 params 9"];
      }
    }
    class Ue extends y {
      constructor(t3) {
        super(), this.toolId = "", this.result = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CustomToolResult|1 tool_id 9|2 result 9"];
      }
    }
    class Qe extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.symbol = "", this.startLine = 0, this.endLine = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["GotodefParams|1 relative_workspace_path 9|2 symbol 9|3 start_line 5|4 end_line 5"];
      }
    }
    class Me extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.startLine = 0, this.endLine = 0, this.codeContextLines = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GotodefDefinition|1 relative_workspace_path 9|2 fully_qualified_name 9?|3 symbol_kind 9?|4 start_line 5|5 end_line 5|6 code_context_lines 9*"];
      }
    }
    class Oe extends y {
      constructor(t3) {
        super(), this.definitions = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GotodefResult|1 definitions #0*", Me];
      }
    }
    class Fe extends y {
      constructor(t3) {
        super(), this.errorMessage = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ErrorToolResult|1 error_message 9"];
      }
    }
    class Le extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.text = "", this.editId = "", this.firstEdit = false, n2.proto3.util.initPartial(t3, this);
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
        return ["NewEditParams|1 relative_workspace_path 9|2 start_line_number 5?|3 end_line_number 5?|4 text 9|5 edit_id 9|6 first_edit 8"];
      }
    }
    class $e extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $e().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $e().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $e().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($e, t3, e3);
      }
      static $() {
        return ["NewEditResult"];
      }
    }
    class Ge extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.replaceNumLines = 0, this.newLines = [], this.editId = "", this.frontendEditType = He.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ge().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ge().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ge().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ge, t3, e3);
      }
      static $() {
        return ["EditParams|1 relative_workspace_path 9|2 line_number 5?|3 replace_num_lines 5|4 new_lines 9*|7 replace_whole_file 8?|5 edit_id 9|6 frontend_edit_type #0|8 auto_fix_all_linter_errors_in_file 8?", He];
      }
    }
    var He = (0, A.QT)(n2.proto3, _, "EditParams.FrontendEditType", [[0, "UNSPECIFIED"], [1, "INLINE_DIFFS"], [2, "SIMPLE"]], 1);
    class Ke extends y {
      constructor(t3) {
        super(), this.feedback = [], this.contextStartLineNumber = 0, this.contextLines = [], this.file = "", this.fileTotalLines = 0, this.structuredFeedback = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ke().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ke().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ke().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ke, t3, e3);
      }
      static $() {
        return ["EditResult|1 feedback 9*|2 context_start_line_number 5|3 context_lines 9*|4 file 9|5 file_total_lines 5|6 structured_feedback #0*", ze];
      }
    }
    class Ve extends y {
      constructor(t3) {
        super(), this.message = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ve().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ve().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ve().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ve, t3, e3);
      }
      static $() {
        return ["EditResult.RelatedInformation|1 message 9|2 start_line_number 5|3 end_line_number 5|4 relative_workspace_path 9"];
      }
    }
    class ze extends y {
      constructor(t3) {
        super(), this.message = "", this.severity = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relatedInformation = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ze().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ze().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ze().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ze, t3, e3);
      }
      static $() {
        return ["EditResult.Feedback|1 message 9|2 severity 9|3 start_line_number 5|4 end_line_number 5|5 related_information #0*", Ve];
      }
    }
    class We extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.testName = "", this.testCode = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new We().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new We().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new We().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(We, t3, e3);
      }
      static $() {
        return ["AddTestParams|1 relative_workspace_path 9|2 test_name 9|3 test_code 9"];
      }
    }
    class Ye extends y {
      constructor(t3) {
        super(), this.feedback = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ye().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ye().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ye().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ye, t3, e3);
      }
      static $() {
        return ["AddTestResult|1 feedback #0*", Xe];
      }
    }
    class je extends y {
      constructor(t3) {
        super(), this.message = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new je().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new je().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new je().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(je, t3, e3);
      }
      static $() {
        return ["AddTestResult.RelatedInformation|1 message 9|2 start_line_number 5|3 end_line_number 5|4 relative_workspace_path 9"];
      }
    }
    class Xe extends y {
      constructor(t3) {
        super(), this.message = "", this.severity = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relatedInformation = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xe, t3, e3);
      }
      static $() {
        return ["AddTestResult.Feedback|1 message 9|2 severity 9|3 start_line_number 5|4 end_line_number 5|5 related_information #0*", je];
      }
    }
    class Ze extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ze().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ze().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ze().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ze, t3, e3);
      }
      static $() {
        return ["RunTestParams|1 relative_workspace_path 9|2 test_name 9?"];
      }
    }
    class tr extends y {
      constructor(t3) {
        super(), this.result = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tr, t3, e3);
      }
      static $() {
        return ["RunTestResult|1 result 9"];
      }
    }
    class er extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new er().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new er().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new er().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(er, t3, e3);
      }
      static $() {
        return ["GetTestsParams|1 relative_workspace_path 9"];
      }
    }
    class rr extends y {
      constructor(t3) {
        super(), this.tests = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rr, t3, e3);
      }
      static $() {
        return ["GetTestsResult|1 tests #0*", nr];
      }
    }
    class nr extends y {
      constructor(t3) {
        super(), this.name = "", this.lines = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nr, t3, e3);
      }
      static $() {
        return ["GetTestsResult.Test|1 name 9|2 lines 9*"];
      }
    }
    class sr extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sr, t3, e3);
      }
      static $() {
        return ["DeleteTestParams|1 relative_workspace_path 9|2 test_name 9?"];
      }
    }
    class ir extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ir().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ir().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ir().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ir, t3, e3);
      }
      static $() {
        return ["DeleteTestResult"];
      }
    }
    class or extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new or().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new or().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new or().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(or, t3, e3);
      }
      static $() {
        return ["SaveFileParams|1 relative_workspace_path 9"];
      }
    }
    class ar extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ar().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ar().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ar().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ar, t3, e3);
      }
      static $() {
        return ["SaveFileResult"];
      }
    }
    class ur extends y {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.includeChildren = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ur().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ur().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ur().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ur, t3, e3);
      }
      static $() {
        return ["GetSymbolsParams|1 relative_workspace_path 9|2 line_range #0?|3 include_children 8", cr];
      }
    }
    class cr extends y {
      constructor(t3) {
        super(), this.startLineNumber = 0, this.endLineNumberInclusive = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cr, t3, e3);
      }
      static $() {
        return ["GetSymbolsParams.LineRange|1 start_line_number 5|2 end_line_number_inclusive 5"];
      }
    }
    class lr extends y {
      constructor(t3) {
        super(), this.symbols = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lr, t3, e3);
      }
      static $() {
        return ["GetSymbolsResult|1 symbols #0*", s2.DocumentSymbol];
      }
    }
    class mr extends y {
      constructor(t3) {
        super(), this.parsingFailed = false, this.executableCommands = [], this.hasRedirects = false, this.hasCommandSubstitution = false, this.redirects = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mr, t3, e3);
      }
      static $() {
        return ["ShellCommandParsingResult|1 parsing_failed 8|2 executable_commands #0*|3 has_redirects 8|4 has_command_substitution 8|5 all_redirects_are_dev_null 8?|6 redirects #1*", fr, pr];
      }
    }
    class dr extends y {
      constructor(t3) {
        super(), this.type = "", this.value = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dr, t3, e3);
      }
      static $() {
        return ["ShellCommandParsingResult.ExecutableCommandArg|1 type 9|2 value 9"];
      }
    }
    class fr extends y {
      constructor(t3) {
        super(), this.name = "", this.args = [], this.fullText = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fr, t3, e3);
      }
      static $() {
        return ["ShellCommandParsingResult.ExecutableCommand|1 name 9|2 args #0*|3 full_text 9", dr];
      }
    }
    class pr extends y {
      constructor(t3) {
        super(), this.operator = "", this.destinationFds = [], this.targetNodeType = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pr, t3, e3);
      }
      static $() {
        return ["ShellCommandParsingResult.Redirect|1 operator 9|2 destination_fds 13*|3 target_node_type 9|4 target_text 9?"];
      }
    }
    class hr extends y {
      constructor(t3) {
        super(), this.command = "", this.isBackground = false, this.requireUserApproval = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hr, t3, e3);
      }
      static $() {
        return ["RunTerminalCommandV2Params|1 command 9|2 cwd 9?|3 new_session 8?|4 options #0?|5 is_background 8|6 require_user_approval 8|7 parsing_result #1?|8 idle_timeout_seconds 5?|9 requested_sandbox_policy #2?|10 file_output_threshold_bytes 3?|11 command_description 9?|12 classifier_result #3?", gr, mr, m.Mw, d.E4];
      }
    }
    class gr extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gr, t3, e3);
      }
      static $() {
        return ["RunTerminalCommandV2Params.ExecutionOptions|1 timeout 5?|2 skip_ai_check 8?|3 command_run_timeout_ms 5?|4 command_change_check_interval_ms 5?|5 ai_finish_check_max_attempts 5?|6 ai_finish_check_interval_ms 5?|7 delayer_interval_ms 5?|8 ai_check_for_hangs 8?"];
      }
    }
    class Ar extends y {
      constructor(t3) {
        super(), this.filePath = "", this.sizeBytes = n2.protoInt64.zero, this.lineCount = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ar().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ar().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ar().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ar, t3, e3);
      }
      static $() {
        return ["OutputLocation|1 file_path 9|2 size_bytes 3|3 line_count 3"];
      }
    }
    class _r extends y {
      constructor(t3) {
        super(), this.output = "", this.exitCode = 0, this.poppedOutIntoBackground = false, this.isRunningInBackground = false, this.notInterrupted = false, this.resultingWorkingDirectory = "", this.didUserChange = false, this.endedReason = J.UNSPECIFIED, this.outputRaw = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _r().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _r().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _r().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_r, t3, e3);
      }
      static $() {
        return ["RunTerminalCommandV2Result|1 output 9|2 exit_code 5|3 rejected 8?|4 popped_out_into_background 8|5 is_running_in_background 8|6 not_interrupted 8|7 resulting_working_directory 9|8 did_user_change 8|9 ended_reason #0|10 exit_code_v2 5?|11 updated_command 9?|12 output_raw 9|13 human_review_v2 #1?|14 effective_sandbox_policy #2?|15 terminal_instance_id 5?|16 output_location #3?|17 terminal_instance_path 9?|18 background_shell_id 13?", J, et, m.Mw, Ar];
      }
    }
    class yr extends y {
      constructor(t3) {
        super(), this.command = "", this.isBackground = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yr, t3, e3);
      }
      static $() {
        return ["RunTerminalCommandV2Stream|1 command 9|2 is_background 8|7 parsing_result #0?|8 idle_timeout_seconds 5?|9 requested_sandbox_policy #1?", mr, m.Mw];
      }
    }
    class wr extends y {
      constructor(t3) {
        super(), this.ruleNames = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wr, t3, e3);
      }
      static $() {
        return ["FetchRulesStream|1 rule_names 9*"];
      }
    }
    class Sr extends y {
      constructor(t3) {
        super(), this.searchTerm = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sr, t3, e3);
      }
      static $() {
        return ["WebSearchParams|1 search_term 9"];
      }
    }
    class Jr extends y {
      constructor(t3) {
        super(), this.references = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jr, t3, e3);
      }
      static $() {
        return ["WebSearchResult|1 references #0*|2 is_final 8?|3 rejected 8?", Br];
      }
    }
    class Br extends y {
      constructor(t3) {
        super(), this.title = "", this.url = "", this.chunk = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Br().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Br().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Br().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Br, t3, e3);
      }
      static $() {
        return ["WebSearchResult.WebReference|1 title 9|2 url 9|3 chunk 9"];
      }
    }
    class Er extends y {
      constructor(t3) {
        super(), this.searchTerm = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Er().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Er().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Er().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Er, t3, e3);
      }
      static $() {
        return ["WebSearchStream|1 search_term 9"];
      }
    }
    class Ir extends y {
      constructor(t3) {
        super(), this.tools = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ir().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ir().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ir().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ir, t3, e3);
      }
      static $() {
        return ["MCPParams|1 tools #0*|2 file_output_threshold_bytes 3?", Cr];
      }
    }
    class Cr extends y {
      constructor(t3) {
        super(), this.name = "", this.description = "", this.parameters = "", this.serverName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cr, t3, e3);
      }
      static $() {
        return ["MCPParams.Tool|1 name 9|2 description 9|3 parameters 9|4 server_name 9|5 transcript_display #0?", br];
      }
    }
    class br extends y {
      constructor(t3) {
        super(), this.loading = "", this.success = "", this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new br().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new br().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new br().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(br, t3, e3);
      }
      static $() {
        return ["MCPParams.TranscriptDisplay|1 loading 9|2 success 9|3 error 9"];
      }
    }
    class kr extends y {
      constructor(t3) {
        super(), this.selectedTool = "", this.result = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kr, t3, e3);
      }
      static $() {
        return ["MCPResult|1 selected_tool 9|2 result 9"];
      }
    }
    class vr extends y {
      constructor(t3) {
        super(), this.tools = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vr, t3, e3);
      }
      static $() {
        return ["MCPStream|1 tools #0*", Cr];
      }
    }
    class qr extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qr, t3, e3);
      }
      static $() {
        return ["ListMcpResourcesParams|1 server 9?"];
      }
    }
    class Rr extends y {
      constructor(t3) {
        super(), this.resources = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rr, t3, e3);
      }
      static $() {
        return ["ListMcpResourcesResult|1 resources #0*", Pr];
      }
    }
    class Pr extends y {
      constructor(t3) {
        super(), this.uri = "", this.server = "", this.annotations = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pr, t3, e3);
      }
      static $() {
        return ["ListMcpResourcesResult.MCPResource|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 server 9|6 annotations 9,9"];
      }
    }
    class Tr extends y {
      constructor(t3) {
        super(), this.server = "", this.uri = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tr, t3, e3);
      }
      static $() {
        return ["ReadMcpResourceParams|1 server 9|2 uri 9|3 download_path 9?"];
      }
    }
    class xr extends y {
      constructor(t3) {
        super(), this.uri = "", this.content = { case: void 0 }, this.annotations = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xr, t3, e3);
      }
      static $() {
        return ["ReadMcpResourceResult|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 text 9 content|6 blob 12 content|7 annotations 9,9"];
      }
    }
    class Nr extends y {
      constructor(t3) {
        super(), this.server = "", this.toolName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nr, t3, e3);
      }
      static $() {
        return ["CallMcpToolParams|1 server 9|2 tool_name 9|3 tool_args #0", n2.Struct];
      }
    }
    class Dr extends y {
      constructor(t3) {
        super(), this.server = "", this.toolName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dr, t3, e3);
      }
      static $() {
        return ["CallMcpToolResult|1 server 9|2 tool_name 9|3 result #0", n2.Struct];
      }
    }
    class Ur extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ur().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ur().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ur().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ur, t3, e3);
      }
      static $() {
        return ["GetMcpToolsParams|1 server 9?|2 tool_name 9?|3 pattern 9?"];
      }
    }
    class Qr extends y {
      constructor(t3) {
        super(), this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qr, t3, e3);
      }
      static $() {
        return ["GetMcpToolsResult|1 content 9|2 output_file_path 9?"];
      }
    }
    class Mr extends y {
      constructor(t3) {
        super(), this.query = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mr, t3, e3);
      }
      static $() {
        return ["SearchSymbolsParams|1 query 9"];
      }
    }
    class Or extends y {
      constructor(t3) {
        super(), this.matches = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Or().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Or().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Or().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Or, t3, e3);
      }
      static $() {
        return ["SearchSymbolsResult|1 matches #0*|2 rejected 8?", Fr];
      }
    }
    class Fr extends y {
      constructor(t3) {
        super(), this.name = "", this.uri = "", this.secondaryText = "", this.labelMatches = [], this.descriptionMatches = [], this.score = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fr, t3, e3);
      }
      static $() {
        return ["SearchSymbolsResult.SymbolMatch|1 name 9|2 uri 9|3 range #0|4 secondary_text 9|5 label_matches #1*|6 description_matches #1*|7 score 1", Se, Je];
      }
    }
    class Lr extends y {
      constructor(t3) {
        super(), this.query = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lr, t3, e3);
      }
      static $() {
        return ["SearchSymbolsStream|1 query 9"];
      }
    }
    class $r extends y {
      constructor(t3) {
        super(), this.proposedFollowup = "", this.bcId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $r().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $r().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $r().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($r, t3, e3);
      }
      static $() {
        return ["BackgroundComposerFollowupParams|1 proposed_followup 9|2 bc_id 9"];
      }
    }
    class Gr extends y {
      constructor(t3) {
        super(), this.proposedFollowup = "", this.isSent = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gr, t3, e3);
      }
      static $() {
        return ["BackgroundComposerFollowupResult|1 proposed_followup 9|2 is_sent 8"];
      }
    }
    class Hr extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hr, t3, e3);
      }
      static $() {
        return ["BackgroundComposerFollowupStream"];
      }
    }
    class Kr extends y {
      constructor(t3) {
        super(), this.knowledgeToStore = "", this.title = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kr, t3, e3);
      }
      static $() {
        return ["KnowledgeBaseParams|1 knowledge_to_store 9|2 title 9|3 existing_knowledge_id 9?|4 action 9?"];
      }
    }
    class Vr extends y {
      constructor(t3) {
        super(), this.success = false, this.confirmationMessage = "", this.id = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vr, t3, e3);
      }
      static $() {
        return ["KnowledgeBaseResult|1 success 8|2 confirmation_message 9|3 id 9"];
      }
    }
    class zr extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zr, t3, e3);
      }
      static $() {
        return ["KnowledgeBaseStream"];
      }
    }
    class Wr extends y {
      constructor(t3) {
        super(), this.pullNumberOrCommitHash = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wr, t3, e3);
      }
      static $() {
        return ["FetchPullRequestParams|1 pull_number_or_commit_hash 9|2 repo 9?|3 is_github 8?"];
      }
    }
    class Yr extends y {
      constructor(t3) {
        super(), this.content = "", this.prNumber = 0, this.title = "", this.body = "", this.author = "", this.date = "", this.diff = "", this.comments = [], this.labels = [], this.assignees = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yr, t3, e3);
      }
      static $() {
        return ["FetchPullRequestResult|1 content 9|2 pr_number 13|3 title 9|4 body 9|5 author 9|6 date 9|7 diff 9|8 sha 9?|9 external_link 9?|10 url 9?|11 comments #0*|12 labels 9*|13 assignees 9*|14 is_issue 8?|15 state 9?|16 prompt_connect_github 8?", jr];
      }
    }
    class jr extends y {
      constructor(t3) {
        super(), this.id = 0, this.body = "", this.createdAt = "", this.updatedAt = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jr, t3, e3);
      }
      static $() {
        return ["IssueComment|1 id 13|2 body 9|3 author 9?|4 created_at 9|5 updated_at 9|6 author_association 9?"];
      }
    }
    class Xr extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xr, t3, e3);
      }
      static $() {
        return ["FetchPullRequestStream"];
      }
    }
    class Zr extends y {
      constructor(t3) {
        super(), this.sha = "", this.score = 0, this.changedFiles = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zr, t3, e3);
      }
      static $() {
        return ["PullRequestReference|1 sha 9|2 score 2|3 title 9?|4 summary 9?|5 pr_number 13?|6 author 9?|7 date 9?|8 changed_files 9*"];
      }
    }
    class tn extends y {
      constructor(t3) {
        super(), this.query = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tn, t3, e3);
      }
      static $() {
        return ["DeepSearchParams|1 query 9"];
      }
    }
    class en extends y {
      constructor(t3) {
        super(), this.success = false, this.result = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new en().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new en().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new en().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(en, t3, e3);
      }
      static $() {
        return ["DeepSearchResult|1 success 8|2 result 9"];
      }
    }
    class rn extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rn, t3, e3);
      }
      static $() {
        return ["DeepSearchStream"];
      }
    }
    class nn extends y {
      constructor(t3) {
        super(), this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nn, t3, e3);
      }
      static $() {
        return ["CreateDiagramParams|1 content 9"];
      }
    }
    class sn extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sn, t3, e3);
      }
      static $() {
        return ["CreateDiagramResult|1 error 9?"];
      }
    }
    class on extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new on().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new on().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new on().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(on, t3, e3);
      }
      static $() {
        return ["CreateDiagramStream"];
      }
    }
    class an extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new an().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new an().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new an().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(an, t3, e3);
      }
      static $() {
        return ["FixLintsParams"];
      }
    }
    class un extends y {
      constructor(t3) {
        super(), this.fileResults = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new un().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new un().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new un().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(un, t3, e3);
      }
      static $() {
        return ["FixLintsResult|1 file_results #0*", cn];
      }
    }
    class cn extends y {
      constructor(t3) {
        super(), this.filePath = "", this.isApplied = false, this.applyFailed = false, this.linterErrors = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cn, t3, e3);
      }
      static $() {
        return ["FixLintsResult.FileResult|1 file_path 9|2 diff #0|3 is_applied 8|4 apply_failed 8|5 error 9?|6 linter_errors #1*", z, s2.LinterError];
      }
    }
    class ln extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ln().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ln().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ln().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ln, t3, e3);
      }
      static $() {
        return ["FixLintsStream"];
      }
    }
    class mn extends y {
      constructor(t3) {
        super(), this.path = "", this.paths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mn, t3, e3);
      }
      static $() {
        return ["ReadLintsParams|1 path 9|2 paths 9*"];
      }
    }
    class dn extends y {
      constructor(t3) {
        super(), this.path = "", this.linterErrors = [], this.linterErrorsByFile = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dn, t3, e3);
      }
      static $() {
        return ["ReadLintsResult|1 path 9|2 linter_errors #0*|3 linter_errors_by_file #1*", s2.LinterError, s2.LinterErrors];
      }
    }
    class fn extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fn, t3, e3);
      }
      static $() {
        return ["ReadLintsStream"];
      }
    }
    class pn extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pn, t3, e3);
      }
      static $() {
        return ["GotodefStream"];
      }
    }
    class hn extends y {
      constructor(t3) {
        super(), this.taskDescription = "", this.taskTitle = "", this.allowedWriteDirectories = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hn, t3, e3);
      }
      static $() {
        return ["TaskParams|1 task_description 9|4 task_title 9|2 async 8?|3 allowed_write_directories 9*|5 model_override 9?|6 max_mode_override 8?|7 default_expanded_while_running 8?"];
      }
    }
    class gn extends y {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gn, t3, e3);
      }
      static $() {
        return ["TaskResult|1 completed_task_result #0 result|2 async_task_result #1 result", An, _n];
      }
    }
    class An extends y {
      constructor(t3) {
        super(), this.summary = "", this.fileResults = [], this.userAborted = false, this.subagentErrored = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new An().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new An().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new An().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(An, t3, e3);
      }
      static $() {
        return ["TaskResult.CompletedTaskResult|1 summary 9|2 file_results #0*|3 user_aborted 8|4 subagent_errored 8", cn];
      }
    }
    class _n extends y {
      constructor(t3) {
        super(), this.taskId = "", this.userAborted = false, this.subagentErrored = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _n().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _n().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _n().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_n, t3, e3);
      }
      static $() {
        return ["TaskResult.AsyncTaskResult|1 task_id 9|2 user_aborted 8|3 subagent_errored 8"];
      }
    }
    class yn extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yn, t3, e3);
      }
      static $() {
        return ["TaskStream"];
      }
    }
    class wn extends y {
      constructor(t3) {
        super(), this.description = "", this.prompt = "", this.subagentType = "", this.name = "", this.mode = f.FL.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wn, t3, e3);
      }
      static $() {
        return ["TaskV2Params|1 description 9|2 prompt 9|3 subagent_type 9|4 model 9?|5 name 9|6 mode #0", f.FL];
      }
    }
    class Sn extends y {
      constructor(t3) {
        super(), this.isBackground = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sn, t3, e3);
      }
      static $() {
        return ["TaskV2Result|1 agent_id 9?|2 is_background 8|3 cloud_agent_bc_id 9?"];
      }
    }
    class Jn extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jn, t3, e3);
      }
      static $() {
        return ["TaskV2Stream"];
      }
    }
    class Bn extends y {
      constructor(t3) {
        super(), this.pattern = "", this.ignoreGlobs = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchParams|1 pattern 9|2 path 9?|3 glob 9?|4 output_mode 9?|5 context_before 5?|6 context_after 5?|7 context 5?|8 case_insensitive 8?|9 type 9?|10 head_limit 5?|11 multiline 8?|12 sort 9?|13 sort_ascending 8?|14 ignore_globs 9*|15 offset 5?"];
      }
    }
    class En extends y {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new En().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new En().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new En().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(En, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchResult|1 success #0 result|2 error #1 result", Cn, In];
      }
    }
    class In extends y {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new In().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new In().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new In().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(In, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchError|1 error 9"];
      }
    }
    class Cn extends y {
      constructor(t3) {
        super(), this.pattern = "", this.path = "", this.outputMode = "", this.workspaceResults = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchSuccess|1 pattern 9|2 path 9|3 output_mode 9|4 workspace_results 9,#0|5 active_editor_result #0?", bn];
      }
    }
    class bn extends y {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchUnionResult|1 count #0 result|2 files #1 result|3 content #2 result", kn, qn, Pn];
      }
    }
    class kn extends y {
      constructor(t3) {
        super(), this.counts = [], this.totalFiles = 0, this.totalMatches = 0, this.clientTruncated = false, this.ripgrepTruncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchCountResult|1 counts #0*|2 total_files 5|3 total_matches 5|4 client_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?|5 ripgrep_truncated 8", vn];
      }
    }
    class vn extends y {
      constructor(t3) {
        super(), this.file = "", this.count = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchFileCount|1 file 9|2 count 5|3 is_dirty 8?|4 is_out_of_workspace 8?|5 absolute_path 9?"];
      }
    }
    class qn extends y {
      constructor(t3) {
        super(), this.files = [], this.totalFiles = 0, this.clientTruncated = false, this.ripgrepTruncated = false, this.filesWithMeta = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchFilesResult|1 files 9*|2 total_files 5|3 client_truncated 8|4 ripgrep_truncated 8|5 files_with_meta #0*|6 head_limit_applied 5?|7 offset_applied 5?", Rn];
      }
    }
    class Rn extends y {
      constructor(t3) {
        super(), this.file = "", this.isDirty = false, this.isOutOfWorkspace = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchFilesResult.FileEntry|1 file 9|2 is_dirty 8|3 is_out_of_workspace 8|4 absolute_path 9?"];
      }
    }
    class Pn extends y {
      constructor(t3) {
        super(), this.matches = [], this.totalLines = 0, this.totalMatchedLines = 0, this.clientTruncated = false, this.ripgrepTruncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchContentResult|1 matches #0*|2 total_lines 5|3 total_matched_lines 5|4 client_truncated 8|5 ripgrep_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?", Tn];
      }
    }
    class Tn extends y {
      constructor(t3) {
        super(), this.file = "", this.matches = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchFileMatch|1 file 9|2 matches #0*|3 is_dirty 8?|4 is_out_of_workspace 8?|5 absolute_path 9?", xn];
      }
    }
    class xn extends y {
      constructor(t3) {
        super(), this.lineNumber = 0, this.content = "", this.contentTruncated = false, this.isContextLine = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchContentMatch|1 line_number 5|2 content 9|3 content_truncated 8|4 is_context_line 8"];
      }
    }
    class Nn extends y {
      constructor(t3) {
        super(), this.pattern = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nn, t3, e3);
      }
      static $() {
        return ["RipgrepRawSearchStream|1 pattern 9"];
      }
    }
    class Dn extends y {
      constructor(t3) {
        super(), this.ids = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dn, t3, e3);
      }
      static $() {
        return ["AwaitTaskParams|1 ids 9*"];
      }
    }
    class Un extends y {
      constructor(t3) {
        super(), this.taskResults = [], this.missingTaskIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Un().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Un().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Un().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Un, t3, e3);
      }
      static $() {
        return ["AwaitTaskResult|1 task_results #0*|2 missing_task_ids 9*", Qn];
      }
    }
    class Qn extends y {
      constructor(t3) {
        super(), this.taskId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qn, t3, e3);
      }
      static $() {
        return ["AwaitTaskResult.TaskResultItem|1 task_id 9|2 result #0", An];
      }
    }
    class Mn extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mn, t3, e3);
      }
      static $() {
        return ["AwaitTaskStream"];
      }
    }
    class On extends y {
      constructor(t3) {
        super(), this.read = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new On().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new On().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new On().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(On, t3, e3);
      }
      static $() {
        return ["TodoReadParams|1 read 8"];
      }
    }
    class Fn extends y {
      constructor(t3) {
        super(), this.content = "", this.status = "", this.id = "", this.dependencies = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fn, t3, e3);
      }
      static $() {
        return ["TodoItem|1 content 9|2 status 9|3 id 9|4 dependencies 9*"];
      }
    }
    class Ln extends y {
      constructor(t3) {
        super(), this.todos = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ln().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ln().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ln().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ln, t3, e3);
      }
      static $() {
        return ["TodoReadResult|1 todos #0*", Fn];
      }
    }
    class $n extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $n().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $n().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $n().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($n, t3, e3);
      }
      static $() {
        return ["TodoReadStream"];
      }
    }
    class Gn extends y {
      constructor(t3) {
        super(), this.todos = [], this.merge = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gn, t3, e3);
      }
      static $() {
        return ["TodoWriteParams|1 todos #0*|2 merge 8", Fn];
      }
    }
    class Hn extends y {
      constructor(t3) {
        super(), this.success = false, this.readyTaskIds = [], this.needsInProgressTodos = false, this.finalTodos = [], this.initialTodos = [], this.wasMerge = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hn, t3, e3);
      }
      static $() {
        return ["TodoWriteResult|1 success 8|2 ready_task_ids 9*|3 needs_in_progress_todos 8|4 final_todos #0*|5 initial_todos #0*|6 was_merge 8", Fn];
      }
    }
    class Kn extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kn, t3, e3);
      }
      static $() {
        return ["TodoWriteStream"];
      }
    }
    class Vn extends y {
      constructor(t3) {
        super(), this.targetDirectory = "", this.ignoreGlobs = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vn, t3, e3);
      }
      static $() {
        return ["ListDirV2Params|1 target_directory 9|2 ignore_globs 9*|3 should_enrich_terminal_metadata 8?"];
      }
    }
    class zn extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zn, t3, e3);
      }
      static $() {
        return ["ListDirV2Result|1 directory_tree_root #0", Wn];
      }
    }
    class Wn extends y {
      constructor(t3) {
        super(), this.absPath = "", this.childrenDirs = [], this.childrenFiles = [], this.childrenWereProcessed = false, this.fullSubtreeExtensionCounts = {}, this.numFiles = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wn, t3, e3);
      }
      static $() {
        return ["ListDirV2Result.DirectoryTreeNode|1 abs_path 9|2 children_dirs #0*|3 children_files #1*|4 children_were_processed 8|5 full_subtree_extension_counts 9,5|6 num_files 5", Wn, Yn];
      }
    }
    class Yn extends y {
      constructor(t3) {
        super(), this.name = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yn, t3, e3);
      }
      static $() {
        return ["ListDirV2Result.DirectoryTreeNode.File|1 name 9|2 terminal_metadata #0?", p.Y$];
      }
    }
    class jn extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jn, t3, e3);
      }
      static $() {
        return ["ListDirV2Stream"];
      }
    }
    class Xn extends y {
      constructor(t3) {
        super(), this.targetFile = "", this.charsLimit = 0, this.effectiveUri = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xn, t3, e3);
      }
      static $() {
        return ["ReadFileV2Params|1 target_file 9|2 offset 5?|3 limit 5?|4 chars_limit 5|5 effective_uri 9|6 enable_line_numbers 8?"];
      }
    }
    class Zn extends y {
      constructor(t3) {
        super(), this.numCharactersInRequestedRange = 0, this.matchingCursorRules = [], this.images = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zn, t3, e3);
      }
      static $() {
        return ["ReadFileV2Result|1 contents 9?|2 num_characters_in_requested_range 5|3 offset_is_bigger_than_number_of_lines_in_file 8?|4 total_lines_in_file 5?|5 matching_cursor_rules #0*|6 images #1*", s2.CursorRule, s2.ImageProto];
      }
    }
    class ts extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ts().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ts().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ts().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ts, t3, e3);
      }
      static $() {
        return ["ReadFileV2Stream|1 params #0?", Xn];
      }
    }
    class es extends y {
      constructor(t3) {
        super(), this.targetDirectory = "", this.globPattern = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new es().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new es().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new es().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(es, t3, e3);
      }
      static $() {
        return ["GlobFileSearchParams|1 target_directory 9|2 glob_pattern 9"];
      }
    }
    class rs extends y {
      constructor(t3) {
        super(), this.directories = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rs, t3, e3);
      }
      static $() {
        return ["GlobFileSearchResult|1 directories #0*", ss];
      }
    }
    class ns extends y {
      constructor(t3) {
        super(), this.relPath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ns().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ns().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ns().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ns, t3, e3);
      }
      static $() {
        return ["GlobFileSearchResult.File|1 rel_path 9"];
      }
    }
    class ss extends y {
      constructor(t3) {
        super(), this.absPath = "", this.files = [], this.totalFiles = 0, this.ripgrepTruncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ss().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ss().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ss().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ss, t3, e3);
      }
      static $() {
        return ["GlobFileSearchResult.Directory|1 abs_path 9|2 files #0*|3 total_files 5|4 ripgrep_truncated 8", ns];
      }
    }
    class is extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new is().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new is().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new is().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(is, t3, e3);
      }
      static $() {
        return ["GlobFileSearchStream"];
      }
    }
    class os extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new os().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new os().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new os().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(os, t3, e3);
      }
      static $() {
        return ["ListMcpResourcesStream"];
      }
    }
    class as extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new as().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new as().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new as().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(as, t3, e3);
      }
      static $() {
        return ["CallMcpToolStream"];
      }
    }
    class us extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new us().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new us().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new us().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(us, t3, e3);
      }
      static $() {
        return ["ReadMcpResourceStream"];
      }
    }
    class cs extends y {
      constructor(t3) {
        super(), this.id = "", this.title = "", this.description = "", this.instructions = "", this.prerequisites = [], this.subComposerId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cs, t3, e3);
      }
      static $() {
        return ["Step|1 id 9|2 title 9|3 description 9|4 instructions 9|5 prerequisites 9*|6 sub_composer_id 9"];
      }
    }
    class ls extends y {
      constructor(t3) {
        super(), this.name = "", this.todos = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ls().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ls().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ls().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ls, t3, e3);
      }
      static $() {
        return ["PlanPhase|1 name 9|2 todos #0*", Fn];
      }
    }
    class ms extends y {
      constructor(t3) {
        super(), this.plan = "", this.title = "", this.summary = "", this.steps = [], this.oldStr = "", this.newStr = "", this.name = "", this.todos = [], this.overview = "", this.isSpec = false, this.isProject = false, this.phases = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ms().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ms().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ms().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ms, t3, e3);
      }
      static $() {
        return ["CreatePlanParams|1 plan 9|2 title 9|3 summary 9|4 steps #0*|5 old_str 9|6 new_str 9|7 name 9|8 todos #1*|9 overview 9|10 is_spec 8|11 is_project 8|12 phases #2*", cs, Fn, ls];
      }
    }
    class ds extends y {
      constructor(t3) {
        super(), this.result = { case: void 0 }, this.planUri = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ds().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ds().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ds().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ds, t3, e3);
      }
      static $() {
        return ["CreatePlanResult|1 accepted #0 result|2 rejected #1 result|3 modified #2 result|4 plan_uri 9", fs, ps, hs];
      }
    }
    class fs extends y {
      constructor(t3) {
        super(), this.finalTodos = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fs, t3, e3);
      }
      static $() {
        return ["CreatePlanResult.Accepted|1 final_todos #0*", Fn];
      }
    }
    class ps extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ps().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ps().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ps().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ps, t3, e3);
      }
      static $() {
        return ["CreatePlanResult.Rejected"];
      }
    }
    class hs extends y {
      constructor(t3) {
        super(), this.newPlan = "", this.finalTodos = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hs, t3, e3);
      }
      static $() {
        return ["CreatePlanResult.Modified|1 new_plan 9|2 final_todos #0*", Fn];
      }
    }
    class gs extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gs, t3, e3);
      }
      static $() {
        return ["CreatePlanStream"];
      }
    }
    class As extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new As().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new As().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new As().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(As, t3, e3);
      }
      static $() {
        return ["ReadProjectParams"];
      }
    }
    class _s extends y {
      constructor(t3) {
        super(), this.plan = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _s().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _s().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _s().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_s, t3, e3);
      }
      static $() {
        return ["ReadProjectResult|1 plan 9"];
      }
    }
    class ys extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ys().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ys().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ys().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ys, t3, e3);
      }
      static $() {
        return ["ReadProjectStream"];
      }
    }
    class ws extends y {
      constructor(t3) {
        super(), this.oldString = "", this.newString = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ws().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ws().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ws().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ws, t3, e3);
      }
      static $() {
        return ["UpdateProjectStringReplacement|1 old_string 9|2 new_string 9"];
      }
    }
    class Ss extends y {
      constructor(t3) {
        super(), this.stringReplacements = [], this.summary = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ss().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ss().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ss().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ss, t3, e3);
      }
      static $() {
        return ["UpdateProjectParams|1 string_replacements #0*|2 summary 9", ws];
      }
    }
    class Js extends y {
      constructor(t3) {
        super(), this.success = false, this.updatedPlan = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Js().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Js().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Js().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Js, t3, e3);
      }
      static $() {
        return ["UpdateProjectResult|1 success 8|2 updated_plan 9"];
      }
    }
    class Bs extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bs, t3, e3);
      }
      static $() {
        return ["UpdateProjectStream"];
      }
    }
    class Es extends y {
      constructor(t3) {
        super(), this.title = "", this.questions = [], this.runAsync = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Es().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Es().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Es().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Es, t3, e3);
      }
      static $() {
        return ["AskQuestionParams|1 title 9|2 questions #0*|3 run_async 8", Is];
      }
    }
    class Is extends y {
      constructor(t3) {
        super(), this.id = "", this.prompt = "", this.options = [], this.allowMultiple = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Is().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Is().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Is().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Is, t3, e3);
      }
      static $() {
        return ["AskQuestionParams.Question|1 id 9|2 prompt 9|3 options #0*|4 allow_multiple 8", Cs];
      }
    }
    class Cs extends y {
      constructor(t3) {
        super(), this.id = "", this.label = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cs, t3, e3);
      }
      static $() {
        return ["AskQuestionParams.Option|1 id 9|2 label 9"];
      }
    }
    class bs extends y {
      constructor(t3) {
        super(), this.answers = [], this.isAsync = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bs, t3, e3);
      }
      static $() {
        return ["AskQuestionResult|1 answers #0*|2 is_async 8", ks];
      }
    }
    class ks extends y {
      constructor(t3) {
        super(), this.questionId = "", this.selectedOptionIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ks().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ks().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ks().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ks, t3, e3);
      }
      static $() {
        return ["AskQuestionResult.Answer|1 question_id 9|2 selected_option_ids 9*|3 freeform_text 9?"];
      }
    }
    class vs extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vs, t3, e3);
      }
      static $() {
        return ["AskQuestionStream|1 params #0", Es];
      }
    }
    class qs extends y {
      constructor(t3) {
        super(), this.fromModeId = "", this.toModeId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qs, t3, e3);
      }
      static $() {
        return ["SwitchModeParams|1 from_mode_id 9|2 to_mode_id 9|3 explanation 9?"];
      }
    }
    class Rs extends y {
      constructor(t3) {
        super(), this.fromModeId = "", this.toModeId = "", this.autoApproved = false, this.userApproved = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rs, t3, e3);
      }
      static $() {
        return ["SwitchModeResult|1 from_mode_id 9|2 to_mode_id 9|3 auto_approved 8|4 user_approved 8"];
      }
    }
    class Ps extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ps().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ps().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ps().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ps, t3, e3);
      }
      static $() {
        return ["SwitchModeStream|1 params #0", qs];
      }
    }
    class Ts extends y {
      constructor(t3) {
        super(), this.actions = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ts().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ts().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ts().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ts, t3, e3);
      }
      static $() {
        return ["ComputerUseParams|1 actions #0*", h.ho];
      }
    }
    class xs extends y {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xs, t3, e3);
      }
      static $() {
        return ["ComputerUseResult|1 success #0 result|2 error #1 result", h.Wd, h.Jb];
      }
    }
    class Ns extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ns().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ns().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ns().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ns, t3, e3);
      }
      static $() {
        return ["ComputerUseStream|1 params #0", Ts];
      }
    }
    class Ds extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ds().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ds().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ds().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ds, t3, e3);
      }
      static $() {
        return ["WriteShellStdinStream|1 params #0", i2.LL];
      }
    }
    class Us extends y {
      constructor(t3) {
        super(), this.url = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Us().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Us().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Us().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Us, t3, e3);
      }
      static $() {
        return ["WebFetchParams|1 url 9"];
      }
    }
    class Qs extends y {
      constructor(t3) {
        super(), this.url = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qs, t3, e3);
      }
      static $() {
        return ["WebFetchResult|1 url 9|2 markdown 9?|3 error 9?"];
      }
    }
    class Ms extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ms().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ms().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ms().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ms, t3, e3);
      }
      static $() {
        return ["WebFetchStream|1 params #0", Us];
      }
    }
    class Os extends y {
      constructor(t3) {
        super(), this.summary = "", this.results = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Os().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Os().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Os().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Os, t3, e3);
      }
      static $() {
        return ["ReportBugfixResultsParams|1 summary 9|2 results #0*", g.Y6];
      }
    }
    class Fs extends y {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fs, t3, e3);
      }
      static $() {
        return ["ReportBugfixResultsResult|1 success #0 result|2 error #1 result", g.RH, g.q3];
      }
    }
    class Ls extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ls().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ls().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ls().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ls, t3, e3);
      }
      static $() {
        return ["ReportBugfixResultsStream|1 params #0", Os];
      }
    }
    class $s extends y {
      constructor(t3) {
        super(), this.serverIdentifier = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $s().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $s().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $s().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($s, t3, e3);
      }
      static $() {
        return ["McpAuthParams|1 server_identifier 9"];
      }
    }
    class Gs extends y {
      constructor(t3) {
        super(), this.success = false, this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gs, t3, e3);
      }
      static $() {
        return ["McpAuthResult|1 success 8|2 message 9"];
      }
    }
    class Hs extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hs, t3, e3);
      }
      static $() {
        return ["McpAuthStream"];
      }
    }
    class Ks extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ks().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ks().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ks().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ks, t3, e3);
      }
      static $() {
        return ["ConnectScmParams|1 github #0", Vs];
      }
    }
    class Vs extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vs, t3, e3);
      }
      static $() {
        return ["ConnectScmGithub|1 repository #0|2 ghe_application 9?", zs];
      }
    }
    class zs extends y {
      constructor(t3) {
        super(), this.owner = "", this.repo = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zs, t3, e3);
      }
      static $() {
        return ["ConnectScmGithubRepository|1 owner 9|2 repo 9"];
      }
    }
    class Ws extends y {
      constructor(t3) {
        super(), this.success = false, this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ws().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ws().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ws().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ws, t3, e3);
      }
      static $() {
        return ["ConnectScmResult|1 success 8|2 message 9"];
      }
    }
    class Ys extends y {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ys().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ys().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ys().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ys, t3, e3);
      }
      static $() {
        return ["ConnectScmStream"];
      }
    }
  }