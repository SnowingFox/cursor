// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 80732 range:11651307..11679320
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80732: (e, t, r) => {
    "use strict";
    r.d(t, { A: () => V });
    var n = r(6688), s = r(17392), o = r(69584), i = r(52774), a = r(51635);
    const c = (0, r(37949).h)("@anysphere/agent-host:managed-local-custom-subagent-models");
    function l(e2) {
      const t2 = e2.model.trim().toLowerCase();
      return "" === t2 || "inherit" === t2 ? void 0 : e2.model;
    }
    const u = { maxDirectMcpTools: 100, maxAdvertisedTools: 300, enableToolArgPreservation: true, enableImageFiles: true, enableSemanticSearch: false };
    var d = r(20859), p = r(26814);
    function m(e2) {
      return { modelId: e2.resolvedModel?.modelId ?? e2.modelId, maxMode: e2.resolvedModel?.maxMode ?? e2.requestedModel.maxMode };
    }
    function h(e2) {
      return [...e2.nonFileRules ?? []];
    }
    var f = r(33275);
    function g(e2) {
      const { parentModelId: t2, modelInfo: r2, featureFlags: n2, subagentModelConfig: s2, customSubagentModels: o2 } = e2, i2 = { getTaskToolConfig: async () => {
        throw new Error("managed local loop does not build in-process child AgentConfig");
      }, modelInfo: r2, enableExecuteHookExec: true, enableExploreSubagent: n2.enableExploreSubagent ?? false, enableShellSubagent: n2.enableShellSubagent ?? false, enableDebugSubagent: n2.enableDebugSubagent ?? false, enableBrowserSubagent: n2.enableBrowserSubagent ?? false, enableGrindSwarmSubagent: n2.enableGrindSwarmSubagent ?? false, requireServerSideSubagent: false, normalizeCustomSubagents: (e3) => o2.normalize(e3) };
      return void 0 === s2 ? { ...i2, ...y(t2) } : "omit-task-tool" !== s2.kind ? { ...i2, ...w(s2.config, o2) } : void 0;
    }
    function y(e2) {
      return { parentRequestedModelName: e2, parentMaxMode: void 0, isModelBlocked: (t2) => t2 !== e2, isModelValid: (t2) => t2 === e2, requiresMaxMode: void 0, forceModelId: e2, subagentModelForcePolicy: "parent_pin", compareModelCosts: () => 0, subagentModels: { modelsBySlug: /* @__PURE__ */ new Map([[e2, { slug: e2 }]]) }, subagentModelOverrides: {} };
    }
    function w(e2, t2) {
      const r2 = (t3) => e2.models.get(t3), n2 = (e3) => t2.isPinned(e3);
      return { parentRequestedModelName: e2.parentRequestedModelName, parentMaxMode: e2.parentMaxMode, isModelBlocked: (e3) => !n2(e3) && (r2(e3)?.blocked ?? false), isModelValid: (e3) => n2(e3) || (r2(e3)?.valid ?? false), requiresMaxMode: (e3) => !n2(e3) && (r2(e3)?.requiresMaxMode ?? false), forceModelId: e2.forceModelId, subagentModelForcePolicy: e2.forcePolicy, compareModelCosts: (e3, t3) => (r2(e3)?.representativeCostDollars ?? 0) - (r2(t3)?.representativeCostDollars ?? 0), subagentModels: (0, f.O)(e2), subagentModelOverrides: { ...e2.overrides } };
    }
    var v = r(58072), _ = r(81563), A = r(40328), S = r(8032);
    const b = 25;
    function E(e2) {
      return async (t2, r2, s2, o2) => {
        const i2 = s2[0], a2 = o2?.targetDirectories ?? [];
        return e2.searchRepositoryV2(new _.W$({ query: r2, topK: o2?.topK ?? b, repository: i2, ...a2.length > 0 ? { globFilter: (0, n.S3w)(a2, false) } : {} }), { signal: t2.signal });
      };
    }
    function I(e2, t2) {
      const r2 = e2.codebaseSearch;
      return void 0 === r2 ? { enabled: false, searchImplementation: () => {
        throw new Error("semantic search invoked on a session without a codebase search client");
      } } : { enabled: t2 ?? u.enableSemanticSearch, searchImplementation: E(r2) };
    }
    class C extends Error {
      constructor(e2) {
        super(e2), this.name = "ManagedLocalGenerateImageError";
      }
    }
    class k extends Error {
      constructor(e2) {
        super(e2), this.name = "ManagedLocalGenerateImageModelRestrictedError";
      }
    }
    const x = "xAI may still bill this job; do not retry unless the user asks.";
    class T extends Error {
      constructor(e2) {
        super(e2), this.name = "ManagedLocalGenerateVideoError";
      }
    }
    function R(e2, t2) {
      return async (r2, n2) => {
        try {
          const s2 = await e2.runWebSearch(new v.lS9({ searchTerm: n2.searchTerm, explanation: n2.explanation, modelId: t2.modelId }), { signal: r2.signal });
          return { answer: s2.answer, documents: s2.documents.map((e3) => ({ url: e3.url, title: e3.title, text: e3.text })) };
        } catch (e3) {
          if (e3 instanceof A.T && e3.code !== S.C.Canceled && e3.code !== S.C.Aborted) throw new Error(e3.rawMessage);
          throw e3;
        }
      };
    }
    function B(e2) {
      return async (t2, r2) => {
        try {
          const n2 = await e2.runWebFetch(new v.j1R({ url: r2 }), { signal: t2.signal });
          switch (n2.result.case) {
            case "success":
              return { content: n2.result.value.content };
            case "error":
              return { error: n2.result.value.error, isTimeout: n2.result.value.isTimeout };
            case void 0:
              return { error: "Web fetch returned no result." };
            default:
              return n2.result;
          }
        } catch (e3) {
          if (e3 instanceof A.T && e3.code !== S.C.Canceled && e3.code !== S.C.Aborted) return { error: e3.rawMessage };
          throw e3;
        }
      };
    }
    function P(e2, t2) {
      return async (r2, n2, s2, o2, i2) => {
        try {
          const a2 = await e2.runGenerateImage(new v.bcC({ description: n2, referenceImages: (o2 ?? []).map((e3) => new v.Vgy({ data: e3.data, mimeType: e3.mimeType })), modelId: t2.modelId, maxMode: t2.maxMode, aspectRatio: i2 }), { signal: r2.signal });
          switch (a2.result.case) {
            case "success": {
              const { imageData: e3, mimeType: t3 } = a2.result.value;
              return { filePath: O(s2, t3), imageData: e3, mimeType: t3 };
            }
            case "error":
              if (a2.result.value.modelRestricted) throw new k(a2.result.value.error);
              throw new C(a2.result.value.error);
            case void 0:
              throw new C("Image generation returned no result.");
            default:
              return a2.result;
          }
        } catch (e3) {
          if (e3 instanceof A.T && e3.code !== S.C.Canceled && e3.code !== S.C.Aborted) throw new C(e3.rawMessage);
          throw e3;
        }
      };
    }
    function J(e2, t2) {
      return async (r2, s2) => {
        let o2;
        try {
          o2 = await e2.runGenerateVideo(new v.vBl({ prompt: s2.prompt, image: void 0 === s2.image ? void 0 : new v.Vgy(s2.image), referenceImages: s2.referenceImages.map((e3) => new v.Vgy(e3)), modelId: t2.modelId, maxMode: t2.maxMode, durationSeconds: s2.durationSeconds, aspectRatio: s2.aspectRatio, resolution: s2.resolution }), { signal: r2.signal });
        } catch (e3) {
          if (!(e3 instanceof A.T) || e3.code === S.C.Canceled || e3.code === S.C.Aborted) throw e3;
          if (e3.code === S.C.DeadlineExceeded) throw (0, n.CLb)({ message: `${e3.rawMessage}. ${x}`, providerStatusCode: 504, contentSafetyBlocked: false });
          throw new T(e3.rawMessage);
        }
        switch (o2.result.case) {
          case "success":
            return { videoData: o2.result.value.videoData, durationSeconds: o2.result.value.durationSeconds };
          case "error":
            throw (0, n.CLb)({ message: o2.result.value.error, providerStatusCode: o2.result.value.providerStatusCode, contentSafetyBlocked: o2.result.value.contentSafetyBlocked });
          case void 0:
            throw new T("Video generation returned no result.");
          default:
            return o2.result;
        }
      };
    }
    function M(e2, t2) {
      if (true === t2.featureFlags.enableGenerateVideo) return { service: J(e2, t2), concurrencyLimiter: (0, n.jRf)(1) };
    }
    const q = /* @__PURE__ */ new Set([S.C.InvalidArgument, S.C.FailedPrecondition, S.C.PermissionDenied, S.C.ResourceExhausted, S.C.Unauthenticated, S.C.Unimplemented]);
    function D(e2, t2) {
      return async (r2, s2) => {
        let o2;
        try {
          o2 = await e2.runXSearch(new v.fcH({ query: s2.query, fromDate: s2.fromDate, toDate: s2.toDate, allowedXHandles: s2.allowedXHandles, excludedXHandles: s2.excludedXHandles, modelId: t2.modelId, maxMode: t2.maxMode }), { signal: r2.signal });
        } catch (e3) {
          if (e3 instanceof A.T && e3.code !== S.C.Canceled && e3.code !== S.C.Aborted) {
            if (q.has(e3.code)) throw new n.oPw(e3.rawMessage);
            throw new Error(`RunXSearch failed (${S.C[e3.code]}): ${e3.rawMessage}`);
          }
          throw e3;
        }
        switch (o2.result.case) {
          case "success":
            return { answer: o2.result.value.answer, citations: o2.result.value.citations.map((e3) => ({ url: e3.url, title: e3.title })) };
          case "error":
            throw new n.oPw(o2.result.value.error, o2.result.value.providerStatusCode);
          case void 0:
            throw new n.oPw("X search returned no result.");
          default:
            return o2.result;
        }
      };
    }
    function O(e2, t2) {
      return e2 ?? `${crypto.randomUUID()}.${(function(e3) {
        switch (e3) {
          case "image/gif":
            return "gif";
          case "image/jpeg":
            return "jpg";
          case "image/webp":
            return "webp";
          default:
            return "png";
        }
      })(t2)}`;
    }
    const N = 3;
    const F = { disableBackgroundTaskFollowUp: false, enableAwaitForSubagents: true, enableBackgroundTaskProgress: true, enableBoundedSubagentAwait: true, enableDebugSubagent: true, enableEmptyResponseRetry: true, enableExploreSubagent: true, enableGrepBroadGlobGuard: true, enableReadToolNegativeOffset: true, enableSandboxSharedBuildCache: true, longRunningJobs: true, nalLoopDetection: true, outputNotificationLimit: 1e3, useClientSideSubagent: true };
    class U extends Error {
      constructor(e2) {
        super(e2), this.name = "ManagedLocalSmartModeClassifierError";
      }
    }
    function L(e2, t2 = {}) {
      return { async execute(r2, s2) {
        const o2 = r2.get(n.E_I), i2 = r2.get(n.eNU) ?? "enforce", a2 = r2.get(n.aVj) ?? [], c2 = $(t2.attemptRequestId) ?? $(r2.get(n.kuS)), l2 = $(t2.originalRequestId), u2 = { ...void 0 === c2 ? {} : { "x-request-id": c2 }, ...void 0 === l2 ? {} : { "x-original-request-id": l2 } }, d2 = await e2.classifyAgentAutoReview(new v.yUi({ args: s2, attemptIndex: o2, mode: i2, workspacePaths: a2, ...true === t2.agentEventsRecorded ? { callerRecordsClassifierCall: true } : {} }), { signal: r2.signal, ...0 === Object.keys(u2).length ? {} : { headers: u2 } });
        if (void 0 === d2.result) throw new U("ClassifyAgentAutoReview returned no result");
        return d2.result;
      } };
    }
    function $(e2) {
      return void 0 === e2 || "" === e2 ? void 0 : e2;
    }
    const Q = { mode: false, shadowMode: false, executor: void 0 };
    class j extends s.SK {
      constructor(e2) {
        super(`Local loop cannot resolve subagent type "${e2}"`, { displayInfo: { title: "Local loop can't run this subagent type", detail: `This build cannot resolve the "${e2}" subagent type client-side (it is not a builtin or a workspace/plugin subagent this conversation knows; meta and computer-use subagents are not supported on the local loop yet — see GAPS.md). Disable agent_host_local_loop to run it through the backend loop.`, isRetryable: false } }), this.subagentTypeName = e2;
      }
    }
    class G extends s.SK {
      constructor(e2) {
        super(`Local loop cannot confine subagent type "${e2}": the turn has no write allowlist`, { displayInfo: { title: "Local loop can't confine this subagent type", detail: `The "${e2}" subagent type restricts where it writes, and this turn has no write allowlist to enforce (usually because no project folder is open), so the local loop refused to run it unconfined. Open a project folder and retry; if one is open, update Cursor, or disable agent_host_local_loop to run it through the backend loop.`, isRetryable: false } }), this.subagentTypeName = e2;
      }
    }
    function H(e2, t2, r2) {
      if (void 0 === t2.computeAllowedWritePaths) return r2;
      if (void 0 === r2 || 0 === r2.length) throw new G(e2);
      return r2;
    }
    function z(e2) {
      const t2 = (function(e3, t3, r3, s2 = {}) {
        const o2 = (0, n.$Iz)({ customSubagents: [...r3], enableNestedSubagents: t3?.enableNestedSubagents ?? false, includeComputerUseSubagent: false, includeVideoReviewSubagent: false, includeWatchVideoSubagent: (0, n.r26)({ agentType: n.Eoi.IDE, backgroundAgentSource: void 0, featureFlags: t3 }), includeExploreSubagent: t3?.enableExploreSubagent ?? false, includeShellSubagent: t3?.enableShellSubagent ?? false, includeDebugSubagent: t3?.enableDebugSubagent ?? false, includeBrowserUseSubagent: t3?.enableBrowserSubagent ?? false, includeGrindSwarmSubagent: t3?.enableGrindSwarmSubagent ?? false, includeCursorGuideSubagent: true, includeCiInvestigatorSubagent: t3?.enableCiInvestigatorSubagent ?? false, includeBugbotSubagent: t3?.enableBugbotSubagent ?? false, bugbotSupportsNaturalLanguage: t3?.enableReviewAgentNaturalLanguageDescription ?? false, bugbotEnableProactiveReview: t3?.enableProactiveBugbotReviewSubagent ?? false, includeSecurityReviewSubagent: t3?.enableSecurityReviewSubagent ?? false, includeFsdSubagent: t3?.enableFsdSubagent ?? false, subagentModelOverrides: { ...s2 } });
        return (0, n.hmv)(o2, e3);
      })(e2.subagentTypeName, e2.featureFlags, e2.customSubagents, e2.subagentModelOverrides);
      if (void 0 === t2) throw new j(e2.subagentTypeName);
      const r2 = (0, n.O$A)(e2.baseConfig, { subagentConfig: t2, isMetaTaskWorkerSubagent: false, isBugbotSubagent: (0, n._2n)(e2.subagentTypeName) === (0, n._2n)(n.XB8), subagentInstanceId: e2.subagentInstanceId, featureFlags: e2.featureFlags, suppressSubagentProgressUpdateTool: true === e2.suppressSubagentProgressUpdateTool, metaAgentNotesReminder: void 0, projectFolder: e2.projectFolder });
      return { config: { ...e2.baseConfig, toolsGenerator: r2.toolsGenerator, systemPromptGenerator: r2.systemPromptGenerator }, resolvedSubagentSystemReminder: r2.resolvedSubagentSystemReminder, allowedWritePrefixes: H(e2.subagentTypeName, t2, r2.allowedWritePrefixes) };
    }
    const W = 3;
    function V(e2, t2, r2 = {}, f2 = {}) {
      const y2 = e2.resolvedModelMetadata, w2 = e2.resolvedModel?.modelId;
      if (void 0 === y2) throw new i.F("metadata-unavailable", w2);
      const v2 = e2.runOptions.toolRestriction, _2 = void 0 === v2 ? y2 : { ...y2, featureFlags: { ...y2.featureFlags ?? F, allowedTools: v2.allowed, excludedTools: v2.excluded } }, A2 = _2.promptModelInfo;
      if (void 0 === A2) throw new i.F("unrecognized-model-family", w2);
      const S2 = (0, a.au)(e2.action, e2.conversationState), b2 = (0, d.eU)(_2.modeConfig, S2, w2, e2.ctx), E2 = (0, d.Et)(_2.askQuestionConfig, e2.ctx), C2 = { ..._2.featureFlags ?? F, ...false === f2.connectScm ? { enableConnectScm: false } : {} }, k2 = (function(e3, t3, r3) {
        const n2 = e3.smartModeClassifier;
        return void 0 === n2 || void 0 === t3 ? Q : t3.mode ? { mode: true, shadowMode: t3.shadowMode, executor: L(n2, r3) } : Q;
      })(t2, _2.smartModeClassifier, { attemptRequestId: (0, n.REY)(e2.ctx), originalRequestId: e2.originalRequestId, agentEventsRecorded: true === e2.agentEventsRecorded }), x2 = void 0 === e2.resolveCustomSubagentModels ? /* @__PURE__ */ (function(e3) {
        let t3 = false;
        const r3 = (r4) => {
          if (t3) return;
          const n2 = r4.filter((e4) => void 0 !== l(e4));
          0 !== n2.length && (t3 = true, c.warn(e3, "RunInference server does not resolve custom subagent model pins; children of these definitions run the parent's model", { subagentNames: n2.map((e4) => e4.name) }));
        };
        return { prepare: async (e4, t4) => {
          r3(t4.customSubagents);
        }, normalize: (e4) => (r3(e4), e4), isPinned: () => false };
      })(e2.ctx) : /* @__PURE__ */ (function(e3, t3) {
        const r3 = /* @__PURE__ */ new Map();
        let n2 = false;
        return { async prepare(t4, n3) {
          const s2 = /* @__PURE__ */ new Set();
          for (const e4 of n3.customSubagents) {
            const t5 = l(e4);
            void 0 === t5 || r3.has(t5) || s2.add(t5);
          }
          if (0 === s2.size) return;
          const o2 = await e3([...s2]);
          for (const e4 of s2) {
            const t5 = o2.get(e4);
            r3.set(e4, void 0 === t5 || "" === t5 ? void 0 : t5);
          }
          c.info(t4, "Resolved custom subagent model pins", { pins: [...s2].map((e4) => ({ requested: e4, resolvedSlug: o2.get(e4) })) });
        }, normalize: (e4) => e4.map((e5) => {
          const s2 = l(e5);
          if (void 0 === s2) return e5;
          if (!r3.has(s2)) return n2 || (n2 = true, c.warn(t3, "Custom subagent model pin was not prepared with the turn's request context; leaving it as written", { subagentName: e5.name, requested: s2 })), e5;
          const o2 = r3.get(s2);
          if (void 0 === o2 || o2 === s2) return e5;
          const i2 = e5.clone();
          return i2.model = o2, i2;
        }), isPinned(e4) {
          for (const [t4, n3] of r3) if ((n3 ?? t4) === e4) return true;
          return false;
        } };
      })(e2.resolveCustomSubagentModels, e2.ctx), T2 = _2.useDsv3Harness ? (function(e3, t3, r3, s2, a2, c2, l2, f3, y3, w3, v3) {
        const _3 = r3.modelName, A3 = (e4) => (0, d.SQ)(f3, e4 ?? o.xyI.AGENT), { modelId: S3, maxMode: b3 } = m(e3), E3 = t3.persona;
        if (void 0 === E3) throw new i.F("dsv3-persona-unavailable", _3);
        const C3 = M(s2, { modelId: S3, maxMode: b3, featureFlags: l2 }), k3 = I(s2, t3.enableSemanticSearch), x3 = (0, n.VeN)(r3, { enableSemanticSearch: k3.enabled, longRunningJobs: true === l2.longRunningJobs, enableWebSearch: c2.webSearch ?? true, enableGrepTool: true, enableReadLints: true, mcpConfigEnabled: true, isComposerMatterhornModel: (0, n.VEl)(_3), isThinking: t3.dsv3IsThinking ?? (true !== r3.isGrok45ProductPrompt && true !== r3.isGrok46ProductPrompt), isMultihornModel: false, isRewriteModel: false, persona: E3, useRlHarness: false, useEvalSubagentExecutor: false, agentType: n.Eoi.IDE, enableCloudTesting: false }), T3 = { ...(0, n.a$1)(r3, { enableLineNumbers: t3.promptConfig?.enableLineNumbers ?? true, useSparseReadLineNumbers: t3.promptConfig?.useSparseReadLineNumbers ?? false }), enableLineNumbers: x3.enableLineNumbers, sparseLineNumbers: x3.sparseLineNumbers }, J3 = { agentType: n.Eoi.IDE, enableGrepTool: true, enableMcp: true, maxDirectMcpTools: u.maxDirectMcpTools, maxAdvertisedTools: u.maxAdvertisedTools, enableReadLints: true, enableSemanticSearch: k3.enabled, enableTerminalFiles: true, enableWebSearch: c2.webSearch ?? true, featureFlags: l2, fileOutputThresholdBytes: BigInt(4e4), formattingOptions: T3, isDev: false, modelInfo: r3, nameWeTellTheModelToCallItself: (0, p.Yg)(t3), strictArgParsing: false, webFetchAvailable: c2.webFetch ?? true, webFetchService: B(s2), ...void 0 === t3.estimatedCacheTtlMs ? {} : { estimatedCacheTTLMs: t3.estimatedCacheTtlMs } }, q3 = new n.smk(), O3 = g({ parentModelId: e3.resolvedModel?.modelId ?? r3.modelName, modelInfo: r3, featureFlags: l2, subagentModelConfig: t3.subagentModelConfig, customSubagentModels: v3 });
        return { modelId: _3, isEagerEditingModel: false, agentType: n.Eoi.IDE, featureFlags: l2, longReasoningReminder: t3.promptConfig?.longReasoningReminder, askQuestionToolName: y3.toolName, strictArgParsing: false, enableToolArgPreservation: u.enableToolArgPreservation, systemPromptGenerator: (t4, s3) => (0, n.tIo)({ ...t4, ...J3, ...x3, modelInfo: r3, originalModelDisplayName: e3.modelId, switchModeToolConfig: A3(t4.mode) }, s3), toolsGenerator: (e4) => (0, n.B$_)({ ...e4, ...J3, featureFlags: { ...l2, ...e4.featureFlags, ...e4.mode === o.xyI.PLAN ? { useNewPlanModePrompts: f3.useNewPlanModePrompts } : {}, ...false === c2.connectScm ? { enableConnectScm: false } : {} }, ...x3, enableAskQuestionTool: (0, d.y8)(f3, e4.mode), askQuestionToolName: y3.toolName, autoRejectFirstAskQuestion: y3.autoRejectFirst, switchModeToolConfig: A3(e4.mode), searchImplementation: k3.searchImplementation, webSearch: a2.webSearch ?? R(s2, { modelId: S3 }), generateImage: P(s2, { modelId: S3, maxMode: b3 }), generateImageSuspiciousKeywords: [], imageGenerationConcurrencyLimiter: (0, n.jRf)(N), enableGenerateImage: c2.generateImage ?? true, isGenerateImageModelRestricted: false, generateVideo: C3, xSearch: false === c2.xSearch ? void 0 : D(s2, { modelId: S3, maxMode: b3 }), taskToolProps: O3 }), planSystemReminderGenerator: (e4) => (0, n.Esi)({ isGpt5Family: r3.isGpt5Family, isComposer2: true === l2.enableComposer2CustomPlanModeFollowup, prevTurnMode: e4, isDsv3Family: true, usePascalCaseToolNames: true, askQuestionToolName: y3.toolName, subagentsForPlan: void 0 !== O3, useNewPlanModePrompts: f3.useNewPlanModePrompts, askQuestionsInline: (0, d.SR)(f3), enableTahomaPlanCommitment: true === l2.enableTahomaPlanCommitment, enableAffirmativePlanLanguage: true === l2.enableAffirmativePlanLanguage }), askSystemReminderGenerator: (e4) => true === x3.enableFilterEditToolsInAskMode ? "" : (0, n.wEG)({ prevTurnMode: e4.prevTurnMode, enableReadonlyShell: true === l2.enableReadonlyShell && true === e4.requestContext.env?.sandboxEnabled }), formattingOptions: T3, enableFilterEditToolsInAskMode: x3.enableFilterEditToolsInAskMode, debugSystemReminderGenerator: (e4, t4) => (0, n._4n)({ debugModeConfig: e4, isFirstDebugModeMessage: t4, isCloudAgent: false }), triageSystemReminderGenerator: (e4) => (0, n.LVD)(e4), userInfoDisplayOptions: { displayGitStatus: true, displayCursorRules: true, displaySkills: true, includeOnlyUserInfoAndGitStatus: false, agentType: n.Eoi.IDE }, actorIdentity: void 0, webScraperService: new n.GK_(), documentationHydrationService: new n.ArD(), attachedMediaUrlProvider: void 0, commandClassifierService: q3, reminders: (0, p.cf)(t3), enableAgentNotes: false, enableImageFiles: u.enableImageFiles, enableLongCodeSelectionSpillToFile: true, enableExecuteHookExec: true, enableTranscriptInSummary: true, thinkingStyle: (0, n.Ub2)(r3), enablePrependedUserActions: true, conversationId: e3.runOptions.conversationId, conversationGroupId: e3.runOptions.conversationGroupId ?? e3.runOptions.conversationId, fireAndForgetCheckpoints: true, smartModeClassifierMode: w3.mode, smartModeClassifierShadowMode: w3.shadowMode, modelInfo: r3, nonFileRules: h(e3), enableTerminalFiles: true, ...void 0 === t3.agentTokenLimit ? {} : { agentTokenLimit: t3.agentTokenLimit }, ...void 0 === t3.estimatedCacheTtlMs ? {} : { estimatedCacheTTLMs: t3.estimatedCacheTtlMs } };
      })(e2, _2, A2, t2, r2, f2, C2, b2, E2, k2, x2) : (function(e3, t3, r3, s2, i2, a2, c2, l2, f3, y3, w3) {
        const v3 = e3.resolvedModel?.modelId, { modelId: _3, maxMode: A3 } = m(e3), S3 = (0, d.SQ)(l2, o.xyI.AGENT), b3 = I(s2, t3.enableSemanticSearch), E3 = { agentType: n.Eoi.IDE, enableGrepTool: true, enableMcp: true, maxDirectMcpTools: u.maxDirectMcpTools, maxAdvertisedTools: u.maxAdvertisedTools, enableReadLints: true, enableSemanticSearch: b3.enabled, enableTerminalFiles: true, enableWebSearch: a2.webSearch ?? true, featureFlags: c2, fileOutputThresholdBytes: BigInt(4e4), formattingOptions: (0, n.a$1)(r3, { enableLineNumbers: t3.promptConfig?.enableLineNumbers ?? true, useSparseReadLineNumbers: t3.promptConfig?.useSparseReadLineNumbers ?? false }), isDev: false, modelInfo: r3, nameWeTellTheModelToCallItself: (0, p.Yg)(t3), strictArgParsing: false, enableExecuteHookExec: true, webFetchAvailable: a2.webFetch ?? true, webFetchService: B(s2), switchModeToolConfig: S3, ...void 0 === t3.estimatedCacheTtlMs ? {} : { estimatedCacheTTLMs: t3.estimatedCacheTtlMs } }, C3 = { agentType: n.Eoi.IDE, featureFlags: c2, isDev: false, modelInfo: r3, originalModelDisplayName: e3.modelId }, k3 = new n.smk();
        return { ...(0, n.Ivk)({ modelId: r3.modelName, systemPromptProps: C3, commonOptions: E3, values: { isEagerEditingModel: false, actorIdentity: void 0, webScraperService: new n.GK_(), documentationHydrationService: new n.ArD(), attachedMediaUrlProvider: void 0, commandClassifierService: k3, reminders: (0, p.cf)(t3), enableImageFiles: u.enableImageFiles, enableLongCodeSelectionSpillToFile: true, enableExecuteHookExec: true, thinkingStyle: (0, n.Ub2)(r3), enablePrependedUserActions: true, enableToolArgPreservation: u.enableToolArgPreservation, isDsv3Family: false }, tools: { aiAttribution: void 0, enableComputerUseSubagent: false, enableGenerateImage: a2.generateImage ?? true, generateImage: P(s2, { modelId: _3, maxMode: A3 }), generateImageSuspiciousKeywords: [], imageGenerationConcurrencyLimiter: (0, n.jRf)(W), isGenerateImageModelRestricted: false, generateVideo: M(s2, { modelId: _3, maxMode: A3, featureFlags: c2 }), xSearch: false === a2.xSearch ? void 0 : D(s2, { modelId: _3, maxMode: A3 }), taskToolProps: g({ parentModelId: v3 ?? r3.modelName, modelInfo: r3, featureFlags: c2, subagentModelConfig: t3.subagentModelConfig, customSubagentModels: w3 }) }, resolvers: { createSearchImplementation: () => b3.searchImplementation, resolveWebSearchBinding: (e4) => e4 ? { webSearch: i2.webSearch ?? R(s2, { modelId: _3 }) } : { webSearch: () => {
          throw new Error("web search invoked on a session where it is disabled");
        } }, supportsAiAttribution: () => false, supportsRecordScreen: () => false, supportsReplaceEnv: () => false, supportsSetupVmEnvironment: () => false, shouldEnableAskQuestionTool: (e4) => (0, d.y8)(l2, e4), resolveAskQuestionToolName: () => f3.toolName, shouldAutoRejectFirstAskQuestion: () => f3.autoRejectFirst, resolveSwitchModeToolConfig: (e4) => (0, d.SQ)(l2, e4), resolveUseNewPlanModePrompts: () => l2.useNewPlanModePrompts, isAskQuestionDisabled: () => (0, d.SR)(l2) } }), longReasoningReminder: t3.promptConfig?.longReasoningReminder, conversationId: e3.runOptions.conversationId, conversationGroupId: e3.runOptions.conversationGroupId ?? e3.runOptions.conversationId, fireAndForgetCheckpoints: true, smartModeClassifierMode: y3.mode, smartModeClassifierShadowMode: y3.shadowMode, modelInfo: r3, nonFileRules: h(e3), enableTerminalFiles: true, ...void 0 === t3.agentTokenLimit ? {} : { agentTokenLimit: t3.agentTokenLimit }, ...void 0 === t3.estimatedCacheTtlMs ? {} : { estimatedCacheTTLMs: t3.estimatedCacheTtlMs } };
      })(e2, _2, A2, t2, r2, f2, C2, b2, E2, k2, x2), J2 = e2.runOptions.maxSteps, q2 = { ...T2, systemPromptGenerator: K(T2.systemPromptGenerator, e2.runOptions), ...void 0 === J2 ? {} : { clientMaxSteps: J2 } }, O2 = (0, s.Xs)(e2.runOptions) ? z({ baseConfig: q2, subagentTypeName: e2.runOptions.subagentTypeName, subagentInstanceId: e2.runOptions.conversationId, featureFlags: C2, customSubagents: e2.runOptions.customSubagents ?? [], suppressSubagentProgressUpdateTool: e2.runOptions.suppressSubagentProgressUpdateTool, projectFolder: e2.projectFolder, subagentModelOverrides: "config" === _2.subagentModelConfig?.kind ? _2.subagentModelConfig.config.overrides : void 0 }) : { config: q2, resolvedSubagentSystemReminder: void 0 };
      return { ...O2, config: (0, d.sG)(O2.config, b2, E2), ...void 0 === k2.executor ? {} : { smartModeClassifier: { executor: k2.executor, enforceReadOnlyCap: S2 === o.xyI.ASK } }, prepareRequestContext: (e3, t3) => x2.prepare(e3, t3) };
    }
    function K(e2, t2) {
      const r2 = t2.systemPromptSpec?.spec;
      switch (r2?.case) {
        case void 0: {
          const r3 = t2.customSystemPrompt;
          return void 0 === r3 || "" === r3 ? e2 : () => r3;
        }
        case "replace": {
          const t3 = r2.value;
          return "" === t3 ? e2 : () => t3;
        }
        case "append": {
          const n2 = r2.value;
          return "" === n2 || (0, s.Xs)(t2) ? e2 : (t3, r3) => `${e2(t3, r3)}

${n2}`;
        }
        default:
          return r2;
      }
    }
  }