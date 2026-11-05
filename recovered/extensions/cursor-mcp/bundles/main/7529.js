// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7529 range:692542..693133
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7529: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.distinctUntilChanged = void 0;
    const n2 = r2(4896), o2 = r2(1078);
    function s2(e3, t3) {
      return e3 === t3;
    }
    t2.distinctUntilChanged = function(e3, t3 = n2.identity) {
      return e3 = e3 ?? s2, (r3) => new o2.Observable((n3) => {
        let s3, i2 = true;
        r3.subscribe((0, o2.operate)({ destination: n3, next: (r4) => {
          const o3 = t3(r4);
          !i2 && e3(s3, o3) || (i2 = false, s3 = o3, n3.next(r4));
        } }));
      });
    };
  }