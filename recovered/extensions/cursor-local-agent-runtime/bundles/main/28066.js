// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 28066 range:918190..919248
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28066: (e, t, r) => {
    var n = r(95647), o = r(58281), s = r(21820).mq, i = r(66509), a = r(75322), l = r(51819), c = r(38691).K8, u = r(9264), d = r(11156);
    function p() {
      o.apply(this);
      var e2 = this;
      this.getSupportedCharsetNames = function() {
        return e2._supportedCharsetNames;
      }, (function() {
        e2._mProbers = [new n(a.Win1251CyrillicModel), new n(a.Koi8rModel), new n(a.Latin5CyrillicModel), new n(a.MacCyrillicModel), new n(a.Ibm866Model), new n(a.Ibm855Model), new n(l.Latin7GreekModel), new n(l.Win1253GreekModel), new n(d.Latin5BulgarianModel), new n(d.Win1251BulgarianModel), new n(u.Latin2HungarianModel), new n(u.Win1250HungarianModel), new n(c)];
        var t2 = new i(), r2 = new n(s, false, t2), o2 = new n(s, true, t2);
        t2.setModelProbers(r2, o2), e2._mProbers.push(t2, r2, o2), e2._supportedCharsetNames = [];
        for (const t3 of e2._mProbers) e2._supportedCharsetNames.push(t3.getCharsetName());
        e2.reset();
      })();
    }
    p.prototype = new o(), e.exports = p;
  }