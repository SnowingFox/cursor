// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 90427 range:13029425..13029902
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90427: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.connect = void 0;
    const n = r(51078), s = r(83043), o = r(96824), i = { connector: () => new s.Subject() };
    t.connect = function(e2, t2 = i) {
      const { connector: r2 } = t2;
      return (t3) => new n.Observable((s2) => {
        const i2 = r2();
        (0, n.from)(e2((0, o.fromSubscribable)(i2))).subscribe(s2), s2.add(t3.subscribe(i2));
      });
    };
  }