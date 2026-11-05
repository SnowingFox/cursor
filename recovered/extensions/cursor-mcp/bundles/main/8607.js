// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8607 range:778590..779243
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8607: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.buffer = void 0;
    const n2 = r2(1078), o2 = r2(4462);
    t2.buffer = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let s2 = [];
        return (0, n2.from)(e3).subscribe((0, n2.operate)({ destination: r3, next: () => {
          const e4 = s2;
          s2 = [], r3.next(e4);
        }, complete: o2.noop })), t3.subscribe((0, n2.operate)({ destination: r3, next: (e4) => s2.push(e4), complete: () => {
          r3.next(s2), r3.complete();
        } })), () => {
          s2 = null;
        };
      });
    };
  }