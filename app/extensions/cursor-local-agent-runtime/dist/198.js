"use strict";
exports.id = 198, exports.ids = [198, 891], exports.modules = { 21945: (e, t, r) => {
  r.d(t, { Q: () => n });
  const n = ".";
}, 29359: (e, t, r) => {
  r.d(t, { Y: () => o });
  var n = r(61247);
  const o = async (e2) => {
    const t2 = await (0, n.p)(e2);
    return ((...e3) => {
      const t3 = {};
      for (const r2 of e3) for (const [e4, n2] of Object.entries(r2)) void 0 !== t3[e4] ? Object.assign(t3[e4], n2) : t3[e4] = n2;
      return t3;
    })(t2.configFile, t2.credentialsFile);
  };
}, 44988: (e, t, r) => {
  r.d(t, { R: () => i });
  var n = r(70857), o = r(16928);
  const s = {}, i = () => {
    const { HOME: e2, USERPROFILE: t2, HOMEPATH: r2, HOMEDRIVE: i2 = `C:${o.sep}` } = process.env;
    if (e2) return e2;
    if (t2) return t2;
    if (r2) return `${i2}${r2}`;
    const a = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return s[a] || (s[a] = (0, n.homedir)()), s[a];
  };
}, 50333: (e, t, r) => {
  r.d(t, { K: () => n });
  class n {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(e2) {
      this.method = e2.method || "GET", this.hostname = e2.hostname || "localhost", this.port = e2.port, this.query = e2.query || {}, this.headers = e2.headers || {}, this.body = e2.body, this.protocol = e2.protocol ? ":" !== e2.protocol.slice(-1) ? `${e2.protocol}:` : e2.protocol : "https:", this.path = e2.path ? "/" !== e2.path.charAt(0) ? `/${e2.path}` : e2.path : "/", this.username = e2.username, this.password = e2.password, this.fragment = e2.fragment;
    }
    static clone(e2) {
      const t2 = new n({ ...e2, headers: { ...e2.headers } });
      var r2;
      return t2.query && (t2.query = (r2 = t2.query, Object.keys(r2).reduce((e3, t3) => {
        const n2 = r2[t3];
        return { ...e3, [t3]: Array.isArray(n2) ? [...n2] : n2 };
      }, {}))), t2;
    }
    static isInstance(e2) {
      if (!e2) return false;
      const t2 = e2;
      return "method" in t2 && "protocol" in t2 && "hostname" in t2 && "path" in t2 && "object" == typeof t2.query && "object" == typeof t2.headers;
    }
    clone() {
      return n.clone(this);
    }
  }
}, 61198: (e, t, r) => {
  r.d(t, { fromIni: () => S });
  var n = r(29359), o = r(76964), s = r(63725), i = r(97464), a = r(34661);
  const c = (e2) => (0, i.setCredentialFeature)(e2, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"), l = (e2, { profile: t2, logger: r2 }) => {
    const n2 = "string" == typeof e2.source_profile && void 0 === e2.credential_source;
    return n2 && r2?.debug?.(`    ${t2} isAssumeRoleWithSourceProfile source_profile=${e2.source_profile}`), n2;
  }, d = (e2, { profile: t2, logger: r2 }) => {
    const n2 = "string" == typeof e2.credential_source && void 0 === e2.source_profile;
    return n2 && r2?.debug?.(`    ${t2} isCredentialSourceProfile credential_source=${e2.credential_source}`), n2;
  }, g = async (e2, t2, n2, l2, d2 = {}, g2) => {
    n2.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
    const u2 = t2[e2], { source_profile: p2, region: h2 } = u2;
    if (!n2.roleAssumer) {
      const { getDefaultRoleAssumer: e3 } = await Promise.all([r.e(135), r.e(33)]).then(r.t.bind(r, 97033, 23));
      n2.roleAssumer = e3({ ...n2.clientConfig, credentialProviderLogger: n2.logger, parentClientConfig: { ...l2, ...n2?.parentClientConfig, region: h2 ?? n2?.parentClientConfig?.region ?? l2?.region } }, n2.clientPlugins);
    }
    if (p2 && p2 in d2) throw new s.C(`Detected a cycle attempting to resolve credentials for profile ${(0, o.Bz)(n2)}. Profiles visited: ` + Object.keys(d2).join(", "), { logger: n2.logger });
    n2.logger?.debug("@aws-sdk/credential-provider-ini - finding credential resolver using " + (p2 ? `source_profile=[${p2}]` : `profile=[${e2}]`));
    const _2 = p2 ? g2(p2, t2, n2, l2, { ...d2, [p2]: true }, f(t2[p2] ?? {})) : (await ((e3, t3, n3) => {
      const o2 = { EcsContainer: async (e4) => {
        const { fromHttp: t4 } = await r.e(736).then(r.bind(r, 93355)), { fromContainerMetadata: o3 } = await r.e(754).then(r.bind(r, 41516));
        return n3?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), async () => (0, a.c)(t4(e4 ?? {}), o3(e4))().then(c);
      }, Ec2InstanceMetadata: async (e4) => {
        n3?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
        const { fromInstanceMetadata: t4 } = await r.e(754).then(r.bind(r, 41516));
        return async () => t4(e4)().then(c);
      }, Environment: async (e4) => {
        n3?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
        const { fromEnv: t4 } = await r.e(238).then(r.bind(r, 58238));
        return async () => t4(e4)().then(c);
      } };
      if (e3 in o2) return o2[e3];
      throw new s.C(`Unsupported credential source in profile ${t3}. Got ${e3}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, { logger: n3 });
    })(u2.credential_source, e2, n2.logger)(n2))();
    if (f(u2)) return _2.then((e3) => (0, i.setCredentialFeature)(e3, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
    {
      const t3 = { RoleArn: u2.role_arn, RoleSessionName: u2.role_session_name || `aws-sdk-js-${Date.now()}`, ExternalId: u2.external_id, DurationSeconds: parseInt(u2.duration_seconds || "3600", 10) }, { mfa_serial: r2 } = u2;
      if (r2) {
        if (!n2.mfaCodeProvider) throw new s.C(`Profile ${e2} requires multi-factor authentication, but no MFA code callback was provided.`, { logger: n2.logger, tryNextLink: false });
        t3.SerialNumber = r2, t3.TokenCode = await n2.mfaCodeProvider(r2);
      }
      const o2 = await _2;
      return n2.roleAssumer(o2, t3).then((e3) => (0, i.setCredentialFeature)(e3, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
    }
  }, f = (e2) => !e2.role_arn && !!e2.credential_source;
  var u = r(50333), p = r(85004), h = r(77598), _ = r(73024), y = r(48161), w = r(76760);
  class C {
    profileData;
    init;
    callerClientConfig;
    static REFRESH_THRESHOLD = 3e5;
    constructor(e2, t2, r2) {
      this.profileData = e2, this.init = t2, this.callerClientConfig = r2;
    }
    async loadCredentials() {
      const e2 = await this.loadToken();
      if (!e2) throw new s.C(`Failed to load a token for session ${this.loginSession}, please re-authenticate using aws login`, { tryNextLink: false, logger: this.logger });
      const t2 = e2.accessToken, r2 = Date.now();
      return new Date(t2.expiresAt).getTime() - r2 <= C.REFRESH_THRESHOLD ? this.refresh(e2) : { accessKeyId: t2.accessKeyId, secretAccessKey: t2.secretAccessKey, sessionToken: t2.sessionToken, accountId: t2.accountId, expiration: new Date(t2.expiresAt) };
    }
    get logger() {
      return this.init?.logger;
    }
    get loginSession() {
      return this.profileData.login_session;
    }
    async refresh(e2) {
      const { SigninClient: t2, CreateOAuth2TokenCommand: n2 } = await Promise.all([r.e(135), r.e(709)]).then(r.t.bind(r, 46709, 23)), { logger: o2, userAgentAppId: i2 } = this.callerClientConfig ?? {}, a2 = ((e3) => "h2" === e3?.metadata?.handlerProtocol)(this.callerClientConfig?.requestHandler) ? void 0 : this.callerClientConfig?.requestHandler, c2 = new t2({ credentials: { accessKeyId: "", secretAccessKey: "" }, region: this.profileData.region ?? await this.callerClientConfig?.region?.() ?? process.env.AWS_REGION, requestHandler: a2, logger: o2, userAgentAppId: i2, ...this.init?.clientConfig });
      this.createDPoPInterceptor(c2.middlewareStack);
      const l2 = { tokenInput: { clientId: e2.clientId, refreshToken: e2.refreshToken, grantType: "refresh_token" } };
      try {
        const t3 = await c2.send(new n2(l2)), { accessKeyId: r2, secretAccessKey: o3, sessionToken: i3 } = t3.tokenOutput?.accessToken ?? {}, { refreshToken: a3, expiresIn: d2 } = t3.tokenOutput ?? {};
        if (!(r2 && o3 && i3 && a3)) throw new s.C("Token refresh response missing required fields", { logger: this.logger, tryNextLink: false });
        const g2 = 1e3 * (d2 ?? 900), f2 = new Date(Date.now() + g2), u2 = { ...e2, accessToken: { ...e2.accessToken, accessKeyId: r2, secretAccessKey: o3, sessionToken: i3, expiresAt: f2.toISOString() }, refreshToken: a3 };
        await this.saveToken(u2);
        const p2 = u2.accessToken;
        return { accessKeyId: p2.accessKeyId, secretAccessKey: p2.secretAccessKey, sessionToken: p2.sessionToken, accountId: p2.accountId, expiration: f2 };
      } catch (e3) {
        if ("AccessDeniedException" === e3.name) {
          let t3;
          switch (e3.error) {
            case "TOKEN_EXPIRED":
              t3 = "Your session has expired. Please reauthenticate.";
              break;
            case "USER_CREDENTIALS_CHANGED":
              t3 = "Unable to refresh credentials because of a change in your password. Please reauthenticate with your new password.";
              break;
            case "INSUFFICIENT_PERMISSIONS":
              t3 = "Unable to refresh credentials due to insufficient permissions. You may be missing permission for the 'CreateOAuth2Token' action.";
              break;
            default:
              t3 = `Failed to refresh token: ${String(e3)}. Please re-authenticate using \`aws login\``;
          }
          throw new s.C(t3, { logger: this.logger, tryNextLink: false });
        }
        throw new s.C(`Failed to refresh token: ${String(e3)}. Please re-authenticate using aws login`, { logger: this.logger });
      }
    }
    async loadToken() {
      const e2 = this.getTokenFilePath();
      try {
        let t2;
        try {
          t2 = await (0, p.TA)(e2, { ignoreCache: this.init?.ignoreCache });
        } catch {
          t2 = await _.promises.readFile(e2, "utf8");
        }
        const r2 = JSON.parse(t2), n2 = ["accessToken", "clientId", "refreshToken", "dpopKey"].filter((e3) => !r2[e3]);
        if (r2.accessToken?.accountId || n2.push("accountId"), n2.length > 0) throw new s.C(`Token validation failed, missing fields: ${n2.join(", ")}`, { logger: this.logger, tryNextLink: false });
        return r2;
      } catch (t2) {
        throw new s.C(`Failed to load token from ${e2}: ${String(t2)}`, { logger: this.logger, tryNextLink: false });
      }
    }
    async saveToken(e2) {
      const t2 = this.getTokenFilePath(), r2 = (0, w.dirname)(t2);
      try {
        await _.promises.mkdir(r2, { recursive: true });
      } catch (e3) {
      }
      await _.promises.writeFile(t2, JSON.stringify(e2, null, 2), "utf8");
    }
    getTokenFilePath() {
      const e2 = process.env.AWS_LOGIN_CACHE_DIRECTORY ?? (0, w.join)((0, y.homedir)(), ".aws", "login", "cache"), t2 = Buffer.from(this.loginSession, "utf8"), r2 = (0, h.createHash)("sha256").update(t2).digest("hex");
      return (0, w.join)(e2, `${r2}.json`);
    }
    derToRawSignature(e2) {
      let t2 = 2;
      if (2 !== e2[t2]) throw new Error("Invalid DER signature");
      t2++;
      const r2 = e2[t2++];
      let n2 = e2.subarray(t2, t2 + r2);
      if (t2 += r2, 2 !== e2[t2]) throw new Error("Invalid DER signature");
      t2++;
      const o2 = e2[t2++];
      let s2 = e2.subarray(t2, t2 + o2);
      n2 = 0 === n2[0] ? n2.subarray(1) : n2, s2 = 0 === s2[0] ? s2.subarray(1) : s2;
      const i2 = Buffer.concat([Buffer.alloc(32 - n2.length), n2]), a2 = Buffer.concat([Buffer.alloc(32 - s2.length), s2]);
      return Buffer.concat([i2, a2]);
    }
    createDPoPInterceptor(e2) {
      e2.add((e3) => async (t2) => {
        if (u.K.isInstance(t2.request)) {
          const e4 = t2.request, r2 = `${e4.protocol}//${e4.hostname}${e4.port ? `:${e4.port}` : ""}${e4.path}`, n2 = await this.generateDpop(e4.method, r2);
          e4.headers = { ...e4.headers, DPoP: n2 };
        }
        return e3(t2);
      }, { step: "finalizeRequest", name: "dpopInterceptor", override: true });
    }
    async generateDpop(e2 = "POST", t2) {
      const r2 = await this.loadToken();
      try {
        const n2 = (0, h.createPrivateKey)({ key: r2.dpopKey, format: "pem", type: "sec1" }), o2 = (0, h.createPublicKey)(n2).export({ format: "der", type: "spki" });
        let s2 = -1;
        for (let e3 = 0; e3 < o2.length; e3++) if (4 === o2[e3]) {
          s2 = e3;
          break;
        }
        const i2 = o2.slice(s2 + 1, s2 + 33), a2 = o2.slice(s2 + 33, s2 + 65), c2 = { alg: "ES256", typ: "dpop+jwt", jwk: { kty: "EC", crv: "P-256", x: i2.toString("base64url"), y: a2.toString("base64url") } }, l2 = { jti: crypto.randomUUID(), htm: e2, htu: t2, iat: Math.floor(Date.now() / 1e3) }, d2 = Buffer.from(JSON.stringify(c2)).toString("base64url"), g2 = `${d2}.${Buffer.from(JSON.stringify(l2)).toString("base64url")}`, f2 = (0, h.sign)("sha256", Buffer.from(g2), n2), u2 = this.derToRawSignature(f2);
        return `${g2}.${u2.toString("base64url")}`;
      } catch (e3) {
        throw new s.C(`Failed to generate Dpop proof: ${e3 instanceof Error ? e3.message : String(e3)}`, { logger: this.logger, tryNextLink: false });
      }
    }
  }
  const m = async (e2, t2, r2) => {
    const a2 = await (c2 = { ...t2, profile: e2 }, async ({ callerClientConfig: e3 } = {}) => {
      c2?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
      const t3 = await (0, n.Y)(c2 || {}), r3 = (0, o.Bz)({ profile: c2?.profile ?? e3?.profile }), a3 = t3[r3];
      if (!a3?.login_session) throw new s.C(`Profile ${r3} does not contain login_session.`, { tryNextLink: true, logger: c2?.logger });
      const l2 = new C(a3, c2, e3), d2 = await l2.loadCredentials();
      return (0, i.setCredentialFeature)(d2, "CREDENTIALS_LOGIN", "AD");
    })({ callerClientConfig: r2 });
    var c2;
    return (0, i.setCredentialFeature)(a2, "CREDENTIALS_PROFILE_LOGIN", "AC");
  }, E = (e2) => Boolean(e2) && "object" == typeof e2 && "string" == typeof e2.aws_access_key_id && "string" == typeof e2.aws_secret_access_key && ["undefined", "string"].indexOf(typeof e2.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof e2.aws_account_id) > -1, I = async (e2, t2) => {
    t2?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
    const r2 = { accessKeyId: e2.aws_access_key_id, secretAccessKey: e2.aws_secret_access_key, sessionToken: e2.aws_session_token, ...e2.aws_credential_scope && { credentialScope: e2.aws_credential_scope }, ...e2.aws_account_id && { accountId: e2.aws_account_id } };
    return (0, i.setCredentialFeature)(r2, "CREDENTIALS_PROFILE", "n");
  }, k = async (e2, t2, n2, o2, a2 = {}, c2 = false) => {
    const f2 = t2[e2];
    if (Object.keys(a2).length > 0 && E(f2)) return I(f2, n2);
    if (c2 || ((e3, { profile: t3 = "default", logger: r2 } = {}) => Boolean(e3) && "object" == typeof e3 && "string" == typeof e3.role_arn && ["undefined", "string"].indexOf(typeof e3.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof e3.external_id) > -1 && ["undefined", "string"].indexOf(typeof e3.mfa_serial) > -1 && (l(e3, { profile: t3, logger: r2 }) || d(e3, { profile: t3, logger: r2 })))(f2, { profile: e2, logger: n2.logger })) return g(e2, t2, n2, o2, a2, k);
    if (E(f2)) return I(f2, n2);
    if (u2 = f2, Boolean(u2) && "object" == typeof u2 && "string" == typeof u2.web_identity_token_file && "string" == typeof u2.role_arn && ["undefined", "string"].indexOf(typeof u2.role_session_name) > -1) return (async (e3, t3, n3) => r.e(741).then(r.bind(r, 30122)).then(({ fromTokenFile: r2 }) => r2({ webIdentityTokenFile: e3.web_identity_token_file, roleArn: e3.role_arn, roleSessionName: e3.role_session_name, roleAssumerWithWebIdentity: t3.roleAssumerWithWebIdentity, logger: t3.logger, parentClientConfig: t3.parentClientConfig })({ callerClientConfig: n3 }).then((e4) => (0, i.setCredentialFeature)(e4, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))))(f2, n2, o2);
    var u2;
    if (((e3) => Boolean(e3) && "object" == typeof e3 && "string" == typeof e3.credential_process)(f2)) return (async (e3, t3) => r.e(338).then(r.bind(r, 73957)).then(({ fromProcess: r2 }) => r2({ ...e3, profile: t3 })().then((e4) => (0, i.setCredentialFeature)(e4, "CREDENTIALS_PROFILE_PROCESS", "v"))))(n2, e2);
    if (((e3) => e3 && ("string" == typeof e3.sso_start_url || "string" == typeof e3.sso_account_id || "string" == typeof e3.sso_session || "string" == typeof e3.sso_region || "string" == typeof e3.sso_role_name))(f2)) return await (async (e3, t3, n3 = {}, o3) => {
      const { fromSSO: s2 } = await r.e(270).then(r.bind(r, 61889));
      return s2({ profile: e3, logger: n3.logger, parentClientConfig: n3.parentClientConfig, clientConfig: n3.clientConfig })({ callerClientConfig: o3 }).then((e4) => t3.sso_session ? (0, i.setCredentialFeature)(e4, "CREDENTIALS_PROFILE_SSO", "r") : (0, i.setCredentialFeature)(e4, "CREDENTIALS_PROFILE_SSO_LEGACY", "t"));
    })(e2, f2, n2, o2);
    if (((e3) => Boolean(e3 && e3.login_session))(f2)) return m(e2, n2, o2);
    throw new s.C(`Could not resolve credentials using profile: [${e2}] in configuration/credentials file(s).`, { logger: n2.logger });
  }, S = (e2 = {}) => async ({ callerClientConfig: t2 } = {}) => {
    e2.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
    const r2 = await (0, n.Y)(e2);
    return k((0, o.Bz)({ profile: e2.profile ?? t2?.profile }), r2, e2, t2);
  };
}, 61247: (e, t, r) => {
  r.d(t, { p: () => u });
  var n = r(16928), o = r(65835), s = r(21945);
  const i = (e2) => Object.entries(e2).filter(([e3]) => {
    const t2 = e3.indexOf(s.Q);
    return -1 !== t2 && Object.values(o.I).includes(e3.substring(0, t2));
  }).reduce((e3, [t2, r2]) => {
    const n2 = t2.indexOf(s.Q);
    return e3[t2.substring(0, n2) === o.I.PROFILE ? t2.substring(n2 + 1) : t2] = r2, e3;
  }, { ...e2.default && { default: e2.default } });
  var a = r(95519), c = r(44988);
  const l = () => process.env.AWS_SHARED_CREDENTIALS_FILE || (0, n.join)((0, c.R)(), ".aws", "credentials");
  var d = r(74285), g = r(85004);
  const f = () => ({}), u = async (e2 = {}) => {
    const { filepath: t2 = l(), configFilepath: r2 = (0, a.g)() } = e2, o2 = (0, c.R)();
    let s2 = t2;
    t2.startsWith("~/") && (s2 = (0, n.join)(o2, t2.slice(2)));
    let u2 = r2;
    r2.startsWith("~/") && (u2 = (0, n.join)(o2, r2.slice(2)));
    const p = await Promise.all([(0, g.TA)(u2, { ignoreCache: e2.ignoreCache }).then(d.A).then(i).catch(f), (0, g.TA)(s2, { ignoreCache: e2.ignoreCache }).then(d.A).catch(f)]);
    return { configFile: p[0], credentialsFile: p[1] };
  };
}, 74285: (e, t, r) => {
  r.d(t, { A: () => a });
  var n = r(65835), o = r(21945);
  const s = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, i = ["__proto__", "profile __proto__"], a = (e2) => {
    const t2 = {};
    let r2, a2;
    for (const c of e2.split(/\r?\n/)) {
      const e3 = c.split(/(^|\s)[;#]/)[0].trim();
      if ("[" === e3[0] && "]" === e3[e3.length - 1]) {
        r2 = void 0, a2 = void 0;
        const t3 = e3.substring(1, e3.length - 1), c2 = s.exec(t3);
        if (c2) {
          const [, e4, , t4] = c2;
          Object.values(n.I).includes(e4) && (r2 = [e4, t4].join(o.Q));
        } else r2 = t3;
        if (i.includes(t3)) throw new Error(`Found invalid profile name "${t3}"`);
      } else if (r2) {
        const n2 = e3.indexOf("=");
        if (![0, -1].includes(n2)) {
          const [s2, i2] = [e3.substring(0, n2).trim(), e3.substring(n2 + 1).trim()];
          if ("" === i2) a2 = s2;
          else {
            a2 && c.trimStart() === c && (a2 = void 0), t2[r2] = t2[r2] || {};
            const e4 = a2 ? [a2, s2].join(o.Q) : s2;
            t2[r2][e4] = i2;
          }
        }
      }
    }
    return t2;
  };
}, 85004: (e, t, r) => {
  r.d(t, { Jj: () => s, TA: () => i });
  var n = r(51455);
  const o = {}, s = {}, i = (e2, t2) => void 0 !== s[e2] ? s[e2] : (o[e2] && !t2?.ignoreCache || (o[e2] = (0, n.readFile)(e2, "utf8")), o[e2]);
}, 95519: (e, t, r) => {
  r.d(t, { g: () => s });
  var n = r(16928), o = r(44988);
  const s = () => process.env.AWS_CONFIG_FILE || (0, n.join)((0, o.R)(), ".aws", "config");
} };
