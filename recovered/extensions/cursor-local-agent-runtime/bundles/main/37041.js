// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 37041 range:1110563..1111179
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37041: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.exhaustMap = void 0;
    const n = r(51078);
    t.exhaustMap = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = 0, s = null, i = false;
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          s || (s = (0, n.operate)({ destination: r2, complete: () => {
            s = null, i && r2.complete();
          } }), (0, n.from)(e2(t3, o++)).subscribe(s));
        }, complete: () => {
          i = true, !s && r2.complete();
        } }));
      });
    };
  }