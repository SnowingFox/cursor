// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2482 range:60774..61006
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2482: (t2, r2, e2) => {
    var n2 = e2(6893), o2 = e2(997), i2 = e2(6821), a2 = ArrayBuffer.prototype;
    n2 && !("detached" in a2) && o2(a2, "detached", { configurable: true, get: function() {
      return i2(this);
    } });
  }