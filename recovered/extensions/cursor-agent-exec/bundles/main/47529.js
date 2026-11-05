// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 47529 range:3484794..3485370
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47529: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.distinctUntilChanged = void 0;
    const n = r(44896), s = r(51078);
    function o(e2, t2) {
      return e2 === t2;
    }
    t.distinctUntilChanged = function(e2, t2 = n.identity) {
      return e2 = e2 ?? o, (r2) => new s.Observable((n2) => {
        let o2, i = true;
        r2.subscribe((0, s.operate)({ destination: n2, next: (r3) => {
          const s2 = t2(r3);
          !i && e2(o2, s2) || (i = false, o2 = s2, n2.next(r3));
        } }));
      });
    };
  }