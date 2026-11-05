// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4458 range:311823..312321
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4458: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Scheduler = void 0;
    const n2 = r2(6256);
    class o2 {
      schedulerActionCtor;
      static now = n2.dateTimestampProvider.now;
      constructor(e3, t3 = o2.now) {
        this.schedulerActionCtor = e3, this.now = t3;
      }
      now;
      schedule(e3, t3 = 0, r3) {
        return new this.schedulerActionCtor(this, e3).schedule(r3, t3);
      }
    }
    t2.Scheduler = o2;
  }