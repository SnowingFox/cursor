// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 86661 range:7601801..7602614
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86661: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.window = void 0;
    const n = r(51078), o = r(83043), s = r(64462);
    t.window = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let i = new o.Subject();
        r2.next(i.asObservable());
        const a = (e3) => {
          i.error(e3), r2.error(e3);
        };
        return t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => i?.next(e3), complete: () => {
          i.complete(), r2.complete();
        }, error: a })), (0, n.from)(e2).subscribe((0, n.operate)({ destination: r2, next: () => {
          i.complete(), r2.next(i = new o.Subject());
        }, complete: s.noop, error: a })), () => {
          i?.unsubscribe(), i = null;
        };
      });
    };
  }