// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 38617 range:7410894..7462033
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38617: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { AdButton: () => G, AdContent: () => Q, AdHeader: () => $, AdSection: () => j, AgentLayoutPolicy: () => he, AgentTelemetryConfig: () => le, AgentUrlConfig: () => qe, AutoContextConfig: () => ne, BackgroundComposerConfig: () => re, BugbotConfig: () => ye, BugbotPlanType: () => M, ButtonType: () => E, ChatConfig: () => K, ClientSurface: () => x, ClientTracingConfig: () => V, ClientUpdateLevel: () => C, ClientVersionStatus: () => H, CodebaseTelemetryConfig: () => we, DevEnvironment: () => X, DisplayMode: () => I, FolderSizeLimit: () => pe, GetNewRepoFlowConfigRequest: () => Se, GetNewRepoFlowConfigResponse: () => be, GetServerConfigRequest: () => ee, GetServerConfigResponse: () => Pe, GitIndexingConfig: () => W, GoogleWorkspaceMcpOAuthClient: () => Je, Http2Config: () => P, InAppAd: () => L, InAppAdTrigger: () => T, IndexingConfig: () => z, InferenceProviderWarning: () => Me, InferenceProviderWarningTrigger: () => F, InteractionConfig: () => ce, MemoryMonitorConfig: () => se, MetricsConfig: () => te, ModalDisplayConfig: () => U, ModelMigration: () => de, NewRepoFlowCondition: () => Ee, NewRepoFlowConfig: () => Be, NewRepoFlowDismissAction: () => ke, NewRepoFlowFact: () => D, NewRepoFlowInstallPluginAction: () => Ie, NewRepoFlowMcpAuthenticateAction: () => xe, NewRepoFlowPluginAuthTarget: () => N, NewRepoFlowProbe: () => ve, NewRepoFlowProbeInterpreter: () => q, NewRepoFlowStep: () => Re, NewRepoFlowStepButton: () => Te, NewRepoFlowStepPresentation: () => O, NewRepoFlowSubmitFollowupAction: () => Ce, OnboardingConfig: () => ge, PerformanceEventsConfig: () => ae, RemoteAuthority: () => Y, RemoteConnectionType: () => k, ResolveNewRepoFlowBackendProbeRequest: () => _e, ResolveNewRepoFlowBackendProbeResponse: () => Ae, RetrievalKeepAliveConfig: () => J, RunTerminalServerConfig: () => me, ScmConnectAdConnectionState: () => B, ScmConnectAdContext: () => Z, ScmConnectAdProvider: () => R, TerminalTipConfig: () => fe, TraceConfig: () => ue, UpdateConfig: () => oe, UpdateConfig_UpdateMode: () => ie });
    var n = r(36038), s = r(67918), o = (r(21934), r(58072), r(8592));
    o.HL;
    const i = "aiserver.v1.";
    class a extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return i;
      }
    }
    n.proto3;
    class c extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(c, e2, t2);
      }
      static $() {
        return ["BugConfigResponse|1 linter_strategy_v1 #0|2 bug_bot_v1 #1|3 linter_strategy_v2 #2", l, d, u];
      }
    }
    class l extends a {
      constructor(e2) {
        super(), this.enabled = false, this.tryTriggerOnSave = false, this.waitBetweenTriggersMs = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(l, e2, t2);
      }
      static $() {
        return ["BugConfigResponse.LinterStrategyV1|1 enabled 8|2 try_trigger_on_save 8|3 wait_between_triggers_ms 1"];
      }
    }
    class u extends a {
      constructor(e2) {
        super(), this.enabled = false, this.waitBetweenTriggersMs = 0, this.debounceTriggersMs = 0, this.keepLinesAroundChunk = 0, this.preventTriggeringForFilesWithThisManyLines = 0, this.preventTriggeringWhenLints = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(u, e2, t2);
      }
      static $() {
        return ["BugConfigResponse.LinterStrategyV2|1 enabled 8|2 wait_between_triggers_ms 1|3 debounce_triggers_ms 1|4 keep_lines_around_chunk 5|5 prevent_triggering_for_files_with_this_many_lines 5|6 prevent_triggering_when_lints 8"];
      }
    }
    class d extends a {
      constructor(e2) {
        super(), this.enabled = false, this.isSubsidized = false, this.backgroundCallFrequencyMs = 0, this.killSwitch = false, this.showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new d().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new d().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new d().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(d, e2, t2);
      }
      static $() {
        return ["BugConfigResponse.BugBotV1|1 enabled 8|2 is_subsidized 8|3 background_call_frequency_ms 5|4 kill_switch 8|5 show_intrusive_notification_only_if_last_time_was_more_than_ms_ago 1|6 background_diff_absolute_max_tokens 5?|7 background_diff_min_min_token_threshold 5?|8 background_diff_min_max_token_threshold 5?|9 background_diff_last_commit_less_than_this_many_ms_ago 1?|15 background_unified_context_lines 5?|16 background_diff_include_uncommitted 8?|10 default_diff_context_lines 5?|11 diff_absolute_max_tokens 5?|12 custom_instructions_max_char_length 5?|13 default_fallback_iterations 5?|14 threshold_for_expensive_run_modal_cents 5?|17 cheap_model_name 9?|18 cheap_absolute_max_tokens 5?|19 expensive_absolute_max_tokens 5?"];
      }
    }
    n.proto3;
    n.proto3;
    class p extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class m extends p {
      constructor(e2) {
        super(), this.samplingInterval = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new m().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new m().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new m().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(m, e2, t2);
      }
      static $() {
        return ["HeapProfileConfig|1 sampling_interval 5|2 include_objects_collected_by_major_gc 8?|3 include_objects_collected_by_minor_gc 8?"];
      }
    }
    class h extends p {
      constructor(e2) {
        super(), this.interval = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new h().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new h().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new h().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(h, e2, t2);
      }
      static $() {
        return ["CpuProfileConfig|1 interval 5"];
      }
    }
    class f extends p {
      constructor(e2) {
        super(), this.id = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new f().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new f().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new f().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(f, e2, t2);
      }
      static $() {
        return ["ProfileConfig|1 id 9|2 heap #0?|3 cpu #1?", m, h];
      }
    }
    class g extends p {
      constructor(e2) {
        super(), this.id = "", this.process = "", this.configId = "", this.activityTimeout = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new g().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new g().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new g().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(g, e2, t2);
      }
      static $() {
        return ["ProfileScheduleConfig|1 id 9|2 process 9|3 config_id 9|4 schedule #0|5 activity_timeout 5", y];
      }
    }
    class y extends p {
      constructor(e2) {
        super(), this.interval = 0, this.duration = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ProfileScheduleConfig.ScheduleConfig|1 interval 5|2 duration 5"];
      }
    }
    class w extends p {
      constructor(e2) {
        super(), this.enabled = false, this.configs = [], this.schedules = [], n.proto3.util.initPartial(e2, this);
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
        return ["ProfilingConfig|1 enabled 8|2 configs #0*|3 schedules #1*", f, g];
      }
    }
    const v = "aiserver.v1.";
    class _ extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return v;
      }
    }
    n.proto3;
    class A extends _ {
      constructor(e2) {
        super(), this.enabled = false, this.maxRequestsTracked = 0, this.maxRequestsTrackedMb = 0, this.maxRequestRetentionSeconds = 0, this.sendOriginalFileContentsForInitialSnapshot = false, this.sendFullAddedLinesInDiffChanges = false, this.numCommitsTracked = 0, this.timeIntervalsTrackedMinutes = [], this.tooBigFileSizeBytes = 0, n.proto3.util.initPartial(e2, this);
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
        return ["OnlineMetricsConfig|1 enabled 8|2 max_requests_tracked 5|3 max_requests_tracked_mb 5|4 max_request_retention_seconds 1|5 send_original_file_contents_for_initial_snapshot 8|6 send_full_added_lines_in_diff_changes 8|7 num_commits_tracked 5|8 time_intervals_tracked_minutes 5*|9 too_big_file_size_bytes 5"];
      }
    }
    const S = "aiserver.v1.";
    class b extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return S;
      }
    }
    var E = (0, o.QT)(n.proto3, S, "ButtonType", [[0, "UNSPECIFIED"], [1, "LEADING"], [2, "PRIMARY"], [3, "SECONDARY"]], 1), I = (0, o.QT)(n.proto3, S, "DisplayMode", [[0, "UNSPECIFIED"], [1, "TOAST"], [2, "MODAL"]], 1), C = (0, o.QT)(n.proto3, S, "ClientUpdateLevel", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "RECOMMENDED"], [3, "REQUIRED"]], 1), k = (0, o.QT)(n.proto3, S, "RemoteConnectionType", [[0, "UNSPECIFIED"], [1, "LOCAL"], [2, "WSL"], [3, "SSH"], [4, "DEVCONTAINER"], [5, "DEVCONTAINER_SSH"], [6, "DEVCONTAINER_WSL"]], 1), x = (0, o.QT)(n.proto3, S, "ClientSurface", [[0, "UNSPECIFIED"], [1, "EDITOR"], [2, "GLASS"]], 1), T = (0, o.QT)(n.proto3, S, "InAppAdTrigger", [[0, "UNSPECIFIED"], [1, "MOUNT"], [2, "FIND_ISSUES"], [3, "GIT_PUSH"], [4, "COMMIT"], [5, "IOS_DOWNLOAD_MENU"]], 1), R = (0, o.QT)(n.proto3, S, "ScmConnectAdProvider", [[0, "UNSPECIFIED"], [1, "GITHUB"], [2, "GITLAB"]], 1), B = (0, o.QT)(n.proto3, S, "ScmConnectAdConnectionState", [[0, "UNSPECIFIED"], [1, "UNKNOWN"], [2, "NOT_CONNECTED"], [3, "HAS_ACCESS"]], 1), P = (0, o.QT)(n.proto3, S, "Http2Config", [[0, "UNSPECIFIED"], [1, "FORCE_ALL_DISABLED"], [2, "FORCE_ALL_ENABLED"], [3, "FORCE_BIDI_DISABLED"], [4, "FORCE_BIDI_ENABLED"]], 1), J = (0, o.QT)(n.proto3, S, "RetrievalKeepAliveConfig", [[0, "UNSPECIFIED"], [1, "FORCE_DISABLED"], [2, "FORCE_ENABLED"]], 1), M = (0, o.QT)(n.proto3, S, "BugbotPlanType", [[0, "UNSPECIFIED"], [1, "TEAM"], [2, "USER"]], 1), q = (0, o.QT)(n.proto3, S, "NewRepoFlowProbeInterpreter", [[0, "UNSPECIFIED"], [1, "VERCEL_PROJECT_LINK_MATCH"], [2, "JSON_PATH_EQUALS"], [3, "BOOLEAN_FIELD"]], 1), D = (0, o.QT)(n.proto3, S, "NewRepoFlowFact", [[0, "UNSPECIFIED"], [1, "STARTED_AS_NEW_PROJECT"], [2, "REPO_IS_STANDARD_ORIGIN"], [3, "IS_SUBAGENT_CONVERSATION"], [4, "PLUGIN_INSTALLED"], [5, "PROBE_RESULT"], [6, "STEP_LATCHED"], [7, "SERVER_FACT"], [8, "PROBE_LINKED_WITH_LATCH_FALLBACK"], [9, "MCP_NEEDS_AUTH"]], 1), O = (0, o.QT)(n.proto3, S, "NewRepoFlowStepPresentation", [[0, "UNSPECIFIED"], [1, "PILL"], [2, "PLUGIN_NUDGE"], [3, "BLOCKING_TRAY"]], 1), N = (0, o.QT)(n.proto3, S, "NewRepoFlowPluginAuthTarget", [[0, "UNSPECIFIED"], [1, "CLOUD"], [2, "LOCAL"]], 1), F = (0, o.QT)(n.proto3, S, "InferenceProviderWarningTrigger", [[0, "UNSPECIFIED"], [1, "ON_SELECT"], [2, "ON_ERROR"]], 1);
    class U extends b {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ModalDisplayConfig|1 background_gradient 9?|2 description 9?|3 background_gradient_light 9?|4 background_gradient_dark 9?"];
      }
    }
    class L extends b {
      constructor(e2) {
        super(), this.id = "", this.buttons = [], this.displayMode = I.UNSPECIFIED, this.targetSurfaces = [], n.proto3.util.initPartial(e2, this);
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
        return ["InAppAd|1 id 9|2 header #0|3 content #1|4 buttons #2*|5 force_dark_close_button 8?|6 display_mode #3|7 analytics_variant 9?|8 modal_display_config #4?|9 target_surfaces #5*", $, Q, G, I, U, x];
      }
    }
    class $ extends b {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AdHeader|1 banner_url 9?|2 banner_url_light 9?|3 banner_url_dark 9?"];
      }
    }
    class Q extends b {
      constructor(e2) {
        super(), this.title = "", this.sections = [], n.proto3.util.initPartial(e2, this);
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
        return ["AdContent|1 tag 9?|2 title 9|3 sections #0*|4 center_title 8?", j];
      }
    }
    class j extends b {
      constructor(e2) {
        super(), this.iconSvg = "", this.title = "", this.description = "", n.proto3.util.initPartial(e2, this);
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
        return ["AdSection|1 icon_svg 9|2 title 9|3 description 9|4 is_beta 8?"];
      }
    }
    class G extends b {
      constructor(e2) {
        super(), this.text = "", this.buttonType = E.UNSPECIFIED, this.action = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["AdButton|1 text 9|2 button_type #0|3 external_url 9 action|4 command_id 9 action|5 client_action #1 action", E, s.ClientAction];
      }
    }
    class H extends b {
      constructor(e2) {
        super(), this.updateLevel = C.UNSPECIFIED, this.currentClientVersion = "", this.minSupportedClientVersion = "", this.minAllowedClientVersion = "", n.proto3.util.initPartial(e2, this);
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
        return ["ClientVersionStatus|1 update_level #0|2 current_client_version 9|3 min_supported_client_version 9|4 min_allowed_client_version 9|5 message 9?", C];
      }
    }
    class z extends b {
      constructor(e2) {
        super(), this.maxConcurrentUploads = 0, this.absoluteMaxNumberFiles = 0, this.maxFileRetries = 0, this.syncConcurrency = 0, this.autoIndexingMaxNumFiles = 0, this.indexingPeriodSeconds = 0, this.repo42AuthToken = "", this.copyStatusCheckPeriodSeconds = 0, this.copyTimeoutSeconds = 0, this.maxBatchBytes = 0, this.maxBatchNumRequests = 0, this.maxSyncMerkleBatchSize = 0, n.proto3.util.initPartial(e2, this);
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
        return ["IndexingConfig|1 max_concurrent_uploads 5|2 absolute_max_number_files 5|3 max_file_retries 5|4 sync_concurrency 5|5 auto_indexing_max_num_files 5|6 indexing_period_seconds 5|7 repo42_auth_token 9|8 incremental 8?|9 default_user_path_encryption_key 9?|10 default_team_path_encryption_key 9?|11 multi_root_indexing_enabled 8?|12 copy_status_check_period_seconds 1|13 copy_timeout_seconds 5|14 max_batch_bytes 5|15 max_batch_num_requests 5|16 max_sync_merkle_batch_size 5"];
      }
    }
    class W extends b {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GitIndexingConfig|1 enabled 8?|2 max_pr_count 5?|3 max_pr_size 5?|4 pr_embedding_context 5?|5 js_concurrency 5?|6 js_chunk_size 5?|7 cpu_concurrency 5?|8 indexing_period_seconds 5?|9 max_attempts_per_pr 5?|10 allow_index_copy_from_server 8?"];
      }
    }
    class V extends b {
      constructor(e2) {
        super(), this.globalSampleRate = 0, this.tracesSampleRate = 0, this.loggerSampleRate = 0, this.minidumpSampleRate = 0, this.errorRateLimit = 0, this.performanceUnitRateLimit = 0, this.profilesSampleRate = 0, this.jsonStringifySampleRate = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new V().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new V().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new V().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(V, e2, t2);
      }
      static $() {
        return ["ClientTracingConfig|1 global_sample_rate 1|2 traces_sample_rate 1|3 logger_sample_rate 1|4 minidump_sample_rate 1|5 error_rate_limit 1|6 performance_unit_rate_limit 1|7 profiles_sample_rate 1|8 json_stringify_sample_rate 1"];
      }
    }
    class K extends b {
      constructor(e2) {
        super(), this.disableUnification = false, this.fullContextTokenLimit = 0, this.disableYoloMode = false, this.maxRuleLength = 0, this.maxMcpTools = 0, this.warnMcpTools = 0, this.summarizationMessage = "", this.numFilesForMemoryGeneration = 0, this.memoryDefaultEnabled = false, this.numSummarizationsBeforeWarningShown = 0, this.cursorRulesReadFileFixEnabled = false, this.dontSendCtrlCBeforeCommand = false, this.clientStatsigPollIntervalMs = 0, this.disableStatsig = false, this.listDirV2PredefinedIgnoreGlobs = [], n.proto3.util.initPartial(e2, this);
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
        return ["ChatConfig|1 disable_unification 8|2 full_context_token_limit 5|3 disable_yolo_mode 8|4 max_rule_length 5|5 max_mcp_tools 5|6 warn_mcp_tools 5|7 summarization_message 9|8 num_files_for_memory_generation 5|9 memory_default_enabled 8|10 num_summarizations_before_warning_shown 5|11 cursor_rules_read_file_fix_enabled 8|12 dont_send_ctrl_c_before_command 8|13 client_statsig_poll_interval_ms 5|14 disable_statsig 8|15 list_dir_v2_predefined_ignore_globs 9*"];
      }
    }
    class Y extends b {
      constructor(e2) {
        super(), this.connectionType = k.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["RemoteAuthority|1 connection_type #0", k];
      }
    }
    class Z extends b {
      constructor(e2) {
        super(), this.provider = R.UNSPECIFIED, this.remoteUrl = "", this.connectionState = B.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Z, e2, t2);
      }
      static $() {
        return ["ScmConnectAdContext|1 provider #0|2 remote_url 9|3 connection_state #1", R, B];
      }
    }
    class X extends b {
      constructor(e2) {
        super(), this.hasAlternativeCli = false, this.hasCursorAgentCli = false, n.proto3.util.initPartial(e2, this);
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
        return ["DevEnvironment|1 has_alternative_cli 8|2 has_cursor_agent_cli 8"];
      }
    }
    class ee extends b {
      constructor(e2) {
        super(), this.telemEnabled = false, this.bugBotDismissedNotificationLast10TimesUnixMs = [], this.bugBotViewedNotificationLast10TimesUnixMs = [], this.inAppAdTrigger = T.UNSPECIFIED, this.clientSurface = x.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["GetServerConfigRequest|1 telem_enabled 8|2 bug_bot_dismissed_notification_last_10_times_unix_ms 1*|3 bug_bot_viewed_notification_last_10_times_unix_ms 1*|4 os_stats #0|5 os_properties #1|6 remote_authority #2|7 in_app_ad_trigger #3|8 dev_environment #4|9 client_surface #5|10 scm_connect_ad_context #6", s.VscodeOSStatistics, s.VscodeOSProperties, Y, T, X, x, Z];
      }
    }
    class te extends b {
      constructor(e2) {
        super(), this.enabledInPrivacyMode = false, this.enabledInNonPrivacyMode = false, this.excludedAgentHostModuleTagKeys = [], n.proto3.util.initPartial(e2, this);
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
        return ["MetricsConfig|2 enabled_in_privacy_mode 8|3 enabled_in_non_privacy_mode 8|4 excluded_agent_host_module_tag_keys 9*"];
      }
    }
    class re extends b {
      constructor(e2) {
        super(), this.enableBackgroundAgent = false, this.showBackgroundAgentInBetaSettings = false, this.showBackgroundAgentHistoryAction = false, this.useModalExperience = false, n.proto3.util.initPartial(e2, this);
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
        return ["BackgroundComposerConfig|1 enable_background_agent 8|2 show_background_agent_in_beta_settings 8|3 window_in_window_preload_count 5?|4 window_in_window_ping_interval_ms 1?|5 show_background_agent_disclaimer 8?|6 show_background_agent_slack_ad 8?|7 show_background_agent_history_action 8|8 max_window_in_windows 5?|9 use_modal_experience 8|10 max_multi_repo_environment_repos 5?"];
      }
    }
    class ne extends b {
      constructor(e2) {
        super(), this.enabled = false, this.enabledFallback = false, this.enabledGitGraph = false, this.enabledSemSearch = false, this.enabledV2 = false, n.proto3.util.initPartial(e2, this);
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
        return ["AutoContextConfig|1 enabled 8|2 enabled_fallback 8|3 enabled_git_graph 8|4 enabled_sem_search 8|5 enabled_v2 8"];
      }
    }
    class se extends b {
      constructor(e2) {
        super(), this.enabled = false, this.showStatusEntry = false, n.proto3.util.initPartial(e2, this);
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
        return ["MemoryMonitorConfig|1 enabled 8|2 show_status_entry 8|3 base_threshold_mb 5?|4 critical_offset_mb 5?|5 process_memory_interval_sec 5?"];
      }
    }
    class oe extends b {
      constructor(e2) {
        super(), this.releaseTrack = "", this.mode = ie.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["UpdateConfig|1 release_track 9|2 mode #0|3 applied_at 5?", ie];
      }
    }
    var ie = (0, o.QT)(n.proto3, S, "UpdateConfig.UpdateMode", [[0, "UNSPECIFIED"], [1, "ONE_TIME"]], 1);
    class ae extends b {
      constructor(e2) {
        super(), this.enabled = false, n.proto3.util.initPartial(e2, this);
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
        return ["PerformanceEventsConfig|1 enabled 8|2 buffer_size 5?|3 flush_interval_ms 5?"];
      }
    }
    class ce extends b {
      constructor(e2) {
        super(), this.profilingEnabled = false, this.metricsEnabled = false, n.proto3.util.initPartial(e2, this);
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
        return ["InteractionConfig|1 profiling_enabled 8|2 metrics_enabled 8|3 profiling_interval_sec 5?|4 metrics_interval_sec 5?|5 profiling_max_buffer_size 5?|6 profiling_interaction_duration_threshold_ms 5?|7 profiling_sample_interval_ms 5?|8 metrics_min_interactions_for_loaf 5?|9 metrics_min_foreground_time_ms 5?|10 metrics_combined_inp_drop_highest_count 5?|11 metrics_click_inp_drop_highest_count 5?|12 metrics_keypress_inp_drop_highest_count 5?|13 metrics_startup_threshold_sec 5?|14 analytics_summary_every_n_windows 5?|15 ext_host_lag_summary_interval_sec 5?"];
      }
    }
    class le extends b {
      constructor(e2) {
        super(), this.enabled = false, n.proto3.util.initPartial(e2, this);
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
        return ["AgentTelemetryConfig|1 enabled 8"];
      }
    }
    class ue extends b {
      constructor(e2) {
        super(), this.enabled = false, n.proto3.util.initPartial(e2, this);
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
        return ["TraceConfig|1 enabled 8|2 buffer_size 5?|3 flush_interval_ms 5?|4 sample_rate 1?|5 internal_sample_rate 1?|6 internal_ext_host_sample_rate 1?"];
      }
    }
    class de extends b {
      constructor(e2) {
        super(), this.id = "", this.modelSetting = "", this.targetModel = "", n.proto3.util.initPartial(e2, this);
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
        return ["ModelMigration|1 id 9|2 model_setting 9|3 target_model 9|4 previous_model 9?|5 migrate_mode_models 8?|6 remove_previous_model 8?|7 max_mode 8?|8 migrate_old_composers_and_current_composer 8?"];
      }
    }
    class pe extends b {
      constructor(e2) {
        super(), this.maxTotalBytes = 0, this.maxNumFiles = 0, n.proto3.util.initPartial(e2, this);
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
        return ["FolderSizeLimit|1 max_total_bytes 5|2 max_num_files 5"];
      }
    }
    class me extends b {
      constructor(e2) {
        super(), this.compositeShellCommands = [], this.safeShellCommands = [], n.proto3.util.initPartial(e2, this);
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
        return ["RunTerminalServerConfig|1 composite_shell_commands 9*|2 safe_shell_commands 9*"];
      }
    }
    class he extends b {
      constructor(e2) {
        super(), this.allowedActionIds = [], this.deniedActionIds = [], n.proto3.util.initPartial(e2, this);
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
        return ["AgentLayoutPolicy|1 allowed_action_ids 9*|2 denied_action_ids 9*"];
      }
    }
    class fe extends b {
      constructor(e2) {
        super(), this.message = "", this.enabled = false, n.proto3.util.initPartial(e2, this);
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
        return ["TerminalTipConfig|1 message 9|2 enabled 8"];
      }
    }
    class ge extends b {
      constructor(e2) {
        super(), this.marketplacePluginNames = [], this.agenticOnboardingEnabled = false, n.proto3.util.initPartial(e2, this);
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
        return ["OnboardingConfig|1 marketplace_plugin_names 9*|2 agentic_onboarding_enabled 8"];
      }
    }
    class ye extends b {
      constructor(e2) {
        super(), this.bugbotPlanEnabled = false, this.bugbotPlanType = M.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["BugbotConfig|1 bugbot_plan_enabled 8|2 bugbot_plan_type #0", M];
      }
    }
    class we extends b {
      constructor(e2) {
        super(), this.enabled = false, this.resetToken = "", n.proto3.util.initPartial(e2, this);
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
        return ["CodebaseTelemetryConfig|1 enabled 8|2 reset_token 9"];
      }
    }
    class ve extends b {
      constructor(e2) {
        super(), this.id = "", this.mcpServerNameMatch = "", this.toolName = "", this.argsJson = "", this.interpreter = q.UNSPECIFIED, this.interpreterParam = "", this.interpreterExpectedValue = "", this.backendMethod = "", n.proto3.util.initPartial(e2, this);
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
        return ["NewRepoFlowProbe|1 id 9|2 mcp_server_name_match 9|3 tool_name 9|4 args_json 9|5 interpreter #0|6 interpreter_param 9|7 interpreter_expected_value 9|8 backend_method 9", q];
      }
    }
    class _e extends b {
      constructor(e2) {
        super(), this.method = "", this.repoName = "", this.repoUrl = "", this.previousRepoName = "", n.proto3.util.initPartial(e2, this);
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
        return ["ResolveNewRepoFlowBackendProbeRequest|1 method 9|2 repo_name 9|3 repo_url 9|4 previous_repo_name 9"];
      }
    }
    class Ae extends b {
      constructor(e2) {
        super(), this.payloadText = "", n.proto3.util.initPartial(e2, this);
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
        return ["ResolveNewRepoFlowBackendProbeResponse|1 payload_text 9"];
      }
    }
    class Se extends b {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetNewRepoFlowConfigRequest"];
      }
    }
    class be extends b {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetNewRepoFlowConfigResponse|1 config #0", Be];
      }
    }
    class Ee extends b {
      constructor(e2) {
        super(), this.fact = D.UNSPECIFIED, this.param = "", this.expectedValue = "", this.negate = false, n.proto3.util.initPartial(e2, this);
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
        return ["NewRepoFlowCondition|1 fact #0|2 param 9|3 expected_value 9|4 negate 8", D];
      }
    }
    class Ie extends b {
      constructor(e2) {
        super(), this.pluginName = "", this.authTarget = N.UNSPECIFIED, this.redirectMetadata = {}, n.proto3.util.initPartial(e2, this);
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
        return ["NewRepoFlowInstallPluginAction|1 plugin_name 9|2 auth_target #0|3 redirect_metadata 9,9", N];
      }
    }
    class Ce extends b {
      constructor(e2) {
        super(), this.slashCommand = "", this.promptBody = "", this.compactTitle = "", this.latchKey = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ce().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ce().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ce().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ce, e2, t2);
      }
      static $() {
        return ["NewRepoFlowSubmitFollowupAction|1 slash_command 9|2 prompt_body 9|3 compact_title 9|4 latch_key 9"];
      }
    }
    class ke extends b {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ke().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ke().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ke().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ke, e2, t2);
      }
      static $() {
        return ["NewRepoFlowDismissAction"];
      }
    }
    class xe extends b {
      constructor(e2) {
        super(), this.serverNameMatch = "", this.postAuthReturnPathTemplate = "", n.proto3.util.initPartial(e2, this);
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
        return ["NewRepoFlowMcpAuthenticateAction|1 server_name_match 9|2 post_auth_return_path_template 9"];
      }
    }
    class Te extends b {
      constructor(e2) {
        super(), this.label = "", this.buttonType = E.UNSPECIFIED, this.action = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["NewRepoFlowStepButton|1 label 9|2 button_type #0|3 external_url 9 action|4 install_plugin #1 action|5 submit_followup #2 action|6 client_action #3 action|7 dismiss #4 action|8 mcp_authenticate #5 action", E, Ie, Ce, s.ClientAction, ke, xe];
      }
    }
    class Re extends b {
      constructor(e2) {
        super(), this.id = "", this.presentation = O.UNSPECIFIED, this.title = "", this.bodyMarkdown = "", this.pillLabel = "", this.buttons = [], this.visibleWhen = [], this.dismissible = false, this.brandPluginName = "", this.disabledWhen = [], this.disabledReason = "", n.proto3.util.initPartial(e2, this);
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
        return ["NewRepoFlowStep|1 id 9|2 presentation #0|3 title 9|4 body_markdown 9|5 pill_label 9|6 buttons #1*|7 visible_when #2*|8 dismissible 8|9 brand_plugin_name 9|10 disabled_when #2*|11 disabled_reason 9", O, Te, Ee];
      }
    }
    class Be extends b {
      constructor(e2) {
        super(), this.configVersion = "", this.probes = [], this.steps = [], this.serverFacts = {}, n.proto3.util.initPartial(e2, this);
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
        return ["NewRepoFlowConfig|1 config_version 9|2 probes #0*|3 steps #1*|4 server_facts 9,9", ve, Re];
      }
    }
    class Pe extends b {
      constructor(e2) {
        super(), this.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers = false, this.configVersion = "", this.http2Config = P.UNSPECIFIED, this.modelMigrations = [], this.useNlbForNal = false, this.inferenceProviderWarnings = [], this.retrievalKeepAliveConfig = J.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["GetServerConfigResponse|1 bug_config_response #0|2 is_dev_do_not_use_for_secret_things_because_can_be_spoofed_by_users 8|3 indexing_config #1|4 client_tracing_config #2|5 chat_config #3|6 config_version 9|7 http2_config #4|8 profiling_config #5|9 metrics_config #6|10 background_composer_config #7|11 auto_context_config #8|12 model_migrations #9*|13 memory_monitor_config #10|14 folder_size_limit #11|20 online_metrics_config #12|15 git_indexing_config #13|16 performance_events_config #14|17 current_in_app_ad #15?|18 trace_config #16|19 run_terminal_server_config #17?|21 interaction_config #18|22 agent_telemetry_config #19|23 client_version_status #20?|24 update_config #21?|25 agent_layout_policy #22?|26 use_nlb_for_nal 8|27 agent_url_config #23|28 cli_sandbox_default_enabled 8?|30 terminal_tip_config #24?|31 model_picker_nudge 9?|32 inference_provider_warnings #25*|33 onboarding_config #26?|34 bugbot_config #27?|35 codebase_telemetry_config #28?|36 retrieval_keep_alive_config #29|37 google_workspace_mcp_oauth_client #30?|38 new_repo_flow_config #31?", c, z, V, K, P, w, te, re, ne, de, se, pe, A, W, ae, L, ue, me, ce, le, H, oe, he, qe, fe, Me, ge, ye, we, J, Je, Be];
      }
    }
    class Je extends b {
      constructor(e2) {
        super(), this.clientId = "", this.clientSecret = "", n.proto3.util.initPartial(e2, this);
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
        return ["GoogleWorkspaceMcpOAuthClient|1 client_id 9|2 client_secret 9"];
      }
    }
    class Me extends b {
      constructor(e2) {
        super(), this.message = "", this.affectedModels = [], this.trigger = F.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["InferenceProviderWarning|1 message 9|2 affected_models 9*|3 fallback_model 9?|4 trigger #0", F];
      }
    }
    class qe extends b {
      constructor(e2) {
        super(), this.agentUrl = "", this.agentnUrl = "", this.localLoopInferenceUrl = "", n.proto3.util.initPartial(e2, this);
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
        return ["AgentUrlConfig|1 agent_url 9|2 agentn_url 9|3 local_loop_inference_url 9"];
      }
    }
  }