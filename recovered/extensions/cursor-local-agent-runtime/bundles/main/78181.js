// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 78181 range:7336579..7338723
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
78181: (e, t, r) => {
    "use strict";
    var n, o, s = r(66733), i = r(16928).extname, a = r(80027), l = /^\s*([^;\s]*)(?:;|\s|$)/, c = /^text\//i;
    function u(e2) {
      if (!e2 || "string" != typeof e2) return false;
      var t2 = l.exec(e2), r2 = t2 && s[t2[1].toLowerCase()];
      return r2 && r2.charset ? r2.charset : !(!t2 || !c.test(t2[1])) && "UTF-8";
    }
    function d(e2) {
      if (!e2 || "string" != typeof e2) return false;
      var r2 = l.exec(e2), n2 = r2 && t.extensions[r2[1].toLowerCase()];
      return !(!n2 || !n2.length) && n2[0];
    }
    function p(e2, t2, r2) {
      return (t2 ? a(t2, s[t2].source) : 0) > (r2 ? a(r2, s[r2].source) : 0) ? t2 : r2;
    }
    function h(e2, r2, n2) {
      var o2 = ["nginx", "apache", void 0, "iana"], i2 = r2 ? o2.indexOf(s[r2].source) : 0, a2 = n2 ? o2.indexOf(s[n2].source) : 0;
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
    }, t.types = /* @__PURE__ */ Object.create(null), t._extensionConflicts = [], n = t.extensions, o = t.types, Object.keys(s).forEach(function(e2) {
      var r2 = s[e2].extensions;
      if (r2 && r2.length) {
        n[e2] = r2;
        for (var i2 = 0; i2 < r2.length; i2++) {
          var a2 = r2[i2];
          o[a2] = p(a2, o[a2], e2);
          const n2 = h(a2, o[a2], e2);
          n2 !== o[a2] && t._extensionConflicts.push([a2, n2, o[a2]]);
        }
      }
    });
  }