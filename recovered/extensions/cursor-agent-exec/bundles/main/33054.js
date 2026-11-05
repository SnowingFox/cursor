// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 33054 range:2915040..2916452
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33054: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.share = void 0;
    const n = r(51078), s = r(83043);
    function o(e2, t2, ...r2) {
      if (true === t2) return void e2();
      if (false === t2) return;
      const s2 = new n.Subscriber({ next: () => {
        s2.unsubscribe(), e2();
      } });
      return (0, n.from)(t2(...r2)).subscribe(s2);
    }
    t.share = function(e2 = {}) {
      const { connector: t2 = () => new s.Subject(), resetOnError: r2 = true, resetOnComplete: i = true, resetOnRefCountZero: a = true } = e2;
      return (e3) => {
        let s2, c, l, u = 0, d = false, p = false;
        const m = () => {
          c?.unsubscribe(), c = void 0;
        }, h = () => {
          m(), s2 = l = void 0, d = p = false;
        }, f = () => {
          const e4 = s2;
          h(), e4?.unsubscribe();
        };
        return new n.Observable((g) => {
          u++, p || d || m();
          const y = l = l ?? t2();
          g.add(() => {
            u--, 0 !== u || p || d || (c = o(f, a));
          }), y.subscribe(g), !s2 && u > 0 && (s2 = new n.Subscriber({ next: (e4) => y.next(e4), error: (e4) => {
            p = true, m(), c = o(h, r2, e4), y.error(e4);
          }, complete: () => {
            d = true, m(), c = o(h, i), y.complete();
          } }), (0, n.from)(e3).subscribe(s2));
        });
      };
    };
  }