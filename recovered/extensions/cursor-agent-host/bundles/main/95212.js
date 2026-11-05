// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 95212 range:14510375..14535820
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95212: (e, t, r) => {
    "use strict";
    r.d(t, { o: () => G, C: () => V });
    var n = r(6688), s = r(17392), o = r(14101), i = r(98739), a = r(3355), c = r(73877), l = r(27322), u = r(24804), d = r(37949), p = r(46144), m = r(69584), h = r(86209), f = r(5289), g = r(90991), y = r(28780), w = r(33002);
    const v = (0, d.h)("@anysphere/agent-host:local-loop-agent-event-tracker"), _ = (0, p.Pu)("agent_host.local_loop.agent_event", { description: "AgentEventTracker calls made by the local loop, by what happened to them: forwarded to the backend, declined by an attempt whose sink would not take them, or dropped and why", labelNames: ["outcome", "method"] }), A = (0, p.Pu)("agent_host.local_loop.agent_event.field_truncated", { description: "Text fields on local loop tracker calls cut to the wire cap before forwarding, so the event is recorded truncated rather than dropped", labelNames: ["method", "field"] });
    var S = r(34472);
    const b = "default";
    function E(e2, t2, r2, s2) {
      const o2 = t2.conversationId, i2 = t2.conversationGroupId ?? o2, a2 = (function(e3) {
        return "auto-smart" === e3.modelId && e3.parameters.some((e4) => "optimize_for" === e4.id && "cost" === e4.value) ? b : e3.modelId;
      })(r2), c2 = a2.replaceAll(".", "-");
      return e2.with(n.txo, "local_loop").with(n.kuS, s2).with(n.UIk, t2.parentRequestId).with(n.OR_, t2.rootParentRequestId).with(n.Ah6, t2.parentAgentToolCallId).with(n.A6C, o2).with(n.bGt, i2).with(n.dfP, r2.modelId).with(n.RQ8, r2.maxMode).with(n.vJE, a2 === b).with(n.b9P, "premium" === c2).with(S.u, { conversationId: o2, composerId: i2, requestId: s2, modelName: r2.modelId, ...t2.parentAgentToolCallId ? { parentToolCallId: t2.parentAgentToolCallId } : {} });
    }
    const I = (0, d.h)("@anysphere/agent-host:local-loop-attempt-release"), C = { turnCompleted: false };
    var k = r(91417);
    var x = r(9639);
    var T = r(56151);
    function R(e2) {
      const t2 = e2.isBackendRouted?.bind(e2);
      return { execute(t3, r2, n2) {
        if (!r2.skipApproval) return e2.execute(t3, r2, n2);
        const s2 = r2.clone();
        return s2.skipApproval = false, e2.execute(t3, s2, n2);
      }, ...void 0 === t2 ? {} : { isBackendRouted: t2 } };
    }
    var B = r(41943);
    const P = 28e5, J = 1e6, M = { enableRetryUncategorizedErrors: true, enableReduceInputsRetry: true, useRelaxedSplitIndexGuard: false, preserveLastUserMessage: true, maxOutputTokens: 32e3, throwOnRetryExhaustion: false, alwaysRetryOutputTokenLimit: true, enableDeterministicFallback: true, deterministicFallbackWindowRatio: 0.02 }, q = { enableReduceInputsRetry: false, enableRetryUncategorizedErrors: true, enableRetryNoSummaryResponse: true, openAiCompactionEnableRetryNoSummaryResponse: false, anthropicCompactionEnableRetryNoSummaryResponse: false };
    function D(e2) {
      return void 0 === e2 || !Number.isFinite(e2) || e2 <= 0 || e2 >= J ? P : Math.floor(P * (e2 / J));
    }
    const O = (0, d.h)("@anysphere/agent-host:local-loop-telemetry-blob-store"), N = (0, p.v5)("agent_client.local_loop.kvblob_telemetry.flush.blob_count", { description: "Blobs per conversation-blob telemetry upload from the local loop", labelNames: ["outcome"] }), F = (0, p.Pu)("agent_client.local_loop.kvblob_telemetry.deduped_blob_count", { description: "Blob writes the local loop's telemetry mirror skipped as already published this turn" }), U = (0, p.Pu)("agent_client.local_loop.kvblob_telemetry.dropped_blob_count", { description: "Buffered blobs the local loop dropped because the server declined the telemetry" });
    class L {
      constructor(e2) {
        this.options = e2, this.pending = /* @__PURE__ */ new Map(), this.published = /* @__PURE__ */ new Set(), this.sequenceNumber = 0, this.inflight = /* @__PURE__ */ new Set();
      }
      decide(e2, t2) {
        void 0 === this.decision && (this.decision = t2, !t2 && this.pending.size > 0 && (U.increment(e2, this.pending.size), this.pending.clear()));
      }
      setAttemptRequestId(e2) {
        this.attemptRequestId = e2;
      }
      async getBlob(e2, t2) {
      }
      async setBlob(e2, t2, r2) {
        if (false === this.decision) return;
        const n2 = (0, l.nk)(t2);
        this.published.has(n2) ? F.increment(e2, 1) : this.pending.set(n2, { id: t2, value: r2 });
      }
      async setBlobLocallyOnly(e2, t2, r2) {
        return this.setBlob(e2, t2, r2);
      }
      async flush(e2) {
        this.pending.size <= 100 || this.flushAllPending(e2);
      }
      flushAllPending(e2) {
        if (true !== this.decision || 0 === this.pending.size) return;
        const t2 = this.attemptRequestId;
        if (void 0 === t2) return;
        const r2 = Array.from(this.pending.values()), n2 = Array.from(this.pending.keys());
        this.pending = /* @__PURE__ */ new Map();
        for (const e3 of n2) this.published.add(e3);
        const s2 = this.sequenceNumber;
        this.sequenceNumber += 1;
        const o2 = this.options.uploader.upload(e2, { conversationId: this.options.conversationId, attemptRequestId: t2, sequenceNumber: s2, blobs: r2 }).then(() => {
          N.histogram(e2, r2.length, { outcome: "uploaded" });
        }, (n3) => {
          N.histogram(e2, r2.length, { outcome: "failed" }), O.warn(e2, "Conversation blob telemetry upload failed; dropped", { conversationId: this.options.conversationId, attemptRequestId: t2, sequenceNumber: s2, blobCount: r2.length, error: n3 instanceof Error ? n3.message : String(n3) });
        });
        this.inflight.add(o2), o2.finally(() => {
          this.inflight.delete(o2);
        });
      }
      async settled() {
        for (; this.inflight.size > 0; ) await Promise.all(Array.from(this.inflight));
      }
    }
    var $ = r(87159);
    const Q = (0, d.h)("@anysphere/agent-host:local-loop-agent-client"), j = (0, p.Pu)("agent_host.local_loop.agent_event_tracker_unbound", { description: "Local loop attempts whose AgentEventTracker had no destination and were not allowlisted; every product event of the attempt was dropped", labelNames: ["reason"] });
    class G {
      constructor(e2) {
        this.options = e2, this.pendingGenerationOwners = /* @__PURE__ */ new WeakMap(), this.orphanedSummaryHoldTimeoutMs = e2.orphanedSummaryHoldTimeoutMs ?? 3e5, this.pendingSummaries = (0, n.j3k)({ detachedGenerationTimeoutMs: this.orphanedSummaryHoldTimeoutMs });
      }
      pendingSummaryStoreFor(e2) {
        const t2 = this.pendingSummaries;
        return { ...t2, trackPendingGeneration: (r2) => {
          this.pendingGenerationOwners.set(r2.promiseInfo, e2), t2.trackPendingGeneration?.(r2);
        } };
      }
      orphanedGenerationOf(e2, t2) {
        const r2 = this.pendingSummaries.peekPendingGeneration(e2);
        if (void 0 !== r2 && this.pendingGenerationOwners.get(r2.promiseInfo) === t2) return r2;
      }
      bindAgentEvents(e2, t2, r2, s2) {
        const o2 = this.options.agentEvents, i2 = t2.attempt?.agentEvents;
        let a2;
        if (e2.get(n.ZaD) === (0, w.q6)().get(n.ZaD) ? a2 = "tracker_replaced" : "source" in o2 && void 0 === i2 && (a2 = "sink_missing"), r2(i2), "unbound" in o2 && Q.debug(e2, "Local loop agent events unbound by policy", { requestId: s2.requestId, attemptRequestId: s2.attemptRequestId, reason: o2.unbound.reason }), void 0 === a2) return;
        const c2 = "tracker_replaced" === a2 ? "Local loop attempt context lost its AgentEventTracker binding; product analytics for this attempt are dropped" : "Local loop attempt handle carries no agent event sink and the client is not allowlisted; product analytics for this attempt are dropped";
        if (s2.isRunningInTest) throw new Error(`${c2} (${a2})`);
        j.increment(e2, 1, { reason: a2 }), Q.error(e2, c2, { requestId: s2.requestId, attemptRequestId: s2.attemptRequestId, violation: a2 });
      }
      async run(e2, t2, r2, d2, p2, S2, b2, P2, J2, O2, N2) {
        const F2 = N2.generationUUID ?? crypto.randomUUID(), U2 = (function(e3, t3) {
          if (t3.requestedModel?.modelId) return t3.requestedModel.clone();
          if (e3?.modelId) return new h.G4({ modelId: e3.modelId, maxMode: e3.maxMode ?? false });
          throw new s.SK("Local agent requires a model");
        })(d2, N2), j2 = U2.modelId, G2 = this.resolvePrivacyMode(e2, F2), V2 = this.createTurnLabeling({ ctx: e2, requestId: F2, conversationId: N2.conversationId, conversationState: t2, blobStore: b2 }), Y = (0, u.nb)(e2, b2, t2.turns), Z = (0, T.lJ)({ ctx: e2, requestId: F2, onTtftBreakdown: N2.onTtftBreakdown }), X = (0, a.u)((0, o.wH)(Z.wrapListener(p2), new o.xc(N2.nextInteractionQueryId)), G2), [ee, te] = e2.withCancel(), re = /* @__PURE__ */ (function(e3) {
          let t3;
          const r3 = [], n2 = (e4) => {
            void 0 !== t3 && "declined" !== t3.forwardOrDecline("trackContextInjectionLifecycle", e4) || r3.length < 64 && r3.push(e4);
          };
          return { record: (t4, r4) => {
            n2((function(e4) {
              const { injectionId: t5, state: r5, runId: n3 } = e4;
              return { injectionId: t5, outcome: r5.kind, ..."rejected" === r5.kind ? { reason: r5.reason } : {}, runId: n3 };
            })({ injectionId: t4, state: r4, runId: e3 }));
          }, attach: (e4) => {
            t3 = e4;
            for (const e5 of r3.splice(0)) n2(e5);
          } };
        })(F2), ne = new i.D$(ee, new i.FC(32), () => te("cancel_action"), { contextInjection: { activeRunId: F2, onInjectionStateChange: (t3, r3) => {
          re.record(t3, r3), X.sendUpdate(e2, c.P.contextInjectionState(G2, t3, r3)).catch((r4) => {
            Q.warn(e2, "Failed to send context injection state update", { requestId: F2, injectionId: t3, error: r4 });
          });
        } } });
        P2.run(ee, { write: async (e3) => {
          ne.push((0, g.p46)(e3, G2));
        } }).catch((t3) => {
          Q.warn(e2, "Conversation action pump ended with an error", { requestId: F2, error: t3 });
        });
        const se = () => {
          ne.endRun(), te(P2.signal.reason);
        };
        P2.signal.aborted ? se() : P2.signal.addEventListener("abort", se, { once: true });
        let oe, ie = "success";
        const ae = void 0 !== this.options.conversationBlobUploader && G2 === f.PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED && "" !== N2.conversationId ? new L({ conversationId: N2.conversationId, uploader: this.options.conversationBlobUploader }) : void 0, ce = void 0 === ae ? b2 : new l.l9(b2, ae);
        let le = {};
        const ue = (0, T.Oc)(), de = (function(e3) {
          let t3, r3 = Promise.resolve();
          const n2 = async (t4, r4) => {
            try {
              await t4.finish(r4);
            } catch (t5) {
              I.warn(e3, "Local loop attempt finish failed", { error: t5 instanceof Error ? t5.stack ?? t5.message : String(t5) });
            }
          }, s2 = (e4) => {
            const s3 = t3;
            return t3 = void 0, void 0 !== s3 && (r3 = r3.then(() => n2(s3, e4))), r3;
          };
          return { hold: (e4) => {
            void 0 !== t3 && s2(C), t3 = e4;
          }, release: s2, park: async (r4, s3, o2) => {
            const i2 = t3;
            if (t3 = void 0, void 0 === i2) return;
            const [a2, c2] = e3.withDetached().withTimeoutAndCancel(s3), l2 = new Promise((e4) => {
              a2.signal.addEventListener("abort", () => e4("timeout"), { once: true });
            });
            try {
              const t4 = await Promise.race([r4.then(() => "settled", () => "settled"), l2]);
              I.info(e3, "[summarization-hold] Releasing the held attempt", { outcome: t4 });
            } finally {
              c2(), await n2(i2, o2);
            }
          } };
        })(ee);
        try {
          await (0, s.fZ)({ ctx: ee, state: t2, action: r2, checkpointHandler: J2, runOptions: N2, requestId: N2.firstAttemptRequestId ?? F2, originalRequestId: F2, loop: "local_loop", ..."delegated" === this.options.retryLogging ? {} : { logging: { tag: this.options.retryLogging?.tag ?? "local_loop_agent_retries", diagnostics: (e3) => ({ ...K(e3), ...le }) } }, cancellation: { shortCircuit: () => ee.canceled, toCancelledError: (e3, t3) => (function(e4, t4) {
            return e4 instanceof s.cc ? e4 : new s.cc("Local agent request cancelled", { cause: e4 instanceof Error ? e4 : void 0, requestId: t4 });
          })(e3, t3) }, hooks: { beginAttempt: () => {
            le = {};
          }, runAttempt: async (e3) => {
            ue.dropHeld(), await de.release(C), Z.beginAttempt(e3.attempt);
            try {
              N2.onNetworkPhaseStart?.();
            } catch (e4) {
              Q.warn(ee, "onNetworkPhaseStart callback failed", { requestId: F2, error: e4 instanceof Error ? e4.stack ?? e4.message : String(e4) });
            }
            const t3 = (function() {
              let e4, t4 = false, r4 = [];
              const s2 = (0, w.q6)(), o3 = (t5, r5, n2) => {
                if (void 0 === e4) return _.increment(s2, 1, { outcome: "no_sink", method: t5 }), "declined";
                try {
                  const o4 = e4.emit(t5, r5, n2);
                  return _.increment(s2, 1, { outcome: o4 ? "forwarded" : "sink_declined", method: t5 }), o4 ? "forwarded" : "declined";
                } catch (e5) {
                  return _.increment(s2, 1, { outcome: "sink_threw", method: t5 }), v.debug(s2, "Local loop agent event sink threw; event dropped", { methodName: t5, error: e5 instanceof Error ? e5.message : String(e5) }), "dropped";
                }
              }, i3 = (e5, t5) => {
                const r5 = (0, n.gB_)(e5, t5, (t6) => A.increment(s2, 1, { method: e5, field: t6 }));
                return void 0 === r5 && _.increment(s2, 1, { outcome: "oversized", method: e5 }), r5;
              }, a3 = (e5, n2) => {
                const a4 = Date.now(), c3 = i3(e5, n2);
                void 0 !== c3 && (t4 ? o3(e5, c3, a4) : void 0 !== r4 && r4.length < 256 ? r4.push({ methodName: e5, optionsJson: c3, clientReportedAtMs: a4 }) : _.increment(s2, 1, { outcome: "buffer_full", method: e5 }));
              };
              return { tracker: { trackUnfinishedTodos: (e5, t5) => a3("trackUnfinishedTodos", t5), trackUnfinishedTodosWhenCreatedTodos: (e5, t5) => a3("trackUnfinishedTodosWhenCreatedTodos", t5), trackUnfinishedTodosWhenHadUnfinishedTodosAtStart: (e5, t5) => a3("trackUnfinishedTodosWhenHadUnfinishedTodosAtStart", t5), trackSummarizationTriggered: (e5, t5) => a3("trackSummarizationTriggered", t5), trackSummaryLifecycle: () => {
              }, trackPromptTokens: (e5, t5) => a3("trackPromptTokens", t5), trackNumberOfToolCalls: (e5, t5) => a3("trackNumberOfToolCalls", t5), trackToolCallStarted: (e5, t5) => a3("trackToolCallStarted", t5), trackToolCallResult: (e5, t5) => a3("trackToolCallResult", t5), trackComputerUseExecution: (e5, t5) => a3("trackComputerUseExecution", t5), trackRecordScreenExecution: (e5, t5) => a3("trackRecordScreenExecution", t5), trackLoopDetected: (e5, t5) => a3("trackLoopDetected", t5), trackSubagentCreated: (e5, t5) => a3("trackSubagentCreated", t5), trackSubagentCompleted: (e5, t5) => a3("trackSubagentCompleted", t5), trackShellSandboxResult: (e5, t5) => a3("trackShellSandboxResult", t5), trackSkillUsed: (e5, t5) => a3("trackSkillUsed", t5), trackSkillApplied: (e5, t5) => a3("trackSkillApplied", t5), trackHookExecuted: (e5, t5) => a3("trackHookExecuted", t5), trackSmartModeClassifierCall: (e5, t5) => a3("trackSmartModeClassifierCall", t5), trackUnauthorizedAccessJudgeVerdict: (e5, t5) => a3("trackUnauthorizedAccessJudgeVerdict", t5), trackPlanModeModelFinished: (e5, t5) => a3("trackPlanModeModelFinished", t5), trackMcpToolCall: (e5, t5) => a3("trackMcpToolCall", t5), trackMcpToolCallResult: (e5, t5) => a3("trackMcpToolCallResult", t5), trackContextInjectionLifecycle: (e5, t5) => a3("trackContextInjectionLifecycle", t5) }, bind: (n2) => {
                e4 = n2, t4 = true;
                const s3 = r4;
                r4 = void 0;
                for (const e5 of s3 ?? []) o3(e5.methodName, e5.optionsJson, e5.clientReportedAtMs);
              }, forwardOrDecline: (e5, r5) => {
                if (!t4) return "declined";
                const n2 = Date.now(), s3 = i3(e5, r5);
                return void 0 === s3 ? "dropped" : o3(e5, s3, n2);
              } };
            })(), r3 = E(ee, N2, U2, e3.attemptRequestId).with(n.ZaD, t3.tracker).with(n.rgi, ue.sink), o2 = { ...N2, onHeader: (e4) => {
              const t4 = e4.get($.EP);
              null !== t4 && (le = { transportMode: t4 }), N2.onHeader?.(e4);
            } }, i2 = new AbortController(), a2 = () => i2.abort(ee.signal.reason);
            ee.signal.aborted ? a2() : ee.signal.addEventListener("abort", a2, { once: true });
            const c2 = { requestedModel: U2, runOptions: o2, attempt: e3.attempt, attemptRequestId: e3.attemptRequestId, originalRequestId: F2, conversationState: e3.state, action: e3.action, previousRequestId: await Y, signal: i2.signal, ctx: r3, onFirstInvocationStart: () => Z.markFirstInvocationStart() }, l2 = this.options.prepareAttemptContext?.(r3, c2) ?? r3, u2 = await this.options.createPromptSession({ ...c2, ctx: l2 });
            de.hold(u2.attempt), this.bindAgentEvents(l2, u2, (e4) => {
              t3.bind(e4), re.attach(t3);
            }, { requestId: F2, attemptRequestId: e3.attemptRequestId, isRunningInTest: true === N2.isRunningInTest }), e3.notifyConnected(), void 0 !== ae && (ae.setAttemptRequestId(e3.attemptRequestId), ae.decide(l2, true === u2.attempt?.kvBlobTelemetryEnabled));
            const p3 = { ...X, sendUpdate: (t4, r4) => ((0, s.qi)(r4) && e3.notifyApplicationProgress(), X.sendUpdate(t4, r4)) }, h2 = (0, T.ct)(l2, u2.attempt?.metricLabels), b3 = await this.options.createAgentConfig({ modelId: j2, originalRequestId: F2, modelDetails: d2, requestedModel: U2, resolvedModel: u2.attempt?.resolvedModel, resolvedModelMetadata: u2.attempt?.resolvedModelMetadata, nonFileRules: u2.attempt?.nonFileRules, conversationState: e3.state, action: e3.action, runOptions: N2, projectFolder: N2.projectFolder, resolveCustomSubagentModels: u2.attempt?.resolveCustomSubagentModels, agentEventsRecorded: void 0 !== u2.attempt?.agentEvents && true === u2.attempt.agentEventsAccepted, ctx: h2 }), I2 = b3.config, k2 = u2.attempt?.backgroundSummarizationProps, P3 = u2.selfSummaryPromptSession, J3 = void 0 === P3 ? u2.promptToolSession : { getExecutor: (e4) => new n.Ycw(P3.getExecutor(e4)) }, L2 = {}, H2 = N2.conversationId, z2 = void 0 !== H2 && G2 !== f.PrivacyMode.NO_STORAGE ? { conversationId: I2.conversationId ?? H2, pendingSummaryStore: this.pendingSummaryStoreFor(L2) } : void 0, W2 = { ...I2, ...true === u2.attempt?.supportsSelfSummary ? { selfSummaryConfig: { promptSession: J3, canUseSelfSummary: () => true, ...q } } : {}, ...void 0 === k2 ? {} : { backgroundSummarizationProps: k2 }, ...z2 }, K2 = u2.attempt?.routedModelDisplayName;
            void 0 !== K2 && K2.length > 0 && (0, n.nl9)(e3.action) && await X.sendUpdate(h2, (0, g.btc)(new m.Uq({ message: { case: "routedModel", value: new m.IQS({ displayName: K2 }) } }), G2));
            const te2 = (0, g.p46)(e3.action, G2);
            (0, n.fSq)(te2, b3.resolvedSubagentSystemReminder);
            const se2 = (0, y.D)(e3.action);
            void 0 !== b3.prepareRequestContext && void 0 !== se2 && await b3.prepareRequestContext(h2, se2);
            const ie2 = (function(e4, t4, r4) {
              if (void 0 === r4) return e4;
              const n2 = { async execute(n3, s2, o3) {
                const i3 = await e4.get(x.MZM).execute(n3, s2, o3), a3 = "success" === i3.result.case ? i3.result.value.requestContext : void 0;
                return void 0 !== a3 && await r4(t4, a3), i3;
              } };
              return new x.dSv(e4, [(0, x.VNS)(x.MZM, n2)]);
            })((function(e4, t4) {
              if (void 0 === t4) return e4;
              const r4 = (0, n.PZU)((0, n.JLo)(new x.dSv(e4, [(0, x.VNS)(x.XPF, t4.executor)]), new n.bal()), new n.hoO());
              return t4.enforceReadOnlyCap ? new x.dSv(r4, [(0, x.VNS)(x.Yib, R(e4.get(x.Yib)))]) : r4;
            })(void 0 !== b3.allowedWritePrefixes && b3.allowedWritePrefixes.length > 0 ? (0, n.W07)(S2, b3.allowedWritePrefixes) : S2, b3.smartModeClassifier), h2, b3.prepareRequestContext), pe = V2?.wrapPromptToolSession(u2.promptToolSession, { resolvedModelId: u2.attempt?.resolvedModel.modelId }) ?? u2.promptToolSession;
            u2.attempt?.reportAgentRunRequest?.(() => new m.Mpn({ conversationState: e3.state, action: e3.action, modelDetails: d2, mcpTools: (0, s.W7)(O2), conversationId: N2.conversationId }));
            const me = new n.XJX(W2, pe, p3, ie2, ce, (function(e4) {
              const { summarization: t4 } = e4;
              return void 0 !== t4 ? new B.o5(t4.promptSession, t4.isFallbackToMainModel, { ...M, maxPromptChars: t4.maxPromptChars ?? D(t4.isFallbackToMainModel ? e4.contextWindowTokens : void 0) }) : new B.o5(e4.promptSession, true, { ...M, maxPromptChars: D(e4.contextWindowTokens) });
            })({ promptSession: u2.summarizationPromptSession ?? u2.promptSession, summarization: u2.attempt?.summarization, contextWindowTokens: u2.attempt?.resolvedModelMetadata?.agentTokenLimit }), ne);
            Z.markRunStreamStart(), oe = await me.runStream(h2, (0, g.bvF)(e3.state, G2), te2, O2, (t4, r4) => e3.checkpointHandler.handleCheckpoint(t4, r4)), ne.endRun();
            const he = void 0 === z2 ? void 0 : this.orphanedGenerationOf(z2.conversationId, L2);
            if (void 0 === he) return await de.release({ turnCompleted: true }), void ee.signal.removeEventListener("abort", a2);
            ee.signal.removeEventListener("abort", a2), Q.info(h2, "[summarization-hold] Keeping the attempt open for the background summarization still running at turn end", { requestId: F2, attemptRequestId: e3.attemptRequestId, summarizerModel: he.promiseInfo.modelId, holdTimeoutMs: this.orphanedSummaryHoldTimeoutMs }), de.park(he.promiseInfo.promise, this.orphanedSummaryHoldTimeoutMs, { turnCompleted: true });
          }, classify: (e3, t3) => {
            if (e3 instanceof n.i6m) {
              const r4 = { cause: e3, requestId: t3.attemptRequestId };
              return { action: "throw", error: e3.maxSteps === N2.maxSteps ? new s.i6(e3.maxSteps, r4) : new s.SK(e3.message, r4) };
            }
            const r3 = (0, s.gZ)(e3, (0, s.uu)(N2, t3, this.options.retryCaps), { ...t3, retriesEnabled: true === N2.enableAgentRetries, abortOrigin: H(e3), ...void 0 === le.transportMode ? {} : { attemptTransportMode: le.transportMode } });
            return "throw" === r3.action && W.set(r3.error, { transport: true === r3.countAsTransportError, ...z(e3), ...void 0 === r3.transportFailureKind ? {} : { transportFailureKind: r3.transportFailureKind }, loop: "local_loop", ...le }), r3;
          }, buildNonRetriedErrorInfo: (e3) => ({ ...e3, stallAborted: (0, k.h)(e3.error), abortSources: (0, k.h)(e3.error) ? ["stall_detector"] : [] }), reconnectTrigger: (e3, t3, r3) => {
            const n2 = z(e3);
            return { errorClass: n2.errorName, connectCode: n2.connectCode, connectCodeName: n2.connectCodeName, countAsServerError: t3.countAsServerError, countAsTransportError: t3.countAsTransportError, stallAborted: n2.stallAborted, originatingRequestId: r3.originalRequestId, attemptRequestId: r3.failedAttemptRequestId, ...le, ...void 0 === this.options.reconnectEndpoint ? {} : { endpointUrl: this.options.reconnectEndpoint } };
          } } });
        } catch (e3) {
          throw ie = ee.canceled || e3 instanceof s.cc ? "aborted" : "errored", e3;
        } finally {
          ue.flushHeld(ee), ne.endRun(), await de.release(C), P2.signal.removeEventListener("abort", se), ae?.flushAllPending(e2);
          try {
            V2?.onRunFinished(ie, oe);
          } catch (t3) {
            Q.warn(e2, "Local loop turn labeling failed", { requestId: F2, error: t3 });
          }
          try {
            await this.options.onRunFinished?.(e2, { requestId: F2, status: ie });
          } catch (t3) {
            Q.error(e2, "Local loop onRunFinished hook failed", { requestId: F2, error: t3 });
          }
        }
      }
      createTurnLabeling(e2) {
        try {
          return this.options.createTurnLabeling?.(e2);
        } catch (t2) {
          return void Q.warn(e2.ctx, "Local loop turn labeling setup failed", { requestId: e2.requestId, error: t2 });
        }
      }
      resolvePrivacyMode(e2, t2) {
        let r2;
        try {
          r2 = this.options.getPrivacyMode();
        } catch {
          r2 = void 0;
        }
        return void 0 === r2 ? (Q.warn(e2, "Privacy mode unresolved; assuming NO_STORAGE", { requestId: t2 }), f.PrivacyMode.NO_STORAGE) : r2;
      }
    }
    function H(e2) {
      return (0, k.h)(e2) ? "stall_detector" : "none";
    }
    function z(e2) {
      const { errorName: t2, underlyingConnectError: r2 } = (0, s.EF)(e2);
      return { errorName: t2 ?? typeof e2, stallAborted: (0, k.h)(e2), connectCode: r2?.code, connectCodeName: r2?.codeName, connectCause: r2?.cause };
    }
    const W = /* @__PURE__ */ new WeakMap();
    function V(e2) {
      return W.get(e2) ?? { transport: false, ...z(e2) };
    }
    function K(e2) {
      return { ...(0, s.P_)(z(e2)), abortOrigin: H(e2) };
    }
  }