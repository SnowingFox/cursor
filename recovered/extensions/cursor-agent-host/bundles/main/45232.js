// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 45232 range:7848067..7848851
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
45232: (e, t) => {
    "use strict";
    function r(e2, t2) {
      this.encoder = e2, this.addBOM = true;
    }
    function n(e2, t2) {
      this.decoder = e2, this.pass = false, this.options = t2 || {};
    }
    t.PrependBOM = r, r.prototype.write = function(e2) {
      return this.addBOM && (e2 = "\uFEFF" + e2, this.addBOM = false), this.encoder.write(e2);
    }, r.prototype.end = function() {
      return this.encoder.end();
    }, t.StripBOM = n, n.prototype.write = function(e2) {
      var t2 = this.decoder.write(e2);
      return this.pass || !t2 || ("\uFEFF" === t2[0] && (t2 = t2.slice(1), "function" == typeof this.options.stripBOM && this.options.stripBOM()), this.pass = true), t2;
    }, n.prototype.end = function() {
      return this.decoder.end();
    };
  }