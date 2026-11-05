// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 95379 range:14537698..14550077
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95379: function(e, t, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(e2, t2, r2, n2) {
      void 0 === n2 && (n2 = r2);
      var s2 = Object.getOwnPropertyDescriptor(t2, r2);
      s2 && !("get" in s2 ? !t2.__esModule : s2.writable || s2.configurable) || (s2 = { enumerable: true, get: function() {
        return t2[r2];
      } }), Object.defineProperty(e2, n2, s2);
    } : function(e2, t2, r2, n2) {
      void 0 === n2 && (n2 = r2), e2[n2] = t2[r2];
    }), s = this && this.__setModuleDefault || (Object.create ? function(e2, t2) {
      Object.defineProperty(e2, "default", { enumerable: true, value: t2 });
    } : function(e2, t2) {
      e2.default = t2;
    }), o = this && this.__importStar || function(e2) {
      if (e2 && e2.__esModule) return e2;
      var t2 = {};
      if (null != e2) for (var r2 in e2) "default" !== r2 && Object.prototype.hasOwnProperty.call(e2, r2) && n(t2, e2, r2);
      return s(t2, e2), t2;
    };
    Object.defineProperty(t, "__esModule", { value: true }), t.Cookie = void 0;
    const i = r(16098), a = o(r(82715)), c = r(95779), l = r(92658), u = r(55606), d = r(23779), p = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, m = /[\x20-\x3A\x3C-\x7E]+/, h = /[\x00-\x1F]/, f = ["\n", "\r", "\0"];
    function g(e2, t2) {
      let r2, n2, s2 = (e2 = (function(e3) {
        if (a.isEmptyString(e3)) return e3;
        for (let t3 = 0; t3 < f.length; t3++) {
          const r3 = f[t3], n3 = r3 ? e3.indexOf(r3) : -1;
          -1 !== n3 && (e3 = e3.slice(0, n3));
        }
        return e3;
      })(e2)).indexOf("=");
      if (t2) 0 === s2 && (s2 = (e2 = e2.substring(1)).indexOf("="));
      else if (s2 <= 0) return;
      if (s2 <= 0 ? (r2 = "", n2 = e2.trim()) : (r2 = e2.slice(0, s2).trim(), n2 = e2.slice(s2 + 1).trim()), h.test(r2) || h.test(n2)) return;
      const o2 = new v();
      return o2.key = r2, o2.value = n2, o2;
    }
    function y(e2) {
      if (!e2 || a.isEmptyString(e2)) return;
      let t2;
      if ("string" == typeof e2) try {
        t2 = JSON.parse(e2);
      } catch {
        return;
      }
      else t2 = e2;
      const r2 = new v();
      return v.serializableProperties.forEach((e3) => {
        if (t2 && "object" == typeof t2 && (0, c.inOperator)(e3, t2)) {
          const n2 = t2[e3];
          if (void 0 === n2) return;
          if ((0, c.inOperator)(e3, w) && n2 === w[e3]) return;
          switch (e3) {
            case "key":
            case "value":
            case "sameSite":
              "string" == typeof n2 && (r2[e3] = n2);
              break;
            case "expires":
            case "creation":
            case "lastAccessed":
              "number" == typeof n2 || "string" == typeof n2 || n2 instanceof Date ? r2[e3] = "Infinity" == t2[e3] ? "Infinity" : new Date(n2) : null === n2 && (r2[e3] = null);
              break;
            case "maxAge":
              "number" != typeof n2 && "Infinity" !== n2 && "-Infinity" !== n2 || (r2[e3] = n2);
              break;
            case "domain":
            case "path":
              "string" != typeof n2 && null !== n2 || (r2[e3] = n2);
              break;
            case "secure":
            case "httpOnly":
              "boolean" == typeof n2 && (r2[e3] = n2);
              break;
            case "extensions":
              Array.isArray(n2) && n2.every((e4) => "string" == typeof e4) && (r2[e3] = n2);
              break;
            case "hostOnly":
            case "pathIsDefault":
              "boolean" != typeof n2 && null !== n2 || (r2[e3] = n2);
          }
        }
      }), r2;
    }
    const w = { key: "", value: "", expires: "Infinity", maxAge: null, domain: null, path: null, secure: false, httpOnly: false, extensions: null, hostOnly: null, pathIsDefault: null, creation: null, lastAccessed: null, sameSite: void 0 };
    class v {
      constructor(e2 = {}) {
        this.key = e2.key ?? w.key, this.value = e2.value ?? w.value, this.expires = e2.expires ?? w.expires, this.maxAge = e2.maxAge ?? w.maxAge, this.domain = e2.domain ?? w.domain, this.path = e2.path ?? w.path, this.secure = e2.secure ?? w.secure, this.httpOnly = e2.httpOnly ?? w.httpOnly, this.extensions = e2.extensions ?? w.extensions, this.creation = e2.creation ?? w.creation, this.hostOnly = e2.hostOnly ?? w.hostOnly, this.pathIsDefault = e2.pathIsDefault ?? w.pathIsDefault, this.lastAccessed = e2.lastAccessed ?? w.lastAccessed, this.sameSite = e2.sameSite ?? w.sameSite, this.creation = e2.creation ?? /* @__PURE__ */ new Date(), Object.defineProperty(this, "creationIndex", { configurable: false, enumerable: false, writable: true, value: ++v.cookiesCreated }), this.creationIndex = v.cookiesCreated;
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        const e2 = Date.now(), t2 = null != this.hostOnly ? this.hostOnly.toString() : "?", r2 = this.creation && "Infinity" !== this.creation ? `${String(e2 - this.creation.getTime())}ms` : "?", n2 = this.lastAccessed && "Infinity" !== this.lastAccessed ? `${String(e2 - this.lastAccessed.getTime())}ms` : "?";
        return `Cookie="${this.toString()}; hostOnly=${t2}; aAge=${n2}; cAge=${r2}"`;
      }
      toJSON() {
        const e2 = {};
        for (const t2 of v.serializableProperties) {
          const r2 = this[t2];
          if (r2 !== w[t2]) switch (t2) {
            case "key":
            case "value":
            case "sameSite":
              "string" == typeof r2 && (e2[t2] = r2);
              break;
            case "expires":
            case "creation":
            case "lastAccessed":
              "number" == typeof r2 || "string" == typeof r2 || r2 instanceof Date ? e2[t2] = "Infinity" == r2 ? "Infinity" : new Date(r2).toISOString() : null === r2 && (e2[t2] = null);
              break;
            case "maxAge":
              "number" != typeof r2 && "Infinity" !== r2 && "-Infinity" !== r2 || (e2[t2] = r2);
              break;
            case "domain":
            case "path":
              "string" != typeof r2 && null !== r2 || (e2[t2] = r2);
              break;
            case "secure":
            case "httpOnly":
              "boolean" == typeof r2 && (e2[t2] = r2);
              break;
            case "extensions":
              Array.isArray(r2) && (e2[t2] = r2);
              break;
            case "hostOnly":
            case "pathIsDefault":
              "boolean" != typeof r2 && null !== r2 || (e2[t2] = r2);
          }
        }
        return e2;
      }
      clone() {
        return y(this.toJSON());
      }
      validate() {
        if (!this.value || !p.test(this.value)) return false;
        if (!("Infinity" == this.expires || this.expires instanceof Date || (0, u.parseDate)(this.expires))) return false;
        if (null != this.maxAge && "Infinity" !== this.maxAge && ("-Infinity" === this.maxAge || this.maxAge <= 0)) return false;
        if (null != this.path && !m.test(this.path)) return false;
        const e2 = this.cdomain();
        if (e2) {
          if (e2.match(/\.$/)) return false;
          if (null == (0, i.getPublicSuffix)(e2)) return false;
        }
        return true;
      }
      setExpires(e2) {
        e2 instanceof Date ? this.expires = e2 : this.expires = (0, u.parseDate)(e2) || "Infinity";
      }
      setMaxAge(e2) {
        this.maxAge = e2 === 1 / 0 ? "Infinity" : e2 === -1 / 0 ? "-Infinity" : e2;
      }
      cookieString() {
        const e2 = this.value || "";
        return this.key ? `${this.key}=${e2}` : e2;
      }
      toString() {
        let e2 = this.cookieString();
        return "Infinity" != this.expires && this.expires instanceof Date && (e2 += `; Expires=${(0, l.formatDate)(this.expires)}`), null != this.maxAge && this.maxAge != 1 / 0 && (e2 += `; Max-Age=${String(this.maxAge)}`), this.domain && !this.hostOnly && (e2 += `; Domain=${this.domain}`), this.path && (e2 += `; Path=${this.path}`), this.secure && (e2 += "; Secure"), this.httpOnly && (e2 += "; HttpOnly"), this.sameSite && "none" !== this.sameSite && (this.sameSite.toLowerCase() === v.sameSiteCanonical.lax.toLowerCase() ? e2 += `; SameSite=${v.sameSiteCanonical.lax}` : this.sameSite.toLowerCase() === v.sameSiteCanonical.strict.toLowerCase() ? e2 += `; SameSite=${v.sameSiteCanonical.strict}` : e2 += `; SameSite=${this.sameSite}`), this.extensions && this.extensions.forEach((t2) => {
          e2 += `; ${t2}`;
        }), e2;
      }
      TTL(e2 = Date.now()) {
        if (null != this.maxAge && "number" == typeof this.maxAge) return this.maxAge <= 0 ? 0 : 1e3 * this.maxAge;
        const t2 = this.expires;
        return "Infinity" === t2 ? 1 / 0 : (t2?.getTime() ?? e2) - (e2 || Date.now());
      }
      expiryTime(e2) {
        if (null != this.maxAge) {
          const t2 = e2 || this.lastAccessed || /* @__PURE__ */ new Date(), r2 = "number" == typeof this.maxAge ? this.maxAge : -1 / 0, n2 = r2 <= 0 ? -1 / 0 : 1e3 * r2;
          return "Infinity" === t2 ? 1 / 0 : t2.getTime() + n2;
        }
        return "Infinity" == this.expires ? 1 / 0 : this.expires ? this.expires.getTime() : void 0;
      }
      expiryDate(e2) {
        const t2 = this.expiryTime(e2);
        return t2 == 1 / 0 ? /* @__PURE__ */ new Date(2147483647e3) : t2 == -1 / 0 ? /* @__PURE__ */ new Date(0) : null == t2 ? void 0 : new Date(t2);
      }
      isPersistent() {
        return null != this.maxAge || "Infinity" != this.expires;
      }
      canonicalizedDomain() {
        return (0, d.canonicalDomain)(this.domain);
      }
      cdomain() {
        return (0, d.canonicalDomain)(this.domain);
      }
      static parse(e2, t2) {
        return (function(e3, t3) {
          if (a.isEmptyString(e3) || !a.isString(e3)) return;
          const r2 = (e3 = e3.trim()).indexOf(";"), n2 = g(-1 === r2 ? e3 : e3.slice(0, r2), t3?.loose ?? false);
          if (!n2) return;
          if (-1 === r2) return n2;
          const s2 = e3.slice(r2 + 1).trim();
          if (0 === s2.length) return n2;
          const o2 = s2.split(";");
          for (; o2.length; ) {
            const e4 = (o2.shift() ?? "").trim();
            if (0 === e4.length) continue;
            const t4 = e4.indexOf("=");
            let r3, s3;
            switch (-1 === t4 ? (r3 = e4, s3 = null) : (r3 = e4.slice(0, t4), s3 = e4.slice(t4 + 1)), r3 = r3.trim().toLowerCase(), s3 && (s3 = s3.trim()), r3) {
              case "expires":
                if (s3) {
                  const e5 = (0, u.parseDate)(s3);
                  e5 && (n2.expires = e5);
                }
                break;
              case "max-age":
                if (s3 && /^-?[0-9]+$/.test(s3)) {
                  const e5 = parseInt(s3, 10);
                  n2.setMaxAge(e5);
                }
                break;
              case "domain":
                if (s3) {
                  const e5 = s3.trim().replace(/^\./, "");
                  e5 && (n2.domain = e5.toLowerCase());
                }
                break;
              case "path":
                n2.path = s3 && "/" === s3[0] ? s3 : null;
                break;
              case "secure":
                n2.secure = true;
                break;
              case "httponly":
                n2.httpOnly = true;
                break;
              case "samesite":
                switch (s3 ? s3.toLowerCase() : "") {
                  case "strict":
                    n2.sameSite = "strict";
                    break;
                  case "lax":
                    n2.sameSite = "lax";
                    break;
                  case "none":
                    n2.sameSite = "none";
                    break;
                  default:
                    n2.sameSite = void 0;
                }
                break;
              default:
                n2.extensions = n2.extensions || [], n2.extensions.push(e4);
            }
          }
          return n2;
        })(e2, t2);
      }
      static fromJSON(e2) {
        return y(e2);
      }
    }
    t.Cookie = v, v.cookiesCreated = 0, v.sameSiteLevel = { strict: 3, lax: 2, none: 1 }, v.sameSiteCanonical = { strict: "Strict", lax: "Lax" }, v.serializableProperties = ["key", "value", "expires", "maxAge", "domain", "path", "secure", "httpOnly", "extensions", "hostOnly", "pathIsDefault", "creation", "lastAccessed", "sameSite"];
  }