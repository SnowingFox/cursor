// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 38143 range:1181002..1181375
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38143: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.map = void 0;
    const n = r(51078);
    t.map = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = 0;
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          r2.next(e2(t3, o++));
        } }));
      });
    };
  }