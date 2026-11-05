// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 6066 range:433207..450192
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6066: function(e, t, r) {
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
    Object.defineProperty(t, "__esModule", { value: true }), t.CookieJar = void 0;
    const i = r(16098), a = o(r(82715)), c = r(82715), l = r(46595), u = r(56218), d = r(80798), p = r(95379), m = r(95779), h = r(23779), f = r(21548), g = r(83707), y = r(18128), w = r(85024), v = r(19414), _ = { loose: false, sameSiteContext: void 0, ignoreError: false, http: true }, A = { http: true, expire: true, allPaths: false, sameSiteContext: void 0, sort: void 0 }, S = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
    function b(e2) {
      if (e2 && "object" == typeof e2 && "hostname" in e2 && "string" == typeof e2.hostname && "pathname" in e2 && "string" == typeof e2.pathname && "protocol" in e2 && "string" == typeof e2.protocol) return { hostname: e2.hostname, pathname: e2.pathname, protocol: e2.protocol };
      if ("string" != typeof e2) throw new c.ParameterError("`url` argument is not a string or URL.");
      try {
        return new URL(decodeURI(e2));
      } catch {
        return new URL(e2);
      }
    }
    function E(e2) {
      const t2 = String(e2).toLowerCase();
      return "none" === t2 || "lax" === t2 || "strict" === t2 ? t2 : void 0;
    }
    function I(e2) {
      const t2 = e2.toLowerCase();
      switch (t2) {
        case f.PrefixSecurityEnum.STRICT:
        case f.PrefixSecurityEnum.SILENT:
        case f.PrefixSecurityEnum.DISABLED:
          return t2;
        default:
          return f.PrefixSecurityEnum.SILENT;
      }
    }
    class C {
      constructor(e2, t2) {
        "boolean" == typeof t2 && (t2 = { rejectPublicSuffixes: t2 }), this.rejectPublicSuffixes = t2?.rejectPublicSuffixes ?? true, this.enableLooseMode = t2?.looseMode ?? false, this.allowSpecialUseDomain = t2?.allowSpecialUseDomain ?? true, this.prefixSecurity = I(t2?.prefixSecurity ?? "silent"), this.store = e2 ?? new u.MemoryCookieStore();
      }
      callSync(e2) {
        if (!this.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        let t2, r2 = null;
        try {
          e2.call(this, (e3, n2) => {
            r2 = e3, t2 = n2;
          });
        } catch (e3) {
          r2 = e3;
        }
        if (r2) throw r2;
        return t2;
      }
      setCookie(e2, t2, r2, n2) {
        "function" == typeof r2 && (n2 = r2, r2 = void 0);
        const s2 = (0, m.createPromiseCallback)(n2), o2 = s2.callback;
        let c2;
        try {
          if ("string" == typeof t2 && a.validate(a.isNonEmptyString(t2), n2, (0, m.safeToString)(r2)), c2 = b(t2), "function" == typeof t2) return s2.reject(new Error("No URL was specified"));
          if ("function" == typeof r2 && (r2 = _), a.validate("function" == typeof o2, o2), !a.isNonEmptyString(e2) && !a.isObject(e2) && e2 instanceof String && 0 == e2.length) return s2.resolve(void 0);
        } catch (e3) {
          return s2.reject(e3);
        }
        const l2 = (0, h.canonicalDomain)(c2.hostname) ?? null, u2 = r2?.loose || this.enableLooseMode;
        let d2 = null;
        if (r2?.sameSiteContext && (d2 = E(r2.sameSiteContext), !d2)) return s2.reject(new Error(S));
        if ("string" == typeof e2 || e2 instanceof String) {
          const t3 = p.Cookie.parse(e2.toString(), { loose: u2 });
          if (!t3) {
            const e3 = new Error("Cookie failed to parse");
            return r2?.ignoreError ? s2.resolve(void 0) : s2.reject(e3);
          }
          e2 = t3;
        } else if (!(e2 instanceof p.Cookie)) {
          const e3 = new Error("First argument to setCookie must be a Cookie object or string");
          return r2?.ignoreError ? s2.resolve(void 0) : s2.reject(e3);
        }
        const w2 = r2?.now || /* @__PURE__ */ new Date();
        if (this.rejectPublicSuffixes && e2.domain) try {
          const t3 = e2.cdomain();
          if (null == ("string" == typeof t3 ? (0, i.getPublicSuffix)(t3, { allowSpecialUseDomain: this.allowSpecialUseDomain, ignoreError: r2?.ignoreError }) : null) && !f.IP_V6_REGEX_OBJECT.test(e2.domain)) {
            const e3 = new Error("Cookie has domain set to a public suffix");
            return r2?.ignoreError ? s2.resolve(void 0) : s2.reject(e3);
          }
        } catch (e3) {
          return r2?.ignoreError ? s2.resolve(void 0) : s2.reject(e3);
        }
        if (e2.domain) {
          if (!(0, y.domainMatch)(l2 ?? void 0, e2.cdomain() ?? void 0, false)) {
            const t3 = new Error(`Cookie not in this host's domain. Cookie:${e2.cdomain() ?? "null"} Request:${l2 ?? "null"}`);
            return r2?.ignoreError ? s2.resolve(void 0) : s2.reject(t3);
          }
          null == e2.hostOnly && (e2.hostOnly = false);
        } else e2.hostOnly = true, e2.domain = l2;
        if (e2.path && "/" === e2.path[0] || (e2.path = (0, g.defaultPath)(c2.pathname), e2.pathIsDefault = true), false === r2?.http && e2.httpOnly) {
          const e3 = new Error("Cookie is HttpOnly and this isn't an HTTP API");
          return r2.ignoreError ? s2.resolve(void 0) : s2.reject(e3);
        }
        if ("none" !== e2.sameSite && void 0 !== e2.sameSite && d2 && "none" === d2) {
          const e3 = new Error("Cookie is SameSite but this is a cross-origin request");
          return r2?.ignoreError ? s2.resolve(void 0) : s2.reject(e3);
        }
        const v2 = this.prefixSecurity === f.PrefixSecurityEnum.SILENT;
        if (!(this.prefixSecurity === f.PrefixSecurityEnum.DISABLED)) {
          let t3, n3 = false;
          if (!(function(e3) {
            return !("string" == typeof e3.key && e3.key.startsWith("__Secure-")) || e3.secure;
          })(e2) ? (n3 = true, t3 = "Cookie has __Secure prefix but Secure attribute is not set") : (function(e3) {
            return !("string" == typeof e3.key && e3.key.startsWith("__Host-")) || Boolean(e3.secure && e3.hostOnly && null != e3.path && "/" === e3.path);
          })(e2) || (n3 = true, t3 = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'"), n3) return r2?.ignoreError || v2 ? s2.resolve(void 0) : s2.reject(new Error(t3));
        }
        const A2 = this.store;
        A2.updateCookie || (A2.updateCookie = async function(e3, t3, r3) {
          return this.putCookie(t3).then(() => r3?.(null), (e4) => r3?.(e4));
        });
        return A2.findCookie(e2.domain, e2.path, e2.key, function(t3, n3) {
          if (t3) return void o2(t3);
          const s3 = function(t4) {
            t4 ? o2(t4) : o2(null, "string" == typeof e2 ? void 0 : e2);
          };
          if (n3) {
            if (r2 && "http" in r2 && false === r2.http && n3.httpOnly) return t3 = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), void (r2.ignoreError ? o2(null, void 0) : o2(t3));
            e2 instanceof p.Cookie && (e2.creation = n3.creation, e2.creationIndex = n3.creationIndex, e2.lastAccessed = w2, A2.updateCookie(n3, e2, s3));
          } else e2 instanceof p.Cookie && (e2.creation = e2.lastAccessed = w2, A2.putCookie(e2, s3));
        }), s2.promise;
      }
      setCookieSync(e2, t2, r2) {
        const n2 = r2 ? this.setCookie.bind(this, e2, t2, r2) : this.setCookie.bind(this, e2, t2);
        return this.callSync(n2);
      }
      getCookies(e2, t2, r2) {
        "function" == typeof t2 ? (r2 = t2, t2 = A) : void 0 === t2 && (t2 = A);
        const n2 = (0, m.createPromiseCallback)(r2), s2 = n2.callback;
        let o2;
        try {
          "string" == typeof e2 && a.validate(a.isNonEmptyString(e2), s2, e2), o2 = b(e2), a.validate(a.isObject(t2), s2, (0, m.safeToString)(t2)), a.validate("function" == typeof s2, s2);
        } catch (e3) {
          return n2.reject(e3);
        }
        const i2 = (0, h.canonicalDomain)(o2.hostname), c2 = o2.pathname || "/", l2 = o2.protocol && ("https:" == o2.protocol || "wss:" == o2.protocol);
        let u2 = 0;
        if (t2.sameSiteContext) {
          const e3 = E(t2.sameSiteContext);
          if (null == e3) return n2.reject(new Error(S));
          if (u2 = p.Cookie.sameSiteLevel[e3], !u2) return n2.reject(new Error(S));
        }
        const f2 = t2.http ?? true, g2 = Date.now(), v2 = t2.expire ?? true, _2 = t2.allPaths ?? false, I2 = this.store;
        function C2(e3) {
          if (e3.hostOnly) {
            if (e3.domain != i2) return false;
          } else if (!(0, y.domainMatch)(i2 ?? void 0, e3.domain ?? void 0, false)) return false;
          if (!_2 && "string" == typeof e3.path && !(0, d.pathMatch)(c2, e3.path)) return false;
          if (e3.secure && !l2) return false;
          if (e3.httpOnly && !f2) return false;
          if (u2) {
            let t4;
            if (t4 = "lax" === e3.sameSite ? p.Cookie.sameSiteLevel.lax : "strict" === e3.sameSite ? p.Cookie.sameSiteLevel.strict : p.Cookie.sameSiteLevel.none, t4 > u2) return false;
          }
          const t3 = e3.expiryTime();
          return !(v2 && null != t3 && t3 <= g2) || (I2.removeCookie(e3.domain, e3.path, e3.key, () => {
          }), false);
        }
        return I2.findCookies(i2, _2 ? null : c2, this.allowSpecialUseDomain, (e3, r3) => {
          if (e3) return void s2(e3);
          if (null == r3) return void s2(null, []);
          r3 = r3.filter(C2), "sort" in t2 && false !== t2.sort && (r3 = r3.sort(w.cookieCompare));
          const n3 = /* @__PURE__ */ new Date();
          for (const e4 of r3) e4.lastAccessed = n3;
          s2(null, r3);
        }), n2.promise;
      }
      getCookiesSync(e2, t2) {
        return this.callSync(this.getCookies.bind(this, e2, t2)) ?? [];
      }
      getCookieString(e2, t2, r2) {
        "function" == typeof t2 && (r2 = t2, t2 = void 0);
        const n2 = (0, m.createPromiseCallback)(r2);
        return this.getCookies(e2, t2, function(e3, t3) {
          e3 ? n2.callback(e3) : n2.callback(null, t3?.sort(w.cookieCompare).map((e4) => e4.cookieString()).join("; "));
        }), n2.promise;
      }
      getCookieStringSync(e2, t2) {
        return this.callSync(t2 ? this.getCookieString.bind(this, e2, t2) : this.getCookieString.bind(this, e2)) ?? "";
      }
      getSetCookieStrings(e2, t2, r2) {
        "function" == typeof t2 && (r2 = t2, t2 = void 0);
        const n2 = (0, m.createPromiseCallback)(r2);
        return this.getCookies(e2, t2, function(e3, t3) {
          e3 ? n2.callback(e3) : n2.callback(null, t3?.map((e4) => e4.toString()));
        }), n2.promise;
      }
      getSetCookieStringsSync(e2, t2 = {}) {
        return this.callSync(this.getSetCookieStrings.bind(this, e2, t2)) ?? [];
      }
      serialize(e2) {
        const t2 = (0, m.createPromiseCallback)(e2);
        let r2 = this.store.constructor.name;
        a.isObject(r2) && (r2 = null);
        const n2 = { version: `tough-cookie@${v.version}`, storeType: r2, rejectPublicSuffixes: this.rejectPublicSuffixes, enableLooseMode: this.enableLooseMode, allowSpecialUseDomain: this.allowSpecialUseDomain, prefixSecurity: I(this.prefixSecurity), cookies: [] };
        return "function" != typeof this.store.getAllCookies ? t2.reject(new Error("store does not support getAllCookies and cannot be serialized")) : (this.store.getAllCookies((e3, r3) => {
          e3 ? t2.callback(e3) : null != r3 ? (n2.cookies = r3.map((e4) => {
            const t3 = e4.toJSON();
            return delete t3.creationIndex, t3;
          }), t2.callback(null, n2)) : t2.callback(null, n2);
        }), t2.promise);
      }
      serializeSync() {
        return this.callSync((e2) => {
          this.serialize(e2);
        });
      }
      toJSON() {
        return this.serializeSync();
      }
      _importCookies(e2, t2) {
        let r2;
        if (e2 && "object" == typeof e2 && (0, m.inOperator)("cookies", e2) && Array.isArray(e2.cookies) && (r2 = e2.cookies), !r2) return void t2(new Error("serialized jar has no cookies array"), void 0);
        r2 = r2.slice();
        const n2 = (e3) => {
          if (e3) t2(e3, void 0);
          else if (Array.isArray(r2)) {
            if (!r2.length) return void t2(e3, this);
            let s2;
            try {
              s2 = p.Cookie.fromJSON(r2.shift());
            } catch (e4) {
              return void t2(e4 instanceof Error ? e4 : new Error(), void 0);
            }
            if (void 0 === s2) return void n2(null);
            this.store.putCookie(s2, n2);
          }
        };
        n2(null);
      }
      _importCookiesSync(e2) {
        this.callSync(this._importCookies.bind(this, e2));
      }
      clone(e2, t2) {
        "function" == typeof e2 && (t2 = e2, e2 = void 0);
        const r2 = (0, m.createPromiseCallback)(t2), n2 = r2.callback;
        return this.serialize((t3, s2) => t3 ? r2.reject(t3) : C.deserialize(s2 ?? "", e2, n2)), r2.promise;
      }
      _cloneSync(e2) {
        const t2 = e2 && "function" != typeof e2 ? this.clone.bind(this, e2) : this.clone.bind(this);
        return this.callSync((e3) => {
          t2(e3);
        });
      }
      cloneSync(e2) {
        if (!e2) return this._cloneSync();
        if (!e2.synchronous) throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
        return this._cloneSync(e2);
      }
      removeAllCookies(e2) {
        const t2 = (0, m.createPromiseCallback)(e2), r2 = t2.callback, n2 = this.store;
        return "function" == typeof n2.removeAllCookies && n2.removeAllCookies !== l.Store.prototype.removeAllCookies ? (n2.removeAllCookies(r2), t2.promise) : (n2.getAllCookies((e3, t3) => {
          if (e3) return void r2(e3);
          if (t3 || (t3 = []), 0 === t3.length) return void r2(null, void 0);
          let s2 = 0;
          const o2 = [], i2 = function(e4) {
            e4 && o2.push(e4), s2++, s2 !== t3.length || (o2[0] ? r2(o2[0]) : r2(null, void 0));
          };
          t3.forEach((e4) => {
            n2.removeCookie(e4.domain, e4.path, e4.key, i2);
          });
        }), t2.promise);
      }
      removeAllCookiesSync() {
        this.callSync((e2) => {
          this.removeAllCookies(e2);
        });
      }
      static deserialize(e2, t2, r2) {
        "function" == typeof t2 && (r2 = t2, t2 = void 0);
        const n2 = (0, m.createPromiseCallback)(r2);
        let s2;
        if ("string" == typeof e2) try {
          s2 = JSON.parse(e2);
        } catch (e3) {
          return n2.reject(e3 instanceof Error ? e3 : new Error());
        }
        else s2 = e2;
        const o2 = (e3) => s2 && "object" == typeof s2 && (0, m.inOperator)(e3, s2) ? s2[e3] : void 0, i2 = (e3) => {
          const t3 = o2(e3);
          return "boolean" == typeof t3 ? t3 : void 0;
        }, a2 = new C(t2, { rejectPublicSuffixes: i2("rejectPublicSuffixes"), looseMode: i2("enableLooseMode"), allowSpecialUseDomain: i2("allowSpecialUseDomain"), prefixSecurity: I(((e3) => {
          const t3 = o2(e3);
          return "string" == typeof t3 ? t3 : void 0;
        })("prefixSecurity") ?? "silent") });
        return a2._importCookies(s2, (e3) => {
          e3 ? n2.callback(e3) : n2.callback(null, a2);
        }), n2.promise;
      }
      static deserializeSync(e2, t2) {
        const r2 = "string" == typeof e2 ? JSON.parse(e2) : e2, n2 = (e3) => r2 && "object" == typeof r2 && (0, m.inOperator)(e3, r2) ? r2[e3] : void 0, s2 = (e3) => {
          const t3 = n2(e3);
          return "boolean" == typeof t3 ? t3 : void 0;
        }, o2 = new C(t2, { rejectPublicSuffixes: s2("rejectPublicSuffixes"), looseMode: s2("enableLooseMode"), allowSpecialUseDomain: s2("allowSpecialUseDomain"), prefixSecurity: I(((e3) => {
          const t3 = n2(e3);
          return "string" == typeof t3 ? t3 : void 0;
        })("prefixSecurity") ?? "silent") });
        if (!o2.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        return o2._importCookiesSync(r2), o2;
      }
      static fromJSON(e2, t2) {
        return C.deserializeSync(e2, t2);
      }
    }
    t.CookieJar = C;
  }