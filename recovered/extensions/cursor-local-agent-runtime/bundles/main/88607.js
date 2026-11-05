// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 88607 range:7630321..7630956
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88607: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.buffer = void 0;
    const n = r(51078), o = r(64462);
    t.buffer = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = [];
        return (0, n.from)(e2).subscribe((0, n.operate)({ destination: r2, next: () => {
          const e3 = s;
          s = [], r2.next(e3);
        }, complete: o.noop })), t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => s.push(e3), complete: () => {
          r2.next(s), r2.complete();
        } })), () => {
          s = null;
        };
      });
    };
  }