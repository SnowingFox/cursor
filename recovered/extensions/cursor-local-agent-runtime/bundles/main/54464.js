// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 54464 range:1738253..1738570
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54464: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.subscribeOn = void 0;
    const n = r(51078);
    t.subscribeOn = function(e2, t2 = 0) {
      return (r2) => new n.Observable((n2) => {
        n2.add(e2.schedule(() => r2.subscribe(n2), t2));
      });
    };
  }