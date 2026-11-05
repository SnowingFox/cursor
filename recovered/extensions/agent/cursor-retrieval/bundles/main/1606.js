// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1606 range:185558..189609
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1606: (e2, a2, n2) => {
    "use strict";
    const { isBlobLike: t2, toUSVString: s2, makeIterator: o2 } = n2(5728), { kState: r2 } = n2(5899), { File: i2, FileLike: l, isFileLike: d } = n2(3322), { webidl: m } = n2(8005), { Blob: c, File: p } = n2(181), A = p ?? i2;
    class u {
      constructor(e3) {
        if (void 0 !== e3) throw m.errors.conversionFailed({ prefix: "FormData constructor", argument: "Argument 1", types: ["undefined"] });
        this[r2] = [];
      }
      append(e3, a3, n3 = void 0) {
        if (m.brandCheck(this, u), m.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), 3 === arguments.length && !t2(a3)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s3 = g(e3 = m.converters.USVString(e3), a3 = t2(a3) ? m.converters.Blob(a3, { strict: false }) : m.converters.USVString(a3), n3 = 3 === arguments.length ? m.converters.USVString(n3) : void 0);
        this[r2].push(s3);
      }
      delete(e3) {
        m.brandCheck(this, u), m.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), e3 = m.converters.USVString(e3), this[r2] = this[r2].filter((a3) => a3.name !== e3);
      }
      get(e3) {
        m.brandCheck(this, u), m.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), e3 = m.converters.USVString(e3);
        const a3 = this[r2].findIndex((a4) => a4.name === e3);
        return -1 === a3 ? null : this[r2][a3].value;
      }
      getAll(e3) {
        return m.brandCheck(this, u), m.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), e3 = m.converters.USVString(e3), this[r2].filter((a3) => a3.name === e3).map((e4) => e4.value);
      }
      has(e3) {
        return m.brandCheck(this, u), m.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), e3 = m.converters.USVString(e3), -1 !== this[r2].findIndex((a3) => a3.name === e3);
      }
      set(e3, a3, n3 = void 0) {
        if (m.brandCheck(this, u), m.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), 3 === arguments.length && !t2(a3)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e3 = m.converters.USVString(e3), a3 = t2(a3) ? m.converters.Blob(a3, { strict: false }) : m.converters.USVString(a3), n3 = 3 === arguments.length ? s2(n3) : void 0;
        const o3 = g(e3, a3, n3), i3 = this[r2].findIndex((a4) => a4.name === e3);
        -1 !== i3 ? this[r2] = [...this[r2].slice(0, i3), o3, ...this[r2].slice(i3 + 1).filter((a4) => a4.name !== e3)] : this[r2].push(o3);
      }
      entries() {
        return m.brandCheck(this, u), o2(() => this[r2].map((e3) => [e3.name, e3.value]), "FormData", "key+value");
      }
      keys() {
        return m.brandCheck(this, u), o2(() => this[r2].map((e3) => [e3.name, e3.value]), "FormData", "key");
      }
      values() {
        return m.brandCheck(this, u), o2(() => this[r2].map((e3) => [e3.name, e3.value]), "FormData", "value");
      }
      forEach(e3, a3 = globalThis) {
        if (m.brandCheck(this, u), m.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), "function" != typeof e3) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [n3, t3] of this) e3.apply(a3, [t3, n3, this]);
      }
    }
    function g(e3, a3, n3) {
      if (e3 = Buffer.from(e3).toString("utf8"), "string" == typeof a3) a3 = Buffer.from(a3).toString("utf8");
      else if (d(a3) || (a3 = a3 instanceof c ? new A([a3], "blob", { type: a3.type }) : new l(a3, "blob", { type: a3.type })), void 0 !== n3) {
        const e4 = { type: a3.type, lastModified: a3.lastModified };
        a3 = p && a3 instanceof p || a3 instanceof i2 ? new A([a3], n3, e4) : new l(a3, n3, e4);
      }
      return { name: e3, value: a3 };
    }
    u.prototype[Symbol.iterator] = u.prototype.entries, Object.defineProperties(u.prototype, { [Symbol.toStringTag]: { value: "FormData", configurable: true } }), e2.exports = { FormData: u };
  }