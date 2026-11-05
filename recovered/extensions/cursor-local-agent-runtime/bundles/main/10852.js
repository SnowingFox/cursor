// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 10852 range:306516..307045
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10852: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.firstValueFrom = void 0;
    const n = r(51078), o = r(50231);
    t.firstValueFrom = function(e2, t2) {
      const r2 = "object" == typeof t2;
      return new Promise((s, i) => {
        const a = new n.Subscriber({ next: (e3) => {
          s(e3), a.unsubscribe();
        }, error: i, complete: () => {
          r2 ? s(t2.defaultValue) : i(new o.EmptyError());
        } });
        e2.subscribe(a);
      });
    };
  }