// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 41974 range:234134..236084
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41974: (A, e, t) => {
  "use strict";
  const { kConstruct: r } = t(71716), { Cache: s } = t(91947), { webidl: o } = t(43290), { kEnumerableProperty: n } = t(55201);
  class i {
    #S = /* @__PURE__ */ new Map();
    constructor() {
      arguments[0] !== r && o.illegalConstructor(), o.util.markAsUncloneable(this);
    }
    async match(A2, e2 = {}) {
      if (o.brandCheck(this, i), o.argumentLengthCheck(arguments, 1, "CacheStorage.match"), A2 = o.converters.RequestInfo(A2), null != (e2 = o.converters.MultiCacheQueryOptions(e2)).cacheName) {
        if (this.#S.has(e2.cacheName)) {
          const t2 = this.#S.get(e2.cacheName), o2 = new s(r, t2);
          return await o2.match(A2, e2);
        }
      } else for (const t2 of this.#S.values()) {
        const o2 = new s(r, t2), n2 = await o2.match(A2, e2);
        if (void 0 !== n2) return n2;
      }
    }
    async has(A2) {
      o.brandCheck(this, i);
      const e2 = "CacheStorage.has";
      return o.argumentLengthCheck(arguments, 1, e2), A2 = o.converters.DOMString(A2, e2, "cacheName"), this.#S.has(A2);
    }
    async open(A2) {
      o.brandCheck(this, i);
      const e2 = "CacheStorage.open";
      if (o.argumentLengthCheck(arguments, 1, e2), A2 = o.converters.DOMString(A2, e2, "cacheName"), this.#S.has(A2)) {
        const e3 = this.#S.get(A2);
        return new s(r, e3);
      }
      const t2 = [];
      return this.#S.set(A2, t2), new s(r, t2);
    }
    async delete(A2) {
      o.brandCheck(this, i);
      const e2 = "CacheStorage.delete";
      return o.argumentLengthCheck(arguments, 1, e2), A2 = o.converters.DOMString(A2, e2, "cacheName"), this.#S.delete(A2);
    }
    async keys() {
      o.brandCheck(this, i);
      return [...this.#S.keys()];
    }
  }
  Object.defineProperties(i.prototype, { [Symbol.toStringTag]: { value: "CacheStorage", configurable: true }, match: n, has: n, open: n, delete: n, keys: n }), A.exports = { CacheStorage: i };
}