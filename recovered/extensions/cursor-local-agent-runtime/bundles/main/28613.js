// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 28613 range:919675..920202
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28613: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.throwIfEmpty = void 0;
    const n = r(50231), o = r(51078);
    function s() {
      return new n.EmptyError();
    }
    t.throwIfEmpty = function(e2 = s) {
      return (t2) => new o.Observable((r2) => {
        let n2 = false;
        t2.subscribe((0, o.operate)({ destination: r2, next: (e3) => {
          n2 = true, r2.next(e3);
        }, complete: () => n2 ? r2.complete() : r2.error(e2()) }));
      });
    };
  }