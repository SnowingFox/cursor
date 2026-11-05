// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 99526 range:7935672..7936155
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99526: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.every = void 0;
    const n = r(51078);
    t.every = function(e2, t2) {
      return (r2) => new n.Observable((o) => {
        let s = 0;
        r2.subscribe((0, n.operate)({ destination: o, next: (n2) => {
          e2.call(t2, n2, s++, r2) || (o.next(false), o.complete());
        }, complete: () => {
          o.next(true), o.complete();
        } }));
      });
    };
  }