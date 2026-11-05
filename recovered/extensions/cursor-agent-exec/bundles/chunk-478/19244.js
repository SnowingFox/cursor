// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/478.js sha256:03d8c888857521b5af31d5761e74aee40e5eecd292b9b059b8748be5231d88b9
// module: 19244 range:6087..10908
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
19244: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.UnsupportedGrantTypeException = t.UnauthorizedClientException = t.SlowDownException = t.InvalidScopeException = t.InvalidRequestException = t.InvalidGrantException = t.InvalidClientException = t.InternalServerException = t.ExpiredTokenException = t.AuthorizationPendingException = t.AccessDeniedException = void 0;
  const o = r(31297);
  class n extends o.SSOOIDCServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    error;
    reason;
    error_description;
    constructor(e2) {
      super({ name: "AccessDeniedException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, n.prototype), this.error = e2.error, this.reason = e2.reason, this.error_description = e2.error_description;
    }
  }
  t.AccessDeniedException = n;
  class i extends o.SSOOIDCServiceException {
    name = "AuthorizationPendingException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "AuthorizationPendingException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, i.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.AuthorizationPendingException = i;
  class s extends o.SSOOIDCServiceException {
    name = "ExpiredTokenException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "ExpiredTokenException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, s.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.ExpiredTokenException = s;
  class c extends o.SSOOIDCServiceException {
    name = "InternalServerException";
    $fault = "server";
    error;
    error_description;
    constructor(e2) {
      super({ name: "InternalServerException", $fault: "server", ...e2 }), Object.setPrototypeOf(this, c.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.InternalServerException = c;
  class a extends o.SSOOIDCServiceException {
    name = "InvalidClientException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "InvalidClientException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, a.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.InvalidClientException = a;
  class p extends o.SSOOIDCServiceException {
    name = "InvalidGrantException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "InvalidGrantException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, p.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.InvalidGrantException = p;
  class d extends o.SSOOIDCServiceException {
    name = "InvalidRequestException";
    $fault = "client";
    error;
    reason;
    error_description;
    constructor(e2) {
      super({ name: "InvalidRequestException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, d.prototype), this.error = e2.error, this.reason = e2.reason, this.error_description = e2.error_description;
    }
  }
  t.InvalidRequestException = d;
  class l extends o.SSOOIDCServiceException {
    name = "InvalidScopeException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "InvalidScopeException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, l.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.InvalidScopeException = l;
  class u extends o.SSOOIDCServiceException {
    name = "SlowDownException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "SlowDownException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, u.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.SlowDownException = u;
  class h extends o.SSOOIDCServiceException {
    name = "UnauthorizedClientException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "UnauthorizedClientException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, h.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.UnauthorizedClientException = h;
  class E extends o.SSOOIDCServiceException {
    name = "UnsupportedGrantTypeException";
    $fault = "client";
    error;
    error_description;
    constructor(e2) {
      super({ name: "UnsupportedGrantTypeException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, E.prototype), this.error = e2.error, this.error_description = e2.error_description;
    }
  }
  t.UnsupportedGrantTypeException = E;
}