"use strict";
exports.id = 338, exports.ids = [338], exports.modules = { 44698: (e, r, o) => {
  o.d(r, { Z: () => n });
  var t = o(47646), s = o(85004);
  const n = { getFileRecord: () => s.Jj, interceptFile(e2, r2) {
    s.Jj[e2] = Promise.resolve(r2);
  }, getTokenRecord: () => t.a, interceptToken(e2, r2) {
    t.a[e2] = r2;
  } };
}, 47646: (e, r, o) => {
  o.d(r, { a: () => n, v: () => c });
  var t = o(91943), s = o(56589);
  const n = {}, c = async (e2) => {
    if (n[e2]) return n[e2];
    const r2 = (0, s.C)(e2), o2 = await (0, t.readFile)(r2, "utf8");
    return JSON.parse(o2);
  };
}, 56589: (e, r, o) => {
  o.d(r, { C: () => c });
  var t = o(76982), s = o(16928), n = o(44988);
  const c = (e2) => {
    const r2 = (0, t.createHash)("sha1").update(e2).digest("hex");
    return (0, s.join)((0, n.R)(), ".aws", "sso", "cache", `${r2}.json`);
  };
}, 73957: (e, r, o) => {
  o.r(r), o.d(r, { fromProcess: () => p });
  var t = o(29359), s = o(76964), n = o(63725), c = o(44698), i = o(31421), a = o(57975), d = o(97464);
  const l = async (e2, r2, o2) => {
    const t2 = r2[e2];
    if (!r2[e2]) throw new n.C(`Profile ${e2} could not be found in shared credentials file.`, { logger: o2 });
    {
      const s2 = t2.credential_process;
      if (void 0 === s2) throw new n.C(`Profile ${e2} did not contain credential_process.`, { logger: o2 });
      {
        const t3 = (0, a.promisify)(c.Z?.getTokenRecord?.().exec ?? i.exec);
        try {
          const { stdout: o3 } = await t3(s2);
          let n2;
          try {
            n2 = JSON.parse(o3.trim());
          } catch {
            throw Error(`Profile ${e2} credential_process returned invalid JSON.`);
          }
          return ((e3, r3, o4) => {
            if (1 !== r3.Version) throw Error(`Profile ${e3} credential_process did not return Version 1.`);
            if (void 0 === r3.AccessKeyId || void 0 === r3.SecretAccessKey) throw Error(`Profile ${e3} credential_process returned invalid credentials.`);
            if (r3.Expiration) {
              const o5 = /* @__PURE__ */ new Date();
              if (new Date(r3.Expiration) < o5) throw Error(`Profile ${e3} credential_process returned expired credentials.`);
            }
            let t4 = r3.AccountId;
            !t4 && o4?.[e3]?.aws_account_id && (t4 = o4[e3].aws_account_id);
            const s3 = { accessKeyId: r3.AccessKeyId, secretAccessKey: r3.SecretAccessKey, ...r3.SessionToken && { sessionToken: r3.SessionToken }, ...r3.Expiration && { expiration: new Date(r3.Expiration) }, ...r3.CredentialScope && { credentialScope: r3.CredentialScope }, ...t4 && { accountId: t4 } };
            return (0, d.setCredentialFeature)(s3, "CREDENTIALS_PROCESS", "w"), s3;
          })(e2, n2, r2);
        } catch (e3) {
          throw new n.C(e3.message, { logger: o2 });
        }
      }
    }
  }, p = (e2 = {}) => async ({ callerClientConfig: r2 } = {}) => {
    e2.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
    const o2 = await (0, t.Y)(e2);
    return l((0, s.Bz)({ profile: e2.profile ?? r2?.profile }), o2, e2.logger);
  };
} };
