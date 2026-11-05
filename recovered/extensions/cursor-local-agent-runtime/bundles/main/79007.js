// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 79007 range:7348425..7349136
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79007: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.bufferWhen = void 0;
    const n = r(51078), o = r(64462);
    t.bufferWhen = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = null, i = null;
        const a = () => {
          i?.unsubscribe();
          const t3 = s;
          s = [], t3 && r2.next(t3), (0, n.from)(e2()).subscribe(i = (0, n.operate)({ destination: r2, next: a, complete: o.noop }));
        };
        a(), t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => s?.push(e3), complete: () => {
          s && r2.next(s), r2.complete();
        }, finalize: () => s = i = null }));
      });
    };
  }