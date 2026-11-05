// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8891 range:831836..854632
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8891: (e2, t2, r2) => {
    "use strict";
    let n2;
    async function o2(e3) {
      const t3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
      let r3 = "";
      const o3 = await (async function(e4) {
        return (await n2).getRandomValues(new Uint8Array(e4));
      })(e3);
      for (let n3 = 0; n3 < e3; n3++) {
        r3 += t3[o3[n3] % 66];
      }
      return r3;
    }
    async function s2(e3) {
      const t3 = await (await n2).subtle.digest("SHA-256", new TextEncoder().encode(e3));
      return btoa(String.fromCharCode(...new Uint8Array(t3))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
    }
    async function i2(e3) {
      if (e3 || (e3 = 43), e3 < 43 || e3 > 128) throw `Expected a length between 43 and 128. Received ${e3}.`;
      const t3 = await (async function(e4) {
        return await o2(e4);
      })(e3);
      return { code_verifier: t3, code_challenge: await s2(t3) };
    }
    r2.d(t2, { D_: () => x, j2: () => R, discoverAuthorizationServerMetadata: () => U, discoverOAuthProtectedResourceMetadata: () => D, exchangeAuthorization: () => V, extractWWWAuthenticateParams: () => J, selectResourceURL: () => M }), n2 = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? Promise.resolve().then(r2.t.bind(r2, 7598, 19)).then((e3) => e3.webcrypto);
    var a2 = r2(9116), c = r2(1165);
    const u = "custom";
    var l = r2(7381), d = r2(7888);
    const p = c.OZ().superRefine((e3, t3) => {
      if (!URL.canParse(e3)) return t3.addIssue({ code: u, message: "URL must be parseable", fatal: true }), l.tm;
    }).refine((e3) => {
      const t3 = new URL(e3);
      return "javascript:" !== t3.protocol && "data:" !== t3.protocol && "vbscript:" !== t3.protocol;
    }, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), f = c._H({ resource: c.Yj().url(), authorization_servers: c.YO(p).optional(), jwks_uri: c.Yj().url().optional(), scopes_supported: c.YO(c.Yj()).optional(), bearer_methods_supported: c.YO(c.Yj()).optional(), resource_signing_alg_values_supported: c.YO(c.Yj()).optional(), resource_name: c.Yj().optional(), resource_documentation: c.Yj().optional(), resource_policy_uri: c.Yj().url().optional(), resource_tos_uri: c.Yj().url().optional(), tls_client_certificate_bound_access_tokens: c.zM().optional(), authorization_details_types_supported: c.YO(c.Yj()).optional(), dpop_signing_alg_values_supported: c.YO(c.Yj()).optional(), dpop_bound_access_tokens_required: c.zM().optional() }), h = c._H({ issuer: c.Yj(), authorization_endpoint: p, token_endpoint: p, registration_endpoint: p.optional(), scopes_supported: c.YO(c.Yj()).optional(), response_types_supported: c.YO(c.Yj()), response_modes_supported: c.YO(c.Yj()).optional(), grant_types_supported: c.YO(c.Yj()).optional(), token_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(), token_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(), service_documentation: p.optional(), revocation_endpoint: p.optional(), revocation_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(), revocation_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(), introspection_endpoint: c.Yj().optional(), introspection_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(), introspection_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(), code_challenge_methods_supported: c.YO(c.Yj()).optional(), client_id_metadata_document_supported: c.zM().optional() }), m = c._H({ issuer: c.Yj(), authorization_endpoint: p, token_endpoint: p, userinfo_endpoint: p.optional(), jwks_uri: p, registration_endpoint: p.optional(), scopes_supported: c.YO(c.Yj()).optional(), response_types_supported: c.YO(c.Yj()), response_modes_supported: c.YO(c.Yj()).optional(), grant_types_supported: c.YO(c.Yj()).optional(), acr_values_supported: c.YO(c.Yj()).optional(), subject_types_supported: c.YO(c.Yj()), id_token_signing_alg_values_supported: c.YO(c.Yj()), id_token_encryption_alg_values_supported: c.YO(c.Yj()).optional(), id_token_encryption_enc_values_supported: c.YO(c.Yj()).optional(), userinfo_signing_alg_values_supported: c.YO(c.Yj()).optional(), userinfo_encryption_alg_values_supported: c.YO(c.Yj()).optional(), userinfo_encryption_enc_values_supported: c.YO(c.Yj()).optional(), request_object_signing_alg_values_supported: c.YO(c.Yj()).optional(), request_object_encryption_alg_values_supported: c.YO(c.Yj()).optional(), request_object_encryption_enc_values_supported: c.YO(c.Yj()).optional(), token_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(), token_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(), display_values_supported: c.YO(c.Yj()).optional(), claim_types_supported: c.YO(c.Yj()).optional(), claims_supported: c.YO(c.Yj()).optional(), service_documentation: c.Yj().optional(), claims_locales_supported: c.YO(c.Yj()).optional(), ui_locales_supported: c.YO(c.Yj()).optional(), claims_parameter_supported: c.zM().optional(), request_parameter_supported: c.zM().optional(), request_uri_parameter_supported: c.zM().optional(), require_request_uri_registration: c.zM().optional(), op_policy_uri: p.optional(), op_tos_uri: p.optional(), client_id_metadata_document_supported: c.zM().optional() }), g = c.Ik({ ...m.shape, ...h.pick({ code_challenge_methods_supported: true }).shape }), y = c.Ik({ access_token: c.Yj(), id_token: c.Yj().optional(), token_type: c.Yj(), expires_in: d.qG(c.rS, _).optional(), scope: c.Yj().optional(), refresh_token: c.Yj().optional() }).strip();
    var _;
    const v = c.Ik({ error: c.Yj(), error_description: c.Yj().optional(), error_uri: c.Yj().optional() }), w = p.optional().or(c.eu("").transform(() => {
    })), b = c.Ik({ redirect_uris: c.YO(p), token_endpoint_auth_method: c.Yj().optional(), grant_types: c.YO(c.Yj()).optional(), response_types: c.YO(c.Yj()).optional(), client_name: c.Yj().optional(), client_uri: p.optional(), logo_uri: w, scope: c.Yj().optional(), contacts: c.YO(c.Yj()).optional(), tos_uri: w, policy_uri: c.Yj().optional(), jwks_uri: p.optional(), jwks: c.bz().optional(), software_id: c.Yj().optional(), software_version: c.Yj().optional(), software_statement: c.Yj().optional() }).strip(), S = c.Ik({ client_id: c.Yj(), client_secret: c.Yj().optional(), client_id_issued_at: c.ai().optional(), client_secret_expires_at: c.ai().optional() }).strip(), k = b.merge(S);
    c.Ik({ error: c.Yj(), error_description: c.Yj().optional() }).strip(), c.Ik({ token: c.Yj(), token_type_hint: c.Yj().optional() }).strip();
    var E = r2(5977);
    class x extends Error {
      constructor(e3) {
        super(e3 ?? "Unauthorized");
      }
    }
    function T(e3, t3) {
      return true === t3?.isRetryableOAuthRefreshError?.(e3);
    }
    const O = "offline_access";
    function P(e3) {
      return e3 instanceof E.W5 && !/^HTTP 5\d\d:/.test(e3.message) && ("invalid_redirect_uri" === e3.errorCode || /redirect/i.test(e3.message));
    }
    const I = "code", C = "S256";
    function A(e3, t3, r3, n3) {
      const { client_id: o3, client_secret: s3 } = t3;
      switch (e3) {
        case "client_secret_basic":
          return void (function(e4, t4, r4) {
            if (!t4) throw new Error("client_secret_basic authentication requires a client_secret");
            const n4 = btoa(`${e4}:${t4}`);
            r4.set("Authorization", `Basic ${n4}`);
          })(o3, s3, r3);
        case "client_secret_post":
          return void (function(e4, t4, r4) {
            r4.set("client_id", e4), t4 && r4.set("client_secret", t4);
          })(o3, s3, n3);
        case "none":
          return void (function(e4, t4) {
            t4.set("client_id", e4);
          })(o3, n3);
        default:
          throw new Error(`Unsupported client authentication method: ${e3}`);
      }
    }
    async function $(e3) {
      const t3 = e3 instanceof Response ? e3.status : void 0, r3 = e3 instanceof Response ? await e3.text() : e3;
      try {
        const e4 = v.parse(JSON.parse(r3)), { error: t4, error_description: n3, error_uri: o3 } = e4;
        return new (E.WX[t4] || E.gP)(n3 || "", o3);
      } catch (e4) {
        const n3 = `${t3 ? `HTTP ${t3}: ` : ""}Invalid OAuth error response: ${e4}. Raw body: ${r3}`;
        return new E.gP(n3);
      }
    }
    async function R(e3, t3) {
      try {
        return await N(e3, t3);
      } catch (r3) {
        if (r3 instanceof Error && "OAuthRefreshTransientError" === r3.name) throw r3;
        if (r3 instanceof E.Pg || r3 instanceof E.g) return await e3.invalidateCredentials?.("all"), await N(e3, t3);
        if (r3 instanceof E.Gy) return await e3.invalidateCredentials?.("tokens"), await N(e3, t3);
        throw r3;
      }
    }
    async function N(e3, { serverUrl: t3, authorizationCode: r3, scope: n3, resourceMetadataUrl: o3, fetchFn: s3 }) {
      const a3 = e3.getOAuthHttpFetch?.(), c2 = a3 ?? s3;
      let u2, l2;
      try {
        u2 = await D(t3, { resourceMetadataUrl: o3 }, s3), u2.authorization_servers && u2.authorization_servers.length > 0 && (l2 = u2.authorization_servers[0]);
      } catch {
      }
      l2 || (l2 = new URL("/", t3));
      const d2 = await M(t3, e3, u2), p2 = await U(l2, { fetchFn: s3 }), f2 = (function(e4, t4, r4, n4) {
        const o4 = t4?.scopes_supported, s4 = e4 || o4?.join(" ") || r4;
        if (!s4 || ![o4, n4?.scopes_supported].some((e5) => Array.isArray(e5) && e5.includes(O))) return s4;
        const i3 = s4.split(/\s+/).filter((e5) => e5.length > 0);
        return i3.includes(O) ? s4 : [...i3, O].join(" ");
      })(n3, u2, e3.clientMetadata.scope, p2);
      let h2 = await Promise.resolve(e3.clientInformation());
      if (!h2) {
        if (void 0 !== r3) throw new Error("Existing OAuth client information is required when exchanging an authorization code");
        const t4 = true === p2?.client_id_metadata_document_supported, n4 = e3.clientMetadataUrl;
        if (n4 && !(function(e4) {
          if (!e4) return false;
          try {
            const t5 = new URL(e4);
            return "https:" === t5.protocol && "/" !== t5.pathname;
          } catch {
            return false;
          }
        })(n4)) throw new E.gr(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${n4}`);
        if (t4 && n4) h2 = { client_id: n4 }, await e3.saveClientInformation?.(h2);
        else {
          if (!e3.saveClientInformation) throw new Error("OAuth client information must be saveable for dynamic registration");
          const t5 = await (async function(e4, t6, { metadata: r4, clientMetadata: n5, fetchFn: o4 }) {
            await e4.prepareForClientRegistration?.();
            const s4 = String(e4.redirectUrl), i3 = n5.redirect_uris ?? [], a4 = i3.includes(s4) ? [...i3] : [...i3, s4], c3 = a4.length > 1 ? [a4, [s4]] : [a4];
            let u3;
            for (const e5 of c3) try {
              const s5 = await K(t6, { metadata: r4, clientMetadata: { ...n5, redirect_uris: e5 }, fetchFn: o4 });
              return s5.redirect_uris?.length ? s5 : { ...s5, redirect_uris: e5 };
            } catch (e6) {
              if (!P(e6)) throw e6;
              u3 = e6;
            }
            throw u3;
          })(e3, l2, { metadata: p2, clientMetadata: void 0 !== f2 ? { ...e3.clientMetadata, scope: f2 } : e3.clientMetadata, fetchFn: c2 });
          await e3.saveClientInformation(t5), h2 = t5;
        }
      }
      const m2 = !e3.redirectUrl;
      if (void 0 !== r3 || m2) {
        const t4 = await (async function(e4, t5, { metadata: r4, resource: n4, authorizationCode: o4, fetchFn: s4 } = {}) {
          const i3 = e4.clientMetadata.scope;
          let a4;
          e4.prepareTokenRequest && (a4 = await e4.prepareTokenRequest(i3));
          if (!a4) {
            if (!o4) throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
            if (!e4.redirectUrl) throw new Error("redirectUrl is required for authorization_code flow");
            a4 = B(o4, await e4.codeVerifier(), e4.redirectUrl);
          }
          const c3 = await e4.clientInformation();
          return L(t5, { metadata: r4, tokenRequestParams: a4, clientInformation: c3 ?? void 0, addClientAuthentication: e4.addClientAuthentication, resource: n4, fetchFn: s4 });
        })(e3, l2, { metadata: p2, resource: d2, authorizationCode: r3, fetchFn: c2 });
        return await e3.saveTokens(t4), "AUTHORIZED";
      }
      const g2 = await e3.tokens();
      if (g2?.refresh_token) try {
        await e3.prepareForRefresh?.();
        const t4 = await (async function(e4, { metadata: t5, clientInformation: r4, refreshToken: n4, resource: o4, addClientAuthentication: s4, fetchFn: i3 }) {
          const a4 = new URLSearchParams({ grant_type: "refresh_token", refresh_token: n4 }), c3 = await L(e4, { metadata: t5, tokenRequestParams: a4, clientInformation: r4, addClientAuthentication: s4, resource: o4, fetchFn: i3 });
          return { refresh_token: n4, ...c3 };
        })(l2, { metadata: p2, clientInformation: h2, refreshToken: g2.refresh_token, resource: d2, addClientAuthentication: e3.addClientAuthentication, fetchFn: c2 });
        return await e3.saveTokens(t4), "AUTHORIZED";
      } catch (t4) {
        if (t4 && "SiblingAlreadyRefreshedError" === t4.name) throw t4;
        const r4 = t4 instanceof E.W5, n4 = t4 instanceof E.gP, o4 = T(t4, e3), s4 = r4 && !n4 && !(t4 instanceof E.pv) || o4;
        if (e3.logRefreshCatchBranch?.({ errorIsOAuthError: r4, errorIsServerError: n4, errorIsRetryable: o4, willFallThrough: !s4, willRethrow: s4, errorName: t4 instanceof Error ? t4.name : typeof t4, errorMessage: t4 instanceof Error ? t4.message : String(t4), underlyingError: t4 }), await e3.releaseRefreshLeaseOnError?.(t4), t4 instanceof E.W5 && !(t4 instanceof E.gP) && !(t4 instanceof E.pv)) throw t4;
        if (T(t4, e3)) {
          const e4 = new Error(t4 instanceof Error ? t4.message : String(t4));
          throw e4.name = "OAuthRefreshTransientError", t4 instanceof Error && t4.stack && (e4.stack = t4.stack), e4;
        }
        if (t4 instanceof E.W5 && !(t4 instanceof E.gP)) throw t4;
      }
      const y2 = e3.state ? await e3.state() : void 0, { authorizationUrl: _2, codeVerifier: v2 } = await (async function(e4, { metadata: t4, clientInformation: r4, redirectUrl: n4, scope: o4, state: s4, resource: a4 }) {
        let c3;
        if (t4) {
          if (c3 = new URL(t4.authorization_endpoint), !t4.response_types_supported.includes(I)) throw new Error(`Incompatible auth server: does not support response type ${I}`);
          if (t4.code_challenge_methods_supported && !t4.code_challenge_methods_supported.includes(C)) throw new Error(`Incompatible auth server: does not support code challenge method ${C}`);
        } else c3 = new URL("/authorize", e4);
        const u3 = await i2(), l3 = u3.code_verifier, d3 = u3.code_challenge;
        c3.searchParams.set("response_type", I), c3.searchParams.set("client_id", r4.client_id), c3.searchParams.set("code_challenge", d3), c3.searchParams.set("code_challenge_method", C), c3.searchParams.set("redirect_uri", String(n4)), s4 && c3.searchParams.set("state", s4);
        o4 && c3.searchParams.set("scope", o4);
        o4?.includes("offline_access") && c3.searchParams.append("prompt", "consent");
        a4 && c3.searchParams.set("resource", a4.href);
        return { authorizationUrl: c3, codeVerifier: l3 };
      })(l2, { metadata: p2, clientInformation: h2, state: y2, redirectUrl: e3.redirectUrl, scope: f2, resource: d2 });
      return await e3.saveCodeVerifier(v2), await e3.redirectToAuthorization(_2), "REDIRECT";
    }
    async function M(e3, t3, r3) {
      const n3 = (function(e4) {
        const t4 = "string" == typeof e4 ? new URL(e4) : new URL(e4.href);
        return t4.hash = "", t4;
      })(e3);
      if (t3.validateResourceURL) return await t3.validateResourceURL(n3, r3?.resource);
      if (r3) {
        if (!(function({ requestedResource: e4, configuredResource: t4 }) {
          const r4 = "string" == typeof e4 ? new URL(e4) : new URL(e4.href), n4 = "string" == typeof t4 ? new URL(t4) : new URL(t4.href);
          if (r4.origin !== n4.origin) return false;
          if (r4.pathname.length < n4.pathname.length) return false;
          const o3 = r4.pathname.endsWith("/") ? r4.pathname : r4.pathname + "/", s3 = n4.pathname.endsWith("/") ? n4.pathname : n4.pathname + "/";
          return o3.startsWith(s3);
        })({ requestedResource: n3, configuredResource: r3.resource })) throw new Error(`Protected resource ${r3.resource} does not match expected ${n3} (or origin)`);
        return new URL(r3.resource);
      }
    }
    function J(e3) {
      const t3 = e3.headers.get("WWW-Authenticate");
      if (!t3) return {};
      const [r3, n3] = t3.split(" ");
      if ("bearer" !== r3.toLowerCase() || !n3) return {};
      const o3 = j(e3, "resource_metadata") || void 0;
      let s3;
      if (o3) try {
        s3 = new URL(o3);
      } catch {
      }
      return { resourceMetadataUrl: s3, scope: j(e3, "scope") || void 0, error: j(e3, "error") || void 0 };
    }
    function j(e3, t3) {
      const r3 = e3.headers.get("WWW-Authenticate");
      if (!r3) return null;
      const n3 = new RegExp(`${t3}=(?:"([^"]+)"|([^\\s,]+))`), o3 = r3.match(n3);
      return o3 ? o3[1] || o3[2] : null;
    }
    async function D(e3, t3, r3 = fetch) {
      const n3 = await z(e3, "oauth-protected-resource", r3, { protocolVersion: t3?.protocolVersion, metadataUrl: t3?.resourceMetadataUrl });
      if (!n3 || 404 === n3.status) throw await n3?.body?.cancel(), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
      if (!n3.ok) throw await n3.body?.cancel(), new Error(`HTTP ${n3.status} trying to load well-known OAuth protected resource metadata.`);
      return f.parse(await n3.json());
    }
    async function F(e3, t3, r3 = fetch) {
      try {
        return await r3(e3, { headers: t3 });
      } catch (n3) {
        if (n3 instanceof TypeError) return t3 ? F(e3, void 0, r3) : void 0;
        throw n3;
      }
    }
    async function q(e3, t3, r3 = fetch) {
      const n3 = { "MCP-Protocol-Version": t3 };
      return await F(e3, n3, r3);
    }
    async function z(e3, t3, r3, n3) {
      const o3 = new URL(e3), s3 = n3?.protocolVersion ?? a2.aE;
      let i3;
      if (n3?.metadataUrl) i3 = new URL(n3.metadataUrl);
      else {
        const e4 = (function(e5, t4 = "", r4 = {}) {
          return t4.endsWith("/") && (t4 = t4.slice(0, -1)), r4.prependPathname ? `${t4}/.well-known/${e5}` : `/.well-known/${e5}${t4}`;
        })(t3, o3.pathname);
        i3 = new URL(e4, n3?.metadataServerUrl ?? o3), i3.search = o3.search;
      }
      let c2 = await q(i3, s3, r3);
      if (!n3?.metadataUrl && (function(e4, t4) {
        return !e4 || e4.status >= 400 && e4.status < 500 && "/" !== t4;
      })(c2, o3.pathname)) {
        const e4 = new URL(`/.well-known/${t3}`, o3);
        c2 = await q(e4, s3, r3);
      }
      return c2;
    }
    async function U(e3, { fetchFn: t3 = fetch, protocolVersion: r3 = a2.aE } = {}) {
      const n3 = { "MCP-Protocol-Version": r3, Accept: "application/json" }, o3 = (function(e4) {
        const t4 = "string" == typeof e4 ? new URL(e4) : e4, r4 = [];
        if ("/" === t4.pathname) return r4.push({ url: new URL("/.well-known/oauth-authorization-server", t4.origin), type: "oauth" }), r4.push({ url: new URL("/.well-known/openid-configuration", t4.origin), type: "oidc" }), r4;
        let n4 = t4.pathname;
        return n4.endsWith("/") && (n4 = n4.slice(0, -1)), r4.push({ url: new URL(`/.well-known/oauth-authorization-server${n4}`, t4.origin), type: "oauth" }), r4.push({ url: new URL(`/.well-known/openid-configuration${n4}`, t4.origin), type: "oidc" }), r4.push({ url: new URL(`${n4}/.well-known/openid-configuration`, t4.origin), type: "oidc" }), r4;
      })(e3);
      for (const { url: e4, type: r4 } of o3) {
        const o4 = await F(e4, n3, t3);
        if (o4) {
          if (!o4.ok) {
            if (await o4.body?.cancel(), o4.status >= 400 && o4.status < 500) continue;
            throw new Error(`HTTP ${o4.status} trying to load ${"oauth" === r4 ? "OAuth" : "OpenID provider"} metadata from ${e4}`);
          }
          return "oauth" === r4 ? h.parse(await o4.json()) : g.parse(await o4.json());
        }
      }
    }
    function B(e3, t3, r3) {
      return new URLSearchParams({ grant_type: "authorization_code", code: e3, code_verifier: t3, redirect_uri: String(r3) });
    }
    async function L(e3, { metadata: t3, tokenRequestParams: r3, clientInformation: n3, addClientAuthentication: o3, resource: s3, fetchFn: i3 }) {
      const a3 = t3?.token_endpoint ? new URL(t3.token_endpoint) : new URL("/token", e3), c2 = new Headers({ "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" });
      if (s3 && r3.set("resource", s3.href), o3) await o3(c2, r3, a3, t3);
      else if (n3) {
        const e4 = (function(e5, t4) {
          const r4 = void 0 !== e5.client_secret;
          return 0 === t4.length ? r4 ? "client_secret_post" : "none" : "token_endpoint_auth_method" in e5 && e5.token_endpoint_auth_method && (n4 = e5.token_endpoint_auth_method, ["client_secret_basic", "client_secret_post", "none"].includes(n4)) && t4.includes(e5.token_endpoint_auth_method) ? e5.token_endpoint_auth_method : r4 && t4.includes("client_secret_basic") ? "client_secret_basic" : r4 && t4.includes("client_secret_post") ? "client_secret_post" : t4.includes("none") ? "none" : r4 ? "client_secret_post" : "none";
          var n4;
        })(n3, t3?.token_endpoint_auth_methods_supported ?? []);
        A(e4, n3, c2, r3);
      }
      const u2 = await (i3 ?? fetch)(a3, { method: "POST", headers: c2, body: r3 });
      if (!u2.ok) throw await $(u2);
      return y.parse(await u2.json());
    }
    async function V(e3, { metadata: t3, clientInformation: r3, authorizationCode: n3, codeVerifier: o3, redirectUri: s3, resource: i3, addClientAuthentication: a3, fetchFn: c2 }) {
      return L(e3, { metadata: t3, tokenRequestParams: B(n3, o3, s3), clientInformation: r3, addClientAuthentication: a3, resource: i3, fetchFn: c2 });
    }
    async function K(e3, { metadata: t3, clientMetadata: r3, fetchFn: n3 }) {
      let o3;
      if (t3) {
        if (!t3.registration_endpoint) throw new Error("Incompatible auth server: does not support dynamic client registration");
        o3 = new URL(t3.registration_endpoint);
      } else o3 = new URL("/register", e3);
      const s3 = await (n3 ?? fetch)(o3, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r3) });
      if (!s3.ok) throw await $(s3);
      return k.parse(await s3.json());
    }
  }