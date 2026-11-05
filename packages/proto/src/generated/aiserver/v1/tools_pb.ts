// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/aiserver/v1/tools_pb.js" range:2283799..2424324
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "./utils_pb";
import * as __dep2 from "../../agent/v1/background_shell_exec_pb";
import * as __dep3 from "../../agent/v1/record_screen_exec_pb";
import * as __dep4 from "../../agent/v1/apply_agent_diff_tool_pb";
import * as __dep5 from "../../agent/v1/generate_image_tool_pb";
import * as __dep6 from "../../agent/v1/ai_attribution_tool_pb";
import * as __dep7 from "./repository_pb";
import * as __dep8 from "../../agent/v1/sandbox_pb";
import * as __dep9 from "../../agent/v1/shell_exec_pb";
import * as __dep10 from "../../agent/v1/subagents_pb";
import * as __dep11 from "../../agent/v1/ls_exec_pb";
import * as __dep12 from "../../agent/v1/computer_use_tool_pb";
import * as __dep13 from "../../agent/v1/report_bugfix_results_tool_pb";
import * as __dep14 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1,
  i = __dep2,
  o = __dep3,
  a = __dep4,
  u = __dep5,
  c = __dep6,
  l = __dep7,
  m = __dep8,
  d = __dep9,
  p = __dep10,
  f = __dep11,
  h = __dep12,
  g = __dep13,
  _ = __dep14;
