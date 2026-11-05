// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6938 range:3769230..3866876
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6938: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $FK: () => B, $pi: () => w, DLS: () => Je, DOp: () => _, Deb: () => Be, Ijy: () => O, JEF: () => Ee, Tob: () => Ae, Zk9: () => ye, d0d: () => _e, f14: () => R, feo: () => A, jSP: () => Se, lIu: () => D, mv: () => M, nWu: () => P, qcI: () => f, r5_: () => Q, rgN: () => U, vfF: () => g, z8t: () => E });
    var n2 = r2(6038), s2 = r2(7918), i2 = r2(3341), o2 = r2(6637), a = r2(1563), u = r2(1934), c = r2(8592);
    const l = "aiserver.v1.";
    class m extends c.HL {
      static get runtime() {
        return (0, c.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return l;
      }
    }
    n2.proto3;
    var d = (0, c.QT)(n2.proto3, l, "CppSource", [[0, "UNSPECIFIED"], [1, "LINE_CHANGE"], [2, "TYPING"], [3, "OPTION_HOLD"], [4, "LINTER_ERRORS"], [5, "PARAMETER_HINTS"], [6, "CURSOR_PREDICTION"], [7, "MANUAL_TRIGGER"], [8, "EDITOR_CHANGE"], [9, "LSP_SUGGESTIONS"]], 1);
    class f extends m {
      constructor(t3) {
        super(), this.source = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CppIntentInfo|1 source 9"];
      }
    }
    class p extends m {
      constructor(t3) {
        super(), this.label = "", n2.proto3.util.initPartial(t3, this);
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
        return ["LspSuggestion|1 label 9"];
      }
    }
    class h extends m {
      constructor(t3) {
        super(), this.suggestions = [], n2.proto3.util.initPartial(t3, this);
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
        return ["LspSuggestedItems|1 suggestions #0*", p];
      }
    }
    class g extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ShouldTurnOnCppOnboardingRequest"];
      }
    }
    class A extends m {
      constructor(t3) {
        super(), this.shouldTurnOnCppOnboarding = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ShouldTurnOnCppOnboardingResponse|1 should_turn_on_cpp_onboarding 8"];
      }
    }
    class _ extends m {
      constructor(t3) {
        super(), this.diffHistory = [], this.contextItems = [], this.diffHistoryKeys = [], this.fileDiffHistories = [], this.mergedDiffHistories = [], this.blockDiffPatches = [], this.parameterHints = [], this.lspContexts = [], this.additionalFiles = [], this.filesyncUpdates = [], this.timeSinceRequestStart = 0, this.timeAtRequestSend = 0, this.codeResults = [], n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCppRequest|1 current_file #0|2 diff_history 9*|3 model_name 9?|4 linter_errors #1?|13 context_items #2*|5 diff_history_keys 9*|6 give_debug_output 8?|7 file_diff_histories #3*|8 merged_diff_histories #3*|9 block_diff_patches #4*|10 is_nightly 8?|11 is_debug 8?|12 immediately_ack 8?|17 enable_more_context 8?|14 parameter_hints #5*|15 lsp_contexts #6*|16 cpp_intent_info #7?|18 workspace_id 9?|19 additional_files #8*|20 control_token #9?|21 client_time 1?|22 filesync_updates #10*|23 time_since_request_start 1|24 time_at_request_send 1|25 client_timezone_offset 1?|26 lsp_suggested_items #11?|27 supports_cpt 8?|28 supports_crlf_cpt 8?|29 code_results #12*", s2.CurrentFileInfo, s2.LinterErrors, M, D, Ee, O, i2.i9, f, N, y, o2.m3, h, a.PT];
      }
    }
    var y = (0, c.QT)(n2.proto3, l, "StreamCppRequest.ControlToken", [[0, "UNSPECIFIED"], [1, "QUIET"], [2, "LOUD"], [3, "OP"]], 1);
    class w extends m {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCppResponse|1 text 9|2 suggestion_start_line 5?|3 suggestion_confidence 5?|4 done_stream 8?|5 debug_model_output 9?|6 debug_model_input 9?|7 debug_stream_time 9?|8 debug_total_time 9?|9 debug_ttft_time 9?|10 debug_server_timing 9?|11 range_to_replace #0?|12 cursor_prediction_target #1?|13 done_edit 8?|14 model_info #2?|15 begin_edit 8?|16 should_remove_leading_eol 8?|17 binding_id 9?", s2.LineRange, S, J];
      }
    }
    class S extends m {
      constructor(t3) {
        super(), this.relativePath = "", this.lineNumberOneIndexed = 0, this.expectedContent = "", this.shouldRetriggerCpp = false, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCppResponse.CursorPredictionTarget|1 relative_path 9|2 line_number_one_indexed 5|3 expected_content 9|4 should_retrigger_cpp 8"];
      }
    }
    class J extends m {
      constructor(t3) {
        super(), this.isFusedCursorPredictionModel = false, this.isMultidiffModel = false, n2.proto3.util.initPartial(t3, this);
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
        return ["StreamCppResponse.ModelInfo|1 is_fused_cursor_prediction_model 8|2 is_multidiff_model 8"];
      }
    }
    class B extends m {
      constructor(t3) {
        super(), this.model = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CppConfigRequest|1 is_nightly 8?|2 model 9|3 supports_cpt 8?"];
      }
    }
    class E extends m {
      constructor(t3) {
        super(), this.heuristics = [], this.excludeRecentlyViewedFilesPatterns = [], this.enableRvfTracking = false, this.globalDebounceDurationMillis = 0, this.clientDebounceDurationMillis = 0, this.cppUrl = "", this.useWhitespaceDiffHistory = false, this.enableFilesyncDebounceSkipping = false, this.checkFilesyncHashPercent = 0, this.geoCppBackendUrl = "", this.isFusedCursorPredictionModel = false, this.includeUnchangedLines = false, this.shouldFetchRvfText = false, this.allowsTabChunks = false, n2.proto3.util.initPartial(t3, this);
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
        return ["CppConfigResponse|1 above_radius 5?|2 below_radius 5?|4 merge_behavior #0?|5 is_on 8?|6 is_ghost_text 8?|7 should_let_user_enable_cpp_even_if_not_pro 8?|8 heuristics #1*|9 exclude_recently_viewed_files_patterns 9*|10 enable_rvf_tracking 8|11 global_debounce_duration_millis 5|12 client_debounce_duration_millis 5|13 cpp_url 9|14 use_whitespace_diff_history 8|15 import_prediction_config #2|16 enable_filesync_debounce_skipping 8|17 check_filesync_hash_percent 2|18 geo_cpp_backend_url 9|19 recently_rejected_edit_thresholds #3?|20 is_fused_cursor_prediction_model 8|21 include_unchanged_lines 8|22 should_fetch_rvf_text 8|23 max_number_of_cleared_suggestions_since_last_accept 5?|24 suggestion_hint_config #4?|25 allows_tab_chunks 8|26 tab_context_refresh_debounce_ms 5?|27 tab_context_refresh_editor_change_debounce_ms 5?", b, I, C, k, v];
      }
    }
    var I = (0, c.QT)(n2.proto3, l, "CppConfigResponse.Heuristic", [[0, "UNSPECIFIED"], [1, "LOTS_OF_ADDED_TEXT"], [2, "DUPLICATING_LINE_AFTER_SUGGESTION"], [3, "DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION"], [4, "REVERTING_USER_CHANGE"], [5, "OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED"], [6, "SUGGESTING_RECENTLY_REJECTED_EDIT"]], 1);
    class C extends m {
      constructor(t3) {
        super(), this.isDisabledByBackend = false, this.shouldTurnOnAutomatically = false, this.pythonEnabled = false, n2.proto3.util.initPartial(t3, this);
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
        return ["CppConfigResponse.ImportPredictionConfig|1 is_disabled_by_backend 8|2 should_turn_on_automatically 8|3 python_enabled 8"];
      }
    }
    class b extends m {
      constructor(t3) {
        super(), this.type = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CppConfigResponse.MergeBehavior|1 type 9|2 limit 5?|3 radius 5?"];
      }
    }
    class k extends m {
      constructor(t3) {
        super(), this.hardRejectThreshold = 0, this.softRejectThreshold = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["CppConfigResponse.RecentlyRejectedEditThresholds|1 hard_reject_threshold 5|2 soft_reject_threshold 5"];
      }
    }
    class v extends m {
      constructor(t3) {
        super(), this.importantLspExtensions = [], this.enabledForPathExtensions = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CppConfigResponse.SuggestionHintConfig|1 important_lsp_extensions 9*|2 enabled_for_path_extensions 9*"];
      }
    }
    class q extends m {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SuggestedEdit|1 edit_range #0|2 text 9", s2.SimpleRange];
      }
    }
    class R extends m {
      constructor(t3) {
        super(), this.suggestedEdits = [], this.markerTouchesGreen = false, this.currentFileContentsForLinterErrors = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetCppEditClassificationRequest|1 cpp_request #0|25 suggested_edits #1*|26 marker_touches_green 8|27 current_file_contents_for_linter_errors 9", _, q];
      }
    }
    class P extends m {
      constructor(t3) {
        super(), this.scoredEdits = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetCppEditClassificationResponse|1 scored_edits #0*|2 noop_edit #0|3 should_noop 8?|4 generation_edit #0", x];
      }
    }
    class T extends m {
      constructor(t3) {
        super(), this.tokens = [], this.tokenLogprobs = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetCppEditClassificationResponse.LogProbs|1 tokens 9*|2 token_logprobs 1*"];
      }
    }
    class x extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetCppEditClassificationResponse.ScoredEdit|1 edit #0|2 log_probs #1", q, T];
      }
    }
    class N extends m {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.isOpen = false, this.visibleRangeContent = [], this.startLineNumberOneIndexed = [], this.visibleRanges = [], n2.proto3.util.initPartial(t3, this);
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
        return ["AdditionalFile|1 relative_workspace_path 9|2 is_open 8|3 visible_range_content 9*|4 last_viewed_at 1?|5 start_line_number_one_indexed 5*|6 visible_ranges #0*", s2.LineRange];
      }
    }
    class D extends m {
      constructor(t3) {
        super(), this.fileName = "", this.diffHistory = [], this.diffHistoryTimestamps = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CppFileDiffHistory|1 file_name 9|2 diff_history 9*|3 diff_history_timestamps 1*"];
      }
    }
    class U extends m {
      constructor(t3) {
        super(), this.fileDiffHistories = [], this.additionalFiles = [], this.timeSinceRequestStart = 0, this.timeAtRequestSend = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["RefreshTabContextRequest|1 current_file #0|2 model_name 9?|3 linter_errors #1?|4 file_diff_histories #2*|5 additional_files #3*|6 client_time 1?|7 time_since_request_start 1|8 time_at_request_send 1|9 is_debug 8?|10 workspace_id 9?|11 supports_cpt 8?|12 supports_crlf_cpt 8?|13 repository_info #4", s2.CurrentFileInfo, s2.LinterErrors, D, N, a.bn];
      }
    }
    class Q extends m {
      constructor(t3) {
        super(), this.codeResults = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RefreshTabContextResponse|1 code_results #0*", a.PT];
      }
    }
    class M extends m {
      constructor(t3) {
        super(), this.contents = "", this.relativeWorkspacePath = "", this.score = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["CppContextItem|1 contents 9|2 symbol 9?|3 relative_workspace_path 9|4 score 2"];
      }
    }
    n2.proto3;
    class O extends m {
      constructor(t3) {
        super(), this.label = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CppParameterHint|1 label 9|2 documentation 9?"];
      }
    }
    class F extends m {
      constructor(t3) {
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["IRange|1 start_line_number 5|2 start_column 5|3 end_line_number 5|4 end_column 5"];
      }
    }
    class L extends m {
      constructor(t3) {
        super(), this.lineNumberOneIndexed = 0, this.columnOneIndexed = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["OneIndexedPosition|1 line_number_one_indexed 5|2 column_one_indexed 5"];
      }
    }
    class $ extends m {
      constructor(t3) {
        super(), this.selectionStartLineNumber = 0, this.selectionStartColumn = 0, this.positionLineNumber = 0, this.positionColumn = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["CursorSelection|1 selection_start_line_number 5|2 selection_start_column 5|3 position_line_number 5|4 position_column 5"];
      }
    }
    class G extends m {
      constructor(t3) {
        super(), this.text = "", this.modelIsAttachedToEditor = false, this.modelIsAttachedToTheActiveEditor = false, this.cursorSelections = [], this.modelVersionAtMetadataRetrievalTime = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ModelChange|1 text 9|2 range #0|3 final_model_hash 9?|4 model_version_immediately_after_this_change 5?|5 performance_now_timestamp 1?|7 is_undoing 8?|8 is_redoing 8?|9 model_is_attached_to_editor 8|10 model_is_attached_to_the_active_editor 8|11 cursor_selections #1*|12 model_version_at_metadata_retrieval_time 5|13 global_index 3?|14 performance_now_flush_time 1?|15 change_index 5?|16 flush_index 5?|17 global_index_v2 5?", F, $];
      }
    }
    class H extends m {
      constructor(t3) {
        super(), this.suggestionId = 0, this.suggestionText = "", this.modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel = 0, this.originalText = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CurrentlyShownCppSuggestion|1 suggestion_id 5|2 suggestion_text 9|3 model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model 5|4 range_of_suggestion_in_current_model #0?|5 original_text 9|6 binding_id 9?", F];
      }
    }
    class K extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CppAcceptEventNew|1 cpp_suggestion #0|7 point_in_time_model #1", H, ot];
      }
    }
    class V extends m {
      constructor(t3) {
        super(), this.requestId = "", this.suggestionText = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RecoverableCppData|1 request_id 9|2 suggestion_text 9|3 suggestion_range #0|4 position #1", F, L];
      }
    }
    class z extends m {
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
        return ["CppSuggestEvent|1 cpp_suggestion #0|2 point_in_time_model #1|3 recoverable_cpp_data #2", H, ot, V];
      }
    }
    class W extends m {
      constructor(t3) {
        super(), this.generationUuid = "", this.modelVersion = 0, this.source = d.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["CppTriggerEvent|1 generation_uuid 9|2 model_version 5|3 cursor_position #0|4 point_in_time_model #1|5 source #2", L, ot, d];
      }
    }
    class Y extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["FinishedCppGenerationEvent|1 point_in_time_model #0|2 recoverable_cpp_data #1", ot, V];
      }
    }
    class j extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CppRejectEventNew|1 cpp_suggestion #0|7 point_in_time_model #1", H, ot];
      }
    }
    class X extends m {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["Edit|1 text 9|2 range #0", F];
      }
    }
    class Z extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CppPartialAcceptEvent|1 cpp_suggestion #0|2 edit #1|3 point_in_time_model #2", H, X, ot];
      }
    }
    class tt extends m {
      constructor(t3) {
        super(), this.requestId = "", this.predictionId = 0, this.lineNumber = 0, this.source = et.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["CursorPrediction|1 request_id 9|2 prediction_id 5|3 line_number 5|4 source #0|5 binding_id 9?", et];
      }
    }
    var et = (0, c.QT)(n2.proto3, l, "CursorPrediction.CursorPredictionSource", [[0, "UNSPECIFIED"], [1, "ALWAYS_ON"], [2, "ACCEPT"], [3, "UNDO"], [4, "EDITOR_CHANGE"]], 1);
    class rt extends m {
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
        return ["SuggestCursorPredictionEvent|1 cursor_prediction #0|2 point_in_time_model #1", tt, ot];
      }
    }
    class nt extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["AcceptCursorPredictionEvent|1 cursor_prediction #0|2 point_in_time_model #1", tt, ot];
      }
    }
    class st extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RejectCursorPredictionEvent|1 cursor_prediction #0|2 point_in_time_model #1", tt, ot];
      }
    }
    class it extends m {
      constructor(t3) {
        super(), this.modelVersion = 0, this.relativePath = "", this.modelId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["MaybeDefinedPointInTimeModel|1 model_uuid 9?|2 model_version 5|3 relative_path 9|4 model_id 9"];
      }
    }
    class ot extends m {
      constructor(t3) {
        super(), this.modelUuid = "", this.modelVersion = 0, this.relativePath = "", this.modelId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["PointInTimeModel|1 model_uuid 9|2 model_version 5|3 relative_path 9|4 model_id 9"];
      }
    }
    class at extends m {
      constructor(t3) {
        super(), this.lineNumberOneIndexed = 0, this.columnNumberOneIndexed = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["CppManualTriggerEventNew|1 line_number_one_indexed 5|2 column_number_one_indexed 5|7 point_in_time_model #0", ot];
      }
    }
    class ut extends m {
      constructor(t3) {
        super(), this.modelUuid = "", this.relativePath = "", this.reason = ct.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["CppStoppedTrackingModelEvent|1 model_uuid 9|2 relative_path 9|3 reason #0", ct];
      }
    }
    var ct = (0, c.QT)(n2.proto3, l, "CppStoppedTrackingModelEvent.StoppedTrackingModelReason", [[0, "UNSPECIFIED"], [1, "FILE_TOO_BIG"], [2, "FILE_DISPOSED"], [3, "CHANGE_TOO_BIG"]], 1);
    class lt extends m {
      constructor(t3) {
        super(), this.addedErrors = [], this.removedErrors = [], this.errors = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CppLinterErrorEvent|1 point_in_time_model #0|2 added_errors #1*|3 removed_errors #1*|4 errors #1*", ot, s2.LinterError];
      }
    }
    class mt extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CppDebouncedCursorMovementEvent|1 point_in_time_model #0|2 cursor_position #1", ot, L];
      }
    }
    class dt extends m {
      constructor(t3) {
        super(), this.visibleRanges = [], this.editorId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CppEditorChangedEvent|1 point_in_time_model #0|2 cursor_position #1|3 visible_ranges #2*|4 editor_id 9", ot, L, F];
      }
    }
    class ft extends m {
      constructor(t3) {
        super(), this.clipboardContents = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CppCopyEvent|1 clipboard_contents 9"];
      }
    }
    class pt extends m {
      constructor(t3) {
        super(), this.title = "", this.id = "", this.arguments = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CppQuickActionCommand|1 title 9|2 id 9|3 arguments 9*"];
      }
    }
    class ht extends m {
      constructor(t3) {
        super(), this.title = "", this.edits = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CppQuickAction|1 title 9|2 edits #0*|3 is_preferred 8?|4 command #1", gt, pt];
      }
    }
    class gt extends m {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CppQuickAction.Edit|1 text 9|2 range #0", F];
      }
    }
    class At extends m {
      constructor(t3) {
        super(), this.added = [], this.removed = [], this.actions = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CppChangeQuickActionEvent|1 point_in_time_model #0|2 added #1*|3 removed #1*|4 actions #1*", ot, ht];
      }
    }
    class _t extends m {
      constructor(t3) {
        super(), this.actionIdentifier = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["CppQuickActionFireEvent|1 point_in_time_model #0|2 quick_action_command #1 action_identifier|3 quick_action_event #2 action_identifier", ot, pt, ht];
      }
    }
    class yt extends m {
      constructor(t3) {
        super(), this.requestId = "", this.eventType = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKEvent|1 point_in_time_model #0|2 request_id 9|20 prompt_bar_id 9?|3 submit_prompt #1 event_type|4 end_of_generation #2 event_type|5 interrupt_generation #3 event_type|6 accept_all #4 event_type|7 reject_all #5 event_type|8 reject_partial_diff #6 event_type|9 accept_partial_diff #7 event_type|10 after_reject #8 event_type", ot, wt, St, Jt, Bt, Et, Ct, It, bt];
      }
    }
    class wt extends m {
      constructor(t3) {
        super(), this.originalText = "", this.prompt = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKEvent.SubmitPrompt|1 original_range #0|2 original_text 9|3 prompt 9", F];
      }
    }
    class St extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKEvent.EndOfGeneration"];
      }
    }
    class Jt extends m {
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
        return ["CmdKEvent.InterruptGeneration"];
      }
    }
    class Bt extends m {
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
        return ["CmdKEvent.AcceptDiffs"];
      }
    }
    class Et extends m {
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
        return ["CmdKEvent.RejectDiffs|1 actor_request_id 9?|2 silent 8?"];
      }
    }
    class It extends m {
      constructor(t3) {
        super(), this.greenLines = [], this.redLines = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKEvent.AcceptPartialDiff|1 green_range #0|2 green_lines 9*|3 red_lines 9*", F];
      }
    }
    class Ct extends m {
      constructor(t3) {
        super(), this.greenLines = [], this.redLines = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKEvent.RejectPartialDiff|1 green_range #0|2 green_lines 9*|3 red_lines 9*", F];
      }
    }
    class bt extends m {
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
        return ["CmdKEvent.AfterReject"];
      }
    }
    class kt extends m {
      constructor(t3) {
        super(), this.requestId = "", this.eventType = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ChatEvent|1 request_id 9|2 submit_prompt #0 event_type|3 end_of_any_generation #1 event_type|4 end_of_uninterrupted_generation #2 event_type", vt, qt, Rt];
      }
    }
    class vt extends m {
      constructor(t3) {
        super(), this.prompt = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ChatEvent.SubmitPrompt|1 prompt 9"];
      }
    }
    class qt extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ChatEvent.EndOfAnyGeneration"];
      }
    }
    class Rt extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ChatEvent.EndOfUninterruptedGeneration"];
      }
    }
    class Pt extends m {
      constructor(t3) {
        super(), this.requestId = "", this.eventType = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotLinterEvent|1 request_id 9|2 point_in_time_model #0|3 lint_generated #1 event_type|4 lint_dismissed #2 event_type|5 user_feedback #3 event_type|6 viewed_report #4 event_type|7 unviewed_report #5 event_type|8 started #6 event_type|9 not_shown_because_heuristic #7 event_type", ot, xt, Nt, Dt, Ut, Qt, Tt, Mt];
      }
    }
    class Tt extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotLinterEvent.Started"];
      }
    }
    class xt extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotLinterEvent.LintGenerated|1 bug_report #0", u.Fl];
      }
    }
    class Nt extends m {
      constructor(t3) {
        super(), this.bugReportId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotLinterEvent.LintDismissed|1 bug_report_id 9"];
      }
    }
    class Dt extends m {
      constructor(t3) {
        super(), this.bugReportId = "", this.feedback = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dt, t3, e3);
      }
      static $() {
        return ["BugBotLinterEvent.UserFeedback|1 bug_report_id 9|2 feedback 9"];
      }
    }
    class Ut extends m {
      constructor(t3) {
        super(), this.bugReportId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotLinterEvent.ViewedReport|1 bug_report_id 9"];
      }
    }
    class Qt extends m {
      constructor(t3) {
        super(), this.bugReportId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qt, t3, e3);
      }
      static $() {
        return ["BugBotLinterEvent.UnviewedReport|1 bug_report_id 9"];
      }
    }
    class Mt extends m {
      constructor(t3) {
        super(), this.heuristic = Ot.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotLinterEvent.NotShownBecauseHeuristic|1 heuristic #0", Ot];
      }
    }
    var Ot = (0, c.QT)(n2.proto3, l, "BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic", [[0, "UNSPECIFIED"], [1, "LINT_OVERLAP"], [2, "LINES_MISMATCH"]], 1);
    class Ft extends m {
      constructor(t3) {
        super(), this.requestId = "", this.eventType = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent|1 request_id 9|2 started #0 event_type|3 reports_generated #1 event_type|4 pressed_fix_in_composer #2 event_type|5 pressed_open_in_editor #3 event_type|6 viewed_report #4 event_type|7 user_feedback #5 event_type|8 pressed_add_to_chat #6 event_type|9 background_interval_started #7 event_type|10 background_interval_ended #8 event_type|11 background_interval_interrupted #9 event_type|12 background_interval_errored #10 event_type", $t, Gt, Ht, Vt, zt, Yt, Kt, jt, Xt, Zt, te];
      }
    }
    var Lt = (0, c.QT)(n2.proto3, l, "BugBotEvent.BackgroundIntervalInterruptedReason", [[0, "UNSPECIFIED"], [1, "DISABLED"], [2, "TOO_RECENT"], [3, "UNVIEWED_BUG_REPORTS"], [4, "NOT_IN_GIT_REPO"], [5, "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH"], [6, "NO_GIT_USER"], [7, "NO_LAST_COMMIT"], [8, "LAST_COMMIT_NOT_MADE_BY_USER"], [9, "LAST_COMMIT_TOO_OLD"], [10, "DIFF_TOO_LONG"], [11, "DIFF_TOO_SHORT"], [12, "TELEMETRY_UNHEALTHY"]], 1);
    class $t extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.Started"];
      }
    }
    class Gt extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.ReportsGenerated|1 bug_reports #0", u.gl];
      }
    }
    class Ht extends m {
      constructor(t3) {
        super(), this.bugReportId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ht().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ht().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ht().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ht, t3, e3);
      }
      static $() {
        return ["BugBotEvent.PressedFixInComposer|1 bug_report_id 9"];
      }
    }
    class Kt extends m {
      constructor(t3) {
        super(), this.bugReportId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.PressedAddToChat|1 bug_report_id 9"];
      }
    }
    class Vt extends m {
      constructor(t3) {
        super(), this.bugReportId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.PressedOpenInEditor|1 bug_location #0|2 bug_report_id 9", u.Cr];
      }
    }
    class zt extends m {
      constructor(t3) {
        super(), this.secondsViewed = 0, this.reportViews = [], n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.ViewedReport|1 seconds_viewed 5|2 report_views #0*", Wt];
      }
    }
    class Wt extends m {
      constructor(t3) {
        super(), this.bugReportId = "", this.viewPercentage = 0, this.textPercentage = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.ViewedReport.ReportView|1 bug_report_id 9|2 view_percentage 1|3 text_percentage 1"];
      }
    }
    class Yt extends m {
      constructor(t3) {
        super(), this.bugReportId = "", this.feedback = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.UserFeedback|1 bug_report_id 9|2 feedback 9"];
      }
    }
    class jt extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.BackgroundIntervalStarted"];
      }
    }
    class Xt extends m {
      constructor(t3) {
        super(), this.success = false, n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.BackgroundIntervalEnded|1 success 8"];
      }
    }
    class Zt extends m {
      constructor(t3) {
        super(), this.reason = Lt.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.BackgroundIntervalInterrupted|1 reason #0", Lt];
      }
    }
    class te extends m {
      constructor(t3) {
        super(), this.errorMessage = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BugBotEvent.BackgroundIntervalErrored|1 error_message 9"];
      }
    }
    class ee extends m {
      constructor(t3) {
        super(), this.requestType = re.UNSPECIFIED, this.requestId = "", this.source = ne.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["AiRequestEvent|1 request_type #0|2 request_id 9|3 source #1", re, ne];
      }
    }
    var re = (0, c.QT)(n2.proto3, l, "AiRequestEvent.RequestType", [[0, "UNSPECIFIED"], [1, "START"], [2, "END"]], 1), ne = (0, c.QT)(n2.proto3, l, "AiRequestEvent.Source", [[0, "UNSPECIFIED"], [1, "CHAT"], [2, "CMDK"], [3, "APPLY"], [4, "COMPOSER"], [5, "TASK"], [6, "CODE_INTERPRETER"], [7, "INTERPRETER_EXECUTION"], [8, "BUGBOT"]], 1);
    class se extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ModelOpenedEvent|1 point_in_time_model #0|2 maybe_defined_point_in_time_model #1", ot, it];
      }
    }
    class ie extends m {
      constructor(t3) {
        super(), this.files = [], n2.proto3.util.initPartial(t3, this);
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
        return ["BackgroundFilesEvent|2 files #0*", oe];
      }
    }
    class oe extends m {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.contents = "", this.hash = "", this.fullPath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BackgroundFilesEvent.BackgroundFile|1 relative_workspace_path 9|2 contents 9|3 hash 9|4 full_path 9"];
      }
    }
    class ae extends m {
      constructor(t3) {
        super(), this.visibleRanges = [], this.editorId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ScrollEvent|1 point_in_time_model #0|2 visible_ranges #1*|3 editor_id 9", ot, F];
      }
    }
    class ue extends m {
      constructor(t3) {
        super(), this.editorId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["EditorCloseEvent|1 editor_id 9"];
      }
    }
    class ce extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["TabCloseEvent|1 point_in_time_model #0", it];
      }
    }
    class le extends m {
      constructor(t3) {
        super(), this.fullUri = "", this.modelId = "", this.uriScheme = "", this.isTooLargeForSyncing = false, this.isTooLargeForTokenization = false, this.isTooLargeForHeapOperation = false, n2.proto3.util.initPartial(t3, this);
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
        return ["ModelAddedEvent|1 point_in_time_model #0|2 full_uri 9|3 model_id 9|4 uri_scheme 9|5 is_too_large_for_syncing 8|6 is_too_large_for_tokenization 8|7 is_too_large_for_heap_operation 8", it];
      }
    }
    class me extends m {
      constructor(t3) {
        super(), this.item = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["AnythingQuickAccessItem|1 resource #0 item|2 separator 9 item|3 section 9 item", de];
      }
    }
    class de extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["AnythingQuickAccessItem.Resource|1 model #0?|2 range #1?|3 uri 9?", ot, F];
      }
    }
    class fe extends m {
      constructor(t3) {
        super(), this.query = "", this.items = [], this.selectedIndices = [], n2.proto3.util.initPartial(t3, this);
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
        return ["AnythingQuickAccessSelectionEvent|1 query 9|2 items #0*|3 selected_indices 5*", me];
      }
    }
    class pe extends m {
      constructor(t3) {
        super(), this.suggestions = [], n2.proto3.util.initPartial(t3, this);
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
        return ["LspSuggestionEvent|1 suggestions 9*|2 request_id 9?|3 editor_id 9?|4 point_in_time_model #0", ot];
      }
    }
    class he extends m {
      constructor(t3) {
        super(), this.event = { case: void 0 }, this.performanceNowTimestamp = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["CppSessionEvent|2 accept_event #0 event|3 reject_event #1 event|4 manual_trigger_event #2 event|6 stopped_tracking_model_event #3 event|7 suggest_event #4 event|8 linter_error_event #5 event|9 debounced_cursor_movement_event #6 event|10 editor_changed_event #7 event|11 copy_event #8 event|13 quick_action_event #9 event|14 quick_action_fire_event #10 event|15 model_opened_event #11 event|17 cmd_k_event #12 event|18 chat_event #13 event|19 ai_event #14 event|21 scroll_event #15 event|22 editor_close_event #16 event|23 tab_close_event #17 event|33 model_added_event #18 event|26 partial_accept_event #19 event|27 accept_cursor_prediction_event #20 event|28 reject_cursor_prediction_event #21 event|29 suggest_cursor_prediction_event #22 event|30 cpp_trigger_event #23 event|31 finished_cpp_generation_event #24 event|32 bug_bot_event #25 event|34 bug_bot_linter_event #26 event|35 anything_quick_access_selection_event #27 event|36 lsp_suggestion_event #28 event|37 ntp_event #29 event|38 repo_event #30 event|39 git_event #31 event|40 tool_call_event #32 event|46 before_ai_edit_event #33 event|47 search_event #34 event|48 terminal_event #35 event|49 worktree_event #36 event|50 review_changes_opened_event #37 event|51 browser_event #38 event|16 background_files_event #39 event|5 performance_now_timestamp 1|25 performance_time_origin 1?|41 global_index 3?|42 performance_now_flush_time 1?|43 event_index 5?|44 flush_index 5?|45 global_index_v2 5?", K, j, at, ut, z, lt, mt, dt, ft, At, _t, se, yt, kt, ee, ae, ue, ce, le, Z, nt, st, rt, W, Y, Ft, Pt, fe, pe, $e, Ge, Ke, Ze, ge, rr, Pe, ze, Xe, Ue, ie];
      }
    }
    class ge extends m {
      constructor(t3) {
        super(), this.model = { case: void 0 }, this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BeforeAiEditEvent|1 point_in_time_model #0 model|5 relative_workspace_path 9 model|2 tool_call_id 9|3 request_id 9?|4 tool_name 9?", ot];
      }
    }
    class Ae extends m {
      constructor(t3) {
        super(), this.changes = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
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
        return ["CppAppendRequest|1 changes 12"];
      }
    }
    class _e extends m {
      constructor(t3) {
        super(), this.success = false, n2.proto3.util.initPartial(t3, this);
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
        return ["CppAppendResponse|1 success 8"];
      }
    }
    class ye extends m {
      constructor(t3) {
        super(), this.sessionId = "", this.modelUuid = "", this.relativePath = "", this.uri = "", this.clientVersion = "", this.changes = [], this.sessionEvents = [], this.modelChangesMayBeOutOfOrder = false, this.privacyModeStatus = we.UNSPECIFIED, this.events = [], this.timeOrigin = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["EditHistoryAppendChangesRequest|1 session_id 9|2 model_uuid 9|3 starting_model_value 9?|10 starting_model_version 5?|5 relative_path 9|14 uri 9|6 client_version 9|8 client_commit 9?|4 changes #0*|9 session_events #1*|11 model_changes_may_be_out_of_order 8|12 privacy_mode_status #2|7 events #3*|13 time_origin 2", G, he, we, be];
      }
    }
    var we = (0, c.QT)(n2.proto3, l, "EditHistoryAppendChangesRequest.PrivacyModeStatus", [[0, "UNSPECIFIED"], [1, "PRIVACY_ENABLED"], [2, "IMPLICIT_NO_PRIVACY"], [3, "EXPLICIT_NO_PRIVACY"]], 1);
    class Se extends m {
      constructor(t3) {
        super(), this.success = false, n2.proto3.util.initPartial(t3, this);
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
        return ["EditHistoryAppendChangesResponse|1 success 8"];
      }
    }
    class Je extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CppEditHistoryStatusRequest"];
      }
    }
    class Be extends m {
      constructor(t3) {
        super(), this.on = false, this.onlyIfExplicit = false, n2.proto3.util.initPartial(t3, this);
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
        return ["CppEditHistoryStatusResponse|1 on 8|2 only_if_explicit 8"];
      }
    }
    class Ee extends m {
      constructor(t3) {
        super(), this.changes = [], this.relativePath = "", this.modelUuid = "", this.startFromChangeIndex = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["BlockDiffPatch|1 start_model_window #0|3 changes #1*|4 relative_path 9|7 model_uuid 9|5 start_from_change_index 5", Ce, Ie];
      }
    }
    class Ie extends m {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BlockDiffPatch.Change|1 text 9|2 range #0", F];
      }
    }
    class Ce extends m {
      constructor(t3) {
        super(), this.lines = [], this.startLineNumber = 0, this.endLineNumber = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["BlockDiffPatch.ModelWindow|1 lines 9*|2 start_line_number 5|3 end_line_number 5"];
      }
    }
    class be extends m {
      constructor(t3) {
        super(), this.event = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["CppHistoryAppendEvent|1 model_change #0 event|2 accept_event #1 event|3 reject_event #2 event|4 manual_trigger_event #3 event|10 final_model_hash 9?", G, ve, qe, ke];
      }
    }
    class ke extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CppManualTriggerEvent|2 position #0", s2.CursorPosition];
      }
    }
    class ve extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CppAcceptEvent|1 cpp_suggestion #0", Re];
      }
    }
    class qe extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CppRejectEvent|1 cpp_suggestion #0", Re];
      }
    }
    class Re extends m {
      constructor(t3) {
        super(), this.suggestionText = "", this.seen = false, n2.proto3.util.initPartial(t3, this);
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
        return ["CppSuggestion|1 suggestion_text 9|2 range #0|5 seen 8|6 editor_selection_before_peek #1|7 binding_id 9?", F, s2.SelectionWithOrientation];
      }
    }
    n2.proto3;
    class Pe extends m {
      constructor(t3) {
        super(), this.uri = "", this.event = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["TerminalEvent|1 uri 9|2 create #0 event|3 exit #1 event|4 command_start #2 event|5 command_finish #3 event", Te, xe, Ne, De];
      }
    }
    class Te extends m {
      constructor(t3) {
        super(), this.isRemote = false, n2.proto3.util.initPartial(t3, this);
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
        return ["TerminalEvent.Create|1 is_remote 8"];
      }
    }
    class xe extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["TerminalEvent.Exit|1 exit_code 5?"];
      }
    }
    class Ne extends m {
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
        return ["TerminalEvent.CommandStart|1 point_in_time_model #0|2 cwd 9?", ot];
      }
    }
    class De extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["TerminalEvent.CommandFinish|1 point_in_time_model #0|2 exit_code 5?", ot];
      }
    }
    class Ue extends m {
      constructor(t3) {
        super(), this.viewId = "", this.event = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["BrowserEvent|1 view_id 9|2 tab_created #0 event|3 tab_closed #1 event|4 navigation #2 event|5 tool_action #3 event", Qe, Me, Oe, Fe];
      }
    }
    class Qe extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BrowserEvent.TabCreated"];
      }
    }
    class Me extends m {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BrowserEvent.TabClosed"];
      }
    }
    class Oe extends m {
      constructor(t3) {
        super(), this.url = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BrowserEvent.Navigation|1 url 9|2 title 9?"];
      }
    }
    class Fe extends m {
      constructor(t3) {
        super(), this.toolName = "", this.argsJson = "", this.source = Le.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["BrowserEvent.ToolAction|1 tool_name 9|2 args_json 9|3 success 8?|4 post_snapshot_yaml 9?|5 post_url 9?|6 post_title 9?|7 source #0", Le];
      }
    }
    var Le = (0, c.QT)(n2.proto3, l, "BrowserEvent.ToolAction.Source", [[0, "UNSPECIFIED"], [1, "MCP_TOOL"], [2, "MANUAL_USER"]], 1);
    class $e extends m {
      constructor(t3) {
        super(), this.originateTimestamp = 0, this.receiveTimestamp = 0, this.transmitTimestamp = 0, this.destinationTimestamp = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["NtpEvent|1 originate_timestamp 1|2 receive_timestamp 1|3 transmit_timestamp 1|4 destination_timestamp 1"];
      }
    }
    class Ge extends m {
      constructor(t3) {
        super(), this.repoOwner = "", this.repoName = "", this.eventType = He.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["RepoEvent|1 repo_owner 9|2 repo_name 9|3 event_type #0", He];
      }
    }
    var He = (0, c.QT)(n2.proto3, l, "RepoEvent.Type", [[0, "UNSPECIFIED"], [1, "SYNCED"], [2, "LOADING"], [3, "INDEXING_SETUP"], [4, "INDEXING_INIT_FROM_SIMILAR_CODEBASE"], [5, "PAUSED"], [6, "INDEXING"], [7, "ERROR"], [8, "NOT_AUTO_INDEXING"], [9, "NOT_INDEXED"]], 1);
    class Ke extends m {
      constructor(t3) {
        super(), this.operationType = Ve.UNSPECIFIED, this.repositoryPath = "", this.operationSuccess = false, n2.proto3.util.initPartial(t3, this);
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
        return ["GitEvent|1 operation_type #0|2 repository_path 9|3 operation_success 8|4 branch_name 9?|5 error_message 9?|6 is_default_branch 8?|7 default_branch_name 9?|8 commit_hash 9?|9 previous_commit_hash 9?|10 remote_url 9?", Ve];
      }
    }
    var Ve = (0, c.QT)(n2.proto3, l, "GitEvent.OperationType", [[0, "UNSPECIFIED"], [1, "COMMIT"], [2, "CHECKOUT"], [3, "PULL"], [4, "FETCH"], [5, "MERGE"], [6, "REBASE"], [7, "STASH"], [8, "BRANCH"], [9, "TAG"]], 1);
    class ze extends m {
      constructor(t3) {
        super(), this.eventType = We.UNSPECIFIED, this.allWorktreePaths = [], this.worktreeComposerMappings = [], this.backgroundAgentComposerMappings = [], n2.proto3.util.initPartial(t3, this);
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
        return ["WorktreeEvent|1 event_type #0|2 model_name 9?|3 best_of_n_group_id 9?|4 all_worktree_paths 9*|5 applied_worktree_path 9?|6 worktree_composer_mappings #1*|7 background_agent_composer_mappings #2*|8 applied_composer_id 9?|9 viewed_composer_id 9?", We, Ye, je];
      }
    }
    var We = (0, c.QT)(n2.proto3, l, "WorktreeEvent.EventType", [[0, "UNSPECIFIED"], [1, "APPLY_TO_MAIN"], [2, "UNDO_APPLY"], [3, "VIEW_SUBCOMPOSER"]], 1);
    class Ye extends m {
      constructor(t3) {
        super(), this.worktreePath = "", this.composerId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["WorktreeEvent.WorktreeComposerMapping|1 worktree_path 9|2 composer_id 9"];
      }
    }
    class je extends m {
      constructor(t3) {
        super(), this.bcId = "", this.composerId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["WorktreeEvent.BackgroundAgentComposerMapping|1 bc_id 9|2 composer_id 9"];
      }
    }
    class Xe extends m {
      constructor(t3) {
        super(), this.composerId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReviewChangesOpenedEvent|1 composer_id 9|2 best_of_n_group_id 9?"];
      }
    }
    class Ze extends m {
      constructor(t3) {
        super(), this.toolCallId = "", this.requestId = "", this.toolName = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ToolCallEvent|1 tool_call_id 9|2 request_id 9|3 tool_name 9"];
      }
    }
    class tr extends m {
      constructor(t3) {
        super(), this.lineNumber = 0, this.column = 0, this.matchText = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SearchMatch|1 line_number 5|2 column 5|3 match_text 9"];
      }
    }
    class er extends m {
      constructor(t3) {
        super(), this.filePath = "", this.matchCount = 0, this.matches = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SearchResultFile|1 file_path 9|2 match_count 5|3 matches #0*", tr];
      }
    }
    class rr extends m {
      constructor(t3) {
        super(), this.query = "", this.resultCount = 0, this.fileCount = 0, this.isRegex = false, this.isCaseSensitive = false, this.isWholeWord = false, this.durationMs = 0, this.results = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SearchEvent|1 query 9|2 result_count 5|3 file_count 5|4 is_regex 8|5 is_case_sensitive 8|6 is_whole_word 8|7 files_to_include 9?|8 files_to_exclude 9?|9 duration_ms 5|10 results #0*", er];
      }
    }
  }