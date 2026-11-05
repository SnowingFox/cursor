// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ContextMenuTrigger.js range:14574874..14577863
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.568Z
bSS = L({ "ContextMenuTrigger.js"() {
  E(), b_e(), hB(), M7(), HUt(), F_e(), Om(), VS(), I4(), k6h(), Zb(), Sne(), $D(), cma = 500, NOr = npi.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { setAnchor: a, actionsRef: l, internalBackdropRef: c, backdropRef: u, positionerRef: d, allowMouseUpTriggerRef: h, initialCursorPointRef: p, rootId: g } = mSn(false), { store: f } = O_e(false), _ = f.useState("open"), b = f.useState("disabled"), y = npi.useRef(null), S = npi.useRef(null), k = a6(), C = a6(), T = npi.useRef(false);
    function I(j, $, H) {
      const G = H.type.startsWith("touch");
      p.current = { x: j, y: $ }, a({ getBoundingClientRect() {
        return DOMRect.fromRect({ width: G ? 10 : 0, height: G ? 10 : 0, x: j, y: $ });
      } }), T.current = false, l.current?.setOpen(true, zd(PRe, H)), C.start(cma, () => {
        T.current = true;
      });
    }
    function A(j) {
      if (b) return;
      h.current = true, Ez(j), I(j.clientX, j.clientY, j.nativeEvent);
      const $ = ak(y.current);
      r0($, "mouseup", (H) => {
        if (h.current = false, !T.current) return;
        C.clear(), T.current = false;
        const G = B5(H);
        Nf(d.current, G) || g && G && sma(G) === g || l.current?.setOpen(false, zd(gRr, H));
      }, { once: true });
    }
    function P(j) {
      if (!b && (h.current = false, j.touches.length === 1)) {
        j.stopPropagation();
        const $ = j.touches[0];
        S.current = { x: $.clientX, y: $.clientY }, k.start(cma, () => {
          S.current && I(S.current.x, S.current.y, j.nativeEvent);
        });
      }
    }
    function M(j) {
      if (k.isStarted() && S.current && j.touches.length === 1) {
        const $ = j.touches[0], H = 10, G = Math.abs($.clientX - S.current.x), q = Math.abs($.clientY - S.current.y);
        (G > H || q > H) && k.clear();
      }
    }
    function O() {
      k.clear(), S.current = null;
    }
    return npi.useEffect(() => {
      function j(H) {
        if (b) return;
        const q = B5(H);
        (Nf(y.current, q) || Nf(c.current, q) || Nf(u.current, q)) && H.preventDefault();
      }
      const $ = ak(y.current);
      return r0($, "contextmenu", j);
    }, [u, b, c]), Lm("div", e, { state: { open: _ }, ref: [y, n], props: [{ onContextMenu: A, onTouchStart: P, onTouchMove: M, onTouchEnd: O, onTouchCancel: O, style: { WebkitTouchCallout: "none" } }, o], stateAttributesMapping: a7t });
  }), process.env.NODE_ENV !== "production" && (NOr.displayName = "ContextMenuTrigger");
} });
function x6h(t) {
  const e = t?.target;
  if (e == null || typeof e != "object" || !("ownerDocument" in e)) return null;
  const n = e.ownerDocument;
  return n != null && typeof n == "object" && "hasFocus" in n ? n : null;
}
function LOr(t, e) {
  if (t === null) return null;
  const { activeElement: n, body: i, defaultView: r } = t;
  return r === null || !(n instanceof r.HTMLElement) || n === i || n === e ? null : n;
}
