// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TabsList.js range:16384918..16391916
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.059Z
Lsp = L({ "TabsList.js"() {
  E(), Jy(), jv(), vA(), i9h(), Tfi(), Cfi(), n0a(), ZBr = S$t.forwardRef(function(e, n) {
    const { activateOnFocus: i = false, className: r, loopFocus: s = true, render: o, style: a, ...l } = e, { onValueChange: c, orientation: u, value: d, setTabMap: h, tabActivationDirection: p } = qBr(), [g, f] = S$t.useState(0), [_, b] = S$t.useState(null), y = S$t.useRef(/* @__PURE__ */ new Set()), S = S$t.useRef(/* @__PURE__ */ new Set()), k = S$t.useRef(null);
    su(() => {
      if (typeof ResizeObserver > "u") return;
      const O = new ResizeObserver(() => {
        y.current.forEach((N) => {
          N();
        });
      });
      return k.current = O, _ && O.observe(_), S.current.forEach((N) => {
        O.observe(N);
      }), () => {
        O.disconnect(), k.current = null;
      };
    }, [_]);
    const C = pu((O) => (y.current.add(O), () => {
      y.current.delete(O);
    })), T = pu((O) => (S.current.add(O), k.current?.observe(O), () => {
      S.current.delete(O), k.current?.unobserve(O);
    })), I = pu((O, N) => {
      O !== d && c(O, N);
    }), A = { orientation: u, tabActivationDirection: p }, P = { "aria-orientation": u === "vertical" ? "vertical" : void 0, role: "tablist" }, M = S$t.useMemo(() => ({ activateOnFocus: i, highlightedTabIndex: g, registerIndicatorUpdateListener: C, registerTabResizeObserverElement: T, onTabActivation: I, setHighlightedTabIndex: f, tabsListElement: _ }), [i, g, C, T, I, f, _]);
    return Nsp(KBr.Provider, { value: M, children: Nsp(n9h, { render: o, className: r, style: a, state: A, refs: [n, b], props: [P, l], stateAttributesMapping: gkn, highlightedIndex: g, enableHomeAndEndKeys: true, loopFocus: s, orientation: u, onHighlightedIndexChange: f, onMapChange: h, disabledIndices: xoe }) });
  }), process.env.NODE_ENV !== "production" && (ZBr.displayName = "TabsList");
} });
import { jsx as vkn, jsxs as Osp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as QBr } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as MqS, use as DqS } from "./react-runtime/react/esm-index-production.js";
function NqS(t, e) {
  return t === "filter" || t === "underline" && e === "lg" ? "md" : "sm";
}
function Fsp(t) {
  const e = DqS(a0a);
  if (e === null) throw new Error(`${t} must be used within Tabs.Root`);
  return e;
}
function LqS(t) {
  const e = QBr(22);
  let n, i, r, s, o, a, l;
  e[0] !== t ? ({ value: l, defaultValue: i, onValueChange: r, size: o, variant: a, children: n, ...s } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7]);
  const c = o === void 0 ? "md" : o, u = a === void 0 ? "default" : a;
  let d;
  e[8] !== c || e[9] !== u ? (d = { size: c, variant: u }, e[8] = c, e[9] = u, e[10] = d) : d = e[10];
  const h = d;
  let p;
  e[11] !== n || e[12] !== i || e[13] !== r || e[14] !== s || e[15] !== c || e[16] !== l || e[17] !== u ? (p = vkn(VBr, { ...s, value: l, defaultValue: i, onValueChange: r, "data-component": "tabs-root", "data-size": c, "data-variant": u, className: "ui-jp7ctv", children: n }), e[11] = n, e[12] = i, e[13] = r, e[14] = s, e[15] = c, e[16] = l, e[17] = u, e[18] = p) : p = e[18];
  let g;
  return e[19] !== h || e[20] !== p ? (g = vkn(a0a.Provider, { value: h, children: p }), e[19] = h, e[20] = p, e[21] = g) : g = e[21], g;
}
function OqS(t) {
  const e = QBr(24);
  let n, i, r, s, o;
  e[0] !== t ? ({ activateOnFocus: n, spacing: s, wrap: o, children: i, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = o === void 0 ? false : o, l = Fsp("Tabs.List");
  let c;
  e[6] !== l.size || e[7] !== l.variant || e[8] !== s ? (c = s ?? NqS(l.variant, l.size), e[6] = l.size, e[7] = l.variant, e[8] = s, e[9] = c) : c = e[9];
  const u = c, d = a && l.variant !== "underline", h = l.variant, p = d ? "true" : void 0;
  let g;
  e[10] !== l.variant || e[11] !== u || e[12] !== d ? (g = gn(JBr.base, l.variant === "underline" && JBr.underline, l.variant === "underline" ? Usp[u] : Bsp[u], d && JBr.wrap), e[10] = l.variant, e[11] = u, e[12] = d, e[13] = g) : g = e[13];
  let f;
  e[14] !== l.variant ? (f = l.variant === "underline" ? vkn(XBr, { "data-component": "tabs-underline-indicator", className: "ui-10l6tqk ui-1vjfegm ui-47corl ui-9f619 ui-vbikie ui-offw1 ui-jm9jq1 ui-qmqy1e ui-mak4db ui-1ym43eq ui-1bqoo3p ui-sagj69 ui-1tkypeg" }) : null, e[14] = l.variant, e[15] = f) : f = e[15];
  let _;
  return e[16] !== n || e[17] !== i || e[18] !== l.variant || e[19] !== r || e[20] !== p || e[21] !== g || e[22] !== f ? (_ = Osp(ZBr, { ...r, activateOnFocus: n, "data-component": "tabs-list", "data-variant": h, "data-wrap": p, ...g, children: [i, f] }), e[16] = n, e[17] = i, e[18] = l.variant, e[19] = r, e[20] = p, e[21] = g, e[22] = f, e[23] = _) : _ = e[23], _;
}
function FqS(t) {
  const e = QBr(23);
  let n, i, r, s, o;
  e[0] !== t ? ({ value: o, secondaryLabel: s, href: i, children: n, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = Fsp("Tabs.Item");
  let l;
  e[6] !== i ? (l = i === void 0 ? void 0 : (f) => vkn("a", { ...f, href: i }), e[6] = i, e[7] = l) : l = e[7];
  const c = i === void 0, u = a.size, d = a.variant;
  let h;
  e[8] !== a.size || e[9] !== a.variant ? (h = gn(o0a.base, a.size === "sm" ? Gj.root : kz.root, a.variant === "underline" ? $sp[a.size] : jsp[a.size], o0a[a.variant], a.variant === "filter" && rKo.root), e[8] = a.size, e[9] = a.variant, e[10] = h) : h = e[10];
  let p;
  e[11] !== s ? (p = s != null ? vkn("span", { className: "ui-2lah0s ui-4b2ntj", children: s }) : null, e[11] = s, e[12] = p) : p = e[12];
  let g;
  return e[13] !== n || e[14] !== a.size || e[15] !== a.variant || e[16] !== r || e[17] !== l || e[18] !== c || e[19] !== h || e[20] !== p || e[21] !== o ? (g = Osp(YBr, { ...r, value: o, render: l, nativeButton: c, "data-component": "tabs-item", "data-size": u, "data-variant": d, ...h, children: [n, p] }), e[13] = n, e[14] = a.size, e[15] = a.variant, e[16] = r, e[17] = l, e[18] = c, e[19] = h, e[20] = p, e[21] = o, e[22] = g) : g = e[22], g;
}
function BqS(t) {
  const e = QBr(9);
  let n, i, r;
  e[0] !== t ? ({ value: r, fill: i, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = i === void 0 ? false : i;
  let o;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = { 0: {}, 1: { className: "ui-78zum5 ui-1kd3hbs ui-euugli ui-2lwn1j ui-1iyjqo2 ui-dt5ytf" } }, e[4] = o) : o = e[4];
  const a = o[!!s << 0];
  let l;
  return e[5] !== n || e[6] !== a || e[7] !== r ? (l = vkn(s0a, { ...n, value: r, "data-component": "tabs-panel", "data-value": r, ...a }), e[5] = n, e[6] = a, e[7] = r, e[8] = l) : l = e[8], l;
}
var JBr, Bsp, Usp, o0a, jsp, $sp, a0a, Mx, 