// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 76180 range:6467011..6470902
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76180: (e, t, r) => {
    var n = r(86552), s = r(57696), o = r(37784), i = r(83173), a = r(11445);
    function c() {
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
    function l() {
      c.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        return e3.charCodeAt(0) >= 196 ? 94 * (e3.charCodeAt(0) - 196) + e3.charCodeAt(1) - 161 : -1;
      }, e2._mCharToFreqOrder = s.EUCTWCharToFreqOrder, e2._mTableSize = s.EUCTW_TABLE_SIZE, e2._mTypicalDistributionRatio = s.EUCTW_TYPICAL_DISTRIBUTION_RATIO;
    }
    function u() {
      c.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        return e3.charCodeAt(0) >= 176 ? 94 * (e3.charCodeAt(0) - 176) + e3.charCodeAt(1) - 161 : -1;
      }, e2._mCharToFreqOrder = o.EUCKRCharToFreqOrder, e2._mTableSize = o.EUCKR_TABLE_SIZE, e2._mTypicalDistributionRatio = o.EUCKR_TYPICAL_DISTRIBUTION_RATIO;
    }
    function d() {
      c.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        return e3.charCodeAt(0) >= 176 && e3.charCodeAt(1) >= 161 ? 94 * (e3.charCodeAt(0) - 176) + e3.charCodeAt(1) - 161 : -1;
      }, e2._mCharToFreqOrder = i.GB2312CharToFreqOrder, e2._mTableSize = i.GB2312_TABLE_SIZE, e2._mTypicalDistributionRatio = i.GB2312_TYPICAL_DISTRIBUTION_RATIO;
    }
    function p() {
      c.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        return e3.charCodeAt(0) >= 164 ? e3.charCodeAt(1) >= 161 ? 157 * (e3.charCodeAt(0) - 164) + e3.charCodeAt(1) - 161 + 63 : 157 * (e3.charCodeAt(0) - 164) + e3.charCodeAt(1) - 64 : -1;
      }, e2._mCharToFreqOrder = a.Big5CharToFreqOrder, e2._mTableSize = a.BIG5_TABLE_SIZE, e2._mTypicalDistributionRatio = a.BIG5_TYPICAL_DISTRIBUTION_RATIO;
    }
    function m() {
      c.apply(this);
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
    function h() {
      c.apply(this);
      var e2 = this;
      this.getOrder = function(e3) {
        return e3[0] >= " " ? 94 * (e3.charCodeAt(0) - 161) + e3.charCodeAt(1) - 161 : -1;
      }, e2._mCharToFreqOrder = n.JISCharToFreqOrder, e2._mTableSize = n.JIS_TABLE_SIZE, e2._mTypicalDistributionRatio = n.JIS_TYPICAL_DISTRIBUTION_RATIO;
    }
    l.prototype = new c(), t.R6 = l, u.prototype = new c(), t.dk = u, d.prototype = new c(), t.qc = d, p.prototype = new c(), t.SG = p, m.prototype = new c(), t.EZ = m, h.prototype = new c(), t.q7 = h;
  }