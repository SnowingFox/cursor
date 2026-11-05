// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 88607 range:11133638..11134273
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88607: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.buffer = void 0;
    const n = r(51078), s = r(64462);
    t.buffer = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = [];
        return (0, n.from)(e2).subscribe((0, n.operate)({ destination: r2, next: () => {
          const e3 = o;
          o = [], r2.next(e3);
        }, complete: s.noop })), t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => o.push(e3), complete: () => {
          r2.next(o), r2.complete();
        } })), () => {
          o = null;
        };
      });
    };
  }