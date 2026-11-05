// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/aiserver/v1/chat_pb.js" range:898771..954301
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "./tools_pb";
import * as __dep2 from "./utils_pb";
import * as __dep3 from "./docs_pb";
import * as __dep4 from "./repository_pb";
import * as __dep5 from "../../../runtime/compact";
import * as __dep6 from "../../agent/v1/agent_pb";
import * as __dep7 from "../../agent/v1/request_context_exec_pb";
import * as __dep8 from "../../agent/v1/selected_context_pb";
import * as __dep9 from "../../agent/v1/diagnostics_exec_pb";
var n = __dep0,
  s = __dep1,
  i = __dep2,
  o = __dep3,
  a = (__dep4, __dep5);
const u = "aiserver.v1.";
class c extends a.HL {
  static get runtime() {
    return (0, a.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return u;
  }
}
class l extends c {
  constructor(t) {
    super(), this.type = m.UNSPECIFIED, this.data = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest|1 type #0|2 loop_on_lints #1 data|3 loop_on_tests #2 data|4 mega_planner #3 data|5 loop_on_command #4 data|6 tool_call #5 data|7 diff_review #6 data|8 context_picking #7 data|9 edit_trail #8 data|10 auto_context #9 data|11 context_planner #10 data|12 remember_this #11 data|13 decomposer #12 data|14 cursor_rules #13 data", m, h, g, _, w, y, J, b, P, I, x, v, B, R];
  }
}
var m = (0, a.QT)(n.proto3, u, "ComposerCapabilityRequest.ComposerCapabilityType", [[0, "UNSPECIFIED"], [1, "LOOP_ON_LINTS"], [2, "LOOP_ON_TESTS"], [3, "MEGA_PLANNER"], [4, "LOOP_ON_COMMAND"], [5, "TOOL_CALL"], [6, "DIFF_REVIEW"], [7, "CONTEXT_PICKING"], [8, "EDIT_TRAIL"], [9, "AUTO_CONTEXT"], [10, "CONTEXT_PLANNER"], [11, "DIFF_HISTORY"], [12, "REMEMBER_THIS"], [13, "DECOMPOSER"], [14, "USES_CODEBASE"], [15, "TOOL_FORMER"], [16, "CURSOR_RULES"], [17, "TOKEN_COUNTER"], [18, "USAGE_DATA"], [19, "CHIMES"], [20, "CODE_DECAY_TRACKER"], [21, "BACKGROUND_COMPOSER"], [22, "SUMMARIZATION"], [23, "AI_CODE_TRACKING"], [24, "QUEUING"], [25, "MEMORIES"], [26, "RCP_LOGS"], [27, "KNOWLEDGE_FETCH"], [28, "SLACK_INTEGRATION"], [29, "SUB_COMPOSER"], [30, "THINKING"], [31, "CONTEXT_WINDOW"], [32, "ONLINE_METRICS"], [33, "NOTIFICATIONS"], [34, "SPEC"], [35, "BROWSER_AGENT"]], 1),
  d = (0, a.QT)(n.proto3, u, "ComposerCapabilityRequest.ToolType", [[0, "UNSPECIFIED"], [1, "ADD_FILE_TO_CONTEXT"], [3, "ITERATE"], [4, "REMOVE_FILE_FROM_CONTEXT"], [5, "SEMANTIC_SEARCH_CODEBASE"]], 1);
class p extends c {
  constructor(t) {
    super(), this.type = d.UNSPECIFIED, this.name = "", this.properties = {}, this.required = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new p().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new p().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new p().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(p, t, r);
  }
  static $() {
    return ["ComposerCapabilityRequest.ToolSchema|1 type #0|2 name 9|3 properties 9,#1|4 required 9*", d, f];
  }
}
class f extends c {
  constructor(t) {
    super(), this.type = "", n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.SchemaProperty|1 type 9|2 description 9?"];
  }
}
class h extends c {
  constructor(t) {
    super(), this.linterErrors = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.LoopOnLintsCapability|1 linter_errors #0*|2 custom_instructions 9?", i.wZ];
  }
}
class g extends c {
  constructor(t) {
    super(), this.testNames = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.LoopOnTestsCapability|1 test_names 9*|2 custom_instructions 9?"];
  }
}
class _ extends c {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.MegaPlannerCapability|1 custom_instructions 9?"];
  }
}
class w extends c {
  constructor(t) {
    super(), this.command = "", n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.LoopOnCommandCapability|1 command 9|2 custom_instructions 9?|3 output 9?|4 exit_code 5?"];
  }
}
class y extends c {
  constructor(t) {
    super(), this.toolSchemas = [], this.relevantFiles = [], this.filesInContext = [], this.semanticSearchFiles = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.ToolCallCapability|1 custom_instructions 9?|2 tool_schemas #0*|3 relevant_files 9*|4 files_in_context 9*|5 semantic_search_files 9*", p];
  }
}
class J extends c {
  constructor(t) {
    super(), this.diffs = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.DiffReviewCapability|1 custom_instructions 9?|2 diffs #0*", S];
  }
}
class S extends c {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.chunks = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff|1 relative_workspace_path 9|3 chunks #0*", q];
  }
}
class q extends c {
  constructor(t) {
    super(), this.oldLines = [], this.newLines = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff.Chunk|1 old_lines 9*|2 new_lines 9*|3 old_range #0|4 new_range #0", i.MT];
  }
}
class B extends c {
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
    return ["ComposerCapabilityRequest.DecomposerCapability|1 custom_instructions 9?"];
  }
}
class b extends c {
  constructor(t) {
    super(), this.potentialContextFiles = [], this.potentialContextCodeChunks = [], this.filesInContext = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.ContextPickingCapability|1 custom_instructions 9?|2 potential_context_files 9*|3 potential_context_code_chunks #0*|4 files_in_context 9*", i.FY];
  }
}
class P extends c {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.EditTrailCapability|1 custom_instructions 9?"];
  }
}
class I extends c {
  constructor(t) {
    super(), this.additionalFiles = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.AutoContextCapability|1 custom_instructions 9?|2 additional_files 9*"];
  }
}
class x extends c {
  constructor(t) {
    super(), this.attachedCodeChunks = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.ContextPlannerCapability|1 custom_instructions 9?|2 attached_code_chunks #0*", i.FY];
  }
}
class v extends c {
  constructor(t) {
    super(), this.memory = "", n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.RememberThisCapability|1 custom_instructions 9?|2 memory 9"];
  }
}
class R extends c {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityRequest.CursorRulesCapability|1 custom_instructions 9?"];
  }
}
class E extends c {
  constructor(t) {
    super(), this.data = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityContext|27 slack_integration #0 data|28 github_pr #1 data|29 microsoft_teams_integration #2 data", k, C, T];
  }
}
class k extends c {
  constructor(t) {
    super(), this.thread = "", n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityContext.SlackIntegrationContext|1 thread 9|2 channel_name 9?|3 channel_purpose 9?|4 channel_topic 9?|5 sender_name 9?|6 sender_id 9?|7 sender_type 9?|8 is_directly_addressed 8?|9 message_permalink 9?"];
  }
}
class T extends c {
  constructor(t) {
    super(), this.thread = "", n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityContext.MicrosoftTeamsIntegrationContext|1 thread 9|2 channel_name 9?|3 team_name 9?|4 channel_description 9?|5 team_description 9?"];
  }
}
class C extends c {
  constructor(t) {
    super(), this.title = "", this.description = "", this.comments = "", n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityContext.GithubPRContext|1 title 9|2 description 9|3 comments 9|4 ci_failures 9?|5 code_tour_context #0|6 conflict_resolution #1", U, A];
  }
}
class U extends c {
  constructor(t) {
    super(), this.changeId = "", this.headSha = "", n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityContext.GithubPRContext.CodeTourContext|1 change_id 9|2 head_sha 9|3 current_revision_id 9?|4 visible_section_id 9?|5 visible_step_id 9?|6 path_scope_prefix 9?"];
  }
}
class A extends c {
  constructor(t) {
    super(), this.conflictedPaths = [], this.hunks = [], this.files = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext|1 head_sha 9?|2 base_sha 9?|3 base_ref 9?|4 conflicted_paths 9*|5 gate_reason 9?|6 hunks #0*|7 files #1*", $, O];
  }
}
class $ extends c {
  constructor(t) {
    super(), this.path = "", this.startLine = 0, this.outcome = "", this.needsPerson = !1, n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.HunkReport|1 path 9|2 start_line 13|3 outcome 9|4 kind 9?|5 needs_person 8"];
  }
}
class O extends c {
  constructor(t) {
    super(), this.path = "", this.content = "", this.fullyResolved = !1, n.proto3.util.initPartial(t, this);
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
    return ["ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.ResolvedFile|1 path 9|2 content 9|3 fully_resolved 8"];
  }
}
var j = __dep6,
  M = __dep7,
  D = __dep8;
