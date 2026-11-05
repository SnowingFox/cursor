// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 13786 range:475505..476178
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13786: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.takeLast = void 0;
    const n = r(744), o = r(51078);
    t.takeLast = function(e2) {
      return e2 <= 0 ? () => n.EMPTY : (t2) => new o.Observable((r2) => {
        let n2 = new Array(e2), s = 0;
        t2.subscribe((0, o.operate)({ destination: r2, next: (t3) => {
          n2[s++ % e2] = t3;
        }, complete: () => {
          const t3 = e2 <= s ? s : 0, o2 = Math.min(e2, s);
          for (let s2 = 0; s2 < o2; s2++) r2.next(n2[(t3 + s2) % e2]);
          r2.complete();
        }, finalize: () => {
          n2 = null;
        } }));
      });
    };
  }