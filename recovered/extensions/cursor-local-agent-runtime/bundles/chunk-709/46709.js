// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/709.js sha256:178b16cc9cd8c06565bc9aac7b10691bae0eb6d67807efc2887d6c205e5f61c7
// module: 46709 range:4773..9299
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
46709: (e, t, n) => {
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
}