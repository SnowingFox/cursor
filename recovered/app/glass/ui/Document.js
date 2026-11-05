// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Document.js range:5555826..5561565
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.649Z
Yxr = L({ "Document.js"() {
  E(), Rxr(), gYo(), lR(), f8t(), g8t(), reh(), f4y(), dYo(), _Jd(), Pxr(), mJd(), $Yo = class JRb {
    constructor(e, n, i) {
      this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, Mwe, { value: Txr });
      let r = null;
      typeof n == "function" || Array.isArray(n) ? r = n : i === void 0 && n && (i = n, n = void 0);
      const s = Object.assign({ intAsBigInt: false, keepSourceTokens: false, logLevel: "warn", prettyErrors: true, strict: true, stringKeys: false, uniqueKeys: true, version: "1.2" }, i);
      this.options = s;
      let { version: o } = s;
      i?._directives ? (this.directives = i._directives.atDocument(), this.directives.yaml.explicit && (o = this.directives.yaml.version)) : this.directives = new m8t({ version: o }), this.setSchema(o, i), this.contents = e === void 0 ? null : this.createNode(e, r, i);
    }
    clone() {
      const e = Object.create(JRb.prototype, { [Mwe]: { value: Txr } });
      return e.commentBefore = this.commentBefore, e.comment = this.comment, e.errors = this.errors.slice(), e.warnings = this.warnings.slice(), e.options = Object.assign({}, this.options), this.directives && (e.directives = this.directives.clone()), e.schema = this.schema.clone(), e.contents = zj(this.contents) ? this.contents.clone(e.schema) : this.contents, this.range && (e.range = this.range.slice()), e;
    }
    add(e) {
      S_n(this.contents) && this.contents.add(e);
    }
    addIn(e, n) {
      S_n(this.contents) && this.contents.addIn(e, n);
    }
    createAlias(e, n) {
      if (!e.anchor) {
        const i = fJd(this);
        e.anchor = !n || i.has(n) ? vJd(n || "a", i) : n;
      }
      return new Axr(e.anchor);
    }
    createNode(e, n, i) {
      let r;
      if (typeof n == "function") e = n.call({ "": e }, "", e), r = n;
      else if (Array.isArray(n)) {
        const _ = (y) => typeof y == "number" || y instanceof String || y instanceof Number, b = n.filter(_).map(String);
        b.length > 0 && (n = n.concat(b)), r = n;
      } else i === void 0 && n && (i = n, n = void 0);
      const { aliasDuplicateObjects: s, anchorPrefix: o, flow: a, keepUndefined: l, onTagObj: c, tag: u } = i ?? {}, { onAnchor: d, setAnchors: h, sourceObjects: p } = Y6y(this, o || "a"), g = { aliasDuplicateObjects: s ?? true, keepUndefined: l ?? false, onAnchor: d, onTagObj: c, replacer: r, schema: this.schema, sourceObjects: p }, f = Aai(e, u, g);
      return a && qj(f) && (f.flow = true), h(), f;
    }
    createPair(e, n, i = {}) {
      const r = this.createNode(e, null, i), s = this.createNode(n, null, i);
      return new f_e(r, s);
    }
    delete(e) {
      return S_n(this.contents) ? this.contents.delete(e) : false;
    }
    deleteIn(e) {
      return v_n(e) ? this.contents == null ? false : (this.contents = null, true) : S_n(this.contents) ? this.contents.deleteIn(e) : false;
    }
    get(e, n) {
      return qj(this.contents) ? this.contents.get(e, n) : void 0;
    }
    getIn(e, n) {
      return v_n(e) ? !n && cL(this.contents) ? this.contents.value : this.contents : qj(this.contents) ? this.contents.getIn(e, n) : void 0;
    }
    has(e) {
      return qj(this.contents) ? this.contents.has(e) : false;
    }
    hasIn(e) {
      return v_n(e) ? this.contents !== void 0 : qj(this.contents) ? this.contents.hasIn(e) : false;
    }
    set(e, n) {
      this.contents == null ? this.contents = Mxr(this.schema, [e], n) : S_n(this.contents) && this.contents.set(e, n);
    }
    setIn(e, n) {
      v_n(e) ? this.contents = n : this.contents == null ? this.contents = Mxr(this.schema, Array.from(e), n) : S_n(this.contents) && this.contents.setIn(e, n);
    }
    setSchema(e, n = {}) {
      typeof e == "number" && (e = String(e));
      let i;
      switch (e) {
        case "1.1":
          this.directives ? this.directives.yaml.version = "1.1" : this.directives = new m8t({ version: "1.1" }), i = { resolveKnownTags: false, schema: "yaml-1.1" };
          break;
        case "1.2":
        case "next":
          this.directives ? this.directives.yaml.version = e : this.directives = new m8t({ version: e }), i = { resolveKnownTags: true, schema: "core" };
          break;
        case null:
          this.directives && delete this.directives, i = null;
          break;
        default: {
          const r = JSON.stringify(e);
          throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${r}`);
        }
      }
      if (n.schema instanceof Object) this.schema = n.schema;
      else if (i) this.schema = new ieh(Object.assign(i, n));
      else throw new Error("With a null YAML version, the { schema: Schema } option is required");
    }
    toJS({ json: e, jsonArg: n, mapAsMap: i, maxAliasCount: r, onAnchor: s, reviver: o } = {}) {
      const a = { anchors: /* @__PURE__ */ new Map(), doc: this, keep: !e, mapAsMap: i === true, mapKeyWarned: false, maxAliasCount: typeof r == "number" ? r : 100 }, l = ERe(this.contents, n ?? "", a);
      if (typeof s == "function") for (const { count: c, res: u } of a.anchors.values()) s(u, c);
      return typeof o == "function" ? f_n(o, { "": l }, "", l) : l;
    }
    toJSON(e, n) {
      return this.toJS({ json: true, jsonArg: e, mapAsMap: false, onAnchor: n });
    }
    toString(e = {}) {
      if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
      if ("indent" in e && (!Number.isInteger(e.indent) || Number(e.indent) <= 0)) {
        const n = JSON.stringify(e.indent);
        throw new Error(`"indent" option must be a positive integer, not ${n}`);
      }
      return g4y(this, e);
    }
  };
} }), HYo, k_n, seh, WYo, 