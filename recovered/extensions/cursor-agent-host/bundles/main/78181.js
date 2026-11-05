// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 78181 range:11585861..11588005
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
78181: (e, t, r) => {
    "use strict";
    var n, s, o = r(66733), i = r(16928).extname, a = r(80027), c = /^\s*([^;\s]*)(?:;|\s|$)/, l = /^text\//i;
    function u(e2) {
      if (!e2 || "string" != typeof e2) return false;
      var t2 = c.exec(e2), r2 = t2 && o[t2[1].toLowerCase()];
      return r2 && r2.charset ? r2.charset : !(!t2 || !l.test(t2[1])) && "UTF-8";
    }
    function d(e2) {
      if (!e2 || "string" != typeof e2) return false;
      var r2 = c.exec(e2), n2 = r2 && t.extensions[r2[1].toLowerCase()];
      return !(!n2 || !n2.length) && n2[0];
    }
    function p(e2, t2, r2) {
      return (t2 ? a(t2, o[t2].source) : 0) > (r2 ? a(r2, o[r2].source) : 0) ? t2 : r2;
    }
    function m(e2, r2, n2) {
      var s2 = ["nginx", "apache", void 0, "iana"], i2 = r2 ? s2.indexOf(o[r2].source) : 0, a2 = n2 ? s2.indexOf(o[n2].source) : 0;
      return "application/octet-stream" !== t.types[d] && (i2 > a2 || i2 === a2 && "application/" === t.types[d]?.slice(0, 12)) || i2 > a2 ? r2 : n2;
    }
    t.charset = u, t.charsets = { lookup: u }, t.contentType = function(e2) {
      if (!e2 || "string" != typeof e2) return false;
      var r2 = -1 === e2.indexOf("/") ? t.lookup(e2) : e2;
      if (!r2) return false;
      if (-1 === r2.indexOf("charset")) {
        var n2 = t.charset(r2);
        n2 && (r2 += "; charset=" + n2.toLowerCase());
      }
      return r2;
    }, t.extension = d, t.extensions = /* @__PURE__ */ Object.create(null), t.lookup = function(e2) {
      if (!e2 || "string" != typeof e2) return false;
      var r2 = i("x." + e2).toLowerCase().slice(1);
      if (!r2) return false;
      return t.types[r2] || false;
    }, t.types = /* @__PURE__ */ Object.create(null), t._extensionConflicts = [], n = t.extensions, s = t.types, Object.keys(o).forEach(function(e2) {
      var r2 = o[e2].extensions;
      if (r2 && r2.length) {
        n[e2] = r2;
        for (var i2 = 0; i2 < r2.length; i2++) {
          var a2 = r2[i2];
          s[a2] = p(a2, s[a2], e2);
          const n2 = m(a2, s[a2], e2);
          n2 !== s[a2] && t._extensionConflicts.push([a2, n2, s[a2]]);
        }
      }
    });
  }