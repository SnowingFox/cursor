// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 60707 range:4737272..4737914
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60707: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.retryWhen = void 0;
    const n = r(51078), s = r(83043);
    t.retryWhen = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o, i, a = false;
        const c = () => {
          o = t2.subscribe((0, n.operate)({ destination: r2, error: (t3) => {
            i || (i = new s.Subject(), (0, n.from)(e2(i)).subscribe((0, n.operate)({ destination: r2, next: () => o ? c() : a = true }))), i && i.next(t3);
          } })), a && (o.unsubscribe(), o = null, a = false, c());
        };
        c();
      });
    };
  }