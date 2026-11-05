// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerComputerUseTranscriptCard.react.js range:32001980..32004443
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, Pu, ZB, Pl, CTw
// wrapper-init: ATw -> composerComputerUseTranscriptCardModuleInit
// hoisted-owner: ComposerConnectScmTranscriptCard.react.js (app-out-vs-workbench-workbench-glass-main-js:6014); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: ATw -> composerComputerUseTranscriptCardModuleInit; LTw -> ComposerConnectScmTranscriptCard (apply-map AST equivalent)

var composerComputerUseTranscriptCardModuleInit = L({
  "ComposerComputerUseTranscriptCard.react.js"() {
    "use strict";

    E(), Mt(), Pu(), ZB(), Pl(), CTw();
  }
});
import { useMemo as sFf } from "./react-runtime/react/esm-index-production.js";
import { jsx as RTw } from "./react-runtime/react/esm-jsx-runtime-production.js";
function PTw(t) {
  if (!(!t?.owner || !t.repo)) return `${t.owner}/${t.repo}`;
}
function MTw(t, e, n) {
  const i = t.getComposerBubble(e, n)?.toolFormerData;
  return i?.tool === Ct.CONNECT_SCM ? i : void 0;
}
function DTw(t) {
  const e = t.connectOutcome === "failed";
  let n = t.userDecision;
  n === void 0 && !e && t.hasCapability && !t.hasPendingDecision && !t.hasResult && t.status !== "loading" && (n = "rejected");
  const i = n === "accepted",
    r = t.status === "completed" || t.resultSuccess;
  return e ? "failed" : n === "rejected" ? "skipped" : i && t.status === "loading" ? "connecting" : i && r ? "connected" : i ? "canceled" : "pending";
}
function NTw(t) {
  const {
      bubbleId: e,
      composerDataHandle: n,
      composerDataService: i,
      vm: r
    } = t,
    s = MTw(i, n, e),
    o = s?.params?.github,
    a = o ? PTw(o.repository) : r.githubRepo,
    l = o ? o.gheApplication || void 0 : r.gheApplication,
    c = i.getToolFormer(n),
    u = c !== void 0 && c.pendingDecisions().pendingDecisions[e] !== void 0,
    d = DTw({
      userDecision: s?.userDecision,
      status: s?.status,
      connectOutcome: s?.additionalData?.connectOutcome,
      hasPendingDecision: u,
      hasResult: s?.result !== void 0,
      hasCapability: c !== void 0,
      resultSuccess: s?.result?.success === true
    }),
    h = uis(n.data);
  return {
    state: d,
    githubRepo: a,
    gheApplication: l,
    alreadyConnected: s?.additionalData?.alreadyConnected === true,
    failureReason: s?.additionalData?.failureReason,
    canAct: !h && c !== void 0,
    toolCallId: s?.toolCallId
  };
}
function ComposerConnectScmTranscriptCard({
  bubbleId: t,
  composerDataHandle: e,
  instantiationService: n,
  vm: i
}) {
  const r = sFf(() => n.invokeFunction(u => u.get(no)), [n]),
    s = sFf(() => ({
      bubbleId: t,
      composerDataHandle: e,
      composerDataService: r,
      vm: i
    }), [t, e, r, i]),
    o = o3(s, NTw),
    a = o.canAct ? o.toolCallId : void 0,
    l = a === void 0 ? void 0 : () => {
      r.getToolFormer(e)?.acceptToolCall(a);
    },
    c = a === void 0 ? void 0 : () => {
      r.getToolFormer(e)?.rejectToolCall(a, {
        skipReason: "user"
      });
    };
  return RTw(Bya, {
    alreadyConnected: o.alreadyConnected,
    failureReason: o.failureReason,
    gheApplication: o.gheApplication,
    githubRepo: o.githubRepo,
    onConnect: l,
    onSkip: c,
    state: o.state
  });
}
