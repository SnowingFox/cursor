// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9825 range:6212906..6231952
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9825: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Ek: () => P, Gn: () => u, Km: () => k });
    var n2 = r2(6038), s2 = r2(7918), i2 = r2(8592);
    const o2 = "aiserver.v1.";
    class a extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return o2;
      }
    }
    class u extends a {
      constructor(t3) {
        super(), this.type = c.UNSPECIFIED, this.data = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(u, t3, e3);
      }
      static $() {
        return ["ComposerCapabilityRequest|1 type #0|2 loop_on_lints #1 data|3 loop_on_tests #2 data|4 mega_planner #3 data|5 loop_on_command #4 data|6 tool_call #5 data|7 diff_review #6 data|8 context_picking #7 data|9 edit_trail #8 data|10 auto_context #9 data|11 context_planner #10 data|12 remember_this #11 data|13 decomposer #12 data|14 cursor_rules #13 data", c, f, p, h, g, A, _, J, B, E, I, C, S, b];
      }
    }
    var c = (0, i2.QT)(n2.proto3, o2, "ComposerCapabilityRequest.ComposerCapabilityType", [[0, "UNSPECIFIED"], [1, "LOOP_ON_LINTS"], [2, "LOOP_ON_TESTS"], [3, "MEGA_PLANNER"], [4, "LOOP_ON_COMMAND"], [5, "TOOL_CALL"], [6, "DIFF_REVIEW"], [7, "CONTEXT_PICKING"], [8, "EDIT_TRAIL"], [9, "AUTO_CONTEXT"], [10, "CONTEXT_PLANNER"], [11, "DIFF_HISTORY"], [12, "REMEMBER_THIS"], [13, "DECOMPOSER"], [14, "USES_CODEBASE"], [15, "TOOL_FORMER"], [16, "CURSOR_RULES"], [17, "TOKEN_COUNTER"], [18, "USAGE_DATA"], [19, "CHIMES"], [20, "CODE_DECAY_TRACKER"], [21, "BACKGROUND_COMPOSER"], [22, "SUMMARIZATION"], [23, "AI_CODE_TRACKING"], [24, "QUEUING"], [25, "MEMORIES"], [26, "RCP_LOGS"], [27, "KNOWLEDGE_FETCH"], [28, "SLACK_INTEGRATION"], [29, "SUB_COMPOSER"], [30, "THINKING"], [31, "CONTEXT_WINDOW"], [32, "ONLINE_METRICS"], [33, "NOTIFICATIONS"], [34, "SPEC"], [35, "BROWSER_AGENT"]], 1), l = (0, i2.QT)(n2.proto3, o2, "ComposerCapabilityRequest.ToolType", [[0, "UNSPECIFIED"], [1, "ADD_FILE_TO_CONTEXT"], [3, "ITERATE"], [4, "REMOVE_FILE_FROM_CONTEXT"], [5, "SEMANTIC_SEARCH_CODEBASE"]], 1);
    class m extends a {
      constructor(t3) {
        super(), this.type = l.UNSPECIFIED, this.name = "", this.properties = {}, this.required = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.ToolSchema|1 type #0|2 name 9|3 properties 9,#1|4 required 9*", l, d];
      }
    }
    class d extends a {
      constructor(t3) {
        super(), this.type = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.SchemaProperty|1 type 9|2 description 9?"];
      }
    }
    class f extends a {
      constructor(t3) {
        super(), this.linterErrors = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.LoopOnLintsCapability|1 linter_errors #0*|2 custom_instructions 9?", s2.LinterErrors];
      }
    }
    class p extends a {
      constructor(t3) {
        super(), this.testNames = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.LoopOnTestsCapability|1 test_names 9*|2 custom_instructions 9?"];
      }
    }
    class h extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.MegaPlannerCapability|1 custom_instructions 9?"];
      }
    }
    class g extends a {
      constructor(t3) {
        super(), this.command = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.LoopOnCommandCapability|1 command 9|2 custom_instructions 9?|3 output 9?|4 exit_code 5?"];
      }
    }
    class A extends a {
      constructor(t3) {
        super(), this.toolSchemas = [], this.relevantFiles = [], this.filesInContext = [], this.semanticSearchFiles = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.ToolCallCapability|1 custom_instructions 9?|2 tool_schemas #0*|3 relevant_files 9*|4 files_in_context 9*|5 semantic_search_files 9*", m];
      }
    }
    class _ extends a {
      constructor(t3) {
        super(), this.diffs = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.DiffReviewCapability|1 custom_instructions 9?|2 diffs #0*", y];
      }
    }
    class y extends a {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.chunks = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff|1 relative_workspace_path 9|3 chunks #0*", w];
      }
    }
    class w extends a {
      constructor(t3) {
        super(), this.oldLines = [], this.newLines = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff.Chunk|1 old_lines 9*|2 new_lines 9*|3 old_range #0|4 new_range #0", s2.LineRange];
      }
    }
    class S extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.DecomposerCapability|1 custom_instructions 9?"];
      }
    }
    class J extends a {
      constructor(t3) {
        super(), this.potentialContextFiles = [], this.potentialContextCodeChunks = [], this.filesInContext = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.ContextPickingCapability|1 custom_instructions 9?|2 potential_context_files 9*|3 potential_context_code_chunks #0*|4 files_in_context 9*", s2.CodeChunk];
      }
    }
    class B extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.EditTrailCapability|1 custom_instructions 9?"];
      }
    }
    class E extends a {
      constructor(t3) {
        super(), this.additionalFiles = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.AutoContextCapability|1 custom_instructions 9?|2 additional_files 9*"];
      }
    }
    class I extends a {
      constructor(t3) {
        super(), this.attachedCodeChunks = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.ContextPlannerCapability|1 custom_instructions 9?|2 attached_code_chunks #0*", s2.CodeChunk];
      }
    }
    class C extends a {
      constructor(t3) {
        super(), this.memory = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.RememberThisCapability|1 custom_instructions 9?|2 memory 9"];
      }
    }
    class b extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityRequest.CursorRulesCapability|1 custom_instructions 9?"];
      }
    }
    class k extends a {
      constructor(t3) {
        super(), this.data = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityContext|27 slack_integration #0 data|28 github_pr #1 data|29 microsoft_teams_integration #2 data", v, R, q];
      }
    }
    class v extends a {
      constructor(t3) {
        super(), this.thread = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityContext.SlackIntegrationContext|1 thread 9|2 channel_name 9?|3 channel_purpose 9?|4 channel_topic 9?|5 sender_name 9?|6 sender_id 9?|7 sender_type 9?|8 is_directly_addressed 8?"];
      }
    }
    class q extends a {
      constructor(t3) {
        super(), this.thread = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityContext.MicrosoftTeamsIntegrationContext|1 thread 9|2 channel_name 9?|3 team_name 9?|4 channel_description 9?|5 team_description 9?"];
      }
    }
    class R extends a {
      constructor(t3) {
        super(), this.title = "", this.description = "", this.comments = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityContext.GithubPRContext|1 title 9|2 description 9|3 comments 9|4 ci_failures 9?|5 code_tour_context #0|6 conflict_resolution #1", P, T];
      }
    }
    class P extends a {
      constructor(t3) {
        super(), this.changeId = "", this.headSha = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityContext.GithubPRContext.CodeTourContext|1 change_id 9|2 head_sha 9|3 current_revision_id 9?|4 visible_section_id 9?|5 visible_step_id 9?|6 path_scope_prefix 9?"];
      }
    }
    class T extends a {
      constructor(t3) {
        super(), this.conflictedPaths = [], this.hunks = [], this.files = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext|1 head_sha 9?|2 base_sha 9?|3 base_ref 9?|4 conflicted_paths 9*|5 gate_reason 9?|6 hunks #0*|7 files #1*", x, N];
      }
    }
    class x extends a {
      constructor(t3) {
        super(), this.path = "", this.startLine = 0, this.outcome = "", this.needsPerson = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.HunkReport|1 path 9|2 start_line 13|3 outcome 9|4 kind 9?|5 needs_person 8"];
      }
    }
    class N extends a {
      constructor(t3) {
        super(), this.path = "", this.content = "", this.fullyResolved = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.ResolvedFile|1 path 9|2 content 9|3 fully_resolved 8"];
      }
    }
  }