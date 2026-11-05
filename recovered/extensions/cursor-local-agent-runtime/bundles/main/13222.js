// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 13222 range:471485..472018
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13222: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.catchError = void 0;
    const n = r(51078);
    t.catchError = function e2(t2) {
      return (r2) => new n.Observable((o) => {
        let s, i = null, a = false;
        i = r2.subscribe((0, n.operate)({ destination: o, error: (l) => {
          s = (0, n.from)(t2(l, e2(t2)(r2))), i ? (i.unsubscribe(), i = null, s.subscribe(o)) : a = true;
        } })), a && (i.unsubscribe(), i = null, s.subscribe(o));
      });
    };
  }