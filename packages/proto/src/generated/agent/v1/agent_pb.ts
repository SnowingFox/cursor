// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/agent_pb.js" range:418667..619187
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "./subagents_pb";
import * as __dep2 from "./shell_exec_pb";
import * as __dep3 from "../../../runtime/compact";
import * as __dep4 from "./delete_exec_pb";
import * as __dep5 from "./grep_exec_pb";
import * as __dep6 from "./cursor_rules_pb";
import * as __dep7 from "./todo_tool_pb";
import * as __dep8 from "./ls_exec_pb";
import * as __dep9 from "./diagnostics_exec_pb";
import * as __dep10 from "./utils_pb";
import * as __dep11 from "./mcp_exec_pb";
import * as __dep12 from "../../aiserver/v1/repository_pb";
import * as __dep13 from "./create_plan_tool_pb";
import * as __dep14 from "./web_search_tool_pb";
import * as __dep15 from "./apply_agent_diff_tool_pb";
import * as __dep16 from "./ask_question_tool_pb";
import * as __dep17 from "./fetch_exec_pb";
import * as __dep18 from "./switch_mode_tool_pb";
import * as __dep19 from "./generate_image_tool_pb";
import * as __dep20 from "./record_screen_exec_pb";
import * as __dep21 from "./computer_use_tool_pb";
import * as __dep22 from "./background_shell_exec_pb";
import * as __dep23 from "./setup_vm_environment_tool_pb";
import * as __dep24 from "./web_fetch_tool_pb";
import * as __dep25 from "./report_bugfix_results_tool_pb";
import * as __dep26 from "./ai_attribution_tool_pb";
import * as __dep27 from "./pr_management_tool_pb";
import * as __dep28 from "./mcp_auth_tool_pb";
import * as __dep29 from "./replace_env_tool_pb";
import * as __dep30 from "./connect_scm_tool_pb";
import * as __dep31 from "./conversation_search_exec_pb";
import * as __dep32 from "./hook_additional_context_pb";
import * as __dep33 from "./request_context_exec_pb";
import * as __dep34 from "./selected_context_pb";
import * as __dep35 from "./requested_model_pb";
import * as __dep36 from "./mcp_pb";
import * as __dep37 from "./system_prompt_pb";
var n = __dep0,
  s = __dep1,
  i = __dep2,
  o = __dep3;
class a extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class u extends a {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new u().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new u().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new u().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(u, t, r);
  }
  static $() {
    return ["ShellToolCall|1 args #0|2 result #1|3 description 9?", i.a, i.W4];
  }
}
class c extends a {
  constructor(t) {
    super(), this.content = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new c().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new c().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new c().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(c, t, r);
  }
  static $() {
    return ["ShellToolCallStdoutDelta|1 content 9"];
  }
}
class l extends a {
  constructor(t) {
    super(), this.content = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new l().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new l().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new l().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(l, t, r);
  }
  static $() {
    return ["ShellToolCallStderrDelta|1 content 9"];
  }
}
class m extends a {
  constructor(t) {
    super(), this.delta = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new m().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new m().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new m().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(m, t, r);
  }
  static $() {
    return ["ShellToolCallDelta|1 stdout #0 delta|2 stderr #1 delta", c, l];
  }
}
var d = __dep4;
class p extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class f extends p {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new f().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new f().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new f().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(f, t, r);
  }
  static $() {
    return ["DeleteToolCall|1 args #0|2 result #1", d.dn, d.Pi];
  }
}
class h extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class g extends h {
  constructor(t) {
    super(), this.globPattern = "", n.proto3.util.initPartial(t, this);
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
    return ["GlobToolArgs|1 target_directory 9?|2 glob_pattern 9"];
  }
}
class _ extends h {
  constructor(t) {
    super(), this.result = {
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
    return ["GlobToolResult|1 success #0 result|2 error #1 result", y, w];
  }
}
class w extends h {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["GlobToolError|1 error 9"];
  }
}
class y extends h {
  constructor(t) {
    super(), this.pattern = "", this.path = "", this.files = [], this.totalFiles = 0, this.clientTruncated = !1, this.ripgrepTruncated = !1, n.proto3.util.initPartial(t, this);
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
    return ["GlobToolSuccess|1 pattern 9|2 path 9|3 files 9*|4 total_files 5|5 client_truncated 8|6 ripgrep_truncated 8"];
  }
}
class J extends h {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["GlobToolCall|1 args #0|2 result #1", g, _];
  }
}
var S = __dep5;
class q extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class B extends q {
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
    return ["GrepToolCall|1 args #0|2 result #1", S.Qj, S.Ud];
  }
}
var b = __dep6;
class P extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class I extends P {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ReadToolCall|1 args #0|2 result #1", x, v];
  }
}
class x extends P {
  constructor(t) {
    super(), this.path = "", n.proto3.util.initPartial(t, this);
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
    return ["ReadToolArgs|1 path 9|2 offset 5?|3 limit 5?|5 include_line_numbers 8?"];
  }
}
class v extends P {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ReadToolResult|1 success #0 result|2 error #1 result", E, k];
  }
}
class R extends P {
  constructor(t) {
    super(), this.startLine = 0, this.endLine = 0, n.proto3.util.initPartial(t, this);
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
    return ["ReadRange|1 start_line 13|2 end_line 13"];
  }
}
class E extends P {
  constructor(t) {
    super(), this.output = {
      case: void 0
    }, this.isEmpty = !1, this.exceededLimit = !1, this.totalLines = 0, this.fileSize = 0, this.path = "", this.relatedCursorRulePaths = [], this.relatedCursorRules = [], n.proto3.util.initPartial(t, this);
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
    return ["ReadToolSuccess|1 content 9 output|6 data 12 output|9 data_blob_id 12 output|10 content_blob_id 12 output|2 is_empty 8|3 exceeded_limit 8|4 total_lines 13|5 file_size 13|7 path 9|8 read_range #0?|11 include_line_numbers 8?|12 related_cursor_rule_paths 9*|13 related_cursor_rules #1*", R, b.DX];
  }
}
class k extends P {
  constructor(t) {
    super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
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
    return ["ReadToolError|1 error_message 9"];
  }
}
var T = __dep7;
class C extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class U extends C {
  constructor(t) {
    super(), this.path = "", n.proto3.util.initPartial(t, this);
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
    return ["EditArgs|1 path 9|6 stream_content 9?"];
  }
}
class A extends C {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["EditResult|1 success #0 result|2 file_not_found #1 result|3 read_permission_denied #2 result|4 write_permission_denied #3 result|6 rejected #4 result|7 error #5 result", $, O, j, M, D, N];
  }
}
class $ extends C {
  constructor(t) {
    super(), this.path = "", this.afterFullFileContent = "", n.proto3.util.initPartial(t, this);
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
    return ["EditSuccess|1 path 9|3 lines_added 5?|4 lines_removed 5?|5 diff_string 9?|6 before_full_file_content 9?|7 after_full_file_content 9|8 message 9?"];
  }
}
class O extends C {
  constructor(t) {
    super(), this.path = "", n.proto3.util.initPartial(t, this);
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
    return ["EditFileNotFound|1 path 9"];
  }
}
class j extends C {
  constructor(t) {
    super(), this.path = "", n.proto3.util.initPartial(t, this);
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
    return ["EditReadPermissionDenied|1 path 9"];
  }
}
class M extends C {
  constructor(t) {
    super(), this.path = "", this.error = "", this.isReadonly = !1, n.proto3.util.initPartial(t, this);
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
    return ["EditWritePermissionDenied|1 path 9|2 error 9|3 is_readonly 8"];
  }
}
class D extends C {
  constructor(t) {
    super(), this.path = "", this.reason = "", n.proto3.util.initPartial(t, this);
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
    return ["EditRejected|1 path 9|2 reason 9"];
  }
}
class N extends C {
  constructor(t) {
    super(), this.path = "", this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["EditError|1 path 9|2 error 9|5 model_visible_error 9?"];
  }
}
class G extends C {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["EditToolCall|1 args #0|2 result #1", U, A];
  }
}
class L extends C {
  constructor(t) {
    super(), this.streamContentDelta = "", n.proto3.util.initPartial(t, this);
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
    return ["EditToolCallDelta|1 stream_content_delta 9"];
  }
}
var F = __dep8;
class K extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class z extends K {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["LsToolCall|1 args #0|2 result #1", F.xe, F.fv];
  }
}
var W = __dep9,
  H = __dep10;
class V extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Q extends V {
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
    return ["ReadLintsToolCall|1 args #0|2 result #1", X, Y];
  }
}
class X extends V {
  constructor(t) {
    super(), this.paths = [], n.proto3.util.initPartial(t, this);
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
    return ["ReadLintsToolArgs|1 paths 9*"];
  }
}
class Y extends V {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ReadLintsToolResult|1 success #0 result|2 error #1 result", Z, nt];
  }
}
class Z extends V {
  constructor(t) {
    super(), this.fileDiagnostics = [], this.totalFiles = 0, this.totalDiagnostics = 0, n.proto3.util.initPartial(t, this);
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
    return ["ReadLintsToolSuccess|1 file_diagnostics #0*|2 total_files 5|3 total_diagnostics 5", tt];
  }
}
class tt extends V {
  constructor(t) {
    super(), this.path = "", this.diagnostics = [], this.diagnosticsCount = 0, n.proto3.util.initPartial(t, this);
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
    return ["FileDiagnostics|1 path 9|2 diagnostics #0*|3 diagnostics_count 5", rt];
  }
}
class rt extends V {
  constructor(t) {
    super(), this.severity = W.h_.UNSPECIFIED, this.message = "", this.source = "", this.code = "", this.isStale = !1, n.proto3.util.initPartial(t, this);
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
    return ["DiagnosticItem|1 severity #0|2 range #1|3 message 9|4 source 9|5 code 9|6 is_stale 8", W.h_, et];
  }
}
class et extends V {
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
    return ["DiagnosticRange|1 start #0|2 end #0", H.yX];
  }
}
class nt extends V {
  constructor(t) {
    super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
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
    return ["ReadLintsToolError|1 error_message 9"];
  }
}
var st = __dep11;
class it extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class ot extends it {
  constructor(t) {
    super(), this.error = "", this.readToolDefReminder = "", this.systemReminders = [], n.proto3.util.initPartial(t, this);
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
    return ["McpToolError|1 error 9|2 read_tool_def_reminder 9|3 system_reminders #0*", st.Kp];
  }
}
class at extends it {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["McpToolResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result", st.QW, ot, st.xo, st.HQ];
  }
}
class ut extends it {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["McpToolCall|1 args #0|2 result #1|3 description 9?", st.E_, at];
  }
}
var ct = __dep12;
class lt extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class mt extends lt {
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
    return ["SemSearchToolCall|1 args #0|2 result #1", dt, pt];
  }
}
class dt extends lt {
  constructor(t) {
    super(), this.query = "", this.targetDirectories = [], this.explanation = "", n.proto3.util.initPartial(t, this);
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
    return ["SemSearchToolArgs|1 query 9|2 target_directories 9*|3 explanation 9"];
  }
}
class pt extends lt {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["SemSearchToolResult|1 success #0 result|2 error #1 result", ft, ht];
  }
}
class ft extends lt {
  constructor(t) {
    super(), this.results = "", this.codeResults = [], n.proto3.util.initPartial(t, this);
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
    return ["SemSearchToolSuccess|1 results 9|2 code_results #0*", ct.PT];
  }
}
class ht extends lt {
  constructor(t) {
    super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
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
    return ["SemSearchToolError|1 error_message 9"];
  }
}
var gt = __dep13,
  _t = __dep14;
class wt extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class yt extends wt {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ListMcpResourcesToolCall|1 args #0|2 result #1", st.kj, st.kP];
  }
}
class Jt extends wt {
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
    return ["ReadMcpResourceToolCall|1 args #0|2 result #1", st.DI, st.ZD];
  }
}
var St = __dep15,
  qt = __dep16,
  Bt = __dep17;
class bt extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Pt extends bt {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["FetchToolCall|1 args #0|2 result #1", Bt.UM, Bt.uN];
  }
}
var It = __dep18,
  xt = __dep19,
  vt = __dep20;
class Rt extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Et extends Rt {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["RecordScreenToolCall|1 args #0|2 result #1", vt.zH, vt.Tj];
  }
}
var kt = __dep21,
  Tt = __dep22;
class Ct extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Ut extends Ct {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["WriteShellStdinToolCall|1 args #0|2 result #1", Tt.LL, Tt.nt];
  }
}
class At extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class $t extends At {
  constructor(t) {
    super(), this.unexpectedActionOutcomes = "", this.relevantInstructions = "", this.scenarioAnalysis = "", this.criticalSynthesis = "", this.nextSteps = "", this.toolCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $t().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $t().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $t().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals($t, t, r);
  }
  static $() {
    return ["ReflectArgs|1 unexpected_action_outcomes 9|2 relevant_instructions 9|3 scenario_analysis 9|4 critical_synthesis 9|5 next_steps 9|6 tool_call_id 9"];
  }
}
class Ot extends At {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ReflectResult|1 success #0 result|2 error #1 result", jt, Mt];
  }
}
class jt extends At {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new jt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new jt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new jt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(jt, t, r);
  }
  static $() {
    return ["ReflectSuccess"];
  }
}
class Mt extends At {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["ReflectError|1 error 9"];
  }
}
class Dt extends At {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ReflectToolCall|1 args #0|2 result #1", $t, Ot];
  }
}
var Nt = __dep23;
class Gt extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Lt extends Gt {
  constructor(t) {
    super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
    return ["StartGrindExecutionArgs|1 explanation 9?|2 tool_call_id 9"];
  }
}
class Ft extends Gt {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["StartGrindExecutionResult|1 success #0 result|2 error #1 result", Kt, zt];
  }
}
class Kt extends Gt {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Kt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Kt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Kt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Kt, t, r);
  }
  static $() {
    return ["StartGrindExecutionSuccess"];
  }
}
class zt extends Gt {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["StartGrindExecutionError|1 error 9"];
  }
}
class Wt extends Gt {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["StartGrindExecutionToolCall|1 args #0|2 result #1", Lt, Ft];
  }
}
class Ht extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Vt extends Ht {
  constructor(t) {
    super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
    return ["StartGrindPlanningArgs|1 explanation 9?|2 tool_call_id 9"];
  }
}
class Qt extends Ht {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["StartGrindPlanningResult|1 success #0 result|2 error #1 result", Xt, Yt];
  }
}
class Xt extends Ht {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["StartGrindPlanningSuccess"];
  }
}
class Yt extends Ht {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["StartGrindPlanningError|1 error 9"];
  }
}
class Zt extends Ht {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["StartGrindPlanningToolCall|1 args #0|2 result #1", Vt, Qt];
  }
}
var tr = __dep24,
  rr = __dep25,
  er = __dep26,
  nr = __dep27,
  sr = __dep28;
