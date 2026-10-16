"use strict";
exports.id = 891, exports.ids = [891], exports.modules = { 21945: (t, e, s) => {
  s.d(e, { Q: () => o });
  const o = ".";
}, 50333: (t, e, s) => {
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
}, 61247: (t, e, s) => {
  s.d(e, { p: () => p });
  var o = s(16928), r = s(65835), n = s(21945);
  const i = (t2) => Object.entries(t2).filter(([t3]) => {
    const e2 = t3.indexOf(n.Q);
    return -1 !== e2 && Object.values(r.I).includes(t3.substring(0, e2));
  }).reduce((t3, [e2, s2]) => {
    const o2 = e2.indexOf(n.Q);
    return t3[e2.substring(0, o2) === r.I.PROFILE ? e2.substring(o2 + 1) : e2] = s2, t3;
  }, { ...t2.default && { default: t2.default } });
  var c = s(95519), a = s(44988);
  const h = () => process.env.AWS_SHARED_CREDENTIALS_FILE || (0, o.join)((0, a.R)(), ".aws", "credentials");
  var l = s(74285), d = s(85004);
  const u = () => ({}), p = async (t2 = {}) => {
    const { filepath: e2 = h(), configFilepath: s2 = (0, c.g)() } = t2, r2 = (0, a.R)();
    let n2 = e2;
    e2.startsWith("~/") && (n2 = (0, o.join)(r2, e2.slice(2)));
    let p2 = s2;
    s2.startsWith("~/") && (p2 = (0, o.join)(r2, s2.slice(2)));
    const f = await Promise.all([(0, d.TA)(p2, { ignoreCache: t2.ignoreCache }).then(l.A).then(i).catch(u), (0, d.TA)(n2, { ignoreCache: t2.ignoreCache }).then(l.A).catch(u)]);
    return { configFile: f[0], credentialsFile: f[1] };
  };
}, 74285: (t, e, s) => {
  s.d(e, { A: () => c });
  var o = s(65835), r = s(21945);
  const n = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, i = ["__proto__", "profile __proto__"], c = (t2) => {
    const e2 = {};
    let s2, c2;
    for (const a of t2.split(/\r?\n/)) {
      const t3 = a.split(/(^|\s)[;#]/)[0].trim();
      if ("[" === t3[0] && "]" === t3[t3.length - 1]) {
        s2 = void 0, c2 = void 0;
        const e3 = t3.substring(1, t3.length - 1), a2 = n.exec(e3);
        if (a2) {
          const [, t4, , e4] = a2;
          Object.values(o.I).includes(t4) && (s2 = [t4, e4].join(r.Q));
        } else s2 = e3;
        if (i.includes(e3)) throw new Error(`Found invalid profile name "${e3}"`);
      } else if (s2) {
        const o2 = t3.indexOf("=");
        if (![0, -1].includes(o2)) {
          const [n2, i2] = [t3.substring(0, o2).trim(), t3.substring(o2 + 1).trim()];
          if ("" === i2) c2 = n2;
          else {
            c2 && a.trimStart() === a && (c2 = void 0), e2[s2] = e2[s2] || {};
            const t4 = c2 ? [c2, n2].join(r.Q) : n2;
            e2[s2][t4] = i2;
          }
        }
      }
    }
    return e2;
  };
}, 95519: (t, e, s) => {
  s.d(e, { g: () => n });
  var o = s(16928), r = s(44988);
  const n = () => process.env.AWS_CONFIG_FILE || (0, o.join)((0, r.R)(), ".aws", "config");
} };
