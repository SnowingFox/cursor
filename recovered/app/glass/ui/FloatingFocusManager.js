// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FloatingFocusManager.js range:5995342..5997380
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.681Z
Dli = L({ "FloatingFocusManager.js"() {
  E(), aT(), b_e(), V_n(), m_e(), Fwe(), Jy(), jv(), M7(), Hnt(), hB(), vRr(), zHe(), Sne(), NQo(), ERr(), tbn(), VS(), IRr(), Soh(), hUy(), Y8t(), vhe(), k_e(), Uoh(), $D(), Zb(), H8t(), YQo = 20, Xnt = [];
} });
import * as XQo from "./react-runtime/react/esm-index-production.js";
function X8t(t, e = {}) {
  const { enabled: n = true, event: i = "click", toggle: r = true, ignoreMouse: s = false, stickIfOpen: o = true, touchOpenDelay: a = 0, reason: l = PRe } = e, c = "rootStore" in t ? t.rootStore : t, u = c.context.dataRef, d = XQo.useRef(void 0), h = U8t(), p = a6(), g = XQo.useMemo(() => {
    function f(b, y, S, k) {
      const C = zd(l, y, S);
      b && k === "touch" && a > 0 ? p.start(a, () => {
        c.setOpen(true, C);
      }) : c.setOpen(b, C);
    }
    function _(b, y, S) {
      const k = u.current.openEvent, C = c.select("domReferenceElement") !== y;
      return b && C || !b || !r ? true : k && o ? !S(k.type) : false;
    }
    return { onPointerDown(b) {
      d.current = b.pointerType;
    }, onMouseDown(b) {
      const y = d.current, S = b.nativeEvent, k = c.select("open");
      if (b.button !== 0 || i === "click" || W8t(y, true) && s) return;
      const C = _(k, b.currentTarget, (A) => A === "click" || A === "mousedown"), T = B5(S);
      if (hRr(T)) {
        f(C, S, T, y);
        return;
      }
      const I = b.currentTarget;
      h.request(() => {
        f(C, S, I, y);
      });
    }, onClick(b) {
      if (i === "mousedown-only") return;
      const y = d.current;
      if (i === "mousedown" && y) {
        d.current = void 0;
        return;
      }
      if (W8t(y, true) && s) return;
      const S = c.select("open"), k = _(S, b.currentTarget, (C) => C === "click" || C === "mousedown" || C === "keydown" || C === "keyup");
      f(k, b.nativeEvent, b.currentTarget, y);
    }, onKeyDown() {
      d.current = void 0;
    } };
  }, [u, i, s, l, c, o, r, h, p, a]);
  return XQo.useMemo(() => n ? { reference: g } : pE, [n, g]);
}
