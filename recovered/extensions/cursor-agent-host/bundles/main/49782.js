// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 49782 range:8178350..8179311
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49782: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.sequenceEqual = void 0;
    const n = r(51078);
    t.sequenceEqual = function(e2, t2 = (e3, t3) => e3 === t3) {
      return (r2) => new n.Observable((s) => {
        const o = { buffer: [], complete: false }, i = { buffer: [], complete: false }, a = (e3) => {
          s.next(e3), s.complete();
        }, c = (e3, r3) => {
          const o2 = (0, n.operate)({ destination: s, next: (n2) => {
            const { buffer: s2, complete: o3 } = r3;
            0 === s2.length ? o3 ? a(false) : e3.buffer.push(n2) : !t2(n2, s2.shift()) && a(false);
          }, complete: () => {
            e3.complete = true;
            const { complete: t3, buffer: n2 } = r3;
            t3 && a(0 === n2.length), o2?.unsubscribe();
          } });
          return o2;
        };
        r2.subscribe(c(o, i)), (0, n.from)(e2).subscribe(c(i, o));
      });
    };
  }