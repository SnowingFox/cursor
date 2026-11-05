// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InputBoxBrowserChanges.js range:27429101..27433087
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.211Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, InputBoxElementSelection.css
// anchors: classes=browser-change-value
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, InputBoxElementSelection.css
// anchors: classes=browser-change-value
// path-candidate: none (no nls basename match; path inferred, confidence C)
w2k = L({ "InputBoxBrowserChanges.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), _xg(), bxg = wt("<div class=input-box-element-selection><div class=element-section><div class=element-section-title> CHANGES</div><div class=element-section-content>"), yxg = wt("<span class=element-color-square>"), Sxg = wt('<div class=browser-change-item><div class=element-attribute-row><span class=element-attribute-name>:</span><div class=element-attribute-value-container><span class="element-attribute-value browser-change-value"><span class=browser-old-value></span><span class=browser-arrow>→</span><span class=browser-new-value>');
} });
function kxg(t) {
  const e = vt(() => t.selection), n = vt(() => {
    try {
      return JSON.parse(e().extra || "{}");
    } catch (o) {
      return console.error("Error parsing element data:", o), {};
    }
  }), i = vt(() => n().attributes || []), r = vt(() => n().styles || {}), s = vt(() => n().rect || null);
  return (() => {
    var o = Axg(), a = o.firstChild, l = a.firstChild, c = l.nextSibling, u = c.firstChild, d = u.firstChild, h = u.nextSibling, p = a.nextSibling, g = p.firstChild, f = g.nextSibling, _ = f.firstChild;
    return Le(u, () => e().element, null), Le(c, Ee(Ut, { get when() {
      return n().id;
    }, get children() {
      var b = wxg(), y = b.firstChild, S = y.nextSibling, k = S.nextSibling;
      return Le(b, () => n().id, S), b;
    } }), h), Le(c, Ee(Ut, { get when() {
      return n().className;
    }, get children() {
      var b = Cxg(), y = b.firstChild, S = y.nextSibling, k = S.nextSibling;
      return Le(b, () => n().className, S), b;
    } }), h), Le(_, () => e().xpath), Le(o, Ee(Ut, { get when() {
      return i().length > 0;
    }, get children() {
      var b = Txg(), y = b.firstChild, S = y.nextSibling;
      return Le(S, Ee(Su, { get each() {
        return i();
      }, children: (k) => (() => {
        var C = Xgl(), T = C.firstChild, I = T.firstChild, A = T.nextSibling, P = A.firstChild;
        return Le(T, () => k.name, I), Le(A, Ee(Ut, { get when() {
          return k.name.toLowerCase().includes("color");
        }, get children() {
          var M = Ygl();
          return xn((O) => (O = k.value) != null ? M.style.setProperty("background", O) : M.style.removeProperty("background")), M;
        } }), P), Le(P, () => k.value), C;
      })() })), b;
    } }), null), Le(o, Ee(Ut, { get when() {
      return Object.keys(r()).length > 0;
    }, get children() {
      var b = Exg(), y = b.firstChild, S = y.nextSibling;
      return Le(S, Ee(Su, { get each() {
        return Object.entries(r()).slice(0, 20);
      }, children: ([k, C]) => (() => {
        var T = Xgl(), I = T.firstChild, A = I.firstChild, P = I.nextSibling, M = P.firstChild;
        return Le(I, k, A), Le(P, Ee(Ut, { get when() {
          return k.toLowerCase().includes("color");
        }, get children() {
          var O = Ygl();
          return C != null ? O.style.setProperty("background", C) : O.style.removeProperty("background"), O;
        } }), M), Le(M, C), T;
      })() })), b;
    } }), null), Le(o, Ee(Ut, { get when() {
      return s();
    }, get children() {
      var b = Ixg(), y = b.firstChild, S = y.nextSibling, k = S.firstChild, C = k.firstChild, T = C.nextSibling, I = T.firstChild, A = k.nextSibling, P = A.firstChild, M = P.nextSibling, O = M.firstChild, N = A.nextSibling, U = N.firstChild, j = U.nextSibling, $ = j.firstChild, H = N.nextSibling, G = H.firstChild, q = G.nextSibling, K = q.firstChild;
      return Le(T, () => s().top, I), Le(M, () => s().left, O), Le(j, () => s().width, $), Le(q, () => s().height, K), b;
    } }), null), Le(o, Ee(Ut, { get when() {
      return e().textContent;
    }, get children() {
      var b = xxg(), y = b.firstChild, S = y.nextSibling, k = S.firstChild;
      return Le(k, () => e().textContent), b;
    } }), null), xn((b) => Ea(o, t.style, b)), o;
  })();
}
var wxg, Cxg, Txg, Exg, Ixg, xxg, Axg, Ygl, Xgl, 