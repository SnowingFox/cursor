// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 45414 range:7848853..7849602
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
45414: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.onErrorResumeNext = void 0;
    const n = r(51078), s = r(79031), o = r(64462);
    t.onErrorResumeNext = function(...e2) {
      const t2 = (0, s.argsOrArgArray)(e2);
      return new n.Observable((e3) => {
        let r2 = 0;
        const s2 = () => {
          if (r2 < t2.length) {
            let i;
            try {
              i = (0, n.from)(t2[r2++]);
            } catch (e4) {
              return void s2();
            }
            const a = (0, n.operate)({ destination: e3, error: o.noop, complete: o.noop });
            i.subscribe(a), a.add(s2);
          } else e3.complete();
        };
        s2();
      });
    };
  }