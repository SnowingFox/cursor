// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 6989 range:513453..515409
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6989: (e2, n2, a2) => {
    "use strict";
    const { kConstruct: t2 } = a2(2381), { Cache: s2 } = a2(8642), { webidl: o2 } = a2(8005), { kEnumerableProperty: r2 } = a2(9361);
    class i2 {
      #n = /* @__PURE__ */ new Map();
      constructor() {
        arguments[0] !== t2 && o2.illegalConstructor();
      }
      async match(e3, n3 = {}) {
        if (o2.brandCheck(this, i2), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.match" }), e3 = o2.converters.RequestInfo(e3), null != (n3 = o2.converters.MultiCacheQueryOptions(n3)).cacheName) {
          if (this.#n.has(n3.cacheName)) {
            const a3 = this.#n.get(n3.cacheName), o3 = new s2(t2, a3);
            return await o3.match(e3, n3);
          }
        } else for (const a3 of this.#n.values()) {
          const o3 = new s2(t2, a3), r3 = await o3.match(e3, n3);
          if (void 0 !== r3) return r3;
        }
      }
      async has(e3) {
        return o2.brandCheck(this, i2), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.has" }), e3 = o2.converters.DOMString(e3), this.#n.has(e3);
      }
      async open(e3) {
        if (o2.brandCheck(this, i2), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.open" }), e3 = o2.converters.DOMString(e3), this.#n.has(e3)) {
          const n4 = this.#n.get(e3);
          return new s2(t2, n4);
        }
        const n3 = [];
        return this.#n.set(e3, n3), new s2(t2, n3);
      }
      async delete(e3) {
        return o2.brandCheck(this, i2), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.delete" }), e3 = o2.converters.DOMString(e3), this.#n.delete(e3);
      }
      async keys() {
        o2.brandCheck(this, i2);
        return [...this.#n.keys()];
      }
    }
    Object.defineProperties(i2.prototype, { [Symbol.toStringTag]: { value: "CacheStorage", configurable: true }, match: r2, has: r2, open: r2, delete: r2, keys: r2 }), e2.exports = { CacheStorage: i2 };
  }