// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 35025 range:204007..204321
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35025: (A, e, t) => {
  "use strict";
  const r = t(72005);
  A.exports = (A2) => {
    const e2 = A2?.maxRedirections;
    return (A3) => function(t2, s) {
      const { maxRedirections: o = e2, ...n } = t2;
      if (!o) return A3(t2, s);
      const i = new r(A3, o, t2, s);
      return A3(n, i);
    };
  };
}