// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 72519 range:6363991..6365198
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
72519: (e, t, r) => {
    "use strict";
    var n = r(36755);
    function s(e2, t2, r2, n2, s2) {
      this.name = e2, this.buffer = t2, this.position = r2, this.line = n2, this.column = s2;
    }
    s.prototype.getSnippet = function(e2, t2) {
      var r2, s2, o, i, a;
      if (!this.buffer) return null;
      for (e2 = e2 || 4, t2 = t2 || 75, r2 = "", s2 = this.position; s2 > 0 && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(s2 - 1)); ) if (s2 -= 1, this.position - s2 > t2 / 2 - 1) {
        r2 = " ... ", s2 += 5;
        break;
      }
      for (o = "", i = this.position; i < this.buffer.length && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i)); ) if ((i += 1) - this.position > t2 / 2 - 1) {
        o = " ... ", i -= 5;
        break;
      }
      return a = this.buffer.slice(s2, i), n.repeat(" ", e2) + r2 + a + o + "\n" + n.repeat(" ", e2 + this.position - s2 + r2.length) + "^";
    }, s.prototype.toString = function(e2) {
      var t2, r2 = "";
      return this.name && (r2 += 'in "' + this.name + '" '), r2 += "at line " + (this.line + 1) + ", column " + (this.column + 1), e2 || (t2 = this.getSnippet()) && (r2 += ":\n" + t2), r2;
    }, e.exports = s;
  }