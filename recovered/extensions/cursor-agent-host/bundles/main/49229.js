// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 49229 range:8169324..8170948
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49229: (e, t, r) => {
    var n = r(24720), s = r(39306), o = r(65605), i = r(76017);
    function a() {
      n.apply(this);
      var e2 = this;
      this.reset = function() {
        a.prototype.reset.apply(this);
        for (var t2, r2 = 0; t2 = this._mCodingSM[r2]; r2++) t2 && (t2.active = true, t2.reset());
        this._mActiveSM = e2._mCodingSM.length, this._mDetectedCharset = null;
      }, this.getCharsetName = function() {
        return this._mDetectedCharset;
      }, this.getSupportedCharsetNames = function() {
        return e2._supportedCharsetNames;
      }, this.getConfidence = function() {
        return this._mDetectedCharset ? 0.99 : 0;
      }, this.feed = function(e3) {
        for (var t2, r2 = 0; r2 < e3.length; r2++) {
          t2 = e3[r2];
          for (var n2, s2 = 0; n2 = this._mCodingSM[s2]; s2++) if (n2 && n2.active) {
            var o2 = n2.nextState(t2);
            if (o2 == i.error) {
              if (n2.active = false, this._mActiveSM--, this._mActiveSM <= 0) return this._mState = i.notMe, this.getState();
            } else if (o2 == i.itsMe) return this._mState = i.foundIt, this._mDetectedCharset = n2.getCodingStateMachine(), this.getState();
          }
        }
        return this.getState();
      }, (function() {
        e2._mCodingSM = [new s(o.HZSMModel), new s(o.ISO2022CNSMModel), new s(o.ISO2022JPSMModel), new s(o.ISO2022KRSMModel)], e2._supportedCharsetNames = [];
        for (const t2 of e2._mCodingSM) e2._supportedCharsetNames.push(t2.getCodingStateMachine());
        e2.reset();
      })();
    }
    a.prototype = new n(), e.exports = a;
  }