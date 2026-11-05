// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7041 range:588830..589467
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7041: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.exhaustMap = void 0;
    const n2 = r2(1078);
    t2.exhaustMap = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let o2 = 0, s2 = null, i2 = false;
        t3.subscribe((0, n2.operate)({ destination: r3, next: (t4) => {
          s2 || (s2 = (0, n2.operate)({ destination: r3, complete: () => {
            s2 = null, i2 && r3.complete();
          } }), (0, n2.from)(e3(t4, o2++)).subscribe(s2));
        }, complete: () => {
          i2 = true, !s2 && r3.complete();
        } }));
      });
    };
  }