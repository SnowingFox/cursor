// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 80027 range:11642248..11642724
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80027: (e) => {
    var t = { "prs.": 100, "x-": 200, "x.": 300, "vnd.": 400, default: 900 }, r = { nginx: 10, apache: 20, iana: 40, default: 30 }, n = { application: 1, font: 2, default: 0 };
    e.exports = function(e2, s = "default") {
      if ("application/octet-stream" === e2) return 0;
      const [o, i] = e2.split("/"), a = i.replace(/(\.|x-).*/, "$1");
      return (t[a] || t.default) + (r[s] || r.default) + (n[o] || n.default) + (1 - e2.length / 100);
    };
  }