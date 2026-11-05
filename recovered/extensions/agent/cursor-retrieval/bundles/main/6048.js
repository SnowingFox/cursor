// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6048 range:791165..791429
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6048: (e2) => {
    e2.exports = function(e3, a2, n2) {
      if (!e3.registry[a2]) return;
      var t2 = e3.registry[a2].map(function(e4) {
        return e4.orig;
      }).indexOf(n2);
      if (-1 === t2) return;
      e3.registry[a2].splice(t2, 1);
    };
  }