// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 5310 range:46241..46830
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5310: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.timeoutWith = void 0;
    const n = r(2665), o = r(97842), s = r(22402);
    t.timeoutWith = function(e2, t2, r2) {
      let i, a, l;
      if (r2 = r2 ?? n.asyncScheduler, (0, o.isValidDate)(e2) ? i = e2 : "number" == typeof e2 && (a = e2), !t2) throw new TypeError("No observable provided to switch to");
      if (l = () => t2, null == i && null == a) throw new TypeError("No timeout provided.");
      return (0, s.timeout)({ first: i, each: a, scheduler: r2, with: l });
    };
  }