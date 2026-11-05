// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 36535 range:207431..207656
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36535: (A, e, t) => {
  "use strict";
  const r = t(3685);
  A.exports = (A2) => (e2) => function(t2, s) {
    return e2(t2, new r({ ...t2, retryOptions: { ...A2, ...t2.retryOptions } }, { handler: s, dispatch: e2 }));
  };
}