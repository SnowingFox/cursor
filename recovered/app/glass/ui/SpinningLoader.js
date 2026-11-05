// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SpinningLoader.js range:16963303..16964880
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.023Z
avi = L({ "SpinningLoader.js"() {
  "use strict";
  E(), Va(), rwn = { line: { kSiTet: "ui-1ptxcow", kKVMdj: "ui-1trkvz9", k44tkh: "ui-18hd8ej", kyAemX: "ui-1esw782", ko0y90: "ui-a4qsjk", $$css: true }, lineSlow: { k44tkh: "ui-ius3t", $$css: true }, lineFast: { k44tkh: "ui-1q3qbx4", $$css: true }, lineVeryFast: { k44tkh: "ui-xkxylk", $$css: true }, lineNone: { kKVMdj: "ui-1a5igra", kSiTet: "ui-1hc1fzr", $$css: true } }, Chp = { slow: rwn.lineSlow, regular: null, fast: rwn.lineFast, "very-fast": rwn.lineVeryFast, none: rwn.lineNone }, Thp = 8, Ehp = 45, Ihp = -90;
} });
import { useState as tEa, useRef as xhp, useEffect as ft1 } from "./react-runtime/react/esm-index-production.js";
function Ahp(t, e) {
  const [n, i] = tEa(false), [r, s] = tEa(null), [o, a] = tEa(null), l = xhp(null), c = xhp(e);
  return c.current = e, ft1(() => {
    const u = t.trim(), d = c.current;
    if (!u || !d) {
      l.current?.abort(), l.current = null, i(false), s(null), a(null);
      return;
    }
    i(true), s(null), a(null);
    const h = setTimeout(() => {
      l.current?.abort();
      const p = new AbortController();
      l.current = p;
      const g = c.current;
      g && g(u, p.signal).then((f) => {
        p.signal.aborted || (s(f), i(false));
      }).catch((f) => {
        p.signal.aborted || (a(f instanceof Error ? f.message : "Failed to parse repository"), s(null), i(false));
      });
    }, Rhp);
    return () => {
      clearTimeout(h), l.current?.abort(), l.current = null;
    };
  }, [t]), { isParsing: n, parseResult: r, parseError: o };
}
var Rhp, 