// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 22227 range:1051581..1052206
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22227: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.sample = void 0;
    const n = r(51078), s = r(64462);
    t.sample = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = false, i = null;
        t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => {
          o = true, i = e3;
        } })), (0, n.from)(e2).subscribe((0, n.operate)({ destination: r2, next: () => {
          if (o) {
            o = false;
            const e3 = i;
            i = null, r2.next(e3);
          }
        }, complete: s.noop }));
      });
    };
  }