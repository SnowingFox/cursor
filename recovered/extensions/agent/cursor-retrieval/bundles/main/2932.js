// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 2932 range:581331..589202
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2932: (e2, a2, n2) => {
    "use strict";
    const { kHeadersList: t2, kConstruct: s2 } = n2(8832), { kGuard: o2 } = n2(5899), { kEnumerableProperty: r2 } = n2(9361), { makeIterator: i2, isValidHeaderName: l, isValidHeaderValue: d } = n2(5728), m = n2(9023), { webidl: c } = n2(8005), p = n2(2613), A = /* @__PURE__ */ Symbol("headers map"), u = /* @__PURE__ */ Symbol("headers map sorted");
    function g(e3) {
      return 10 === e3 || 13 === e3 || 9 === e3 || 32 === e3;
    }
    function T(e3) {
      let a3 = 0, n3 = e3.length;
      for (; n3 > a3 && g(e3.charCodeAt(n3 - 1)); ) --n3;
      for (; n3 > a3 && g(e3.charCodeAt(a3)); ) ++a3;
      return 0 === a3 && n3 === e3.length ? e3 : e3.substring(a3, n3);
    }
    function h(e3, a3) {
      if (Array.isArray(a3)) for (let n3 = 0; n3 < a3.length; ++n3) {
        const t3 = a3[n3];
        if (2 !== t3.length) throw c.errors.exception({ header: "Headers constructor", message: `expected name/value pair to be length 2, found ${t3.length}.` });
        k(e3, t3[0], t3[1]);
      }
      else {
        if ("object" != typeof a3 || null === a3) throw c.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
        {
          const n3 = Object.keys(a3);
          for (let t3 = 0; t3 < n3.length; ++t3) k(e3, n3[t3], a3[n3[t3]]);
        }
      }
    }
    function k(e3, a3, n3) {
      if (n3 = T(n3), !l(a3)) throw c.errors.invalidArgument({ prefix: "Headers.append", value: a3, type: "header name" });
      if (!d(n3)) throw c.errors.invalidArgument({ prefix: "Headers.append", value: n3, type: "header value" });
      if ("immutable" === e3[o2]) throw new TypeError("immutable");
      return e3[o2], e3[t2].append(a3, n3);
    }
    class _ {
      cookies = null;
      constructor(e3) {
        e3 instanceof _ ? (this[A] = new Map(e3[A]), this[u] = e3[u], this.cookies = null === e3.cookies ? null : [...e3.cookies]) : (this[A] = new Map(e3), this[u] = null);
      }
      contains(e3) {
        return e3 = e3.toLowerCase(), this[A].has(e3);
      }
      clear() {
        this[A].clear(), this[u] = null, this.cookies = null;
      }
      append(e3, a3) {
        this[u] = null;
        const n3 = e3.toLowerCase(), t3 = this[A].get(n3);
        if (t3) {
          const e4 = "cookie" === n3 ? "; " : ", ";
          this[A].set(n3, { name: t3.name, value: `${t3.value}${e4}${a3}` });
        } else this[A].set(n3, { name: e3, value: a3 });
        "set-cookie" === n3 && (this.cookies ??= [], this.cookies.push(a3));
      }
      set(e3, a3) {
        this[u] = null;
        const n3 = e3.toLowerCase();
        "set-cookie" === n3 && (this.cookies = [a3]), this[A].set(n3, { name: e3, value: a3 });
      }
      delete(e3) {
        this[u] = null, "set-cookie" === (e3 = e3.toLowerCase()) && (this.cookies = null), this[A].delete(e3);
      }
      get(e3) {
        const a3 = this[A].get(e3.toLowerCase());
        return void 0 === a3 ? null : a3.value;
      }
      *[Symbol.iterator]() {
        for (const [e3, { value: a3 }] of this[A]) yield [e3, a3];
      }
      get entries() {
        const e3 = {};
        if (this[A].size) for (const { name: a3, value: n3 } of this[A].values()) e3[a3] = n3;
        return e3;
      }
    }
    class E {
      constructor(e3 = void 0) {
        e3 !== s2 && (this[t2] = new _(), this[o2] = "none", void 0 !== e3 && h(this, e3 = c.converters.HeadersInit(e3)));
      }
      append(e3, a3) {
        return c.brandCheck(this, E), c.argumentLengthCheck(arguments, 2, { header: "Headers.append" }), k(this, e3 = c.converters.ByteString(e3), a3 = c.converters.ByteString(a3));
      }
      delete(e3) {
        if (c.brandCheck(this, E), c.argumentLengthCheck(arguments, 1, { header: "Headers.delete" }), e3 = c.converters.ByteString(e3), !l(e3)) throw c.errors.invalidArgument({ prefix: "Headers.delete", value: e3, type: "header name" });
        if ("immutable" === this[o2]) throw new TypeError("immutable");
        this[o2], this[t2].contains(e3) && this[t2].delete(e3);
      }
      get(e3) {
        if (c.brandCheck(this, E), c.argumentLengthCheck(arguments, 1, { header: "Headers.get" }), e3 = c.converters.ByteString(e3), !l(e3)) throw c.errors.invalidArgument({ prefix: "Headers.get", value: e3, type: "header name" });
        return this[t2].get(e3);
      }
      has(e3) {
        if (c.brandCheck(this, E), c.argumentLengthCheck(arguments, 1, { header: "Headers.has" }), e3 = c.converters.ByteString(e3), !l(e3)) throw c.errors.invalidArgument({ prefix: "Headers.has", value: e3, type: "header name" });
        return this[t2].contains(e3);
      }
      set(e3, a3) {
        if (c.brandCheck(this, E), c.argumentLengthCheck(arguments, 2, { header: "Headers.set" }), e3 = c.converters.ByteString(e3), a3 = T(a3 = c.converters.ByteString(a3)), !l(e3)) throw c.errors.invalidArgument({ prefix: "Headers.set", value: e3, type: "header name" });
        if (!d(a3)) throw c.errors.invalidArgument({ prefix: "Headers.set", value: a3, type: "header value" });
        if ("immutable" === this[o2]) throw new TypeError("immutable");
        this[o2], this[t2].set(e3, a3);
      }
      getSetCookie() {
        c.brandCheck(this, E);
        const e3 = this[t2].cookies;
        return e3 ? [...e3] : [];
      }
      get [u]() {
        if (this[t2][u]) return this[t2][u];
        const e3 = [], a3 = [...this[t2]].sort((e4, a4) => e4[0] < a4[0] ? -1 : 1), n3 = this[t2].cookies;
        for (let t3 = 0; t3 < a3.length; ++t3) {
          const [s3, o3] = a3[t3];
          if ("set-cookie" === s3) for (let a4 = 0; a4 < n3.length; ++a4) e3.push([s3, n3[a4]]);
          else p(null !== o3), e3.push([s3, o3]);
        }
        return this[t2][u] = e3, e3;
      }
      keys() {
        if (c.brandCheck(this, E), "immutable" === this[o2]) {
          const e3 = this[u];
          return i2(() => e3, "Headers", "key");
        }
        return i2(() => [...this[u].values()], "Headers", "key");
      }
      values() {
        if (c.brandCheck(this, E), "immutable" === this[o2]) {
          const e3 = this[u];
          return i2(() => e3, "Headers", "value");
        }
        return i2(() => [...this[u].values()], "Headers", "value");
      }
      entries() {
        if (c.brandCheck(this, E), "immutable" === this[o2]) {
          const e3 = this[u];
          return i2(() => e3, "Headers", "key+value");
        }
        return i2(() => [...this[u].values()], "Headers", "key+value");
      }
      forEach(e3, a3 = globalThis) {
        if (c.brandCheck(this, E), c.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" }), "function" != typeof e3) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [n3, t3] of this) e3.apply(a3, [t3, n3, this]);
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return c.brandCheck(this, E), this[t2];
      }
    }
    E.prototype[Symbol.iterator] = E.prototype.entries, Object.defineProperties(E.prototype, { append: r2, delete: r2, get: r2, has: r2, set: r2, getSetCookie: r2, keys: r2, values: r2, entries: r2, forEach: r2, [Symbol.iterator]: { enumerable: false }, [Symbol.toStringTag]: { value: "Headers", configurable: true }, [m.inspect.custom]: { enumerable: false } }), c.converters.HeadersInit = function(e3) {
      if ("Object" === c.util.Type(e3)) return e3[Symbol.iterator] ? c.converters["sequence<sequence<ByteString>>"](e3) : c.converters["record<ByteString, ByteString>"](e3);
      throw c.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
    }, e2.exports = { fill: h, Headers: E, HeadersList: _ };
  }