// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceCallStateTray.js range:17749570..17753227
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.150Z
var Pg1 = L({ "VoiceCallStateTray.js"() {
  "use strict";
  E(), lxa(), eRa();
} });
import { jsx as Yhe, jsxs as __i } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Zwn } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as Mg1 } from "./react-runtime/react/esm-index-production.js";
function Dg1(t) {
  const e = Zwn(18), { appearance: n, status: i, startedLabel: r, onCopyTranscriptId: s, children: o } = t;
  let a;
  e[0] !== n ? (a = gn(Ajr.panel, Sjr(n)), e[0] = n, e[1] = a) : a = e[1];
  let l;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = Yhe(nn, { as: "h2", size: "lg", weight: "semibold", children: "Voice call" }), e[2] = l) : l = e[2];
  let c;
  e[3] !== i ? (c = Yhe(FSp, { status: i }), e[3] = i, e[4] = c) : c = e[4];
  let u;
  e[5] !== r || e[6] !== c ? (u = __i("div", { className: "ui-78zum5 ui-dt5ytf ui-1iyjqo2 ui-11twubx ui-euugli", children: [l, __i(nn, { color: "tertiary", "data-component": "voice-call-transcript-timing", size: "md", children: [r, " · ", c] })] }), e[5] = r, e[6] = c, e[7] = u) : u = e[7];
  let d;
  e[8] !== s ? (d = s === void 0 ? null : __i(hn, { children: [Yhe(hn.Trigger, { children: Yhe(ho, { "aria-label": "Transcript actions", icon: "ellipsis" }) }), Yhe(hn.Content, { "aria-label": "Transcript actions", placement: "bottom-end", children: Yhe(hn.Item, { leading: Yhe(zt, { name: "hash" }), onSelect: s, children: "Copy Transcript ID" }) })] }), e[8] = s, e[9] = d) : d = e[9];
  let h;
  e[10] !== u || e[11] !== d ? (h = __i("div", { className: "ui-78zum5 ui-1cy8zhl ui-ehausa ui-t9g0qb ui-10cfkro ui-usxwy5 ui-193t4r6", children: [u, d] }), e[10] = u, e[11] = d, e[12] = h) : h = e[12];
  let p;
  return e[13] !== o || e[14] !== i.phase || e[15] !== a || e[16] !== h ? (p = __i("div", { ...a, "data-call-phase": i.phase, "data-component": "voice-call-transcript-panel", children: [h, o] }), e[13] = o, e[14] = i.phase, e[15] = a, e[16] = h, e[17] = p) : p = e[17], p;
}
function Ng1() {
  const t = Zwn(1);
  let e;
  return t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (e = Yhe("div", { className: "ui-1t8xvyj ui-10cfkro ui-193t4r6 ui-t8cgyo ui-13fuv20 ui-13y062f", "data-component": "voice-call-transcript-empty", children: Yhe(nn, { color: "tertiary", size: "md", children: "Nothing was said on this call." }) }), t[0] = e) : e = t[0], e;
}
function Lg1(t) {
  const e = Zwn(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = Yhe("div", { className: "ui-78zum5 ui-dt5ytf ui-1iyjqo2 ui-s83m0k ui-1r8uery ui-2lwn1j ui-y3j6vt ui-t8cgyo ui-13fuv20 ui-13y062f", "data-component": "voice-call-turns", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function Og1() {
  const t = Zwn(1);
  let e;
  return t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (e = Yhe(nn, { "aria-label": "Voice chat transcript", color: "secondary", role: "log", rootStyle: Ajr.empty, size: "sm", children: "No speech transcribed yet" }), t[0] = e) : e = t[0], e;
}
function Fg1({ itemId: t, speaker: e, text: n }) {
  const i = [t];
  return e === "user" ? { kind: "human", rowId: t, sourceIds: i, entry: { kind: "human", id: t, sourceIds: i, message: { text: n } } } : { kind: "assistantMarkdown", rowId: t, sourceIds: i, entry: { kind: "assistantMarkdown", id: t, sourceIds: i, markdown: n } };
}
function Bg1(t) {
  const e = Zwn(4), { heightPx: n } = t;
  let i;
  e[0] !== n ? (i = gn(Ajr.pending(n)), e[0] = n, e[1] = i) : i = e[1];
  let r;
  return e[2] !== i ? (r = Yhe("div", { "aria-hidden": "true", ...i }), e[2] = i, e[3] = r) : r = e[3], r;
}
var Ajr, lkp, ckp, nst, 