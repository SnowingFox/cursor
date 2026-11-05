// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 5393 range:410748..411566
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5393: (e, t, r) => {
    "use strict";
    let n;
    function s() {
      if (void 0 === n) {
        const e2 = (async function() {
          const [{ createJimp: e3 }, { default: t2 }, { default: n2 }, { default: s2, msBmp: o }, { default: i }, { default: a }, { methods: c }] = await Promise.all([Promise.all([r.e(716), r.e(273)]).then(r.bind(r, 95273)), r.e(621).then(r.bind(r, 37621)), r.e(502).then(r.bind(r, 86502)), Promise.all([r.e(716), r.e(691)]).then(r.bind(r, 63691)), r.e(46).then(r.bind(r, 93046)), r.e(928).then(r.bind(r, 69928)), r.e(853).then(r.bind(r, 65853))]);
          return e3({ formats: [t2, n2, s2, o, i, a], plugins: [c] });
        })().catch((t2) => {
          throw n === e2 && (n = void 0), t2;
        });
        n = e2;
      }
      return n;
    }
    r.d(t, { I: () => s });
  }