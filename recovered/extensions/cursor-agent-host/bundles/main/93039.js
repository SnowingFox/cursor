// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 93039 range:14425774..14426220
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93039: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.validateValue = t.validateKey = void 0;
    const r = "[_0-9a-z-*/]", n = new RegExp(`^(?:${`[a-z]${r}{0,255}`}|${`[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`})$`), s = /^[ -~]{0,255}[!-~]$/, o = /,|=/;
    t.validateKey = function(e2) {
      return n.test(e2);
    }, t.validateValue = function(e2) {
      return s.test(e2) && !o.test(e2);
    };
  }