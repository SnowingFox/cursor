// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6022 range:2778867..2807397
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6022: (t2) => {
    var e2 = function() {
      this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = 0.5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = 0.5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
    }, r2 = -1;
    e2.Diff = function(t3, e3) {
      return [t3, e3];
    }, e2.prototype.diff_main = function(t3, r3, n2, s2) {
      void 0 === s2 && (s2 = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (/* @__PURE__ */ new Date()).getTime() + 1e3 * this.Diff_Timeout);
      var i2 = s2;
      if (null == t3 || null == r3) throw new Error("Null input. (diff_main)");
      if (t3 == r3) return t3 ? [new e2.Diff(0, t3)] : [];
      void 0 === n2 && (n2 = true);
      var o2 = n2, a = this.diff_commonPrefix(t3, r3), u = t3.substring(0, a);
      t3 = t3.substring(a), r3 = r3.substring(a), a = this.diff_commonSuffix(t3, r3);
      var c = t3.substring(t3.length - a);
      t3 = t3.substring(0, t3.length - a), r3 = r3.substring(0, r3.length - a);
      var l = this.diff_compute_(t3, r3, o2, i2);
      return u && l.unshift(new e2.Diff(0, u)), c && l.push(new e2.Diff(0, c)), this.diff_cleanupMerge(l), l;
    }, e2.prototype.diff_compute_ = function(t3, n2, s2, i2) {
      var o2;
      if (!t3) return [new e2.Diff(1, n2)];
      if (!n2) return [new e2.Diff(r2, t3)];
      var a = t3.length > n2.length ? t3 : n2, u = t3.length > n2.length ? n2 : t3, c = a.indexOf(u);
      if (-1 != c) return o2 = [new e2.Diff(1, a.substring(0, c)), new e2.Diff(0, u), new e2.Diff(1, a.substring(c + u.length))], t3.length > n2.length && (o2[0][0] = o2[2][0] = r2), o2;
      if (1 == u.length) return [new e2.Diff(r2, t3), new e2.Diff(1, n2)];
      var l = this.diff_halfMatch_(t3, n2);
      if (l) {
        var m = l[0], d = l[1], f = l[2], p = l[3], h = l[4], g = this.diff_main(m, f, s2, i2), A = this.diff_main(d, p, s2, i2);
        return g.concat([new e2.Diff(0, h)], A);
      }
      return s2 && t3.length > 100 && n2.length > 100 ? this.diff_lineMode_(t3, n2, i2) : this.diff_bisect_(t3, n2, i2);
    }, e2.prototype.diff_lineMode_ = function(t3, n2, s2) {
      var i2 = this.diff_linesToChars_(t3, n2);
      t3 = i2.chars1, n2 = i2.chars2;
      var o2 = i2.lineArray, a = this.diff_main(t3, n2, false, s2);
      this.diff_charsToLines_(a, o2), this.diff_cleanupSemantic(a), a.push(new e2.Diff(0, ""));
      for (var u = 0, c = 0, l = 0, m = "", d = ""; u < a.length; ) {
        switch (a[u][0]) {
          case 1:
            l++, d += a[u][1];
            break;
          case r2:
            c++, m += a[u][1];
            break;
          case 0:
            if (c >= 1 && l >= 1) {
              a.splice(u - c - l, c + l), u = u - c - l;
              for (var f = this.diff_main(m, d, false, s2), p = f.length - 1; p >= 0; p--) a.splice(u, 0, f[p]);
              u += f.length;
            }
            l = 0, c = 0, m = "", d = "";
        }
        u++;
      }
      return a.pop(), a;
    }, e2.prototype.diff_bisect_ = function(t3, n2, s2) {
      for (var i2 = t3.length, o2 = n2.length, a = Math.ceil((i2 + o2) / 2), u = a, c = 2 * a, l = new Array(c), m = new Array(c), d = 0; d < c; d++) l[d] = -1, m[d] = -1;
      l[u + 1] = 0, m[u + 1] = 0;
      for (var f = i2 - o2, p = f % 2 != 0, h = 0, g = 0, A = 0, _ = 0, y = 0; y < a && !((/* @__PURE__ */ new Date()).getTime() > s2); y++) {
        for (var w = -y + h; w <= y - g; w += 2) {
          for (var S = u + w, J = (b = w == -y || w != y && l[S - 1] < l[S + 1] ? l[S + 1] : l[S - 1] + 1) - w; b < i2 && J < o2 && t3.charAt(b) == n2.charAt(J); ) b++, J++;
          if (l[S] = b, b > i2) g += 2;
          else if (J > o2) h += 2;
          else if (p) {
            if ((I = u + f - w) >= 0 && I < c && -1 != m[I]) {
              if (b >= (E = i2 - m[I])) return this.diff_bisectSplit_(t3, n2, b, J, s2);
            }
          }
        }
        for (var B = -y + A; B <= y - _; B += 2) {
          for (var E, I = u + B, C = (E = B == -y || B != y && m[I - 1] < m[I + 1] ? m[I + 1] : m[I - 1] + 1) - B; E < i2 && C < o2 && t3.charAt(i2 - E - 1) == n2.charAt(o2 - C - 1); ) E++, C++;
          if (m[I] = E, E > i2) _ += 2;
          else if (C > o2) A += 2;
          else if (!p) {
            if ((S = u + f - B) >= 0 && S < c && -1 != l[S]) {
              var b;
              J = u + (b = l[S]) - S;
              if (b >= (E = i2 - E)) return this.diff_bisectSplit_(t3, n2, b, J, s2);
            }
          }
        }
      }
      return [new e2.Diff(r2, t3), new e2.Diff(1, n2)];
    }, e2.prototype.diff_bisectSplit_ = function(t3, e3, r3, n2, s2) {
      var i2 = t3.substring(0, r3), o2 = e3.substring(0, n2), a = t3.substring(r3), u = e3.substring(n2), c = this.diff_main(i2, o2, false, s2), l = this.diff_main(a, u, false, s2);
      return c.concat(l);
    }, e2.prototype.diff_linesToChars_ = function(t3, e3) {
      var r3 = [], n2 = {};
      function s2(t4) {
        for (var e4 = "", s3 = 0, o3 = -1, a = r3.length; o3 < t4.length - 1; ) {
          -1 == (o3 = t4.indexOf("\n", s3)) && (o3 = t4.length - 1);
          var u = t4.substring(s3, o3 + 1);
          (n2.hasOwnProperty ? n2.hasOwnProperty(u) : void 0 !== n2[u]) ? e4 += String.fromCharCode(n2[u]) : (a == i2 && (u = t4.substring(s3), o3 = t4.length), e4 += String.fromCharCode(a), n2[u] = a, r3[a++] = u), s3 = o3 + 1;
        }
        return e4;
      }
      r3[0] = "";
      var i2 = 4e4, o2 = s2(t3);
      return i2 = 65535, { chars1: o2, chars2: s2(e3), lineArray: r3 };
    }, e2.prototype.diff_charsToLines_ = function(t3, e3) {
      for (var r3 = 0; r3 < t3.length; r3++) {
        for (var n2 = t3[r3][1], s2 = [], i2 = 0; i2 < n2.length; i2++) s2[i2] = e3[n2.charCodeAt(i2)];
        t3[r3][1] = s2.join("");
      }
    }, e2.prototype.diff_commonPrefix = function(t3, e3) {
      if (!t3 || !e3 || t3.charAt(0) != e3.charAt(0)) return 0;
      for (var r3 = 0, n2 = Math.min(t3.length, e3.length), s2 = n2, i2 = 0; r3 < s2; ) t3.substring(i2, s2) == e3.substring(i2, s2) ? i2 = r3 = s2 : n2 = s2, s2 = Math.floor((n2 - r3) / 2 + r3);
      return s2;
    }, e2.prototype.diff_commonSuffix = function(t3, e3) {
      if (!t3 || !e3 || t3.charAt(t3.length - 1) != e3.charAt(e3.length - 1)) return 0;
      for (var r3 = 0, n2 = Math.min(t3.length, e3.length), s2 = n2, i2 = 0; r3 < s2; ) t3.substring(t3.length - s2, t3.length - i2) == e3.substring(e3.length - s2, e3.length - i2) ? i2 = r3 = s2 : n2 = s2, s2 = Math.floor((n2 - r3) / 2 + r3);
      return s2;
    }, e2.prototype.diff_commonOverlap_ = function(t3, e3) {
      var r3 = t3.length, n2 = e3.length;
      if (0 == r3 || 0 == n2) return 0;
      r3 > n2 ? t3 = t3.substring(r3 - n2) : r3 < n2 && (e3 = e3.substring(0, r3));
      var s2 = Math.min(r3, n2);
      if (t3 == e3) return s2;
      for (var i2 = 0, o2 = 1; ; ) {
        var a = t3.substring(s2 - o2), u = e3.indexOf(a);
        if (-1 == u) return i2;
        o2 += u, 0 != u && t3.substring(s2 - o2) != e3.substring(0, o2) || (i2 = o2, o2++);
      }
    }, e2.prototype.diff_halfMatch_ = function(t3, e3) {
      if (this.Diff_Timeout <= 0) return null;
      var r3 = t3.length > e3.length ? t3 : e3, n2 = t3.length > e3.length ? e3 : t3;
      if (r3.length < 4 || 2 * n2.length < r3.length) return null;
      var s2 = this;
      function i2(t4, e4, r4) {
        for (var n3, i3, o3, a2, u2 = t4.substring(r4, r4 + Math.floor(t4.length / 4)), c2 = -1, l2 = ""; -1 != (c2 = e4.indexOf(u2, c2 + 1)); ) {
          var m2 = s2.diff_commonPrefix(t4.substring(r4), e4.substring(c2)), d2 = s2.diff_commonSuffix(t4.substring(0, r4), e4.substring(0, c2));
          l2.length < d2 + m2 && (l2 = e4.substring(c2 - d2, c2) + e4.substring(c2, c2 + m2), n3 = t4.substring(0, r4 - d2), i3 = t4.substring(r4 + m2), o3 = e4.substring(0, c2 - d2), a2 = e4.substring(c2 + m2));
        }
        return 2 * l2.length >= t4.length ? [n3, i3, o3, a2, l2] : null;
      }
      var o2, a, u, c, l, m = i2(r3, n2, Math.ceil(r3.length / 4)), d = i2(r3, n2, Math.ceil(r3.length / 2));
      return m || d ? (o2 = d ? m && m[4].length > d[4].length ? m : d : m, t3.length > e3.length ? (a = o2[0], u = o2[1], c = o2[2], l = o2[3]) : (c = o2[0], l = o2[1], a = o2[2], u = o2[3]), [a, u, c, l, o2[4]]) : null;
    }, e2.prototype.diff_cleanupSemantic = function(t3) {
      for (var n2 = false, s2 = [], i2 = 0, o2 = null, a = 0, u = 0, c = 0, l = 0, m = 0; a < t3.length; ) 0 == t3[a][0] ? (s2[i2++] = a, u = l, c = m, l = 0, m = 0, o2 = t3[a][1]) : (1 == t3[a][0] ? l += t3[a][1].length : m += t3[a][1].length, o2 && o2.length <= Math.max(u, c) && o2.length <= Math.max(l, m) && (t3.splice(s2[i2 - 1], 0, new e2.Diff(r2, o2)), t3[s2[i2 - 1] + 1][0] = 1, i2--, a = --i2 > 0 ? s2[i2 - 1] : -1, u = 0, c = 0, l = 0, m = 0, o2 = null, n2 = true)), a++;
      for (n2 && this.diff_cleanupMerge(t3), this.diff_cleanupSemanticLossless(t3), a = 1; a < t3.length; ) {
        if (t3[a - 1][0] == r2 && 1 == t3[a][0]) {
          var d = t3[a - 1][1], f = t3[a][1], p = this.diff_commonOverlap_(d, f), h = this.diff_commonOverlap_(f, d);
          p >= h ? (p >= d.length / 2 || p >= f.length / 2) && (t3.splice(a, 0, new e2.Diff(0, f.substring(0, p))), t3[a - 1][1] = d.substring(0, d.length - p), t3[a + 1][1] = f.substring(p), a++) : (h >= d.length / 2 || h >= f.length / 2) && (t3.splice(a, 0, new e2.Diff(0, d.substring(0, h))), t3[a - 1][0] = 1, t3[a - 1][1] = f.substring(0, f.length - h), t3[a + 1][0] = r2, t3[a + 1][1] = d.substring(h), a++), a++;
        }
        a++;
      }
    }, e2.prototype.diff_cleanupSemanticLossless = function(t3) {
      function r3(t4, r4) {
        if (!t4 || !r4) return 6;
        var n3 = t4.charAt(t4.length - 1), s3 = r4.charAt(0), i3 = n3.match(e2.nonAlphaNumericRegex_), o3 = s3.match(e2.nonAlphaNumericRegex_), a2 = i3 && n3.match(e2.whitespaceRegex_), u2 = o3 && s3.match(e2.whitespaceRegex_), c2 = a2 && n3.match(e2.linebreakRegex_), l2 = u2 && s3.match(e2.linebreakRegex_), m2 = c2 && t4.match(e2.blanklineEndRegex_), d2 = l2 && r4.match(e2.blanklineStartRegex_);
        return m2 || d2 ? 5 : c2 || l2 ? 4 : i3 && !a2 && u2 ? 3 : a2 || u2 ? 2 : i3 || o3 ? 1 : 0;
      }
      for (var n2 = 1; n2 < t3.length - 1; ) {
        if (0 == t3[n2 - 1][0] && 0 == t3[n2 + 1][0]) {
          var s2 = t3[n2 - 1][1], i2 = t3[n2][1], o2 = t3[n2 + 1][1], a = this.diff_commonSuffix(s2, i2);
          if (a) {
            var u = i2.substring(i2.length - a);
            s2 = s2.substring(0, s2.length - a), i2 = u + i2.substring(0, i2.length - a), o2 = u + o2;
          }
          for (var c = s2, l = i2, m = o2, d = r3(s2, i2) + r3(i2, o2); i2.charAt(0) === o2.charAt(0); ) {
            s2 += i2.charAt(0), i2 = i2.substring(1) + o2.charAt(0), o2 = o2.substring(1);
            var f = r3(s2, i2) + r3(i2, o2);
            f >= d && (d = f, c = s2, l = i2, m = o2);
          }
          t3[n2 - 1][1] != c && (c ? t3[n2 - 1][1] = c : (t3.splice(n2 - 1, 1), n2--), t3[n2][1] = l, m ? t3[n2 + 1][1] = m : (t3.splice(n2 + 1, 1), n2--));
        }
        n2++;
      }
    }, e2.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, e2.whitespaceRegex_ = /\s/, e2.linebreakRegex_ = /[\r\n]/, e2.blanklineEndRegex_ = /\n\r?\n$/, e2.blanklineStartRegex_ = /^\r?\n\r?\n/, e2.prototype.diff_cleanupEfficiency = function(t3) {
      for (var n2 = false, s2 = [], i2 = 0, o2 = null, a = 0, u = false, c = false, l = false, m = false; a < t3.length; ) 0 == t3[a][0] ? (t3[a][1].length < this.Diff_EditCost && (l || m) ? (s2[i2++] = a, u = l, c = m, o2 = t3[a][1]) : (i2 = 0, o2 = null), l = m = false) : (t3[a][0] == r2 ? m = true : l = true, o2 && (u && c && l && m || o2.length < this.Diff_EditCost / 2 && u + c + l + m == 3) && (t3.splice(s2[i2 - 1], 0, new e2.Diff(r2, o2)), t3[s2[i2 - 1] + 1][0] = 1, i2--, o2 = null, u && c ? (l = m = true, i2 = 0) : (a = --i2 > 0 ? s2[i2 - 1] : -1, l = m = false), n2 = true)), a++;
      n2 && this.diff_cleanupMerge(t3);
    }, e2.prototype.diff_cleanupMerge = function(t3) {
      t3.push(new e2.Diff(0, ""));
      for (var n2, s2 = 0, i2 = 0, o2 = 0, a = "", u = ""; s2 < t3.length; ) switch (t3[s2][0]) {
        case 1:
          o2++, u += t3[s2][1], s2++;
          break;
        case r2:
          i2++, a += t3[s2][1], s2++;
          break;
        case 0:
          i2 + o2 > 1 ? (0 !== i2 && 0 !== o2 && (0 !== (n2 = this.diff_commonPrefix(u, a)) && (s2 - i2 - o2 > 0 && 0 == t3[s2 - i2 - o2 - 1][0] ? t3[s2 - i2 - o2 - 1][1] += u.substring(0, n2) : (t3.splice(0, 0, new e2.Diff(0, u.substring(0, n2))), s2++), u = u.substring(n2), a = a.substring(n2)), 0 !== (n2 = this.diff_commonSuffix(u, a)) && (t3[s2][1] = u.substring(u.length - n2) + t3[s2][1], u = u.substring(0, u.length - n2), a = a.substring(0, a.length - n2))), s2 -= i2 + o2, t3.splice(s2, i2 + o2), a.length && (t3.splice(s2, 0, new e2.Diff(r2, a)), s2++), u.length && (t3.splice(s2, 0, new e2.Diff(1, u)), s2++), s2++) : 0 !== s2 && 0 == t3[s2 - 1][0] ? (t3[s2 - 1][1] += t3[s2][1], t3.splice(s2, 1)) : s2++, o2 = 0, i2 = 0, a = "", u = "";
      }
      "" === t3[t3.length - 1][1] && t3.pop();
      var c = false;
      for (s2 = 1; s2 < t3.length - 1; ) 0 == t3[s2 - 1][0] && 0 == t3[s2 + 1][0] && (t3[s2][1].substring(t3[s2][1].length - t3[s2 - 1][1].length) == t3[s2 - 1][1] ? (t3[s2][1] = t3[s2 - 1][1] + t3[s2][1].substring(0, t3[s2][1].length - t3[s2 - 1][1].length), t3[s2 + 1][1] = t3[s2 - 1][1] + t3[s2 + 1][1], t3.splice(s2 - 1, 1), c = true) : t3[s2][1].substring(0, t3[s2 + 1][1].length) == t3[s2 + 1][1] && (t3[s2 - 1][1] += t3[s2 + 1][1], t3[s2][1] = t3[s2][1].substring(t3[s2 + 1][1].length) + t3[s2 + 1][1], t3.splice(s2 + 1, 1), c = true)), s2++;
      c && this.diff_cleanupMerge(t3);
    }, e2.prototype.diff_xIndex = function(t3, e3) {
      var n2, s2 = 0, i2 = 0, o2 = 0, a = 0;
      for (n2 = 0; n2 < t3.length && (1 !== t3[n2][0] && (s2 += t3[n2][1].length), t3[n2][0] !== r2 && (i2 += t3[n2][1].length), !(s2 > e3)); n2++) o2 = s2, a = i2;
      return t3.length != n2 && t3[n2][0] === r2 ? a : a + (e3 - o2);
    }, e2.prototype.diff_prettyHtml = function(t3) {
      for (var e3 = [], n2 = /&/g, s2 = /</g, i2 = />/g, o2 = /\n/g, a = 0; a < t3.length; a++) {
        var u = t3[a][0], c = t3[a][1].replace(n2, "&amp;").replace(s2, "&lt;").replace(i2, "&gt;").replace(o2, "&para;<br>");
        switch (u) {
          case 1:
            e3[a] = '<ins style="background:#e6ffe6;">' + c + "</ins>";
            break;
          case r2:
            e3[a] = '<del style="background:#ffe6e6;">' + c + "</del>";
            break;
          case 0:
            e3[a] = "<span>" + c + "</span>";
        }
      }
      return e3.join("");
    }, e2.prototype.diff_text1 = function(t3) {
      for (var e3 = [], r3 = 0; r3 < t3.length; r3++) 1 !== t3[r3][0] && (e3[r3] = t3[r3][1]);
      return e3.join("");
    }, e2.prototype.diff_text2 = function(t3) {
      for (var e3 = [], n2 = 0; n2 < t3.length; n2++) t3[n2][0] !== r2 && (e3[n2] = t3[n2][1]);
      return e3.join("");
    }, e2.prototype.diff_levenshtein = function(t3) {
      for (var e3 = 0, n2 = 0, s2 = 0, i2 = 0; i2 < t3.length; i2++) {
        var o2 = t3[i2][0], a = t3[i2][1];
        switch (o2) {
          case 1:
            n2 += a.length;
            break;
          case r2:
            s2 += a.length;
            break;
          case 0:
            e3 += Math.max(n2, s2), n2 = 0, s2 = 0;
        }
      }
      return e3 += Math.max(n2, s2);
    }, e2.prototype.diff_toDelta = function(t3) {
      for (var e3 = [], n2 = 0; n2 < t3.length; n2++) switch (t3[n2][0]) {
        case 1:
          e3[n2] = "+" + encodeURI(t3[n2][1]);
          break;
        case r2:
          e3[n2] = "-" + t3[n2][1].length;
          break;
        case 0:
          e3[n2] = "=" + t3[n2][1].length;
      }
      return e3.join("	").replace(/%20/g, " ");
    }, e2.prototype.diff_fromDelta = function(t3, n2) {
      for (var s2 = [], i2 = 0, o2 = 0, a = n2.split(/\t/g), u = 0; u < a.length; u++) {
        var c = a[u].substring(1);
        switch (a[u].charAt(0)) {
          case "+":
            try {
              s2[i2++] = new e2.Diff(1, decodeURI(c));
            } catch (t4) {
              throw new Error("Illegal escape in diff_fromDelta: " + c);
            }
            break;
          case "-":
          case "=":
            var l = parseInt(c, 10);
            if (isNaN(l) || l < 0) throw new Error("Invalid number in diff_fromDelta: " + c);
            var m = t3.substring(o2, o2 += l);
            "=" == a[u].charAt(0) ? s2[i2++] = new e2.Diff(0, m) : s2[i2++] = new e2.Diff(r2, m);
            break;
          default:
            if (a[u]) throw new Error("Invalid diff operation in diff_fromDelta: " + a[u]);
        }
      }
      if (o2 != t3.length) throw new Error("Delta length (" + o2 + ") does not equal source text length (" + t3.length + ").");
      return s2;
    }, e2.prototype.match_main = function(t3, e3, r3) {
      if (null == t3 || null == e3 || null == r3) throw new Error("Null input. (match_main)");
      return r3 = Math.max(0, Math.min(r3, t3.length)), t3 == e3 ? 0 : t3.length ? t3.substring(r3, r3 + e3.length) == e3 ? r3 : this.match_bitap_(t3, e3, r3) : -1;
    }, e2.prototype.match_bitap_ = function(t3, e3, r3) {
      if (e3.length > this.Match_MaxBits) throw new Error("Pattern too long for this browser.");
      var n2 = this.match_alphabet_(e3), s2 = this;
      function i2(t4, n3) {
        var i3 = t4 / e3.length, o3 = Math.abs(r3 - n3);
        return s2.Match_Distance ? i3 + o3 / s2.Match_Distance : o3 ? 1 : i3;
      }
      var o2 = this.Match_Threshold, a = t3.indexOf(e3, r3);
      -1 != a && (o2 = Math.min(i2(0, a), o2), -1 != (a = t3.lastIndexOf(e3, r3 + e3.length)) && (o2 = Math.min(i2(0, a), o2)));
      var u, c, l = 1 << e3.length - 1;
      a = -1;
      for (var m, d = e3.length + t3.length, f = 0; f < e3.length; f++) {
        for (u = 0, c = d; u < c; ) i2(f, r3 + c) <= o2 ? u = c : d = c, c = Math.floor((d - u) / 2 + u);
        d = c;
        var p = Math.max(1, r3 - c + 1), h = Math.min(r3 + c, t3.length) + e3.length, g = Array(h + 2);
        g[h + 1] = (1 << f) - 1;
        for (var A = h; A >= p; A--) {
          var _ = n2[t3.charAt(A - 1)];
          if (g[A] = 0 === f ? (g[A + 1] << 1 | 1) & _ : (g[A + 1] << 1 | 1) & _ | (m[A + 1] | m[A]) << 1 | 1 | m[A + 1], g[A] & l) {
            var y = i2(f, A - 1);
            if (y <= o2) {
              if (o2 = y, !((a = A - 1) > r3)) break;
              p = Math.max(1, 2 * r3 - a);
            }
          }
        }
        if (i2(f + 1, r3) > o2) break;
        m = g;
      }
      return a;
    }, e2.prototype.match_alphabet_ = function(t3) {
      for (var e3 = {}, r3 = 0; r3 < t3.length; r3++) e3[t3.charAt(r3)] = 0;
      for (r3 = 0; r3 < t3.length; r3++) e3[t3.charAt(r3)] |= 1 << t3.length - r3 - 1;
      return e3;
    }, e2.prototype.patch_addContext_ = function(t3, r3) {
      if (0 != r3.length) {
        if (null === t3.start2) throw Error("patch not initialized");
        for (var n2 = r3.substring(t3.start2, t3.start2 + t3.length1), s2 = 0; r3.indexOf(n2) != r3.lastIndexOf(n2) && n2.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; ) s2 += this.Patch_Margin, n2 = r3.substring(t3.start2 - s2, t3.start2 + t3.length1 + s2);
        s2 += this.Patch_Margin;
        var i2 = r3.substring(t3.start2 - s2, t3.start2);
        i2 && t3.diffs.unshift(new e2.Diff(0, i2));
        var o2 = r3.substring(t3.start2 + t3.length1, t3.start2 + t3.length1 + s2);
        o2 && t3.diffs.push(new e2.Diff(0, o2)), t3.start1 -= i2.length, t3.start2 -= i2.length, t3.length1 += i2.length + o2.length, t3.length2 += i2.length + o2.length;
      }
    }, e2.prototype.patch_make = function(t3, n2, s2) {
      var i2, o2;
      if ("string" == typeof t3 && "string" == typeof n2 && void 0 === s2) i2 = t3, (o2 = this.diff_main(i2, n2, true)).length > 2 && (this.diff_cleanupSemantic(o2), this.diff_cleanupEfficiency(o2));
      else if (t3 && "object" == typeof t3 && void 0 === n2 && void 0 === s2) o2 = t3, i2 = this.diff_text1(o2);
      else if ("string" == typeof t3 && n2 && "object" == typeof n2 && void 0 === s2) i2 = t3, o2 = n2;
      else {
        if ("string" != typeof t3 || "string" != typeof n2 || !s2 || "object" != typeof s2) throw new Error("Unknown call format to patch_make.");
        i2 = t3, o2 = s2;
      }
      if (0 === o2.length) return [];
      for (var a = [], u = new e2.patch_obj(), c = 0, l = 0, m = 0, d = i2, f = i2, p = 0; p < o2.length; p++) {
        var h = o2[p][0], g = o2[p][1];
        switch (c || 0 === h || (u.start1 = l, u.start2 = m), h) {
          case 1:
            u.diffs[c++] = o2[p], u.length2 += g.length, f = f.substring(0, m) + g + f.substring(m);
            break;
          case r2:
            u.length1 += g.length, u.diffs[c++] = o2[p], f = f.substring(0, m) + f.substring(m + g.length);
            break;
          case 0:
            g.length <= 2 * this.Patch_Margin && c && o2.length != p + 1 ? (u.diffs[c++] = o2[p], u.length1 += g.length, u.length2 += g.length) : g.length >= 2 * this.Patch_Margin && c && (this.patch_addContext_(u, d), a.push(u), u = new e2.patch_obj(), c = 0, d = f, l = m);
        }
        1 !== h && (l += g.length), h !== r2 && (m += g.length);
      }
      return c && (this.patch_addContext_(u, d), a.push(u)), a;
    }, e2.prototype.patch_deepCopy = function(t3) {
      for (var r3 = [], n2 = 0; n2 < t3.length; n2++) {
        var s2 = t3[n2], i2 = new e2.patch_obj();
        i2.diffs = [];
        for (var o2 = 0; o2 < s2.diffs.length; o2++) i2.diffs[o2] = new e2.Diff(s2.diffs[o2][0], s2.diffs[o2][1]);
        i2.start1 = s2.start1, i2.start2 = s2.start2, i2.length1 = s2.length1, i2.length2 = s2.length2, r3[n2] = i2;
      }
      return r3;
    }, e2.prototype.patch_apply = function(t3, e3) {
      if (0 == t3.length) return [e3, []];
      t3 = this.patch_deepCopy(t3);
      var n2 = this.patch_addPadding(t3);
      e3 = n2 + e3 + n2, this.patch_splitMax(t3);
      for (var s2 = 0, i2 = [], o2 = 0; o2 < t3.length; o2++) {
        var a, u, c = t3[o2].start2 + s2, l = this.diff_text1(t3[o2].diffs), m = -1;
        if (l.length > this.Match_MaxBits ? -1 != (a = this.match_main(e3, l.substring(0, this.Match_MaxBits), c)) && (-1 == (m = this.match_main(e3, l.substring(l.length - this.Match_MaxBits), c + l.length - this.Match_MaxBits)) || a >= m) && (a = -1) : a = this.match_main(e3, l, c), -1 == a) i2[o2] = false, s2 -= t3[o2].length2 - t3[o2].length1;
        else if (i2[o2] = true, s2 = a - c, l == (u = -1 == m ? e3.substring(a, a + l.length) : e3.substring(a, m + this.Match_MaxBits))) e3 = e3.substring(0, a) + this.diff_text2(t3[o2].diffs) + e3.substring(a + l.length);
        else {
          var d = this.diff_main(l, u, false);
          if (l.length > this.Match_MaxBits && this.diff_levenshtein(d) / l.length > this.Patch_DeleteThreshold) i2[o2] = false;
          else {
            this.diff_cleanupSemanticLossless(d);
            for (var f, p = 0, h = 0; h < t3[o2].diffs.length; h++) {
              var g = t3[o2].diffs[h];
              0 !== g[0] && (f = this.diff_xIndex(d, p)), 1 === g[0] ? e3 = e3.substring(0, a + f) + g[1] + e3.substring(a + f) : g[0] === r2 && (e3 = e3.substring(0, a + f) + e3.substring(a + this.diff_xIndex(d, p + g[1].length))), g[0] !== r2 && (p += g[1].length);
            }
          }
        }
      }
      return [e3 = e3.substring(n2.length, e3.length - n2.length), i2];
    }, e2.prototype.patch_addPadding = function(t3) {
      for (var r3 = this.Patch_Margin, n2 = "", s2 = 1; s2 <= r3; s2++) n2 += String.fromCharCode(s2);
      for (s2 = 0; s2 < t3.length; s2++) t3[s2].start1 += r3, t3[s2].start2 += r3;
      var i2 = t3[0], o2 = i2.diffs;
      if (0 == o2.length || 0 != o2[0][0]) o2.unshift(new e2.Diff(0, n2)), i2.start1 -= r3, i2.start2 -= r3, i2.length1 += r3, i2.length2 += r3;
      else if (r3 > o2[0][1].length) {
        var a = r3 - o2[0][1].length;
        o2[0][1] = n2.substring(o2[0][1].length) + o2[0][1], i2.start1 -= a, i2.start2 -= a, i2.length1 += a, i2.length2 += a;
      }
      if (0 == (o2 = (i2 = t3[t3.length - 1]).diffs).length || 0 != o2[o2.length - 1][0]) o2.push(new e2.Diff(0, n2)), i2.length1 += r3, i2.length2 += r3;
      else if (r3 > o2[o2.length - 1][1].length) {
        a = r3 - o2[o2.length - 1][1].length;
        o2[o2.length - 1][1] += n2.substring(0, a), i2.length1 += a, i2.length2 += a;
      }
      return n2;
    }, e2.prototype.patch_splitMax = function(t3) {
      for (var n2 = this.Match_MaxBits, s2 = 0; s2 < t3.length; s2++) if (!(t3[s2].length1 <= n2)) {
        var i2 = t3[s2];
        t3.splice(s2--, 1);
        for (var o2 = i2.start1, a = i2.start2, u = ""; 0 !== i2.diffs.length; ) {
          var c = new e2.patch_obj(), l = true;
          for (c.start1 = o2 - u.length, c.start2 = a - u.length, "" !== u && (c.length1 = c.length2 = u.length, c.diffs.push(new e2.Diff(0, u))); 0 !== i2.diffs.length && c.length1 < n2 - this.Patch_Margin; ) {
            var m = i2.diffs[0][0], d = i2.diffs[0][1];
            1 === m ? (c.length2 += d.length, a += d.length, c.diffs.push(i2.diffs.shift()), l = false) : m === r2 && 1 == c.diffs.length && 0 == c.diffs[0][0] && d.length > 2 * n2 ? (c.length1 += d.length, o2 += d.length, l = false, c.diffs.push(new e2.Diff(m, d)), i2.diffs.shift()) : (d = d.substring(0, n2 - c.length1 - this.Patch_Margin), c.length1 += d.length, o2 += d.length, 0 === m ? (c.length2 += d.length, a += d.length) : l = false, c.diffs.push(new e2.Diff(m, d)), d == i2.diffs[0][1] ? i2.diffs.shift() : i2.diffs[0][1] = i2.diffs[0][1].substring(d.length));
          }
          u = (u = this.diff_text2(c.diffs)).substring(u.length - this.Patch_Margin);
          var f = this.diff_text1(i2.diffs).substring(0, this.Patch_Margin);
          "" !== f && (c.length1 += f.length, c.length2 += f.length, 0 !== c.diffs.length && 0 === c.diffs[c.diffs.length - 1][0] ? c.diffs[c.diffs.length - 1][1] += f : c.diffs.push(new e2.Diff(0, f))), l || t3.splice(++s2, 0, c);
        }
      }
    }, e2.prototype.patch_toText = function(t3) {
      for (var e3 = [], r3 = 0; r3 < t3.length; r3++) e3[r3] = t3[r3];
      return e3.join("");
    }, e2.prototype.patch_fromText = function(t3) {
      var n2 = [];
      if (!t3) return n2;
      for (var s2 = t3.split("\n"), i2 = 0, o2 = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; i2 < s2.length; ) {
        var a = s2[i2].match(o2);
        if (!a) throw new Error("Invalid patch string: " + s2[i2]);
        var u = new e2.patch_obj();
        for (n2.push(u), u.start1 = parseInt(a[1], 10), "" === a[2] ? (u.start1--, u.length1 = 1) : "0" == a[2] ? u.length1 = 0 : (u.start1--, u.length1 = parseInt(a[2], 10)), u.start2 = parseInt(a[3], 10), "" === a[4] ? (u.start2--, u.length2 = 1) : "0" == a[4] ? u.length2 = 0 : (u.start2--, u.length2 = parseInt(a[4], 10)), i2++; i2 < s2.length; ) {
          var c = s2[i2].charAt(0);
          try {
            var l = decodeURI(s2[i2].substring(1));
          } catch (t4) {
            throw new Error("Illegal escape in patch_fromText: " + l);
          }
          if ("-" == c) u.diffs.push(new e2.Diff(r2, l));
          else if ("+" == c) u.diffs.push(new e2.Diff(1, l));
          else if (" " == c) u.diffs.push(new e2.Diff(0, l));
          else {
            if ("@" == c) break;
            if ("" !== c) throw new Error('Invalid patch mode "' + c + '" in: ' + l);
          }
          i2++;
        }
      }
      return n2;
    }, (e2.patch_obj = function() {
      this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
    }).prototype.toString = function() {
      for (var t3, e3 = ["@@ -" + (0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1) + " +" + (0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2) + " @@\n"], n2 = 0; n2 < this.diffs.length; n2++) {
        switch (this.diffs[n2][0]) {
          case 1:
            t3 = "+";
            break;
          case r2:
            t3 = "-";
            break;
          case 0:
            t3 = " ";
        }
        e3[n2 + 1] = t3 + encodeURI(this.diffs[n2][1]) + "\n";
      }
      return e3.join("").replace(/%20/g, " ");
    }, t2.exports = e2, t2.exports.diff_match_patch = e2, t2.exports.DIFF_DELETE = r2, t2.exports.DIFF_INSERT = 1, t2.exports.DIFF_EQUAL = 0;
  }