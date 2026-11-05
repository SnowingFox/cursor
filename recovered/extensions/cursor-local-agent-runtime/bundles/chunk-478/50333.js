// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/478.js sha256:03d8c888857521b5af31d5761e74aee40e5eecd292b9b059b8748be5231d88b9
// module: 50333 range:16664..17945
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50333: (e, t, r) => {
  r.d(t, { K: () => o });
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
    constructor(e2) {
      this.method = e2.method || "GET", this.hostname = e2.hostname || "localhost", this.port = e2.port, this.query = e2.query || {}, this.headers = e2.headers || {}, this.body = e2.body, this.protocol = e2.protocol ? ":" !== e2.protocol.slice(-1) ? `${e2.protocol}:` : e2.protocol : "https:", this.path = e2.path ? "/" !== e2.path.charAt(0) ? `/${e2.path}` : e2.path : "/", this.username = e2.username, this.password = e2.password, this.fragment = e2.fragment;
    }
    static clone(e2) {
      const t2 = new o({ ...e2, headers: { ...e2.headers } });
      var r2;
      return t2.query && (t2.query = (r2 = t2.query, Object.keys(r2).reduce((e3, t3) => {
        const o2 = r2[t3];
        return { ...e3, [t3]: Array.isArray(o2) ? [...o2] : o2 };
      }, {}))), t2;
    }
    static isInstance(e2) {
      if (!e2) return false;
      const t2 = e2;
      return "method" in t2 && "protocol" in t2 && "hostname" in t2 && "path" in t2 && "object" == typeof t2.query && "object" == typeof t2.headers;
    }
    clone() {
      return o.clone(this);
    }
  }
}