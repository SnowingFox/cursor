// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 10869 range:5184..7620
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10869: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.IDPCommunicationErrorException = t.InvalidIdentityTokenException = t.IDPRejectedClaimException = t.RegionDisabledException = t.PackedPolicyTooLargeException = t.MalformedPolicyDocumentException = t.ExpiredTokenException = void 0;
  const i = n(73856);
  class o extends i.STSServiceException {
    name = "ExpiredTokenException";
    $fault = "client";
    constructor(e2) {
      super({ name: "ExpiredTokenException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, o.prototype);
    }
  }
  t.ExpiredTokenException = o;
  class r extends i.STSServiceException {
    name = "MalformedPolicyDocumentException";
    $fault = "client";
    constructor(e2) {
      super({ name: "MalformedPolicyDocumentException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, r.prototype);
    }
  }
  t.MalformedPolicyDocumentException = r;
  class s extends i.STSServiceException {
    name = "PackedPolicyTooLargeException";
    $fault = "client";
    constructor(e2) {
      super({ name: "PackedPolicyTooLargeException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, s.prototype);
    }
  }
  t.PackedPolicyTooLargeException = s;
  class a extends i.STSServiceException {
    name = "RegionDisabledException";
    $fault = "client";
    constructor(e2) {
      super({ name: "RegionDisabledException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, a.prototype);
    }
  }
  t.RegionDisabledException = a;
  class c extends i.STSServiceException {
    name = "IDPRejectedClaimException";
    $fault = "client";
    constructor(e2) {
      super({ name: "IDPRejectedClaimException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, c.prototype);
    }
  }
  t.IDPRejectedClaimException = c;
  class l extends i.STSServiceException {
    name = "InvalidIdentityTokenException";
    $fault = "client";
    constructor(e2) {
      super({ name: "InvalidIdentityTokenException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, l.prototype);
    }
  }
  t.InvalidIdentityTokenException = l;
  class d extends i.STSServiceException {
    name = "IDPCommunicationErrorException";
    $fault = "client";
    $retryable = {};
    constructor(e2) {
      super({ name: "IDPCommunicationErrorException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, d.prototype);
    }
  }
  t.IDPCommunicationErrorException = d;
}