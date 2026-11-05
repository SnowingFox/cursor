// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 24720 range:4518155..4519264
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
24720: (e, t, r) => {
    var n = r(76017);
    e.exports = function() {
      this.reset = function() {
        this._mState = n.detecting;
      }, this.getCharsetName = function() {
        return null;
      }, this.getSupportedCharsetNames = function() {
        throw new Error("Unimplemented method getSupportedCharsetNames()");
      }, this.feed = function(e2) {
      }, this.getState = function() {
        return this._mState;
      }, this.getConfidence = function() {
        return 0;
      }, this.filterHighBitOnly = function(e2) {
        return e2 = e2.replace(/[\x00-\x7F]+/g, " ");
      }, this.filterWithoutEnglishLetters = function(e2) {
        return e2 = e2.replace(/[A-Za-z]+/g, " ");
      }, this.removeXmlTags = function(e2) {
        for (var t2 = "", r2 = false, n2 = 0, s = 0; s < e2.length; s++) {
          var o = e2[s];
          ">" == o && "?" !== e2[s - 1] ? (n2 = s + 1, r2 = false) : "<" == o && "?" !== e2[s + 1] && (s > n2 && !r2 && (t2 = t2 + e2.substring(n2, s) + " "), r2 = true);
        }
        return r2 || (t2 += e2.substring(n2)), t2;
      };
    };
  }