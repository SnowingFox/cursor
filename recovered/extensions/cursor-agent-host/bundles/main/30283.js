// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 30283 range:4904225..4905528
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30283: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.retry = void 0;
    const n = r(51078), s = r(44896), o = r(80444);
    t.retry = function(e2 = 1 / 0) {
      let t2;
      t2 = e2 && "object" == typeof e2 ? e2 : { count: e2 };
      const { count: r2 = 1 / 0, delay: i, resetOnSuccess: a = false } = t2;
      return r2 <= 0 ? s.identity : (e3) => new n.Observable((t3) => {
        let s2, c = 0;
        const l = () => {
          let u = false;
          s2 = e3.subscribe((0, n.operate)({ destination: t3, next: (e4) => {
            a && (c = 0), t3.next(e4);
          }, error: (e4) => {
            if (c++ < r2) {
              const r3 = () => {
                s2 ? (s2.unsubscribe(), s2 = null, l()) : u = true;
              };
              if (null != i) {
                const s3 = "number" == typeof i ? (0, o.timer)(i) : (0, n.from)(i(e4, c)), a2 = (0, n.operate)({ destination: t3, next: () => {
                  a2.unsubscribe(), r3();
                }, complete: () => {
                  t3.complete();
                } });
                s3.subscribe(a2);
              } else r3();
            } else t3.error(e4);
          } })), u && (s2.unsubscribe(), s2 = null, l());
        };
        l();
      });
    };
  }