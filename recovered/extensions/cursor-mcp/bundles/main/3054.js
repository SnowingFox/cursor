// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3054 range:238853..240286
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3054: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.share = void 0;
    const n2 = r2(1078), o2 = r2(3043);
    function s2(e3, t3, ...r3) {
      if (true === t3) return void e3();
      if (false === t3) return;
      const o3 = new n2.Subscriber({ next: () => {
        o3.unsubscribe(), e3();
      } });
      return (0, n2.from)(t3(...r3)).subscribe(o3);
    }
    t2.share = function(e3 = {}) {
      const { connector: t3 = () => new o2.Subject(), resetOnError: r3 = true, resetOnComplete: i2 = true, resetOnRefCountZero: a2 = true } = e3;
      return (e4) => {
        let o3, c, u, l = 0, d = false, p = false;
        const f = () => {
          c?.unsubscribe(), c = void 0;
        }, h = () => {
          f(), o3 = u = void 0, d = p = false;
        }, m = () => {
          const e5 = o3;
          h(), e5?.unsubscribe();
        };
        return new n2.Observable((g) => {
          l++, p || d || f();
          const y = u = u ?? t3();
          g.add(() => {
            l--, 0 !== l || p || d || (c = s2(m, a2));
          }), y.subscribe(g), !o3 && l > 0 && (o3 = new n2.Subscriber({ next: (e5) => y.next(e5), error: (e5) => {
            p = true, f(), c = s2(h, r3, e5), y.error(e5);
          }, complete: () => {
            d = true, f(), c = s2(h, i2), y.complete();
          } }), (0, n2.from)(e4).subscribe(o3));
        });
      };
    };
  }