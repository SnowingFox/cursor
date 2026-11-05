// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 47529 range:8063392..8063968
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47529: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.distinctUntilChanged = void 0;
    const n = r(44896), s = r(51078);
    function o(e2, t2) {
      return e2 === t2;
    }
    t.distinctUntilChanged = function(e2, t2 = n.identity) {
      return e2 = e2 ?? o, (r2) => new s.Observable((n2) => {
        let o2, i = true;
        r2.subscribe((0, s.operate)({ destination: n2, next: (r3) => {
          const s2 = t2(r3);
          !i && e2(o2, s2) || (i = false, o2 = s2, n2.next(r3));
        } }));
      });
    };
  }