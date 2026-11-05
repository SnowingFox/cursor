// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 80027 range:7358037..7358513
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80027: (e) => {
    var t = { "prs.": 100, "x-": 200, "x.": 300, "vnd.": 400, default: 900 }, r = { nginx: 10, apache: 20, iana: 40, default: 30 }, n = { application: 1, font: 2, default: 0 };
    e.exports = function(e2, o = "default") {
      if ("application/octet-stream" === e2) return 0;
      const [s, i] = e2.split("/"), a = i.replace(/(\.|x-).*/, "$1");
      return (t[a] || t.default) + (r[o] || r.default) + (n[s] || n.default) + (1 - e2.length / 100);
    };
  }