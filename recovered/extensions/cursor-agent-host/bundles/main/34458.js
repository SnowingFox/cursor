// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 34458 range:6624531..6625019
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