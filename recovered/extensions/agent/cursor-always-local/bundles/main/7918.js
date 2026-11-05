// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7918 range:4620246..4685911
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7918: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { AzureState: () => z, BM25Chunk: () => H, BedrockState: () => W, ChatExternalLink: () => xt, ChatQuote: () => Tt, ClientAction: () => Jt, CloudAgentModelSelection: () => j, CloudAgentModelSelection_ParameterValue: () => X, CmdKDebugInfo: () => k, CmdKDebugInfo_CppFileDiffHistory: () => R, CmdKDebugInfo_OpenEditor: () => q, CmdKDebugInfo_PastThought: () => P, CmdKDebugInfo_UnsavedFiles: () => v, CmdKExternalLink: () => Dt, CodeBlock: () => D, CodeBlock_Signatures: () => U, CodeChunk: () => Gt, CodeChunk_Intent: () => Ht, CodeChunk_SummarizationStrategy: () => Kt, CommitDiffString: () => Mt, CommitNote: () => Ut, CommitNoteWithEmbeddings: () => Qt, ComposerExternalLink: () => Nt, ComputeLinesDiffOriginalAndModified: () => S, ConfigureSpendLimitAction: () => vt, CrossExtHostHeader: () => Ft, CrossExtHostHeaders: () => Lt, CurrentFileInfo: () => K, CurrentFileInfo_NotebookCell: () => V, CursorPosition: () => l, CursorRange: () => x, CursorRule: () => it, CustomErrorDetails: () => _t, DashboardAction: () => Et, DataframeInfo: () => tt, DataframeInfo_Column: () => et, DetailedLine: () => N, Diagnostic: () => F, Diagnostic_DiagnosticSeverity: () => L, Diagnostic_RelatedInformation: () => $, DocumentSymbol: () => lt, DocumentSymbolWithText: () => ht, DocumentSymbol_Range: () => dt, DocumentSymbol_SymbolKind: () => mt, EmbeddingModel: () => c, EnvironmentInfo: () => p, ErrorAnalyticsMetadata: () => yt, ErrorButton: () => St, ErrorDetails: () => gt, ErrorDetails_Error: () => At, ExplicitContext: () => ot, FeatureType: () => u, File: () => O, FileDiff: () => E, FileDiff_Chunk: () => I, FileGit: () => M, FullCommitNotes: () => Ot, GetDiffRequest: () => g, GetDiffRequest_OutputFormat: () => A, GetDiffResponse: () => _, GetDiffResponse_SubmoduleDiff: () => y, GitCommit: () => Q, GitDiff: () => J, GitDiff_DiffType: () => B, HoverDetails: () => ft, ImageProto: () => Rt, ImageProto_Dimension: () => Pt, LineRange: () => T, Lint: () => G, LintSeverity: () => a, LinterError: () => rt, LinterErrors: () => nt, LinterErrorsWithoutFileContents: () => st, MCPInstructions: () => at, ModelDetails: () => Y, ModelInfo: () => Z, PlanChoice: () => wt, PureMessage: () => ut, PureMessage_MessageType: () => ct, RCPCallFrame: () => Vt, RCPChatMessage: () => jt, RCPLogEntry: () => Wt, RCPMessage: () => Xt, RCPStackTrace: () => zt, RCPUIElementPicked: () => Yt, ReloadWindowAction: () => Bt, SelectionWithOrientation: () => h, SimpleFileChunk: () => b, SimpleRange: () => C, SimpleUnaryCrossExtensionHostMessage: () => $t, SimplestRange: () => w, SwitchModelAction: () => bt, SwitchModelAction_ModelParameterValue: () => kt, UpgradeAction: () => Ct, UpgradeChoice: () => It, UriComponents: () => pt, UrlAction: () => qt, VscodeCPUProperties: () => f, VscodeOSProperties: () => d, VscodeOSStatistics: () => m });
    var n2 = r2(6038), s2 = r2(8592);
    const i2 = "aiserver.v1.";
    class o2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return i2;
      }
    }
    var a = (0, s2.QT)(n2.proto3, i2, "LintSeverity", [[0, "UNSPECIFIED"], [1, "ERROR"], [2, "WARNING"], [3, "INFO"], [4, "HINT"], [5, "AI"]], 1), u = (0, s2.QT)(n2.proto3, i2, "FeatureType", [[0, "UNSPECIFIED"], [1, "EDIT"], [2, "GENERATE"], [3, "INLINE_LONG_COMPLETION"]], 1), c = (0, s2.QT)(n2.proto3, i2, "EmbeddingModel", [[0, "UNSPECIFIED"], [1, "VOYAGE_CODE_2"], [2, "TEXT_EMBEDDINGS_LARGE_3"], [3, "QWEN_1_5B_CUSTOM"], [4, "MOCK_CHUNKER_ERROR"], [5, "QWEN_1_5B_0618_CUSTOM"], [6, "QWEN_1_5B_0618_FP8_MM_CUSTOM"]], 1);
    class l extends o2 {
      constructor(t3) {
        super(), this.line = 0, this.column = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["CursorPosition|1 line 5|2 column 5"];
      }
    }
    class m extends o2 {
      constructor(t3) {
        super(), this.totalmem = 0, this.freemem = 0, this.loadavg = [], n2.proto3.util.initPartial(t3, this);
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
        return ["VscodeOSStatistics|1 totalmem 1|2 freemem 1|3 loadavg 1*"];
      }
    }
    class d extends o2 {
      constructor(t3) {
        super(), this.type = "", this.release = "", this.arch = "", this.platform = "", this.cpus = [], n2.proto3.util.initPartial(t3, this);
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
        return ["VscodeOSProperties|1 type 9|2 release 9|3 arch 9|4 platform 9|5 cpus #0*", f];
      }
    }
    class f extends o2 {
      constructor(t3) {
        super(), this.model = "", this.speed = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["VscodeCPUProperties|1 model 9|2 speed 1"];
      }
    }
    class p extends o2 {
      constructor(t3) {
        super(), this.workspaceUris = [], n2.proto3.util.initPartial(t3, this);
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
        return ["EnvironmentInfo|1 exthost_platform 9?|2 exthost_arch 9?|3 exthost_release 9?|4 exthost_shell 9?|5 local_timestamp 9?|6 workspace_uris 9*|7 cursor_version 9?|8 is_remote 8?|9 local_os_type 9?|10 home_directory 9?|11 local_timezone 9?"];
      }
    }
    class h extends o2 {
      constructor(t3) {
        super(), this.selectionStartLineNumber = 0, this.selectionStartColumn = 0, this.positionLineNumber = 0, this.positionColumn = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["SelectionWithOrientation|1 selection_start_line_number 5|2 selection_start_column 5|3 position_line_number 5|4 position_column 5"];
      }
    }
    class g extends o2 {
      constructor(t3) {
        super(), this.cwd = "", this.ref = "", this.baseRef = "", this.mergeBase = false, this.targetPaths = [], this.maxUntrackedFiles = 0, this.submoduleRecurseDepth = 0, this.includeSpaceChanges = false, this.committedOnly = false, this.computePatchId = false, n2.proto3.util.initPartial(t3, this);
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
        return ["GetDiffRequest|1 cwd 9|2 ref 9|3 base_ref 9|4 merge_base 8|5 target_paths 9*|6 unified_context_lines 5?|7 max_untracked_files 5|9 submodule_recurse_depth 5|10 include_space_changes 8|11 committed_only 8|12 compute_patch_id 8|13 return_head_sha 8?|14 max_response_bytes 5?|15 max_files_with_contents 13?|16 max_content_bytes 13?|8 output_format #0?", A];
      }
    }
    var A = (0, s2.QT)(n2.proto3, i2, "GetDiffRequest.OutputFormat", [[0, "UNSPECIFIED"], [1, "NAME_STATUS"], [2, "NAME_STATUS_AND_NUMSTAT"], [3, "FILE_DIFFS"], [4, "DIFFS_WITH_BEFORE_AND_AFTER"]], 1);
    class _ extends o2 {
      constructor(t3) {
        super(), this.submoduleDiffs = [], n2.proto3.util.initPartial(t3, this);
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
        return ["GetDiffResponse|1 diff #0|2 submodule_diffs #1*|3 patch_id 9?|4 head_sha 9?|5 has_uncommitted_changes 8?", J, y];
      }
    }
    class y extends o2 {
      constructor(t3) {
        super(), this.relativePath = "", this.errored = false, n2.proto3.util.initPartial(t3, this);
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
        return ["GetDiffResponse.SubmoduleDiff|1 relative_path 9|2 diff #0|3 errored 8", J];
      }
    }
    class w extends o2 {
      constructor(t3) {
        super(), this.startLine = 0, this.endLineInclusive = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["SimplestRange|1 start_line 5|2 end_line_inclusive 5"];
      }
    }
    class S extends o2 {
      constructor(t3) {
        super(), this.original = [], this.modified = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ComputeLinesDiffOriginalAndModified|1 original 9*|2 modified 9*"];
      }
    }
    class J extends o2 {
      constructor(t3) {
        super(), this.diffs = [], this.diffType = B.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["GitDiff|1 diffs #0*|2 diff_type #1|3 file_contents_omitted 8?", E, B];
      }
    }
    var B = (0, s2.QT)(n2.proto3, i2, "GitDiff.DiffType", [[0, "UNSPECIFIED"], [1, "DIFF_TO_HEAD"], [2, "DIFF_FROM_BRANCH_TO_MAIN"]], 1);
    class E extends o2 {
      constructor(t3) {
        super(), this.added = 0, this.removed = 0, this.from = "", this.to = "", this.chunks = [], n2.proto3.util.initPartial(t3, this);
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
        return ["FileDiff|4 added 5|5 removed 5|1 from 9|2 to 9|3 chunks #0*|6 before_file_contents 9?|7 after_file_contents 9?|8 is_generated 8?|9 old_mode 9?|10 new_mode 9?", I];
      }
    }
    class I extends o2 {
      constructor(t3) {
        super(), this.content = "", this.lines = [], this.oldStart = 0, this.oldLines = 0, this.newStart = 0, this.newLines = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["FileDiff.Chunk|1 content 9|2 lines 9*|3 old_start 5|4 old_lines 5|5 new_start 5|6 new_lines 5"];
      }
    }
    class C extends o2 {
      constructor(t3) {
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumberInclusive = 0, this.endColumn = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["SimpleRange|1 start_line_number 5|2 start_column 5|3 end_line_number_inclusive 5|4 end_column 5"];
      }
    }
    class b extends o2 {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.chunkHash = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SimpleFileChunk|1 relative_workspace_path 9|2 range #0|3 chunk_hash 9", w];
      }
    }
    class k extends o2 {
      constructor(t3) {
        super(), this.remoteUrl = "", this.commitId = "", this.gitPatch = "", this.unsavedFiles = [], this.unixTimestampMs = 0, this.openEditors = [], this.fileDiffHistories = [], this.branchName = "", this.branchNotes = "", this.branchNotesRich = "", this.globalNotes = "", this.pastThoughts = [], this.baseBranchName = "", this.baseBranchCommitId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKDebugInfo|1 remote_url 9|2 commit_id 9|3 git_patch 9|4 unsaved_files #0*|5 unix_timestamp_ms 1|6 open_editors #1*|7 file_diff_histories #2*|8 branch_name 9|9 branch_notes 9|12 branch_notes_rich 9|10 global_notes 9|11 past_thoughts #3*|13 base_branch_name 9|14 base_branch_commit_id 9", v, q, R, P];
      }
    }
    class v extends o2 {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.contents = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKDebugInfo.UnsavedFiles|1 relative_workspace_path 9|2 contents 9"];
      }
    }
    class q extends o2 {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.editorGroupIndex = 0, this.editorGroupId = 0, this.isActive = false, n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKDebugInfo.OpenEditor|1 relative_workspace_path 9|2 editor_group_index 5|3 editor_group_id 5|4 is_active 8"];
      }
    }
    class R extends o2 {
      constructor(t3) {
        super(), this.fileName = "", this.diffHistory = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKDebugInfo.CppFileDiffHistory|1 file_name 9|2 diff_history 9*"];
      }
    }
    class P extends o2 {
      constructor(t3) {
        super(), this.text = "", this.timeInUnixSeconds = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKDebugInfo.PastThought|1 text 9|2 time_in_unix_seconds 1"];
      }
    }
    class T extends o2 {
      constructor(t3) {
        super(), this.startLineNumber = 0, this.endLineNumberInclusive = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["LineRange|1 start_line_number 5|2 end_line_number_inclusive 5"];
      }
    }
    class x extends o2 {
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
        return ["CursorRange|1 start_position #0|2 end_position #0", l];
      }
    }
    class N extends o2 {
      constructor(t3) {
        super(), this.text = "", this.lineNumber = 0, this.isSignature = false, n2.proto3.util.initPartial(t3, this);
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
        return ["DetailedLine|1 text 9|2 line_number 2|3 is_signature 8"];
      }
    }
    class D extends o2 {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.contents = "", this.detailedLines = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CodeBlock|1 relative_workspace_path 9|2 file_contents 9?|9 file_contents_length 5?|3 range #0|4 contents 9|5 signatures #1|6 override_contents 9?|7 original_contents 9?|8 detailed_lines #2*|10 file_git_context #3", x, U, N, M];
      }
    }
    class U extends o2 {
      constructor(t3) {
        super(), this.ranges = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CodeBlock.Signatures|1 ranges #0*", x];
      }
    }
    class Q extends o2 {
      constructor(t3) {
        super(), this.commit = "", this.author = "", this.date = "", this.message = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GitCommit|1 commit 9|2 author 9|3 date 9|4 message 9"];
      }
    }
    class M extends o2 {
      constructor(t3) {
        super(), this.commits = [], n2.proto3.util.initPartial(t3, this);
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
        return ["FileGit|1 commits #0*", Q];
      }
    }
    class O extends o2 {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.contents = "", n2.proto3.util.initPartial(t3, this);
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
        return ["File|1 relative_workspace_path 9|2 contents 9|3 file_git_context #0", M];
      }
    }
    class F extends o2 {
      constructor(t3) {
        super(), this.message = "", this.severity = L.UNSPECIFIED, this.relatedInformation = [], n2.proto3.util.initPartial(t3, this);
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
        return ["Diagnostic|1 message 9|2 range #0|3 severity #1|4 related_information #2*", x, L, $];
      }
    }
    var L = (0, s2.QT)(n2.proto3, i2, "Diagnostic.DiagnosticSeverity", [[0, "UNSPECIFIED"], [1, "ERROR"], [2, "WARNING"], [3, "INFORMATION"], [4, "HINT"]], 1);
    class $ extends o2 {
      constructor(t3) {
        super(), this.message = "", n2.proto3.util.initPartial(t3, this);
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
        return ["Diagnostic.RelatedInformation|1 message 9|2 range #0", x];
      }
    }
    class G extends o2 {
      constructor(t3) {
        super(), this.message = "", this.severity = a.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["Lint|1 message 9|2 range #0|3 severity #1", C, a];
      }
    }
    class H extends o2 {
      constructor(t3) {
        super(), this.content = "", this.score = 0, this.relativePath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BM25Chunk|1 content 9|2 range #0|3 score 5|4 relative_path 9", w];
      }
    }
    class K extends o2 {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.contents = "", this.relyOnFilesync = false, this.cells = [], this.topChunks = [], this.contentsStartAtLine = 0, this.dataframes = [], this.totalNumberOfLines = 0, this.languageId = "", this.diagnostics = [], this.cellStartLines = [], this.workspaceRootPath = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CurrentFileInfo|1 relative_workspace_path 9|2 contents 9|18 rely_on_filesync 8|17 sha_256_hash 9?|16 cells #0*|10 top_chunks #1*|9 contents_start_at_line 5|3 cursor_position #2|4 dataframes #3*|8 total_number_of_lines 5|5 language_id 9|6 selection #4|11 alternative_version_id 5?|7 diagnostics #5*|14 file_version 5?|15 cell_start_lines 5*|19 workspace_root_path 9|20 line_ending 9?", V, H, l, tt, x, F];
      }
    }
    class V extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["CurrentFileInfo.NotebookCell"];
      }
    }
    class z extends o2 {
      constructor(t3) {
        super(), this.apiKey = "", this.baseUrl = "", this.deployment = "", this.useAzure = false, n2.proto3.util.initPartial(t3, this);
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
        return ["AzureState|1 api_key 9|2 base_url 9|3 deployment 9|4 use_azure 8"];
      }
    }
    class W extends o2 {
      constructor(t3) {
        super(), this.accessKey = "", this.secretKey = "", this.region = "", this.useBedrock = false, this.sessionToken = "", n2.proto3.util.initPartial(t3, this);
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
        return ["BedrockState|1 access_key 9|2 secret_key 9|3 region 9|4 use_bedrock 8|5 session_token 9"];
      }
    }
    class Y extends o2 {
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
        return ["ModelDetails|1 model_name 9?|2 api_key 9?|3 enable_ghost_mode 8?|4 azure_state #0?|5 enable_slow_pool 8?|6 openai_api_base_url 9?|7 bedrock_state #1?|8 max_mode 8?", z, W];
      }
    }
    class j extends o2 {
      constructor(t3) {
        super(), this.modelId = "", this.parameters = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CloudAgentModelSelection|1 model_id 9|2 parameters #0*|3 max_mode 8?", X];
      }
    }
    class X extends o2 {
      constructor(t3) {
        super(), this.id = "", this.value = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CloudAgentModelSelection.ParameterValue|1 id 9|2 value 9"];
      }
    }
    class Z extends o2 {
      constructor(t3) {
        super(), this.modelName = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ModelInfo|1 model_name 9"];
      }
    }
    class tt extends o2 {
      constructor(t3) {
        super(), this.name = "", this.shape = "", this.dataDimensionality = 0, this.columns = [], this.rowCount = 0, this.indexColumn = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DataframeInfo|1 name 9|2 shape 9|3 data_dimensionality 5|6 columns #0*|7 row_count 5|8 index_column 9", et];
      }
    }
    class et extends o2 {
      constructor(t3) {
        super(), this.key = "", this.type = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DataframeInfo.Column|1 key 9|2 type 9"];
      }
    }
    class rt extends o2 {
      constructor(t3) {
        super(), this.message = "", this.relatedInformation = [], n2.proto3.util.initPartial(t3, this);
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
        return ["LinterError|1 message 9|2 range #0|3 source 9?|4 related_information #1*|5 severity #2?|6 is_stale 8?", x, $, L];
      }
    }
    class nt extends o2 {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.errors = [], this.fileContents = "", n2.proto3.util.initPartial(t3, this);
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
        return ["LinterErrors|1 relative_workspace_path 9|2 errors #0*|3 file_contents 9", rt];
      }
    }
    class st extends o2 {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.errors = [], n2.proto3.util.initPartial(t3, this);
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
        return ["LinterErrorsWithoutFileContents|1 relative_workspace_path 9|2 errors #0*", rt];
      }
    }
    class it extends o2 {
      constructor(t3) {
        super(), this.name = "", this.description = "", this.environments = [], this.disabledEnvironments = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CursorRule|1 name 9|2 description 9|3 body 9?|4 is_from_glob 8?|5 always_apply 8?|6 attach_to_background_agents 8?|7 full_path 9?|8 environments 9*|9 disabled_environments 9*|10 plugin 9?|11 marketplace 9?"];
      }
    }
    class ot extends o2 {
      constructor(t3) {
        super(), this.context = "", this.rules = [], this.mcpInstructions = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ExplicitContext|1 context 9|2 repo_context 9?|3 rules #0*|4 mode_specific_context 9?|5 mcp_instructions #1*", it, at];
      }
    }
    class at extends o2 {
      constructor(t3) {
        super(), this.serverName = "", this.serverIdentifier = "", this.instructions = "", n2.proto3.util.initPartial(t3, this);
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
        return ["MCPInstructions|1 server_name 9|2 server_identifier 9|3 instructions 9"];
      }
    }
    class ut extends o2 {
      constructor(t3) {
        super(), this.messageType = ct.UNSPECIFIED, this.content = "", n2.proto3.util.initPartial(t3, this);
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
        return ["PureMessage|1 message_type #0|2 content 9", ct];
      }
    }
    var ct = (0, s2.QT)(n2.proto3, i2, "PureMessage.MessageType", [[0, "UNSPECIFIED"], [1, "SYSTEM"], [2, "USER"], [3, "ASSISTANT"]], 1);
    class lt extends o2 {
      constructor(t3) {
        super(), this.name = "", this.detail = "", this.kind = mt.UNSPECIFIED, this.containerName = "", this.children = [], n2.proto3.util.initPartial(t3, this);
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
        return ["DocumentSymbol|1 name 9|2 detail 9|3 kind #0|5 container_name 9|6 range #1|7 selection_range #1|8 children #2*", mt, dt, lt];
      }
    }
    var mt = (0, s2.QT)(n2.proto3, i2, "DocumentSymbol.SymbolKind", [[0, "UNSPECIFIED"], [1, "FILE"], [2, "MODULE"], [3, "NAMESPACE"], [4, "PACKAGE"], [5, "CLASS"], [6, "METHOD"], [7, "PROPERTY"], [8, "FIELD"], [9, "CONSTRUCTOR"], [10, "ENUM"], [11, "INTERFACE"], [12, "FUNCTION"], [13, "VARIABLE"], [14, "CONSTANT"], [15, "STRING"], [16, "NUMBER"], [17, "BOOLEAN"], [18, "ARRAY"], [19, "OBJECT"], [20, "KEY"], [21, "NULL"], [22, "ENUM_MEMBER"], [23, "STRUCT"], [24, "EVENT"], [25, "OPERATOR"], [26, "TYPE_PARAMETER"]], 1);
    class dt extends o2 {
      constructor(t3) {
        super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["DocumentSymbol.Range|1 start_line_number 5|2 start_column 5|3 end_line_number 5|4 end_column 5"];
      }
    }
    class ft extends o2 {
      constructor(t3) {
        super(), this.codeDetails = "", this.markdownBlocks = [], n2.proto3.util.initPartial(t3, this);
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
        return ["HoverDetails|1 code_details 9|2 markdown_blocks 9*"];
      }
    }
    class pt extends o2 {
      constructor(t3) {
        super(), this.scheme = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UriComponents|1 scheme 9|2 authority 9?|3 path 9?|4 query 9?|5 fragment 9?"];
      }
    }
    class ht extends o2 {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.textInSymbolRange = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DocumentSymbolWithText|1 symbol #0|2 relative_workspace_path 9|3 text_in_symbol_range 9|4 uri_components #1", lt, pt];
      }
    }
    class gt extends o2 {
      constructor(t3) {
        super(), this.error = At.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["ErrorDetails|1 error #0|2 details #1|3 is_expected 8?", At, _t];
      }
    }
    var At = (0, s2.QT)(n2.proto3, i2, "ErrorDetails.Error", [[0, "UNSPECIFIED"], [1, "BAD_API_KEY"], [42, "BAD_USER_API_KEY"], [2, "NOT_LOGGED_IN"], [3, "INVALID_AUTH_ID"], [4, "NOT_HIGH_ENOUGH_PERMISSIONS"], [18, "AGENT_REQUIRES_LOGIN"], [5, "BAD_MODEL_NAME"], [39, "NOT_FOUND"], [40, "DEPRECATED"], [6, "USER_NOT_FOUND"], [7, "FREE_USER_RATE_LIMIT_EXCEEDED"], [8, "PRO_USER_RATE_LIMIT_EXCEEDED"], [9, "FREE_USER_USAGE_LIMIT"], [10, "PRO_USER_USAGE_LIMIT"], [41, "RESOURCE_EXHAUSTED"], [11, "AUTH_TOKEN_NOT_FOUND"], [12, "AUTH_TOKEN_EXPIRED"], [13, "OPENAI"], [14, "OPENAI_RATE_LIMIT_EXCEEDED"], [20, "MAX_TOKENS"], [23, "PRO_USER_ONLY"], [21, "USER_ABORTED_REQUEST"], [25, "TIMEOUT"], [22, "GENERIC_RATE_LIMIT_EXCEEDED"], [28, "GPT_4_VISION_PREVIEW_RATE_LIMIT"], [29, "CUSTOM_MESSAGE"], [30, "OUTDATED_CLIENT"], [31, "CLAUDE_IMAGE_TOO_LARGE"], [33, "FILE_NOT_FOUND"], [34, "API_KEY_RATE_LIMIT"], [35, "DEBOUNCED"], [36, "BAD_REQUEST"], [37, "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"], [38, "UNAUTHORIZED"], [43, "CONVERSATION_TOO_LONG"], [44, "USAGE_PRICING_REQUIRED"], [45, "USAGE_PRICING_REQUIRED_CHANGEABLE"], [46, "GITHUB_NO_USER_CREDENTIALS"], [47, "GITHUB_USER_NO_ACCESS"], [48, "GITHUB_APP_NO_ACCESS"], [49, "GITHUB_MULTIPLE_OWNERS"], [50, "RATE_LIMITED"], [51, "RATE_LIMITED_CHANGEABLE"], [52, "CUSTOM"], [53, "HOOKS_BLOCKED"], [54, "SUSPICIOUS_USAGE_BLOCKED"], [55, "EXTENSION_HOST_TIMEOUT"], [56, "NETWORK_ERROR"], [57, "PROVIDER_ERROR"], [58, "MODEL_BLOCKED"], [59, "INTERNAL"], [60, "MAX_MODE_REQUIRED"], [61, "MODEL_NO_LONGER_SUPPORTED"], [62, "PRICING_WARNING"], [63, "SLOW_POOL"], [64, "UNSUPPORTED_REGION"], [65, "ACCOUNT_CLOSED"], [66, "TENANT_RESTRICTION_VIOLATION"]], 1);
    class _t extends o2 {
      constructor(t3) {
        super(), this.title = "", this.detail = "", this.buttons = [], this.additionalInfo = {}, this.planChoices = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CustomErrorDetails|1 title 9|2 detail 9|3 allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown 8?|4 is_retryable 8?|5 show_request_id 8?|6 should_show_immediate_error 8?|8 buttons #0*|7 additional_info 9,9|9 plan_choices #1*|10 analytics_metadata #2?", St, wt, yt];
      }
    }
    class yt extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ErrorAnalyticsMetadata|1 action_required 9?"];
      }
    }
    class wt extends o2 {
      constructor(t3) {
        super(), this.label = "", this.value = "", n2.proto3.util.initPartial(t3, this);
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
        return ["PlanChoice|1 label 9|2 sublabel 9?|3 description 9?|4 value 9"];
      }
    }
    class St extends o2 {
      constructor(t3) {
        super(), this.label = "", this.action = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ErrorButton|1 label 9|2 upgrade #0 action|3 switch_model #1 action|4 configure_spend_limit #2 action|5 url #3 action|6 upgrade_choice #4 action|7 dashboard_action #5 action|8 reload_window #6 action|9 client_action #7 action", Ct, bt, vt, qt, It, Et, Bt, Jt];
      }
    }
    class Jt extends o2 {
      constructor(t3) {
        super(), this.commandId = "", this.args = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["ClientAction|1 command_id 9|2 args 9,9"];
      }
    }
    class Bt extends o2 {
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
        return ["ReloadWindowAction"];
      }
    }
    class Et extends o2 {
      constructor(t3) {
        super(), this.action = "", this.args = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["DashboardAction|1 action 9|2 args 9,9|3 success_message 9?"];
      }
    }
    class It extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UpgradeChoice"];
      }
    }
    class Ct extends o2 {
      constructor(t3) {
        super(), this.membershipToUpgradeTo = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UpgradeAction|1 membership_to_upgrade_to 9|2 try_immediate_upgrade 8?|3 allow_trial 8?|4 dashboard_action #0?", Et];
      }
    }
    class bt extends o2 {
      constructor(t3) {
        super(), this.parameters = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SwitchModelAction|1 suggested_model 9?|2 parameters #0*|3 max_mode 8?", kt];
      }
    }
    class kt extends o2 {
      constructor(t3) {
        super(), this.id = "", this.value = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SwitchModelAction.ModelParameterValue|1 id 9|2 value 9"];
      }
    }
    class vt extends o2 {
      constructor(t3) {
        super(), this.confirmLabel = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ConfigureSpendLimitAction|1 confirm_label 9"];
      }
    }
    class qt extends o2 {
      constructor(t3) {
        super(), this.url = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UrlAction|1 url 9"];
      }
    }
    class Rt extends o2 {
      constructor(t3) {
        super(), this.data = new Uint8Array(0), this.uuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ImageProto|1 data 12|2 dimension #0|3 uuid 9|4 task_specific_description 9?", Pt];
      }
    }
    class Pt extends o2 {
      constructor(t3) {
        super(), this.width = 0, this.height = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ImageProto.Dimension|1 width 5|2 height 5"];
      }
    }
    class Tt extends o2 {
      constructor(t3) {
        super(), this.markdown = "", this.bubbleId = "", this.sectionIndex = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ChatQuote|1 markdown 9|2 bubble_id 9|3 section_index 5"];
      }
    }
    class xt extends o2 {
      constructor(t3) {
        super(), this.url = "", this.uuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ChatExternalLink|1 url 9|2 uuid 9|3 pdf_content 9?|4 is_pdf 8?|5 filename 9?"];
      }
    }
    class Nt extends o2 {
      constructor(t3) {
        super(), this.url = "", this.uuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ComposerExternalLink|1 url 9|2 uuid 9|3 pdf_content 9?|4 is_pdf 8?|5 filename 9?"];
      }
    }
    class Dt extends o2 {
      constructor(t3) {
        super(), this.url = "", this.uuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CmdKExternalLink|1 url 9|2 uuid 9"];
      }
    }
    class Ut extends o2 {
      constructor(t3) {
        super(), this.note = "", this.commitHash = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CommitNote|1 note 9|2 commit_hash 9"];
      }
    }
    class Qt extends o2 {
      constructor(t3) {
        super(), this.note = "", this.commitHash = "", this.embeddings = [], n2.proto3.util.initPartial(t3, this);
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
        return ["CommitNoteWithEmbeddings|1 note 9|2 commit_hash 9|3 embeddings 1*"];
      }
    }
    class Mt extends o2 {
      constructor(t3) {
        super(), this.diff = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CommitDiffString|1 diff 9"];
      }
    }
    class Ot extends o2 {
      constructor(t3) {
        super(), this.notes = [], this.commitHash = "", this.repoUrl = "", this.filesChangedRelativePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ot().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ot().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ot().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ot, t3, e3);
      }
      static $() {
        return ["FullCommitNotes|1 notes #0*|2 commit_hash 9|3 repo_url 9|4 files_changed_relative_path 9", Ut];
      }
    }
    class Ft extends o2 {
      constructor(t3) {
        super(), this.key = "", this.value = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CrossExtHostHeader|1 key 9|2 value 9"];
      }
    }
    class Lt extends o2 {
      constructor(t3) {
        super(), this.headers = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lt, t3, e3);
      }
      static $() {
        return ["CrossExtHostHeaders|1 headers #0*", Ft];
      }
    }
    class $t extends o2 {
      constructor(t3) {
        super(), this.message = new Uint8Array(0), this.isError = false, this.connectError = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SimpleUnaryCrossExtensionHostMessage|1 message 12|2 header #0|3 trailer #0|4 is_error 8|5 connect_error 9", Lt];
      }
    }
    class Gt extends o2 {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.languageIdentifier = "", n2.proto3.util.initPartial(t3, this);
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
        return ["CodeChunk|1 relative_workspace_path 9|2 start_line_number 5|3 lines 9*|4 summarization_strategy #0?|5 language_identifier 9|6 intent #1?|7 is_final_version 8?|8 is_first_version 8?", Kt, Ht];
      }
    }
    var Ht = (0, s2.QT)(n2.proto3, i2, "CodeChunk.Intent", [[0, "UNSPECIFIED"], [1, "COMPOSER_FILE"], [2, "COMPRESSED_COMPOSER_FILE"]], 1), Kt = (0, s2.QT)(n2.proto3, i2, "CodeChunk.SummarizationStrategy", [[0, "NONE_UNSPECIFIED"], [1, "SUMMARIZED"], [2, "EMBEDDED"]], 1);
    class Vt extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RCPCallFrame|1 function_name 9?|2 url 9?|3 line_number 5?|4 column_number 5?"];
      }
    }
    class zt extends o2 {
      constructor(t3) {
        super(), this.callFrames = [], n2.proto3.util.initPartial(t3, this);
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
        return ["RCPStackTrace|1 call_frames #0*|2 raw_stack_trace 9?", Vt];
      }
    }
    class Wt extends o2 {
      constructor(t3) {
        super(), this.message = "", this.timestamp = 0, this.level = "", this.clientName = "", this.sessionId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RCPLogEntry|1 message 9|2 timestamp 1|3 level 9|4 client_name 9|5 session_id 9|6 stack_trace #0?|7 object_data_json 9?", zt];
      }
    }
    class Yt extends o2 {
      constructor(t3) {
        super(), this.element = "", this.xpath = "", this.textContent = "", this.extra = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RCPUIElementPicked|1 element 9|2 xpath 9|3 text_content 9|4 extra 9|5 component 9?|6 component_props_json 9?"];
      }
    }
    class jt extends o2 {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RCPChatMessage|1 text 9"];
      }
    }
    class Xt extends o2 {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["RCPMessage|1 console #0 message|2 ui_element_picked #1 message|3 chat_message #2 message", Wt, Yt, jt];
      }
    }
  }