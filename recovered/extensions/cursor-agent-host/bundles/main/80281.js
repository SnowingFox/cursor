// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 80281 range:11646619..11648085
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80281: (e, t, r) => {
    var n = r(24720), s = r(76017), o = r(66722);
    function i() {
      n.apply(this);
      this.reset = function() {
        i.prototype.reset.apply(this), this._mCodingSM && this._mCodingSM.reset(), this._mDistributionAnalyzer && this._mDistributionAnalyzer.reset(), this._mLastChar = ["\0", "\0"];
      }, this.getCharsetName = function() {
      }, this.feed = function(e2) {
        for (var t2 = e2.length, r2 = 0; r2 < t2; r2++) {
          var n2 = this._mCodingSM.nextState(e2[r2]);
          if (n2 == s.error) {
            o.log(this.getCharsetName() + " prober hit error at byte " + r2 + "\n"), this._mState = s.notMe;
            break;
          }
          if (n2 == s.itsMe) {
            this._mState = s.foundIt;
            break;
          }
          if (n2 == s.start) {
            var i2 = this._mCodingSM.getCurrentCharLen();
            0 == r2 ? (this._mLastChar[1] = e2[0], this._mDistributionAnalyzer.feed(this._mLastChar.join(""), i2)) : this._mDistributionAnalyzer.feed(e2.slice(r2 - 1, r2 + 1), i2);
          }
        }
        return this._mLastChar[0] = e2[t2 - 1], this.getState() == s.detecting && this._mDistributionAnalyzer.gotEnoughData() && this.getConfidence() > s.SHORTCUT_THRESHOLD && (this._mState = s.foundIt), this.getState();
      }, this.getConfidence = function() {
        return this._mDistributionAnalyzer.getConfidence();
      };
    }
    i.prototype = new n(), e.exports = i;
  }