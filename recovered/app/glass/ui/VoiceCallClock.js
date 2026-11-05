// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceCallClock.js range:17669212..17671531
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.147Z
ljr = L({ "VoiceCallClock.js"() {
  "use strict";
  E(), zhi(), dAa = 1e3, hAa = 100, Bwn = /* @__PURE__ */ new Set(), ajr = 0;
} });
import { jsxs as cjr, Fragment as Em1, jsx as Qrt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as OSp } from "./react-runtime/react/esm-compiler-runtime-production.js";
function FSp(t) {
  const e = OSp(4), { status: n } = t;
  switch (n.phase) {
    case "connecting":
      return "Connecting";
    case "live": {
      let i;
      return e[0] !== n.connectedAtMs ? (i = cjr(Em1, { children: ["Ongoing · ", Qrt(c_i, { connectedAtMs: n.connectedAtMs })] }), e[0] = n.connectedAtMs, e[1] = i) : i = e[1], i;
    }
    case "ended": {
      let i;
      return e[2] !== n.durationMs ? (i = n.durationMs === void 0 ? "Ended" : `Ended · ${i2e(n.durationMs / 1e3)}`, e[2] = n.durationMs, e[3] = i) : i = e[3], i;
    }
    default:
      return n;
  }
}
function BSp(t) {
  const e = OSp(15), { status: n, onOpenTranscript: i } = t;
  let r;
  e[0] !== i ? (r = (h) => {
    h.stopPropagation(), i?.();
  }, e[0] = i, e[1] = r) : r = e[1];
  const s = r;
  let o;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = Qrt(uh.HeaderTitle, { title: "Voice call", children: cjr("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-11twubx ui-16dsc37", children: [Qrt(zt, { "aria-hidden": true, name: "waveform", size: "sm" }), "Voice call"] }) }), e[2] = o) : o = e[2];
  let a;
  e[3] !== n ? (a = cjr(uh.HeaderContent, { children: [o, Qrt(uh.HeaderDescription, { children: Qrt(FSp, { status: n }) })] }), e[3] = n, e[4] = a) : a = e[4];
  const l = i === void 0;
  let c;
  e[5] !== s || e[6] !== l ? (c = Qrt(uh.HeaderTrailing, { children: Qrt(An, { disabled: l, frame: "content", onClick: s, size: "sm", tone: "secondary", variant: "text", children: "View transcript" }) }), e[5] = s, e[6] = l, e[7] = c) : c = e[7];
  let u;
  e[8] !== i || e[9] !== a || e[10] !== c ? (u = Qrt(uh.Root, { surface: "bubble", children: cjr(uh.Header, { inset: 12, onClick: i, children: [a, c] }) }), e[8] = i, e[9] = a, e[10] = c, e[11] = u) : u = e[11];
  let d;
  return e[12] !== n.phase || e[13] !== u ? (d = Qrt("div", { "data-call-phase": n.phase, "data-component": "voice-call-card", children: u }), e[12] = n.phase, e[13] = u, e[14] = d) : d = e[14], d;
}
