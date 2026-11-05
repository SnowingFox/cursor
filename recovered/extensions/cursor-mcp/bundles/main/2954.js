// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2954 range:227172..227911
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2954: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ROOT_CONTEXT = t2.createContextKey = void 0, t2.createContextKey = function(e3) {
      return Symbol.for(e3);
    };
    class r2 {
      constructor(e3) {
        const t3 = this;
        t3._currentContext = e3 ? new Map(e3) : /* @__PURE__ */ new Map(), t3.getValue = (e4) => t3._currentContext.get(e4), t3.setValue = (e4, n2) => {
          const o2 = new r2(t3._currentContext);
          return o2._currentContext.set(e4, n2), o2;
        }, t3.deleteValue = (e4) => {
          const n2 = new r2(t3._currentContext);
          return n2._currentContext.delete(e4), n2;
        };
      }
    }
    t2.ROOT_CONTEXT = new r2();
  }