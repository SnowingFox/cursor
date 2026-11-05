// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 22471 range:4449853..4450192
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22471: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.toArray = void 0;
    const n = r(78339), s = r(51078), o = (e2, t2) => (e2.push(t2), e2);
    t.toArray = function() {
      return (e2) => new s.Observable((t2) => {
        (0, n.reduce)(o, [])(e2).subscribe(t2);
      });
    };
  }