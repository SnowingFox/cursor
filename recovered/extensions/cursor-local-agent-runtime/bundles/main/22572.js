// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 22572 range:643951..644493
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22572: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.skipUntil = void 0;
    const n = r(51078), o = r(64462);
    t.skipUntil = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = false;
        const i = (0, n.operate)({ destination: r2, next: () => {
          i?.unsubscribe(), s = true;
        }, complete: o.noop });
        (0, n.from)(e2).subscribe(i), t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => s && r2.next(e3) }));
      });
    };
  }