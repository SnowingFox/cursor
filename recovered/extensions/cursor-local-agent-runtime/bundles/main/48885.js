// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 48885 range:1447606..1448567
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48885: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.windowWhen = void 0;
    const n = r(51078), o = r(83043), s = r(64462);
    t.windowWhen = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let i, a;
        const l = (e3) => {
          i.error(e3), r2.error(e3);
        }, c = () => {
          let t3;
          a?.unsubscribe(), i?.complete(), i = new o.Subject(), r2.next(i.asObservable());
          try {
            t3 = (0, n.from)(e2());
          } catch (e3) {
            return void l(e3);
          }
          t3.subscribe(a = (0, n.operate)({ destination: r2, next: c, error: l, complete: s.noop }));
        };
        c(), t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => i.next(e3), error: l, complete: () => {
          i.complete(), r2.complete();
        }, finalize: () => {
          a?.unsubscribe(), i = null;
        } }));
      });
    };
  }