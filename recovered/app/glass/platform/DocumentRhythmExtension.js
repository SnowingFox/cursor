// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DocumentRhythmExtension.js range:18189121..18191945
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.082Z
// wrapper: n01 deps:6 [E, Fy, gE, Doe, Aw, HQ]
// declarations: o01, a01, l01
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production, esm-index-production
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
n01 = L({ "DocumentRhythmExtension.js"() {
  "use strict";
  E(), Fy(), gE(), Doe(), Aw(), HQ(), RPa = new j1("documentRhythm"), bIp = Rw.create({ name: "documentRhythm", addProseMirrorPlugins() {
    return [new MS({ key: RPa, state: { init: (t, e) => _Ip(e.doc), apply: (t, e) => t.docChanged ? _Ip(t.doc) : e }, props: { decorations: (t) => RPa.getState(t) ?? null } })];
  } });
} });
import { jsx as PPa, jsxs as i01 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as r01 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as s01, useRef as yIp } from "./react-runtime/react/esm-index-production.js";
function o01(t) {
  t.preventDefault();
}
function a01(t) {
  const e = r01(22), { initialHref: n, onSubmit: i, onCancel: r } = t, [s, o] = s01(n), a = yIp(null), l = yIp(false);
  let c;
  e[0] !== i || e[1] !== s ? (c = () => {
    l.current || (l.current = true, i(s));
  }, e[0] = i, e[1] = s, e[2] = c) : c = e[2];
  const u = c;
  let d;
  e[3] !== r ? (d = (T) => {
    l.current || (l.current = true, r({ refocusEditor: T }));
  }, e[3] = r, e[4] = d) : d = e[4];
  const h = d;
  let p;
  e[5] !== h || e[6] !== u ? (p = (T) => {
    T.key === "Enter" ? (T.preventDefault(), u()) : T.key === "Escape" && (T.preventDefault(), T.stopPropagation(), h(true));
  }, e[5] = h, e[6] = u, e[7] = p) : p = e[7];
  const g = p;
  let f;
  e[8] !== h ? (f = (T) => {
    T.relatedTarget instanceof Node && a.current?.contains(T.relatedTarget) || h(false);
  }, e[8] = h, e[9] = f) : f = e[9];
  const _ = f;
  let b;
  e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = PPa(zt, { name: "link", size: "sm", className: "ui-2lah0s ui-1mh7f6w", "aria-hidden": true }), e[10] = b) : b = e[10];
  let y;
  e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = (T) => o(T.currentTarget.value), e[11] = y) : y = e[11];
  let S;
  e[12] !== _ || e[13] !== g || e[14] !== s ? (S = PPa("input", { className: "ui-jyslct ui-c342km ui-ng3xce ui-jbqb8w ui-1a2a7pz ui-1oysuqx ui-1wd3ewq ui-11wthnw ui-1ja60sm ui-jb2p0i ui-ltfok3", type: "text", value: s, placeholder: "Paste or type a link…", "aria-label": "Link URL", autoFocus: true, onFocus: l01, onChange: y, onKeyDown: g, onBlur: _ }), e[12] = _, e[13] = g, e[14] = s, e[15] = S) : S = e[15];
  let k;
  e[16] !== _ || e[17] !== u ? (k = PPa(ho, { icon: "check", size: "md", iconSize: "base", "aria-label": "Apply link", onPointerDown: o01, onClick: u, onBlur: _ }), e[16] = _, e[17] = u, e[18] = k) : k = e[18];
  let C;
  return e[19] !== S || e[20] !== k ? (C = i01("div", { ref: a, className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-mpze1h ui-xk0z11", children: [b, S, k] }), e[19] = S, e[20] = k, e[21] = C) : C = e[21], C;
}
function l01(t) {
  return t.currentTarget.select();
}
