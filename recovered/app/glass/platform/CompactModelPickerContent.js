// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CompactModelPickerContent.js range:16875135..16876686
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.078Z
// wrapper: hdp deps:19 [E, ipi, Rop, a8r, JY, Drt, B0a, VFe, RJS, Nlp, ICa, $Ca]
// declarations: pdp
// anchors: show-all-models, esm-jsx-runtime-production, esm-compiler-runtime-production, selected-model-list-submenu
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
hdp = L({ "CompactModelPickerContent.js"() {
  "use strict";
  E(), ipi(), Rop(), a8r(), JY(), Drt(), B0a(), VFe(), RJS(), Nlp(), ICa(), $Ca(), BTa(), Ukn(), $he(), jTa(), s2e(), NTa(), BW(), ldp = 72, $Ta = UJS(null), cdp = /* @__PURE__ */ new Set(["add-models", "show-all-models", "other-models"]), udp = [], ddp = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';
} });
import { jsx as te1, jsxs as ne1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ie1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function pdp(t) {
  const e = ie1(13), { trigger: n, children: i, keepOpenOnHoverOut: r, open: s, onOpenChange: o, onPointerEnter: a, contentKey: l, maxHeight: c, width: u } = t, { labels: d } = nw();
  let h;
  e[0] !== i || e[1] !== l || e[2] !== d.modelSelection || e[3] !== c || e[4] !== a || e[5] !== u ? (h = te1(cl.SubMenuContent, { "aria-label": d.modelSelection, "data-testid": "selected-model-list-submenu", keepSearchFocus: true, onPointerEnter: a, maxHeight: c, minWidth: u, maxWidth: u, children: i }, l), e[0] = i, e[1] = l, e[2] = d.modelSelection, e[3] = c, e[4] = a, e[5] = u, e[6] = h) : h = e[6];
  let p;
  return e[7] !== r || e[8] !== o || e[9] !== s || e[10] !== h || e[11] !== n ? (p = ne1(cl.SubMenu, { trigger: "hover", keepOpenOnHoverOut: r, suppressSiblingPointerGuard: r, placement: "right", offset: 6, virtualFocus: true, open: s, onOpenChange: o, children: [n, h] }), e[7] = r, e[8] = o, e[9] = s, e[10] = h, e[11] = n, e[12] = p) : p = e[12], p;
}
