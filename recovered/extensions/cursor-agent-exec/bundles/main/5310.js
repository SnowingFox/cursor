// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 5310 range:413102..413691
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5310: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.timeoutWith = void 0;
    const n = r(2665), s = r(97842), o = r(22402);
    t.timeoutWith = function(e2, t2, r2) {
      let i, a, c;
      if (r2 = r2 ?? n.asyncScheduler, (0, s.isValidDate)(e2) ? i = e2 : "number" == typeof e2 && (a = e2), !t2) throw new TypeError("No observable provided to switch to");
      if (c = () => t2, null == i && null == a) throw new TypeError("No timeout provided.");
      return (0, o.timeout)({ first: i, each: a, scheduler: r2, with: c });
    };
  }