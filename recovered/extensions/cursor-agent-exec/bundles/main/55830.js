// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 55830 range:4604807..4605202
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55830: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.executeSchedule = void 0, t.executeSchedule = function(e2, t2, r, n = 0, s = false) {
      if (!e2.closed) {
        const o = t2.schedule(function() {
          r(), s ? e2.add(this.schedule(null, n)) : this.unsubscribe();
        }, n);
        if (e2.add(o), !s) return o;
      }
    };
  }