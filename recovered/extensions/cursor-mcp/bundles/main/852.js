// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 852 range:68039..68584
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
852: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.firstValueFrom = void 0;
    const n2 = r2(1078), o2 = r2(231);
    t2.firstValueFrom = function(e3, t3) {
      const r3 = "object" == typeof t3;
      return new Promise((s2, i2) => {
        const a2 = new n2.Subscriber({ next: (e4) => {
          s2(e4), a2.unsubscribe();
        }, error: i2, complete: () => {
          r3 ? s2(t3.defaultValue) : i2(new o2.EmptyError());
        } });
        e3.subscribe(a2);
      });
    };
  }