// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 25619 range:715252..715815
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
25619: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.popNumber = t.popScheduler = t.popResultSelector = void 0;
    const n = r(51078), o = r(82901);
    function s(e2) {
      return e2[e2.length - 1];
    }
    t.popResultSelector = function(e2) {
      return (0, n.isFunction)(s(e2)) ? e2.pop() : void 0;
    }, t.popScheduler = function(e2) {
      return (0, o.isScheduler)(s(e2)) ? e2.pop() : void 0;
    }, t.popNumber = function(e2, t2) {
      return "number" == typeof s(e2) ? e2.pop() : t2;
    };
  }