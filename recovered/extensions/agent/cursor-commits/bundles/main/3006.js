// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3006 range:314220..314656
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3006: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(2613), { URLSerializer: s2 } = a2(3631), { isValidHeaderName: o2 } = a2(5728);
    e2.exports = { urlEquals: function(e3, n3, a3 = false) {
      return s2(e3, a3) === s2(n3, a3);
    }, fieldValues: function(e3) {
      t2(null !== e3);
      const n3 = [];
      for (let a3 of e3.split(",")) a3 = a3.trim(), a3.length && o2(a3) && n3.push(a3);
      return n3;
    } };
  }