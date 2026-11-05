// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: YAMLSeq.js range:5533525..5535219
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.163Z
y8t = L({ "YAMLSeq.js"() {
  E(), Pxr(), RJd(), gYo(), lR(), DY(), g8t(), bSt = class extends mYo {
    static get tagName() {
      return "tag:yaml.org,2002:seq";
    }
    constructor(t) {
      super(h8t, t), this.items = [];
    }
    add(t) {
      this.items.push(t);
    }
    delete(t) {
      const e = jxr(t);
      return typeof e != "number" ? false : this.items.splice(e, 1).length > 0;
    }
    get(t, e) {
      const n = jxr(t);
      if (typeof n != "number") return;
      const i = this.items[n];
      return !e && cL(i) ? i.value : i;
    }
    has(t) {
      const e = jxr(t);
      return typeof e == "number" && e < this.items.length;
    }
    set(t, e) {
      const n = jxr(t);
      if (typeof n != "number") throw new Error(`Expected a valid index, not ${t}.`);
      const i = this.items[n];
      cL(i) && pYo(e) ? i.value = e : this.items[n] = e;
    }
    toJSON(t, e) {
      const n = [];
      e?.onCreate && e.onCreate(n);
      let i = 0;
      for (const r of this.items) n.push(ERe(r, String(i++), e));
      return n;
    }
    toString(t, e, n) {
      return t ? AJd(this, t, { blockItemPrefix: "- ", flowChars: { start: "[", end: "]" }, itemIndent: (t.indent || "") + "  ", onChompKeep: n, onComment: e }) : JSON.stringify(this);
    }
    static from(t, e, n) {
      const { replacer: i } = n, r = new this(t);
      if (e && Symbol.iterator in Object(e)) {
        let s = 0;
        for (let o of e) {
          if (typeof i == "function") {
            const a = e instanceof Set ? o : String(s++);
            o = i.call(e, a, o);
          }
          r.items.push(Aai(o, void 0, n));
        }
      }
      return r;
    }
  };
} }), S8t, 