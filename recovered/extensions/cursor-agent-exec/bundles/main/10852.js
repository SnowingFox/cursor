// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 10852 range:711480..712009
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10852: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.firstValueFrom = void 0;
    const n = r(51078), s = r(50231);
    t.firstValueFrom = function(e2, t2) {
      const r2 = "object" == typeof t2;
      return new Promise((o, i) => {
        const a = new n.Subscriber({ next: (e3) => {
          o(e3), a.unsubscribe();
        }, error: i, complete: () => {
          r2 ? o(t2.defaultValue) : i(new s.EmptyError());
        } });
        e2.subscribe(a);
      });
    };
  }