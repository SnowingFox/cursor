// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 55909 range:1764407..1772226
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55909: (e, t, r) => {
    const { getSmithyContext: n, hasOwn: o } = r(11255);
    t.getSmithyContext = n;
    const { HttpRequest: s } = r(73931), { requestBuilder: i } = r(73931);
    t.requestBuilder = i;
    const { HttpApiKeyAuthLocation: a } = r(52391);
    const l = (e2, t2) => (r2, o2) => async (s2) => {
      const i2 = ((e3, t3) => {
        if (!t3 || 0 === t3.length) return e3;
        const r3 = [];
        for (const n2 of t3) for (const t4 of e3) t4.schemeId.split("#")[1] === n2 && r3.push(t4);
        for (const t4 of e3) r3.find(({ schemeId: e4 }) => e4 === t4.schemeId) || r3.push(t4);
        return r3;
      })(e2.httpAuthSchemeProvider(await t2.httpAuthSchemeParametersProvider(e2, o2, s2.input)), e2.authSchemePreference ? await e2.authSchemePreference() : []), a2 = (function(e3) {
        const t3 = /* @__PURE__ */ new Map();
        for (const r3 of e3) t3.set(r3.schemeId, r3);
        return t3;
      })(e2.httpAuthSchemes), l2 = n(o2), c2 = [];
      for (const r3 of i2) {
        const n2 = a2.get(r3.schemeId);
        if (!n2) {
          c2.push(`HttpAuthScheme \`${r3.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const s3 = n2.identityProvider(await t2.identityProviderConfigProvider(e2));
        if (!s3) {
          c2.push(`HttpAuthScheme \`${r3.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties: i3 = {}, signingProperties: u2 = {} } = r3.propertiesExtractor?.(e2, o2) || {};
        r3.identityProperties = Object.assign(r3.identityProperties || {}, i3), r3.signingProperties = Object.assign(r3.signingProperties || {}, u2), l2.selectedHttpAuthScheme = { httpAuthOption: r3, identity: await s3(r3.identityProperties), signer: n2.signer };
        break;
      }
      if (!l2.selectedHttpAuthScheme) throw new Error(c2.join("\n"));
      return r2(s2);
    }, c = { step: "serialize", tags: ["HTTP_AUTH_SCHEME"], name: "httpAuthSchemeMiddleware", override: true, relation: "before", toMiddleware: "endpointV2Middleware" }, u = { step: "serialize", tags: ["HTTP_AUTH_SCHEME"], name: "httpAuthSchemeMiddleware", override: true, relation: "before", toMiddleware: "serializerMiddleware" }, d = (e2) => (e3) => {
      throw e3;
    }, p = (e2, t2) => {
    }, h = (e2) => (e3, t2) => async (r2) => {
      if (!s.isInstance(r2.request)) return e3(r2);
      const o2 = n(t2).selectedHttpAuthScheme;
      if (!o2) throw new Error("No HttpAuthScheme was selected: unable to sign request");
      const { httpAuthOption: { signingProperties: i2 = {} }, identity: a2, signer: l2 } = o2, c2 = await e3({ ...r2, request: await l2.sign(r2.request, a2, i2) }).catch((l2.errorHandler || d)(i2));
      return (l2.successHandler || p)(c2.response, i2), c2;
    }, m = { step: "finalizeRequest", tags: ["HTTP_SIGNING"], name: "httpSigningMiddleware", aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"], override: true, relation: "after", toMiddleware: "retryMiddleware" }, f = async (e2, t2, r2, n2 = (e3) => e3, ...o2) => {
      let s2 = new e2(r2);
      return s2 = n2(s2) ?? s2, await t2.send(s2, ...o2);
    };
    const g = (e2, t2) => {
      let r2 = e2;
      const n2 = t2.split(".");
      for (const e3 of n2) {
        if (!r2 || "object" != typeof r2) return;
        r2 = r2[e3];
      }
      return r2;
    };
    const y = (e2) => function(t2) {
      return b(t2) && t2.expiration.getTime() - Date.now() < e2;
    }, v = 3e5, w = y(v), b = (e2) => void 0 !== e2.expiration;
    t.DefaultIdentityProviderConfig = class {
      authSchemes = /* @__PURE__ */ new Map();
      constructor(e2) {
        for (const t2 in e2) {
          if (!o(e2, t2)) continue;
          const r2 = e2[t2];
          void 0 !== r2 && this.authSchemes.set(t2, r2);
        }
      }
      getIdentityProvider(e2) {
        return this.authSchemes.get(e2);
      }
    }, t.EXPIRATION_MS = v, t.HttpApiKeyAuthSigner = class {
      async sign(e2, t2, r2) {
        if (!r2) throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        if (!r2.name) throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        if (!r2.in) throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        if (!t2.apiKey) throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        const n2 = s.clone(e2);
        if (r2.in === a.QUERY) n2.query[r2.name] = t2.apiKey;
        else {
          if (r2.in !== a.HEADER) throw new Error("request can only be signed with `apiKey` locations `query` or `header`, but found: `" + r2.in + "`");
          n2.headers[r2.name] = r2.scheme ? `${r2.scheme} ${t2.apiKey}` : t2.apiKey;
        }
        return n2;
      }
    }, t.HttpBearerAuthSigner = class {
      async sign(e2, t2, r2) {
        const n2 = s.clone(e2);
        if (!t2.token) throw new Error("request could not be signed with `token` since the `token` is not defined");
        return n2.headers.Authorization = `Bearer ${t2.token}`, n2;
      }
    }, t.NoAuthSigner = class {
      async sign(e2, t2, r2) {
        return e2;
      }
    }, t.createIsIdentityExpiredFunction = y, t.createPaginator = function(e2, t2, r2, n2, o2) {
      return async function* (s2, i2, ...a2) {
        const l2 = i2;
        let c2, u2 = s2.startingToken ?? l2[r2], d2 = true;
        for (; d2; ) {
          if (l2[r2] = u2, o2 && (l2[o2] = l2[o2] ?? s2.pageSize), !(s2.client instanceof e2)) throw new Error(`Invalid client, expected instance of ${e2.name}`);
          c2 = await f(t2, s2.client, i2, s2.withCommand, ...a2), yield c2;
          const p2 = u2;
          u2 = g(c2, n2), d2 = !(!u2 || s2.stopOnSameToken && u2 === p2);
        }
      };
    }, t.doesIdentityRequireRefresh = b, t.getHttpAuthSchemeEndpointRuleSetPlugin = (e2, { httpAuthSchemeParametersProvider: t2, identityProviderConfigProvider: r2 }) => ({ applyToStack: (n2) => {
      n2.addRelativeTo(l(e2, { httpAuthSchemeParametersProvider: t2, identityProviderConfigProvider: r2 }), c);
    } }), t.getHttpAuthSchemePlugin = (e2, { httpAuthSchemeParametersProvider: t2, identityProviderConfigProvider: r2 }) => ({ applyToStack: (n2) => {
      n2.addRelativeTo(l(e2, { httpAuthSchemeParametersProvider: t2, identityProviderConfigProvider: r2 }), u);
    } }), t.getHttpSigningPlugin = (e2) => ({ applyToStack: (e3) => {
      e3.addRelativeTo(h(), m);
    } }), t.httpAuthSchemeEndpointRuleSetMiddlewareOptions = c, t.httpAuthSchemeMiddleware = l, t.httpAuthSchemeMiddlewareOptions = u, t.httpSigningMiddleware = h, t.httpSigningMiddlewareOptions = m, t.isIdentityExpired = w, t.memoizeIdentityProvider = (e2, t2, r2) => {
      if (void 0 === e2) return;
      const n2 = "function" != typeof e2 ? async () => Promise.resolve(e2) : e2;
      let o2, s2, i2, a2 = false;
      const l2 = async (e3) => {
        s2 || (s2 = n2(e3));
        try {
          o2 = await s2, i2 = true, a2 = false;
        } finally {
          s2 = void 0;
        }
        return o2;
      };
      return void 0 === t2 ? async (e3) => (i2 && !e3?.forceRefresh || (o2 = await l2(e3)), o2) : async (e3) => (i2 && !e3?.forceRefresh || (o2 = await l2(e3)), a2 ? o2 : r2(o2) ? t2(o2) ? (await l2(e3), o2) : o2 : (a2 = true, o2));
    }, t.normalizeProvider = (e2) => {
      if ("function" == typeof e2) return e2;
      const t2 = Promise.resolve(e2);
      return () => t2;
    }, t.setFeature = function(e2, t2, r2) {
      e2.__smithy_context ? e2.__smithy_context.features || (e2.__smithy_context.features = {}) : e2.__smithy_context = { features: {} }, e2.__smithy_context.features[t2] = r2;
    };
  }