// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 793 range:67487..67796
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
793: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.timestamp = void 0;
    const n2 = r2(6256), o2 = r2(8143);
    t2.timestamp = function(e3 = n2.dateTimestampProvider) {
      return (0, o2.map)((t3) => ({ value: t3, timestamp: e3.now() }));
    };
  }