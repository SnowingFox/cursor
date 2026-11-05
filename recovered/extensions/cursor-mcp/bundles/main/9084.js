// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9084 range:860289..860733
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9084: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isEmpty = void 0;
    const n2 = r2(1078);
    t2.isEmpty = function() {
      return (e3) => new n2.Observable((t3) => {
        e3.subscribe((0, n2.operate)({ destination: t3, next: () => {
          t3.next(false), t3.complete();
        }, complete: () => {
          t3.next(true), t3.complete();
        } }));
      });
    };
  }