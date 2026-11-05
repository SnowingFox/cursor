// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5665 range:437035..438072
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5665: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.forkJoin = void 0;
    const n2 = r2(1078), o2 = r2(6800), s2 = r2(5619), i2 = r2(5683), a2 = r2(845), c = r2(231);
    t2.forkJoin = function(...e3) {
      const t3 = (0, s2.popResultSelector)(e3), { args: r3, keys: u } = (0, o2.argsArgArrayOrObject)(e3), l = new n2.Observable((e4) => {
        const { length: t4 } = r3;
        if (!t4) return void e4.complete();
        const o3 = new Array(t4);
        let s3 = t4, i3 = t4;
        for (let l2 = 0; l2 < t4; l2++) {
          let t5 = false;
          (0, n2.from)(r3[l2]).subscribe((0, n2.operate)({ destination: e4, next: (e5) => {
            t5 || (t5 = true, i3--), o3[l2] = e5;
          }, complete: () => s3--, finalize: () => {
            s3 && t5 || (0 === i3 ? (e4.next(u ? (0, a2.createObject)(u, o3) : o3), e4.complete()) : e4.error(new c.EmptyError()));
          } }));
        }
      });
      return t3 ? (0, i2.mapOneOrManyArgs)(t3)(l) : l;
    };
  }