// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2848 range:895883..903747
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2848: (t2, e2, r2) => {
    "use strict";
    const { kHeadersList: n2, kConstruct: s2 } = r2(5532), { kGuard: i2 } = r2(7271), { kEnumerableProperty: o2 } = r2(3589), { makeIterator: a, isValidHeaderName: u, isValidHeaderValue: c } = r2(8116), l = r2(9023), { webidl: m } = r2(8193), d = r2(2613), f = /* @__PURE__ */ Symbol("headers map"), p = /* @__PURE__ */ Symbol("headers map sorted");
    function h(t3) {
      return 10 === t3 || 13 === t3 || 9 === t3 || 32 === t3;
    }
    function g(t3) {
      let e3 = 0, r3 = t3.length;
      for (; r3 > e3 && h(t3.charCodeAt(r3 - 1)); ) --r3;
      for (; r3 > e3 && h(t3.charCodeAt(e3)); ) ++e3;
      return 0 === e3 && r3 === t3.length ? t3 : t3.substring(e3, r3);
    }
    function A(t3, e3) {
      if (Array.isArray(e3)) for (let r3 = 0; r3 < e3.length; ++r3) {
        const n3 = e3[r3];
        if (2 !== n3.length) throw m.errors.exception({ header: "Headers constructor", message: `expected name/value pair to be length 2, found ${n3.length}.` });
        _(t3, n3[0], n3[1]);
      }
      else {
        if ("object" != typeof e3 || null === e3) throw m.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
        {
          const r3 = Object.keys(e3);
          for (let n3 = 0; n3 < r3.length; ++n3) _(t3, r3[n3], e3[r3[n3]]);
        }
      }
    }
    function _(t3, e3, r3) {
      if (r3 = g(r3), !u(e3)) throw m.errors.invalidArgument({ prefix: "Headers.append", value: e3, type: "header name" });
      if (!c(r3)) throw m.errors.invalidArgument({ prefix: "Headers.append", value: r3, type: "header value" });
      if ("immutable" === t3[i2]) throw new TypeError("immutable");
      return t3[i2], t3[n2].append(e3, r3);
    }
    class y {
      cookies = null;
      constructor(t3) {
        t3 instanceof y ? (this[f] = new Map(t3[f]), this[p] = t3[p], this.cookies = null === t3.cookies ? null : [...t3.cookies]) : (this[f] = new Map(t3), this[p] = null);
      }
      contains(t3) {
        return t3 = t3.toLowerCase(), this[f].has(t3);
      }
      clear() {
        this[f].clear(), this[p] = null, this.cookies = null;
      }
      append(t3, e3) {
        this[p] = null;
        const r3 = t3.toLowerCase(), n3 = this[f].get(r3);
        if (n3) {
          const t4 = "cookie" === r3 ? "; " : ", ";
          this[f].set(r3, { name: n3.name, value: `${n3.value}${t4}${e3}` });
        } else this[f].set(r3, { name: t3, value: e3 });
        "set-cookie" === r3 && (this.cookies ??= [], this.cookies.push(e3));
      }
      set(t3, e3) {
        this[p] = null;
        const r3 = t3.toLowerCase();
        "set-cookie" === r3 && (this.cookies = [e3]), this[f].set(r3, { name: t3, value: e3 });
      }
      delete(t3) {
        this[p] = null, "set-cookie" === (t3 = t3.toLowerCase()) && (this.cookies = null), this[f].delete(t3);
      }
      get(t3) {
        const e3 = this[f].get(t3.toLowerCase());
        return void 0 === e3 ? null : e3.value;
      }
      *[Symbol.iterator]() {
        for (const [t3, { value: e3 }] of this[f]) yield [t3, e3];
      }
      get entries() {
        const t3 = {};
        if (this[f].size) for (const { name: e3, value: r3 } of this[f].values()) t3[e3] = r3;
        return t3;
      }
    }
    class w {
      constructor(t3 = void 0) {
        t3 !== s2 && (this[n2] = new y(), this[i2] = "none", void 0 !== t3 && A(this, t3 = m.converters.HeadersInit(t3)));
      }
      append(t3, e3) {
        return m.brandCheck(this, w), m.argumentLengthCheck(arguments, 2, { header: "Headers.append" }), _(this, t3 = m.converters.ByteString(t3), e3 = m.converters.ByteString(e3));
      }
      delete(t3) {
        if (m.brandCheck(this, w), m.argumentLengthCheck(arguments, 1, { header: "Headers.delete" }), t3 = m.converters.ByteString(t3), !u(t3)) throw m.errors.invalidArgument({ prefix: "Headers.delete", value: t3, type: "header name" });
        if ("immutable" === this[i2]) throw new TypeError("immutable");
        this[i2], this[n2].contains(t3) && this[n2].delete(t3);
      }
      get(t3) {
        if (m.brandCheck(this, w), m.argumentLengthCheck(arguments, 1, { header: "Headers.get" }), t3 = m.converters.ByteString(t3), !u(t3)) throw m.errors.invalidArgument({ prefix: "Headers.get", value: t3, type: "header name" });
        return this[n2].get(t3);
      }
      has(t3) {
        if (m.brandCheck(this, w), m.argumentLengthCheck(arguments, 1, { header: "Headers.has" }), t3 = m.converters.ByteString(t3), !u(t3)) throw m.errors.invalidArgument({ prefix: "Headers.has", value: t3, type: "header name" });
        return this[n2].contains(t3);
      }
      set(t3, e3) {
        if (m.brandCheck(this, w), m.argumentLengthCheck(arguments, 2, { header: "Headers.set" }), t3 = m.converters.ByteString(t3), e3 = g(e3 = m.converters.ByteString(e3)), !u(t3)) throw m.errors.invalidArgument({ prefix: "Headers.set", value: t3, type: "header name" });
        if (!c(e3)) throw m.errors.invalidArgument({ prefix: "Headers.set", value: e3, type: "header value" });
        if ("immutable" === this[i2]) throw new TypeError("immutable");
        this[i2], this[n2].set(t3, e3);
      }
      getSetCookie() {
        m.brandCheck(this, w);
        const t3 = this[n2].cookies;
        return t3 ? [...t3] : [];
      }
      get [p]() {
        if (this[n2][p]) return this[n2][p];
        const t3 = [], e3 = [...this[n2]].sort((t4, e4) => t4[0] < e4[0] ? -1 : 1), r3 = this[n2].cookies;
        for (let n3 = 0; n3 < e3.length; ++n3) {
          const [s3, i3] = e3[n3];
          if ("set-cookie" === s3) for (let e4 = 0; e4 < r3.length; ++e4) t3.push([s3, r3[e4]]);
          else d(null !== i3), t3.push([s3, i3]);
        }
        return this[n2][p] = t3, t3;
      }
      keys() {
        if (m.brandCheck(this, w), "immutable" === this[i2]) {
          const t3 = this[p];
          return a(() => t3, "Headers", "key");
        }
        return a(() => [...this[p].values()], "Headers", "key");
      }
      values() {
        if (m.brandCheck(this, w), "immutable" === this[i2]) {
          const t3 = this[p];
          return a(() => t3, "Headers", "value");
        }
        return a(() => [...this[p].values()], "Headers", "value");
      }
      entries() {
        if (m.brandCheck(this, w), "immutable" === this[i2]) {
          const t3 = this[p];
          return a(() => t3, "Headers", "key+value");
        }
        return a(() => [...this[p].values()], "Headers", "key+value");
      }
      forEach(t3, e3 = globalThis) {
        if (m.brandCheck(this, w), m.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" }), "function" != typeof t3) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [r3, n3] of this) t3.apply(e3, [n3, r3, this]);
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return m.brandCheck(this, w), this[n2];
      }
    }
    w.prototype[Symbol.iterator] = w.prototype.entries, Object.defineProperties(w.prototype, { append: o2, delete: o2, get: o2, has: o2, set: o2, getSetCookie: o2, keys: o2, values: o2, entries: o2, forEach: o2, [Symbol.iterator]: { enumerable: false }, [Symbol.toStringTag]: { value: "Headers", configurable: true }, [l.inspect.custom]: { enumerable: false } }), m.converters.HeadersInit = function(t3) {
      if ("Object" === m.util.Type(t3)) return t3[Symbol.iterator] ? m.converters["sequence<sequence<ByteString>>"](t3) : m.converters["record<ByteString, ByteString>"](t3);
      throw m.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
    }, t2.exports = { fill: A, Headers: w, HeadersList: y };
  }