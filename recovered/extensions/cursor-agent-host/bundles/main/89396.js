// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 89396 range:12949809..12970258
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
89396: (e, t, r) => {
    "use strict";
    r.d(t, { TT: () => C, DS: () => S, Jy: () => T, SW: () => L, Lz: () => E, $q: () => g, ag: () => R, ip: () => P, q8: () => B, iT: () => F, Ww: () => U, bb: () => J, _K: () => y, GE: () => b, nf: () => _, vB: () => O, sG: () => N, nq: () => A, _G: () => w, T3: () => M, CB: () => q, yb: () => D, yW: () => v, ng: () => k, uw: () => x, X7: () => I });
    var n = r(36038), s = r(8592);
    const o = "agent.v1.";
    s.HL;
    var i = (0, s.QT)(n.proto3, o, "PackageType", [[0, "UNSPECIFIED"], [1, "CURSOR_PROJECT"], [2, "CURSOR_PERSONAL"], [3, "CLAUDE_SKILL"], [4, "CLAUDE_PLUGIN"]], 1);
    var a = r(43955), c = r(91881), l = r(34175), u = r(72730), d = r(11491), p = r(83133), m = r(38427);
    const h = "agent.v1.";
    class f extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return h;
      }
    }
    var g = (0, s.QT)(n.proto3, h, "MountedAgentStoreKind", [[0, "UNSPECIFIED"], [1, "SELF"], [2, "PEER"], [3, "SHARE"], [4, "PRINCIPAL"]], 1);
    class y extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextArgs|2 notes_session_id 9?|3 workspace_id 9?|4 read_only_pinned_tree_sha 9?|5 read_only_plugin_cache_root 9?|7 use_cached 8?|8 wait_for_workspace_cache 8?"];
      }
    }
    class w extends f {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextResult|1 success #0 result|2 error #1 result|3 rejected #2 result", v, _, A];
      }
    }
    class v extends f {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextSuccess|1 request_context #0|2 served_from_disk_cache 8?", J];
      }
    }
    class _ extends f {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextError|1 error 9"];
      }
    }
    class A extends f {
      constructor(e2) {
        super(), this.reason = "", n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextRejected|1 reason 9"];
      }
    }
    class S extends f {
      constructor(e2) {
        super(), this.path = "", this.status = "", this.branchName = "", n.proto3.util.initPartial(e2, this);
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
        return ["GitRepoInfo|1 path 9|2 status 9|3 branch_name 9|4 remote_url 9?|5 previous_branch_is_ancestor 8?|6 is_origin_backed 8?"];
      }
    }
    class b extends f {
      constructor(e2) {
        super(), this.osVersion = "", this.workspacePaths = [], this.shell = "", this.sandboxEnabled = false, this.terminalsFolder = "", this.agentSharedNotesFolder = "", this.agentConversationNotesFolder = "", this.timeZone = "", this.projectFolder = "", this.agentTranscriptsFolder = "", this.sandboxNetworkExplicitAllowlist = [], this.mountedAgentStores = [], n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextEnv|1 os_version 9|2 workspace_paths 9*|3 shell 9|5 sandbox_enabled 8|7 terminals_folder 9|8 agent_shared_notes_folder 9|9 agent_conversation_notes_folder 9|10 time_zone 9|11 project_folder 9|12 agent_transcripts_folder 9|13 artifacts_folder 9?|14 sandbox_supported 8?|16 sandbox_network_has_defaults 8?|17 sandbox_network_explicit_allowlist 9*|18 secret_redaction_enabled 8?|19 computer_use_supported 8?|20 is_working_dir_home_dir 8?|21 process_working_directory 9?|22 smart_mode_classifier_auto_mode_enabled 8?|23 dev_force_next_smart_mode_classifier_block_token 9?|24 dev_delay_next_smart_mode_classifier_token 9?|25 mounted_agent_stores #0*|26 user_agent_store_web_context #1?|27 dev_mock_prompt_time #2?|28 agent_store_dynamic_mount_enabled 8?", E, I, n.Timestamp];
      }
    }
    class E extends f {
      constructor(e2) {
        super(), this.path = "", this.kind = g.UNSPECIFIED, this.readOnly = false, n.proto3.util.initPartial(e2, this);
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
        return ["MountedAgentStore|1 path 9|2 kind #0|3 alias 9?|4 read_only 8|5 inherited_from_path 9?", g];
      }
    }
    class I extends f {
      constructor(e2) {
        super(), this.storeId = "", this.portalBaseUrl = "", n.proto3.util.initPartial(e2, this);
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
        return ["UserAgentStoreWebContext|1 store_id 9|2 portal_base_url 9"];
      }
    }
    class C extends f {
      constructor(e2) {
        super(), this.logPath = "", this.serverEndpoint = "", this.sessionId = "", n.proto3.util.initPartial(e2, this);
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
        return ["DebugModeConfig|1 log_path 9|2 server_endpoint 9|3 session_id 9"];
      }
    }
    class k extends f {
      constructor(e2) {
        super(), this.name = "", this.description = "", this.folderPath = "", this.enabled = false, this.readmeFilePath = "", this.packageType = i.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["SkillDescriptor|1 name 9|2 description 9|3 folder_path 9|4 enabled 8|5 parse_error 9?|6 readme_file_path 9|7 package_type #0", i];
      }
    }
    class x extends f {
      constructor(e2) {
        super(), this.skillDescriptors = [], n.proto3.util.initPartial(e2, this);
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
        return ["SkillOptions|1 skill_descriptors #0*", k];
      }
    }
    class T extends f {
      constructor(e2) {
        super(), this.configuredSteps = [], n.proto3.util.initPartial(e2, this);
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
        return ["HooksConfigInfo|1 configured_steps 9*"];
      }
    }
    class R extends f {
      constructor(e2) {
        super(), this.allowInstructions = [], this.blockInstructions = [], n.proto3.util.initPartial(e2, this);
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
        return ["PermissionsAutoRunInstructions|1 allow_instructions 9*|2 block_instructions 9*"];
      }
    }
    class B extends f {
      constructor(e2) {
        super(), this.startLineNumber = 0, this.endLineNumberExclusive = 0, this.beforeContextLines = [], this.removedLines = [], this.addedLines = [], this.afterContextLines = [], n.proto3.util.initPartial(e2, this);
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
        return ["PrecomputedHumanChangeRenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"];
      }
    }
    class P extends f {
      constructor(e2) {
        super(), this.path = "", this.renderedDiffs = [], this.isNewFile = false, this.isDeletedFile = false, n.proto3.util.initPartial(e2, this);
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
        return ["PrecomputedHumanChange|1 path 9|2 rendered_diffs #0*|3 is_new_file 8|4 is_deleted_file 8", B];
      }
    }
    class J extends f {
      constructor(e2) {
        super(), this.rules = [], this.repositoryInfo = [], this.tools = [], this.gitRepos = [], this.projectLayouts = [], this.mcpInstructions = [], this.fileContents = {}, this.customSubagents = [], this.agentSkills = [], this.precomputedHumanChanges = [], this.nonFileRules = [], this.disabledTeamRules = [], this.adminCommandDenylist = [], n.proto3.util.initPartial(e2, this);
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
        return ["RequestContext|2 rules #0*|4 env #1|6 repository_info #2*|7 tools #3*|8 conversation_notes_listing 9?|9 shared_notes_listing 9?|11 git_repos #4*|13 project_layouts #5*|14 mcp_instructions #6*|15 debug_mode_config #7?|16 cloud_rule 9?|17 web_search_enabled 8?|18 skill_options #8?|19 repository_info_should_query_prod 8?|20 file_contents 9,9|21 user_intent_summary 9?|22 custom_subagents #9*|23 mcp_file_system_options #10?|24 web_fetch_enabled 8?|25 hooks_additional_context 9?|26 commit_attribution_message 9?|27 pr_attribution_message 9?|28 hooks_config #11?|29 agent_skills #12*|30 precomputed_human_changes #13*|31 recently_added_plugin #14?|32 supports_mcp_auth 8?|33 git_repo_info_complete 8?|34 mcp_meta_tool_options #15?|35 read_lints_enabled 8?|36 mcp_info_complete 8?|37 non_file_rules #0*|38 matched_installed_plugin #16?|39 rules_info_complete 8?|40 env_info_complete 8?|41 repository_info_complete 8?|42 custom_subagents_info_complete 8?|43 agent_skills_info_complete 8?|44 mcp_file_system_info_complete 8?|45 git_status_info_complete 8?|46 user_permissions_auto_run #17?|47 project_permissions_auto_run #17?|48 admin_permissions_auto_run #17?|49 disabled_team_rules 9*|50 search_conversations_enabled 8?|51 send_message_enabled 8?|52 admin_command_denylist 9*|53 system_prompt_override #18?", a.DX, b, c.D, l.gd, S, u.vq, l.I0, C, x, d.zz, l.Is, T, p.N, P, F, l.U_, L, R, m.$];
      }
    }
    class M extends f {
      constructor(e2) {
        super(), this.rules = [], this.nonFileRules = [], n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextRulesPart|1 rules #0*|2 non_file_rules #0*|3 cloud_rule 9?", a.DX];
      }
    }
    class q extends f {
      constructor(e2) {
        super(), this.agentSkills = [], n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextSkillsPart|1 agent_skills #0*|2 skill_options #1?", p.N, x];
      }
    }
    class D extends f {
      constructor(e2) {
        super(), this.customSubagents = [], n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextSubagentsPart|1 custom_subagents #0*", d.zz];
      }
    }
    class O extends f {
      constructor(e2) {
        super(), this.tools = [], this.mcpInstructions = [], n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextMcpsPart|1 tools #0*|2 mcp_instructions #1*|3 mcp_file_system_options #2?|4 mcp_meta_tool_options #3?", l.gd, l.I0, l.Is, l.U_];
      }
    }
    class N extends f {
      constructor(e2) {
        super(), this.rulesBlobId = new Uint8Array(0), this.rulesByteLength = 0, this.skillsBlobId = new Uint8Array(0), this.skillsByteLength = 0, this.subagentsBlobId = new Uint8Array(0), this.subagentsByteLength = 0, this.mcpsBlobId = new Uint8Array(0), this.mcpsByteLength = 0, n.proto3.util.initPartial(e2, this);
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
        return ["RequestContextPartReferences|1 rules_blob_id 12|2 rules_byte_length 13|3 skills_blob_id 12|4 skills_byte_length 13|5 subagents_blob_id 12|6 subagents_byte_length 13|7 mcps_blob_id 12|8 mcps_byte_length 13|9 dynamic_context #0", J];
      }
    }
    class F extends f {
      constructor(e2) {
        super(), this.displayName = "", this.description = "", this.skills = [], this.subagents = [], this.hooks = [], this.rules = [], this.commands = [], this.mcpServers = [], n.proto3.util.initPartial(e2, this);
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
        return ["RecentlyAddedPlugin|1 display_name 9|2 description 9|3 skills #0*|4 subagents #0*|5 hooks #0*|6 rules #0*|7 commands #0*|8 mcp_servers 9*", U];
      }
    }
    class U extends f {
      constructor(e2) {
        super(), this.name = "", this.description = "", n.proto3.util.initPartial(e2, this);
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
        return ["RecentlyAddedPlugin.CapabilityDescriptor|1 name 9|2 description 9"];
      }
    }
    class L extends f {
      constructor(e2) {
        super(), this.displayName = "", this.description = "", this.matchedKeyword = "", this.skills = [], this.subagents = [], this.hooks = [], this.rules = [], this.commands = [], this.mcpServers = [], n.proto3.util.initPartial(e2, this);
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
        return ["MatchedInstalledPlugin|1 display_name 9|2 description 9|3 matched_keyword 9|4 skills #0*|5 subagents #0*|6 hooks #0*|7 rules #0*|8 commands #0*|9 mcp_servers 9*", U];
      }
    }
  }