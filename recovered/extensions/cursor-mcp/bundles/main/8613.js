// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8613 range:779245..779783
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8613: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.throwIfEmpty = void 0;
    const n2 = r2(231), o2 = r2(1078);
    function s2() {
      return new n2.EmptyError();
    }
    t2.throwIfEmpty = function(e3 = s2) {
      return (t3) => new o2.Observable((r3) => {
        let n3 = false;
        t3.subscribe((0, o2.operate)({ destination: r3, next: (e4) => {
          n3 = true, r3.next(e4);
        }, complete: () => n3 ? r3.complete() : r3.error(e3()) }));
      });
    };
  }