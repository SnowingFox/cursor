// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 1503 range:22261..23379
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1503: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.combineLatestInit = t.combineLatest = void 0;
    const n = r(51078), s = r(6800), o = r(44896), i = r(60845), a = r(744);
    function c(e2, t2 = o.identity) {
      return (r2) => {
        const { length: s2 } = e2, o2 = new Array(s2);
        let i2 = s2, a2 = s2;
        for (let c2 = 0; c2 < s2; c2++) {
          const s3 = (0, n.from)(e2[c2]);
          let l = false;
          s3.subscribe((0, n.operate)({ destination: r2, next: (e3) => {
            o2[c2] = e3, l || (l = true, a2--), a2 || r2.next(t2(Array.from(o2)));
          }, complete: () => {
            --i2 || r2.complete();
          } }));
        }
      };
    }
    t.combineLatest = function(e2, t2) {
      const r2 = (0, s.arrayOrObject)(e2);
      if (!r2) throw new TypeError("sources must be an array or object");
      const { args: l, keys: u } = r2;
      return 0 === l.length ? a.EMPTY : new n.Observable(c(l, u ? (e3) => (0, i.createObject)(u, e3) : t2 ? (e3) => t2(...e3) : o.identity));
    }, t.combineLatestInit = c;
  }