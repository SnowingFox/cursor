// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3553 range:280263..280753
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3553: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.intervalProvider = void 0, t2.intervalProvider = { setInterval(e3, r2, ...n2) {
      const { delegate: o2 } = t2.intervalProvider;
      return o2?.setInterval ? o2.setInterval(e3, r2, ...n2) : setInterval(e3, r2, ...n2);
    }, clearInterval(e3) {
      const { delegate: r2 } = t2.intervalProvider;
      return (r2?.clearInterval || clearInterval)(e3);
    }, delegate: void 0 };
  }