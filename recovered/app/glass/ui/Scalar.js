// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Scalar.js range:5505791..5507764
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.961Z
DY = L({ "Scalar.js"() {
  E(), lR(), hYo(), g8t(), pYo = (t) => !t || typeof t != "function" && typeof t != "object", tC = class extends Ixr {
    constructor(t) {
      super(W5e), this.value = t;
    }
    toJSON(t, e) {
      return e?.keep ? this.value : ERe(this.value, t, e);
    }
    toString() {
      return String(this.value);
    }
  }, tC.BLOCK_FOLDED = "BLOCK_FOLDED", tC.BLOCK_LITERAL = "BLOCK_LITERAL", tC.PLAIN = "PLAIN", tC.QUOTE_DOUBLE = "QUOTE_DOUBLE", tC.QUOTE_SINGLE = "QUOTE_SINGLE";
} });
function X6y(t, e, n) {
  if (e) {
    const i = n.filter((s) => s.tag === e), r = i.find((s) => !s.format) ?? i[0];
    if (!r) throw new Error(`Tag ${e} not found`);
    return r;
  }
  return n.find((i) => i.identify?.(t) && !i.format);
}
function Aai(t, e, n) {
  if (h_n(t) && (t = t.contents), zj(t)) return t;
  if (dB(t)) {
    const d = n.schema[Ant].createNode?.(n.schema, null, n);
    return d.items.push(t), d;
  }
  (t instanceof String || t instanceof Number || t instanceof Boolean || typeof BigInt < "u" && t instanceof BigInt) && (t = t.valueOf());
  const { aliasDuplicateObjects: i, onAnchor: r, onTagObj: s, schema: o, sourceObjects: a } = n;
  let l;
  if (i && t && typeof t == "object") {
    if (l = a.get(t), l) return l.anchor ?? (l.anchor = r(t)), new Axr(l.anchor);
    l = { anchor: null, node: null }, a.set(t, l);
  }
  e?.startsWith("!!") && (e = bJd + e.slice(2));
  let c = X6y(t, e, o.tags);
  if (!c) {
    if (t && typeof t.toJSON == "function" && (t = t.toJSON()), !t || typeof t != "object") {
      const d = new tC(t);
      return l && (l.node = d), d;
    }
    c = t instanceof Map ? o[Ant] : Symbol.iterator in Object(t) ? o[h8t] : o[Ant];
  }
  s && (s(c), delete n.onTagObj);
  const u = c?.createNode ? c.createNode(n.schema, t, n) : typeof c?.nodeClass?.from == "function" ? c.nodeClass.from(n.schema, t, n) : new tC(t);
  return e ? u.tag = e : c.default || (u.tag = c.tag), l && (l.node = u), u;
}
var bJd, 