__dep9;
class N extends a.HL {
  static get runtime() {
    return (0, a.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "aiserver.v1.";
  }
}
class G extends N {
  constructor(t) {
    super(), this.lints = [], n.proto3.util.initPartial(t, this);
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
    return ["GetLintsForChangeResponse|1 lints #0*", L];
  }
}
class L extends N {
  constructor(t) {
    super(), this.message = "", this.severity = "", this.relativeWorkspacePath = "", this.startLineNumberOneIndexed = 0, this.startColumnOneIndexed = 0, this.endLineNumberInclusiveOneIndexed = 0, this.endColumnOneIndexed = 0, this.quickFixes = [], n.proto3.util.initPartial(t, this);
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
    return ["GetLintsForChangeResponse.Lint|1 message 9|2 severity 9|3 relative_workspace_path 9|4 start_line_number_one_indexed 5|5 start_column_one_indexed 5|6 end_line_number_inclusive_one_indexed 5|7 end_column_one_indexed 5|9 quick_fixes #0*", F];
  }
}
class F extends N {
  constructor(t) {
    super(), this.message = "", this.kind = "", this.isPreferred = !1, this.edits = [], n.proto3.util.initPartial(t, this);
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
    return ["GetLintsForChangeResponse.Lint.QuickFix|1 message 9|2 kind 9|3 is_preferred 8|4 edits #0*", K];
  }
}
class K extends N {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.text = "", this.startLineNumberOneIndexed = 0, this.startColumnOneIndexed = 0, this.endLineNumberInclusiveOneIndexed = 0, this.endColumnOneIndexed = 0, n.proto3.util.initPartial(t, this);
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
    return ["GetLintsForChangeResponse.Lint.QuickFix.Edit|1 relative_workspace_path 9|2 text 9|3 start_line_number_one_indexed 5|4 start_column_one_indexed 5|5 end_line_number_inclusive_one_indexed 5|6 end_column_one_indexed 5"];
  }
}
const z = "aiserver.v1.";
class W extends a.HL {
  static get runtime() {
    return (0, a.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return z;
  }
}
var H = (0, a.QT)(n.proto3, z, "ChunkType", [[0, "UNSPECIFIED"], [1, "CODEBASE"], [2, "LONG_FILE"], [3, "DOCS"]], 1),
  V = (0, a.QT)(n.proto3, z, "SubagentType", [[0, "UNSPECIFIED"], [1, "DEEP_SEARCH"], [2, "FIX_LINTS"], [3, "TASK"], [4, "SPEC"]], 1);
class Q extends W {
  constructor(t) {
    super(), this.summary = "", this.truncationLastBubbleIdInclusive = "", this.clientShouldStartSendingFromInclusiveBubbleId = "", this.previousConversationSummaryBubbleId = "", this.includesToolResults = !1, this.strategy = "", n.proto3.util.initPartial(t, this);
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
    return ["ConversationSummary|1 summary 9|2 truncation_last_bubble_id_inclusive 9|3 client_should_start_sending_from_inclusive_bubble_id 9|4 previous_conversation_summary_bubble_id 9|5 includes_tool_results 8|6 strategy 9"];
  }
}
class X extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.contents = "", n.proto3.util.initPartial(t, this);
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
    return ["ContextToRank|1 relative_workspace_path 9|2 contents 9|3 line_range #0?|4 code_block #1?", i.MT, i.NG];
  }
}
class Y extends W {
  constructor(t) {
    super(), this.score = 0, n.proto3.util.initPartial(t, this);
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
    return ["RankedContext|1 context #0|2 score 2", X];
  }
}
class Z extends W {
  constructor(t) {
    super(), this.chunks = [], n.proto3.util.initPartial(t, this);
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
    return ["DocumentationCitation|1 chunks #0*", o.ci];
  }
}
class tt extends W {
  constructor(t) {
    super(), this.references = [], n.proto3.util.initPartial(t, this);
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
    return ["WebCitation|1 references #0*", rt];
  }
}
class rt extends W {
  constructor(t) {
    super(), this.title = "", this.url = "", this.chunk = "", n.proto3.util.initPartial(t, this);
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
    return ["WebReference|2 title 9|1 url 9|3 chunk 9"];
  }
}
class et extends W {
  constructor(t) {
    super(), this.title = "", this.url = "", this.chunk = "", this.name = "", n.proto3.util.initPartial(t, this);
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
    return ["DocsReference|1 title 9|2 url 9|3 chunk 9|4 name 9"];
  }
}
class nt extends W {
  constructor(t) {
    super(), this.content = "", this.title = "", n.proto3.util.initPartial(t, this);
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
    return ["AiWebSearchResult|1 content 9|2 title 9"];
  }
}
class st extends W {
  constructor(t) {
    super(), this.message = "", n.proto3.util.initPartial(t, this);
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
    return ["StatusUpdate|1 message 9|2 metadata 9?"];
  }
}
class it extends W {
  constructor(t) {
    super(), this.updates = [], n.proto3.util.initPartial(t, this);
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
    return ["StatusUpdates|1 updates #0*", st];
  }
}
class ot extends W {
  constructor(t) {
    super(), this.fileName = "", this.diffHistory = [], this.diffHistoryTimestamps = [], n.proto3.util.initPartial(t, this);
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
    return ["ComposerFileDiffHistory|1 file_name 9|2 diff_history 9*|3 diff_history_timestamps 1*"];
  }
}
var at = (0, a.QT)(n.proto3, z, "StreamUnifiedChatRequest.UnifiedMode", [[0, "UNSPECIFIED"], [1, "CHAT"], [2, "AGENT"], [3, "EDIT"], [4, "CUSTOM"], [5, "PLAN"], [6, "DEBUG"]], 1);
n.proto3;
class ut extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.content = "", this.score = 0, n.proto3.util.initPartial(t, this);
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
    return ["ContextPiece|1 relative_workspace_path 9|2 content 9|3 score 2"];
  }
}
class ct extends W {
  constructor(t) {
    super(), this.percentageRemaining = 0, n.proto3.util.initPartial(t, this);
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
    return ["ContextWindowStatus|1 percentage_remaining 5|2 tokens_used 5?|3 token_limit 5?|4 percentage_remaining_float 2?"];
  }
}
class lt extends W {
  constructor(t) {
    super(), this.message = "", this.codicon = "", n.proto3.util.initPartial(t, this);
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
    return ["ServiceStatusUpdate|1 message 9|2 codicon 9|3 allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown 8?|4 action_to_run_on_status_update 9?"];
  }
}
class mt extends W {
  constructor(t) {
    super(), this.symbolName = "", this.symbolSearchString = "", this.relativeWorkspacePath = "", this.roughLineNumber = 0, n.proto3.util.initPartial(t, this);
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
    return ["SymbolLink|1 symbol_name 9|2 symbol_search_string 9|3 relative_workspace_path 9|4 rough_line_number 5"];
  }
}
class dt extends W {
  constructor(t) {
    super(), this.displayName = "", this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
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
    return ["FileLink|1 display_name 9|2 relative_workspace_path 9"];
  }
}
class pt extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.redRanges = [], this.redRangesReversed = [], this.startHash = "", this.endHash = "", n.proto3.util.initPartial(t, this);
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
    return ["RedDiff|1 relative_workspace_path 9|2 red_ranges #0*|3 red_ranges_reversed #0*|4 start_hash 9|5 end_hash 9", i.l2];
  }
}
class ft extends W {
  constructor(t) {
    super(), this.fileDetails = "", this.fileName = "", n.proto3.util.initPartial(t, this);
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
    return ["DiffFile|1 file_details 9|2 file_name 9"];
  }
}
class ht extends W {
  constructor(t) {
    super(), this.description = "", this.message = "", this.files = [], n.proto3.util.initPartial(t, this);
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
    return ["ViewableCommitProps|1 description 9|2 message 9|3 files #0*", ft];
  }
}
class gt extends W {
  constructor(t) {
    super(), this.title = "", this.body = "", this.files = [], n.proto3.util.initPartial(t, this);
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
    return ["ViewablePRProps|1 title 9|2 body 9|3 files #0*", ft];
  }
}
class _t extends W {
  constructor(t) {
    super(), this.files = [], this.diffPreface = "", n.proto3.util.initPartial(t, this);
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
    return ["ViewableDiffProps|1 files #0*|2 diff_preface 9", ft];
  }
}
class wt extends W {
  constructor(t) {
    super(), this.diffData = [], n.proto3.util.initPartial(t, this);
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
    return ["ViewableGitContext|1 commit_data #0?|2 pull_request_data #1?|3 diff_data #2*", ht, gt, _t];
  }
}
class yt extends W {
  constructor(t) {
    super(), this.text = "", this.type = Jt.UNSPECIFIED, this.attachedCodeChunks = [], this.codebaseContextChunks = [], this.commits = [], this.pullRequests = [], this.gitDiffs = [], this.assistantSuggestedDiffs = [], this.interpreterResults = [], this.images = [], this.attachedFolders = [], this.approximateLintErrors = [], this.bubbleId = "", this.attachedFoldersNew = [], this.lints = [], this.userResponsesToSuggestedCodeBlocks = [], this.relevantFiles = [], this.toolResults = [], this.notepads = [], this.capabilities = [], this.editTrailContexts = [], this.suggestedCodeBlocks = [], this.diffsForCompressingFiles = [], this.multiFileLinterErrors = [], this.diffHistories = [], this.recentlyViewedFiles = [], this.recentLocationsHistory = [], this.isAgentic = !1, this.fileDiffTrajectories = [], this.existedSubsequentTerminalCommand = !1, this.existedPreviousTerminalCommand = !1, this.docsReferences = [], this.webReferences = [], this.aiWebSearchResults = [], this.attachedFoldersListDirResults = [], this.humanChanges = [], this.attachedHumanChanges = !1, this.summarizedComposers = [], this.cursorRules = [], this.contextPieces = [], this.allThinkingBlocks = [], this.diffsSinceLastApply = [], this.deletedFiles = [], this.supportedTools = [], this.consoleLogs = [], this.knowledgeItems = [], this.uiElementPicked = [], this.documentationSelections = [], this.externalLinks = [], this.projectLayouts = [], this.capabilityContexts = [], this.todos = [], this.requestId = "", this.createdAt = "", this.mcpDescriptors = [], this.workspaceUris = [], this.cursorCommands = [], this.cursorCommandsExplicitlySet = !1, this.pastChats = [], this.pastChatsExplicitlySet = !1, n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage|1 text 9|2 type #0|3 attached_code_chunks #1*|4 codebase_context_chunks #2*|5 commits #3*|6 pull_requests #4*|7 git_diffs #5*|8 assistant_suggested_diffs #6*|9 interpreter_results #7*|10 images #8*|11 attached_folders 9*|12 approximate_lint_errors #9*|13 bubble_id 9|32 server_bubble_id 9?|14 attached_folders_new #10*|15 lints #11*|16 user_responses_to_suggested_code_blocks #12*|17 relevant_files 9*|18 tool_results #13*|19 notepads #14*|20 is_capability_iteration 8?|21 capabilities #15*|22 edit_trail_contexts #16*|23 suggested_code_blocks #17*|24 diffs_for_compressing_files #18*|25 multi_file_linter_errors #19*|26 diff_histories #20*|27 recently_viewed_files #1*|28 recent_locations_history #21*|29 is_agentic 8|30 file_diff_trajectories #22*|31 conversation_summary #23?|33 existed_subsequent_terminal_command 8|34 existed_previous_terminal_command 8|35 docs_references #24*|36 web_references #25*|75 ai_web_search_results #26*|37 git_context #27?|38 attached_folders_list_dir_results #28*|39 cached_conversation_summary #23?|40 human_changes #29*|41 attached_human_changes 8|42 summarized_composers #30*|43 cursor_rules #31*|44 context_pieces #32*|45 thinking #33?|46 all_thinking_blocks #33*|85 thinking_style #34?|47 unified_mode #35?|98 agent_mode #36?|48 diffs_since_last_apply #37*|49 deleted_files #38*|50 usage_uuid 9?|51 supported_tools #39*|52 current_file_location_data #40?|53 edit_tool_supports_search_and_replace 8?|54 last_terminal_cwd 9?|55 user_explicitly_asked_to_generate_cursor_rules 8?|56 console_logs #41*|57 rich_text 9?|58 knowledge_items #42*|59 ui_element_picked #43*|60 user_explicitly_asked_to_add_to_knowledge_base 8?|61 documentation_selections #44*|62 external_links #45*|63 use_web 8?|64 project_layouts #46*|65 thinking_duration_ms 5?|88 step_duration_ms 5?|66 subagent_return #47?|67 is_simple_looping_message 8?|68 capability_contexts #48*|69 checkpoint_commit_hash 9?|70 git_status_raw 9?|71 todos #49*|72 is_review_edits_followup 8?|74 request_id 9|73 ide_editors_state #50?|76 context_window_status #51?|77 is_plan_execution 8?|78 created_at 9|79 model_info #52|80 is_quick_search_query 8?|81 plan_update #53?|82 is_simulated_msg 8?|95 simulated_msg_reason #54?|97 simulated_message_metadata #55?|83 mcp_descriptors #56*|84 workspace_project_dir 9?|87 workspace_uris 9*|86 debug_mode_config #57?|89 text_blob_id 12?|90 rich_text_blob_id 12?|91 cursor_commands #58*|92 cursor_commands_explicitly_set 8|93 past_chats #59*|94 past_chats_explicitly_set 8|96 triggering_user_info #60?|99 turn_steer 8?|100 sent_by_agent_id 9?|101 sent_by_voice_call 8?|102 sender #61?|103 reply_to 9?|104 reply_audience #62?|105 reply_to_tool_call_id 9?|106 summarized_tool_call_id 9?", Jt, qt, i.NG, tr, rr, i.o$, Yt, Xt, i.UR, Tt, Vt, Ct, nr, xt, vt, l, kt, er, pt, i.U$, cr, Ut, ot, Q, et, rt, nt, wt, s.$PL, $t, Rt, i.DX, ut, Ot, St, at, j.xyI, jt, Mt, s.XaY, Ht, i.EZ, Dt, i.c5, Nt, i.ot, _r, lr, E, s.kWq, Gt, ct, i.Wj, Ft, j.c_h, Kt, zt, M.TT, D.Ps, D.AW, j.iHX, j.D$r, j.HXb];
  }
}
var Jt = (0, a.QT)(n.proto3, z, "ConversationMessage.MessageType", [[0, "UNSPECIFIED"], [1, "HUMAN"], [2, "AI"]], 1),
  St = (0, a.QT)(n.proto3, z, "ConversationMessage.ThinkingStyle", [[0, "UNSPECIFIED"], [1, "DEFAULT"], [2, "CODEX"], [3, "GPT5"]], 1);
