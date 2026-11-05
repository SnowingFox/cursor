// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3786 range:286799..287488
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3786: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.takeLast = void 0;
    const n2 = r2(744), o2 = r2(1078);
    t2.takeLast = function(e3) {
      return e3 <= 0 ? () => n2.EMPTY : (t3) => new o2.Observable((r3) => {
        let n3 = new Array(e3), s2 = 0;
        t3.subscribe((0, o2.operate)({ destination: r3, next: (t4) => {
          n3[s2++ % e3] = t4;
        }, complete: () => {
          const t4 = e3 <= s2 ? s2 : 0, o3 = Math.min(e3, s2);
          for (let s3 = 0; s3 < o3; s3++) r3.next(n3[(t4 + s3) % e3]);
          r3.complete();
        }, finalize: () => {
          n3 = null;
        } }));
      });
    };
  }