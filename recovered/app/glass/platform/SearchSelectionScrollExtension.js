// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SearchSelectionScrollExtension.js range:18290076..18293452
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.165Z
// wrapper: iC1 deps:5 [E, Fy, gE, W$r, Aw]
// declarations: aC1, Bxp, lC1, cC1, iC1, Uxp (segment truncated)
// anchors: (none)
// group: unclassified
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var iC1 = L({ "SearchSelectionScrollExtension.js"() {
  "use strict";
  E(), Fy(), gE(), W$r(), Aw();
} });
import { jsx as oMa, jsxs as rC1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as sC1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useContext as oC1 } from "./react-runtime/react/esm-index-production.js";
function aC1({ checked: t, node: e, options: n }) {
  return n.a11y?.checkboxLabel?.(e, t) ?? w2h(t);
}
function Bxp({ checked: t, editor: e, getPos: n, node: i }) {
  e.chain().focus(void 0, { scrollIntoView: false }).command(({ tr: r }) => {
    const s = n();
    if (typeof s != "number") return false;
    const o = r.doc.nodeAt(s);
    return !o || o.type !== i.type ? false : (r.setNodeMarkup(s, o.type, { ...o.attrs, checked: t }), true);
  }).run();
}
function lC1(t) {
  const e = sC1(40), { node: n, editor: i, getPos: r, HTMLAttributes: s, extension: o } = t, a = oC1(f0n), l = a?.editable ?? i.isEditable, c = a?.isStreaming ?? false, u = n.attrs.checked === true, d = o.options, h = d.onReadOnlyChecked, p = !l || !i.isEditable, g = c || p && !h;
  let f, _, b, y, S, k;
  if (e[0] !== s || e[1] !== g || e[2] !== i || e[3] !== r || e[4] !== p || e[5] !== n || e[6] !== h || e[7] !== d.HTMLAttributes) {
    const { class: O, ...N } = fE(d.HTMLAttributes ?? {}, s), { className: U, ...j } = { className: "ui-78zum5 ui-1cy8zhl ui-v9e958 ui-1nl2h8n ui-1ypfh14 ui-7zfrnh ui-t3ep11 ui-p3e60d" };
    let $;
    e[14] !== g || e[15] !== i || e[16] !== r || e[17] !== p || e[18] !== n || e[19] !== h ? ($ = (H) => {
      if (!g) {
        if (p) {
          if (h?.(n, H) === false) return;
          Bxp({ checked: H, editor: i, getPos: r, node: n });
          return;
        }
        Bxp({ checked: H, editor: i, getPos: r, node: n });
      }
    }, e[14] = g, e[15] = i, e[16] = r, e[17] = p, e[18] = n, e[19] = h, e[20] = $) : $ = e[20], _ = $, f = Unt, b = "li", y = N, S = j, k = ri(O, U), e[0] = s, e[1] = g, e[2] = i, e[3] = r, e[4] = p, e[5] = n, e[6] = h, e[7] = d.HTMLAttributes, e[8] = f, e[9] = _, e[10] = b, e[11] = y, e[12] = S, e[13] = k;
  } else f = e[8], _ = e[9], b = e[10], y = e[11], S = e[12], k = e[13];
  const C = o.name, T = u || void 0;
  let I;
  e[21] !== u || e[22] !== n || e[23] !== d ? (I = aC1({ checked: u, node: n, options: d }), e[21] = u, e[22] = n, e[23] = d, e[24] = I) : I = e[24];
  let A;
  e[25] !== u || e[26] !== g || e[27] !== _ || e[28] !== I ? (A = oMa("span", { className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-ri9wqg ui-g2ss61 ui-2lah0s", contentEditable: false, children: oMa(G5, { checked: u, disabled: g, variant: "primary", onMouseDown: cC1, onCheckedChange: _, "aria-label": I }) }), e[25] = u, e[26] = g, e[27] = _, e[28] = I, e[29] = A) : A = e[29];
  let P;
  e[30] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = oMa(gli, { as: "div", className: "ui-98rzlu" }), e[30] = P) : P = e[30];
  let M;
  return e[31] !== f || e[32] !== o.name || e[33] !== b || e[34] !== y || e[35] !== S || e[36] !== k || e[37] !== T || e[38] !== A ? (M = rC1(f, { as: b, ...y, ...S, className: k, "data-type": C, "data-checked": T, children: [A, P] }), e[31] = f, e[32] = o.name, e[33] = b, e[34] = y, e[35] = S, e[36] = k, e[37] = T, e[38] = A, e[39] = M) : M = e[39], M;
}
function cC1(t) {
  return t.preventDefault();
}
var Uxp, jxp,