class qt extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.languageIdentifier = "", n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.CodeChunk|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 summarization_strategy #0?|5 language_identifier 9|6 intent #1?|7 is_final_version 8?|8 is_first_version 8?|9 contents_are_missing 8?|10 is_only_included_from_folder 8?|11 code_chunk_git_context #2?", bt, Bt, Pt];
  }
}
var Bt = (0, a.QT)(n.proto3, z, "ConversationMessage.CodeChunk.Intent", [[0, "UNSPECIFIED"], [1, "COMPOSER_FILE"], [2, "COMPRESSED_COMPOSER_FILE"], [3, "RECENTLY_VIEWED_FILE"], [4, "OUTLINE"], [5, "MENTIONED_FILE"], [6, "CODE_SELECTION"], [7, "AI_EDITED_FILE"], [8, "VISIBLE_FILE"], [9, "TERMINAL_SELECTION"]], 1),
  bt = (0, a.QT)(n.proto3, z, "ConversationMessage.CodeChunk.SummarizationStrategy", [[0, "NONE_UNSPECIFIED"], [1, "SUMMARIZED"], [2, "EMBEDDED"]], 1);
class Pt extends W {
  constructor(t) {
    super(), this.gitInfo = [], n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.CodeChunk.CodeChunkGitContext|1 git_info #0*", It];
  }
}
class It extends W {
  constructor(t) {
    super(), this.commit = "", this.author = "", this.date = "", this.message = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new It().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new It().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new It().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(It, t, r);
  }
  static $() {
    return ["ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo|1 commit 9|2 author 9|3 date 9|4 message 9"];
  }
}
class xt extends W {
  constructor(t) {
    super(), this.toolCallId = "", this.toolName = "", this.toolIndex = 0, this.args = "", this.rawArgs = "", this.attachedCodeChunks = [], this.images = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new xt().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new xt().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new xt().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(xt, t, r);
  }
  static $() {
    return ["ConversationMessage.ToolResult|1 tool_call_id 9|2 tool_name 9|3 tool_index 13|12 model_call_id 9?|4 args 9|5 raw_args 9|6 attached_code_chunks #0*|7 content 9?|8 result #1|9 error #2?|10 images #3*|11 tool_call #4?|13 started_at_ms 4?|14 completed_at_ms 4?", qt, s.Ue3, s.MtQ, i.UR, s.TE4];
  }
}
class vt extends W {
  constructor(t) {
    super(), this.name = "", this.text = "", this.attachedCodeChunks = [], this.attachedFolders = [], this.commits = [], this.pullRequests = [], this.gitDiffs = [], this.images = [], n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.NotepadContext|1 name 9|2 text 9|3 attached_code_chunks #0*|4 attached_folders 9*|5 commits #1*|6 pull_requests #2*|7 git_diffs #3*|8 images #4*", qt, tr, rr, i.o$, i.UR];
  }
}
class Rt extends W {
  constructor(t) {
    super(), this.name = "", n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.ComposerContext|1 name 9|2 conversation_summary #0", Q];
  }
}
class Et extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.contextLines = "", this.text = "", n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.EditLocation|1 relative_workspace_path 9|3 range #0|4 initial_range #0|5 context_lines 9|6 text 9|7 text_range #0", i.l2];
  }
}
class kt extends W {
  constructor(t) {
    super(), this.uniqueId = "", this.editTrailSorted = [], n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.EditTrailContext|1 unique_id 9|2 edit_trail_sorted #0*", Et];
  }
}
class Tt extends W {
  constructor(t) {
    super(), this.message = "", this.value = "", this.startLine = 0, this.endLine = 0, this.startColumn = 0, this.endColumn = 0, n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.ApproximateLintError|1 message 9|2 value 9|3 start_line 5|4 end_line 5|5 start_column 5|6 end_column 5"];
  }
}
class Ct extends W {
  constructor(t) {
    super(), this.chatCodeblockModelValue = "", n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.Lints|1 lints #0|2 chat_codeblock_model_value 9", G];
  }
}
class Ut extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.lineNumber = 0, n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.RecentLocation|1 relative_workspace_path 9|2 line_number 5"];
  }
}
class At extends W {
  constructor(t) {
    super(), this.startLineNumber = 0, this.endLineNumberExclusive = 0, this.beforeContextLines = [], this.removedLines = [], this.addedLines = [], this.afterContextLines = [], n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.RenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"];
  }
}
class $t extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.renderedDiffs = [], n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.HumanChange|1 relative_workspace_path 9|2 rendered_diffs #0*", At];
  }
}
class Ot extends W {
  constructor(t) {
    super(), this.text = "", this.signature = "", this.redactedThinking = "", this.isLastThinkingChunk = !1, n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.Thinking|1 text 9|2 signature 9|3 redacted_thinking 9|4 is_last_thinking_chunk 8"];
  }
}
class jt extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.DiffSinceLastApply|1 relative_workspace_path 9|2 diff #0?|4 is_accepted 8?|5 is_rejected 8?|6 last_apply_chained_from_n_human_messages_ago 5?", s.KRm];
  }
}
class Mt extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.DeletedFile|1 relative_workspace_path 9"];
  }
}
class Dt extends W {
  constructor(t) {
    super(), this.title = "", this.knowledge = "", this.knowledgeId = "", this.isGenerated = !1, n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.KnowledgeItem|1 title 9|2 knowledge 9|3 knowledge_id 9|4 is_generated 8"];
  }
}
class Nt extends W {
  constructor(t) {
    super(), this.docId = "", this.name = "", n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.DocumentationSelection|1 doc_id 9|2 name 9"];
  }
}
class Gt extends W {
  constructor(t) {
    super(), this.isPillDisplayed = !1, this.visibleFilePaths = [], this.recentlyViewedFilePaths = [], this.visibleFiles = [], this.recentlyViewedFiles = [], n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.IdeEditorsState|1 is_pill_displayed 8|2 visible_file_paths 9*|3 recently_viewed_file_paths 9*|4 visible_files #0*|5 recently_viewed_files #0*", Lt];
  }
}
class Lt extends W {
  constructor(t) {
    super(), this.relativePath = "", n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.IdeEditorsState.File|1 relative_path 9|2 is_currently_focused 8?|3 current_line_number 5?|4 current_line_text 9?|5 line_count 5?|6 absolute_path 9?"];
  }
}
class Ft extends W {
  constructor(t) {
    super(), this.currentPlan = "", this.isFirstTimeSeen = !1, n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.PlanUpdate|1 current_plan 9|2 is_first_time_seen 8"];
  }
}
class Kt extends W {
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
    return ["ConversationMessage.SimulatedMessageMetadata|1 title 9?|2 task_id 9?|3 fsd_finding_action 9?|4 url 9?|5 subscription_source #0?|6 subscription_event_display #1?|7 interaction_response #2?", j.vns, j.gan, j.nh0];
  }
}
class zt extends W {
  constructor(t) {
    super(), this.folderPath = "", this.tools = [], n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.McpDescriptor|1 folder_path 9|2 server_name 9?|3 tools #0*|4 server_use_instructions 9?", Wt];
  }
}
class Wt extends W {
  constructor(t) {
    super(), this.toolName = "", n.proto3.util.initPartial(t, this);
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
    return ["ConversationMessage.McpDescriptor.Tool|1 tool_name 9|2 description 9?"];
  }
}
class Ht extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.lineNumber = 0, this.text = "", n.proto3.util.initPartial(t, this);
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
    return ["CurrentFileLocationData|1 relative_workspace_path 9|2 line_number 5|3 text 9"];
  }
}
class Vt extends W {
  constructor(t) {
    super(), this.relativePath = "", this.files = [], n.proto3.util.initPartial(t, this);
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
    return ["FolderInfo|1 relative_path 9|2 files #0*", Qt];
  }
}
class Qt extends W {
  constructor(t) {
    super(), this.relativePath = "", this.content = "", this.truncated = !1, this.score = 0, n.proto3.util.initPartial(t, this);
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
    return ["FolderFileInfo|1 relative_path 9|2 content 9|3 truncated 8|4 score 2"];
  }
}
class Xt extends W {
  constructor(t) {
    super(), this.output = "", this.success = !1, n.proto3.util.initPartial(t, this);
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
    return ["InterpreterResult|1 output 9|2 success 8"];
  }
}
class Yt extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.chunks = [], n.proto3.util.initPartial(t, this);
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
    return ["SimpleFileDiff|1 relative_workspace_path 9|3 chunks #0*", Zt];
  }
}
class Zt extends W {
  constructor(t) {
    super(), this.oldLines = [], this.newLines = [], n.proto3.util.initPartial(t, this);
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
    return ["SimpleFileDiff.Chunk|1 old_lines 9*|2 new_lines 9*|3 old_range #0|4 new_range #0", i.MT];
  }
}
class tr extends W {
  constructor(t) {
    super(), this.sha = "", this.message = "", this.description = "", this.diff = [], this.author = "", this.date = "", n.proto3.util.initPartial(t, this);
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
    return ["Commit|1 sha 9|2 message 9|3 description 9|4 diff #0*|5 author 9|6 date 9", i.QP];
  }
}
class rr extends W {
  constructor(t) {
    super(), this.title = "", this.body = "", this.diff = [], this.id = n.protoInt64.zero, this.number = n.protoInt64.zero, n.proto3.util.initPartial(t, this);
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
    return ["PullRequest|1 title 9|2 body 9|3 diff #0*|4 id 3|5 number 3", i.QP];
  }
}
class er extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", n.proto3.util.initPartial(t, this);
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
    return ["SuggestedCodeBlock|1 relative_workspace_path 9"];
  }
}
class nr extends W {
  constructor(t) {
    super(), this.userResponseType = sr.UNSPECIFIED, this.filePath = "", n.proto3.util.initPartial(t, this);
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
    return ["UserResponseToSuggestedCodeBlock|1 user_response_type #0|2 file_path 9|3 user_modifications_to_suggested_code_blocks #1?", sr, i.QP];
  }
}
var sr = (0, a.QT)(n.proto3, z, "UserResponseToSuggestedCodeBlock.UserResponseType", [[0, "UNSPECIFIED"], [1, "ACCEPT"], [2, "REJECT"], [3, "MODIFY"]], 1);
class ir extends W {
  constructor(t) {
    super(), this.fileName = "", this.fileContent = "", n.proto3.util.initPartial(t, this);
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
    return ["ContextRerankingCandidateFile|1 file_name 9|2 file_content 9"];
  }
}
class or extends W {
  constructor(t) {
    super(), this.chunks = [], this.editor = ar.UNSPECIFIED, this.hitTimeout = !1, n.proto3.util.initPartial(t, this);
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
    return ["ComposerFileDiff|1 chunks #0*|2 editor #1|3 hit_timeout 8", ur, ar];
  }
}
var ar = (0, a.QT)(n.proto3, z, "ComposerFileDiff.Editor", [[0, "UNSPECIFIED"], [1, "AI"], [2, "HUMAN"]], 1);
class ur extends W {
  constructor(t) {
    super(), this.diffString = "", this.oldStart = 0, this.newStart = 0, this.oldLines = 0, this.newLines = 0, this.linesRemoved = 0, this.linesAdded = 0, n.proto3.util.initPartial(t, this);
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
    return ["ComposerFileDiff.ChunkDiff|1 diff_string 9|2 old_start 5|3 new_start 5|4 old_lines 5|5 new_lines 5|6 lines_removed 5|7 lines_added 5"];
  }
}
class cr extends W {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.diffs = [], this.timestamp = 0, this.uniqueId = "", n.proto3.util.initPartial(t, this);
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
    return ["DiffHistoryData|1 relative_workspace_path 9|2 diffs #0*|3 timestamp 1|4 unique_id 9|5 start_to_end_diff #0", or];
  }
}
n.proto3, n.proto3, n.proto3, n.proto3;
class lr extends W {
  constructor(t) {
    super(), this.subagentType = V.UNSPECIFIED, this.returnValue = {
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
    return ["SubagentReturnCall|1 subagent_type #0|2 deep_search_return_value #1 return_value|3 fix_lints_return_value #2 return_value|4 task_return_value #3 return_value|5 spec_return_value #4 return_value", V, mr, pr, fr, hr];
  }
}
class mr extends W {
  constructor(t) {
    super(), this.contextItems = [], n.proto3.util.initPartial(t, this);
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
    return ["DeepSearchSubagentReturnValue|1 context_items #0*", dr];
  }
}
class dr extends W {
  constructor(t) {
    super(), this.file = "", this.explanation = "", n.proto3.util.initPartial(t, this);
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
    return ["DeepSearchSubagentReturnValue.ContextItem|1 file 9|2 line_range #0?|3 explanation 9", i.MT];
  }
}
class pr extends W {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["FixLintsSubagentReturnValue"];
  }
}
class fr extends W {
  constructor(t) {
    super(), this.summary = "", n.proto3.util.initPartial(t, this);
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
    return ["TaskSubagentReturnValue|1 summary 9"];
  }
}
class hr extends W {
  constructor(t) {
    super(), this.summary = "", this.stringReplacements = [], n.proto3.util.initPartial(t, this);
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
    return ["SpecSubagentReturnValue|1 summary 9|2 string_replacements #0*", gr];
  }
}
class gr extends W {
  constructor(t) {
    super(), this.oldString = "", this.newString = "", n.proto3.util.initPartial(t, this);
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
    return ["StringReplacement|1 old_string 9|2 new_string 9"];
  }
}
class _r extends W {
  constructor(t) {
    super(), this.rootPath = "", n.proto3.util.initPartial(t, this);
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
    return ["ProjectLayout|1 root_path 9|2 content #0|3 list_dir_v2_result #1?", wr, s.$rP];
  }
}
class wr extends W {
  constructor(t) {
    super(), this.directories = [], this.files = [], this.hiddenFiles = [], n.proto3.util.initPartial(t, this);
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
    return ["ProjectLayoutDirectoryContent|1 directories #0*|2 files #1*|3 total_files 5?|4 total_subfolders 5?|5 hidden_files #1*", yr, Jr];
  }
}
class yr extends W {
  constructor(t) {
    super(), this.name = "", n.proto3.util.initPartial(t, this);
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
    return ["ProjectLayoutDirectory|1 name 9|2 content #0", wr];
  }
}
class Jr extends W {
  constructor(t) {
    super(), this.name = "", n.proto3.util.initPartial(t, this);
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
    return ["ProjectLayoutFile|1 name 9"];
  }
}
export { H as O9, tr as gn, ot as yf, ir as An, yt as hS, Dt as jF, Q as KR, et as TS, Z as cf, dt as Bh, Y as jp, lt as D8, it as XE, mt as Bo, tt as O0 };
