// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 11185 range:322224..322696
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11185: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.takeWhile = void 0;
    const n = r(51078);
    t.takeWhile = function(e2, t2 = false) {
      return (r2) => new n.Observable((o) => {
        let s = 0;
        const i = (0, n.operate)({ destination: o, next: (r3) => {
          e2(r3, s++) ? o.next(r3) : (i.unsubscribe(), t2 && o.next(r3), o.complete());
        } });
        r2.subscribe(i);
      });
    };
  }