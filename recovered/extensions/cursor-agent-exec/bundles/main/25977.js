// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 25977 range:1259299..1261364
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
25977: (e, t, r) => {
    "use strict";
    r.d(t, { Gy: () => i, Pg: () => o, W5: () => n, WX: () => b, g: () => a, gP: () => d, gr: () => w, pv: () => p });
    class n extends Error {
      constructor(e2, t2) {
        super(e2), this.errorUri = t2, this.name = this.constructor.name;
      }
      toResponseObject() {
        const e2 = { error: this.errorCode, error_description: this.message };
        return this.errorUri && (e2.error_uri = this.errorUri), e2;
      }
      get errorCode() {
        return this.constructor.errorCode;
      }
    }
    class s extends n {
    }
    s.errorCode = "invalid_request";
    class o extends n {
    }
    o.errorCode = "invalid_client";
    class i extends n {
    }
    i.errorCode = "invalid_grant";
    class a extends n {
    }
    a.errorCode = "unauthorized_client";
    class c extends n {
    }
    c.errorCode = "unsupported_grant_type";
    class l extends n {
    }
    l.errorCode = "invalid_scope";
    class u extends n {
    }
    u.errorCode = "access_denied";
    class d extends n {
    }
    d.errorCode = "server_error";
    class p extends n {
    }
    p.errorCode = "temporarily_unavailable";
    class m extends n {
    }
    m.errorCode = "unsupported_response_type";
    class h extends n {
    }
    h.errorCode = "unsupported_token_type";
    class f extends n {
    }
    f.errorCode = "invalid_token";
    class g extends n {
    }
    g.errorCode = "method_not_allowed";
    class y extends n {
    }
    y.errorCode = "too_many_requests";
    class w extends n {
    }
    w.errorCode = "invalid_client_metadata";
    class v extends n {
    }
    v.errorCode = "insufficient_scope";
    class _ extends n {
    }
    _.errorCode = "invalid_target";
    const b = { [s.errorCode]: s, [o.errorCode]: o, [i.errorCode]: i, [a.errorCode]: a, [c.errorCode]: c, [l.errorCode]: l, [u.errorCode]: u, [d.errorCode]: d, [p.errorCode]: p, [m.errorCode]: m, [h.errorCode]: h, [f.errorCode]: f, [g.errorCode]: g, [y.errorCode]: y, [w.errorCode]: w, [v.errorCode]: v, [_.errorCode]: _ };
  }