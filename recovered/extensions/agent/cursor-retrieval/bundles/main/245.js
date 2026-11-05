// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 245 range:14807..15564
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
245: (e2) => {
    e2.exports = function(e3, a2, n2, t2) {
      var s2 = t2;
      e3.registry[n2] || (e3.registry[n2] = []);
      "before" === a2 && (t2 = function(e4, a3) {
        return Promise.resolve().then(s2.bind(null, a3)).then(e4.bind(null, a3));
      });
      "after" === a2 && (t2 = function(e4, a3) {
        var n3;
        return Promise.resolve().then(e4.bind(null, a3)).then(function(e5) {
          return s2(n3 = e5, a3);
        }).then(function() {
          return n3;
        });
      });
      "error" === a2 && (t2 = function(e4, a3) {
        return Promise.resolve().then(e4.bind(null, a3)).catch(function(e5) {
          return s2(e5, a3);
        });
      });
      e3.registry[n2].push({ hook: t2, orig: s2 });
    };
  }