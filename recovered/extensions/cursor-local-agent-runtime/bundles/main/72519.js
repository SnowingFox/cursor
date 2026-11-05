// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 72519 range:2312816..2314023
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
72519: (e, t, r) => {
    "use strict";
    var n = r(36755);
    function o(e2, t2, r2, n2, o2) {
      this.name = e2, this.buffer = t2, this.position = r2, this.line = n2, this.column = o2;
    }
    o.prototype.getSnippet = function(e2, t2) {
      var r2, o2, s, i, a;
      if (!this.buffer) return null;
      for (e2 = e2 || 4, t2 = t2 || 75, r2 = "", o2 = this.position; o2 > 0 && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(o2 - 1)); ) if (o2 -= 1, this.position - o2 > t2 / 2 - 1) {
        r2 = " ... ", o2 += 5;
        break;
      }
      for (s = "", i = this.position; i < this.buffer.length && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i)); ) if ((i += 1) - this.position > t2 / 2 - 1) {
        s = " ... ", i -= 5;
        break;
      }
      return a = this.buffer.slice(o2, i), n.repeat(" ", e2) + r2 + a + s + "\n" + n.repeat(" ", e2 + this.position - o2 + r2.length) + "^";
    }, o.prototype.toString = function(e2) {
      var t2, r2 = "";
      return this.name && (r2 += 'in "' + this.name + '" '), r2 += "at line " + (this.line + 1) + ", column " + (this.column + 1), e2 || (t2 = this.getSnippet()) && (r2 += ":\n" + t2), r2;
    }, e.exports = o;
  }