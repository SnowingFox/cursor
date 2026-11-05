// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6352 range:473485..474187
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6352: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.range = void 0;
    const n2 = r2(1078), o2 = r2(744), s2 = r2(5830);
    t2.range = function(e3, t3, r3) {
      if (null == t3 && (t3 = e3, e3 = 0), t3 <= 0) return o2.EMPTY;
      const i2 = t3 + e3;
      return new n2.Observable(r3 ? (t4) => {
        let n3 = e3;
        const o3 = () => {
          n3 < i2 ? (t4.next(n3++), t4.closed || (0, s2.executeSchedule)(t4, r3, o3)) : t4.complete();
        };
        (0, s2.executeSchedule)(t4, r3, o3);
      } : (t4) => {
        let r4 = e3;
        for (; r4 < i2 && !t4.closed; ) t4.next(r4++);
        t4.complete();
      });
    };
  }