class ir extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class or extends ir {
  constructor(t) {
    super(), this.taskId = "", n.proto3.util.initPartial(t, this);
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
    return ["AwaitArgs|1 task_id 9|2 block_until_ms 13?|3 regex 9?"];
  }
}
class ar extends ir {
  constructor(t) {
    super(), this.taskId = "", this.runtimeMs = n.protoInt64.zero, this.outputFilePath = "", this.outputLength = n.protoInt64.zero, this.regexRequested = !1, n.proto3.util.initPartial(t, this);
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
    return ["AwaitTaskComplete|1 task_id 9|2 runtime_ms 4|3 output_file_path 9|4 output_length 4|5 regex_requested 8|6 regex_match 9?|7 exit_code 17?|8 wake_reason 9?"];
  }
}
class ur extends ir {
  constructor(t) {
    super(), this.taskId = "", this.runtimeMs = n.protoInt64.zero, this.outputFilePath = "", this.outputLength = n.protoInt64.zero, this.regexRequested = !1, n.proto3.util.initPartial(t, this);
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
    return ["AwaitTaskStillRunning|1 task_id 9|2 runtime_ms 4|3 output_file_path 9|4 output_length 4|5 regex_requested 8|6 regex_match 9?|7 wake_reason 9?"];
  }
}
class cr extends ir {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["AwaitError|1 error 9"];
  }
}
class lr extends ir {
  constructor(t) {
    super(), this.awaitResult = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["AwaitSuccess|1 complete #0 await_result|2 still_running #1 await_result", ar, ur];
  }
}
class mr extends ir {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["AwaitResult|1 complete #0 result|2 still_running #1 result|3 error #2 result|4 success #3 result", ar, ur, cr, lr];
  }
}
class dr extends ir {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["AwaitToolCall|1 args #0|2 result #1", or, mr];
  }
}
class pr extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class fr extends pr {
  constructor(t) {
    super(), this.filePath = "", n.proto3.util.initPartial(t, this);
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
    return ["BlameByFilePathArgs|1 file_path 9|2 start_line 5?|3 end_line 5?"];
  }
}
class hr extends pr {
  constructor(t) {
    super(), this.content = "", n.proto3.util.initPartial(t, this);
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
    return ["BlameByFilePathSuccess|1 content 9"];
  }
}
class gr extends pr {
  constructor(t) {
    super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
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
    return ["BlameByFilePathError|1 error_message 9"];
  }
}
class _r extends pr {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["BlameByFilePathResult|1 success #0 result|2 error #1 result", hr, gr];
  }
}
class wr extends pr {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["BlameByFilePathToolCall|1 args #0|2 result #1", fr, _r];
  }
}
class yr extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Jr extends yr {
  constructor(t) {
    super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
    return ["GetMcpToolsArgs|1 server 9?|2 tool_name 9?|3 pattern 9?|4 tool_call_id 9"];
  }
}
class Sr extends yr {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["GetMcpToolsAgentResult|1 success #0 result|2 error #1 result", qr, Br];
  }
}
class qr extends yr {
  constructor(t) {
    super(), this.content = "", n.proto3.util.initPartial(t, this);
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
    return ["GetMcpToolsSuccess|1 content 9|2 output_file_path 9?"];
  }
}
class Br extends yr {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["GetMcpToolsError|1 error 9"];
  }
}
class br extends yr {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["GetMcpToolsToolCall|1 args #0|2 result #1", Jr, Sr];
  }
}
class Pr extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Ir extends Pr {
  constructor(t) {
    super(), this.title = "", this.file = "", this.startLine = 0, this.endLine = 0, this.description = "", this.severity = "", this.category = "", this.rationale = "", n.proto3.util.initPartial(t, this);
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
    return ["ReportBugArgs|1 title 9|2 file 9|3 start_line 5|4 end_line 5|5 description 9|6 severity 9|7 category 9|8 rationale 9"];
  }
}
class xr extends Pr {
  constructor(t) {
    super(), this.output = "", n.proto3.util.initPartial(t, this);
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
    return ["ReportBugSuccess|1 output 9"];
  }
}
class vr extends Pr {
  constructor(t) {
    super(), this.errorMessage = "", n.proto3.util.initPartial(t, this);
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
    return ["ReportBugError|1 error_message 9"];
  }
}
class Rr extends Pr {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ReportBugResult|1 success #0 result|2 error #1 result", xr, vr];
  }
}
class Er extends Pr {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ReportBugToolCall|1 args #0|2 result #1", Ir, Rr];
  }
}
class kr extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Tr extends kr {
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
    return ["CommunicateUpdateArgs|1 current_step 9?|3 final_summary 9?|4 completed_subtitle 9?"];
  }
}
class Cr extends kr {
  constructor(t) {
    super(), this.currentStep = "", this.messageIndex = 0, n.proto3.util.initPartial(t, this);
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
    return ["CommunicateUpdateSuccess|1 current_step 9|3 message_index 13"];
  }
}
class Ur extends kr {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["CommunicateUpdateError|1 error 9"];
  }
}
class Ar extends kr {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["CommunicateUpdateResult|1 success #0 result|2 error #1 result", Cr, Ur];
  }
}
class $r extends kr {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["CommunicateUpdateToolCall|1 args #0|2 result #1", Tr, Ar];
  }
}
class Or extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class jr extends Or {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["SendFinalSummaryArgs|1 final_summary 9?"];
  }
}
class Mr extends Or {
  constructor(t) {
    super(), this.finalSummary = "", n.proto3.util.initPartial(t, this);
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
    return ["SendFinalSummarySuccess|1 final_summary 9"];
  }
}
class Dr extends Or {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["SendFinalSummaryError|1 error 9"];
  }
}
class Nr extends Or {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["SendFinalSummaryResult|1 success #0 result|2 error #1 result", Mr, Dr];
  }
}
class Gr extends Or {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["SendFinalSummaryToolCall|1 args #0|2 result #1", jr, Nr];
  }
}
var Lr = __dep29;
class Fr extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Kr extends Fr {
  constructor(t) {
    super(), this.toolCallId = "", this.prUrl = "", this.addLabels = [], this.removeLabels = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Kr().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Kr().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Kr().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Kr, t, r);
  }
  static $() {
    return ["EditPrLabelsArgs|1 tool_call_id 9|2 pr_url 9|4 add_labels 9*|5 remove_labels 9*"];
  }
}
class zr extends Fr {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["EditPrLabelsResult|1 success #0 result|2 error #1 result", Wr, Hr];
  }
}
class Wr extends Fr {
  constructor(t) {
    super(), this.prUrl = "", this.prNumber = 0, this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["EditPrLabelsSuccess|1 pr_url 9|2 pr_number 5|3 message 9"];
  }
}
class Hr extends Fr {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["EditPrLabelsError|1 error 9"];
  }
}
class Vr extends Fr {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["EditPrLabelsToolCall|1 args #0|2 result #1", Kr, zr];
  }
}
class Qr extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Xr extends Qr {
  constructor(t) {
    super(), this.checkName = "", this.tldr = "", n.proto3.util.initPartial(t, this);
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
    return ["RecordCiInvestigationFinding|1 check_name 9|2 details_url 9?|3 tldr 9|4 root_cause 9?|5 failing_signal 9?|6 suggested_next_step 9?|7 diff_relation 9?|8 diff_relation_evidence 9?|9 flake_assessment 9?|10 flake_evidence 9?|11 rerun_available 8?|12 rerun_evidence 9?|13 recommended_action 9?|14 recommended_action_evidence 9?|15 confidence 9?"];
  }
}
class Yr extends Qr {
  constructor(t) {
    super(), this.summary = "", this.themes = [], this.checkKeys = [], n.proto3.util.initPartial(t, this);
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
    return ["RecordCiInvestigationOverall|1 summary 9|2 themes 9*|3 recommended_action 9?|4 recommended_action_evidence 9?|5 check_keys 9*"];
  }
}
class Zr extends Qr {
  constructor(t) {
    super(), this.findings = [], this.toolCallId = "", n.proto3.util.initPartial(t, this);
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
    return ["RecordCiInvestigationFindingsArgs|1 findings #0*|2 overall #1?|3 tool_call_id 9", Xr, Yr];
  }
}
class te extends Qr {
  constructor(t) {
    super(), this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["RecordCiInvestigationFindingsSuccess|1 message 9"];
  }
}
class re extends Qr {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["RecordCiInvestigationFindingsError|1 error 9"];
  }
}
class ee extends Qr {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["RecordCiInvestigationFindingsResult|1 success #0 result|2 error #1 result", te, re];
  }
}
class ne extends Qr {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["RecordCiInvestigationFindingsToolCall|1 args #0|2 result #1", Zr, ee];
  }
}
class se extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class ie extends se {
  constructor(t) {
    super(), this.content = "", n.proto3.util.initPartial(t, this);
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
    return ["SendMessageText|1 content 9"];
  }
}
class oe extends se {
  constructor(t) {
    super(), this.url = "", n.proto3.util.initPartial(t, this);
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
    return ["SendMessageAttachment|1 url 9|2 alt 9?"];
  }
}
class ae extends se {
  constructor(t) {
    super(), this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["SendMessageArgs|1 text #0 message|2 attachment #1 message|3 reply_to 9?|4 replace_previous_message 8?", ie, oe];
  }
}
class ue extends se {
  constructor(t) {
    super(), this.timestamp = n.protoInt64.zero, this.messageId = "", n.proto3.util.initPartial(t, this);
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
    return ["SendMessageSuccess|1 timestamp 4|2 message_id 9"];
  }
}
class ce extends se {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["SendMessageError|1 error 9"];
  }
}
class le extends se {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["SendMessageResult|1 success #0 result|2 error #1 result", ue, ce];
  }
}
class me extends se {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["SendMessageToolCall|1 args #0|2 result #1", ae, le];
  }
}
class de extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class pe extends de {
  constructor(t) {
    super(), this.bcIds = [], this.sources = [], this.statuses = [], this.includeTeamWide = !1, this.includeArchived = !1, this.includeTranscript = !1, this.activeSince = "", n.proto3.util.initPartial(t, this);
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
    return ["FetchCloudAgentDataArgs|4 bc_ids 9*|6 sources 9*|7 statuses 9*|8 include_team_wide 8|9 include_archived 8|10 limit 5?|12 include_transcript 8|13 active_since 9"];
  }
}
class fe extends de {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["FetchCloudAgentDataResult|1 success #0 result|2 error #1 result", he, ge];
  }
}
class he extends de {
  constructor(t) {
    super(), this.summary = "", this.agentCount = 0, this.writtenPaths = [], this.unavailableBcIds = [], n.proto3.util.initPartial(t, this);
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
    return ["FetchCloudAgentDataSuccess|1 summary 9|2 agent_count 5|3 written_paths 9*|4 unavailable_bc_ids 9*"];
  }
}
class ge extends de {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["FetchCloudAgentDataError|1 error 9"];
  }
}
class _e extends de {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["FetchCloudAgentDataToolCall|1 args #0|2 result #1", pe, fe];
  }
}
class we extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class ye extends we {
  constructor(t) {
    super(), this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["SendToUserArgs|1 message 9"];
  }
}
class Je extends we {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["SendToUserSuccess"];
  }
}
class Se extends we {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["SendToUserError|1 error 9"];
  }
}
class qe extends we {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["SendToUserResult|1 success #0 result|2 error #1 result", Je, Se];
  }
}
class Be extends we {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["SendToUserToolCall|1 args #0|2 result #1", ye, qe];
  }
}
var be = __dep30,
  Pe = __dep31;
