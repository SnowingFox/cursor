// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 23190 range:4471940..4472767
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23190: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.repeatWhen = void 0;
    const n = r(51078), s = r(83043);
    t.repeatWhen = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o, i, a = false, c = false, l = false;
        const u = () => l && c && (r2.complete(), true), d = () => {
          l = false, o = t2.subscribe((0, n.operate)({ destination: r2, complete: () => {
            l = true, !u() && (i || (i = new s.Subject(), (0, n.from)(e2(i)).subscribe((0, n.operate)({ destination: r2, next: () => {
              o ? d() : a = true;
            }, complete: () => {
              c = true, u();
            } }))), i).next();
          } })), a && (o.unsubscribe(), o = null, a = false, d());
        };
        d();
      });
    };
  }