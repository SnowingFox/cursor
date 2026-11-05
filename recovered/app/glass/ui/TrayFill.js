// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayFill.js range:16270942..16272788
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.093Z
var zHS = L({ "TrayFill.js"() {
  "use strict";
  E(), h$t();
} });
import { useRef as xwa, useState as VHS, useLayoutEffect as KHS } from "./react-runtime/react/esm-index-production.js";
function Erp(t = true, e = Irp) {
  const n = xwa(null), [i, r] = VHS(0), s = xwa(null), o = xwa(e);
  return o.current = e, KHS(() => {
    const a = n.current;
    if (!a || !t) return;
    if (!s.current) {
      const d = Array.from(a.querySelectorAll(":scope > [data-measure]"));
      if (d.length === 0) return;
      const h = d[d.length - 1], p = d.slice(0, -1), g = d.map((_) => _.style.flexShrink);
      for (const _ of d) _.style.flexShrink = "0";
      a.offsetWidth;
      const f = getComputedStyle(a);
      s.current = { collapsible: p.map((_) => _.offsetWidth), fixed: h.offsetWidth, gap: parseFloat(f.gap) || 0, padding: (parseFloat(f.paddingLeft) || 0) + (parseFloat(f.paddingRight) || 0) };
      for (let _ = 0; _ < d.length; _++) d[_].style.flexShrink = g[_];
    }
    const l = () => {
      const d = s.current;
      if (!d) return;
      const h = a.clientWidth - d.padding, p = o.current, g = d.collapsible.length;
      for (let f = 0; f <= g; f++) {
        let _ = d.fixed;
        if (f === 0) for (let b = 0; b < g; b++) _ += d.collapsible[b] + d.gap;
        else {
          _ += p + d.gap;
          for (let b = f; b < g; b++) _ += d.collapsible[b] + d.gap;
        }
        if (h >= _) {
          r(f);
          return;
        }
      }
      r(g);
    };
    l();
    let c;
    const u = new ResizeObserver(() => {
      c !== void 0 && cancelAnimationFrame(c), c = requestAnimationFrame(() => {
        c = void 0, l();
      });
    });
    return u.observe(a), () => {
      u.disconnect(), c !== void 0 && cancelAnimationFrame(c);
    };
  }, [t]), { containerRef: n, collapsedCount: t ? i : 0 };
}
var Irp, 