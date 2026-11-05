// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/709.js sha256:178b16cc9cd8c06565bc9aac7b10691bae0eb6d67807efc2887d6c205e5f61c7
// module: 54086 range:11133..12293
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54086: (e, t, n) => {
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
}