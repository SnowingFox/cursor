// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UiStepRenderer.js range:16097963..16100252
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.134Z
var Fnp = L({ "UiStepRenderer.js"() {
  "use strict";
  E(), gSa(), jFr(), Eya(), m2e();
} });
import { jsx as Q9r, jsxs as ZUS, Fragment as QUS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as JUS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Bnp(t) {
  const e = JUS(28), { steps: n, loading: i, showSimulatedThinking: r, simulatedThinkingMessage: s, simulatedThinkingWaitSeconds: o, showLoadingPreview: a, showFileChangeStats: l, options: c, stepGap: u, onFileClick: d, onUrlClick: h, copyToClipboard: p, stopShellCommand: g, conversationDensity: f } = t, { richLinkPresentationProvider: _ } = uR();
  let b;
  e[0] !== f || e[1] !== c ? (b = f !== void 0 ? { ...c, conversationDensity: f } : c, e[0] = f, e[1] = c, e[2] = b) : b = e[2];
  const y = b;
  let S;
  e[3] !== i || e[4] !== d || e[5] !== h ? (S = (A, P, M) => Q9r(Onp, { step: A, index: P, generating: i, renderStep: S, onFileClick: d, onUrlClick: h, onNestedToolExpand: M?.onNestedToolExpand, defaultExpanded: A.type === "tool-call" && M?.expandedToolCallId === A.callId }), e[3] = i, e[4] = d, e[5] = h, e[6] = S) : S = e[6];
  let k;
  e[7] !== o ? (k = o !== void 0 ? ZUS(QUS, { children: [Q9r(GFr, { size: "inherit", value: o }), "s"] }) : void 0, e[7] = o, e[8] = k) : k = e[8];
  const C = k;
  let T;
  e[9] !== y || e[10] !== i || e[11] !== S || e[12] !== l || e[13] !== a || e[14] !== r || e[15] !== C || e[16] !== s || e[17] !== u || e[18] !== n ? (T = Q9r(P_a, { steps: n, loading: i, showSimulatedThinking: r, simulatedThinkingMessage: s, simulatedThinkingDetails: C, showLoadingPreview: a, showFileChangeStats: l, options: y, stepGap: u, renderStep: S }), e[9] = y, e[10] = i, e[11] = S, e[12] = l, e[13] = a, e[14] = r, e[15] = C, e[16] = s, e[17] = u, e[18] = n, e[19] = T) : T = e[19];
  const I = T;
  if (p || d || h || g || f != null) {
    let A;
    return e[20] !== f || e[21] !== p || e[22] !== I || e[23] !== d || e[24] !== h || e[25] !== _ || e[26] !== g ? (A = Q9r(USn, { copyToClipboard: p, onFileClick: d, onUrlClick: h, stopShellCommand: g, conversationDensity: f, richLinkPresentationProvider: _, children: I }), e[20] = f, e[21] = p, e[22] = I, e[23] = d, e[24] = h, e[25] = _, e[26] = g, e[27] = A) : A = e[27], A;
  }
  return I;
}
