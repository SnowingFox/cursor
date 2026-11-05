// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 41445 range:230273..234132
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41445: (A, e, t) => {
  "use strict";
  const { isBlobLike: r, iteratorMixin: s } = t(48215), { kState: o } = t(15978), { kEnumerableProperty: n } = t(55201), { FileLike: i, isFileLike: a } = t(90165), { webidl: Q } = t(43290), { File: g } = t(4573), E = t(57975), B = globalThis.File ?? g;
  class c {
    constructor(A2) {
      if (Q.util.markAsUncloneable(this), void 0 !== A2) throw Q.errors.conversionFailed({ prefix: "FormData constructor", argument: "Argument 1", types: ["undefined"] });
      this[o] = [];
    }
    append(A2, e2, t2 = void 0) {
      Q.brandCheck(this, c);
      const s2 = "FormData.append";
      if (Q.argumentLengthCheck(arguments, 2, s2), 3 === arguments.length && !r(e2)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
      const n2 = I(A2 = Q.converters.USVString(A2, s2, "name"), e2 = r(e2) ? Q.converters.Blob(e2, s2, "value", { strict: false }) : Q.converters.USVString(e2, s2, "value"), t2 = 3 === arguments.length ? Q.converters.USVString(t2, s2, "filename") : void 0);
      this[o].push(n2);
    }
    delete(A2) {
      Q.brandCheck(this, c);
      const e2 = "FormData.delete";
      Q.argumentLengthCheck(arguments, 1, e2), A2 = Q.converters.USVString(A2, e2, "name"), this[o] = this[o].filter((e3) => e3.name !== A2);
    }
    get(A2) {
      Q.brandCheck(this, c);
      const e2 = "FormData.get";
      Q.argumentLengthCheck(arguments, 1, e2), A2 = Q.converters.USVString(A2, e2, "name");
      const t2 = this[o].findIndex((e3) => e3.name === A2);
      return -1 === t2 ? null : this[o][t2].value;
    }
    getAll(A2) {
      Q.brandCheck(this, c);
      const e2 = "FormData.getAll";
      return Q.argumentLengthCheck(arguments, 1, e2), A2 = Q.converters.USVString(A2, e2, "name"), this[o].filter((e3) => e3.name === A2).map((A3) => A3.value);
    }
    has(A2) {
      Q.brandCheck(this, c);
      const e2 = "FormData.has";
      return Q.argumentLengthCheck(arguments, 1, e2), A2 = Q.converters.USVString(A2, e2, "name"), -1 !== this[o].findIndex((e3) => e3.name === A2);
    }
    set(A2, e2, t2 = void 0) {
      Q.brandCheck(this, c);
      const s2 = "FormData.set";
      if (Q.argumentLengthCheck(arguments, 2, s2), 3 === arguments.length && !r(e2)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
      A2 = Q.converters.USVString(A2, s2, "name"), e2 = r(e2) ? Q.converters.Blob(e2, s2, "name", { strict: false }) : Q.converters.USVString(e2, s2, "name"), t2 = 3 === arguments.length ? Q.converters.USVString(t2, s2, "name") : void 0;
      const n2 = I(A2, e2, t2), i2 = this[o].findIndex((e3) => e3.name === A2);
      -1 !== i2 ? this[o] = [...this[o].slice(0, i2), n2, ...this[o].slice(i2 + 1).filter((e3) => e3.name !== A2)] : this[o].push(n2);
    }
    [E.inspect.custom](A2, e2) {
      const t2 = this[o].reduce((A3, e3) => (A3[e3.name] ? Array.isArray(A3[e3.name]) ? A3[e3.name].push(e3.value) : A3[e3.name] = [A3[e3.name], e3.value] : A3[e3.name] = e3.value, A3), { __proto__: null });
      e2.depth ??= A2, e2.colors ??= true;
      const r2 = E.formatWithOptions(e2, t2);
      return `FormData ${r2.slice(r2.indexOf("]") + 2)}`;
    }
  }
  function I(A2, e2, t2) {
    if ("string" == typeof e2) ;
    else if (a(e2) || (e2 = e2 instanceof Blob ? new B([e2], "blob", { type: e2.type }) : new i(e2, "blob", { type: e2.type })), void 0 !== t2) {
      const A3 = { type: e2.type, lastModified: e2.lastModified };
      e2 = e2 instanceof g ? new B([e2], t2, A3) : new i(e2, t2, A3);
    }
    return { name: A2, value: e2 };
  }
  s("FormData", c, o, "name", "value"), Object.defineProperties(c.prototype, { append: n, delete: n, get: n, getAll: n, has: n, set: n, [Symbol.toStringTag]: { value: "FormData", configurable: true } }), A.exports = { FormData: c, makeEntry: I };
}