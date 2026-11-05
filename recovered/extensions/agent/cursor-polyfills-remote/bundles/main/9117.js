// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9117 range:160710..161132
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9117: function(t2) {
    var r2 = function(t3) {
      return t3 && t3.Math === Math && t3;
    };
    t2.exports = r2("object" == typeof globalThis && globalThis) || r2("object" == typeof window && window) || r2("object" == typeof self && self) || r2("object" == typeof global && global) || r2("object" == typeof this && this) || /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }