// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1855 range:190455..190787
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1855: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.scheduleObservable = void 0;
    const n2 = r2(1078), o2 = r2(6448), s2 = r2(4464);
    t2.scheduleObservable = function(e3, t3) {
      return (0, n2.from)(e3).pipe((0, s2.subscribeOn)(t3), (0, o2.observeOn)(t3));
    };
  }