class Ie extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class xe extends Ie {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["SearchConversationsToolCall|1 args #0|2 result #1", Pe.$m, Pe.pT];
  }
}
const ve = "agent.v1.";
class Re extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return ve;
  }
}
var Ee = (0, o.QT)(n.proto3, ve, "GoalStatus", [[0, "UNSPECIFIED"], [1, "ACTIVE"], [2, "PAUSED"], [3, "COMPLETE"], [4, "CLEARED"]], 1);
class ke extends Re {
  constructor(t) {
    super(), this.objective = "", n.proto3.util.initPartial(t, this);
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
    return ["CreateGoalArgs|1 objective 9"];
  }
}
class Te extends Re {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["CreateGoalSuccess"];
  }
}
class Ce extends Re {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["GoalError|1 error 9"];
  }
}
class Ue extends Re {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["CreateGoalResult|1 success #0 result|2 error #1 result", Te, Ce];
  }
}
class Ae extends Re {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["CreateGoalToolCall|1 args #0|2 result #1", ke, Ue];
  }
}
class $e extends Re {
  constructor(t) {
    super(), this.status = Ee.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
    return ["UpdateGoalArgs|1 status #0", Ee];
  }
}
class Oe extends Re {
  constructor(t) {
    super(), this.status = Ee.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
    return ["UpdateGoalSuccess|1 status #0", Ee];
  }
}
class je extends Re {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["UpdateGoalResult|1 success #0 result|2 error #1 result", Oe, Ce];
  }
}
class Me extends Re {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["UpdateGoalToolCall|1 args #0|2 result #1", $e, je];
  }
}
const De = "agent.v1.";
class Ne extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return De;
  }
}
var Ge = (0, o.QT)(n.proto3, De, "CreateAgentPlacementApprovalState", [[0, "UNSPECIFIED"], [1, "REQUIRED"], [2, "DENIED"]], 1);
class Le extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.agentIds = [], n.proto3.util.initPartial(t, this);
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
    return ["GetAgentStatusArgs|1 tool_call_id 9|2 agent_ids 9*"];
  }
}
class Fe extends Ne {
  constructor(t) {
    super(), this.bcId = "", this.name = "", this.lifecycle = "", this.turnInFlight = !1, this.lastTerminalTurnStatus = "", this.prUrl = "", this.lastActivityAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
    return ["GetAgentStatusWorker|1 bc_id 9|2 name 9|3 lifecycle 9|4 turn_in_flight 8|5 last_terminal_turn_status 9|6 pr_url 9|7 last_activity_at_ms 4"];
  }
}
class Ke extends Ne {
  constructor(t) {
    super(), this.workers = [], this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["GetAgentStatusSuccess|1 workers #0*|2 message 9", Fe];
  }
}
class ze extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["GetAgentStatusError|1 error 9"];
  }
}
class We extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["GetAgentStatusResult|1 success #0 result|2 error #1 result", Ke, ze];
  }
}
class He extends Ne {
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
    return ["GetAgentStatusToolCall|1 args #0|2 result #1", Le, We];
  }
}
class Ve extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.agentId = "", this.message = "", this.delivery = "", this.title = "", this.trackedTaskKeys = [], n.proto3.util.initPartial(t, this);
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
    return ["SendToAgentArgs|1 tool_call_id 9|2 agent_id 9|3 message 9|4 delivery 9|5 title 9|6 model 9?|7 tracked_task_keys 9*"];
  }
}
class Qe extends Ne {
  constructor(t) {
    super(), this.workerBcId = "", this.deliveredAs = "", this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["SendToAgentSuccess|1 worker_bc_id 9|2 delivered_as 9|3 message 9|4 recipient #0?", Xe];
  }
}
class Xe extends Ne {
  constructor(t) {
    super(), this.kind = Ye.UNSPECIFIED, this.id = "", this.displayName = "", n.proto3.util.initPartial(t, this);
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
    return ["SendToAgentRecipient|1 kind #0|2 id 9|3 display_name 9", Ye];
  }
}
var Ye = (0, o.QT)(n.proto3, De, "SendToAgentRecipient.Kind", [[0, "UNSPECIFIED"], [1, "MAIN_BOT"], [2, "PROJECT_SESSION"]], 1);
class Ze extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["SendToAgentError|1 error 9"];
  }
}
class tn extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["SendToAgentResult|1 success #0 result|2 error #1 result", Qe, Ze];
  }
}
class rn extends Ne {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["SendToAgentToolCall|1 args #0|2 result #1", Ve, tn];
  }
}
class en extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.agentId = "", this.mode = "", this.maxTurns = 0, n.proto3.util.initPartial(t, this);
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
    return ["ReadAgentTranscriptArgs|1 tool_call_id 9|2 agent_id 9|3 mode 9|4 max_turns 13"];
  }
}
class nn extends Ne {
  constructor(t) {
    super(), this.transcript = "", this.truncated = !1, n.proto3.util.initPartial(t, this);
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
    return ["ReadAgentTranscriptSuccess|1 transcript 9|2 truncated 8"];
  }
}
class sn extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["ReadAgentTranscriptError|1 error 9"];
  }
}
class on extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ReadAgentTranscriptResult|1 success #0 result|2 error #1 result", nn, sn];
  }
}
class an extends Ne {
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
    return ["ReadAgentTranscriptToolCall|1 args #0|2 result #1", en, on];
  }
}
class un extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.prompt = "", this.labels = {}, this.trackedTaskKeys = [], n.proto3.util.initPartial(t, this);
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
    return ["CreateAgentArgs|1 tool_call_id 9|2 prompt 9|3 name 9?|4 model 9?|5 base_branch 9?|6 machine_type 9?|7 worker_id 9?|8 pool 9?|9 labels 9,9|10 environment_build_id 9?|11 environment_id 9?|12 repo_url 9?|13 tracked_task_keys 9*|14 fork_from 9?|15 fork_turns 13?"];
  }
}
class cn extends Ne {
  constructor(t) {
    super(), this.agentId = "", this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["CreateAgentSuccess|1 agent_id 9|2 message 9"];
  }
}
class ln extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["CreateAgentError|1 error 9|2 placement_approval_state #0?", Ge];
  }
}
class mn extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["CreateAgentResult|1 success #0 result|2 error #1 result", cn, ln];
  }
}
class dn extends Ne {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["CreateAgentToolCall|1 args #0|2 result #1", un, mn];
  }
}
class pn extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.prompt = "", this.labels = {}, n.proto3.util.initPartial(t, this);
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
    return ["CreateProjectArgs|1 tool_call_id 9|2 prompt 9|3 name 9?|4 model 9?|5 base_branch 9?|6 machine_type 9?|7 worker_id 9?|8 pool 9?|9 labels 9,9|10 environment_build_id 9?|11 environment_id 9?|12 repo_url 9?"];
  }
}
class fn extends Ne {
  constructor(t) {
    super(), this.agentId = "", this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["CreateProjectSuccess|1 agent_id 9|2 message 9"];
  }
}
class hn extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["CreateProjectError|1 error 9|2 placement_approval_state #0?", Ge];
  }
}
class gn extends Ne {
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
    return ["CreateProjectResult|1 success #0 result|2 error #1 result", fn, hn];
  }
}
class _n extends Ne {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["CreateProjectToolCall|1 args #0|2 result #1", pn, gn];
  }
}
class wn extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.agentId = "", n.proto3.util.initPartial(t, this);
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
    return ["StartProjectUpdatesArgs|1 tool_call_id 9|2 agent_id 9"];
  }
}
class yn extends Ne {
  constructor(t) {
    super(), this.agentId = "", this.untilMs = n.protoInt64.zero, this.wasOn = !1, this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["StartProjectUpdatesSuccess|1 agent_id 9|2 until_ms 3|3 was_on 8|4 message 9"];
  }
}
class Jn extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["StartProjectUpdatesError|1 error 9"];
  }
}
class Sn extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["StartProjectUpdatesResult|1 success #0 result|2 error #1 result", yn, Jn];
  }
}
class qn extends Ne {
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
    return ["StartProjectUpdatesToolCall|1 args #0|2 result #1", wn, Sn];
  }
}
class Bn extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.agentId = "", n.proto3.util.initPartial(t, this);
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
    return ["StopProjectUpdatesArgs|1 tool_call_id 9|2 agent_id 9"];
  }
}
class bn extends Ne {
  constructor(t) {
    super(), this.agentId = "", this.wasOn = !1, this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["StopProjectUpdatesSuccess|1 agent_id 9|2 was_on 8|3 message 9"];
  }
}
class Pn extends Ne {
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
    return ["StopProjectUpdatesError|1 error 9"];
  }
}
class In extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["StopProjectUpdatesResult|1 success #0 result|2 error #1 result", bn, Pn];
  }
}
class xn extends Ne {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["StopProjectUpdatesToolCall|1 args #0|2 result #1", Bn, In];
  }
}
class vn extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.agentId = "", n.proto3.util.initPartial(t, this);
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
    return ["StopAgentArgs|1 tool_call_id 9|2 agent_id 9"];
  }
}
class Rn extends Ne {
  constructor(t) {
    super(), this.workerBcId = "", this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["StopAgentSuccess|1 worker_bc_id 9|2 message 9"];
  }
}
class En extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["StopAgentError|1 error 9"];
  }
}
class kn extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["StopAgentResult|1 success #0 result|2 error #1 result", Rn, En];
  }
}
class Tn extends Ne {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["StopAgentToolCall|1 args #0|2 result #1", vn, kn];
  }
}
class Cn extends Ne {
  constructor(t) {
    super(), this.path = "", n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskDocumentInput|1 path 9|2 label 9?"];
  }
}
class Un extends Ne {
  constructor(t) {
    super(), this.url = "", n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskUrlInput|1 url 9|2 label 9?"];
  }
}
class An extends Ne {
  constructor(t) {
    super(), this.target = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskLinkInput|1 agent_id 9 target|2 pr_url 9 target|3 document #0 target|4 url #1 target", Cn, Un];
  }
}
class $n extends Ne {
  constructor(t) {
    super(), this.url = "", this.openedByAgentId = "", this.countsForCompletion = !1, n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskPrLinkView|1 url 9|2 opened_by_agent_id 9|3 counts_for_completion 8"];
  }
}
class On extends Ne {
  constructor(t) {
    super(), this.target = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskLinkView|1 agent_id 9 target|2 pr #0 target|3 document #1 target|4 url #2 target", $n, Cn, Un];
  }
}
class jn extends Ne {
  constructor(t) {
    super(), this.key = "", this.title = "", this.statusId = "", this.statusLabel = "", this.owner = "", this.parentKey = "", this.links = [], this.updatedAtMs = n.protoInt64.zero, this.ownerSessionId = "", this.version = n.protoInt64.zero, this.tag = "", this.internalNotes = "", this.tags = [], n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskView|1 key 9|2 title 9|3 status_id 9|4 status_label 9|5 owner 9|6 parent_key 9|7 links #0*|8 updated_at_ms 4|9 owner_session_id 9|10 version 4|11 tag 9|12 internal_notes 9|13 tags 9*", On];
  }
}
class Mn extends Ne {
  constructor(t) {
    super(), this.id = "", this.label = "", this.category = "", this.taskCount = 0, n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskStatusView|1 id 9|2 label 9|3 category 9|4 task_count 13"];
  }
}
class Dn extends Ne {
  constructor(t) {
    super(), this.id = "", this.label = "", this.color = "", this.taskCount = 0, n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskTagView|1 id 9|2 label 9|3 color 9|4 task_count 13"];
  }
}
class Nn extends Ne {
  constructor(t) {
    super(), this.name = "", this.sessionId = "", this.isYou = !1, n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskMemberView|1 name 9|2 session_id 9|3 is_you 8"];
  }
}
class Gn extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.keys = [], this.statusCategories = [], n.proto3.util.initPartial(t, this);
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
    return ["ListTrackedTasksArgs|1 tool_call_id 9|2 keys 9*|3 status_categories 9*|4 owner 9?|5 linked_agent_id 9?|6 cursor 9?"];
  }
}
class Ln extends Ne {
  constructor(t) {
    super(), this.tasks = [], this.statuses = [], this.members = [], this.olderClosedCount = 0, this.truncated = !1, this.matchingCount = 0, this.message = "", this.tags = [], this.nextCursor = "", n.proto3.util.initPartial(t, this);
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
    return ["ListTrackedTasksSuccess|1 tasks #0*|2 statuses #1*|3 members #2*|4 older_closed_count 13|5 truncated 8|6 matching_count 13|7 message 9|8 tags #3*|9 next_cursor 9", jn, Mn, Nn, Dn];
  }
}
class Fn extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["ListTrackedTasksError|1 error 9"];
  }
}
class Kn extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ListTrackedTasksResult|1 success #0 result|2 error #1 result", Ln, Fn];
  }
}
class zn extends Ne {
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
    return ["ListTrackedTasksToolCall|1 args #0|2 result #1", Gn, Kn];
  }
}
class Wn extends Ne {
  constructor(t) {
    super(), this.title = "", this.links = [], this.tags = [], n.proto3.util.initPartial(t, this);
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
    return ["NewTrackedTask|1 client_ref 9?|2 title 9|3 status 9?|4 owner 9?|5 parent 9?|6 links #0*|7 tag 9?|8 internal_notes 9?|9 tags 9*", An];
  }
}
class Hn extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.tasks = [], n.proto3.util.initPartial(t, this);
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
    return ["CreateTrackedTasksArgs|1 tool_call_id 9|2 tasks #0*", Wn];
  }
}
class Vn extends Ne {
  constructor(t) {
    super(), this.clientRef = "", this.key = "", this.version = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskCreated|1 client_ref 9|2 key 9|3 version 4"];
  }
}
class Qn extends Ne {
  constructor(t) {
    super(), this.created = [], this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["CreateTrackedTasksSuccess|1 created #0*|2 message 9", Vn];
  }
}
class Xn extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["CreateTrackedTasksError|1 error 9"];
  }
}
class Yn extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["CreateTrackedTasksResult|1 success #0 result|2 error #1 result", Qn, Xn];
  }
}
class Zn extends Ne {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["CreateTrackedTasksToolCall|1 args #0|2 result #1", Hn, Yn];
  }
}
class ts extends Ne {
  constructor(t) {
    super(), this.anchor = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskPosition|1 before_key 9 anchor|2 after_key 9 anchor"];
  }
}
class rs extends Ne {
  constructor(t) {
    super(), this.key = "", this.addLinks = [], this.removeLinks = [], this.version = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskUpdate|1 key 9|2 title 9?|3 status 9?|4 owner 9?|5 parent 9?|6 position #0?|7 add_links #1*|8 remove_links #1*|9 version 4|10 tag 9?|11 internal_notes 9?|12 tags #2?", ts, An, es];
  }
}
class es extends Ne {
  constructor(t) {
    super(), this.ids = [], n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskTagIds|1 ids 9*"];
  }
}
class ns extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.updates = [], n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTasksArgs|1 tool_call_id 9|2 updates #0*", rs];
  }
}
class ss extends Ne {
  constructor(t) {
    super(), this.key = "", this.field = "", this.currentValue = "", this.changedBy = "", this.changedAtMs = n.protoInt64.zero, this.currentVersion = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskConflict|1 key 9|2 field 9|3 current_value 9|4 changed_by 9|5 changed_at_ms 4|6 current_version 4"];
  }
}
class is extends Ne {
  constructor(t) {
    super(), this.key = "", this.version = n.protoInt64.zero, this.title = "", this.statusLabel = "", n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskUpdated|1 key 9|2 version 4|3 title 9|4 status_label 9"];
  }
}
class os extends Ne {
  constructor(t) {
    super(), this.updated = [], this.conflicts = [], this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTasksSuccess|1 updated #0*|2 conflicts #1*|3 message 9", is, ss];
  }
}
class as extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTasksError|1 error 9"];
  }
}
class us extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTasksResult|1 success #0 result|2 error #1 result", os, as];
  }
}
class cs extends Ne {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTasksToolCall|1 args #0|2 result #1", ns, us];
  }
}
class ls extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.keys = [], n.proto3.util.initPartial(t, this);
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
    return ["DeleteTrackedTasksArgs|1 tool_call_id 9|2 keys 9*"];
  }
}
class ms extends Ne {
  constructor(t) {
    super(), this.deletedKeys = [], this.unparentedKeys = [], this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["DeleteTrackedTasksSuccess|1 deleted_keys 9*|2 unparented_keys 9*|3 message 9"];
  }
}
class ds extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["DeleteTrackedTasksError|1 error 9"];
  }
}
class ps extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["DeleteTrackedTasksResult|1 success #0 result|2 error #1 result", ms, ds];
  }
}
class fs extends Ne {
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
    return ["DeleteTrackedTasksToolCall|1 args #0|2 result #1", ls, ps];
  }
}
class hs extends Ne {
  constructor(t) {
    super(), this.label = "", this.category = "", n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskStatusInput|1 id 9?|2 label 9|3 icon 9?|4 category 9"];
  }
}
class gs extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.statuses = [], n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTaskStatusesArgs|1 tool_call_id 9|2 statuses #0*", hs];
  }
}
class _s extends Ne {
  constructor(t) {
    super(), this.statuses = [], this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTaskStatusesSuccess|1 statuses #0*|2 message 9", Mn];
  }
}
class ws extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTaskStatusesError|1 error 9"];
  }
}
class ys extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTaskStatusesResult|1 success #0 result|2 error #1 result", _s, ws];
  }
}
class Js extends Ne {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTaskStatusesToolCall|1 args #0|2 result #1", gs, ys];
  }
}
class Ss extends Ne {
  constructor(t) {
    super(), this.label = "", n.proto3.util.initPartial(t, this);
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
    return ["TrackedTaskTagInput|1 id 9?|2 label 9|3 color 9?"];
  }
}
class qs extends Ne {
  constructor(t) {
    super(), this.toolCallId = "", this.tags = [], n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTaskTagsArgs|1 tool_call_id 9|2 tags #0*", Ss];
  }
}
class Bs extends Ne {
  constructor(t) {
    super(), this.tags = [], this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTaskTagsSuccess|1 tags #0*|2 message 9", Dn];
  }
}
class bs extends Ne {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTaskTagsError|1 error 9"];
  }
}
class Ps extends Ne {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTaskTagsResult|1 success #0 result|2 error #1 result", Bs, bs];
  }
}
class Is extends Ne {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["UpdateTrackedTaskTagsToolCall|1 args #0|2 result #1", qs, Ps];
  }
}
const xs = "agent.v1.";
class vs extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return xs;
  }
}
var Rs = (0, o.QT)(n.proto3, xs, "WriteCanvasFailReason", [[0, "UNSPECIFIED"], [1, "TYPECHECK_FAILED"], [2, "COMPILE_FAILED"], [3, "TOO_LARGE"], [4, "UNAVAILABLE"], [5, "NOT_FOUND"], [6, "REFUSED"]], 1),
  Es = (0, o.QT)(n.proto3, xs, "ReadCanvasFailReason", [[0, "UNSPECIFIED"], [1, "NOT_FOUND"], [2, "UNAVAILABLE"], [3, "REFUSED"], [4, "INVALID_REFERENCE"]], 1);
