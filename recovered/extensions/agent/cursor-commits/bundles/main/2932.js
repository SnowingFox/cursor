// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2932 range:306268..314139
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2932: (e2, n2, a2) => {
    "use strict";
    const { kHeadersList: t2, kConstruct: s2 } = a2(8832), { kGuard: o2 } = a2(5899), { kEnumerableProperty: r2 } = a2(9361), { makeIterator: i2, isValidHeaderName: A, isValidHeaderValue: l } = a2(5728), c = a2(9023), { webidl: m } = a2(8005), d = a2(2613), g = /* @__PURE__ */ Symbol("headers map"), u = /* @__PURE__ */ Symbol("headers map sorted");
    function E(e3) {
      return 10 === e3 || 13 === e3 || 9 === e3 || 32 === e3;
    }
    function p(e3) {
      let n3 = 0, a3 = e3.length;
      for (; a3 > n3 && E(e3.charCodeAt(a3 - 1)); ) --a3;
      for (; a3 > n3 && E(e3.charCodeAt(n3)); ) ++n3;
      return 0 === n3 && a3 === e3.length ? e3 : e3.substring(n3, a3);
    }
    function T(e3, n3) {
      if (Array.isArray(n3)) for (let a3 = 0; a3 < n3.length; ++a3) {
        const t3 = n3[a3];
        if (2 !== t3.length) throw m.errors.exception({ header: "Headers constructor", message: `expected name/value pair to be length 2, found ${t3.length}.` });
        k(e3, t3[0], t3[1]);
      }
      else {
        if ("object" != typeof n3 || null === n3) throw m.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
        {
          const a3 = Object.keys(n3);
          for (let t3 = 0; t3 < a3.length; ++t3) k(e3, a3[t3], n3[a3[t3]]);
        }
      }
    }
    function k(e3, n3, a3) {
      if (a3 = p(a3), !A(n3)) throw m.errors.invalidArgument({ prefix: "Headers.append", value: n3, type: "header name" });
      if (!l(a3)) throw m.errors.invalidArgument({ prefix: "Headers.append", value: a3, type: "header value" });
      if ("immutable" === e3[o2]) throw new TypeError("immutable");
      return e3[o2], e3[t2].append(n3, a3);
    }
    class I {
      cookies = null;
      constructor(e3) {
        e3 instanceof I ? (this[g] = new Map(e3[g]), this[u] = e3[u], this.cookies = null === e3.cookies ? null : [...e3.cookies]) : (this[g] = new Map(e3), this[u] = null);
      }
      contains(e3) {
        return e3 = e3.toLowerCase(), this[g].has(e3);
      }
      clear() {
        this[g].clear(), this[u] = null, this.cookies = null;
      }
      append(e3, n3) {
        this[u] = null;
        const a3 = e3.toLowerCase(), t3 = this[g].get(a3);
        if (t3) {
          const e4 = "cookie" === a3 ? "; " : ", ";
          this[g].set(a3, { name: t3.name, value: `${t3.value}${e4}${n3}` });
        } else this[g].set(a3, { name: e3, value: n3 });
        "set-cookie" === a3 && (this.cookies ??= [], this.cookies.push(n3));
      }
      set(e3, n3) {
        this[u] = null;
        const a3 = e3.toLowerCase();
        "set-cookie" === a3 && (this.cookies = [n3]), this[g].set(a3, { name: e3, value: n3 });
      }
      delete(e3) {
        this[u] = null, "set-cookie" === (e3 = e3.toLowerCase()) && (this.cookies = null), this[g].delete(e3);
      }
      get(e3) {
        const n3 = this[g].get(e3.toLowerCase());
        return void 0 === n3 ? null : n3.value;
      }
      *[Symbol.iterator]() {
        for (const [e3, { value: n3 }] of this[g]) yield [e3, n3];
      }
      get entries() {
        const e3 = {};
        if (this[g].size) for (const { name: n3, value: a3 } of this[g].values()) e3[n3] = a3;
        return e3;
      }
    }
    class h {
      constructor(e3 = void 0) {
        e3 !== s2 && (this[t2] = new I(), this[o2] = "none", void 0 !== e3 && T(this, e3 = m.converters.HeadersInit(e3)));
      }
      append(e3, n3) {
        return m.brandCheck(this, h), m.argumentLengthCheck(arguments, 2, { header: "Headers.append" }), k(this, e3 = m.converters.ByteString(e3), n3 = m.converters.ByteString(n3));
      }
      delete(e3) {
        if (m.brandCheck(this, h), m.argumentLengthCheck(arguments, 1, { header: "Headers.delete" }), e3 = m.converters.ByteString(e3), !A(e3)) throw m.errors.invalidArgument({ prefix: "Headers.delete", value: e3, type: "header name" });
        if ("immutable" === this[o2]) throw new TypeError("immutable");
        this[o2], this[t2].contains(e3) && this[t2].delete(e3);
      }
      get(e3) {
        if (m.brandCheck(this, h), m.argumentLengthCheck(arguments, 1, { header: "Headers.get" }), e3 = m.converters.ByteString(e3), !A(e3)) throw m.errors.invalidArgument({ prefix: "Headers.get", value: e3, type: "header name" });
        return this[t2].get(e3);
      }
      has(e3) {
        if (m.brandCheck(this, h), m.argumentLengthCheck(arguments, 1, { header: "Headers.has" }), e3 = m.converters.ByteString(e3), !A(e3)) throw m.errors.invalidArgument({ prefix: "Headers.has", value: e3, type: "header name" });
        return this[t2].contains(e3);
      }
      set(e3, n3) {
        if (m.brandCheck(this, h), m.argumentLengthCheck(arguments, 2, { header: "Headers.set" }), e3 = m.converters.ByteString(e3), n3 = p(n3 = m.converters.ByteString(n3)), !A(e3)) throw m.errors.invalidArgument({ prefix: "Headers.set", value: e3, type: "header name" });
        if (!l(n3)) throw m.errors.invalidArgument({ prefix: "Headers.set", value: n3, type: "header value" });
        if ("immutable" === this[o2]) throw new TypeError("immutable");
        this[o2], this[t2].set(e3, n3);
      }
      getSetCookie() {
        m.brandCheck(this, h);
        const e3 = this[t2].cookies;
        return e3 ? [...e3] : [];
      }
      get [u]() {
        if (this[t2][u]) return this[t2][u];
        const e3 = [], n3 = [...this[t2]].sort((e4, n4) => e4[0] < n4[0] ? -1 : 1), a3 = this[t2].cookies;
        for (let t3 = 0; t3 < n3.length; ++t3) {
          const [s3, o3] = n3[t3];
          if ("set-cookie" === s3) for (let n4 = 0; n4 < a3.length; ++n4) e3.push([s3, a3[n4]]);
          else d(null !== o3), e3.push([s3, o3]);
        }
        return this[t2][u] = e3, e3;
      }
      keys() {
        if (m.brandCheck(this, h), "immutable" === this[o2]) {
          const e3 = this[u];
          return i2(() => e3, "Headers", "key");
        }
        return i2(() => [...this[u].values()], "Headers", "key");
      }
      values() {
        if (m.brandCheck(this, h), "immutable" === this[o2]) {
          const e3 = this[u];
          return i2(() => e3, "Headers", "value");
        }
        return i2(() => [...this[u].values()], "Headers", "value");
      }
      entries() {
        if (m.brandCheck(this, h), "immutable" === this[o2]) {
          const e3 = this[u];
          return i2(() => e3, "Headers", "key+value");
        }
        return i2(() => [...this[u].values()], "Headers", "key+value");
      }
      forEach(e3, n3 = globalThis) {
        if (m.brandCheck(this, h), m.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" }), "function" != typeof e3) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [a3, t3] of this) e3.apply(n3, [t3, a3, this]);
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return m.brandCheck(this, h), this[t2];
      }
    }
    h.prototype[Symbol.iterator] = h.prototype.entries, Object.defineProperties(h.prototype, { append: r2, delete: r2, get: r2, has: r2, set: r2, getSetCookie: r2, keys: r2, values: r2, entries: r2, forEach: r2, [Symbol.iterator]: { enumerable: false }, [Symbol.toStringTag]: { value: "Headers", configurable: true }, [c.inspect.custom]: { enumerable: false } }), m.converters.HeadersInit = function(e3) {
      if ("Object" === m.util.Type(e3)) return e3[Symbol.iterator] ? m.converters["sequence<sequence<ByteString>>"](e3) : m.converters["record<ByteString, ByteString>"](e3);
      throw m.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
    }, e2.exports = { fill: T, Headers: h, HeadersList: I };
  }