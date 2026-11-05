// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 34458 range:2930550..2931038
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34458: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Scheduler = void 0;
    const n = r(86256);
    class s {
      schedulerActionCtor;
      static now = n.dateTimestampProvider.now;
      constructor(e2, t2 = s.now) {
        this.schedulerActionCtor = e2, this.now = t2;
      }
      now;
      schedule(e2, t2 = 0, r2) {
        return new this.schedulerActionCtor(this, e2).schedule(r2, t2);
      }
    }
    t.Scheduler = s;
  }