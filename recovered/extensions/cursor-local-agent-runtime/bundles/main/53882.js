// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 53882 range:1711360..1711987
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53882: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.skipLast = void 0;
    const n = r(44896), o = r(51078);
    t.skipLast = function(e2) {
      return e2 <= 0 ? n.identity : (t2) => new o.Observable((r2) => {
        let n2 = new Array(e2), s = 0;
        return t2.subscribe((0, o.operate)({ destination: r2, next: (t3) => {
          const o2 = s++;
          if (o2 < e2) n2[o2] = t3;
          else {
            const s2 = o2 % e2, i = n2[s2];
            n2[s2] = t3, r2.next(i);
          }
        } })), () => {
          n2 = null;
        };
      });
    };
  }