// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8366 range:771507..771832
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8366: (e2) => {
    "use strict";
    function t2(e3) {
      return (e3 / 8 | 0) + (e3 % 8 == 0 ? 0 : 1);
    }
    var A2 = { ES256: t2(256), ES384: t2(384), ES512: t2(521) };
    e2.exports = function(e3) {
      var t3 = A2[e3];
      if (t3) return t3;
      throw new Error('Unknown algorithm "' + e3 + '"');
    };
  }