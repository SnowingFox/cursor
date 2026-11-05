// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 23678 range:1085521..1086026
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23678: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.lastValueFrom = void 0;
    const n = r(50231);
    t.lastValueFrom = function(e2, t2) {
      const r2 = "object" == typeof t2;
      return new Promise((s, o) => {
        let i, a = false;
        e2.subscribe({ next: (e3) => {
          i = e3, a = true;
        }, error: o, complete: () => {
          a ? s(i) : r2 ? s(t2.defaultValue) : o(new n.EmptyError());
        } });
      });
    };
  }