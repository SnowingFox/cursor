// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9687 range:6195206..6196377
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9687: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true });
    var n2 = r2(5760), s2 = (function() {
      function t3(t4) {
        this.options = t4, this.attempt = 0;
      }
      return t3.prototype.apply = function() {
        var t4 = this;
        return new Promise(function(e3) {
          return setTimeout(e3, t4.jitteredDelay);
        });
      }, t3.prototype.setAttemptNumber = function(t4) {
        this.attempt = t4;
      }, Object.defineProperty(t3.prototype, "jitteredDelay", { get: function() {
        return n2.JitterFactory(this.options)(this.delay);
      }, enumerable: true, configurable: true }), Object.defineProperty(t3.prototype, "delay", { get: function() {
        var t4 = this.options.startingDelay, e3 = this.options.timeMultiple, r3 = this.numOfDelayedAttempts, n3 = t4 * Math.pow(e3, r3);
        return Math.min(n3, this.options.maxDelay);
      }, enumerable: true, configurable: true }), Object.defineProperty(t3.prototype, "numOfDelayedAttempts", { get: function() {
        return this.attempt;
      }, enumerable: true, configurable: true }), t3;
    })();
    e2.Delay = s2;
  }