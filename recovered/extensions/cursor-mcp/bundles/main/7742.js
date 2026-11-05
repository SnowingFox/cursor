// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7742 range:702235..702735
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7742: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.take = void 0;
    const n2 = r2(744), o2 = r2(1078);
    t2.take = function(e3) {
      return e3 <= 0 ? () => n2.EMPTY : (t3) => new o2.Observable((r3) => {
        let n3 = 0;
        const s2 = (0, o2.operate)({ destination: r3, next: (t4) => {
          ++n3 < e3 ? r3.next(t4) : (s2.unsubscribe(), r3.next(t4), r3.complete());
        } });
        t3.subscribe(s2);
      });
    };
  }