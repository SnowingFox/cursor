// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 99148 range:11727679..11728090
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99148: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.takeUntil = void 0;
    const n = r(51078), s = r(64462);
    t.takeUntil = function(e2) {
      return (t2) => new n.Observable((r2) => {
        (0, n.from)(e2).subscribe((0, n.operate)({ destination: r2, next: () => r2.complete(), complete: s.noop })), !r2.closed && t2.subscribe(r2);
      });
    };
  }