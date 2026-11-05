// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 97033 range:27603..33262
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
97033: (e, t, n) => {
  var i = n(83170), o = n(98175), r = n(53804), s = n(32470), a = n(83121), c = n(10869), l = n(97464), d = n(72212), u = n(73856);
  class p extends o.Command.classBuilder().ep(s.commonParams).m(function(e2, t2, n2, i2) {
    return [r.getEndpointPlugin(n2, e2.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(a.AssumeRole$).build() {
  }
  class g extends o.Command.classBuilder().ep(s.commonParams).m(function(e2, t2, n2, i2) {
    return [r.getEndpointPlugin(n2, e2.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(a.AssumeRoleWithWebIdentity$).build() {
  }
  const m = { AssumeRoleCommand: p, AssumeRoleWithWebIdentityCommand: g };
  class h extends i.STSClient {
  }
  o.createAggregatedClient(m, h);
  const S = (e2) => {
    if ("string" == typeof e2?.Arn) {
      const t2 = e2.Arn.split(":");
      if (t2.length > 4 && "" !== t2[4]) return t2[4];
    }
  }, f = async (e2, t2, n2, i2 = {}) => {
    const o2 = "function" == typeof e2 ? await e2() : e2, r2 = "function" == typeof t2 ? await t2() : t2;
    let s2 = "";
    const a2 = o2 ?? r2 ?? (s2 = await d.stsRegionDefaultResolver(i2)());
    return n2?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${o2} (credential provider clientConfig)`, `${r2} (contextual client)`, `${s2} (STS default: AWS_REGION, profile region, or us-east-1)`), a2;
  }, v = (e2) => "h2" === e2?.metadata?.handlerProtocol, y = (e2, t2) => t2 ? class extends e2 {
    constructor(e3) {
      super(e3);
      for (const e4 of t2) this.middlewareStack.use(e4);
    }
  } : e2, E = (e2 = {}, t2) => /* @__PURE__ */ ((e3, t3) => {
    let n2, i2;
    return async (o2, r2) => {
      if (i2 = o2, !n2) {
        const { logger: o3 = e3?.parentClientConfig?.logger, profile: r3 = e3?.parentClientConfig?.profile, region: s3, requestHandler: a3 = e3?.parentClientConfig?.requestHandler, credentialProviderLogger: c3, userAgentAppId: l2 = e3?.parentClientConfig?.userAgentAppId } = e3, d3 = await f(s3, e3?.parentClientConfig?.region, c3, { logger: o3, profile: r3 }), u2 = !v(a3);
        n2 = new t3({ ...e3, userAgentAppId: l2, profile: r3, credentialDefaultProvider: () => async () => i2, region: d3, requestHandler: u2 ? a3 : void 0, logger: o3 });
      }
      const { Credentials: s2, AssumedRoleUser: a2 } = await n2.send(new p(r2));
      if (!s2 || !s2.AccessKeyId || !s2.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRole call with role ${r2.RoleArn}`);
      const c2 = S(a2), d2 = { accessKeyId: s2.AccessKeyId, secretAccessKey: s2.SecretAccessKey, sessionToken: s2.SessionToken, expiration: s2.Expiration, ...s2.CredentialScope && { credentialScope: s2.CredentialScope }, ...c2 && { accountId: c2 } };
      return l.setCredentialFeature(d2, "CREDENTIALS_STS_ASSUME_ROLE", "i"), d2;
    };
  })(e2, y(i.STSClient, t2)), P = (e2 = {}, t2) => /* @__PURE__ */ ((e3, t3) => {
    let n2;
    return async (i2) => {
      if (!n2) {
        const { logger: i3 = e3?.parentClientConfig?.logger, profile: o3 = e3?.parentClientConfig?.profile, region: r3, requestHandler: s3 = e3?.parentClientConfig?.requestHandler, credentialProviderLogger: a3, userAgentAppId: c2 = e3?.parentClientConfig?.userAgentAppId } = e3, l2 = await f(r3, e3?.parentClientConfig?.region, a3, { logger: i3, profile: o3 }), d2 = !v(s3);
        n2 = new t3({ ...e3, userAgentAppId: c2, profile: o3, region: l2, requestHandler: d2 ? s3 : void 0, logger: i3 });
      }
      const { Credentials: o2, AssumedRoleUser: r2 } = await n2.send(new g(i2));
      if (!o2 || !o2.AccessKeyId || !o2.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${i2.RoleArn}`);
      const s2 = S(r2), a2 = { accessKeyId: o2.AccessKeyId, secretAccessKey: o2.SecretAccessKey, sessionToken: o2.SessionToken, expiration: o2.Expiration, ...o2.CredentialScope && { credentialScope: o2.CredentialScope }, ...s2 && { accountId: s2 } };
      return s2 && l.setCredentialFeature(a2, "RESOLVED_ACCOUNT_ID", "T"), l.setCredentialFeature(a2, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), a2;
    };
  })(e2, y(i.STSClient, t2));
  t.$Command = o.Command, t.STSServiceException = u.STSServiceException, t.AssumeRoleCommand = p, t.AssumeRoleWithWebIdentityCommand = g, t.STS = h, t.decorateDefaultCredentialProvider = (e2) => (t2) => e2({ roleAssumer: E(t2), roleAssumerWithWebIdentity: P(t2), ...t2 }), t.getDefaultRoleAssumer = E, t.getDefaultRoleAssumerWithWebIdentity = P, Object.prototype.hasOwnProperty.call(i, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: i.__proto__ }), Object.keys(i).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = i[e2]);
  }), Object.prototype.hasOwnProperty.call(a, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: a.__proto__ }), Object.keys(a).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = a[e2]);
  }), Object.prototype.hasOwnProperty.call(c, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: c.__proto__ }), Object.keys(c).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = c[e2]);
  });
}