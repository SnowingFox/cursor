// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 66938 range:10385275..10482604
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66938: (e, t, r) => {
    "use strict";
    r.d(t, { $FK: () => b, $pi: () => _, DLS: () => St, DOp: () => w, Deb: () => bt, Ijy: () => U, JEF: () => Et, Tob: () => yt, Zk9: () => vt, d0d: () => wt, f14: () => B, feo: () => y, jSP: () => At, lIu: () => D, mv: () => F, nWu: () => P, qcI: () => m, r5_: () => N, rgN: () => O, vfF: () => g, z8t: () => E });
    var n = r(36038), s = r(67918), o = r(83341), i = r(66637), a = r(81563), c = r(21934), l = r(8592);
    const u = "aiserver.v1.";
    class d extends l.HL {
      static get runtime() {
        return (0, l.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return u;
      }
    }
    n.proto3;
    var p = (0, l.QT)(n.proto3, u, "CppSource", [[0, "UNSPECIFIED"], [1, "LINE_CHANGE"], [2, "TYPING"], [3, "OPTION_HOLD"], [4, "LINTER_ERRORS"], [5, "PARAMETER_HINTS"], [6, "CURSOR_PREDICTION"], [7, "MANUAL_TRIGGER"], [8, "EDITOR_CHANGE"], [9, "LSP_SUGGESTIONS"]], 1);
    class m extends d {
      constructor(e2) {
        super(), this.source = "", n.proto3.util.initPartial(e2, this);
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
        return ["CppIntentInfo|1 source 9"];
      }
    }
    class h extends d {
      constructor(e2) {
        super(), this.label = "", n.proto3.util.initPartial(e2, this);
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
        return ["LspSuggestion|1 label 9"];
      }
    }
    class f extends d {
      constructor(e2) {
        super(), this.suggestions = [], n.proto3.util.initPartial(e2, this);
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
        return ["LspSuggestedItems|1 suggestions #0*", h];
      }
    }
    class g extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ShouldTurnOnCppOnboardingRequest"];
      }
    }
    class y extends d {
      constructor(e2) {
        super(), this.shouldTurnOnCppOnboarding = false, n.proto3.util.initPartial(e2, this);
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
        return ["ShouldTurnOnCppOnboardingResponse|1 should_turn_on_cpp_onboarding 8"];
      }
    }
    class w extends d {
      constructor(e2) {
        super(), this.diffHistory = [], this.contextItems = [], this.diffHistoryKeys = [], this.fileDiffHistories = [], this.mergedDiffHistories = [], this.blockDiffPatches = [], this.parameterHints = [], this.lspContexts = [], this.additionalFiles = [], this.filesyncUpdates = [], this.timeSinceRequestStart = 0, this.timeAtRequestSend = 0, this.codeResults = [], n.proto3.util.initPartial(e2, this);
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
        return ["StreamCppRequest|1 current_file #0|2 diff_history 9*|3 model_name 9?|4 linter_errors #1?|13 context_items #2*|5 diff_history_keys 9*|6 give_debug_output 8?|7 file_diff_histories #3*|8 merged_diff_histories #3*|9 block_diff_patches #4*|10 is_nightly 8?|11 is_debug 8?|12 immediately_ack 8?|17 enable_more_context 8?|14 parameter_hints #5*|15 lsp_contexts #6*|16 cpp_intent_info #7?|18 workspace_id 9?|19 additional_files #8*|20 control_token #9?|21 client_time 1?|22 filesync_updates #10*|23 time_since_request_start 1|24 time_at_request_send 1|25 client_timezone_offset 1?|26 lsp_suggested_items #11?|27 supports_cpt 8?|28 supports_crlf_cpt 8?|29 code_results #12*", s.CurrentFileInfo, s.LinterErrors, F, D, Et, U, o.i9, m, q, v, i.m3, f, a.PT];
      }
    }
    var v = (0, l.QT)(n.proto3, u, "StreamCppRequest.ControlToken", [[0, "UNSPECIFIED"], [1, "QUIET"], [2, "LOUD"], [3, "OP"]], 1);
    class _ extends d {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["StreamCppResponse|1 text 9|2 suggestion_start_line 5?|3 suggestion_confidence 5?|4 done_stream 8?|5 debug_model_output 9?|6 debug_model_input 9?|7 debug_stream_time 9?|8 debug_total_time 9?|9 debug_ttft_time 9?|10 debug_server_timing 9?|11 range_to_replace #0?|12 cursor_prediction_target #1?|13 done_edit 8?|14 model_info #2?|15 begin_edit 8?|16 should_remove_leading_eol 8?|17 binding_id 9?", s.LineRange, A, S];
      }
    }
    class A extends d {
      constructor(e2) {
        super(), this.relativePath = "", this.lineNumberOneIndexed = 0, this.expectedContent = "", this.shouldRetriggerCpp = false, n.proto3.util.initPartial(e2, this);
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
        return ["StreamCppResponse.CursorPredictionTarget|1 relative_path 9|2 line_number_one_indexed 5|3 expected_content 9|4 should_retrigger_cpp 8"];
      }
    }
    class S extends d {
      constructor(e2) {
        super(), this.isFusedCursorPredictionModel = false, this.isMultidiffModel = false, n.proto3.util.initPartial(e2, this);
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
        return ["StreamCppResponse.ModelInfo|1 is_fused_cursor_prediction_model 8|2 is_multidiff_model 8"];
      }
    }
    class b extends d {
      constructor(e2) {
        super(), this.model = "", n.proto3.util.initPartial(e2, this);
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
        return ["CppConfigRequest|1 is_nightly 8?|2 model 9|3 supports_cpt 8?"];
      }
    }
    class E extends d {
      constructor(e2) {
        super(), this.heuristics = [], this.excludeRecentlyViewedFilesPatterns = [], this.enableRvfTracking = false, this.globalDebounceDurationMillis = 0, this.clientDebounceDurationMillis = 0, this.cppUrl = "", this.useWhitespaceDiffHistory = false, this.enableFilesyncDebounceSkipping = false, this.checkFilesyncHashPercent = 0, this.geoCppBackendUrl = "", this.isFusedCursorPredictionModel = false, this.includeUnchangedLines = false, this.shouldFetchRvfText = false, this.allowsTabChunks = false, n.proto3.util.initPartial(e2, this);
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
        return ["CppConfigResponse|1 above_radius 5?|2 below_radius 5?|4 merge_behavior #0?|5 is_on 8?|6 is_ghost_text 8?|7 should_let_user_enable_cpp_even_if_not_pro 8?|8 heuristics #1*|9 exclude_recently_viewed_files_patterns 9*|10 enable_rvf_tracking 8|11 global_debounce_duration_millis 5|12 client_debounce_duration_millis 5|13 cpp_url 9|14 use_whitespace_diff_history 8|15 import_prediction_config #2|16 enable_filesync_debounce_skipping 8|17 check_filesync_hash_percent 2|18 geo_cpp_backend_url 9|19 recently_rejected_edit_thresholds #3?|20 is_fused_cursor_prediction_model 8|21 include_unchanged_lines 8|22 should_fetch_rvf_text 8|23 max_number_of_cleared_suggestions_since_last_accept 5?|24 suggestion_hint_config #4?|25 allows_tab_chunks 8|26 tab_context_refresh_debounce_ms 5?|27 tab_context_refresh_editor_change_debounce_ms 5?", k, I, C, x, T];
      }
    }
    var I = (0, l.QT)(n.proto3, u, "CppConfigResponse.Heuristic", [[0, "UNSPECIFIED"], [1, "LOTS_OF_ADDED_TEXT"], [2, "DUPLICATING_LINE_AFTER_SUGGESTION"], [3, "DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION"], [4, "REVERTING_USER_CHANGE"], [5, "OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED"], [6, "SUGGESTING_RECENTLY_REJECTED_EDIT"]], 1);
    class C extends d {
      constructor(e2) {
        super(), this.isDisabledByBackend = false, this.shouldTurnOnAutomatically = false, this.pythonEnabled = false, n.proto3.util.initPartial(e2, this);
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
        return ["CppConfigResponse.ImportPredictionConfig|1 is_disabled_by_backend 8|2 should_turn_on_automatically 8|3 python_enabled 8"];
      }
    }
    class k extends d {
      constructor(e2) {
        super(), this.type = "", n.proto3.util.initPartial(e2, this);
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
        return ["CppConfigResponse.MergeBehavior|1 type 9|2 limit 5?|3 radius 5?"];
      }
    }
    class x extends d {
      constructor(e2) {
        super(), this.hardRejectThreshold = 0, this.softRejectThreshold = 0, n.proto3.util.initPartial(e2, this);
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
        return ["CppConfigResponse.RecentlyRejectedEditThresholds|1 hard_reject_threshold 5|2 soft_reject_threshold 5"];
      }
    }
    class T extends d {
      constructor(e2) {
        super(), this.importantLspExtensions = [], this.enabledForPathExtensions = [], n.proto3.util.initPartial(e2, this);
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
        return ["CppConfigResponse.SuggestionHintConfig|1 important_lsp_extensions 9*|2 enabled_for_path_extensions 9*"];
      }
    }
    class R extends d {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["SuggestedEdit|1 edit_range #0|2 text 9", s.SimpleRange];
      }
    }
    class B extends d {
      constructor(e2) {
        super(), this.suggestedEdits = [], this.markerTouchesGreen = false, this.currentFileContentsForLinterErrors = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetCppEditClassificationRequest|1 cpp_request #0|25 suggested_edits #1*|26 marker_touches_green 8|27 current_file_contents_for_linter_errors 9", w, R];
      }
    }
    class P extends d {
      constructor(e2) {
        super(), this.scoredEdits = [], n.proto3.util.initPartial(e2, this);
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
        return ["GetCppEditClassificationResponse|1 scored_edits #0*|2 noop_edit #0|3 should_noop 8?|4 generation_edit #0", M];
      }
    }
    class J extends d {
      constructor(e2) {
        super(), this.tokens = [], this.tokenLogprobs = [], n.proto3.util.initPartial(e2, this);
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
        return ["GetCppEditClassificationResponse.LogProbs|1 tokens 9*|2 token_logprobs 1*"];
      }
    }
    class M extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetCppEditClassificationResponse.ScoredEdit|1 edit #0|2 log_probs #1", R, J];
      }
    }
    class q extends d {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.isOpen = false, this.visibleRangeContent = [], this.startLineNumberOneIndexed = [], this.visibleRanges = [], n.proto3.util.initPartial(e2, this);
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
        return ["AdditionalFile|1 relative_workspace_path 9|2 is_open 8|3 visible_range_content 9*|4 last_viewed_at 1?|5 start_line_number_one_indexed 5*|6 visible_ranges #0*", s.LineRange];
      }
    }
    class D extends d {
      constructor(e2) {
        super(), this.fileName = "", this.diffHistory = [], this.diffHistoryTimestamps = [], n.proto3.util.initPartial(e2, this);
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
        return ["CppFileDiffHistory|1 file_name 9|2 diff_history 9*|3 diff_history_timestamps 1*"];
      }
    }
    class O extends d {
      constructor(e2) {
        super(), this.fileDiffHistories = [], this.additionalFiles = [], this.timeSinceRequestStart = 0, this.timeAtRequestSend = 0, n.proto3.util.initPartial(e2, this);
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
        return ["RefreshTabContextRequest|1 current_file #0|2 model_name 9?|3 linter_errors #1?|4 file_diff_histories #2*|5 additional_files #3*|6 client_time 1?|7 time_since_request_start 1|8 time_at_request_send 1|9 is_debug 8?|10 workspace_id 9?|11 supports_cpt 8?|12 supports_crlf_cpt 8?|13 repository_info #4", s.CurrentFileInfo, s.LinterErrors, D, q, a.bn];
      }
    }
    class N extends d {
      constructor(e2) {
        super(), this.codeResults = [], n.proto3.util.initPartial(e2, this);
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
        return ["RefreshTabContextResponse|1 code_results #0*", a.PT];
      }
    }
    class F extends d {
      constructor(e2) {
        super(), this.contents = "", this.relativeWorkspacePath = "", this.score = 0, n.proto3.util.initPartial(e2, this);
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
        return ["CppContextItem|1 contents 9|2 symbol 9?|3 relative_workspace_path 9|4 score 2"];
      }
    }
    n.proto3;
    class U extends d {
      constructor(e2) {
        super(), this.label = "", n.proto3.util.initPartial(e2, this);
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
        return ["CppParameterHint|1 label 9|2 documentation 9?"];
      }
    }
    class L extends d {
      constructor(e2) {
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, n.proto3.util.initPartial(e2, this);
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
        return ["IRange|1 start_line_number 5|2 start_column 5|3 end_line_number 5|4 end_column 5"];
      }
    }
    class $ extends d {
      constructor(e2) {
        super(), this.lineNumberOneIndexed = 0, this.columnOneIndexed = 0, n.proto3.util.initPartial(e2, this);
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
        return ["OneIndexedPosition|1 line_number_one_indexed 5|2 column_one_indexed 5"];
      }
    }
    class Q extends d {
      constructor(e2) {
        super(), this.selectionStartLineNumber = 0, this.selectionStartColumn = 0, this.positionLineNumber = 0, this.positionColumn = 0, n.proto3.util.initPartial(e2, this);
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
        return ["CursorSelection|1 selection_start_line_number 5|2 selection_start_column 5|3 position_line_number 5|4 position_column 5"];
      }
    }
    class j extends d {
      constructor(e2) {
        super(), this.text = "", this.modelIsAttachedToEditor = false, this.modelIsAttachedToTheActiveEditor = false, this.cursorSelections = [], this.modelVersionAtMetadataRetrievalTime = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ModelChange|1 text 9|2 range #0|3 final_model_hash 9?|4 model_version_immediately_after_this_change 5?|5 performance_now_timestamp 1?|7 is_undoing 8?|8 is_redoing 8?|9 model_is_attached_to_editor 8|10 model_is_attached_to_the_active_editor 8|11 cursor_selections #1*|12 model_version_at_metadata_retrieval_time 5|13 global_index 3?|14 performance_now_flush_time 1?|15 change_index 5?|16 flush_index 5?|17 global_index_v2 5?", L, Q];
      }
    }
    class G extends d {
      constructor(e2) {
        super(), this.suggestionId = 0, this.suggestionText = "", this.modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel = 0, this.originalText = "", n.proto3.util.initPartial(e2, this);
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
        return ["CurrentlyShownCppSuggestion|1 suggestion_id 5|2 suggestion_text 9|3 model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model 5|4 range_of_suggestion_in_current_model #0?|5 original_text 9|6 binding_id 9?", L];
      }
    }
    class H extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["CppAcceptEventNew|1 cpp_suggestion #0|7 point_in_time_model #1", G, ie];
      }
    }
    class z extends d {
      constructor(e2) {
        super(), this.requestId = "", this.suggestionText = "", n.proto3.util.initPartial(e2, this);
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
        return ["RecoverableCppData|1 request_id 9|2 suggestion_text 9|3 suggestion_range #0|4 position #1", L, $];
      }
    }
    class W extends d {
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
        return ["CppSuggestEvent|1 cpp_suggestion #0|2 point_in_time_model #1|3 recoverable_cpp_data #2", G, ie, z];
      }
    }
    class V extends d {
      constructor(e2) {
        super(), this.generationUuid = "", this.modelVersion = 0, this.source = p.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["CppTriggerEvent|1 generation_uuid 9|2 model_version 5|3 cursor_position #0|4 point_in_time_model #1|5 source #2", $, ie, p];
      }
    }
    class K extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["FinishedCppGenerationEvent|1 point_in_time_model #0|2 recoverable_cpp_data #1", ie, z];
      }
    }
    class Y extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["CppRejectEventNew|1 cpp_suggestion #0|7 point_in_time_model #1", G, ie];
      }
    }
    class Z extends d {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["Edit|1 text 9|2 range #0", L];
      }
    }
    class X extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["CppPartialAcceptEvent|1 cpp_suggestion #0|2 edit #1|3 point_in_time_model #2", G, Z, ie];
      }
    }
    class ee extends d {
      constructor(e2) {
        super(), this.requestId = "", this.predictionId = 0, this.lineNumber = 0, this.source = te.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["CursorPrediction|1 request_id 9|2 prediction_id 5|3 line_number 5|4 source #0|5 binding_id 9?", te];
      }
    }
    var te = (0, l.QT)(n.proto3, u, "CursorPrediction.CursorPredictionSource", [[0, "UNSPECIFIED"], [1, "ALWAYS_ON"], [2, "ACCEPT"], [3, "UNDO"], [4, "EDITOR_CHANGE"]], 1);
    class re extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SuggestCursorPredictionEvent|1 cursor_prediction #0|2 point_in_time_model #1", ee, ie];
      }
    }
    class ne extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AcceptCursorPredictionEvent|1 cursor_prediction #0|2 point_in_time_model #1", ee, ie];
      }
    }
    class se extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RejectCursorPredictionEvent|1 cursor_prediction #0|2 point_in_time_model #1", ee, ie];
      }
    }
    class oe extends d {
      constructor(e2) {
        super(), this.modelVersion = 0, this.relativePath = "", this.modelId = "", n.proto3.util.initPartial(e2, this);
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
        return ["MaybeDefinedPointInTimeModel|1 model_uuid 9?|2 model_version 5|3 relative_path 9|4 model_id 9"];
      }
    }
    class ie extends d {
      constructor(e2) {
        super(), this.modelUuid = "", this.modelVersion = 0, this.relativePath = "", this.modelId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ie().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ie().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ie().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ie, e2, t2);
      }
      static $() {
        return ["PointInTimeModel|1 model_uuid 9|2 model_version 5|3 relative_path 9|4 model_id 9"];
      }
    }
    class ae extends d {
      constructor(e2) {
        super(), this.lineNumberOneIndexed = 0, this.columnNumberOneIndexed = 0, n.proto3.util.initPartial(e2, this);
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
        return ["CppManualTriggerEventNew|1 line_number_one_indexed 5|2 column_number_one_indexed 5|7 point_in_time_model #0", ie];
      }
    }
    class ce extends d {
      constructor(e2) {
        super(), this.modelUuid = "", this.relativePath = "", this.reason = le.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["CppStoppedTrackingModelEvent|1 model_uuid 9|2 relative_path 9|3 reason #0", le];
      }
    }
    var le = (0, l.QT)(n.proto3, u, "CppStoppedTrackingModelEvent.StoppedTrackingModelReason", [[0, "UNSPECIFIED"], [1, "FILE_TOO_BIG"], [2, "FILE_DISPOSED"], [3, "CHANGE_TOO_BIG"]], 1);
    class ue extends d {
      constructor(e2) {
        super(), this.addedErrors = [], this.removedErrors = [], this.errors = [], n.proto3.util.initPartial(e2, this);
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
        return ["CppLinterErrorEvent|1 point_in_time_model #0|2 added_errors #1*|3 removed_errors #1*|4 errors #1*", ie, s.LinterError];
      }
    }
    class de extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["CppDebouncedCursorMovementEvent|1 point_in_time_model #0|2 cursor_position #1", ie, $];
      }
    }
    class pe extends d {
      constructor(e2) {
        super(), this.visibleRanges = [], this.editorId = "", n.proto3.util.initPartial(e2, this);
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
        return ["CppEditorChangedEvent|1 point_in_time_model #0|2 cursor_position #1|3 visible_ranges #2*|4 editor_id 9", ie, $, L];
      }
    }
    class me extends d {
      constructor(e2) {
        super(), this.clipboardContents = "", n.proto3.util.initPartial(e2, this);
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
        return ["CppCopyEvent|1 clipboard_contents 9"];
      }
    }
    class he extends d {
      constructor(e2) {
        super(), this.title = "", this.id = "", this.arguments = [], n.proto3.util.initPartial(e2, this);
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
        return ["CppQuickActionCommand|1 title 9|2 id 9|3 arguments 9*"];
      }
    }
    class fe extends d {
      constructor(e2) {
        super(), this.title = "", this.edits = [], n.proto3.util.initPartial(e2, this);
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
        return ["CppQuickAction|1 title 9|2 edits #0*|3 is_preferred 8?|4 command #1", ge, he];
      }
    }
    class ge extends d {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["CppQuickAction.Edit|1 text 9|2 range #0", L];
      }
    }
    class ye extends d {
      constructor(e2) {
        super(), this.added = [], this.removed = [], this.actions = [], n.proto3.util.initPartial(e2, this);
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
        return ["CppChangeQuickActionEvent|1 point_in_time_model #0|2 added #1*|3 removed #1*|4 actions #1*", ie, fe];
      }
    }
    class we extends d {
      constructor(e2) {
        super(), this.actionIdentifier = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["CppQuickActionFireEvent|1 point_in_time_model #0|2 quick_action_command #1 action_identifier|3 quick_action_event #2 action_identifier", ie, he, fe];
      }
    }
    class ve extends d {
      constructor(e2) {
        super(), this.requestId = "", this.eventType = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["CmdKEvent|1 point_in_time_model #0|2 request_id 9|20 prompt_bar_id 9?|3 submit_prompt #1 event_type|4 end_of_generation #2 event_type|5 interrupt_generation #3 event_type|6 accept_all #4 event_type|7 reject_all #5 event_type|8 reject_partial_diff #6 event_type|9 accept_partial_diff #7 event_type|10 after_reject #8 event_type", ie, _e, Ae, Se, be, Ee, Ce, Ie, ke];
      }
    }
    class _e extends d {
      constructor(e2) {
        super(), this.originalText = "", this.prompt = "", n.proto3.util.initPartial(e2, this);
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
        return ["CmdKEvent.SubmitPrompt|1 original_range #0|2 original_text 9|3 prompt 9", L];
      }
    }
    class Ae extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["CmdKEvent.EndOfGeneration"];
      }
    }
    class Se extends d {
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
        return ["CmdKEvent.InterruptGeneration"];
      }
    }
    class be extends d {
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
        return ["CmdKEvent.AcceptDiffs"];
      }
    }
    class Ee extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["CmdKEvent.RejectDiffs|1 actor_request_id 9?|2 silent 8?"];
      }
    }
    class Ie extends d {
      constructor(e2) {
        super(), this.greenLines = [], this.redLines = [], n.proto3.util.initPartial(e2, this);
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
        return ["CmdKEvent.AcceptPartialDiff|1 green_range #0|2 green_lines 9*|3 red_lines 9*", L];
      }
    }
    class Ce extends d {
      constructor(e2) {
        super(), this.greenLines = [], this.redLines = [], n.proto3.util.initPartial(e2, this);
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
        return ["CmdKEvent.RejectPartialDiff|1 green_range #0|2 green_lines 9*|3 red_lines 9*", L];
      }
    }
    class ke extends d {
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
        return ["CmdKEvent.AfterReject"];
      }
    }
    class xe extends d {
      constructor(e2) {
        super(), this.requestId = "", this.eventType = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ChatEvent|1 request_id 9|2 submit_prompt #0 event_type|3 end_of_any_generation #1 event_type|4 end_of_uninterrupted_generation #2 event_type", Te, Re, Be];
      }
    }
    class Te extends d {
      constructor(e2) {
        super(), this.prompt = "", n.proto3.util.initPartial(e2, this);
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
        return ["ChatEvent.SubmitPrompt|1 prompt 9"];
      }
    }
    class Re extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ChatEvent.EndOfAnyGeneration"];
      }
    }
    class Be extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ChatEvent.EndOfUninterruptedGeneration"];
      }
    }
    class Pe extends d {
      constructor(e2) {
        super(), this.requestId = "", this.eventType = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["BugBotLinterEvent|1 request_id 9|2 point_in_time_model #0|3 lint_generated #1 event_type|4 lint_dismissed #2 event_type|5 user_feedback #3 event_type|6 viewed_report #4 event_type|7 unviewed_report #5 event_type|8 started #6 event_type|9 not_shown_because_heuristic #7 event_type", ie, Me, qe, De, Oe, Ne, Je, Fe];
      }
    }
    class Je extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["BugBotLinterEvent.Started"];
      }
    }
    class Me extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["BugBotLinterEvent.LintGenerated|1 bug_report #0", c.Fl];
      }
    }
    class qe extends d {
      constructor(e2) {
        super(), this.bugReportId = "", n.proto3.util.initPartial(e2, this);
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
        return ["BugBotLinterEvent.LintDismissed|1 bug_report_id 9"];
      }
    }
    class De extends d {
      constructor(e2) {
        super(), this.bugReportId = "", this.feedback = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new De().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new De().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new De().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(De, e2, t2);
      }
      static $() {
        return ["BugBotLinterEvent.UserFeedback|1 bug_report_id 9|2 feedback 9"];
      }
    }
    class Oe extends d {
      constructor(e2) {
        super(), this.bugReportId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Oe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Oe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Oe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Oe, e2, t2);
      }
      static $() {
        return ["BugBotLinterEvent.ViewedReport|1 bug_report_id 9"];
      }
    }
    class Ne extends d {
      constructor(e2) {
        super(), this.bugReportId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ne().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ne().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ne().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ne, e2, t2);
      }
      static $() {
        return ["BugBotLinterEvent.UnviewedReport|1 bug_report_id 9"];
      }
    }
    class Fe extends d {
      constructor(e2) {
        super(), this.heuristic = Ue.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fe, e2, t2);
      }
      static $() {
        return ["BugBotLinterEvent.NotShownBecauseHeuristic|1 heuristic #0", Ue];
      }
    }
    var Ue = (0, l.QT)(n.proto3, u, "BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic", [[0, "UNSPECIFIED"], [1, "LINT_OVERLAP"], [2, "LINES_MISMATCH"]], 1);
    class Le extends d {
      constructor(e2) {
        super(), this.requestId = "", this.eventType = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Le().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Le().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Le().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Le, e2, t2);
      }
      static $() {
        return ["BugBotEvent|1 request_id 9|2 started #0 event_type|3 reports_generated #1 event_type|4 pressed_fix_in_composer #2 event_type|5 pressed_open_in_editor #3 event_type|6 viewed_report #4 event_type|7 user_feedback #5 event_type|8 pressed_add_to_chat #6 event_type|9 background_interval_started #7 event_type|10 background_interval_ended #8 event_type|11 background_interval_interrupted #9 event_type|12 background_interval_errored #10 event_type", Qe, je, Ge, ze, We, Ke, He, Ye, Ze, Xe, et];
      }
    }
    var $e = (0, l.QT)(n.proto3, u, "BugBotEvent.BackgroundIntervalInterruptedReason", [[0, "UNSPECIFIED"], [1, "DISABLED"], [2, "TOO_RECENT"], [3, "UNVIEWED_BUG_REPORTS"], [4, "NOT_IN_GIT_REPO"], [5, "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH"], [6, "NO_GIT_USER"], [7, "NO_LAST_COMMIT"], [8, "LAST_COMMIT_NOT_MADE_BY_USER"], [9, "LAST_COMMIT_TOO_OLD"], [10, "DIFF_TOO_LONG"], [11, "DIFF_TOO_SHORT"], [12, "TELEMETRY_UNHEALTHY"]], 1);
    class Qe extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qe, e2, t2);
      }
      static $() {
        return ["BugBotEvent.Started"];
      }
    }
    class je extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new je().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new je().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new je().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(je, e2, t2);
      }
      static $() {
        return ["BugBotEvent.ReportsGenerated|1 bug_reports #0", c.gl];
      }
    }
    class Ge extends d {
      constructor(e2) {
        super(), this.bugReportId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ge().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ge().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ge().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ge, e2, t2);
      }
      static $() {
        return ["BugBotEvent.PressedFixInComposer|1 bug_report_id 9"];
      }
    }
    class He extends d {
      constructor(e2) {
        super(), this.bugReportId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new He().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new He().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new He().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(He, e2, t2);
      }
      static $() {
        return ["BugBotEvent.PressedAddToChat|1 bug_report_id 9"];
      }
    }
    class ze extends d {
      constructor(e2) {
        super(), this.bugReportId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ze().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ze().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ze().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ze, e2, t2);
      }
      static $() {
        return ["BugBotEvent.PressedOpenInEditor|1 bug_location #0|2 bug_report_id 9", c.Cr];
      }
    }
    class We extends d {
      constructor(e2) {
        super(), this.secondsViewed = 0, this.reportViews = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new We().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new We().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new We().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(We, e2, t2);
      }
      static $() {
        return ["BugBotEvent.ViewedReport|1 seconds_viewed 5|2 report_views #0*", Ve];
      }
    }
    class Ve extends d {
      constructor(e2) {
        super(), this.bugReportId = "", this.viewPercentage = 0, this.textPercentage = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ve().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ve().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ve().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ve, e2, t2);
      }
      static $() {
        return ["BugBotEvent.ViewedReport.ReportView|1 bug_report_id 9|2 view_percentage 1|3 text_percentage 1"];
      }
    }
    class Ke extends d {
      constructor(e2) {
        super(), this.bugReportId = "", this.feedback = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ke().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ke().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ke().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ke, e2, t2);
      }
      static $() {
        return ["BugBotEvent.UserFeedback|1 bug_report_id 9|2 feedback 9"];
      }
    }
    class Ye extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ye().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ye().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ye().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ye, e2, t2);
      }
      static $() {
        return ["BugBotEvent.BackgroundIntervalStarted"];
      }
    }
    class Ze extends d {
      constructor(e2) {
        super(), this.success = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ze().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ze().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ze().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ze, e2, t2);
      }
      static $() {
        return ["BugBotEvent.BackgroundIntervalEnded|1 success 8"];
      }
    }
    class Xe extends d {
      constructor(e2) {
        super(), this.reason = $e.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xe, e2, t2);
      }
      static $() {
        return ["BugBotEvent.BackgroundIntervalInterrupted|1 reason #0", $e];
      }
    }
    class et extends d {
      constructor(e2) {
        super(), this.errorMessage = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new et().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new et().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new et().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(et, e2, t2);
      }
      static $() {
        return ["BugBotEvent.BackgroundIntervalErrored|1 error_message 9"];
      }
    }
    class tt extends d {
      constructor(e2) {
        super(), this.requestType = rt.UNSPECIFIED, this.requestId = "", this.source = nt.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tt, e2, t2);
      }
      static $() {
        return ["AiRequestEvent|1 request_type #0|2 request_id 9|3 source #1", rt, nt];
      }
    }
    var rt = (0, l.QT)(n.proto3, u, "AiRequestEvent.RequestType", [[0, "UNSPECIFIED"], [1, "START"], [2, "END"]], 1), nt = (0, l.QT)(n.proto3, u, "AiRequestEvent.Source", [[0, "UNSPECIFIED"], [1, "CHAT"], [2, "CMDK"], [3, "APPLY"], [4, "COMPOSER"], [5, "TASK"], [6, "CODE_INTERPRETER"], [7, "INTERPRETER_EXECUTION"], [8, "BUGBOT"]], 1);
    class st extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new st().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new st().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new st().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(st, e2, t2);
      }
      static $() {
        return ["ModelOpenedEvent|1 point_in_time_model #0|2 maybe_defined_point_in_time_model #1", ie, oe];
      }
    }
    class ot extends d {
      constructor(e2) {
        super(), this.files = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ot().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ot().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ot().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ot, e2, t2);
      }
      static $() {
        return ["BackgroundFilesEvent|2 files #0*", it];
      }
    }
    class it extends d {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.contents = "", this.hash = "", this.fullPath = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new it().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new it().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new it().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(it, e2, t2);
      }
      static $() {
        return ["BackgroundFilesEvent.BackgroundFile|1 relative_workspace_path 9|2 contents 9|3 hash 9|4 full_path 9"];
      }
    }
    class at extends d {
      constructor(e2) {
        super(), this.visibleRanges = [], this.editorId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new at().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new at().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new at().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(at, e2, t2);
      }
      static $() {
        return ["ScrollEvent|1 point_in_time_model #0|2 visible_ranges #1*|3 editor_id 9", ie, L];
      }
    }
    class ct extends d {
      constructor(e2) {
        super(), this.editorId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ct().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ct().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ct().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ct, e2, t2);
      }
      static $() {
        return ["EditorCloseEvent|1 editor_id 9"];
      }
    }
    class lt extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lt, e2, t2);
      }
      static $() {
        return ["TabCloseEvent|1 point_in_time_model #0", oe];
      }
    }
    class ut extends d {
      constructor(e2) {
        super(), this.fullUri = "", this.modelId = "", this.uriScheme = "", this.isTooLargeForSyncing = false, this.isTooLargeForTokenization = false, this.isTooLargeForHeapOperation = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ut().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ut().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ut().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ut, e2, t2);
      }
      static $() {
        return ["ModelAddedEvent|1 point_in_time_model #0|2 full_uri 9|3 model_id 9|4 uri_scheme 9|5 is_too_large_for_syncing 8|6 is_too_large_for_tokenization 8|7 is_too_large_for_heap_operation 8", oe];
      }
    }
    class dt extends d {
      constructor(e2) {
        super(), this.item = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dt, e2, t2);
      }
      static $() {
        return ["AnythingQuickAccessItem|1 resource #0 item|2 separator 9 item|3 section 9 item", pt];
      }
    }
    class pt extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pt, e2, t2);
      }
      static $() {
        return ["AnythingQuickAccessItem.Resource|1 model #0?|2 range #1?|3 uri 9?", ie, L];
      }
    }
    class mt extends d {
      constructor(e2) {
        super(), this.query = "", this.items = [], this.selectedIndices = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mt, e2, t2);
      }
      static $() {
        return ["AnythingQuickAccessSelectionEvent|1 query 9|2 items #0*|3 selected_indices 5*", dt];
      }
    }
    class ht extends d {
      constructor(e2) {
        super(), this.suggestions = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ht().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ht().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ht().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ht, e2, t2);
      }
      static $() {
        return ["LspSuggestionEvent|1 suggestions 9*|2 request_id 9?|3 editor_id 9?|4 point_in_time_model #0", ie];
      }
    }
    class ft extends d {
      constructor(e2) {
        super(), this.event = { case: void 0 }, this.performanceNowTimestamp = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ft().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ft().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ft().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ft, e2, t2);
      }
      static $() {
        return ["CppSessionEvent|2 accept_event #0 event|3 reject_event #1 event|4 manual_trigger_event #2 event|6 stopped_tracking_model_event #3 event|7 suggest_event #4 event|8 linter_error_event #5 event|9 debounced_cursor_movement_event #6 event|10 editor_changed_event #7 event|11 copy_event #8 event|13 quick_action_event #9 event|14 quick_action_fire_event #10 event|15 model_opened_event #11 event|17 cmd_k_event #12 event|18 chat_event #13 event|19 ai_event #14 event|21 scroll_event #15 event|22 editor_close_event #16 event|23 tab_close_event #17 event|33 model_added_event #18 event|26 partial_accept_event #19 event|27 accept_cursor_prediction_event #20 event|28 reject_cursor_prediction_event #21 event|29 suggest_cursor_prediction_event #22 event|30 cpp_trigger_event #23 event|31 finished_cpp_generation_event #24 event|32 bug_bot_event #25 event|34 bug_bot_linter_event #26 event|35 anything_quick_access_selection_event #27 event|36 lsp_suggestion_event #28 event|37 ntp_event #29 event|38 repo_event #30 event|39 git_event #31 event|40 tool_call_event #32 event|46 before_ai_edit_event #33 event|47 search_event #34 event|48 terminal_event #35 event|49 worktree_event #36 event|50 review_changes_opened_event #37 event|51 browser_event #38 event|16 background_files_event #39 event|5 performance_now_timestamp 1|25 performance_time_origin 1?|41 global_index 3?|42 performance_now_flush_time 1?|43 event_index 5?|44 flush_index 5?|45 global_index_v2 5?", H, Y, ae, ce, W, ue, de, pe, me, ye, we, st, ve, xe, tt, at, ct, lt, ut, X, ne, se, re, V, K, Le, Pe, mt, ht, Qt, jt, Ht, Xt, gt, rr, Pt, Wt, Zt, Ot, ot];
      }
    }
    class gt extends d {
      constructor(e2) {
        super(), this.model = { case: void 0 }, this.toolCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gt, e2, t2);
      }
      static $() {
        return ["BeforeAiEditEvent|1 point_in_time_model #0 model|5 relative_workspace_path 9 model|2 tool_call_id 9|3 request_id 9?|4 tool_name 9?", ie];
      }
    }
    class yt extends d {
      constructor(e2) {
        super(), this.changes = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yt, e2, t2);
      }
      static $() {
        return ["CppAppendRequest|1 changes 12"];
      }
    }
    class wt extends d {
      constructor(e2) {
        super(), this.success = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wt, e2, t2);
      }
      static $() {
        return ["CppAppendResponse|1 success 8"];
      }
    }
    class vt extends d {
      constructor(e2) {
        super(), this.sessionId = "", this.modelUuid = "", this.relativePath = "", this.uri = "", this.clientVersion = "", this.changes = [], this.sessionEvents = [], this.modelChangesMayBeOutOfOrder = false, this.privacyModeStatus = _t.UNSPECIFIED, this.events = [], this.timeOrigin = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vt, e2, t2);
      }
      static $() {
        return ["EditHistoryAppendChangesRequest|1 session_id 9|2 model_uuid 9|3 starting_model_value 9?|10 starting_model_version 5?|5 relative_path 9|14 uri 9|6 client_version 9|8 client_commit 9?|4 changes #0*|9 session_events #1*|11 model_changes_may_be_out_of_order 8|12 privacy_mode_status #2|7 events #3*|13 time_origin 2", j, ft, _t, kt];
      }
    }
    var _t = (0, l.QT)(n.proto3, u, "EditHistoryAppendChangesRequest.PrivacyModeStatus", [[0, "UNSPECIFIED"], [1, "PRIVACY_ENABLED"], [2, "IMPLICIT_NO_PRIVACY"], [3, "EXPLICIT_NO_PRIVACY"]], 1);
    class At extends d {
      constructor(e2) {
        super(), this.success = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new At().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new At().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new At().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(At, e2, t2);
      }
      static $() {
        return ["EditHistoryAppendChangesResponse|1 success 8"];
      }
    }
    class St extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new St().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new St().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new St().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(St, e2, t2);
      }
      static $() {
        return ["CppEditHistoryStatusRequest"];
      }
    }
    class bt extends d {
      constructor(e2) {
        super(), this.on = false, this.onlyIfExplicit = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bt, e2, t2);
      }
      static $() {
        return ["CppEditHistoryStatusResponse|1 on 8|2 only_if_explicit 8"];
      }
    }
    class Et extends d {
      constructor(e2) {
        super(), this.changes = [], this.relativePath = "", this.modelUuid = "", this.startFromChangeIndex = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Et().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Et().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Et().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Et, e2, t2);
      }
      static $() {
        return ["BlockDiffPatch|1 start_model_window #0|3 changes #1*|4 relative_path 9|7 model_uuid 9|5 start_from_change_index 5", Ct, It];
      }
    }
    class It extends d {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new It().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new It().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new It().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(It, e2, t2);
      }
      static $() {
        return ["BlockDiffPatch.Change|1 text 9|2 range #0", L];
      }
    }
    class Ct extends d {
      constructor(e2) {
        super(), this.lines = [], this.startLineNumber = 0, this.endLineNumber = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ct().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ct().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ct().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ct, e2, t2);
      }
      static $() {
        return ["BlockDiffPatch.ModelWindow|1 lines 9*|2 start_line_number 5|3 end_line_number 5"];
      }
    }
    class kt extends d {
      constructor(e2) {
        super(), this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kt, e2, t2);
      }
      static $() {
        return ["CppHistoryAppendEvent|1 model_change #0 event|2 accept_event #1 event|3 reject_event #2 event|4 manual_trigger_event #3 event|10 final_model_hash 9?", j, Tt, Rt, xt];
      }
    }
    class xt extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xt, e2, t2);
      }
      static $() {
        return ["CppManualTriggerEvent|2 position #0", s.CursorPosition];
      }
    }
    class Tt extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tt, e2, t2);
      }
      static $() {
        return ["CppAcceptEvent|1 cpp_suggestion #0", Bt];
      }
    }
    class Rt extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rt, e2, t2);
      }
      static $() {
        return ["CppRejectEvent|1 cpp_suggestion #0", Bt];
      }
    }
    class Bt extends d {
      constructor(e2) {
        super(), this.suggestionText = "", this.seen = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bt, e2, t2);
      }
      static $() {
        return ["CppSuggestion|1 suggestion_text 9|2 range #0|5 seen 8|6 editor_selection_before_peek #1|7 binding_id 9?", L, s.SelectionWithOrientation];
      }
    }
    n.proto3;
    class Pt extends d {
      constructor(e2) {
        super(), this.uri = "", this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pt, e2, t2);
      }
      static $() {
        return ["TerminalEvent|1 uri 9|2 create #0 event|3 exit #1 event|4 command_start #2 event|5 command_finish #3 event", Jt, Mt, qt, Dt];
      }
    }
    class Jt extends d {
      constructor(e2) {
        super(), this.isRemote = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jt, e2, t2);
      }
      static $() {
        return ["TerminalEvent.Create|1 is_remote 8"];
      }
    }
    class Mt extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mt, e2, t2);
      }
      static $() {
        return ["TerminalEvent.Exit|1 exit_code 5?"];
      }
    }
    class qt extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qt, e2, t2);
      }
      static $() {
        return ["TerminalEvent.CommandStart|1 point_in_time_model #0|2 cwd 9?", ie];
      }
    }
    class Dt extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dt, e2, t2);
      }
      static $() {
        return ["TerminalEvent.CommandFinish|1 point_in_time_model #0|2 exit_code 5?", ie];
      }
    }
    class Ot extends d {
      constructor(e2) {
        super(), this.viewId = "", this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ot().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ot().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ot().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ot, e2, t2);
      }
      static $() {
        return ["BrowserEvent|1 view_id 9|2 tab_created #0 event|3 tab_closed #1 event|4 navigation #2 event|5 tool_action #3 event", Nt, Ft, Ut, Lt];
      }
    }
    class Nt extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nt, e2, t2);
      }
      static $() {
        return ["BrowserEvent.TabCreated"];
      }
    }
    class Ft extends d {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ft().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ft().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ft().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ft, e2, t2);
      }
      static $() {
        return ["BrowserEvent.TabClosed"];
      }
    }
    class Ut extends d {
      constructor(e2) {
        super(), this.url = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ut().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ut().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ut().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ut, e2, t2);
      }
      static $() {
        return ["BrowserEvent.Navigation|1 url 9|2 title 9?"];
      }
    }
    class Lt extends d {
      constructor(e2) {
        super(), this.toolName = "", this.argsJson = "", this.source = $t.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lt, e2, t2);
      }
      static $() {
        return ["BrowserEvent.ToolAction|1 tool_name 9|2 args_json 9|3 success 8?|4 post_snapshot_yaml 9?|5 post_url 9?|6 post_title 9?|7 source #0", $t];
      }
    }
    var $t = (0, l.QT)(n.proto3, u, "BrowserEvent.ToolAction.Source", [[0, "UNSPECIFIED"], [1, "MCP_TOOL"], [2, "MANUAL_USER"]], 1);
    class Qt extends d {
      constructor(e2) {
        super(), this.originateTimestamp = 0, this.receiveTimestamp = 0, this.transmitTimestamp = 0, this.destinationTimestamp = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qt, e2, t2);
      }
      static $() {
        return ["NtpEvent|1 originate_timestamp 1|2 receive_timestamp 1|3 transmit_timestamp 1|4 destination_timestamp 1"];
      }
    }
    class jt extends d {
      constructor(e2) {
        super(), this.repoOwner = "", this.repoName = "", this.eventType = Gt.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jt, e2, t2);
      }
      static $() {
        return ["RepoEvent|1 repo_owner 9|2 repo_name 9|3 event_type #0", Gt];
      }
    }
    var Gt = (0, l.QT)(n.proto3, u, "RepoEvent.Type", [[0, "UNSPECIFIED"], [1, "SYNCED"], [2, "LOADING"], [3, "INDEXING_SETUP"], [4, "INDEXING_INIT_FROM_SIMILAR_CODEBASE"], [5, "PAUSED"], [6, "INDEXING"], [7, "ERROR"], [8, "NOT_AUTO_INDEXING"], [9, "NOT_INDEXED"]], 1);
    class Ht extends d {
      constructor(e2) {
        super(), this.operationType = zt.UNSPECIFIED, this.repositoryPath = "", this.operationSuccess = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ht().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ht().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ht().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ht, e2, t2);
      }
      static $() {
        return ["GitEvent|1 operation_type #0|2 repository_path 9|3 operation_success 8|4 branch_name 9?|5 error_message 9?|6 is_default_branch 8?|7 default_branch_name 9?|8 commit_hash 9?|9 previous_commit_hash 9?|10 remote_url 9?", zt];
      }
    }
    var zt = (0, l.QT)(n.proto3, u, "GitEvent.OperationType", [[0, "UNSPECIFIED"], [1, "COMMIT"], [2, "CHECKOUT"], [3, "PULL"], [4, "FETCH"], [5, "MERGE"], [6, "REBASE"], [7, "STASH"], [8, "BRANCH"], [9, "TAG"]], 1);
    class Wt extends d {
      constructor(e2) {
        super(), this.eventType = Vt.UNSPECIFIED, this.allWorktreePaths = [], this.worktreeComposerMappings = [], this.backgroundAgentComposerMappings = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wt, e2, t2);
      }
      static $() {
        return ["WorktreeEvent|1 event_type #0|2 model_name 9?|3 best_of_n_group_id 9?|4 all_worktree_paths 9*|5 applied_worktree_path 9?|6 worktree_composer_mappings #1*|7 background_agent_composer_mappings #2*|8 applied_composer_id 9?|9 viewed_composer_id 9?", Vt, Kt, Yt];
      }
    }
    var Vt = (0, l.QT)(n.proto3, u, "WorktreeEvent.EventType", [[0, "UNSPECIFIED"], [1, "APPLY_TO_MAIN"], [2, "UNDO_APPLY"], [3, "VIEW_SUBCOMPOSER"]], 1);
    class Kt extends d {
      constructor(e2) {
        super(), this.worktreePath = "", this.composerId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kt, e2, t2);
      }
      static $() {
        return ["WorktreeEvent.WorktreeComposerMapping|1 worktree_path 9|2 composer_id 9"];
      }
    }
    class Yt extends d {
      constructor(e2) {
        super(), this.bcId = "", this.composerId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yt, e2, t2);
      }
      static $() {
        return ["WorktreeEvent.BackgroundAgentComposerMapping|1 bc_id 9|2 composer_id 9"];
      }
    }
    class Zt extends d {
      constructor(e2) {
        super(), this.composerId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zt, e2, t2);
      }
      static $() {
        return ["ReviewChangesOpenedEvent|1 composer_id 9|2 best_of_n_group_id 9?"];
      }
    }
    class Xt extends d {
      constructor(e2) {
        super(), this.toolCallId = "", this.requestId = "", this.toolName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xt, e2, t2);
      }
      static $() {
        return ["ToolCallEvent|1 tool_call_id 9|2 request_id 9|3 tool_name 9"];
      }
    }
    class er extends d {
      constructor(e2) {
        super(), this.lineNumber = 0, this.column = 0, this.matchText = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new er().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new er().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new er().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(er, e2, t2);
      }
      static $() {
        return ["SearchMatch|1 line_number 5|2 column 5|3 match_text 9"];
      }
    }
    class tr extends d {
      constructor(e2) {
        super(), this.filePath = "", this.matchCount = 0, this.matches = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tr, e2, t2);
      }
      static $() {
        return ["SearchResultFile|1 file_path 9|2 match_count 5|3 matches #0*", er];
      }
    }
    class rr extends d {
      constructor(e2) {
        super(), this.query = "", this.resultCount = 0, this.fileCount = 0, this.isRegex = false, this.isCaseSensitive = false, this.isWholeWord = false, this.durationMs = 0, this.results = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rr, e2, t2);
      }
      static $() {
        return ["SearchEvent|1 query 9|2 result_count 5|3 file_count 5|4 is_regex 8|5 is_case_sensitive 8|6 is_whole_word 8|7 files_to_include 9?|8 files_to_exclude 9?|9 duration_ms 5|10 results #0*", tr];
      }
    }
  }