// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 90427 range:7713897..7714374
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90427: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.connect = void 0;
    const n = r(51078), o = r(83043), s = r(96824), i = { connector: () => new o.Subject() };
    t.connect = function(e2, t2 = i) {
      const { connector: r2 } = t2;
      return (t3) => new n.Observable((o2) => {
        const i2 = r2();
        (0, n.from)(e2((0, s.fromSubscribable)(i2))).subscribe(o2), o2.add(t3.subscribe(i2));
      });
    };
  }