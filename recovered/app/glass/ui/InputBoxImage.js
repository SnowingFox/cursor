// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InputBoxImage.js range:27343392..27346441
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.745Z
vIg = L({ "InputBoxImage.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), Ki(), ta(), fn(), b_(), vo(), pIg = wt("<span>"), mIg = wt('<div><div><div></div></div><div class=input-box-code-selection><div><img alt="Image not found">'), gIg = qa("chatinputbox-remove-selection", yt.x, "Icon for removing a selection in the input box in AI chat."), fIg = 20;
} });
function DRk(t, e) {
  return Math.round(t.left) >= Math.round(e.left);
}
function Igl(t) {
  const { children: e, style: n, outerContainerStyle: i, class: r, forceGap: s, noTransition: o, forceRerender: a, ...l } = t, [c, u] = Wt([]);
  let d, h;
  const p = [], g = new e_t(), _ = rl()?.ResizeObserver, b = () => {
    if (!d) return;
    const y = d.getBoundingClientRect();
    g.queue(async () => {
      const S = [];
      let k = false;
      for (let C = 0; C < p.length; C++) {
        const T = p[C];
        if (T) {
          const I = T.getBoundingClientRect(), A = DRk(I, y), P = (k || A) && I.width > 0;
          S.push(P), P && (k = true);
        } else S.push(false);
      }
      u(S);
    });
  };
  return Cn(() => {
    if (!d) return;
    const y = new _(() => {
      requestAnimationFrame(() => b());
    });
    y.observe(d), b(), On(() => {
      y.disconnect();
    });
  }), Cn(() => {
    if (!h) return;
    const y = new _(() => {
      requestAnimationFrame(() => b());
    });
    y.observe(h), On(() => {
      y.disconnect();
    });
  }), Cn(V_(() => a, () => {
    b();
  })), (() => {
    var y = _Ig(), S = y.firstChild, k = d;
    typeof k == "function" ? zu(k, y) : d = y;
    var C = h;
    return typeof C == "function" ? zu(C, S) : h = S, xbe(S, Zy({ get style() {
      return { display: "flex", "justify-content": "flex-end", "justify-self": "flex-end", "flex-shrink": 0, position: "relative", ...n };
    } }, l, { class: r }), false, true), Le(S, Ee(Su, { get each() {
      return Array.isArray(e) ? e : [e];
    }, children: (T, I) => (() => {
      var A = bIg();
      return zu((P) => {
        P && (p[I()] = P);
      }, A), A.style.setProperty("flex-shrink", "0"), A.style.setProperty("height", "100%"), (o ? "none" : "opacity 0.1s ease-in-out") != null ? A.style.setProperty("transition", o ? "none" : "opacity 0.1s ease-in-out") : A.style.removeProperty("transition"), Le(A, T), xn((P) => {
        var M = c()[I()] ? 1 : 0, O = c()[I()] ? "auto" : "none", N = c()[I()] && s ? `${s}px` : void 0;
        return M !== P.e && ((P.e = M) != null ? A.style.setProperty("opacity", M) : A.style.removeProperty("opacity")), O !== P.t && ((P.t = O) != null ? A.style.setProperty("pointer-events", O) : A.style.removeProperty("pointer-events")), N !== P.a && ((P.a = N) != null ? A.style.setProperty("margin-left", N) : A.style.removeProperty("margin-left")), P;
      }, { e: void 0, t: void 0, a: void 0 }), A;
    })() })), xn((T) => Ea(y, { overflow: "hidden", display: "flex", "justify-content": "flex-end", "align-items": "center", position: "relative", ...i }, T)), y;
  })();
}
var _Ig, bIg, 