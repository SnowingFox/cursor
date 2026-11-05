// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 63122 range:12202..15651
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
63122: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.resolveHttpAuthSchemeConfig = t.resolveStsAuthConfig = t.defaultSTSHttpAuthSchemeProvider = t.defaultSTSHttpAuthSchemeParametersProvider = void 0;
  const i = n(58571), o = n(6635), r = n(53804), s = n(5944), a = n(32780), c = n(83170);
  var l;
  function d(e2) {
    return { schemeId: "aws.auth#sigv4", signingProperties: { name: "sts", region: e2.region }, propertiesExtractor: (e3, t2) => ({ signingProperties: { config: e3, context: t2 } }) };
  }
  function u(e2) {
    return { schemeId: "aws.auth#sigv4a", signingProperties: { name: "sts", region: e2.region }, propertiesExtractor: (e3, t2) => ({ signingProperties: { config: e3, context: t2 } }) };
  }
  function p(e2) {
    return { schemeId: "smithy.api#noAuth" };
  }
  t.defaultSTSHttpAuthSchemeParametersProvider = (l = async (e2, t2, n2) => ({ operation: (0, s.getSmithyContext)(t2).operation, region: await (0, s.normalizeProvider)(e2.region)() || (() => {
    throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
  })() }), async (e2, t2, n2) => {
    if (!n2) throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
    const i2 = await l(e2, t2, n2), o2 = (0, s.getSmithyContext)(t2)?.commandInstance?.constructor?.getEndpointParameterInstructions;
    if (!o2) throw new Error(`getEndpointParameterInstructions() is not defined on '${t2.commandName}'`);
    const a2 = await (0, r.resolveParams)(n2, { getEndpointParameterInstructions: o2 }, e2);
    return Object.assign(i2, a2);
  });
  var g, m, h;
  t.defaultSTSHttpAuthSchemeProvider = (g = a.defaultEndpointResolver, m = (e2) => {
    const t2 = [];
    return "AssumeRoleWithWebIdentity" === e2.operation ? (t2.push({ schemeId: "smithy.api#noAuth" }), t2.push(u(e2))) : (t2.push(d(e2)), t2.push(u(e2))), t2;
  }, h = { "aws.auth#sigv4": d, "aws.auth#sigv4a": u, "smithy.api#noAuth": p }, (e2) => {
    const t2 = g(e2), n2 = t2.properties?.authSchemes;
    if (!n2) return m(e2);
    const i2 = [];
    for (const t3 of n2) {
      const { name: r2, properties: s2 = {}, ...a2 } = t3, c2 = r2.toLowerCase();
      let l2;
      if (r2 !== c2 && console.warn(`HttpAuthScheme has been normalized with lowercasing: '${r2}' to '${c2}'`), "sigv4a" === c2) {
        l2 = "aws.auth#sigv4a";
        const e3 = n2.find((e4) => {
          const t4 = e4.name.toLowerCase();
          return "sigv4a" !== t4 && t4.startsWith("sigv4");
        });
        if ("none" === o.SignatureV4MultiRegion.sigv4aDependency() && e3) continue;
      } else {
        if (!c2.startsWith("sigv4")) throw new Error(`Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${c2}'`);
        l2 = "aws.auth#sigv4";
      }
      const d2 = h[l2];
      if (!d2) throw new Error(`Could not find HttpAuthOption create function for '${l2}'`);
      const u2 = d2(e2);
      u2.schemeId = l2, u2.signingProperties = { ...u2.signingProperties || {}, ...a2, ...s2 }, i2.push(u2);
    }
    return i2;
  });
  t.resolveStsAuthConfig = (e2) => Object.assign(e2, { stsClientCtor: c.STSClient });
  t.resolveHttpAuthSchemeConfig = (e2) => {
    const n2 = (0, t.resolveStsAuthConfig)(e2), o2 = (0, i.resolveAwsSdkSigV4Config)(n2), r2 = (0, i.resolveAwsSdkSigV4AConfig)(o2);
    return Object.assign(r2, { authSchemePreference: (0, s.normalizeProvider)(e2.authSchemePreference ?? []) });
  };
}