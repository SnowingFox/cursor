// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6066 range:2812105..2829103
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6066: function(t2, e2, r2) {
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
    Object.defineProperty(e2, "__esModule", { value: true }), e2.CookieJar = void 0;
    const o2 = r2(6098), a = i2(r2(2715)), u = r2(2715), c = r2(6595), l = r2(6218), m = r2(798), d = r2(5379), f = r2(5779), p = r2(3779), h = r2(1548), g = r2(3707), A = r2(8128), _ = r2(5024), y = r2(9414), w = { loose: false, sameSiteContext: void 0, ignoreError: false, http: true }, S = { http: true, expire: true, allPaths: false, sameSiteContext: void 0, sort: void 0 }, J = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
    function B(t3) {
      if (t3 && "object" == typeof t3 && "hostname" in t3 && "string" == typeof t3.hostname && "pathname" in t3 && "string" == typeof t3.pathname && "protocol" in t3 && "string" == typeof t3.protocol) return { hostname: t3.hostname, pathname: t3.pathname, protocol: t3.protocol };
      if ("string" != typeof t3) throw new u.ParameterError("`url` argument is not a string or URL.");
      try {
        return new URL(decodeURI(t3));
      } catch {
        return new URL(t3);
      }
    }
    function E(t3) {
      const e3 = String(t3).toLowerCase();
      return "none" === e3 || "lax" === e3 || "strict" === e3 ? e3 : void 0;
    }
    function I(t3) {
      const e3 = t3.toLowerCase();
      switch (e3) {
        case h.PrefixSecurityEnum.STRICT:
        case h.PrefixSecurityEnum.SILENT:
        case h.PrefixSecurityEnum.DISABLED:
          return e3;
        default:
          return h.PrefixSecurityEnum.SILENT;
      }
    }
    class C {
      constructor(t3, e3) {
        "boolean" == typeof e3 && (e3 = { rejectPublicSuffixes: e3 }), this.rejectPublicSuffixes = e3?.rejectPublicSuffixes ?? true, this.enableLooseMode = e3?.looseMode ?? false, this.allowSpecialUseDomain = e3?.allowSpecialUseDomain ?? true, this.prefixSecurity = I(e3?.prefixSecurity ?? "silent"), this.store = t3 ?? new l.MemoryCookieStore();
      }
      callSync(t3) {
        if (!this.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        let e3, r3 = null;
        try {
          t3.call(this, (t4, n3) => {
            r3 = t4, e3 = n3;
          });
        } catch (t4) {
          r3 = t4;
        }
        if (r3) throw r3;
        return e3;
      }
      setCookie(t3, e3, r3, n3) {
        "function" == typeof r3 && (n3 = r3, r3 = void 0);
        const s3 = (0, f.createPromiseCallback)(n3), i3 = s3.callback;
        let u2;
        try {
          if ("string" == typeof e3 && a.validate(a.isNonEmptyString(e3), n3, (0, f.safeToString)(r3)), u2 = B(e3), "function" == typeof e3) return s3.reject(new Error("No URL was specified"));
          if ("function" == typeof r3 && (r3 = w), a.validate("function" == typeof i3, i3), !a.isNonEmptyString(t3) && !a.isObject(t3) && t3 instanceof String && 0 == t3.length) return s3.resolve(void 0);
        } catch (t4) {
          return s3.reject(t4);
        }
        const c2 = (0, p.canonicalDomain)(u2.hostname) ?? null, l2 = r3?.loose || this.enableLooseMode;
        let m2 = null;
        if (r3?.sameSiteContext && (m2 = E(r3.sameSiteContext), !m2)) return s3.reject(new Error(J));
        if ("string" == typeof t3 || t3 instanceof String) {
          const e4 = d.Cookie.parse(t3.toString(), { loose: l2 });
          if (!e4) {
            const t4 = new Error("Cookie failed to parse");
            return r3?.ignoreError ? s3.resolve(void 0) : s3.reject(t4);
          }
          t3 = e4;
        } else if (!(t3 instanceof d.Cookie)) {
          const t4 = new Error("First argument to setCookie must be a Cookie object or string");
          return r3?.ignoreError ? s3.resolve(void 0) : s3.reject(t4);
        }
        const _2 = r3?.now || /* @__PURE__ */ new Date();
        if (this.rejectPublicSuffixes && t3.domain) try {
          const e4 = t3.cdomain();
          if (null == ("string" == typeof e4 ? (0, o2.getPublicSuffix)(e4, { allowSpecialUseDomain: this.allowSpecialUseDomain, ignoreError: r3?.ignoreError }) : null) && !h.IP_V6_REGEX_OBJECT.test(t3.domain)) {
            const t4 = new Error("Cookie has domain set to a public suffix");
            return r3?.ignoreError ? s3.resolve(void 0) : s3.reject(t4);
          }
        } catch (t4) {
          return r3?.ignoreError ? s3.resolve(void 0) : s3.reject(t4);
        }
        if (t3.domain) {
          if (!(0, A.domainMatch)(c2 ?? void 0, t3.cdomain() ?? void 0, false)) {
            const e4 = new Error(`Cookie not in this host's domain. Cookie:${t3.cdomain() ?? "null"} Request:${c2 ?? "null"}`);
            return r3?.ignoreError ? s3.resolve(void 0) : s3.reject(e4);
          }
          null == t3.hostOnly && (t3.hostOnly = false);
        } else t3.hostOnly = true, t3.domain = c2;
        if (t3.path && "/" === t3.path[0] || (t3.path = (0, g.defaultPath)(u2.pathname), t3.pathIsDefault = true), false === r3?.http && t3.httpOnly) {
          const t4 = new Error("Cookie is HttpOnly and this isn't an HTTP API");
          return r3.ignoreError ? s3.resolve(void 0) : s3.reject(t4);
        }
        if ("none" !== t3.sameSite && void 0 !== t3.sameSite && m2 && "none" === m2) {
          const t4 = new Error("Cookie is SameSite but this is a cross-origin request");
          return r3?.ignoreError ? s3.resolve(void 0) : s3.reject(t4);
        }
        const y2 = this.prefixSecurity === h.PrefixSecurityEnum.SILENT;
        if (!(this.prefixSecurity === h.PrefixSecurityEnum.DISABLED)) {
          let e4, n4 = false;
          if (!(function(t4) {
            return !("string" == typeof t4.key && t4.key.startsWith("__Secure-")) || t4.secure;
          })(t3) ? (n4 = true, e4 = "Cookie has __Secure prefix but Secure attribute is not set") : (function(t4) {
            return !("string" == typeof t4.key && t4.key.startsWith("__Host-")) || Boolean(t4.secure && t4.hostOnly && null != t4.path && "/" === t4.path);
          })(t3) || (n4 = true, e4 = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'"), n4) return r3?.ignoreError || y2 ? s3.resolve(void 0) : s3.reject(new Error(e4));
        }
        const S2 = this.store;
        S2.updateCookie || (S2.updateCookie = async function(t4, e4, r4) {
          return this.putCookie(e4).then(() => r4?.(null), (t5) => r4?.(t5));
        });
        return S2.findCookie(t3.domain, t3.path, t3.key, function(e4, n4) {
          if (e4) return void i3(e4);
          const s4 = function(e5) {
            e5 ? i3(e5) : i3(null, "string" == typeof t3 ? void 0 : t3);
          };
          if (n4) {
            if (r3 && "http" in r3 && false === r3.http && n4.httpOnly) return e4 = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), void (r3.ignoreError ? i3(null, void 0) : i3(e4));
            t3 instanceof d.Cookie && (t3.creation = n4.creation, t3.creationIndex = n4.creationIndex, t3.lastAccessed = _2, S2.updateCookie(n4, t3, s4));
          } else t3 instanceof d.Cookie && (t3.creation = t3.lastAccessed = _2, S2.putCookie(t3, s4));
        }), s3.promise;
      }
      setCookieSync(t3, e3, r3) {
        const n3 = r3 ? this.setCookie.bind(this, t3, e3, r3) : this.setCookie.bind(this, t3, e3);
        return this.callSync(n3);
      }
      getCookies(t3, e3, r3) {
        "function" == typeof e3 ? (r3 = e3, e3 = S) : void 0 === e3 && (e3 = S);
        const n3 = (0, f.createPromiseCallback)(r3), s3 = n3.callback;
        let i3;
        try {
          "string" == typeof t3 && a.validate(a.isNonEmptyString(t3), s3, t3), i3 = B(t3), a.validate(a.isObject(e3), s3, (0, f.safeToString)(e3)), a.validate("function" == typeof s3, s3);
        } catch (t4) {
          return n3.reject(t4);
        }
        const o3 = (0, p.canonicalDomain)(i3.hostname), u2 = i3.pathname || "/", c2 = i3.protocol && ("https:" == i3.protocol || "wss:" == i3.protocol);
        let l2 = 0;
        if (e3.sameSiteContext) {
          const t4 = E(e3.sameSiteContext);
          if (null == t4) return n3.reject(new Error(J));
          if (l2 = d.Cookie.sameSiteLevel[t4], !l2) return n3.reject(new Error(J));
        }
        const h2 = e3.http ?? true, g2 = Date.now(), y2 = e3.expire ?? true, w2 = e3.allPaths ?? false, I2 = this.store;
        function C2(t4) {
          if (t4.hostOnly) {
            if (t4.domain != o3) return false;
          } else if (!(0, A.domainMatch)(o3 ?? void 0, t4.domain ?? void 0, false)) return false;
          if (!w2 && "string" == typeof t4.path && !(0, m.pathMatch)(u2, t4.path)) return false;
          if (t4.secure && !c2) return false;
          if (t4.httpOnly && !h2) return false;
          if (l2) {
            let e5;
            if (e5 = "lax" === t4.sameSite ? d.Cookie.sameSiteLevel.lax : "strict" === t4.sameSite ? d.Cookie.sameSiteLevel.strict : d.Cookie.sameSiteLevel.none, e5 > l2) return false;
          }
          const e4 = t4.expiryTime();
          return !(y2 && null != e4 && e4 <= g2) || (I2.removeCookie(t4.domain, t4.path, t4.key, () => {
          }), false);
        }
        return I2.findCookies(o3, w2 ? null : u2, this.allowSpecialUseDomain, (t4, r4) => {
          if (t4) return void s3(t4);
          if (null == r4) return void s3(null, []);
          r4 = r4.filter(C2), "sort" in e3 && false !== e3.sort && (r4 = r4.sort(_.cookieCompare));
          const n4 = /* @__PURE__ */ new Date();
          for (const t5 of r4) t5.lastAccessed = n4;
          s3(null, r4);
        }), n3.promise;
      }
      getCookiesSync(t3, e3) {
        return this.callSync(this.getCookies.bind(this, t3, e3)) ?? [];
      }
      getCookieString(t3, e3, r3) {
        "function" == typeof e3 && (r3 = e3, e3 = void 0);
        const n3 = (0, f.createPromiseCallback)(r3);
        return this.getCookies(t3, e3, function(t4, e4) {
          t4 ? n3.callback(t4) : n3.callback(null, e4?.sort(_.cookieCompare).map((t5) => t5.cookieString()).join("; "));
        }), n3.promise;
      }
      getCookieStringSync(t3, e3) {
        return this.callSync(e3 ? this.getCookieString.bind(this, t3, e3) : this.getCookieString.bind(this, t3)) ?? "";
      }
      getSetCookieStrings(t3, e3, r3) {
        "function" == typeof e3 && (r3 = e3, e3 = void 0);
        const n3 = (0, f.createPromiseCallback)(r3);
        return this.getCookies(t3, e3, function(t4, e4) {
          t4 ? n3.callback(t4) : n3.callback(null, e4?.map((t5) => t5.toString()));
        }), n3.promise;
      }
      getSetCookieStringsSync(t3, e3 = {}) {
        return this.callSync(this.getSetCookieStrings.bind(this, t3, e3)) ?? [];
      }
      serialize(t3) {
        const e3 = (0, f.createPromiseCallback)(t3);
        let r3 = this.store.constructor.name;
        a.isObject(r3) && (r3 = null);
        const n3 = { version: `tough-cookie@${y.version}`, storeType: r3, rejectPublicSuffixes: this.rejectPublicSuffixes, enableLooseMode: this.enableLooseMode, allowSpecialUseDomain: this.allowSpecialUseDomain, prefixSecurity: I(this.prefixSecurity), cookies: [] };
        return "function" != typeof this.store.getAllCookies ? e3.reject(new Error("store does not support getAllCookies and cannot be serialized")) : (this.store.getAllCookies((t4, r4) => {
          t4 ? e3.callback(t4) : null != r4 ? (n3.cookies = r4.map((t5) => {
            const e4 = t5.toJSON();
            return delete e4.creationIndex, e4;
          }), e3.callback(null, n3)) : e3.callback(null, n3);
        }), e3.promise);
      }
      serializeSync() {
        return this.callSync((t3) => {
          this.serialize(t3);
        });
      }
      toJSON() {
        return this.serializeSync();
      }
      _importCookies(t3, e3) {
        let r3;
        if (t3 && "object" == typeof t3 && (0, f.inOperator)("cookies", t3) && Array.isArray(t3.cookies) && (r3 = t3.cookies), !r3) return void e3(new Error("serialized jar has no cookies array"), void 0);
        r3 = r3.slice();
        const n3 = (t4) => {
          if (t4) e3(t4, void 0);
          else if (Array.isArray(r3)) {
            if (!r3.length) return void e3(t4, this);
            let s3;
            try {
              s3 = d.Cookie.fromJSON(r3.shift());
            } catch (t5) {
              return void e3(t5 instanceof Error ? t5 : new Error(), void 0);
            }
            if (void 0 === s3) return void n3(null);
            this.store.putCookie(s3, n3);
          }
        };
        n3(null);
      }
      _importCookiesSync(t3) {
        this.callSync(this._importCookies.bind(this, t3));
      }
      clone(t3, e3) {
        "function" == typeof t3 && (e3 = t3, t3 = void 0);
        const r3 = (0, f.createPromiseCallback)(e3), n3 = r3.callback;
        return this.serialize((e4, s3) => e4 ? r3.reject(e4) : C.deserialize(s3 ?? "", t3, n3)), r3.promise;
      }
      _cloneSync(t3) {
        const e3 = t3 && "function" != typeof t3 ? this.clone.bind(this, t3) : this.clone.bind(this);
        return this.callSync((t4) => {
          e3(t4);
        });
      }
      cloneSync(t3) {
        if (!t3) return this._cloneSync();
        if (!t3.synchronous) throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
        return this._cloneSync(t3);
      }
      removeAllCookies(t3) {
        const e3 = (0, f.createPromiseCallback)(t3), r3 = e3.callback, n3 = this.store;
        return "function" == typeof n3.removeAllCookies && n3.removeAllCookies !== c.Store.prototype.removeAllCookies ? (n3.removeAllCookies(r3), e3.promise) : (n3.getAllCookies((t4, e4) => {
          if (t4) return void r3(t4);
          if (e4 || (e4 = []), 0 === e4.length) return void r3(null, void 0);
          let s3 = 0;
          const i3 = [], o3 = function(t5) {
            t5 && i3.push(t5), s3++, s3 !== e4.length || (i3[0] ? r3(i3[0]) : r3(null, void 0));
          };
          e4.forEach((t5) => {
            n3.removeCookie(t5.domain, t5.path, t5.key, o3);
          });
        }), e3.promise);
      }
      removeAllCookiesSync() {
        this.callSync((t3) => {
          this.removeAllCookies(t3);
        });
      }
      static deserialize(t3, e3, r3) {
        "function" == typeof e3 && (r3 = e3, e3 = void 0);
        const n3 = (0, f.createPromiseCallback)(r3);
        let s3;
        if ("string" == typeof t3) try {
          s3 = JSON.parse(t3);
        } catch (t4) {
          return n3.reject(t4 instanceof Error ? t4 : new Error());
        }
        else s3 = t3;
        const i3 = (t4) => s3 && "object" == typeof s3 && (0, f.inOperator)(t4, s3) ? s3[t4] : void 0, o3 = (t4) => {
          const e4 = i3(t4);
          return "boolean" == typeof e4 ? e4 : void 0;
        }, a2 = new C(e3, { rejectPublicSuffixes: o3("rejectPublicSuffixes"), looseMode: o3("enableLooseMode"), allowSpecialUseDomain: o3("allowSpecialUseDomain"), prefixSecurity: I(((t4) => {
          const e4 = i3(t4);
          return "string" == typeof e4 ? e4 : void 0;
        })("prefixSecurity") ?? "silent") });
        return a2._importCookies(s3, (t4) => {
          t4 ? n3.callback(t4) : n3.callback(null, a2);
        }), n3.promise;
      }
      static deserializeSync(t3, e3) {
        const r3 = "string" == typeof t3 ? JSON.parse(t3) : t3, n3 = (t4) => r3 && "object" == typeof r3 && (0, f.inOperator)(t4, r3) ? r3[t4] : void 0, s3 = (t4) => {
          const e4 = n3(t4);
          return "boolean" == typeof e4 ? e4 : void 0;
        }, i3 = new C(e3, { rejectPublicSuffixes: s3("rejectPublicSuffixes"), looseMode: s3("enableLooseMode"), allowSpecialUseDomain: s3("allowSpecialUseDomain"), prefixSecurity: I(((t4) => {
          const e4 = n3(t4);
          return "string" == typeof e4 ? e4 : void 0;
        })("prefixSecurity") ?? "silent") });
        if (!i3.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        return i3._importCookiesSync(r3), i3;
      }
      static fromJSON(t3, e3) {
        return C.deserializeSync(t3, e3);
      }
    }
    e2.CookieJar = C;
  }