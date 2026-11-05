// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 48969 range:265860..274658
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48969: (A, e, t) => {
  "use strict";
  const { kConstruct: r } = t(76992), { kEnumerableProperty: s } = t(55201), { iteratorMixin: o, isValidHeaderName: n, isValidHeaderValue: i } = t(48215), { webidl: a } = t(43290), Q = t(56970), g = t(57975), E = /* @__PURE__ */ Symbol("headers map"), B = /* @__PURE__ */ Symbol("headers map sorted");
  function c(A2) {
    return 10 === A2 || 13 === A2 || 9 === A2 || 32 === A2;
  }
  function I(A2) {
    let e2 = 0, t2 = A2.length;
    for (; t2 > e2 && c(A2.charCodeAt(t2 - 1)); ) --t2;
    for (; t2 > e2 && c(A2.charCodeAt(e2)); ) ++e2;
    return 0 === e2 && t2 === A2.length ? A2 : A2.substring(e2, t2);
  }
  function C(A2, e2) {
    if (Array.isArray(e2)) for (let t2 = 0; t2 < e2.length; ++t2) {
      const r2 = e2[t2];
      if (2 !== r2.length) throw a.errors.exception({ header: "Headers constructor", message: `expected name/value pair to be length 2, found ${r2.length}.` });
      h(A2, r2[0], r2[1]);
    }
    else {
      if ("object" != typeof e2 || null === e2) throw a.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
      {
        const t2 = Object.keys(e2);
        for (let r2 = 0; r2 < t2.length; ++r2) h(A2, t2[r2], e2[t2[r2]]);
      }
    }
  }
  function h(A2, e2, t2) {
    if (t2 = I(t2), !n(e2)) throw a.errors.invalidArgument({ prefix: "Headers.append", value: e2, type: "header name" });
    if (!i(t2)) throw a.errors.invalidArgument({ prefix: "Headers.append", value: t2, type: "header value" });
    if ("immutable" === f(A2)) throw new TypeError("immutable");
    return y(A2).append(e2, t2, false);
  }
  function l(A2, e2) {
    return A2[0] < e2[0] ? -1 : 1;
  }
  class u {
    cookies = null;
    constructor(A2) {
      A2 instanceof u ? (this[E] = new Map(A2[E]), this[B] = A2[B], this.cookies = null === A2.cookies ? null : [...A2.cookies]) : (this[E] = new Map(A2), this[B] = null);
    }
    contains(A2, e2) {
      return this[E].has(e2 ? A2 : A2.toLowerCase());
    }
    clear() {
      this[E].clear(), this[B] = null, this.cookies = null;
    }
    append(A2, e2, t2) {
      this[B] = null;
      const r2 = t2 ? A2 : A2.toLowerCase(), s2 = this[E].get(r2);
      if (s2) {
        const A3 = "cookie" === r2 ? "; " : ", ";
        this[E].set(r2, { name: s2.name, value: `${s2.value}${A3}${e2}` });
      } else this[E].set(r2, { name: A2, value: e2 });
      "set-cookie" === r2 && (this.cookies ??= []).push(e2);
    }
    set(A2, e2, t2) {
      this[B] = null;
      const r2 = t2 ? A2 : A2.toLowerCase();
      "set-cookie" === r2 && (this.cookies = [e2]), this[E].set(r2, { name: A2, value: e2 });
    }
    delete(A2, e2) {
      this[B] = null, e2 || (A2 = A2.toLowerCase()), "set-cookie" === A2 && (this.cookies = null), this[E].delete(A2);
    }
    get(A2, e2) {
      return this[E].get(e2 ? A2 : A2.toLowerCase())?.value ?? null;
    }
    *[Symbol.iterator]() {
      for (const { 0: A2, 1: { value: e2 } } of this[E]) yield [A2, e2];
    }
    get entries() {
      const A2 = {};
      if (0 !== this[E].size) for (const { name: e2, value: t2 } of this[E].values()) A2[e2] = t2;
      return A2;
    }
    rawValues() {
      return this[E].values();
    }
    get entriesList() {
      const A2 = [];
      if (0 !== this[E].size) for (const { 0: e2, 1: { name: t2, value: r2 } } of this[E]) if ("set-cookie" === e2) for (const e3 of this.cookies) A2.push([t2, e3]);
      else A2.push([t2, r2]);
      return A2;
    }
    toSortedArray() {
      const A2 = this[E].size, e2 = new Array(A2);
      if (A2 <= 32) {
        if (0 === A2) return e2;
        const t2 = this[E][Symbol.iterator](), r2 = t2.next().value;
        e2[0] = [r2[0], r2[1].value], Q(null !== r2[1].value);
        for (let r3, s2, o2 = 1, n2 = 0, i2 = 0, a2 = 0, g2 = 0; o2 < A2; ++o2) {
          for (s2 = t2.next().value, r3 = e2[o2] = [s2[0], s2[1].value], Q(null !== r3[1]), a2 = 0, i2 = o2; a2 < i2; ) g2 = a2 + (i2 - a2 >> 1), e2[g2][0] <= r3[0] ? a2 = g2 + 1 : i2 = g2;
          if (o2 !== g2) {
            for (n2 = o2; n2 > a2; ) e2[n2] = e2[--n2];
            e2[a2] = r3;
          }
        }
        if (!t2.next().done) throw new TypeError("Unreachable");
        return e2;
      }
      {
        let A3 = 0;
        for (const { 0: t2, 1: { value: r2 } } of this[E]) e2[A3++] = [t2, r2], Q(null !== r2);
        return e2.sort(l);
      }
    }
  }
  class d {
    #G;
    #J;
    constructor(A2 = void 0) {
      a.util.markAsUncloneable(this), A2 !== r && (this.#J = new u(), this.#G = "none", void 0 !== A2 && C(this, A2 = a.converters.HeadersInit(A2, "Headers contructor", "init")));
    }
    append(A2, e2) {
      a.brandCheck(this, d), a.argumentLengthCheck(arguments, 2, "Headers.append");
      const t2 = "Headers.append";
      return h(this, A2 = a.converters.ByteString(A2, t2, "name"), e2 = a.converters.ByteString(e2, t2, "value"));
    }
    delete(A2) {
      a.brandCheck(this, d), a.argumentLengthCheck(arguments, 1, "Headers.delete");
      if (A2 = a.converters.ByteString(A2, "Headers.delete", "name"), !n(A2)) throw a.errors.invalidArgument({ prefix: "Headers.delete", value: A2, type: "header name" });
      if ("immutable" === this.#G) throw new TypeError("immutable");
      this.#J.contains(A2, false) && this.#J.delete(A2, false);
    }
    get(A2) {
      a.brandCheck(this, d), a.argumentLengthCheck(arguments, 1, "Headers.get");
      const e2 = "Headers.get";
      if (A2 = a.converters.ByteString(A2, e2, "name"), !n(A2)) throw a.errors.invalidArgument({ prefix: e2, value: A2, type: "header name" });
      return this.#J.get(A2, false);
    }
    has(A2) {
      a.brandCheck(this, d), a.argumentLengthCheck(arguments, 1, "Headers.has");
      const e2 = "Headers.has";
      if (A2 = a.converters.ByteString(A2, e2, "name"), !n(A2)) throw a.errors.invalidArgument({ prefix: e2, value: A2, type: "header name" });
      return this.#J.contains(A2, false);
    }
    set(A2, e2) {
      a.brandCheck(this, d), a.argumentLengthCheck(arguments, 2, "Headers.set");
      const t2 = "Headers.set";
      if (A2 = a.converters.ByteString(A2, t2, "name"), e2 = I(e2 = a.converters.ByteString(e2, t2, "value")), !n(A2)) throw a.errors.invalidArgument({ prefix: t2, value: A2, type: "header name" });
      if (!i(e2)) throw a.errors.invalidArgument({ prefix: t2, value: e2, type: "header value" });
      if ("immutable" === this.#G) throw new TypeError("immutable");
      this.#J.set(A2, e2, false);
    }
    getSetCookie() {
      a.brandCheck(this, d);
      const A2 = this.#J.cookies;
      return A2 ? [...A2] : [];
    }
    get [B]() {
      if (this.#J[B]) return this.#J[B];
      const A2 = [], e2 = this.#J.toSortedArray(), t2 = this.#J.cookies;
      if (null === t2 || 1 === t2.length) return this.#J[B] = e2;
      for (let r2 = 0; r2 < e2.length; ++r2) {
        const { 0: s2, 1: o2 } = e2[r2];
        if ("set-cookie" === s2) for (let e3 = 0; e3 < t2.length; ++e3) A2.push([s2, t2[e3]]);
        else A2.push([s2, o2]);
      }
      return this.#J[B] = A2;
    }
    [g.inspect.custom](A2, e2) {
      return e2.depth ??= A2, `Headers ${g.formatWithOptions(e2, this.#J.entries)}`;
    }
    static getHeadersGuard(A2) {
      return A2.#G;
    }
    static setHeadersGuard(A2, e2) {
      A2.#G = e2;
    }
    static getHeadersList(A2) {
      return A2.#J;
    }
    static setHeadersList(A2, e2) {
      A2.#J = e2;
    }
  }
  const { getHeadersGuard: f, setHeadersGuard: w, getHeadersList: y, setHeadersList: D } = d;
  Reflect.deleteProperty(d, "getHeadersGuard"), Reflect.deleteProperty(d, "setHeadersGuard"), Reflect.deleteProperty(d, "getHeadersList"), Reflect.deleteProperty(d, "setHeadersList"), o("Headers", d, B, 0, 1), Object.defineProperties(d.prototype, { append: s, delete: s, get: s, has: s, set: s, getSetCookie: s, [Symbol.toStringTag]: { value: "Headers", configurable: true }, [g.inspect.custom]: { enumerable: false } }), a.converters.HeadersInit = function(A2, e2, t2) {
    if ("Object" === a.util.Type(A2)) {
      const r2 = Reflect.get(A2, Symbol.iterator);
      if (!g.types.isProxy(A2) && r2 === d.prototype.entries) try {
        return y(A2).entriesList;
      } catch {
      }
      return "function" == typeof r2 ? a.converters["sequence<sequence<ByteString>>"](A2, e2, t2, r2.bind(A2)) : a.converters["record<ByteString, ByteString>"](A2, e2, t2);
    }
    throw a.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
  }, A.exports = { fill: C, compareHeaderName: l, Headers: d, HeadersList: u, getHeadersGuard: f, setHeadersGuard: w, setHeadersList: D, getHeadersList: y };
}