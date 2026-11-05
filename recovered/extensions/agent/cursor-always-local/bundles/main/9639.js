// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9639 range:6176348..6195204
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9639: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { TT: () => b, bb: () => x, _K: () => _, sG: () => N, _G: () => y, uw: () => v });
    var n2 = r2(6038), s2 = r2(8592);
    const i2 = "agent.v1.";
    s2.HL;
    var o2 = (0, s2.QT)(n2.proto3, i2, "PackageType", [[0, "UNSPECIFIED"], [1, "CURSOR_PROJECT"], [2, "CURSOR_PERSONAL"], [3, "CLAUDE_SKILL"], [4, "CLAUDE_PLUGIN"]], 1);
    var a = r2(3955);
    class u extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class c extends u {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.remoteUrls = [], this.remoteNames = [], this.repoName = "", this.repoOwner = "", this.isTracked = false, this.isLocal = false, this.workspaceUri = "", this.pathEncryptionKey = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(c, t3, e3);
      }
      static $() {
        return ["RepositoryIndexingInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 orthogonal_transform_seed 1?|9 workspace_uri 9|10 path_encryption_key 9"];
      }
    }
    var l = r2(4175), m = r2(2730), d = r2(1491), f = r2(3133), p = r2(8427);
    const h = "agent.v1.";
    class g extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return h;
      }
    }
    var A = (0, s2.QT)(n2.proto3, h, "MountedAgentStoreKind", [[0, "UNSPECIFIED"], [1, "SELF"], [2, "PEER"], [3, "SHARE"], [4, "PRINCIPAL"]], 1);
    class _ extends g {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RequestContextArgs|2 notes_session_id 9?|3 workspace_id 9?|4 read_only_pinned_tree_sha 9?|5 read_only_plugin_cache_root 9?|7 use_cached 8?|8 wait_for_workspace_cache 8?"];
      }
    }
    class y extends g {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["RequestContextResult|1 success #0 result|2 error #1 result|3 rejected #2 result", w, S, J];
      }
    }
    class w extends g {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RequestContextSuccess|1 request_context #0|2 served_from_disk_cache 8?", x];
      }
    }
    class S extends g {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RequestContextError|1 error 9"];
      }
    }
    class J extends g {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RequestContextRejected|1 reason 9"];
      }
    }
    class B extends g {
      constructor(t3) {
        super(), this.path = "", this.status = "", this.branchName = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GitRepoInfo|1 path 9|2 status 9|3 branch_name 9|4 remote_url 9?|5 previous_branch_is_ancestor 8?|6 is_origin_backed 8?"];
      }
    }
    class E extends g {
      constructor(t3) {
        super(), this.osVersion = "", this.workspacePaths = [], this.shell = "", this.sandboxEnabled = false, this.terminalsFolder = "", this.agentSharedNotesFolder = "", this.agentConversationNotesFolder = "", this.timeZone = "", this.projectFolder = "", this.agentTranscriptsFolder = "", this.sandboxNetworkExplicitAllowlist = [], this.mountedAgentStores = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RequestContextEnv|1 os_version 9|2 workspace_paths 9*|3 shell 9|5 sandbox_enabled 8|7 terminals_folder 9|8 agent_shared_notes_folder 9|9 agent_conversation_notes_folder 9|10 time_zone 9|11 project_folder 9|12 agent_transcripts_folder 9|13 artifacts_folder 9?|14 sandbox_supported 8?|16 sandbox_network_has_defaults 8?|17 sandbox_network_explicit_allowlist 9*|18 secret_redaction_enabled 8?|19 computer_use_supported 8?|20 is_working_dir_home_dir 8?|21 process_working_directory 9?|22 smart_mode_classifier_auto_mode_enabled 8?|23 dev_force_next_smart_mode_classifier_block_token 9?|24 dev_delay_next_smart_mode_classifier_token 9?|25 mounted_agent_stores #0*|26 user_agent_store_web_context #1?|27 dev_mock_prompt_time #2?|28 agent_store_dynamic_mount_enabled 8?", I, C, n2.Timestamp];
      }
    }
    class I extends g {
      constructor(t3) {
        super(), this.path = "", this.kind = A.UNSPECIFIED, this.readOnly = false, n2.proto3.util.initPartial(t3, this);
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
        return ["MountedAgentStore|1 path 9|2 kind #0|3 alias 9?|4 read_only 8|5 inherited_from_path 9?", A];
      }
    }
    class C extends g {
      constructor(t3) {
        super(), this.storeId = "", this.portalBaseUrl = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UserAgentStoreWebContext|1 store_id 9|2 portal_base_url 9"];
      }
    }
    class b extends g {
      constructor(t3) {
        super(), this.logPath = "", this.serverEndpoint = "", this.sessionId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DebugModeConfig|1 log_path 9|2 server_endpoint 9|3 session_id 9"];
      }
    }
    class k extends g {
      constructor(t3) {
        super(), this.name = "", this.description = "", this.folderPath = "", this.enabled = false, this.readmeFilePath = "", this.packageType = o2.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["SkillDescriptor|1 name 9|2 description 9|3 folder_path 9|4 enabled 8|5 parse_error 9?|6 readme_file_path 9|7 package_type #0", o2];
      }
    }
    class v extends g {
      constructor(t3) {
        super(), this.skillDescriptors = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SkillOptions|1 skill_descriptors #0*", k];
      }
    }
    class q extends g {
      constructor(t3) {
        super(), this.configuredSteps = [], n2.proto3.util.initPartial(t3, this);
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
        return ["HooksConfigInfo|1 configured_steps 9*"];
      }
    }
    class R extends g {
      constructor(t3) {
        super(), this.allowInstructions = [], this.blockInstructions = [], n2.proto3.util.initPartial(t3, this);
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
        return ["PermissionsAutoRunInstructions|1 allow_instructions 9*|2 block_instructions 9*"];
      }
    }
    class P extends g {
      constructor(t3) {
        super(), this.startLineNumber = 0, this.endLineNumberExclusive = 0, this.beforeContextLines = [], this.removedLines = [], this.addedLines = [], this.afterContextLines = [], n2.proto3.util.initPartial(t3, this);
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
        return ["PrecomputedHumanChangeRenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"];
      }
    }
    class T extends g {
      constructor(t3) {
        super(), this.path = "", this.renderedDiffs = [], this.isNewFile = false, this.isDeletedFile = false, n2.proto3.util.initPartial(t3, this);
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
        return ["PrecomputedHumanChange|1 path 9|2 rendered_diffs #0*|3 is_new_file 8|4 is_deleted_file 8", P];
      }
    }
    class x extends g {
      constructor(t3) {
        super(), this.rules = [], this.repositoryInfo = [], this.tools = [], this.gitRepos = [], this.projectLayouts = [], this.mcpInstructions = [], this.fileContents = {}, this.customSubagents = [], this.agentSkills = [], this.precomputedHumanChanges = [], this.nonFileRules = [], this.disabledTeamRules = [], this.adminCommandDenylist = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RequestContext|2 rules #0*|4 env #1|6 repository_info #2*|7 tools #3*|8 conversation_notes_listing 9?|9 shared_notes_listing 9?|11 git_repos #4*|13 project_layouts #5*|14 mcp_instructions #6*|15 debug_mode_config #7?|16 cloud_rule 9?|17 web_search_enabled 8?|18 skill_options #8?|19 repository_info_should_query_prod 8?|20 file_contents 9,9|21 user_intent_summary 9?|22 custom_subagents #9*|23 mcp_file_system_options #10?|24 web_fetch_enabled 8?|25 hooks_additional_context 9?|26 commit_attribution_message 9?|27 pr_attribution_message 9?|28 hooks_config #11?|29 agent_skills #12*|30 precomputed_human_changes #13*|31 recently_added_plugin #14?|32 supports_mcp_auth 8?|33 git_repo_info_complete 8?|34 mcp_meta_tool_options #15?|35 read_lints_enabled 8?|36 mcp_info_complete 8?|37 non_file_rules #0*|38 matched_installed_plugin #16?|39 rules_info_complete 8?|40 env_info_complete 8?|41 repository_info_complete 8?|42 custom_subagents_info_complete 8?|43 agent_skills_info_complete 8?|44 mcp_file_system_info_complete 8?|45 git_status_info_complete 8?|46 user_permissions_auto_run #17?|47 project_permissions_auto_run #17?|48 admin_permissions_auto_run #17?|49 disabled_team_rules 9*|50 search_conversations_enabled 8?|51 send_message_enabled 8?|52 admin_command_denylist 9*|53 system_prompt_override #18?", a.DX, E, c, l.gd, B, m.vq, l.I0, b, v, d.zz, l.Is, q, f.N, T, D, l.U_, Q, R, p.$];
      }
    }
    class N extends g {
      constructor(t3) {
        super(), this.rulesBlobId = new Uint8Array(0), this.rulesByteLength = 0, this.skillsBlobId = new Uint8Array(0), this.skillsByteLength = 0, this.subagentsBlobId = new Uint8Array(0), this.subagentsByteLength = 0, this.mcpsBlobId = new Uint8Array(0), this.mcpsByteLength = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RequestContextPartReferences|1 rules_blob_id 12|2 rules_byte_length 13|3 skills_blob_id 12|4 skills_byte_length 13|5 subagents_blob_id 12|6 subagents_byte_length 13|7 mcps_blob_id 12|8 mcps_byte_length 13|9 dynamic_context #0", x];
      }
    }
    class D extends g {
      constructor(t3) {
        super(), this.displayName = "", this.description = "", this.skills = [], this.subagents = [], this.hooks = [], this.rules = [], this.commands = [], this.mcpServers = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RecentlyAddedPlugin|1 display_name 9|2 description 9|3 skills #0*|4 subagents #0*|5 hooks #0*|6 rules #0*|7 commands #0*|8 mcp_servers 9*", U];
      }
    }
    class U extends g {
      constructor(t3) {
        super(), this.name = "", this.description = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RecentlyAddedPlugin.CapabilityDescriptor|1 name 9|2 description 9"];
      }
    }
    class Q extends g {
      constructor(t3) {
        super(), this.displayName = "", this.description = "", this.matchedKeyword = "", this.skills = [], this.subagents = [], this.hooks = [], this.rules = [], this.commands = [], this.mcpServers = [], n2.proto3.util.initPartial(t3, this);
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
        return ["MatchedInstalledPlugin|1 display_name 9|2 description 9|3 matched_keyword 9|4 skills #0*|5 subagents #0*|6 hooks #0*|7 rules #0*|8 commands #0*|9 mcp_servers 9*", U];
      }
    }
  }