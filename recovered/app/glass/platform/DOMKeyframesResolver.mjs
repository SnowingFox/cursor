// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DOMKeyframesResolver.mjs range:35366269..35368870
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.083Z
// wrapper: Uf0 deps:9 [E, Xyv, oSv, df0, aFi, iXl, Df0, Bf0, dyv]
// declarations: jf0
// anchors: (none)
// group: third-party-build-mjs
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Uf0 = L({ "DOMKeyframesResolver.mjs"() {
  E(), Xyv(), oSv(), df0(), aFi(), iXl(), Df0(), Bf0(), dyv(), _Sv = class extends sRs {
    constructor(t, e, n, i, r) {
      super(t, e, n, i, r, true);
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, element: e, name: n } = this;
      if (!e || !e.current) return;
      super.readKeyframes();
      for (let c = 0; c < t.length; c++) {
        let u = t[c];
        if (typeof u == "string" && (u = u.trim(), jAs(u))) {
          const d = Fyv(u, e.current);
          d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = u);
        }
      }
      if (this.resolveNoneKeyframes(), !gXl.has(n) || t.length !== 2) return;
      const [i, r] = t, s = TXl(i), o = TXl(r), a = _bv(i), l = _bv(r);
      if (a !== l && jut[n]) {
        this.needsMeasurement = true;
        return;
      }
      if (s !== o) if (nXl(s) && nXl(o)) for (let c = 0; c < t.length; c++) {
        const u = t[c];
        typeof u == "string" && (t[c] = parseFloat(u));
      }
      else jut[n] && (this.needsMeasurement = true);
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: t, name: e } = this, n = [];
      for (let i = 0; i < t.length; i++) (t[i] === null || Mf0(t[i])) && n.push(i);
      n.length && Ff0(t, n, e);
    }
    measureInitialState() {
      const { element: t, unresolvedKeyframes: e, name: n } = this;
      if (!t || !t.current) return;
      n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = jut[n](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
      const i = e[e.length - 1];
      i !== void 0 && t.getValue(n, i).jump(i, false);
    }
    measureEndState() {
      const { element: t, name: e, unresolvedKeyframes: n } = this;
      if (!t || !t.current) return;
      const i = t.getValue(e);
      i && i.jump(this.measuredOrigin, false);
      const r = n.length - 1, s = n[r];
      n[r] = jut[e](t.measureViewportBox(), window.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), this.removedTransforms?.length && this.removedTransforms.forEach(([o, a]) => {
        t.getValue(o).set(a);
      }), this.resolveNoneKeyframes();
    }
  };
} });
function jf0(t, e, n) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let i = document;
    e && (i = e.current);
    const r = n?.[t] ?? i.querySelectorAll(t);
    return r ? Array.from(r) : [];
  }
  return Array.from(t).filter((i) => i != null);
}
