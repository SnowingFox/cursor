// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 79007 range:11631848..11632559
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79007: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.bufferWhen = void 0;
    const n = r(51078), s = r(64462);
    t.bufferWhen = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = null, i = null;
        const a = () => {
          i?.unsubscribe();
          const t3 = o;
          o = [], t3 && r2.next(t3), (0, n.from)(e2()).subscribe(i = (0, n.operate)({ destination: r2, next: a, complete: s.noop }));
        };
        a(), t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => o?.push(e3), complete: () => {
          o && r2.next(o), r2.complete();
        }, finalize: () => o = i = null }));
      });
    };
  }