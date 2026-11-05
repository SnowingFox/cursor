// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 20240 range:1001656..1002404
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
20240: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.raceInit = t.race = void 0;
    const n = r(51078), s = r(79031);
    function o(e2) {
      return (t2) => {
        let r2 = [];
        for (let s2 = 0; r2 && !t2.closed && s2 < e2.length; s2++) r2.push((0, n.from)(e2[s2]).subscribe((0, n.operate)({ destination: t2, next: (e3) => {
          if (r2) {
            for (let e4 = 0; e4 < r2.length; e4++) e4 !== s2 && r2[e4].unsubscribe();
            r2 = null;
          }
          t2.next(e3);
        } })));
      };
    }
    t.race = function(...e2) {
      return 1 === (e2 = (0, s.argsOrArgArray)(e2)).length ? (0, n.from)(e2[0]) : new n.Observable(o(e2));
    }, t.raceInit = o;
  }