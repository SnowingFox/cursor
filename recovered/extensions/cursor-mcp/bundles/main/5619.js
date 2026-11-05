// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5619 range:427418..427998
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5619: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.popNumber = t2.popScheduler = t2.popResultSelector = void 0;
    const n2 = r2(1078), o2 = r2(2901);
    function s2(e3) {
      return e3[e3.length - 1];
    }
    t2.popResultSelector = function(e3) {
      return (0, n2.isFunction)(s2(e3)) ? e3.pop() : void 0;
    }, t2.popScheduler = function(e3) {
      return (0, o2.isScheduler)(s2(e3)) ? e3.pop() : void 0;
    }, t2.popNumber = function(e3, t3) {
      return "number" == typeof s2(e3) ? e3.pop() : t3;
    };
  }