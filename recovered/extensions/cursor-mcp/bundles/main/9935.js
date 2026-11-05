// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9935 range:921500..922663
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9935: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.mergeInternals = void 0;
    const n2 = r2(1078), o2 = r2(5830);
    t2.mergeInternals = function(e3, t3, r3, s2, i2, a2, c, u) {
      const l = [];
      let d = 0, p = 0, f = false;
      const h = () => {
        !f || l.length || d || t3.complete();
      }, m = (e4) => d < s2 ? g(e4) : l.push(e4), g = (e4) => {
        a2 && t3.next(e4), d++;
        let u2 = false;
        (0, n2.from)(r3(e4, p++)).subscribe((0, n2.operate)({ destination: t3, next: (e5) => {
          i2?.(e5), a2 ? m(e5) : t3.next(e5);
        }, complete: () => {
          u2 = true;
        }, finalize: () => {
          if (u2) try {
            for (d--; l.length && d < s2; ) {
              const e5 = l.shift();
              c ? (0, o2.executeSchedule)(t3, c, () => g(e5)) : g(e5);
            }
            h();
          } catch (e5) {
            t3.error(e5);
          }
        } }));
      };
      return e3.subscribe((0, n2.operate)({ destination: t3, next: m, complete: () => {
        f = true, h();
      } })), () => {
        u?.();
      };
    };
  }