// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 24720 range:681214..682323
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
        for (var t2 = "", r2 = false, n2 = 0, o = 0; o < e2.length; o++) {
          var s = e2[o];
          ">" == s && "?" !== e2[o - 1] ? (n2 = o + 1, r2 = false) : "<" == s && "?" !== e2[o + 1] && (o > n2 && !r2 && (t2 = t2 + e2.substring(n2, o) + " "), r2 = true);
        }
        return r2 || (t2 += e2.substring(n2)), t2;
      };
    };
  }