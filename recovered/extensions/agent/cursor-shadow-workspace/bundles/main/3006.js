// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3006 range:314016..314452
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3006: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(2613), { URLSerializer: r2 } = t2(3631), { isValidHeaderName: o2 } = t2(5728);
    e2.exports = { urlEquals: function(e3, A3, t3 = false) {
      return r2(e3, t3) === r2(A3, t3);
    }, fieldValues: function(e3) {
      n2(null !== e3);
      const A3 = [];
      for (let t3 of e3.split(",")) t3 = t3.trim(), t3.length && o2(t3) && A3.push(t3);
      return A3;
    } };
  }