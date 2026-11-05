// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 39306 range:7484577..7485430
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