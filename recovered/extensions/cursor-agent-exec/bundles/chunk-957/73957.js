// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/957.js sha256:58b9f372ec2212df30a5c8faa446d192311d776723a37913f302c09d950e1a12
// module: 73957 range:2930..5180
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
73957: (e, r, t) => {
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
}