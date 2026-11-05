// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 37742 range:1118095..1118581
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37742: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.take = void 0;
    const n = r(744), o = r(51078);
    t.take = function(e2) {
      return e2 <= 0 ? () => n.EMPTY : (t2) => new o.Observable((r2) => {
        let n2 = 0;
        const s = (0, o.operate)({ destination: r2, next: (t3) => {
          ++n2 < e2 ? r2.next(t3) : (s.unsubscribe(), r2.next(t3), r2.complete());
        } });
        t2.subscribe(s);
      });
    };
  }