class ks extends vs {
  constructor(t) {
    super(), this.line = 0, this.character = 0, n.proto3.util.initPartial(t, this);
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
    return ["CloudCanvasToolDiagnosticPosition|1 line 5|2 character 5"];
  }
}
class Ts extends vs {
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
    return ["CloudCanvasToolDiagnosticRange|1 start #0|2 end #0", ks];
  }
}
class Cs extends vs {
  constructor(t) {
    super(), this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["CloudCanvasToolDiagnostic|1 message 9|2 code 9?|3 severity 5?|4 range #0?", Ts];
  }
}
class Us extends vs {
  constructor(t) {
    super(), this.contents = "", n.proto3.util.initPartial(t, this);
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
    return ["WriteCanvasArgs|1 contents 9|2 canvas_id 9?|3 title 9?"];
  }
}
class As extends vs {
  constructor(t) {
    super(), this.canvasId = "", this.url = "", n.proto3.util.initPartial(t, this);
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
    return ["WriteCanvasSuccess|1 canvas_id 9|2 title 9?|3 url 9|4 page_url 9?|5 audience_notice 9?"];
  }
}
class $s extends vs {
  constructor(t) {
    super(), this.reason = Rs.UNSPECIFIED, this.diagnostics = [], n.proto3.util.initPartial(t, this);
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
    return ["WriteCanvasFailure|1 reason #0|2 diagnostics #1*|3 detail 9?", Rs, Cs];
  }
}
class Os extends vs {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["WriteCanvasResult|1 success #0 result|2 failure #1 result", As, $s];
  }
}
class js extends vs {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["WriteCanvasToolCall|1 args #0|2 result #1", Us, Os];
  }
}
class Ms extends vs {
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
    return ["ReadCanvasArgs|1 canvas_id 9?|2 url 9?"];
  }
}
class Ds extends vs {
  constructor(t) {
    super(), this.canvasId = "", this.url = "", this.source = "", n.proto3.util.initPartial(t, this);
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
    return ["ReadCanvasSuccess|1 canvas_id 9|2 title 9?|3 url 9|4 source 9"];
  }
}
class Ns extends vs {
  constructor(t) {
    super(), this.reason = Es.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
    return ["ReadCanvasFailure|1 reason #0|2 detail 9?", Es];
  }
}
class Gs extends vs {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ReadCanvasResult|1 success #0 result|2 failure #1 result", Ds, Ns];
  }
}
class Ls extends vs {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ReadCanvasToolCall|1 args #0|2 result #1", Ms, Gs];
  }
}
class Fs extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Ks extends Fs {
  constructor(t) {
    super(), this.prompt = "", this.referenceImagePaths = [], this.keyframes = [], n.proto3.util.initPartial(t, this);
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
    return ["GenerateVideoArgs|1 prompt 9|2 file_path 9?|3 image_path 9?|4 reference_image_paths 9*|5 duration_seconds 13?|6 aspect_ratio 9?|7 resolution 9?|8 last_frame_path 9?|9 keyframes #0*", zs];
  }
}
class zs extends Fs {
  constructor(t) {
    super(), this.imagePath = "", this.timestampSeconds = 0, n.proto3.util.initPartial(t, this);
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
    return ["GenerateVideoKeyframe|1 image_path 9|2 timestamp_seconds 1"];
  }
}
class Ws extends Fs {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["GenerateVideoResult|1 success #0 result|2 error #1 result", Hs, Vs];
  }
}
class Hs extends Fs {
  constructor(t) {
    super(), this.filePath = "", this.durationSeconds = 0, n.proto3.util.initPartial(t, this);
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
    return ["GenerateVideoSuccess|1 file_path 9|2 duration_seconds 13"];
  }
}
class Vs extends Fs {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["GenerateVideoError|1 error 9"];
  }
}
class Qs extends Fs {
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
    return ["GenerateVideoToolCall|1 args #0|2 result #1", Ks, Ws];
  }
}
class Xs extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class Ys extends Xs {
  constructor(t) {
    super(), this.query = "", this.allowedXHandles = [], this.excludedXHandles = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ys().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ys().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ys().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ys, t, r);
  }
  static $() {
    return ["XSearchArgs|1 query 9|2 from_date 9?|3 to_date 9?|4 allowed_x_handles 9*|5 excluded_x_handles 9*"];
  }
}
class Zs extends Xs {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Zs().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Zs().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Zs().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Zs, t, r);
  }
  static $() {
    return ["XSearchResult|1 success #0 result|2 error #1 result|3 rejected #2 result", ti, ei, ni];
  }
}
class ti extends Xs {
  constructor(t) {
    super(), this.answer = "", this.citations = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ti().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ti().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ti().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ti, t, r);
  }
  static $() {
    return ["XSearchSuccess|1 answer 9|2 citations #0*", ri];
  }
}
class ri extends Xs {
  constructor(t) {
    super(), this.url = "", this.title = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ri().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ri().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ri().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ri, t, r);
  }
  static $() {
    return ["XSearchCitation|1 url 9|2 title 9"];
  }
}
class ei extends Xs {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ei().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ei().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ei().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ei, t, r);
  }
  static $() {
    return ["XSearchError|1 error 9"];
  }
}
class ni extends Xs {
  constructor(t) {
    super(), this.reason = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ni().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ni().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ni().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ni, t, r);
  }
  static $() {
    return ["XSearchRejected|1 reason 9"];
  }
}
class si extends Xs {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new si().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new si().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new si().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(si, t, r);
  }
  static $() {
    return ["XSearchToolCall|1 args #0|2 result #1", Ys, Zs];
  }
}
class ii extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class oi extends ii {
  constructor(t) {
    super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new oi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new oi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new oi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(oi, t, r);
  }
  static $() {
    return ["GetPrCodeTourArgs|1 tool_call_id 9|2 revision_id 9?|3 section_id 9?|4 head_sha 9?|5 pr_url 9?"];
  }
}
class ai extends ii {
  constructor(t) {
    super(), this.revisionId = "", this.status = "", this.headSha = "", this.feedback = "", this.updatedAtMs = n.protoInt64.zero, this.isCurrent = !1, this.markdown = "", this.source = "", this.prUrl = "", this.editedByBcId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ai().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ai().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ai().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ai, t, r);
  }
  static $() {
    return ["PrCodeTourRevisionSnapshot|1 revision_id 9|2 status 9|3 head_sha 9|4 feedback 9|5 updated_at_ms 3|6 is_current 8|7 markdown 9|8 source 9|9 pr_url 9|10 edited_by_bc_id 9"];
  }
}
class ui extends ii {
  constructor(t) {
    super(), this.revisions = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ui().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ui().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ui().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ui, t, r);
  }
  static $() {
    return ["GetPrCodeTourSuccess|1 revisions #0*|2 section_id 9?", ai];
  }
}
class ci extends ii {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ci().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ci().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ci().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ci, t, r);
  }
  static $() {
    return ["GetPrCodeTourError|1 error 9"];
  }
}
class li extends ii {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new li().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new li().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new li().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(li, t, r);
  }
  static $() {
    return ["GetPrCodeTourResult|1 success #0 result|2 error #1 result", ui, ci];
  }
}
class mi extends ii {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new mi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new mi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new mi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(mi, t, r);
  }
  static $() {
    return ["GetPrCodeTourToolCall|1 args #0|2 result #1", oi, li];
  }
}
const di = "agent.v1.";
class pi extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return di;
  }
}
var fi = (0, o.QT)(n.proto3, di, "UpdatePrCodeTourExecutionMode", [[0, "UNSPECIFIED"], [1, "SERVER_SCHEDULED"], [2, "CLIENT_REQUIRED"], [3, "SKIPPED"], [4, "EDITED"]], 1);
class hi extends pi {
  constructor(t) {
    super(), this.feedback = "", this.toolCallId = "", this.scopeCommitHashes = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new hi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new hi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new hi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(hi, t, r);
  }
  static $() {
    return ["UpdatePrCodeTourArgs|1 feedback 9|2 tool_call_id 9|3 base_sha 9?|4 head_sha 9?|5 source_revision_id 9?|6 revision_id 9?|7 markdown 9?|8 heading 9?|9 artifact_path 9?|10 artifact_alt 9?|11 scope_commit_hashes 9*|12 explicit_user_prompt 9?|13 pr_url 9?"];
  }
}
class gi extends pi {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new gi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new gi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new gi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(gi, t, r);
  }
  static $() {
    return ["UpdatePrCodeTourResult|1 success #0 result|2 error #1 result", _i, wi];
  }
}
class _i extends pi {
  constructor(t) {
    super(), this.revisionId = "", this.message = "", this.executionMode = fi.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _i().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _i().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _i().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_i, t, r);
  }
  static $() {
    return ["UpdatePrCodeTourSuccess|1 revision_id 9|2 message 9|3 execution_mode #0", fi];
  }
}
class wi extends pi {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new wi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new wi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new wi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(wi, t, r);
  }
  static $() {
    return ["UpdatePrCodeTourError|1 error 9"];
  }
}
class yi extends pi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new yi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new yi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new yi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(yi, t, r);
  }
  static $() {
    return ["UpdatePrCodeTourToolCall|1 args #0|2 result #1", hi, gi];
  }
}
var Ji = __dep32,
  Si = __dep33,
  qi = __dep34,
  Bi = __dep35,
  bi = __dep36,
  Pi = __dep37;
const Ii = "agent.v1.";
class xi extends o.HL {
  static get runtime() {
    return (0, o.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return Ii;
  }
}
var vi = (0, o.QT)(n.proto3, Ii, "AgentMode", [[0, "UNSPECIFIED"], [1, "AGENT"], [2, "ASK"], [3, "PLAN"], [4, "DEBUG"], [5, "TRIAGE"], [7, "MULTITASK"], [8, "CUSTOM"]], 1),
  Ri = (0, o.QT)(n.proto3, Ii, "BackgroundTaskKind", [[0, "UNSPECIFIED"], [1, "SHELL"], [2, "SUBAGENT"]], 1),
  Ei = (0, o.QT)(n.proto3, Ii, "BackgroundTaskStatus", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "ERROR"], [3, "ABORTED"]], 1),
  ki = (0, o.QT)(n.proto3, Ii, "BackgroundTaskNotificationContext", [[0, "UNSPECIFIED"], [1, "USER_DRIVEN_INTERACTIVE_CHILD"]], 1),
  Ti = (0, o.QT)(n.proto3, Ii, "SubagentRunStatus", [[0, "UNSPECIFIED"], [1, "RUNNING"], [2, "BACKGROUNDED"], [3, "SUCCESS"], [4, "ERROR"], [5, "ABORTED"]], 1),
  Ci = (0, o.QT)(n.proto3, Ii, "SubagentDispatchTool", [[0, "UNSPECIFIED"], [1, "TASK"], [2, "CREATE_AGENT"], [3, "SEND_TO_AGENT"], [4, "CREATE_PROJECT"]], 1),
  Ui = (0, o.QT)(n.proto3, Ii, "CustomModeSource", [[0, "UNSPECIFIED"], [1, "AGENT_SKILL"], [2, "PLUGIN_SKILL"], [3, "REPO_SKILL"], [4, "MANAGED_SKILL"]], 1),
  Ai = (0, o.QT)(n.proto3, Ii, "SimulatedMsgReason", [[0, "UNSPECIFIED"], [1, "PLAN_EXECUTION"], [2, "COMMIT_REMINDER"], [3, "BACKGROUND_TASK_COMPLETION"], [4, "DIFF_TAB_COMMIT"], [5, "DIFF_TAB_COMMIT_AND_PUSH"], [6, "DIFF_TAB_PUSH"], [7, "DIFF_TAB_CREATE_PR"], [8, "DIFF_TAB_FIX_MERGE_CONFLICTS"], [9, "USER_SENT_TO_SUBAGENT"], [10, "USER_INTERRUPTED_SUBAGENT"], [11, "USER_QUEUED_TO_SUBAGENT"], [12, "BABYSIT_PR_IN_CLOUD"], [13, "CI_PANEL_INVESTIGATE_FAILURE"], [14, "MULTITASK"], [15, "BUILD_IN_PARALLEL"], [16, "MULTITASK_SPLIT_PRS"], [17, "APPLY_LOCALLY"], [18, "CHECKOUT_BRANCH"], [19, "DIFF_TAB_UPDATE_BRANCH"], [20, "PR_TAB_BUGBOT_FIX"], [22, "RUN_BUGBOT_REVIEW"], [23, "RUN_SECURITY_REVIEW"], [24, "FSD_APPLY_FINDING"], [25, "FSD_UNDO_FINDING"], [26, "FSD_START"], [27, "FSD_PR_INTERRUPT"], [28, "SUBSCRIPTION"], [29, "DIFF_TAB_CREATE_BRANCH"], [30, "AGENT_STORE_CONFLICT"], [31, "GOAL_CONTINUATION"], [32, "PROJECT_KICKOFF"], [33, "MARKDOWN_PROMPT_BUTTON"], [34, "USER_QUICK_ACTION"], [35, "INTERACTION_RESPONSE"]], 1),
  $i = (0, o.QT)(n.proto3, Ii, "SubscriptionSource", [[0, "UNSPECIFIED"], [1, "SLACK"], [2, "GITHUB"], [3, "LINEAR"], [4, "ORIGIN"], [5, "FACTORY"]], 1),
  Oi = (0, o.QT)(n.proto3, Ii, "ReplyAudience", [[0, "UNSPECIFIED"], [1, "USER"], [2, "AGENT"]], 1),
  ji = (0, o.QT)(n.proto3, Ii, "TurnRunStatus", [[0, "UNSPECIFIED"], [1, "RUNNING"], [2, "COMPLETED"], [3, "FAILED"], [4, "INTERRUPTED"]], 1),
  Mi = (0, o.QT)(n.proto3, Ii, "TurnInterruptReason", [[0, "UNSPECIFIED"], [1, "CANCELLED"], [2, "MAX_STEPS"]], 1),
  Di = (0, o.QT)(n.proto3, Ii, "ThinkingStyle", [[0, "UNSPECIFIED"], [1, "DEFAULT"], [2, "CODEX"], [3, "GPT5"]], 1),
  Ni = (0, o.QT)(n.proto3, Ii, "EstimatedCostSource", [[0, "UNSPECIFIED"], [1, "CATALOG"], [2, "USAGE"]], 1),
  Gi = (0, o.QT)(n.proto3, Ii, "ResponseComparisonDisplayOrder", [[0, "UNSPECIFIED"], [1, "PARENT_FIRST"], [2, "ALTERNATE_FIRST"]], 1),
  Li = (0, o.QT)(n.proto3, Ii, "ResponseComparisonSkipReason", [[0, "UNSPECIFIED"], [1, "ALTERNATE_TOOL_CALL"], [2, "INFERENCE_ERROR"], [3, "TIMEOUT"], [4, "CANCELLED"]], 1),
  Fi = (0, o.QT)(n.proto3, Ii, "PostRequestPromptButtonAction", [[0, "UNSPECIFIED"], [1, "UPDATE_CLIENT"]], 1);
