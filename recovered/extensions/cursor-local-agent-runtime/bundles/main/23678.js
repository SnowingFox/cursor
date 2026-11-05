// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 23678 range:674428..674933
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23678: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.lastValueFrom = void 0;
    const n = r(50231);
    t.lastValueFrom = function(e2, t2) {
      const r2 = "object" == typeof t2;
      return new Promise((o, s) => {
        let i, a = false;
        e2.subscribe({ next: (e3) => {
          i = e3, a = true;
        }, error: s, complete: () => {
          a ? o(i) : r2 ? o(t2.defaultValue) : s(new n.EmptyError());
        } });
      });
    };
  }