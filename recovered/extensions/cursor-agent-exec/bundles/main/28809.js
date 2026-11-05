// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 28809 range:2843910..2844605
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28809: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.single = void 0;
    const n = r(51078), s = r(50231), o = r(55841), i = r(65007);
    t.single = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let a, c = false, l = false, u = 0;
        t2.subscribe((0, n.operate)({ destination: r2, next: (n2) => {
          l = true, e2 && !e2(n2, u++, t2) || (c && r2.error(new o.SequenceError("Too many matching values")), c = true, a = n2);
        }, complete: () => {
          c ? (r2.next(a), r2.complete()) : r2.error(l ? new i.NotFoundError("No matching values") : new s.EmptyError());
        } }));
      });
    };
  }