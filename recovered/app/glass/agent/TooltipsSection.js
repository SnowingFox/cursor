// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TooltipsSection.js range:39340921..39348595
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.280Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, vanilla.mjs, solid.js, hoverWidget.js, codicons.js, themables.js, useLargeHoverTooltip.js, +2 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, vanilla.mjs, solid.js, hoverWidget.js, codicons.js, themables.js, useLargeHoverTooltip.js, +2 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
euC = L({ "TooltipsSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), Am(), pi(), Iw(), gs(), ta(), Jat(), O6(), mk(), uZv = wt("<div class=thinking-tooltip-description><div>JSX Tooltip Example</div><div>This tooltip is rendered using SolidJS"), dZv = wt("<div class=thinking-tooltip-description><div>Interactive JSX Tooltip</div><div>Counter: </div><button>Increment"), hZv = wt('<div><div class=thinking-tooltip-description>Custom Styled JSX Tooltip</div><div class="continuous-gradient-container gradient-high"><span></span><span>Interactive components</span></div><div>Tooltips with rich content'), pZv = wt("<div><h3>Standard Tooltips (useVSHoverTooltip)</h3><p>Basic tooltips with different positions and behaviors:</p><div><div>Hover Below</div><div>Hover Above</div><div>Hover Left</div><div>Hover Right</div><div>Sticky Tooltip (Click to dismiss)</div><div>Count Hovers"), mZv = wt("<div><h3>Large Tooltips (useLargeHoverTooltip)</h3><p>Enhanced tooltips with custom styling and tracking:</p><div><div>Basic Large Tooltip</div><div>HTML Content Tooltip</div><div>Rich Content Tooltip</div><div>Model Tracking Demo"), gZv = wt("<div><h3>JSX Tooltips (showLargeJSXHover)</h3><p>Tooltips with SolidJS components:</p><div><div>Simple JSX Tooltip</div><div>Interactive JSX Tooltip</div><div>Styled JSX Tooltip</div><div>Dynamic JSX Content"), fZv = wt("<div class=thinking-tooltip-description><div><strong>Current Hover Models:</strong></div><div>Active: </div><div>(This tooltip updates when you hover other examples)"), vZv = () => (() => {
    var t = uZv(), e = t.firstChild;
    return e.style.setProperty("font-weight", "bold"), e.style.setProperty("margin-bottom", "4px"), t;
  })(), f6n = cs(0), Tdc = cs(0), _Zv = () => {
    const t = jp(), [e, n] = Wt(t.get(f6n));
    return On(t.sub(f6n, () => n(t.get(f6n)))), (() => {
      var i = dZv(), r = i.firstChild, s = r.nextSibling, o = s.firstChild, a = s.nextSibling;
      return r.style.setProperty("font-weight", "bold"), r.style.setProperty("margin-bottom", "6px"), s.style.setProperty("margin-bottom", "8px"), Le(s, e, null), a.addEventListener("click", () => t.set(f6n, t.get(f6n) + 1)), a.style.setProperty("background-color", "var(--vscode-button-background)"), a.style.setProperty("color", "var(--vscode-button-foreground)"), a.style.setProperty("border", "none"), a.style.setProperty("padding", "4px 8px"), a.style.setProperty("border-radius", "4px"), a.style.setProperty("cursor", "pointer"), a.style.setProperty("font-size", "12px"), i;
    })();
  }, bZv = () => (() => {
    var t = hZv(), e = t.firstChild, n = e.nextSibling, i = n.firstChild, r = n.nextSibling;
    return t.style.setProperty("padding", "2px"), n.style.setProperty("margin-top", "4px"), r.style.setProperty("margin-top", "6px"), r.style.setProperty("font-size", "10px"), r.style.setProperty("opacity", "0.8"), xn(() => Er(i, Gn.asClassName(yt.brain))), t;
  })();
} });
function tuC() {
  let t, e, n = false;
  const i = jp(), r = Ca(i, xdc), s = (T) => i.set(xdc, T), o = Ca(i, Adc), a = (T) => i.set(Adc, T), l = Ca(i, Rdc), c = (T) => i.set(Rdc, T), u = Ca(i, Pdc), d = (T) => i.set(Pdc, T), h = Ca(i, Mdc), p = (T) => i.set(Mdc, T), g = Ca(i, Ddc), f = (T) => i.set(Ddc, T), _ = () => {
    const T = i.get(gBi);
    T !== null && (clearTimeout(T), i.set(gBi, null));
  };
  On(() => {
    n = true, _();
  });
  const b = async (T, I) => {
    let A, P;
    try {
      A = T.getWebContentsId(), P = I.getWebContentsId();
    } catch (M) {
      a(`Error getting IDs: ${M}`);
      return;
    }
    a(`Connecting DevTools (browser=${A}, devtools=${P})...`);
    try {
      if (await Edc?.invoke("vscode:setDevToolsWebContents", A, P), n) return;
      s(true), a("DevTools embedded in webview");
    } catch (M) {
      if (n) return;
      a(`Error: ${M}`);
    }
  }, y = async (T = false) => {
    if (!t || !e) return;
    const I = t, A = e;
    if (!(r() && !T)) {
      if (_(), r() || T) {
        I.closeDevTools(), s(false);
        const P = setTimeout(() => {
          i.set(gBi, null), !n && b(I, A);
        }, 150);
        i.set(gBi, P);
        return;
      }
      await b(I, A);
    }
  }, S = async () => {
    await y(true);
  };
  Xc(() => {
    if (t) {
      const T = t;
      T.addEventListener("dom-ready", () => {
        try {
          const I = T.getWebContentsId();
          Edc?.invoke("vscode:registerGalleryBrowserWebview", I).catch(() => {
          });
        } catch {
        }
        c(true), a(u() ? "Both ready" : "Browser ready");
      }), T.addEventListener("devtools-opened", () => {
        s(true);
      }), T.addEventListener("devtools-closed", () => {
        s(false);
      });
    }
    if (e) {
      const T = e;
      T.addEventListener("did-attach", () => {
        d(true), a(l() ? "Both ready" : "DevTools webview attached");
      }), T.addEventListener("dom-ready", () => {
        u() || (d(true), a(l() ? "Both ready" : "DevTools webview ready"));
      });
    }
  });
  const k = () => {
    if (_(), !t) return;
    t.closeDevTools(), s(false);
  }, C = (T) => {
    T?.preventDefault();
    const I = g().trim();
    I && (p(I), c(false));
  };
  return Ee(pk, { title: "Webview Devtools", class: "p-4 gap-4 h-full", get children() {
    return [(() => {
      var T = yZv(), I = T.firstChild, A = I.nextSibling;
      return T.addEventListener("submit", C), A.addEventListener("input", (P) => f(P.currentTarget.value)), Le(T, Ee(ol, { onClick: C, variant: "secondary", children: "Load" }), null), xn(() => A.value = g()), T;
    })(), (() => {
      var T = SZv(), I = T.firstChild;
      return Le(T, o, null), T;
    })(), (() => {
      var T = kZv();
      return Le(T, Ee(ol, { onClick: S, get disabled() {
        return !l() || !u();
      }, get children() {
        return r() ? "Reconnect DevTools" : "Open Embedded DevTools";
      } }), null), Le(T, Ee(ol, { onClick: k, variant: "danger", get disabled() {
        return !r();
      }, children: "Close DevTools" }), null), T;
    })(), (() => {
      var T = wZv(), I = T.firstChild, A = I.firstChild, P = A.nextSibling, M = I.nextSibling, O = M.firstChild;
      return Le(A, h), zu((N) => {
        t = N, N.setAttribute("allow", "pointer-lock");
      }, P), P.style.setProperty("width", "100%"), P.style.setProperty("height", "100%"), P.style.setProperty("flex", "1"), zu((N) => e = N, O), O.style.setProperty("width", "100%"), O.style.setProperty("height", "100%"), Le(M, (() => {
        var N = zr(() => !!(!u() && r()));
        return () => N() && (() => {
          var U = CZv();
          return U.style.setProperty("background", "var(--vscode-editor-background)"), U;
        })();
      })(), null), xn((N) => {
        var U = r() ? "8px" : "0", j = h(), $ = `rounded overflow-hidden relative transition-all duration-200 ${r() ? "border border-[var(--vscode-input-border)]" : "border-0"}`, H = r() ? "1" : "0 0 0px", G = r() ? "400px" : "0", q = r() ? "auto" : "0";
        return U !== N.e && ((N.e = U) != null ? T.style.setProperty("gap", U) : T.style.removeProperty("gap")), j !== N.t && lo(P, "src", N.t = j), $ !== N.a && Er(M, N.a = $), H !== N.o && ((N.o = H) != null ? M.style.setProperty("flex", H) : M.style.removeProperty("flex")), G !== N.i && ((N.i = G) != null ? M.style.setProperty("min-width", G) : M.style.removeProperty("min-width")), q !== N.n && ((N.n = q) != null ? M.style.setProperty("width", q) : M.style.removeProperty("width")), N;
      }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), T;
    })()];
  } });
}
var yZv, SZv, kZv, wZv, CZv, TZv, Edc, Idc, xdc, Adc, Rdc, Pdc, Mdc, Ddc, gBi, 