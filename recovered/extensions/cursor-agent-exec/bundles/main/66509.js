// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 66509 range:6046664..6048816
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66509: (e, t, r) => {
    var n = r(24720), s = r(76017);
    function o() {
      n.apply(this);
      var e2 = "ê", t2 = "ë", r2 = "í", o2 = "î", i = "ï", a = "ð", c = "ó", l = "ô", u = "õ", d = "ISO-8859-8", p = "windows-1255", m = this;
      this.reset = function() {
        this._mFinalCharLogicalScore = 0, this._mFinalCharVisualScore = 0, this._mPrev = " ", this._mBeforePrev = " ";
      }, this.setModelProbers = function(e3, t3) {
        this._mLogicalProber = e3, this._mVisualProber = t3;
      }, this.isFinal = function(t3) {
        return -1 != [e2, r2, i, c, u].indexOf(t3);
      }, this.isNonFinal = function(e3) {
        return -1 != [t2, o2, a, l].indexOf(e3);
      }, this.feed = function(e3) {
        if (this.getState() == s.notMe) return s.notMe;
        e3 = this.filterHighBitOnly(e3);
        for (var t3, r3 = 0; r3 < e3.length; r3++) " " == (t3 = e3[r3]) ? " " != this._mBeforePrev && (this.isFinal(this._mPrev) ? this._mFinalCharLogicalScore++ : this.isNonFinal(this._mPrev) && this._mFinalCharVisualScore++) : " " == this._mBeforePrev && this.isFinal(this._mPrev) && " " != t3 && this._mFinalCharVisualScore++, this._mBeforePrev = this._mPrev, this._mPrev = t3;
        return s.detecting;
      }, this.getCharsetName = function() {
        var e3 = this._mFinalCharLogicalScore - this._mFinalCharVisualScore;
        if (e3 >= 5) return p;
        if (e3 <= -5) return d;
        var t3 = this._mLogicalProber.getConfidence() - this._mVisualProber.getConfidence();
        return t3 > 0.01 ? p : t3 < -0.01 || e3 < 0 ? d : p;
      }, this.getState = function() {
        return this._mLogicalProber.getState() == s.notMe && this._mVisualProber.getState() == s.notMe ? s.notMe : s.detecting;
      }, m._mLogicalProber = null, m._mVisualProber = null, m.reset();
    }
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e2) {
      var t2 = this.length >>> 0, r2 = Number(arguments[1]) || 0;
      for ((r2 = r2 < 0 ? Math.ceil(r2) : Math.floor(r2)) < 0 && (r2 += t2); r2 < t2; r2++) if (r2 in this && this[r2] === e2) return r2;
      return -1;
    }), o.prototype = new n(), e.exports = o;
  }