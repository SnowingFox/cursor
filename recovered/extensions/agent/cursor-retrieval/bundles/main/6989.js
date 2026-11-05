// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6989 range:833803..835759
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6989: (e2, a2, n2) => {
    "use strict";
    const { kConstruct: t2 } = n2(2381), { Cache: s2 } = n2(8642), { webidl: o2 } = n2(8005), { kEnumerableProperty: r2 } = n2(9361);
    class i2 {
      #a = /* @__PURE__ */ new Map();
      constructor() {
        arguments[0] !== t2 && o2.illegalConstructor();
      }
      async match(e3, a3 = {}) {
        if (o2.brandCheck(this, i2), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.match" }), e3 = o2.converters.RequestInfo(e3), null != (a3 = o2.converters.MultiCacheQueryOptions(a3)).cacheName) {
          if (this.#a.has(a3.cacheName)) {
            const n3 = this.#a.get(a3.cacheName), o3 = new s2(t2, n3);
            return await o3.match(e3, a3);
          }
        } else for (const n3 of this.#a.values()) {
          const o3 = new s2(t2, n3), r3 = await o3.match(e3, a3);
          if (void 0 !== r3) return r3;
        }
      }
      async has(e3) {
        return o2.brandCheck(this, i2), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.has" }), e3 = o2.converters.DOMString(e3), this.#a.has(e3);
      }
      async open(e3) {
        if (o2.brandCheck(this, i2), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.open" }), e3 = o2.converters.DOMString(e3), this.#a.has(e3)) {
          const a4 = this.#a.get(e3);
          return new s2(t2, a4);
        }
        const a3 = [];
        return this.#a.set(e3, a3), new s2(t2, a3);
      }
      async delete(e3) {
        return o2.brandCheck(this, i2), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.delete" }), e3 = o2.converters.DOMString(e3), this.#a.delete(e3);
      }
      async keys() {
        o2.brandCheck(this, i2);
        return [...this.#a.keys()];
      }
    }
    Object.defineProperties(i2.prototype, { [Symbol.toStringTag]: { value: "CacheStorage", configurable: true }, match: r2, has: r2, open: r2, delete: r2, keys: r2 }), e2.exports = { CacheStorage: i2 };
  }