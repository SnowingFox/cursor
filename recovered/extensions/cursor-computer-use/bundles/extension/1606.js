// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1606 range:174814..178845
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1606: (e2, n2, t2) => {
    "use strict";
    const { isBlobLike: a2, toUSVString: s2, makeIterator: o2 } = t2(5728), { kState: r } = t2(5899), { File: i, FileLike: A, isFileLike: c } = t2(3322), { webidl: l } = t2(8005), { Blob: d, File: m } = t2(181), u = m ?? i;
    class g {
      constructor(e3) {
        if (void 0 !== e3) throw l.errors.conversionFailed({ prefix: "FormData constructor", argument: "Argument 1", types: ["undefined"] });
        this[r] = [];
      }
      append(e3, n3, t3 = void 0) {
        if (l.brandCheck(this, g), l.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), 3 === arguments.length && !a2(n3)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s3 = p(e3 = l.converters.USVString(e3), n3 = a2(n3) ? l.converters.Blob(n3, { strict: false }) : l.converters.USVString(n3), t3 = 3 === arguments.length ? l.converters.USVString(t3) : void 0);
        this[r].push(s3);
      }
      delete(e3) {
        l.brandCheck(this, g), l.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), e3 = l.converters.USVString(e3), this[r] = this[r].filter((n3) => n3.name !== e3);
      }
      get(e3) {
        l.brandCheck(this, g), l.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), e3 = l.converters.USVString(e3);
        const n3 = this[r].findIndex((n4) => n4.name === e3);
        return -1 === n3 ? null : this[r][n3].value;
      }
      getAll(e3) {
        return l.brandCheck(this, g), l.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), e3 = l.converters.USVString(e3), this[r].filter((n3) => n3.name === e3).map((e4) => e4.value);
      }
      has(e3) {
        return l.brandCheck(this, g), l.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), e3 = l.converters.USVString(e3), -1 !== this[r].findIndex((n3) => n3.name === e3);
      }
      set(e3, n3, t3 = void 0) {
        if (l.brandCheck(this, g), l.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), 3 === arguments.length && !a2(n3)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e3 = l.converters.USVString(e3), n3 = a2(n3) ? l.converters.Blob(n3, { strict: false }) : l.converters.USVString(n3), t3 = 3 === arguments.length ? s2(t3) : void 0;
        const o3 = p(e3, n3, t3), i2 = this[r].findIndex((n4) => n4.name === e3);
        -1 !== i2 ? this[r] = [...this[r].slice(0, i2), o3, ...this[r].slice(i2 + 1).filter((n4) => n4.name !== e3)] : this[r].push(o3);
      }
      entries() {
        return l.brandCheck(this, g), o2(() => this[r].map((e3) => [e3.name, e3.value]), "FormData", "key+value");
      }
      keys() {
        return l.brandCheck(this, g), o2(() => this[r].map((e3) => [e3.name, e3.value]), "FormData", "key");
      }
      values() {
        return l.brandCheck(this, g), o2(() => this[r].map((e3) => [e3.name, e3.value]), "FormData", "value");
      }
      forEach(e3, n3 = globalThis) {
        if (l.brandCheck(this, g), l.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), "function" != typeof e3) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [t3, a3] of this) e3.apply(n3, [a3, t3, this]);
      }
    }
    function p(e3, n3, t3) {
      if (e3 = Buffer.from(e3).toString("utf8"), "string" == typeof n3) n3 = Buffer.from(n3).toString("utf8");
      else if (c(n3) || (n3 = n3 instanceof d ? new u([n3], "blob", { type: n3.type }) : new A(n3, "blob", { type: n3.type })), void 0 !== t3) {
        const e4 = { type: n3.type, lastModified: n3.lastModified };
        n3 = m && n3 instanceof m || n3 instanceof i ? new u([n3], t3, e4) : new A(n3, t3, e4);
      }
      return { name: e3, value: n3 };
    }
    g.prototype[Symbol.iterator] = g.prototype.entries, Object.defineProperties(g.prototype, { [Symbol.toStringTag]: { value: "FormData", configurable: true } }), e2.exports = { FormData: g };
  }