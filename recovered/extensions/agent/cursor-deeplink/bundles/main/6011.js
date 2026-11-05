// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6011 range:587143..588308
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6011: (e2) => {
    "use strict";
    const t2 = { invalidType: "FAST_JWT_INVALID_TYPE", invalidOption: "FAST_JWT_INVALID_OPTION", invalidAlgorithm: "FAST_JWT_INVALID_ALGORITHM", invalidClaimType: "FAST_JWT_INVALID_CLAIM_TYPE", invalidClaimValue: "FAST_JWT_INVALID_CLAIM_VALUE", invalidKey: "FAST_JWT_INVALID_KEY", invalidSignature: "FAST_JWT_INVALID_SIGNATURE", invalidPayload: "FAST_JWT_INVALID_PAYLOAD", malformed: "FAST_JWT_MALFORMED", inactive: "FAST_JWT_INACTIVE", expired: "FAST_JWT_EXPIRED", missingKey: "FAST_JWT_MISSING_KEY", keyFetchingError: "FAST_JWT_KEY_FETCHING_ERROR", signError: "FAST_JWT_SIGN_ERROR", verifyError: "FAST_JWT_VERIFY_ERROR", missingRequiredClaim: "FAST_JWT_MISSING_REQUIRED_CLAIM", missingSignature: "FAST_JWT_MISSING_SIGNATURE" };
    class A2 extends Error {
      constructor(e3, t3, A3) {
        if (super(t3), Error.captureStackTrace(this, this.constructor), this.code = e3, A3) for (const e4 in A3) this[e4] = A3[e4];
      }
    }
    A2.codes = t2, A2.wrap = function(e3, t3, n2) {
      return e3 instanceof A2 ? e3 : new A2(t3, n2, { originalError: e3 });
    }, e2.exports = { TokenError: A2, TOKEN_ERROR_CODES: t2 };
  }