// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 77213 range:11307329..11332720
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77213: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { AiService: () => I });
    var n = r(58072), s = r(36038), o = r(50464), i = r(67918), a = r(81563), c = r(8592);
    const l = "aiserver.v1.";
    class u extends c.HL {
      static get runtime() {
        return (0, c.kU)(this, "runtime", s.proto3);
      }
      static $p() {
        return l;
      }
    }
    class d extends u {
      constructor(e2) {
        super(), this.repositories = [], this.contextBlocks = [], s.proto3.util.initPartial(e2, this);
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
        return s.proto3.util.equals(d, e2, t2);
      }
      static $() {
        return ["StreamInlineLongCompletionRequest|1 current_file #0|6 repositories #1*|7 context_blocks #2*|13 explicit_context #3|14 model_details #4|15 linter_errors #5", i.CurrentFileInfo, a.bn, p, i.ExplicitContext, i.ModelDetails, i.LinterErrors];
      }
    }
    class p extends u {
      constructor(e2) {
        super(), this.contextType = m.UNSPECIFIED, this.blocks = [], s.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return s.proto3.util.equals(p, e2, t2);
      }
      static $() {
        return ["StreamInlineLongCompletionRequest.ContextBlock|1 context_type #0|2 blocks #1*", m, i.CodeBlock];
      }
    }
    var m = (0, c.QT)(s.proto3, l, "StreamInlineLongCompletionRequest.ContextBlock.ContextType", [[0, "UNSPECIFIED"], [1, "RECENT_LOCATIONS"]], 1);
    class h extends c.HL {
      static get runtime() {
        return (0, c.kU)(this, "runtime", s.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class f extends h {
      constructor(e2) {
        super(), this.mainSymbolsToAnalyzeFromGoToDef = [], this.relatedSymbols = [], this.mainSymbolsToAnalyzeFromImplementations = [], s.proto3.util.initPartial(e2, this);
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
        return s.proto3.util.equals(f, e2, t2);
      }
      static $() {
        return ["StreamAiPreviewsIntent|1 main_symbols_to_analyze_from_go_to_def #0*|4 main_symbol_hover_details #1|3 related_symbols #0*|6 main_symbols_to_analyze_from_implementations #0*", i.DocumentSymbolWithText, i.HoverDetails];
      }
    }
    class g extends h {
      constructor(e2) {
        super(), s.proto3.util.initPartial(e2, this);
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
        return s.proto3.util.equals(g, e2, t2);
      }
      static $() {
        return ["StreamAiPreviewsRequest|1 current_file #0|2 intent #1|14 model_details #2|15 is_detailed 8?", i.CurrentFileInfo, f, i.ModelDetails];
      }
    }
    class y extends h {
      constructor(e2) {
        super(), this.text = "", s.proto3.util.initPartial(e2, this);
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
        return s.proto3.util.equals(y, e2, t2);
      }
      static $() {
        return ["StreamAiPreviewsResponse|1 text 9"];
      }
    }
    var w = r(66938), v = r(85035), _ = r(65610), A = r(1840), S = r(21934), b = r(82537), E = r(68100);
    const I = { typeName: "aiserver.v1.AiService", methods: { serverTime: { name: "ServerTime", I: n.SCH, O: n.SwF, kind: s.MethodKind.Unary }, healthCheck: { name: "HealthCheck", I: n.IOt, O: n.mJV, kind: s.MethodKind.Unary }, privacyCheck: { name: "PrivacyCheck", I: n.Ol7, O: n.IMZ, kind: s.MethodKind.Unary }, timeLeftHealthCheck: { name: "TimeLeftHealthCheck", I: n.IOt, O: n.oqw, kind: s.MethodKind.Unary }, throwErrorCheck: { name: "ThrowErrorCheck", I: n.mX5, O: n.OrW, kind: s.MethodKind.Unary }, availableModels: { name: "AvailableModels", I: n.p9_, O: n.DdE, kind: s.MethodKind.Unary }, streamChatTryReallyHard: { name: "StreamChatTryReallyHard", I: n.mL9, O: n.WCW, kind: s.MethodKind.ServerStreaming }, rerankDocuments: { name: "RerankDocuments", I: o.dq, O: o.pf, kind: s.MethodKind.Unary }, streamComposer: { name: "StreamComposer", I: n.m20, O: n.WCW, kind: s.MethodKind.ServerStreaming }, streamComposerContext: { name: "StreamComposerContext", I: n.hHC, O: n.lMe, kind: s.MethodKind.ServerStreaming }, warmComposerCache: { name: "WarmComposerCache", I: n.m20, O: n.Bdv, kind: s.MethodKind.Unary }, keepComposerCacheWarm: { name: "KeepComposerCacheWarm", I: n.mpm, O: n.mv, kind: s.MethodKind.Unary }, countTokens: { name: "CountTokens", I: n.TEv, O: n.nLx, kind: s.MethodKind.Unary }, streamPotentialLocs: { name: "StreamPotentialLocs", I: n.D8M, O: n.xiN, kind: s.MethodKind.ServerStreaming }, streamPotentialLocsUnderneath: { name: "StreamPotentialLocsUnderneath", I: n.ftY, O: n.b0t, kind: s.MethodKind.ServerStreaming }, streamPotentialLocsInitialQueries: { name: "StreamPotentialLocsInitialQueries", I: n.vym, O: n.fdo, kind: s.MethodKind.ServerStreaming }, getChatTitle: { name: "GetChatTitle", I: n.MGS, O: n.WNx, kind: s.MethodKind.Unary }, getCompletion: { name: "GetCompletion", I: n.OtZ, O: n.cES, kind: s.MethodKind.Unary }, isolatedTreesitter: { name: "IsolatedTreesitter", I: n.WnH, O: n.OxJ, kind: s.MethodKind.Unary }, getSimplePrompt: { name: "GetSimplePrompt", I: n.wf1, O: n.Wi0, kind: s.MethodKind.Unary }, getPassthroughPrompt: { name: "GetPassthroughPrompt", I: n.KnP, O: n.MKb, kind: s.MethodKind.Unary }, suggestQuickActions: { name: "SuggestQuickActions", I: n._20, O: n.UTs, kind: s.MethodKind.Unary }, checkLongFilesFit: { name: "CheckLongFilesFit", I: n.mL9, O: n.wVe, kind: s.MethodKind.Unary }, getEvaluationPrompt: { name: "GetEvaluationPrompt", I: n.act, O: n.wtK, kind: s.MethodKind.Unary }, getUserInfo: { name: "GetUserInfo", I: n.TvO, O: n.fWh, kind: s.MethodKind.Unary }, streamChat: { name: "StreamChat", I: n.mL9, O: n.WCW, kind: s.MethodKind.ServerStreaming }, streamChatWeb: { name: "StreamChatWeb", I: n.mL9, O: n.WCW, kind: s.MethodKind.ServerStreaming }, warmChatCache: { name: "WarmChatCache", I: n.dYm, O: n.F7m, kind: s.MethodKind.Unary }, streamEdit: { name: "StreamEdit", I: n.ooA, O: n.WCW, kind: s.MethodKind.ServerStreaming }, preloadEdit: { name: "PreloadEdit", I: n.LqM, O: n.dMi, kind: s.MethodKind.Unary }, streamFastEdit: { name: "StreamFastEdit", I: n.iQH, O: n.So5, kind: s.MethodKind.ServerStreaming }, streamGenerate: { name: "StreamGenerate", I: n.d3R, O: n.WCW, kind: s.MethodKind.ServerStreaming }, streamInlineLongCompletion: { name: "StreamInlineLongCompletion", I: d, O: n.WCW, kind: s.MethodKind.ServerStreaming }, slashEdit: { name: "SlashEdit", I: n.RHU, O: n.d0I, kind: s.MethodKind.ServerStreaming }, slashEditFollowUpWithPreviousEdits: { name: "SlashEditFollowUpWithPreviousEdits", I: n.lOy, O: n.FPO, kind: s.MethodKind.ServerStreaming }, streamAiPreviews: { name: "StreamAiPreviews", I: g, O: y, kind: s.MethodKind.ServerStreaming }, shouldTurnOnCppOnboarding: { name: "ShouldTurnOnCppOnboarding", I: w.vfF, O: w.feo, kind: s.MethodKind.Unary }, getComposerAutocomplete: { name: "GetComposerAutocomplete", I: n.iFM, O: n.E4j, kind: s.MethodKind.Unary }, streamReview: { name: "StreamReview", I: n.yhb, O: n.Y6D, kind: s.MethodKind.ServerStreaming }, streamReviewChat: { name: "StreamReviewChat", I: n.MVS, O: n.Q$j, kind: s.MethodKind.ServerStreaming }, checkQueuePosition: { name: "CheckQueuePosition", I: n.qFS, O: n.qbf, kind: s.MethodKind.Unary }, checkUsageBasedPrice: { name: "CheckUsageBasedPrice", I: n.ltC, O: n.heT, kind: s.MethodKind.Unary }, doThisForMeCheck: { name: "DoThisForMeCheck", I: n.E99, O: n.iW5, kind: s.MethodKind.Unary }, streamDoThisForMe: { name: "StreamDoThisForMe", I: n.yd8, O: n.$ot, kind: s.MethodKind.ServerStreaming }, streamChatToolformer: { name: "StreamChatToolformer", I: n.mL9, O: n.l5G, kind: s.MethodKind.ServerStreaming }, streamChatToolformerContinue: { name: "StreamChatToolformerContinue", I: n.sYT, O: n.l5G, kind: s.MethodKind.ServerStreaming }, pushAiThought: { name: "PushAiThought", I: n.LHT, O: n.LaV, kind: s.MethodKind.Unary }, checkDoableAsTask: { name: "CheckDoableAsTask", I: n.MFb, O: n.W2U, kind: s.MethodKind.Unary }, reportGroundTruthCandidate: { name: "ReportGroundTruthCandidate", I: n.x5, O: n.xKh, kind: s.MethodKind.Unary }, reportCmdKFate: { name: "ReportCmdKFate", I: n.jtE, O: n.$qZ, kind: s.MethodKind.Unary }, showWelcomeScreen: { name: "ShowWelcomeScreen", I: n.jrj, O: n.n_j, kind: s.MethodKind.Unary }, interfaceAgentInit: { name: "InterfaceAgentInit", I: n.usj, O: n.uOs, kind: s.MethodKind.Unary }, streamInterfaceAgentStatus: { name: "StreamInterfaceAgentStatus", I: n.sdu, O: n.ec0, kind: s.MethodKind.ServerStreaming }, taskGetInterfaceAgentStatus: { name: "TaskGetInterfaceAgentStatus", I: n.N9n, O: n.k0c, kind: s.MethodKind.ServerStreaming }, updateVscodeProfile: { name: "UpdateVscodeProfile", I: n.Ok2, O: n.Mx7, kind: s.MethodKind.Unary }, taskInit: { name: "TaskInit", I: n.rmw, O: n.TbJ, kind: s.MethodKind.Unary }, taskPause: { name: "TaskPause", I: n.X4q, O: n.F6q, kind: s.MethodKind.Unary }, taskInfo: { name: "TaskInfo", I: n.Jin, O: n.RdO, kind: s.MethodKind.Unary }, taskStreamLog: { name: "TaskStreamLog", I: n.Xyn, O: n.xME, kind: s.MethodKind.ServerStreaming }, taskSendMessage: { name: "TaskSendMessage", I: n.Mgi, O: n.omN, kind: s.MethodKind.Unary }, taskProvideResult: { name: "TaskProvideResult", I: n.R0_, O: n.hXM, kind: s.MethodKind.Unary }, createExperimentalIndex: { name: "CreateExperimentalIndex", I: v.Oz, O: v.uv, kind: s.MethodKind.Unary }, listExperimentalIndexFiles: { name: "ListExperimentalIndexFiles", I: v.HH, O: v.JP, kind: s.MethodKind.Unary }, listenExperimentalIndex: { name: "ListenExperimentalIndex", I: v.$P, O: v.fq, kind: s.MethodKind.ServerStreaming }, registerFileToIndex: { name: "RegisterFileToIndex", I: v.eL, O: v.g4, kind: s.MethodKind.Unary }, setupIndexDependencies: { name: "SetupIndexDependencies", I: v.yy, O: v.k7, kind: s.MethodKind.Unary }, computeIndexTopoSort: { name: "ComputeIndexTopoSort", I: v.bs, O: v.l_, kind: s.MethodKind.Unary }, streamChatDeepContext: { name: "StreamChatDeepContext", I: n.dcP, O: n.vQJ, kind: s.MethodKind.ServerStreaming }, chooseCodeReferences: { name: "ChooseCodeReferences", I: v.Gk, O: v.g4, kind: s.MethodKind.Unary }, registerCodeReferences: { name: "RegisterCodeReferences", I: v.cN, O: v.uE, kind: s.MethodKind.Unary }, extractPaths: { name: "ExtractPaths", I: v.zw, O: v.xu, kind: s.MethodKind.Unary }, summarizeWithReferences: { name: "SummarizeWithReferences", I: v.dG, O: v.g4, kind: s.MethodKind.Unary }, documentationQuery: { name: "DocumentationQuery", I: _.MZ, O: _.wP, kind: s.MethodKind.Unary }, availableDocs: { name: "AvailableDocs", I: n.SUk, O: n.ct8, kind: s.MethodKind.Unary }, runWebSearch: { name: "RunWebSearch", I: n.lS9, O: n.Jp, kind: s.MethodKind.Unary }, runWebFetch: { name: "RunWebFetch", I: n.j1R, O: n.re_, kind: s.MethodKind.Unary }, runGenerateImage: { name: "RunGenerateImage", I: n.bcC, O: n.fN6, kind: s.MethodKind.Unary }, runGenerateVideo: { name: "RunGenerateVideo", I: n.vBl, O: n.Xme, kind: s.MethodKind.Unary }, runXSearch: { name: "RunXSearch", I: n.fcH, O: n.LPg, kind: s.MethodKind.Unary }, classifyAgentAutoReview: { name: "ClassifyAgentAutoReview", I: n.yUi, O: n.oVQ, kind: s.MethodKind.Unary }, runDescribeImage: { name: "RunDescribeImage", I: n.B8z, O: n.bA, kind: s.MethodKind.Unary }, detectShellHang: { name: "DetectShellHang", I: n.HTD, O: n.zm, kind: s.MethodKind.Unary }, reportFeedback: { name: "ReportFeedback", I: n.Hti, O: n.H6A, kind: s.MethodKind.Unary }, reportBug: { name: "ReportBug", I: n._Mj, O: n.Cie, kind: s.MethodKind.Unary }, streamChatContext: { name: "StreamChatContext", I: n.hHC, O: n.lMe, kind: s.MethodKind.ServerStreaming }, generateTldr: { name: "GenerateTldr", I: n.$zA, O: n.JJe, kind: s.MethodKind.Unary }, taskStreamChatContext: { name: "TaskStreamChatContext", I: n.Mef, O: n.nm0, kind: s.MethodKind.ServerStreaming }, rerankResults: { name: "RerankResults", I: n.w_x, O: n.ksz, kind: s.MethodKind.Unary }, modelQuery: { name: "ModelQuery", I: n.X4d, O: n.Juj, kind: s.MethodKind.Unary }, modelQueryV2: { name: "ModelQueryV2", I: n.X4d, O: n.HjR, kind: s.MethodKind.ServerStreaming }, intentPrediction: { name: "IntentPrediction", I: n.TyK, O: n.dsP, kind: s.MethodKind.Unary }, getChatSuggestions: { name: "GetChatSuggestions", I: n.nc3, O: n.tiK, kind: s.MethodKind.Unary }, getUserInstructions: { name: "GetUserInstructions", I: n.mBv, O: n.cy1, kind: s.MethodKind.Unary }, streamCursorTutor: { name: "StreamCursorTutor", I: n.KtF, O: n.okR, kind: s.MethodKind.ServerStreaming }, checkFeatureStatus: { name: "CheckFeatureStatus", I: n.ccI, O: n.mHD, kind: s.MethodKind.Unary }, checkFeaturesStatus: { name: "CheckFeaturesStatus", I: n.F5_, O: n.RAe, kind: s.MethodKind.Unary }, checkFeatureStatusUnauthenticated: { name: "CheckFeatureStatusUnauthenticated", I: n.ccI, O: n.mHD, kind: s.MethodKind.Unary }, getEffectiveTokenLimit: { name: "GetEffectiveTokenLimit", I: n.fJn, O: n.hl, kind: s.MethodKind.Unary }, getContextScores: { name: "GetContextScores", I: n.OKB, O: n.iQm, kind: s.MethodKind.Unary }, streamCpp: { name: "StreamCpp", I: w.DOp, O: w.$pi, kind: s.MethodKind.ServerStreaming }, cppConfig: { name: "CppConfig", I: w.$FK, O: w.z8t, kind: s.MethodKind.Unary }, cppEditHistoryStatus: { name: "CppEditHistoryStatus", I: w.DLS, O: w.Deb, kind: s.MethodKind.Unary }, cppAppend: { name: "CppAppend", I: w.Tob, O: w.d0d, kind: s.MethodKind.Unary }, refreshTabContext: { name: "RefreshTabContext", I: w.rgN, O: w.r5_, kind: s.MethodKind.Unary }, checkNumberConfig: { name: "CheckNumberConfig", I: n.VEu, O: n.jUq, kind: s.MethodKind.Unary }, checkNumberConfigUnauthenticated: { name: "CheckNumberConfigUnauthenticated", I: n.VEu, O: n.jUq, kind: s.MethodKind.Unary }, checkNumberConfigs: { name: "CheckNumberConfigs", I: n.sm_, O: n.azv, kind: s.MethodKind.Unary }, streamTerminalAutocomplete: { name: "StreamTerminalAutocomplete", I: n.ACo, O: n.mlm, kind: s.MethodKind.ServerStreaming }, streamPseudocodeGenerator: { name: "StreamPseudocodeGenerator", I: n.KuK, O: n.YXg, kind: s.MethodKind.ServerStreaming }, streamPseudocodeMapper: { name: "StreamPseudocodeMapper", I: n.QLE, O: n.CO$, kind: s.MethodKind.ServerStreaming }, acknowledgeGracePeriodDisclaimer: { name: "AcknowledgeGracePeriodDisclaimer", I: n.c1C, O: n.o5n, kind: s.MethodKind.Unary }, streamAiLintBug: { name: "StreamAiLintBug", I: n.LTN, O: n.PUj, kind: s.MethodKind.ServerStreaming }, streamAiCursorHelp: { name: "StreamAiCursorHelp", I: n.nyy, O: n.ndB, kind: s.MethodKind.ServerStreaming }, logUserLintReply: { name: "LogUserLintReply", I: n.k8r, O: n.EOP, kind: s.MethodKind.Unary }, logLinterExplicitUserFeedback: { name: "LogLinterExplicitUserFeedback", I: n.YJv, O: n.MpV, kind: s.MethodKind.Unary }, streamFixMarkers: { name: "StreamFixMarkers", I: n.WwQ, O: n.wh, kind: s.MethodKind.ServerStreaming }, reportInlineAction: { name: "ReportInlineAction", I: A.ReportInlineActionRequest, O: A.ReportInlineActionResponse, kind: s.MethodKind.Unary }, streamPriomptPrompt: { name: "StreamPriomptPrompt", I: n.ZOv, O: n.t$C, kind: s.MethodKind.ServerStreaming }, streamLint: { name: "StreamLint", I: n.JEN, O: n.WCW, kind: s.MethodKind.ServerStreaming }, streamNewLintRule: { name: "StreamNewLintRule", I: n.wdE, O: n.WCW, kind: s.MethodKind.ServerStreaming }, aiProject: { name: "AiProject", I: n.RMu, O: n.fIp, kind: s.MethodKind.ServerStreaming }, toCamelCase: { name: "ToCamelCase", I: n.vA0, O: n.teu, kind: s.MethodKind.Unary }, reportGenerationFeedback: { name: "ReportGenerationFeedback", I: n.h3x, O: n.zJJ, kind: s.MethodKind.Unary }, reportAgentFeedback: { name: "ReportAgentFeedback", I: n.mM_, O: n.sJF, kind: s.MethodKind.Unary }, reportAgentMessageFeedback: { name: "ReportAgentMessageFeedback", I: n.H5P, O: n.vMk, kind: s.MethodKind.Unary }, reportAutoRoutingResultFeedback: { name: "ReportAutoRoutingResultFeedback", I: n.D3r, O: n.f2Q, kind: s.MethodKind.Unary }, getThoughtAnnotation: { name: "GetThoughtAnnotation", I: n.anG, O: n.kmV, kind: s.MethodKind.Unary }, streamWebCmdKV1: { name: "StreamWebCmdKV1", I: n.ko_, O: n.sG3, kind: s.MethodKind.ServerStreaming }, streamNextCursorPrediction: { name: "StreamNextCursorPrediction", I: n.uw2, O: n.q6T, kind: s.MethodKind.ServerStreaming }, isCursorPredictionEnabled: { name: "IsCursorPredictionEnabled", I: n.WIL, O: n.iaE, kind: s.MethodKind.Unary }, getCppEditClassification: { name: "GetCppEditClassification", I: w.f14, O: w.nWu, kind: s.MethodKind.Unary }, getTerminalCompletion: { name: "GetTerminalCompletion", I: n.Ak6, O: n.uj3, kind: s.MethodKind.Unary }, takeNotesOnCommitDiff: { name: "TakeNotesOnCommitDiff", I: n.HpI, O: n.PI4, kind: s.MethodKind.Unary }, bulkEmbed: { name: "BulkEmbed", I: n.lz$, O: n.ByM, kind: s.MethodKind.Unary }, backgroundCmdKEval: { name: "BackgroundCmdKEval", I: n.BTT, O: n.Ln3, kind: s.MethodKind.ServerStreaming }, backgroundCmdK: { name: "BackgroundCmdK", I: n.duI, O: n.nuU, kind: s.MethodKind.ServerStreaming }, calculateAutoSelection: { name: "CalculateAutoSelection", I: n.T4Y, O: n.x0o, kind: s.MethodKind.Unary }, getAtSymbolSuggestions: { name: "GetAtSymbolSuggestions", I: n.e26, O: n.gbM, kind: s.MethodKind.Unary }, getCodebaseQuestions: { name: "GetCodebaseQuestions", I: n.mL9, O: n.xR6, kind: s.MethodKind.Unary }, cppEditHistoryAppend: { name: "CppEditHistoryAppend", I: w.Zk9, O: w.jSP, kind: s.MethodKind.Unary }, devOnlyGetPastRequestIds: { name: "DevOnlyGetPastRequestIds", I: n.me3, O: n.CMn, kind: s.MethodKind.Unary }, getFilesForComposer: { name: "GetFilesForComposer", I: n.stD, O: n.yuc, kind: s.MethodKind.Unary }, tryParseTypeScriptTreeSitter: { name: "TryParseTypeScriptTreeSitter", I: n.gQJ, O: n.K3J, kind: s.MethodKind.Unary }, nameTab: { name: "NameTab", I: n.MiP, O: n.wM1, kind: s.MethodKind.Unary }, keepTaskList: { name: "KeepTaskList", I: n.ilE, O: n._lm, kind: s.MethodKind.Unary }, isTerminalFinishedV2: { name: "IsTerminalFinishedV2", I: n.Cwd, O: n.CGh, kind: s.MethodKind.Unary }, testModelStatus: { name: "TestModelStatus", I: n.RsN, O: n.rKM, kind: s.MethodKind.Unary }, findBugs: { name: "FindBugs", I: n.AGA, O: n.et4, kind: s.MethodKind.Unary }, contextReranking: { name: "ContextReranking", I: n.QGk, O: n.waV, kind: s.MethodKind.Unary }, autoContext: { name: "AutoContext", I: n.GBD, O: n.CRE, kind: s.MethodKind.Unary }, writeGitCommitMessage: { name: "WriteGitCommitMessage", I: n.vXc, O: n.vqr, kind: s.MethodKind.Unary }, writeGitBranchName: { name: "WriteGitBranchName", I: n.wtI, O: n.Efy, kind: s.MethodKind.Unary }, streamBugBot: { name: "StreamBugBot", I: S.HC, O: n.tGc, kind: s.MethodKind.ServerStreaming }, streamBugBotAgentic: { name: "StreamBugBotAgentic", I: n.rEl, O: n.x7t, kind: s.MethodKind.BiDiStreaming }, streamBugBotAgenticSSE: { name: "StreamBugBotAgenticSSE", I: b.BidiRequestId, O: n.x7t, kind: s.MethodKind.ServerStreaming }, streamBugBotAgenticPoll: { name: "StreamBugBotAgenticPoll", I: b.BidiPollRequest, O: b.BidiPollResponse, kind: s.MethodKind.ServerStreaming }, streamUiBestOfNJudge: { name: "StreamUiBestOfNJudge", I: n.Zw8, O: n.Rqz, kind: s.MethodKind.BiDiStreaming }, streamUiBestOfNJudgeSSE: { name: "StreamUiBestOfNJudgeSSE", I: b.BidiRequestId, O: n.Rqz, kind: s.MethodKind.ServerStreaming }, streamUiBestOfNJudgePoll: { name: "StreamUiBestOfNJudgePoll", I: b.BidiPollRequest, O: b.BidiPollResponse, kind: s.MethodKind.ServerStreaming }, checkBugBotPrice: { name: "CheckBugBotPrice", I: n.UK4, O: n.ubH, kind: s.MethodKind.Unary }, checkBugBotTelemetryHealthy: { name: "CheckBugBotTelemetryHealthy", I: n.R4x, O: n.H2i, kind: s.MethodKind.Unary }, recordIdeBugReaction: { name: "RecordIdeBugReaction", I: n.kCY, O: n.aLk, kind: s.MethodKind.Unary }, getSuggestedBugBotIterations: { name: "GetSuggestedBugBotIterations", I: n.exC, O: n.mPV, kind: s.MethodKind.Unary }, getEditorBugbotAutoRunStatus: { name: "GetEditorBugbotAutoRunStatus", I: n.EUI, O: n.KFK, kind: s.MethodKind.Unary }, testBidi: { name: "TestBidi", I: n.wbM, O: n.U$u, kind: s.MethodKind.BiDiStreaming }, streamDiffReview: { name: "StreamDiffReview", I: n.N6e, O: n.VOD, kind: s.MethodKind.ServerStreaming }, streamDiffReviewByFile: { name: "StreamDiffReviewByFile", I: n.N6e, O: n.I0J, kind: s.MethodKind.ServerStreaming }, getModelLabels: { name: "GetModelLabels", I: n.qgK, O: n.QjC, kind: s.MethodKind.Unary }, getLastDefaultModelNudge: { name: "GetLastDefaultModelNudge", I: n.xkS, O: n.z_C, kind: s.MethodKind.Unary }, getDefaultModelNudgeData: { name: "GetDefaultModelNudgeData", I: n.hM5, O: n.ZJK, kind: s.MethodKind.Unary }, getDefaultModel: { name: "GetDefaultModel", I: n.EiZ, O: n.M6A, kind: s.MethodKind.Unary }, reportCommitAiAnalytics: { name: "ReportCommitAiAnalytics", I: n.zBl, O: n.PIq, kind: s.MethodKind.Unary }, testBedrockCredentials: { name: "TestBedrockCredentials", I: n.q$b, O: n.UeK, kind: s.MethodKind.Unary }, reportAiCodeChangeMetrics: { name: "ReportAiCodeChangeMetrics", I: n.Ot4, O: n.Sp9, kind: s.MethodKind.Unary }, reportProcessMetrics: { name: "ReportProcessMetrics", I: n.Chk, O: n.yZw, kind: s.MethodKind.Unary }, reportProcessMetricsV2: { name: "ReportProcessMetricsV2", I: n.Uo$, O: n.wCH, kind: s.MethodKind.Unary }, reportSandProcessMetrics: { name: "ReportSandProcessMetrics", I: n.GQS, O: n.EFZ, kind: s.MethodKind.Unary }, reportClientNumericMetrics: { name: "ReportClientNumericMetrics", I: n.jx5, O: n.nyJ, kind: s.MethodKind.Unary }, potentiallyGenerateMemory: { name: "PotentiallyGenerateMemory", I: n.RBQ, O: n.Pzp, kind: s.MethodKind.Unary }, knowledgeBaseAdd: { name: "KnowledgeBaseAdd", I: n.ShW, O: n.ePQ, kind: s.MethodKind.Unary }, knowledgeBaseList: { name: "KnowledgeBaseList", I: n.txG, O: n.HDd, kind: s.MethodKind.Unary }, knowledgeBaseRemove: { name: "KnowledgeBaseRemove", I: n.ZVT, O: n.dIn, kind: s.MethodKind.Unary }, knowledgeBaseUpdate: { name: "KnowledgeBaseUpdate", I: n.iCT, O: n.Ebb, kind: s.MethodKind.Unary }, fetchRelevantKnowledgeForConversation: { name: "FetchRelevantKnowledgeForConversation", I: n.jCo, O: n.xU6, kind: s.MethodKind.Unary }, inferBackgroundComposerScripts: { name: "InferBackgroundComposerScripts", I: n.KGZ, O: n.IT0, kind: s.MethodKind.Unary }, getBackgroundComposerFeedbackLink: { name: "GetBackgroundComposerFeedbackLink", I: n.Xol, O: n.bPN, kind: s.MethodKind.Unary }, getUsableModels: { name: "GetUsableModels", I: E.KD, O: E.sY, kind: s.MethodKind.Unary }, getDefaultModelForCli: { name: "GetDefaultModelForCli", I: E.Tu, O: E.pe, kind: s.MethodKind.Unary }, streamComposerEnhancer: { name: "StreamComposerEnhancer", I: n.d$v, O: n.Ftz, kind: s.MethodKind.BiDiStreaming }, streamComposerEnhancerSSE: { name: "StreamComposerEnhancerSSE", I: b.BidiRequestId, O: n.Ftz, kind: s.MethodKind.ServerStreaming }, streamComposerEnhancerPoll: { name: "StreamComposerEnhancerPoll", I: b.BidiPollRequest, O: b.BidiPollResponse, kind: s.MethodKind.ServerStreaming }, streamStt: { name: "StreamStt", I: n.Kwv, O: n.Efe, kind: s.MethodKind.BiDiStreaming }, streamSttSSE: { name: "StreamSttSSE", I: b.BidiRequestId, O: n.Efe, kind: s.MethodKind.ServerStreaming }, streamSttPoll: { name: "StreamSttPoll", I: b.BidiPollRequest, O: b.BidiPollResponse, kind: s.MethodKind.ServerStreaming }, transcribeAudio: { name: "TranscribeAudio", I: n.Z4d, O: n.J3e, kind: s.MethodKind.Unary }, llmGatewayConnectionTester: { name: "LlmGatewayConnectionTester", I: n.kQR, O: n._by, kind: s.MethodKind.Unary }, testTeamInferenceHookConnection: { name: "TestTeamInferenceHookConnection", I: n.NWs, O: n.RfZ, kind: s.MethodKind.Unary }, textToSpeech: { name: "TextToSpeech", I: n.Wnz, O: n.q7U, kind: s.MethodKind.Unary }, mintRealtimeVoiceSecret: { name: "MintRealtimeVoiceSecret", I: n.JFX, O: n.xCu, kind: s.MethodKind.Unary }, setRealtimeVoice: { name: "SetRealtimeVoice", I: n.v1y, O: n.pvy, kind: s.MethodKind.Unary }, getRealtimeVoice: { name: "GetRealtimeVoice", I: n.pG1, O: n.zu, kind: s.MethodKind.Unary }, nameAgent: { name: "NameAgent", I: E.Il, O: E.mw, kind: s.MethodKind.Unary }, evaluatePromptHook: { name: "EvaluatePromptHook", I: n.Ij7, O: n.AZF, kind: s.MethodKind.Unary }, computerUseDecideNextAction: { name: "ComputerUseDecideNextAction", I: n.PZB, O: n.Jl7, kind: s.MethodKind.Unary }, getCloudSetupBlockers: { name: "GetCloudSetupBlockers", I: n.hhB, O: n.vzo, kind: s.MethodKind.Unary } } };
  }