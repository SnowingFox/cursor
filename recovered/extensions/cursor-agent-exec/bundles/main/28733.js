// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 28733 range:2842131..2843173
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28733: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.throttle = void 0;
    const n = r(51078);
    t.throttle = function(e2, t2) {
      return (r2) => new n.Observable((s) => {
        const { leading: o = true, trailing: i = false } = t2 ?? {};
        let a = false, c = null, l = null, u = false;
        const d = () => {
          l?.unsubscribe(), l = null, i && (h(), u && s.complete());
        }, p = () => {
          l = null, u && s.complete();
        }, m = (t3) => l = (0, n.from)(e2(t3)).subscribe((0, n.operate)({ destination: s, next: d, complete: p })), h = () => {
          if (a) {
            a = false;
            const e3 = c;
            c = null, s.next(e3), !u && m(e3);
          }
        };
        r2.subscribe((0, n.operate)({ destination: s, next: (e3) => {
          a = true, c = e3, (!l || l.closed) && (o ? h() : m(e3));
        }, complete: () => {
          u = true, (!(i && a && l) || l.closed) && s.complete();
        } }));
      });
    };
  }