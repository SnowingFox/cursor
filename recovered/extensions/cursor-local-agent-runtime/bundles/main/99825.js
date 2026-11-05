// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 99825 range:7942221..7943121
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99825: (e, t, r) => {
    "use strict";
    r.d(t, { pi: () => i, sF: () => a, yG: () => s });
    var n = r(97464), o = r(63725);
    const s = "AWS_ACCESS_KEY_ID", i = "AWS_SECRET_ACCESS_KEY", a = (e2) => async () => {
      e2?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
      const t2 = process.env[s], r2 = process.env[i], a2 = process.env.AWS_SESSION_TOKEN, l = process.env.AWS_CREDENTIAL_EXPIRATION, c = process.env.AWS_CREDENTIAL_SCOPE, u = process.env.AWS_ACCOUNT_ID;
      if (t2 && r2) {
        const e3 = { accessKeyId: t2, secretAccessKey: r2, ...a2 && { sessionToken: a2 }, ...l && { expiration: new Date(l) }, ...c && { credentialScope: c }, ...u && { accountId: u } };
        return (0, n.setCredentialFeature)(e3, "CREDENTIALS_ENV_VARS", "g"), e3;
      }
      throw new o.C("Unable to find environment variable credentials.", { logger: e2?.logger });
    };
  }