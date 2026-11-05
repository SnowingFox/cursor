// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 41565 range:7663107..7664922
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41565: (e, t, r) => {
    var n = r(39306), s = r(80281), o = r(76180).q7, i = r(92905).v, a = r(24381), c = r(76017), l = r(66722);
    function u() {
      s.apply(this);
      var e2 = this;
      this.reset = function() {
        u.prototype.reset.apply(this), this._mContextAnalyzer.reset();
      }, this.getCharsetName = function() {
        return "EUC-JP";
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
            if (0 == r2) {
              this._mLastChar[1] = e3[0];
              var o2 = this._mLastChar.join("");
              this._mContextAnalyzer.feed(o2, s2), this._mDistributionAnalyzer.feed(o2, s2);
            } else this._mContextAnalyzer.feed(e3.slice(r2 - 1, r2 + 1), s2), this._mDistributionAnalyzer.feed(e3.slice(r2 - 1, r2 + 1), s2);
          }
        }
        return this._mLastChar[0] = e3[t2 - 1], this.getState() == c.detecting && this._mContextAnalyzer.gotEnoughData() && this.getConfidence() > c.SHORTCUT_THRESHOLD && (this._mState = c.foundIt), this.getState();
      }, this.getConfidence = function() {
        var e3 = this._mContextAnalyzer.getConfidence(), t2 = this._mDistributionAnalyzer.getConfidence();
        return Math.max(e3, t2);
      }, e2._mCodingSM = new n(a), e2._mDistributionAnalyzer = new o(), e2._mContextAnalyzer = new i(), e2.reset();
    }
    u.prototype = new s(), e.exports = u;
  }