class Ki extends xi {
  constructor(t) {
    super(), this.description = "", this.prompt = "", this.attachments = [], this.mode = s.FL.UNSPECIFIED, this.respondingToMessageIds = [], this.environment = s.dU.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ki().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ki().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ki().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ki, t, r);
  }
  static $() {
    return ["TaskArgs|1 description 9|2 prompt 9|3 subagent_type #0|4 model 9?|5 resume 9?|6 agent_id 9?|7 attachments 9*|8 mode #1|9 responding_to_message_ids 9*|10 environment #2|11 machine #3?", s._L, s.FL, s.dU, zi];
  }
}
class zi extends xi {
  constructor(t) {
    super(), this.machine = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new zi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new zi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new zi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(zi, t, r);
  }
  static $() {
    return ["TargetMachine|1 same_machine #0 machine|2 new_cloud_vm #1 machine|3 self_hosted_worker #2 machine|4 self_hosted_pool #3 machine", Wi, Hi, Vi, Qi];
  }
}
class Wi extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Wi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Wi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Wi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Wi, t, r);
  }
  static $() {
    return ["SameMachineTarget"];
  }
}
class Hi extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Hi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Hi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Hi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Hi, t, r);
  }
  static $() {
    return ["NewCloudVmTarget|1 environment_build_id 9?|2 base_branch 9?"];
  }
}
class Vi extends xi {
  constructor(t) {
    super(), this.workerId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Vi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Vi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Vi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Vi, t, r);
  }
  static $() {
    return ["SelfHostedWorkerTarget|1 worker_id 9"];
  }
}
class Qi extends xi {
  constructor(t) {
    super(), this.labels = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Qi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Qi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Qi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Qi, t, r);
  }
  static $() {
    return ["SelfHostedPoolTarget|1 pool 9?|2 labels #0*", Xi];
  }
}
class Xi extends xi {
  constructor(t) {
    super(), this.key = "", this.value = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Xi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Xi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Xi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Xi, t, r);
  }
  static $() {
    return ["SelfHostedWorkerLabel|1 key 9|2 value 9"];
  }
}
class Yi extends xi {
  constructor(t) {
    super(), this.conversationSteps = [], this.isBackground = !1, this.backgroundReason = s.qL.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Yi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Yi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Yi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Yi, t, r);
  }
  static $() {
    return ["TaskSuccess|1 conversation_steps #0*|2 agent_id 9?|3 is_background 8|4 duration_ms 4?|5 result_suffix 9?|6 background_reason #1|7 transcript_path 9?", go, s.qL];
  }
}
class Zi extends xi {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Zi().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Zi().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Zi().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Zi, t, r);
  }
  static $() {
    return ["TaskError|1 error 9"];
  }
}
class to extends xi {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new to().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new to().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new to().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(to, t, r);
  }
  static $() {
    return ["TaskResult|1 success #0 result|2 error #1 result", Yi, Zi];
  }
}
class ro extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ro().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ro().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ro().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ro, t, r);
  }
  static $() {
    return ["TaskToolCall|1 args #0|2 result #1|3 cloud_agent_bc_id 9?", Ki, to];
  }
}
class eo extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new eo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new eo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new eo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(eo, t, r);
  }
  static $() {
    return ["TaskToolCallDelta|1 interaction_update #0", Nu];
  }
}
class no extends xi {
  constructor(t) {
    super(), this.path = "", this.branchName = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new no().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new no().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new no().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(no, t, r);
  }
  static $() {
    return ["SetActiveBranchArgs|1 path 9|2 branch_name 9"];
  }
}
class so extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new so().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new so().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new so().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(so, t, r);
  }
  static $() {
    return ["SetActiveBranchSuccess"];
  }
}
class io extends xi {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new io().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new io().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new io().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(io, t, r);
  }
  static $() {
    return ["SetActiveBranchError|1 error 9"];
  }
}
class oo extends xi {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new oo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new oo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new oo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(oo, t, r);
  }
  static $() {
    return ["SetActiveBranchResult|1 success #0 result|2 error #1 result", so, io];
  }
}
class ao extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ao().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ao().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ao().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ao, t, r);
  }
  static $() {
    return ["SetActiveBranchToolCall|1 args #0|2 result #1", no, oo];
  }
}
class uo extends xi {
  constructor(t) {
    super(), this.tool = {
      case: void 0
    }, this.hookAdditionalContexts = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new uo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new uo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new uo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(uo, t, r);
  }
  static $() {
    return ["ToolCall|1 shell_tool_call #0 tool|3 delete_tool_call #1 tool|4 glob_tool_call #2 tool|5 grep_tool_call #3 tool|8 read_tool_call #4 tool|9 update_todos_tool_call #5 tool|10 read_todos_tool_call #6 tool|12 edit_tool_call #7 tool|13 ls_tool_call #8 tool|14 read_lints_tool_call #9 tool|15 mcp_tool_call #10 tool|16 sem_search_tool_call #11 tool|17 create_plan_tool_call #12 tool|18 web_search_tool_call #13 tool|19 task_tool_call #14 tool|20 list_mcp_resources_tool_call #15 tool|21 read_mcp_resource_tool_call #16 tool|22 apply_agent_diff_tool_call #17 tool|23 ask_question_tool_call #18 tool|24 fetch_tool_call #19 tool|25 switch_mode_tool_call #20 tool|28 generate_image_tool_call #21 tool|29 record_screen_tool_call #22 tool|30 computer_use_tool_call #23 tool|31 write_shell_stdin_tool_call #24 tool|32 reflect_tool_call #25 tool|33 setup_vm_environment_tool_call #26 tool|34 truncated_tool_call #27 tool|35 start_grind_execution_tool_call #28 tool|36 start_grind_planning_tool_call #29 tool|37 web_fetch_tool_call #30 tool|38 report_bugfix_results_tool_call #31 tool|39 ai_attribution_tool_call #32 tool|40 pr_management_tool_call #33 tool|41 mcp_auth_tool_call #34 tool|42 await_tool_call #35 tool|43 blame_by_file_path_tool_call #36 tool|44 get_mcp_tools_tool_call #37 tool|45 report_bug_tool_call #38 tool|46 set_active_branch_tool_call #39 tool|48 communicate_update_tool_call #40 tool|49 send_final_summary_tool_call #41 tool|51 replace_env_tool_call #42 tool|52 edit_pr_labels_tool_call #43 tool|53 record_ci_investigation_findings_tool_call #44 tool|55 send_message_tool_call #45 tool|56 fetch_cloud_agent_data_tool_call #46 tool|58 send_to_user_tool_call #47 tool|68 connect_scm_tool_call #48 tool|69 search_conversations_tool_call #49 tool|70 create_goal_tool_call #50 tool|71 update_goal_tool_call #51 tool|73 get_agent_status_tool_call #52 tool|74 send_to_agent_tool_call #53 tool|75 read_agent_transcript_tool_call #54 tool|76 create_agent_tool_call #55 tool|77 stop_agent_tool_call #56 tool|79 write_canvas_tool_call #57 tool|80 read_canvas_tool_call #58 tool|81 generate_video_tool_call #59 tool|82 x_search_tool_call #60 tool|83 get_origin_pr_code_tour_tool_call #61 tool|84 update_origin_pr_code_tour_tool_call #62 tool|85 list_tracked_tasks_tool_call #63 tool|86 create_tracked_tasks_tool_call #64 tool|87 update_tracked_tasks_tool_call #65 tool|88 delete_tracked_tasks_tool_call #66 tool|89 update_tracked_task_statuses_tool_call #67 tool|90 create_project_tool_call #68 tool|91 update_tracked_task_tags_tool_call #69 tool|93 stop_project_updates_tool_call #70 tool|94 start_project_updates_tool_call #71 tool|54 hook_additional_contexts #72*|57 tool_call_id 9?|59 started_at_ms 4?|60 completed_at_ms 4?", u, f, J, B, I, T.bk, T.AJ, G, z, Q, ut, mt, gt.Ih, _t.pn, ro, yt, Jt, St.JU, qt.OU, Pt, It.Cs, xt.r9, Et, kt.t8, Ut, Dt, Nt.MU, fo, Wt, Zt, tr.fd, rr.U_, er.ex, nr.AU, sr.NX, dr, wr, br, Er, ao, $r, Gr, Lr.us, Vr, ne, me, _e, Be, be.iO, xe, Ae, Me, He, rn, an, dn, Tn, js, Ls, Qs, si, mi, yi, zn, Zn, cs, fs, Js, _n, Is, xn, qn, Ji.C];
  }
}
class co extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new co().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new co().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new co().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(co, t, r);
  }
  static $() {
    return ["TruncatedToolCallArgs"];
  }
}
class lo extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new lo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new lo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new lo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(lo, t, r);
  }
  static $() {
    return ["TruncatedToolCallSuccess"];
  }
}
class mo extends xi {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new mo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new mo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new mo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(mo, t, r);
  }
  static $() {
    return ["TruncatedToolCallError|1 error 9"];
  }
}
class po extends xi {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new po().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new po().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new po().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(po, t, r);
  }
  static $() {
    return ["TruncatedToolCallResult|1 success #0 result|2 error #1 result", lo, mo];
  }
}
class fo extends xi {
  constructor(t) {
    super(), this.originalStepBlobId = new Uint8Array(0), this.originalStepSizeBytes = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new fo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new fo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new fo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(fo, t, r);
  }
  static $() {
    return ["TruncatedToolCall|1 original_step_blob_id 12|2 args #0|3 result #1|4 original_step_size_bytes 13|5 preview #2", co, po, uo];
  }
}
class ho extends xi {
  constructor(t) {
    super(), this.delta = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ho().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ho().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ho().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ho, t, r);
  }
  static $() {
    return ["ToolCallDelta|1 shell_tool_call_delta #0 delta|2 task_tool_call_delta #1 delta|3 edit_tool_call_delta #2 delta|4 replace_env_tool_call_delta #3 delta", m, eo, L, Lr.km];
  }
}
class go extends xi {
  constructor(t) {
    super(), this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new go().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new go().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new go().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(go, t, r);
  }
  static $() {
    return ["ConversationStep|1 assistant_message #0 message|2 tool_call #1 message|3 thinking_message #2 message", Sa, uo, qa];
  }
}
class _o extends xi {
  constructor(t) {
    super(), this.action = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _o().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _o().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _o().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_o, t, r);
  }
  static $() {
    return ["ConversationAction|1 user_message_action #0 action|2 resume_action #1 action|3 cancel_action #2 action|4 summarize_action #3 action|5 shell_command_action #4 action|6 start_plan_action #5 action|7 execute_plan_action #6 action|8 async_ask_question_completion_action #7 action|10 cancel_subagent_action #8 action|12 background_task_completion_action #9 action|13 background_shell_action #10 action|14 background_subagent_action #11 action|16 subscription_notification_action #12 action|18 goal_continuation_action #13 action|19 inject_context_action #14 action|11 triggering_auth_id 9?|15 triggering_user_info #15?|17 request_context_parts #16?", No, ia, sa, aa, ua, ca, la, oa, Bo, yo, bo, Po, Go, Lo, Fo, wo, Si.sG];
  }
}
class wo extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new wo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new wo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new wo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(wo, t, r);
  }
  static $() {
    return ["TriggeringUserInfo|1 auth_id 9?|2 user_id 5?|3 followup_id 9?"];
  }
}
class yo extends xi {
  constructor(t) {
    super(), this.completions = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new yo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new yo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new yo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(yo, t, r);
  }
  static $() {
    return ["BackgroundTaskCompletionAction|1 completions #0*|2 system_reminder 9?|3 request_context #1", Jo, Si.bb];
  }
}
class Jo extends xi {
  constructor(t) {
    super(), this.taskId = "", this.kind = Ri.UNSPECIFIED, this.status = Ei.UNSPECIFIED, this.title = "", this.reason = s.U6.UNSPECIFIED, this.notificationContext = ki.UNSPECIFIED, this.recordOnly = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Jo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Jo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Jo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Jo, t, r);
  }
  static $() {
    return ["BackgroundTaskCompletion|1 task_id 9|2 kind #0|3 status #1|4 title 9|5 detail 9?|6 output_path 9?|7 thread_id 9?|8 reason #2|9 subagent_id 9?|10 tool_call_id 9?|11 notification_context #3|12 completed_at_ms 4?|13 record_only 8", Ri, Ei, s.U6, ki];
  }
}
class So extends xi {
  constructor(t) {
    super(), this.parentToolCallId = "", this.environment = s.dU.UNSPECIFIED, this.status = Ti.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new So().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new So().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new So().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(So, t, r);
  }
  static $() {
    return ["SubagentRunState|1 parent_tool_call_id 9|2 subagent_id 9?|3 environment #0|4 status #1|5 title 9?|6 detail 9?|7 transcript_path 9?|8 output_path 9?|9 completed_timestamp_ms 4?|10 completion_reason #2?", s.dU, Ti, s.U6];
  }
}
class qo extends xi {
  constructor(t) {
    super(), this.stepIndex = 0, this.toolCallId = "", this.tool = Ci.UNSPECIFIED, this.backgrounded = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new qo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new qo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new qo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(qo, t, r);
  }
  static $() {
    return ["SubagentDispatchStep|1 step_index 13|2 tool_call_id 9|3 tool #0|4 backgrounded 8", Ci];
  }
}
class Bo extends xi {
  constructor(t) {
    super(), this.subagentId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Bo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Bo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Bo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Bo, t, r);
  }
  static $() {
    return ["CancelSubagentAction|1 subagent_id 9"];
  }
}
class bo extends xi {
  constructor(t) {
    super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new bo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new bo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new bo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(bo, t, r);
  }
  static $() {
    return ["BackgroundShellAction|1 tool_call_id 9"];
  }
}
class Po extends xi {
  constructor(t) {
    super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Po().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Po().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Po().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Po, t, r);
  }
  static $() {
    return ["BackgroundSubagentAction|1 tool_call_id 9"];
  }
}
class Io extends xi {
  constructor(t) {
    super(), this.toolCallId = "", this.resolution = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Io().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Io().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Io().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Io, t, r);
  }
  static $() {
    return ["InterruptedPendingToolCallResolution|1 tool_call_id 9|2 shell_result #0 resolution|3 task_result #1 resolution", i.W4, to];
  }
}
class xo extends xi {
  constructor(t) {
    super(), this.resolutions = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new xo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new xo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new xo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(xo, t, r);
  }
  static $() {
    return ["InterruptedPendingToolCallResolutions|1 resolutions #0*", Io];
  }
}
class vo extends xi {
  constructor(t) {
    super(), this.messages = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new vo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new vo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new vo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(vo, t, r);
  }
  static $() {
    return ["ConversationHistory|1 messages #0*|2 replace_user_info 8?", Ro];
  }
}
class Ro extends xi {
  constructor(t) {
    super(), this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ro().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ro().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ro().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ro, t, r);
  }
  static $() {
    return ["ConversationHistoryMessage|1 user #0 message|2 assistant #1 message|3 tool #2 message", Eo, Uo, Mo];
  }
}
class Eo extends xi {
  constructor(t) {
    super(), this.content = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Eo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Eo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Eo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Eo, t, r);
  }
  static $() {
    return ["ConversationHistoryUserMessage|1 content #0*", ko];
  }
}
class ko extends xi {
  constructor(t) {
    super(), this.content = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ko().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ko().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ko().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ko, t, r);
  }
  static $() {
    return ["ConversationHistoryUserContent|1 text #0 content|2 image #1 content", To, Co];
  }
}
class To extends xi {
  constructor(t) {
    super(), this.text = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new To().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new To().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new To().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(To, t, r);
  }
  static $() {
    return ["ConversationHistoryTextContent|1 text 9"];
  }
}
class Co extends xi {
  constructor(t) {
    super(), this.data = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Co().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Co().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Co().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Co, t, r);
  }
  static $() {
    return ["ConversationHistoryImageContent|1 data 9|2 mime_type 9?"];
  }
}
class Uo extends xi {
  constructor(t) {
    super(), this.content = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Uo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Uo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Uo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Uo, t, r);
  }
  static $() {
    return ["ConversationHistoryAssistantMessage|1 content #0*", Ao];
  }
}
class Ao extends xi {
  constructor(t) {
    super(), this.content = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ao().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ao().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ao().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ao, t, r);
  }
  static $() {
    return ["ConversationHistoryAssistantContent|1 text #0 content|2 reasoning #1 content|3 redacted_reasoning #2 content|4 tool_call #3 content", To, $o, Oo, jo];
  }
}
class $o extends xi {
  constructor(t) {
    super(), this.text = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $o().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $o().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $o().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals($o, t, r);
  }
  static $() {
    return ["ConversationHistoryReasoningContent|1 text 9|2 signature 9?"];
  }
}
class Oo extends xi {
  constructor(t) {
    super(), this.data = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Oo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Oo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Oo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Oo, t, r);
  }
  static $() {
    return ["ConversationHistoryRedactedReasoningContent|1 data 9"];
  }
}
class jo extends xi {
  constructor(t) {
    super(), this.toolCallId = "", this.toolName = "", this.argsJson = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new jo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new jo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new jo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(jo, t, r);
  }
  static $() {
    return ["ConversationHistoryToolCall|1 tool_call_id 9|2 tool_name 9|3 args_json 9"];
  }
}
class Mo extends xi {
  constructor(t) {
    super(), this.toolCallId = "", this.toolName = "", this.content = [], this.hookAdditionalContexts = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Mo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Mo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Mo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Mo, t, r);
  }
  static $() {
    return ["ConversationHistoryToolMessage|1 tool_call_id 9|2 tool_name 9|3 content #0*|4 is_error 8?|5 hook_additional_contexts #1*", Do, Ji.C];
  }
}
class Do extends xi {
  constructor(t) {
    super(), this.content = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Do().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Do().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Do().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Do, t, r);
  }
  static $() {
    return ["ConversationHistoryToolResultContent|1 text #0 content|2 image #1 content", To, Co];
  }
}
class No extends xi {
  constructor(t) {
    super(), this.prependUserMessages = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new No().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new No().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new No().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(No, t, r);
  }
  static $() {
    return ["UserMessageAction|1 user_message #0|2 request_context #1|3 send_to_interaction_listener 8?|4 prepend_user_messages #0*|6 interrupted_pending_tool_call_resolutions #2?|7 conversation_history #3?|8 trailing_conversation_history #3?", _a, Si.bb, xo, vo];
  }
}
class Go extends xi {
  constructor(t) {
    super(), this.notifications = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Go().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Go().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Go().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Go, t, r);
  }
  static $() {
    return ["SubscriptionNotificationAction|1 notifications #0*|2 request_context #1|3 send_to_interaction_listener 8?", _a, Si.bb];
  }
}
class Lo extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Lo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Lo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Lo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Lo, t, r);
  }
  static $() {
    return ["GoalContinuationAction"];
  }
}
class Fo extends xi {
  constructor(t) {
    super(), this.injectionId = "", this.expectedRunId = "", this.payload = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Fo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Fo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Fo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Fo, t, r);
  }
  static $() {
    return ["InjectContextAction|1 injection_id 9|2 expected_run_id 9|3 user_context #0 payload|4 system_context #1 payload", Ko, zo];
  }
}
class Ko extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ko().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ko().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ko().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ko, t, r);
  }
  static $() {
    return ["UserContextInjection|1 user_message #0|2 request_context #1", _a, Si.bb];
  }
}
class zo extends xi {
  constructor(t) {
    super(), this.producer = "", this.content = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new zo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new zo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new zo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(zo, t, r);
  }
  static $() {
    return ["SystemContextInjection|1 producer 9|2 content 9"];
  }
}
class Wo extends xi {
  constructor(t) {
    super(), this.state = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Wo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Wo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Wo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Wo, t, r);
  }
  static $() {
    return ["ContextInjectionState|1 queued #0 state|2 delivered #1 state|3 queued_for_next_turn #2 state|4 cancelled #3 state|5 rejected #4 state", Ho, Vo, Qo, Xo, Yo];
  }
}
class Ho extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ho().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ho().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ho().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ho, t, r);
  }
  static $() {
    return ["ContextInjectionQueued"];
  }
}
class Vo extends xi {
  constructor(t) {
    super(), this.step = 0, this.deliveryBatchId = "", this.deliveredAtMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Vo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Vo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Vo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Vo, t, r);
  }
  static $() {
    return ["ContextInjectionDelivered|1 step 5|2 delivery_batch_id 9|3 delivered_at_ms 3"];
  }
}
class Qo extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Qo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Qo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Qo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Qo, t, r);
  }
  static $() {
    return ["ContextInjectionQueuedForNextTurn"];
  }
}
class Xo extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Xo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Xo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Xo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Xo, t, r);
  }
  static $() {
    return ["ContextInjectionCancelled"];
  }
}
class Yo extends xi {
  constructor(t) {
    super(), this.reason = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Yo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Yo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Yo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Yo, t, r);
  }
  static $() {
    return ["ContextInjectionRejected|1 reason 9"];
  }
}
class Zo extends xi {
  constructor(t) {
    super(), this.id = "", this.label = "", this.source = Ui.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Zo().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Zo().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Zo().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Zo, t, r);
  }
  static $() {
    return ["SubmittedCustomMode|1 id 9|2 label 9|5 source #0|6 source_path 9?|7 source_hash 9?|10 managed_skill_id 9?|11 plugin_id 9?|12 plugin_snapshot_token 9?", Ui];
  }
}
class ta extends xi {
  constructor(t) {
    super(), this.id = "", this.label = "", this.source = Ui.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ta().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ta().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ta().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ta, t, r);
  }
  static $() {
    return ["CustomModeDescriptor|1 id 9|2 label 9|3 description 9?|4 icon 9?|5 color 9?|6 source #0|7 source_path 9?|8 source_hash 9?|9 managed_skill_id 9?|10 plugin_id 9?|11 plugin_snapshot_token 9?", Ui];
  }
}
class ra extends xi {
  constructor(t) {
    super(), this.id = "", this.label = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ra().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ra().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ra().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ra, t, r);
  }
  static $() {
    return ["SubmittedExitedCustomMode|1 id 9|2 label 9"];
  }
}
class ea extends xi {
  constructor(t) {
    super(), this.nextMode = vi.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ea().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ea().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ea().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ea, t, r);
  }
  static $() {
    return ["CustomModeExitIntent|1 next_mode #0|2 exited_mode #1", vi, ra];
  }
}
class na extends xi {
  constructor(t) {
    super(), this.intent = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new na().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new na().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new na().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(na, t, r);
  }
  static $() {
    return ["CustomModeIntent|1 enter #0 intent|2 exit #1 intent", Zo, ea];
  }
}
class sa extends xi {
  constructor(t) {
    super(), this.reason = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new sa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new sa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new sa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(sa, t, r);
  }
  static $() {
    return ["CancelAction|1 reason 9|3 interrupted_pending_tool_call_resolutions #0?", xo];
  }
}
class ia extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ia().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ia().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ia().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ia, t, r);
  }
  static $() {
    return ["ResumeAction|2 request_context #0", Si.bb];
  }
}
class oa extends xi {
  constructor(t) {
    super(), this.originalToolCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new oa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new oa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new oa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(oa, t, r);
  }
  static $() {
    return ["AsyncAskQuestionCompletionAction|1 original_tool_call_id 9|2 original_args #0|3 result #1|4 request_context #2|5 during_voice_call 8?|6 voice_calls_read_utterances 8?", qt.ju, qt.tz, Si.bb];
  }
}
class aa extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new aa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new aa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new aa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(aa, t, r);
  }
  static $() {
    return ["SummarizeAction"];
  }
}
class ua extends xi {
  constructor(t) {
    super(), this.execId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ua().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ua().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ua().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ua, t, r);
  }
  static $() {
    return ["ShellCommandAction|1 shell_command #0|2 exec_id 9", Ba];
  }
}
class ca extends xi {
  constructor(t) {
    super(), this.isSpec = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ca().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ca().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ca().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ca, t, r);
  }
  static $() {
    return ["StartPlanAction|1 user_message #0|2 request_context #1|3 is_spec 8", _a, Si.bb];
  }
}
class la extends xi {
  constructor(t) {
    super(), this.executionMode = vi.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new la().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new la().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new la().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(la, t, r);
  }
  static $() {
    return ["ExecutePlanAction|1 request_context #0|2 plan #1?|3 plan_file_uri 9?|4 plan_file_content 9?|5 execution_mode #2|6 kickoff_message_id 9?|7 plan_id 9?|8 plan_file_path 9?|9 during_voice_call 8?|10 voice_calls_read_utterances 8?", Si.bb, Ia, vi];
  }
}
class ma extends xi {
  constructor(t) {
    super(), this.interactionId = "", this.skippedQuestionIds = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ma().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ma().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ma().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ma, t, r);
  }
  static $() {
    return ["InteractionResponseMetadata|1 interaction_id 9|2 response #0?|3 skipped_question_ids 9*", zu];
  }
}
class da extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new da().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new da().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new da().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(da, t, r);
  }
  static $() {
    return ["SubscriptionEventDisplay|1 display_label 9?|2 resource_url 9?|3 subscription_id 9?"];
  }
}
class pa extends xi {
  constructor(t) {
    super(), this.planId = "", this.planTitle = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new pa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new pa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new pa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(pa, t, r);
  }
  static $() {
    return ["ExecutePlanInfo|1 plan_id 9|2 plan_title 9"];
  }
}
class fa extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new fa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new fa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new fa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(fa, t, r);
  }
  static $() {
    return ["ProjectDetails|1 name 9?|2 subagent #0?|3 side_chat #1?|4 init_description 9?", ha, ga];
  }
}
class ha extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ha().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ha().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ha().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ha, t, r);
  }
  static $() {
    return ["ProjectSubagentDetails|2 store_dir 9?"];
  }
}
class ga extends xi {
  constructor(t) {
    super(), this.storeDir = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ga().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ga().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ga().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ga, t, r);
  }
  static $() {
    return ["ProjectSideChatDetails|1 store_dir 9"];
  }
}
class _a extends xi {
  constructor(t) {
    super(), this.text = "", this.messageId = "", this.mode = vi.UNSPECIFIED, this.conversationStateBlobId = new Uint8Array(0), this.hookAdditionalContexts = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _a().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _a().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _a().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_a, t, r);
  }
  static $() {
    return ["UserMessage|1 text 9|2 message_id 9|3 selected_context #0?|4 mode #1|5 is_simulated_msg 8?|6 best_of_n_group_id 9?|7 try_use_best_of_n_promotion 8?|8 rich_text 9?|9 simulated_msg_reason #2?|10 conversation_state_blob_id 12|11 subagent_system_reminder 9?|13 triggering_user_info #3?|14 execute_plan_info #4?|15 simulated_message_metadata #5?|16 prompt_reference_id 9?|17 thread_id 9?|18 text_blob_id 12?|19 rich_text_blob_id 12?|21 hook_additional_contexts #6*|22 custom_mode_intent #7?|23 project_details #8?|24 turn_steer 8?|25 started_at_ms 4?|26 completed_at_ms 4?|27 sent_by_agent_id 9?|28 sent_by_voice_call 8?|29 sender #9?|30 forked_context 9?|31 reply_to 9?|32 reply_audience #10?|33 reply_to_tool_call_id 9?|34 during_voice_call 8?|35 inherits_voice_call 8?|36 voice_calls_read_utterances 8?|37 summarized_tool_call_id 9?|38 sender_time_zone 9?", qi.xv, vi, Ai, wo, pa, wa, Ji.C, na, fa, ya, Oi];
  }
}
class wa extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new wa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new wa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new wa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(wa, t, r);
  }
  static $() {
    return ["UserMessage.SimulatedMessageMetadata|1 title 9?|2 task_id 9?|3 fsd_finding_action 9?|4 url 9?|5 subscription_source #0?|6 subscription_event_display #1?|7 interaction_response #2?|8 tool_call_id 9?", $i, da, ma];
  }
}
class ya extends xi {
  constructor(t) {
    super(), this.kind = Ja.UNSPECIFIED, this.id = "", this.displayName = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ya().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ya().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ya().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ya, t, r);
  }
  static $() {
    return ["MessageSender|1 kind #0|2 id 9|3 display_name 9", Ja];
  }
}
var Ja = (0, o.QT)(n.proto3, Ii, "MessageSender.Kind", [[0, "UNSPECIFIED"], [1, "AGENT"], [2, "VOICE_CALL"], [3, "MAIN_BOT"], [4, "PROJECT"], [5, "PROJECT_SLACK"]], 1);
class Sa extends xi {
  constructor(t) {
    super(), this.text = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Sa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Sa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Sa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Sa, t, r);
  }
  static $() {
    return ["AssistantMessage|1 text 9|2 started_at_ms 4?|3 completed_at_ms 4?"];
  }
}
class qa extends xi {
  constructor(t) {
    super(), this.text = "", this.durationMs = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new qa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new qa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new qa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(qa, t, r);
  }
  static $() {
    return ["ThinkingMessage|1 text 9|2 duration_ms 13|3 started_at_ms 4?|4 completed_at_ms 4?"];
  }
}
class Ba extends xi {
  constructor(t) {
    super(), this.command = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ba().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ba().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ba().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ba, t, r);
  }
  static $() {
    return ["ShellCommand|1 command 9"];
  }
}
class ba extends xi {
  constructor(t) {
    super(), this.stdout = "", this.stderr = "", this.exitCode = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ba().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ba().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ba().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ba, t, r);
  }
  static $() {
    return ["ShellOutput|1 stdout 9|2 stderr 9|3 exit_code 5"];
  }
}
class Pa extends xi {
  constructor(t) {
    super(), this.turn = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Pa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Pa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Pa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Pa, t, r);
  }
  static $() {
    return ["ConversationTurn|1 agent_conversation_turn #0 turn|2 shell_conversation_turn #1 turn", Ea, Ca];
  }
}
class Ia extends xi {
  constructor(t) {
    super(), this.plan = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ia().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ia().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ia().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ia, t, r);
  }
  static $() {
    return ["ConversationPlan|1 plan 9"];
  }
}
class xa extends xi {
  constructor(t) {
    super(), this.id = "", this.path = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new xa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new xa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new xa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(xa, t, r);
  }
  static $() {
    return ["PlanRegistryEntry|1 id 9|2 path 9"];
  }
}
class va extends xi {
  constructor(t) {
    super(), this.conversationId = "", this.goalId = "", this.objective = "", this.status = Ee.UNSPECIFIED, this.idleContinuationsWithoutToolCalls = 0, this.continuationCount = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new va().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new va().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new va().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(va, t, r);
  }
  static $() {
    return ["GoalState|1 conversation_id 9|2 goal_id 9|3 objective 9|4 status #0|5 idle_continuations_without_tool_calls 13|6 active_duration_ms 4?|7 last_accrued_at_ms 4?|8 continuation_count 13|9 agent_session_id 9?|11 context_tokens_added 3?", Ee];
  }
}
class Ra extends xi {
  constructor(t) {
    super(), this.turn = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ra().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ra().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ra().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ra, t, r);
  }
  static $() {
    return ["ConversationTurnStructure|1 agent_conversation_turn #0 turn|2 shell_conversation_turn #1 turn", ka, Ua];
  }
}
class Ea extends xi {
  constructor(t) {
    super(), this.steps = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ea().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ea().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ea().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ea, t, r);
  }
  static $() {
    return ["AgentConversationTurn|1 user_message #0|2 steps #1*|3 request_id 9?", _a, go];
  }
}
class ka extends xi {
  constructor(t) {
    super(), this.userMessage = new Uint8Array(0), this.steps = [], this.sendMessageStepIndices = [], this.subagentDispatchSteps = [], this.dynamicToolNames = [], this.longReasoningReminderExposureLogged = !1, this.assistantTextStepIndices = [], this.appSecretsRequestStepIndices = [], this.preferenceChangeStepIndices = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ka().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ka().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ka().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ka, t, r);
  }
  static $() {
    return ["AgentConversationTurnStructure|1 user_message 12|2 steps 12*|3 request_id 9?|4 encrypted_model 9?|5 dynamic_tool_count 13?|6 send_message_step_indices 13*|7 routed_model_display_name 9?|8 subagent_dispatch_steps #0*|9 dynamic_tool_names 9*|10 user_message_id 9?|11 long_reasoning_reminder #1?|12 long_reasoning_reminder_exposure_logged 8|13 assistant_text_step_indices 13*|14 assistant_text_steps_recorded 8?|15 app_secrets_request_step_indices 13*|16 preference_change_step_indices 13*|17 run #2?", qo, Ta, Wa];
  }
}
class Ta extends xi {
  constructor(t) {
    super(), this.remainingDelayCalls = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ta().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ta().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ta().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ta, t, r);
  }
  static $() {
    return ["LongReasoningReminderState|1 remaining_delay_calls 13"];
  }
}
class Ca extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ca().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ca().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ca().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ca, t, r);
  }
  static $() {
    return ["ShellConversationTurn|1 shell_command #0|2 shell_output #1", Ba, ba];
  }
}
class Ua extends xi {
  constructor(t) {
    super(), this.shellCommand = new Uint8Array(0), this.shellOutput = new Uint8Array(0), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ua().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ua().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ua().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ua, t, r);
  }
  static $() {
    return ["ShellConversationTurnStructure|1 shell_command 12|2 shell_output 12"];
  }
}
class Aa extends xi {
  constructor(t) {
    super(), this.summary = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Aa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Aa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Aa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Aa, t, r);
  }
  static $() {
    return ["ConversationSummary|1 summary 9"];
  }
}
class $a extends xi {
  constructor(t) {
    super(), this.summarizedMessages = [], this.summary = "", this.windowTail = 0, this.summaryMessage = new Uint8Array(0), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $a().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $a().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $a().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals($a, t, r);
  }
  static $() {
    return ["ConversationSummaryArchive|1 summarized_messages 12*|2 summary 9|3 window_tail 13|4 summary_message 12"];
  }
}
class Oa extends xi {
  constructor(t) {
    super(), this.id = "", this.label = "", this.estimatedTokens = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Oa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Oa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Oa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Oa, t, r);
  }
  static $() {
    return ["PromptTokenBreakdownCategory|1 id 9|2 label 9|3 estimated_tokens 13|4 character_count 13?"];
  }
}
class ja extends xi {
  constructor(t) {
    super(), this.totalUsedTokens = 0, this.maxTokens = 0, this.categories = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ja().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ja().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ja().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ja, t, r);
  }
  static $() {
    return ["PromptTokenBreakdownSnapshot|1 total_used_tokens 13|2 max_tokens 13|3 categories #0*", Oa];
  }
}
class Ma extends xi {
  constructor(t) {
    super(), this.sourceType = "", this.messageIndex = 0, this.contentPath = "", this.startOffset = 0, this.endOffset = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ma().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ma().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ma().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ma, t, r);
  }
  static $() {
    return ["PromptContextSourceRef|1 source_type 9|3 message_index 13|4 content_path 9|5 start_offset 13|6 end_offset 13"];
  }
}
class Da extends xi {
  constructor(t) {
    super(), this.id = "", this.kind = "", this.label = "", this.categoryId = "", this.estimatedTokens = 0, this.characterCount = 0, this.contentAvailable = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Da().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Da().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Da().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Da, t, r);
  }
  static $() {
    return ["PromptContextNode|1 id 9|2 parent_id 9?|3 kind 9|4 label 9|5 category_id 9|6 estimated_tokens 13|7 character_count 13|9 content_available 8|11 source #0?|12 inline_content 9?", Ma];
  }
}
class Na extends xi {
  constructor(t) {
    super(), this.schemaVersion = 0, this.nodes = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Na().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Na().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Na().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Na, t, r);
  }
  static $() {
    return ["PromptContextUsageTree|1 schema_version 13|2 nodes #0*", Da];
  }
}
class Ga extends xi {
  constructor(t) {
    super(), this.usedTokens = 0, this.maxTokens = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ga().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ga().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ga().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ga, t, r);
  }
  static $() {
    return ["ConversationTokenDetails|1 used_tokens 13|2 max_tokens 13|3 breakdown #0?|4 prompt_context_usage_tree #1?", ja, Na];
  }
}
class La extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new La().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new La().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new La().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(La, t, r);
  }
  static $() {
    return ["FileState|1 content 9?|2 initial_content 9?"];
  }
}
class Fa extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Fa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Fa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Fa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Fa, t, r);
  }
  static $() {
    return ["FileStateStructure|1 content 12?|2 initial_content 12?"];
  }
}
class Ka extends xi {
  constructor(t) {
    super(), this.durationMs = n.protoInt64.zero, this.timestampMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ka().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ka().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ka().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ka, t, r);
  }
  static $() {
    return ["StepTiming|1 duration_ms 4|2 timestamp_ms 4"];
  }
}
class za extends xi {
  constructor(t) {
    super(), this.completedTurnCountCapped = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new za().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new za().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new za().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(za, t, r);
  }
  static $() {
    return ["TurnTelemetryState|1 completed_turn_count_capped 13|2 last_completed_turn_timestamp_ms 4?"];
  }
}
class Wa extends xi {
  constructor(t) {
    super(), this.runId = "", this.status = ji.UNSPECIFIED, this.startedAtMs = n.protoInt64.zero, this.attemptCount = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Wa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Wa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Wa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Wa, t, r);
  }
  static $() {
    return ["TurnRunRecord|1 run_id 9|2 status #0|3 started_at_ms 4|4 finished_at_ms 4?|5 attempt_count 13|6 interrupt_reason #1?", ji, Mi];
  }
}
class Ha extends xi {
  constructor(t) {
    super(), this.rootPromptMessagesJson = [], this.turns = [], this.todos = [], this.pendingToolCalls = [], this.fileStates = {}, this.summaryArchives = [], this.plans = {}, this.communicateUpdateHistory = [], this.communicateUpdateStatesByParentToolCallId = {}, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ha().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ha().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ha().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ha, t, r);
  }
  static $() {
    return ["ConversationState|1 root_prompt_messages_json 9*|8 turns #0*|3 todos #1*|4 pending_tool_calls 9*|5 token_details #2|6 summary #3?|7 plan #4?|9 summary_archive #5?|10 file_states 9,#6|11 summary_archives #5*|12 plans 9,#7|13 communicate_update_history #8*|14 communicate_update_final_summary 9?|15 communicate_update_completed_subtitle 9?|16 communicate_update_states_by_parent_tool_call_id 9,#9", Pa, T.kW, Ga, Aa, Ia, $a, La, xa, Va, Qa];
  }
}
class Va extends xi {
  constructor(t) {
    super(), this.step = "", this.messageIndex = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Va().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Va().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Va().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Va, t, r);
  }
  static $() {
    return ["CommunicateUpdateHistoryEntry|1 step 9|3 message_index 13"];
  }
}
class Qa extends xi {
  constructor(t) {
    super(), this.history = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Qa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Qa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Qa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Qa, t, r);
  }
  static $() {
    return ["CommunicateUpdateTurnState|1 history #0*|2 final_summary 9?|3 completed_subtitle 9?", Va];
  }
}
class Xa extends xi {
  constructor(t) {
    super(), this.createdTimestampMs = n.protoInt64.zero, this.lastUsedTimestampMs = n.protoInt64.zero, this.environment = s.dU.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Xa().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Xa().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Xa().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Xa, t, r);
  }
  static $() {
    return ["SubagentPersistedState|1 conversation_state #0|2 created_timestamp_ms 4|3 last_used_timestamp_ms 4|4 subagent_type #1|5 model_id 9?|6 environment #2|7 cloud_subagent #3?|8 first_class_bc_id 9?|9 cloud_requested_environment_build_id 9?|10 machine #4?", tu, s._L, s.dU, Ya, zi];
  }
}
class Ya extends xi {
  constructor(t) {
    super(), this.bcId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ya().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ya().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ya().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ya, t, r);
  }
  static $() {
    return ["CloudSubagentReference|1 bc_id 9|2 transcript_path 9?"];
  }
}
class Za extends xi {
  constructor(t) {
    super(), this.repoPath = "", this.branchName = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Za().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Za().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Za().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Za, t, r);
  }
  static $() {
    return ["TrackedGitRepo|1 repo_path 9|2 branch_name 9"];
  }
}
class tu extends xi {
  constructor(t) {
    super(), this.rootPromptMessagesJson = [], this.turns = [], this.todos = [], this.pendingToolCalls = [], this.previousWorkspaceUris = [], this.fileStates = {}, this.fileStatesV2 = {}, this.summaryArchives = [], this.turnTimings = [], this.subagentStates = {}, this.selfSummaryCount = 0, this.readPaths = [], this.plans = {}, this.trackedGitRepoBranches = [], this.communicateUpdateHistory = [], this.subagentThreads = {}, this.communicateUpdateStatesByParentToolCallId = {}, this.subagentRunsByParentToolCallId = {}, this.subagentStateRefs = {}, this.completedAskQuestionToolCallIds = [], this.durableSkillBlocks = [], this.recentUserMessageIds = [], this.mentionedAgentIds = [], this.voiceCallUtterances = [], this.voiceCallTimeTaskIds = [], this.writesVoiceCallUtterances = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new tu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new tu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new tu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(tu, t, r);
  }
  static $() {
    return ["ConversationStateStructure|1 root_prompt_messages_json 12*|8 turns 12*|3 todos 12*|4 pending_tool_calls 9*|5 token_details #0|6 summary 12?|7 plan 12?|9 previous_workspace_uris 9*|10 mode #1?|11 summary_archive 12?|12 file_states 9,12|15 file_states_v2 9,#2|13 summary_archives 12*|14 turn_timings #3*|16 subagent_states 9,#4|17 self_summary_count 13|18 read_paths 9*|19 active_branch_name 9?|20 plans 9,#5|21 tracked_git_repo_branches #6*|22 agent_type 9?|23 communicate_update_history #7*|24 subagent_threads 9,9|25 communicate_update_final_summary 9?|28 communicate_update_completed_subtitle 9?|29 communicate_update_states_by_parent_tool_call_id 9,#8|30 subagent_runs_by_parent_tool_call_id 9,#9|26 conversation_started_timestamp_ms 4?|27 conversation_started_time_zone 9?|31 subagent_state_refs 9,12|32 goal_state #10?|33 is_root_project_conversation 8?|34 completed_ask_question_tool_call_ids 9*|35 durable_skill_blocks 9*|36 durable_custom_mode_id 9?|37 message_count_at_last_compaction 13?|38 recent_user_message_ids 9*|39 recent_user_message_ids_older_turn_count 13?|40 turn_telemetry #11?|42 mentioned_agent_ids 9*|43 voice_call_utterances #12*|44 voice_call_pending_answer #13?|45 voice_call_time_task_ids 9*|46 writes_voice_call_utterances 8|47 voice_calls_read_utterances 8?|49 user_time_zone 9?|50 project_coordinator_system_section 9?|51 project_coordinator_system_section_communication_rules 8?|52 last_run #14?", Ga, vi, Fa, Ka, Xa, xa, Za, Va, Qa, So, va, za, ru, nu, Wa];
  }
}
class ru extends xi {
  constructor(t) {
    super(), this.id = "", this.kind = eu.UNSPECIFIED, this.text = "", this.answersMessageIds = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ru().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ru().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ru().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ru, t, r);
  }
  static $() {
    return ["VoiceCallUtterance|1 id 9|2 kind #0|3 text 9|4 answers_message_ids 9*", eu];
  }
}
var eu = (0, o.QT)(n.proto3, Ii, "VoiceCallUtterance.Kind", [[0, "UNSPECIFIED"], [1, "SEND"], [2, "TERMINAL"]], 1);
class nu extends xi {
  constructor(t) {
    super(), this.messageIds = [], this.readsUtterances = !1, this.endedOnSend = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new nu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new nu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new nu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(nu, t, r);
  }
  static $() {
    return ["VoiceCallPendingAnswer|1 message_ids 9*|2 reads_utterances 8|3 ended_on_send 8"];
  }
}
class su extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new su().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new su().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new su().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(su, t, r);
  }
  static $() {
    return ["ThinkingDetails"];
  }
}
class iu extends xi {
  constructor(t) {
    super(), this.bearerToken = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new iu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new iu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new iu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(iu, t, r);
  }
  static $() {
    return ["ClientLlmGatewayCredential|1 bearer_token 9"];
  }
}
class ou extends xi {
  constructor(t) {
    super(), this.modelId = "", this.displayModelId = "", this.displayName = "", this.displayNameShort = "", this.aliases = [], this.credentials = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ou().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ou().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ou().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ou, t, r);
  }
  static $() {
    return ["ModelDetails|1 model_id 9|3 display_model_id 9|4 display_name 9|5 display_name_short 9|6 aliases 9*|2 thinking_details #0?|7 max_mode 8?|8 api_key_credentials #1 credentials|9 azure_credentials #2 credentials|10 bedrock_credentials #3 credentials", su, Bi.G0, Bi.ih, Bi.R4];
  }
}
class au extends xi {
  constructor(t) {
    super(), this.subagentType = "", this.selection = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new au().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new au().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new au().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(au, t, r);
  }
  static $() {
    return ["SubagentModelOverride|1 subagent_type 9|2 model #0 selection|3 inherit 8 selection|4 disabled 8 selection", Bi.G4];
  }
}
class uu extends xi {
  constructor(t) {
    super(), this.id = new Uint8Array(0), this.value = new Uint8Array(0), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new uu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new uu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new uu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(uu, t, r);
  }
  static $() {
    return ["PreFetchedBlob|1 id 12|2 value 12"];
  }
}
class cu extends xi {
  constructor(t) {
    super(), this.selectedSubagentModels = [], this.selectedSubagentModelDetails = [], this.preFetchedBlobs = [], this.subagentModelOverrides = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new cu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new cu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new cu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(cu, t, r);
  }
  static $() {
    return ["AgentRunRequest|1 conversation_state #0|2 action #1|3 model_details #2|9 requested_model #3?|4 mcp_tools #4|5 conversation_id 9?|6 mcp_file_system_options #5?|7 skill_options #6?|8 custom_system_prompt 9?|11 subagent_type_name 9?|12 exclude_workspace_context 8?|13 harness 9?|14 selected_subagent_models #3*|15 selected_subagent_model_details #2*|16 conversation_group_id 9?|17 pre_fetched_blobs #7*|18 dev_raw_model_slug 9?|19 client_supports_inline_images 8?|20 subagent_model_overrides #8*|21 can_create_cloud_subagents 8?|22 suppress_subagent_progress_update_tool 8?|23 client_supports_send_to_user 8?|24 computer_use_coordinate_mode 9?|25 run_id 9?|26 agent_session_id 9?|28 client_supports_routed_model_update 8?|29 system_prompt_spec #9?|30 client_llm_gateway_credential #10?|31 client_supports_preview_card 8?|32 started_as_new_project 8?|33 first_project_onboarding 8?|34 next_interaction_query_id 13?|35 voice_call_notes #11?|36 transcript_parent_conversation_id 9?|37 emit_model_call_usage 8?", tu, _o, ou, Bi.G4, bi.Or, bi.Is, Si.uw, uu, au, Pi.$, iu, s.OT];
  }
}
class lu extends xi {
  constructor(t) {
    super(), this.text = "", this.isServerNotice = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new lu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new lu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new lu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(lu, t, r);
  }
  static $() {
    return ["TextDeltaUpdate|1 text 9|2 is_server_notice 8"];
  }
}
class mu extends xi {
  constructor(t) {
    super(), this.displayName = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new mu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new mu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new mu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(mu, t, r);
  }
  static $() {
    return ["RoutedModelUpdate|1 display_name 9"];
  }
}
class du extends xi {
  constructor(t) {
    super(), this.callId = "", this.modelCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new du().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new du().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new du().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(du, t, r);
  }
  static $() {
    return ["ToolCallStartedUpdate|1 call_id 9|2 tool_call #0|3 model_call_id 9", uo];
  }
}
class pu extends xi {
  constructor(t) {
    super(), this.callId = "", this.modelCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new pu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new pu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new pu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(pu, t, r);
  }
  static $() {
    return ["ToolCallCompletedUpdate|1 call_id 9|2 tool_call #0|3 model_call_id 9", uo];
  }
}
class fu extends xi {
  constructor(t) {
    super(), this.callId = "", this.modelCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new fu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new fu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new fu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(fu, t, r);
  }
  static $() {
    return ["ToolCallDeltaUpdate|1 call_id 9|2 tool_call_delta #0|3 model_call_id 9", ho];
  }
}
class hu extends xi {
  constructor(t) {
    super(), this.callId = "", this.argsTextDelta = "", this.modelCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new hu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new hu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new hu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(hu, t, r);
  }
  static $() {
    return ["PartialToolCallUpdate|1 call_id 9|2 tool_call #0|3 args_text_delta 9|4 model_call_id 9", uo];
  }
}
class gu extends xi {
  constructor(t) {
    super(), this.text = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new gu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new gu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new gu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(gu, t, r);
  }
  static $() {
    return ["ThinkingDeltaUpdate|1 text 9|2 thinking_style #0?", Di];
  }
}
class _u extends xi {
  constructor(t) {
    super(), this.thinkingDurationMs = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _u().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _u().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _u().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_u, t, r);
  }
  static $() {
    return ["ThinkingCompletedUpdate|1 thinking_duration_ms 5"];
  }
}
class wu extends xi {
  constructor(t) {
    super(), this.text = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new wu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new wu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new wu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(wu, t, r);
  }
  static $() {
    return ["ThinkingNoteUpdate|1 text 9"];
  }
}
class yu extends xi {
  constructor(t) {
    super(), this.tokens = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new yu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new yu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new yu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(yu, t, r);
  }
  static $() {
    return ["TokenDeltaUpdate|1 tokens 5"];
  }
}
class Ju extends xi {
  constructor(t) {
    super(), this.summary = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ju().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ju().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ju().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ju, t, r);
  }
  static $() {
    return ["SummaryUpdate|1 summary 9"];
  }
}
class Su extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Su().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Su().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Su().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Su, t, r);
  }
  static $() {
    return ["SummaryStartedUpdate"];
  }
}
class qu extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new qu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new qu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new qu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(qu, t, r);
  }
  static $() {
    return ["HeartbeatUpdate"];
  }
}
class Bu extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Bu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Bu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Bu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Bu, t, r);
  }
  static $() {
    return ["SummaryCompletedUpdate|1 hook_message 9?|2 failed 8?|3 fallback 8?"];
  }
}
class bu extends xi {
  constructor(t) {
    super(), this.event = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new bu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new bu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new bu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(bu, t, r);
  }
  static $() {
    return ["ShellOutputDeltaUpdate|1 stdout #0 event|2 stderr #1 event|3 exit #2 event|4 start #3 event", i.o0, i.Db, i.vb, i.tD];
  }
}
class Pu extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Pu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Pu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Pu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Pu, t, r);
  }
  static $() {
    return ["TurnEndedUpdate|1 input_tokens 3?|2 output_tokens 3?|3 cache_read_tokens 3?|4 cache_write_tokens 3?|5 reasoning_tokens 3?|6 ended_at_ms 4?|7 estimated_cost #0?", Iu];
  }
}
class Iu extends xi {
  constructor(t) {
    super(), this.rawCostCents = 0, this.chargedCents = 0, this.source = Ni.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Iu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Iu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Iu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Iu, t, r);
  }
  static $() {
    return ["EstimatedCost|1 raw_cost_cents 1|2 charged_cents 1|3 source #0", Ni];
  }
}
class xu extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new xu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new xu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new xu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(xu, t, r);
  }
  static $() {
    return ["UserMessageAppendedUpdate|1 user_message #0", _a];
  }
}
class vu extends xi {
  constructor(t) {
    super(), this.stepId = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new vu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new vu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new vu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(vu, t, r);
  }
  static $() {
    return ["StepStartedUpdate|1 step_id 4"];
  }
}
class Ru extends xi {
  constructor(t) {
    super(), this.callCount = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ru().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ru().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ru().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ru, t, r);
  }
  static $() {
    return ["ToolRequestsListedUpdate|1 call_count 13"];
  }
}
class Eu extends xi {
  constructor(t) {
    super(), this.stepId = n.protoInt64.zero, this.stepDurationMs = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Eu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Eu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Eu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Eu, t, r);
  }
  static $() {
    return ["StepCompletedUpdate|1 step_id 4|2 step_duration_ms 3"];
  }
}
class ku extends xi {
  constructor(t) {
    super(), this.modelCallId = "", this.inputTokens = n.protoInt64.zero, this.outputTokens = n.protoInt64.zero, this.cacheReadTokens = n.protoInt64.zero, this.cacheWriteTokens = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ku().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ku().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ku().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ku, t, r);
  }
  static $() {
    return ["ModelCallCompletedUpdate|1 model_call_id 9|2 input_tokens 3|3 output_tokens 3|4 cache_read_tokens 3|5 cache_write_tokens 3|6 reasoning_tokens 3?"];
  }
}
class Tu extends xi {
  constructor(t) {
    super(), this.path = "", this.branchName = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Tu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Tu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Tu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Tu, t, r);
  }
  static $() {
    return ["ActiveBranchChange|1 path 9|2 branch_name 9"];
  }
}
class Cu extends xi {
  constructor(t) {
    super(), this.id = "", this.label = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Cu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Cu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Cu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Cu, t, r);
  }
  static $() {
    return ["FeedbackRequestCategory|1 id 9|2 label 9"];
  }
}
class Uu extends xi {
  constructor(t) {
    super(), this.id = "", this.prompt = "", this.categories = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Uu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Uu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Uu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Uu, t, r);
  }
  static $() {
    return ["FeedbackRequestCategoryGroup|1 id 9|2 prompt 9|3 categories #0*", Cu];
  }
}
class Au extends xi {
  constructor(t) {
    super(), this.requestId = "", this.categories = [], this.categoryGroups = [], this.showFormImmediately = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Au().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Au().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Au().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Au, t, r);
  }
  static $() {
    return ["FeedbackRequestUpdate|1 request_id 9|2 canonical_model_name 9?|3 categories #0*|4 category_groups #1*|5 show_form_immediately 8|6 title 9?|7 negative_title 9?|8 comment_placeholder 9?", Cu, Uu];
  }
}
class $u extends xi {
  constructor(t) {
    super(), this.displayOrder = Gi.UNSPECIFIED, this.parentInvocationId = "", this.alternateInvocationId = "", this.parentResponse = "", this.comparisonConfigId = "", this.alternateModelId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new $u().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new $u().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new $u().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals($u, t, r);
  }
  static $() {
    return ["ResponseComparisonStarted|1 display_order #0|2 parent_invocation_id 9|3 alternate_invocation_id 9|4 parent_response 9|5 comparison_config_id 9|6 alternate_model_id 9", Gi];
  }
}
class Ou extends xi {
  constructor(t) {
    super(), this.text = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ou().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ou().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ou().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ou, t, r);
  }
  static $() {
    return ["ResponseComparisonTextDelta|1 text 9"];
  }
}
class ju extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new ju().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new ju().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new ju().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(ju, t, r);
  }
  static $() {
    return ["ResponseComparisonCompleted"];
  }
}
class Mu extends xi {
  constructor(t) {
    super(), this.reason = Li.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Mu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Mu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Mu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Mu, t, r);
  }
  static $() {
    return ["ResponseComparisonSkipped|1 reason #0", Li];
  }
}
class Du extends xi {
  constructor(t) {
    super(), this.comparisonId = "", this.event = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Du().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Du().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Du().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Du, t, r);
  }
  static $() {
    return ["ResponseComparisonUpdate|1 comparison_id 9|2 started #0 event|3 text_delta #1 event|4 completed #2 event|5 skipped #3 event", $u, Ou, ju, Mu];
  }
}
class Nu extends xi {
  constructor(t) {
    super(), this.message = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Nu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Nu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Nu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Nu, t, r);
  }
  static $() {
    return ["InteractionUpdate|1 text_delta #0 message|7 partial_tool_call #1 message|15 tool_call_delta #2 message|2 tool_call_started #3 message|3 tool_call_completed #4 message|4 thinking_delta #5 message|5 thinking_completed #6 message|6 user_message_appended #7 message|8 token_delta #8 message|9 summary #9 message|10 summary_started #10 message|11 summary_completed #11 message|12 shell_output_delta #12 message|13 heartbeat #13 message|14 turn_ended #14 message|16 step_started #15 message|17 step_completed #16 message|27 tool_requests_listed #17 message|19 post_request_prompt #18 message|20 active_branch_change #19 message|21 feedback_request #20 message|22 response_comparison #21 message|23 context_injection_state #22 message|24 routed_model #23 message|26 grok_bot_nudge #24 message|28 thinking_note #25 message|30 voice_call_utterance #26 message|31 model_call_completed #27 message|25 message_started_at_ms 4?", lu, hu, fu, du, pu, gu, _u, xu, yu, Ju, Su, Bu, bu, qu, Pu, vu, Eu, Ru, Lu, Tu, Au, Du, Gu, mu, Fu, wu, ru, ku];
  }
}
class Gu extends xi {
  constructor(t) {
    super(), this.injectionId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Gu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Gu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Gu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Gu, t, r);
  }
  static $() {
    return ["ContextInjectionStateUpdate|1 injection_id 9|2 state #0", Wo];
  }
}
class Lu extends xi {
  constructor(t) {
    super(), this.title = "", this.message = "", this.buttonLabel = "", this.buttonUrl = "", this.buttonAction = Fi.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Lu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Lu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Lu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Lu, t, r);
  }
  static $() {
    return ["PostRequestPromptUpdate|1 title 9|2 message 9|3 button_label 9|4 button_url 9|5 button_action #0", Fi];
  }
}
class Fu extends xi {
  constructor(t) {
    super(), this.job = "", this.description = "", this.showNumber = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Fu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Fu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Fu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Fu, t, r);
  }
  static $() {
    return ["GrokBotNudgeUpdate|1 job 9|2 description 9|3 show_number 13"];
  }
}
class Ku extends xi {
  constructor(t) {
    super(), this.id = 0, this.query = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Ku().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Ku().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Ku().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Ku, t, r);
  }
  static $() {
    return ["InteractionQuery|1 id 13|2 web_search_request_query #0 query|3 ask_question_interaction_query #1 query|4 switch_mode_request_query #2 query|7 create_plan_request_query #3 query|8 setup_vm_environment_args #4 query|9 web_fetch_request_query #5 query|10 pr_management_request_query #6 query|11 mcp_auth_request_query #7 query|12 generate_image_request_query #8 query|13 replace_env_args #9 query|14 connect_scm_request_query #10 query", _t.KL, Wu, It.Nc, gt.vR, Nt.BI, tr.Un, nr.DY, sr.uL, xt.Uj, Lr.TO, be.$1];
  }
}
class zu extends xi {
  constructor(t) {
    super(), this.id = 0, this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new zu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new zu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new zu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(zu, t, r);
  }
  static $() {
    return ["InteractionResponse|1 id 13|2 web_search_request_response #0 result|3 ask_question_interaction_response #1 result|4 switch_mode_request_response #2 result|7 create_plan_request_response #3 result|8 setup_vm_environment_result #4 result|9 web_fetch_request_response #5 result|10 pr_management_result #6 result|11 mcp_auth_request_response #7 result|12 generate_image_request_response #8 result|13 replace_env_result #9 result|14 connect_scm_request_response #10 result", _t.lI, Hu, It.w$, gt.gz, Nt.r$, tr.fS, nr.HL, sr.h, xt.vW, Lr.dV, be.qG];
  }
}
class Wu extends xi {
  constructor(t) {
    super(), this.toolCallId = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Wu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Wu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Wu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Wu, t, r);
  }
  static $() {
    return ["AskQuestionInteractionQuery|1 args #0|2 tool_call_id 9", qt.ju];
  }
}
class Hu extends xi {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new Hu().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new Hu().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new Hu().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(Hu, t, r);
  }
  static $() {
    return ["AskQuestionInteractionResponse|1 result #0", qt.tz];
  }
}
export { Tu as PSN, Ea as i9c, vi as xyI, cu as Mpn, Hu as zT, Jo as KFq, yo as Kwc, Ri as aZc, Ei as uHL, sa as TTG, iu as Ibo, _o as QFf, Ha as ljj, tu as Y9z, go as kJk, Aa as KRq, $a as Anz, Pa as j97, Ra as cmU, ta as o7L, Iu as QVp, Ni as nnk, Au as apn, La as Mzv, qu as ih1, Fo as hGJ, Ku as Pd7, zu as Y5, ma as nh0, Nu as Uq, ya as D$r, ku as c2D, ou as Gmx, hu as fxF, uu as onr, Na as d2k, Oi as HXb, ia as qKo, Ba as oIR, Ca as tms, ba as qKL, bu as Nn_, Ai as c_h, Eu as Lrv, vu as dwJ, au as Bjv, Xa as aK_, da as gan, $i as vns, aa as Scs, Bu as ZM9, Su as lWT, Ju as ECk, eo as aon, lu as PtE, _u as tr3, gu as cHB, wu as Y$k, yu as Fyz, uo as Dm_, pu as LLS, ho as V1v, fu as I0n, du as xuG, Ru as BU$, wo as iHX, Pu as lJj, Ko as oW$, _a as RGk, No as Vtf, xu as v$T };
