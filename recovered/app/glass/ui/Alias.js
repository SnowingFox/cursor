// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Alias.js range:5503889..5505791
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.484Z
Rxr = L({ "Alias.js"() {
  E(), dYo(), Exr(), lR(), hYo(), g8t(), Axr = class extends Ixr {
    constructor(t) {
      super(Cxr), this.source = t, Object.defineProperty(this, "tag", { set() {
        throw new Error("Alias nodes cannot have tags");
      } });
    }
    resolve(t, e) {
      if (e?.maxAliasCount === 0) throw new ReferenceError("Alias resolution is disabled");
      let n;
      e?.aliasResolveCache ? n = e.aliasResolveCache : (n = [], p_n(t, { Node: (r, s) => {
        (p8t(s) || lYo(s)) && n.push(s);
      } }), e && (e.aliasResolveCache = n));
      let i;
      for (const r of n) {
        if (r === this) break;
        r.anchor === this.source && (i = r);
      }
      return i;
    }
    toJSON(t, e) {
      if (!e) return { source: this.source };
      const { anchors: n, doc: i, maxAliasCount: r } = e, s = this.resolve(i, e);
      if (!s) {
        const a = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new ReferenceError(a);
      }
      let o = n.get(s);
      if (o || (ERe(s, null, e), o = n.get(s)), o?.res === void 0) {
        const a = "This should not happen: Alias anchor was not resolved?";
        throw new ReferenceError(a);
      }
      if (r >= 0 && (o.count += 1, o.aliasCount === 0 && (o.aliasCount = xxr(i, s, n)), o.count * o.aliasCount > r)) {
        const a = "Excessive alias count indicates a resource exhaustion attack";
        throw new ReferenceError(a);
      }
      return o.res;
    }
    toString(t, e, n) {
      const i = `*${this.source}`;
      if (t) {
        if (gJd(this.source), t.options.verifyAliasOrder && !t.anchors.has(this.source)) {
          const r = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
          throw new Error(r);
        }
        if (t.implicitKey) return `${i} `;
      }
      return i;
    }
  };
} }), pYo, tC, 