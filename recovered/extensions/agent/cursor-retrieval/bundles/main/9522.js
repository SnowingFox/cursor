// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9522 range:1054144..1054680
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9522: (e2) => {
    e2.exports = function e3(a2, n2, t2, s2) {
      if ("function" != typeof t2) throw new Error("method for before hook must be a function");
      s2 || (s2 = {});
      if (Array.isArray(n2)) return n2.reverse().reduce(function(n3, t3) {
        return e3.bind(null, a2, t3, n3, s2);
      }, t2)();
      return Promise.resolve().then(function() {
        return a2.registry[n2] ? a2.registry[n2].reduce(function(e4, a3) {
          return a3.hook.bind(null, e4, s2);
        }, t2)() : t2(s2);
      });
    };
  }