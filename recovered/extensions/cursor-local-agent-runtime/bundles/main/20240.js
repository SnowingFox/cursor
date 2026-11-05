// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 20240 range:590642..591390
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
20240: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.raceInit = t.race = void 0;
    const n = r(51078), o = r(79031);
    function s(e2) {
      return (t2) => {
        let r2 = [];
        for (let o2 = 0; r2 && !t2.closed && o2 < e2.length; o2++) r2.push((0, n.from)(e2[o2]).subscribe((0, n.operate)({ destination: t2, next: (e3) => {
          if (r2) {
            for (let e4 = 0; e4 < r2.length; e4++) e4 !== o2 && r2[e4].unsubscribe();
            r2 = null;
          }
          t2.next(e3);
        } })));
      };
    }
    t.race = function(...e2) {
      return 1 === (e2 = (0, o.argsOrArgArray)(e2)).length ? (0, n.from)(e2[0]) : new n.Observable(s(e2));
    }, t.raceInit = s;
  }