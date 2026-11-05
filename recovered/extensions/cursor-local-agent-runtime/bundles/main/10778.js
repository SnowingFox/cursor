// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 10778 range:306042..306514
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10778: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.defaultIfEmpty = void 0;
    const n = r(51078);
    t.defaultIfEmpty = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = false;
        t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => {
          o = true, r2.next(e3);
        }, complete: () => {
          o || r2.next(e2), r2.complete();
        } }));
      });
    };
  }