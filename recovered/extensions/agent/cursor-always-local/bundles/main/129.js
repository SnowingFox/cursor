// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 129 range:451..1475
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
129: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Br: () => a, Sg: () => u, Vs: () => o2, aq: () => s2, jE: () => i2, lZ: () => f, xk: () => d, yU: () => c });
    const n2 = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$|^text\/event-stream$/i, s2 = /^application\/(?:json(?:; ?charset=utf-?8)?|proto)$/i, i2 = /^application\/connect\+?(?:json(?:; ?charset=utf-?8)?|proto)$|^text\/event-stream$/i, o2 = "application/proto", a = "application/json", u = "application/connect+proto", c = "application/connect+json", l = "proto", m = "json";
    function d(t3) {
      if ("text/event-stream" === t3) return { stream: true, binary: true };
      const e3 = null == t3 ? void 0 : t3.match(n2);
      if (!e3) return;
      return { stream: !!e3[1], binary: !!e3[3] };
    }
    function f(t3) {
      switch (t3) {
        case l:
          return { stream: false, binary: true };
        case m:
          return { stream: false, binary: false };
        default:
          return;
      }
    }
  }