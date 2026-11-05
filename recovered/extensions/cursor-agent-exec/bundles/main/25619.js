// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 25619 range:1126419..1126982
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
25619: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.popNumber = t.popScheduler = t.popResultSelector = void 0;
    const n = r(51078), s = r(82901);
    function o(e2) {
      return e2[e2.length - 1];
    }
    t.popResultSelector = function(e2) {
      return (0, n.isFunction)(o(e2)) ? e2.pop() : void 0;
    }, t.popScheduler = function(e2) {
      return (0, s.isScheduler)(o(e2)) ? e2.pop() : void 0;
    }, t.popNumber = function(e2, t2) {
      return "number" == typeof o(e2) ? e2.pop() : t2;
    };
  }