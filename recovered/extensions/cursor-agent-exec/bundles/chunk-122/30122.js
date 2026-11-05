// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/122.js sha256:703201f24e7e10b12495f20ea806c082ce52f8b559d5bc3017dcb3ec6b93012c
// module: 30122 range:78..1758
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30122: (e, r, n) => {
  n.r(r), n.d(r, { fromTokenFile: () => a, fromWebToken: () => c });
  var o = n(97464), t = n(63725), i = n(44698), s = n(73024);
  const c = (e2) => async (r2) => {
    e2.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
    const { roleArn: o2, roleSessionName: t2, webIdentityToken: i2, providerId: s2, policyArns: c2, policy: d2, durationSeconds: a2 } = e2;
    let { roleAssumerWithWebIdentity: l } = e2;
    if (!l) {
      const { getDefaultRoleAssumerWithWebIdentity: o3 } = await Promise.all([n.e(135), n.e(33), n.e(891)]).then(n.t.bind(n, 97033, 23));
      l = o3({ ...e2.clientConfig, credentialProviderLogger: e2.logger, parentClientConfig: { ...r2?.callerClientConfig, ...e2.parentClientConfig } }, e2.clientPlugins);
    }
    return l({ RoleArn: o2, RoleSessionName: t2 ?? `aws-sdk-js-session-${Date.now()}`, WebIdentityToken: i2, ProviderId: s2, PolicyArns: c2, Policy: d2, DurationSeconds: a2 });
  }, d = "AWS_WEB_IDENTITY_TOKEN_FILE", a = (e2 = {}) => async (r2) => {
    e2.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
    const n2 = e2?.webIdentityTokenFile ?? process.env[d], a2 = e2?.roleArn ?? process.env.AWS_ROLE_ARN, l = e2?.roleSessionName ?? process.env.AWS_ROLE_SESSION_NAME;
    if (!n2 || !a2) throw new t.C("Web identity configuration not specified", { logger: e2.logger });
    const g = await c({ ...e2, webIdentityToken: i.Z?.getTokenRecord?.()[n2] ?? (0, s.readFileSync)(n2, { encoding: "ascii" }), roleArn: a2, roleSessionName: l })(r2);
    return n2 === process.env[d] && (0, o.setCredentialFeature)(g, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h"), g;
  };
}