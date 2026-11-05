// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputModelPicker.js range:17425764..17427673
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, zrt, Gdp
// wrapper-init: L_p
// hoisted-owner: SubmitArrowIcon.js (app-out-vs-workbench-workbench-glass-main-js:2951); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: F_p -> SubmitArrowIcon (apply-map AST equivalent)

L_p = L({
  "PromptInputModelPicker.js"() {
    "use strict";

    E(), zrt(), Gdp(), pxa = $c1(Hc1(function (e, n) {
      const i = jc1(21);
      let r, s, o, a, l, c;
      i[0] !== e ? ({
        onClose: r,
        onOpenChange: s,
        open: o,
        placement: a,
        tooltipPlacement: c,
        ...l
      } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = l, i[6] = c) : (r = i[1], s = i[2], o = i[3], a = i[4], l = i[5], c = i[6]);
      const {
          setMenuOpen: u,
          defaultModelPickerPlacement: d,
          isExpanded: h
        } = TGe("PromptInput.ModelPicker"),
        p = a ?? d,
        g = c ?? (h ? "right" : "top");
      let f;
      i[7] !== r || i[8] !== u ? (f = () => {
        u(false), r?.();
      }, i[7] = r, i[8] = u, i[9] = f) : f = i[9];
      let _;
      i[10] !== s || i[11] !== u ? (_ = y => {
        u(y), s?.(y);
      }, i[10] = s, i[11] = u, i[12] = _) : _ = i[12];
      let b;
      return i[13] !== o || i[14] !== l || i[15] !== n || i[16] !== p || i[17] !== g || i[18] !== f || i[19] !== _ ? (b = Uc1(nX, {
        ref: n,
        open: o,
        placement: p,
        tooltipPlacement: g,
        triggerAppearance: "prompt",
        onClose: f,
        onOpenChange: _,
        ...l
      }), i[13] = o, i[14] = l, i[15] = n, i[16] = p, i[17] = g, i[18] = f, i[19] = _, i[20] = b) : b = i[20], b;
    }));
  }
});
import { jsx as O_p } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Wc1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function SubmitArrowIcon(t) {
  const e = Wc1(4),
    {
      size: n,
      className: i
    } = t,
    r = n === void 0 ? 14 : n;
  let s;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (s = O_p("path", {
    d: "M12 19V5M5 12l7-7 7 7"
  }), e[0] = s) : s = e[0];
  let o;
  return e[1] !== i || e[2] !== r ? (o = O_p("svg", {
    "aria-hidden": true,
    className: i,
    fill: "none",
    height: r,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2.5,
    viewBox: "0 0 24 24",
    width: r,
    children: s
  }), e[1] = i, e[2] = r, e[3] = o) : o = e[3], o;
}
