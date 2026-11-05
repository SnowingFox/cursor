// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3851 range:1011012..1011781
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3851: function(t2, e2) {
    "use strict";
    var r2 = this && this.__assign || function() {
      return r2 = Object.assign || function(t3) {
        for (var e3, r3 = 1, n3 = arguments.length; r3 < n3; r3++) for (var s2 in e3 = arguments[r3]) Object.prototype.hasOwnProperty.call(e3, s2) && (t3[s2] = e3[s2]);
        return t3;
      }, r2.apply(this, arguments);
    };
    Object.defineProperty(e2, "__esModule", { value: true });
    var n2 = { delayFirstAttempt: false, jitter: "none", maxDelay: 1 / 0, numOfAttempts: 10, retry: function() {
      return true;
    }, startingDelay: 100, timeMultiple: 2 };
    e2.getSanitizedOptions = function(t3) {
      var e3 = r2(r2({}, n2), t3);
      return e3.numOfAttempts < 1 && (e3.numOfAttempts = 1), e3;
    };
  }