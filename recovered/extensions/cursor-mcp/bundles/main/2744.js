// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2744 range:223802..224377
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2744: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.materialize = void 0;
    const n2 = r2(1078);
    t2.materialize = function() {
      return (e3) => new n2.Observable((t3) => {
        e3.subscribe((0, n2.operate)({ destination: t3, next: (e4) => {
          t3.next((0, n2.nextNotification)(e4));
        }, error: (e4) => {
          t3.next((0, n2.errorNotification)(e4)), t3.complete();
        }, complete: () => {
          t3.next(n2.COMPLETE_NOTIFICATION), t3.complete();
        } }));
      });
    };
  }