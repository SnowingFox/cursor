// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/538.js sha256:59937a807dffd12f7cc46b403bdda955eb0b59336adfd7cbeb5ae1e50bf20f3d
// module: 4122 range:533..4792
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4122: (e, t, o) => {
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
}