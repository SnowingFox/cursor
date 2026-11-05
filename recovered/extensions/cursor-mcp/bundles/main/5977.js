// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5977 range:448755..450875
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5977: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { Gy: () => i2, Pg: () => s2, W5: () => n2, WX: () => b, g: () => a2, gP: () => d, gr: () => _, hY: () => m, pv: () => p });
    class n2 extends Error {
      constructor(e3, t3) {
        super(e3), this.errorUri = t3, this.name = this.constructor.name;
      }
      toResponseObject() {
        const e3 = { error: this.errorCode, error_description: this.message };
        return this.errorUri && (e3.error_uri = this.errorUri), e3;
      }
      get errorCode() {
        return this.constructor.errorCode;
      }
    }
    class o2 extends n2 {
    }
    o2.errorCode = "invalid_request";
    class s2 extends n2 {
    }
    s2.errorCode = "invalid_client";
    class i2 extends n2 {
    }
    i2.errorCode = "invalid_grant";
    class a2 extends n2 {
    }
    a2.errorCode = "unauthorized_client";
    class c extends n2 {
    }
    c.errorCode = "unsupported_grant_type";
    class u extends n2 {
    }
    u.errorCode = "invalid_scope";
    class l extends n2 {
    }
    l.errorCode = "access_denied";
    class d extends n2 {
    }
    d.errorCode = "server_error";
    class p extends n2 {
    }
    p.errorCode = "temporarily_unavailable";
    class f extends n2 {
    }
    f.errorCode = "unsupported_response_type";
    class h extends n2 {
    }
    h.errorCode = "unsupported_token_type";
    class m extends n2 {
    }
    m.errorCode = "invalid_token";
    class g extends n2 {
    }
    g.errorCode = "method_not_allowed";
    class y extends n2 {
    }
    y.errorCode = "too_many_requests";
    class _ extends n2 {
    }
    _.errorCode = "invalid_client_metadata";
    class v extends n2 {
    }
    v.errorCode = "insufficient_scope";
    class w extends n2 {
    }
    w.errorCode = "invalid_target";
    const b = { [o2.errorCode]: o2, [s2.errorCode]: s2, [i2.errorCode]: i2, [a2.errorCode]: a2, [c.errorCode]: c, [u.errorCode]: u, [l.errorCode]: l, [d.errorCode]: d, [p.errorCode]: p, [f.errorCode]: f, [h.errorCode]: h, [m.errorCode]: m, [g.errorCode]: g, [y.errorCode]: y, [_.errorCode]: _, [v.errorCode]: v, [w.errorCode]: w };
  }