// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2471 range:204621..204971
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2471: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.toArray = void 0;
    const n2 = r2(8339), o2 = r2(1078), s2 = (e3, t3) => (e3.push(t3), e3);
    t2.toArray = function() {
      return (e3) => new o2.Observable((t3) => {
        (0, n2.reduce)(s2, [])(e3).subscribe(t3);
      });
    };
  }