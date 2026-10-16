"use strict";
exports.id = 538, exports.ids = [538], exports.modules = { 2763: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.defaultEndpointResolver = void 0;
  const n = o(85644), r = o(82713), s = o(69904), i = new r.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] });
  t.defaultEndpointResolver = (e2, t2 = {}) => i.get(e2, () => (0, r.decideEndpoint)(s.bdd, { endpointParams: e2, logger: t2.logger })), r.customEndpointFunctions.aws = n.awsEndpointFunctions;
}, 4122: (e, t, o) => {
  var n = o(50949), r = o(547), s = o(40619), i = o(54940), a = o(78520), c = o(55909), d = o(93353), u = o(58004), l = o(53804), p = o(39022), h = o(98175), g = o(79109), S = o(26732), f = o(72212), m = o(59344), E = o(43506), v = o(89238), P = o(88670);
  const y = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
  class R extends h.Client {
    config;
    constructor(...[e2]) {
      const t2 = S.getRuntimeConfig(e2 || {});
      super(t2), this.initConfig = t2;
      const o2 = (E2 = t2, Object.assign(E2, { useDualstackEndpoint: E2.useDualstackEndpoint ?? false, useFipsEndpoint: E2.useFipsEndpoint ?? false, defaultSigningName: "awsssoportal" }));
      var E2;
      const v2 = i.resolveUserAgentConfig(o2), P2 = p.resolveRetryConfig(v2), y2 = a.resolveRegionConfig(P2), R2 = n.resolveHostHeaderConfig(y2), O2 = l.resolveEndpointConfig(R2), C2 = ((e3, t3) => {
        const o3 = Object.assign(f.getAwsRegionExtensionConfiguration(e3), h.getDefaultExtensionConfiguration(e3), m.getHttpHandlerExtensionConfiguration(e3), ((e4) => {
          const t4 = e4.httpAuthSchemes;
          let o4 = e4.httpAuthSchemeProvider, n3 = e4.credentials;
          return { setHttpAuthScheme(e5) {
            const o5 = t4.findIndex((t5) => t5.schemeId === e5.schemeId);
            -1 === o5 ? t4.push(e5) : t4.splice(o5, 1, e5);
          }, httpAuthSchemes: () => t4, setHttpAuthSchemeProvider(e5) {
            o4 = e5;
          }, httpAuthSchemeProvider: () => o4, setCredentials(e5) {
            n3 = e5;
          }, credentials: () => n3 };
        })(e3));
        return t3.forEach((e4) => e4.configure(o3)), Object.assign(e3, f.resolveAwsRegionExtensionConfiguration(o3), h.resolveDefaultRuntimeConfig(o3), m.resolveHttpHandlerRuntimeConfig(o3), { httpAuthSchemes: (n2 = o3).httpAuthSchemes(), httpAuthSchemeProvider: n2.httpAuthSchemeProvider(), credentials: n2.credentials() });
        var n2;
      })(g.resolveHttpAuthSchemeConfig(O2), e2?.extensions || []);
      this.config = C2, this.middlewareStack.use(d.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(i.getUserAgentPlugin(this.config)), this.middlewareStack.use(p.getRetryPlugin(this.config)), this.middlewareStack.use(u.getContentLengthPlugin(this.config)), this.middlewareStack.use(n.getHostHeaderPlugin(this.config)), this.middlewareStack.use(r.getLoggerPlugin(this.config)), this.middlewareStack.use(s.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(c.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, { httpAuthSchemeParametersProvider: g.defaultSSOHttpAuthSchemeParametersProvider, identityProviderConfigProvider: async (e3) => new c.DefaultIdentityProviderConfig({ "aws.auth#sigv4": e3.credentials }) })), this.middlewareStack.use(c.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  class O extends h.Command.classBuilder().ep(y).m(function(e2, t2, o2, n2) {
    return [l.getEndpointPlugin(o2, e2.getEndpointParameterInstructions())];
  }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").sc(E.GetRoleCredentials$).build() {
  }
  const C = { GetRoleCredentialsCommand: O };
  class _ extends R {
  }
  h.createAggregatedClient(C, _), t.$Command = h.Command, t.__Client = h.Client, t.SSOServiceException = P.SSOServiceException, t.GetRoleCredentialsCommand = O, t.SSO = _, t.SSOClient = R, Object.prototype.hasOwnProperty.call(E, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: E.__proto__ }), Object.keys(E).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = E[e2]);
  }), Object.prototype.hasOwnProperty.call(v, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: v.__proto__ }), Object.keys(v).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = v[e2]);
  });
}, 10664: (e, t, o) => {
  o.d(t, { GetRoleCredentialsCommand: () => n.GetRoleCredentialsCommand, SSOClient: () => n.SSOClient });
  var n = o(4122);
}, 26732: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const n = o(16317).__importDefault(o(181)), r = o(97464), s = o(58571), i = o(67114), a = o(78520), c = o(23296), d = o(39022), u = o(28311), l = o(64702), p = o(98175), h = o(87738), g = o(50941), S = o(18020), f = o(89293);
  t.getRuntimeConfig = (e2) => {
    (0, p.emitWarningIfUnsupportedVersion)(process.version);
    const t2 = (0, g.resolveDefaultsModeConfig)(e2), o2 = () => t2().then(p.loadConfigsForDefaultMode), m = (0, f.getRuntimeConfig)(e2);
    (0, r.emitWarningIfUnsupportedVersion)(process.version);
    const E = { profile: e2?.profile, logger: m.logger };
    return { ...m, ...e2, runtime: "node", defaultsMode: t2, authSchemePreference: e2?.authSchemePreference ?? (0, u.loadConfig)(s.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, E), bodyLengthChecker: e2?.bodyLengthChecker ?? h.calculateBodyLength, defaultUserAgentProvider: e2?.defaultUserAgentProvider ?? (0, i.createDefaultUserAgentProvider)({ serviceId: m.serviceId, clientVersion: n.default.version }), maxAttempts: e2?.maxAttempts ?? (0, u.loadConfig)(d.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e2), region: e2?.region ?? (0, u.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, { ...a.NODE_REGION_CONFIG_FILE_OPTIONS, ...E }), requestHandler: l.NodeHttpHandler.create(e2?.requestHandler ?? o2), retryMode: e2?.retryMode ?? (0, u.loadConfig)({ ...d.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await o2()).retryMode || S.DEFAULT_RETRY_MODE }, e2), sha256: e2?.sha256 ?? c.Hash.bind(null, "sha256"), streamCollector: e2?.streamCollector ?? l.streamCollector, useDualstackEndpoint: e2?.useDualstackEndpoint ?? (0, u.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, E), useFipsEndpoint: e2?.useFipsEndpoint ?? (0, u.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, E), userAgentAppId: e2?.userAgentAppId ?? (0, u.loadConfig)(i.NODE_APP_ID_CONFIG_OPTIONS, E) };
  };
}, 43506: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.GetRoleCredentials$ = t.RoleCredentials$ = t.GetRoleCredentialsResponse$ = t.GetRoleCredentialsRequest$ = t.errorTypeRegistries = t.UnauthorizedException$ = t.TooManyRequestsException$ = t.ResourceNotFoundException$ = t.InvalidRequestException$ = t.SSOServiceException$ = void 0;
  const n = "client", r = "error", s = "http", i = "httpError", a = "httpHeader", c = "httpQuery", d = "message", u = "smithy.ts.sdk.synthetic.com.amazonaws.sso", l = "com.amazonaws.sso", p = o(93353), h = o(89238), g = o(88670), S = p.TypeRegistry.for(u);
  t.SSOServiceException$ = [-3, u, "SSOServiceException", 0, [], []], S.registerError(t.SSOServiceException$, g.SSOServiceException);
  const f = p.TypeRegistry.for(l);
  t.InvalidRequestException$ = [-3, l, "InvalidRequestException", { [r]: n, [i]: 400 }, [d], [0]], f.registerError(t.InvalidRequestException$, h.InvalidRequestException), t.ResourceNotFoundException$ = [-3, l, "ResourceNotFoundException", { [r]: n, [i]: 404 }, [d], [0]], f.registerError(t.ResourceNotFoundException$, h.ResourceNotFoundException), t.TooManyRequestsException$ = [-3, l, "TooManyRequestsException", { [r]: n, [i]: 429 }, [d], [0]], f.registerError(t.TooManyRequestsException$, h.TooManyRequestsException), t.UnauthorizedException$ = [-3, l, "UnauthorizedException", { [r]: n, [i]: 401 }, [d], [0]], f.registerError(t.UnauthorizedException$, h.UnauthorizedException), t.errorTypeRegistries = [S, f];
  var m = [0, l, "AccessTokenType", 8, 0], E = [0, l, "SecretAccessKeyType", 8, 0], v = [0, l, "SessionTokenType", 8, 0];
  t.GetRoleCredentialsRequest$ = [3, l, "GetRoleCredentialsRequest", 0, ["roleName", "accountId", "accessToken"], [[0, { [c]: "role_name" }], [0, { [c]: "account_id" }], [() => m, { [a]: "x-amz-sso_bearer_token" }]], 3], t.GetRoleCredentialsResponse$ = [3, l, "GetRoleCredentialsResponse", 0, ["roleCredentials"], [[() => t.RoleCredentials$, 0]]], t.RoleCredentials$ = [3, l, "RoleCredentials", 0, ["accessKeyId", "secretAccessKey", "sessionToken", "expiration"], [0, [() => E, 0], [() => v, 0], 1]], t.GetRoleCredentials$ = [9, l, "GetRoleCredentials", { [s]: ["GET", "/federation/credentials", 200] }, () => t.GetRoleCredentialsRequest$, () => t.GetRoleCredentialsResponse$];
}, 50333: (e, t, o) => {
  o.d(t, { K: () => n });
  class n {
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
      const t2 = new n({ ...e2, headers: { ...e2.headers } });
      var o2;
      return t2.query && (t2.query = (o2 = t2.query, Object.keys(o2).reduce((e3, t3) => {
        const n2 = o2[t3];
        return { ...e3, [t3]: Array.isArray(n2) ? [...n2] : n2 };
      }, {}))), t2;
    }
    static isInstance(e2) {
      if (!e2) return false;
      const t2 = e2;
      return "method" in t2 && "protocol" in t2 && "hostname" in t2 && "path" in t2 && "object" == typeof t2.query && "object" == typeof t2.headers;
    }
    clone() {
      return n.clone(this);
    }
  }
}, 69904: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.bdd = void 0;
  const n = o(82713), r = "ref", s = -1, i = true, a = "isSet", c = "PartitionResult", d = "booleanEquals", u = "getAttr", l = { [r]: "Endpoint" }, p = { [r]: c }, h = {}, g = [{ [r]: "Region" }], S = { conditions: [[a, [l]], [a, g], ["aws.partition", g, c], [d, [{ [r]: "UseFIPS" }, i]], [d, [{ [r]: "UseDualStack" }, i]], [d, [{ fn: u, argv: [p, "supportsDualStack"] }, i]], [d, [{ fn: u, argv: [p, "supportsFIPS"] }, i]], ["stringEquals", [{ fn: u, argv: [p, "name"] }, "aws-us-gov"]]], results: [[s], [s, "Invalid Configuration: FIPS and custom endpoint are not supported"], [s, "Invalid Configuration: Dualstack and custom endpoint are not supported"], [l, h], ["https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", h], [s, "FIPS and DualStack are enabled, but this partition does not support one or both"], ["https://portal.sso.{Region}.amazonaws.com", h], ["https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", h], [s, "FIPS is enabled but this partition does not support FIPS"], ["https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", h], [s, "DualStack is enabled but this partition does not support DualStack"], ["https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", h], [s, "Invalid Configuration: Missing Region"]] }, f = 1e8, m = new Int32Array([-1, 1, -1, 0, 13, 3, 1, 4, f + 12, 2, 5, f + 12, 3, 8, 6, 4, 7, f + 11, 5, f + 9, f + 10, 4, 11, 9, 6, 10, f + 8, 7, f + 6, f + 7, 5, 12, f + 5, 6, f + 4, f + 5, 3, f + 1, 14, 4, f + 2, f + 3]);
  t.bdd = n.BinaryDecisionDiagram.from(m, 2, S.conditions, S.results);
}, 79109: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.resolveHttpAuthSchemeConfig = t.defaultSSOHttpAuthSchemeProvider = t.defaultSSOHttpAuthSchemeParametersProvider = void 0;
  const n = o(58571), r = o(5944);
  t.defaultSSOHttpAuthSchemeParametersProvider = async (e2, t2, o2) => ({ operation: (0, r.getSmithyContext)(t2).operation, region: await (0, r.normalizeProvider)(e2.region)() || (() => {
    throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
  })() });
  t.defaultSSOHttpAuthSchemeProvider = (e2) => {
    const t2 = [];
    if ("GetRoleCredentials" === e2.operation) t2.push({ schemeId: "smithy.api#noAuth" });
    else t2.push((function(e3) {
      return { schemeId: "aws.auth#sigv4", signingProperties: { name: "awsssoportal", region: e3.region }, propertiesExtractor: (e4, t3) => ({ signingProperties: { config: e4, context: t3 } }) };
    })(e2));
    return t2;
  };
  t.resolveHttpAuthSchemeConfig = (e2) => {
    const t2 = (0, n.resolveAwsSdkSigV4Config)(e2);
    return Object.assign(t2, { authSchemePreference: (0, r.normalizeProvider)(e2.authSchemePreference ?? []) });
  };
}, 88670: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.SSOServiceException = t.__ServiceException = void 0;
  const n = o(98175);
  Object.defineProperty(t, "__ServiceException", { enumerable: true, get: function() {
    return n.ServiceException;
  } });
  class r extends n.ServiceException {
    constructor(e2) {
      super(e2), Object.setPrototypeOf(this, r.prototype);
    }
  }
  t.SSOServiceException = r;
}, 89238: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.UnauthorizedException = t.TooManyRequestsException = t.ResourceNotFoundException = t.InvalidRequestException = void 0;
  const n = o(88670);
  class r extends n.SSOServiceException {
    name = "InvalidRequestException";
    $fault = "client";
    constructor(e2) {
      super({ name: "InvalidRequestException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, r.prototype);
    }
  }
  t.InvalidRequestException = r;
  class s extends n.SSOServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(e2) {
      super({ name: "ResourceNotFoundException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, s.prototype);
    }
  }
  t.ResourceNotFoundException = s;
  class i extends n.SSOServiceException {
    name = "TooManyRequestsException";
    $fault = "client";
    constructor(e2) {
      super({ name: "TooManyRequestsException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, i.prototype);
    }
  }
  t.TooManyRequestsException = i;
  class a extends n.SSOServiceException {
    name = "UnauthorizedException";
    $fault = "client";
    constructor(e2) {
      super({ name: "UnauthorizedException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, a.prototype);
    }
  }
  t.UnauthorizedException = a;
}, 89293: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const n = o(58571), r = o(93664), s = o(55909), i = o(98175), a = o(55264), c = o(3865), d = o(49125), u = o(79109), l = o(2763), p = o(43506);
  t.getRuntimeConfig = (e2) => ({ apiVersion: "2019-06-10", base64Decoder: e2?.base64Decoder ?? c.fromBase64, base64Encoder: e2?.base64Encoder ?? c.toBase64, disableHostPrefix: e2?.disableHostPrefix ?? false, endpointProvider: e2?.endpointProvider ?? l.defaultEndpointResolver, extensions: e2?.extensions ?? [], httpAuthSchemeProvider: e2?.httpAuthSchemeProvider ?? u.defaultSSOHttpAuthSchemeProvider, httpAuthSchemes: e2?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (e3) => e3.getIdentityProvider("aws.auth#sigv4"), signer: new n.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (e3) => e3.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new s.NoAuthSigner() }], logger: e2?.logger ?? new i.NoOpLogger(), protocol: e2?.protocol ?? r.AwsRestJsonProtocol, protocolSettings: e2?.protocolSettings ?? { defaultNamespace: "com.amazonaws.sso", errorTypeRegistries: p.errorTypeRegistries, version: "2019-06-10", serviceTarget: "SWBPortalService" }, serviceId: e2?.serviceId ?? "SSO", urlParser: e2?.urlParser ?? a.parseUrl, utf8Decoder: e2?.utf8Decoder ?? d.fromUtf8, utf8Encoder: e2?.utf8Encoder ?? d.toUtf8 });
} };
