// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UserMessageBox.js range:15935986..15938768
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, vSa, P0, f2, UXh, Nep, AO, cXh, bFr, dXh
// wrapper-init: YBS
// hoisted-owner: useTrailingCollapsibleOverflow.js (app-out-vs-workbench-workbench-glass-main-js:2550); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

YBS = L({ "UserMessageBox.js"() {
  "use strict";
  E(), Va(), vSa(), P0(), f2(), UXh(), Nep(), AO(), cXh(), bFr(), dXh(), uGe = { root: { kWkggS: "ui-1ua6jya", $$css: true }, rootHug: { kzqmXN: "ui-eq5yr9", k7Eaqz: "ui-euugli", ks0D6T: "ui-193iq5w", koQZXg: "ui-8x9d4c", $$css: true }, card: { kLKAdn: "ui-13ly8rp", kpe85a: "ui-1jkygx", kGO01o: "ui-1xlntvz", kE3dHu: "ui-1o7kk3e", kMwMTN: "ui-1wd3ewq", kGuDYH: "ui-n99oxs", kLWn49: "ui-1bcdmom", $$css: true }, content: { kskxy: "ui-lrnmfh", kVQacm: "ui-b3r6kr", $$css: true }, contentFaded: { kAExgp: "ui-10f206", kX1K2I: "ui-d7zoxt", $$css: true }, text: { khDVqt: "ui-126k92a", kTgw9: "ui-13faqbe", $$css: true }, textFallback: { kMwMTN: "ui-19aaqeu", kfSwDN: "ui-87ps6o", $$css: true }, richText: { k7Eaqz: "ui-euugli", $$css: true }, toggle: { keoZOQ: "ui-1gslohp", koQZXg: "ui-1mazlvb", $$css: true } }, Oep = 72, Fep = 300;
} });
import { useRef as E9r, useState as XBS, useLayoutEffect as ZBS } from "./react-runtime/react/esm-index-production.js";
function QBS(t) {
  const { availableWidth: e, itemWidths: n, gap: i, triggerWidth: r } = t, s = n.length;
  let o = 0;
  for (let a = 0; a < s; a += 1) o += n[a] + (a > 0 ? i : 0);
  if (t.alwaysReserveTrigger && (o += (s > 0 ? i : 0) + r), o <= e) return s;
  for (let a = s - 1; a >= 0; a -= 1) {
    let l = r;
    for (let c = 0; c < a; c += 1) l += n[c] + i;
    if (l <= e) return a;
  }
  return 0;
}
function Bep(t) {
  const { itemsKey: e, triggerWidth: n, alwaysReserveTrigger: i = false } = t, r = E9r(null), s = E9r(null), o = E9r(n);
  o.current = n;
  const a = E9r(i);
  a.current = i;
  const [l, c] = XBS({ key: e, visibleCount: Number.POSITIVE_INFINITY });
  return l.key !== e && c({ key: e, visibleCount: Number.POSITIVE_INFINITY }), ZBS(() => {
    const u = r.current;
    if (!u) return;
    const d = u.parentElement ?? u;
    if (s.current?.key !== e) {
      const f = Array.from(u.querySelectorAll(":scope > [data-measure]"));
      if (f.length === 0) return;
      const _ = getComputedStyle(u);
      s.current = { key: e, items: f.map((b) => b.offsetWidth), gap: parseFloat(_.gap) || 0 };
    }
    const h = () => {
      const f = s.current;
      if (!f) return;
      const _ = QBS({ availableWidth: d.clientWidth, itemWidths: f.items, gap: f.gap, triggerWidth: o.current, alwaysReserveTrigger: a.current });
      c((b) => b.visibleCount === _ ? b : { ...b, visibleCount: _ });
    };
    h();
    let p;
    const g = new ResizeObserver(() => {
      p !== void 0 && cancelAnimationFrame(p), p = requestAnimationFrame(() => {
        p = void 0, h();
      });
    });
    return g.observe(d), () => {
      g.disconnect(), p !== void 0 && cancelAnimationFrame(p);
    };
  }, [e]), { containerRef: r, visibleCount: l.visibleCount };
}
