// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 6989 range:544125..546067
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6989: (e2, n2, t2) => {
    "use strict";
    const { kConstruct: a2 } = t2(2381), { Cache: s2 } = t2(8642), { webidl: o2 } = t2(8005), { kEnumerableProperty: r } = t2(9361);
    class i {
      #n = /* @__PURE__ */ new Map();
      constructor() {
        arguments[0] !== a2 && o2.illegalConstructor();
      }
      async match(e3, n3 = {}) {
        if (o2.brandCheck(this, i), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.match" }), e3 = o2.converters.RequestInfo(e3), null != (n3 = o2.converters.MultiCacheQueryOptions(n3)).cacheName) {
          if (this.#n.has(n3.cacheName)) {
            const t3 = this.#n.get(n3.cacheName), o3 = new s2(a2, t3);
            return await o3.match(e3, n3);
          }
        } else for (const t3 of this.#n.values()) {
          const o3 = new s2(a2, t3), r2 = await o3.match(e3, n3);
          if (void 0 !== r2) return r2;
        }
      }
      async has(e3) {
        return o2.brandCheck(this, i), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.has" }), e3 = o2.converters.DOMString(e3), this.#n.has(e3);
      }
      async open(e3) {
        if (o2.brandCheck(this, i), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.open" }), e3 = o2.converters.DOMString(e3), this.#n.has(e3)) {
          const n4 = this.#n.get(e3);
          return new s2(a2, n4);
        }
        const n3 = [];
        return this.#n.set(e3, n3), new s2(a2, n3);
      }
      async delete(e3) {
        return o2.brandCheck(this, i), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.delete" }), e3 = o2.converters.DOMString(e3), this.#n.delete(e3);
      }
      async keys() {
        o2.brandCheck(this, i);
        return [...this.#n.keys()];
      }
    }
    Object.defineProperties(i.prototype, { [Symbol.toStringTag]: { value: "CacheStorage", configurable: true }, match: r, has: r, open: r, delete: r, keys: r }), e2.exports = { CacheStorage: i };
  }