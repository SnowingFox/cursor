// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/request_context_exec_pb.js" range:788312..804880
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "../../../runtime/compact";
import * as __dep2 from "./cursor_rules_pb";
import * as __dep3 from "./mcp_pb";
import * as __dep4 from "./ls_exec_pb";
import * as __dep5 from "./subagents_pb";
import * as __dep6 from "./agent_skills_pb";
import * as __dep7 from "./system_prompt_pb";
var n = __dep0,
  s = __dep1;
s.HL;
var i = (0, s.QT)(n.proto3, "agent.v1.", "PackageType", [[0, "UNSPECIFIED"], [1, "CURSOR_PROJECT"], [2, "CURSOR_PERSONAL"], [3, "CLAUDE_SKILL"], [4, "CLAUDE_PLUGIN"]], 1),
  o = __dep2;
class a extends s.HL {
  static get runtime() {
    return (0, s.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return "agent.v1.";
  }
}
class u extends a {
  constructor(t) {
    super(), this.relativeWorkspacePath = "", this.remoteUrls = [], this.remoteNames = [], this.repoName = "", this.repoOwner = "", this.isTracked = !1, this.isLocal = !1, this.workspaceUri = "", this.pathEncryptionKey = "", n.proto3.util.initPartial(t, this);
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
    return ["RepositoryIndexingInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 orthogonal_transform_seed 1?|9 workspace_uri 9|10 path_encryption_key 9"];
  }
}
var c = __dep3,
  l = __dep4,
  m = __dep5,
  d = __dep6,
  p = __dep7;
const f = "agent.v1.";
class h extends s.HL {
  static get runtime() {
    return (0, s.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return f;
  }
}
var g = (0, s.QT)(n.proto3, f, "ComputerUseDesktopPlatform", [[0, "UNSPECIFIED"], [1, "LINUX"], [2, "MACOS"], [3, "WINDOWS"]], 1),
  _ = (0, s.QT)(n.proto3, f, "MountedAgentStoreKind", [[0, "UNSPECIFIED"], [1, "SELF"], [2, "PEER"], [3, "SHARE"], [4, "PRINCIPAL"]], 1);
class w extends h {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
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
    return ["RequestContextArgs|2 notes_session_id 9?|3 workspace_id 9?|4 read_only_pinned_tree_sha 9?|5 read_only_plugin_cache_root 9?|7 use_cached 8?|8 wait_for_workspace_cache 8?"];
  }
}
class y extends h {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
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
    return ["RequestContextResult|1 success #0 result|2 error #1 result|3 rejected #2 result", J, S, q];
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
    return ["RequestContextSuccess|1 request_context #0|2 served_from_disk_cache 8?", A];
  }
}
class S extends h {
  constructor(t) {
    super(), this.error = "", n.proto3.util.initPartial(t, this);
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
    return ["RequestContextError|1 error 9"];
  }
}
class q extends h {
  constructor(t) {
    super(), this.reason = "", n.proto3.util.initPartial(t, this);
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
    return ["RequestContextRejected|1 reason 9"];
  }
}
class B extends h {
  constructor(t) {
    super(), this.path = "", this.status = "", this.branchName = "", n.proto3.util.initPartial(t, this);
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
    return ["GitRepoInfo|1 path 9|2 status 9|3 branch_name 9|4 remote_url 9?|5 previous_branch_is_ancestor 8?|6 is_origin_backed 8?"];
  }
}
class b extends h {
  constructor(t) {
    super(), this.osVersion = "", this.workspacePaths = [], this.shell = "", this.sandboxEnabled = !1, this.terminalsFolder = "", this.agentSharedNotesFolder = "", this.agentConversationNotesFolder = "", this.timeZone = "", this.projectFolder = "", this.agentTranscriptsFolder = "", this.sandboxNetworkExplicitAllowlist = [], this.mountedAgentStores = [], n.proto3.util.initPartial(t, this);
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
    return ["RequestContextEnv|1 os_version 9|2 workspace_paths 9*|3 shell 9|5 sandbox_enabled 8|7 terminals_folder 9|8 agent_shared_notes_folder 9|9 agent_conversation_notes_folder 9|10 time_zone 9|11 project_folder 9|12 agent_transcripts_folder 9|13 artifacts_folder 9?|14 sandbox_supported 8?|16 sandbox_network_has_defaults 8?|17 sandbox_network_explicit_allowlist 9*|18 secret_redaction_enabled 8?|19 computer_use_supported 8?|20 is_working_dir_home_dir 8?|21 process_working_directory 9?|22 smart_mode_classifier_auto_mode_enabled 8?|23 dev_force_next_smart_mode_classifier_block_token 9?|24 dev_delay_next_smart_mode_classifier_token 9?|25 mounted_agent_stores #0*|26 user_agent_store_web_context #1?|27 dev_mock_prompt_time #2?|28 agent_store_dynamic_mount_enabled 8?|29 computer_use_desktop #3?", I, x, n.Timestamp, P];
  }
}
class P extends h {
  constructor(t) {
    super(), this.platform = g.UNSPECIFIED, this.canvasWidth = 0, this.canvasHeight = 0, n.proto3.util.initPartial(t, this);
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
    return ["ComputerUseDesktop|1 platform #0|2 canvas_width 5|3 canvas_height 5", g];
  }
}
class I extends h {
  constructor(t) {
    super(), this.path = "", this.kind = _.UNSPECIFIED, this.readOnly = !1, n.proto3.util.initPartial(t, this);
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
    return ["MountedAgentStore|1 path 9|2 kind #0|3 alias 9?|4 read_only 8|5 inherited_from_path 9?", _];
  }
}
class x extends h {
  constructor(t) {
    super(), this.storeId = "", this.portalBaseUrl = "", n.proto3.util.initPartial(t, this);
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
    return ["UserAgentStoreWebContext|1 store_id 9|2 portal_base_url 9"];
  }
}
class v extends h {
  constructor(t) {
    super(), this.logPath = "", this.serverEndpoint = "", this.sessionId = "", n.proto3.util.initPartial(t, this);
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
    return ["DebugModeConfig|1 log_path 9|2 server_endpoint 9|3 session_id 9"];
  }
}
class R extends h {
  constructor(t) {
    super(), this.name = "", this.description = "", this.folderPath = "", this.enabled = !1, this.readmeFilePath = "", this.packageType = i.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
    return ["SkillDescriptor|1 name 9|2 description 9|3 folder_path 9|4 enabled 8|5 parse_error 9?|6 readme_file_path 9|7 package_type #0", i];
  }
}
class E extends h {
  constructor(t) {
    super(), this.skillDescriptors = [], n.proto3.util.initPartial(t, this);
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
    return ["SkillOptions|1 skill_descriptors #0*", R];
  }
}
class k extends h {
  constructor(t) {
    super(), this.configuredSteps = [], n.proto3.util.initPartial(t, this);
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
    return ["HooksConfigInfo|1 configured_steps 9*"];
  }
}
class T extends h {
  constructor(t) {
    super(), this.allowInstructions = [], this.blockInstructions = [], n.proto3.util.initPartial(t, this);
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
    return ["PermissionsAutoRunInstructions|1 allow_instructions 9*|2 block_instructions 9*"];
  }
}
class C extends h {
  constructor(t) {
    super(), this.startLineNumber = 0, this.endLineNumberExclusive = 0, this.beforeContextLines = [], this.removedLines = [], this.addedLines = [], this.afterContextLines = [], n.proto3.util.initPartial(t, this);
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
    return ["PrecomputedHumanChangeRenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"];
  }
}
class U extends h {
  constructor(t) {
    super(), this.path = "", this.renderedDiffs = [], this.isNewFile = !1, this.isDeletedFile = !1, n.proto3.util.initPartial(t, this);
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
    return ["PrecomputedHumanChange|1 path 9|2 rendered_diffs #0*|3 is_new_file 8|4 is_deleted_file 8", C];
  }
}
class A extends h {
  constructor(t) {
    super(), this.rules = [], this.repositoryInfo = [], this.tools = [], this.gitRepos = [], this.projectLayouts = [], this.mcpInstructions = [], this.fileContents = {}, this.customSubagents = [], this.agentSkills = [], this.precomputedHumanChanges = [], this.nonFileRules = [], this.disabledTeamRules = [], this.adminCommandDenylist = [], n.proto3.util.initPartial(t, this);
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
    return ["RequestContext|2 rules #0*|4 env #1|6 repository_info #2*|7 tools #3*|8 conversation_notes_listing 9?|9 shared_notes_listing 9?|11 git_repos #4*|13 project_layouts #5*|14 mcp_instructions #6*|15 debug_mode_config #7?|16 cloud_rule 9?|17 web_search_enabled 8?|18 skill_options #8?|19 repository_info_should_query_prod 8?|20 file_contents 9,9|21 user_intent_summary 9?|22 custom_subagents #9*|23 mcp_file_system_options #10?|24 web_fetch_enabled 8?|25 hooks_additional_context 9?|26 commit_attribution_message 9?|27 pr_attribution_message 9?|28 hooks_config #11?|29 agent_skills #12*|30 precomputed_human_changes #13*|31 recently_added_plugin #14?|32 supports_mcp_auth 8?|33 git_repo_info_complete 8?|34 mcp_meta_tool_options #15?|35 read_lints_enabled 8?|36 mcp_info_complete 8?|37 non_file_rules #0*|38 matched_installed_plugin #16?|39 rules_info_complete 8?|40 env_info_complete 8?|41 repository_info_complete 8?|42 custom_subagents_info_complete 8?|43 agent_skills_info_complete 8?|44 mcp_file_system_info_complete 8?|45 git_status_info_complete 8?|46 user_permissions_auto_run #17?|47 project_permissions_auto_run #17?|48 admin_permissions_auto_run #17?|49 disabled_team_rules 9*|50 search_conversations_enabled 8?|51 send_message_enabled 8?|52 admin_command_denylist 9*|53 system_prompt_override #18?", o.DX, b, u, c.gd, B, l.vq, c.I0, v, E, m.zz, c.Is, k, d.N, U, N, c.U_, L, T, p.$];
  }
}
class $ extends h {
  constructor(t) {
    super(), this.rules = [], this.nonFileRules = [], n.proto3.util.initPartial(t, this);
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
    return ["RequestContextRulesPart|1 rules #0*|2 non_file_rules #0*|3 cloud_rule 9?", o.DX];
  }
}
class O extends h {
  constructor(t) {
    super(), this.agentSkills = [], n.proto3.util.initPartial(t, this);
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
    return ["RequestContextSkillsPart|1 agent_skills #0*|2 skill_options #1?", d.N, E];
  }
}
class j extends h {
  constructor(t) {
    super(), this.customSubagents = [], n.proto3.util.initPartial(t, this);
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
    return ["RequestContextSubagentsPart|1 custom_subagents #0*", m.zz];
  }
}
class M extends h {
  constructor(t) {
    super(), this.tools = [], this.mcpInstructions = [], n.proto3.util.initPartial(t, this);
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
    return ["RequestContextMcpsPart|1 tools #0*|2 mcp_instructions #1*|3 mcp_file_system_options #2?|4 mcp_meta_tool_options #3?", c.gd, c.I0, c.Is, c.U_];
  }
}
class D extends h {
  constructor(t) {
    super(), this.rulesBlobId = new Uint8Array(0), this.rulesByteLength = 0, this.skillsBlobId = new Uint8Array(0), this.skillsByteLength = 0, this.subagentsBlobId = new Uint8Array(0), this.subagentsByteLength = 0, this.mcpsBlobId = new Uint8Array(0), this.mcpsByteLength = 0, n.proto3.util.initPartial(t, this);
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
    return ["RequestContextPartReferences|1 rules_blob_id 12|2 rules_byte_length 13|3 skills_blob_id 12|4 skills_byte_length 13|5 subagents_blob_id 12|6 subagents_byte_length 13|7 mcps_blob_id 12|8 mcps_byte_length 13|9 dynamic_context #0", A];
  }
}
class N extends h {
  constructor(t) {
    super(), this.displayName = "", this.description = "", this.skills = [], this.subagents = [], this.hooks = [], this.rules = [], this.commands = [], this.mcpServers = [], n.proto3.util.initPartial(t, this);
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
    return ["RecentlyAddedPlugin|1 display_name 9|2 description 9|3 skills #0*|4 subagents #0*|5 hooks #0*|6 rules #0*|7 commands #0*|8 mcp_servers 9*", G];
  }
}
class G extends h {
  constructor(t) {
    super(), this.name = "", this.description = "", n.proto3.util.initPartial(t, this);
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
    return ["RecentlyAddedPlugin.CapabilityDescriptor|1 name 9|2 description 9"];
  }
}
class L extends h {
  constructor(t) {
    super(), this.displayName = "", this.description = "", this.matchedKeyword = "", this.skills = [], this.subagents = [], this.hooks = [], this.rules = [], this.commands = [], this.mcpServers = [], n.proto3.util.initPartial(t, this);
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
    return ["MatchedInstalledPlugin|1 display_name 9|2 description 9|3 matched_keyword 9|4 skills #0*|5 subagents #0*|6 hooks #0*|7 rules #0*|8 commands #0*|9 mcp_servers 9*", G];
  }
}
export { v as TT, B as DS, k as Jy, A as bb, w as _K, b as GE, S as nf, M as vB, D as sG, y as _G, $ as T3, O as CB, j as yb, J as yW, E as uw };
