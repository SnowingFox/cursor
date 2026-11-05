// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2120 range:198497..199006
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2120: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.switchScan = void 0;
    const n2 = r2(711), o2 = r2(1078);
    t2.switchScan = function(e3, t3) {
      return (r3) => new o2.Observable((s2) => {
        let i2 = t3;
        return (0, n2.switchMap)((t4, r4) => e3(i2, t4, r4))(r3).subscribe((0, o2.operate)({ destination: s2, next: (e4) => {
          i2 = e4, s2.next(e4);
        } })), () => {
          i2 = null;
        };
      });
    };
  }