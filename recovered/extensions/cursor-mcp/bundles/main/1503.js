// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1503 range:169715..170855
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1503: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.combineLatestInit = t2.combineLatest = void 0;
    const n2 = r2(1078), o2 = r2(6800), s2 = r2(4896), i2 = r2(845), a2 = r2(744);
    function c(e3, t3 = s2.identity) {
      return (r3) => {
        const { length: o3 } = e3, s3 = new Array(o3);
        let i3 = o3, a3 = o3;
        for (let c2 = 0; c2 < o3; c2++) {
          const o4 = (0, n2.from)(e3[c2]);
          let u = false;
          o4.subscribe((0, n2.operate)({ destination: r3, next: (e4) => {
            s3[c2] = e4, u || (u = true, a3--), a3 || r3.next(t3(Array.from(s3)));
          }, complete: () => {
            --i3 || r3.complete();
          } }));
        }
      };
    }
    t2.combineLatest = function(e3, t3) {
      const r3 = (0, o2.arrayOrObject)(e3);
      if (!r3) throw new TypeError("sources must be an array or object");
      const { args: u, keys: l } = r3;
      return 0 === u.length ? a2.EMPTY : new n2.Observable(c(u, l ? (e4) => (0, i2.createObject)(l, e4) : t3 ? (e4) => t3(...e4) : s2.identity));
    }, t2.combineLatestInit = c;
  }