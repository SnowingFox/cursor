// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 25977 range:832755..834820
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
25977: (e, t, r) => {
    "use strict";
    r.d(t, { Gy: () => i, Pg: () => s, W5: () => n, WX: () => _, g: () => a, gP: () => d, gr: () => v, pv: () => p });
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
    class o extends n {
    }
    o.errorCode = "invalid_request";
    class s extends n {
    }
    s.errorCode = "invalid_client";
    class i extends n {
    }
    i.errorCode = "invalid_grant";
    class a extends n {
    }
    a.errorCode = "unauthorized_client";
    class l extends n {
    }
    l.errorCode = "unsupported_grant_type";
    class c extends n {
    }
    c.errorCode = "invalid_scope";
    class u extends n {
    }
    u.errorCode = "access_denied";
    class d extends n {
    }
    d.errorCode = "server_error";
    class p extends n {
    }
    p.errorCode = "temporarily_unavailable";
    class h extends n {
    }
    h.errorCode = "unsupported_response_type";
    class m extends n {
    }
    m.errorCode = "unsupported_token_type";
    class f extends n {
    }
    f.errorCode = "invalid_token";
    class g extends n {
    }
    g.errorCode = "method_not_allowed";
    class y extends n {
    }
    y.errorCode = "too_many_requests";
    class v extends n {
    }
    v.errorCode = "invalid_client_metadata";
    class w extends n {
    }
    w.errorCode = "insufficient_scope";
    class b extends n {
    }
    b.errorCode = "invalid_target";
    const _ = { [o.errorCode]: o, [s.errorCode]: s, [i.errorCode]: i, [a.errorCode]: a, [l.errorCode]: l, [c.errorCode]: c, [u.errorCode]: u, [d.errorCode]: d, [p.errorCode]: p, [h.errorCode]: h, [m.errorCode]: m, [f.errorCode]: f, [g.errorCode]: g, [y.errorCode]: y, [v.errorCode]: v, [w.errorCode]: w, [b.errorCode]: b };
  }