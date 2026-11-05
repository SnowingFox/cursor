// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Node.js range:5502627..5503889
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.828Z
hYo = L({ "Node.js"() {
  E(), _Jd(), lR(), g8t(), Ixr = class {
    constructor(t) {
      Object.defineProperty(this, Mwe, { value: t });
    }
    clone() {
      const t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      return this.range && (t.range = this.range.slice()), t;
    }
    toJS(t, { mapAsMap: e, maxAliasCount: n, onAnchor: i, reviver: r } = {}) {
      if (!h_n(t)) throw new TypeError("A document argument is required");
      const s = { anchors: /* @__PURE__ */ new Map(), doc: t, keep: true, mapAsMap: e === true, mapKeyWarned: false, maxAliasCount: typeof n == "number" ? n : 100 }, o = ERe(this, "", s);
      if (typeof i == "function") for (const { count: a, res: l } of s.anchors.values()) i(l, a);
      return typeof r == "function" ? f_n(r, { "": o }, "", o) : o;
    }
  };
} });
function xxr(t, e, n) {
  if (p8t(e)) {
    const i = e.resolve(t), r = n && i && n.get(i);
    return r ? r.count * r.aliasCount : 0;
  } else if (qj(e)) {
    let i = 0;
    for (const r of e.items) {
      const s = xxr(t, r, n);
      s > i && (i = s);
    }
    return i;
  } else if (dB(e)) {
    const i = xxr(t, e.key, n), r = xxr(t, e.value, n);
    return Math.max(i, r);
  }
  return 1;
}
var Axr, 