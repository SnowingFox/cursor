// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 59935 range:4714596..4715740
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
59935: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.mergeInternals = void 0;
    const n = r(51078), s = r(55830);
    t.mergeInternals = function(e2, t2, r2, o, i, a, c, l) {
      const u = [];
      let d = 0, p = 0, m = false;
      const h = () => {
        !m || u.length || d || t2.complete();
      }, f = (e3) => d < o ? g(e3) : u.push(e3), g = (e3) => {
        a && t2.next(e3), d++;
        let l2 = false;
        (0, n.from)(r2(e3, p++)).subscribe((0, n.operate)({ destination: t2, next: (e4) => {
          i?.(e4), a ? f(e4) : t2.next(e4);
        }, complete: () => {
          l2 = true;
        }, finalize: () => {
          if (l2) try {
            for (d--; u.length && d < o; ) {
              const e4 = u.shift();
              c ? (0, s.executeSchedule)(t2, c, () => g(e4)) : g(e4);
            }
            h();
          } catch (e4) {
            t2.error(e4);
          }
        } }));
      };
      return e2.subscribe((0, n.operate)({ destination: t2, next: f, complete: () => {
        m = true, h();
      } })), () => {
        l?.();
      };
    };
  }