// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LoadingIndicatorsSection.js range:39199603..39204811
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.780Z
OlC = L({ "LoadingIndicatorsSection.js"() {
  "use strict";
  E(), at(), at(), at(), Sus(), b9e(), mk(), kYv = wt("<div class=loading-indicators><div>Loading indicator</div><div>Loading indicator v3</div><div>Loading spinner</div><div>Loading spinner subtle");
} });
function FlC() {
  const [t, e] = uBe("interactiveMarkdownContent", AYv), n = jp(), [i, r] = Wt(n.get(l6n));
  On(n.sub(l6n, () => r(n.get(l6n))));
  const [s, o] = Wt(n.get(Ren));
  On(n.sub(Ren, () => o(n.get(Ren))));
  const [a, l] = Wt(n.get(Edt));
  On(n.sub(Edt, () => l(n.get(Edt))));
  const [c, u] = Wt(n.get(Idt));
  On(n.sub(Idt, () => u(n.get(Idt))));
  const [d, h] = uBe("cachedMarkdownChunks", []), [p, g] = uBe("useMarkdownCachedChunks", false);
  let f, _, b = false;
  On(() => {
    b = true, clearTimeout(f), clearTimeout(_), n.get(c6n)?.abort();
  }), Cn(() => {
    const k = t();
    n.set(l6n, true), clearTimeout(f), f = setTimeout(() => {
      b || n.set(l6n, false);
    }, 1e3);
  });
  const y = () => {
    if (n.get(Edt)) {
      n.get(c6n)?.abort(), clearTimeout(_), _ = void 0, n.set(Edt, false), n.set(c6n, null);
      return;
    }
    n.set(RYv);
    const k = t();
    let C = 0;
    const T = new AbortController();
    n.set(c6n, T);
    const I = () => {
      if (_ = void 0, !b) {
        if (T.signal.aborted) {
          n.set(Edt, false);
          return;
        }
        if (C < k.length) {
          let A;
          p() && C < d().join("").length ? A = d()[n.get(Idt).length] : A = k.slice(C, C + 1), n.set(PYv, A), C += A.length;
          const P = Math.floor(Math.random() * 11) + 10;
          _ = setTimeout(I, P);
        } else n.set(Edt, false), n.set(c6n, null);
      }
    };
    I();
  }, S = () => {
    h(n.get(Idt));
  };
  return Ee(pk, { title: "Interactive Markdown", get children() {
    var k = EYv(), C = k.firstChild, T = C.firstChild, I = T.firstChild, A = T.nextSibling, P = C.nextSibling, M = P.firstChild, O = M.firstChild;
    return k.style.setProperty("display", "flex"), k.style.setProperty("flex-direction", "column"), k.style.setProperty("gap", "20px"), k.style.setProperty("height", "100%"), k.style.setProperty("width", "100%"), k.style.setProperty("box-sizing", "border-box"), C.style.setProperty("display", "flex"), C.style.setProperty("gap", "20px"), C.style.setProperty("height", "600px"), C.style.setProperty("width", "100%"), T.style.setProperty("flex", "1"), T.style.setProperty("display", "flex"), T.style.setProperty("flex-direction", "column"), I.addEventListener("input", (N) => e(N.currentTarget.value)), I.style.setProperty("width", "100%"), I.style.setProperty("height", "100%"), I.style.setProperty("resize", "none"), I.style.setProperty("font-family", "monospace"), A.style.setProperty("flex", "1"), Le(A, Ee(ME, { scrollingDirection: "vertical", style: { height: "100%" }, get children() {
      return Ee(xYv, { get rawText() {
        return s() || t();
      }, get finished() {
        return zr(() => !a())() && !i();
      } });
    } })), P.style.setProperty("display", "flex"), P.style.setProperty("gap", "10px"), P.style.setProperty("align-items", "center"), Le(P, Ee(hp, { onClick: y, get title() {
      return a() ? "Stop Streaming" : "Stream";
    } }), M), Le(P, Ee(hp, { onClick: S, title: "Cache Current Chunks", get disabled() {
      return c().length === 0;
    } }), M), O.addEventListener("change", (N) => g(N.currentTarget.checked)), Le(k, Ee(Ut, { get when() {
      return a() || s().length > 0;
    }, get children() {
      var N = TYv(), U = N.firstChild, j = U.nextSibling;
      return N.style.setProperty("flex", "1"), N.style.setProperty("overflow", "hidden"), N.style.setProperty("display", "flex"), N.style.setProperty("gap", "20px"), U.style.setProperty("flex", "1"), U.style.setProperty("overflow", "hidden"), Le(U, Ee(ME, { scrollingDirection: "vertical", style: { height: "100%" }, get children() {
        var $ = wYv(), H = $.firstChild, G = H.nextSibling;
        return $.style.setProperty("border-top", "1px solid #ccc"), $.style.setProperty("padding-top", "10px"), G.style.setProperty("white-space", "pre-wrap"), G.style.setProperty("word-break", "break-word"), Le(G, s), $;
      } })), j.style.setProperty("flex", "1"), j.style.setProperty("overflow", "hidden"), Le(j, Ee(ME, { scrollingDirection: "vertical", style: { height: "100%" }, get children() {
        var $ = CYv(), H = $.firstChild;
        return $.style.setProperty("border-top", "1px solid #ccc"), $.style.setProperty("padding-top", "10px"), Le($, Ee(Su, { get each() {
          return c();
        }, children: (G, q) => (() => {
          var K = IYv(), V = K.firstChild, Y = V.firstChild, J = Y.nextSibling, Q = J.nextSibling, te = V.nextSibling, ee = te.nextSibling;
          return K.style.setProperty("margin-bottom", "5px"), K.style.setProperty("user-select", "text"), V.style.setProperty("font-weight", "bold"), Le(V, () => q() + 1, J), ee.style.setProperty("user-select", "text"), Le(ee, () => JSON.stringify(G)), K;
        })() }), null), $;
      } })), N;
    } }), null), xn(() => I.value = t()), xn(() => O.checked = p()), k;
  } });
}
var wYv, CYv, TYv, EYv, IYv, xYv, AYv, l6n, Ren, Edt, c6n, Idt, RYv, PYv, 