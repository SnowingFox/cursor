// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ImagePlugins.js range:28088803..28091970
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.090Z
// wrapper: _3k deps:7 [E, pi, cI, Ak, vo, qJ, eIt]
// declarations: Jvl, e_l, b3k, y3k, S3k, k3k, _3k, KPg (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var _3k = L({ "ImagePlugins.js"() {
  "use strict";
  E(), pi(), cI(), Ak(), vo(), qJ(), eIt();
} });
function Jvl(t) {
  const e = ws(t), n = e.getSelection();
  if (!n) return false;
  const i = n.getRangeAt(0), r = i.cloneRange();
  r.selectNodeContents(t), r.setEnd(i.endContainer, i.endOffset);
  const s = r.getBoundingClientRect().height, o = parseInt(e.getComputedStyle(t).lineHeight);
  let a = 0;
  if (n && n.rangeCount > 0) {
    const d = n.getRangeAt(0), h = d.cloneRange();
    h.selectNodeContents(t), h.setEnd(d.startContainer, d.startOffset), a = h.toString().length;
  }
  const c = t.innerText.substring(0, a + 1).includes(`
`), u = t.innerText.trim() === "";
  return s <= o && (!c || u);
}
function e_l(t) {
  const e = ws(t), n = e.getSelection();
  if (!n) return false;
  const i = n.getRangeAt(0), r = i.cloneRange();
  r.selectNodeContents(t), r.setStart(i.startContainer, i.startOffset);
  const s = r.getBoundingClientRect().height, o = parseInt(e.getComputedStyle(t).lineHeight);
  let a = 0;
  if (n && n.rangeCount > 0) {
    const d = n.getRangeAt(0), h = d.cloneRange();
    h.selectNodeContents(t), h.setStart(d.endContainer, d.endOffset), a = h.toString().length;
  }
  const c = t.innerText.substring(a).includes(`
`), u = t.innerText.trim() === "";
  return s <= o && (!c || u);
}
function b3k(t) {
  const [e] = t1(), n = [];
  for (const { command: i, callback: r, priority: s } of t.commandListeners ?? []) n.push(e.registerCommand(i, r, s ?? K0e));
  return On(() => {
    for (const i of n) i();
  }), null;
}
function y3k() {
  const [t] = t1(), e = SRk(t);
  return On(e), null;
}
function S3k(t) {
  const [e] = t1(), [n, i] = Wt("");
  Cn(() => {
    t.text !== void 0 && i(t.text);
  });
  let r = false;
  const s = e.registerTextContentListener((a) => {
    i(a);
  }), o = e.registerCommand(_Cn, (a) => {
    const l = ks(() => t.selections), c = Ucs(e);
    return a.repeat ? (r = true, false) : (!a.repeat && r && (r = false), c ? false : !t.onTryDeleteContext && l.length > 0 && (t.ignoreTextForLastSelectionRemoval && c || n() === "") ? (t.removeSelection()(l.length - 1), true) : (n() === "" || t.ignoreTextForLastSelectionRemoval && c) && t.onTryDeleteContext ? t.onTryDeleteContext()?.() : false);
  }, q2e);
  return On(() => {
    o(), s();
  }), null;
}
function k3k(t) {
  const [e] = t1(), n = CRn(), i = e.registerCommand(qyi, (c) => (t.setIsFocused && t.setIsFocused(true), false), K0e), r = e.registerCommand(mGr, (c) => (t.setIsFocused && t.setIsFocused(false), false), K0e);
  let s = 0;
  const o = 100, a = (c) => {
    c.keyCode === 9 && (s = c.timeStamp);
  };
  Cn(() => {
    n.window.addEventListener("keydown", a, true);
  });
  const l = e.registerCommand(qyi, (c) => {
    const u = ku();
    return Cc(u) && s + o > c.timeStamp && vbe(u.clone()), false;
  }, mR);
  return Cn(() => {
    t.delegate !== void 0 && t.delegate.setForceFocusNoScroll(() => {
      e.getRootElement().focus({ preventScroll: true });
    });
  }), On(() => {
    i(), r(), l(), n.window.removeEventListener("keydown", a, true);
  }), null;
}
var KPg, YPg, tIt, t_l, XPg, ZPg, QPg, JPg, eMg, tMg, nMg, iMg, rMg,
