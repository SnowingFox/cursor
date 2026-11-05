// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6218 range:2836609..2839762
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6218: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.MemoryCookieStore = void 0;
    const n2 = r2(798), s2 = r2(7204), i2 = r2(6595), o2 = r2(5779);
    class a extends i2.Store {
      constructor() {
        super(), this.synchronous = true, this.idx = /* @__PURE__ */ Object.create(null);
      }
      findCookie(t3, e3, r3, n3) {
        const s3 = (0, o2.createPromiseCallback)(n3);
        if (null == t3 || null == e3 || null == r3) return s3.resolve(void 0);
        const i3 = this.idx[t3]?.[e3]?.[r3];
        return s3.resolve(i3);
      }
      findCookies(t3, e3, r3 = false, i3) {
        "function" == typeof r3 && (i3 = r3, r3 = true);
        const a2 = [], u = (0, o2.createPromiseCallback)(i3);
        if (!t3) return u.resolve([]);
        let c;
        c = e3 ? function(t4) {
          for (const r4 in t4) if ((0, n2.pathMatch)(e3, r4)) {
            const e4 = t4[r4];
            for (const t5 in e4) {
              const r5 = e4[t5];
              r5 && a2.push(r5);
            }
          }
        } : function(t4) {
          for (const e4 in t4) {
            const r4 = t4[e4];
            for (const t5 in r4) {
              const e5 = r4[t5];
              e5 && a2.push(e5);
            }
          }
        };
        const l = (0, s2.permuteDomain)(t3, r3) || [t3], m = this.idx;
        return l.forEach((t4) => {
          const e4 = m[t4];
          e4 && c(e4);
        }), u.resolve(a2);
      }
      putCookie(t3, e3) {
        const r3 = (0, o2.createPromiseCallback)(e3), { domain: n3, path: s3, key: i3 } = t3;
        if (null == n3 || null == s3 || null == i3) return r3.resolve(void 0);
        const a2 = this.idx[n3] ?? /* @__PURE__ */ Object.create(null);
        this.idx[n3] = a2;
        const u = a2[s3] ?? /* @__PURE__ */ Object.create(null);
        return a2[s3] = u, u[i3] = t3, r3.resolve(void 0);
      }
      updateCookie(t3, e3, r3) {
        if (!r3) return this.putCookie(e3);
        this.putCookie(e3, r3);
      }
      removeCookie(t3, e3, r3, n3) {
        const s3 = (0, o2.createPromiseCallback)(n3);
        return delete this.idx[t3]?.[e3]?.[r3], s3.resolve(void 0);
      }
      removeCookies(t3, e3, r3) {
        const n3 = (0, o2.createPromiseCallback)(r3), s3 = this.idx[t3];
        return s3 && (e3 ? delete s3[e3] : delete this.idx[t3]), n3.resolve(void 0);
      }
      removeAllCookies(t3) {
        const e3 = (0, o2.createPromiseCallback)(t3);
        return this.idx = /* @__PURE__ */ Object.create(null), e3.resolve(void 0);
      }
      getAllCookies(t3) {
        const e3 = (0, o2.createPromiseCallback)(t3), r3 = [], n3 = this.idx;
        return Object.keys(n3).forEach((t4) => {
          const e4 = n3[t4] ?? {};
          Object.keys(e4).forEach((t5) => {
            const n4 = e4[t5] ?? {};
            Object.keys(n4).forEach((t6) => {
              const e5 = n4[t6];
              null != e5 && r3.push(e5);
            });
          });
        }), r3.sort((t4, e4) => (t4.creationIndex || 0) - (e4.creationIndex || 0)), e3.resolve(r3);
      }
    }
    e2.MemoryCookieStore = a;
  }