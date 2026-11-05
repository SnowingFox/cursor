// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 59084 range:1832828..1833264
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
59084: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.isEmpty = void 0;
    const n = r(51078);
    t.isEmpty = function() {
      return (e2) => new n.Observable((t2) => {
        e2.subscribe((0, n.operate)({ destination: t2, next: () => {
          t2.next(false), t2.complete();
        }, complete: () => {
          t2.next(true), t2.complete();
        } }));
      });
    };
  }