// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 2360 range:15593..16754
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2360: (t2, e2, i2) => {
    var s2, n2 = i2(8551), r2 = i2(6801), a2 = i2(8727), o2 = i2(421), l2 = i2(397), h2 = i2(4055), c2 = i2(6119), d2 = "prototype", u2 = "script", p2 = c2("IE_PROTO"), g2 = function() {
    }, m2 = function(t3) {
      return "<" + u2 + ">" + t3 + "</" + u2 + ">";
    }, f2 = function(t3) {
      t3.write(m2("")), t3.close();
      var e3 = t3.parentWindow.Object;
      return t3 = null, e3;
    }, b2 = function() {
      try {
        s2 = new ActiveXObject("htmlfile");
      } catch (t4) {
      }
      var t3, e3, i3;
      b2 = "undefined" != typeof document ? document.domain && s2 ? f2(s2) : (e3 = h2("iframe"), i3 = "java" + u2 + ":", e3.style.display = "none", l2.appendChild(e3), e3.src = String(i3), (t3 = e3.contentWindow.document).open(), t3.write(m2("document.F=Object")), t3.close(), t3.F) : f2(s2);
      for (var n3 = a2.length; n3--; ) delete b2[d2][a2[n3]];
      return b2();
    };
    o2[p2] = true, t2.exports = Object.create || function(t3, e3) {
      var i3;
      return null !== t3 ? (g2[d2] = n2(t3), i3 = new g2(), g2[d2] = null, i3[p2] = t3) : i3 = b2(), void 0 === e3 ? i3 : r2.f(i3, e3);
    };
  }