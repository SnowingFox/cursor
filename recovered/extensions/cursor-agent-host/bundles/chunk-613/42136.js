// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 42136 range:236086..236510
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42136: (A) => {
  "use strict";
  A.exports = { isValidLastEventId: function(A2) {
    return -1 === A2.indexOf("\0");
  }, isASCIINumber: function(A2) {
    if (0 === A2.length) return false;
    for (let e = 0; e < A2.length; e++) if (A2.charCodeAt(e) < 48 || A2.charCodeAt(e) > 57) return false;
    return true;
  }, delay: function(A2) {
    return new Promise((e) => {
      setTimeout(e, A2).unref();
    });
  } };
}