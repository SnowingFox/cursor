// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8809 range:815061..815772
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8809: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.single = void 0;
    const n2 = r2(1078), o2 = r2(231), s2 = r2(5841), i2 = r2(5007);
    t2.single = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let a2, c = false, u = false, l = 0;
        t3.subscribe((0, n2.operate)({ destination: r3, next: (n3) => {
          u = true, e3 && !e3(n3, l++, t3) || (c && r3.error(new s2.SequenceError("Too many matching values")), c = true, a2 = n3);
        }, complete: () => {
          c ? (r3.next(a2), r3.complete()) : r3.error(u ? new i2.NotFoundError("No matching values") : new o2.EmptyError());
        } }));
      });
    };
  }