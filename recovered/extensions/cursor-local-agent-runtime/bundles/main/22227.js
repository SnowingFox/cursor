// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 22227 range:640488..641113
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22227: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.sample = void 0;
    const n = r(51078), o = r(64462);
    t.sample = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = false, i = null;
        t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => {
          s = true, i = e3;
        } })), (0, n.from)(e2).subscribe((0, n.operate)({ destination: r2, next: () => {
          if (s) {
            s = false;
            const e3 = i;
            i = null, r2.next(e3);
          }
        }, complete: o.noop }));
      });
    };
  }