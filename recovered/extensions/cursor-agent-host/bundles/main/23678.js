// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 23678 range:4499728..4500233
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