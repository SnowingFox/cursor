// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 99148 range:7931791..7932202
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99148: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.takeUntil = void 0;
    const n = r(51078), o = r(64462);
    t.takeUntil = function(e2) {
      return (t2) => new n.Observable((r2) => {
        (0, n.from)(e2).subscribe((0, n.operate)({ destination: r2, next: () => r2.complete(), complete: o.noop })), !r2.closed && t2.subscribe(r2);
      });
    };
  }