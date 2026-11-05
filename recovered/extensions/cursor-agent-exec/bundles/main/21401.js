// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 21401 range:1033112..1034318
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
21401: (e, t, r) => {
    "use strict";
    var n = r(77454), s = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), o = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
    e.exports = new n("tag:yaml.org,2002:timestamp", { kind: "scalar", resolve: function(e2) {
      return null !== e2 && (null !== s.exec(e2) || null !== o.exec(e2));
    }, construct: function(e2) {
      var t2, r2, n2, i, a, c, l, u, d = 0, p = null;
      if (null === (t2 = s.exec(e2)) && (t2 = o.exec(e2)), null === t2) throw new Error("Date resolve error");
      if (r2 = +t2[1], n2 = +t2[2] - 1, i = +t2[3], !t2[4]) return new Date(Date.UTC(r2, n2, i));
      if (a = +t2[4], c = +t2[5], l = +t2[6], t2[7]) {
        for (d = t2[7].slice(0, 3); d.length < 3; ) d += "0";
        d = +d;
      }
      return t2[9] && (p = 6e4 * (60 * +t2[10] + +(t2[11] || 0)), "-" === t2[9] && (p = -p)), u = new Date(Date.UTC(r2, n2, i, a, c, l, d)), p && u.setTime(u.getTime() - p), u;
    }, instanceOf: Date, represent: function(e2) {
      return e2.toISOString();
    } });
  }