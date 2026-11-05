// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 240 range:21891..22655
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
240: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.raceInit = t2.race = void 0;
    const n2 = r2(1078), o2 = r2(9031);
    function s2(e3) {
      return (t3) => {
        let r3 = [];
        for (let o3 = 0; r3 && !t3.closed && o3 < e3.length; o3++) r3.push((0, n2.from)(e3[o3]).subscribe((0, n2.operate)({ destination: t3, next: (e4) => {
          if (r3) {
            for (let e5 = 0; e5 < r3.length; e5++) e5 !== o3 && r3[e5].unsubscribe();
            r3 = null;
          }
          t3.next(e4);
        } })));
      };
    }
    t2.race = function(...e3) {
      return 1 === (e3 = (0, o2.argsOrArgArray)(e3)).length ? (0, n2.from)(e3[0]) : new n2.Observable(s2(e3));
    }, t2.raceInit = s2;
  }