const w = "aiserver.v1.";
class y extends _.HL {
  static get runtime() {
    return (0, _.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return w;
  }
}
var J = (0, _.QT)(n.proto3, w, "ClientSideToolV2", [[0, "UNSPECIFIED"], [1, "READ_SEMSEARCH_FILES"], [3, "RIPGREP_SEARCH"], [5, "READ_FILE"], [6, "LIST_DIR"], [7, "EDIT_FILE"], [8, "FILE_SEARCH"], [9, "SEMANTIC_SEARCH_FULL"], [11, "DELETE_FILE"], [12, "REAPPLY"], [15, "RUN_TERMINAL_COMMAND_V2"], [16, "FETCH_RULES"], [18, "WEB_SEARCH"], [19, "MCP"], [23, "SEARCH_SYMBOLS"], [24, "BACKGROUND_COMPOSER_FOLLOWUP"], [25, "KNOWLEDGE_BASE"], [26, "FETCH_PULL_REQUEST"], [27, "DEEP_SEARCH"], [28, "CREATE_DIAGRAM"], [29, "FIX_LINTS"], [30, "READ_LINTS"], [31, "GO_TO_DEFINITION"], [32, "TASK"], [33, "AWAIT_TASK"], [34, "TODO_READ"], [35, "TODO_WRITE"], [38, "EDIT_FILE_V2"], [39, "LIST_DIR_V2"], [40, "READ_FILE_V2"], [41, "RIPGREP_RAW_SEARCH"], [42, "GLOB_FILE_SEARCH"], [43, "CREATE_PLAN"], [44, "LIST_MCP_RESOURCES"], [45, "READ_MCP_RESOURCE"], [46, "READ_PROJECT"], [47, "UPDATE_PROJECT"], [48, "TASK_V2"], [49, "CALL_MCP_TOOL"], [50, "APPLY_AGENT_DIFF"], [51, "ASK_QUESTION"], [52, "SWITCH_MODE"], [53, "GENERATE_IMAGE"], [54, "COMPUTER_USE"], [55, "WRITE_SHELL_STDIN"], [56, "RECORD_SCREEN"], [57, "WEB_FETCH"], [58, "REPORT_BUGFIX_RESULTS"], [59, "AI_ATTRIBUTION"], [60, "MCP_AUTH"], [61, "REFLECT"], [62, "AWAIT"], [63, "GET_MCP_TOOLS"], [65, "SEND_TO_USER"], [66, "CONNECT_SCM"]], 1),
  S = (0, _.QT)(n.proto3, w, "BuiltinTool", [[0, "UNSPECIFIED"], [1, "SEARCH"], [2, "READ_CHUNK"], [3, "GOTODEF"], [4, "EDIT"], [5, "UNDO_EDIT"], [6, "END"], [7, "NEW_FILE"], [8, "ADD_TEST"], [9, "RUN_TEST"], [10, "DELETE_TEST"], [11, "SAVE_FILE"], [12, "GET_TESTS"], [13, "GET_SYMBOLS"], [14, "SEMANTIC_SEARCH"], [15, "GET_PROJECT_STRUCTURE"], [16, "CREATE_RM_FILES"], [17, "RUN_TERMINAL_COMMANDS"], [18, "NEW_EDIT"], [19, "READ_WITH_LINTER"]], 1),
  q = (0, _.QT)(n.proto3, w, "RunTerminalCommandEndedReason", [[0, "UNSPECIFIED"], [1, "EXECUTION_COMPLETED"], [2, "EXECUTION_ABORTED"], [3, "EXECUTION_FAILED"], [4, "ERROR_OCCURRED_CHECKING_REASON"], [5, "IDLE_TIMEOUT"]], 1);
class B extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
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
    return ["ReapplyParams|1 relative_workspace_path 9"];
  }
}
class b extends y {
  constructor(t) {
    super(), this.agentId = "", n.proto3.util.initPartial(t, this);
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
    return ["ApplyAgentDiffParams|1 agent_id 9"];
  }
}
class P extends y {
  constructor(t) {
    super(), this.isApplied = !1, this.applyFailed = !1, this.linterErrors = [], n.proto3.util.initPartial(t, this);
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
    return ["ReapplyResult|1 diff #0|2 is_applied 8|3 apply_failed 8|4 linter_errors #1*|5 rejected 8?", H, s.bO];
  }
}
class I extends y {
  constructor(t) {
    super(), this.ruleNames = [], n.proto3.util.initPartial(t, this);
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
    return ["FetchRulesParams|1 rule_names 9*"];
  }
}
class x extends y {
  constructor(t) {
    super(), this.rules = [], n.proto3.util.initPartial(t, this);
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
    return ["FetchRulesResult|1 rules #0*", s.DX];
  }
}
class v extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ReapplyStream"];
  }
}
class R extends y {
  constructor(t) {
    super(), this.clientVisibleErrorMessage = "", this.modelVisibleErrorMessage = "", this.errorDetails = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ToolResultError|1 client_visible_error_message 9|2 model_visible_error_message 9|3 actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk 9?|5 edit_file_error_details #0 error_details|6 search_replace_error_details #1 error_details", E, k];
  }
}
class E extends y {
  constructor(t) {
    super(), this.numLinesInFileBeforeEdit = 0, n.proto3.util.initPartial(t, this);
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
    return ["ToolResultError.EditFileError|1 num_lines_in_file_before_edit 5"];
  }
}
class k extends y {
  constructor(t) {
    super(), this.numLinesInFileBeforeEdit = 0, n.proto3.util.initPartial(t, this);
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
    return ["ToolResultError.SearchReplaceError|1 num_lines_in_file_before_edit 5"];
  }
}
class T extends y {
  constructor(t) {
    super(), this.tool = J.UNSPECIFIED, this.params = {
      case: void 0
    }, this.toolCallId = "", this.name = "", this.isStreaming = !1, this.isLastMessage = !1, this.internal = !1, this.rawArgs = "", n.proto3.util.initPartial(t, this);
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
    return ["ClientSideToolV2Call|1 tool #0|2 read_semsearch_files_params #1 params|5 ripgrep_search_params #2 params|8 read_file_params #3 params|12 list_dir_params #4 params|13 edit_file_params #5 params|16 file_search_params #6 params|17 semantic_search_full_params #7 params|19 delete_file_params #8 params|20 reapply_params #9 params|23 run_terminal_command_v2_params #10 params|24 fetch_rules_params #11 params|26 web_search_params #12 params|27 mcp_params #13 params|31 search_symbols_params #14 params|41 gotodef_params #15 params|32 background_composer_followup_params #16 params|33 knowledge_base_params #17 params|34 fetch_pull_request_params #18 params|35 deep_search_params #19 params|36 create_diagram_params #20 params|37 fix_lints_params #21 params|38 read_lints_params #22 params|42 task_params #23 params|43 await_task_params #24 params|44 todo_read_params #25 params|45 todo_write_params #26 params|50 edit_file_v2_params #27 params|52 list_dir_v2_params #28 params|53 read_file_v2_params #29 params|54 ripgrep_raw_search_params #30 params|55 glob_file_search_params #31 params|56 create_plan_params #32 params|57 list_mcp_resources_params #33 params|58 read_mcp_resource_params #34 params|59 read_project_params #35 params|60 update_project_params #36 params|61 task_v2_params #37 params|62 call_mcp_tool_params #38 params|63 apply_agent_diff_params #39 params|64 ask_question_params #40 params|65 switch_mode_params #41 params|66 computer_use_params #42 params|67 write_shell_stdin_params #43 params|68 record_screen_params #44 params|69 web_fetch_params #45 params|70 report_bugfix_results_params #46 params|71 mcp_auth_params #47 params|72 get_mcp_tools_params #48 params|73 connect_scm_params #49 params|3 tool_call_id 9|6 timeout_ms 1?|9 name 9|14 is_streaming 8|15 is_last_message 8|51 internal 8|10 raw_args 9|48 tool_index 13?|49 model_call_id 9?", J, Lt, ft, mt, at, z, nt, Qt, Zt, B, he, I, Se, Pe, Me, jr, Le, ze, Ve, tn, nn, an, mn, hn, $n, Dn, Fn, N, Wn, Yn, Bn, rs, ms, Ee, Ce, _s, Ss, Jn, Ae, b, bs, Es, Cs, i.LL, o.zH, Os, Ds, Ls, Oe, zs];
  }
}
class C extends y {
  constructor(t) {
    super(), this.tool = J.UNSPECIFIED, this.result = {
      case: void 0
    }, this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
    return ["ClientSideToolV2Result|1 tool #0|2 read_semsearch_files_result #1 result|4 ripgrep_search_result #2 result|6 read_file_result #3 result|9 list_dir_result #4 result|10 edit_file_result #5 result|11 file_search_result #6 result|18 semantic_search_full_result #7 result|20 delete_file_result #8 result|21 reapply_result #9 result|24 run_terminal_command_v2_result #10 result|25 fetch_rules_result #11 result|27 web_search_result #12 result|28 mcp_result #13 result|32 search_symbols_result #14 result|33 background_composer_followup_result #15 result|34 knowledge_base_result #16 result|36 fetch_pull_request_result #17 result|37 deep_search_result #18 result|38 create_diagram_result #19 result|39 fix_lints_result #20 result|40 read_lints_result #21 result|41 gotodef_result #22 result|42 task_result #23 result|43 await_task_result #24 result|44 todo_read_result #25 result|45 todo_write_result #26 result|51 edit_file_v2_result #27 result|52 list_dir_v2_result #28 result|53 read_file_v2_result #29 result|54 ripgrep_raw_search_result #30 result|55 glob_file_search_result #31 result|56 create_plan_result #32 result|57 list_mcp_resources_result #33 result|58 read_mcp_resource_result #34 result|59 read_project_result #35 result|60 update_project_result #36 result|61 task_v2_result #37 result|62 call_mcp_tool_result #38 result|63 apply_agent_diff_result #39 result|64 ask_question_result #40 result|65 switch_mode_result #41 result|66 computer_use_result #42 result|67 generate_image_result #43 result|68 write_shell_stdin_result #44 result|69 record_screen_result #45 result|70 web_fetch_result #46 result|71 report_bugfix_results_result #47 result|72 ai_attribution_result #48 result|73 mcp_auth_result #49 result|74 get_mcp_tools_result #50 result|75 connect_scm_result #51 result|35 tool_call_id 9|8 error #52?|48 model_call_id 9?|49 tool_index 13?|50 attachments #53?", J, Ht, bt, dt, ut, W, it, Xt, tr, P, we, x, qe, ve, De, Fe, We, Qe, rn, sn, un, dn, Dr, gn, On, Gn, Kn, F, Hn, Zn, bn, es, ds, ke, Ue, ws, qs, Sn, $e, a.y$, xs, ks, Us, u.k4, i.nt, o.Tj, js, Ns, c.Zc, Fs, je, Vs, R, A];
  }
}
class U extends y {
  constructor(t) {
    super(), this.rawMessage = "", n.proto3.util.initPartial(t, this);
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
    return ["NudgeMessage|1 raw_message 9"];
  }
}
class A extends y {
  constructor(t) {
    super(), this.originalTodos = [], this.updatedTodos = [], this.nudgeMessages = [], this.shouldShowTodoWriteReminder = !1, this.todoReminderType = $.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
    return ["ToolResultAttachments|1 original_todos #0*|2 updated_todos #0*|3 nudge_messages #1*|4 should_show_todo_write_reminder 8|5 todo_reminder_type #2|6 discovery_budget_reminder #3?", Nn, U, $, O];
  }
}
var $ = (0, _.QT)(n.proto3, w, "ToolResultAttachments.TodoReminderType", [[0, "UNSPECIFIED"], [1, "EVERY_10_TURNS"], [2, "AFTER_EDIT"]], 1);
class O extends y {
  constructor(t) {
    super(), this.discoveryRoundsRemaining = 0, n.proto3.util.initPartial(t, this);
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
    return ["ToolResultAttachments.DiscoveryBudgetReminder|1 discovery_rounds_remaining 5|2 discovery_effort 9?"];
  }
}
class j extends y {
  constructor(t) {
    super(), this.tool = J.UNSPECIFIED, this.toolCallId = "", this.name = "", n.proto3.util.initPartial(t, this);
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
    return ["StreamedBackPartialToolCall|1 tool #0|2 tool_call_id 9|3 name 9|4 tool_index 13?|5 model_call_id 9?", J];
  }
}
class M extends y {
  constructor(t) {
    super(), this.tool = J.UNSPECIFIED, this.toolCallId = "", this.params = {
      case: void 0
    }, this.name = "", this.rawArgs = "", n.proto3.util.initPartial(t, this);
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
    return ["StreamedBackToolCall|1 tool #0|2 tool_call_id 9|3 read_semsearch_files_stream #1 params|5 ripgrep_search_stream #2 params|7 read_file_stream #3 params|12 list_dir_stream #4 params|13 edit_file_stream #5 params|14 file_search_stream #6 params|19 semantic_search_full_stream #7 params|21 delete_file_stream #8 params|22 reapply_stream #9 params|25 run_terminal_command_v2_stream #10 params|26 fetch_rules_stream #11 params|28 web_search_stream #12 params|29 mcp_stream #13 params|33 search_symbols_stream #14 params|41 gotodef_stream #15 params|34 background_composer_followup_stream #16 params|35 knowledge_base_stream #17 params|36 fetch_pull_request_stream #18 params|37 deep_search_stream #19 params|38 create_diagram_stream #20 params|39 fix_lints_stream #21 params|40 read_lints_stream #22 params|42 task_stream #23 params|43 await_task_stream #24 params|44 todo_read_stream #25 params|45 todo_write_stream #26 params|52 edit_file_v2_stream #27 params|53 list_dir_v2_stream #28 params|54 read_file_v2_stream #29 params|55 ripgrep_raw_search_stream #30 params|56 glob_file_search_stream #31 params|57 create_plan_stream #32 params|58 list_mcp_resources_stream #33 params|59 read_mcp_resource_stream #34 params|60 read_project_stream #35 params|61 update_project_stream #36 params|62 task_v2_stream #37 params|63 call_mcp_tool_stream #38 params|64 ask_question_stream #39 params|65 switch_mode_stream #40 params|66 computer_use_stream #41 params|67 write_shell_stdin_stream #42 params|68 web_fetch_stream #43 params|69 report_bugfix_results_stream #44 params|70 mcp_auth_stream #45 params|71 connect_scm_stream #46 params|8 name 9|9 raw_args 9|10 error #47?|50 tool_index 13?|51 model_call_id 9?", J, Vt, Gt, pt, lt, et, st, Yt, rr, v, ye, Je, be, Re, Ge, fn, Ke, He, Ye, en, on, ln, pn, yn, Mn, Ln, zn, K, Xn, ts, An, is, gs, os, us, ys, Bs, qn, as, Rs, Ts, As, $s, Ms, Gs, Ks, Qs, R];
  }
}
class D extends y {
  constructor(t) {
    super(), this.tool = J.UNSPECIFIED, this.toolCallId = "", this.params = {
      case: void 0
    }, this.name = "", this.rawArgs = "", n.proto3.util.initPartial(t, this);
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
    return ["StreamedBackToolCallV2|1 tool #0|2 tool_call_id 9|3 read_semsearch_files_params #1 params|5 ripgrep_search_params #2 params|9 read_file_params #3 params|12 list_dir_params #4 params|13 edit_file_params #5 params|16 file_search_params #6 params|17 semantic_search_full_params #7 params|19 delete_file_params #8 params|20 reapply_params #9 params|23 run_terminal_command_v2_params #10 params|24 fetch_rules_params #11 params|26 web_search_params #12 params|27 mcp_params #13 params|31 search_symbols_params #14 params|41 gotodef_params #15 params|32 background_composer_followup_params #16 params|33 knowledge_base_params #17 params|34 fetch_pull_request_params #18 params|35 deep_search_params #19 params|36 create_diagram_params #20 params|37 fix_lints_params #21 params|38 read_lints_params #22 params|42 task_params #23 params|43 await_task_params #24 params|44 todo_read_params #25 params|45 todo_write_params #26 params|48 edit_file_v2_params #27 params|49 list_dir_v2_params #28 params|61 read_file_v2_params #29 params|62 ripgrep_raw_search_params #30 params|63 glob_file_search_params #31 params|64 create_plan_params #32 params|65 list_mcp_resources_params #33 params|66 read_mcp_resource_params #34 params|67 read_project_params #35 params|68 update_project_params #36 params|69 task_v2_params #37 params|70 call_mcp_tool_params #38 params|71 apply_agent_diff_params #39 params|72 ask_question_params #40 params|73 switch_mode_params #41 params|74 computer_use_params #42 params|75 write_shell_stdin_params #43 params|76 record_screen_params #44 params|77 web_fetch_params #45 params|78 report_bugfix_results_params #46 params|79 mcp_auth_params #47 params|80 get_mcp_tools_params #48 params|81 connect_scm_params #49 params|8 name 9|10 raw_args 9|11 error #50?|50 tool_index 13?|51 model_call_id 9?", J, Lt, ft, mt, at, z, nt, Qt, Zt, B, he, I, Se, Pe, Me, jr, Le, ze, Ve, tn, nn, an, mn, hn, $n, Dn, Fn, N, Wn, Yn, Bn, rs, ms, Ee, Ce, _s, Ss, Jn, Ae, b, bs, Es, Cs, i.LL, o.zH, Os, Ds, Ls, Oe, zs, R];
  }
}
class N extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.streamingEdit = {
      case: void 0
    }, this.shouldSendBackLinterErrors = !1, this.resultForModel = "", n.proto3.util.initPartial(t, this);
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
    return ["EditFileV2Params|1 relative_workspace_path 9|2 contents_after_edit 9?|3 waiting_for_file_contents 8?|4 text #0 streaming_edit|5 code #1 streaming_edit|6 should_send_back_linter_errors 8|7 diff #2?|8 result_for_model 9|9 streaming_content 9?|10 no_codeblock 8?|11 cloud_agent_edit 8?", G, L, H];
  }
}
class G extends y {
  constructor(t) {
    super(), this.text = "", n.proto3.util.initPartial(t, this);
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
    return ["EditFileV2Params.StreamingEditText|1 text 9"];
  }
}
class L extends y {
  constructor(t) {
    super(), this.code = "", n.proto3.util.initPartial(t, this);
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
    return ["EditFileV2Params.StreamingEditCode|1 code 9"];
  }
}
class F extends y {
  constructor(t) {
    super(), this.fileWasCreated = !1, this.linterErrors = [], this.sentBackLinterErrors = !1, this.shouldAutoFixLints = !1, this.resultForModel = "", this.afterContentId = "", n.proto3.util.initPartial(t, this);
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
    return ["EditFileV2Result|1 contents_before_edit 9?|9 eol_sequence 9?|11 detected_language 9?|2 file_was_created 8|3 diff #0?|4 rejected 8?|5 linter_errors #1*|6 sent_back_linter_errors 8|8 should_auto_fix_lints 8|7 human_review_v2 #2?|10 result_for_model 9|12 contents_after_edit 9?|13 before_content_id 9?|14 after_content_id 9", H, s.bO, rt];
  }
}
class K extends y {
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
    return ["EditFileV2Stream"];
  }
}
class z extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.language = "", this.blocking = !1, this.contents = "", this.lineRanges = [], n.proto3.util.initPartial(t, this);
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
    return ["EditFileParams|1 relative_workspace_path 9|2 language 9|4 blocking 8|3 contents 9|5 instructions 9?|12 should_edit_file_fail_for_large_files 8?|6 old_string 9?|7 new_string 9?|8 allow_multiple_matches 8?|10 use_whitespace_insensitive_fallback 8?|11 use_did_you_mean_fuzzy_match 8?|16 gracefully_handle_recoverable_errors 8?|9 line_ranges #0*|13 notebook_cell_idx 5?|14 is_new_cell 8?|15 cell_language 9?|17 edit_category 9?|18 should_eagerly_process_lints 8?", s.MT];
  }
}
class W extends y {
  constructor(t) {
    super(), this.isApplied = !1, this.applyFailed = !1, this.linterErrors = [], n.proto3.util.initPartial(t, this);
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
    return ["EditFileResult|1 diff #0|2 is_applied 8|3 apply_failed 8|4 linter_errors #1*|5 rejected 8?|6 num_matches 5?|7 whitespace_insensitive_fallback_found_match 8?|8 no_match_found_in_line_ranges 8?|11 recoverable_error #2?|9 num_lines_in_file 5?|10 is_subagent_edit 8?|12 diff_became_no_op_due_to_on_save_fixes 8?|13 human_review #3?|14 human_feedback #4?|15 should_eagerly_process_lints 8?|16 human_review_v2 #5?|17 were_all_new_linter_errors_resolved_by_this_edit 8?", H, s.bO, X, Z, tt, rt];
  }
}
class H extends y {
  constructor(t) {
    super(), this.chunks = [], this.editor = V.UNSPECIFIED, this.hitTimeout = !1, n.proto3.util.initPartial(t, this);
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
    return ["EditFileResult.FileDiff|1 chunks #0*|2 editor #1|3 hit_timeout 8", Q, V];
  }
}
var V = (0, _.QT)(n.proto3, w, "EditFileResult.FileDiff.Editor", [[0, "UNSPECIFIED"], [1, "AI"], [2, "HUMAN"]], 1);
class Q extends y {
  constructor(t) {
    super(), this.diffString = "", this.oldStart = 0, this.newStart = 0, this.oldLines = 0, this.newLines = 0, this.linesRemoved = 0, this.linesAdded = 0, n.proto3.util.initPartial(t, this);
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
    return ["EditFileResult.FileDiff.ChunkDiff|1 diff_string 9|2 old_start 5|3 new_start 5|4 old_lines 5|5 new_lines 5|6 lines_removed 5|7 lines_added 5"];
  }
}
class X extends y {
  constructor(t) {
    super(), this.errorType = Y.UNSPECIFIED, this.modelMessage = "", n.proto3.util.initPartial(t, this);
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
    return ["EditFileResult.RecoverableError|1 error_type #0|2 model_message 9", Y];
  }
}
var Y = (0, _.QT)(n.proto3, w, "EditFileResult.RecoverableError.RecoverableErrorType", [[0, "UNSPECIFIED"], [1, "SEARCH_STRING_NOT_FOUND"], [2, "AMBIGUOUS_SEARCH_STRING"]], 1);
class Z extends y {
  constructor(t) {
    super(), this.isEditAccepted = !1, this.textResult = "", this.stopAndGetNewUserInput = !1, n.proto3.util.initPartial(t, this);
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
    return ["EditFileResult.EditFileHumanReview|1 is_edit_accepted 8|2 text_result 9|3 stop_and_get_new_user_input 8"];
  }
}
class tt extends y {
  constructor(t) {
    super(), this.selectedOption = "", this.feedbackText = "", this.submitFeedbackAsNewMessage = !1, this.bubbleId = "", n.proto3.util.initPartial(t, this);
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
    return ["EditFileResult.HumanFeedback|1 selected_option 9|2 feedback_text 9|3 submit_feedback_as_new_message 8|4 bubble_id 9"];
  }
}
class rt extends y {
  constructor(t) {
    super(), this.selectedOption = "", this.feedbackText = "", this.submitFeedbackAsNewMessage = !1, this.bubbleId = "", n.proto3.util.initPartial(t, this);
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
    return ["HumanReview|1 selected_option 9|2 feedback_text 9|3 submit_feedback_as_new_message 8|4 bubble_id 9"];
  }
}
class et extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["EditFileStream"];
  }
}
class nt extends y {
  constructor(t) {
    super(), this.query = "", n.proto3.util.initPartial(t, this);
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
    return ["ToolCallFileSearchParams|1 query 9"];
  }
}
class st extends y {
  constructor(t) {
    super(), this.query = "", n.proto3.util.initPartial(t, this);
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
    return ["ToolCallFileSearchStream|1 query 9"];
  }
}
class it extends y {
  constructor(t) {
    super(), this.files = [], this.numResults = 0, n.proto3.util.initPartial(t, this);
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
    return ["ToolCallFileSearchResult|1 files #0*|2 limit_hit 8?|3 num_results 5", ot];
  }
}
class ot extends y {
  constructor(t) {
    super(), this.uri = "", n.proto3.util.initPartial(t, this);
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
    return ["ToolCallFileSearchResult.File|1 uri 9"];
  }
}
class at extends y {
  constructor(t) {
    super(), this.directoryPath = "", n.proto3.util.initPartial(t, this);
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
    return ["ListDirParams|1 directory_path 9"];
  }
}
class ut extends y {
  constructor(t) {
    super(), this.files = [], this.directoryRelativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
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
    return ["ListDirResult|1 files #0*|2 directory_relative_workspace_path 9", ct];
  }
}
class ct extends y {
  constructor(t) {
    super(), this.name = "", this.isDirectory = !1, n.proto3.util.initPartial(t, this);
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
    return ["ListDirResult.File|1 name 9|2 is_directory 8|3 size 3?|4 last_modified #0?|5 num_children 5?|6 num_lines 5?", n.Timestamp];
  }
}
class lt extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ListDirStream"];
  }
}
class mt extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.readEntireFile = !1, this.fileIsAllowedToBeReadEntirely = !1, n.proto3.util.initPartial(t, this);
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
    return ["ReadFileParams|1 relative_workspace_path 9|2 read_entire_file 8|3 start_line_one_indexed 5?|4 end_line_one_indexed_inclusive 5?|5 file_is_allowed_to_be_read_entirely 8|6 max_lines 5?|7 max_chars 5?|8 min_lines 5?"];
  }
}
class dt extends y {
  constructor(t) {
    super(), this.contents = "", this.didDowngradeToLineRange = !1, this.didShortenLineRange = !1, this.didSetDefaultLineRange = !1, this.relativeWorkspacePath = "", this.didShortenCharRange = !1, this.matchingCursorRules = [], n.proto3.util.initPartial(t, this);
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
    return ["ReadFileResult|1 contents 9|2 did_downgrade_to_line_range 8|3 did_shorten_line_range 8|4 did_set_default_line_range 8|5 full_file_contents 9?|6 outline 9?|7 start_line_one_indexed 5?|8 end_line_one_indexed_inclusive 5?|9 relative_workspace_path 9|10 did_shorten_char_range 8|11 read_full_file 8?|12 total_lines 5?|13 matching_cursor_rules #0*|14 file_git_context #1", s.DX, s.fL];
  }
}
class pt extends y {
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
    return ["ReadFileStream"];
  }
}
class ft extends y {
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
    return ["RipgrepSearchParams|1 options #0|2 pattern_info #1", _t, ht];
  }
}
class ht extends y {
  constructor(t) {
    super(), this.pattern = "", n.proto3.util.initPartial(t, this);
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
    return ["RipgrepSearchParams.IPatternInfoProto|1 pattern 9|2 is_reg_exp 8?|3 is_word_match 8?|4 word_separators 9?|5 is_multiline 8?|6 is_unicode 8?|7 is_case_sensitive 8?|8 notebook_info #0|9 pattern_was_escaped 8?", gt];
  }
}
class gt extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new gt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new gt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new gt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(gt, t, r);
  }
  static $() {
    return ["RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto|1 is_in_notebook_markdown_input 8?|2 is_in_notebook_markdown_preview 8?|3 is_in_notebook_cell_input 8?|4 is_in_notebook_cell_output 8?"];
  }
}
class _t extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _t().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _t().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _t().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_t, t, r);
  }
  static $() {
    return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto|1 preview_options #0|2 file_encoding 9?|3 surrounding_context 5?|4 is_smart_case 8?|5 notebook_search_config #1|6 exclude_pattern #2|7 include_pattern #3|8 expand_patterns 8?|9 max_results 5?|10 max_file_size 5?|11 disregard_ignore_files 8?|12 disregard_global_ignore_files 8?|13 disregard_parent_ignore_files 8?|14 disregard_exclude_settings 8?|15 disregard_search_exclude_settings 8?|16 ignore_symlinks 8?|17 only_open_editors 8?|18 only_file_scheme 8?|19 reason 9?|20 extra_file_resources #4", qt, Bt, yt, St, wt];
  }
}
class wt extends y {
  constructor(t) {
    super(), this.extraFileResources = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new wt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new wt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new wt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(wt, t, r);
  }
  static $() {
    return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto|1 extra_file_resources 9*"];
  }
}
class yt extends y {
  constructor(t) {
    super(), this.excludePattern = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new yt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new yt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new yt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(yt, t, r);
  }
  static $() {
    return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto|1 exclude_pattern #0*", Jt];
  }
}
class Jt extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Jt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Jt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Jt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Jt, t, r);
  }
  static $() {
    return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto|1 uri 9?|2 pattern #0", St];
  }
}
class St extends y {
  constructor(t) {
    super(), this.patterns = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new St().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new St().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new St().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(St, t, r);
  }
  static $() {
    return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto|1 pattern 9?|2 patterns 9*"];
  }
}
class qt extends y {
  constructor(t) {
    super(), this.matchLines = 0, this.charsPerLine = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new qt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new qt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new qt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(qt, t, r);
  }
  static $() {
    return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto|1 match_lines 5|2 chars_per_line 5"];
  }
}
class Bt extends y {
  constructor(t) {
    super(), this.includeMarkupInput = !1, this.includeMarkupPreview = !1, this.includeCodeInput = !1, this.includeOutput = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Bt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Bt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Bt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Bt, t, r);
  }
  static $() {
    return ["RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto|1 include_markup_input 8|2 include_markup_preview 8|3 include_code_input 8|4 include_output 8"];
  }
}
class bt extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new bt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new bt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new bt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(bt, t, r);
  }
  static $() {
    return ["RipgrepSearchResult|1 internal #0", Pt];
  }
}
class Pt extends y {
  constructor(t) {
    super(), this.results = [], this.messages = [], this.stats = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Pt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Pt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Pt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Pt, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal|1 results #0*|2 exit #1?|3 limit_hit 8?|4 messages #2*|5 file_search_stats #3 stats|6 text_search_stats #4 stats", vt, xt, Ut, At, Ot];
  }
}
var It = (0, _.QT)(n.proto3, w, "RipgrepSearchResultInternal.TextSearchCompleteMessageType", [[0, "UNSPECIFIED"], [1, "INFORMATION"], [2, "WARNING"]], 1),
  xt = (0, _.QT)(n.proto3, w, "RipgrepSearchResultInternal.SearchCompletionExitCode", [[0, "UNSPECIFIED"], [1, "NORMAL"], [2, "NEW_SEARCH_STARTED"]], 1);
