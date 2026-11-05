// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2932 range:306082..313935
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2932: (e2, A2, t2) => {
    "use strict";
    const { kHeadersList: n2, kConstruct: r2 } = t2(8832), { kGuard: o2 } = t2(5899), { kEnumerableProperty: s } = t2(9361), { makeIterator: a, isValidHeaderName: i, isValidHeaderValue: c } = t2(5728), l = t2(9023), { webidl: g } = t2(8005), E = t2(2613), u = /* @__PURE__ */ Symbol("headers map"), d = /* @__PURE__ */ Symbol("headers map sorted");
    function I(e3) {
      return 10 === e3 || 13 === e3 || 9 === e3 || 32 === e3;
    }
    function h(e3) {
      let A3 = 0, t3 = e3.length;
      for (; t3 > A3 && I(e3.charCodeAt(t3 - 1)); ) --t3;
      for (; t3 > A3 && I(e3.charCodeAt(A3)); ) ++A3;
      return 0 === A3 && t3 === e3.length ? e3 : e3.substring(A3, t3);
    }
    function Q(e3, A3) {
      if (Array.isArray(A3)) for (let t3 = 0; t3 < A3.length; ++t3) {
        const n3 = A3[t3];
        if (2 !== n3.length) throw g.errors.exception({ header: "Headers constructor", message: `expected name/value pair to be length 2, found ${n3.length}.` });
        m(e3, n3[0], n3[1]);
      }
      else {
        if ("object" != typeof A3 || null === A3) throw g.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
        {
          const t3 = Object.keys(A3);
          for (let n3 = 0; n3 < t3.length; ++n3) m(e3, t3[n3], A3[t3[n3]]);
        }
      }
    }
    function m(e3, A3, t3) {
      if (t3 = h(t3), !i(A3)) throw g.errors.invalidArgument({ prefix: "Headers.append", value: A3, type: "header name" });
      if (!c(t3)) throw g.errors.invalidArgument({ prefix: "Headers.append", value: t3, type: "header value" });
      if ("immutable" === e3[o2]) throw new TypeError("immutable");
      return e3[o2], e3[n2].append(A3, t3);
    }
    class C {
      cookies = null;
      constructor(e3) {
        e3 instanceof C ? (this[u] = new Map(e3[u]), this[d] = e3[d], this.cookies = null === e3.cookies ? null : [...e3.cookies]) : (this[u] = new Map(e3), this[d] = null);
      }
      contains(e3) {
        return e3 = e3.toLowerCase(), this[u].has(e3);
      }
      clear() {
        this[u].clear(), this[d] = null, this.cookies = null;
      }
      append(e3, A3) {
        this[d] = null;
        const t3 = e3.toLowerCase(), n3 = this[u].get(t3);
        if (n3) {
          const e4 = "cookie" === t3 ? "; " : ", ";
          this[u].set(t3, { name: n3.name, value: `${n3.value}${e4}${A3}` });
        } else this[u].set(t3, { name: e3, value: A3 });
        "set-cookie" === t3 && (this.cookies ??= [], this.cookies.push(A3));
      }
      set(e3, A3) {
        this[d] = null;
        const t3 = e3.toLowerCase();
        "set-cookie" === t3 && (this.cookies = [A3]), this[u].set(t3, { name: e3, value: A3 });
      }
      delete(e3) {
        this[d] = null, "set-cookie" === (e3 = e3.toLowerCase()) && (this.cookies = null), this[u].delete(e3);
      }
      get(e3) {
        const A3 = this[u].get(e3.toLowerCase());
        return void 0 === A3 ? null : A3.value;
      }
      *[Symbol.iterator]() {
        for (const [e3, { value: A3 }] of this[u]) yield [e3, A3];
      }
      get entries() {
        const e3 = {};
        if (this[u].size) for (const { name: A3, value: t3 } of this[u].values()) e3[A3] = t3;
        return e3;
      }
    }
    class B {
      constructor(e3 = void 0) {
        e3 !== r2 && (this[n2] = new C(), this[o2] = "none", void 0 !== e3 && Q(this, e3 = g.converters.HeadersInit(e3)));
      }
      append(e3, A3) {
        return g.brandCheck(this, B), g.argumentLengthCheck(arguments, 2, { header: "Headers.append" }), m(this, e3 = g.converters.ByteString(e3), A3 = g.converters.ByteString(A3));
      }
      delete(e3) {
        if (g.brandCheck(this, B), g.argumentLengthCheck(arguments, 1, { header: "Headers.delete" }), e3 = g.converters.ByteString(e3), !i(e3)) throw g.errors.invalidArgument({ prefix: "Headers.delete", value: e3, type: "header name" });
        if ("immutable" === this[o2]) throw new TypeError("immutable");
        this[o2], this[n2].contains(e3) && this[n2].delete(e3);
      }
      get(e3) {
        if (g.brandCheck(this, B), g.argumentLengthCheck(arguments, 1, { header: "Headers.get" }), e3 = g.converters.ByteString(e3), !i(e3)) throw g.errors.invalidArgument({ prefix: "Headers.get", value: e3, type: "header name" });
        return this[n2].get(e3);
      }
      has(e3) {
        if (g.brandCheck(this, B), g.argumentLengthCheck(arguments, 1, { header: "Headers.has" }), e3 = g.converters.ByteString(e3), !i(e3)) throw g.errors.invalidArgument({ prefix: "Headers.has", value: e3, type: "header name" });
        return this[n2].contains(e3);
      }
      set(e3, A3) {
        if (g.brandCheck(this, B), g.argumentLengthCheck(arguments, 2, { header: "Headers.set" }), e3 = g.converters.ByteString(e3), A3 = h(A3 = g.converters.ByteString(A3)), !i(e3)) throw g.errors.invalidArgument({ prefix: "Headers.set", value: e3, type: "header name" });
        if (!c(A3)) throw g.errors.invalidArgument({ prefix: "Headers.set", value: A3, type: "header value" });
        if ("immutable" === this[o2]) throw new TypeError("immutable");
        this[o2], this[n2].set(e3, A3);
      }
      getSetCookie() {
        g.brandCheck(this, B);
        const e3 = this[n2].cookies;
        return e3 ? [...e3] : [];
      }
      get [d]() {
        if (this[n2][d]) return this[n2][d];
        const e3 = [], A3 = [...this[n2]].sort((e4, A4) => e4[0] < A4[0] ? -1 : 1), t3 = this[n2].cookies;
        for (let n3 = 0; n3 < A3.length; ++n3) {
          const [r3, o3] = A3[n3];
          if ("set-cookie" === r3) for (let A4 = 0; A4 < t3.length; ++A4) e3.push([r3, t3[A4]]);
          else E(null !== o3), e3.push([r3, o3]);
        }
        return this[n2][d] = e3, e3;
      }
      keys() {
        if (g.brandCheck(this, B), "immutable" === this[o2]) {
          const e3 = this[d];
          return a(() => e3, "Headers", "key");
        }
        return a(() => [...this[d].values()], "Headers", "key");
      }
      values() {
        if (g.brandCheck(this, B), "immutable" === this[o2]) {
          const e3 = this[d];
          return a(() => e3, "Headers", "value");
        }
        return a(() => [...this[d].values()], "Headers", "value");
      }
      entries() {
        if (g.brandCheck(this, B), "immutable" === this[o2]) {
          const e3 = this[d];
          return a(() => e3, "Headers", "key+value");
        }
        return a(() => [...this[d].values()], "Headers", "key+value");
      }
      forEach(e3, A3 = globalThis) {
        if (g.brandCheck(this, B), g.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" }), "function" != typeof e3) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [t3, n3] of this) e3.apply(A3, [n3, t3, this]);
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return g.brandCheck(this, B), this[n2];
      }
    }
    B.prototype[Symbol.iterator] = B.prototype.entries, Object.defineProperties(B.prototype, { append: s, delete: s, get: s, has: s, set: s, getSetCookie: s, keys: s, values: s, entries: s, forEach: s, [Symbol.iterator]: { enumerable: false }, [Symbol.toStringTag]: { value: "Headers", configurable: true }, [l.inspect.custom]: { enumerable: false } }), g.converters.HeadersInit = function(e3) {
      if ("Object" === g.util.Type(e3)) return e3[Symbol.iterator] ? g.converters["sequence<sequence<ByteString>>"](e3) : g.converters["record<ByteString, ByteString>"](e3);
      throw g.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
    }, e2.exports = { fill: Q, Headers: B, HeadersList: C };
  }