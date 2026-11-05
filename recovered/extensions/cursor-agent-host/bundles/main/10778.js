// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 10778 range:3636645..3637117
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10778: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.defaultIfEmpty = void 0;
    const n = r(51078);
    t.defaultIfEmpty = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = false;
        t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => {
          s = true, r2.next(e3);
        }, complete: () => {
          s || r2.next(e2), r2.complete();
        } }));
      });
    };
  }