// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9730 range:911245..911882
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9730: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createFind = t2.find = void 0;
    const n2 = r2(1078);
    function o2(e3, t3, r3, o3) {
      const s2 = "index" === t3;
      let i2 = 0;
      r3.subscribe((0, n2.operate)({ destination: o3, next: (t4) => {
        const n3 = i2++;
        e3(t4, n3, r3) && (o3.next(s2 ? n3 : t4), o3.complete());
      }, complete: () => {
        o3.next(s2 ? -1 : void 0), o3.complete();
      } }));
    }
    t2.find = function(e3) {
      return (t3) => new n2.Observable((r3) => o2(e3, "value", t3, r3));
    }, t2.createFind = o2;
  }