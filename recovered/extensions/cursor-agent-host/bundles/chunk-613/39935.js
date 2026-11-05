// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 39935 range:218523..218858
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39935: (A, e, t) => {
  "use strict";
  const r = t(72005);
  A.exports = function({ maxRedirections: A2 }) {
    return (e2) => function(t2, s) {
      const { maxRedirections: o = A2 } = t2;
      if (!o) return e2(t2, s);
      const n = new r(e2, o, t2, s);
      return t2 = { ...t2, maxRedirections: 0 }, e2(t2, n);
    };
  };
}