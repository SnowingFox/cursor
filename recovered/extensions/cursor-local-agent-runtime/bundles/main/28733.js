// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 28733 range:923597..924639
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28733: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.throttle = void 0;
    const n = r(51078);
    t.throttle = function(e2, t2) {
      return (r2) => new n.Observable((o) => {
        const { leading: s = true, trailing: i = false } = t2 ?? {};
        let a = false, l = null, c = null, u = false;
        const d = () => {
          c?.unsubscribe(), c = null, i && (m(), u && o.complete());
        }, p = () => {
          c = null, u && o.complete();
        }, h = (t3) => c = (0, n.from)(e2(t3)).subscribe((0, n.operate)({ destination: o, next: d, complete: p })), m = () => {
          if (a) {
            a = false;
            const e3 = l;
            l = null, o.next(e3), !u && h(e3);
          }
        };
        r2.subscribe((0, n.operate)({ destination: o, next: (e3) => {
          a = true, l = e3, (!c || c.closed) && (s ? m() : h(e3));
        }, complete: () => {
          u = true, (!(i && a && c) || c.closed) && o.complete();
        } }));
      });
    };
  }