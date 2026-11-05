// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2932 range:397872..405725
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2932: (e2, t2, A2) => {
    "use strict";
    const { kHeadersList: n2, kConstruct: r2 } = A2(8832), { kGuard: o2 } = A2(5899), { kEnumerableProperty: s } = A2(9361), { makeIterator: i, isValidHeaderName: a, isValidHeaderValue: c } = A2(5728), l = A2(9023), { webidl: u } = A2(8005), g = A2(2613), E = /* @__PURE__ */ Symbol("headers map"), h = /* @__PURE__ */ Symbol("headers map sorted");
    function d(e3) {
      return 10 === e3 || 13 === e3 || 9 === e3 || 32 === e3;
    }
    function I(e3) {
      let t3 = 0, A3 = e3.length;
      for (; A3 > t3 && d(e3.charCodeAt(A3 - 1)); ) --A3;
      for (; A3 > t3 && d(e3.charCodeAt(t3)); ) ++t3;
      return 0 === t3 && A3 === e3.length ? e3 : e3.substring(t3, A3);
    }
    function B(e3, t3) {
      if (Array.isArray(t3)) for (let A3 = 0; A3 < t3.length; ++A3) {
        const n3 = t3[A3];
        if (2 !== n3.length) throw u.errors.exception({ header: "Headers constructor", message: `expected name/value pair to be length 2, found ${n3.length}.` });
        Q(e3, n3[0], n3[1]);
      }
      else {
        if ("object" != typeof t3 || null === t3) throw u.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
        {
          const A3 = Object.keys(t3);
          for (let n3 = 0; n3 < A3.length; ++n3) Q(e3, A3[n3], t3[A3[n3]]);
        }
      }
    }
    function Q(e3, t3, A3) {
      if (A3 = I(A3), !a(t3)) throw u.errors.invalidArgument({ prefix: "Headers.append", value: t3, type: "header name" });
      if (!c(A3)) throw u.errors.invalidArgument({ prefix: "Headers.append", value: A3, type: "header value" });
      if ("immutable" === e3[o2]) throw new TypeError("immutable");
      return e3[o2], e3[n2].append(t3, A3);
    }
    class f {
      cookies = null;
      constructor(e3) {
        e3 instanceof f ? (this[E] = new Map(e3[E]), this[h] = e3[h], this.cookies = null === e3.cookies ? null : [...e3.cookies]) : (this[E] = new Map(e3), this[h] = null);
      }
      contains(e3) {
        return e3 = e3.toLowerCase(), this[E].has(e3);
      }
      clear() {
        this[E].clear(), this[h] = null, this.cookies = null;
      }
      append(e3, t3) {
        this[h] = null;
        const A3 = e3.toLowerCase(), n3 = this[E].get(A3);
        if (n3) {
          const e4 = "cookie" === A3 ? "; " : ", ";
          this[E].set(A3, { name: n3.name, value: `${n3.value}${e4}${t3}` });
        } else this[E].set(A3, { name: e3, value: t3 });
        "set-cookie" === A3 && (this.cookies ??= [], this.cookies.push(t3));
      }
      set(e3, t3) {
        this[h] = null;
        const A3 = e3.toLowerCase();
        "set-cookie" === A3 && (this.cookies = [t3]), this[E].set(A3, { name: e3, value: t3 });
      }
      delete(e3) {
        this[h] = null, "set-cookie" === (e3 = e3.toLowerCase()) && (this.cookies = null), this[E].delete(e3);
      }
      get(e3) {
        const t3 = this[E].get(e3.toLowerCase());
        return void 0 === t3 ? null : t3.value;
      }
      *[Symbol.iterator]() {
        for (const [e3, { value: t3 }] of this[E]) yield [e3, t3];
      }
      get entries() {
        const e3 = {};
        if (this[E].size) for (const { name: t3, value: A3 } of this[E].values()) e3[t3] = A3;
        return e3;
      }
    }
    class C {
      constructor(e3 = void 0) {
        e3 !== r2 && (this[n2] = new f(), this[o2] = "none", void 0 !== e3 && B(this, e3 = u.converters.HeadersInit(e3)));
      }
      append(e3, t3) {
        return u.brandCheck(this, C), u.argumentLengthCheck(arguments, 2, { header: "Headers.append" }), Q(this, e3 = u.converters.ByteString(e3), t3 = u.converters.ByteString(t3));
      }
      delete(e3) {
        if (u.brandCheck(this, C), u.argumentLengthCheck(arguments, 1, { header: "Headers.delete" }), e3 = u.converters.ByteString(e3), !a(e3)) throw u.errors.invalidArgument({ prefix: "Headers.delete", value: e3, type: "header name" });
        if ("immutable" === this[o2]) throw new TypeError("immutable");
        this[o2], this[n2].contains(e3) && this[n2].delete(e3);
      }
      get(e3) {
        if (u.brandCheck(this, C), u.argumentLengthCheck(arguments, 1, { header: "Headers.get" }), e3 = u.converters.ByteString(e3), !a(e3)) throw u.errors.invalidArgument({ prefix: "Headers.get", value: e3, type: "header name" });
        return this[n2].get(e3);
      }
      has(e3) {
        if (u.brandCheck(this, C), u.argumentLengthCheck(arguments, 1, { header: "Headers.has" }), e3 = u.converters.ByteString(e3), !a(e3)) throw u.errors.invalidArgument({ prefix: "Headers.has", value: e3, type: "header name" });
        return this[n2].contains(e3);
      }
      set(e3, t3) {
        if (u.brandCheck(this, C), u.argumentLengthCheck(arguments, 2, { header: "Headers.set" }), e3 = u.converters.ByteString(e3), t3 = I(t3 = u.converters.ByteString(t3)), !a(e3)) throw u.errors.invalidArgument({ prefix: "Headers.set", value: e3, type: "header name" });
        if (!c(t3)) throw u.errors.invalidArgument({ prefix: "Headers.set", value: t3, type: "header value" });
        if ("immutable" === this[o2]) throw new TypeError("immutable");
        this[o2], this[n2].set(e3, t3);
      }
      getSetCookie() {
        u.brandCheck(this, C);
        const e3 = this[n2].cookies;
        return e3 ? [...e3] : [];
      }
      get [h]() {
        if (this[n2][h]) return this[n2][h];
        const e3 = [], t3 = [...this[n2]].sort((e4, t4) => e4[0] < t4[0] ? -1 : 1), A3 = this[n2].cookies;
        for (let n3 = 0; n3 < t3.length; ++n3) {
          const [r3, o3] = t3[n3];
          if ("set-cookie" === r3) for (let t4 = 0; t4 < A3.length; ++t4) e3.push([r3, A3[t4]]);
          else g(null !== o3), e3.push([r3, o3]);
        }
        return this[n2][h] = e3, e3;
      }
      keys() {
        if (u.brandCheck(this, C), "immutable" === this[o2]) {
          const e3 = this[h];
          return i(() => e3, "Headers", "key");
        }
        return i(() => [...this[h].values()], "Headers", "key");
      }
      values() {
        if (u.brandCheck(this, C), "immutable" === this[o2]) {
          const e3 = this[h];
          return i(() => e3, "Headers", "value");
        }
        return i(() => [...this[h].values()], "Headers", "value");
      }
      entries() {
        if (u.brandCheck(this, C), "immutable" === this[o2]) {
          const e3 = this[h];
          return i(() => e3, "Headers", "key+value");
        }
        return i(() => [...this[h].values()], "Headers", "key+value");
      }
      forEach(e3, t3 = globalThis) {
        if (u.brandCheck(this, C), u.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" }), "function" != typeof e3) throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [A3, n3] of this) e3.apply(t3, [n3, A3, this]);
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return u.brandCheck(this, C), this[n2];
      }
    }
    C.prototype[Symbol.iterator] = C.prototype.entries, Object.defineProperties(C.prototype, { append: s, delete: s, get: s, has: s, set: s, getSetCookie: s, keys: s, values: s, entries: s, forEach: s, [Symbol.iterator]: { enumerable: false }, [Symbol.toStringTag]: { value: "Headers", configurable: true }, [l.inspect.custom]: { enumerable: false } }), u.converters.HeadersInit = function(e3) {
      if ("Object" === u.util.Type(e3)) return e3[Symbol.iterator] ? u.converters["sequence<sequence<ByteString>>"](e3) : u.converters["record<ByteString, ByteString>"](e3);
      throw u.errors.conversionFailed({ prefix: "Headers constructor", argument: "Argument 1", types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"] });
    }, e2.exports = { fill: B, Headers: C, HeadersList: f };
  }