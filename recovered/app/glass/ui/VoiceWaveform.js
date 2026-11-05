// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceWaveform.js range:17733589..17745636
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.153Z
J1p = L({ "VoiceWaveform.js"() {
  "use strict";
  E(), P1p(), lg1(), qu(), B1p = { kmuXW: "ui-2lah0s", $$css: true }, VAa = { base: { kVAEAm: "ui-1n2onr6", k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kzqmXN: "ui-h8yej3", $$css: true }, fixed: (t) => [B1p, { kzqmXN: t != null ? "ui-5lhr3w" : t, $$css: true }, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t) }] }, U1p = 1, j1p = 1, $1p = 1, H1p = 2, W1p = 40, G1p = 16, q1p = 1, z1p = "spectrum", V1p = "simulated", K1p = 56, Y1p = 0.8, X1p = 256, Z1p = 0.08, Q1p = 2.2, Tjr = 0.04;
} });
import { jsx as LT, jsxs as tst, Fragment as KAa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as LGe } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as pg1, use as mg1, useId as ekp, useState as gg1, useLayoutEffect as fg1, useRef as vg1 } from "./react-runtime/react/esm-index-production.js";
function _g1() {
  const t = mg1(JAa);
  if (t === null) throw new Error("VoiceCallTray.Settings must be used within VoiceCallTray");
  return t;
}
function gHt(t) {
  const e = LGe(7), n = t["aria-label"];
  let i;
  e[0] !== n ? (i = LT(ao, { title: n }), e[0] = n, e[1] = i) : i = e[1];
  let r;
  e[2] !== t ? (r = LT(ho, { ...t }), e[2] = t, e[3] = r) : r = e[3];
  let s;
  return e[4] !== i || e[5] !== r ? (s = LT(xs, { content: i, placement: "top", children: r }), e[4] = i, e[5] = r, e[6] = s) : s = e[6], s;
}
function tkp(t) {
  const e = LGe(3), { rootStyle: n, children: i } = t;
  let r;
  return e[0] !== i || e[1] !== n ? (r = LT(fi.Root, { "aria-label": "Voice chat", "data-component": "voice-call-tray", enableKeyboardNavigation: false, rootStyle: n, size: "content", children: i }), e[0] = i, e[1] = n, e[2] = r) : r = e[2], r;
}
function bg1(t) {
  const e = LGe(8), { message: n, onDismiss: i } = t;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = LT(fi.HeaderTitle, { tone: "muted", children: "Voice chat" }), e[0] = r) : r = e[0];
  let s;
  e[1] !== n ? (s = tst(fi.HeaderContent, { children: [r, LT(fi.HeaderDescription, { children: n })] }), e[1] = n, e[2] = s) : s = e[2];
  let o;
  e[3] !== i ? (o = LT(fi.HeaderTrailing, { children: LT(fi.HeaderCloseButton, { "aria-label": "Dismiss", onClick: i }) }), e[3] = i, e[4] = o) : o = e[4];
  let a;
  return e[5] !== s || e[6] !== o ? (a = LT(tkp, { children: tst(fi.Header, { children: [s, o] }) }), e[5] = s, e[6] = o, e[7] = a) : a = e[7], a;
}
function yg1(t) {
  const e = LGe(48), { appearance: n, call: i, audio: r, tray: s, onTrayChange: o, onMutedChange: a, onHangUp: l, onOpenTranscript: c, settings: u } = t, d = ekp(), h = s === "settings";
  let p;
  e[0] !== n ? (p = Sjr(n), e[0] = n, e[1] = p) : p = e[1];
  let g;
  e[2] !== i.connectedAtMs || e[3] !== i.phase ? (g = i.phase === "live" ? LT(nn, { color: "tertiary", children: LT(c_i, { connectedAtMs: i.connectedAtMs }) }) : null, e[2] = i.connectedAtMs, e[3] = i.phase, e[4] = g) : g = e[4];
  let f;
  e[5] !== g ? (f = LT(fi.Header, { paddingBottom: false, children: LT(fi.HeaderContent, { children: tst(fi.HeaderTitle, { tone: "muted", children: ["Voice chat", g] }) }) }), e[5] = g, e[6] = f) : f = e[6];
  let _;
  e[7] !== r || e[8] !== i ? (_ = LT(Sg1, { audio: r, call: i }), e[7] = r, e[8] = i, e[9] = _) : _ = e[9];
  const b = h ? ZAa : Ejr, y = h ? d : void 0, S = u === void 0;
  let k;
  e[10] !== o || e[11] !== h ? (k = () => o(h ? "closed" : "settings"), e[10] = o, e[11] = h, e[12] = k) : k = e[12];
  let C;
  e[13] !== h || e[14] !== b || e[15] !== y || e[16] !== S || e[17] !== k ? (C = LT(gHt, { ...Xwn, ...b, "aria-controls": y, "aria-expanded": h, "aria-label": "Settings", disabled: S, icon: "settings-gear", onClick: k }), e[13] = h, e[14] = b, e[15] = y, e[16] = S, e[17] = k, e[18] = C) : C = e[18];
  const T = c === void 0;
  let I;
  e[19] !== c || e[20] !== T ? (I = LT(gHt, { ...Xwn, ...Ejr, "aria-label": "View transcript", disabled: T, icon: "chat-bubble-ellipsis", onClick: c }), e[19] = c, e[20] = T, e[21] = I) : I = e[21];
  let A;
  e[22] !== i.muted || e[23] !== a ? (A = LT(YAa, { muted: i.muted, onMutedChange: a }), e[22] = i.muted, e[23] = a, e[24] = A) : A = e[24];
  let P;
  e[25] !== l ? (P = LT(gHt, { ...Xwn, "aria-label": "Hang up", icon: "x", onClick: l, rootStyle: Ijr.hangUp, tone: "danger", variant: "primary" }), e[25] = l, e[26] = P) : P = e[26];
  let M;
  e[27] !== I || e[28] !== A || e[29] !== P || e[30] !== C ? (M = tst("span", { className: "ui-78zum5 ui-6s0dn4 ui-ehausa", children: [C, I, A, P] }), e[27] = I, e[28] = A, e[29] = P, e[30] = C, e[31] = M) : M = e[31];
  let O;
  e[32] !== M || e[33] !== _ ? (O = LT("div", { className: "ui-1m31zm8", children: LT(fi.Rows, { children: LT(fi.Row, { "data-component": "voice-call-row", label: _, meta: M }) }) }), e[32] = M, e[33] = _, e[34] = O) : O = e[34];
  let N;
  e[35] !== n || e[36] !== u || e[37] !== d || e[38] !== h ? (N = h && u !== void 0 ? LT("div", { className: "ui-78zum5 ui-dt5ytf ui-h8yej3 ui-13ly8rp ui-1px5tkr ui-20eq2h ui-t8cgyo ui-13fuv20 ui-13y062f ui-y2baxf ui-1wd3ewq", "data-component": "voice-call-settings", id: d, children: LT("div", { className: "ui-rvj5dj ui-1n32h3k ui-6s0dn4 ui-amitd3 ui-9f619 ui-h8yej3 ui-uw4p4q ui-1pzdu40 ui-79aity ui-y3jwiz ui-v853mj ui-1tlft3r", children: LT(JAa.Provider, { value: n, children: u }) }) }) : null, e[35] = n, e[36] = u, e[37] = d, e[38] = h, e[39] = N) : N = e[39];
  let U;
  e[40] !== O || e[41] !== N || e[42] !== s ? (U = LT(fi.Fill, { children: tst("div", { className: "ui-78zum5 ui-dt5ytf", "data-view": s, children: [O, N] }) }), e[40] = O, e[41] = N, e[42] = s, e[43] = U) : U = e[43];
  let j;
  return e[44] !== p || e[45] !== U || e[46] !== f ? (j = tst(tkp, { rootStyle: p, children: [f, U] }), e[44] = p, e[45] = U, e[46] = f, e[47] = j) : j = e[47], j;
}
function Sg1(t) {
  const e = LGe(4), { call: n, audio: i } = t, r = n.muted ? void 0 : i?.microphone;
  let s;
  return e[0] !== i || e[1] !== n.phase || e[2] !== r ? (s = LT("div", { className: "ui-78zum5 ui-6s0dn4", "data-component": "voice-call-line", children: LT("span", { className: "ui-1n2onr6 ui-78zum5 ui-6s0dn4 ui-1iyjqo2 ui-s83m0k ui-1r8uery ui-4m7ku4 ui-1qx5ct2", "data-component": "voice-call-waveform", children: n.phase === "live" ? tst(KAa, { children: [LT("span", { className: "ui-10l6tqk ui-10a8y8t ui-78zum5 ui-6s0dn4 ui-197sbye", children: LT(Ywn, { ...QAa, barHeight: rkp, ...i === void 0 ? {} : { stream: i.speaker } }) }), LT("span", { className: "ui-10l6tqk ui-10a8y8t ui-78zum5 ui-6s0dn4 ui-pk2tj9", children: LT(Ywn, { ...QAa, barHeight: skp, noiseFloor: "adaptive", ...r === void 0 ? {} : { stream: r } }) })] }) : LT(Yg, { "aria-label": "Connecting…", indeterminate: true, variant: "bar" }) }) }), e[0] = i, e[1] = n.phase, e[2] = r, e[3] = s) : s = e[3], s;
}
function YAa(t) {
  const e = LGe(12), { muted: n, onMutedChange: i, size: r } = t, s = r === void 0 ? Xwn.size : r, o = n ? ZAa : Ejr, a = n ? "Unmute" : "Mute";
  let l;
  e[0] !== n ? (l = n ? LT(xm1, {}) : "mic", e[0] = n, e[1] = l) : l = e[1];
  let c;
  e[2] !== n || e[3] !== i ? (c = () => i(!n), e[2] = n, e[3] = i, e[4] = c) : c = e[4];
  let u;
  return e[5] !== n || e[6] !== s || e[7] !== o || e[8] !== a || e[9] !== l || e[10] !== c ? (u = LT(gHt, { ...Xwn, ...o, "aria-label": a, "aria-pressed": n, icon: l, onClick: c, size: s }), e[5] = n, e[6] = s, e[7] = o, e[8] = a, e[9] = l, e[10] = c, e[11] = u) : u = e[11], u;
}
function XAa(t) {
  const e = LGe(19), { name: n, value: i, options: r, onValueChange: s, onOpenChange: o } = t, a = _g1(), l = ekp();
  let c;
  e[0] !== l || e[1] !== n ? (c = LT(nn, { id: l, size: "md", children: n }), e[0] = l, e[1] = n, e[2] = c) : c = e[2];
  let u;
  e[3] !== a ? (u = Sjr(a), e[3] = a, e[4] = u) : u = e[4];
  let d;
  e[5] !== u ? (d = [u, Ijr.menuInk], e[5] = u, e[6] = d) : d = e[6];
  let h;
  e[7] !== s ? (h = (f) => {
    f !== null && s(f);
  }, e[7] = s, e[8] = h) : h = e[8];
  let p;
  e[9] !== l || e[10] !== o || e[11] !== r || e[12] !== d || e[13] !== h || e[14] !== i ? (p = LT(b1, { "aria-labelledby": l, collisionSide: "none", contentStyle: d, hug: false, onOpenChange: o, onValueChange: h, options: r, placement: "bottom-end", rootStyle: Ijr.select, size: "lg", value: i }), e[9] = l, e[10] = o, e[11] = r, e[12] = d, e[13] = h, e[14] = i, e[15] = p) : p = e[15];
  let g;
  return e[16] !== c || e[17] !== p ? (g = tst(KAa, { children: [c, p] }), e[16] = c, e[17] = p, e[18] = g) : g = e[18], g;
}
function v_i(t) {
  t.stopPropagation();
}
function nkp(t) {
  (t.key === "Enter" || t.key === " ") && t.stopPropagation();
}
function kg1(t) {
  const e = LGe(4), [n, i] = gg1(false);
  let r;
  e[0] !== t.current ? (r = () => {
    const o = t.current?.closest('[role="option"]');
    if (o == null) return;
    const a = () => i(o.tabIndex === 0);
    a();
    const l = new MutationObserver(a);
    return l.observe(o, { attributes: true, attributeFilter: ["tabindex"] }), () => l.disconnect();
  }, e[0] = t.current, e[1] = r) : r = e[1];
  let s;
  return e[2] !== t ? (s = [t], e[2] = t, e[3] = s) : s = e[3], fg1(r, s), n;
}
function wg1(t) {
  const e = LGe(7), { label: n, isSounding: i, onPress: r } = t, s = vg1(null), o = kg1(s), a = i ? `Stop the ${n} preview` : `Play the ${n} preview`, l = i ? "pause" : "play";
  let c;
  e[0] !== r ? (c = (h) => {
    h.preventDefault(), v_i(h), r();
  }, e[0] = r, e[1] = c) : c = e[1];
  const u = o ? 0 : -1;
  let d;
  return e[2] !== a || e[3] !== l || e[4] !== c || e[5] !== u ? (d = LT(gHt, { "aria-label": a, icon: l, onClick: c, onKeyDown: nkp, onKeyUp: nkp, onMouseDown: v_i, onMouseUp: v_i, onPointerDown: v_i, onPointerUp: v_i, ref: s, size: "sm", tabIndex: u }), e[2] = a, e[3] = l, e[4] = c, e[5] = u, e[6] = d) : d = e[6], d;
}
function Cg1(t) {
  const e = LGe(39), { settings: n, onChange: i, voices: r, speeds: s, languages: o, preview: a, defaultVoiceId: l } = t;
  let c;
  e[0] !== a ? (c = a && ((k) => {
    k || a.stop();
  }), e[0] = a, e[1] = c) : c = e[1];
  let u;
  e[2] !== i || e[3] !== n ? (u = (k) => i({ ...n, voiceId: k }), e[2] = i, e[3] = n, e[4] = u) : u = e[4];
  let d;
  if (e[5] !== l || e[6] !== a || e[7] !== r) {
    let k;
    e[9] !== l || e[10] !== a ? (k = (C) => ({ value: C.id, label: C.label, ...C.id === l && { labelMeta: "Default" }, ...a && { trailing: LT(wg1, { isSounding: a.soundingVoiceId === C.id, label: C.label, onPress: () => a.toggle(C.id) }) } }), e[9] = l, e[10] = a, e[11] = k) : k = e[11], d = r.map(k), e[5] = l, e[6] = a, e[7] = r, e[8] = d;
  } else d = e[8];
  let h;
  e[12] !== n.voiceId || e[13] !== c || e[14] !== u || e[15] !== d ? (h = LT(XAa, { name: "Voice", onOpenChange: c, onValueChange: u, options: d, value: n.voiceId }), e[12] = n.voiceId, e[13] = c, e[14] = u, e[15] = d, e[16] = h) : h = e[16];
  let p;
  e[17] !== i || e[18] !== n ? (p = (k) => i({ ...n, speed: k }), e[17] = i, e[18] = n, e[19] = p) : p = e[19];
  let g;
  e[20] !== s ? (g = s.map(Eg1), e[20] = s, e[21] = g) : g = e[21];
  let f;
  e[22] !== n.speed || e[23] !== p || e[24] !== g ? (f = LT(XAa, { name: "Speed", onValueChange: p, options: g, value: n.speed }), e[22] = n.speed, e[23] = p, e[24] = g, e[25] = f) : f = e[25];
  let _;
  e[26] !== i || e[27] !== n ? (_ = (k) => i({ ...n, language: k }), e[26] = i, e[27] = n, e[28] = _) : _ = e[28];
  let b;
  e[29] !== o ? (b = o.map(Tg1), e[29] = o, e[30] = b) : b = e[30];
  let y;
  e[31] !== n.language || e[32] !== _ || e[33] !== b ? (y = LT(XAa, { name: "Language", onValueChange: _, options: b, value: n.language }), e[31] = n.language, e[32] = _, e[33] = b, e[34] = y) : y = e[34];
  let S;
  return e[35] !== y || e[36] !== h || e[37] !== f ? (S = tst(KAa, { children: [h, f, y] }), e[35] = y, e[36] = h, e[37] = f, e[38] = S) : S = e[38], S;
}
function Tg1(t) {
  return { value: t.id, label: t.label };
}
function Eg1(t) {
  return { value: t.value, label: t.label };
}
var Xwn, ZAa, Ejr, ikp, rkp, skp, QAa, Ijr, JAa, xjr, 