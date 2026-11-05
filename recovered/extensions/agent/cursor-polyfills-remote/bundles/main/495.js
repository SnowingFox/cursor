// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 495 range:5647..28886
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
495: (t2, r2, e2) => {
    e2(1011);
    var n2, o2 = e2(5613), i2 = e2(6893), a2 = e2(6301), u2 = e2(9117), s2 = e2(5821), c = e2(6881), f = e2(7509), h = e2(997), l = e2(286), p = e2(4418), v = e2(9456), d = e2(6859), g = e2(7825), y = e2(4212).codeAt, w = e2(6294), x = e2(421), m = e2(2618), b = e2(3754), S = e2(9445), O = e2(1615), E = e2(3086), R = E.set, P = E.getterFor("URL"), j = O.URLSearchParams, k = O.getState, I = x.decode, T = x.encode, A = u2.URL, L = u2.TypeError, N = u2.parseInt, U = Math.floor, C = Math.pow, F = String.fromCharCode, B = c("".charAt), D = c(/./.exec), M = c([].join), z = c(1.1.toString), _ = c([].pop), H = c([].push), J = c("".replace), q = c([].shift), G = c("".split), V = c("".indexOf), W = c("".slice), $ = c("".toLowerCase), K = c([].unshift), Y = "Invalid scheme", Q = "Invalid host", X = "Invalid port", Z = /[a-z]/i, tt = /[\d+\-.a-z]/i, rt = /\d/, et = /^0x/i, nt = /^[0-7]+$/, ot = /^\d+$/, it = /^[\da-f]+$/i, at = /[\u0000-\u0020#%/:<>?@[\\\]^|\u007F]/, ut = /[\0\t\n\r #/:<>?@[\\\]^|]/, st = /^[\u0000-\u0020]+/, ct = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, ft = /[\t\n\r]/g, ht = /[^\u0000-\u007F]/, lt = function(t3) {
      return 173 === t3 || 847 === t3 || 8203 === t3 || 12644 === t3 || 65279 === t3 || 65440 === t3 || t3 >= 4447 && t3 <= 4448 || t3 >= 6068 && t3 <= 6069 || t3 >= 6155 && t3 <= 6159 || t3 >= 8288 && t3 <= 8292 || t3 >= 8298 && t3 <= 8303 || t3 >= 65024 && t3 <= 65039 || t3 >= 917760 && t3 <= 917999;
    }, pt = function(t3) {
      return 65533 === t3 || t3 >= 55296 && t3 <= 57343 || t3 >= 128 && t3 <= 159 || t3 >= 8206 && t3 <= 8207 || t3 >= 8232 && t3 <= 8233 || t3 >= 8234 && t3 <= 8238 || t3 >= 8293 && t3 <= 8297 || t3 >= 64976 && t3 <= 65007 || !(65534 & ~t3) || t3 >= 57344 && t3 <= 63743 || t3 >= 983040 && t3 <= 1114109;
    }, vt = function(t3) {
      return t3 >= 65281 && t3 <= 65374 ? t3 - 65248 : 160 === t3 || 5760 === t3 || 8239 === t3 || 8287 === t3 || 12288 === t3 || t3 >= 8192 && t3 <= 8202 || t3 <= 65535 && V("¨¯´¸˘˙˚˛˜˝ͺ΄΅᾽᾿῀῁῍῎῏῝῞῟῭΅´῾‗‾⁇⁈⁉℀℁℅℆⩴゛゜ﱞﱟﱠﱡﱢﱣﷺﷻ︓︖﹇﹈﹉﹊﹋﹌﹕﹖﹟﹤﹥﹨﹪﹫ﹰﹲﹴﹶﹸﹺﹼﹾ￣", F(t3)) > -1 ? 32 : t3;
    }, dt = function(t3) {
      var r3, e3, n3, o3;
      if ("number" == typeof t3) {
        for (r3 = [], e3 = 0; e3 < 4; e3++) K(r3, t3 % 256), t3 = U(t3 / 256);
        return M(r3, ".");
      }
      if ("object" == typeof t3) {
        for (r3 = "", n3 = (function(t4) {
          for (var r4 = null, e4 = 1, n4 = null, o4 = 0, i3 = 0; i3 < 8; i3++) 0 !== t4[i3] ? (o4 > e4 && (r4 = n4, e4 = o4), n4 = null, o4 = 0) : (null === n4 && (n4 = i3), ++o4);
          return o4 > e4 ? n4 : r4;
        })(t3), e3 = 0; e3 < 8; e3++) o3 && 0 === t3[e3] || (o3 && (o3 = false), n3 === e3 ? (r3 += e3 ? ":" : "::", o3 = true) : (r3 += z(t3[e3], 16), e3 < 7 && (r3 += ":")));
        return "[" + r3 + "]";
      }
      return t3;
    }, gt = {}, yt = v({}, gt, { " ": 1, '"': 1, "#": 1, "<": 1, ">": 1 }), wt = v({}, yt, { "'": 1 }), xt = v({}, gt, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }), mt = v({}, xt, { "#": 1, "?": 1, "{": 1, "}": 1, "^": 1 }), bt = v({}, mt, { "/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1 }), St = function(t3, r3) {
      var e3 = y(t3, 0);
      return e3 >= 32 && e3 < 127 && !p(r3, t3) ? t3 : "'" === t3 && p(r3, t3) ? "%27" : T(t3);
    }, Ot = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 }, Et = function(t3, r3) {
      var e3;
      return 2 === t3.length && D(Z, B(t3, 0)) && (":" === (e3 = B(t3, 1)) || !r3 && "|" === e3);
    }, Rt = function(t3) {
      var r3;
      return t3.length > 1 && Et(W(t3, 0, 2)) && (2 === t3.length || "/" === (r3 = B(t3, 2)) || "\\" === r3 || "?" === r3 || "#" === r3);
    }, Pt = function(t3) {
      return "." === t3 || "%2e" === $(t3);
    }, jt = function(t3) {
      return ".." === (t3 = $(t3)) || "%2e." === t3 || ".%2e" === t3 || "%2e%2e" === t3;
    }, kt = {}, It = {}, Tt = {}, At = {}, Lt = {}, Nt = {}, Ut = {}, Ct = {}, Ft = {}, Bt = {}, Dt = {}, Mt = {}, zt = {}, _t = {}, Ht = {}, Jt = {}, qt = {}, Gt = {}, Vt = {}, Wt = {}, $t = {}, Kt = function(t3, r3, e3) {
      var n3, o3, i3, a3 = m(t3);
      if (r3) {
        if (o3 = this.parse(a3)) throw new L(o3);
        this.searchParams = null;
      } else {
        if (void 0 !== e3 && (n3 = new Kt(e3, true)), o3 = this.parse(a3, null, n3)) throw new L(o3);
        (i3 = k(new j())).bindURL(this), this.searchParams = i3;
      }
    };
    Kt.prototype = { type: "URL", parse: function(t3, r3, e3) {
      var o3, i3, a3, u3, s3 = this, c2 = r3 || kt, f2 = 0, h2 = "", l2 = false, v2 = false, y2 = false;
      for (t3 = m(t3), r3 || (s3.scheme = "", s3.username = "", s3.password = "", s3.host = null, s3.port = null, s3.path = [], s3.query = null, s3.fragment = null, s3.cannotBeABaseURL = false, t3 = J(t3, st, ""), t3 = J(t3, ct, "$1")), t3 = J(t3, ft, ""), o3 = d(t3); f2 <= o3.length; ) {
        switch (i3 = o3[f2], c2) {
          case kt:
            if (!i3 || !D(Z, i3)) {
              if (r3) return Y;
              c2 = Tt;
              continue;
            }
            h2 += $(i3), c2 = It;
            break;
          case It:
            if (i3 && D(tt, i3)) h2 += $(i3);
            else {
              if (":" !== i3) {
                if (r3) return Y;
                h2 = "", c2 = Tt, f2 = 0;
                continue;
              }
              if (r3 && (s3.isSpecial() !== p(Ot, h2) || "file" === h2 && (s3.includesCredentials() || null !== s3.port) || "file" === s3.scheme && "" === s3.host)) return;
              if (s3.scheme = h2, r3) return void (s3.isSpecial() && Ot[s3.scheme] === s3.port && (s3.port = null));
              h2 = "", "file" === s3.scheme ? c2 = _t : s3.isSpecial() && e3 && e3.scheme === s3.scheme ? c2 = At : s3.isSpecial() ? c2 = Ct : "/" === o3[f2 + 1] ? (c2 = Lt, f2++) : (s3.cannotBeABaseURL = true, H(s3.path, ""), c2 = Vt);
            }
            break;
          case Tt:
            if (!e3 || e3.cannotBeABaseURL && "#" !== i3) return Y;
            if (e3.cannotBeABaseURL && "#" === i3) {
              s3.scheme = e3.scheme, s3.path = g(e3.path), s3.query = e3.query, s3.fragment = "", s3.cannotBeABaseURL = true, c2 = $t;
              break;
            }
            c2 = "file" === e3.scheme ? _t : Nt;
            continue;
          case At:
            if ("/" !== i3 || "/" !== o3[f2 + 1]) {
              c2 = Nt;
              continue;
            }
            c2 = Ft, f2++;
            break;
          case Lt:
            if ("/" === i3) {
              c2 = Bt;
              break;
            }
            c2 = Gt;
            continue;
          case Nt:
            if (s3.scheme = e3.scheme, i3 === n2) s3.username = e3.username, s3.password = e3.password, s3.host = e3.host, s3.port = e3.port, s3.path = g(e3.path), s3.query = e3.query;
            else if ("/" === i3 || "\\" === i3 && s3.isSpecial()) c2 = Ut;
            else if ("?" === i3) s3.username = e3.username, s3.password = e3.password, s3.host = e3.host, s3.port = e3.port, s3.path = g(e3.path), s3.query = "", c2 = Wt;
            else {
              if ("#" !== i3) {
                s3.username = e3.username, s3.password = e3.password, s3.host = e3.host, s3.port = e3.port, s3.path = g(e3.path), s3.path.length && s3.path.length--, c2 = Gt;
                continue;
              }
              s3.username = e3.username, s3.password = e3.password, s3.host = e3.host, s3.port = e3.port, s3.path = g(e3.path), s3.query = e3.query, s3.fragment = "", c2 = $t;
            }
            break;
          case Ut:
            if (!s3.isSpecial() || "/" !== i3 && "\\" !== i3) {
              if ("/" !== i3) {
                s3.username = e3.username, s3.password = e3.password, s3.host = e3.host, s3.port = e3.port, c2 = Gt;
                continue;
              }
              c2 = Bt;
            } else c2 = Ft;
            break;
          case Ct:
            if (c2 = Ft, "/" !== i3 || "/" !== o3[f2 + 1]) continue;
            f2++;
            break;
          case Ft:
            if ("/" !== i3 && "\\" !== i3) {
              c2 = Bt;
              continue;
            }
            break;
          case Bt:
            if ("@" === i3) {
              l2 && (h2 = "%40" + h2), l2 = true, a3 = d(h2);
              for (var w2 = 0; w2 < a3.length; w2++) {
                var x2 = a3[w2];
                if (":" !== x2 || y2) {
                  var b2 = St(x2, bt);
                  y2 ? s3.password += b2 : s3.username += b2;
                } else y2 = true;
              }
              h2 = "";
            } else if (i3 === n2 || "/" === i3 || "?" === i3 || "#" === i3 || "\\" === i3 && s3.isSpecial()) {
              if (l2 && "" === h2) return "Invalid authority";
              f2 -= d(h2).length + 1, h2 = "", c2 = Dt;
            } else h2 += i3;
            break;
          case Dt:
          case Mt:
            if (r3 && "file" === s3.scheme) {
              c2 = Jt;
              continue;
            }
            if (":" !== i3 || v2) {
              if (i3 === n2 || "/" === i3 || "?" === i3 || "#" === i3 || "\\" === i3 && s3.isSpecial()) {
                if (s3.isSpecial() && "" === h2) return Q;
                if (r3 && "" === h2 && (s3.includesCredentials() || null !== s3.port)) return;
                if (u3 = s3.parseHost(h2)) return u3;
                if (h2 = "", c2 = qt, r3) return;
                continue;
              }
              "[" === i3 ? v2 = true : "]" === i3 && (v2 = false), h2 += i3;
            } else {
              if ("" === h2) return Q;
              if (r3 === Mt) return;
              if (u3 = s3.parseHost(h2)) return u3;
              h2 = "", c2 = zt;
            }
            break;
          case zt:
            if (!D(rt, i3)) {
              if (i3 === n2 || "/" === i3 || "?" === i3 || "#" === i3 || "\\" === i3 && s3.isSpecial() || r3) {
                if ("" !== h2) {
                  var S2 = N(h2, 10);
                  if (S2 > 65535) return X;
                  s3.port = s3.isSpecial() && S2 === Ot[s3.scheme] ? null : S2, h2 = "";
                }
                if (r3) return;
                c2 = qt;
                continue;
              }
              return X;
            }
            h2 += i3;
            break;
          case _t:
            if (s3.scheme = "file", s3.host = "", "/" === i3 || "\\" === i3) c2 = Ht;
            else {
              if (!e3 || "file" !== e3.scheme) {
                c2 = Gt;
                continue;
              }
              switch (i3) {
                case n2:
                  s3.host = e3.host, s3.path = g(e3.path), s3.query = e3.query;
                  break;
                case "?":
                  s3.host = e3.host, s3.path = g(e3.path), s3.query = "", c2 = Wt;
                  break;
                case "#":
                  s3.host = e3.host, s3.path = g(e3.path), s3.query = e3.query, s3.fragment = "", c2 = $t;
                  break;
                default:
                  s3.host = e3.host, Rt(M(g(o3, f2), "")) || (s3.path = g(e3.path), s3.shortenPath()), c2 = Gt;
                  continue;
              }
            }
            break;
          case Ht:
            if ("/" === i3 || "\\" === i3) {
              c2 = Jt;
              break;
            }
            e3 && "file" === e3.scheme && (s3.host = e3.host, !Rt(M(g(o3, f2), "")) && Et(e3.path[0], true) && H(s3.path, e3.path[0])), c2 = Gt;
            continue;
          case Jt:
            if (i3 === n2 || "/" === i3 || "\\" === i3 || "?" === i3 || "#" === i3) {
              if (!r3 && Et(h2)) c2 = Gt;
              else if ("" === h2) {
                if (s3.host = "", r3) return;
                c2 = qt;
              } else {
                if (u3 = s3.parseHost(h2)) return u3;
                if ("localhost" === s3.host && (s3.host = ""), r3) return;
                h2 = "", c2 = qt;
              }
              continue;
            }
            h2 += i3;
            break;
          case qt:
            if (s3.isSpecial()) {
              if (c2 = Gt, "/" !== i3 && "\\" !== i3) continue;
            } else if (r3 || "?" !== i3) if (r3 || "#" !== i3) {
              if (i3 !== n2 && (c2 = Gt, "/" !== i3)) continue;
            } else s3.fragment = "", c2 = $t;
            else s3.query = "", c2 = Wt;
            break;
          case Gt:
            if (i3 === n2 || "/" === i3 || "\\" === i3 && s3.isSpecial() || !r3 && ("?" === i3 || "#" === i3)) {
              if (jt(h2) ? (s3.shortenPath(), "/" === i3 || "\\" === i3 && s3.isSpecial() || H(s3.path, "")) : Pt(h2) ? "/" === i3 || "\\" === i3 && s3.isSpecial() || H(s3.path, "") : ("file" === s3.scheme && !s3.path.length && Et(h2) && (null !== s3.host && "" !== s3.host && (s3.host = ""), h2 = B(h2, 0) + ":"), H(s3.path, h2)), h2 = "", "file" === s3.scheme && (i3 === n2 || "?" === i3 || "#" === i3)) for (; s3.path.length > 1 && "" === s3.path[0]; ) q(s3.path);
              "?" === i3 ? (s3.query = "", c2 = Wt) : "#" === i3 && (s3.fragment = "", c2 = $t);
            } else h2 += St(i3, mt);
            break;
          case Vt:
            "?" === i3 ? (s3.query = "", c2 = Wt) : "#" === i3 ? (s3.fragment = "", c2 = $t) : i3 !== n2 && (s3.path[0] += " " === i3 ? "?" === o3[f2 + 1] || "#" === o3[f2 + 1] ? "%20" : " " : St(i3, gt));
            break;
          case Wt:
            r3 || "#" !== i3 ? i3 !== n2 && (s3.query += St(i3, s3.isSpecial() ? wt : yt)) : (s3.fragment = "", c2 = $t);
            break;
          case $t:
            i3 !== n2 && (s3.fragment += St(i3, xt));
        }
        f2++;
      }
    }, parseHost: function(t3) {
      var r3, e3, n3;
      if ("[" === B(t3, 0)) {
        if ("]" !== B(t3, t3.length - 1)) return Q;
        if (r3 = (function(t4) {
          var r4, e4, n4, o3, i3, a3, u3, s3 = [0, 0, 0, 0, 0, 0, 0, 0], c2 = 0, f2 = null, h2 = 0, l2 = function() {
            return B(t4, h2);
          };
          if (":" === l2()) {
            if (":" !== B(t4, 1)) return;
            h2 += 2, f2 = ++c2;
          }
          for (; l2(); ) {
            if (8 === c2) return;
            if (":" !== l2()) {
              for (r4 = e4 = 0; e4 < 4 && D(it, l2()); ) r4 = 16 * r4 + N(l2(), 16), h2++, e4++;
              if ("." === l2()) {
                if (0 === e4) return;
                if (h2 -= e4, c2 > 6) return;
                for (n4 = 0; l2(); ) {
                  if (o3 = null, n4 > 0) {
                    if (!("." === l2() && n4 < 4)) return;
                    h2++;
                  }
                  if (!D(rt, l2())) return;
                  for (; D(rt, l2()); ) {
                    if (i3 = N(l2(), 10), null === o3) o3 = i3;
                    else {
                      if (0 === o3) return;
                      o3 = 10 * o3 + i3;
                    }
                    if (o3 > 255) return;
                    h2++;
                  }
                  s3[c2] = 256 * s3[c2] + o3, 2 !== ++n4 && 4 !== n4 || c2++;
                }
                if (4 !== n4) return;
                break;
              }
              if (":" === l2()) {
                if (h2++, !l2()) return;
              } else if (l2()) return;
              s3[c2++] = r4;
            } else {
              if (null !== f2) return;
              h2++, f2 = ++c2;
            }
          }
          if (null !== f2) for (a3 = c2 - f2, c2 = 7; 0 !== c2 && a3 > 0; ) u3 = s3[c2], s3[c2--] = s3[f2 + a3 - 1], s3[f2 + --a3] = u3;
          else if (8 !== c2) return;
          return s3;
        })(W(t3, 1, -1)), !r3) return Q;
        this.host = r3;
      } else if (this.isSpecial()) {
        if (t3 = (function(t4) {
          if (!D(ht, t4)) return "" === t4 ? null : w(t4);
          var r4, e4, n4, o3 = d(t4), i3 = "";
          for (r4 = 0; r4 < o3.length; r4++) {
            if (e4 = y(o3[r4], 0), pt(e4)) return null;
            lt(e4) || (i3 += (n4 = vt(e4)) === e4 ? o3[r4] : F(n4));
          }
          return "" === i3 ? null : w(i3);
        })(I(t3)), null === t3 || D(at, t3)) return Q;
        if ((function(t4) {
          var r4, e4, n4 = G(t4, ".");
          if ("" === n4[n4.length - 1]) {
            if (1 === n4.length) return false;
            n4.length--;
          }
          return r4 = n4[n4.length - 1], !!D(ot, r4) || !!D(et, r4) && ("" === (e4 = W(r4, 2)) || !!D(it, e4));
        })(t3)) {
          if (r3 = (function(t4) {
            var r4, e4, n4, o3, i3, a3, u3, s3 = G(t4, ".");
            if (s3.length && "" === s3[s3.length - 1] && s3.length--, (r4 = s3.length) > 4) return null;
            for (e4 = [], n4 = 0; n4 < r4; n4++) {
              if ("" === (o3 = s3[n4])) return null;
              if (i3 = 10, o3.length > 1 && "0" === B(o3, 0) && (i3 = D(et, o3) ? 16 : 8, o3 = W(o3, 8 === i3 ? 1 : 2)), "" === o3) a3 = 0;
              else {
                if (!D(10 === i3 ? ot : 8 === i3 ? nt : it, o3)) return null;
                a3 = N(o3, i3);
              }
              H(e4, a3);
            }
            for (n4 = 0; n4 < r4; n4++) if (a3 = e4[n4], n4 === r4 - 1) {
              if (a3 >= C(256, 5 - r4)) return null;
            } else if (a3 > 255) return null;
            for (u3 = _(e4), n4 = 0; n4 < e4.length; n4++) u3 += e4[n4] * C(256, 3 - n4);
            return u3;
          })(t3), null === r3) return Q;
          this.host = r3;
        } else this.host = t3;
      } else {
        if (D(ut, t3)) return Q;
        for (r3 = "", e3 = d(t3), n3 = 0; n3 < e3.length; n3++) r3 += St(e3[n3], gt);
        this.host = r3;
      }
    }, cannotHaveUsernamePasswordPort: function() {
      return null === this.host || "" === this.host || this.cannotBeABaseURL || "file" === this.scheme;
    }, includesCredentials: function() {
      return "" !== this.username || "" !== this.password;
    }, isSpecial: function() {
      return p(Ot, this.scheme);
    }, shortenPath: function() {
      var t3 = this.path, r3 = t3.length;
      !r3 || "file" === this.scheme && 1 === r3 && Et(t3[0], true) || t3.length--;
    }, serialize: function() {
      var t3 = this, r3 = t3.scheme, e3 = t3.username, n3 = t3.password, o3 = t3.host, i3 = t3.port, a3 = t3.path, u3 = t3.query, s3 = t3.fragment, c2 = r3 + ":";
      return null !== o3 ? (c2 += "//", t3.includesCredentials() && (c2 += e3 + (n3 ? ":" + n3 : "") + "@"), c2 += dt(o3), null !== i3 && (c2 += ":" + i3)) : "file" === r3 && (c2 += "//"), null === o3 && !t3.cannotBeABaseURL && a3.length > 1 && "" === a3[0] && (c2 += "/."), c2 += t3.cannotBeABaseURL ? a3[0] : a3.length ? "/" + M(a3, "/") : "", null !== u3 && (c2 += "?" + u3), null !== s3 && (c2 += "#" + s3), c2;
    }, setHref: function(t3) {
      var r3 = this.parse(t3);
      if (r3) throw new L(r3);
      this.searchParams.update();
    }, getOrigin: function() {
      var t3 = this.scheme, r3 = this.port;
      if ("blob" === t3) try {
        return new Yt(this.path[0]).origin;
      } catch (t4) {
        return "null";
      }
      return "file" !== t3 && this.isSpecial() ? t3 + "://" + dt(this.host) + (null !== r3 ? ":" + r3 : "") : "null";
    }, getProtocol: function() {
      return this.scheme + ":";
    }, setProtocol: function(t3) {
      this.parse(m(t3) + ":", kt);
    }, getUsername: function() {
      return this.username;
    }, setUsername: function(t3) {
      var r3 = d(m(t3));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.username = "";
        for (var e3 = 0; e3 < r3.length; e3++) this.username += St(r3[e3], bt);
      }
    }, getPassword: function() {
      return this.password;
    }, setPassword: function(t3) {
      var r3 = d(m(t3));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.password = "";
        for (var e3 = 0; e3 < r3.length; e3++) this.password += St(r3[e3], bt);
      }
    }, getHost: function() {
      var t3 = this.host, r3 = this.port;
      return null === t3 ? "" : null === r3 ? dt(t3) : dt(t3) + ":" + r3;
    }, setHost: function(t3) {
      this.cannotBeABaseURL || this.parse(t3, Dt);
    }, getHostname: function() {
      var t3 = this.host;
      return null === t3 ? "" : dt(t3);
    }, setHostname: function(t3) {
      this.cannotBeABaseURL || this.parse(t3, Mt);
    }, getPort: function() {
      var t3 = this.port;
      return null === t3 ? "" : m(t3);
    }, setPort: function(t3) {
      this.cannotHaveUsernamePasswordPort() || ("" === (t3 = m(t3)) ? this.port = null : this.parse(t3, zt));
    }, getPathname: function() {
      var t3 = this.path;
      return this.cannotBeABaseURL ? t3[0] : t3.length ? "/" + M(t3, "/") : "";
    }, setPathname: function(t3) {
      this.cannotBeABaseURL || (this.path = [], this.parse(t3, qt));
    }, getSearch: function() {
      var t3 = this.query;
      return t3 ? "?" + t3 : "";
    }, setSearch: function(t3) {
      "" === (t3 = m(t3)) ? this.query = null : ("?" === B(t3, 0) && (t3 = W(t3, 1)), this.query = "", this.parse(t3, Wt)), this.searchParams.update();
    }, getSearchParams: function() {
      return this.searchParams.facade;
    }, getHash: function() {
      var t3 = this.fragment;
      return t3 ? "#" + t3 : "";
    }, setHash: function(t3) {
      "" !== (t3 = m(t3)) ? ("#" === B(t3, 0) && (t3 = W(t3, 1)), this.fragment = "", this.parse(t3, $t)) : this.fragment = null;
    }, update: function() {
      this.query = this.searchParams.serialize() || null;
    } };
    var Yt = function(t3) {
      var r3 = l(this, Qt), e3 = S(arguments.length, 1) > 1 ? arguments[1] : void 0, n3 = R(r3, new Kt(t3, false, e3));
      i2 || (r3.href = n3.serialize(), r3.origin = n3.getOrigin(), r3.protocol = n3.getProtocol(), r3.username = n3.getUsername(), r3.password = n3.getPassword(), r3.host = n3.getHost(), r3.hostname = n3.getHostname(), r3.port = n3.getPort(), r3.pathname = n3.getPathname(), r3.search = n3.getSearch(), r3.searchParams = n3.getSearchParams(), r3.hash = n3.getHash());
    }, Qt = Yt.prototype, Xt = function(t3, r3) {
      return { get: function() {
        return P(this)[t3]();
      }, set: r3 && function(t4) {
        return P(this)[r3](t4);
      }, configurable: true, enumerable: true };
    };
    if (i2 && (h(Qt, "href", Xt("serialize", "setHref")), h(Qt, "origin", Xt("getOrigin")), h(Qt, "protocol", Xt("getProtocol", "setProtocol")), h(Qt, "username", Xt("getUsername", "setUsername")), h(Qt, "password", Xt("getPassword", "setPassword")), h(Qt, "host", Xt("getHost", "setHost")), h(Qt, "hostname", Xt("getHostname", "setHostname")), h(Qt, "port", Xt("getPort", "setPort")), h(Qt, "pathname", Xt("getPathname", "setPathname")), h(Qt, "search", Xt("getSearch", "setSearch")), h(Qt, "searchParams", Xt("getSearchParams")), h(Qt, "hash", Xt("getHash", "setHash"))), f(Qt, "toJSON", function() {
      return P(this).serialize();
    }, { enumerable: true }), f(Qt, "toString", function() {
      return P(this).serialize();
    }, { enumerable: true }), A) {
      var Zt = A.createObjectURL, tr = A.revokeObjectURL;
      Zt && f(Yt, "createObjectURL", s2(Zt, A)), tr && f(Yt, "revokeObjectURL", s2(tr, A));
    }
    b(Yt, "URL"), o2({ global: true, constructor: true, forced: !a2, sham: !i2 }, { URL: Yt });
  }