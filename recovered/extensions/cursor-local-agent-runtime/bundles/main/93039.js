// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 93039 range:7754320..7754766
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93039: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateValue = t.validateKey = void 0;
    const r = "[_0-9a-z-*/]", n = new RegExp(`^(?:${`[a-z]${r}{0,255}`}|${`[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`})$`), o = /^[ -~]{0,255}[!-~]$/, s = /,|=/;
    t.validateKey = function(e2) {
      return n.test(e2);
    }, t.validateValue = function(e2) {
      return o.test(e2) && !s.test(e2);
    };
  }