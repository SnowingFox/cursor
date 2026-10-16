"use strict";
exports.id = 122, exports.ids = [122, 741], exports.modules = { 30122: (e, r, n) => {
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
}, 44698: (e, r, n) => {
  n.d(r, { Z: () => i });
  var o = n(47646), t = n(85004);
  const i = { getFileRecord: () => t.Jj, interceptFile(e2, r2) {
    t.Jj[e2] = Promise.resolve(r2);
  }, getTokenRecord: () => o.a, interceptToken(e2, r2) {
    o.a[e2] = r2;
  } };
}, 44988: (e, r, n) => {
  n.d(r, { R: () => s });
  var o = n(70857), t = n(16928);
  const i = {}, s = () => {
    const { HOME: e2, USERPROFILE: r2, HOMEPATH: n2, HOMEDRIVE: s2 = `C:${t.sep}` } = process.env;
    if (e2) return e2;
    if (r2) return r2;
    if (n2) return `${s2}${n2}`;
    const c = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return i[c] || (i[c] = (0, o.homedir)()), i[c];
  };
}, 47646: (e, r, n) => {
  n.d(r, { a: () => i, v: () => s });
  var o = n(91943), t = n(56589);
  const i = {}, s = async (e2) => {
    if (i[e2]) return i[e2];
    const r2 = (0, t.C)(e2), n2 = await (0, o.readFile)(r2, "utf8");
    return JSON.parse(n2);
  };
}, 56589: (e, r, n) => {
  n.d(r, { C: () => s });
  var o = n(76982), t = n(16928), i = n(44988);
  const s = (e2) => {
    const r2 = (0, o.createHash)("sha1").update(e2).digest("hex");
    return (0, t.join)((0, i.R)(), ".aws", "sso", "cache", `${r2}.json`);
  };
}, 85004: (e, r, n) => {
  n.d(r, { Jj: () => i, TA: () => s });
  var o = n(51455);
  const t = {}, i = {}, s = (e2, r2) => void 0 !== i[e2] ? i[e2] : (t[e2] && !r2?.ignoreCache || (t[e2] = (0, o.readFile)(e2, "utf8")), t[e2]);
} };
