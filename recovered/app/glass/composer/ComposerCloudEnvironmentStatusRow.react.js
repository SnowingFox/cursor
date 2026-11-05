// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerCloudEnvironmentStatusRow.react.js range:31577433..31581783
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, d_, Mt, pi, Hn, sd, pd, jct, ZB, UMl, mSw, B1s, mNf, xSw, tU, fNf, DSw, OSw
// wrapper-init: GSw
// hoisted-owner: cloudEnvironmentStatusRowVisibility.js (app-out-vs-workbench-workbench-glass-main-js:5915); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

GSw = L({ "ComposerCloudEnvironmentStatusRow.react.js"() {
  "use strict";
  E(), d_(), Mt(), pi(), Hn(), sd(), pd(), jct(), ZB(), UMl(), mSw(), B1s(), mNf(), xSw(), tU(), fNf(), DSw(), OSw(), yNf = 30;
} });
function qSw(t) {
  switch (t) {
    case Po.CREATING:
      return "creating";
    case Po.RUNNING:
      return "running";
    case Po.ERROR:
      return "error";
    default:
      return;
  }
}
function zSw(t) {
  const { runtime: e } = t, n = () => t.enabled() ? t.resolvedBcId() : void 0, [i, r] = Wt(void 0);
  Cn(() => {
    const N = n();
    if (N === void 0) {
      r(void 0);
      return;
    }
    const U = e.cloudEnvironmentLogService.getState(N);
    r({ bcId: N, state: U.value });
    const j = U.onChange(($) => r({ bcId: N, state: $ }));
    On(() => {
      j.dispose(), U.dispose();
    });
  });
  const s = vt(() => {
    const N = n();
    return N === void 0 ? void 0 : e.cloudAgentStorageService.getMetadataProperty(N);
  }), [o, a] = Wt(0);
  Cn(() => {
    const N = s();
    if (N === void 0) return;
    const U = N.event(() => a((j) => j + 1));
    On(() => U.dispose());
  });
  const l = vt(() => (o(), s()?.nonReactive() ?? "not_loaded")), c = vt(() => {
    const N = n();
    if (N !== void 0) return e.backgroundComposerData() ?? e.backgroundComposerDataService.data.backgroundComposers.find((U) => U.bcId === N);
  }), u = vt(() => n() === void 0 ? void 0 : Vnl(e.composerDataHandle().data.fullConversationHeadersOnly)), d = vt(() => {
    const N = n(), U = i(), j = N === void 0 ? void 0 : U !== void 0 && U.bcId === N ? U.state : e.cloudEnvironmentLogService.peekState(N), $ = c(), H = u();
    return BMl(j, FMl({ status: $?.status, isKilled: $?.isKilled, usePrivateWorker: $?.usePrivateWorker, runCreatedAtMs: $?.createdAt, hasAgentOutput: H !== void 0, firstAgentOutputAtMs: H?.startedAtMs }));
  });
  let h, p = false;
  const g = vt(() => {
    const N = n();
    if (N !== h && (h = N, p = false), N === void 0) return false;
    if (!p) {
      const U = e.composerDataHandle().data;
      p = deg(U.fullConversationHeadersOnly, (j) => U.conversationMap[j]);
    }
    return p;
  }), f = vt(() => e.composerDataHandle().data.isLoadingBackgroundConversationFromState !== true && !g() && u() === void 0), _ = vt(() => {
    const N = c(), U = d();
    return { isKilled: N?.isKilled === true, status: N?.status, hasStartedVm: N?.hasStartedVm === true && !U.isAwaitingPrivateWorkerOutput, waterfallComplete: U.isComplete };
  }), b = vt(() => rNf(_())), y = vt(() => lNf(_())), [S, k] = Wt(void 0), C = vt(() => {
    const N = S();
    return N !== void 0 && N.bcId === n() ? N : void 0;
  }), T = vt(() => C()?.environmentLine === true), I = vt(() => C()?.startupWarnings === true), A = e.usedEnvironmentSource, P = e.openerService !== void 0;
  if (A !== void 0) {
    const [N, U] = Wt(0);
    let j, $ = false, H;
    Cn(() => {
      const G = n();
      if (N(), G !== j && (j = G, $ = false, H = void 0), G === void 0) return;
      const q = b(), K = y(), V = f();
      K && !q ? ($ = true, H = void 0) : q && $ && (H ??= Date.now());
      let Y = false, J;
      aNf({ loader: A.loader, bcId: G, warningMayStillChange: V }).then((Q) => {
        Y || (k({ bcId: G, environmentLine: P && tNf({ websiteUrl: A.websiteUrl, fields: Q }) !== void 0, startupWarnings: iNf(Q).length > 0 }), kFl({ fields: Q, isSetupSettled: q, isSetupStatusKnown: K, setupSettledAtMs: H, warningMayStillChange: V }) && (J = $t.setTimeout(() => U((te) => te + 1), SNf)));
      }), On(() => {
        Y = true, J !== void 0 && $t.clearTimeout(J);
      });
    });
  }
  let M, O = false;
  return vt(() => {
    const N = n();
    if (N !== M && (M = N, O = false), N === void 0) return false;
    const U = g(), j = c()?.status, $ = l(), H = pNf({ bcId: N, workflowStatus: $ === "not_loaded" ? "not_loaded" : $.workflowStatus, serverStatus: j, hasStreamedMessages: U, hasConversation: void 0 }), G = d().hasContent;
    return O = Wtp(O, { status: H, serverStatus: qSw(j), firstTokenStreamed: U, hasWaterfallContent: G, isVmReady: b() }), Gtp({ isPreparingRequest: e.composerDataHandle().data.cloudAgentStartPhase === "preparing-request", hasWaterfallContent: G, isStartingUp: O, hasInternalTimings: e.isCloudAgentTimingsVisible(), hasEnvironmentLine: T(), hasStartupWarnings: I() });
  });
}
var SNf, 