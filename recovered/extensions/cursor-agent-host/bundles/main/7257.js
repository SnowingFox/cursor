// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 7257 range:3206875..3208390
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7257: (e, t, r) => {
    var n = r(39306), s = r(24720), o = r(76017), i = r(27465);
    function a() {
      s.apply(this);
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
          if (n2 == o.error) {
            this._mState = o.notMe;
            break;
          }
          if (n2 == o.itsMe) {
            this._mState = o.foundIt;
            break;
          }
          n2 == o.start && (this._mCodingSM.getCurrentCharLen() >= 2 ? (this._mNumOfMBChar++, this._mMBCharLen += this._mCodingSM.getCurrentCharLen()) : t2.charCodeAt(0) < 128 && this._mBasicAsciiLen++);
        }
        return this.getState() == o.detecting && this.getConfidence() > o.SHORTCUT_THRESHOLD && (this._mState = o.foundIt), this.getState();
      }, this.getConfidence = function() {
        var e3 = 0.99, t2 = 0, r2 = this._mFullLen - this._mBasicAsciiLen;
        return r2 > 0 && (t2 = this._mMBCharLen / r2), this._mNumOfMBChar < 6 && t2 <= 0.6 ? 1 - (e3 *= Math.pow(0.5, this._mNumOfMBChar)) : e3;
      }, e2._mCodingSM = new n(i), e2.reset();
    }
    a.prototype = new s(), e.exports = a;
  }