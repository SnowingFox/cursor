// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 28613 range:4854014..4854541
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28613: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.throwIfEmpty = void 0;
    const n = r(50231), s = r(51078);
    function o() {
      return new n.EmptyError();
    }
    t.throwIfEmpty = function(e2 = o) {
      return (t2) => new s.Observable((r2) => {
        let n2 = false;
        t2.subscribe((0, s.operate)({ destination: r2, next: (e3) => {
          n2 = true, r2.next(e3);
        }, complete: () => n2 ? r2.complete() : r2.error(e2()) }));
      });
    };
  }