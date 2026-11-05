// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 49782 range:1474725..1475686
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49782: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.sequenceEqual = void 0;
    const n = r(51078);
    t.sequenceEqual = function(e2, t2 = (e3, t3) => e3 === t3) {
      return (r2) => new n.Observable((o) => {
        const s = { buffer: [], complete: false }, i = { buffer: [], complete: false }, a = (e3) => {
          o.next(e3), o.complete();
        }, l = (e3, r3) => {
          const s2 = (0, n.operate)({ destination: o, next: (n2) => {
            const { buffer: o2, complete: s3 } = r3;
            0 === o2.length ? s3 ? a(false) : e3.buffer.push(n2) : !t2(n2, o2.shift()) && a(false);
          }, complete: () => {
            e3.complete = true;
            const { complete: t3, buffer: n2 } = r3;
            t3 && a(0 === n2.length), s2?.unsubscribe();
          } });
          return s2;
        };
        r2.subscribe(l(s, i)), (0, n.from)(e2).subscribe(l(i, s));
      });
    };
  }