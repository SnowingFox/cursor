// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 44556 range:7814136..7814609
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44556: (e, t, r) => {
    var n = r(58281), s = r(85039), o = r(7257), i = r(81235), a = r(41565), c = r(98527), l = r(46342), u = r(82238);
    function d() {
      n.apply(this), this._mProbers = [new o(), new i(), new a(), new c(), new l(), new s(), new u()];
      const e2 = this._mProbers.map((e3) => e3.getCharsetName());
      this.getSupportedCharsetNames = function() {
        return e2;
      }, this.reset();
    }
    d.prototype = new n(), e.exports = d;
  }