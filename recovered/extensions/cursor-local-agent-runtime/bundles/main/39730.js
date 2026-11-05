// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 39730 range:1221565..1222184
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39730: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createFind = t.find = void 0;
    const n = r(51078);
    function o(e2, t2, r2, o2) {
      const s = "index" === t2;
      let i = 0;
      r2.subscribe((0, n.operate)({ destination: o2, next: (t3) => {
        const n2 = i++;
        e2(t3, n2, r2) && (o2.next(s ? n2 : t3), o2.complete());
      }, complete: () => {
        o2.next(s ? -1 : void 0), o2.complete();
      } }));
    }
    t.find = function(e2) {
      return (t2) => new n.Observable((r2) => o(e2, "value", t2, r2));
    }, t.createFind = o;
  }