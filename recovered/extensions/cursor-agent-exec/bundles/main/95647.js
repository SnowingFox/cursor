// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 95647 range:11346417..11348509
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95647: (e, t, r) => {
    var n = r(24720), s = r(76017), o = r(66722);
    function i(e2, t2, r2) {
      n.apply(this);
      var a = this;
      this.reset = function() {
        i.prototype.reset.apply(this), this._mLastOrder = 255, this._mSeqCounters = [];
        for (var e3 = 0; e3 < 4; this._mSeqCounters[e3++] = 0) ;
        this._mTotalSeqs = 0, this._mTotalChar = 0, this._mFreqChar = 0;
      }, this.getCharsetName = function() {
        return this._mNameProber ? this._mNameProber.getCharsetName() : this._mModel.charsetName;
      }, this.feed = function(e3) {
        this._mModel.keepEnglishLetter || (e3 = this.filterWithoutEnglishLetters(e3));
        var t3 = e3.length;
        if (!t3) return this.getState();
        for (var r3, n2 = 0; n2 < t3; n2++) {
          r3 = e3.charCodeAt(n2);
          var i2 = this._mModel.charToOrderMap[r3];
          i2 < 250 && this._mTotalChar++, i2 < 64 && (this._mFreqChar++, this._mLastOrder < 64 && (this._mTotalSeqs++, this._mReversed ? this._mSeqCounters[this._mModel.precedenceMatrix[64 * i2 + this._mLastOrder]]++ : this._mSeqCounters[this._mModel.precedenceMatrix[64 * this._mLastOrder + i2]]++)), this._mLastOrder = i2;
        }
        if (this.getState() == s.detecting && a._mTotalSeqs > 1024) {
          var c = this.getConfidence();
          c > 0.95 ? o.log(this._mModel.charsetName + " confidence = " + c + ", we have a winner\n") : c < 0.05 && (o.log(this._mModel.charsetName + " confidence = " + c + ", below negative shortcut threshhold 0.05\n"), this._mState = s.notMe);
        }
        return this.getState();
      }, this.getConfidence = function() {
        var e3 = 0.01;
        return this._mTotalSeqs > 0 && (e3 = 1 * this._mSeqCounters[3] / this._mTotalSeqs / this._mModel.mTypicalPositiveRatio, (e3 *= this._mFreqChar / this._mTotalChar) >= 1 && (e3 = 0.99)), e3;
      }, (function(e3, t3, r3) {
        a._mModel = e3, a._mReversed = t3, a._mNameProber = r3, a.reset();
      })(e2, t2 = void 0 !== t2 && t2, r2 = void 0 !== r2 ? r2 : null);
    }
    i.prototype = new n(), e.exports = i;
  }