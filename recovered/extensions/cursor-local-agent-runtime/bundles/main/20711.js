// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 20711 range:605186..605862
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
20711: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.switchMap = void 0;
    const n = r(51078);
    t.switchMap = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = null, s = 0, i = false;
        const a = () => i && !o && r2.complete();
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          o?.unsubscribe();
          const i2 = s++;
          (0, n.from)(e2(t3, i2)).subscribe(o = (0, n.operate)({ destination: r2, complete: () => {
            o = null, a();
          } }));
        }, complete: () => {
          i = true, a();
        } }));
      });
    };
  }