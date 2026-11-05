// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 48885 range:3515909..3516870
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48885: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.windowWhen = void 0;
    const n = r(51078), s = r(83043), o = r(64462);
    t.windowWhen = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let i, a;
        const c = (e3) => {
          i.error(e3), r2.error(e3);
        }, l = () => {
          let t3;
          a?.unsubscribe(), i?.complete(), i = new s.Subject(), r2.next(i.asObservable());
          try {
            t3 = (0, n.from)(e2());
          } catch (e3) {
            return void c(e3);
          }
          t3.subscribe(a = (0, n.operate)({ destination: r2, next: l, error: c, complete: o.noop }));
        };
        l(), t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => i.next(e3), error: c, complete: () => {
          i.complete(), r2.complete();
        }, finalize: () => {
          a?.unsubscribe(), i = null;
        } }));
      });
    };
  }