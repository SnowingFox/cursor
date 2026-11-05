// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 23190 range:644495..645322
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23190: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.repeatWhen = void 0;
    const n = r(51078), o = r(83043);
    t.repeatWhen = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s, i, a = false, l = false, c = false;
        const u = () => c && l && (r2.complete(), true), d = () => {
          c = false, s = t2.subscribe((0, n.operate)({ destination: r2, complete: () => {
            c = true, !u() && (i || (i = new o.Subject(), (0, n.from)(e2(i)).subscribe((0, n.operate)({ destination: r2, next: () => {
              s ? d() : a = true;
            }, complete: () => {
              l = true, u();
            } }))), i).next();
          } })), a && (s.unsubscribe(), s = null, a = false, d());
        };
        d();
      });
    };
  }