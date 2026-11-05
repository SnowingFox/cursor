// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TabsRoot.js range:16372375..16376477
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.061Z
wsp = L({ "TabsRoot.js"() {
  E(), __e(), jv(), Jy(), Om(), dbn(), Cfi(), Tfi(), VS(), Zb(), VBr = gae.forwardRef(function(e, n) {
    const { className: i, defaultValue: r = 0, onValueChange: s, orientation: o = "horizontal", render: a, value: l, style: c, ...u } = e, d = e.defaultValue !== void 0, h = gae.useRef([]), [p, g] = gae.useState(() => /* @__PURE__ */ new Map()), [f, _] = yne({ controlled: l, default: r, name: "Tabs", state: "value" }), b = l !== void 0, [y, S] = gae.useState(() => /* @__PURE__ */ new Map()), k = gae.useRef(void 0), C = gae.useCallback((se) => {
      if (se === void 0) return null;
      for (const [le, ce] of y.entries()) if (ce != null && se === (ce.value ?? ce.index)) return le;
      return null;
    }, [y]), [T, I] = gae.useState(() => ({ previousValue: f, tabActivationDirection: "none" })), { previousValue: A, tabActivationDirection: P } = T;
    let M = P, O = false;
    A !== f && (M = ksp(A, f, o, y), O = A != null && f != null && C(f) == null);
    const N = O ? A : f, U = A !== N || P !== M;
    su(() => {
      U && I({ previousValue: N, tabActivationDirection: M });
    }, [N, U, M]);
    const j = pu((se, le) => {
      const ce = ksp(f, se, o, y);
      le.activationDirection = ce, s?.(se, le), !le.isCanceled && _(se);
    }), $ = pu((se, le) => {
      s?.(se, zd(le, void 0, void 0, { activationDirection: "none" }));
    }), H = pu((se, le) => {
      g((ce) => {
        if (ce.get(se) === le) return ce;
        const ae = new Map(ce);
        return ae.set(se, le), ae;
      });
    }), G = pu((se, le) => {
      g((ce) => {
        if (!ce.has(se) || ce.get(se) !== le) return ce;
        const ae = new Map(ce);
        return ae.delete(se), ae;
      });
    }), q = gae.useCallback((se) => p.get(se), [p]), K = gae.useCallback((se) => {
      for (const le of y.values()) if (se === le?.value) return le?.id;
    }, [y]), V = gae.useMemo(() => ({ getTabElementBySelectedValue: C, getTabIdByPanelValue: K, getTabPanelIdByValue: q, onValueChange: j, orientation: o, registerMountedTabPanel: H, setTabMap: S, unregisterMountedTabPanel: G, tabActivationDirection: M, value: f }), [C, K, q, j, o, H, S, G, M, f]), Y = gae.useMemo(() => {
      for (const se of y.values()) if (se != null && se.value === f) return se;
    }, [y, f]), J = gae.useMemo(() => {
      for (const se of y.values()) if (se != null && !se.disabled) return se.value;
    }, [y]), Q = gae.useRef(!d), te = gae.useRef(r), ee = gae.useRef(d), re = gae.useRef(false);
    su(() => {
      if (b) return;
      function se(de, he) {
        _(de), I((ge) => ge.previousValue === de && ge.tabActivationDirection === "none" ? ge : { previousValue: de, tabActivationDirection: "none" }), $(de, he), Q.current = false;
      }
      if (y.size === 0) {
        re.current && f !== null && !k.current?.isConnected && se(null, yQo);
        return;
      }
      re.current = true, k.current = y.keys().next().value;
      const le = Y?.disabled, ce = Y == null && f !== null;
      if (!le && f === te.current && (ee.current = false), ee.current && le && f === te.current) return;
      const ae = Q.current;
      if (le || ce) {
        const de = J ?? null;
        if (f === de) {
          Q.current = false;
          return;
        }
        let he = yQo;
        ae ? he = SQo : le && (he = bQo), se(de, he);
        return;
      }
      ae && Y != null && ($(f, SQo), Q.current = false);
    }, [J, b, $, Y, _, y, f]);
    const oe = Lm("div", e, { state: { orientation: o, tabActivationDirection: M }, ref: n, props: u, stateAttributesMapping: gkn });
    return Ssp(zBr.Provider, { value: V, children: Ssp(ubn, { elementsRef: h, children: oe }) });
  }), process.env.NODE_ENV !== "production" && (VBr.displayName = "TabsRoot");
} });
import * as Csp from "./react-runtime/react/esm-index-production.js";
function Tsp() {
  const t = Csp.useContext(KBr);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: TabsListContext is missing. TabsList parts must be placed within <Tabs.List>." : Oy(65));
  return t;
}
var KBr, 