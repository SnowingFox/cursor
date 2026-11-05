// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 72848 range:11109615..11117437
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
72848: (e, t, r) => {
    "use strict";
    const { kHeadersList: n, kConstruct: s } = r(15532), { kGuard: o } = r(77271), { kEnumerableProperty: i } = r(83589), { makeIterator: a, isValidHeaderName: c, isValidHeaderValue: l } = r(98116), u = r(39023), { webidl: d } = r(18193), p = r(42613), m = /* @__PURE__ */ Symbol("headers map"), h = /* @__PURE__ */ Symbol("headers map sorted");
    function f(e2) {
      return 10 === e2 || 13 === e2 || 9 === e2 || 32 === e2;
    }
    function g(e2) {
      let t2 = 0, r2 = e2.length;
      for (; r2 > t2 && f(e2.charCodeAt(r2 - 1)); ) --r2;
      for (; r2 > t2 && f(e2.charCodeAt(t2)); ) ++t2;
      return 0 === t2 && r2 === e2.length ? e2 : e2.substring(t2, r2);
    }
    function y(e2, t2) {
      if (Array.isArray(t2)) for (let r2 = 0; r2 < t2.length; ++r2) {
        const n2 = t2[r2];
        if (2 !== n2.length) throw d.errors.exception({ header: "Headers constructor", message: `expected name/value pair to be length 2, found ${n2.length}.` });
        w(e2, n2[0], n2[1]);
      }
      else {
        if ("object" != typeof t2 || null === t2) throw d.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
        {
          const r2 = Object.keys(t2);
          for (let n2 = 0; n2 < r2.length; ++n2) w(e2, r2[n2], t2[r2[n2]]);
        }
      }
    }
    function w(e2, t2, r2) {
      if (r2 = g(r2), !c(t2)) throw d.errors.invalidArgument({ prefix: "Headers.append", value: t2, type: "header name" });
      if (!l(r2)) throw d.errors.invalidArgument({ prefix: "Headers.append", value: r2, type: "header value" });
      if ("immutable" === e2[o]) throw new TypeError("immutable");
      return e2[o], e2[n].append(t2, r2);
    }
    class v {
      cookies = null;
      constructor(e2) {
        e2 instanceof v ? (this[m] = new Map(e2[m]), this[h] = e2[h], this.cookies = null === e2.cookies ? null : [...e2.cookies]) : (this[m] = new Map(e2), this[h] = null);
      }
      contains(e2) {
        return e2 = e2.toLowerCase(), this[m].has(e2);
      }
      clear() {
        this[m].clear(), this[h] = null, this.cookies = null;
      }
      append(e2, t2) {
        this[h] = null;
        const r2 = e2.toLowerCase(), n2 = this[m].get(r2);
        if (n2) {
          const e3 = "cookie" === r2 ? "; " : ", ";
          this[m].set(r2, { name: n2.name, value: `${n2.value}${e3}${t2}` });
        } else this[m].set(r2, { name: e2, value: t2 });
        "set-cookie" === r2 && (this.cookies ??= [], this.cookies.push(t2));
      }
      set(e2, t2) {
        this[h] = null;
        const r2 = e2.toLowerCase();
        "set-cookie" === r2 && (this.cookies = [t2]), this[m].set(r2, { name: e2, value: t2 });
      }
      delete(e2) {
        this[h] = null, "set-cookie" === (e2 = e2.toLowerCase()) && (this.cookies = null), this[m].delete(e2);
      }
      get(e2) {
        const t2 = this[m].get(e2.toLowerCase());
        return void 0 === t2 ? null : t2.value;
      }
      *[Symbol.iterator]() {
        for (const [e2, { value: t2 }] of this[m]) yield [e2, t2];
      }
      get entries() {
        const e2 = {};
        if (this[m].size) for (const { name: t2, value: r2 } of this[m].values()) e2[t2] = r2;
        return e2;
      }
    }
    class _ {
      constructor(e2 = void 0) {
        e2 !== s && (this[n] = new v(), this[o] = "none", void 0 !== e2 && y(this, e2 = d.converters.HeadersInit(e2)));
      }
      append(e2, t2) {
        return d.brandCheck(this, _), d.argumentLengthCheck(arguments, 2, { header: "Headers.append" }), w(this, e2 = d.converters.ByteString(e2), t2 = d.converters.ByteString(t2));
      }
      delete(e2) {
        if (d.brandCheck(this, _), d.argumentLengthCheck(arguments, 1, { header: "Headers.delete" }), e2 = d.converters.ByteString(e2), !c(e2)) throw d.errors.invalidArgument({ prefix: "Headers.delete", value: e2, type: "header name" });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[n].contains(e2) && this[n].delete(e2);
      }
      get(e2) {
        if (d.brandCheck(this, _), d.argumentLengthCheck(arguments, 1, { header: "Headers.get" }), e2 = d.converters.ByteString(e2), !c(e2)) throw d.errors.invalidArgument({ prefix: "Headers.get", value: e2, type: "header name" });
        return this[n].get(e2);
      }
      has(e2) {
        if (d.brandCheck(this, _), d.argumentLengthCheck(arguments, 1, { header: "Headers.has" }), e2 = d.converters.ByteString(e2), !c(e2)) throw d.errors.invalidArgument({ prefix: "Headers.has", value: e2, type: "header name" });
        return this[n].contains(e2);
      }
      set(e2, t2) {
        if (d.brandCheck(this, _), d.argumentLengthCheck(arguments, 2, { header: "Headers.set" }), e2 = d.converters.ByteString(e2), t2 = g(t2 = d.converters.ByteString(t2)), !c(e2)) throw d.errors.invalidArgument({ prefix: "Headers.set", value: e2, type: "header name" });
        if (!l(t2)) throw d.errors.invalidArgument({ prefix: "Headers.set", value: t2, type: "header value" });
        if ("immutable" === this[o]) throw new TypeError("immutable");
        this[o], this[n].set(e2, t2);
      }
      getSetCookie() {
        d.brandCheck(this, _);
        const e2 = this[n].cookies;
        return e2 ? [...e2] : [];
      }
      get [h]() {
        if (this[n][h]) return this[n][h];
        const e2 = [], t2 = [...this[n]].sort((e3, t3) => e3[0] < t3[0] ? -1 : 1), r2 = this[n].cookies;
        for (let n2 = 0; n2 < t2.length; ++n2) {
          const [s2, o2] = t2[n2];
          if ("set-cookie" === s2) for (let t3 = 0; t3 < r2.length; ++t3) e2.push([s2, r2[t3]]);
          else p(null !== o2), e2.push([s2, o2]);
        }
        return this[n][h] = e2, e2;
      }
      keys() {
        if (d.brandCheck(this, _), "immutable" === this[o]) {
          const e2 = this[h];
          return a(() => e2, "Headers", "key");
        }
        return a(() => [...this[h].values()], "Headers", "key");
      }
      values() {
        if (d.brandCheck(this, _), "immutable" === this[o]) {
          const e2 = this[h];
          return a(() => e2, "Headers", "value");
        }
        return a(() => [...this[h].values()], "Headers", "value");
      }
      entries() {
        if (d.brandCheck(this, _), "immutable" === this[o]) {
          const e2 = this[h];
          return a(() => e2, "Headers", "key+value");
        }
        return a(() => [...this[h].values()], "Headers", "key+value");
      }
      forEach(e2, t2 = globalThis) {
        if (d.brandCheck(this, _), d.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" }), "function" != typeof e2) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [r2, n2] of this) e2.apply(t2, [n2, r2, this]);
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return d.brandCheck(this, _), this[n];
      }
    }
    _.prototype[Symbol.iterator] = _.prototype.entries, Object.defineProperties(_.prototype, { append: i, delete: i, get: i, has: i, set: i, getSetCookie: i, keys: i, values: i, entries: i, forEach: i, [Symbol.iterator]: { enumerable: false }, [Symbol.toStringTag]: { value: "Headers", configurable: true }, [u.inspect.custom]: { enumerable: false } }), d.converters.HeadersInit = function(e2) {
      if ("Object" === d.util.Type(e2)) return e2[Symbol.iterator] ? d.converters["sequence<sequence<ByteString>>"](e2) : d.converters["record<ByteString, ByteString>"](e2);
      throw d.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
    }, e.exports = { fill: y, Headers: _, HeadersList: v };
  }