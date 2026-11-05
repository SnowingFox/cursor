// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 91018 range:7716112..7717111
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91018: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.repeat = void 0;
    const n = r(51078), o = r(744), s = r(80444);
    t.repeat = function(e2) {
      let t2, r2 = 1 / 0;
      return null != e2 && ("object" == typeof e2 ? { count: r2 = 1 / 0, delay: t2 } = e2 : r2 = e2), r2 <= 0 ? () => o.EMPTY : (e3) => new n.Observable((o2) => {
        let i, a = 0;
        const l = () => {
          if (i?.unsubscribe(), i = null, null != t2) {
            const e4 = "number" == typeof t2 ? (0, s.timer)(t2) : (0, n.from)(t2(a)), r3 = (0, n.operate)({ destination: o2, next: () => {
              r3.unsubscribe(), c();
            } });
            e4.subscribe(r3);
          } else c();
        }, c = () => {
          let t3 = false;
          i = e3.subscribe((0, n.operate)({ destination: o2, complete: () => {
            ++a < r2 ? i ? l() : t3 = true : o2.complete();
          } })), t3 && l();
        };
        c();
      });
    };
  }