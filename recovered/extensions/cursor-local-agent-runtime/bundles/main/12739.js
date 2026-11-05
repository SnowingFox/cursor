// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 12739 range:470416..470889
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12739: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.NoopContextManager = void 0;
    const n = r(92954);
    t.NoopContextManager = class {
      active() {
        return n.ROOT_CONTEXT;
      }
      with(e2, t2, r2, ...n2) {
        return t2.call(r2, ...n2);
      }
      bind(e2, t2) {
        return t2;
      }
      enable() {
        return this;
      }
      disable() {
        return this;
      }
    };
  }