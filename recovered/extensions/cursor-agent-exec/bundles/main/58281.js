// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 58281 range:4672281..4674131
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58281: (e, t, r) => {
    var n = r(76017), s = r(24720), o = r(66722);
    function i() {
      s.apply(this);
      var e2 = this;
      this.reset = function() {
        i.prototype.reset.apply(this), this._mActiveNum = 0;
        for (var e3, t2 = 0; e3 = this._mProbers[t2]; t2++) e3 && (e3.reset(), e3.active = true, this._mActiveNum++);
        this._mBestGuessProber = null;
      }, this.getCharsetName = function() {
        return this._mBestGuessProber || (this.getConfidence(), this._mBestGuessProber) ? this._mBestGuessProber.getCharsetName() : null;
      }, this.getSupportedCharsetNames = function() {
        throw new Error("Unimplemented method getSupportedCharsetNames()");
      }, this.feed = function(e3) {
        for (var t2, r2 = 0; t2 = this._mProbers[r2]; r2++) if (t2 && t2.active) {
          var s2 = t2.feed(e3);
          if (s2) {
            if (s2 == n.foundIt) return this._mBestGuessProber = t2, this.getState();
            if (s2 == n.notMe && (t2.active = false, this._mActiveNum--, this._mActiveNum <= 0)) return this._mState = n.notMe, this.getState();
          }
        }
        return this.getState();
      }, this.getConfidence = function() {
        var e3 = this.getState();
        if (e3 == n.foundIt) return 0.99;
        if (e3 == n.notMe) return 0.01;
        var t2 = 0;
        this._mBestGuessProber = null;
        for (var r2, s2 = 0; r2 = this._mProbers[s2]; s2++) if (r2) if (r2.active) {
          var i2 = r2.getConfidence();
          o.log(r2.getCharsetName() + " confidence = " + i2 + "\n"), t2 < i2 && (t2 = i2, this._mBestGuessProber = r2);
        } else o.log(r2.getCharsetName() + " not active\n");
        return this._mBestGuessProber ? t2 : 0;
      }, e2._mActiveNum = 0, e2._mProbers = [], e2._mBestGuessProber = null;
    }
    i.prototype = new s(), e.exports = i;
  }