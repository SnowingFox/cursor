// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: YAMLMap.js range:5530685..5533078
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.162Z
_8t = L({ "YAMLMap.js"() {
  E(), RJd(), xJd(), gYo(), lR(), f8t(), DY(), Dwe = class extends mYo {
    static get tagName() {
      return "tag:yaml.org,2002:map";
    }
    constructor(t) {
      super(Ant, t), this.items = [];
    }
    static from(t, e, n) {
      const { keepUndefined: i, replacer: r } = n, s = new this(t), o = (a, l) => {
        if (typeof r == "function") l = r.call(e, a, l);
        else if (Array.isArray(r) && !r.includes(a)) return;
        (l !== void 0 || i) && s.items.push(kYo(a, l, n));
      };
      if (e instanceof Map) for (const [a, l] of e) o(a, l);
      else if (e && typeof e == "object") for (const a of Object.keys(e)) o(a, e[a]);
      return typeof t.sortMapEntries == "function" && s.items.sort(t.sortMapEntries), s;
    }
    add(t, e) {
      let n;
      dB(t) ? n = t : !t || typeof t != "object" || !("key" in t) ? n = new f_e(t, t?.value) : n = new f_e(t.key, t.value);
      const i = v8t(this.items, n.key), r = this.schema?.sortMapEntries;
      if (i) {
        if (!e) throw new Error(`Key ${n.key} already set`);
        cL(i.value) && pYo(n.value) ? i.value.value = n.value : i.value = n.value;
      } else if (r) {
        const s = this.items.findIndex((o) => r(n, o) < 0);
        s === -1 ? this.items.push(n) : this.items.splice(s, 0, n);
      } else this.items.push(n);
    }
    delete(t) {
      const e = v8t(this.items, t);
      return e ? this.items.splice(this.items.indexOf(e), 1).length > 0 : false;
    }
    get(t, e) {
      const i = v8t(this.items, t)?.value;
      return (!e && cL(i) ? i.value : i) ?? void 0;
    }
    has(t) {
      return !!v8t(this.items, t);
    }
    set(t, e) {
      this.add(new f_e(t, e), true);
    }
    toJSON(t, e, n) {
      const i = n ? new n() : e?.mapAsMap ? /* @__PURE__ */ new Map() : {};
      e?.onCreate && e.onCreate(i);
      for (const r of this.items) IJd(e, i, r);
      return i;
    }
    toString(t, e, n) {
      if (!t) return JSON.stringify(this);
      for (const i of this.items) if (!dB(i)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);
      return !t.allNullValues && this.hasAllNullValues(false) && (t = Object.assign({}, t, { allNullValues: true })), AJd(this, t, { blockItemPrefix: "", flowChars: { start: "{", end: "}" }, itemIndent: t.indent || "", onChompKeep: n, onComment: e });
    }
  };
} }), b8t, 