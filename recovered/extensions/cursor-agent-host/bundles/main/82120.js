// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 82120 range:11854534..11855027
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82120: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.switchScan = void 0;
    const n = r(20711), s = r(51078);
    t.switchScan = function(e2, t2) {
      return (r2) => new s.Observable((o) => {
        let i = t2;
        return (0, n.switchMap)((t3, r3) => e2(i, t3, r3))(r2).subscribe((0, s.operate)({ destination: o, next: (e3) => {
          i = e3, o.next(e3);
        } })), () => {
          i = null;
        };
      });
    };
  }