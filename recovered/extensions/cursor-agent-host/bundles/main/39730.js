// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 39730 range:7495007..7495626
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39730: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createFind = t.find = void 0;
    const n = r(51078);
    function s(e2, t2, r2, s2) {
      const o = "index" === t2;
      let i = 0;
      r2.subscribe((0, n.operate)({ destination: s2, next: (t3) => {
        const n2 = i++;
        e2(t3, n2, r2) && (s2.next(o ? n2 : t3), s2.complete());
      }, complete: () => {
        s2.next(o ? -1 : void 0), s2.complete();
      } }));
    }
    t.find = function(e2) {
      return (t2) => new n.Observable((r2) => s(e2, "value", t2, r2));
    }, t.createFind = s;
  }