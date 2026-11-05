// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1982 range:51873..52958
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1982: (t2, r2, e2) => {
    var n2, o2, i2, a2, u2, s2 = e2(9117), c = e2(5268), f = e2(5821), h = e2(3474).set, l = e2(8648), p = e2(6347), v = e2(6168), d = e2(1129), g = e2(3940), y = s2.MutationObserver || s2.WebKitMutationObserver, w = s2.document, x = s2.process, m = s2.Promise, b = c("queueMicrotask");
    if (!b) {
      var S = new l(), O = function() {
        var t3, r3;
        for (g && (t3 = x.domain) && t3.exit(); r3 = S.get(); ) try {
          r3();
        } catch (t4) {
          throw S.head && n2(), t4;
        }
        t3 && t3.enter();
      };
      p || g || d || !y || !w ? !v && m && m.resolve ? ((a2 = m.resolve(void 0)).constructor = m, u2 = f(a2.then, a2), n2 = function() {
        u2(O);
      }) : g ? n2 = function() {
        x.nextTick(O);
      } : (h = f(h, s2), n2 = function() {
        h(O);
      }) : (o2 = true, i2 = w.createTextNode(""), new y(O).observe(i2, { characterData: true }), n2 = function() {
        i2.data = o2 = !o2;
      }), b = function(t3) {
        S.head || n2(), S.add(t3);
      };
    }
    t2.exports = b;
  }