// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TabsPanel.js range:16383526..16384918
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.060Z
PqS = L({ "TabsPanel.js"() {
  E(), cbn(), jv(), _A(), l6(), qQ(), LRe(), Om(), rWe(), Tfi(), Cfi(), RqS(), Dsp = { ...gkn, ...D7 }, s0a = r0a.forwardRef(function(e, n) {
    const { className: i, value: r, render: s, keepMounted: o = false, style: a, ...l } = e, { value: c, getTabIdByPanelValue: u, orientation: d, tabActivationDirection: h, registerMountedTabPanel: p, unregisterMountedTabPanel: g } = qBr(), f = $I(), _ = r0a.useMemo(() => ({ id: f, value: r }), [f, r]), { ref: b, index: y } = iWe({ metadata: _ }), S = r === c, { mounted: k, transitionStatus: C, setMounted: T } = NRe(S), I = !k, A = u(r), P = { hidden: I, orientation: d, tabActivationDirection: h, transitionStatus: C }, M = r0a.useRef(null), O = Lm("div", e, { state: P, ref: [n, b, M], props: [{ "aria-labelledby": A, hidden: I, id: f, role: "tabpanel", tabIndex: S ? 0 : -1, inert: lbn(!S), [Msp.index]: y }, l], stateAttributesMapping: Dsp });
    return GQ({ open: S, ref: M, onComplete() {
      S || T(false);
    } }), su(() => {
      if (!(I && !o) && f != null) return p(r, f), () => {
        g(r, f);
      };
    }, [I, o, r, f, p, g]), o || k ? O : null;
  }), process.env.NODE_ENV !== "production" && (s0a.displayName = "TabsPanel");
} });
import * as S$t from "./react-runtime/react/esm-index-production.js";
import { jsx as Nsp } from "./react-runtime/react/esm-jsx-runtime-production.js";
var ZBr, 