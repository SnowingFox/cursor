// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 9519 range:83484..83865
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9519: (t2, e2, i2) => {
    var s2, n2, r2 = i2(4576), a2 = i2(2839), o2 = r2.process, l2 = r2.Deno, h2 = o2 && o2.versions || l2 && l2.version, c2 = h2 && h2.v8;
    c2 && (n2 = (s2 = c2.split("."))[0] > 0 && s2[0] < 4 ? 1 : +(s2[0] + s2[1])), !n2 && a2 && (!(s2 = a2.match(/Edge\/(\d+)/)) || s2[1] >= 74) && (s2 = a2.match(/Chrome\/(\d+)/)) && (n2 = +s2[1]), t2.exports = n2;
  }