"use strict";
exports.id = 957, exports.ids = [338, 957], exports.modules = { 21945: (e, r, t) => {
  t.d(r, { Q: () => s });
  const s = ".";
}, 29359: (e, r, t) => {
  t.d(r, { Y: () => n });
  var s = t(61247);
  const n = async (e2) => {
    const r2 = await (0, s.p)(e2);
    return ((...e3) => {
      const r3 = {};
      for (const t2 of e3) for (const [e4, s2] of Object.entries(t2)) void 0 !== r3[e4] ? Object.assign(r3[e4], s2) : r3[e4] = s2;
      return r3;
    })(r2.configFile, r2.credentialsFile);
  };
}, 44698: (e, r, t) => {
  t.d(r, { Z: () => o });
  var s = t(47646), n = t(85004);
  const o = { getFileRecord: () => n.Jj, interceptFile(e2, r2) {
    n.Jj[e2] = Promise.resolve(r2);
  }, getTokenRecord: () => s.a, interceptToken(e2, r2) {
    s.a[e2] = r2;
  } };
}, 44988: (e, r, t) => {
  t.d(r, { R: () => i });
  var s = t(70857), n = t(16928);
  const o = {}, i = () => {
    const { HOME: e2, USERPROFILE: r2, HOMEPATH: t2, HOMEDRIVE: i2 = `C:${n.sep}` } = process.env;
    if (e2) return e2;
    if (r2) return r2;
    if (t2) return `${i2}${t2}`;
    const c = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return o[c] || (o[c] = (0, s.homedir)()), o[c];
  };
}, 47646: (e, r, t) => {
  t.d(r, { a: () => o, v: () => i });
  var s = t(91943), n = t(56589);
  const o = {}, i = async (e2) => {
    if (o[e2]) return o[e2];
    const r2 = (0, n.C)(e2), t2 = await (0, s.readFile)(r2, "utf8");
    return JSON.parse(t2);
  };
}, 56589: (e, r, t) => {
  t.d(r, { C: () => i });
  var s = t(76982), n = t(16928), o = t(44988);
  const i = (e2) => {
    const r2 = (0, s.createHash)("sha1").update(e2).digest("hex");
    return (0, n.join)((0, o.R)(), ".aws", "sso", "cache", `${r2}.json`);
  };
}, 61247: (e, r, t) => {
  t.d(r, { p: () => p });
  var s = t(16928), n = t(65835), o = t(21945);
  const i = (e2) => Object.entries(e2).filter(([e3]) => {
    const r2 = e3.indexOf(o.Q);
    return -1 !== r2 && Object.values(n.I).includes(e3.substring(0, r2));
  }).reduce((e3, [r2, t2]) => {
    const s2 = r2.indexOf(o.Q);
    return e3[r2.substring(0, s2) === n.I.PROFILE ? r2.substring(s2 + 1) : r2] = t2, e3;
  }, { ...e2.default && { default: e2.default } });
  var c = t(95519), a = t(44988);
  const d = () => process.env.AWS_SHARED_CREDENTIALS_FILE || (0, s.join)((0, a.R)(), ".aws", "credentials");
  var l = t(74285), f = t(85004);
  const u = () => ({}), p = async (e2 = {}) => {
    const { filepath: r2 = d(), configFilepath: t2 = (0, c.g)() } = e2, n2 = (0, a.R)();
    let o2 = r2;
    r2.startsWith("~/") && (o2 = (0, s.join)(n2, r2.slice(2)));
    let p2 = t2;
    t2.startsWith("~/") && (p2 = (0, s.join)(n2, t2.slice(2)));
    const g = await Promise.all([(0, f.TA)(p2, { ignoreCache: e2.ignoreCache }).then(l.A).then(i).catch(u), (0, f.TA)(o2, { ignoreCache: e2.ignoreCache }).then(l.A).catch(u)]);
    return { configFile: g[0], credentialsFile: g[1] };
  };
}, 73957: (e, r, t) => {
  t.r(r), t.d(r, { fromProcess: () => f });
  var s = t(29359), n = t(76964), o = t(63725), i = t(44698), c = t(31421), a = t(57975), d = t(97464);
  const l = async (e2, r2, t2) => {
    const s2 = r2[e2];
    if (!r2[e2]) throw new o.C(`Profile ${e2} could not be found in shared credentials file.`, { logger: t2 });
    {
      const n2 = s2.credential_process;
      if (void 0 === n2) throw new o.C(`Profile ${e2} did not contain credential_process.`, { logger: t2 });
      {
        const s3 = (0, a.promisify)(i.Z?.getTokenRecord?.().exec ?? c.exec);
        try {
          const { stdout: t3 } = await s3(n2);
          let o2;
          try {
            o2 = JSON.parse(t3.trim());
          } catch {
            throw Error(`Profile ${e2} credential_process returned invalid JSON.`);
          }
          return ((e3, r3, t4) => {
            if (1 !== r3.Version) throw Error(`Profile ${e3} credential_process did not return Version 1.`);
            if (void 0 === r3.AccessKeyId || void 0 === r3.SecretAccessKey) throw Error(`Profile ${e3} credential_process returned invalid credentials.`);
            if (r3.Expiration) {
              const t5 = /* @__PURE__ */ new Date();
              if (new Date(r3.Expiration) < t5) throw Error(`Profile ${e3} credential_process returned expired credentials.`);
            }
            let s4 = r3.AccountId;
            !s4 && t4?.[e3]?.aws_account_id && (s4 = t4[e3].aws_account_id);
            const n3 = { accessKeyId: r3.AccessKeyId, secretAccessKey: r3.SecretAccessKey, ...r3.SessionToken && { sessionToken: r3.SessionToken }, ...r3.Expiration && { expiration: new Date(r3.Expiration) }, ...r3.CredentialScope && { credentialScope: r3.CredentialScope }, ...s4 && { accountId: s4 } };
            return (0, d.setCredentialFeature)(n3, "CREDENTIALS_PROCESS", "w"), n3;
          })(e2, o2, r2);
        } catch (e3) {
          throw new o.C(e3.message, { logger: t2 });
        }
      }
    }
  }, f = (e2 = {}) => async ({ callerClientConfig: r2 } = {}) => {
    e2.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
    const t2 = await (0, s.Y)(e2);
    return l((0, n.Bz)({ profile: e2.profile ?? r2?.profile }), t2, e2.logger);
  };
}, 74285: (e, r, t) => {
  t.d(r, { A: () => c });
  var s = t(65835), n = t(21945);
  const o = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, i = ["__proto__", "profile __proto__"], c = (e2) => {
    const r2 = {};
    let t2, c2;
    for (const a of e2.split(/\r?\n/)) {
      const e3 = a.split(/(^|\s)[;#]/)[0].trim();
      if ("[" === e3[0] && "]" === e3[e3.length - 1]) {
        t2 = void 0, c2 = void 0;
        const r3 = e3.substring(1, e3.length - 1), a2 = o.exec(r3);
        if (a2) {
          const [, e4, , r4] = a2;
          Object.values(s.I).includes(e4) && (t2 = [e4, r4].join(n.Q));
        } else t2 = r3;
        if (i.includes(r3)) throw new Error(`Found invalid profile name "${r3}"`);
      } else if (t2) {
        const s2 = e3.indexOf("=");
        if (![0, -1].includes(s2)) {
          const [o2, i2] = [e3.substring(0, s2).trim(), e3.substring(s2 + 1).trim()];
          if ("" === i2) c2 = o2;
          else {
            c2 && a.trimStart() === a && (c2 = void 0), r2[t2] = r2[t2] || {};
            const e4 = c2 ? [c2, o2].join(n.Q) : o2;
            r2[t2][e4] = i2;
          }
        }
      }
    }
    return r2;
  };
}, 85004: (e, r, t) => {
  t.d(r, { Jj: () => o, TA: () => i });
  var s = t(51455);
  const n = {}, o = {}, i = (e2, r2) => void 0 !== o[e2] ? o[e2] : (n[e2] && !r2?.ignoreCache || (n[e2] = (0, s.readFile)(e2, "utf8")), n[e2]);
}, 95519: (e, r, t) => {
  t.d(r, { g: () => o });
  var s = t(16928), n = t(44988);
  const o = () => process.env.AWS_CONFIG_FILE || (0, s.join)((0, n.R)(), ".aws", "config");
} };
