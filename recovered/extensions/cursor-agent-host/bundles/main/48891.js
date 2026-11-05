// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 48891 range:8120074..8142416
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48891: (e, t, r) => {
    "use strict";
    let n;
    async function s(e2) {
      const t2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
      let r2 = "";
      const s2 = await (async function(e3) {
        return (await n).getRandomValues(new Uint8Array(e3));
      })(e2);
      for (let n2 = 0; n2 < e2; n2++) {
        r2 += t2[s2[n2] % 66];
      }
      return r2;
    }
    async function o(e2) {
      const t2 = await (await n).subtle.digest("SHA-256", new TextEncoder().encode(e2));
      return btoa(String.fromCharCode(...new Uint8Array(t2))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
    }
    async function i(e2) {
      if (e2 || (e2 = 43), e2 < 43 || e2 > 128) throw `Expected a length between 43 and 128. Received ${e2}.`;
      const t2 = await (async function(e3) {
        return await s(e3);
      })(e2);
      return { code_verifier: t2, code_challenge: await o(t2) };
    }
    r.d(t, { D_: () => I, j2: () => J, eH: () => q }), n = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? Promise.resolve().then(r.t.bind(r, 77598, 19)).then((e2) => e2.webcrypto);
    var a = r(59116), c = r(61165);
    const l = "custom";
    var u = r(47381), d = r(87888);
    const p = c.OZ().superRefine((e2, t2) => {
      if (!URL.canParse(e2)) return t2.addIssue({ code: l, message: "URL must be parseable", fatal: true }), u.tm;
    }).refine((e2) => {
      const t2 = new URL(e2);
      return "javascript:" !== t2.protocol && "data:" !== t2.protocol && "vbscript:" !== t2.protocol;
    }, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), m = c._H({ resource: c.Yj().url(), authorization_servers: c.YO(p).optional(), jwks_uri: c.Yj().url().optional(), scopes_supported: c.YO(c.Yj()).optional(), bearer_methods_supported: c.YO(c.Yj()).optional(), resource_signing_alg_values_supported: c.YO(c.Yj()).optional(), resource_name: c.Yj().optional(), resource_documentation: c.Yj().optional(), resource_policy_uri: c.Yj().url().optional(), resource_tos_uri: c.Yj().url().optional(), tls_client_certificate_bound_access_tokens: c.zM().optional(), authorization_details_types_supported: c.YO(c.Yj()).optional(), dpop_signing_alg_values_supported: c.YO(c.Yj()).optional(), dpop_bound_access_tokens_required: c.zM().optional() }), h = c._H({ issuer: c.Yj(), authorization_endpoint: p, token_endpoint: p, registration_endpoint: p.optional(), scopes_supported: c.YO(c.Yj()).optional(), response_types_supported: c.YO(c.Yj()), response_modes_supported: c.YO(c.Yj()).optional(), grant_types_supported: c.YO(c.Yj()).optional(), token_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(), token_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(), service_documentation: p.optional(), revocation_endpoint: p.optional(), revocation_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(), revocation_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(), introspection_endpoint: c.Yj().optional(), introspection_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(), introspection_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(), code_challenge_methods_supported: c.YO(c.Yj()).optional(), client_id_metadata_document_supported: c.zM().optional() }), f = c._H({ issuer: c.Yj(), authorization_endpoint: p, token_endpoint: p, userinfo_endpoint: p.optional(), jwks_uri: p, registration_endpoint: p.optional(), scopes_supported: c.YO(c.Yj()).optional(), response_types_supported: c.YO(c.Yj()), response_modes_supported: c.YO(c.Yj()).optional(), grant_types_supported: c.YO(c.Yj()).optional(), acr_values_supported: c.YO(c.Yj()).optional(), subject_types_supported: c.YO(c.Yj()), id_token_signing_alg_values_supported: c.YO(c.Yj()), id_token_encryption_alg_values_supported: c.YO(c.Yj()).optional(), id_token_encryption_enc_values_supported: c.YO(c.Yj()).optional(), userinfo_signing_alg_values_supported: c.YO(c.Yj()).optional(), userinfo_encryption_alg_values_supported: c.YO(c.Yj()).optional(), userinfo_encryption_enc_values_supported: c.YO(c.Yj()).optional(), request_object_signing_alg_values_supported: c.YO(c.Yj()).optional(), request_object_encryption_alg_values_supported: c.YO(c.Yj()).optional(), request_object_encryption_enc_values_supported: c.YO(c.Yj()).optional(), token_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(), token_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(), display_values_supported: c.YO(c.Yj()).optional(), claim_types_supported: c.YO(c.Yj()).optional(), claims_supported: c.YO(c.Yj()).optional(), service_documentation: c.Yj().optional(), claims_locales_supported: c.YO(c.Yj()).optional(), ui_locales_supported: c.YO(c.Yj()).optional(), claims_parameter_supported: c.zM().optional(), request_parameter_supported: c.zM().optional(), request_uri_parameter_supported: c.zM().optional(), require_request_uri_registration: c.zM().optional(), op_policy_uri: p.optional(), op_tos_uri: p.optional(), client_id_metadata_document_supported: c.zM().optional() }), g = c.Ik({ ...f.shape, ...h.pick({ code_challenge_methods_supported: true }).shape }), y = c.Ik({ access_token: c.Yj(), id_token: c.Yj().optional(), token_type: c.Yj(), expires_in: d.qG(c.rS, w).optional(), scope: c.Yj().optional(), refresh_token: c.Yj().optional() }).strip();
    var w;
    const v = c.Ik({ error: c.Yj(), error_description: c.Yj().optional(), error_uri: c.Yj().optional() }), _ = p.optional().or(c.eu("").transform(() => {
    })), A = c.Ik({ redirect_uris: c.YO(p), token_endpoint_auth_method: c.Yj().optional(), grant_types: c.YO(c.Yj()).optional(), response_types: c.YO(c.Yj()).optional(), client_name: c.Yj().optional(), client_uri: p.optional(), logo_uri: _, scope: c.Yj().optional(), contacts: c.YO(c.Yj()).optional(), tos_uri: _, policy_uri: c.Yj().optional(), jwks_uri: p.optional(), jwks: c.bz().optional(), software_id: c.Yj().optional(), software_version: c.Yj().optional(), software_statement: c.Yj().optional() }).strip(), S = c.Ik({ client_id: c.Yj(), client_secret: c.Yj().optional(), client_id_issued_at: c.ai().optional(), client_secret_expires_at: c.ai().optional() }).strip(), b = A.merge(S);
    c.Ik({ error: c.Yj(), error_description: c.Yj().optional() }).strip(), c.Ik({ token: c.Yj(), token_type_hint: c.Yj().optional() }).strip();
    var E = r(25977);
    class I extends Error {
      constructor(e2) {
        super(e2 ?? "Unauthorized");
      }
    }
    function C(e2, t2) {
      return true === t2?.isRetryableOAuthRefreshError?.(e2);
    }
    const k = "offline_access";
    function x(e2) {
      return e2 instanceof E.W5 && !/^HTTP 5\d\d:/.test(e2.message) && ("invalid_redirect_uri" === e2.errorCode || /redirect/i.test(e2.message));
    }
    const T = "code", R = "S256";
    function B(e2, t2, r2, n2) {
      const { client_id: s2, client_secret: o2 } = t2;
      switch (e2) {
        case "client_secret_basic":
          return void (function(e3, t3, r3) {
            if (!t3) throw new Error("client_secret_basic authentication requires a client_secret");
            const n3 = btoa(`${e3}:${t3}`);
            r3.set("Authorization", `Basic ${n3}`);
          })(s2, o2, r2);
        case "client_secret_post":
          return void (function(e3, t3, r3) {
            r3.set("client_id", e3), t3 && r3.set("client_secret", t3);
          })(s2, o2, n2);
        case "none":
          return void (function(e3, t3) {
            t3.set("client_id", e3);
          })(s2, n2);
        default:
          throw new Error(`Unsupported client authentication method: ${e2}`);
      }
    }
    async function P(e2) {
      const t2 = e2 instanceof Response ? e2.status : void 0, r2 = e2 instanceof Response ? await e2.text() : e2;
      try {
        const e3 = v.parse(JSON.parse(r2)), { error: t3, error_description: n2, error_uri: s2 } = e3;
        return new (E.WX[t3] || E.gP)(n2 || "", s2);
      } catch (e3) {
        const n2 = `${t2 ? `HTTP ${t2}: ` : ""}Invalid OAuth error response: ${e3}. Raw body: ${r2}`;
        return new E.gP(n2);
      }
    }
    async function J(e2, t2) {
      try {
        return await M(e2, t2);
      } catch (r2) {
        if (r2 instanceof Error && "OAuthRefreshTransientError" === r2.name) throw r2;
        if (r2 instanceof E.Pg || r2 instanceof E.g) return await e2.invalidateCredentials?.("all"), await M(e2, t2);
        if (r2 instanceof E.Gy) return await e2.invalidateCredentials?.("tokens"), await M(e2, t2);
        throw r2;
      }
    }
    async function M(e2, { serverUrl: t2, authorizationCode: r2, scope: n2, resourceMetadataUrl: s2, fetchFn: o2 }) {
      const c2 = e2.getOAuthHttpFetch?.(), l2 = c2 ?? o2;
      let u2, d2;
      try {
        u2 = await (async function(e3, t3, r3 = fetch) {
          const n3 = await F(e3, "oauth-protected-resource", r3, { protocolVersion: t3?.protocolVersion, metadataUrl: t3?.resourceMetadataUrl });
          if (!n3 || 404 === n3.status) throw await n3?.body?.cancel(), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
          if (!n3.ok) throw await n3.body?.cancel(), new Error(`HTTP ${n3.status} trying to load well-known OAuth protected resource metadata.`);
          return m.parse(await n3.json());
        })(t2, { resourceMetadataUrl: s2 }, o2), u2.authorization_servers && u2.authorization_servers.length > 0 && (d2 = u2.authorization_servers[0]);
      } catch {
      }
      d2 || (d2 = new URL("/", t2));
      const p2 = await (async function(e3, t3, r3) {
        const n3 = (function(e4) {
          const t4 = "string" == typeof e4 ? new URL(e4) : new URL(e4.href);
          return t4.hash = "", t4;
        })(e3);
        if (t3.validateResourceURL) return await t3.validateResourceURL(n3, r3?.resource);
        if (!r3) return;
        if (!(function({ requestedResource: e4, configuredResource: t4 }) {
          const r4 = "string" == typeof e4 ? new URL(e4) : new URL(e4.href), n4 = "string" == typeof t4 ? new URL(t4) : new URL(t4.href);
          if (r4.origin !== n4.origin) return false;
          if (r4.pathname.length < n4.pathname.length) return false;
          const s3 = r4.pathname.endsWith("/") ? r4.pathname : r4.pathname + "/", o3 = n4.pathname.endsWith("/") ? n4.pathname : n4.pathname + "/";
          return s3.startsWith(o3);
        })({ requestedResource: n3, configuredResource: r3.resource })) throw new Error(`Protected resource ${r3.resource} does not match expected ${n3} (or origin)`);
        return new URL(r3.resource);
      })(t2, e2, u2), f2 = await (async function(e3, { fetchFn: t3 = fetch, protocolVersion: r3 = a.aE } = {}) {
        const n3 = { "MCP-Protocol-Version": r3, Accept: "application/json" }, s3 = (function(e4) {
          const t4 = "string" == typeof e4 ? new URL(e4) : e4, r4 = "/" !== t4.pathname, n4 = [];
          if (!r4) return n4.push({ url: new URL("/.well-known/oauth-authorization-server", t4.origin), type: "oauth" }), n4.push({ url: new URL("/.well-known/openid-configuration", t4.origin), type: "oidc" }), n4;
          let s4 = t4.pathname;
          s4.endsWith("/") && (s4 = s4.slice(0, -1));
          return n4.push({ url: new URL(`/.well-known/oauth-authorization-server${s4}`, t4.origin), type: "oauth" }), n4.push({ url: new URL(`/.well-known/openid-configuration${s4}`, t4.origin), type: "oidc" }), n4.push({ url: new URL(`${s4}/.well-known/openid-configuration`, t4.origin), type: "oidc" }), n4;
        })(e3);
        for (const { url: e4, type: r4 } of s3) {
          const s4 = await O(e4, n3, t3);
          if (s4) {
            if (!s4.ok) {
              if (await s4.body?.cancel(), s4.status >= 400 && s4.status < 500) continue;
              throw new Error(`HTTP ${s4.status} trying to load ${"oauth" === r4 ? "OAuth" : "OpenID provider"} metadata from ${e4}`);
            }
            return "oauth" === r4 ? h.parse(await s4.json()) : g.parse(await s4.json());
          }
        }
        return;
      })(d2, { fetchFn: o2 }), y2 = (function(e3, t3, r3, n3) {
        const s3 = t3?.scopes_supported, o3 = e3 || s3?.join(" ") || r3;
        if (!o3 || ![s3, n3?.scopes_supported].some((e4) => Array.isArray(e4) && e4.includes(k))) return o3;
        const i2 = o3.split(/\s+/).filter((e4) => e4.length > 0);
        return i2.includes(k) ? o3 : [...i2, k].join(" ");
      })(n2, u2, e2.clientMetadata.scope, f2);
      let w2 = await Promise.resolve(e2.clientInformation());
      if (!w2) {
        if (void 0 !== r2) throw new Error("Existing OAuth client information is required when exchanging an authorization code");
        const t3 = true === f2?.client_id_metadata_document_supported, n3 = e2.clientMetadataUrl;
        if (n3 && !(function(e3) {
          if (!e3) return false;
          try {
            const t4 = new URL(e3);
            return "https:" === t4.protocol && "/" !== t4.pathname;
          } catch {
            return false;
          }
        })(n3)) throw new E.gr(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${n3}`);
        if (t3 && n3) w2 = { client_id: n3 }, await e2.saveClientInformation?.(w2);
        else {
          if (!e2.saveClientInformation) throw new Error("OAuth client information must be saveable for dynamic registration");
          const t4 = await (async function(e3, t5, { metadata: r3, clientMetadata: n4, fetchFn: s3 }) {
            await e3.prepareForClientRegistration?.();
            const o3 = String(e3.redirectUrl), i2 = n4.redirect_uris ?? [], a2 = i2.includes(o3) ? [...i2] : [...i2, o3], c3 = a2.length > 1 ? [a2, [o3]] : [a2];
            let l3;
            for (const e4 of c3) try {
              const o4 = await $(t5, { metadata: r3, clientMetadata: { ...n4, redirect_uris: e4 }, fetchFn: s3 });
              return o4.redirect_uris?.length ? o4 : { ...o4, redirect_uris: e4 };
            } catch (e5) {
              if (!x(e5)) throw e5;
              l3 = e5;
            }
            throw l3;
          })(e2, d2, { metadata: f2, clientMetadata: void 0 !== y2 ? { ...e2.clientMetadata, scope: y2 } : e2.clientMetadata, fetchFn: l2 });
          await e2.saveClientInformation(t4), w2 = t4;
        }
      }
      const v2 = !e2.redirectUrl;
      if (void 0 !== r2 || v2) {
        const t3 = await (async function(e3, t4, { metadata: r3, resource: n3, authorizationCode: s3, fetchFn: o3 } = {}) {
          const i2 = e3.clientMetadata.scope;
          let a2;
          e3.prepareTokenRequest && (a2 = await e3.prepareTokenRequest(i2));
          if (!a2) {
            if (!s3) throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
            if (!e3.redirectUrl) throw new Error("redirectUrl is required for authorization_code flow");
            a2 = U(s3, await e3.codeVerifier(), e3.redirectUrl);
          }
          const c3 = await e3.clientInformation();
          return L(t4, { metadata: r3, tokenRequestParams: a2, clientInformation: c3 ?? void 0, addClientAuthentication: e3.addClientAuthentication, resource: n3, fetchFn: o3 });
        })(e2, d2, { metadata: f2, resource: p2, authorizationCode: r2, fetchFn: l2 });
        return await e2.saveTokens(t3), "AUTHORIZED";
      }
      const _2 = await e2.tokens();
      if (_2?.refresh_token) try {
        await e2.prepareForRefresh?.();
        const t3 = await (async function(e3, { metadata: t4, clientInformation: r3, refreshToken: n3, resource: s3, addClientAuthentication: o3, fetchFn: i2 }) {
          const a2 = new URLSearchParams({ grant_type: "refresh_token", refresh_token: n3 }), c3 = await L(e3, { metadata: t4, tokenRequestParams: a2, clientInformation: r3, addClientAuthentication: o3, resource: s3, fetchFn: i2 });
          return { refresh_token: n3, ...c3 };
        })(d2, { metadata: f2, clientInformation: w2, refreshToken: _2.refresh_token, resource: p2, addClientAuthentication: e2.addClientAuthentication, fetchFn: l2 });
        return await e2.saveTokens(t3), "AUTHORIZED";
      } catch (t3) {
        if (t3 && "SiblingAlreadyRefreshedError" === t3.name) throw t3;
        const r3 = t3 instanceof E.W5, n3 = t3 instanceof E.gP, s3 = C(t3, e2), o3 = r3 && !n3 && !(t3 instanceof E.pv) || s3;
        if (e2.logRefreshCatchBranch?.({ errorIsOAuthError: r3, errorIsServerError: n3, errorIsRetryable: s3, willFallThrough: !o3, willRethrow: o3, errorName: t3 instanceof Error ? t3.name : typeof t3, errorMessage: t3 instanceof Error ? t3.message : String(t3), underlyingError: t3 }), await e2.releaseRefreshLeaseOnError?.(t3), t3 instanceof E.W5 && !(t3 instanceof E.gP) && !(t3 instanceof E.pv)) throw t3;
        if (C(t3, e2)) {
          const e3 = new Error(t3 instanceof Error ? t3.message : String(t3));
          throw e3.name = "OAuthRefreshTransientError", t3 instanceof Error && t3.stack && (e3.stack = t3.stack), e3;
        }
        if (t3 instanceof E.W5 && !(t3 instanceof E.gP)) throw t3;
      }
      const A2 = e2.state ? await e2.state() : void 0, { authorizationUrl: S2, codeVerifier: b2 } = await (async function(e3, { metadata: t3, clientInformation: r3, redirectUrl: n3, scope: s3, state: o3, resource: a2 }) {
        let c3;
        if (t3) {
          if (c3 = new URL(t3.authorization_endpoint), !t3.response_types_supported.includes(T)) throw new Error(`Incompatible auth server: does not support response type ${T}`);
          if (t3.code_challenge_methods_supported && !t3.code_challenge_methods_supported.includes(R)) throw new Error(`Incompatible auth server: does not support code challenge method ${R}`);
        } else c3 = new URL("/authorize", e3);
        const l3 = await i(), u3 = l3.code_verifier, d3 = l3.code_challenge;
        c3.searchParams.set("response_type", T), c3.searchParams.set("client_id", r3.client_id), c3.searchParams.set("code_challenge", d3), c3.searchParams.set("code_challenge_method", R), c3.searchParams.set("redirect_uri", String(n3)), o3 && c3.searchParams.set("state", o3);
        s3 && c3.searchParams.set("scope", s3);
        s3?.includes("offline_access") && c3.searchParams.append("prompt", "consent");
        a2 && c3.searchParams.set("resource", a2.href);
        return { authorizationUrl: c3, codeVerifier: u3 };
      })(d2, { metadata: f2, clientInformation: w2, state: A2, redirectUrl: e2.redirectUrl, scope: y2, resource: p2 });
      return await e2.saveCodeVerifier(b2), await e2.redirectToAuthorization(S2), "REDIRECT";
    }
    function q(e2) {
      const t2 = e2.headers.get("WWW-Authenticate");
      if (!t2) return {};
      const [r2, n2] = t2.split(" ");
      if ("bearer" !== r2.toLowerCase() || !n2) return {};
      const s2 = D(e2, "resource_metadata") || void 0;
      let o2;
      if (s2) try {
        o2 = new URL(s2);
      } catch {
      }
      return { resourceMetadataUrl: o2, scope: D(e2, "scope") || void 0, error: D(e2, "error") || void 0 };
    }
    function D(e2, t2) {
      const r2 = e2.headers.get("WWW-Authenticate");
      if (!r2) return null;
      const n2 = new RegExp(`${t2}=(?:"([^"]+)"|([^\\s,]+))`), s2 = r2.match(n2);
      return s2 ? s2[1] || s2[2] : null;
    }
    async function O(e2, t2, r2 = fetch) {
      try {
        return await r2(e2, { headers: t2 });
      } catch (n2) {
        if (n2 instanceof TypeError) return t2 ? O(e2, void 0, r2) : void 0;
        throw n2;
      }
    }
    async function N(e2, t2, r2 = fetch) {
      const n2 = { "MCP-Protocol-Version": t2 };
      return await O(e2, n2, r2);
    }
    async function F(e2, t2, r2, n2) {
      const s2 = new URL(e2), o2 = n2?.protocolVersion ?? a.aE;
      let i2;
      if (n2?.metadataUrl) i2 = new URL(n2.metadataUrl);
      else {
        const e3 = (function(e4, t3 = "", r3 = {}) {
          return t3.endsWith("/") && (t3 = t3.slice(0, -1)), r3.prependPathname ? `${t3}/.well-known/${e4}` : `/.well-known/${e4}${t3}`;
        })(t2, s2.pathname);
        i2 = new URL(e3, n2?.metadataServerUrl ?? s2), i2.search = s2.search;
      }
      let c2 = await N(i2, o2, r2);
      if (!n2?.metadataUrl && (function(e3, t3) {
        return !e3 || e3.status >= 400 && e3.status < 500 && "/" !== t3;
      })(c2, s2.pathname)) {
        const e3 = new URL(`/.well-known/${t2}`, s2);
        c2 = await N(e3, o2, r2);
      }
      return c2;
    }
    function U(e2, t2, r2) {
      return new URLSearchParams({ grant_type: "authorization_code", code: e2, code_verifier: t2, redirect_uri: String(r2) });
    }
    async function L(e2, { metadata: t2, tokenRequestParams: r2, clientInformation: n2, addClientAuthentication: s2, resource: o2, fetchFn: i2 }) {
      const a2 = t2?.token_endpoint ? new URL(t2.token_endpoint) : new URL("/token", e2), c2 = new Headers({ "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" });
      if (o2 && r2.set("resource", o2.href), s2) await s2(c2, r2, a2, t2);
      else if (n2) {
        const e3 = (function(e4, t3) {
          const r3 = void 0 !== e4.client_secret;
          return 0 === t3.length ? r3 ? "client_secret_post" : "none" : "token_endpoint_auth_method" in e4 && e4.token_endpoint_auth_method && (n3 = e4.token_endpoint_auth_method, ["client_secret_basic", "client_secret_post", "none"].includes(n3)) && t3.includes(e4.token_endpoint_auth_method) ? e4.token_endpoint_auth_method : r3 && t3.includes("client_secret_basic") ? "client_secret_basic" : r3 && t3.includes("client_secret_post") ? "client_secret_post" : t3.includes("none") ? "none" : r3 ? "client_secret_post" : "none";
          var n3;
        })(n2, t2?.token_endpoint_auth_methods_supported ?? []);
        B(e3, n2, c2, r2);
      }
      const l2 = await (i2 ?? fetch)(a2, { method: "POST", headers: c2, body: r2 });
      if (!l2.ok) throw await P(l2);
      return y.parse(await l2.json());
    }
    async function $(e2, { metadata: t2, clientMetadata: r2, fetchFn: n2 }) {
      let s2;
      if (t2) {
        if (!t2.registration_endpoint) throw new Error("Incompatible auth server: does not support dynamic client registration");
        s2 = new URL(t2.registration_endpoint);
      } else s2 = new URL("/register", e2);
      const o2 = await (n2 ?? fetch)(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r2) });
      if (!o2.ok) throw await P(o2);
      return b.parse(await o2.json());
    }
  }