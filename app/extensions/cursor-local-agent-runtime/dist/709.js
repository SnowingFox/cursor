"use strict";
exports.id = 709, exports.ids = [709], exports.modules = { 7540: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.SigninServiceException = t.__ServiceException = void 0;
  const o = n(98175);
  Object.defineProperty(t, "__ServiceException", { enumerable: true, get: function() {
    return o.ServiceException;
  } });
  class r extends o.ServiceException {
    constructor(e2) {
      super(e2), Object.setPrototypeOf(this, r.prototype);
    }
  }
  t.SigninServiceException = r;
}, 36425: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.ValidationException = t.TooManyRequestsError = t.InternalServerException = t.AccessDeniedException = void 0;
  const o = n(7540);
  class r extends o.SigninServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    error;
    constructor(e2) {
      super({ name: "AccessDeniedException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, r.prototype), this.error = e2.error;
    }
  }
  t.AccessDeniedException = r;
  class i extends o.SigninServiceException {
    name = "InternalServerException";
    $fault = "server";
    error;
    constructor(e2) {
      super({ name: "InternalServerException", $fault: "server", ...e2 }), Object.setPrototypeOf(this, i.prototype), this.error = e2.error;
    }
  }
  t.InternalServerException = i;
  class s extends o.SigninServiceException {
    name = "TooManyRequestsError";
    $fault = "client";
    error;
    constructor(e2) {
      super({ name: "TooManyRequestsError", $fault: "client", ...e2 }), Object.setPrototypeOf(this, s.prototype), this.error = e2.error;
    }
  }
  t.TooManyRequestsError = s;
  class a extends o.SigninServiceException {
    name = "ValidationException";
    $fault = "client";
    error;
    constructor(e2) {
      super({ name: "ValidationException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, a.prototype), this.error = e2.error;
    }
  }
  t.ValidationException = a;
}, 41845: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.CreateOAuth2Token$ = t.CreateOAuth2TokenResponseBody$ = t.CreateOAuth2TokenResponse$ = t.CreateOAuth2TokenRequestBody$ = t.CreateOAuth2TokenRequest$ = t.AccessToken$ = t.errorTypeRegistries = t.ValidationException$ = t.TooManyRequestsError$ = t.InternalServerException$ = t.AccessDeniedException$ = t.SigninServiceException$ = void 0;
  const o = "accessKeyId", r = "accessToken", i = "client", s = "clientId", a = "codeVerifier", c = "error", u = "expiresIn", d = "grantType", p = "http", l = "httpError", g = "idToken", h = "jsonName", E = "message", S = "refreshToken", f = "redirectUri", m = "smithy.ts.sdk.synthetic.com.amazonaws.signin", v = "secretAccessKey", P = "sessionToken", O = "tokenType", _ = "com.amazonaws.signin", A = n(93353), C = n(36425), y = n(7540), R = A.TypeRegistry.for(m);
  t.SigninServiceException$ = [-3, m, "SigninServiceException", 0, [], []], R.registerError(t.SigninServiceException$, y.SigninServiceException);
  const I = A.TypeRegistry.for(_);
  t.AccessDeniedException$ = [-3, _, "AccessDeniedException", { [c]: i }, [c, E], [0, 0], 2], I.registerError(t.AccessDeniedException$, C.AccessDeniedException), t.InternalServerException$ = [-3, _, "InternalServerException", { [c]: "server", [l]: 500 }, [c, E], [0, 0], 2], I.registerError(t.InternalServerException$, C.InternalServerException), t.TooManyRequestsError$ = [-3, _, "TooManyRequestsError", { [c]: i, [l]: 429 }, [c, E], [0, 0], 2], I.registerError(t.TooManyRequestsError$, C.TooManyRequestsError), t.ValidationException$ = [-3, _, "ValidationException", { [c]: i, [l]: 400 }, [c, E], [0, 0], 2], I.registerError(t.ValidationException$, C.ValidationException), t.errorTypeRegistries = [R, I];
  var T = [0, _, "RefreshToken", 8, 0];
  t.AccessToken$ = [3, _, "AccessToken", 8, [o, v, P], [[0, { [h]: o }], [0, { [h]: v }], [0, { [h]: P }]], 3], t.CreateOAuth2TokenRequest$ = [3, _, "CreateOAuth2TokenRequest", 0, ["tokenInput"], [[() => t.CreateOAuth2TokenRequestBody$, 16]], 1], t.CreateOAuth2TokenRequestBody$ = [3, _, "CreateOAuth2TokenRequestBody", 0, [s, d, "code", f, a, S], [[0, { [h]: s }], [0, { [h]: d }], 0, [0, { [h]: f }], [0, { [h]: a }], [() => T, { [h]: S }]], 2], t.CreateOAuth2TokenResponse$ = [3, _, "CreateOAuth2TokenResponse", 0, ["tokenOutput"], [[() => t.CreateOAuth2TokenResponseBody$, 16]], 1], t.CreateOAuth2TokenResponseBody$ = [3, _, "CreateOAuth2TokenResponseBody", 0, [r, O, u, S, g], [[() => t.AccessToken$, { [h]: r }], [0, { [h]: O }], [1, { [h]: u }], [() => T, { [h]: S }], [0, { [h]: g }]], 4], t.CreateOAuth2Token$ = [9, _, "CreateOAuth2Token", { [p]: ["POST", "/v1/token", 200] }, () => t.CreateOAuth2TokenRequest$, () => t.CreateOAuth2TokenResponse$];
}, 46709: (e, t, n) => {
  var o = n(50949), r = n(547), i = n(40619), s = n(54940), a = n(78520), c = n(55909), u = n(93353), d = n(58004), p = n(53804), l = n(39022), g = n(98175), h = n(54086), E = n(54335), S = n(72212), f = n(59344), m = n(41845), v = n(36425), P = n(7540);
  const O = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
  class _ extends g.Client {
    config;
    constructor(...[e2]) {
      const t2 = E.getRuntimeConfig(e2 || {});
      super(t2), this.initConfig = t2;
      const n2 = (m2 = t2, Object.assign(m2, { useDualstackEndpoint: m2.useDualstackEndpoint ?? false, useFipsEndpoint: m2.useFipsEndpoint ?? false, defaultSigningName: "signin" }));
      var m2;
      const v2 = s.resolveUserAgentConfig(n2), P2 = l.resolveRetryConfig(v2), O2 = a.resolveRegionConfig(P2), _2 = o.resolveHostHeaderConfig(O2), A2 = p.resolveEndpointConfig(_2), C2 = ((e3, t3) => {
        const n3 = Object.assign(S.getAwsRegionExtensionConfiguration(e3), g.getDefaultExtensionConfiguration(e3), f.getHttpHandlerExtensionConfiguration(e3), ((e4) => {
          const t4 = e4.httpAuthSchemes;
          let n4 = e4.httpAuthSchemeProvider, o3 = e4.credentials;
          return { setHttpAuthScheme(e5) {
            const n5 = t4.findIndex((t5) => t5.schemeId === e5.schemeId);
            -1 === n5 ? t4.push(e5) : t4.splice(n5, 1, e5);
          }, httpAuthSchemes: () => t4, setHttpAuthSchemeProvider(e5) {
            n4 = e5;
          }, httpAuthSchemeProvider: () => n4, setCredentials(e5) {
            o3 = e5;
          }, credentials: () => o3 };
        })(e3));
        return t3.forEach((e4) => e4.configure(n3)), Object.assign(e3, S.resolveAwsRegionExtensionConfiguration(n3), g.resolveDefaultRuntimeConfig(n3), f.resolveHttpHandlerRuntimeConfig(n3), { httpAuthSchemes: (o2 = n3).httpAuthSchemes(), httpAuthSchemeProvider: o2.httpAuthSchemeProvider(), credentials: o2.credentials() });
        var o2;
      })(h.resolveHttpAuthSchemeConfig(A2), e2?.extensions || []);
      this.config = C2, this.middlewareStack.use(u.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(s.getUserAgentPlugin(this.config)), this.middlewareStack.use(l.getRetryPlugin(this.config)), this.middlewareStack.use(d.getContentLengthPlugin(this.config)), this.middlewareStack.use(o.getHostHeaderPlugin(this.config)), this.middlewareStack.use(r.getLoggerPlugin(this.config)), this.middlewareStack.use(i.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(c.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, { httpAuthSchemeParametersProvider: h.defaultSigninHttpAuthSchemeParametersProvider, identityProviderConfigProvider: async (e3) => new c.DefaultIdentityProviderConfig({ "aws.auth#sigv4": e3.credentials }) })), this.middlewareStack.use(c.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  class A extends g.Command.classBuilder().ep(O).m(function(e2, t2, n2, o2) {
    return [p.getEndpointPlugin(n2, e2.getEndpointParameterInstructions())];
  }).s("Signin", "CreateOAuth2Token", {}).n("SigninClient", "CreateOAuth2TokenCommand").sc(m.CreateOAuth2Token$).build() {
  }
  const C = { CreateOAuth2TokenCommand: A };
  class y extends _ {
  }
  g.createAggregatedClient(C, y);
  t.$Command = g.Command, t.__Client = g.Client, t.SigninServiceException = P.SigninServiceException, t.CreateOAuth2TokenCommand = A, t.OAuth2ErrorCode = { AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED", INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS", INVALID_REQUEST: "INVALID_REQUEST", SERVER_ERROR: "server_error", TOKEN_EXPIRED: "TOKEN_EXPIRED", USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED" }, t.Signin = y, t.SigninClient = _, Object.prototype.hasOwnProperty.call(m, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: m.__proto__ }), Object.keys(m).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = m[e2]);
  }), Object.prototype.hasOwnProperty.call(v, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: v.__proto__ }), Object.keys(v).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = v[e2]);
  });
}, 48349: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.bdd = void 0;
  const o = n(82713), r = "ref", i = -1, s = true, a = "isSet", c = "PartitionResult", u = "booleanEquals", d = "getAttr", p = "stringEquals", l = { [r]: "Endpoint" }, g = { [r]: c }, h = { fn: d, argv: [g, "name"] }, E = {}, S = [{ [r]: "Region" }], f = { conditions: [[a, [l]], [a, S], ["aws.partition", S, c], [u, [{ [r]: "UseFIPS" }, s]], [u, [{ [r]: "UseDualStack" }, s]], [u, [{ fn: d, argv: [g, "supportsDualStack"] }, s]], [u, [{ fn: d, argv: [g, "supportsFIPS"] }, s]], [p, [h, "aws"]], [p, [h, "aws-cn"]], [p, [h, "aws-us-gov"]]], results: [[i], [i, "Invalid Configuration: FIPS and custom endpoint are not supported"], [i, "Invalid Configuration: Dualstack and custom endpoint are not supported"], [l, E], ["https://{Region}.signin.aws.amazon.com", E], ["https://{Region}.signin.amazonaws.cn", E], ["https://{Region}.signin.amazonaws-us-gov.com", E], ["https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", E], [i, "FIPS and DualStack are enabled, but this partition does not support one or both"], ["https://signin-fips.{Region}.{PartitionResult#dnsSuffix}", E], [i, "FIPS is enabled but this partition does not support FIPS"], ["https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}", E], [i, "DualStack is enabled but this partition does not support DualStack"], ["https://signin.{Region}.{PartitionResult#dnsSuffix}", E], [i, "Invalid Configuration: Missing Region"]] }, m = 1e8, v = new Int32Array([-1, 1, -1, 0, 15, 3, 1, 4, m + 14, 2, 5, m + 14, 3, 11, 6, 4, 10, 7, 7, m + 4, 8, 8, m + 5, 9, 9, m + 6, m + 13, 5, m + 11, m + 12, 4, 13, 12, 6, m + 9, m + 10, 5, 14, m + 8, 6, m + 7, m + 8, 3, m + 1, 16, 4, m + 2, m + 3]);
  t.bdd = o.BinaryDecisionDiagram.from(v, 2, f.conditions, f.results);
}, 54086: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.resolveHttpAuthSchemeConfig = t.defaultSigninHttpAuthSchemeProvider = t.defaultSigninHttpAuthSchemeParametersProvider = void 0;
  const o = n(58571), r = n(5944);
  t.defaultSigninHttpAuthSchemeParametersProvider = async (e2, t2, n2) => ({ operation: (0, r.getSmithyContext)(t2).operation, region: await (0, r.normalizeProvider)(e2.region)() || (() => {
    throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
  })() });
  t.defaultSigninHttpAuthSchemeProvider = (e2) => {
    const t2 = [];
    if ("CreateOAuth2Token" === e2.operation) t2.push({ schemeId: "smithy.api#noAuth" });
    else t2.push((function(e3) {
      return { schemeId: "aws.auth#sigv4", signingProperties: { name: "signin", region: e3.region }, propertiesExtractor: (e4, t3) => ({ signingProperties: { config: e4, context: t3 } }) };
    })(e2));
    return t2;
  };
  t.resolveHttpAuthSchemeConfig = (e2) => {
    const t2 = (0, o.resolveAwsSdkSigV4Config)(e2);
    return Object.assign(t2, { authSchemePreference: (0, r.normalizeProvider)(e2.authSchemePreference ?? []) });
  };
}, 54335: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const o = n(16317).__importDefault(n(181)), r = n(97464), i = n(58571), s = n(67114), a = n(78520), c = n(23296), u = n(39022), d = n(28311), p = n(64702), l = n(98175), g = n(87738), h = n(50941), E = n(18020), S = n(84076);
  t.getRuntimeConfig = (e2) => {
    (0, l.emitWarningIfUnsupportedVersion)(process.version);
    const t2 = (0, h.resolveDefaultsModeConfig)(e2), n2 = () => t2().then(l.loadConfigsForDefaultMode), f = (0, S.getRuntimeConfig)(e2);
    (0, r.emitWarningIfUnsupportedVersion)(process.version);
    const m = { profile: e2?.profile, logger: f.logger };
    return { ...f, ...e2, runtime: "node", defaultsMode: t2, authSchemePreference: e2?.authSchemePreference ?? (0, d.loadConfig)(i.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, m), bodyLengthChecker: e2?.bodyLengthChecker ?? g.calculateBodyLength, defaultUserAgentProvider: e2?.defaultUserAgentProvider ?? (0, s.createDefaultUserAgentProvider)({ serviceId: f.serviceId, clientVersion: o.default.version }), maxAttempts: e2?.maxAttempts ?? (0, d.loadConfig)(u.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e2), region: e2?.region ?? (0, d.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, { ...a.NODE_REGION_CONFIG_FILE_OPTIONS, ...m }), requestHandler: p.NodeHttpHandler.create(e2?.requestHandler ?? n2), retryMode: e2?.retryMode ?? (0, d.loadConfig)({ ...u.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await n2()).retryMode || E.DEFAULT_RETRY_MODE }, e2), sha256: e2?.sha256 ?? c.Hash.bind(null, "sha256"), streamCollector: e2?.streamCollector ?? p.streamCollector, useDualstackEndpoint: e2?.useDualstackEndpoint ?? (0, d.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, m), useFipsEndpoint: e2?.useFipsEndpoint ?? (0, d.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, m), userAgentAppId: e2?.userAgentAppId ?? (0, d.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, m) };
  };
}, 58208: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.defaultEndpointResolver = void 0;
  const o = n(85644), r = n(82713), i = n(48349), s = new r.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] });
  t.defaultEndpointResolver = (e2, t2 = {}) => s.get(e2, () => (0, r.decideEndpoint)(i.bdd, { endpointParams: e2, logger: t2.logger })), r.customEndpointFunctions.aws = o.awsEndpointFunctions;
}, 84076: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const o = n(58571), r = n(93664), i = n(55909), s = n(98175), a = n(55264), c = n(3865), u = n(49125), d = n(54086), p = n(58208), l = n(41845);
  t.getRuntimeConfig = (e2) => ({ apiVersion: "2023-01-01", base64Decoder: e2?.base64Decoder ?? c.fromBase64, base64Encoder: e2?.base64Encoder ?? c.toBase64, disableHostPrefix: e2?.disableHostPrefix ?? false, endpointProvider: e2?.endpointProvider ?? p.defaultEndpointResolver, extensions: e2?.extensions ?? [], httpAuthSchemeProvider: e2?.httpAuthSchemeProvider ?? d.defaultSigninHttpAuthSchemeProvider, httpAuthSchemes: e2?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (e3) => e3.getIdentityProvider("aws.auth#sigv4"), signer: new o.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (e3) => e3.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new i.NoAuthSigner() }], logger: e2?.logger ?? new s.NoOpLogger(), protocol: e2?.protocol ?? r.AwsRestJsonProtocol, protocolSettings: e2?.protocolSettings ?? { defaultNamespace: "com.amazonaws.signin", errorTypeRegistries: l.errorTypeRegistries, version: "2023-01-01", serviceTarget: "Signin" }, serviceId: e2?.serviceId ?? "Signin", urlParser: e2?.urlParser ?? a.parseUrl, utf8Decoder: e2?.utf8Decoder ?? u.fromUtf8, utf8Encoder: e2?.utf8Encoder ?? u.toUtf8 });
} };
