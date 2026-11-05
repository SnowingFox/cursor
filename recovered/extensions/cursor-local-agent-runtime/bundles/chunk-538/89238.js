// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/538.js sha256:59937a807dffd12f7cc46b403bdda955eb0b59336adfd7cbeb5ae1e50bf20f3d
// module: 89238 range:13763..15131
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
89238: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.UnauthorizedException = t.TooManyRequestsException = t.ResourceNotFoundException = t.InvalidRequestException = void 0;
  const n = o(88670);
  class r extends n.SSOServiceException {
    name = "InvalidRequestException";
    $fault = "client";
    constructor(e2) {
      super({ name: "InvalidRequestException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, r.prototype);
    }
  }
  t.InvalidRequestException = r;
  class s extends n.SSOServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(e2) {
      super({ name: "ResourceNotFoundException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, s.prototype);
    }
  }
  t.ResourceNotFoundException = s;
  class i extends n.SSOServiceException {
    name = "TooManyRequestsException";
    $fault = "client";
    constructor(e2) {
      super({ name: "TooManyRequestsException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, i.prototype);
    }
  }
  t.TooManyRequestsException = i;
  class a extends n.SSOServiceException {
    name = "UnauthorizedException";
    $fault = "client";
    constructor(e2) {
      super({ name: "UnauthorizedException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, a.prototype);
    }
  }
  t.UnauthorizedException = a;
}