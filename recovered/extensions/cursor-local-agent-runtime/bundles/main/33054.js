// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 33054 range:1028345..1029757
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33054: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.share = void 0;
    const n = r(51078), o = r(83043);
    function s(e2, t2, ...r2) {
      if (true === t2) return void e2();
      if (false === t2) return;
      const o2 = new n.Subscriber({ next: () => {
        o2.unsubscribe(), e2();
      } });
      return (0, n.from)(t2(...r2)).subscribe(o2);
    }
    t.share = function(e2 = {}) {
      const { connector: t2 = () => new o.Subject(), resetOnError: r2 = true, resetOnComplete: i = true, resetOnRefCountZero: a = true } = e2;
      return (e3) => {
        let o2, l, c, u = 0, d = false, p = false;
        const h = () => {
          l?.unsubscribe(), l = void 0;
        }, m = () => {
          h(), o2 = c = void 0, d = p = false;
        }, f = () => {
          const e4 = o2;
          m(), e4?.unsubscribe();
        };
        return new n.Observable((g) => {
          u++, p || d || h();
          const y = c = c ?? t2();
          g.add(() => {
            u--, 0 !== u || p || d || (l = s(f, a));
          }), y.subscribe(g), !o2 && u > 0 && (o2 = new n.Subscriber({ next: (e4) => y.next(e4), error: (e4) => {
            p = true, h(), l = s(m, r2, e4), y.error(e4);
          }, complete: () => {
            d = true, h(), l = s(m, i), y.complete();
          } }), (0, n.from)(e3).subscribe(o2));
        });
      };
    };
  }