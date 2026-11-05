// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MathBlockPlugin.js range:18157596..18160377
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.118Z
// wrapper: Nw1 deps:5 [E, Fy, v_e, Sda, addAttributes]
// declarations: uIp, Uw1, jw1, f0n (segment truncated)
// anchors: (none)
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Nw1 = L({ "MathBlockPlugin.js"() {
  "use strict";
  E(), Fy(), v_e(), Sda(), aIp = /^\$\$((?:(?!\$\$)[\s\S])*?)\$\$[ \t]*(?:\n|$)/, lIp = Aw1(function(e) {
    const n = xw1(9), { node: i, selected: r } = e;
    let s;
    n[0] !== i.attrs ? (s = J_i(i.attrs), n[0] = i.attrs, n[1] = s) : s = n[1];
    const o = s, a = Rw1(null);
    let l, c;
    n[2] !== o ? (l = () => {
      const g = a.current;
      g && chi.render(o, g, { displayMode: true, throwOnError: false });
    }, c = [o], n[2] = o, n[3] = l, n[4] = c) : (l = n[3], c = n[4]), Pw1(l, c);
    let u;
    n[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = { 0: { className: "ui-1043rbw ui-w2csxc" }, 1: { className: "ui-1043rbw ui-w2csxc ui-g9z2os" } }, n[5] = u) : u = n[5];
    const d = u[!!r << 0];
    let h;
    n[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = sIp("div", { ref: a }), n[6] = h) : h = n[6];
    let p;
    return n[7] !== d ? (p = sIp(Unt, { ...d, "data-type": "math-block", children: h }), n[7] = d, n[8] = p) : p = n[8], p;
  }), cIp = o6.create({ name: "mathBlock", group: "block", atom: true, selectable: true, draggable: false, addAttributes() {
    return { latex: { default: "", parseHTML: (t) => t.getAttribute("data-latex") ?? t.textContent ?? "", renderHTML: (t) => ({ "data-latex": J_i(t) }) } };
  }, parseHTML() {
    return [{ tag: 'div[data-type="math-block"]' }];
  }, renderHTML({ node: t, HTMLAttributes: e }) {
    return ["div", fE(e, { "data-type": "math-block" }), `$$
${J_i(t.attrs)}
$$`];
  }, renderText({ node: t }) {
    return `$$
${J_i(t.attrs)}
$$`;
  }, markdownTokenizer: { name: "mathBlock", level: "block", start: Mw1, tokenize: Dw1 }, parseMarkdown(t, e) {
    return e.createNode("mathBlock", { latex: t.text ?? "" });
  }, renderMarkdown(t) {
    return `$$
${J_i(t.attrs)}
$$`;
  }, addNodeView() {
    return PSt(lIp);
  } });
} });
import { jsx as Lw1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Ow1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as Fw1, useContext as Bw1 } from "./react-runtime/react/esm-index-production.js";
function uIp(t) {
  const e = Bw1(f0n);
  if (!e) throw new Error(`${t} must be used within RichTextEditor`);
  return e;
}
function Uw1() {
  return uIp("useRichTextEditorContext");
}
function jw1(t) {
  const e = Ow1(7), { editor: n, isStreaming: i, editable: r, children: s } = t;
  let o;
  e[0] !== r || e[1] !== n || e[2] !== i ? (o = { editor: n, isStreaming: i, editable: r }, e[0] = r, e[1] = n, e[2] = i, e[3] = o) : o = e[3];
  const a = o;
  let l;
  return e[4] !== s || e[5] !== a ? (l = Lw1(f0n.Provider, { value: a, children: s }), e[4] = s, e[5] = a, e[6] = l) : l = e[6], l;
}
var f0n,
