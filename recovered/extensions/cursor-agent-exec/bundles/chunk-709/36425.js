// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/709.js sha256:178b16cc9cd8c06565bc9aac7b10691bae0eb6d67807efc2887d6c205e5f61c7
// module: 36425 range:524..1999
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36425: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.ValidationException = t.TooManyRequestsError = t.InternalServerException = t.AccessDeniedException = void 0;
  const o = n(7540);
  class r extends o.SigninServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    error;
    constructor(e2) {
      super({ name: "AccessDeniedException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, r.prototype), this.error = e2.error;
    }
  }
  t.AccessDeniedException = r;
  class i extends o.SigninServiceException {
    name = "InternalServerException";
    $fault = "server";
    error;
    constructor(e2) {
      super({ name: "InternalServerException", $fault: "server", ...e2 }), Object.setPrototypeOf(this, i.prototype), this.error = e2.error;
    }
  }
  t.InternalServerException = i;
  class s extends o.SigninServiceException {
    name = "TooManyRequestsError";
    $fault = "client";
    error;
    constructor(e2) {
      super({ name: "TooManyRequestsError", $fault: "client", ...e2 }), Object.setPrototypeOf(this, s.prototype), this.error = e2.error;
    }
  }
  t.TooManyRequestsError = s;
  class a extends o.SigninServiceException {
    name = "ValidationException";
    $fault = "client";
    error;
    constructor(e2) {
      super({ name: "ValidationException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, a.prototype), this.error = e2.error;
    }
  }
  t.ValidationException = a;
}