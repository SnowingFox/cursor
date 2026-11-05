// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 81235 range:10770640..10772431
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81235: (e, t, r) => {
    var n = r(39306), s = r(80281), o = r(65507), i = r(76180).EZ, a = r(92905).JI, c = r(76017), l = r(66722);
    function u() {
      s.apply(this);
      var e2 = this;
      this.reset = function() {
        u.prototype.reset.apply(this), this._mContextAnalyzer.reset();
      }, this.getCharsetName = function() {
        return "SHIFT_JIS";
      }, this.feed = function(e3) {
        for (var t2 = e3.length, r2 = 0; r2 < t2; r2++) {
          var n2 = this._mCodingSM.nextState(e3[r2]);
          if (n2 == c.error) {
            l.log(this.getCharsetName() + " prober hit error at byte " + r2 + "\n"), this._mState = c.notMe;
            break;
          }
          if (n2 == c.itsMe) {
            this._mState = c.foundIt;
            break;
          }
          if (n2 == c.start) {
            var s2 = this._mCodingSM.getCurrentCharLen();
            0 == r2 ? (this._mLastChar[1] = e3[0], this._mContextAnalyzer.feed(this._mLastChar.slice(2 - s2).join(""), s2), this._mDistributionAnalyzer.feed(this._mLastChar.join(""), s2)) : (this._mContextAnalyzer.feed(e3.slice(r2 + 1 - s2, r2 + 3 - s2), s2), this._mDistributionAnalyzer.feed(e3.slice(r2 - 1, r2 + 1), s2));
          }
        }
        return this._mLastChar[0] = e3[t2 - 1], this.getState() == c.detecting && this._mContextAnalyzer.gotEnoughData() && this.getConfidence() > c.SHORTCUT_THRESHOLD && (this._mState = c.foundIt), this.getState();
      }, this.getConfidence = function() {
        var e3 = this._mContextAnalyzer.getConfidence(), t2 = this._mDistributionAnalyzer.getConfidence();
        return Math.max(e3, t2);
      }, e2._mCodingSM = new n(o), e2._mDistributionAnalyzer = new i(), e2._mContextAnalyzer = new a(), e2.reset();
    }
    u.prototype = new s(), e.exports = u;
  }