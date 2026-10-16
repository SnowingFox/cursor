"use strict";
exports.id = 270, exports.ids = [270], exports.modules = { 47646: (e, s, o) => {
  o.d(s, { a: () => i, v: () => r });
  var t = o(91943), n = o(56589);
  const i = {}, r = async (e2) => {
    if (i[e2]) return i[e2];
    const s2 = (0, n.C)(e2), o2 = await (0, t.readFile)(s2, "utf8");
    return JSON.parse(o2);
  };
}, 56589: (e, s, o) => {
  o.d(s, { C: () => r });
  var t = o(76982), n = o(16928), i = o(44988);
  const r = (e2) => {
    const s2 = (0, t.createHash)("sha1").update(e2).digest("hex");
    return (0, n.join)((0, i.R)(), ".aws", "sso", "cache", `${s2}.json`);
  };
}, 61889: (e, s, o) => {
  o.d(s, { fromSSO: () => v });
  var t = o(63725), n = o(76964), i = o(29359), r = o(95519), a = o(65835), c = o(21945);
  const l = (e2) => Object.entries(e2).filter(([e3]) => e3.startsWith(a.I.SSO_SESSION + c.Q)).reduce((e3, [s2, o2]) => ({ ...e3, [s2.substring(s2.indexOf(c.Q) + 1)]: o2 }), {});
  var g = o(74285), f = o(85004);
  const p = () => ({}), d = async (e2 = {}) => (0, f.TA)(e2.configFilepath ?? (0, r.g)()).then(g.A).then(l).catch(p);
  var h = o(97464), w = o(38353);
  class u extends w.m {
    name = "TokenProviderError";
    constructor(e2, s2 = true) {
      super(e2, s2), Object.setPrototypeOf(this, u.prototype);
    }
  }
  var C = o(47646);
  const S = "To refresh this SSO session run 'aws sso login' with the corresponding profile.", _ = async (e2, s2, t2 = {}, n2) => {
    const { CreateTokenCommand: i2 } = await Promise.all([o.e(135), o.e(478)]).then(o.t.bind(o, 972, 23)), r2 = await (async (e3, s3 = {}, t3) => {
      const { SSOOIDCClient: n3 } = await Promise.all([o.e(135), o.e(478)]).then(o.t.bind(o, 972, 23)), i3 = (e4) => s3.clientConfig?.[e4] ?? s3.parentClientConfig?.[e4] ?? t3?.[e4];
      return new n3(Object.assign({}, s3.clientConfig ?? {}, { region: e3 ?? s3.clientConfig?.region, logger: i3("logger"), userAgentAppId: i3("userAgentAppId") }));
    })(s2, t2, n2);
    return r2.send(new i2({ clientId: e2.clientId, clientSecret: e2.clientSecret, refreshToken: e2.refreshToken, grantType: "refresh_token" }));
  }, k = (e2) => {
    if (e2.expiration && e2.expiration.getTime() < Date.now()) throw new u(`Token is expired. ${S}`, false);
  }, m = (e2, s2, o2 = false) => {
    if (void 0 === s2) throw new u(`Value not present for '${e2}' in SSO Token${o2 ? ". Cannot refresh" : ""}. ${S}`, false);
  };
  var y = o(56589), T = o(73024);
  const { writeFile: x } = T.promises, O = /* @__PURE__ */ new Date(0), I = (e2 = {}) => async ({ callerClientConfig: s2 } = {}) => {
    e2.logger?.debug("@aws-sdk/token-providers - fromSso");
    const o2 = await (0, i.Y)(e2), t2 = (0, n.Bz)({ profile: e2.profile ?? s2?.profile }), r2 = o2[t2];
    if (!r2) throw new u(`Profile '${t2}' could not be found in shared credentials file.`, false);
    if (!r2.sso_session) throw new u(`Profile '${t2}' is missing required property 'sso_session'.`);
    const a2 = r2.sso_session, c2 = (await d(e2))[a2];
    if (!c2) throw new u(`Sso session '${a2}' could not be found in shared credentials file.`, false);
    for (const e3 of ["sso_start_url", "sso_region"]) if (!c2[e3]) throw new u(`Sso session '${a2}' is missing required property '${e3}'.`, false);
    c2.sso_start_url;
    const l2 = c2.sso_region;
    let g2;
    try {
      g2 = await (0, C.v)(a2);
    } catch (e3) {
      throw new u(`The SSO session token associated with profile=${t2} was not found or is invalid. ${S}`, false);
    }
    m("accessToken", g2.accessToken), m("expiresAt", g2.expiresAt);
    const { accessToken: f2, expiresAt: p2 } = g2, h2 = { token: f2, expiration: new Date(p2) };
    if (h2.expiration.getTime() - Date.now() > 3e5) return h2;
    if (Date.now() - O.getTime() < 3e4) return k(h2), h2;
    m("clientId", g2.clientId, true), m("clientSecret", g2.clientSecret, true), m("refreshToken", g2.refreshToken, true);
    try {
      O.setTime(Date.now());
      const o3 = await _(g2, l2, e2, s2);
      m("accessToken", o3.accessToken), m("expiresIn", o3.expiresIn);
      const t3 = new Date(Date.now() + 1e3 * o3.expiresIn);
      try {
        await ((e3, s3) => {
          const o4 = (0, y.C)(e3), t4 = JSON.stringify(s3, null, 2);
          return x(o4, t4);
        })(a2, { ...g2, accessToken: o3.accessToken, expiresAt: t3.toISOString(), refreshToken: o3.refreshToken });
      } catch (e3) {
      }
      return { token: o3.accessToken, expiration: t3 };
    } catch (e3) {
      return k(h2), h2;
    }
  }, A = false, N = async ({ ssoStartUrl: e2, ssoSession: s2, ssoAccountId: n2, ssoRegion: i2, ssoRoleName: r2, ssoClient: a2, clientConfig: c2, parentClientConfig: l2, callerClientConfig: g2, profile: f2, filepath: p2, configFilepath: d2, ignoreCache: w2, logger: u2 }) => {
    let S2;
    const _2 = "To refresh this SSO session run aws sso login with the corresponding profile.";
    if (s2) try {
      const e3 = await I({ profile: f2, filepath: p2, configFilepath: d2, ignoreCache: w2 })();
      S2 = { accessToken: e3.token, expiresAt: new Date(e3.expiration).toISOString() };
    } catch (e3) {
      throw new t.C(e3.message, { tryNextLink: A, logger: u2 });
    }
    else try {
      S2 = await (0, C.v)(e2);
    } catch (e3) {
      throw new t.C(`The SSO session associated with this profile is invalid. ${_2}`, { tryNextLink: A, logger: u2 });
    }
    if (new Date(S2.expiresAt).getTime() - Date.now() <= 0) throw new t.C(`The SSO session associated with this profile has expired. ${_2}`, { tryNextLink: A, logger: u2 });
    const { accessToken: k2 } = S2, { SSOClient: m2, GetRoleCredentialsCommand: y2 } = await Promise.all([o.e(135), o.e(538)]).then(o.bind(o, 10664)), T2 = a2 || new m2(Object.assign({}, c2 ?? {}, { logger: c2?.logger ?? g2?.logger ?? l2?.logger, region: c2?.region ?? i2, userAgentAppId: c2?.userAgentAppId ?? g2?.userAgentAppId ?? l2?.userAgentAppId }));
    let x2;
    try {
      x2 = await T2.send(new y2({ accountId: n2, roleName: r2, accessToken: k2 }));
    } catch (e3) {
      throw new t.C(e3, { tryNextLink: A, logger: u2 });
    }
    const { roleCredentials: { accessKeyId: O2, secretAccessKey: N2, sessionToken: v2, expiration: $, credentialScope: R, accountId: D } = {} } = x2;
    if (!(O2 && N2 && v2 && $)) throw new t.C("SSO returns an invalid temporary credential.", { tryNextLink: A, logger: u2 });
    const b = { accessKeyId: O2, secretAccessKey: N2, sessionToken: v2, expiration: new Date($), ...R && { credentialScope: R }, ...D && { accountId: D } };
    return s2 ? (0, h.setCredentialFeature)(b, "CREDENTIALS_SSO", "s") : (0, h.setCredentialFeature)(b, "CREDENTIALS_SSO_LEGACY", "u"), b;
  }, v = (e2 = {}) => async ({ callerClientConfig: s2 } = {}) => {
    e2.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
    const { ssoStartUrl: o2, ssoAccountId: r2, ssoRegion: a2, ssoRoleName: c2, ssoSession: l2 } = e2, { ssoClient: g2 } = e2, f2 = (0, n.Bz)({ profile: e2.profile ?? s2?.profile });
    if (o2 || r2 || a2 || c2 || l2) {
      if (o2 && r2 && a2 && c2) return N({ ssoStartUrl: o2, ssoSession: l2, ssoAccountId: r2, ssoRegion: a2, ssoRoleName: c2, ssoClient: g2, clientConfig: e2.clientConfig, parentClientConfig: e2.parentClientConfig, callerClientConfig: e2.callerClientConfig, profile: f2, filepath: e2.filepath, configFilepath: e2.configFilepath, ignoreCache: e2.ignoreCache, logger: e2.logger });
      throw new t.C('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: e2.logger });
    }
    {
      const s3 = (await (0, i.Y)(e2))[f2];
      if (!s3) throw new t.C(`Profile ${f2} was not found.`, { logger: e2.logger });
      if (!(p2 = s3) || "string" != typeof p2.sso_start_url && "string" != typeof p2.sso_account_id && "string" != typeof p2.sso_session && "string" != typeof p2.sso_region && "string" != typeof p2.sso_role_name) throw new t.C(`Profile ${f2} is not configured with SSO credentials.`, { logger: e2.logger });
      if (s3?.sso_session) {
        const n3 = (await d(e2))[s3.sso_session], i2 = ` configurations in profile ${f2} and sso-session ${s3.sso_session}`;
        if (a2 && a2 !== n3.sso_region) throw new t.C("Conflicting SSO region" + i2, { tryNextLink: false, logger: e2.logger });
        if (o2 && o2 !== n3.sso_start_url) throw new t.C("Conflicting SSO start_url" + i2, { tryNextLink: false, logger: e2.logger });
        s3.sso_region = n3.sso_region, s3.sso_start_url = n3.sso_start_url;
      }
      const { sso_start_url: n2, sso_account_id: r3, sso_region: c3, sso_role_name: l3, sso_session: h2 } = ((e3, s4) => {
        const { sso_start_url: o3, sso_account_id: n3, sso_region: i2, sso_role_name: r4 } = e3;
        if (!(o3 && n3 && i2 && r4)) throw new t.C(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e3).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger: s4 });
        return e3;
      })(s3, e2.logger);
      return N({ ssoStartUrl: n2, ssoSession: h2, ssoAccountId: r3, ssoRegion: c3, ssoRoleName: l3, ssoClient: g2, clientConfig: e2.clientConfig, parentClientConfig: e2.parentClientConfig, callerClientConfig: e2.callerClientConfig, profile: f2, filepath: e2.filepath, configFilepath: e2.configFilepath, ignoreCache: e2.ignoreCache, logger: e2.logger });
    }
    var p2;
  };
} };
