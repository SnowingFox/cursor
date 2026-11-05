// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 10129 range:3631766..3632779
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10129: (e, t, r) => {
    "use strict";
    r.d(t, { Br: () => a, Sg: () => c, Vs: () => i, aq: () => s, jE: () => o, lZ: () => m, xk: () => p, yU: () => l });
    const n = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$|^text\/event-stream$/i, s = /^application\/(?:json(?:; ?charset=utf-?8)?|proto)$/i, o = /^application\/connect\+?(?:json(?:; ?charset=utf-?8)?|proto)$|^text\/event-stream$/i, i = "application/proto", a = "application/json", c = "application/connect+proto", l = "application/connect+json", u = "proto", d = "json";
    function p(e2) {
      if ("text/event-stream" === e2) return { stream: true, binary: true };
      const t2 = null == e2 ? void 0 : e2.match(n);
      if (!t2) return;
      return { stream: !!t2[1], binary: !!t2[3] };
    }
    function m(e2) {
      switch (e2) {
        case u:
          return { stream: false, binary: true };
        case d:
          return { stream: false, binary: false };
        default:
          return;
      }
    }
  }