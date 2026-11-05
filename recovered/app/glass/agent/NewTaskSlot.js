// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: NewTaskSlot.js range:14779595..14783695
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.249Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, icon.js, Text.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, icon.js, Text.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
var n0S = L({ "NewTaskSlot.js"() {
  "use strict";
  E(), fd(), dy();
} });
import { useRef as ert, useState as eBh, useCallback as Hga, useEffect as tBh } from "./react-runtime/react/esm-index-production.js";
function Wga(t, e) {
  if (!e?.length || !t.dataTransfer) return false;
  for (const n of t.dataTransfer.types) for (const i of e) if (n.toLowerCase() === i.toLowerCase()) return true;
  return false;
}
function i0S(t, e) {
  const n = t.relatedTarget;
  if (n !== null && e.contains(n)) return false;
  const i = e.defaultView;
  return i ? t.clientX <= 0 || t.clientY <= 0 || t.clientX >= i.innerWidth || t.clientY >= i.innerHeight : true;
}
function a2e(t) {
  const { accept: e, disabled: n = false, acceptData: i, acceptNativeTypes: r, onDragEnter: s, onDragOver: o, onDragLeave: a, onDrop: l } = t, c = ert(null), u = ert(null), d = ert(0), h = ert(null), [p, g] = eBh(false), [f, _] = eBh(false), b = ert(p);
  b.current = p;
  const y = Hga(() => {
    d.current = 0, g(false), _(false);
  }, []), S = Hga(() => {
    h.current !== null && (cancelAnimationFrame(h.current), h.current = null);
  }, []);
  tBh(() => {
    if (!p) return;
    const P = u.current?.ownerDocument ?? document, M = () => {
      S(), y();
    };
    return P.addEventListener("mousemove", M, true), () => {
      P.removeEventListener("mousemove", M, true);
    };
  }, [p, S, y]);
  const k = ert({ onDragEnter: s, onDragOver: o, onDragLeave: a, onDrop: l });
  k.current = { onDragEnter: s, onDragOver: o, onDragLeave: a, onDrop: l };
  const C = ert(r);
  C.current = r;
  const T = ert(Array.isArray(e) ? e : [e]);
  T.current = Array.isArray(e) ? e : [e];
  const I = ert(i);
  I.current = i;
  const A = Hga((P) => {
    if (u.current = P, c.current && (c.current(), c.current = null), d.current = 0, P !== null && (g(false), _(false)), !P || n) return;
    const M = xO.getInstance(), O = () => {
      if (n) return null;
      const Y = M.getValidatedData(T.current);
      return Y && (I.current?.(Y) ?? true) ? Y : null;
    }, N = (Y) => {
      if (d.current++, d.current === 1) {
        g(true);
        const J = O();
        _(J !== null || !n && Wga(Y, C.current)), k.current.onDragEnter?.(Y, J);
      }
    }, U = (Y) => {
      d.current = Math.max(0, d.current - 1), d.current === 0 && (S(), y(), k.current.onDragLeave?.(Y));
    }, j = (Y) => {
      const J = O(), Q = J !== null, te = !Q && !n && Wga(Y, C.current);
      (Q || te) && (Y.preventDefault(), Y.dataTransfer && (Y.dataTransfer.dropEffect = Q ? "move" : "copy"), d.current === 0 && (d.current = 1, g(true), _(true), k.current.onDragEnter?.(Y, J)), k.current.onDragOver && h.current === null && (h.current = requestAnimationFrame(() => {
        h.current = null, k.current.onDragOver?.(Y, J);
      })));
    }, $ = (Y) => {
      Y.preventDefault(), S(), y();
      const J = O();
      if (J) {
        const { onDrop: Q } = k.current;
        Q && (Q(Y, J), Y.stopPropagation());
      } else if (Wga(Y, C.current)) {
        const { onDrop: Q } = k.current;
        Q && (Q(Y, null), Y.stopPropagation());
      }
    };
    P.addEventListener("dragenter", N), P.addEventListener("dragleave", U), P.addEventListener("dragover", j), P.addEventListener("drop", $);
    const H = P.ownerDocument, G = () => {
      (d.current !== 0 || b.current) && (S(), y());
    }, q = () => G(), K = () => G(), V = (Y) => {
      i0S(Y, H) && G();
    };
    H.addEventListener("drop", q, true), H.addEventListener("dragend", K, true), H.addEventListener("dragleave", V, true), c.current = () => {
      P.removeEventListener("dragenter", N), P.removeEventListener("dragleave", U), P.removeEventListener("dragover", j), P.removeEventListener("drop", $), H.removeEventListener("drop", q, true), H.removeEventListener("dragend", K, true), H.removeEventListener("dragleave", V, true), h.current !== null && (cancelAnimationFrame(h.current), h.current = null);
    };
  }, [n, y, S]);
  return tBh(() => () => {
    c.current && (c.current(), c.current = null);
  }, []), { ref: A, isOver: p, canDrop: f, isDropBlocked: p && !f };
}
