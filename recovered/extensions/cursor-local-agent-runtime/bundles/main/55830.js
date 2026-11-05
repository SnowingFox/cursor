// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 55830 range:1763459..1763854
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55830: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.executeSchedule = void 0, t.executeSchedule = function(e2, t2, r, n = 0, o = false) {
      if (!e2.closed) {
        const s = t2.schedule(function() {
          r(), o ? e2.add(this.schedule(null, n)) : this.unsubscribe();
        }, n);
        if (e2.add(s), !o) return s;
      }
    };
  }