// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8617 range:5267828..5319154
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8617: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { AdButton: () => H, AdContent: () => $, AdHeader: () => L, AdSection: () => G, AgentLayoutPolicy: () => pt, AgentTelemetryConfig: () => ct, AgentUrlConfig: () => Nt, AutoContextConfig: () => nt, BackgroundComposerConfig: () => rt, BugbotConfig: () => At, BugbotPlanType: () => x, ButtonType: () => E, ChatConfig: () => Y, ClientSurface: () => k, ClientTracingConfig: () => W, ClientUpdateLevel: () => C, ClientVersionStatus: () => K, CodebaseTelemetryConfig: () => _t, DevEnvironment: () => Z, DisplayMode: () => I, FolderSizeLimit: () => dt, GetNewRepoFlowConfigRequest: () => Jt, GetNewRepoFlowConfigResponse: () => Bt, GetServerConfigRequest: () => tt, GetServerConfigResponse: () => Pt, GitIndexingConfig: () => z, GoogleWorkspaceMcpOAuthClient: () => Tt, Http2Config: () => P, InAppAd: () => F, InAppAdTrigger: () => v, IndexingConfig: () => V, InferenceProviderWarning: () => xt, InferenceProviderWarningTrigger: () => M, InteractionConfig: () => ut, MemoryMonitorConfig: () => st, MetricsConfig: () => et, ModalDisplayConfig: () => O, ModelMigration: () => mt, NewRepoFlowCondition: () => Et, NewRepoFlowConfig: () => Rt, NewRepoFlowDismissAction: () => bt, NewRepoFlowFact: () => D, NewRepoFlowInstallPluginAction: () => It, NewRepoFlowMcpAuthenticateAction: () => kt, NewRepoFlowPluginAuthTarget: () => Q, NewRepoFlowProbe: () => yt, NewRepoFlowProbeInterpreter: () => N, NewRepoFlowStep: () => qt, NewRepoFlowStepButton: () => vt, NewRepoFlowStepPresentation: () => U, NewRepoFlowSubmitFollowupAction: () => Ct, OnboardingConfig: () => gt, PerformanceEventsConfig: () => at, RemoteAuthority: () => j, RemoteConnectionType: () => b, ResolveNewRepoFlowBackendProbeRequest: () => wt, ResolveNewRepoFlowBackendProbeResponse: () => St, RetrievalKeepAliveConfig: () => T, RunTerminalServerConfig: () => ft, ScmConnectAdConnectionState: () => R, ScmConnectAdContext: () => X, ScmConnectAdProvider: () => q, TerminalTipConfig: () => ht, TraceConfig: () => lt, UpdateConfig: () => it, UpdateConfig_UpdateMode: () => ot });
    var n2 = r2(6038), s2 = r2(7918), i2 = (r2(1934), r2(8072), r2(8592));
    i2.HL;
    const o2 = "aiserver.v1.";
    class a extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return o2;
      }
    }
    n2.proto3;
    class u extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BugConfigResponse|1 linter_strategy_v1 #0|2 bug_bot_v1 #1|3 linter_strategy_v2 #2", c, m, l];
      }
    }
    class c extends a {
      constructor(t3) {
        super(), this.enabled = false, this.tryTriggerOnSave = false, this.waitBetweenTriggersMs = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["BugConfigResponse.LinterStrategyV1|1 enabled 8|2 try_trigger_on_save 8|3 wait_between_triggers_ms 1"];
      }
    }
    class l extends a {
      constructor(t3) {
        super(), this.enabled = false, this.waitBetweenTriggersMs = 0, this.debounceTriggersMs = 0, this.keepLinesAroundChunk = 0, this.preventTriggeringForFilesWithThisManyLines = 0, this.preventTriggeringWhenLints = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(l, t3, e3);
      }
      static $() {
        return ["BugConfigResponse.LinterStrategyV2|1 enabled 8|2 wait_between_triggers_ms 1|3 debounce_triggers_ms 1|4 keep_lines_around_chunk 5|5 prevent_triggering_for_files_with_this_many_lines 5|6 prevent_triggering_when_lints 8"];
      }
    }
    class m extends a {
      constructor(t3) {
        super(), this.enabled = false, this.isSubsidized = false, this.backgroundCallFrequencyMs = 0, this.killSwitch = false, this.showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["BugConfigResponse.BugBotV1|1 enabled 8|2 is_subsidized 8|3 background_call_frequency_ms 5|4 kill_switch 8|5 show_intrusive_notification_only_if_last_time_was_more_than_ms_ago 1|6 background_diff_absolute_max_tokens 5?|7 background_diff_min_min_token_threshold 5?|8 background_diff_min_max_token_threshold 5?|9 background_diff_last_commit_less_than_this_many_ms_ago 1?|15 background_unified_context_lines 5?|16 background_diff_include_uncommitted 8?|10 default_diff_context_lines 5?|11 diff_absolute_max_tokens 5?|12 custom_instructions_max_char_length 5?|13 default_fallback_iterations 5?|14 threshold_for_expensive_run_modal_cents 5?|17 cheap_model_name 9?|18 cheap_absolute_max_tokens 5?|19 expensive_absolute_max_tokens 5?"];
      }
    }
    n2.proto3;
    n2.proto3;
    class d extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class f extends d {
      constructor(t3) {
        super(), this.samplingInterval = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["HeapProfileConfig|1 sampling_interval 5|2 include_objects_collected_by_major_gc 8?|3 include_objects_collected_by_minor_gc 8?"];
      }
    }
    class p extends d {
      constructor(t3) {
        super(), this.interval = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["CpuProfileConfig|1 interval 5"];
      }
    }
    class h extends d {
      constructor(t3) {
        super(), this.id = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ProfileConfig|1 id 9|2 heap #0?|3 cpu #1?", f, p];
      }
    }
    class g extends d {
      constructor(t3) {
        super(), this.id = "", this.process = "", this.configId = "", this.activityTimeout = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ProfileScheduleConfig|1 id 9|2 process 9|3 config_id 9|4 schedule #0|5 activity_timeout 5", A];
      }
    }
    class A extends d {
      constructor(t3) {
        super(), this.interval = 0, this.duration = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ProfileScheduleConfig.ScheduleConfig|1 interval 5|2 duration 5"];
      }
    }
    class _ extends d {
      constructor(t3) {
        super(), this.enabled = false, this.configs = [], this.schedules = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ProfilingConfig|1 enabled 8|2 configs #0*|3 schedules #1*", h, g];
      }
    }
    const y = "aiserver.v1.";
    class w extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return y;
      }
    }
    n2.proto3;
    class S extends w {
      constructor(t3) {
        super(), this.enabled = false, this.maxRequestsTracked = 0, this.maxRequestsTrackedMb = 0, this.maxRequestRetentionSeconds = 0, this.sendOriginalFileContentsForInitialSnapshot = false, this.sendFullAddedLinesInDiffChanges = false, this.numCommitsTracked = 0, this.timeIntervalsTrackedMinutes = [], this.tooBigFileSizeBytes = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["OnlineMetricsConfig|1 enabled 8|2 max_requests_tracked 5|3 max_requests_tracked_mb 5|4 max_request_retention_seconds 1|5 send_original_file_contents_for_initial_snapshot 8|6 send_full_added_lines_in_diff_changes 8|7 num_commits_tracked 5|8 time_intervals_tracked_minutes 5*|9 too_big_file_size_bytes 5"];
      }
    }
    const J = "aiserver.v1.";
    class B extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return J;
      }
    }
    var E = (0, i2.QT)(n2.proto3, J, "ButtonType", [[0, "UNSPECIFIED"], [1, "LEADING"], [2, "PRIMARY"], [3, "SECONDARY"]], 1), I = (0, i2.QT)(n2.proto3, J, "DisplayMode", [[0, "UNSPECIFIED"], [1, "TOAST"], [2, "MODAL"]], 1), C = (0, i2.QT)(n2.proto3, J, "ClientUpdateLevel", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "RECOMMENDED"], [3, "REQUIRED"]], 1), b = (0, i2.QT)(n2.proto3, J, "RemoteConnectionType", [[0, "UNSPECIFIED"], [1, "LOCAL"], [2, "WSL"], [3, "SSH"], [4, "DEVCONTAINER"], [5, "DEVCONTAINER_SSH"], [6, "DEVCONTAINER_WSL"]], 1), k = (0, i2.QT)(n2.proto3, J, "ClientSurface", [[0, "UNSPECIFIED"], [1, "EDITOR"], [2, "GLASS"]], 1), v = (0, i2.QT)(n2.proto3, J, "InAppAdTrigger", [[0, "UNSPECIFIED"], [1, "MOUNT"], [2, "FIND_ISSUES"], [3, "GIT_PUSH"], [4, "COMMIT"], [5, "IOS_DOWNLOAD_MENU"]], 1), q = (0, i2.QT)(n2.proto3, J, "ScmConnectAdProvider", [[0, "UNSPECIFIED"], [1, "GITHUB"], [2, "GITLAB"]], 1), R = (0, i2.QT)(n2.proto3, J, "ScmConnectAdConnectionState", [[0, "UNSPECIFIED"], [1, "UNKNOWN"], [2, "NOT_CONNECTED"], [3, "HAS_ACCESS"]], 1), P = (0, i2.QT)(n2.proto3, J, "Http2Config", [[0, "UNSPECIFIED"], [1, "FORCE_ALL_DISABLED"], [2, "FORCE_ALL_ENABLED"], [3, "FORCE_BIDI_DISABLED"], [4, "FORCE_BIDI_ENABLED"]], 1), T = (0, i2.QT)(n2.proto3, J, "RetrievalKeepAliveConfig", [[0, "UNSPECIFIED"], [1, "FORCE_DISABLED"], [2, "FORCE_ENABLED"]], 1), x = (0, i2.QT)(n2.proto3, J, "BugbotPlanType", [[0, "UNSPECIFIED"], [1, "TEAM"], [2, "USER"]], 1), N = (0, i2.QT)(n2.proto3, J, "NewRepoFlowProbeInterpreter", [[0, "UNSPECIFIED"], [1, "VERCEL_PROJECT_LINK_MATCH"], [2, "JSON_PATH_EQUALS"], [3, "BOOLEAN_FIELD"]], 1), D = (0, i2.QT)(n2.proto3, J, "NewRepoFlowFact", [[0, "UNSPECIFIED"], [1, "STARTED_AS_NEW_PROJECT"], [2, "REPO_IS_STANDARD_ORIGIN"], [3, "IS_SUBAGENT_CONVERSATION"], [4, "PLUGIN_INSTALLED"], [5, "PROBE_RESULT"], [6, "STEP_LATCHED"], [7, "SERVER_FACT"], [8, "PROBE_LINKED_WITH_LATCH_FALLBACK"], [9, "MCP_NEEDS_AUTH"]], 1), U = (0, i2.QT)(n2.proto3, J, "NewRepoFlowStepPresentation", [[0, "UNSPECIFIED"], [1, "PILL"], [2, "PLUGIN_NUDGE"], [3, "BLOCKING_TRAY"]], 1), Q = (0, i2.QT)(n2.proto3, J, "NewRepoFlowPluginAuthTarget", [[0, "UNSPECIFIED"], [1, "CLOUD"], [2, "LOCAL"]], 1), M = (0, i2.QT)(n2.proto3, J, "InferenceProviderWarningTrigger", [[0, "UNSPECIFIED"], [1, "ON_SELECT"], [2, "ON_ERROR"]], 1);
    class O extends B {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ModalDisplayConfig|1 background_gradient 9?|2 description 9?|3 background_gradient_light 9?|4 background_gradient_dark 9?"];
      }
    }
    class F extends B {
      constructor(t3) {
        super(), this.id = "", this.buttons = [], this.displayMode = I.UNSPECIFIED, this.targetSurfaces = [], n2.proto3.util.initPartial(t3, this);
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
        return ["InAppAd|1 id 9|2 header #0|3 content #1|4 buttons #2*|5 force_dark_close_button 8?|6 display_mode #3|7 analytics_variant 9?|8 modal_display_config #4?|9 target_surfaces #5*", L, $, H, I, O, k];
      }
    }
    class L extends B {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["AdHeader|1 banner_url 9?|2 banner_url_light 9?|3 banner_url_dark 9?"];
      }
    }
    class $ extends B {
      constructor(t3) {
        super(), this.title = "", this.sections = [], n2.proto3.util.initPartial(t3, this);
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
        return ["AdContent|1 tag 9?|2 title 9|3 sections #0*|4 center_title 8?", G];
      }
    }
    class G extends B {
      constructor(t3) {
        super(), this.iconSvg = "", this.title = "", this.description = "", n2.proto3.util.initPartial(t3, this);
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
        return ["AdSection|1 icon_svg 9|2 title 9|3 description 9|4 is_beta 8?"];
      }
    }
    class H extends B {
      constructor(t3) {
        super(), this.text = "", this.buttonType = E.UNSPECIFIED, this.action = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["AdButton|1 text 9|2 button_type #0|3 external_url 9 action|4 command_id 9 action|5 client_action #1 action", E, s2.ClientAction];
      }
    }
    class K extends B {
      constructor(t3) {
        super(), this.updateLevel = C.UNSPECIFIED, this.currentClientVersion = "", this.minSupportedClientVersion = "", this.minAllowedClientVersion = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ClientVersionStatus|1 update_level #0|2 current_client_version 9|3 min_supported_client_version 9|4 min_allowed_client_version 9|5 message 9?", C];
      }
    }
    class V extends B {
      constructor(t3) {
        super(), this.maxConcurrentUploads = 0, this.absoluteMaxNumberFiles = 0, this.maxFileRetries = 0, this.syncConcurrency = 0, this.autoIndexingMaxNumFiles = 0, this.indexingPeriodSeconds = 0, this.repo42AuthToken = "", this.copyStatusCheckPeriodSeconds = 0, this.copyTimeoutSeconds = 0, this.maxBatchBytes = 0, this.maxBatchNumRequests = 0, this.maxSyncMerkleBatchSize = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["IndexingConfig|1 max_concurrent_uploads 5|2 absolute_max_number_files 5|3 max_file_retries 5|4 sync_concurrency 5|5 auto_indexing_max_num_files 5|6 indexing_period_seconds 5|7 repo42_auth_token 9|8 incremental 8?|9 default_user_path_encryption_key 9?|10 default_team_path_encryption_key 9?|11 multi_root_indexing_enabled 8?|12 copy_status_check_period_seconds 1|13 copy_timeout_seconds 5|14 max_batch_bytes 5|15 max_batch_num_requests 5|16 max_sync_merkle_batch_size 5"];
      }
    }
    class z extends B {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GitIndexingConfig|1 enabled 8?|2 max_pr_count 5?|3 max_pr_size 5?|4 pr_embedding_context 5?|5 js_concurrency 5?|6 js_chunk_size 5?|7 cpu_concurrency 5?|8 indexing_period_seconds 5?|9 max_attempts_per_pr 5?|10 allow_index_copy_from_server 8?"];
      }
    }
    class W extends B {
      constructor(t3) {
        super(), this.globalSampleRate = 0, this.tracesSampleRate = 0, this.loggerSampleRate = 0, this.minidumpSampleRate = 0, this.errorRateLimit = 0, this.performanceUnitRateLimit = 0, this.profilesSampleRate = 0, this.jsonStringifySampleRate = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new W().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new W().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new W().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(W, t3, e3);
      }
      static $() {
        return ["ClientTracingConfig|1 global_sample_rate 1|2 traces_sample_rate 1|3 logger_sample_rate 1|4 minidump_sample_rate 1|5 error_rate_limit 1|6 performance_unit_rate_limit 1|7 profiles_sample_rate 1|8 json_stringify_sample_rate 1"];
      }
    }
    class Y extends B {
      constructor(t3) {
        super(), this.disableUnification = false, this.fullContextTokenLimit = 0, this.disableYoloMode = false, this.maxRuleLength = 0, this.maxMcpTools = 0, this.warnMcpTools = 0, this.summarizationMessage = "", this.numFilesForMemoryGeneration = 0, this.memoryDefaultEnabled = false, this.numSummarizationsBeforeWarningShown = 0, this.cursorRulesReadFileFixEnabled = false, this.dontSendCtrlCBeforeCommand = false, this.clientStatsigPollIntervalMs = 0, this.disableStatsig = false, this.listDirV2PredefinedIgnoreGlobs = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ChatConfig|1 disable_unification 8|2 full_context_token_limit 5|3 disable_yolo_mode 8|4 max_rule_length 5|5 max_mcp_tools 5|6 warn_mcp_tools 5|7 summarization_message 9|8 num_files_for_memory_generation 5|9 memory_default_enabled 8|10 num_summarizations_before_warning_shown 5|11 cursor_rules_read_file_fix_enabled 8|12 dont_send_ctrl_c_before_command 8|13 client_statsig_poll_interval_ms 5|14 disable_statsig 8|15 list_dir_v2_predefined_ignore_globs 9*"];
      }
    }
    class j extends B {
      constructor(t3) {
        super(), this.connectionType = b.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["RemoteAuthority|1 connection_type #0", b];
      }
    }
    class X extends B {
      constructor(t3) {
        super(), this.provider = q.UNSPECIFIED, this.remoteUrl = "", this.connectionState = R.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new X().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new X().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new X().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(X, t3, e3);
      }
      static $() {
        return ["ScmConnectAdContext|1 provider #0|2 remote_url 9|3 connection_state #1", q, R];
      }
    }
    class Z extends B {
      constructor(t3) {
        super(), this.hasAlternativeCli = false, this.hasCursorAgentCli = false, n2.proto3.util.initPartial(t3, this);
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
        return ["DevEnvironment|1 has_alternative_cli 8|2 has_cursor_agent_cli 8"];
      }
    }
    class tt extends B {
      constructor(t3) {
        super(), this.telemEnabled = false, this.bugBotDismissedNotificationLast10TimesUnixMs = [], this.bugBotViewedNotificationLast10TimesUnixMs = [], this.inAppAdTrigger = v.UNSPECIFIED, this.clientSurface = k.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["GetServerConfigRequest|1 telem_enabled 8|2 bug_bot_dismissed_notification_last_10_times_unix_ms 1*|3 bug_bot_viewed_notification_last_10_times_unix_ms 1*|4 os_stats #0|5 os_properties #1|6 remote_authority #2|7 in_app_ad_trigger #3|8 dev_environment #4|9 client_surface #5|10 scm_connect_ad_context #6", s2.VscodeOSStatistics, s2.VscodeOSProperties, j, v, Z, k, X];
      }
    }
    class et extends B {
      constructor(t3) {
        super(), this.enabledInPrivacyMode = false, this.enabledInNonPrivacyMode = false, this.excludedAgentHostModuleTagKeys = [], n2.proto3.util.initPartial(t3, this);
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
        return ["MetricsConfig|2 enabled_in_privacy_mode 8|3 enabled_in_non_privacy_mode 8|4 excluded_agent_host_module_tag_keys 9*"];
      }
    }
    class rt extends B {
      constructor(t3) {
        super(), this.enableBackgroundAgent = false, this.showBackgroundAgentInBetaSettings = false, this.showBackgroundAgentHistoryAction = false, this.useModalExperience = false, n2.proto3.util.initPartial(t3, this);
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
        return ["BackgroundComposerConfig|1 enable_background_agent 8|2 show_background_agent_in_beta_settings 8|3 window_in_window_preload_count 5?|4 window_in_window_ping_interval_ms 1?|5 show_background_agent_disclaimer 8?|6 show_background_agent_slack_ad 8?|7 show_background_agent_history_action 8|8 max_window_in_windows 5?|9 use_modal_experience 8|10 max_multi_repo_environment_repos 5?"];
      }
    }
    class nt extends B {
      constructor(t3) {
        super(), this.enabled = false, this.enabledFallback = false, this.enabledGitGraph = false, this.enabledSemSearch = false, this.enabledV2 = false, n2.proto3.util.initPartial(t3, this);
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
        return ["AutoContextConfig|1 enabled 8|2 enabled_fallback 8|3 enabled_git_graph 8|4 enabled_sem_search 8|5 enabled_v2 8"];
      }
    }
    class st extends B {
      constructor(t3) {
        super(), this.enabled = false, this.showStatusEntry = false, n2.proto3.util.initPartial(t3, this);
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
        return ["MemoryMonitorConfig|1 enabled 8|2 show_status_entry 8|3 base_threshold_mb 5?|4 critical_offset_mb 5?|5 process_memory_interval_sec 5?"];
      }
    }
    class it extends B {
      constructor(t3) {
        super(), this.releaseTrack = "", this.mode = ot.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateConfig|1 release_track 9|2 mode #0|3 applied_at 5?", ot];
      }
    }
    var ot = (0, i2.QT)(n2.proto3, J, "UpdateConfig.UpdateMode", [[0, "UNSPECIFIED"], [1, "ONE_TIME"]], 1);
    class at extends B {
      constructor(t3) {
        super(), this.enabled = false, n2.proto3.util.initPartial(t3, this);
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
        return ["PerformanceEventsConfig|1 enabled 8|2 buffer_size 5?|3 flush_interval_ms 5?"];
      }
    }
    class ut extends B {
      constructor(t3) {
        super(), this.profilingEnabled = false, this.metricsEnabled = false, n2.proto3.util.initPartial(t3, this);
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
        return ["InteractionConfig|1 profiling_enabled 8|2 metrics_enabled 8|3 profiling_interval_sec 5?|4 metrics_interval_sec 5?|5 profiling_max_buffer_size 5?|6 profiling_interaction_duration_threshold_ms 5?|7 profiling_sample_interval_ms 5?|8 metrics_min_interactions_for_loaf 5?|9 metrics_min_foreground_time_ms 5?|10 metrics_combined_inp_drop_highest_count 5?|11 metrics_click_inp_drop_highest_count 5?|12 metrics_keypress_inp_drop_highest_count 5?|13 metrics_startup_threshold_sec 5?|14 analytics_summary_every_n_windows 5?|15 ext_host_lag_summary_interval_sec 5?"];
      }
    }
    class ct extends B {
      constructor(t3) {
        super(), this.enabled = false, n2.proto3.util.initPartial(t3, this);
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
        return ["AgentTelemetryConfig|1 enabled 8"];
      }
    }
    class lt extends B {
      constructor(t3) {
        super(), this.enabled = false, n2.proto3.util.initPartial(t3, this);
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
        return ["TraceConfig|1 enabled 8|2 buffer_size 5?|3 flush_interval_ms 5?|4 sample_rate 1?|5 internal_sample_rate 1?|6 internal_ext_host_sample_rate 1?"];
      }
    }
    class mt extends B {
      constructor(t3) {
        super(), this.id = "", this.modelSetting = "", this.targetModel = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ModelMigration|1 id 9|2 model_setting 9|3 target_model 9|4 previous_model 9?|5 migrate_mode_models 8?|6 remove_previous_model 8?|7 max_mode 8?|8 migrate_old_composers_and_current_composer 8?"];
      }
    }
    class dt extends B {
      constructor(t3) {
        super(), this.maxTotalBytes = 0, this.maxNumFiles = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["FolderSizeLimit|1 max_total_bytes 5|2 max_num_files 5"];
      }
    }
    class ft extends B {
      constructor(t3) {
        super(), this.compositeShellCommands = [], this.safeShellCommands = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RunTerminalServerConfig|1 composite_shell_commands 9*|2 safe_shell_commands 9*"];
      }
    }
    class pt extends B {
      constructor(t3) {
        super(), this.allowedActionIds = [], this.deniedActionIds = [], n2.proto3.util.initPartial(t3, this);
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
        return ["AgentLayoutPolicy|1 allowed_action_ids 9*|2 denied_action_ids 9*"];
      }
    }
    class ht extends B {
      constructor(t3) {
        super(), this.message = "", this.enabled = false, n2.proto3.util.initPartial(t3, this);
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
        return ["TerminalTipConfig|1 message 9|2 enabled 8"];
      }
    }
    class gt extends B {
      constructor(t3) {
        super(), this.marketplacePluginNames = [], this.agenticOnboardingEnabled = false, n2.proto3.util.initPartial(t3, this);
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
        return ["OnboardingConfig|1 marketplace_plugin_names 9*|2 agentic_onboarding_enabled 8"];
      }
    }
    class At extends B {
      constructor(t3) {
        super(), this.bugbotPlanEnabled = false, this.bugbotPlanType = x.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["BugbotConfig|1 bugbot_plan_enabled 8|2 bugbot_plan_type #0", x];
      }
    }
    class _t extends B {
      constructor(t3) {
        super(), this.enabled = false, this.resetToken = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CodebaseTelemetryConfig|1 enabled 8|2 reset_token 9"];
      }
    }
    class yt extends B {
      constructor(t3) {
        super(), this.id = "", this.mcpServerNameMatch = "", this.toolName = "", this.argsJson = "", this.interpreter = N.UNSPECIFIED, this.interpreterParam = "", this.interpreterExpectedValue = "", this.backendMethod = "", n2.proto3.util.initPartial(t3, this);
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
        return ["NewRepoFlowProbe|1 id 9|2 mcp_server_name_match 9|3 tool_name 9|4 args_json 9|5 interpreter #0|6 interpreter_param 9|7 interpreter_expected_value 9|8 backend_method 9", N];
      }
    }
    class wt extends B {
      constructor(t3) {
        super(), this.method = "", this.repoName = "", this.repoUrl = "", this.previousRepoName = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ResolveNewRepoFlowBackendProbeRequest|1 method 9|2 repo_name 9|3 repo_url 9|4 previous_repo_name 9"];
      }
    }
    class St extends B {
      constructor(t3) {
        super(), this.payloadText = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ResolveNewRepoFlowBackendProbeResponse|1 payload_text 9"];
      }
    }
    class Jt extends B {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetNewRepoFlowConfigRequest"];
      }
    }
    class Bt extends B {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetNewRepoFlowConfigResponse|1 config #0", Rt];
      }
    }
    class Et extends B {
      constructor(t3) {
        super(), this.fact = D.UNSPECIFIED, this.param = "", this.expectedValue = "", this.negate = false, n2.proto3.util.initPartial(t3, this);
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
        return ["NewRepoFlowCondition|1 fact #0|2 param 9|3 expected_value 9|4 negate 8", D];
      }
    }
    class It extends B {
      constructor(t3) {
        super(), this.pluginName = "", this.authTarget = Q.UNSPECIFIED, this.redirectMetadata = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["NewRepoFlowInstallPluginAction|1 plugin_name 9|2 auth_target #0|3 redirect_metadata 9,9", Q];
      }
    }
    class Ct extends B {
      constructor(t3) {
        super(), this.slashCommand = "", this.promptBody = "", this.compactTitle = "", this.latchKey = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ct().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ct().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ct().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ct, t3, e3);
      }
      static $() {
        return ["NewRepoFlowSubmitFollowupAction|1 slash_command 9|2 prompt_body 9|3 compact_title 9|4 latch_key 9"];
      }
    }
    class bt extends B {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bt, t3, e3);
      }
      static $() {
        return ["NewRepoFlowDismissAction"];
      }
    }
    class kt extends B {
      constructor(t3) {
        super(), this.serverNameMatch = "", this.postAuthReturnPathTemplate = "", n2.proto3.util.initPartial(t3, this);
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
        return ["NewRepoFlowMcpAuthenticateAction|1 server_name_match 9|2 post_auth_return_path_template 9"];
      }
    }
    class vt extends B {
      constructor(t3) {
        super(), this.label = "", this.buttonType = E.UNSPECIFIED, this.action = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["NewRepoFlowStepButton|1 label 9|2 button_type #0|3 external_url 9 action|4 install_plugin #1 action|5 submit_followup #2 action|6 client_action #3 action|7 dismiss #4 action|8 mcp_authenticate #5 action", E, It, Ct, s2.ClientAction, bt, kt];
      }
    }
    class qt extends B {
      constructor(t3) {
        super(), this.id = "", this.presentation = U.UNSPECIFIED, this.title = "", this.bodyMarkdown = "", this.pillLabel = "", this.buttons = [], this.visibleWhen = [], this.dismissible = false, this.brandPluginName = "", this.disabledWhen = [], this.disabledReason = "", n2.proto3.util.initPartial(t3, this);
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
        return ["NewRepoFlowStep|1 id 9|2 presentation #0|3 title 9|4 body_markdown 9|5 pill_label 9|6 buttons #1*|7 visible_when #2*|8 dismissible 8|9 brand_plugin_name 9|10 disabled_when #2*|11 disabled_reason 9", U, vt, Et];
      }
    }
    class Rt extends B {
      constructor(t3) {
        super(), this.configVersion = "", this.probes = [], this.steps = [], this.serverFacts = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["NewRepoFlowConfig|1 config_version 9|2 probes #0*|3 steps #1*|4 server_facts 9,9", yt, qt];
      }
    }
    class Pt extends B {
      constructor(t3) {
        super(), this.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers = false, this.configVersion = "", this.http2Config = P.UNSPECIFIED, this.modelMigrations = [], this.useNlbForNal = false, this.inferenceProviderWarnings = [], this.retrievalKeepAliveConfig = T.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["GetServerConfigResponse|1 bug_config_response #0|2 is_dev_do_not_use_for_secret_things_because_can_be_spoofed_by_users 8|3 indexing_config #1|4 client_tracing_config #2|5 chat_config #3|6 config_version 9|7 http2_config #4|8 profiling_config #5|9 metrics_config #6|10 background_composer_config #7|11 auto_context_config #8|12 model_migrations #9*|13 memory_monitor_config #10|14 folder_size_limit #11|20 online_metrics_config #12|15 git_indexing_config #13|16 performance_events_config #14|17 current_in_app_ad #15?|18 trace_config #16|19 run_terminal_server_config #17?|21 interaction_config #18|22 agent_telemetry_config #19|23 client_version_status #20?|24 update_config #21?|25 agent_layout_policy #22?|26 use_nlb_for_nal 8|27 agent_url_config #23|28 cli_sandbox_default_enabled 8?|30 terminal_tip_config #24?|31 model_picker_nudge 9?|32 inference_provider_warnings #25*|33 onboarding_config #26?|34 bugbot_config #27?|35 codebase_telemetry_config #28?|36 retrieval_keep_alive_config #29|37 google_workspace_mcp_oauth_client #30?|38 new_repo_flow_config #31?", u, V, W, Y, P, _, et, rt, nt, mt, st, dt, S, z, at, F, lt, ft, ut, ct, K, it, pt, Nt, ht, xt, gt, At, _t, T, Tt, Rt];
      }
    }
    class Tt extends B {
      constructor(t3) {
        super(), this.clientId = "", this.clientSecret = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GoogleWorkspaceMcpOAuthClient|1 client_id 9|2 client_secret 9"];
      }
    }
    class xt extends B {
      constructor(t3) {
        super(), this.message = "", this.affectedModels = [], this.trigger = M.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["InferenceProviderWarning|1 message 9|2 affected_models 9*|3 fallback_model 9?|4 trigger #0", M];
      }
    }
    class Nt extends B {
      constructor(t3) {
        super(), this.agentUrl = "", this.agentnUrl = "", this.localLoopInferenceUrl = "", n2.proto3.util.initPartial(t3, this);
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
        return ["AgentUrlConfig|1 agent_url 9|2 agentn_url 9|3 local_loop_inference_url 9"];
      }
    }
  }