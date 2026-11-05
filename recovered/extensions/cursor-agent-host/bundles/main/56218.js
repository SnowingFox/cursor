// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 56218 range:8709601..8712736
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56218: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.MemoryCookieStore = void 0;
    const n = r(80798), s = r(47204), o = r(46595), i = r(95779);
    class a extends o.Store {
      constructor() {
        super(), this.synchronous = true, this.idx = /* @__PURE__ */ Object.create(null);
      }
      findCookie(e2, t2, r2, n2) {
        const s2 = (0, i.createPromiseCallback)(n2);
        if (null == e2 || null == t2 || null == r2) return s2.resolve(void 0);
        const o2 = this.idx[e2]?.[t2]?.[r2];
        return s2.resolve(o2);
      }
      findCookies(e2, t2, r2 = false, o2) {
        "function" == typeof r2 && (o2 = r2, r2 = true);
        const a2 = [], c = (0, i.createPromiseCallback)(o2);
        if (!e2) return c.resolve([]);
        let l;
        l = t2 ? function(e3) {
          for (const r3 in e3) if ((0, n.pathMatch)(t2, r3)) {
            const t3 = e3[r3];
            for (const e4 in t3) {
              const r4 = t3[e4];
              r4 && a2.push(r4);
            }
          }
        } : function(e3) {
          for (const t3 in e3) {
            const r3 = e3[t3];
            for (const e4 in r3) {
              const t4 = r3[e4];
              t4 && a2.push(t4);
            }
          }
        };
        const u = (0, s.permuteDomain)(e2, r2) || [e2], d = this.idx;
        return u.forEach((e3) => {
          const t3 = d[e3];
          t3 && l(t3);
        }), c.resolve(a2);
      }
      putCookie(e2, t2) {
        const r2 = (0, i.createPromiseCallback)(t2), { domain: n2, path: s2, key: o2 } = e2;
        if (null == n2 || null == s2 || null == o2) return r2.resolve(void 0);
        const a2 = this.idx[n2] ?? /* @__PURE__ */ Object.create(null);
        this.idx[n2] = a2;
        const c = a2[s2] ?? /* @__PURE__ */ Object.create(null);
        return a2[s2] = c, c[o2] = e2, r2.resolve(void 0);
      }
      updateCookie(e2, t2, r2) {
        if (!r2) return this.putCookie(t2);
        this.putCookie(t2, r2);
      }
      removeCookie(e2, t2, r2, n2) {
        const s2 = (0, i.createPromiseCallback)(n2);
        return delete this.idx[e2]?.[t2]?.[r2], s2.resolve(void 0);
      }
      removeCookies(e2, t2, r2) {
        const n2 = (0, i.createPromiseCallback)(r2), s2 = this.idx[e2];
        return s2 && (t2 ? delete s2[t2] : delete this.idx[e2]), n2.resolve(void 0);
      }
      removeAllCookies(e2) {
        const t2 = (0, i.createPromiseCallback)(e2);
        return this.idx = /* @__PURE__ */ Object.create(null), t2.resolve(void 0);
      }
      getAllCookies(e2) {
        const t2 = (0, i.createPromiseCallback)(e2), r2 = [], n2 = this.idx;
        return Object.keys(n2).forEach((e3) => {
          const t3 = n2[e3] ?? {};
          Object.keys(t3).forEach((e4) => {
            const n3 = t3[e4] ?? {};
            Object.keys(n3).forEach((e5) => {
              const t4 = n3[e5];
              null != t4 && r2.push(t4);
            });
          });
        }), r2.sort((e3, t3) => (e3.creationIndex || 0) - (t3.creationIndex || 0)), t2.resolve(r2);
      }
    }
    t.MemoryCookieStore = a;
  }