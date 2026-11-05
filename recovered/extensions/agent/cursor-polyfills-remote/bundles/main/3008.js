// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3008 range:65857..66232
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3008: (t2, r2, e2) => {
    var n2, o2, i2 = e2(9117), a2 = e2(8060), u2 = i2.process, s2 = i2.Deno, c = u2 && u2.versions || s2 && s2.version, f = c && c.v8;
    f && (o2 = (n2 = f.split("."))[0] > 0 && n2[0] < 4 ? 1 : +(n2[0] + n2[1])), !o2 && a2 && (!(n2 = a2.match(/Edge\/(\d+)/)) || n2[1] >= 74) && (n2 = a2.match(/Chrome\/(\d+)/)) && (o2 = +n2[1]), t2.exports = o2;
  }