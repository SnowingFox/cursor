// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 11255 range:751548..755111
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11255: (e, t, r) => {
    const { SMITHY_CONTEXT_KEY: n } = r(52391);
    function s(e2, t2) {
      return Object.prototype.hasOwnProperty.call(e2, t2);
    }
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
          const n2 = r2[t3];
          return { ...e3, [t3]: Array.isArray(n2) ? [...n2] : n2 };
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
    const i = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"), a = (e2, t2 = false) => {
      if (!t2) return i.test(e2);
      const r2 = e2.split(".");
      for (const e3 of r2) if (!a(e3)) return false;
      return true;
    };
    function c(e2) {
      const t2 = {};
      if (e2 = e2.replace(/^\?/, "")) for (const r2 of e2.split("&")) {
        let [e3, n2 = null] = r2.split("=");
        e3 = decodeURIComponent(e3), n2 && (n2 = decodeURIComponent(n2)), e3 in t2 ? Array.isArray(t2[e3]) ? t2[e3].push(n2) : t2[e3] = [t2[e3], n2] : t2[e3] = n2;
      }
      return t2;
    }
    const l = (e2) => {
      if ("string" == typeof e2) return l(new URL(e2));
      const { hostname: t2, pathname: r2, port: n2, protocol: s2, search: o2 } = e2;
      let i2;
      return o2 && (i2 = c(o2)), { hostname: t2, port: n2 ? parseInt(n2) : void 0, protocol: s2, path: r2, query: i2 };
    };
    t.HttpRequest = o, t.HttpResponse = class {
      statusCode;
      reason;
      headers;
      body;
      constructor(e2) {
        this.statusCode = e2.statusCode, this.reason = e2.reason, this.headers = e2.headers || {}, this.body = e2.body;
      }
      static isInstance(e2) {
        if (!e2) return false;
        const t2 = e2;
        return "number" == typeof t2.statusCode && "object" == typeof t2.headers;
      }
    }, t.getSmithyContext = (e2) => e2[n] || (e2[n] = {}), t.hasOwn = s, t.isValidHostLabel = a, t.isValidHostname = function(e2) {
      return /^[a-z0-9][a-z0-9.-]*[a-z0-9]$/.test(e2);
    }, t.normalizeProvider = (e2) => {
      if ("function" == typeof e2) return e2;
      const t2 = Promise.resolve(e2);
      return () => t2;
    }, t.parseQueryString = c, t.parseUrl = l, t.toEndpointV1 = (e2) => {
      if ("object" == typeof e2) {
        if ("url" in e2) {
          const t2 = l(e2.url);
          if (e2.headers) {
            t2.headers = {};
            for (const r2 in e2.headers) s(e2.headers, r2) && (t2.headers[r2.toLowerCase()] = e2.headers[r2].join(", "));
          }
          return t2;
        }
        return e2;
      }
      return l(e2);
    };
  }