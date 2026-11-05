// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerReactTranscriptHost.react.js range:30924057..30924927
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, xow
// wrapper-init: Qkf
// hoisted-owner: realtime-voice-call-card.react.js (app-out-vs-workbench-workbench-glass-main-js:5591); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var Qkf = L({ "ComposerReactTranscriptHost.react.js"() {
  "use strict";
  E(), xow();
} });
import { useMemo as Jkf } from "./react-runtime/react/esm-index-production.js";
import { jsx as ewf } from "./react-runtime/react/esm-jsx-runtime-production.js";
function twf(t, e) {
  const n = ESp(bp(TG), t), i = Jkf(() => n.length === 0 ? BMi : n.map(({ callId: s, anchor: o }) => ({ cardId: s, anchor: wSp(o), estimatedHeightPx: nwf })), [n]), r = Jkf(() => t === void 0 ? void 0 : (s) => ewf(Row, { agentId: t, callId: s, useOpenTranscript: e }), [t, e]);
  return { hostCards: i, renderHostCard: r };
}
function Row({ agentId: t, callId: e, useOpenTranscript: n }) {
  const i = n(t), r = bp(TG), s = cAa(r, { agentId: t, callId: e }), o = uAa(r, s);
  return s === void 0 || o === void 0 ? null : ewf(BSp, { onOpenTranscript: i && (() => i(e)), status: o });
}
var nwf, 