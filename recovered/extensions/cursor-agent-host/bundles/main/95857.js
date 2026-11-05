// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 95857 range:14590820..14592742
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95857: (e, t, r) => {
    "use strict";
    const { kConstruct: n } = r(17945), { Cache: s } = r(57758), { webidl: o } = r(18193), { kEnumerableProperty: i } = r(83589);
    class a {
      #Ke = /* @__PURE__ */ new Map();
      constructor() {
        arguments[0] !== n && o.illegalConstructor();
      }
      async match(e2, t2 = {}) {
        if (o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, { header: "CacheStorage.match" }), e2 = o.converters.RequestInfo(e2), null != (t2 = o.converters.MultiCacheQueryOptions(t2)).cacheName) {
          if (this.#Ke.has(t2.cacheName)) {
            const r2 = this.#Ke.get(t2.cacheName), o2 = new s(n, r2);
            return await o2.match(e2, t2);
          }
        } else for (const r2 of this.#Ke.values()) {
          const o2 = new s(n, r2), i2 = await o2.match(e2, t2);
          if (void 0 !== i2) return i2;
        }
      }
      async has(e2) {
        return o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, { header: "CacheStorage.has" }), e2 = o.converters.DOMString(e2), this.#Ke.has(e2);
      }
      async open(e2) {
        if (o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, { header: "CacheStorage.open" }), e2 = o.converters.DOMString(e2), this.#Ke.has(e2)) {
          const t3 = this.#Ke.get(e2);
          return new s(n, t3);
        }
        const t2 = [];
        return this.#Ke.set(e2, t2), new s(n, t2);
      }
      async delete(e2) {
        return o.brandCheck(this, a), o.argumentLengthCheck(arguments, 1, { header: "CacheStorage.delete" }), e2 = o.converters.DOMString(e2), this.#Ke.delete(e2);
      }
      async keys() {
        o.brandCheck(this, a);
        return [...this.#Ke.keys()];
      }
    }
    Object.defineProperties(a.prototype, { [Symbol.toStringTag]: { value: "CacheStorage", configurable: true }, match: i, has: i, open: i, delete: i, keys: i }), e.exports = { CacheStorage: a };
  }