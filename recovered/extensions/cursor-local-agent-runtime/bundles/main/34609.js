// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 34609 range:1044742..1045135
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34609: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.skipWhile = void 0;
    const n = r(51078);
    t.skipWhile = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = false, s = 0;
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => (o || (o = !e2(t3, s++))) && r2.next(t3) }));
      });
    };
  }