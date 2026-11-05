// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/538.js sha256:59937a807dffd12f7cc46b403bdda955eb0b59336adfd7cbeb5ae1e50bf20f3d
// module: 79109 range:12160..13315
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79109: (e, t, o) => {
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
}