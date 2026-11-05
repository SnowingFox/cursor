// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 83761 range:11996116..11996493
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83761: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.dematerialize = void 0;
    const n = r(98216), s = r(51078);
    t.dematerialize = function() {
      return (e2) => new s.Observable((t2) => {
        e2.subscribe((0, s.operate)({ destination: t2, next: (e3) => (0, n.observeNotification)(e3, t2) }));
      });
    };
  }