class vt extends y {
  constructor(t) {
    super(), this.resource = "", this.results = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new vt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new vt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new vt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(vt, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.IFileMatch|1 resource 9|2 results #0*", Rt];
  }
}
class Rt extends y {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Rt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Rt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Rt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Rt, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.ITextSearchResult|1 match #0 result|2 context #1 result", Et, kt];
  }
}
class Et extends y {
  constructor(t) {
    super(), this.rangeLocations = [], this.previewText = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Et().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Et().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Et().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Et, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.ITextSearchMatch|1 uri 9?|2 range_locations #0*|3 preview_text 9|4 webview_index 5?|5 cell_fragment 9?", Tt];
  }
}
class kt extends y {
  constructor(t) {
    super(), this.text = "", this.lineNumber = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new kt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new kt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new kt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(kt, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.ITextSearchContext|1 uri 9?|2 text 9|3 line_number 5"];
  }
}
class Tt extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Tt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Tt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Tt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Tt, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.ISearchRangeSetPairing|1 source #0|2 preview #0", Ct];
  }
}
class Ct extends y {
  constructor(t) {
    super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ct().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ct().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ct().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ct, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.ISearchRange|1 start_line_number 5|2 start_column 5|3 end_line_number 5|4 end_column 5"];
  }
}
class Ut extends y {
  constructor(t) {
    super(), this.text = "", this.type = It.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ut().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ut().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ut().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ut, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.ITextSearchCompleteMessage|1 text 9|2 type #0|3 trusted 8?", It];
  }
}
class At extends y {
  constructor(t) {
    super(), this.fromCache = !1, this.detailStats = {
      case: void 0
    }, this.resultCount = 0, this.type = $t.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new At().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new At().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new At().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(At, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.IFileSearchStats|1 from_cache 8|2 search_engine_stats #0 detail_stats|3 cached_search_stats #1 detail_stats|4 file_search_provider_stats #2 detail_stats|5 result_count 5|6 type #3|7 sorting_time 5?", Mt, Dt, Nt, $t];
  }
}
var $t = (0, _.QT)(n.proto3, w, "RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [[0, "UNSPECIFIED"], [1, "FILE_SEARCH_PROVIDER"], [2, "SEARCH_PROCESS"]], 1);
class Ot extends y {
  constructor(t) {
    super(), this.type = jt.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ot().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ot().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ot().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ot, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.ITextSearchStats|1 type #0", jt];
  }
}
var jt = (0, _.QT)(n.proto3, w, "RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [[0, "UNSPECIFIED"], [1, "TEXT_SEARCH_PROVIDER"], [2, "SEARCH_PROCESS"], [3, "AI_TEXT_SEARCH_PROVIDER"]], 1);
class Mt extends y {
  constructor(t) {
    super(), this.fileWalkTime = 0, this.directoriesWalked = 0, this.filesWalked = 0, this.cmdTime = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Mt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Mt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Mt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Mt, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.ISearchEngineStats|1 file_walk_time 5|2 directories_walked 5|3 files_walked 5|4 cmd_time 5|5 cmd_result_count 5?"];
  }
}
class Dt extends y {
  constructor(t) {
    super(), this.cacheWasResolved = !1, this.cacheLookupTime = 0, this.cacheFilterTime = 0, this.cacheEntryCount = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Dt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Dt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Dt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Dt, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.ICachedSearchStats|1 cache_was_resolved 8|2 cache_lookup_time 5|3 cache_filter_time 5|4 cache_entry_count 5"];
  }
}
class Nt extends y {
  constructor(t) {
    super(), this.providerTime = 0, this.postProcessTime = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Nt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Nt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Nt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Nt, t, r);
  }
  static $() {
    return ["RipgrepSearchResultInternal.IFileSearchProviderStats|1 provider_time 5|2 post_process_time 5"];
  }
}
class Gt extends y {
  constructor(t) {
    super(), this.query = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Gt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Gt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Gt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Gt, t, r);
  }
  static $() {
    return ["RipgrepSearchStream|1 query 9"];
  }
}
class Lt extends y {
  constructor(t) {
    super(), this.codeResults = [], this.query = "", this.prReferences = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Lt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Lt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Lt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Lt, t, r);
  }
  static $() {
    return ["ReadSemsearchFilesParams|1 repository_info #0|2 code_results #1*|3 query 9|4 pr_references #2*|5 pr_search_on 8?", l.bn, l.PT, Ze];
  }
}
class Ft extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.missingReason = Kt.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ft().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ft().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ft().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ft, t, r);
  }
  static $() {
    return ["MissingFile|1 relative_workspace_path 9|2 missing_reason #0|3 num_lines 5?", Kt];
  }
}
var Kt = (0, _.QT)(n.proto3, w, "MissingFile.MissingReason", [[0, "UNSPECIFIED"], [1, "TOO_LARGE"], [2, "NOT_FOUND"]], 1);
class zt extends y {
  constructor(t) {
    super(), this.knowledge = "", this.title = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new zt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new zt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new zt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(zt, t, r);
  }
  static $() {
    return ["Knowledge|1 knowledge 9|2 title 9"];
  }
}
class Wt extends y {
  constructor(t) {
    super(), this.sha = "", this.fullPrContents = "", this.score = 0, this.changedFiles = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Wt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Wt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Wt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Wt, t, r);
  }
  static $() {
    return ["ToolPullRequestResult|1 sha 9|2 full_pr_contents 9|3 score 2|4 title 9?|5 summary 9?|6 pr_number 13?|7 changed_files 9*|8 author 9?|9 date 9?"];
  }
}
class Ht extends y {
  constructor(t) {
    super(), this.codeResults = [], this.allFiles = [], this.missingFiles = [], this.knowledgeResults = [], this.prResults = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ht().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ht().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ht().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ht, t, r);
  }
  static $() {
    return ["ReadSemsearchFilesResult|1 code_results #0*|2 all_files #1*|3 missing_files #2*|4 knowledge_results #3*|5 pr_results #4*|6 git_remote_url 9?|7 pr_hydration_timed_out 8?", l.PT, s.ZH, Ft, zt, Wt];
  }
}
class Vt extends y {
  constructor(t) {
    super(), this.numFiles = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Vt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Vt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Vt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Vt, t, r);
  }
  static $() {
    return ["ReadSemsearchFilesStream|1 num_files 5"];
  }
}
class Qt extends y {
  constructor(t) {
    super(), this.query = "", this.topK = 0, this.prReferences = [], this.codeResults = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Qt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Qt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Qt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Qt, t, r);
  }
  static $() {
    return ["SemanticSearchFullParams|1 repository_info #0|2 query 9|3 include_pattern 9?|4 exclude_pattern 9?|5 top_k 5|6 pr_references #1*|7 pr_search_on 8?|8 explanation 9?|9 code_results #2*", l.bn, Ze, l.PT];
  }
}
class Xt extends y {
  constructor(t) {
    super(), this.codeResults = [], this.allFiles = [], this.missingFiles = [], this.knowledgeResults = [], this.prResults = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Xt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Xt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Xt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Xt, t, r);
  }
  static $() {
    return ["SemanticSearchFullResult|1 code_results #0*|2 all_files #1*|3 missing_files #2*|4 knowledge_results #3*|5 pr_results #4*|6 git_remote_url 9?|7 pr_hydration_timed_out 8?", l.PT, s.ZH, Ft, zt, Wt];
  }
}
class Yt extends y {
  constructor(t) {
    super(), this.numFiles = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Yt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Yt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Yt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Yt, t, r);
  }
  static $() {
    return ["SemanticSearchFullStream|1 num_files 5"];
  }
}
class Zt extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Zt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Zt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Zt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Zt, t, r);
  }
  static $() {
    return ["DeleteFileParams|1 relative_workspace_path 9"];
  }
}
class tr extends y {
  constructor(t) {
    super(), this.rejected = !1, this.fileNonExistent = !1, this.fileDeletedSuccessfully = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new tr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new tr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new tr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(tr, t, r);
  }
  static $() {
    return ["DeleteFileResult|1 rejected 8|2 file_non_existent 8|3 file_deleted_successfully 8"];
  }
}
class rr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new rr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new rr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new rr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(rr, t, r);
  }
  static $() {
    return ["DeleteFileStream|1 relative_workspace_path 9"];
  }
}
class er extends y {
  constructor(t) {
    super(), this.tool = S.UNSPECIFIED, this.params = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new er().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new er().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new er().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(er, t, r);
  }
  static $() {
    return ["BuiltinToolCall|1 tool #0|2 search_params #1 params|3 read_chunk_params #2 params|4 gotodef_params #3 params|5 edit_params #4 params|6 undo_edit_params #5 params|7 end_params #6 params|8 new_file_params #7 params|9 add_test_params #8 params|10 run_test_params #9 params|11 delete_test_params #10 params|12 save_file_params #11 params|13 get_tests_params #12 params|14 get_symbols_params #13 params|15 semantic_search_params #14 params|16 get_project_structure_params #15 params|17 create_rm_files_params #16 params|18 run_terminal_commands_params #17 params|19 new_edit_params #18 params|20 read_with_linter_params #19 params|21 add_ui_step_params #20 params|23 read_semsearch_files_params #21 params|26 delete_file_params #22 params|22 tool_call_id 9?", S, Pr, Rr, jr, Fr, kr, Tr, yr, Vr, Zr, se, oe, re, ue, Jr, gr, fr, dr, Gr, lr, sr, Lt, Zt];
  }
}
class nr extends y {
  constructor(t) {
    super(), this.tool = S.UNSPECIFIED, this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new nr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new nr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new nr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(nr, t, r);
  }
  static $() {
    return ["BuiltinToolResult|1 tool #0|2 search_result #1 result|3 read_chunk_result #2 result|4 gotodef_result #3 result|5 edit_result #4 result|6 undo_edit_result #5 result|7 end_result #6 result|8 new_file_result #7 result|9 add_test_result #8 result|10 run_test_result #9 result|11 delete_test_result #10 result|12 save_file_result #11 result|13 get_tests_result #12 result|14 get_symbols_result #13 result|15 semantic_search_result #14 result|16 get_project_structure_result #15 result|17 create_rm_files_result #16 result|18 run_terminal_commands_result #17 result|19 new_edit_result #18 result|20 read_with_linter_result #19 result|21 add_ui_step_result #20 result|22 read_semsearch_files_result #21 result|24 delete_file_result #22 result", S, vr, Er, Dr, zr, Ur, Ar, Cr, Qr, te, ie, ae, ee, le, Br, _r, hr, pr, Lr, mr, ar, Ht, tr];
  }
}
class sr extends y {
  constructor(t) {
    super(), this.conversationId = "", this.step = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new sr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new sr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new sr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(sr, t, r);
  }
  static $() {
    return ["AddUiStepParams|1 conversation_id 9|2 search_results #0 step", or];
  }
}
class ir extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ir().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ir().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ir().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ir, t, r);
  }
  static $() {
    return ["AddUiStepParams.SearchResult|1 relative_workspace_path 9"];
  }
}
class or extends y {
  constructor(t) {
    super(), this.searchResults = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new or().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new or().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new or().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(or, t, r);
  }
  static $() {
    return ["AddUiStepParams.SearchResults|1 search_results #0*", ir];
  }
}
class ar extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ar().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ar().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ar().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ar, t, r);
  }
  static $() {
    return ["AddUiStepResult"];
  }
}
class ur extends y {
  constructor(t) {
    super(), this.toolCall = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ur().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ur().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ur().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ur, t, r);
  }
  static $() {
    return ["ToolCall|1 builtin_tool_call #0 tool_call|2 custom_tool_call #1 tool_call", er, $r];
  }
}
class cr extends y {
  constructor(t) {
    super(), this.toolResult = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new cr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new cr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new cr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(cr, t, r);
  }
  static $() {
    return ["ToolResult|1 builtin_tool_result #0 tool_result|2 custom_tool_result #1 tool_result|3 error_tool_result #2 tool_result", nr, Or, Nr];
  }
}
class lr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new lr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new lr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new lr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(lr, t, r);
  }
  static $() {
    return ["ReadWithLinterParams|1 relative_workspace_path 9"];
  }
}
class mr extends y {
  constructor(t) {
    super(), this.contents = "", this.diagnostics = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new mr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new mr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new mr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(mr, t, r);
  }
  static $() {
    return ["ReadWithLinterResult|1 contents 9|2 diagnostics #0*", s.oQ];
  }
}
class dr extends y {
  constructor(t) {
    super(), this.commands = [], this.commandsUuid = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new dr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new dr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new dr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(dr, t, r);
  }
  static $() {
    return ["RunTerminalCommandsParams|1 commands 9*|2 commands_uuid 9"];
  }
}
class pr extends y {
  constructor(t) {
    super(), this.outputs = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new pr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new pr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new pr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(pr, t, r);
  }
  static $() {
    return ["RunTerminalCommandsResult|1 outputs 9*"];
  }
}
class fr extends y {
  constructor(t) {
    super(), this.removedFilePaths = [], this.createdFilePaths = [], this.createdDirectoryPaths = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new fr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new fr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new fr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(fr, t, r);
  }
  static $() {
    return ["CreateRmFilesParams|1 removed_file_paths 9*|2 created_file_paths 9*|3 created_directory_paths 9*"];
  }
}
class hr extends y {
  constructor(t) {
    super(), this.createdFilePaths = [], this.removedFilePaths = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new hr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new hr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new hr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(hr, t, r);
  }
  static $() {
    return ["CreateRmFilesResult|1 created_file_paths 9*|2 removed_file_paths 9*"];
  }
}
class gr extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new gr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new gr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new gr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(gr, t, r);
  }
  static $() {
    return ["GetProjectStructureParams"];
  }
}
class _r extends y {
  constructor(t) {
    super(), this.files = [], this.rootWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _r().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _r().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _r().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_r, t, r);
  }
  static $() {
    return ["GetProjectStructureResult|1 files #0*|2 root_workspace_path 9", wr];
  }
}
class wr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.outline = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new wr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new wr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new wr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(wr, t, r);
  }
  static $() {
    return ["GetProjectStructureResult.File|1 relative_workspace_path 9|2 outline 9"];
  }
}
class yr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new yr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new yr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new yr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(yr, t, r);
  }
  static $() {
    return ["NewFileParams|1 relative_workspace_path 9"];
  }
}
class Jr extends y {
  constructor(t) {
    super(), this.query = "", this.topK = 0, this.grabWholeFile = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Jr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Jr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Jr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Jr, t, r);
  }
  static $() {
    return ["SemanticSearchParams|1 query 9|2 include_pattern 9?|3 exclude_pattern 9?|4 top_k 5|5 index_id 9?|6 grab_whole_file 8"];
  }
}
class Sr extends y {
  constructor(t) {
    super(), this.startLine = 0, this.startCharacter = 0, this.endLine = 0, this.endCharacter = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Sr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Sr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Sr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Sr, t, r);
  }
  static $() {
    return ["Range|1 start_line 5|2 start_character 5|3 end_line 5|4 end_character 5"];
  }
}
class qr extends y {
  constructor(t) {
    super(), this.start = 0, this.end = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new qr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new qr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new qr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(qr, t, r);
  }
  static $() {
    return ["MatchRange|1 start 5|2 end 5"];
  }
}
class Br extends y {
  constructor(t) {
    super(), this.results = [], this.files = {}, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Br().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Br().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Br().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Br, t, r);
  }
  static $() {
    return ["SemanticSearchResult|1 results #0*|2 files 9,9", br];
  }
}
class br extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.score = 0, this.content = "", this.detailedLines = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new br().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new br().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new br().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(br, t, r);
  }
  static $() {
    return ["SemanticSearchResult.Item|1 relative_workspace_path 9|2 score 2|3 content 9|4 range #0|5 original_content 9?|6 detailed_lines #1*", s._u, s.d7];
  }
}
class Pr extends y {
  constructor(t) {
    super(), this.query = "", this.regex = !1, this.includePattern = "", this.excludePattern = "", this.filenameSearch = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Pr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Pr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Pr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Pr, t, r);
  }
  static $() {
    return ["SearchParams|1 query 9|2 regex 8|3 include_pattern 9|4 exclude_pattern 9|5 filename_search 8"];
  }
}
class Ir extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.numMatches = 0, this.potentiallyRelevantLines = [], this.cropped = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ir().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ir().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ir().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ir, t, r);
  }
  static $() {
    return ["SearchToolFileSearchResult|1 relative_workspace_path 9|2 num_matches 5|3 potentially_relevant_lines #0*|4 cropped 8", xr];
  }
}
class xr extends y {
  constructor(t) {
    super(), this.lineNumber = 0, this.text = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new xr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new xr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new xr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(xr, t, r);
  }
  static $() {
    return ["SearchToolFileSearchResult.Line|1 line_number 5|2 text 9"];
  }
}
class vr extends y {
  constructor(t) {
    super(), this.fileResults = [], this.numTotalMatches = 0, this.numTotalMatchedFiles = 0, this.numTotalMayBeIncomplete = !1, this.filesOnly = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new vr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new vr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new vr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(vr, t, r);
  }
  static $() {
    return ["SearchResult|1 file_results #0*|2 num_total_matches 5|3 num_total_matched_files 5|4 num_total_may_be_incomplete 8|5 files_only 8", Ir];
  }
}
class Rr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Rr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Rr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Rr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Rr, t, r);
  }
  static $() {
    return ["ReadChunkParams|1 relative_workspace_path 9|2 start_line_number 5|3 num_lines 5?"];
  }
}
class Er extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.totalNumLines = 0, this.cropped = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Er().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Er().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Er().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Er, t, r);
  }
  static $() {
    return ["ReadChunkResult|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 total_num_lines 5|5 cropped 8"];
  }
}
class kr extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new kr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new kr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new kr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(kr, t, r);
  }
  static $() {
    return ["UndoEditParams"];
  }
}
class Tr extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Tr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Tr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Tr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Tr, t, r);
  }
  static $() {
    return ["EndParams"];
  }
}
class Cr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.fileTotalLines = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Cr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Cr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Cr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Cr, t, r);
  }
  static $() {
    return ["NewFileResult|1 relative_workspace_path 9|2 file_total_lines 5"];
  }
}
class Ur extends y {
  constructor(t) {
    super(), this.feedback = [], this.relativeWorkspacePath = "", this.contextStartLineNumber = 0, this.contextLines = [], this.contextTotalNumLines = 0, this.fileTotalLines = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ur().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ur().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ur().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ur, t, r);
  }
  static $() {
    return ["UndoEditResult|1 feedback 9*|4 relative_workspace_path 9|2 context_start_line_number 5|3 context_lines 9*|5 context_total_num_lines 5|6 file_total_lines 5"];
  }
}
class Ar extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ar().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ar().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ar().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ar, t, r);
  }
  static $() {
    return ["EndResult"];
  }
}
class $r extends y {
  constructor(t) {
    super(), this.toolId = "", this.params = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $r().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $r().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $r().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals($r, t, r);
  }
  static $() {
    return ["CustomToolCall|1 tool_id 9|2 params 9"];
  }
}
class Or extends y {
  constructor(t) {
    super(), this.toolId = "", this.result = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Or().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Or().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Or().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Or, t, r);
  }
  static $() {
    return ["CustomToolResult|1 tool_id 9|2 result 9"];
  }
}
class jr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.symbol = "", this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new jr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new jr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new jr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(jr, t, r);
  }
  static $() {
    return ["GotodefParams|1 relative_workspace_path 9|2 symbol 9|3 start_line 5|4 end_line 5"];
  }
}
class Mr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.startLine = 0, this.endLine = 0, this.codeContextLines = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Mr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Mr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Mr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Mr, t, r);
  }
  static $() {
    return ["GotodefDefinition|1 relative_workspace_path 9|2 fully_qualified_name 9?|3 symbol_kind 9?|4 start_line 5|5 end_line 5|6 code_context_lines 9*"];
  }
}
class Dr extends y {
  constructor(t) {
    super(), this.definitions = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Dr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Dr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Dr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Dr, t, r);
  }
  static $() {
    return ["GotodefResult|1 definitions #0*", Mr];
  }
}
class Nr extends y {
  constructor(t) {
    super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Nr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Nr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Nr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Nr, t, r);
  }
  static $() {
    return ["ErrorToolResult|1 error_message 9"];
  }
}
class Gr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.text = "", this.editId = "", this.firstEdit = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Gr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Gr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Gr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Gr, t, r);
  }
  static $() {
    return ["NewEditParams|1 relative_workspace_path 9|2 start_line_number 5?|3 end_line_number 5?|4 text 9|5 edit_id 9|6 first_edit 8"];
  }
}
class Lr extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Lr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Lr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Lr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Lr, t, r);
  }
  static $() {
    return ["NewEditResult"];
  }
}
class Fr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.replaceNumLines = 0, this.newLines = [], this.editId = "", this.frontendEditType = Kr.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Fr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Fr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Fr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Fr, t, r);
  }
  static $() {
    return ["EditParams|1 relative_workspace_path 9|2 line_number 5?|3 replace_num_lines 5|4 new_lines 9*|7 replace_whole_file 8?|5 edit_id 9|6 frontend_edit_type #0|8 auto_fix_all_linter_errors_in_file 8?", Kr];
  }
}
var Kr = (0, _.QT)(n.proto3, w, "EditParams.FrontendEditType", [[0, "UNSPECIFIED"], [1, "INLINE_DIFFS"], [2, "SIMPLE"]], 1);
class zr extends y {
  constructor(t) {
    super(), this.feedback = [], this.contextStartLineNumber = 0, this.contextLines = [], this.file = "", this.fileTotalLines = 0, this.structuredFeedback = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new zr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new zr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new zr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(zr, t, r);
  }
  static $() {
    return ["EditResult|1 feedback 9*|2 context_start_line_number 5|3 context_lines 9*|4 file 9|5 file_total_lines 5|6 structured_feedback #0*", Hr];
  }
}
class Wr extends y {
  constructor(t) {
    super(), this.message = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Wr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Wr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Wr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Wr, t, r);
  }
  static $() {
    return ["EditResult.RelatedInformation|1 message 9|2 start_line_number 5|3 end_line_number 5|4 relative_workspace_path 9"];
  }
}
class Hr extends y {
  constructor(t) {
    super(), this.message = "", this.severity = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relatedInformation = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Hr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Hr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Hr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Hr, t, r);
  }
  static $() {
    return ["EditResult.Feedback|1 message 9|2 severity 9|3 start_line_number 5|4 end_line_number 5|5 related_information #0*", Wr];
  }
}
class Vr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.testName = "", this.testCode = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Vr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Vr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Vr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Vr, t, r);
  }
  static $() {
    return ["AddTestParams|1 relative_workspace_path 9|2 test_name 9|3 test_code 9"];
  }
}
class Qr extends y {
  constructor(t) {
    super(), this.feedback = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Qr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Qr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Qr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Qr, t, r);
  }
  static $() {
    return ["AddTestResult|1 feedback #0*", Yr];
  }
}
class Xr extends y {
  constructor(t) {
    super(), this.message = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Xr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Xr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Xr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Xr, t, r);
  }
  static $() {
    return ["AddTestResult.RelatedInformation|1 message 9|2 start_line_number 5|3 end_line_number 5|4 relative_workspace_path 9"];
  }
}
class Yr extends y {
  constructor(t) {
    super(), this.message = "", this.severity = "", this.startLineNumber = 0, this.endLineNumber = 0, this.relatedInformation = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Yr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Yr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Yr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Yr, t, r);
  }
  static $() {
    return ["AddTestResult.Feedback|1 message 9|2 severity 9|3 start_line_number 5|4 end_line_number 5|5 related_information #0*", Xr];
  }
}
class Zr extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Zr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Zr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Zr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Zr, t, r);
  }
  static $() {
    return ["RunTestParams|1 relative_workspace_path 9|2 test_name 9?"];
  }
}
class te extends y {
  constructor(t) {
    super(), this.result = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new te().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new te().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new te().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(te, t, r);
  }
  static $() {
    return ["RunTestResult|1 result 9"];
  }
}
class re extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new re().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new re().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new re().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(re, t, r);
  }
  static $() {
    return ["GetTestsParams|1 relative_workspace_path 9"];
  }
}
class ee extends y {
  constructor(t) {
    super(), this.tests = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ee().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ee().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ee().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ee, t, r);
  }
  static $() {
    return ["GetTestsResult|1 tests #0*", ne];
  }
}
class ne extends y {
  constructor(t) {
    super(), this.name = "", this.lines = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ne().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ne().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ne().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ne, t, r);
  }
  static $() {
    return ["GetTestsResult.Test|1 name 9|2 lines 9*"];
  }
}
class se extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new se().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new se().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new se().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(se, t, r);
  }
  static $() {
    return ["DeleteTestParams|1 relative_workspace_path 9|2 test_name 9?"];
  }
}
class ie extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ie().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ie().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ie().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ie, t, r);
  }
  static $() {
    return ["DeleteTestResult"];
  }
}
class oe extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new oe().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new oe().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new oe().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(oe, t, r);
  }
  static $() {
    return ["SaveFileParams|1 relative_workspace_path 9"];
  }
}
class ae extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ae().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ae().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ae().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ae, t, r);
  }
  static $() {
    return ["SaveFileResult"];
  }
}
class ue extends y {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.includeChildren = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ue().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ue().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ue().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ue, t, r);
  }
  static $() {
    return ["GetSymbolsParams|1 relative_workspace_path 9|2 line_range #0?|3 include_children 8", ce];
  }
}
class ce extends y {
  constructor(t) {
    super(), this.startLineNumber = 0, this.endLineNumberInclusive = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ce().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ce().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ce().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ce, t, r);
  }
  static $() {
    return ["GetSymbolsParams.LineRange|1 start_line_number 5|2 end_line_number_inclusive 5"];
  }
}
class le extends y {
  constructor(t) {
    super(), this.symbols = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new le().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new le().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new le().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(le, t, r);
  }
  static $() {
    return ["GetSymbolsResult|1 symbols #0*", s.Az];
  }
}
class me extends y {
  constructor(t) {
    super(), this.parsingFailed = !1, this.executableCommands = [], this.hasRedirects = !1, this.hasCommandSubstitution = !1, this.redirects = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new me().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new me().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new me().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(me, t, r);
  }
  static $() {
    return ["ShellCommandParsingResult|1 parsing_failed 8|2 executable_commands #0*|3 has_redirects 8|4 has_command_substitution 8|5 all_redirects_are_dev_null 8?|6 redirects #1*", pe, fe];
  }
}
class de extends y {
  constructor(t) {
    super(), this.type = "", this.value = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new de().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new de().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new de().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(de, t, r);
  }
  static $() {
    return ["ShellCommandParsingResult.ExecutableCommandArg|1 type 9|2 value 9"];
  }
}
class pe extends y {
  constructor(t) {
    super(), this.name = "", this.args = [], this.fullText = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new pe().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new pe().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new pe().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(pe, t, r);
  }
  static $() {
    return ["ShellCommandParsingResult.ExecutableCommand|1 name 9|2 args #0*|3 full_text 9", de];
  }
}
class fe extends y {
  constructor(t) {
    super(), this.operator = "", this.destinationFds = [], this.targetNodeType = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new fe().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new fe().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new fe().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(fe, t, r);
  }
  static $() {
    return ["ShellCommandParsingResult.Redirect|1 operator 9|2 destination_fds 13*|3 target_node_type 9|4 target_text 9?"];
  }
}
class he extends y {
  constructor(t) {
    super(), this.command = "", this.isBackground = !1, this.requireUserApproval = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new he().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new he().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new he().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(he, t, r);
  }
  static $() {
    return ["RunTerminalCommandV2Params|1 command 9|2 cwd 9?|3 new_session 8?|4 options #0?|5 is_background 8|6 require_user_approval 8|7 parsing_result #1?|8 idle_timeout_seconds 5?|9 requested_sandbox_policy #2?|10 file_output_threshold_bytes 3?|11 command_description 9?|12 classifier_result #3?", ge, me, m.Mw, d.E4];
  }
}
class ge extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ge().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ge().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ge().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ge, t, r);
  }
  static $() {
    return ["RunTerminalCommandV2Params.ExecutionOptions|1 timeout 5?|2 skip_ai_check 8?|3 command_run_timeout_ms 5?|4 command_change_check_interval_ms 5?|5 ai_finish_check_max_attempts 5?|6 ai_finish_check_interval_ms 5?|7 delayer_interval_ms 5?|8 ai_check_for_hangs 8?"];
  }
}
class _e extends y {
  constructor(t) {
    super(), this.filePath = "", this.sizeBytes = n.protoInt64.zero, this.lineCount = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _e().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _e().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _e().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_e, t, r);
  }
  static $() {
    return ["OutputLocation|1 file_path 9|2 size_bytes 3|3 line_count 3"];
  }
}
class we extends y {
  constructor(t) {
    super(), this.output = "", this.exitCode = 0, this.poppedOutIntoBackground = !1, this.isRunningInBackground = !1, this.notInterrupted = !1, this.resultingWorkingDirectory = "", this.didUserChange = !1, this.endedReason = q.UNSPECIFIED, this.outputRaw = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new we().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new we().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new we().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(we, t, r);
  }
  static $() {
    return ["RunTerminalCommandV2Result|1 output 9|2 exit_code 5|3 rejected 8?|4 popped_out_into_background 8|5 is_running_in_background 8|6 not_interrupted 8|7 resulting_working_directory 9|8 did_user_change 8|9 ended_reason #0|10 exit_code_v2 5?|11 updated_command 9?|12 output_raw 9|13 human_review_v2 #1?|14 effective_sandbox_policy #2?|15 terminal_instance_id 5?|16 output_location #3?|17 terminal_instance_path 9?|18 background_shell_id 13?", q, rt, m.Mw, _e];
  }
}
class ye extends y {
  constructor(t) {
    super(), this.command = "", this.isBackground = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ye().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ye().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ye().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ye, t, r);
  }
  static $() {
    return ["RunTerminalCommandV2Stream|1 command 9|2 is_background 8|7 parsing_result #0?|8 idle_timeout_seconds 5?|9 requested_sandbox_policy #1?", me, m.Mw];
  }
}
class Je extends y {
  constructor(t) {
    super(), this.ruleNames = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Je().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Je().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Je().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Je, t, r);
  }
  static $() {
    return ["FetchRulesStream|1 rule_names 9*"];
  }
}
class Se extends y {
  constructor(t) {
    super(), this.searchTerm = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Se().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Se().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Se().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Se, t, r);
  }
  static $() {
    return ["WebSearchParams|1 search_term 9"];
  }
}
class qe extends y {
  constructor(t) {
    super(), this.references = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new qe().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new qe().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new qe().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(qe, t, r);
  }
  static $() {
    return ["WebSearchResult|1 references #0*|2 is_final 8?|3 rejected 8?", Be];
  }
}
class Be extends y {
  constructor(t) {
    super(), this.title = "", this.url = "", this.chunk = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Be().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Be().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Be().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Be, t, r);
  }
  static $() {
    return ["WebSearchResult.WebReference|1 title 9|2 url 9|3 chunk 9"];
  }
}
class be extends y {
  constructor(t) {
    super(), this.searchTerm = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new be().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new be().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new be().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(be, t, r);
  }
  static $() {
    return ["WebSearchStream|1 search_term 9"];
  }
}
class Pe extends y {
  constructor(t) {
    super(), this.tools = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Pe().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Pe().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Pe().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Pe, t, r);
  }
  static $() {
    return ["MCPParams|1 tools #0*|2 file_output_threshold_bytes 3?", Ie];
  }
}
class Ie extends y {
  constructor(t) {
    super(), this.name = "", this.description = "", this.parameters = "", this.serverName = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ie().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ie().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ie().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ie, t, r);
  }
  static $() {
    return ["MCPParams.Tool|1 name 9|2 description 9|3 parameters 9|4 server_name 9|5 transcript_display #0?", xe];
  }
}
class xe extends y {
  constructor(t) {
    super(), this.loading = "", this.success = "", this.error = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new xe().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new xe().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new xe().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(xe, t, r);
  }
  static $() {
    return ["MCPParams.TranscriptDisplay|1 loading 9|2 success 9|3 error 9"];
  }
}
class ve extends y {
  constructor(t) {
    super(), this.selectedTool = "", this.result = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ve().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ve().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ve().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ve, t, r);
  }
  static $() {
    return ["MCPResult|1 selected_tool 9|2 result 9"];
  }
}
class Re extends y {
  constructor(t) {
    super(), this.tools = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Re().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Re().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Re().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Re, t, r);
  }
  static $() {
    return ["MCPStream|1 tools #0*", Ie];
  }
}
class Ee extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ee().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ee().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ee().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ee, t, r);
  }
  static $() {
    return ["ListMcpResourcesParams|1 server 9?"];
  }
}
class ke extends y {
  constructor(t) {
    super(), this.resources = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ke().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ke().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ke().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ke, t, r);
  }
  static $() {
    return ["ListMcpResourcesResult|1 resources #0*", Te];
  }
}
class Te extends y {
  constructor(t) {
    super(), this.uri = "", this.server = "", this.annotations = {}, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Te().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Te().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Te().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Te, t, r);
  }
  static $() {
    return ["ListMcpResourcesResult.MCPResource|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 server 9|6 annotations 9,9"];
  }
}
class Ce extends y {
  constructor(t) {
    super(), this.server = "", this.uri = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ce().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ce().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ce().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ce, t, r);
  }
  static $() {
    return ["ReadMcpResourceParams|1 server 9|2 uri 9|3 download_path 9?"];
  }
}
class Ue extends y {
  constructor(t) {
    super(), this.uri = "", this.content = {
      case: void 0
    }, this.annotations = {}, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ue().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ue().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ue().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ue, t, r);
  }
  static $() {
    return ["ReadMcpResourceResult|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 text 9 content|6 blob 12 content|7 annotations 9,9"];
  }
}
class Ae extends y {
  constructor(t) {
    super(), this.server = "", this.toolName = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ae().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ae().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ae().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ae, t, r);
  }
  static $() {
    return ["CallMcpToolParams|1 server 9|2 tool_name 9|3 tool_args #0", n.Struct];
  }
}
class $e extends y {
  constructor(t) {
    super(), this.server = "", this.toolName = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $e().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $e().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $e().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals($e, t, r);
  }
  static $() {
    return ["CallMcpToolResult|1 server 9|2 tool_name 9|3 result #0", n.Struct];
  }
}
class Oe extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Oe().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Oe().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Oe().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Oe, t, r);
  }
  static $() {
    return ["GetMcpToolsParams|1 server 9?|2 tool_name 9?|3 pattern 9?"];
  }
}
class je extends y {
  constructor(t) {
    super(), this.content = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new je().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new je().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new je().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(je, t, r);
  }
  static $() {
    return ["GetMcpToolsResult|1 content 9|2 output_file_path 9?"];
  }
}
class Me extends y {
  constructor(t) {
    super(), this.query = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Me().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Me().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Me().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Me, t, r);
  }
  static $() {
    return ["SearchSymbolsParams|1 query 9"];
  }
}
class De extends y {
  constructor(t) {
    super(), this.matches = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new De().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new De().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new De().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(De, t, r);
  }
  static $() {
    return ["SearchSymbolsResult|1 matches #0*|2 rejected 8?", Ne];
  }
}
class Ne extends y {
  constructor(t) {
    super(), this.name = "", this.uri = "", this.secondaryText = "", this.labelMatches = [], this.descriptionMatches = [], this.score = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ne().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ne().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ne().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ne, t, r);
  }
  static $() {
    return ["SearchSymbolsResult.SymbolMatch|1 name 9|2 uri 9|3 range #0|4 secondary_text 9|5 label_matches #1*|6 description_matches #1*|7 score 1", Sr, qr];
  }
}
class Ge extends y {
  constructor(t) {
    super(), this.query = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ge().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ge().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ge().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ge, t, r);
  }
  static $() {
    return ["SearchSymbolsStream|1 query 9"];
  }
}
class Le extends y {
  constructor(t) {
    super(), this.proposedFollowup = "", this.bcId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Le().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Le().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Le().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Le, t, r);
  }
  static $() {
    return ["BackgroundComposerFollowupParams|1 proposed_followup 9|2 bc_id 9"];
  }
}
class Fe extends y {
  constructor(t) {
    super(), this.proposedFollowup = "", this.isSent = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Fe().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Fe().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Fe().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Fe, t, r);
  }
  static $() {
    return ["BackgroundComposerFollowupResult|1 proposed_followup 9|2 is_sent 8"];
  }
}
class Ke extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ke().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ke().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ke().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ke, t, r);
  }
  static $() {
    return ["BackgroundComposerFollowupStream"];
  }
}
class ze extends y {
  constructor(t) {
    super(), this.knowledgeToStore = "", this.title = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ze().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ze().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ze().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ze, t, r);
  }
  static $() {
    return ["KnowledgeBaseParams|1 knowledge_to_store 9|2 title 9|3 existing_knowledge_id 9?|4 action 9?"];
  }
}
class We extends y {
  constructor(t) {
    super(), this.success = !1, this.confirmationMessage = "", this.id = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new We().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new We().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new We().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(We, t, r);
  }
  static $() {
    return ["KnowledgeBaseResult|1 success 8|2 confirmation_message 9|3 id 9"];
  }
}
class He extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new He().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new He().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new He().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(He, t, r);
  }
  static $() {
    return ["KnowledgeBaseStream"];
  }
}
class Ve extends y {
  constructor(t) {
    super(), this.pullNumberOrCommitHash = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ve().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ve().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ve().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ve, t, r);
  }
  static $() {
    return ["FetchPullRequestParams|1 pull_number_or_commit_hash 9|2 repo 9?|3 is_github 8?"];
  }
}
class Qe extends y {
  constructor(t) {
    super(), this.content = "", this.prNumber = 0, this.title = "", this.body = "", this.author = "", this.date = "", this.diff = "", this.comments = [], this.labels = [], this.assignees = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Qe().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Qe().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Qe().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Qe, t, r);
  }
  static $() {
    return ["FetchPullRequestResult|1 content 9|2 pr_number 13|3 title 9|4 body 9|5 author 9|6 date 9|7 diff 9|8 sha 9?|9 external_link 9?|10 url 9?|11 comments #0*|12 labels 9*|13 assignees 9*|14 is_issue 8?|15 state 9?|16 prompt_connect_github 8?", Xe];
  }
}
class Xe extends y {
  constructor(t) {
    super(), this.id = 0, this.body = "", this.createdAt = "", this.updatedAt = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Xe().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Xe().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Xe().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Xe, t, r);
  }
  static $() {
    return ["IssueComment|1 id 13|2 body 9|3 author 9?|4 created_at 9|5 updated_at 9|6 author_association 9?"];
  }
}
class Ye extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ye().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ye().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ye().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ye, t, r);
  }
  static $() {
    return ["FetchPullRequestStream"];
  }
}
class Ze extends y {
  constructor(t) {
    super(), this.sha = "", this.score = 0, this.changedFiles = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ze().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ze().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ze().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ze, t, r);
  }
  static $() {
    return ["PullRequestReference|1 sha 9|2 score 2|3 title 9?|4 summary 9?|5 pr_number 13?|6 author 9?|7 date 9?|8 changed_files 9*"];
  }
}
class tn extends y {
  constructor(t) {
    super(), this.query = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new tn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new tn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new tn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(tn, t, r);
  }
  static $() {
    return ["DeepSearchParams|1 query 9"];
  }
}
class rn extends y {
  constructor(t) {
    super(), this.success = !1, this.result = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new rn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new rn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new rn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(rn, t, r);
  }
  static $() {
    return ["DeepSearchResult|1 success 8|2 result 9"];
  }
}
class en extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new en().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new en().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new en().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(en, t, r);
  }
  static $() {
    return ["DeepSearchStream"];
  }
}
class nn extends y {
  constructor(t) {
    super(), this.content = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new nn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new nn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new nn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(nn, t, r);
  }
  static $() {
    return ["CreateDiagramParams|1 content 9"];
  }
}
class sn extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new sn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new sn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new sn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(sn, t, r);
  }
  static $() {
    return ["CreateDiagramResult|1 error 9?"];
  }
}
class on extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new on().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new on().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new on().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(on, t, r);
  }
  static $() {
    return ["CreateDiagramStream"];
  }
}
class an extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new an().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new an().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new an().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(an, t, r);
  }
  static $() {
    return ["FixLintsParams"];
  }
}
class un extends y {
  constructor(t) {
    super(), this.fileResults = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new un().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new un().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new un().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(un, t, r);
  }
  static $() {
    return ["FixLintsResult|1 file_results #0*", cn];
  }
}
class cn extends y {
  constructor(t) {
    super(), this.filePath = "", this.isApplied = !1, this.applyFailed = !1, this.linterErrors = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new cn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new cn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new cn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(cn, t, r);
  }
  static $() {
    return ["FixLintsResult.FileResult|1 file_path 9|2 diff #0|3 is_applied 8|4 apply_failed 8|5 error 9?|6 linter_errors #1*", H, s.bO];
  }
}
class ln extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ln().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ln().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ln().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ln, t, r);
  }
  static $() {
    return ["FixLintsStream"];
  }
}
class mn extends y {
  constructor(t) {
    super(), this.path = "", this.paths = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new mn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new mn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new mn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(mn, t, r);
  }
  static $() {
    return ["ReadLintsParams|1 path 9|2 paths 9*"];
  }
}
class dn extends y {
  constructor(t) {
    super(), this.path = "", this.linterErrors = [], this.linterErrorsByFile = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new dn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new dn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new dn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(dn, t, r);
  }
  static $() {
    return ["ReadLintsResult|1 path 9|2 linter_errors #0*|3 linter_errors_by_file #1*", s.bO, s.wZ];
  }
}
class pn extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new pn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new pn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new pn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(pn, t, r);
  }
  static $() {
    return ["ReadLintsStream"];
  }
}
class fn extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new fn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new fn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new fn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(fn, t, r);
  }
  static $() {
    return ["GotodefStream"];
  }
}
class hn extends y {
  constructor(t) {
    super(), this.taskDescription = "", this.taskTitle = "", this.allowedWriteDirectories = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new hn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new hn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new hn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(hn, t, r);
  }
  static $() {
    return ["TaskParams|1 task_description 9|4 task_title 9|2 async 8?|3 allowed_write_directories 9*|5 model_override 9?|6 max_mode_override 8?|7 default_expanded_while_running 8?"];
  }
}
class gn extends y {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new gn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new gn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new gn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(gn, t, r);
  }
  static $() {
    return ["TaskResult|1 completed_task_result #0 result|2 async_task_result #1 result", _n, wn];
  }
}
class _n extends y {
  constructor(t) {
    super(), this.summary = "", this.fileResults = [], this.userAborted = !1, this.subagentErrored = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _n().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _n().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _n().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_n, t, r);
  }
  static $() {
    return ["TaskResult.CompletedTaskResult|1 summary 9|2 file_results #0*|3 user_aborted 8|4 subagent_errored 8", cn];
  }
}
class wn extends y {
  constructor(t) {
    super(), this.taskId = "", this.userAborted = !1, this.subagentErrored = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new wn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new wn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new wn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(wn, t, r);
  }
  static $() {
    return ["TaskResult.AsyncTaskResult|1 task_id 9|2 user_aborted 8|3 subagent_errored 8"];
  }
}
class yn extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new yn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new yn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new yn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(yn, t, r);
  }
  static $() {
    return ["TaskStream"];
  }
}
class Jn extends y {
  constructor(t) {
    super(), this.description = "", this.prompt = "", this.subagentType = "", this.name = "", this.mode = p.FL.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Jn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Jn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Jn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Jn, t, r);
  }
  static $() {
    return ["TaskV2Params|1 description 9|2 prompt 9|3 subagent_type 9|4 model 9?|5 name 9|6 mode #0", p.FL];
  }
}
class Sn extends y {
  constructor(t) {
    super(), this.isBackground = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Sn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Sn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Sn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Sn, t, r);
  }
  static $() {
    return ["TaskV2Result|1 agent_id 9?|2 is_background 8|3 cloud_agent_bc_id 9?"];
  }
}
class qn extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new qn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new qn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new qn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(qn, t, r);
  }
  static $() {
    return ["TaskV2Stream"];
  }
}
class Bn extends y {
  constructor(t) {
    super(), this.pattern = "", this.ignoreGlobs = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Bn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Bn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Bn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Bn, t, r);
  }
  static $() {
    return ["RipgrepRawSearchParams|1 pattern 9|2 path 9?|3 glob 9?|4 output_mode 9?|5 context_before 5?|6 context_after 5?|7 context 5?|8 case_insensitive 8?|9 type 9?|10 head_limit 5?|11 multiline 8?|12 sort 9?|13 sort_ascending 8?|14 ignore_globs 9*|15 offset 5?"];
  }
}
class bn extends y {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new bn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new bn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new bn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(bn, t, r);
  }
  static $() {
    return ["RipgrepRawSearchResult|1 success #0 result|2 error #1 result", In, Pn];
  }
}
class Pn extends y {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Pn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Pn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Pn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Pn, t, r);
  }
  static $() {
    return ["RipgrepRawSearchError|1 error 9"];
  }
}
class In extends y {
  constructor(t) {
    super(), this.pattern = "", this.path = "", this.outputMode = "", this.workspaceResults = {}, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new In().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new In().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new In().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(In, t, r);
  }
  static $() {
    return ["RipgrepRawSearchSuccess|1 pattern 9|2 path 9|3 output_mode 9|4 workspace_results 9,#0|5 active_editor_result #0?", xn];
  }
}
class xn extends y {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new xn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new xn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new xn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(xn, t, r);
  }
  static $() {
    return ["RipgrepRawSearchUnionResult|1 count #0 result|2 files #1 result|3 content #2 result", vn, En, Tn];
  }
}
class vn extends y {
  constructor(t) {
    super(), this.counts = [], this.totalFiles = 0, this.totalMatches = 0, this.clientTruncated = !1, this.ripgrepTruncated = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new vn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new vn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new vn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(vn, t, r);
  }
  static $() {
    return ["RipgrepRawSearchCountResult|1 counts #0*|2 total_files 5|3 total_matches 5|4 client_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?|5 ripgrep_truncated 8", Rn];
  }
}
class Rn extends y {
  constructor(t) {
    super(), this.file = "", this.count = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Rn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Rn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Rn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Rn, t, r);
  }
  static $() {
    return ["RipgrepRawSearchFileCount|1 file 9|2 count 5|3 is_dirty 8?|4 is_out_of_workspace 8?|5 absolute_path 9?"];
  }
}
class En extends y {
  constructor(t) {
    super(), this.files = [], this.totalFiles = 0, this.clientTruncated = !1, this.ripgrepTruncated = !1, this.filesWithMeta = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new En().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new En().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new En().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(En, t, r);
  }
  static $() {
    return ["RipgrepRawSearchFilesResult|1 files 9*|2 total_files 5|3 client_truncated 8|4 ripgrep_truncated 8|5 files_with_meta #0*|6 head_limit_applied 5?|7 offset_applied 5?", kn];
  }
}
class kn extends y {
  constructor(t) {
    super(), this.file = "", this.isDirty = !1, this.isOutOfWorkspace = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new kn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new kn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new kn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(kn, t, r);
  }
  static $() {
    return ["RipgrepRawSearchFilesResult.FileEntry|1 file 9|2 is_dirty 8|3 is_out_of_workspace 8|4 absolute_path 9?"];
  }
}
class Tn extends y {
  constructor(t) {
    super(), this.matches = [], this.totalLines = 0, this.totalMatchedLines = 0, this.clientTruncated = !1, this.ripgrepTruncated = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Tn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Tn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Tn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Tn, t, r);
  }
  static $() {
    return ["RipgrepRawSearchContentResult|1 matches #0*|2 total_lines 5|3 total_matched_lines 5|4 client_truncated 8|5 ripgrep_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?", Cn];
  }
}
class Cn extends y {
  constructor(t) {
    super(), this.file = "", this.matches = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Cn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Cn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Cn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Cn, t, r);
  }
  static $() {
    return ["RipgrepRawSearchFileMatch|1 file 9|2 matches #0*|3 is_dirty 8?|4 is_out_of_workspace 8?|5 absolute_path 9?", Un];
  }
}
class Un extends y {
  constructor(t) {
    super(), this.lineNumber = 0, this.content = "", this.contentTruncated = !1, this.isContextLine = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Un().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Un().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Un().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Un, t, r);
  }
  static $() {
    return ["RipgrepRawSearchContentMatch|1 line_number 5|2 content 9|3 content_truncated 8|4 is_context_line 8"];
  }
}
class An extends y {
  constructor(t) {
    super(), this.pattern = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new An().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new An().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new An().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(An, t, r);
  }
  static $() {
    return ["RipgrepRawSearchStream|1 pattern 9"];
  }
}
class $n extends y {
  constructor(t) {
    super(), this.ids = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $n().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $n().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $n().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals($n, t, r);
  }
  static $() {
    return ["AwaitTaskParams|1 ids 9*"];
  }
}
class On extends y {
  constructor(t) {
    super(), this.taskResults = [], this.missingTaskIds = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new On().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new On().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new On().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(On, t, r);
  }
  static $() {
    return ["AwaitTaskResult|1 task_results #0*|2 missing_task_ids 9*", jn];
  }
}
class jn extends y {
  constructor(t) {
    super(), this.taskId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new jn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new jn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new jn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(jn, t, r);
  }
  static $() {
    return ["AwaitTaskResult.TaskResultItem|1 task_id 9|2 result #0", _n];
  }
}
class Mn extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Mn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Mn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Mn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Mn, t, r);
  }
  static $() {
    return ["AwaitTaskStream"];
  }
}
class Dn extends y {
  constructor(t) {
    super(), this.read = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Dn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Dn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Dn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Dn, t, r);
  }
  static $() {
    return ["TodoReadParams|1 read 8"];
  }
}
class Nn extends y {
  constructor(t) {
    super(), this.content = "", this.status = "", this.id = "", this.dependencies = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Nn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Nn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Nn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Nn, t, r);
  }
  static $() {
    return ["TodoItem|1 content 9|2 status 9|3 id 9|4 dependencies 9*"];
  }
}
class Gn extends y {
  constructor(t) {
    super(), this.todos = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Gn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Gn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Gn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Gn, t, r);
  }
  static $() {
    return ["TodoReadResult|1 todos #0*", Nn];
  }
}
class Ln extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ln().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ln().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ln().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ln, t, r);
  }
  static $() {
    return ["TodoReadStream"];
  }
}
class Fn extends y {
  constructor(t) {
    super(), this.todos = [], this.merge = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Fn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Fn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Fn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Fn, t, r);
  }
  static $() {
    return ["TodoWriteParams|1 todos #0*|2 merge 8", Nn];
  }
}
class Kn extends y {
  constructor(t) {
    super(), this.success = !1, this.readyTaskIds = [], this.needsInProgressTodos = !1, this.finalTodos = [], this.initialTodos = [], this.wasMerge = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Kn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Kn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Kn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Kn, t, r);
  }
  static $() {
    return ["TodoWriteResult|1 success 8|2 ready_task_ids 9*|3 needs_in_progress_todos 8|4 final_todos #0*|5 initial_todos #0*|6 was_merge 8", Nn];
  }
}
class zn extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new zn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new zn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new zn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(zn, t, r);
  }
  static $() {
    return ["TodoWriteStream"];
  }
}
class Wn extends y {
  constructor(t) {
    super(), this.targetDirectory = "", this.ignoreGlobs = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Wn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Wn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Wn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Wn, t, r);
  }
  static $() {
    return ["ListDirV2Params|1 target_directory 9|2 ignore_globs 9*|3 should_enrich_terminal_metadata 8?"];
  }
}
class Hn extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Hn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Hn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Hn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Hn, t, r);
  }
  static $() {
    return ["ListDirV2Result|1 directory_tree_root #0", Vn];
  }
}
class Vn extends y {
  constructor(t) {
    super(), this.absPath = "", this.childrenDirs = [], this.childrenFiles = [], this.childrenWereProcessed = !1, this.fullSubtreeExtensionCounts = {}, this.numFiles = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Vn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Vn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Vn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Vn, t, r);
  }
  static $() {
    return ["ListDirV2Result.DirectoryTreeNode|1 abs_path 9|2 children_dirs #0*|3 children_files #1*|4 children_were_processed 8|5 full_subtree_extension_counts 9,5|6 num_files 5", Vn, Qn];
  }
}
class Qn extends y {
  constructor(t) {
    super(), this.name = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Qn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Qn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Qn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Qn, t, r);
  }
  static $() {
    return ["ListDirV2Result.DirectoryTreeNode.File|1 name 9|2 terminal_metadata #0?", f.Y$];
  }
}
class Xn extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Xn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Xn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Xn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Xn, t, r);
  }
  static $() {
    return ["ListDirV2Stream"];
  }
}
class Yn extends y {
  constructor(t) {
    super(), this.targetFile = "", this.charsLimit = 0, this.effectiveUri = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Yn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Yn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Yn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Yn, t, r);
  }
  static $() {
    return ["ReadFileV2Params|1 target_file 9|2 offset 5?|3 limit 5?|4 chars_limit 5|5 effective_uri 9|6 enable_line_numbers 8?"];
  }
}
class Zn extends y {
  constructor(t) {
    super(), this.numCharactersInRequestedRange = 0, this.matchingCursorRules = [], this.images = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Zn().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Zn().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Zn().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Zn, t, r);
  }
  static $() {
    return ["ReadFileV2Result|1 contents 9?|2 num_characters_in_requested_range 5|3 offset_is_bigger_than_number_of_lines_in_file 8?|4 total_lines_in_file 5?|5 matching_cursor_rules #0*|6 images #1*", s.DX, s.UR];
  }
}
class ts extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ts().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ts().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ts().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ts, t, r);
  }
  static $() {
    return ["ReadFileV2Stream|1 params #0?", Yn];
  }
}
class rs extends y {
  constructor(t) {
    super(), this.targetDirectory = "", this.globPattern = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new rs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new rs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new rs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(rs, t, r);
  }
  static $() {
    return ["GlobFileSearchParams|1 target_directory 9|2 glob_pattern 9"];
  }
}
class es extends y {
  constructor(t) {
    super(), this.directories = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new es().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new es().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new es().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(es, t, r);
  }
  static $() {
    return ["GlobFileSearchResult|1 directories #0*", ss];
  }
}
class ns extends y {
  constructor(t) {
    super(), this.relPath = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ns().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ns().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ns().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ns, t, r);
  }
  static $() {
    return ["GlobFileSearchResult.File|1 rel_path 9"];
  }
}
class ss extends y {
  constructor(t) {
    super(), this.absPath = "", this.files = [], this.totalFiles = 0, this.ripgrepTruncated = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ss().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ss().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ss().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ss, t, r);
  }
  static $() {
    return ["GlobFileSearchResult.Directory|1 abs_path 9|2 files #0*|3 total_files 5|4 ripgrep_truncated 8", ns];
  }
}
class is extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new is().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new is().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new is().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(is, t, r);
  }
  static $() {
    return ["GlobFileSearchStream"];
  }
}
class os extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new os().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new os().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new os().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(os, t, r);
  }
  static $() {
    return ["ListMcpResourcesStream"];
  }
}
class as extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new as().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new as().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new as().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(as, t, r);
  }
  static $() {
    return ["CallMcpToolStream"];
  }
}
class us extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new us().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new us().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new us().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(us, t, r);
  }
  static $() {
    return ["ReadMcpResourceStream"];
  }
}
class cs extends y {
  constructor(t) {
    super(), this.id = "", this.title = "", this.description = "", this.instructions = "", this.prerequisites = [], this.subComposerId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new cs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new cs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new cs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(cs, t, r);
  }
  static $() {
    return ["Step|1 id 9|2 title 9|3 description 9|4 instructions 9|5 prerequisites 9*|6 sub_composer_id 9"];
  }
}
class ls extends y {
  constructor(t) {
    super(), this.name = "", this.todos = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ls().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ls().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ls().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ls, t, r);
  }
  static $() {
    return ["PlanPhase|1 name 9|2 todos #0*", Nn];
  }
}
class ms extends y {
  constructor(t) {
    super(), this.plan = "", this.title = "", this.summary = "", this.steps = [], this.oldStr = "", this.newStr = "", this.name = "", this.todos = [], this.overview = "", this.isSpec = !1, this.isProject = !1, this.phases = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ms().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ms().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ms().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ms, t, r);
  }
  static $() {
    return ["CreatePlanParams|1 plan 9|2 title 9|3 summary 9|4 steps #0*|5 old_str 9|6 new_str 9|7 name 9|8 todos #1*|9 overview 9|10 is_spec 8|11 is_project 8|12 phases #2*", cs, Nn, ls];
  }
}
class ds extends y {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, this.planUri = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ds().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ds().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ds().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ds, t, r);
  }
  static $() {
    return ["CreatePlanResult|1 accepted #0 result|2 rejected #1 result|3 modified #2 result|4 plan_uri 9", ps, fs, hs];
  }
}
class ps extends y {
  constructor(t) {
    super(), this.finalTodos = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ps().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ps().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ps().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ps, t, r);
  }
  static $() {
    return ["CreatePlanResult.Accepted|1 final_todos #0*", Nn];
  }
}
class fs extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new fs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new fs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new fs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(fs, t, r);
  }
  static $() {
    return ["CreatePlanResult.Rejected"];
  }
}
class hs extends y {
  constructor(t) {
    super(), this.newPlan = "", this.finalTodos = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new hs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new hs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new hs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(hs, t, r);
  }
  static $() {
    return ["CreatePlanResult.Modified|1 new_plan 9|2 final_todos #0*", Nn];
  }
}
class gs extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new gs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new gs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new gs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(gs, t, r);
  }
  static $() {
    return ["CreatePlanStream"];
  }
}
class _s extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _s().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _s().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _s().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_s, t, r);
  }
  static $() {
    return ["ReadProjectParams"];
  }
}
class ws extends y {
  constructor(t) {
    super(), this.plan = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ws().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ws().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ws().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ws, t, r);
  }
  static $() {
    return ["ReadProjectResult|1 plan 9"];
  }
}
class ys extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ys().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ys().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ys().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ys, t, r);
  }
  static $() {
    return ["ReadProjectStream"];
  }
}
class Js extends y {
  constructor(t) {
    super(), this.oldString = "", this.newString = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Js().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Js().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Js().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Js, t, r);
  }
  static $() {
    return ["UpdateProjectStringReplacement|1 old_string 9|2 new_string 9"];
  }
}
class Ss extends y {
  constructor(t) {
    super(), this.stringReplacements = [], this.summary = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ss().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ss().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ss().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ss, t, r);
  }
  static $() {
    return ["UpdateProjectParams|1 string_replacements #0*|2 summary 9", Js];
  }
}
class qs extends y {
  constructor(t) {
    super(), this.success = !1, this.updatedPlan = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new qs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new qs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new qs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(qs, t, r);
  }
  static $() {
    return ["UpdateProjectResult|1 success 8|2 updated_plan 9"];
  }
}
class Bs extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Bs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Bs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Bs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Bs, t, r);
  }
  static $() {
    return ["UpdateProjectStream"];
  }
}
class bs extends y {
  constructor(t) {
    super(), this.title = "", this.questions = [], this.runAsync = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new bs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new bs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new bs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(bs, t, r);
  }
  static $() {
    return ["AskQuestionParams|1 title 9|2 questions #0*|3 run_async 8", Ps];
  }
}
class Ps extends y {
  constructor(t) {
    super(), this.id = "", this.prompt = "", this.options = [], this.allowMultiple = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ps().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ps().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ps().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ps, t, r);
  }
  static $() {
    return ["AskQuestionParams.Question|1 id 9|2 prompt 9|3 options #0*|4 allow_multiple 8|5 prompt_markdown 9?", Is];
  }
}
class Is extends y {
  constructor(t) {
    super(), this.id = "", this.label = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Is().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Is().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Is().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Is, t, r);
  }
  static $() {
    return ["AskQuestionParams.Option|1 id 9|2 label 9"];
  }
}
class xs extends y {
  constructor(t) {
    super(), this.answers = [], this.isAsync = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new xs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new xs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new xs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(xs, t, r);
  }
  static $() {
    return ["AskQuestionResult|1 answers #0*|2 is_async 8", vs];
  }
}
class vs extends y {
  constructor(t) {
    super(), this.questionId = "", this.selectedOptionIds = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new vs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new vs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new vs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(vs, t, r);
  }
  static $() {
    return ["AskQuestionResult.Answer|1 question_id 9|2 selected_option_ids 9*|3 freeform_text 9?"];
  }
}
class Rs extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Rs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Rs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Rs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Rs, t, r);
  }
  static $() {
    return ["AskQuestionStream|1 params #0", bs];
  }
}
class Es extends y {
  constructor(t) {
    super(), this.fromModeId = "", this.toModeId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Es().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Es().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Es().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Es, t, r);
  }
  static $() {
    return ["SwitchModeParams|1 from_mode_id 9|2 to_mode_id 9|3 explanation 9?"];
  }
}
class ks extends y {
  constructor(t) {
    super(), this.fromModeId = "", this.toModeId = "", this.autoApproved = !1, this.userApproved = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ks().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ks().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ks().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ks, t, r);
  }
  static $() {
    return ["SwitchModeResult|1 from_mode_id 9|2 to_mode_id 9|3 auto_approved 8|4 user_approved 8"];
  }
}
class Ts extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ts().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ts().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ts().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ts, t, r);
  }
  static $() {
    return ["SwitchModeStream|1 params #0", Es];
  }
}
class Cs extends y {
  constructor(t) {
    super(), this.actions = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Cs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Cs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Cs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Cs, t, r);
  }
  static $() {
    return ["ComputerUseParams|1 actions #0*", h.ho];
  }
}
class Us extends y {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Us().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Us().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Us().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Us, t, r);
  }
  static $() {
    return ["ComputerUseResult|1 success #0 result|2 error #1 result", h.Wd, h.Jb];
  }
}
class As extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new As().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new As().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new As().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(As, t, r);
  }
  static $() {
    return ["ComputerUseStream|1 params #0", Cs];
  }
}
class $s extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $s().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $s().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $s().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals($s, t, r);
  }
  static $() {
    return ["WriteShellStdinStream|1 params #0", i.LL];
  }
}
class Os extends y {
  constructor(t) {
    super(), this.url = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Os().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Os().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Os().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Os, t, r);
  }
  static $() {
    return ["WebFetchParams|1 url 9"];
  }
}
class js extends y {
  constructor(t) {
    super(), this.url = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new js().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new js().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new js().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(js, t, r);
  }
  static $() {
    return ["WebFetchResult|1 url 9|2 markdown 9?|3 error 9?"];
  }
}
class Ms extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ms().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ms().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ms().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ms, t, r);
  }
  static $() {
    return ["WebFetchStream|1 params #0", Os];
  }
}
class Ds extends y {
  constructor(t) {
    super(), this.summary = "", this.results = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ds().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ds().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ds().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ds, t, r);
  }
  static $() {
    return ["ReportBugfixResultsParams|1 summary 9|2 results #0*", g.Y6];
  }
}
class Ns extends y {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ns().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ns().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ns().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ns, t, r);
  }
  static $() {
    return ["ReportBugfixResultsResult|1 success #0 result|2 error #1 result", g.RH, g.q3];
  }
}
class Gs extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Gs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Gs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Gs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Gs, t, r);
  }
  static $() {
    return ["ReportBugfixResultsStream|1 params #0", Ds];
  }
}
class Ls extends y {
  constructor(t) {
    super(), this.serverIdentifier = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ls().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ls().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ls().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ls, t, r);
  }
  static $() {
    return ["McpAuthParams|1 server_identifier 9"];
  }
}
class Fs extends y {
  constructor(t) {
    super(), this.success = !1, this.message = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Fs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Fs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Fs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Fs, t, r);
  }
  static $() {
    return ["McpAuthResult|1 success 8|2 message 9"];
  }
}
class Ks extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ks().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ks().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ks().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ks, t, r);
  }
  static $() {
    return ["McpAuthStream"];
  }
}
class zs extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new zs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new zs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new zs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(zs, t, r);
  }
  static $() {
    return ["ConnectScmParams|1 github #0|2 provider 9?|3 provider_instance 9?|4 reconnect 8?|5 instance_host 9?", Ws];
  }
}
class Ws extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ws().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ws().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ws().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ws, t, r);
  }
  static $() {
    return ["ConnectScmGithub|1 repository #0|2 ghe_application 9?", Hs];
  }
}
class Hs extends y {
  constructor(t) {
    super(), this.owner = "", this.repo = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Hs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Hs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Hs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Hs, t, r);
  }
  static $() {
    return ["ConnectScmGithubRepository|1 owner 9|2 repo 9"];
  }
}
class Vs extends y {
  constructor(t) {
    super(), this.success = !1, this.message = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Vs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Vs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Vs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Vs, t, r);
  }
  static $() {
    return ["ConnectScmResult|1 success 8|2 message 9"];
  }
}
class Qs extends y {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Qs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Qs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Qs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Qs, t, r);
  }
  static $() {
    return ["ConnectScmStream"];
  }
}
export { ut as $PL, Hn as $rP, j as AUe, ur as Dm_, M as Faf, cr as I8K, H as KRm, R as MtQ, q as PfC, T as TE4, C as Ue3, J as XaY, D as bR2, Nn as kWq, Ie as q20 };
