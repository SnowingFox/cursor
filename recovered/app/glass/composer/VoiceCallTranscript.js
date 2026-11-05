// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceCallTranscript.js range:17753227..17758657
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, Ctp, USp, WAa, dy, BW, Q3, fd
// wrapper-init: ukp
// hoisted-owner: VoiceCallTranscriptView.js (app-out-vs-workbench-workbench-glass-main-js:3026); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

ukp = L({ "VoiceCallTranscript.js"() {
  "use strict";
  E(), Va(), Ctp(), USp(), WAa(), dy(), BW(), Q3(), fd(), Ajr = { panel: { kB7OPa: "ui-9f619", k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kZKoxP: "ui-5yr21d", kAzted: "ui-2lwn1j", k7Eaqz: "ui-euugli", $$css: true }, empty: { kSGwAc: "ui-amitd3", $$css: true }, pending: (t) => [{ kZKoxP: t != null ? "ui-16ye13r" : t, $$css: true }, { "--x-height": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t) }] }, lkp = Mg1(function(e) {
    const n = Zwn(11), { turn: i } = e, r = i.speaker;
    let s;
    n[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = { 0: {}, 1: { className: "ui-1qt0s3j" } }, n[0] = s) : s = n[0];
    const o = s[(i.speaker !== "user") << 0];
    let a;
    n[1] !== i ? (a = Fg1(i), n[1] = i, n[2] = a) : a = n[2];
    let l;
    n[3] !== a ? (l = Yhe(Trt, { row: a }), n[3] = a, n[4] = l) : l = n[4];
    let c;
    n[5] !== o || n[6] !== l ? (c = Yhe("div", { ...o, children: l }), n[5] = o, n[6] = l, n[7] = c) : c = n[7];
    let u;
    return n[8] !== c || n[9] !== i.speaker ? (u = Yhe("div", { className: "ui-9f619 ui-1g424wj ui-vueqy4 ui-10zawnr ui-1l6g0p1 ui-1hzamyx", "data-speaker": r, children: c }), n[8] = c, n[9] = i.speaker, n[10] = u) : u = n[10], u;
  }), ckp = { className: "ui-1iyjqo2 ui-s83m0k ui-1r8uery ui-2lwn1j" }, nst = { Panel: Dg1, NothingSaid: Ng1, Turns: Lg1, Empty: Og1, Turn: lkp, PendingTurn: Bg1, scrollerProps: ckp };
} });
import { jsx as OGe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createContext as Ug1, useContext as jg1, useEffect as $g1, createElement as Hg1 } from "./react-runtime/react/esm-index-production.js";
import { c as Rjr } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Wg1(t) {
  return Number.isFinite(t) ? mkp.format(new Date(t)).replace(/\u202f/g, " ") : void 0;
}
function Gg1(t) {
  const e = Rjr(6), { turn: n } = t, i = jg1(iRa);
  let r, s;
  e[0] !== i || e[1] !== n.pendingChunk ? (r = () => i?.(n.pendingChunk), s = [i, n.pendingChunk], e[0] = i, e[1] = n.pendingChunk, e[2] = r, e[3] = s) : (r = e[2], s = e[3]), $g1(r, s);
  let o;
  return e[4] !== n.estimatePx ? (o = OGe(nst.PendingTurn, { heightPx: n.estimatePx }), e[4] = n.estimatePx, e[5] = o) : o = e[5], o;
}
function qg1(t, e, n) {
  const i = `turn-${e}`;
  return ISp(t) ? { id: i, version: `pending:${t.estimatePx}`, estimatePx: t.estimatePx, render: () => OGe(Gg1, { turn: t }) } : { id: i, version: t.text, estimatePx: n(t), render: () => OGe(nst.Turn, { turn: t }) };
}
function dkp(t, e) {
  return t.map((n, i) => {
    let r = rRa.get(n);
    r === void 0 && (r = /* @__PURE__ */ new Map(), rRa.set(n, r));
    let s = r.get(i);
    return s === void 0 && (s = qg1(n, i, e), r.set(i, s)), s;
  });
}
function hkp(t) {
  const e = Rjr(10), { turns: n, onPendingChunkVisible: i, onLinkClick: r, assistantMarkdownPlugins: s, estimateTurnPx: o, renderPlane: a } = t;
  let l;
  e[0] !== o || e[1] !== n ? (l = dkp(n, o), e[0] = o, e[1] = n, e[2] = l) : l = e[2];
  const c = l;
  let u;
  return e[3] !== s || e[4] !== r || e[5] !== i || e[6] !== a || e[7] !== c || e[8] !== n.length ? (u = OGe(nst.Turns, { children: n.length === 0 ? OGe(nst.Empty, {}) : OGe(USn, { ...s === void 0 ? {} : { assistantMarkdownPlugins: s }, messageLayout: "default", onLinkClick: r, children: OGe(iRa, { value: i, children: a({ rows: c, label: "Voice chat transcript", scroller: nst.scrollerProps }) }) }) }), e[3] = s, e[4] = r, e[5] = i, e[6] = a, e[7] = c, e[8] = n.length, e[9] = u) : u = e[9], u;
}
function pkp(t) {
  const e = Rjr(25);
  let n, i, r, s, o, a, l;
  e[0] !== t ? ({ source: a, agentId: n, callId: r, appearance: i, onCopyTranscriptId: s, unavailable: l, ...o } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7]);
  let c;
  e[8] !== n || e[9] !== r ? (c = { agentId: n, callId: r }, e[8] = n, e[9] = r, e[10] = c) : c = e[10];
  const u = cAa(a, c), d = uAa(a, u);
  let h;
  e[11] !== u ? (h = u && Wg1(u.startedAtMs), e[11] = u, e[12] = h) : h = e[12];
  const p = h;
  if (u === void 0 || d === void 0 || p === void 0) return l;
  const g = d.phase === "ended", f = `${n}/${r}`;
  let _;
  e[13] !== u || e[14] !== o || e[15] !== a || e[16] !== g || e[17] !== f ? (_ = Hg1(zg1, { ...o, ended: g, header: u, key: f, source: a }), e[13] = u, e[14] = o, e[15] = a, e[16] = g, e[17] = f, e[18] = _) : _ = e[18];
  let b;
  return e[19] !== i || e[20] !== s || e[21] !== p || e[22] !== d || e[23] !== _ ? (b = OGe(nst.Panel, { appearance: i, onCopyTranscriptId: s, startedLabel: p, status: d, children: _ }), e[19] = i, e[20] = s, e[21] = p, e[22] = d, e[23] = _, e[24] = b) : b = e[24], b;
}
function zg1(t) {
  const e = Rjr(10);
  let n, i, r, s;
  e[0] !== t ? ({ source: s, header: i, ended: n, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const { entries: o, loadChunk: a } = xSp(s, i);
  if (n && o.length === 0) {
    let c;
    return e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = OGe(nst.NothingSaid, {}), e[5] = c) : c = e[5], c;
  }
  let l;
  return e[6] !== o || e[7] !== a || e[8] !== r ? (l = OGe(hkp, { ...r, onPendingChunkVisible: a, turns: o }), e[6] = o, e[7] = a, e[8] = r, e[9] = l) : l = e[9], l;
}
var mkp, iRa, rRa, 