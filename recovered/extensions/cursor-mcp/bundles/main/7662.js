// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7662 range:694082..694578
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7662: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.delayWhen = void 0;
    const n2 = r2(6409), o2 = r2(7742), s2 = r2(6426), i2 = r2(1207), a2 = r2(7996), c = r2(8143);
    t2.delayWhen = function e3(t3, r3) {
      return r3 ? (i3) => (0, n2.concat)((0, a2.rx)(r3, (0, o2.take)(1), (0, s2.ignoreElements)()), (0, a2.rx)(i3, e3(t3))) : (0, i2.mergeMap)((e4, r4) => (0, a2.rx)(t3(e4, r4), (0, o2.take)(1), (0, c.map)(() => e4)));
    };
  }