// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 7257 range:70166..71681
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7257: (e, t, r) => {
    var n = r(39306), o = r(24720), s = r(76017), i = r(27465);
    function a() {
      o.apply(this);
      var e2 = this;
      this.reset = function() {
        a.prototype.reset.apply(this), this._mCodingSM.reset(), this._mNumOfMBChar = 0, this._mMBCharLen = 0, this._mFullLen = 0, this._mBasicAsciiLen = 0;
      }, this.getCharsetName = function() {
        return "UTF-8";
      }, this.feed = function(e3) {
        this._mFullLen += e3.length;
        for (var t2, r2 = 0; r2 < e3.length; r2++) {
          t2 = e3[r2];
          var n2 = this._mCodingSM.nextState(t2);
          if (n2 == s.error) {
            this._mState = s.notMe;
            break;
          }
          if (n2 == s.itsMe) {
            this._mState = s.foundIt;
            break;
          }
          n2 == s.start && (this._mCodingSM.getCurrentCharLen() >= 2 ? (this._mNumOfMBChar++, this._mMBCharLen += this._mCodingSM.getCurrentCharLen()) : t2.charCodeAt(0) < 128 && this._mBasicAsciiLen++);
        }
        return this.getState() == s.detecting && this.getConfidence() > s.SHORTCUT_THRESHOLD && (this._mState = s.foundIt), this.getState();
      }, this.getConfidence = function() {
        var e3 = 0.99, t2 = 0, r2 = this._mFullLen - this._mBasicAsciiLen;
        return r2 > 0 && (t2 = this._mMBCharLen / r2), this._mNumOfMBChar < 6 && t2 <= 0.6 ? 1 - (e3 *= Math.pow(0.5, this._mNumOfMBChar)) : e3;
      }, e2._mCodingSM = new n(i), e2.reset();
    }
    a.prototype = new o(), e.exports = a;
  }