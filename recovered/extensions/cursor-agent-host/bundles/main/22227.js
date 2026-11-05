// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 22227 range:4445574..4446199
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22227: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.sample = void 0;
    const n = r(51078), s = r(64462);
    t.sample = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = false, i = null;
        t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => {
          o = true, i = e3;
        } })), (0, n.from)(e2).subscribe((0, n.operate)({ destination: r2, next: () => {
          if (o) {
            o = false;
            const e3 = i;
            i = null, r2.next(e3);
          }
        }, complete: s.noop }));
      });
    };
  }