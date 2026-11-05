// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 4591 range:402606..402977
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4591: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.filter = void 0;
    const n = r(51078);
    t.filter = function(e2, t2) {
      return (r2) => new n.Observable((s) => {
        let o = 0;
        r2.subscribe((0, n.operate)({ destination: s, next: (r3) => e2.call(t2, r3, o++) && s.next(r3) }));
      });
    };
  }