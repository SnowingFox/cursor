// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 28809 range:925376..926071
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28809: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.single = void 0;
    const n = r(51078), o = r(50231), s = r(55841), i = r(65007);
    t.single = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let a, l = false, c = false, u = 0;
        t2.subscribe((0, n.operate)({ destination: r2, next: (n2) => {
          c = true, e2 && !e2(n2, u++, t2) || (l && r2.error(new s.SequenceError("Too many matching values")), l = true, a = n2);
        }, complete: () => {
          l ? (r2.next(a), r2.complete()) : r2.error(c ? new i.NotFoundError("No matching values") : new o.EmptyError());
        } }));
      });
    };
  }