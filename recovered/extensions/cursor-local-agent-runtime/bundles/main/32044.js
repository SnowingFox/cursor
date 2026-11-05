// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 32044 range:1017727..1018473
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
32044: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.tap = void 0;
    const n = r(51078), o = r(44896);
    t.tap = function(e2) {
      const t2 = (0, n.isFunction)(e2) ? { next: e2 } : e2;
      return t2 ? (e3) => new n.Observable((r2) => {
        t2.subscribe?.();
        let o2 = true;
        e3.subscribe((0, n.operate)({ destination: r2, next: (e4) => {
          t2.next?.(e4), r2.next(e4);
        }, error: (e4) => {
          o2 = false, t2.error?.(e4), r2.error(e4);
        }, complete: () => {
          o2 = false, t2.complete?.(), r2.complete();
        }, finalize: () => {
          o2 && t2.unsubscribe?.(), t2.finalize?.();
        } }));
      }) : o.identity;
    };
  }