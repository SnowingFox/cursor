// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 82120 range:7440376..7440869
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82120: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.switchScan = void 0;
    const n = r(20711), o = r(51078);
    t.switchScan = function(e2, t2) {
      return (r2) => new o.Observable((s) => {
        let i = t2;
        return (0, n.switchMap)((t3, r3) => e2(i, t3, r3))(r2).subscribe((0, o.operate)({ destination: s, next: (e3) => {
          i = e3, s.next(e3);
        } })), () => {
          i = null;
        };
      });
    };
  }