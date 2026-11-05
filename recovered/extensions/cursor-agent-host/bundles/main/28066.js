// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 28066 range:4851760..4852818
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28066: (e, t, r) => {
    var n = r(95647), s = r(58281), o = r(21820).mq, i = r(66509), a = r(75322), c = r(51819), l = r(38691).K8, u = r(9264), d = r(11156);
    function p() {
      s.apply(this);
      var e2 = this;
      this.getSupportedCharsetNames = function() {
        return e2._supportedCharsetNames;
      }, (function() {
        e2._mProbers = [new n(a.Win1251CyrillicModel), new n(a.Koi8rModel), new n(a.Latin5CyrillicModel), new n(a.MacCyrillicModel), new n(a.Ibm866Model), new n(a.Ibm855Model), new n(c.Latin7GreekModel), new n(c.Win1253GreekModel), new n(d.Latin5BulgarianModel), new n(d.Win1251BulgarianModel), new n(u.Latin2HungarianModel), new n(u.Win1250HungarianModel), new n(l)];
        var t2 = new i(), r2 = new n(o, false, t2), s2 = new n(o, true, t2);
        t2.setModelProbers(r2, s2), e2._mProbers.push(t2, r2, s2), e2._supportedCharsetNames = [];
        for (const t3 of e2._mProbers) e2._supportedCharsetNames.push(t3.getCharsetName());
        e2.reset();
      })();
    }
    p.prototype = new s(), e.exports = p;
  }