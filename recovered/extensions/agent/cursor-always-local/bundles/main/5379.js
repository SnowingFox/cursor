// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5379 range:1235283..1247675
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5379: function(t2, e2, r2) {
    "use strict";
    var n2 = this && this.__createBinding || (Object.create ? function(t3, e3, r3, n3) {
      void 0 === n3 && (n3 = r3);
      var s3 = Object.getOwnPropertyDescriptor(e3, r3);
      s3 && !("get" in s3 ? !e3.__esModule : s3.writable || s3.configurable) || (s3 = { enumerable: true, get: function() {
        return e3[r3];
      } }), Object.defineProperty(t3, n3, s3);
    } : function(t3, e3, r3, n3) {
      void 0 === n3 && (n3 = r3), t3[n3] = e3[r3];
    }), s2 = this && this.__setModuleDefault || (Object.create ? function(t3, e3) {
      Object.defineProperty(t3, "default", { enumerable: true, value: e3 });
    } : function(t3, e3) {
      t3.default = e3;
    }), i2 = this && this.__importStar || function(t3) {
      if (t3 && t3.__esModule) return t3;
      var e3 = {};
      if (null != t3) for (var r3 in t3) "default" !== r3 && Object.prototype.hasOwnProperty.call(t3, r3) && n2(e3, t3, r3);
      return s2(e3, t3), e3;
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Cookie = void 0;
    const o2 = r2(6098), a = i2(r2(2715)), u = r2(5779), c = r2(2658), l = r2(5606), m = r2(3779), d = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, f = /[\x20-\x3A\x3C-\x7E]+/, p = /[\x00-\x1F]/, h = ["\n", "\r", "\0"];
    function g(t3, e3) {
      let r3, n3, s3 = (t3 = (function(t4) {
        if (a.isEmptyString(t4)) return t4;
        for (let e4 = 0; e4 < h.length; e4++) {
          const r4 = h[e4], n4 = r4 ? t4.indexOf(r4) : -1;
          -1 !== n4 && (t4 = t4.slice(0, n4));
        }
        return t4;
      })(t3)).indexOf("=");
      if (e3) 0 === s3 && (s3 = (t3 = t3.substring(1)).indexOf("="));
      else if (s3 <= 0) return;
      if (s3 <= 0 ? (r3 = "", n3 = t3.trim()) : (r3 = t3.slice(0, s3).trim(), n3 = t3.slice(s3 + 1).trim()), p.test(r3) || p.test(n3)) return;
      const i3 = new y();
      return i3.key = r3, i3.value = n3, i3;
    }
    function A(t3) {
      if (!t3 || a.isEmptyString(t3)) return;
      let e3;
      if ("string" == typeof t3) try {
        e3 = JSON.parse(t3);
      } catch {
        return;
      }
      else e3 = t3;
      const r3 = new y();
      return y.serializableProperties.forEach((t4) => {
        if (e3 && "object" == typeof e3 && (0, u.inOperator)(t4, e3)) {
          const n3 = e3[t4];
          if (void 0 === n3) return;
          if ((0, u.inOperator)(t4, _) && n3 === _[t4]) return;
          switch (t4) {
            case "key":
            case "value":
            case "sameSite":
              "string" == typeof n3 && (r3[t4] = n3);
              break;
            case "expires":
            case "creation":
            case "lastAccessed":
              "number" == typeof n3 || "string" == typeof n3 || n3 instanceof Date ? r3[t4] = "Infinity" == e3[t4] ? "Infinity" : new Date(n3) : null === n3 && (r3[t4] = null);
              break;
            case "maxAge":
              "number" != typeof n3 && "Infinity" !== n3 && "-Infinity" !== n3 || (r3[t4] = n3);
              break;
            case "domain":
            case "path":
              "string" != typeof n3 && null !== n3 || (r3[t4] = n3);
              break;
            case "secure":
            case "httpOnly":
              "boolean" == typeof n3 && (r3[t4] = n3);
              break;
            case "extensions":
              Array.isArray(n3) && n3.every((t5) => "string" == typeof t5) && (r3[t4] = n3);
              break;
            case "hostOnly":
            case "pathIsDefault":
              "boolean" != typeof n3 && null !== n3 || (r3[t4] = n3);
          }
        }
      }), r3;
    }
    const _ = { key: "", value: "", expires: "Infinity", maxAge: null, domain: null, path: null, secure: false, httpOnly: false, extensions: null, hostOnly: null, pathIsDefault: null, creation: null, lastAccessed: null, sameSite: void 0 };
    class y {
      constructor(t3 = {}) {
        this.key = t3.key ?? _.key, this.value = t3.value ?? _.value, this.expires = t3.expires ?? _.expires, this.maxAge = t3.maxAge ?? _.maxAge, this.domain = t3.domain ?? _.domain, this.path = t3.path ?? _.path, this.secure = t3.secure ?? _.secure, this.httpOnly = t3.httpOnly ?? _.httpOnly, this.extensions = t3.extensions ?? _.extensions, this.creation = t3.creation ?? _.creation, this.hostOnly = t3.hostOnly ?? _.hostOnly, this.pathIsDefault = t3.pathIsDefault ?? _.pathIsDefault, this.lastAccessed = t3.lastAccessed ?? _.lastAccessed, this.sameSite = t3.sameSite ?? _.sameSite, this.creation = t3.creation ?? /* @__PURE__ */ new Date(), Object.defineProperty(this, "creationIndex", { configurable: false, enumerable: false, writable: true, value: ++y.cookiesCreated }), this.creationIndex = y.cookiesCreated;
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        const t3 = Date.now(), e3 = null != this.hostOnly ? this.hostOnly.toString() : "?", r3 = this.creation && "Infinity" !== this.creation ? `${String(t3 - this.creation.getTime())}ms` : "?", n3 = this.lastAccessed && "Infinity" !== this.lastAccessed ? `${String(t3 - this.lastAccessed.getTime())}ms` : "?";
        return `Cookie="${this.toString()}; hostOnly=${e3}; aAge=${n3}; cAge=${r3}"`;
      }
      toJSON() {
        const t3 = {};
        for (const e3 of y.serializableProperties) {
          const r3 = this[e3];
          if (r3 !== _[e3]) switch (e3) {
            case "key":
            case "value":
            case "sameSite":
              "string" == typeof r3 && (t3[e3] = r3);
              break;
            case "expires":
            case "creation":
            case "lastAccessed":
              "number" == typeof r3 || "string" == typeof r3 || r3 instanceof Date ? t3[e3] = "Infinity" == r3 ? "Infinity" : new Date(r3).toISOString() : null === r3 && (t3[e3] = null);
              break;
            case "maxAge":
              "number" != typeof r3 && "Infinity" !== r3 && "-Infinity" !== r3 || (t3[e3] = r3);
              break;
            case "domain":
            case "path":
              "string" != typeof r3 && null !== r3 || (t3[e3] = r3);
              break;
            case "secure":
            case "httpOnly":
              "boolean" == typeof r3 && (t3[e3] = r3);
              break;
            case "extensions":
              Array.isArray(r3) && (t3[e3] = r3);
              break;
            case "hostOnly":
            case "pathIsDefault":
              "boolean" != typeof r3 && null !== r3 || (t3[e3] = r3);
          }
        }
        return t3;
      }
      clone() {
        return A(this.toJSON());
      }
      validate() {
        if (!this.value || !d.test(this.value)) return false;
        if (!("Infinity" == this.expires || this.expires instanceof Date || (0, l.parseDate)(this.expires))) return false;
        if (null != this.maxAge && "Infinity" !== this.maxAge && ("-Infinity" === this.maxAge || this.maxAge <= 0)) return false;
        if (null != this.path && !f.test(this.path)) return false;
        const t3 = this.cdomain();
        if (t3) {
          if (t3.match(/\.$/)) return false;
          if (null == (0, o2.getPublicSuffix)(t3)) return false;
        }
        return true;
      }
      setExpires(t3) {
        t3 instanceof Date ? this.expires = t3 : this.expires = (0, l.parseDate)(t3) || "Infinity";
      }
      setMaxAge(t3) {
        this.maxAge = t3 === 1 / 0 ? "Infinity" : t3 === -1 / 0 ? "-Infinity" : t3;
      }
      cookieString() {
        const t3 = this.value || "";
        return this.key ? `${this.key}=${t3}` : t3;
      }
      toString() {
        let t3 = this.cookieString();
        return "Infinity" != this.expires && this.expires instanceof Date && (t3 += `; Expires=${(0, c.formatDate)(this.expires)}`), null != this.maxAge && this.maxAge != 1 / 0 && (t3 += `; Max-Age=${String(this.maxAge)}`), this.domain && !this.hostOnly && (t3 += `; Domain=${this.domain}`), this.path && (t3 += `; Path=${this.path}`), this.secure && (t3 += "; Secure"), this.httpOnly && (t3 += "; HttpOnly"), this.sameSite && "none" !== this.sameSite && (this.sameSite.toLowerCase() === y.sameSiteCanonical.lax.toLowerCase() ? t3 += `; SameSite=${y.sameSiteCanonical.lax}` : this.sameSite.toLowerCase() === y.sameSiteCanonical.strict.toLowerCase() ? t3 += `; SameSite=${y.sameSiteCanonical.strict}` : t3 += `; SameSite=${this.sameSite}`), this.extensions && this.extensions.forEach((e3) => {
          t3 += `; ${e3}`;
        }), t3;
      }
      TTL(t3 = Date.now()) {
        if (null != this.maxAge && "number" == typeof this.maxAge) return this.maxAge <= 0 ? 0 : 1e3 * this.maxAge;
        const e3 = this.expires;
        return "Infinity" === e3 ? 1 / 0 : (e3?.getTime() ?? t3) - (t3 || Date.now());
      }
      expiryTime(t3) {
        if (null != this.maxAge) {
          const e3 = t3 || this.lastAccessed || /* @__PURE__ */ new Date(), r3 = "number" == typeof this.maxAge ? this.maxAge : -1 / 0, n3 = r3 <= 0 ? -1 / 0 : 1e3 * r3;
          return "Infinity" === e3 ? 1 / 0 : e3.getTime() + n3;
        }
        return "Infinity" == this.expires ? 1 / 0 : this.expires ? this.expires.getTime() : void 0;
      }
      expiryDate(t3) {
        const e3 = this.expiryTime(t3);
        return e3 == 1 / 0 ? /* @__PURE__ */ new Date(2147483647e3) : e3 == -1 / 0 ? /* @__PURE__ */ new Date(0) : null == e3 ? void 0 : new Date(e3);
      }
      isPersistent() {
        return null != this.maxAge || "Infinity" != this.expires;
      }
      canonicalizedDomain() {
        return (0, m.canonicalDomain)(this.domain);
      }
      cdomain() {
        return (0, m.canonicalDomain)(this.domain);
      }
      static parse(t3, e3) {
        return (function(t4, e4) {
          if (a.isEmptyString(t4) || !a.isString(t4)) return;
          const r3 = (t4 = t4.trim()).indexOf(";"), n3 = g(-1 === r3 ? t4 : t4.slice(0, r3), e4?.loose ?? false);
          if (!n3) return;
          if (-1 === r3) return n3;
          const s3 = t4.slice(r3 + 1).trim();
          if (0 === s3.length) return n3;
          const i3 = s3.split(";");
          for (; i3.length; ) {
            const t5 = (i3.shift() ?? "").trim();
            if (0 === t5.length) continue;
            const e5 = t5.indexOf("=");
            let r4, s4;
            switch (-1 === e5 ? (r4 = t5, s4 = null) : (r4 = t5.slice(0, e5), s4 = t5.slice(e5 + 1)), r4 = r4.trim().toLowerCase(), s4 && (s4 = s4.trim()), r4) {
              case "expires":
                if (s4) {
                  const t6 = (0, l.parseDate)(s4);
                  t6 && (n3.expires = t6);
                }
                break;
              case "max-age":
                if (s4 && /^-?[0-9]+$/.test(s4)) {
                  const t6 = parseInt(s4, 10);
                  n3.setMaxAge(t6);
                }
                break;
              case "domain":
                if (s4) {
                  const t6 = s4.trim().replace(/^\./, "");
                  t6 && (n3.domain = t6.toLowerCase());
                }
                break;
              case "path":
                n3.path = s4 && "/" === s4[0] ? s4 : null;
                break;
              case "secure":
                n3.secure = true;
                break;
              case "httponly":
                n3.httpOnly = true;
                break;
              case "samesite":
                switch (s4 ? s4.toLowerCase() : "") {
                  case "strict":
                    n3.sameSite = "strict";
                    break;
                  case "lax":
                    n3.sameSite = "lax";
                    break;
                  case "none":
                    n3.sameSite = "none";
                    break;
                  default:
                    n3.sameSite = void 0;
                }
                break;
              default:
                n3.extensions = n3.extensions || [], n3.extensions.push(t5);
            }
          }
          return n3;
        })(t3, e3);
      }
      static fromJSON(t3) {
        return A(t3);
      }
    }
    e2.Cookie = y, y.cookiesCreated = 0, y.sameSiteLevel = { strict: 3, lax: 2, none: 1 }, y.sameSiteCanonical = { strict: "Strict", lax: "Lax" }, y.serializableProperties = ["key", "value", "expires", "maxAge", "domain", "path", "secure", "httpOnly", "extensions", "hostOnly", "pathIsDefault", "creation", "lastAccessed", "sameSite"];
  }