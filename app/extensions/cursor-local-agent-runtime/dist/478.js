"use strict";
exports.id = 478, exports.ids = [478], exports.modules = { 972: (e, t, r) => {
  var o = r(50949), n = r(547), i = r(40619), s = r(54940), c = r(78520), a = r(55909), p = r(93353), d = r(58004), l = r(53804), u = r(39022), h = r(98175), E = r(38527), S = r(50846), g = r(72212), x = r(59344), f = r(38632), v = r(19244), O = r(31297);
  const m = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
  class I extends h.Client {
    config;
    constructor(...[e2]) {
      const t2 = S.getRuntimeConfig(e2 || {});
      super(t2), this.initConfig = t2;
      const r2 = (f2 = t2, Object.assign(f2, { useDualstackEndpoint: f2.useDualstackEndpoint ?? false, useFipsEndpoint: f2.useFipsEndpoint ?? false, defaultSigningName: "sso-oauth" }));
      var f2;
      const v2 = s.resolveUserAgentConfig(r2), O2 = u.resolveRetryConfig(v2), m2 = c.resolveRegionConfig(O2), I2 = o.resolveHostHeaderConfig(m2), _2 = l.resolveEndpointConfig(I2), C2 = ((e3, t3) => {
        const r3 = Object.assign(g.getAwsRegionExtensionConfiguration(e3), h.getDefaultExtensionConfiguration(e3), x.getHttpHandlerExtensionConfiguration(e3), ((e4) => {
          const t4 = e4.httpAuthSchemes;
          let r4 = e4.httpAuthSchemeProvider, o3 = e4.credentials;
          return { setHttpAuthScheme(e5) {
            const r5 = t4.findIndex((t5) => t5.schemeId === e5.schemeId);
            -1 === r5 ? t4.push(e5) : t4.splice(r5, 1, e5);
          }, httpAuthSchemes: () => t4, setHttpAuthSchemeProvider(e5) {
            r4 = e5;
          }, httpAuthSchemeProvider: () => r4, setCredentials(e5) {
            o3 = e5;
          }, credentials: () => o3 };
        })(e3));
        return t3.forEach((e4) => e4.configure(r3)), Object.assign(e3, g.resolveAwsRegionExtensionConfiguration(r3), h.resolveDefaultRuntimeConfig(r3), x.resolveHttpHandlerRuntimeConfig(r3), { httpAuthSchemes: (o2 = r3).httpAuthSchemes(), httpAuthSchemeProvider: o2.httpAuthSchemeProvider(), credentials: o2.credentials() });
        var o2;
      })(E.resolveHttpAuthSchemeConfig(_2), e2?.extensions || []);
      this.config = C2, this.middlewareStack.use(p.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(s.getUserAgentPlugin(this.config)), this.middlewareStack.use(u.getRetryPlugin(this.config)), this.middlewareStack.use(d.getContentLengthPlugin(this.config)), this.middlewareStack.use(o.getHostHeaderPlugin(this.config)), this.middlewareStack.use(n.getLoggerPlugin(this.config)), this.middlewareStack.use(i.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(a.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, { httpAuthSchemeParametersProvider: E.defaultSSOOIDCHttpAuthSchemeParametersProvider, identityProviderConfigProvider: async (e3) => new a.DefaultIdentityProviderConfig({ "aws.auth#sigv4": e3.credentials }) })), this.middlewareStack.use(a.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  class _ extends h.Command.classBuilder().ep(m).m(function(e2, t2, r2, o2) {
    return [l.getEndpointPlugin(r2, e2.getEndpointParameterInstructions())];
  }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").sc(f.CreateToken$).build() {
  }
  const C = { CreateTokenCommand: _ };
  class P extends I {
  }
  h.createAggregatedClient(C, P);
  t.$Command = h.Command, t.__Client = h.Client, t.SSOOIDCServiceException = O.SSOOIDCServiceException, t.AccessDeniedExceptionReason = { KMS_ACCESS_DENIED: "KMS_AccessDeniedException" }, t.CreateTokenCommand = _, t.InvalidRequestExceptionReason = { KMS_DISABLED_KEY: "KMS_DisabledException", KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException", KMS_INVALID_STATE: "KMS_InvalidStateException", KMS_KEY_NOT_FOUND: "KMS_NotFoundException" }, t.SSOOIDC = P, t.SSOOIDCClient = I, Object.prototype.hasOwnProperty.call(f, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: f.__proto__ }), Object.keys(f).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = f[e2]);
  }), Object.prototype.hasOwnProperty.call(v, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: v.__proto__ }), Object.keys(v).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = v[e2]);
  });
}, 14167: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const o = r(58571), n = r(93664), i = r(55909), s = r(98175), c = r(55264), a = r(3865), p = r(49125), d = r(38527), l = r(43721), u = r(38632);
  t.getRuntimeConfig = (e2) => ({ apiVersion: "2019-06-10", base64Decoder: e2?.base64Decoder ?? a.fromBase64, base64Encoder: e2?.base64Encoder ?? a.toBase64, disableHostPrefix: e2?.disableHostPrefix ?? false, endpointProvider: e2?.endpointProvider ?? l.defaultEndpointResolver, extensions: e2?.extensions ?? [], httpAuthSchemeProvider: e2?.httpAuthSchemeProvider ?? d.defaultSSOOIDCHttpAuthSchemeProvider, httpAuthSchemes: e2?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (e3) => e3.getIdentityProvider("aws.auth#sigv4"), signer: new o.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (e3) => e3.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new i.NoAuthSigner() }], logger: e2?.logger ?? new s.NoOpLogger(), protocol: e2?.protocol ?? n.AwsRestJsonProtocol, protocolSettings: e2?.protocolSettings ?? { defaultNamespace: "com.amazonaws.ssooidc", errorTypeRegistries: u.errorTypeRegistries, version: "2019-06-10", serviceTarget: "AWSSSOOIDCService" }, serviceId: e2?.serviceId ?? "SSO OIDC", urlParser: e2?.urlParser ?? c.parseUrl, utf8Decoder: e2?.utf8Decoder ?? p.fromUtf8, utf8Encoder: e2?.utf8Encoder ?? p.toUtf8 });
}, 19244: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.UnsupportedGrantTypeException = t.UnauthorizedClientException = t.SlowDownException = t.InvalidScopeException = t.InvalidRequestException = t.InvalidGrantException = t.InvalidClientException = t.InternalServerException = t.ExpiredTokenException = t.AuthorizationPendingException = t.AccessDeniedException = void 0;
  const o = r(31297);
  class n extends o.SSOOIDCServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    error;
    reason;
    error_description;
    constructor(e2) {
      super({ name: "AccessDeniedException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, n.prototype), this.error = e2.error, this.reason = e2.reason, this.error_description = e2.error_description;
    }
  }
  t.AccessDeniedException = n;
  class i extends o.SSOOIDCServiceException {
    name = "AuthorizationPendingException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "AuthorizationPendingException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, i.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.AuthorizationPendingException = i;
  class s extends o.SSOOIDCServiceException {
    name = "ExpiredTokenException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "ExpiredTokenException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, s.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.ExpiredTokenException = s;
  class c extends o.SSOOIDCServiceException {
    name = "InternalServerException";
    $fault = "server";
    error;
    error_description;
    constructor(e2) {
      super({ name: "InternalServerException", $fault: "server", ...e2 }), Object.setPrototypeOf(this, c.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.InternalServerException = c;
  class a extends o.SSOOIDCServiceException {
    name = "InvalidClientException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "InvalidClientException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, a.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.InvalidClientException = a;
  class p extends o.SSOOIDCServiceException {
    name = "InvalidGrantException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "InvalidGrantException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, p.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.InvalidGrantException = p;
  class d extends o.SSOOIDCServiceException {
    name = "InvalidRequestException";
    $fault = "client";
    error;
    reason;
    error_description;
    constructor(e2) {
      super({ name: "InvalidRequestException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, d.prototype), this.error = e2.error, this.reason = e2.reason, this.error_description = e2.error_description;
    }
  }
  t.InvalidRequestException = d;
  class l extends o.SSOOIDCServiceException {
    name = "InvalidScopeException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "InvalidScopeException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, l.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.InvalidScopeException = l;
  class u extends o.SSOOIDCServiceException {
    name = "SlowDownException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "SlowDownException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, u.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.SlowDownException = u;
  class h extends o.SSOOIDCServiceException {
    name = "UnauthorizedClientException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "UnauthorizedClientException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, h.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.UnauthorizedClientException = h;
  class E extends o.SSOOIDCServiceException {
    name = "UnsupportedGrantTypeException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "UnsupportedGrantTypeException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, E.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.UnsupportedGrantTypeException = E;
}, 31297: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.SSOOIDCServiceException = t.__ServiceException = void 0;
  const o = r(98175);
  Object.defineProperty(t, "__ServiceException", { enumerable: true, get: function() {
    return o.ServiceException;
  } });
  class n extends o.ServiceException {
    constructor(e2) {
      super(e2), Object.setPrototypeOf(this, n.prototype);
    }
  }
  t.SSOOIDCServiceException = n;
}, 38527: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.resolveHttpAuthSchemeConfig = t.defaultSSOOIDCHttpAuthSchemeProvider = t.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
  const o = r(58571), n = r(5944);
  t.defaultSSOOIDCHttpAuthSchemeParametersProvider = async (e2, t2, r2) => ({ operation: (0, n.getSmithyContext)(t2).operation, region: await (0, n.normalizeProvider)(e2.region)() || (() => {
    throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
  })() });
  t.defaultSSOOIDCHttpAuthSchemeProvider = (e2) => {
    const t2 = [];
    if ("CreateToken" === e2.operation) t2.push({ schemeId: "smithy.api#noAuth" });
    else t2.push((function(e3) {
      return { schemeId: "aws.auth#sigv4", signingProperties: { name: "sso-oauth", region: e3.region }, propertiesExtractor: (e4, t3) => ({ signingProperties: { config: e4, context: t3 } }) };
    })(e2));
    return t2;
  };
  t.resolveHttpAuthSchemeConfig = (e2) => {
    const t2 = (0, o.resolveAwsSdkSigV4Config)(e2);
    return Object.assign(t2, { authSchemePreference: (0, n.normalizeProvider)(e2.authSchemePreference ?? []) });
  };
}, 38632: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.CreateToken$ = t.CreateTokenResponse$ = t.CreateTokenRequest$ = t.errorTypeRegistries = t.UnsupportedGrantTypeException$ = t.UnauthorizedClientException$ = t.SlowDownException$ = t.InvalidScopeException$ = t.InvalidRequestException$ = t.InvalidGrantException$ = t.InvalidClientException$ = t.InternalServerException$ = t.ExpiredTokenException$ = t.AuthorizationPendingException$ = t.AccessDeniedException$ = t.SSOOIDCServiceException$ = void 0;
  const o = "client", n = "error", i = "error_description", s = "http", c = "httpError", a = "reason", p = "refreshToken", d = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc", l = "com.amazonaws.ssooidc", u = r(93353), h = r(19244), E = r(31297), S = u.TypeRegistry.for(d);
  t.SSOOIDCServiceException$ = [-3, d, "SSOOIDCServiceException", 0, [], []], S.registerError(t.SSOOIDCServiceException$, E.SSOOIDCServiceException);
  const g = u.TypeRegistry.for(l);
  t.AccessDeniedException$ = [-3, l, "AccessDeniedException", { [n]: o, [c]: 400 }, [n, a, i], [0, 0, 0]], g.registerError(t.AccessDeniedException$, h.AccessDeniedException), t.AuthorizationPendingException$ = [-3, l, "AuthorizationPendingException", { [n]: o, [c]: 400 }, [n, i], [0, 0]], g.registerError(t.AuthorizationPendingException$, h.AuthorizationPendingException), t.ExpiredTokenException$ = [-3, l, "ExpiredTokenException", { [n]: o, [c]: 400 }, [n, i], [0, 0]], g.registerError(t.ExpiredTokenException$, h.ExpiredTokenException), t.InternalServerException$ = [-3, l, "InternalServerException", { [n]: "server", [c]: 500 }, [n, i], [0, 0]], g.registerError(t.InternalServerException$, h.InternalServerException), t.InvalidClientException$ = [-3, l, "InvalidClientException", { [n]: o, [c]: 401 }, [n, i], [0, 0]], g.registerError(t.InvalidClientException$, h.InvalidClientException), t.InvalidGrantException$ = [-3, l, "InvalidGrantException", { [n]: o, [c]: 400 }, [n, i], [0, 0]], g.registerError(t.InvalidGrantException$, h.InvalidGrantException), t.InvalidRequestException$ = [-3, l, "InvalidRequestException", { [n]: o, [c]: 400 }, [n, a, i], [0, 0, 0]], g.registerError(t.InvalidRequestException$, h.InvalidRequestException), t.InvalidScopeException$ = [-3, l, "InvalidScopeException", { [n]: o, [c]: 400 }, [n, i], [0, 0]], g.registerError(t.InvalidScopeException$, h.InvalidScopeException), t.SlowDownException$ = [-3, l, "SlowDownException", { [n]: o, [c]: 400 }, [n, i], [0, 0]], g.registerError(t.SlowDownException$, h.SlowDownException), t.UnauthorizedClientException$ = [-3, l, "UnauthorizedClientException", { [n]: o, [c]: 400 }, [n, i], [0, 0]], g.registerError(t.UnauthorizedClientException$, h.UnauthorizedClientException), t.UnsupportedGrantTypeException$ = [-3, l, "UnsupportedGrantTypeException", { [n]: o, [c]: 400 }, [n, i], [0, 0]], g.registerError(t.UnsupportedGrantTypeException$, h.UnsupportedGrantTypeException), t.errorTypeRegistries = [S, g];
  var x = [0, l, "AccessToken", 8, 0], f = [0, l, "ClientSecret", 8, 0], v = [0, l, "CodeVerifier", 8, 0], O = [0, l, "IdToken", 8, 0], m = [0, l, "RefreshToken", 8, 0];
  t.CreateTokenRequest$ = [3, l, "CreateTokenRequest", 0, ["clientId", "clientSecret", "grantType", "deviceCode", "code", p, "scope", "redirectUri", "codeVerifier"], [0, [() => f, 0], 0, 0, 0, [() => m, 0], 64, 0, [() => v, 0]], 3], t.CreateTokenResponse$ = [3, l, "CreateTokenResponse", 0, ["accessToken", "tokenType", "expiresIn", p, "idToken"], [[() => x, 0], 0, 1, [() => m, 0], [() => O, 0]]];
  t.CreateToken$ = [9, l, "CreateToken", { [s]: ["POST", "/token", 200] }, () => t.CreateTokenRequest$, () => t.CreateTokenResponse$];
}, 43721: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.defaultEndpointResolver = void 0;
  const o = r(85644), n = r(82713), i = r(52278), s = new n.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] });
  t.defaultEndpointResolver = (e2, t2 = {}) => s.get(e2, () => (0, n.decideEndpoint)(i.bdd, { endpointParams: e2, logger: t2.logger })), n.customEndpointFunctions.aws = o.awsEndpointFunctions;
}, 50333: (e, t, r) => {
  r.d(t, { K: () => o });
  class o {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(e2) {
      this.method = e2.method || "GET", this.hostname = e2.hostname || "localhost", this.port = e2.port, this.query = e2.query || {}, this.headers = e2.headers || {}, this.body = e2.body, this.protocol = e2.protocol ? ":" !== e2.protocol.slice(-1) ? `${e2.protocol}:` : e2.protocol : "https:", this.path = e2.path ? "/" !== e2.path.charAt(0) ? `/${e2.path}` : e2.path : "/", this.username = e2.username, this.password = e2.password, this.fragment = e2.fragment;
    }
    static clone(e2) {
      const t2 = new o({ ...e2, headers: { ...e2.headers } });
      var r2;
      return t2.query && (t2.query = (r2 = t2.query, Object.keys(r2).reduce((e3, t3) => {
        const o2 = r2[t3];
        return { ...e3, [t3]: Array.isArray(o2) ? [...o2] : o2 };
      }, {}))), t2;
    }
    static isInstance(e2) {
      if (!e2) return false;
      const t2 = e2;
      return "method" in t2 && "protocol" in t2 && "hostname" in t2 && "path" in t2 && "object" == typeof t2.query && "object" == typeof t2.headers;
    }
    clone() {
      return o.clone(this);
    }
  }
}, 50846: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const o = r(16317).__importDefault(r(181)), n = r(97464), i = r(58571), s = r(67114), c = r(78520), a = r(23296), p = r(39022), d = r(28311), l = r(64702), u = r(98175), h = r(87738), E = r(50941), S = r(18020), g = r(14167);
  t.getRuntimeConfig = (e2) => {
    (0, u.emitWarningIfUnsupportedVersion)(process.version);
    const t2 = (0, E.resolveDefaultsModeConfig)(e2), r2 = () => t2().then(u.loadConfigsForDefaultMode), x = (0, g.getRuntimeConfig)(e2);
    (0, n.emitWarningIfUnsupportedVersion)(process.version);
    const f = { profile: e2?.profile, logger: x.logger };
    return { ...x, ...e2, runtime: "node", defaultsMode: t2, authSchemePreference: e2?.authSchemePreference ?? (0, d.loadConfig)(i.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, f), bodyLengthChecker: e2?.bodyLengthChecker ?? h.calculateBodyLength, defaultUserAgentProvider: e2?.defaultUserAgentProvider ?? (0, s.createDefaultUserAgentProvider)({ serviceId: x.serviceId, clientVersion: o.default.version }), maxAttempts: e2?.maxAttempts ?? (0, d.loadConfig)(p.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e2), region: e2?.region ?? (0, d.loadConfig)(c.NODE_REGION_CONFIG_OPTIONS, { ...c.NODE_REGION_CONFIG_FILE_OPTIONS, ...f }), requestHandler: l.NodeHttpHandler.create(e2?.requestHandler ?? r2), retryMode: e2?.retryMode ?? (0, d.loadConfig)({ ...p.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await r2()).retryMode || S.DEFAULT_RETRY_MODE }, e2), sha256: e2?.sha256 ?? a.Hash.bind(null, "sha256"), streamCollector: e2?.streamCollector ?? l.streamCollector, useDualstackEndpoint: e2?.useDualstackEndpoint ?? (0, d.loadConfig)(c.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, f), useFipsEndpoint: e2?.useFipsEndpoint ?? (0, d.loadConfig)(c.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, f), userAgentAppId: e2?.userAgentAppId ?? (0, d.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, f) };
  };
}, 52278: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.bdd = void 0;
  const o = r(82713), n = "ref", i = -1, s = true, c = "isSet", a = "PartitionResult", p = "booleanEquals", d = "getAttr", l = { [n]: "Endpoint" }, u = { [n]: a }, h = {}, E = [{ [n]: "Region" }], S = { conditions: [[c, [l]], [c, E], ["aws.partition", E, a], [p, [{ [n]: "UseFIPS" }, s]], [p, [{ [n]: "UseDualStack" }, s]], [p, [{ fn: d, argv: [u, "supportsDualStack"] }, s]], [p, [{ fn: d, argv: [u, "supportsFIPS"] }, s]], ["stringEquals", [{ fn: d, argv: [u, "name"] }, "aws-us-gov"]]], results: [[i], [i, "Invalid Configuration: FIPS and custom endpoint are not supported"], [i, "Invalid Configuration: Dualstack and custom endpoint are not supported"], [l, h], ["https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", h], [i, "FIPS and DualStack are enabled, but this partition does not support one or both"], ["https://oidc.{Region}.amazonaws.com", h], ["https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", h], [i, "FIPS is enabled but this partition does not support FIPS"], ["https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", h], [i, "DualStack is enabled but this partition does not support DualStack"], ["https://oidc.{Region}.{PartitionResult#dnsSuffix}", h], [i, "Invalid Configuration: Missing Region"]] }, g = 1e8, x = new Int32Array([-1, 1, -1, 0, 13, 3, 1, 4, g + 12, 2, 5, g + 12, 3, 8, 6, 4, 7, g + 11, 5, g + 9, g + 10, 4, 11, 9, 6, 10, g + 8, 7, g + 6, g + 7, 5, 12, g + 5, 6, g + 4, g + 5, 3, g + 1, 14, 4, g + 2, g + 3]);
  t.bdd = o.BinaryDecisionDiagram.from(x, 2, S.conditions, S.results);
} };
