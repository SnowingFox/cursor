// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 45232 range:1376623..1377407
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