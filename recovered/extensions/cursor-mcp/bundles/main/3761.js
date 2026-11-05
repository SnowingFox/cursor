// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3761 range:285366..285753
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3761: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.dematerialize = void 0;
    const n2 = r2(8216), o2 = r2(1078);
    t2.dematerialize = function() {
      return (e3) => new o2.Observable((t3) => {
        e3.subscribe((0, o2.operate)({ destination: t3, next: (e4) => (0, n2.observeNotification)(e4, t3) }));
      });
    };
  }