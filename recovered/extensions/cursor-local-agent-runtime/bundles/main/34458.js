// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 34458 range:1043855..1044343
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34458: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Scheduler = void 0;
    const n = r(86256);
    class o {
      schedulerActionCtor;
      static now = n.dateTimestampProvider.now;
      constructor(e2, t2 = o.now) {
        this.schedulerActionCtor = e2, this.now = t2;
      }
      now;
      schedule(e2, t2 = 0, r2) {
        return new this.schedulerActionCtor(this, e2).schedule(r2, t2);
      }
    }
    t.Scheduler = o;
  }