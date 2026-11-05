// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 46807 range:1387311..1388737
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
46807: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.groupBy = void 0;
    const n = r(51078), o = r(83043);
    t.groupBy = function(e2, t2, r2, s) {
      return (i) => new n.Observable((a) => {
        let l;
        t2 && "function" != typeof t2 ? { duration: r2, element: l, connector: s } = t2 : l = t2;
        const c = /* @__PURE__ */ new Map(), u = (e3) => {
          c.forEach(e3), e3(a);
        }, d = (e3) => u((t3) => t3.error(e3)), p = (0, n.operate)({ destination: a, next: (t3) => {
          try {
            const i2 = e2(t3);
            let u2 = c.get(i2);
            if (!u2) {
              c.set(i2, u2 = s ? s() : new o.Subject());
              const e3 = (function(e4, t4) {
                const r3 = new n.Observable((e5) => t4.subscribe(e5));
                return r3.key = e4, r3;
              })(i2, u2);
              if (a.next(e3), r2) {
                const t4 = (0, n.operate)({ destination: u2, next: () => {
                  u2.complete(), t4?.unsubscribe();
                }, finalize: () => c.delete(i2) });
                p.add((0, n.from)(r2(e3)).subscribe(t4));
              }
            }
            u2.next(l ? l(t3) : t3);
          } catch (e3) {
            d(e3);
          }
        }, error: d, complete: () => u((e3) => e3.complete()), finalize: () => c.clear() });
        i.subscribe(p);
      });
    };
  }