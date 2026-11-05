// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1606 range:176709..180740
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1606: (e2, t2, A2) => {
    "use strict";
    const { isBlobLike: n2, toUSVString: r2, makeIterator: o2 } = A2(5728), { kState: s } = A2(5899), { File: i, FileLike: a, isFileLike: c } = A2(3322), { webidl: l } = A2(8005), { Blob: u, File: g } = A2(181), E = g ?? i;
    class h {
      constructor(e3) {
        if (void 0 !== e3) throw l.errors.conversionFailed({ prefix: "FormData constructor", argument: "Argument 1", types: ["undefined"] });
        this[s] = [];
      }
      append(e3, t3, A3 = void 0) {
        if (l.brandCheck(this, h), l.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), 3 === arguments.length && !n2(t3)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const r3 = d(e3 = l.converters.USVString(e3), t3 = n2(t3) ? l.converters.Blob(t3, { strict: false }) : l.converters.USVString(t3), A3 = 3 === arguments.length ? l.converters.USVString(A3) : void 0);
        this[s].push(r3);
      }
      delete(e3) {
        l.brandCheck(this, h), l.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), e3 = l.converters.USVString(e3), this[s] = this[s].filter((t3) => t3.name !== e3);
      }
      get(e3) {
        l.brandCheck(this, h), l.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), e3 = l.converters.USVString(e3);
        const t3 = this[s].findIndex((t4) => t4.name === e3);
        return -1 === t3 ? null : this[s][t3].value;
      }
      getAll(e3) {
        return l.brandCheck(this, h), l.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), e3 = l.converters.USVString(e3), this[s].filter((t3) => t3.name === e3).map((e4) => e4.value);
      }
      has(e3) {
        return l.brandCheck(this, h), l.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), e3 = l.converters.USVString(e3), -1 !== this[s].findIndex((t3) => t3.name === e3);
      }
      set(e3, t3, A3 = void 0) {
        if (l.brandCheck(this, h), l.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), 3 === arguments.length && !n2(t3)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e3 = l.converters.USVString(e3), t3 = n2(t3) ? l.converters.Blob(t3, { strict: false }) : l.converters.USVString(t3), A3 = 3 === arguments.length ? r2(A3) : void 0;
        const o3 = d(e3, t3, A3), i2 = this[s].findIndex((t4) => t4.name === e3);
        -1 !== i2 ? this[s] = [...this[s].slice(0, i2), o3, ...this[s].slice(i2 + 1).filter((t4) => t4.name !== e3)] : this[s].push(o3);
      }
      entries() {
        return l.brandCheck(this, h), o2(() => this[s].map((e3) => [e3.name, e3.value]), "FormData", "key+value");
      }
      keys() {
        return l.brandCheck(this, h), o2(() => this[s].map((e3) => [e3.name, e3.value]), "FormData", "key");
      }
      values() {
        return l.brandCheck(this, h), o2(() => this[s].map((e3) => [e3.name, e3.value]), "FormData", "value");
      }
      forEach(e3, t3 = globalThis) {
        if (l.brandCheck(this, h), l.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), "function" != typeof e3) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [A3, n3] of this) e3.apply(t3, [n3, A3, this]);
      }
    }
    function d(e3, t3, A3) {
      if (e3 = Buffer.from(e3).toString("utf8"), "string" == typeof t3) t3 = Buffer.from(t3).toString("utf8");
      else if (c(t3) || (t3 = t3 instanceof u ? new E([t3], "blob", { type: t3.type }) : new a(t3, "blob", { type: t3.type })), void 0 !== A3) {
        const e4 = { type: t3.type, lastModified: t3.lastModified };
        t3 = g && t3 instanceof g || t3 instanceof i ? new E([t3], A3, e4) : new a(t3, A3, e4);
      }
      return { name: e3, value: t3 };
    }
    h.prototype[Symbol.iterator] = h.prototype.entries, Object.defineProperties(h.prototype, { [Symbol.toStringTag]: { value: "FormData", configurable: true } }), e2.exports = { FormData: h };
  }