// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 85722 range:12049871..12050700
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85722: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.debounce = void 0;
    const n = r(51078), s = r(64462);
    t.debounce = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = false, i = null, a = null;
        const c = () => {
          if (a?.unsubscribe(), a = null, o) {
            o = false;
            const e3 = i;
            i = null, r2.next(e3);
          }
        };
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          a?.unsubscribe(), o = true, i = t3, a = (0, n.operate)({ destination: r2, next: c, complete: s.noop }), (0, n.from)(e2(t3)).subscribe(a);
        }, complete: () => {
          c(), r2.complete();
        }, finalize: () => {
          i = a = null;
        } }));
      });
    };
  }