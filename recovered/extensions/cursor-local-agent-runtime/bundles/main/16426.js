// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 16426 range:529523..529866
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16426: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ignoreElements = void 0;
    const n = r(51078), o = r(64462);
    t.ignoreElements = function() {
      return (e2) => new n.Observable((t2) => {
        e2.subscribe((0, n.operate)({ destination: t2, next: o.noop }));
      });
    };
  }