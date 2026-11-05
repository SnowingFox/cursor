// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Input.js range:16395690..16399292
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.735Z
var twt = L({ "Input.js"() {
  "use strict";
  E(), Nhe();
} });
import { jsxs as e8r, jsx as T2e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as $qS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function HqS() {
  return { root: [d0a.base, d0a.tabsWrap], tabs: [h0a.base, h0a.wrap], dropdownChevron: Hsp.base, actions: t8r.actions, search: t8r.search, right: t8r.right };
}
function u0a(t, e) {
  return t.length <= e ? t : `${t.slice(0, e - 1)}…`;
}
function WqS(t) {
  const e = $qS(10), { tabs: n, selectedTabId: i, onTabChange: r, search: s, rightElement: o } = t, { ref: a, width: l } = Ajt(), c = l < F_a;
  let u;
  if (e[0] !== c || e[1] !== r || e[2] !== a || e[3] !== o || e[4] !== s || e[5] !== i || e[6] !== n) {
    let d;
    e[8] !== i ? (d = (C) => C.id === i, e[8] = i, e[9] = d) : d = e[9];
    const h = n.find(d), p = HqS(), g = ar({ rootClass: "ui-filter-tab-bar", stylexStyles: p.root, className: "ui-filter-tab-bar--tabs-wrap" }), f = gn(p.tabs), _ = gn(p.dropdownChevron), b = gn(p.actions), y = gn(p.search), S = gn(p.right), k = { className: "ui-jyslct ui-6s0dn4 ui-l56j7k ui-1a6rlst ui-972fbf ui-1ejq31n ui-1b4hy2t ui-gfja2r ui-11pwa6s ui-1ws9gjp ui-1qhh985 ui-1sy0etr ui-1tnzt7h ui-yj58a3 ui-1b16gh4 ui-1pjslub ui-exx8yu ui-17v7654 ui-18d9i69 ui-1lfpczk ui-1e1y6u3 ui-jb2p0i ui-y5h43f ui-1yl5bsf ui-19ji09o ui-18cvvyg ui-1ypdohk ui-s2xxs2 ui-gv8wjl ui-11udeeo ui-uxw1ft ui-1k57tk5 ui-1l9t207 ui-1x65lqo ui-1t137rt ui-hlp2gg ui-i5y0ii ui-1uczgqu ui-1xwnvu1 ui-z2lg3n ui-1gnnqk1 ui-r9r2s9 ui-1xk3k8f ui-pk4wdd ui-8pshft ui-3ctksj ui-1tfasdq ui-qvire7 ui-3nfvp2 ui-11twubx ui-2lah0s" };
    u = e8r("div", { ref: a, className: g.className, style: g.style, children: [c ? e8r(hn, { children: [T2e(hn.Trigger, { children: e8r("button", { type: "button", className: ri("ui-filter-tab-bar__tab ui-filter-tab-bar__tab--selected ui-filter-tab-bar__tab--dropdown-trigger", k.className), style: k.style, "data-filter-tab": true, "aria-label": "Filter by scope", children: [h ? u0a(h.label, n8r) : "All", T2e(zt, { name: "chevron-down", size: "sm", className: ri("ui-filter-tab-bar__dropdown-chevron", _.className), style: _.style })] }) }), T2e(hn.Content, { "aria-label": "Select filter", children: T2e(hn.RadioGroup, { "aria-label": "Select filter", onValueChange: r, value: i, children: n.map(qqS) }) })] }) : T2e("div", { className: ri("ui-filter-tab-bar__tabs ui-filter-tab-bar__tabs--wrap", f.className), style: f.style, children: T2e(Mx.Root, { value: i, onValueChange: r, size: "sm", variant: "filter", children: T2e(Mx.List, { "aria-label": "Filter by scope", wrap: true, children: n.map(GqS) }) }) }), (s || o) && e8r("div", { className: ri("ui-filter-tab-bar__actions", b.className), style: b.style, children: [s && T2e(nI, { type: "text", placeholder: s.placeholder ?? "Search...", value: s.value, onChange: (C) => s.onChange(C.target.value), "aria-label": s["aria-label"], size: "md", className: ri("ui-filter-tab-bar__search", y.className), style: y.style }), o && T2e("div", { className: ri("ui-filter-tab-bar__right", S.className), style: S.style, children: o })] })] }), e[0] = c, e[1] = r, e[2] = a, e[3] = o, e[4] = s, e[5] = i, e[6] = n, e[7] = u;
  } else u = e[7];
  return u;
}
function GqS(t) {
  return T2e(Mx.Item, { value: t.id, "data-filter-tab": true, children: T2e("span", { className: "ui-filter-tab-bar__tab", children: u0a(t.label, n8r) }) }, t.id);
}
function qqS(t) {
  return T2e(hn.RadioItem, { closeOnSelect: true, value: t.id, children: u0a(t.label, n8r) }, t.id);
}
var d0a, h0a, Hsp, t8r, n8r, 