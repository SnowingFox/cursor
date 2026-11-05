// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 85722 range:7505820..7506649
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85722: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.debounce = void 0;
    const n = r(51078), o = r(64462);
    t.debounce = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = false, i = null, a = null;
        const l = () => {
          if (a?.unsubscribe(), a = null, s) {
            s = false;
            const e3 = i;
            i = null, r2.next(e3);
          }
        };
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          a?.unsubscribe(), s = true, i = t3, a = (0, n.operate)({ destination: r2, next: l, complete: o.noop }), (0, n.from)(e2(t3)).subscribe(a);
        }, complete: () => {
          l(), r2.complete();
        }, finalize: () => {
          i = a = null;
        } }));
      });
    };
  }