// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3474 range:74455..76074
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3474: (t2, r2, e2) => {
    var n2, o2, i2, a2, u2 = e2(9117), s2 = e2(646), c = e2(5821), f = e2(4188), h = e2(4418), l = e2(5234), p = e2(7458), v = e2(7825), d = e2(5926), g = e2(9445), y = e2(6347), w = e2(3940), x = u2.setImmediate, m = u2.clearImmediate, b = u2.process, S = u2.Dispatch, O = u2.Function, E = u2.MessageChannel, R = u2.String, P = 0, j = {}, k = "onreadystatechange";
    l(function() {
      n2 = u2.location;
    });
    var I = function(t3) {
      if (h(j, t3)) {
        var r3 = j[t3];
        delete j[t3], r3();
      }
    }, T = function(t3) {
      return function() {
        I(t3);
      };
    }, A = function(t3) {
      I(t3.data);
    }, L = function(t3) {
      u2.postMessage(R(t3), n2.protocol + "//" + n2.host);
    };
    x && m || (x = function(t3) {
      g(arguments.length, 1);
      var r3 = f(t3) ? t3 : O(t3), e3 = v(arguments, 1);
      return j[++P] = function() {
        s2(r3, void 0, e3);
      }, o2(P), P;
    }, m = function(t3) {
      delete j[t3];
    }, w ? o2 = function(t3) {
      b.nextTick(T(t3));
    } : S && S.now ? o2 = function(t3) {
      S.now(T(t3));
    } : E && !y ? (a2 = (i2 = new E()).port2, i2.port1.onmessage = A, o2 = c(a2.postMessage, a2)) : u2.addEventListener && f(u2.postMessage) && !u2.importScripts && n2 && "file:" !== n2.protocol && !l(L) ? (o2 = L, u2.addEventListener("message", A, false)) : o2 = k in d("script") ? function(t3) {
      p.appendChild(d("script"))[k] = function() {
        p.removeChild(this), I(t3);
      };
    } : function(t3) {
      setTimeout(T(t3), 0);
    }), t2.exports = { set: x, clear: m };
  }