// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3882 range:293775..294416
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3882: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.skipLast = void 0;
    const n2 = r2(4896), o2 = r2(1078);
    t2.skipLast = function(e3) {
      return e3 <= 0 ? n2.identity : (t3) => new o2.Observable((r3) => {
        let n3 = new Array(e3), s2 = 0;
        return t3.subscribe((0, o2.operate)({ destination: r3, next: (t4) => {
          const o3 = s2++;
          if (o3 < e3) n3[o3] = t4;
          else {
            const s3 = o3 % e3, i2 = n3[s3];
            n3[s3] = t4, r3.next(i2);
          }
        } })), () => {
          n3 = null;
        };
      });
    };
  }