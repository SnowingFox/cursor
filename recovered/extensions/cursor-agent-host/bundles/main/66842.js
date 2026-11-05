// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 66842 range:10384268..10385273
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66842: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.windowCount = void 0;
    const n = r(51078), s = r(83043);
    t.windowCount = function(e2, t2 = 0) {
      const r2 = t2 > 0 ? t2 : e2;
      return (t3) => new n.Observable((o) => {
        let i = [new s.Subject()], a = [], c = 0;
        o.next(i[0].asObservable()), t3.subscribe((0, n.operate)({ destination: o, next: (t4) => {
          for (const e3 of i) e3.next(t4);
          const n2 = c - e2 + 1;
          if (n2 >= 0 && n2 % r2 === 0 && i.shift().complete(), ++c % r2 === 0) {
            const e3 = new s.Subject();
            i.push(e3), o.next(e3.asObservable());
          }
        }, error: (e3) => {
          for (; i.length > 0; ) i.shift().error(e3);
          o.error(e3);
        }, complete: () => {
          for (; i.length > 0; ) i.shift().complete();
          o.complete();
        }, finalize: () => {
          a = null, i = null;
        } }));
      });
    };
  }