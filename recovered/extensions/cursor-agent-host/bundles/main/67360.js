// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 67360 range:10484759..10503785
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
67360: (e, t, r) => {
    "use strict";
    r.d(t, { W: () => z });
    var n = r(77598);
    const s = "local-cli-mode";
    function o() {
      return "undefined" != typeof process && "true" === process.env?.CURSOR_AGENT_CLI_LOCAL_MODE;
    }
    function i(e2) {
      return o() ? { ...e2, [s]: "true" } : e2;
    }
    var a = r(31421), c = r(73024), l = r(48161), u = r(76760);
    const d = (0, r(57975).promisify)(a.execFile), p = "x-cursor-mdm-signin-policy", m = "sign_in_policy_violation";
    class h extends Error {
      constructor() {
        super("Sign-in on this device is restricted by your organization's device policy. Sign in with an allowed account to continue."), this.name = "SignInPolicyViolationError";
      }
    }
    const f = ["com.todesktop.230313mzl4w4u92", "co.anysphere.cursor.dev"], g = ["HKLM\\SOFTWARE\\Policies\\Cursor\\Cursor", "HKLM\\SOFTWARE\\Policies\\Microsoft\\Cursor", "HKLM\\SOFTWARE\\Policies\\Cursor\\Cursor Dev"];
    function y(e2) {
      return (e2 ?? "").split(",").map((e3) => e3.trim()).filter((e3) => e3.length > 0);
    }
    function w(e2) {
      return [...new Set(y(e2).map(Number).filter((e3) => Number.isSafeInteger(e3) && e3 > 0))];
    }
    function v(e2) {
      let t2 = e2.trim().toLowerCase();
      if (t2.startsWith("@") && (t2 = t2.slice(1)), 0 !== t2.length && !t2.includes("@") && !/\s/.test(t2)) return t2;
    }
    function _(e2) {
      return void 0 !== A(e2);
    }
    function A(e2) {
      const t2 = (function(e3) {
        return "boolean" == typeof e3 ? e3 : "number" == typeof e3 ? 1 === e3 : "string" == typeof e3 && ["1", "true", "yes", "on"].includes(e3.trim().toLowerCase());
      })(e2.SignInEnforcement), r2 = (function(e3) {
        return [...new Set(y(e3).filter((e4) => /^\d+$/.test(e4)).map((e4) => BigInt(e4).toString()).filter((e4) => "0" !== e4))];
      })(e2.AllowedOrganizationIds), n2 = [.../* @__PURE__ */ new Set([...w(e2.AllowedTeamIds), ...w(e2.AllowedTeamId)])], s2 = [...new Set(y(e2.AllowedLoginEmails).map((e3) => e3.toLowerCase()).filter((e3) => e3.includes("@")))], o2 = [...new Set(y(e2.AllowedLoginDomains).map(v).filter((e3) => void 0 !== e3))];
      if (!t2 && 0 === r2.length && 0 === n2.length && 0 === s2.length && 0 === o2.length) return;
      const i2 = JSON.stringify({ enforced: t2, allowedOrganizationIds: r2, allowedTeamIds: n2.map(String), allowedLoginEmails: s2, allowedLoginDomains: o2 });
      return `v1.${Buffer.from(i2, "utf-8").toString("base64url")}`;
    }
    function S(e2) {
      const t2 = ["SignInEnforcement", "AllowedOrganizationIds", "AllowedTeamIds", "AllowedTeamId", "AllowedLoginEmails", "AllowedLoginDomains"], r2 = {};
      let n2 = false;
      for (const s2 of t2) void 0 !== e2[s2] && (r2[s2] = e2[s2], n2 = true);
      return n2 ? r2 : void 0;
    }
    async function b() {
      const e2 = process.env.CURSOR_MDM_SIGN_IN_POLICY_JSON;
      if (void 0 !== e2 && e2.length > 0) try {
        return S(JSON.parse(e2));
      } catch {
        return;
      }
      switch (process.platform) {
        case "darwin":
          return await (async function() {
            const e3 = [];
            for (const t3 of f) e3.push(u.join("/Library/Managed Preferences", l.userInfo().username, `${t3}.plist`), u.join("/Library/Managed Preferences", `${t3}.plist`));
            let t2;
            for (const r2 of e3) {
              try {
                await c.promises.access(r2);
              } catch {
                continue;
              }
              try {
                const { stdout: e4 } = await d("plutil", ["-convert", "json", "-o", "-", r2]), n2 = S(JSON.parse(e4));
                if (void 0 !== n2) {
                  if (_(n2)) return n2;
                  t2 ??= n2;
                }
              } catch {
              }
            }
            return t2;
          })();
        case "win32":
          return await (async function() {
            let e3;
            for (const t2 of g) {
              let r2;
              try {
                ({ stdout: r2 } = await d("reg.exe", ["query", t2]));
              } catch {
                continue;
              }
              const n2 = {};
              for (const e4 of r2.split(/\r?\n/)) {
                const t3 = /^\s{4}(\S+)\s+(REG_\w+)\s+(.*)$/.exec(e4);
                if (null === t3) continue;
                const [, r3, s3, o2] = t3;
                n2[r3] = "REG_DWORD" === s3 ? Number.parseInt(o2.trim(), 16) : o2.trim();
              }
              const s2 = S(n2);
              if (void 0 !== s2) {
                if (_(s2)) return s2;
                e3 ??= s2;
              }
            }
            return e3;
          })();
        case "linux":
          return await (async function() {
            const e3 = u.join(l.homedir(), ".cursor", "policy.json");
            try {
              const t2 = await c.promises.readFile(e3, "utf-8");
              return S(JSON.parse(t2));
            } catch {
              return;
            }
          })();
        default:
          return;
      }
    }
    let E, I = 0;
    async function C() {
      const e2 = await (async function() {
        const e3 = Date.now();
        if (e3 - I < 3e4) return E;
        try {
          const e4 = await b();
          E = void 0 === e4 ? void 0 : A(e4);
        } catch {
          E = void 0;
        }
        return I = e3, E;
      })();
      return void 0 === e2 ? {} : { [p]: e2 };
    }
    var k = r(41692);
    const x = process.env.HTTPS_PROXY || process.env.https_proxy || void 0;
    let T;
    function R(e2) {
      try {
        return (function(e3, t2, r2) {
          if (void 0 !== t2 && t2.length > 0) return void 0 === r2 ? new e3.ProxyAgent(t2) : new e3.ProxyAgent({ uri: t2, proxyTls: r2, requestTls: r2 });
          return void 0 === r2 ? void 0 : new e3.Agent({ connect: r2 });
        })(e2, x, (function() {
          try {
            return (function() {
              const e3 = k.getCACertificates;
              if (void 0 === e3) return;
              const t2 = e3("default"), r2 = e3("system");
              return 0 === r2.length ? void 0 : { ca: [.../* @__PURE__ */ new Set([...t2, ...r2])] };
            })();
          } catch {
            return;
          }
        })());
      } catch {
        return;
      }
    }
    async function B(e2, t2) {
      T ??= r.e(613).then(r.t.bind(r, 77613, 19)).then((e3) => ({ fetch: e3.fetch, dispatcher: R(e3) }));
      const { fetch: n2, dispatcher: s2 } = await T;
      return n2(e2, void 0 !== s2 ? { ...t2, dispatcher: s2 } : t2);
    }
    function P(e2) {
      return e2.replace(/\/+$/, "");
    }
    function J(e2) {
      return P(e2 ?? process.env.CURSOR_WEBSITE_URL ?? "https://cursor.com");
    }
    function M(e2) {
      return P(e2 ?? process.env.CURSOR_API_BASE_URL ?? "https://api2.cursor.sh");
    }
    function q(e2) {
      return e2.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    function D(e2 = "cli", t2 = J(), r2 = false) {
      const s2 = q(n.randomBytes(32));
      var o2;
      const i2 = q((o2 = s2, n.createHash("sha256").update(o2).digest())), a2 = n.randomUUID(), c2 = new URL("/loginDeepControl", t2);
      return c2.searchParams.set("challenge", i2), c2.searchParams.set("uuid", a2), c2.searchParams.set("mode", "login"), c2.searchParams.set("redirectTarget", e2), r2 && c2.searchParams.set("supportsSelectedTeamLogin", "true"), { uuid: a2, challenge: i2, verifier: s2, loginUrl: c2.toString() };
    }
    class O extends Error {
      constructor(e2) {
        const t2 = process.env.HTTPS_PROXY || process.env.https_proxy, r2 = "Failed to reach the Cursor API. " + (t2 ? `Check that your proxy (${(function(e3) {
          try {
            const t3 = new URL(e3);
            return t3.username = "", t3.password = "", t3.toString();
          } catch {
            return "[proxy URL redacted]";
          }
        })(t2)}) is reachable.` : "If you are behind a corporate proxy, set the HTTPS_PROXY environment variable.");
        super(r2), this.name = "AuthNetworkError", this.cause = e2;
      }
    }
    function N(e2) {
      return true === e2?.aborted;
    }
    function F(e2, t2) {
      return new Promise((r2) => {
        if (true === t2?.aborted) return void r2();
        const n2 = () => {
          clearTimeout(s2), r2();
        }, s2 = setTimeout(() => {
          t2?.removeEventListener("abort", n2), r2();
        }, e2);
        t2?.addEventListener("abort", n2, { once: true });
      });
    }
    function U(e2) {
      if ("object" != typeof e2 || null === e2) return "unknown";
      const t2 = e2;
      return "string" == typeof t2.code && /^[A-Z][A-Z0-9_]{0,63}$/.test(t2.code) ? t2.code.includes("TIMEOUT") || "ETIMEDOUT" === t2.code ? "timeout" : t2.code : void 0 !== t2.cause ? U(t2.cause) : "other";
    }
    class L {
      constructor(e2) {
        this.redirectTarget = e2?.redirectTarget ?? "cli", this.supportsSelectedTeamLogin = e2?.supportsSelectedTeamLogin ?? false, this.apiUrl = M(e2?.apiUrl), this.websiteUrl = J(e2?.websiteUrl), this.onPollGiveUp = e2?.onPollGiveUp;
      }
      startLogin() {
        const e2 = D(this.redirectTarget, this.websiteUrl, this.supportsSelectedTeamLogin);
        return { metadata: { uuid: e2.uuid, verifier: e2.verifier }, loginUrl: e2.loginUrl };
      }
      async waitForResult(e2, t2) {
        return (async function({ uuid: e3, verifier: t3, apiBaseUrl: r2 = M(), signal: n2, onGiveUp: s2 }) {
          const o2 = `${r2}/auth/poll`, a2 = 1e3, c2 = 1e4, l2 = await C();
          let u2, d2, p2 = 0, f2 = 0;
          const g2 = Date.now(), y2 = (t4) => {
            try {
              s2?.({ uuid: e3, elapsedMs: Math.max(0, Date.now() - g2), reason: t4, lastHttpStatus: u2, clientErrorClass: d2, consecutiveErrorCount: p2, pollAttemptCount: f2 });
            } catch {
            }
            return null;
          };
          for (let r3 = 0; r3 < 150; r3++) {
            if (N(n2)) return y2("other");
            f2++;
            try {
              const s3 = i({ "Content-Type": "application/json", ...l2 }), f3 = await B(`${o2}?uuid=${e3}&verifier=${t3}`, { headers: s3, signal: n2 });
              if (u2 = f3.status, d2 = void 0, 403 === f3.status) {
                const e4 = await f3.json().catch(() => {
                });
                if (e4?.error === m) throw new h();
              }
              if (404 === f3.status) {
                p2 = 0;
                const e4 = Math.min(a2 * 1.2 ** r3, c2);
                await F(e4, n2);
                continue;
              }
              if (!f3.ok) {
                if (p2++, p2 >= 3) return y2("three_non_404");
                const e4 = Math.min(a2 * 1.2 ** r3, c2);
                await F(e4, n2);
                continue;
              }
              p2 = 0;
              const g3 = await f3.json();
              return "object" == typeof g3 && null !== g3 && "accessToken" in g3 && "refreshToken" in g3 ? g3 : y2("bad_200");
            } catch (e4) {
              if (e4 instanceof h) throw e4;
              if (N(n2)) return y2("other");
              if (u2 = void 0, d2 = U(e4), p2++, p2 >= 3) return y2("three_non_404");
              const t4 = Math.min(a2 * 1.2 ** r3, c2);
              await F(t4, n2);
            }
          }
          return y2("other");
        })({ uuid: e2.uuid, verifier: e2.verifier, apiBaseUrl: this.apiUrl, signal: t2, onGiveUp: this.onPollGiveUp });
      }
      async loginWithApiKey(e2, t2) {
        return (async function(e3, t3) {
          const r2 = M(t3?.endpoint), n2 = await C();
          try {
            const t4 = i({ "Content-Type": "application/json", Authorization: `Bearer ${e3}`, ...n2 }), s2 = await B(`${r2}/auth/exchange_user_api_key`, { method: "POST", headers: t4, body: JSON.stringify({}) });
            if (403 === s2.status) {
              const e4 = await s2.json().catch(() => {
              });
              if (e4?.error === m) throw new h();
              return null;
            }
            if (s2.status >= 500) throw new O(new Error(`exchange_user_api_key returned HTTP ${s2.status}`));
            if (!s2.ok) return null;
            const o2 = await s2.json();
            return "object" == typeof o2 && null !== o2 && "accessToken" in o2 && "refreshToken" in o2 ? o2 : null;
          } catch (e4) {
            if (e4 instanceof h || e4 instanceof O) throw e4;
            throw new O(e4);
          }
        })(e2, { endpoint: t2?.endpoint ?? this.apiUrl });
      }
      async login(e2, t2) {
        const { metadata: r2, loginUrl: n2 } = this.startLogin();
        return await e2.openUrl(n2), this.waitForResult(r2, t2);
      }
    }
    var $ = r(5289);
    class Q {
      constructor(e2) {
        this.disposeFn = e2;
      }
      dispose() {
        this.disposeFn();
      }
    }
    const j = { debug: () => {
    }, info: () => {
    }, warn: () => {
    }, error: () => {
    }, trace: () => {
    } };
    function G(e2) {
      try {
        const t2 = e2.split(".")[1], r2 = Buffer.from(t2, "base64"), n2 = JSON.parse(r2.toString());
        if ("number" != typeof n2.exp) return true;
        const s2 = Math.floor(Date.now() / 1e3);
        return n2.exp - s2 < 300;
      } catch {
        return true;
      }
    }
    class H {
      constructor(e2) {
        this.options = e2, this.authReadyWarned = false, this.refreshEpoch = 0, this.applyingCredentialRefresh = false, this.tokenListeners = /* @__PURE__ */ new Set(), this.log = e2.log ?? j, this.debugLog = e2.log ?? j;
        const t2 = (function(e3) {
          if (e3) return e3;
          return process.env.CURSOR_API_ENDPOINT || "https://api2.cursor.sh";
        })(e2.backendUrl), r2 = e2.agentBackendUrl ?? t2;
        this.creds = /* @__PURE__ */ (function(e3, t3) {
          return { backendUrl: e3, repoBackendUrl: e3, geoCppBackendUrl: e3, cppConfigBackendUrl: e3, cmdkBackendUrl: e3, telemBackendUrl: e3, originBackendUrl: e3, bcProxyUrl: e3, agentBackendUrlNonPrivacy: { default: t3 } };
        })(t2, r2);
        const n2 = this;
        this.options.credentialManager.onDidChangeAccessToken?.(function(e3) {
          n2.handleCredentialAccessTokenChanged(0 === arguments.length ? [] : [e3]);
        });
      }
      handleCredentialAccessTokenChanged(e2) {
        this.applyingCredentialRefresh || (this.refreshEpoch += 1, 0 !== e2.length ? (void 0 === e2[0] && this.clearTransportAuthToken(), this.refreshToken()) : this.refreshAfterUnspecifiedCredentialChange(this.refreshEpoch));
      }
      async refreshAfterUnspecifiedCredentialChange(e2) {
        let t2;
        try {
          t2 = await this.options.credentialManager.getAccessToken() ?? void 0;
        } catch (t3) {
          if (e2 !== this.refreshEpoch) return;
          return this.log.warn(`[agent-host] Unspecified credential peek failed; refreshing without clearing: ${t3 instanceof Error ? t3.message : String(t3)}`), void this.refreshToken();
        }
        e2 === this.refreshEpoch && (void 0 === t2 && this.clearTransportAuthToken(), this.refreshToken());
      }
      async initialize() {
        const e2 = this.refreshEpoch, t2 = await this.resolveAccessToken(e2);
        e2 === this.refreshEpoch && (this.cachedToken = t2), void 0 !== this.cachedToken || this.authReadyWarned || (this.authReadyWarned = true, this.log.warn("[agent-host] Starting without an access token; requests may fail until auth is configured."));
      }
      getCreds() {
        return this.creds;
      }
      getAuthToken() {
        return this.cachedToken;
      }
      getPrivacyModeEnum() {
        return this.options.credentialManager.privacyMode ?? $.PrivacyMode.UNSPECIFIED;
      }
      onDidChangeAuthToken(e2) {
        return this.tokenListeners.add(e2), new Q(() => {
          this.tokenListeners.delete(e2);
        });
      }
      triggerTokenRefresh() {
        this.refreshToken();
      }
      checkFeatureGate(e2) {
        return this.options.enabledFeatureGates?.has(e2) ?? false;
      }
      getDebugTimeoutPreventionMode() {
        return "never";
      }
      isDevelopment() {
        return false;
      }
      metricsIncrement(e2) {
        this.options.metricsIncrement?.(e2);
      }
      async resolveAccessToken(e2) {
        const t2 = this.creds.backendUrl, r2 = await this.options.credentialManager.getAccessToken() ?? null;
        return await (async function(e3) {
          const { currentToken: t3, ephemeralToken: r3, isTokenExpiringSoon: n2, refreshToken: s2 } = e3, o2 = r3 ?? t3;
          return o2 ? n2(o2) ? await s2() ?? o2 : o2 : await s2();
        })({ currentToken: r2, ephemeralToken: null, isTokenExpiringSoon: G, refreshToken: async () => {
          const r3 = await this.options.credentialManager.getApiKey();
          if (!r3) return null;
          const n2 = new L();
          let s2;
          try {
            s2 = await n2.loginWithApiKey(r3, { endpoint: t2 });
          } catch (e3) {
            if (e3 instanceof O) return this.log.warn(`[agent-host] Token refresh failed transiently; keeping current token: ${e3.message}`), null;
            throw e3;
          }
          if (!s2?.accessToken || !s2.refreshToken) return null;
          if (e2 !== this.refreshEpoch) return null;
          this.applyingCredentialRefresh = true;
          try {
            await this.options.credentialManager.setAuthentication(s2.accessToken, s2.refreshToken, r3);
          } finally {
            this.applyingCredentialRefresh = false;
          }
          return s2.accessToken;
        } }) ?? void 0;
      }
      clearTransportAuthToken() {
        if (void 0 !== this.cachedToken) {
          this.cachedToken = void 0;
          for (const e2 of this.tokenListeners) e2(void 0);
        }
      }
      async refreshToken() {
        const e2 = this.refreshEpoch, t2 = this.cachedToken;
        let r2;
        try {
          r2 = await this.resolveAccessToken(e2);
        } catch (t3) {
          if (e2 !== this.refreshEpoch) return;
          if (void 0 === this.cachedToken) try {
            const t4 = await this.options.credentialManager.getAccessToken() ?? void 0;
            if (e2 === this.refreshEpoch && void 0 !== t4) {
              this.cachedToken = t4;
              for (const e3 of this.tokenListeners) e3(t4);
            }
          } catch (e3) {
            this.log.warn(`[agent-host] Token refresh recovery failed: ${e3 instanceof Error ? e3.message : String(e3)}`);
          }
          return void this.log.warn(`[agent-host] Token refresh failed; keeping ${void 0 === this.cachedToken ? "empty" : "current"} transport token: ${t3 instanceof Error ? t3.message : String(t3)}`);
        }
        if (e2 === this.refreshEpoch && r2 !== t2) {
          this.cachedToken = r2;
          for (const e3 of this.tokenListeners) e3(r2);
        }
      }
    }
    function z(e2) {
      return new H(e2);
    }
  }