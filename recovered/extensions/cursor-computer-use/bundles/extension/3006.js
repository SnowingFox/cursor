// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3006 range:318207..318643
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3006: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(2613), { URLSerializer: s2 } = t2(3631), { isValidHeaderName: o2 } = t2(5728);
    e2.exports = { urlEquals: function(e3, n3, t3 = false) {
      return s2(e3, t3) === s2(n3, t3);
    }, fieldValues: function(e3) {
      a2(null !== e3);
      const n3 = [];
      for (let t3 of e3.split(",")) t3 = t3.trim(), t3.length && o2(t3) && n3.push(t3);
      return n3;
    } };
  }