// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceCallTray.js range:17745636..17748298
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.151Z
eRa = L({ "VoiceCallTray.js"() {
  "use strict";
  E(), g$t(), ljr(), Am1(), WAa(), hL(), Q3(), dy(), J1p(), Rkt(), Obn(), Xwn = { rounded: true, size: "xl" }, ZAa = { variant: "secondary", tone: "accent" }, Ejr = { variant: "secondary" }, ikp = 20, rkp = 3, skp = 0, QAa = { barColor: "var(--voice-call-agent-ink)", barGap: 4, barRadius: 9999, barWidth: 3, fadeEdges: false, fallback: "static", height: ikp, mode: "spectrum", sensitivity: 0.9 }, Ijr = { hangUp: { kWkggS: "ui-1n83j5j ui-r6g2hh", kMwMTN: "ui-78ffna ui-6o40cr", $$css: true }, select: { kaIpWk: "ui-1m7fhj7", kVAM5u: "ui-1ij97r5", $$css: true }, menuInk: { "--cursor-text-primary": "ui-y2baxf", $$css: true } }, JAa = pg1(null), xjr = Object.assign(yg1, { Settings: Cg1 });
} });
import { jsx as Iwt, jsxs as tRa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Ig1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function okp(t) {
  const e = Ig1(22), { agentName: n, connectedAtMs: i, muted: r, onMutedChange: s, onReturn: o, onHangUp: a } = t;
  let l;
  e[0] !== n ? (l = n.trim() || "New Agent", e[0] = n, e[1] = l) : l = e[1];
  const c = l;
  let u;
  e[2] !== i ? (u = i === void 0 ? null : Iwt(nn, { color: "tertiary", children: Iwt(c_i, { connectedAtMs: i }) }), e[2] = i, e[3] = u) : u = e[3];
  let d;
  e[4] !== c || e[5] !== u ? (d = Iwt(fi.HeaderContent, { children: Iwt(fi.HeaderTitle, { truncate: true, children: tRa("span", { className: "ui-3nfvp2 ui-1pha0wt ui-pkkfsy ui-euugli", children: ["Voice chat with ", c, u] }) }) }), e[4] = c, e[5] = u, e[6] = d) : d = e[6];
  let h;
  e[7] !== r || e[8] !== s ? (h = Iwt(YAa, { muted: r, onMutedChange: s, size: "sm" }), e[7] = r, e[8] = s, e[9] = h) : h = e[9];
  let p;
  e[10] !== a ? (p = a === void 0 ? null : Iwt(gHt, { "aria-label": "Hang up", icon: "x", onClick: a, rounded: true, size: "sm", tone: "danger", variant: "secondary" }), e[10] = a, e[11] = p) : p = e[11];
  const g = `Return to the voice chat with ${c}`;
  let f;
  e[12] !== o || e[13] !== g ? (f = Iwt(An, { "aria-label": g, onClick: o, size: "sm", variant: "secondary", children: "Return" }), e[12] = o, e[13] = g, e[14] = f) : f = e[14];
  let _;
  e[15] !== h || e[16] !== p || e[17] !== f ? (_ = tRa(fi.HeaderTrailing, { children: [h, p, f] }), e[15] = h, e[16] = p, e[17] = f, e[18] = _) : _ = e[18];
  let b;
  return e[19] !== d || e[20] !== _ ? (b = Iwt(fi.Root, { "aria-label": "Voice chat", "data-component": "realtime-voice-return", enableKeyboardNavigation: false, role: "region", size: "content", children: tRa(fi.Header, { children: [d, _] }) }), e[19] = d, e[20] = _, e[21] = b) : b = e[21], b;
}
