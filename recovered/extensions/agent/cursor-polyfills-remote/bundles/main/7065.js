// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7065 range:127892..129022
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7065: (t2, r2, e2) => {
    var n2, o2 = e2(3770), i2 = e2(30), a2 = e2(1274), u2 = e2(7588), s2 = e2(7458), c = e2(5926), f = e2(168), h = "prototype", l = "script", p = f("IE_PROTO"), v = function() {
    }, d = function(t3) {
      return "<" + l + ">" + t3 + "</" + l + ">";
    }, g = function(t3) {
      t3.write(d("")), t3.close();
      var r3 = t3.parentWindow.Object;
      return t3 = null, r3;
    }, y = function() {
      try {
        n2 = new ActiveXObject("htmlfile");
      } catch (t4) {
      }
      var t3, r3, e3;
      y = "undefined" != typeof document ? document.domain && n2 ? g(n2) : (r3 = c("iframe"), e3 = "java" + l + ":", r3.style.display = "none", s2.appendChild(r3), r3.src = String(e3), (t3 = r3.contentWindow.document).open(), t3.write(d("document.F=Object")), t3.close(), t3.F) : g(n2);
      for (var o3 = a2.length; o3--; ) delete y[h][a2[o3]];
      return y();
    };
    u2[p] = true, t2.exports = Object.create || function(t3, r3) {
      var e3;
      return null !== t3 ? (v[h] = o2(t3), e3 = new v(), v[h] = null, e3[p] = t3) : e3 = y(), void 0 === r3 ? e3 : i2.f(e3, r3);
    };
  }