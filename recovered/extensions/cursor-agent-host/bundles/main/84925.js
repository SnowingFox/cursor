// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 84925 range:12011142..12011501
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
84925: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.startWith = void 0;
    const n = r(51078);
    t.startWith = function(...e2) {
      return (t2) => new n.Observable((r2) => {
        (0, n.subscribeToArray)(e2, (0, n.operate)({ destination: r2, complete: () => t2.subscribe(r2) }));
      });
    };
  }