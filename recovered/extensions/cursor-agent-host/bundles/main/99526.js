// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 99526 range:15134514..15134997
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99526: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.every = void 0;
    const n = r(51078);
    t.every = function(e2, t2) {
      return (r2) => new n.Observable((s) => {
        let o = 0;
        r2.subscribe((0, n.operate)({ destination: s, next: (n2) => {
          e2.call(t2, n2, o++, r2) || (s.next(false), s.complete());
        }, complete: () => {
          s.next(true), s.complete();
        } }));
      });
    };
  }