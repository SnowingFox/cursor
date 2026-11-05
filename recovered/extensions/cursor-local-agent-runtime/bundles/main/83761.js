// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 83761 range:7503517..7503894
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83761: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.dematerialize = void 0;
    const n = r(98216), o = r(51078);
    t.dematerialize = function() {
      return (e2) => new o.Observable((t2) => {
        e2.subscribe((0, o.operate)({ destination: t2, next: (e3) => (0, n.observeNotification)(e3, t2) }));
      });
    };
  }