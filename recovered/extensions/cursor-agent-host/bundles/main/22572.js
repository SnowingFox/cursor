// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 22572 range:4460277..4460819
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22572: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.skipUntil = void 0;
    const n = r(51078), s = r(64462);
    t.skipUntil = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = false;
        const i = (0, n.operate)({ destination: r2, next: () => {
          i?.unsubscribe(), o = true;
        }, complete: s.noop });
        (0, n.from)(e2).subscribe(i), t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => o && r2.next(e3) }));
      });
    };
  }