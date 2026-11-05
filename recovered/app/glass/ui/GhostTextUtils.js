// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GhostTextUtils.js range:29223071..29224884
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.703Z
U0l = L({ "GhostTextUtils.js"() {
  "use strict";
  E(), Ak(), vhs(), OPn = "composer-autocomplete-ghost", F0l = (t) => t.getEditorState().read(() => {
    const e = Xg();
    for (const n of e.getChildren()) for (const i of n.getChildren()) if (U9e(i)) return i;
  }), ogs = (t) => {
    const e = t.getRootElement();
    e === null || e.ownerDocument.defaultView === null || t.update(() => {
      const n = Xg();
      for (const i of n.getChildren()) for (const r of i.getChildren()) U9e(r) && r.remove();
    }, { tag: OPn, discrete: true });
  }, B0l = (t) => {
    try {
      return gKt.forceEmptyText = true, t.getEditorState().read(() => {
        const e = Xg(), n = (s) => {
          if (U9e(s)) return "";
          if (Au(s)) return s.getTextContent();
          if (V7(s)) return `
`;
          if (Wc(s)) {
            let o = "";
            const a = s.getChildren();
            for (const l of a) o += n(l);
            return o;
          }
          return "";
        }, i = e.getChildren(), r = [];
        for (const s of i) r.push(n(s));
        return r.join(`
`);
      });
    } finally {
      gKt.forceEmptyText = false;
    }
  };
} });
import { c as $Fk } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as HFk, useState as WFk } from "./react-runtime/react/esm-index-production.js";
function U6(t) {
  const e = $Fk(7);
  let n;
  e[0] !== t ? (n = () => t()?.get(), e[0] = t, e[1] = n) : n = e[1];
  const [i, r] = WFk(n);
  let s;
  e[2] !== t ? (s = t(), e[2] = t, e[3] = s) : s = e[3];
  const o = s;
  let a, l;
  return e[4] !== o ? (a = () => {
    if (!o) {
      r(void 0);
      return;
    }
    const c = Hve(o, r);
    return () => c.dispose();
  }, l = [o], e[4] = o, e[5] = a, e[6] = l) : (a = e[5], l = e[6]), HFk(a, l), i;
}
