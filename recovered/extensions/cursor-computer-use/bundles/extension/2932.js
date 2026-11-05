// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2932 range:310273..318126
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2932: (e2, n2, t2) => {
    "use strict";
    const { kHeadersList: a2, kConstruct: s2 } = t2(8832), { kGuard: o2 } = t2(5899), { kEnumerableProperty: r } = t2(9361), { makeIterator: i, isValidHeaderName: A, isValidHeaderValue: c } = t2(5728), l = t2(9023), { webidl: d } = t2(8005), m = t2(2613), u = /* @__PURE__ */ Symbol("headers map"), g = /* @__PURE__ */ Symbol("headers map sorted");
    function p(e3) {
      return 10 === e3 || 13 === e3 || 9 === e3 || 32 === e3;
    }
    function E(e3) {
      let n3 = 0, t3 = e3.length;
      for (; t3 > n3 && p(e3.charCodeAt(t3 - 1)); ) --t3;
      for (; t3 > n3 && p(e3.charCodeAt(n3)); ) ++n3;
      return 0 === n3 && t3 === e3.length ? e3 : e3.substring(n3, t3);
    }
    function h(e3, n3) {
      if (Array.isArray(n3)) for (let t3 = 0; t3 < n3.length; ++t3) {
        const a3 = n3[t3];
        if (2 !== a3.length) throw d.errors.exception({ header: "Headers constructor", message: `expected name/value pair to be length 2, found ${a3.length}.` });
        T(e3, a3[0], a3[1]);
      }
      else {
        if ("object" != typeof n3 || null === n3) throw d.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
        {
          const t3 = Object.keys(n3);
          for (let a3 = 0; a3 < t3.length; ++a3) T(e3, t3[a3], n3[t3[a3]]);
        }
      }
    }
    function T(e3, n3, t3) {
      if (t3 = E(t3), !A(n3)) throw d.errors.invalidArgument({ prefix: "Headers.append", value: n3, type: "header name" });
      if (!c(t3)) throw d.errors.invalidArgument({ prefix: "Headers.append", value: t3, type: "header value" });
      if ("immutable" === e3[o2]) throw new TypeError("immutable");
      return e3[o2], e3[a2].append(n3, t3);
    }
    class k {
      cookies = null;
      constructor(e3) {
        e3 instanceof k ? (this[u] = new Map(e3[u]), this[g] = e3[g], this.cookies = null === e3.cookies ? null : [...e3.cookies]) : (this[u] = new Map(e3), this[g] = null);
      }
      contains(e3) {
        return e3 = e3.toLowerCase(), this[u].has(e3);
      }
      clear() {
        this[u].clear(), this[g] = null, this.cookies = null;
      }
      append(e3, n3) {
        this[g] = null;
        const t3 = e3.toLowerCase(), a3 = this[u].get(t3);
        if (a3) {
          const e4 = "cookie" === t3 ? "; " : ", ";
          this[u].set(t3, { name: a3.name, value: `${a3.value}${e4}${n3}` });
        } else this[u].set(t3, { name: e3, value: n3 });
        "set-cookie" === t3 && (this.cookies ??= [], this.cookies.push(n3));
      }
      set(e3, n3) {
        this[g] = null;
        const t3 = e3.toLowerCase();
        "set-cookie" === t3 && (this.cookies = [n3]), this[u].set(t3, { name: e3, value: n3 });
      }
      delete(e3) {
        this[g] = null, "set-cookie" === (e3 = e3.toLowerCase()) && (this.cookies = null), this[u].delete(e3);
      }
      get(e3) {
        const n3 = this[u].get(e3.toLowerCase());
        return void 0 === n3 ? null : n3.value;
      }
      *[Symbol.iterator]() {
        for (const [e3, { value: n3 }] of this[u]) yield [e3, n3];
      }
      get entries() {
        const e3 = {};
        if (this[u].size) for (const { name: n3, value: t3 } of this[u].values()) e3[n3] = t3;
        return e3;
      }
    }
    class f {
      constructor(e3 = void 0) {
        e3 !== s2 && (this[a2] = new k(), this[o2] = "none", void 0 !== e3 && h(this, e3 = d.converters.HeadersInit(e3)));
      }
      append(e3, n3) {
        return d.brandCheck(this, f), d.argumentLengthCheck(arguments, 2, { header: "Headers.append" }), T(this, e3 = d.converters.ByteString(e3), n3 = d.converters.ByteString(n3));
      }
      delete(e3) {
        if (d.brandCheck(this, f), d.argumentLengthCheck(arguments, 1, { header: "Headers.delete" }), e3 = d.converters.ByteString(e3), !A(e3)) throw d.errors.invalidArgument({ prefix: "Headers.delete", value: e3, type: "header name" });
        if ("immutable" === this[o2]) throw new TypeError("immutable");
        this[o2], this[a2].contains(e3) && this[a2].delete(e3);
      }
      get(e3) {
        if (d.brandCheck(this, f), d.argumentLengthCheck(arguments, 1, { header: "Headers.get" }), e3 = d.converters.ByteString(e3), !A(e3)) throw d.errors.invalidArgument({ prefix: "Headers.get", value: e3, type: "header name" });
        return this[a2].get(e3);
      }
      has(e3) {
        if (d.brandCheck(this, f), d.argumentLengthCheck(arguments, 1, { header: "Headers.has" }), e3 = d.converters.ByteString(e3), !A(e3)) throw d.errors.invalidArgument({ prefix: "Headers.has", value: e3, type: "header name" });
        return this[a2].contains(e3);
      }
      set(e3, n3) {
        if (d.brandCheck(this, f), d.argumentLengthCheck(arguments, 2, { header: "Headers.set" }), e3 = d.converters.ByteString(e3), n3 = E(n3 = d.converters.ByteString(n3)), !A(e3)) throw d.errors.invalidArgument({ prefix: "Headers.set", value: e3, type: "header name" });
        if (!c(n3)) throw d.errors.invalidArgument({ prefix: "Headers.set", value: n3, type: "header value" });
        if ("immutable" === this[o2]) throw new TypeError("immutable");
        this[o2], this[a2].set(e3, n3);
      }
      getSetCookie() {
        d.brandCheck(this, f);
        const e3 = this[a2].cookies;
        return e3 ? [...e3] : [];
      }
      get [g]() {
        if (this[a2][g]) return this[a2][g];
        const e3 = [], n3 = [...this[a2]].sort((e4, n4) => e4[0] < n4[0] ? -1 : 1), t3 = this[a2].cookies;
        for (let a3 = 0; a3 < n3.length; ++a3) {
          const [s3, o3] = n3[a3];
          if ("set-cookie" === s3) for (let n4 = 0; n4 < t3.length; ++n4) e3.push([s3, t3[n4]]);
          else m(null !== o3), e3.push([s3, o3]);
        }
        return this[a2][g] = e3, e3;
      }
      keys() {
        if (d.brandCheck(this, f), "immutable" === this[o2]) {
          const e3 = this[g];
          return i(() => e3, "Headers", "key");
        }
        return i(() => [...this[g].values()], "Headers", "key");
      }
      values() {
        if (d.brandCheck(this, f), "immutable" === this[o2]) {
          const e3 = this[g];
          return i(() => e3, "Headers", "value");
        }
        return i(() => [...this[g].values()], "Headers", "value");
      }
      entries() {
        if (d.brandCheck(this, f), "immutable" === this[o2]) {
          const e3 = this[g];
          return i(() => e3, "Headers", "key+value");
        }
        return i(() => [...this[g].values()], "Headers", "key+value");
      }
      forEach(e3, n3 = globalThis) {
        if (d.brandCheck(this, f), d.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" }), "function" != typeof e3) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [t3, a3] of this) e3.apply(n3, [a3, t3, this]);
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return d.brandCheck(this, f), this[a2];
      }
    }
    f.prototype[Symbol.iterator] = f.prototype.entries, Object.defineProperties(f.prototype, { append: r, delete: r, get: r, has: r, set: r, getSetCookie: r, keys: r, values: r, entries: r, forEach: r, [Symbol.iterator]: { enumerable: false }, [Symbol.toStringTag]: { value: "Headers", configurable: true }, [l.inspect.custom]: { enumerable: false } }), d.converters.HeadersInit = function(e3) {
      if ("Object" === d.util.Type(e3)) return e3[Symbol.iterator] ? d.converters["sequence<sequence<ByteString>>"](e3) : d.converters["record<ByteString, ByteString>"](e3);
      throw d.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
    }, e2.exports = { fill: h, Headers: f, HeadersList: k };
  }