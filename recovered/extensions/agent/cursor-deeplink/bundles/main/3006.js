// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3006 range:405806..406242
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3006: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2613), { URLSerializer: r2 } = A2(3631), { isValidHeaderName: o2 } = A2(5728);
    e2.exports = { urlEquals: function(e3, t3, A3 = false) {
      return r2(e3, A3) === r2(t3, A3);
    }, fieldValues: function(e3) {
      n2(null !== e3);
      const t3 = [];
      for (let A3 of e3.split(",")) A3 = A3.trim(), A3.length && o2(A3) && t3.push(A3);
      return t3;
    } };
  }