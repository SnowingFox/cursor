// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/891.js sha256:a9b28a653e0c9a848b5a9ecea390f2667111709ef94d64381394a9ca46de63e8
// module: 50333 range:141..1422
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50333: (t, e, s) => {
  s.d(e, { K: () => o });
  class o {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(t2) {
      this.method = t2.method || "GET", this.hostname = t2.hostname || "localhost", this.port = t2.port, this.query = t2.query || {}, this.headers = t2.headers || {}, this.body = t2.body, this.protocol = t2.protocol ? ":" !== t2.protocol.slice(-1) ? `${t2.protocol}:` : t2.protocol : "https:", this.path = t2.path ? "/" !== t2.path.charAt(0) ? `/${t2.path}` : t2.path : "/", this.username = t2.username, this.password = t2.password, this.fragment = t2.fragment;
    }
    static clone(t2) {
      const e2 = new o({ ...t2, headers: { ...t2.headers } });
      var s2;
      return e2.query && (e2.query = (s2 = e2.query, Object.keys(s2).reduce((t3, e3) => {
        const o2 = s2[e3];
        return { ...t3, [e3]: Array.isArray(o2) ? [...o2] : o2 };
      }, {}))), e2;
    }
    static isInstance(t2) {
      if (!t2) return false;
      const e2 = t2;
      return "method" in e2 && "protocol" in e2 && "hostname" in e2 && "path" in e2 && "object" == typeof e2.query && "object" == typeof e2.headers;
    }
    clone() {
      return o.clone(this);
    }
  }
}