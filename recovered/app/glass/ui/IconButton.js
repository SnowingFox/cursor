// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: IconButton.js range:11544834..11549229
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.720Z
var Q3 = L({ "IconButton.js"() {
  "use strict";
  E(), mf(), sNh(), owh(), m2(), dKo(), fd();
} });
import { useState as qda, useRef as Kyn, useCallback as Yyn, useEffect as zda } from "./react-runtime/react/esm-index-production.js";
function OpS(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function FpS(t, e) {
  t && (t.style.transform = `translate(${e.positionX}px, ${e.positionY}px) scale(${e.scale})`);
}
function BpS(t) {
  return t !== void 0 && Number.isFinite(t.scale) && Number.isFinite(t.positionX) && Number.isFinite(t.positionY) && t.scale > 0;
}
function UpS(t, e) {
  const n = t.getBoundingClientRect();
  if (n.width <= 0 || n.height <= 0) return 1;
  const i = e.getBoundingClientRect(), r = i.width * Yda, s = i.height * Yda;
  if (r <= 0 || s <= 0) return 1;
  const o = Math.min(r / n.width, s / n.height);
  return Math.min(o, lNh);
}
function oNh(t, e, n) {
  const i = t.getBoundingClientRect();
  return { scale: n, positionX: (i.width - e.width * n) / 2, positionY: (i.height - e.height * n) / 2 };
}
function Vda(t, e, n, i, r, s) {
  const o = OpS(t.scale * i, r, s), a = o / t.scale;
  return { scale: o, positionX: e - (e - t.positionX) * a, positionY: n - (n - t.positionY) * a };
}
function aNh(t) {
  const [e, n] = qda(false), [i, r] = qda(null), [s, o] = qda(null), a = Kyn(null), l = Kyn({ scale: 1, positionX: 0, positionY: 0 }), c = Kyn(1), u = Kyn({ width: 0, height: 0 }), d = Kyn(false), h = Kyn({ x: 0, y: 0 }), p = Yyn((S) => {
    r(S);
  }, []), g = Yyn((S) => {
    o(S);
  }, []), f = Yyn((S = true) => {
    if (FpS(a.current, l.current), S) {
      const { scale: k, positionX: C, positionY: T } = l.current;
      t.onTransformChange?.({ scale: k, positionX: C, positionY: T });
    }
  }, [t.onTransformChange]);
  zda(() => {
    if (!t.isActive) {
      n(false);
      return;
    }
    if (!i || !s) return;
    n(false), l.current = { scale: 1, positionX: 0, positionY: 0 }, f(false);
    const S = requestAnimationFrame(() => {
      const k = s.getBoundingClientRect();
      u.current = { width: k.width, height: k.height };
      const C = UpS(s, i);
      c.current = C, l.current = BpS(t.initialTransform) ? t.initialTransform : oNh(i, u.current, C), f(), n(true);
    });
    return () => cancelAnimationFrame(S);
  }, [i, s, f, t.initialTransform, t.isActive]), zda(() => {
    if (!i || !t.enableZoom) return;
    const S = (k) => {
      k.preventDefault();
      const C = i.getBoundingClientRect(), T = k.clientX - C.left, I = k.clientY - C.top, A = k.deltaY < 0 ? 1 : -1;
      l.current = Vda(l.current, T, I, 1 + A * cNh, c.current, kLr), f();
    };
    return i.addEventListener("wheel", S, { passive: false }), () => i.removeEventListener("wheel", S);
  }, [f, i, t.enableZoom]), zda(() => {
    if (!i || !t.enablePan) return;
    const S = (T) => {
      T.button === 0 && (T.target instanceof Element && T.target.closest("a[href]") || (T.preventDefault(), d.current = true, h.current = { x: T.clientX, y: T.clientY }, i.setPointerCapture(T.pointerId), i.style.cursor = "grabbing"));
    }, k = (T) => {
      if (!d.current) return;
      const I = T.clientX - h.current.x, A = T.clientY - h.current.y;
      h.current = { x: T.clientX, y: T.clientY }, l.current.positionX += I, l.current.positionY += A, f();
    }, C = (T) => {
      d.current && (d.current = false, i.releasePointerCapture(T.pointerId), i.style.cursor = "grab");
    };
    return i.addEventListener("pointerdown", S), i.addEventListener("pointermove", k), i.addEventListener("pointerup", C), i.addEventListener("pointercancel", C), () => {
      i.removeEventListener("pointerdown", S), i.removeEventListener("pointermove", k), i.removeEventListener("pointerup", C), i.removeEventListener("pointercancel", C);
    };
  }, [f, i, t.enablePan]);
  const _ = Yyn(() => {
    if (!i) return;
    const S = i.getBoundingClientRect();
    l.current = Vda(l.current, S.width / 2, S.height / 2, 1 + Kda, c.current, kLr), f();
  }, [f, i]), b = Yyn(() => {
    if (!i) return;
    const S = i.getBoundingClientRect();
    l.current = Vda(l.current, S.width / 2, S.height / 2, 1 - Kda, c.current, kLr), f();
  }, [f, i]), y = Yyn(() => {
    i && (l.current = oNh(i, u.current, c.current), f());
  }, [f, i]);
  return { isReady: e, zoomIn: _, zoomOut: b, reset: y, viewportRef: p, contentRef: g, transformElRef: a };
}
var lNh, kLr, cNh, Kda, Yda, 