// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 41565 range:1265841..1267656
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41565: (e, t, r) => {
    var n = r(39306), o = r(80281), s = r(76180).q7, i = r(92905).v, a = r(24381), l = r(76017), c = r(66722);
    function u() {
      o.apply(this);
      var e2 = this;
      this.reset = function() {
        u.prototype.reset.apply(this), this._mContextAnalyzer.reset();
      }, this.getCharsetName = function() {
        return "EUC-JP";
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
            if (0 == r2) {
              this._mLastChar[1] = e3[0];
              var s2 = this._mLastChar.join("");
              this._mContextAnalyzer.feed(s2, o2), this._mDistributionAnalyzer.feed(s2, o2);
            } else this._mContextAnalyzer.feed(e3.slice(r2 - 1, r2 + 1), o2), this._mDistributionAnalyzer.feed(e3.slice(r2 - 1, r2 + 1), o2);
          }
        }
        return this._mLastChar[0] = e3[t2 - 1], this.getState() == l.detecting && this._mContextAnalyzer.gotEnoughData() && this.getConfidence() > l.SHORTCUT_THRESHOLD && (this._mState = l.foundIt), this.getState();
      }, this.getConfidence = function() {
        var e3 = this._mContextAnalyzer.getConfidence(), t2 = this._mDistributionAnalyzer.getConfidence();
        return Math.max(e3, t2);
      }, e2._mCodingSM = new n(a), e2._mDistributionAnalyzer = new s(), e2._mContextAnalyzer = new i(), e2.reset();
    }
    u.prototype = new o(), e.exports = u;
  }