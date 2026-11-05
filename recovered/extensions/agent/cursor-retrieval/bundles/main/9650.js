// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9650 range:1057262..1058315
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9650: (e2, a2, n2) => {
    var t2 = n2(9522), s2 = n2(245), o2 = n2(6048), r2 = Function.bind, i2 = r2.bind(r2);
    function l(e3, a3, n3) {
      var t3 = i2(o2, null).apply(null, n3 ? [a3, n3] : [a3]);
      e3.api = { remove: t3 }, e3.remove = t3, ["before", "error", "after", "wrap"].forEach(function(t4) {
        var o3 = n3 ? [a3, t4, n3] : [a3, t4];
        e3[t4] = e3.api[t4] = i2(s2, null).apply(null, o3);
      });
    }
    function d() {
      var e3 = { registry: {} }, a3 = t2.bind(null, e3);
      return l(a3, e3), a3;
    }
    var m = false;
    function c() {
      return m || (console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'), m = true), d();
    }
    c.Singular = function() {
      var e3 = { registry: {} }, a3 = t2.bind(null, e3, "h");
      return l(a3, e3, "h"), a3;
    }.bind(), c.Collection = d.bind(), e2.exports = c, e2.exports.Hook = c, e2.exports.Singular = c.Singular, e2.exports.Collection = c.Collection;
  }