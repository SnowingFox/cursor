// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7301 range:132797..133701
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7301: (t2, r2, e2) => {
    var n2 = e2(9117), o2 = e2(6453), i2 = e2(4188), a2 = e2(8489), u2 = e2(3029), s2 = e2(4282), c = e2(1078), f = e2(1942), h = e2(3008), l = o2 && o2.prototype, p = s2("species"), v = false, d = i2(n2.PromiseRejectionEvent), g = a2("Promise", function() {
      var t3 = u2(o2), r3 = t3 !== String(o2);
      if (!r3 && 66 === h) return true;
      if (f && (!l.catch || !l.finally)) return true;
      if (!h || h < 51 || !/native code/.test(t3)) {
        var e3 = new o2(function(t4) {
          t4(1);
        }), n3 = function(t4) {
          t4(function() {
          }, function() {
          });
        };
        if ((e3.constructor = {})[p] = n3, !(v = e3.then(function() {
        }) instanceof n3)) return true;
      }
      return !(r3 || "BROWSER" !== c && "DENO" !== c || d);
    });
    t2.exports = { CONSTRUCTOR: g, REJECTION_EVENT: d, SUBCLASSING: v };
  }