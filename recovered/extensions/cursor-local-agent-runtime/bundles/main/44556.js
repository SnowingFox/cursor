// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 44556 range:1342692..1343165
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44556: (e, t, r) => {
    var n = r(58281), o = r(85039), s = r(7257), i = r(81235), a = r(41565), l = r(98527), c = r(46342), u = r(82238);
    function d() {
      n.apply(this), this._mProbers = [new s(), new i(), new a(), new l(), new c(), new o(), new u()];
      const e2 = this._mProbers.map((e3) => e3.getCharsetName());
      this.getSupportedCharsetNames = function() {
        return e2;
      }, this.reset();
    }
    d.prototype = new n(), e.exports = d;
  }