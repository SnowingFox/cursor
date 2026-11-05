// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/478.js sha256:03d8c888857521b5af31d5761e74aee40e5eecd292b9b059b8748be5231d88b9
// module: 38527 range:11364..12525
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38527: (e, t, r) => {
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
}