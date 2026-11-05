// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1606 range:170623..174654
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1606: (e2, A2, t2) => {
    "use strict";
    const { isBlobLike: n2, toUSVString: r2, makeIterator: o2 } = t2(5728), { kState: s } = t2(5899), { File: a, FileLike: i, isFileLike: c } = t2(3322), { webidl: l } = t2(8005), { Blob: g, File: E } = t2(181), u = E ?? a;
    class d {
      constructor(e3) {
        if (void 0 !== e3) throw l.errors.conversionFailed({ prefix: "FormData constructor", argument: "Argument 1", types: ["undefined"] });
        this[s] = [];
      }
      append(e3, A3, t3 = void 0) {
        if (l.brandCheck(this, d), l.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), 3 === arguments.length && !n2(A3)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const r3 = I(e3 = l.converters.USVString(e3), A3 = n2(A3) ? l.converters.Blob(A3, { strict: false }) : l.converters.USVString(A3), t3 = 3 === arguments.length ? l.converters.USVString(t3) : void 0);
        this[s].push(r3);
      }
      delete(e3) {
        l.brandCheck(this, d), l.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), e3 = l.converters.USVString(e3), this[s] = this[s].filter((A3) => A3.name !== e3);
      }
      get(e3) {
        l.brandCheck(this, d), l.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), e3 = l.converters.USVString(e3);
        const A3 = this[s].findIndex((A4) => A4.name === e3);
        return -1 === A3 ? null : this[s][A3].value;
      }
      getAll(e3) {
        return l.brandCheck(this, d), l.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), e3 = l.converters.USVString(e3), this[s].filter((A3) => A3.name === e3).map((e4) => e4.value);
      }
      has(e3) {
        return l.brandCheck(this, d), l.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), e3 = l.converters.USVString(e3), -1 !== this[s].findIndex((A3) => A3.name === e3);
      }
      set(e3, A3, t3 = void 0) {
        if (l.brandCheck(this, d), l.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), 3 === arguments.length && !n2(A3)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e3 = l.converters.USVString(e3), A3 = n2(A3) ? l.converters.Blob(A3, { strict: false }) : l.converters.USVString(A3), t3 = 3 === arguments.length ? r2(t3) : void 0;
        const o3 = I(e3, A3, t3), a2 = this[s].findIndex((A4) => A4.name === e3);
        -1 !== a2 ? this[s] = [...this[s].slice(0, a2), o3, ...this[s].slice(a2 + 1).filter((A4) => A4.name !== e3)] : this[s].push(o3);
      }
      entries() {
        return l.brandCheck(this, d), o2(() => this[s].map((e3) => [e3.name, e3.value]), "FormData", "key+value");
      }
      keys() {
        return l.brandCheck(this, d), o2(() => this[s].map((e3) => [e3.name, e3.value]), "FormData", "key");
      }
      values() {
        return l.brandCheck(this, d), o2(() => this[s].map((e3) => [e3.name, e3.value]), "FormData", "value");
      }
      forEach(e3, A3 = globalThis) {
        if (l.brandCheck(this, d), l.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), "function" != typeof e3) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [t3, n3] of this) e3.apply(A3, [n3, t3, this]);
      }
    }
    function I(e3, A3, t3) {
      if (e3 = Buffer.from(e3).toString("utf8"), "string" == typeof A3) A3 = Buffer.from(A3).toString("utf8");
      else if (c(A3) || (A3 = A3 instanceof g ? new u([A3], "blob", { type: A3.type }) : new i(A3, "blob", { type: A3.type })), void 0 !== t3) {
        const e4 = { type: A3.type, lastModified: A3.lastModified };
        A3 = E && A3 instanceof E || A3 instanceof a ? new u([A3], t3, e4) : new i(A3, t3, e4);
      }
      return { name: e3, value: A3 };
    }
    d.prototype[Symbol.iterator] = d.prototype.entries, Object.defineProperties(d.prototype, { [Symbol.toStringTag]: { value: "FormData", configurable: true } }), e2.exports = { FormData: d };
  }