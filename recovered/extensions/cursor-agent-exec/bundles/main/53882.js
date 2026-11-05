// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 53882 range:4552643..4553270
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53882: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.skipLast = void 0;
    const n = r(44896), s = r(51078);
    t.skipLast = function(e2) {
      return e2 <= 0 ? n.identity : (t2) => new s.Observable((r2) => {
        let n2 = new Array(e2), o = 0;
        return t2.subscribe((0, s.operate)({ destination: r2, next: (t3) => {
          const s2 = o++;
          if (s2 < e2) n2[s2] = t3;
          else {
            const o2 = s2 % e2, i = n2[o2];
            n2[o2] = t3, r2.next(i);
          }
        } })), () => {
          n2 = null;
        };
      });
    };
  }