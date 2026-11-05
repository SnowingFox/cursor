// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 59935 range:1860170..1861314
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
59935: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.mergeInternals = void 0;
    const n = r(51078), o = r(55830);
    t.mergeInternals = function(e2, t2, r2, s, i, a, l, c) {
      const u = [];
      let d = 0, p = 0, h = false;
      const m = () => {
        !h || u.length || d || t2.complete();
      }, f = (e3) => d < s ? g(e3) : u.push(e3), g = (e3) => {
        a && t2.next(e3), d++;
        let c2 = false;
        (0, n.from)(r2(e3, p++)).subscribe((0, n.operate)({ destination: t2, next: (e4) => {
          i?.(e4), a ? f(e4) : t2.next(e4);
        }, complete: () => {
          c2 = true;
        }, finalize: () => {
          if (c2) try {
            for (d--; u.length && d < s; ) {
              const e4 = u.shift();
              l ? (0, o.executeSchedule)(t2, l, () => g(e4)) : g(e4);
            }
            m();
          } catch (e4) {
            t2.error(e4);
          }
        } }));
      };
      return e2.subscribe((0, n.operate)({ destination: t2, next: f, complete: () => {
        h = true, m();
      } })), () => {
        c?.();
      };
    };
  }