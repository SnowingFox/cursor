// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 99825 range:11762575..11763475
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99825: (e, t, r) => {
    "use strict";
    r.d(t, { pi: () => i, sF: () => a, yG: () => o });
    var n = r(97464), s = r(63725);
    const o = "AWS_ACCESS_KEY_ID", i = "AWS_SECRET_ACCESS_KEY", a = (e2) => async () => {
      e2?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
      const t2 = process.env[o], r2 = process.env[i], a2 = process.env.AWS_SESSION_TOKEN, c = process.env.AWS_CREDENTIAL_EXPIRATION, l = process.env.AWS_CREDENTIAL_SCOPE, u = process.env.AWS_ACCOUNT_ID;
      if (t2 && r2) {
        const e3 = { accessKeyId: t2, secretAccessKey: r2, ...a2 && { sessionToken: a2 }, ...c && { expiration: new Date(c) }, ...l && { credentialScope: l }, ...u && { accountId: u } };
        return (0, n.setCredentialFeature)(e3, "CREDENTIALS_ENV_VARS", "g"), e3;
      }
      throw new s.C("Unable to find environment variable credentials.", { logger: e2?.logger });
    };
  }