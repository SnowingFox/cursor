// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 81235 range:7363993..7365784
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81235: (e, t, r) => {
    var n = r(39306), o = r(80281), s = r(65507), i = r(76180).EZ, a = r(92905).JI, l = r(76017), c = r(66722);
    function u() {
      o.apply(this);
      var e2 = this;
      this.reset = function() {
        u.prototype.reset.apply(this), this._mContextAnalyzer.reset();
      }, this.getCharsetName = function() {
        return "SHIFT_JIS";
      }, this.feed = function(e3) {
        for (var t2 = e3.length, r2 = 0; r2 < t2; r2++) {
          var n2 = this._mCodingSM.nextState(e3[r2]);
          if (n2 == l.error) {
            c.log(this.getCharsetName() + " prober hit error at byte " + r2 + "\n"), this._mState = l.notMe;
            break;
          }
          if (n2 == l.itsMe) {
            this._mState = l.foundIt;
            break;
          }
          if (n2 == l.start) {
            var o2 = this._mCodingSM.getCurrentCharLen();
            0 == r2 ? (this._mLastChar[1] = e3[0], this._mContextAnalyzer.feed(this._mLastChar.slice(2 - o2).join(""), o2), this._mDistributionAnalyzer.feed(this._mLastChar.join(""), o2)) : (this._mContextAnalyzer.feed(e3.slice(r2 + 1 - o2, r2 + 3 - o2), o2), this._mDistributionAnalyzer.feed(e3.slice(r2 - 1, r2 + 1), o2));
          }
        }
        return this._mLastChar[0] = e3[t2 - 1], this.getState() == l.detecting && this._mContextAnalyzer.gotEnoughData() && this.getConfidence() > l.SHORTCUT_THRESHOLD && (this._mState = l.foundIt), this.getState();
      }, this.getConfidence = function() {
        var e3 = this._mContextAnalyzer.getConfidence(), t2 = this._mDistributionAnalyzer.getConfidence();
        return Math.max(e3, t2);
      }, e2._mCodingSM = new n(s), e2._mDistributionAnalyzer = new i(), e2._mContextAnalyzer = new a(), e2.reset();
    }
    u.prototype = new o(), e.exports = u;
  }