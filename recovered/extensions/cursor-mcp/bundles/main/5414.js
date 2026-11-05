// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5414 range:389962..390731
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5414: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.onErrorResumeNext = void 0;
    const n2 = r2(1078), o2 = r2(9031), s2 = r2(4462);
    t2.onErrorResumeNext = function(...e3) {
      const t3 = (0, o2.argsOrArgArray)(e3);
      return new n2.Observable((e4) => {
        let r3 = 0;
        const o3 = () => {
          if (r3 < t3.length) {
            let i2;
            try {
              i2 = (0, n2.from)(t3[r3++]);
            } catch (e5) {
              return void o3();
            }
            const a2 = (0, n2.operate)({ destination: e4, error: s2.noop, complete: s2.noop });
            i2.subscribe(a2), a2.add(o3);
          } else e4.complete();
        };
        o3();
      });
    };
  }