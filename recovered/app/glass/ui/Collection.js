// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Collection.js range:5508359..5510600
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.535Z
gYo = L({ "Collection.js"() {
  E(), Pxr(), lR(), hYo(), v_n = (t) => t == null || typeof t == "object" && !!t[Symbol.iterator]().next().done, mYo = class extends Ixr {
    constructor(t, e) {
      super(t), Object.defineProperty(this, "schema", { value: e, configurable: true, enumerable: false, writable: true });
    }
    clone(t) {
      const e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      return t && (e.schema = t), e.items = e.items.map((n) => zj(n) || dB(n) ? n.clone(t) : n), this.range && (e.range = this.range.slice()), e;
    }
    addIn(t, e) {
      if (v_n(t)) this.add(e);
      else {
        const [n, ...i] = t, r = this.get(n, true);
        if (qj(r)) r.addIn(i, e);
        else if (r === void 0 && this.schema) this.set(n, Mxr(this.schema, i, e));
        else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
      }
    }
    deleteIn(t) {
      const [e, ...n] = t;
      if (n.length === 0) return this.delete(e);
      const i = this.get(e, true);
      if (qj(i)) return i.deleteIn(n);
      throw new Error(`Expected YAML collection at ${e}. Remaining path: ${n}`);
    }
    getIn(t, e) {
      const [n, ...i] = t, r = this.get(n, true);
      return i.length === 0 ? !e && cL(r) ? r.value : r : qj(r) ? r.getIn(i, e) : void 0;
    }
    hasAllNullValues(t) {
      return this.items.every((e) => {
        if (!dB(e)) return false;
        const n = e.value;
        return n == null || t && cL(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
      });
    }
    hasIn(t) {
      const [e, ...n] = t;
      if (n.length === 0) return this.has(e);
      const i = this.get(e, true);
      return qj(i) ? i.hasIn(n) : false;
    }
    setIn(t, e) {
      const [n, ...i] = t;
      if (i.length === 0) this.set(n, e);
      else {
        const r = this.get(n, true);
        if (qj(r)) r.setIn(i, e);
        else if (r === void 0 && this.schema) this.set(n, Mxr(this.schema, i, e));
        else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
      }
    }
  };
} });
function Rnt(t, e) {
  return /^\n+$/.test(t) ? t.substring(1) : e ? t.replace(/^(?! *$)/gm, e) : t;
}
var yJd, _St, 