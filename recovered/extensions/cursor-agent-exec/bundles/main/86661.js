// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 86661 range:11094203..11095016
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86661: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.window = void 0;
    const n = r(51078), s = r(83043), o = r(64462);
    t.window = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let i = new s.Subject();
        r2.next(i.asObservable());
        const a = (e3) => {
          i.error(e3), r2.error(e3);
        };
        return t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => i?.next(e3), complete: () => {
          i.complete(), r2.complete();
        }, error: a })), (0, n.from)(e2).subscribe((0, n.operate)({ destination: r2, next: () => {
          i.complete(), r2.next(i = new s.Subject());
        }, complete: o.noop, error: a })), () => {
          i?.unsubscribe(), i = null;
        };
      });
    };
  }