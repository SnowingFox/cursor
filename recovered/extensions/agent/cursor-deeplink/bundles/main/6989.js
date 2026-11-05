// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6989 range:624321..626263
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6989: (e2, t2, A2) => {
    "use strict";
    const { kConstruct: n2 } = A2(2381), { Cache: r2 } = A2(8642), { webidl: o2 } = A2(8005), { kEnumerableProperty: s } = A2(9361);
    class i {
      #t = /* @__PURE__ */ new Map();
      constructor() {
        arguments[0] !== n2 && o2.illegalConstructor();
      }
      async match(e3, t3 = {}) {
        if (o2.brandCheck(this, i), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.match" }), e3 = o2.converters.RequestInfo(e3), null != (t3 = o2.converters.MultiCacheQueryOptions(t3)).cacheName) {
          if (this.#t.has(t3.cacheName)) {
            const A3 = this.#t.get(t3.cacheName), o3 = new r2(n2, A3);
            return await o3.match(e3, t3);
          }
        } else for (const A3 of this.#t.values()) {
          const o3 = new r2(n2, A3), s2 = await o3.match(e3, t3);
          if (void 0 !== s2) return s2;
        }
      }
      async has(e3) {
        return o2.brandCheck(this, i), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.has" }), e3 = o2.converters.DOMString(e3), this.#t.has(e3);
      }
      async open(e3) {
        if (o2.brandCheck(this, i), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.open" }), e3 = o2.converters.DOMString(e3), this.#t.has(e3)) {
          const t4 = this.#t.get(e3);
          return new r2(n2, t4);
        }
        const t3 = [];
        return this.#t.set(e3, t3), new r2(n2, t3);
      }
      async delete(e3) {
        return o2.brandCheck(this, i), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.delete" }), e3 = o2.converters.DOMString(e3), this.#t.delete(e3);
      }
      async keys() {
        o2.brandCheck(this, i);
        return [...this.#t.keys()];
      }
    }
    Object.defineProperties(i.prototype, { [Symbol.toStringTag]: { value: "CacheStorage", configurable: true }, match: s, has: s, open: s, delete: s, keys: s }), e2.exports = { CacheStorage: i };
  }