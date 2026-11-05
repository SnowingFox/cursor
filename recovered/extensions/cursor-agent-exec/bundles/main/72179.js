// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 72179 range:6361713..6363989
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
72179: (e, t, r) => {
    var n = r(24720), s = r(76017), o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 0, 1, 7, 1, 1, 1, 1, 1, 1, 5, 1, 5, 0, 5, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 7, 0, 7, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 6, 6, 6, 6, 6, 1, 6, 6, 6, 6, 6, 7, 7, 7], i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 1, 1, 3, 3, 0, 3, 3, 3, 1, 2, 1, 2, 0, 3, 3, 3, 3, 3, 3, 3, 0, 3, 1, 3, 1, 1, 1, 3, 0, 3, 1, 3, 1, 1, 3, 3];
    function a() {
      n.apply(this);
      var e2 = this;
      this.reset = function() {
        this._mLastCharClass = 1, this._mFreqCounter = [];
        for (var e3 = 0; e3 < 4; this._mFreqCounter[e3++] = 0) ;
        a.prototype.reset.apply(this);
      }, this.getCharsetName = function() {
        return "windows-1252";
      }, this.getSupportedCharsetNames = function() {
        return [this.getCharsetName()];
      }, this.feed = function(e3) {
        e3 = this.removeXmlTags(e3);
        for (var t2 = 0; t2 < e3.length; t2++) {
          var r2 = e3.charCodeAt(t2), n2 = o[r2], a2 = i[8 * this._mLastCharClass + n2];
          if (0 == a2) {
            this._mState = s.notMe;
            break;
          }
          this._mFreqCounter[a2]++, this._mLastCharClass = n2;
        }
        return this.getState();
      }, this.getConfidence = function() {
        var e3;
        if (this.getState() == s.notMe) return 0.01;
        for (var t2 = 0, r2 = 0; r2 < this._mFreqCounter.length; r2++) t2 += this._mFreqCounter[r2];
        return (e3 = t2 < 0.01 ? 0 : this._mFreqCounter[3] / t2 - 20 * this._mFreqCounter[1] / t2) < 0 && (e3 = 0), e3 *= 0.95;
      }, e2.reset();
    }
    a.prototype = new n(), e.exports = a;
  }