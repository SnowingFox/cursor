// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 1503 range:24572..25690
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1503: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.combineLatestInit = t.combineLatest = void 0;
    const n = r(51078), o = r(6800), s = r(44896), i = r(60845), a = r(744);
    function l(e2, t2 = s.identity) {
      return (r2) => {
        const { length: o2 } = e2, s2 = new Array(o2);
        let i2 = o2, a2 = o2;
        for (let l2 = 0; l2 < o2; l2++) {
          const o3 = (0, n.from)(e2[l2]);
          let c = false;
          o3.subscribe((0, n.operate)({ destination: r2, next: (e3) => {
            s2[l2] = e3, c || (c = true, a2--), a2 || r2.next(t2(Array.from(s2)));
          }, complete: () => {
            --i2 || r2.complete();
          } }));
        }
      };
    }
    t.combineLatest = function(e2, t2) {
      const r2 = (0, o.arrayOrObject)(e2);
      if (!r2) throw new TypeError("sources must be an array or object");
      const { args: c, keys: u } = r2;
      return 0 === c.length ? a.EMPTY : new n.Observable(l(c, u ? (e3) => (0, i.createObject)(u, e3) : t2 ? (e3) => t2(...e3) : s.identity));
    }, t.combineLatestInit = l;
  }