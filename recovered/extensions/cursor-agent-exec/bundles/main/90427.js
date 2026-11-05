// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 90427 range:11218026..11218503
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