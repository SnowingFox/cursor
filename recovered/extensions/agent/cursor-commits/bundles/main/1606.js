// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1606 range:170696..174747
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1606: (e2, n2, a2) => {
    "use strict";
    const { isBlobLike: t2, toUSVString: s2, makeIterator: o2 } = a2(5728), { kState: r2 } = a2(5899), { File: i2, FileLike: A, isFileLike: l } = a2(3322), { webidl: c } = a2(8005), { Blob: m, File: d } = a2(181), g = d ?? i2;
    class u {
      constructor(e3) {
        if (void 0 !== e3) throw c.errors.conversionFailed({ prefix: "FormData constructor", argument: "Argument 1", types: ["undefined"] });
        this[r2] = [];
      }
      append(e3, n3, a3 = void 0) {
        if (c.brandCheck(this, u), c.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), 3 === arguments.length && !t2(n3)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s3 = E(e3 = c.converters.USVString(e3), n3 = t2(n3) ? c.converters.Blob(n3, { strict: false }) : c.converters.USVString(n3), a3 = 3 === arguments.length ? c.converters.USVString(a3) : void 0);
        this[r2].push(s3);
      }
      delete(e3) {
        c.brandCheck(this, u), c.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), e3 = c.converters.USVString(e3), this[r2] = this[r2].filter((n3) => n3.name !== e3);
      }
      get(e3) {
        c.brandCheck(this, u), c.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), e3 = c.converters.USVString(e3);
        const n3 = this[r2].findIndex((n4) => n4.name === e3);
        return -1 === n3 ? null : this[r2][n3].value;
      }
      getAll(e3) {
        return c.brandCheck(this, u), c.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), e3 = c.converters.USVString(e3), this[r2].filter((n3) => n3.name === e3).map((e4) => e4.value);
      }
      has(e3) {
        return c.brandCheck(this, u), c.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), e3 = c.converters.USVString(e3), -1 !== this[r2].findIndex((n3) => n3.name === e3);
      }
      set(e3, n3, a3 = void 0) {
        if (c.brandCheck(this, u), c.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), 3 === arguments.length && !t2(n3)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e3 = c.converters.USVString(e3), n3 = t2(n3) ? c.converters.Blob(n3, { strict: false }) : c.converters.USVString(n3), a3 = 3 === arguments.length ? s2(a3) : void 0;
        const o3 = E(e3, n3, a3), i3 = this[r2].findIndex((n4) => n4.name === e3);
        -1 !== i3 ? this[r2] = [...this[r2].slice(0, i3), o3, ...this[r2].slice(i3 + 1).filter((n4) => n4.name !== e3)] : this[r2].push(o3);
      }
      entries() {
        return c.brandCheck(this, u), o2(() => this[r2].map((e3) => [e3.name, e3.value]), "FormData", "key+value");
      }
      keys() {
        return c.brandCheck(this, u), o2(() => this[r2].map((e3) => [e3.name, e3.value]), "FormData", "key");
      }
      values() {
        return c.brandCheck(this, u), o2(() => this[r2].map((e3) => [e3.name, e3.value]), "FormData", "value");
      }
      forEach(e3, n3 = globalThis) {
        if (c.brandCheck(this, u), c.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), "function" != typeof e3) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [a3, t3] of this) e3.apply(n3, [t3, a3, this]);
      }
    }
    function E(e3, n3, a3) {
      if (e3 = Buffer.from(e3).toString("utf8"), "string" == typeof n3) n3 = Buffer.from(n3).toString("utf8");
      else if (l(n3) || (n3 = n3 instanceof m ? new g([n3], "blob", { type: n3.type }) : new A(n3, "blob", { type: n3.type })), void 0 !== a3) {
        const e4 = { type: n3.type, lastModified: n3.lastModified };
        n3 = d && n3 instanceof d || n3 instanceof i2 ? new g([n3], a3, e4) : new A(n3, a3, e4);
      }
      return { name: e3, value: n3 };
    }
    u.prototype[Symbol.iterator] = u.prototype.entries, Object.defineProperties(u.prototype, { [Symbol.toStringTag]: { value: "FormData", configurable: true } }), e2.exports = { FormData: u };
  }