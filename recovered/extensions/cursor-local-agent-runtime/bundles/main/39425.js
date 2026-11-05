// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 39425 range:1211990..1212645
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39425: (e) => {
    "use strict";
    function t(e2, t2) {
      Error.call(this), this.name = "YAMLException", this.reason = e2, this.mark = t2, this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : ""), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
    }
    t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.toString = function(e2) {
      var t2 = this.name + ": ";
      return t2 += this.reason || "(unknown reason)", !e2 && this.mark && (t2 += " " + this.mark.toString()), t2;
    }, e.exports = t;
  }