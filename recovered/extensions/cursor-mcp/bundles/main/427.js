// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 427 range:26401..26891
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
427: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.connect = void 0;
    const n2 = r2(1078), o2 = r2(3043), s2 = r2(2062), i2 = { connector: () => new o2.Subject() };
    t2.connect = function(e3, t3 = i2) {
      const { connector: r3 } = t3;
      return (t4) => new n2.Observable((o3) => {
        const i3 = r3();
        (0, n2.from)(e3((0, s2.fromSubscribable)(i3))).subscribe(o3), o3.add(t4.subscribe(i3));
      });
    };
  }