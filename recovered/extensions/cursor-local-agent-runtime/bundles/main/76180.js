// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 76180 range:7250284..7254175
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76180: (e, t, r) => {
    var n = r(86552), o = r(57696), s = r(37784), i = r(83173), a = r(11445);
    function l() {
      var e2 = this;
      this.reset = function() {
        this._mDone = false, this._mTotalChars = 0, this._mFreqChars = 0;
      }, this.feed = function(e3, t2) {
        if (2 == t2) var r2 = this.getOrder(e3);
        else r2 = -1;
        r2 >= 0 && (this._mTotalChars++, r2 < this._mTableSize && 512 > this._mCharToFreqOrder[r2] && this._mFreqChars++);
      }, this.getConfidence = function() {
        if (this._mTotalChars <= 0 || this._mFreqChars <= 3) return 0.01;
        if (this._mTotalChars != this._mFreqChars) {
          var e3 = this._mFreqChars / ((this._mTotalChars - this._mFreqChars) * this._mTypicalDistributionRatio);
          if (e3 < 0.99) return e3;
        }
        return 0.99;
      }, this.gotEnoughData = function() {
        return this._mTotalChars > 1024;
      }, this.getOrder = function(e3) {
        return -1;
      }, e2._mCharToFreqOrder = null, e2._mTableSize = null, e2._mTypicalDistributionRatio = null, e2.reset();
    }
    function c() {
      l.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        return e3.charCodeAt(0) >= 196 ? 94 * (e3.charCodeAt(0) - 196) + e3.charCodeAt(1) - 161 : -1;
      }, e2._mCharToFreqOrder = o.EUCTWCharToFreqOrder, e2._mTableSize = o.EUCTW_TABLE_SIZE, e2._mTypicalDistributionRatio = o.EUCTW_TYPICAL_DISTRIBUTION_RATIO;
    }
    function u() {
      l.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        return e3.charCodeAt(0) >= 176 ? 94 * (e3.charCodeAt(0) - 176) + e3.charCodeAt(1) - 161 : -1;
      }, e2._mCharToFreqOrder = s.EUCKRCharToFreqOrder, e2._mTableSize = s.EUCKR_TABLE_SIZE, e2._mTypicalDistributionRatio = s.EUCKR_TYPICAL_DISTRIBUTION_RATIO;
    }
    function d() {
      l.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        return e3.charCodeAt(0) >= 176 && e3.charCodeAt(1) >= 161 ? 94 * (e3.charCodeAt(0) - 176) + e3.charCodeAt(1) - 161 : -1;
      }, e2._mCharToFreqOrder = i.GB2312CharToFreqOrder, e2._mTableSize = i.GB2312_TABLE_SIZE, e2._mTypicalDistributionRatio = i.GB2312_TYPICAL_DISTRIBUTION_RATIO;
    }
    function p() {
      l.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        return e3.charCodeAt(0) >= 164 ? e3.charCodeAt(1) >= 161 ? 157 * (e3.charCodeAt(0) - 164) + e3.charCodeAt(1) - 161 + 63 : 157 * (e3.charCodeAt(0) - 164) + e3.charCodeAt(1) - 64 : -1;
      }, e2._mCharToFreqOrder = a.Big5CharToFreqOrder, e2._mTableSize = a.BIG5_TABLE_SIZE, e2._mTypicalDistributionRatio = a.BIG5_TYPICAL_DISTRIBUTION_RATIO;
    }
    function h() {
      l.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        if (e3.charCodeAt(0) >= 129 && e3.charCodeAt(0) <= 159) var t2 = 188 * (e3.charCodeAt(0) - 129);
        else {
          if (!(e3.charCodeAt(0) >= 224 && e3.charCodeAt(0) <= 239)) return -1;
          t2 = 188 * (e3.charCodeAt(0) - 224 + 31);
        }
        return t2 += e3.charCodeAt(1) - 64, (e3.charCodeAt(1) < 64 || 127 === e3.charCodeAt(1) || e3.charCodeAt(1) > 252) && (t2 = -1), t2;
      }, e2._mCharToFreqOrder = n.JISCharToFreqOrder, e2._mTableSize = n.JIS_TABLE_SIZE, e2._mTypicalDistributionRatio = n.JIS_TYPICAL_DISTRIBUTION_RATIO;
    }
    function m() {
      l.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        return e3[0] >= " " ? 94 * (e3.charCodeAt(0) - 161) + e3.charCodeAt(1) - 161 : -1;
      }, e2._mCharToFreqOrder = n.JISCharToFreqOrder, e2._mTableSize = n.JIS_TABLE_SIZE, e2._mTypicalDistributionRatio = n.JIS_TYPICAL_DISTRIBUTION_RATIO;
    }
    c.prototype = new l(), t.R6 = c, u.prototype = new l(), t.dk = u, d.prototype = new l(), t.qc = d, p.prototype = new l(), t.SG = p, h.prototype = new l(), t.EZ = h, m.prototype = new l(), t.q7 = m;
  }