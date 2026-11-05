// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 13222 range:3952964..3953497
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13222: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.catchError = void 0;
    const n = r(51078);
    t.catchError = function e2(t2) {
      return (r2) => new n.Observable((s) => {
        let o, i = null, a = false;
        i = r2.subscribe((0, n.operate)({ destination: s, error: (c) => {
          o = (0, n.from)(t2(c, e2(t2)(r2))), i ? (i.unsubscribe(), i = null, o.subscribe(s)) : a = true;
        } })), a && (i.unsubscribe(), i = null, o.subscribe(s));
      });
    };
  }