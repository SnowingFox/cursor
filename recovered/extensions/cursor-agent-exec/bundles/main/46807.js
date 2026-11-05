// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 46807 range:3366995..3368421
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
46807: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.groupBy = void 0;
    const n = r(51078), s = r(83043);
    t.groupBy = function(e2, t2, r2, o) {
      return (i) => new n.Observable((a) => {
        let c;
        t2 && "function" != typeof t2 ? { duration: r2, element: c, connector: o } = t2 : c = t2;
        const l = /* @__PURE__ */ new Map(), u = (e3) => {
          l.forEach(e3), e3(a);
        }, d = (e3) => u((t3) => t3.error(e3)), p = (0, n.operate)({ destination: a, next: (t3) => {
          try {
            const i2 = e2(t3);
            let u2 = l.get(i2);
            if (!u2) {
              l.set(i2, u2 = o ? o() : new s.Subject());
              const e3 = (function(e4, t4) {
                const r3 = new n.Observable((e5) => t4.subscribe(e5));
                return r3.key = e4, r3;
              })(i2, u2);
              if (a.next(e3), r2) {
                const t4 = (0, n.operate)({ destination: u2, next: () => {
                  u2.complete(), t4?.unsubscribe();
                }, finalize: () => l.delete(i2) });
                p.add((0, n.from)(r2(e3)).subscribe(t4));
              }
            }
            u2.next(c ? c(t3) : t3);
          } catch (e3) {
            d(e3);
          }
        }, error: d, complete: () => u((e3) => e3.complete()), finalize: () => l.clear() });
        i.subscribe(p);
      });
    };
  }