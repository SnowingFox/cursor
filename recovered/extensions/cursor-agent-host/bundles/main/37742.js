// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 37742 range:7336340..7336826
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37742: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.take = void 0;
    const n = r(744), s = r(51078);
    t.take = function(e2) {
      return e2 <= 0 ? () => n.EMPTY : (t2) => new s.Observable((r2) => {
        let n2 = 0;
        const o = (0, s.operate)({ destination: r2, next: (t3) => {
          ++n2 < e2 ? r2.next(t3) : (o.unsubscribe(), r2.next(t3), r2.complete());
        } });
        t2.subscribe(o);
      });
    };
  }