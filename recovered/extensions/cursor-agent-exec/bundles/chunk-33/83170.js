// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 83170 range:23251..25173
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83170: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.STSClient = t.__Client = void 0;
  const i = n(50949), o = n(547), r = n(40619), s = n(54940), a = n(78520), c = n(55909), l = n(93353), d = n(58004), u = n(53804), p = n(39022), g = n(98175);
  Object.defineProperty(t, "__Client", { enumerable: true, get: function() {
    return g.Client;
  } });
  const m = n(63122), h = n(32470), S = n(77859), f = n(89967);
  class v extends g.Client {
    config;
    constructor(...[e2]) {
      const t2 = (0, S.getRuntimeConfig)(e2 || {});
      super(t2), this.initConfig = t2;
      const n2 = (0, h.resolveClientEndpointParameters)(t2), g2 = (0, s.resolveUserAgentConfig)(n2), v2 = (0, p.resolveRetryConfig)(g2), y = (0, a.resolveRegionConfig)(v2), E = (0, i.resolveHostHeaderConfig)(y), P = (0, u.resolveEndpointConfig)(E), C = (0, m.resolveHttpAuthSchemeConfig)(P), A = (0, f.resolveRuntimeExtensions)(C, e2?.extensions || []);
      this.config = A, this.middlewareStack.use((0, l.getSchemaSerdePlugin)(this.config)), this.middlewareStack.use((0, s.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, p.getRetryPlugin)(this.config)), this.middlewareStack.use((0, d.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, i.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, o.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, r.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, c.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, { httpAuthSchemeParametersProvider: m.defaultSTSHttpAuthSchemeParametersProvider, identityProviderConfigProvider: async (e3) => new c.DefaultIdentityProviderConfig({ "aws.auth#sigv4": e3.credentials, "aws.auth#sigv4a": e3.credentials }) })), this.middlewareStack.use((0, c.getHttpSigningPlugin)(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  t.STSClient = v;
}