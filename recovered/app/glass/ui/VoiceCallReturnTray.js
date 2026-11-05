// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceCallReturnTray.js range:17748298..17749570
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.149Z
var xg1 = L({ "VoiceCallReturnTray.js"() {
  "use strict";
  E(), g$t(), ljr(), eRa(), dy(), P0();
} });
import { jsx as nRa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Ag1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { Fragment as Rg1 } from "./react-runtime/react/esm-index-production.js";
function akp(t) {
  const e = Ag1(13), { state: n, inHeaderTray: i, onDismissFailure: r, children: s } = t, o = i === void 0 ? false : i;
  if (n.phase === "idle") return null;
  let a;
  e[0] !== o ? (a = (d, h, p) => o ? nRa(axa, { motion: h ? "default" : "suppressed", trigger: null, visible: true, children: p }, d) : nRa(Rg1, { children: p }, d), e[0] = o, e[1] = a) : a = e[1];
  const l = a;
  if (n.phase === "failed") {
    let d;
    e[2] !== r || e[3] !== n.message ? (d = nRa(bg1, { message: n.message, onDismiss: r }), e[2] = r, e[3] = n.message, e[4] = d) : d = e[4];
    let h;
    return e[5] !== l || e[6] !== d ? (h = l("failed", false, d), e[5] = l, e[6] = d, e[7] = h) : h = e[7], h;
  }
  const c = n.phase === "connecting";
  let u;
  return e[8] !== s || e[9] !== l || e[10] !== n || e[11] !== c ? (u = l(n.callId, c, s(n)), e[8] = s, e[9] = l, e[10] = n, e[11] = c, e[12] = u) : u = e[12], u;
}
