// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6522 range:3674337..3678385
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6522: (t2, e2, r2) => {
    "use strict";
    const { isBlobLike: n2, toUSVString: s2, makeIterator: i2 } = r2(8116), { kState: o2 } = r2(7271), { File: a, FileLike: u, isFileLike: c } = r2(8142), { webidl: l } = r2(8193), { Blob: m, File: d } = r2(181), f = d ?? a;
    class p {
      constructor(t3) {
        if (void 0 !== t3) throw l.errors.conversionFailed({ prefix: "FormData constructor", argument: "Argument 1", types: ["undefined"] });
        this[o2] = [];
      }
      append(t3, e3, r3 = void 0) {
        if (l.brandCheck(this, p), l.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), 3 === arguments.length && !n2(e3)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s3 = h(t3 = l.converters.USVString(t3), e3 = n2(e3) ? l.converters.Blob(e3, { strict: false }) : l.converters.USVString(e3), r3 = 3 === arguments.length ? l.converters.USVString(r3) : void 0);
        this[o2].push(s3);
      }
      delete(t3) {
        l.brandCheck(this, p), l.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), t3 = l.converters.USVString(t3), this[o2] = this[o2].filter((e3) => e3.name !== t3);
      }
      get(t3) {
        l.brandCheck(this, p), l.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), t3 = l.converters.USVString(t3);
        const e3 = this[o2].findIndex((e4) => e4.name === t3);
        return -1 === e3 ? null : this[o2][e3].value;
      }
      getAll(t3) {
        return l.brandCheck(this, p), l.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), t3 = l.converters.USVString(t3), this[o2].filter((e3) => e3.name === t3).map((t4) => t4.value);
      }
      has(t3) {
        return l.brandCheck(this, p), l.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), t3 = l.converters.USVString(t3), -1 !== this[o2].findIndex((e3) => e3.name === t3);
      }
      set(t3, e3, r3 = void 0) {
        if (l.brandCheck(this, p), l.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), 3 === arguments.length && !n2(e3)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        t3 = l.converters.USVString(t3), e3 = n2(e3) ? l.converters.Blob(e3, { strict: false }) : l.converters.USVString(e3), r3 = 3 === arguments.length ? s2(r3) : void 0;
        const i3 = h(t3, e3, r3), a2 = this[o2].findIndex((e4) => e4.name === t3);
        -1 !== a2 ? this[o2] = [...this[o2].slice(0, a2), i3, ...this[o2].slice(a2 + 1).filter((e4) => e4.name !== t3)] : this[o2].push(i3);
      }
      entries() {
        return l.brandCheck(this, p), i2(() => this[o2].map((t3) => [t3.name, t3.value]), "FormData", "key+value");
      }
      keys() {
        return l.brandCheck(this, p), i2(() => this[o2].map((t3) => [t3.name, t3.value]), "FormData", "key");
      }
      values() {
        return l.brandCheck(this, p), i2(() => this[o2].map((t3) => [t3.name, t3.value]), "FormData", "value");
      }
      forEach(t3, e3 = globalThis) {
        if (l.brandCheck(this, p), l.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), "function" != typeof t3) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [r3, n3] of this) t3.apply(e3, [n3, r3, this]);
      }
    }
    function h(t3, e3, r3) {
      if (t3 = Buffer.from(t3).toString("utf8"), "string" == typeof e3) e3 = Buffer.from(e3).toString("utf8");
      else if (c(e3) || (e3 = e3 instanceof m ? new f([e3], "blob", { type: e3.type }) : new u(e3, "blob", { type: e3.type })), void 0 !== r3) {
        const t4 = { type: e3.type, lastModified: e3.lastModified };
        e3 = d && e3 instanceof d || e3 instanceof a ? new f([e3], r3, t4) : new u(e3, r3, t4);
      }
      return { name: t3, value: e3 };
    }
    p.prototype[Symbol.iterator] = p.prototype.entries, Object.defineProperties(p.prototype, { [Symbol.toStringTag]: { value: "FormData", configurable: true } }), t2.exports = { FormData: p };
  }