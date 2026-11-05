// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/889.js sha256:19cd32adff4d21d05c23a1e2045d9ddbdb1402b191e97af899be72f3c3efc763
// module: 61889 range:2662..11554
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61889: (e, s, o) => {
  o.d(s, { fromSSO: () => R });
  var t = o(63725), n = o(76964), i = o(29359), r = o(95519), a = o(65835), c = o(21945);
  const l = (e2) => Object.entries(e2).filter(([e3]) => e3.startsWith(a.I.SSO_SESSION + c.Q)).reduce((e3, [s2, o2]) => ({ ...e3, [s2.substring(s2.indexOf(c.Q) + 1)]: o2 }), {});
  var g = o(74285), f = o(85004);
  const d = () => ({}), p = async (e2 = {}) => (0, f.TA)(e2.configFilepath ?? (0, r.g)()).then(g.A).then(l).catch(d);
  var u = o(97464), h = o(38353);
  class w extends h.m {
    name = "TokenProviderError";
    constructor(e2, s2 = true) {
      super(e2, s2), Object.setPrototypeOf(this, w.prototype);
    }
  }
  var C = o(47646);
  const S = "To refresh this SSO session run 'aws sso login' with the corresponding profile.", _ = async (e2, s2, t2 = {}, n2) => {
    const { CreateTokenCommand: i2 } = await Promise.all([o.e(135), o.e(478)]).then(o.t.bind(o, 972, 23)), r2 = await (async (e3, s3 = {}, t3) => {
      const { SSOOIDCClient: n3 } = await Promise.all([o.e(135), o.e(478)]).then(o.t.bind(o, 972, 23)), i3 = (e4) => s3.clientConfig?.[e4] ?? s3.parentClientConfig?.[e4] ?? t3?.[e4];
      return new n3(Object.assign({}, s3.clientConfig ?? {}, { region: e3 ?? s3.clientConfig?.region, logger: i3("logger"), userAgentAppId: i3("userAgentAppId") }));
    })(s2, t2, n2);
    return r2.send(new i2({ clientId: e2.clientId, clientSecret: e2.clientSecret, refreshToken: e2.refreshToken, grantType: "refresh_token" }));
  }, m = (e2) => {
    if (e2.expiration && e2.expiration.getTime() < Date.now()) throw new w(`Token is expired. ${S}`, false);
  }, O = (e2, s2, o2 = false) => {
    if (void 0 === s2) throw new w(`Value not present for '${e2}' in SSO Token${o2 ? ". Cannot refresh" : ""}. ${S}`, false);
  };
  var T = o(56589), A = o(73024);
  const { writeFile: k } = A.promises, y = /* @__PURE__ */ new Date(0), I = (e2 = {}) => async ({ callerClientConfig: s2 } = {}) => {
    e2.logger?.debug("@aws-sdk/token-providers - fromSso");
    const o2 = await (0, i.Y)(e2), t2 = (0, n.Bz)({ profile: e2.profile ?? s2?.profile }), r2 = o2[t2];
    if (!r2) throw new w(`Profile '${t2}' could not be found in shared credentials file.`, false);
    if (!r2.sso_session) throw new w(`Profile '${t2}' is missing required property 'sso_session'.`);
    const a2 = r2.sso_session, c2 = (await p(e2))[a2];
    if (!c2) throw new w(`Sso session '${a2}' could not be found in shared credentials file.`, false);
    for (const e3 of ["sso_start_url", "sso_region"]) if (!c2[e3]) throw new w(`Sso session '${a2}' is missing required property '${e3}'.`, false);
    c2.sso_start_url;
    const l2 = c2.sso_region;
    let g2;
    try {
      g2 = await (0, C.v)(a2);
    } catch (e3) {
      throw new w(`The SSO session token associated with profile=${t2} was not found or is invalid. ${S}`, false);
    }
    O("accessToken", g2.accessToken), O("expiresAt", g2.expiresAt);
    const { accessToken: f2, expiresAt: d2 } = g2, u2 = { token: f2, expiration: new Date(d2) };
    if (u2.expiration.getTime() - Date.now() > 3e5) return u2;
    if (Date.now() - y.getTime() < 3e4) return m(u2), u2;
    O("clientId", g2.clientId, true), O("clientSecret", g2.clientSecret, true), O("refreshToken", g2.refreshToken, true);
    try {
      y.setTime(Date.now());
      const o3 = await _(g2, l2, e2, s2);
      O("accessToken", o3.accessToken), O("expiresIn", o3.expiresIn);
      const t3 = new Date(Date.now() + 1e3 * o3.expiresIn);
      try {
        await ((e3, s3) => {
          const o4 = (0, T.C)(e3), t4 = JSON.stringify(s3, null, 2);
          return k(o4, t4);
        })(a2, { ...g2, accessToken: o3.accessToken, expiresAt: t3.toISOString(), refreshToken: o3.refreshToken });
      } catch (e3) {
      }
      return { token: o3.accessToken, expiration: t3 };
    } catch (e3) {
      return m(u2), u2;
    }
  }, v = false, x = async ({ ssoStartUrl: e2, ssoSession: s2, ssoAccountId: n2, ssoRegion: i2, ssoRoleName: r2, ssoClient: a2, clientConfig: c2, parentClientConfig: l2, callerClientConfig: g2, profile: f2, filepath: d2, configFilepath: p2, ignoreCache: h2, logger: w2 }) => {
    let S2;
    const _2 = "To refresh this SSO session run aws sso login with the corresponding profile.";
    if (s2) try {
      const e3 = await I({ profile: f2, filepath: d2, configFilepath: p2, ignoreCache: h2 })();
      S2 = { accessToken: e3.token, expiresAt: new Date(e3.expiration).toISOString() };
    } catch (e3) {
      throw new t.C(e3.message, { tryNextLink: v, logger: w2 });
    }
    else try {
      S2 = await (0, C.v)(e2);
    } catch (e3) {
      throw new t.C(`The SSO session associated with this profile is invalid. ${_2}`, { tryNextLink: v, logger: w2 });
    }
    if (new Date(S2.expiresAt).getTime() - Date.now() <= 0) throw new t.C(`The SSO session associated with this profile has expired. ${_2}`, { tryNextLink: v, logger: w2 });
    const { accessToken: m2 } = S2, { SSOClient: O2, GetRoleCredentialsCommand: T2 } = await Promise.all([o.e(135), o.e(538)]).then(o.bind(o, 10664)), A2 = a2 || new O2(Object.assign({}, c2 ?? {}, { logger: c2?.logger ?? g2?.logger ?? l2?.logger, region: c2?.region ?? i2, userAgentAppId: c2?.userAgentAppId ?? g2?.userAgentAppId ?? l2?.userAgentAppId }));
    let k2;
    try {
      k2 = await A2.send(new T2({ accountId: n2, roleName: r2, accessToken: m2 }));
    } catch (e3) {
      throw new t.C(e3, { tryNextLink: v, logger: w2 });
    }
    const { roleCredentials: { accessKeyId: y2, secretAccessKey: x2, sessionToken: R2, expiration: $, credentialScope: b, accountId: F } = {} } = k2;
    if (!(y2 && x2 && R2 && $)) throw new t.C("SSO returns an invalid temporary credential.", { tryNextLink: v, logger: w2 });
    const N = { accessKeyId: y2, secretAccessKey: x2, sessionToken: R2, expiration: new Date($), ...b && { credentialScope: b }, ...F && { accountId: F } };
    return s2 ? (0, u.setCredentialFeature)(N, "CREDENTIALS_SSO", "s") : (0, u.setCredentialFeature)(N, "CREDENTIALS_SSO_LEGACY", "u"), N;
  }, R = (e2 = {}) => async ({ callerClientConfig: s2 } = {}) => {
    e2.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
    const { ssoStartUrl: o2, ssoAccountId: r2, ssoRegion: a2, ssoRoleName: c2, ssoSession: l2 } = e2, { ssoClient: g2 } = e2, f2 = (0, n.Bz)({ profile: e2.profile ?? s2?.profile });
    if (o2 || r2 || a2 || c2 || l2) {
      if (o2 && r2 && a2 && c2) return x({ ssoStartUrl: o2, ssoSession: l2, ssoAccountId: r2, ssoRegion: a2, ssoRoleName: c2, ssoClient: g2, clientConfig: e2.clientConfig, parentClientConfig: e2.parentClientConfig, callerClientConfig: e2.callerClientConfig, profile: f2, filepath: e2.filepath, configFilepath: e2.configFilepath, ignoreCache: e2.ignoreCache, logger: e2.logger });
      throw new t.C('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: e2.logger });
    }
    {
      const s3 = (await (0, i.Y)(e2))[f2];
      if (!s3) throw new t.C(`Profile ${f2} was not found.`, { logger: e2.logger });
      if (!(d2 = s3) || "string" != typeof d2.sso_start_url && "string" != typeof d2.sso_account_id && "string" != typeof d2.sso_session && "string" != typeof d2.sso_region && "string" != typeof d2.sso_role_name) throw new t.C(`Profile ${f2} is not configured with SSO credentials.`, { logger: e2.logger });
      if (s3?.sso_session) {
        const n3 = (await p(e2))[s3.sso_session], i2 = ` configurations in profile ${f2} and sso-session ${s3.sso_session}`;
        if (a2 && a2 !== n3.sso_region) throw new t.C("Conflicting SSO region" + i2, { tryNextLink: false, logger: e2.logger });
        if (o2 && o2 !== n3.sso_start_url) throw new t.C("Conflicting SSO start_url" + i2, { tryNextLink: false, logger: e2.logger });
        s3.sso_region = n3.sso_region, s3.sso_start_url = n3.sso_start_url;
      }
      const { sso_start_url: n2, sso_account_id: r3, sso_region: c3, sso_role_name: l3, sso_session: u2 } = ((e3, s4) => {
        const { sso_start_url: o3, sso_account_id: n3, sso_region: i2, sso_role_name: r4 } = e3;
        if (!(o3 && n3 && i2 && r4)) throw new t.C(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e3).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger: s4 });
        return e3;
      })(s3, e2.logger);
      return x({ ssoStartUrl: n2, ssoSession: u2, ssoAccountId: r3, ssoRegion: c3, ssoRoleName: l3, ssoClient: g2, clientConfig: e2.clientConfig, parentClientConfig: e2.parentClientConfig, callerClientConfig: e2.callerClientConfig, profile: f2, filepath: e2.filepath, configFilepath: e2.configFilepath, ignoreCache: e2.ignoreCache, logger: e2.logger });
    }
    var d2;
  };
}