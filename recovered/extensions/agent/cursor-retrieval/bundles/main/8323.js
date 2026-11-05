// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8323 range:960966..984494
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8323: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(4876), s2 = n2(3246), o2 = { ftp: 21, file: null, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 }, r2 = /* @__PURE__ */ Symbol("failure");
    function i2(e3) {
      return t2.ucs2.decode(e3).length;
    }
    function l(e3, a3) {
      const n3 = e3[a3];
      return isNaN(n3) ? void 0 : String.fromCodePoint(n3);
    }
    function d(e3) {
      return e3 >= 48 && e3 <= 57;
    }
    function m(e3) {
      return e3 >= 65 && e3 <= 90 || e3 >= 97 && e3 <= 122;
    }
    function c(e3) {
      return d(e3) || e3 >= 65 && e3 <= 70 || e3 >= 97 && e3 <= 102;
    }
    function p(e3) {
      return "." === e3 || "%2e" === e3.toLowerCase();
    }
    function A(e3) {
      return 2 === e3.length && m(e3.codePointAt(0)) && (":" === e3[1] || "|" === e3[1]);
    }
    function u(e3) {
      return void 0 !== o2[e3];
    }
    function g(e3) {
      return u(e3.scheme);
    }
    function T(e3) {
      let a3 = e3.toString(16).toUpperCase();
      return 1 === a3.length && (a3 = "0" + a3), "%" + a3;
    }
    function h(e3) {
      return e3 <= 31 || e3 > 126;
    }
    const k = /* @__PURE__ */ new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);
    function _(e3) {
      return h(e3) || k.has(e3);
    }
    const E = /* @__PURE__ */ new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
    function f(e3) {
      return _(e3) || E.has(e3);
    }
    function C(e3, a3) {
      const n3 = String.fromCodePoint(e3);
      return a3(e3) ? (function(e4) {
        const a4 = new Buffer(e4);
        let n4 = "";
        for (let e5 = 0; e5 < a4.length; ++e5) n4 += T(a4[e5]);
        return n4;
      })(n3) : n3;
    }
    function I(e3) {
      let a3 = 10;
      if (e3.length >= 2 && "0" === e3.charAt(0) && "x" === e3.charAt(1).toLowerCase() ? (e3 = e3.substring(2), a3 = 16) : e3.length >= 2 && "0" === e3.charAt(0) && (e3 = e3.substring(1), a3 = 8), "" === e3) return 0;
      return (10 === a3 ? /[^0-9]/ : 16 === a3 ? /[^0-9A-Fa-f]/ : /[^0-7]/).test(e3) ? r2 : parseInt(e3, a3);
    }
    function v(e3, a3) {
      if ("[" === e3[0]) return "]" !== e3[e3.length - 1] ? r2 : (function(e4) {
        const a4 = [0, 0, 0, 0, 0, 0, 0, 0];
        let n4 = 0, s3 = null, o4 = 0;
        if (58 === (e4 = t2.ucs2.decode(e4))[o4]) {
          if (58 !== e4[o4 + 1]) return r2;
          o4 += 2, ++n4, s3 = n4;
        }
        for (; o4 < e4.length; ) {
          if (8 === n4) return r2;
          if (58 === e4[o4]) {
            if (null !== s3) return r2;
            ++o4, ++n4, s3 = n4;
            continue;
          }
          let t3 = 0, i4 = 0;
          for (; i4 < 4 && c(e4[o4]); ) t3 = 16 * t3 + parseInt(l(e4, o4), 16), ++o4, ++i4;
          if (46 === e4[o4]) {
            if (0 === i4) return r2;
            if (o4 -= i4, n4 > 6) return r2;
            let t4 = 0;
            for (; void 0 !== e4[o4]; ) {
              let s4 = null;
              if (t4 > 0) {
                if (!(46 === e4[o4] && t4 < 4)) return r2;
                ++o4;
              }
              if (!d(e4[o4])) return r2;
              for (; d(e4[o4]); ) {
                const a5 = parseInt(l(e4, o4));
                if (null === s4) s4 = a5;
                else {
                  if (0 === s4) return r2;
                  s4 = 10 * s4 + a5;
                }
                if (s4 > 255) return r2;
                ++o4;
              }
              a4[n4] = 256 * a4[n4] + s4, ++t4, 2 !== t4 && 4 !== t4 || ++n4;
            }
            if (4 !== t4) return r2;
            break;
          }
          if (58 === e4[o4]) {
            if (++o4, void 0 === e4[o4]) return r2;
          } else if (void 0 !== e4[o4]) return r2;
          a4[n4] = t3, ++n4;
        }
        if (null !== s3) {
          let e5 = n4 - s3;
          for (n4 = 7; 0 !== n4 && e5 > 0; ) {
            const t3 = a4[s3 + e5 - 1];
            a4[s3 + e5 - 1] = a4[n4], a4[n4] = t3, --n4, --e5;
          }
        } else if (null === s3 && 8 !== n4) return r2;
        return a4;
      })(e3.substring(1, e3.length - 1));
      if (!a3) return (function(e4) {
        if (a4 = e4, -1 !== a4.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/)) return r2;
        var a4;
        let n4 = "";
        const s3 = t2.ucs2.decode(e4);
        for (let e5 = 0; e5 < s3.length; ++e5) n4 += C(s3[e5], h);
        return n4;
      })(e3);
      const n3 = (function(e4) {
        const a4 = new Buffer(e4), n4 = [];
        for (let e5 = 0; e5 < a4.length; ++e5) 37 !== a4[e5] ? n4.push(a4[e5]) : 37 === a4[e5] && c(a4[e5 + 1]) && c(a4[e5 + 2]) ? (n4.push(parseInt(a4.slice(e5 + 1, e5 + 3).toString(), 16)), e5 += 2) : n4.push(a4[e5]);
        return new Buffer(n4).toString();
      })(e3), o3 = s2.toASCII(n3, false, s2.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
      if (null === o3) return r2;
      if (-1 !== o3.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/)) return r2;
      const i3 = (function(e4) {
        const a4 = e4.split(".");
        if ("" === a4[a4.length - 1] && a4.length > 1 && a4.pop(), a4.length > 4) return e4;
        const n4 = [];
        for (const t4 of a4) {
          if ("" === t4) return e4;
          const a5 = I(t4);
          if (a5 === r2) return e4;
          n4.push(a5);
        }
        for (let e5 = 0; e5 < n4.length - 1; ++e5) if (n4[e5] > 255) return r2;
        if (n4[n4.length - 1] >= Math.pow(256, 5 - n4.length)) return r2;
        let t3 = n4.pop(), s3 = 0;
        for (const e5 of n4) t3 += e5 * Math.pow(256, 3 - s3), ++s3;
        return t3;
      })(o3);
      return "number" == typeof i3 || i3 === r2 ? i3 : o3;
    }
    function y(e3) {
      return "number" == typeof e3 ? (function(e4) {
        let a3 = "", n3 = e4;
        for (let e5 = 1; e5 <= 4; ++e5) a3 = String(n3 % 256) + a3, 4 !== e5 && (a3 = "." + a3), n3 = Math.floor(n3 / 256);
        return a3;
      })(e3) : e3 instanceof Array ? "[" + (function(e4) {
        let a3 = "";
        const n3 = (function(e5) {
          let a4 = null, n4 = 1, t4 = null, s3 = 0;
          for (let o3 = 0; o3 < e5.length; ++o3) 0 !== e5[o3] ? (s3 > n4 && (a4 = t4, n4 = s3), t4 = null, s3 = 0) : (null === t4 && (t4 = o3), ++s3);
          return s3 > n4 && (a4 = t4, n4 = s3), { idx: a4, len: n4 };
        })(e4).idx;
        let t3 = false;
        for (let s3 = 0; s3 <= 7; ++s3) if (!t3 || 0 !== e4[s3]) {
          if (t3 && (t3 = false), n3 === s3) {
            a3 += 0 === s3 ? "::" : ":", t3 = true;
            continue;
          }
          a3 += e4[s3].toString(16), 7 !== s3 && (a3 += ":");
        }
        return a3;
      })(e3) + "]" : e3;
    }
    function S(e3) {
      const a3 = e3.path;
      var n3;
      0 !== a3.length && ("file" === e3.scheme && 1 === a3.length && (n3 = a3[0], /^[A-Za-z]:$/.test(n3)) || a3.pop());
    }
    function R(e3) {
      return "" !== e3.username || "" !== e3.password;
    }
    function N(e3, a3, n3, s3, o3) {
      if (this.pointer = 0, this.input = e3, this.base = a3 || null, this.encodingOverride = n3 || "utf-8", this.stateOverride = o3, this.url = s3, this.failure = false, this.parseError = false, !this.url) {
        this.url = { scheme: "", username: "", password: "", host: null, port: null, path: [], query: null, fragment: null, cannotBeABaseURL: false };
        const e4 = (function(e5) {
          return e5.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
        })(this.input);
        e4 !== this.input && (this.parseError = true), this.input = e4;
      }
      const i3 = (function(e4) {
        return e4.replace(/\u0009|\u000A|\u000D/g, "");
      })(this.input);
      for (i3 !== this.input && (this.parseError = true), this.input = i3, this.state = o3 || "scheme start", this.buffer = "", this.atFlag = false, this.arrFlag = false, this.passwordTokenSeenFlag = false, this.input = t2.ucs2.decode(this.input); this.pointer <= this.input.length; ++this.pointer) {
        const e4 = this.input[this.pointer], a4 = isNaN(e4) ? void 0 : String.fromCodePoint(e4), n4 = this["parse " + this.state](e4, a4);
        if (!n4) break;
        if (n4 === r2) {
          this.failure = true;
          break;
        }
      }
    }
    N.prototype["parse scheme start"] = function(e3, a3) {
      if (m(e3)) this.buffer += a3.toLowerCase(), this.state = "scheme";
      else {
        if (this.stateOverride) return this.parseError = true, r2;
        this.state = "no scheme", --this.pointer;
      }
      return true;
    }, N.prototype["parse scheme"] = function(e3, a3) {
      if ((function(e4) {
        return m(e4) || d(e4);
      })(e3) || 43 === e3 || 45 === e3 || 46 === e3) this.buffer += a3.toLowerCase();
      else if (58 === e3) {
        if (this.stateOverride) {
          if (g(this.url) && !u(this.buffer)) return false;
          if (!g(this.url) && u(this.buffer)) return false;
          if ((R(this.url) || null !== this.url.port) && "file" === this.buffer) return false;
          if ("file" === this.url.scheme && ("" === this.url.host || null === this.url.host)) return false;
        }
        if (this.url.scheme = this.buffer, this.buffer = "", this.stateOverride) return false;
        "file" === this.url.scheme ? (47 === this.input[this.pointer + 1] && 47 === this.input[this.pointer + 2] || (this.parseError = true), this.state = "file") : g(this.url) && null !== this.base && this.base.scheme === this.url.scheme ? this.state = "special relative or authority" : g(this.url) ? this.state = "special authority slashes" : 47 === this.input[this.pointer + 1] ? (this.state = "path or authority", ++this.pointer) : (this.url.cannotBeABaseURL = true, this.url.path.push(""), this.state = "cannot-be-a-base-URL path");
      } else {
        if (this.stateOverride) return this.parseError = true, r2;
        this.buffer = "", this.state = "no scheme", this.pointer = -1;
      }
      return true;
    }, N.prototype["parse no scheme"] = function(e3) {
      return null === this.base || this.base.cannotBeABaseURL && 35 !== e3 ? r2 : (this.base.cannotBeABaseURL && 35 === e3 ? (this.url.scheme = this.base.scheme, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.url.cannotBeABaseURL = true, this.state = "fragment") : "file" === this.base.scheme ? (this.state = "file", --this.pointer) : (this.state = "relative", --this.pointer), true);
    }, N.prototype["parse special relative or authority"] = function(e3) {
      return 47 === e3 && 47 === this.input[this.pointer + 1] ? (this.state = "special authority ignore slashes", ++this.pointer) : (this.parseError = true, this.state = "relative", --this.pointer), true;
    }, N.prototype["parse path or authority"] = function(e3) {
      return 47 === e3 ? this.state = "authority" : (this.state = "path", --this.pointer), true;
    }, N.prototype["parse relative"] = function(e3) {
      return this.url.scheme = this.base.scheme, isNaN(e3) ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query) : 47 === e3 ? this.state = "relative slash" : 63 === e3 ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = "", this.state = "query") : 35 === e3 ? (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment") : g(this.url) && 92 === e3 ? (this.parseError = true, this.state = "relative slash") : (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(0, this.base.path.length - 1), this.state = "path", --this.pointer), true;
    }, N.prototype["parse relative slash"] = function(e3) {
      return !g(this.url) || 47 !== e3 && 92 !== e3 ? 47 === e3 ? this.state = "authority" : (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.state = "path", --this.pointer) : (92 === e3 && (this.parseError = true), this.state = "special authority ignore slashes"), true;
    }, N.prototype["parse special authority slashes"] = function(e3) {
      return 47 === e3 && 47 === this.input[this.pointer + 1] ? (this.state = "special authority ignore slashes", ++this.pointer) : (this.parseError = true, this.state = "special authority ignore slashes", --this.pointer), true;
    }, N.prototype["parse special authority ignore slashes"] = function(e3) {
      return 47 !== e3 && 92 !== e3 ? (this.state = "authority", --this.pointer) : this.parseError = true, true;
    }, N.prototype["parse authority"] = function(e3, a3) {
      if (64 === e3) {
        this.parseError = true, this.atFlag && (this.buffer = "%40" + this.buffer), this.atFlag = true;
        const e4 = i2(this.buffer);
        for (let a4 = 0; a4 < e4; ++a4) {
          const e5 = this.buffer.codePointAt(a4);
          if (58 === e5 && !this.passwordTokenSeenFlag) {
            this.passwordTokenSeenFlag = true;
            continue;
          }
          const n3 = C(e5, f);
          this.passwordTokenSeenFlag ? this.url.password += n3 : this.url.username += n3;
        }
        this.buffer = "";
      } else if (isNaN(e3) || 47 === e3 || 63 === e3 || 35 === e3 || g(this.url) && 92 === e3) {
        if (this.atFlag && "" === this.buffer) return this.parseError = true, r2;
        this.pointer -= i2(this.buffer) + 1, this.buffer = "", this.state = "host";
      } else this.buffer += a3;
      return true;
    }, N.prototype["parse hostname"] = N.prototype["parse host"] = function(e3, a3) {
      if (this.stateOverride && "file" === this.url.scheme) --this.pointer, this.state = "file host";
      else if (58 !== e3 || this.arrFlag) if (isNaN(e3) || 47 === e3 || 63 === e3 || 35 === e3 || g(this.url) && 92 === e3) {
        if (--this.pointer, g(this.url) && "" === this.buffer) return this.parseError = true, r2;
        if (this.stateOverride && "" === this.buffer && (R(this.url) || null !== this.url.port)) return this.parseError = true, false;
        const e4 = v(this.buffer, g(this.url));
        if (e4 === r2) return r2;
        if (this.url.host = e4, this.buffer = "", this.state = "path start", this.stateOverride) return false;
      } else 91 === e3 ? this.arrFlag = true : 93 === e3 && (this.arrFlag = false), this.buffer += a3;
      else {
        if ("" === this.buffer) return this.parseError = true, r2;
        const e4 = v(this.buffer, g(this.url));
        if (e4 === r2) return r2;
        if (this.url.host = e4, this.buffer = "", this.state = "port", "hostname" === this.stateOverride) return false;
      }
      return true;
    }, N.prototype["parse port"] = function(e3, a3) {
      if (d(e3)) this.buffer += a3;
      else {
        if (!(isNaN(e3) || 47 === e3 || 63 === e3 || 35 === e3 || g(this.url) && 92 === e3 || this.stateOverride)) return this.parseError = true, r2;
        if ("" !== this.buffer) {
          const e4 = parseInt(this.buffer);
          if (e4 > Math.pow(2, 16) - 1) return this.parseError = true, r2;
          this.url.port = e4 === (n3 = this.url.scheme, o2[n3]) ? null : e4, this.buffer = "";
        }
        if (this.stateOverride) return false;
        this.state = "path start", --this.pointer;
      }
      var n3;
      return true;
    };
    const B = /* @__PURE__ */ new Set([47, 92, 63, 35]);
    N.prototype["parse file"] = function(e3) {
      var a3, n3;
      return this.url.scheme = "file", 47 === e3 || 92 === e3 ? (92 === e3 && (this.parseError = true), this.state = "file slash") : null !== this.base && "file" === this.base.scheme ? isNaN(e3) ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query) : 63 === e3 ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = "", this.state = "query") : 35 === e3 ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment") : (this.input.length - this.pointer - 1 == 0 || (a3 = e3, n3 = this.input[this.pointer + 1], !m(a3) || 58 !== n3 && 124 !== n3) || this.input.length - this.pointer - 1 >= 2 && !B.has(this.input[this.pointer + 2]) ? (this.url.host = this.base.host, this.url.path = this.base.path.slice(), S(this.url)) : this.parseError = true, this.state = "path", --this.pointer) : (this.state = "path", --this.pointer), true;
    }, N.prototype["parse file slash"] = function(e3) {
      var a3;
      return 47 === e3 || 92 === e3 ? (92 === e3 && (this.parseError = true), this.state = "file host") : (null !== this.base && "file" === this.base.scheme && (2 === (a3 = this.base.path[0]).length && m(a3.codePointAt(0)) && ":" === a3[1] ? this.url.path.push(this.base.path[0]) : this.url.host = this.base.host), this.state = "path", --this.pointer), true;
    }, N.prototype["parse file host"] = function(e3, a3) {
      if (isNaN(e3) || 47 === e3 || 92 === e3 || 63 === e3 || 35 === e3) if (--this.pointer, !this.stateOverride && A(this.buffer)) this.parseError = true, this.state = "path";
      else if ("" === this.buffer) {
        if (this.url.host = "", this.stateOverride) return false;
        this.state = "path start";
      } else {
        let e4 = v(this.buffer, g(this.url));
        if (e4 === r2) return r2;
        if ("localhost" === e4 && (e4 = ""), this.url.host = e4, this.stateOverride) return false;
        this.buffer = "", this.state = "path start";
      }
      else this.buffer += a3;
      return true;
    }, N.prototype["parse path start"] = function(e3) {
      return g(this.url) ? (92 === e3 && (this.parseError = true), this.state = "path", 47 !== e3 && 92 !== e3 && --this.pointer) : this.stateOverride || 63 !== e3 ? this.stateOverride || 35 !== e3 ? void 0 !== e3 && (this.state = "path", 47 !== e3 && --this.pointer) : (this.url.fragment = "", this.state = "fragment") : (this.url.query = "", this.state = "query"), true;
    }, N.prototype["parse path"] = function(e3) {
      if (isNaN(e3) || 47 === e3 || g(this.url) && 92 === e3 || !this.stateOverride && (63 === e3 || 35 === e3)) {
        if (g(this.url) && 92 === e3 && (this.parseError = true), ".." === (a3 = (a3 = this.buffer).toLowerCase()) || "%2e." === a3 || ".%2e" === a3 || "%2e%2e" === a3 ? (S(this.url), 47 === e3 || g(this.url) && 92 === e3 || this.url.path.push("")) : !p(this.buffer) || 47 === e3 || g(this.url) && 92 === e3 ? p(this.buffer) || ("file" === this.url.scheme && 0 === this.url.path.length && A(this.buffer) && ("" !== this.url.host && null !== this.url.host && (this.parseError = true, this.url.host = ""), this.buffer = this.buffer[0] + ":"), this.url.path.push(this.buffer)) : this.url.path.push(""), this.buffer = "", "file" === this.url.scheme && (void 0 === e3 || 63 === e3 || 35 === e3)) for (; this.url.path.length > 1 && "" === this.url.path[0]; ) this.parseError = true, this.url.path.shift();
        63 === e3 && (this.url.query = "", this.state = "query"), 35 === e3 && (this.url.fragment = "", this.state = "fragment");
      } else 37 !== e3 || c(this.input[this.pointer + 1]) && c(this.input[this.pointer + 2]) || (this.parseError = true), this.buffer += C(e3, _);
      var a3;
      return true;
    }, N.prototype["parse cannot-be-a-base-URL path"] = function(e3) {
      return 63 === e3 ? (this.url.query = "", this.state = "query") : 35 === e3 ? (this.url.fragment = "", this.state = "fragment") : (isNaN(e3) || 37 === e3 || (this.parseError = true), 37 !== e3 || c(this.input[this.pointer + 1]) && c(this.input[this.pointer + 2]) || (this.parseError = true), isNaN(e3) || (this.url.path[0] = this.url.path[0] + C(e3, h))), true;
    }, N.prototype["parse query"] = function(e3, a3) {
      if (isNaN(e3) || !this.stateOverride && 35 === e3) {
        g(this.url) && "ws" !== this.url.scheme && "wss" !== this.url.scheme || (this.encodingOverride = "utf-8");
        const a4 = new Buffer(this.buffer);
        for (let e4 = 0; e4 < a4.length; ++e4) a4[e4] < 33 || a4[e4] > 126 || 34 === a4[e4] || 35 === a4[e4] || 60 === a4[e4] || 62 === a4[e4] ? this.url.query += T(a4[e4]) : this.url.query += String.fromCodePoint(a4[e4]);
        this.buffer = "", 35 === e3 && (this.url.fragment = "", this.state = "fragment");
      } else 37 !== e3 || c(this.input[this.pointer + 1]) && c(this.input[this.pointer + 2]) || (this.parseError = true), this.buffer += a3;
      return true;
    }, N.prototype["parse fragment"] = function(e3) {
      return isNaN(e3) || (0 === e3 ? this.parseError = true : (37 !== e3 || c(this.input[this.pointer + 1]) && c(this.input[this.pointer + 2]) || (this.parseError = true), this.url.fragment += C(e3, h))), true;
    }, e2.exports.serializeURL = function(e3, a3) {
      let n3 = e3.scheme + ":";
      if (null !== e3.host ? (n3 += "//", "" === e3.username && "" === e3.password || (n3 += e3.username, "" !== e3.password && (n3 += ":" + e3.password), n3 += "@"), n3 += y(e3.host), null !== e3.port && (n3 += ":" + e3.port)) : null === e3.host && "file" === e3.scheme && (n3 += "//"), e3.cannotBeABaseURL) n3 += e3.path[0];
      else for (const a4 of e3.path) n3 += "/" + a4;
      return null !== e3.query && (n3 += "?" + e3.query), a3 || null === e3.fragment || (n3 += "#" + e3.fragment), n3;
    }, e2.exports.serializeURLOrigin = function(a3) {
      switch (a3.scheme) {
        case "blob":
          try {
            return e2.exports.serializeURLOrigin(e2.exports.parseURL(a3.path[0]));
          } catch (e3) {
            return "null";
          }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
          return (function(e3) {
            let a4 = e3.scheme + "://";
            return a4 += y(e3.host), null !== e3.port && (a4 += ":" + e3.port), a4;
          })({ scheme: a3.scheme, host: a3.host, port: a3.port });
        case "file":
          return "file://";
        default:
          return "null";
      }
    }, e2.exports.basicURLParse = function(e3, a3) {
      void 0 === a3 && (a3 = {});
      const n3 = new N(e3, a3.baseURL, a3.encodingOverride, a3.url, a3.stateOverride);
      return n3.failure ? "failure" : n3.url;
    }, e2.exports.setTheUsername = function(e3, a3) {
      e3.username = "";
      const n3 = t2.ucs2.decode(a3);
      for (let a4 = 0; a4 < n3.length; ++a4) e3.username += C(n3[a4], f);
    }, e2.exports.setThePassword = function(e3, a3) {
      e3.password = "";
      const n3 = t2.ucs2.decode(a3);
      for (let a4 = 0; a4 < n3.length; ++a4) e3.password += C(n3[a4], f);
    }, e2.exports.serializeHost = y, e2.exports.cannotHaveAUsernamePasswordPort = function(e3) {
      return null === e3.host || "" === e3.host || e3.cannotBeABaseURL || "file" === e3.scheme;
    }, e2.exports.serializeInteger = function(e3) {
      return String(e3);
    }, e2.exports.parseURL = function(a3, n3) {
      return void 0 === n3 && (n3 = {}), e2.exports.basicURLParse(a3, { baseURL: n3.baseURL, encodingOverride: n3.encodingOverride });
    };
  }