// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 45414 range:1377409..1378158
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
45414: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.onErrorResumeNext = void 0;
    const n = r(51078), o = r(79031), s = r(64462);
    t.onErrorResumeNext = function(...e2) {
      const t2 = (0, o.argsOrArgArray)(e2);
      return new n.Observable((e3) => {
        let r2 = 0;
        const o2 = () => {
          if (r2 < t2.length) {
            let i;
            try {
              i = (0, n.from)(t2[r2++]);
            } catch (e4) {
              return void o2();
            }
            const a = (0, n.operate)({ destination: e3, error: s.noop, complete: s.noop });
            i.subscribe(a), a.add(o2);
          } else e3.complete();
        };
        o2();
      });
    };
  }