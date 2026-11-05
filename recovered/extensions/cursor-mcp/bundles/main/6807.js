// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6807 range:580014..581463
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6807: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.groupBy = void 0;
    const n2 = r2(1078), o2 = r2(3043);
    t2.groupBy = function(e3, t3, r3, s2) {
      return (i2) => new n2.Observable((a2) => {
        let c;
        t3 && "function" != typeof t3 ? { duration: r3, element: c, connector: s2 } = t3 : c = t3;
        const u = /* @__PURE__ */ new Map(), l = (e4) => {
          u.forEach(e4), e4(a2);
        }, d = (e4) => l((t4) => t4.error(e4)), p = (0, n2.operate)({ destination: a2, next: (t4) => {
          try {
            const i3 = e3(t4);
            let l2 = u.get(i3);
            if (!l2) {
              u.set(i3, l2 = s2 ? s2() : new o2.Subject());
              const e4 = (function(e5, t5) {
                const r4 = new n2.Observable((e6) => t5.subscribe(e6));
                return r4.key = e5, r4;
              })(i3, l2);
              if (a2.next(e4), r3) {
                const t5 = (0, n2.operate)({ destination: l2, next: () => {
                  l2.complete(), t5?.unsubscribe();
                }, finalize: () => u.delete(i3) });
                p.add((0, n2.from)(r3(e4)).subscribe(t5));
              }
            }
            l2.next(c ? c(t4) : t4);
          } catch (e4) {
            d(e4);
          }
        }, error: d, complete: () => l((e4) => e4.complete()), finalize: () => u.clear() });
        i2.subscribe(p);
      });
    };
  }