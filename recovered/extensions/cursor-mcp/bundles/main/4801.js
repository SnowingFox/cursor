// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4801 range:321993..322439
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4801: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.pairwise = void 0;
    const n2 = r2(1078);
    t2.pairwise = function() {
      return (e3) => new n2.Observable((t3) => {
        let r3, o2 = false;
        e3.subscribe((0, n2.operate)({ destination: t3, next: (e4) => {
          const n3 = r3;
          r3 = e4, o2 && t3.next([n3, e4]), o2 = true;
        } }));
      });
    };
  }