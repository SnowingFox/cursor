// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/478.js sha256:03d8c888857521b5af31d5761e74aee40e5eecd292b9b059b8748be5231d88b9
// module: 972 range:73..4632
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
972: (e, t, r) => {
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
}