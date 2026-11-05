// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5857 range:1340337..1342285
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5857: (t2, e2, r2) => {
    "use strict";
    const { kConstruct: n2 } = r2(7945), { Cache: s2 } = r2(7758), { webidl: i2 } = r2(8193), { kEnumerableProperty: o2 } = r2(3589);
    class a {
      #m = /* @__PURE__ */ new Map();
      constructor() {
        arguments[0] !== n2 && i2.illegalConstructor();
      }
      async match(t3, e3 = {}) {
        if (i2.brandCheck(this, a), i2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.match" }), t3 = i2.converters.RequestInfo(t3), null != (e3 = i2.converters.MultiCacheQueryOptions(e3)).cacheName) {
          if (this.#m.has(e3.cacheName)) {
            const r3 = this.#m.get(e3.cacheName), i3 = new s2(n2, r3);
            return await i3.match(t3, e3);
          }
        } else for (const r3 of this.#m.values()) {
          const i3 = new s2(n2, r3), o3 = await i3.match(t3, e3);
          if (void 0 !== o3) return o3;
        }
      }
      async has(t3) {
        return i2.brandCheck(this, a), i2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.has" }), t3 = i2.converters.DOMString(t3), this.#m.has(t3);
      }
      async open(t3) {
        if (i2.brandCheck(this, a), i2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.open" }), t3 = i2.converters.DOMString(t3), this.#m.has(t3)) {
          const e4 = this.#m.get(t3);
          return new s2(n2, e4);
        }
        const e3 = [];
        return this.#m.set(t3, e3), new s2(n2, e3);
      }
      async delete(t3) {
        return i2.brandCheck(this, a), i2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.delete" }), t3 = i2.converters.DOMString(t3), this.#m.delete(t3);
      }
      async keys() {
        i2.brandCheck(this, a);
        return [...this.#m.keys()];
      }
    }
    Object.defineProperties(a.prototype, { [Symbol.toStringTag]: { value: "CacheStorage", configurable: true }, match: o2, has: o2, open: o2, delete: o2, keys: o2 }), t2.exports = { CacheStorage: a };
  }