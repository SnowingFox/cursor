// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 39425 range:3113546..3114201
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