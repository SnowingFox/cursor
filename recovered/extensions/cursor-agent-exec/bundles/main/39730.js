// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 39730 range:3123121..3123740
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39730: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createFind = t.find = void 0;
    const n = r(51078);
    function s(e2, t2, r2, s2) {
      const o = "index" === t2;
      let i = 0;
      r2.subscribe((0, n.operate)({ destination: s2, next: (t3) => {
        const n2 = i++;
        e2(t3, n2, r2) && (s2.next(o ? n2 : t3), s2.complete());
      }, complete: () => {
        s2.next(o ? -1 : void 0), s2.complete();
      } }));
    }
    t.find = function(e2) {
      return (t2) => new n.Observable((r2) => s(e2, "value", t2, r2));
    }, t.createFind = s;
  }