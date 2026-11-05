// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7086 range:848223..848832
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7086: (e2) => {
    e2.exports = function e3(a2, n2) {
      if (a2 && n2) return e3(a2)(n2);
      if ("function" != typeof a2) throw new TypeError("need wrapper function");
      return Object.keys(a2).forEach(function(e4) {
        t2[e4] = a2[e4];
      }), t2;
      function t2() {
        for (var e4 = new Array(arguments.length), n3 = 0; n3 < e4.length; n3++) e4[n3] = arguments[n3];
        var t3 = a2.apply(this, e4), s2 = e4[e4.length - 1];
        return "function" == typeof t3 && t3 !== s2 && Object.keys(s2).forEach(function(e5) {
          t3[e5] = s2[e5];
        }), t3;
      }
    };
  }