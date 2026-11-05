// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 87159 range:12196344..12212762
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
87159: (e, t, r) => {
    "use strict";
    r.d(t, { EP: () => y, WZ: () => J });
    var n = r(6688), s = r(17392), o = r(27322), i = r(37949), a = r(46144), c = r(86209), l = r(8844), u = r(65716), d = r(40328), p = r(8032), m = r(78205), h = r(91417), f = r(56151);
    const g = (0, i.h)("@anysphere/agent-host:run-inference-session"), y = "x-cursor-agent-transport-mode", w = 5e3, v = (0, a.Pu)("agent_client.run_inference.client_heartbeat", { description: "Client heartbeat frames on the RunInference request stream, by outcome", labelNames: ["outcome", "transport_mode", "loop"] }), _ = (0, a.Pu)("agent_client.run_inference.agent_event", { description: "RunInference agent_event frames by outcome: written to the attempt stream, dropped because the server does not accept them, or dropped on a closed stream", labelNames: ["outcome", "transport_mode", "loop"] }), A = (0, a.v5)("agent_client.run_inference.client_heartbeat.gap_ms", { description: "Observed gap between consecutive client heartbeat sends on one attempt", labelNames: ["transport_mode", "loop"] }), S = "local_loop", b = 250;
    function E(e2) {
      if (void 0 !== e2) return { unusedTokensThresholdToStartBackgroundSummarization: e2.unusedTokensThresholdToStart, unusedPercentTokensThresholdToStartBackgroundSummarization: e2.unusedPercentTokensThresholdToStart, unusedTokensThresholdToPersistBackgroundSummarization: e2.unusedTokensThresholdToPersist, unusedPercentTokensThresholdToPersistBackgroundSummarization: e2.unusedPercentTokensThresholdToPersist, requireTriggerThresholdForMidLoopPersist: e2.requireTriggerThresholdForMidLoopPersist, discardOnError: e2.discardOnError };
    }
    function I(e2) {
      return new l.lj({ conversationId: e2.conversationId, conversationGroupId: e2.conversationGroupId, requestedModel: x(e2.requestedModel), routingConversation: Array.from(e2.routingConversation), agentMode: e2.agentMode, turnAgentMode: e2.turnAgentMode, subagentTypeName: e2.subagentTypeName || void 0, selectedSubagentModels: e2.selectedSubagentModels.map(x), subagentModelOverrides: e2.subagentModelOverrides.map(k), supportsLongReasoningReminder: true, supportsAgentLoopError: true, ...true === e2.isSummarizeAction ? { isSummarizeAction: true } : {}, agentModule: e2.agentModule, previousRequestId: e2.previousRequestId, executePlan: C(e2.executePlan) });
    }
    function C(e2) {
      if (void 0 !== e2 && void 0 !== e2.planFileContent) return new l.ni({ planFileContent: e2.planFileContent, planFileUri: e2.planFileUri });
    }
    function k(e2) {
      const t2 = e2.selection;
      switch (t2.case) {
        case "model":
          return new l.FT({ subagentType: e2.subagentType, selection: { case: "model", value: x(t2.value) } });
        case "inherit":
        case "disabled":
          return new l.FT({ subagentType: e2.subagentType, selection: { case: t2.case, value: t2.value } });
        default:
          return new l.FT({ subagentType: e2.subagentType });
      }
    }
    function x(e2) {
      return new l.RK({ modelId: e2.modelId, maxMode: e2.maxMode, parameters: e2.parameters.map((e3) => ({ id: e3.id, value: e3.value })), builtInModel: e2.builtInModel });
    }
    function T(e2) {
      return new c.G4({ modelId: e2.modelId, maxMode: e2.maxMode, parameters: e2.parameters.map((e3) => new c.SR({ id: e3.id, value: e3.value })), builtInModel: e2.builtInModel });
    }
    function R(e2) {
      const t2 = new d.T(e2.message, e2.code);
      for (const r2 of e2.details) t2.details.push({ type: r2.type, value: r2.value });
      return (0, n.kwO)(t2) ?? t2;
    }
    function B(e2) {
      return new l.jR({ message: { case: "cancelInvocation", value: new l.G2({ invocationId: e2 }) } });
    }
    class P {
      constructor() {
        this.frames = [];
      }
      push(e2) {
        void 0 === this.terminal && (this.frames.push(e2), this.wake?.());
      }
      end(e2) {
        void 0 === this.terminal && (this.terminal = { error: e2 }, this.wake?.());
      }
      async *[Symbol.asyncIterator]() {
        for (; ; ) {
          for (; this.frames.length > 0; ) {
            const e2 = this.frames.shift();
            void 0 !== e2 && (yield e2);
          }
          if (void 0 !== this.terminal) {
            if (void 0 !== this.terminal.error) throw this.terminal.error;
            return;
          }
          await new Promise((e2) => {
            this.wake = e2;
          }), this.wake = void 0;
        }
      }
    }
    async function J(e2, t2) {
      if (t2.signal.aborted) throw new d.T("Attempt already cancelled", p.C.Canceled);
      const r2 = new AbortController();
      let n2, i2 = 0;
      const a2 = () => {
        i2 -= 1, 0 === i2 && n2?.abort();
      }, c2 = new AbortController(), C2 = (0, m.Jt)(), k2 = /* @__PURE__ */ new Map(), x2 = /* @__PURE__ */ new Map();
      let J2, M, q;
      const D = new Promise((e3, t3) => {
        M = e3, q = t3;
      }), { failThresholdMs: O, advisoryThresholdMs: N } = (0, s.By)(t2.stallDetectorConfig, { isRunningInTest: t2.isRunningInTest }), F = t2.ctx.with(s.rS, { requestId: t2.attemptRequestId, modelDetails: void 0 }), U = new s.r0(F, { thresholdMs: O, advisoryThresholdMs: N, heartbeatOnlyThresholdMs: 0, loop: "local_loop", onStall: () => {
        Q(new h.S(`RunInference attempt stalled: no frames for ${O}ms`, O)), r2.abort();
      } });
      let L = false;
      const $ = () => {
        L || (L = true, U[Symbol.dispose]());
      }, Q = (e3) => {
        void 0 === J2 && (J2 = e3, $(), c2.abort(), q?.(e3), q = void 0, M = void 0, j(e3));
      }, j = (e3) => {
        for (const t3 of k2.values()) t3.end(e3);
        k2.clear();
        for (const t3 of x2.values()) t3.reject(e3);
        x2.clear();
      }, G = /* @__PURE__ */ new Set(), H = (e3) => {
        G.has(e3) || (G.add(e3), C2.write(B(e3)).catch(() => {
        }));
      };
      let z = false, W = false;
      const V = () => {
        if (z && W) {
          for (const e3 of k2.keys()) H(e3);
          j(new d.T("RunInference attempt cancelled", p.C.Canceled, void 0, void 0, t2.signal.reason));
        } else ((e3) => {
          if (0 === i2) return void r2.abort(e3);
          const t3 = new AbortController();
          n2 = t3, (0, u.st)(b, t3.signal).then(() => {
            n2 === t3 && (n2 = void 0), r2.abort(e3);
          });
        })(t2.signal.reason);
      };
      t2.signal.addEventListener("abort", V, { once: true });
      const K = () => {
        t2.signal.removeEventListener("abort", V), $(), c2.abort(), n2?.abort(), n2 = void 0, r2.abort();
      };
      let Y = "unknown";
      const Z = e2.runInference(C2, { signal: r2.signal, headers: { ...t2.requestHeaders, "x-request-id": t2.attemptRequestId, "x-original-request-id": t2.originalRequestId, ...(0, f.qk)(t2.ctx) }, onHeader: (e3) => {
        const r3 = e3.get(y) ?? void 0;
        void 0 !== r3 && (Y = r3, g.info(t2.ctx, "RunInference attempt opened", { attemptRequestId: t2.attemptRequestId, transportMode: Y }));
        try {
          t2.onHeader?.(e3);
        } catch (e4) {
          g.warn(t2.ctx, "RunInference onHeader callback threw", { attemptRequestId: t2.attemptRequestId, error: e4 instanceof Error ? e4.stack ?? e4.message : String(e4) });
        }
      } }), X = (async () => {
        try {
          for await (const e3 of Z) {
            const t3 = "heartbeat" === e3.message.case;
            switch (t3 && U.onServerSentHeartbeat(), U.reset("inbound_message", e3.message.case ?? "unknown", !t3), e3.message.case) {
              case "heartbeat":
                break;
              case "runReady":
                M?.(e3), M = void 0, q = void 0;
                break;
              case "invocationResponse": {
                const t4 = e3.message.value;
                void 0 !== t4.response && k2.get(t4.invocationId)?.push(t4.response);
                break;
              }
              case "invocationEnd": {
                const t4 = e3.message.value, r3 = k2.get(t4.invocationId);
                k2.delete(t4.invocationId), r3?.end(void 0 === t4.error ? void 0 : R(t4.error));
                break;
              }
              case "subagentModelsResolved": {
                const t4 = e3.message.value, r3 = x2.get(t4.resolutionId);
                x2.delete(t4.resolutionId), r3?.resolve(t4);
                break;
              }
            }
          }
          U.onStreamEnded(), Q(new d.T("RunInference attempt ended", p.C.Unavailable));
        } catch (e3) {
          Q(t2.signal.aborted ? new d.T("RunInference attempt cancelled", p.C.Canceled, void 0, void 0, e3) : d.T.from(e3));
        }
      })(), ee = async (e3) => {
        let t3;
        U.reset("outbound_write", e3.message.case ?? "unknown");
        try {
          t3 = await Promise.race([C2.write(e3).then(() => true), X.then(() => false)]);
        } catch (e4) {
          throw J2 ?? d.T.from(e4);
        }
        if (!t3) throw J2 ?? new d.T("RunInference attempt ended", p.C.Unavailable);
      };
      let te;
      U.reset("outbound_write", "runRequest"), C2.write(new l.jR({ message: { case: "runRequest", value: I(t2) } })).catch((e3) => {
        Q(d.T.from(e3));
      });
      try {
        te = await D;
      } catch (e3) {
        throw K(), e3;
      }
      const re = "runReady" === te.message.case ? te.message.value : void 0, ne = re?.resolvedModel;
      if (void 0 === re || void 0 === ne) throw K(), new d.T("RunInference attempt did not produce a resolved model", p.C.Internal);
      let se = false;
      const oe = (e3, r3) => {
        try {
          const n3 = { transport_mode: Y, loop: S };
          void 0 !== r3 && A.histogram(t2.ctx, r3, n3), v.increment(t2.ctx, 1, { outcome: e3, ...n3 });
        } catch (e4) {
          if (se) return;
          se = true, g.debug(t2.ctx, "RunInference client heartbeat metrics failed; continuing", { attemptRequestId: t2.attemptRequestId, error: e4 instanceof Error ? e4.message : String(e4) });
        }
      };
      if (re.acceptsClientHeartbeat) {
        const e3 = t2.clientHeartbeatIntervalMs ?? w;
        (async () => {
          let r3 = Date.now();
          for (; !c2.signal.aborted; ) {
            if (await (0, u.st)(e3, c2.signal), c2.signal.aborted) return;
            try {
              await C2.write(new l.jR({ message: { case: "clientHeartbeat", value: new l.IS() } }));
            } catch (e4) {
              return oe("write_failed"), void g.debug(t2.ctx, "RunInference client heartbeat write failed; stopping", { attemptRequestId: t2.attemptRequestId, error: e4 instanceof Error ? e4.message : String(e4) });
            }
            U.onClientSentHeartbeat();
            const n3 = Date.now();
            oe("sent", n3 - r3), r3 = n3;
          }
        })();
      } else oe("not_accepted"), g.warn(t2.ctx, "RunInference server does not accept client heartbeats", { attemptRequestId: t2.attemptRequestId, transportMode: Y });
      let ie = false;
      let ae, ce = false, le = false;
      const ue = (e3) => {
        if (le || ie || void 0 !== J2) return;
        let r3;
        le = true;
        try {
          r3 = new l.jR({ message: { case: "runRequestLog", value: new l.Zf({ agentRunRequest: (0, o.Fo)(e3().toBinary()) }) } });
        } catch (e4) {
          return void g.warn(t2.ctx, "RunInference request log could not be built; skipping", { attemptRequestId: t2.attemptRequestId, error: e4 instanceof Error ? e4.message : String(e4) });
        }
        U.reset("outbound_write", "runRequestLog"), C2.write(r3).catch((e4) => {
          g.debug(t2.ctx, "RunInference request log write failed; dropped", { attemptRequestId: t2.attemptRequestId, error: e4 instanceof Error ? e4.message : String(e4) });
        });
      }, de = (e3) => ({ stream: (t3, r3) => {
        const n3 = t3 instanceof l.Zc ? t3 : new l.Zc(t3), s2 = n3.invocationId ?? crypto.randomUUID(), o2 = (function(e4) {
          const t4 = e4.clone();
          return t4.requestedModel = void 0, t4.modelId = void 0, t4.conversationId = void 0, t4.conversationGroupId = void 0, t4.invocationId = void 0, t4.automationId = void 0, t4.inferenceReason = void 0, t4;
        })(n3), i3 = new P(), a3 = r3?.signal;
        return (async function* () {
          if (void 0 !== J2) throw J2;
          if (ie) throw new d.T("RunInference attempt already finished", p.C.FailedPrecondition);
          if (a3?.aborted) throw new d.T("Invocation cancelled", p.C.Canceled);
          k2.set(s2, i3);
          const t4 = () => H(s2);
          a3?.addEventListener("abort", t4, { once: true });
          let r4 = false;
          try {
            await ee(new l.jR({ message: { case: "invokeModel", value: new l.YG({ invocationId: s2, request: o2, purpose: e3 }) } })), e3 === l.NN.UNSPECIFIED && (() => {
              if (ce) return;
              ce = true;
              const e4 = ae;
              ae = void 0, void 0 !== e4 && ue(e4);
            })();
            for await (const e4 of i3) yield e4;
            r4 = true;
          } finally {
            a3?.removeEventListener("abort", t4), r4 || k2.get(s2) !== i3 || (k2.delete(s2), H(s2));
          }
        })();
      } }), pe = (function(e3) {
        const t3 = e3?.model;
        if (void 0 !== e3 && void 0 !== t3) return { model: T(t3), isFallbackToMainModel: e3.isFallbackToMainModel, maxPromptChars: e3.maxPromptChars > 0 ? e3.maxPromptChars : void 0, backgroundProps: E(e3.background) };
      })(re.summarization), me = re.acceptsAgentEvents;
      let he = false, fe = false;
      const ge = (e3) => {
        try {
          _.increment(t2.ctx, 1, { outcome: e3, transport_mode: Y, loop: S });
        } catch (e4) {
          if (fe) return;
          fe = true, g.debug(t2.ctx, "RunInference agent event metrics failed; continuing", { attemptRequestId: t2.attemptRequestId, error: e4 instanceof Error ? e4.message : String(e4) });
        }
      }, ye = { emit: (e3, r3, n3) => me ? ie || void 0 !== J2 ? (ge("write_failed"), false) : (i2 += 1, C2.write(new l.jR({ message: { case: "agentEvent", value: new l.SD({ methodName: e3, optionsJson: r3, clientReportedAtMs: BigInt(n3) }) } })).then(() => ge("written"), () => ge("write_failed")).finally(a2), true) : (ge("not_accepted"), he || (he = true, g.warn(t2.ctx, "RunInference server does not accept agent events", { attemptRequestId: t2.attemptRequestId, transportMode: Y })), false) };
      return z = true, W = re.acceptsAbortedFinish, { resolvedModel: T(ne), supportsSelfSummary: re.supportsSelfSummary, routedModelDisplayName: re.routedModelDisplayName, promptModelMetadata: re.promptModelMetadata, summarization: void 0 === pe ? void 0 : { ...pe, inferenceClient: de(l.NN.CONTEXT_SUMMARIZATION) }, nonFileRules: re.nonFileRules, metricLabels: re.metricLabels, inferenceClient: de(l.NN.UNSPECIFIED), agentRunRequestLogRequested: re.agentRunRequestLogRequested, kvBlobTelemetryEnabled: re.kvBlobTelemetryEnabled, reportAgentRunRequest: (e3) => {
        re.agentRunRequestLogRequested && !le && (ce ? ue(e3) : ae = e3);
      }, agentEvents: ye, acceptsAgentEvents: me, resolveCustomSubagentModels: re.acceptsSubagentModelResolution ? async (e3) => {
        if (void 0 !== J2) throw J2;
        if (ie) throw new d.T("RunInference attempt already finished", p.C.FailedPrecondition);
        const t3 = crypto.randomUUID(), r3 = new Promise((e4, r4) => {
          x2.set(t3, { resolve: e4, reject: r4 });
        }), n3 = new l.jR({ message: { case: "resolveSubagentModels", value: new l.iv({ resolutionId: t3, requestedModels: [...e3] }) } });
        try {
          const [, e4] = await Promise.all([ee(n3), r3]);
          return new Map(e4.models.map((e5) => [e5.requested, void 0 === e5.resolvedSlug || "" === e5.resolvedSlug ? void 0 : e5.resolvedSlug]));
        } catch (e4) {
          throw x2.delete(t3), e4;
        }
      } : void 0, finish: async (e3) => {
        if (ie) return;
        ie = true;
        const r3 = (async () => {
          for (const e4 of Array.from(k2.keys())) await ee(B(e4));
          await ee(new l.jR({ message: { case: "finishRun", value: new l.D4({ aborted: t2.signal.aborted && W, turnCompleted: true === e3?.turnCompleted }) } })), C2.close(), await X;
        })();
        try {
          await (0, u.wj)(r3, 5e3);
        } catch {
        } finally {
          K();
        }
      } };
    }
  }