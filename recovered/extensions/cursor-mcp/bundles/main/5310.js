// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5310 range:382995..383605
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5310: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.timeoutWith = void 0;
    const n2 = r2(2665), o2 = r2(7842), s2 = r2(2402);
    t2.timeoutWith = function(e3, t3, r3) {
      let i2, a2, c;
      if (r3 = r3 ?? n2.asyncScheduler, (0, o2.isValidDate)(e3) ? i2 = e3 : "number" == typeof e3 && (a2 = e3), !t3) throw new TypeError("No observable provided to switch to");
      if (c = () => t3, null == i2 && null == a2) throw new TypeError("No timeout provided.");
      return (0, s2.timeout)({ first: i2, each: a2, scheduler: r3, with: c });
    };
  }