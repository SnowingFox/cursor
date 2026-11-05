// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3678 range:283916..284439
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3678: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.lastValueFrom = void 0;
    const n2 = r2(231);
    t2.lastValueFrom = function(e3, t3) {
      const r3 = "object" == typeof t3;
      return new Promise((o2, s2) => {
        let i2, a2 = false;
        e3.subscribe({ next: (e4) => {
          i2 = e4, a2 = true;
        }, error: s2, complete: () => {
          a2 ? o2(i2) : r3 ? o2(t3.defaultValue) : s2(new n2.EmptyError());
        } });
      });
    };
  }