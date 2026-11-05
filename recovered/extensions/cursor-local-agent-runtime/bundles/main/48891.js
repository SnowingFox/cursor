// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 48891 range:1448569..1470911
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48891: (e, t, r) => {
    "use strict";
    let n;
    async function o(e2) {
      const t2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
      let r2 = "";
      const o2 = await (async function(e3) {
        return (await n).getRandomValues(new Uint8Array(e3));
      })(e2);
      for (let n2 = 0; n2 < e2; n2++) {
        r2 += t2[o2[n2] % 66];
      }
      return r2;
    }
    async function s(e2) {
      const t2 = await (await n).subtle.digest("SHA-256", new TextEncoder().encode(e2));
      return btoa(String.fromCharCode(...new Uint8Array(t2))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
    }
    async function i(e2) {
      if (e2 || (e2 = 43), e2 < 43 || e2 > 128) throw `Expected a length between 43 and 128. Received ${e2}.`;
      const t2 = await (async function(e3) {
        return await o(e3);
      })(e2);
      return { code_verifier: t2, code_challenge: await s(t2) };
    }
    r.d(t, { D_: () => E, j2: () => O, eH: () => N }), n = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? Promise.resolve().then(r.t.bind(r, 77598, 19)).then((e2) => e2.webcrypto);
    var a = r(59116), l = r(61165);
    const c = "custom";
    var u = r(47381), d = r(87888);
    const p = l.OZ().superRefine((e2, t2) => {
      if (!URL.canParse(e2)) return t2.addIssue({ code: c, message: "URL must be parseable", fatal: true }), u.tm;
    }).refine((e2) => {
      const t2 = new URL(e2);
      return "javascript:" !== t2.protocol && "data:" !== t2.protocol && "vbscript:" !== t2.protocol;
    }, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), h = l._H({ resource: l.Yj().url(), authorization_servers: l.YO(p).optional(), jwks_uri: l.Yj().url().optional(), scopes_supported: l.YO(l.Yj()).optional(), bearer_methods_supported: l.YO(l.Yj()).optional(), resource_signing_alg_values_supported: l.YO(l.Yj()).optional(), resource_name: l.Yj().optional(), resource_documentation: l.Yj().optional(), resource_policy_uri: l.Yj().url().optional(), resource_tos_uri: l.Yj().url().optional(), tls_client_certificate_bound_access_tokens: l.zM().optional(), authorization_details_types_supported: l.YO(l.Yj()).optional(), dpop_signing_alg_values_supported: l.YO(l.Yj()).optional(), dpop_bound_access_tokens_required: l.zM().optional() }), m = l._H({ issuer: l.Yj(), authorization_endpoint: p, token_endpoint: p, registration_endpoint: p.optional(), scopes_supported: l.YO(l.Yj()).optional(), response_types_supported: l.YO(l.Yj()), response_modes_supported: l.YO(l.Yj()).optional(), grant_types_supported: l.YO(l.Yj()).optional(), token_endpoint_auth_methods_supported: l.YO(l.Yj()).optional(), token_endpoint_auth_signing_alg_values_supported: l.YO(l.Yj()).optional(), service_documentation: p.optional(), revocation_endpoint: p.optional(), revocation_endpoint_auth_methods_supported: l.YO(l.Yj()).optional(), revocation_endpoint_auth_signing_alg_values_supported: l.YO(l.Yj()).optional(), introspection_endpoint: l.Yj().optional(), introspection_endpoint_auth_methods_supported: l.YO(l.Yj()).optional(), introspection_endpoint_auth_signing_alg_values_supported: l.YO(l.Yj()).optional(), code_challenge_methods_supported: l.YO(l.Yj()).optional(), client_id_metadata_document_supported: l.zM().optional() }), f = l._H({ issuer: l.Yj(), authorization_endpoint: p, token_endpoint: p, userinfo_endpoint: p.optional(), jwks_uri: p, registration_endpoint: p.optional(), scopes_supported: l.YO(l.Yj()).optional(), response_types_supported: l.YO(l.Yj()), response_modes_supported: l.YO(l.Yj()).optional(), grant_types_supported: l.YO(l.Yj()).optional(), acr_values_supported: l.YO(l.Yj()).optional(), subject_types_supported: l.YO(l.Yj()), id_token_signing_alg_values_supported: l.YO(l.Yj()), id_token_encryption_alg_values_supported: l.YO(l.Yj()).optional(), id_token_encryption_enc_values_supported: l.YO(l.Yj()).optional(), userinfo_signing_alg_values_supported: l.YO(l.Yj()).optional(), userinfo_encryption_alg_values_supported: l.YO(l.Yj()).optional(), userinfo_encryption_enc_values_supported: l.YO(l.Yj()).optional(), request_object_signing_alg_values_supported: l.YO(l.Yj()).optional(), request_object_encryption_alg_values_supported: l.YO(l.Yj()).optional(), request_object_encryption_enc_values_supported: l.YO(l.Yj()).optional(), token_endpoint_auth_methods_supported: l.YO(l.Yj()).optional(), token_endpoint_auth_signing_alg_values_supported: l.YO(l.Yj()).optional(), display_values_supported: l.YO(l.Yj()).optional(), claim_types_supported: l.YO(l.Yj()).optional(), claims_supported: l.YO(l.Yj()).optional(), service_documentation: l.Yj().optional(), claims_locales_supported: l.YO(l.Yj()).optional(), ui_locales_supported: l.YO(l.Yj()).optional(), claims_parameter_supported: l.zM().optional(), request_parameter_supported: l.zM().optional(), request_uri_parameter_supported: l.zM().optional(), require_request_uri_registration: l.zM().optional(), op_policy_uri: p.optional(), op_tos_uri: p.optional(), client_id_metadata_document_supported: l.zM().optional() }), g = l.Ik({ ...f.shape, ...m.pick({ code_challenge_methods_supported: true }).shape }), y = l.Ik({ access_token: l.Yj(), id_token: l.Yj().optional(), token_type: l.Yj(), expires_in: d.qG(l.rS, v).optional(), scope: l.Yj().optional(), refresh_token: l.Yj().optional() }).strip();
    var v;
    const w = l.Ik({ error: l.Yj(), error_description: l.Yj().optional(), error_uri: l.Yj().optional() }), b = p.optional().or(l.eu("").transform(() => {
    })), _ = l.Ik({ redirect_uris: l.YO(p), token_endpoint_auth_method: l.Yj().optional(), grant_types: l.YO(l.Yj()).optional(), response_types: l.YO(l.Yj()).optional(), client_name: l.Yj().optional(), client_uri: p.optional(), logo_uri: b, scope: l.Yj().optional(), contacts: l.YO(l.Yj()).optional(), tos_uri: b, policy_uri: l.Yj().optional(), jwks_uri: p.optional(), jwks: l.bz().optional(), software_id: l.Yj().optional(), software_version: l.Yj().optional(), software_statement: l.Yj().optional() }).strip(), S = l.Ik({ client_id: l.Yj(), client_secret: l.Yj().optional(), client_id_issued_at: l.ai().optional(), client_secret_expires_at: l.ai().optional() }).strip(), x = _.merge(S);
    l.Ik({ error: l.Yj(), error_description: l.Yj().optional() }).strip(), l.Ik({ token: l.Yj(), token_type_hint: l.Yj().optional() }).strip();
    var k = r(25977);
    class E extends Error {
      constructor(e2) {
        super(e2 ?? "Unauthorized");
      }
    }
    function T(e2, t2) {
      return true === t2?.isRetryableOAuthRefreshError?.(e2);
    }
    const C = "offline_access";
    function I(e2) {
      return e2 instanceof k.W5 && !/^HTTP 5\d\d:/.test(e2.message) && ("invalid_redirect_uri" === e2.errorCode || /redirect/i.test(e2.message));
    }
    const A = "code", P = "S256";
    function M(e2, t2, r2, n2) {
      const { client_id: o2, client_secret: s2 } = t2;
      switch (e2) {
        case "client_secret_basic":
          return void (function(e3, t3, r3) {
            if (!t3) throw new Error("client_secret_basic authentication requires a client_secret");
            const n3 = btoa(`${e3}:${t3}`);
            r3.set("Authorization", `Basic ${n3}`);
          })(o2, s2, r2);
        case "client_secret_post":
          return void (function(e3, t3, r3) {
            r3.set("client_id", e3), t3 && r3.set("client_secret", t3);
          })(o2, s2, n2);
        case "none":
          return void (function(e3, t3) {
            t3.set("client_id", e3);
          })(o2, n2);
        default:
          throw new Error(`Unsupported client authentication method: ${e2}`);
      }
    }
    async function R(e2) {
      const t2 = e2 instanceof Response ? e2.status : void 0, r2 = e2 instanceof Response ? await e2.text() : e2;
      try {
        const e3 = w.parse(JSON.parse(r2)), { error: t3, error_description: n2, error_uri: o2 } = e3;
        return new (k.WX[t3] || k.gP)(n2 || "", o2);
      } catch (e3) {
        const n2 = `${t2 ? `HTTP ${t2}: ` : ""}Invalid OAuth error response: ${e3}. Raw body: ${r2}`;
        return new k.gP(n2);
      }
    }
    async function O(e2, t2) {
      try {
        return await D(e2, t2);
      } catch (r2) {
        if (r2 instanceof Error && "OAuthRefreshTransientError" === r2.name) throw r2;
        if (r2 instanceof k.Pg || r2 instanceof k.g) return await e2.invalidateCredentials?.("all"), await D(e2, t2);
        if (r2 instanceof k.Gy) return await e2.invalidateCredentials?.("tokens"), await D(e2, t2);
        throw r2;
      }
    }
    async function D(e2, { serverUrl: t2, authorizationCode: r2, scope: n2, resourceMetadataUrl: o2, fetchFn: s2 }) {
      const l2 = e2.getOAuthHttpFetch?.(), c2 = l2 ?? s2;
      let u2, d2;
      try {
        u2 = await (async function(e3, t3, r3 = fetch) {
          const n3 = await B(e3, "oauth-protected-resource", r3, { protocolVersion: t3?.protocolVersion, metadataUrl: t3?.resourceMetadataUrl });
          if (!n3 || 404 === n3.status) throw await n3?.body?.cancel(), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
          if (!n3.ok) throw await n3.body?.cancel(), new Error(`HTTP ${n3.status} trying to load well-known OAuth protected resource metadata.`);
          return h.parse(await n3.json());
        })(t2, { resourceMetadataUrl: o2 }, s2), u2.authorization_servers && u2.authorization_servers.length > 0 && (d2 = u2.authorization_servers[0]);
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
          const o3 = r4.pathname.endsWith("/") ? r4.pathname : r4.pathname + "/", s3 = n4.pathname.endsWith("/") ? n4.pathname : n4.pathname + "/";
          return o3.startsWith(s3);
        })({ requestedResource: n3, configuredResource: r3.resource })) throw new Error(`Protected resource ${r3.resource} does not match expected ${n3} (or origin)`);
        return new URL(r3.resource);
      })(t2, e2, u2), f2 = await (async function(e3, { fetchFn: t3 = fetch, protocolVersion: r3 = a.aE } = {}) {
        const n3 = { "MCP-Protocol-Version": r3, Accept: "application/json" }, o3 = (function(e4) {
          const t4 = "string" == typeof e4 ? new URL(e4) : e4, r4 = "/" !== t4.pathname, n4 = [];
          if (!r4) return n4.push({ url: new URL("/.well-known/oauth-authorization-server", t4.origin), type: "oauth" }), n4.push({ url: new URL("/.well-known/openid-configuration", t4.origin), type: "oidc" }), n4;
          let o4 = t4.pathname;
          o4.endsWith("/") && (o4 = o4.slice(0, -1));
          return n4.push({ url: new URL(`/.well-known/oauth-authorization-server${o4}`, t4.origin), type: "oauth" }), n4.push({ url: new URL(`/.well-known/openid-configuration${o4}`, t4.origin), type: "oidc" }), n4.push({ url: new URL(`${o4}/.well-known/openid-configuration`, t4.origin), type: "oidc" }), n4;
        })(e3);
        for (const { url: e4, type: r4 } of o3) {
          const o4 = await L(e4, n3, t3);
          if (o4) {
            if (!o4.ok) {
              if (await o4.body?.cancel(), o4.status >= 400 && o4.status < 500) continue;
              throw new Error(`HTTP ${o4.status} trying to load ${"oauth" === r4 ? "OAuth" : "OpenID provider"} metadata from ${e4}`);
            }
            return "oauth" === r4 ? m.parse(await o4.json()) : g.parse(await o4.json());
          }
        }
        return;
      })(d2, { fetchFn: s2 }), y2 = (function(e3, t3, r3, n3) {
        const o3 = t3?.scopes_supported, s3 = e3 || o3?.join(" ") || r3;
        if (!s3 || ![o3, n3?.scopes_supported].some((e4) => Array.isArray(e4) && e4.includes(C))) return s3;
        const i2 = s3.split(/\s+/).filter((e4) => e4.length > 0);
        return i2.includes(C) ? s3 : [...i2, C].join(" ");
      })(n2, u2, e2.clientMetadata.scope, f2);
      let v2 = await Promise.resolve(e2.clientInformation());
      if (!v2) {
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
        })(n3)) throw new k.gr(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${n3}`);
        if (t3 && n3) v2 = { client_id: n3 }, await e2.saveClientInformation?.(v2);
        else {
          if (!e2.saveClientInformation) throw new Error("OAuth client information must be saveable for dynamic registration");
          const t4 = await (async function(e3, t5, { metadata: r3, clientMetadata: n4, fetchFn: o3 }) {
            await e3.prepareForClientRegistration?.();
            const s3 = String(e3.redirectUrl), i2 = n4.redirect_uris ?? [], a2 = i2.includes(s3) ? [...i2] : [...i2, s3], l3 = a2.length > 1 ? [a2, [s3]] : [a2];
            let c3;
            for (const e4 of l3) try {
              const s4 = await j(t5, { metadata: r3, clientMetadata: { ...n4, redirect_uris: e4 }, fetchFn: o3 });
              return s4.redirect_uris?.length ? s4 : { ...s4, redirect_uris: e4 };
            } catch (e5) {
              if (!I(e5)) throw e5;
              c3 = e5;
            }
            throw c3;
          })(e2, d2, { metadata: f2, clientMetadata: void 0 !== y2 ? { ...e2.clientMetadata, scope: y2 } : e2.clientMetadata, fetchFn: c2 });
          await e2.saveClientInformation(t4), v2 = t4;
        }
      }
      const w2 = !e2.redirectUrl;
      if (void 0 !== r2 || w2) {
        const t3 = await (async function(e3, t4, { metadata: r3, resource: n3, authorizationCode: o3, fetchFn: s3 } = {}) {
          const i2 = e3.clientMetadata.scope;
          let a2;
          e3.prepareTokenRequest && (a2 = await e3.prepareTokenRequest(i2));
          if (!a2) {
            if (!o3) throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
            if (!e3.redirectUrl) throw new Error("redirectUrl is required for authorization_code flow");
            a2 = $(o3, await e3.codeVerifier(), e3.redirectUrl);
          }
          const l3 = await e3.clientInformation();
          return q(t4, { metadata: r3, tokenRequestParams: a2, clientInformation: l3 ?? void 0, addClientAuthentication: e3.addClientAuthentication, resource: n3, fetchFn: s3 });
        })(e2, d2, { metadata: f2, resource: p2, authorizationCode: r2, fetchFn: c2 });
        return await e2.saveTokens(t3), "AUTHORIZED";
      }
      const b2 = await e2.tokens();
      if (b2?.refresh_token) try {
        await e2.prepareForRefresh?.();
        const t3 = await (async function(e3, { metadata: t4, clientInformation: r3, refreshToken: n3, resource: o3, addClientAuthentication: s3, fetchFn: i2 }) {
          const a2 = new URLSearchParams({ grant_type: "refresh_token", refresh_token: n3 }), l3 = await q(e3, { metadata: t4, tokenRequestParams: a2, clientInformation: r3, addClientAuthentication: s3, resource: o3, fetchFn: i2 });
          return { refresh_token: n3, ...l3 };
        })(d2, { metadata: f2, clientInformation: v2, refreshToken: b2.refresh_token, resource: p2, addClientAuthentication: e2.addClientAuthentication, fetchFn: c2 });
        return await e2.saveTokens(t3), "AUTHORIZED";
      } catch (t3) {
        if (t3 && "SiblingAlreadyRefreshedError" === t3.name) throw t3;
        const r3 = t3 instanceof k.W5, n3 = t3 instanceof k.gP, o3 = T(t3, e2), s3 = r3 && !n3 && !(t3 instanceof k.pv) || o3;
        if (e2.logRefreshCatchBranch?.({ errorIsOAuthError: r3, errorIsServerError: n3, errorIsRetryable: o3, willFallThrough: !s3, willRethrow: s3, errorName: t3 instanceof Error ? t3.name : typeof t3, errorMessage: t3 instanceof Error ? t3.message : String(t3), underlyingError: t3 }), await e2.releaseRefreshLeaseOnError?.(t3), t3 instanceof k.W5 && !(t3 instanceof k.gP) && !(t3 instanceof k.pv)) throw t3;
        if (T(t3, e2)) {
          const e3 = new Error(t3 instanceof Error ? t3.message : String(t3));
          throw e3.name = "OAuthRefreshTransientError", t3 instanceof Error && t3.stack && (e3.stack = t3.stack), e3;
        }
        if (t3 instanceof k.W5 && !(t3 instanceof k.gP)) throw t3;
      }
      const _2 = e2.state ? await e2.state() : void 0, { authorizationUrl: S2, codeVerifier: x2 } = await (async function(e3, { metadata: t3, clientInformation: r3, redirectUrl: n3, scope: o3, state: s3, resource: a2 }) {
        let l3;
        if (t3) {
          if (l3 = new URL(t3.authorization_endpoint), !t3.response_types_supported.includes(A)) throw new Error(`Incompatible auth server: does not support response type ${A}`);
          if (t3.code_challenge_methods_supported && !t3.code_challenge_methods_supported.includes(P)) throw new Error(`Incompatible auth server: does not support code challenge method ${P}`);
        } else l3 = new URL("/authorize", e3);
        const c3 = await i(), u3 = c3.code_verifier, d3 = c3.code_challenge;
        l3.searchParams.set("response_type", A), l3.searchParams.set("client_id", r3.client_id), l3.searchParams.set("code_challenge", d3), l3.searchParams.set("code_challenge_method", P), l3.searchParams.set("redirect_uri", String(n3)), s3 && l3.searchParams.set("state", s3);
        o3 && l3.searchParams.set("scope", o3);
        o3?.includes("offline_access") && l3.searchParams.append("prompt", "consent");
        a2 && l3.searchParams.set("resource", a2.href);
        return { authorizationUrl: l3, codeVerifier: u3 };
      })(d2, { metadata: f2, clientInformation: v2, state: _2, redirectUrl: e2.redirectUrl, scope: y2, resource: p2 });
      return await e2.saveCodeVerifier(x2), await e2.redirectToAuthorization(S2), "REDIRECT";
    }
    function N(e2) {
      const t2 = e2.headers.get("WWW-Authenticate");
      if (!t2) return {};
      const [r2, n2] = t2.split(" ");
      if ("bearer" !== r2.toLowerCase() || !n2) return {};
      const o2 = F(e2, "resource_metadata") || void 0;
      let s2;
      if (o2) try {
        s2 = new URL(o2);
      } catch {
      }
      return { resourceMetadataUrl: s2, scope: F(e2, "scope") || void 0, error: F(e2, "error") || void 0 };
    }
    function F(e2, t2) {
      const r2 = e2.headers.get("WWW-Authenticate");
      if (!r2) return null;
      const n2 = new RegExp(`${t2}=(?:"([^"]+)"|([^\\s,]+))`), o2 = r2.match(n2);
      return o2 ? o2[1] || o2[2] : null;
    }
    async function L(e2, t2, r2 = fetch) {
      try {
        return await r2(e2, { headers: t2 });
      } catch (n2) {
        if (n2 instanceof TypeError) return t2 ? L(e2, void 0, r2) : void 0;
        throw n2;
      }
    }
    async function U(e2, t2, r2 = fetch) {
      const n2 = { "MCP-Protocol-Version": t2 };
      return await L(e2, n2, r2);
    }
    async function B(e2, t2, r2, n2) {
      const o2 = new URL(e2), s2 = n2?.protocolVersion ?? a.aE;
      let i2;
      if (n2?.metadataUrl) i2 = new URL(n2.metadataUrl);
      else {
        const e3 = (function(e4, t3 = "", r3 = {}) {
          return t3.endsWith("/") && (t3 = t3.slice(0, -1)), r3.prependPathname ? `${t3}/.well-known/${e4}` : `/.well-known/${e4}${t3}`;
        })(t2, o2.pathname);
        i2 = new URL(e3, n2?.metadataServerUrl ?? o2), i2.search = o2.search;
      }
      let l2 = await U(i2, s2, r2);
      if (!n2?.metadataUrl && (function(e3, t3) {
        return !e3 || e3.status >= 400 && e3.status < 500 && "/" !== t3;
      })(l2, o2.pathname)) {
        const e3 = new URL(`/.well-known/${t2}`, o2);
        l2 = await U(e3, s2, r2);
      }
      return l2;
    }
    function $(e2, t2, r2) {
      return new URLSearchParams({ grant_type: "authorization_code", code: e2, code_verifier: t2, redirect_uri: String(r2) });
    }
    async function q(e2, { metadata: t2, tokenRequestParams: r2, clientInformation: n2, addClientAuthentication: o2, resource: s2, fetchFn: i2 }) {
      const a2 = t2?.token_endpoint ? new URL(t2.token_endpoint) : new URL("/token", e2), l2 = new Headers({ "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" });
      if (s2 && r2.set("resource", s2.href), o2) await o2(l2, r2, a2, t2);
      else if (n2) {
        const e3 = (function(e4, t3) {
          const r3 = void 0 !== e4.client_secret;
          return 0 === t3.length ? r3 ? "client_secret_post" : "none" : "token_endpoint_auth_method" in e4 && e4.token_endpoint_auth_method && (n3 = e4.token_endpoint_auth_method, ["client_secret_basic", "client_secret_post", "none"].includes(n3)) && t3.includes(e4.token_endpoint_auth_method) ? e4.token_endpoint_auth_method : r3 && t3.includes("client_secret_basic") ? "client_secret_basic" : r3 && t3.includes("client_secret_post") ? "client_secret_post" : t3.includes("none") ? "none" : r3 ? "client_secret_post" : "none";
          var n3;
        })(n2, t2?.token_endpoint_auth_methods_supported ?? []);
        M(e3, n2, l2, r2);
      }
      const c2 = await (i2 ?? fetch)(a2, { method: "POST", headers: l2, body: r2 });
      if (!c2.ok) throw await R(c2);
      return y.parse(await c2.json());
    }
    async function j(e2, { metadata: t2, clientMetadata: r2, fetchFn: n2 }) {
      let o2;
      if (t2) {
        if (!t2.registration_endpoint) throw new Error("Incompatible auth server: does not support dynamic client registration");
        o2 = new URL(t2.registration_endpoint);
      } else o2 = new URL("/register", e2);
      const s2 = await (n2 ?? fetch)(o2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r2) });
      if (!s2.ok) throw await R(s2);
      return x.parse(await s2.json());
    }
  }