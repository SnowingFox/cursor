// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 39306 range:3112691..3113544
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39306: (e, t, r) => {
    var n = r(76017);
    e.exports = function(e2) {
      var t2 = this;
      this.reset = function() {
        this._mCurrentState = n.start;
      }, this.nextState = function(e3) {
        var t3 = this._mModel.classTable[e3.charCodeAt(0)];
        return this._mCurrentState == n.start && (this._mCurrentBytePos = 0, this._mCurrentCharLen = this._mModel.charLenTable[t3]), this._mCurrentState = this._mModel.stateTable[this._mCurrentState * this._mModel.classFactor + t3], this._mCurrentBytePos++, this._mCurrentState;
      }, this.getCurrentCharLen = function() {
        return this._mCurrentCharLen;
      }, this.getCodingStateMachine = function() {
        return this._mModel.name;
      }, (function(e3) {
        t2._mModel = e3, t2._mCurrentBytePos = 0, t2._mCurrentCharLen = 0, t2.reset();
      })(e2);
    };
  }