// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 30283 range:1003295..1004598
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30283: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.retry = void 0;
    const n = r(51078), o = r(44896), s = r(80444);
    t.retry = function(e2 = 1 / 0) {
      let t2;
      t2 = e2 && "object" == typeof e2 ? e2 : { count: e2 };
      const { count: r2 = 1 / 0, delay: i, resetOnSuccess: a = false } = t2;
      return r2 <= 0 ? o.identity : (e3) => new n.Observable((t3) => {
        let o2, l = 0;
        const c = () => {
          let u = false;
          o2 = e3.subscribe((0, n.operate)({ destination: t3, next: (e4) => {
            a && (l = 0), t3.next(e4);
          }, error: (e4) => {
            if (l++ < r2) {
              const r3 = () => {
                o2 ? (o2.unsubscribe(), o2 = null, c()) : u = true;
              };
              if (null != i) {
                const o3 = "number" == typeof i ? (0, s.timer)(i) : (0, n.from)(i(e4, l)), a2 = (0, n.operate)({ destination: t3, next: () => {
                  a2.unsubscribe(), r3();
                }, complete: () => {
                  t3.complete();
                } });
                o3.subscribe(a2);
              } else r3();
            } else t3.error(e4);
          } })), u && (o2.unsubscribe(), o2 = null, c());
        };
        c();
      });
    };
  }