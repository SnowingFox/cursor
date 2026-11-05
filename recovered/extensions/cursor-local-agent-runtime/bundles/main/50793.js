// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 50793 range:1648535..1648836
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50793: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.timestamp = void 0;
    const n = r(86256), o = r(38143);
    t.timestamp = function(e2 = n.dateTimestampProvider) {
      return (0, o.map)((t2) => ({ value: t2, timestamp: e2.now() }));
    };
  }