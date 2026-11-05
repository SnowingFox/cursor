// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 66509 range:2000497..2002649
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66509: (e, t, r) => {
    var n = r(24720), o = r(76017);
    function s() {
      n.apply(this);
      var e2 = "ê", t2 = "ë", r2 = "í", s2 = "î", i = "ï", a = "ð", l = "ó", c = "ô", u = "õ", d = "ISO-8859-8", p = "windows-1255", h = this;
      this.reset = function() {
        this._mFinalCharLogicalScore = 0, this._mFinalCharVisualScore = 0, this._mPrev = " ", this._mBeforePrev = " ";
      }, this.setModelProbers = function(e3, t3) {
        this._mLogicalProber = e3, this._mVisualProber = t3;
      }, this.isFinal = function(t3) {
        return -1 != [e2, r2, i, l, u].indexOf(t3);
      }, this.isNonFinal = function(e3) {
        return -1 != [t2, s2, a, c].indexOf(e3);
      }, this.feed = function(e3) {
        if (this.getState() == o.notMe) return o.notMe;
        e3 = this.filterHighBitOnly(e3);
        for (var t3, r3 = 0; r3 < e3.length; r3++) " " == (t3 = e3[r3]) ? " " != this._mBeforePrev && (this.isFinal(this._mPrev) ? this._mFinalCharLogicalScore++ : this.isNonFinal(this._mPrev) && this._mFinalCharVisualScore++) : " " == this._mBeforePrev && this.isFinal(this._mPrev) && " " != t3 && this._mFinalCharVisualScore++, this._mBeforePrev = this._mPrev, this._mPrev = t3;
        return o.detecting;
      }, this.getCharsetName = function() {
        var e3 = this._mFinalCharLogicalScore - this._mFinalCharVisualScore;
        if (e3 >= 5) return p;
        if (e3 <= -5) return d;
        var t3 = this._mLogicalProber.getConfidence() - this._mVisualProber.getConfidence();
        return t3 > 0.01 ? p : t3 < -0.01 || e3 < 0 ? d : p;
      }, this.getState = function() {
        return this._mLogicalProber.getState() == o.notMe && this._mVisualProber.getState() == o.notMe ? o.notMe : o.detecting;
      }, h._mLogicalProber = null, h._mVisualProber = null, h.reset();
    }
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e2) {
      var t2 = this.length >>> 0, r2 = Number(arguments[1]) || 0;
      for ((r2 = r2 < 0 ? Math.ceil(r2) : Math.floor(r2)) < 0 && (r2 += t2); r2 < t2; r2++) if (r2 in this && this[r2] === e2) return r2;
      return -1;
    }), s.prototype = new n(), e.exports = s;
  }