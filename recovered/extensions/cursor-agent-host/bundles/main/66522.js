// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 66522 range:10362213..10366231
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66522: (e, t, r) => {
    "use strict";
    const { isBlobLike: n, toUSVString: s, makeIterator: o } = r(98116), { kState: i } = r(77271), { File: a, FileLike: c, isFileLike: l } = r(18142), { webidl: u } = r(18193), { Blob: d, File: p } = r(20181), m = p ?? a;
    class h {
      constructor(e2) {
        if (void 0 !== e2) throw u.errors.conversionFailed({ prefix: "FormData constructor", argument: "Argument 1", types: ["undefined"] });
        this[i] = [];
      }
      append(e2, t2, r2 = void 0) {
        if (u.brandCheck(this, h), u.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), 3 === arguments.length && !n(t2)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        const s2 = f(e2 = u.converters.USVString(e2), t2 = n(t2) ? u.converters.Blob(t2, { strict: false }) : u.converters.USVString(t2), r2 = 3 === arguments.length ? u.converters.USVString(r2) : void 0);
        this[i].push(s2);
      }
      delete(e2) {
        u.brandCheck(this, h), u.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), e2 = u.converters.USVString(e2), this[i] = this[i].filter((t2) => t2.name !== e2);
      }
      get(e2) {
        u.brandCheck(this, h), u.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), e2 = u.converters.USVString(e2);
        const t2 = this[i].findIndex((t3) => t3.name === e2);
        return -1 === t2 ? null : this[i][t2].value;
      }
      getAll(e2) {
        return u.brandCheck(this, h), u.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), e2 = u.converters.USVString(e2), this[i].filter((t2) => t2.name === e2).map((e3) => e3.value);
      }
      has(e2) {
        return u.brandCheck(this, h), u.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), e2 = u.converters.USVString(e2), -1 !== this[i].findIndex((t2) => t2.name === e2);
      }
      set(e2, t2, r2 = void 0) {
        if (u.brandCheck(this, h), u.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), 3 === arguments.length && !n(t2)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        e2 = u.converters.USVString(e2), t2 = n(t2) ? u.converters.Blob(t2, { strict: false }) : u.converters.USVString(t2), r2 = 3 === arguments.length ? s(r2) : void 0;
        const o2 = f(e2, t2, r2), a2 = this[i].findIndex((t3) => t3.name === e2);
        -1 !== a2 ? this[i] = [...this[i].slice(0, a2), o2, ...this[i].slice(a2 + 1).filter((t3) => t3.name !== e2)] : this[i].push(o2);
      }
      entries() {
        return u.brandCheck(this, h), o(() => this[i].map((e2) => [e2.name, e2.value]), "FormData", "key+value");
      }
      keys() {
        return u.brandCheck(this, h), o(() => this[i].map((e2) => [e2.name, e2.value]), "FormData", "key");
      }
      values() {
        return u.brandCheck(this, h), o(() => this[i].map((e2) => [e2.name, e2.value]), "FormData", "value");
      }
      forEach(e2, t2 = globalThis) {
        if (u.brandCheck(this, h), u.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), "function" != typeof e2) throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [r2, n2] of this) e2.apply(t2, [n2, r2, this]);
      }
    }
    function f(e2, t2, r2) {
      if (e2 = Buffer.from(e2).toString("utf8"), "string" == typeof t2) t2 = Buffer.from(t2).toString("utf8");
      else if (l(t2) || (t2 = t2 instanceof d ? new m([t2], "blob", { type: t2.type }) : new c(t2, "blob", { type: t2.type })), void 0 !== r2) {
        const e3 = { type: t2.type, lastModified: t2.lastModified };
        t2 = p && t2 instanceof p || t2 instanceof a ? new m([t2], r2, e3) : new c(t2, r2, e3);
      }
      return { name: e2, value: t2 };
    }
    h.prototype[Symbol.iterator] = h.prototype.entries, Object.defineProperties(h.prototype, { [Symbol.toStringTag]: { value: "FormData", configurable: true } }), e.exports = { FormData: h };
  }