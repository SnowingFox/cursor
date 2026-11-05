// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5830 range:447780..448190
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5830: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.executeSchedule = void 0, t2.executeSchedule = function(e3, t3, r2, n2 = 0, o2 = false) {
      if (!e3.closed) {
        const s2 = t3.schedule(function() {
          r2(), o2 ? e3.add(this.schedule(null, n2)) : this.unsubscribe();
        }, n2);
        if (e3.add(s2), !o2) return s2;
      }
    };
  }