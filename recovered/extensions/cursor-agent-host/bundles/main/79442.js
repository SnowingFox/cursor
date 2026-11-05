// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 79442 range:11636021..11636447
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79442: (e, t, r) => {
    "use strict";
    const n = r(42613), { URLSerializer: s } = r(64387), { isValidHeaderName: o } = r(98116);
    e.exports = { urlEquals: function(e2, t2, r2 = false) {
      return s(e2, r2) === s(t2, r2);
    }, fieldValues: function(e2) {
      n(null !== e2);
      const t2 = [];
      for (let r2 of e2.split(",")) r2 = r2.trim(), r2.length && o(r2) && t2.push(r2);
      return t2;
    } };
  }