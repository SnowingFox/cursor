// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9190 range:881138..882178
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9190: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.zip = void 0;
    const n2 = r2(1078), o2 = r2(9031), s2 = r2(744), i2 = r2(5619);
    t2.zip = function(...e3) {
      const t3 = (0, i2.popResultSelector)(e3), r3 = (0, o2.argsOrArgArray)(e3);
      return r3.length ? new n2.Observable((e4) => {
        let o3 = r3.map(() => []), s3 = r3.map(() => false);
        e4.add(() => {
          o3 = s3 = null;
        });
        for (let i3 = 0; !e4.closed && i3 < r3.length; i3++) (0, n2.from)(r3[i3]).subscribe((0, n2.operate)({ destination: e4, next: (r4) => {
          if (o3[i3].push(r4), o3.every((e5) => e5.length)) {
            const r5 = o3.map((e5) => e5.shift());
            e4.next(t3 ? t3(...r5) : r5), o3.some((e5, t4) => !e5.length && s3[t4]) && e4.complete();
          }
        }, complete: () => {
          s3[i3] = true, !o3[i3].length && e4.complete();
        } }));
        return () => {
          o3 = s3 = null;
        };
      }) : s2.EMPTY;
    };
  }