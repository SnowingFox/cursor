// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2618 range:62812..63032
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2618: (t2, r2, e2) => {
    var n2 = e2(5438), o2 = String;
    t2.exports = function(t3) {
      if ("Symbol" === n2(t3)) throw new TypeError("Cannot convert a Symbol value to a string");
      return o2(t3);
    };
  }