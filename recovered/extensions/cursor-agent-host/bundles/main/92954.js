// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 92954 range:14425051..14425772
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
92954: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ROOT_CONTEXT = t.createContextKey = void 0, t.createContextKey = function(e2) {
      return Symbol.for(e2);
    };
    class r {
      constructor(e2) {
        const t2 = this;
        t2._currentContext = e2 ? new Map(e2) : /* @__PURE__ */ new Map(), t2.getValue = (e3) => t2._currentContext.get(e3), t2.setValue = (e3, n) => {
          const s = new r(t2._currentContext);
          return s._currentContext.set(e3, n), s;
        }, t2.deleteValue = (e3) => {
          const n = new r(t2._currentContext);
          return n._currentContext.delete(e3), n;
        };
      }
    }
    t.ROOT_CONTEXT = new r();
  }