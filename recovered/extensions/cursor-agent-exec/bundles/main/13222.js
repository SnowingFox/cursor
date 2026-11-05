// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 13222 range:876462..876995
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