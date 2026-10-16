"use strict";
exports.id = 741, exports.ids = [741], exports.modules = { 30122: (e, n, o) => {
  o.r(n), o.d(n, { fromTokenFile: () => l, fromWebToken: () => a });
  var r = o(97464), t = o(63725), i = o(44698), s = o(73024);
  const a = (e2) => async (n2) => {
    e2.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
    const { roleArn: r2, roleSessionName: t2, webIdentityToken: i2, providerId: s2, policyArns: a2, policy: d2, durationSeconds: l2 } = e2;
    let { roleAssumerWithWebIdentity: c } = e2;
    if (!c) {
      const { getDefaultRoleAssumerWithWebIdentity: r3 } = await Promise.all([o.e(135), o.e(33), o.e(891)]).then(o.t.bind(o, 97033, 23));
      c = r3({ ...e2.clientConfig, credentialProviderLogger: e2.logger, parentClientConfig: { ...n2?.callerClientConfig, ...e2.parentClientConfig } }, e2.clientPlugins);
    }
    return c({ RoleArn: r2, RoleSessionName: t2 ?? `aws-sdk-js-session-${Date.now()}`, WebIdentityToken: i2, ProviderId: s2, PolicyArns: a2, Policy: d2, DurationSeconds: l2 });
  }, d = "AWS_WEB_IDENTITY_TOKEN_FILE", l = (e2 = {}) => async (n2) => {
    e2.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
    const o2 = e2?.webIdentityTokenFile ?? process.env[d], l2 = e2?.roleArn ?? process.env.AWS_ROLE_ARN, c = e2?.roleSessionName ?? process.env.AWS_ROLE_SESSION_NAME;
    if (!o2 || !l2) throw new t.C("Web identity configuration not specified", { logger: e2.logger });
    const g = await a({ ...e2, webIdentityToken: i.Z?.getTokenRecord?.()[o2] ?? (0, s.readFileSync)(o2, { encoding: "ascii" }), roleArn: l2, roleSessionName: c })(n2);
    return o2 === process.env[d] && (0, r.setCredentialFeature)(g, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h"), g;
  };
}, 44698: (e, n, o) => {
  o.d(n, { Z: () => i });
  var r = o(47646), t = o(85004);
  const i = { getFileRecord: () => t.Jj, interceptFile(e2, n2) {
    t.Jj[e2] = Promise.resolve(n2);
  }, getTokenRecord: () => r.a, interceptToken(e2, n2) {
    r.a[e2] = n2;
  } };
}, 47646: (e, n, o) => {
  o.d(n, { a: () => i, v: () => s });
  var r = o(91943), t = o(56589);
  const i = {}, s = async (e2) => {
    if (i[e2]) return i[e2];
    const n2 = (0, t.C)(e2), o2 = await (0, r.readFile)(n2, "utf8");
    return JSON.parse(o2);
  };
}, 56589: (e, n, o) => {
  o.d(n, { C: () => s });
  var r = o(76982), t = o(16928), i = o(44988);
  const s = (e2) => {
    const n2 = (0, r.createHash)("sha1").update(e2).digest("hex");
    return (0, t.join)((0, i.R)(), ".aws", "sso", "cache", `${n2}.json`);
  };
} };
