// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 96824 range:14602758..14603019
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
96824: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.fromSubscribable = void 0;
    const n = r(51078);
    t.fromSubscribable = function(e2) {
      return new n.Observable((t2) => e2.subscribe(t2));
    };
  }