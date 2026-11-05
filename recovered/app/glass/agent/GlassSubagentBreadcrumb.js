// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GlassSubagentBreadcrumb.js range:32927130..32930696
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.209Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, index.js, solid.js, react-bridge.js, solidContext.js, GlassSubagentBreadcrumb.css
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, index.js, solid.js, react-bridge.js, solidContext.js, GlassSubagentBreadcrumb.css
// path-candidate: none (no nls basename match; path inferred, confidence C)
XPw = L({ "GlassSubagentBreadcrumb.js"() {
  "use strict";
  E(), at(), at(), at(), at(), Mt(), pi(), aS(), vo(), KPw(), C7f = wt("<div class=glass-subagent-breadcrumb>"), T7f = Ok(zt), E7f = Ok(An);
} }), ZPw = L({ "InlineAgentTabs.css"() {
} });
function dBl(t) {
  const e = t;
  let n, i, r, s, o, a, l = false, c = false, u = false;
  const d = () => e.shouldAttach !== false, h = (C) => {
    u !== C && (u = C, e.onReadyChange?.(C));
  }, p = () => {
    c || !n || (c = true, queueMicrotask(() => {
      if (c = false, !!n) {
        if (!d()) {
          h(false);
          return;
        }
        k();
      }
    }));
  }, g = () => {
    r !== void 0 && (window.clearInterval(r), r = void 0);
  }, f = () => {
    o && a && o.removeEventListener("scroll", a), s && (s.classList.remove(Rws), s.classList.remove(X3n), s.classList.remove(hBl)), s = void 0, o = void 0, a = void 0;
  }, _ = () => {
    if (!s || !o) return;
    const C = Math.max(0, o.scrollWidth - o.clientWidth), T = C > 1, I = s.classList.contains(X3n), A = T && (I ? o.scrollLeft < C - 1 : o.scrollLeft > 1);
    s.classList.toggle(Rws, A);
  }, b = (C) => {
    const { composite: T, scrollElement: I } = C, A = T.querySelector(":scope > .auxiliary-bar-title-sidebar-toggle");
    if (!A) {
      T.classList.remove(X3n);
      return;
    }
    const P = A.getBoundingClientRect(), M = I.getBoundingClientRect(), O = P.left >= M.right;
    T.classList.toggle(X3n, O);
  }, y = () => {
    if (!n || !Xct(n) || !$6) {
      f();
      return;
    }
    const C = $6.composite, T = C.querySelector(".composite-bar");
    if (!T) {
      f();
      return;
    }
    const I = true;
    if (C.classList.toggle(hBl, I), !I) {
      C.classList.remove(Rws), C.classList.remove(X3n);
      return;
    }
    if (s === C && o === T && a) {
      b({ composite: C, scrollElement: T }), _();
      return;
    }
    f(), s = C, o = T, a = () => _(), o.addEventListener("scroll", a, { passive: true }), b({ composite: C, scrollElement: T }), _();
  }, S = () => {
    g(), n && (l = false, r = window.setInterval(() => {
      const C = n, T = $6, I = Xct(C), A = T?.composite, P = !!A && C.contains(A), M = !!A && Q3n(A), O = I && P && M;
      !O && l && (p(), h(false)), O && y(), l = O;
    }, 250));
  }, k = () => {
    if (!d()) {
      h(false);
      return;
    }
    if (!n) return;
    if (fBl(n)) {
      i !== void 0 && (window.clearInterval(i), i = void 0), gBl(n), mBl(), y(), S(), h(true);
      return;
    }
    h(false), i === void 0 && (i = window.setInterval(() => {
      if (n) {
        if (!d()) {
          h(false);
          return;
        }
        fBl(n) && i !== void 0 && (window.clearInterval(i), i = void 0, n && (gBl(n), mBl(), y(), S()), h(true));
      }
    }, 100));
  };
  return Cn(() => {
    const C = d();
    if (!n) {
      C || h(false);
      return;
    }
    if (C) {
      k();
      return;
    }
    g(), f(), xNi(n), Pws(n), Xct(n) && Dws(n), h(false);
  }), On(() => {
    i !== void 0 && (window.clearInterval(i), i = void 0), g(), f(), n && (Xct(n) && (xNi(n), Pws(n)), Xct(n) && Dws(n)), h(false);
  }), (() => {
    var C = x7f(), T = C.firstChild, I = T.firstChild;
    return Le(T, Ee(Ut, { get when() {
      return e.projectName;
    }, get children() {
      var A = I7f();
      return Le(A, () => e.projectName), A;
    } }), I), zu((A) => {
      n = A, k();
    }, I), C;
  })();
}
var I7f, x7f, A7f, R7f, Rws, X3n, hBl, $6, Z3n, INi, P7f, Q3n, pBl, mBl, M7f, Xct, Pws, xNi, Mws, gBl, D7f, fBl, vBl, N7f, _Bl, L7f, Dws, 