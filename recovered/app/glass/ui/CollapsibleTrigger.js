// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CollapsibleTrigger.js range:15022915..15028743
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.535Z
axS = L({ "CollapsibleTrigger.js"() {
  E(), F$h(), l6(), Om(), fva(), Cz(), U$h = { ...L$h, ...D7 }, hFr = oxS.forwardRef(function(e, n) {
    const { panelId: i, open: r, handleTrigger: s, state: o, disabled: a } = R$h(), { className: l, disabled: c = a, render: u, nativeButton: d = true, style: h, ...p } = e, { getButtonProps: g, buttonRef: f } = wz({ disabled: c, focusableWhenDisabled: true, native: d });
    return Lm("button", e, { state: o, ref: [n, f], props: [{ "aria-controls": r ? i : void 0, "aria-expanded": r, onClick: s }, p, g], stateAttributesMapping: U$h });
  }), process.env.NODE_ENV !== "production" && (hFr.displayName = "CollapsibleTrigger");
} });
import * as h2e from "./react-runtime/react/esm-index-production.js";
function lxS(t) {
  const { externalRef: e, hiddenUntilFound: n, id: i, keepMounted: r, mounted: s, onOpenChange: o, open: a, setMounted: l, setOpen: c, transitionStatus: u } = t, d = h2e.useRef(null), h = h2e.useRef(null), [p, g] = h2e.useState(HSn), f = h2e.useRef(HSn), _ = h2e.useRef(false), b = h2e.useRef(a), y = h2e.useRef(false), [S, k] = h2e.useState(false), C = h2e.useRef(null), T = Ioe(e, d), I = uL({ mounted: s, open: a }), A = ZRr(d, false, false), P = !a && !s, M = S ? "idle" : u, O = a && (b.current || y.current), N = !a && s && h.current === "css-animation" && p.height === void 0 && p.width === void 0 ? f.current : p, U = n && P && h.current !== "css-animation", j = pu((K, V = true) => {
    V && (f.current = K), g(K);
  }), $ = pu(() => {
    C.current?.(), C.current = null;
  }), H = pu((K) => {
    $(), C.current = () => {
      C.current = null, K();
    };
  }), G = pu(() => {
    a && s && h.current === "css-animation" && (y.current = true);
  });
  su(() => {
    !S || u === "starting" || k(false);
  }, [S, u]), h2e.useEffect(() => () => {
    G(), $();
  }, [G, $]), su(() => {
    const K = d.current;
    if (!K) return;
    !a && C.current && $();
    const V = cxS(K, O);
    if (h.current = V, a && u === "idle" && b.current && V === "css-animation") {
      f.current = $Sn(K);
      return;
    }
    if (a && u === "starting") {
      const Q = _.current;
      if (_.current = false, V === "none") {
        j($Sn(K)), k(true);
        return;
      }
      if (V === "css-transition") {
        const te = uxS(K);
        if (j($Sn(K)), !Q) return te;
        const ee = Xpi(K, "transition-duration", "0s");
        return H(ee), k(true), te;
      }
      if (V === "css-animation") {
        if (j($Sn(K)), !Q) {
          Xpi(K, "animation-name", "none")();
          return;
        }
        const te = Xpi(K, "animation-name", "none"), ee = Xpi(K, "animation-duration", "0s");
        te(), H(ee), k(true);
        return;
      }
    }
    if (!a && s && (u === "idle" || u === "starting")) {
      if (b.current = false, y.current = false, V === "none") {
        j(HSn, false), l(false);
        return;
      }
      j($Sn(K));
      return;
    }
    if (u !== "ending") return;
    if (V === "none") {
      l(false);
      return;
    }
    const Y = $Sn(K);
    if (!((Y.height ?? 0) > 0 || (Y.width ?? 0) > 0)) {
      l(false);
      return;
    }
    j(Y), V === "css-animation" && Xpi(K, "animation-name", "none")();
  }, [s, a, $, j, l, H, O, u]), GQ({ enabled: a && s && M === "idle", open: true, ref: d, onComplete() {
    a && j(HSn, false);
  } }), h2e.useEffect(() => {
    if (a || !s || M !== "ending" || !d.current) return;
    const V = new AbortController();
    let Y = -1;
    function J() {
      I.current.open || (l(false), j(HSn, false));
    }
    return Y = Bwe.request(() => {
      V.signal.aborted || A(J, V.signal);
    }), () => {
      Bwe.cancel(Y), V.abort();
    };
  }, [I, s, a, M, A, j, l]), su(() => {
    const K = d.current;
    !K || !n || !P || K.setAttribute("hidden", "until-found");
  }, [P, n]), h2e.useEffect(function() {
    const V = d.current;
    if (!V) return;
    function Y(J) {
      const Q = zd(kO, J);
      o(true, Q), !Q.isCanceled && (_.current = true, c(true));
    }
    return r0(V, "beforematch", Y);
  }, [o, c]);
  const q = r || n || s || a;
  return { height: N.height, props: { ...U ? { [dFr.startingStyle]: "" } : void 0, hidden: P, id: i }, ref: T, shouldPreventOpenAnimation: O, shouldRender: q, transitionStatus: M, width: N.width };
}
function $Sn(t) {
  return { height: t.scrollHeight, width: t.scrollWidth };
}
function cxS(t, e = false) {
  const n = g2(t).getComputedStyle(t), i = (n.animationName.split(",").map((s) => s.trim()).some((s) => s !== "" && s !== "none") || e) && j$h(n.animationDuration), r = j$h(n.transitionDuration);
  return i && r ? (process.env.NODE_ENV !== "production" && zvn("CSS transitions and CSS animations both detected on Collapsible or Accordion panel.", "Only one of either animation type should be used."), "css-transition") : r ? "css-transition" : i ? "css-animation" : "none";
}
function j$h(t) {
  return t.split(",").map((e) => e.trim()).some((e) => e !== "" && Number.parseFloat(e) > 0);
}
function Xpi(t, e, n) {
  const i = t.style.getPropertyValue(e), r = t.style.getPropertyPriority(e);
  return t.style.setProperty(e, n), () => {
    if (i === "") {
      t.style.removeProperty(e);
      return;
    }
    t.style.setProperty(e, i, r);
  };
}
function uxS(t) {
  const e = { "justify-content": t.style.justifyContent, "align-items": t.style.alignItems, "align-content": t.style.alignContent, "justify-items": t.style.justifyItems };
  Object.keys(e).forEach((r) => {
    t.style.setProperty(r, "initial", "important");
  });
  function n() {
    Object.entries(e).forEach(([r, s]) => {
      if (s === "") {
        t.style.removeProperty(r);
        return;
      }
      t.style.setProperty(r, s);
    });
  }
  const i = Bwe.request(n);
  return () => {
    Bwe.cancel(i), n();
  };
}
var HSn, 