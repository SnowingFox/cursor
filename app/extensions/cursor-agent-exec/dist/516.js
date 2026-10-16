"use strict";
exports.id = 516, exports.ids = [373, 516, 754], exports.modules = { 4644: (e, t, n) => {
  n.d(t, { B: () => r });
  const r = (e2, t2, n2) => {
    let r2, o, a, s = false;
    const i = async () => {
      o || (o = e2());
      try {
        r2 = await o, a = true, s = false;
      } finally {
        o = void 0;
      }
      return r2;
    };
    return void 0 === t2 ? async (e3) => (a && !e3?.forceRefresh || (r2 = await i()), r2) : async (e3) => (a && !e3?.forceRefresh || (r2 = await i()), s ? r2 : n2 && !n2(r2) ? (s = true, r2) : t2(r2) ? (await i(), r2) : r2);
  };
}, 21945: (e, t, n) => {
  n.d(t, { Q: () => r });
  const r = ".";
}, 41516: (e, t, n) => {
  n.d(t, { ENV_CMDS_FULL_URI: () => p, ENV_CMDS_RELATIVE_URI: () => g, fromContainerMetadata: () => m, fromInstanceMetadata: () => $, getInstanceMetadataEndpoint: () => T, httpRequest: () => c });
  var r = n(63725), o = n(87016), a = n(38353), s = n(20181), i = n(58611);
  function c(e2) {
    return new Promise((t2, n2) => {
      const r2 = (0, i.request)({ method: "GET", ...e2, hostname: e2.hostname?.replace(/^\[(.+)\]$/, "$1") });
      r2.on("error", (e3) => {
        n2(Object.assign(new a.m("Unable to connect to instance metadata service"), e3)), r2.destroy();
      }), r2.on("timeout", () => {
        n2(new a.m("TimeoutError from instance metadata service")), r2.destroy();
      }), r2.on("response", (e3) => {
        const { statusCode: o2 = 400 } = e3;
        (o2 < 200 || 300 <= o2) && (n2(Object.assign(new a.m("Error response received from instance metadata service"), { statusCode: o2 })), r2.destroy());
        const i2 = [];
        e3.on("data", (e4) => {
          i2.push(e4);
        }), e3.on("end", () => {
          t2(s.Buffer.concat(i2)), r2.destroy();
        });
      }), r2.end();
    });
  }
  const l = (e2) => Boolean(e2) && "object" == typeof e2 && "string" == typeof e2.AccessKeyId && "string" == typeof e2.SecretAccessKey && "string" == typeof e2.Token && "string" == typeof e2.Expiration, d = (e2) => ({ accessKeyId: e2.AccessKeyId, secretAccessKey: e2.SecretAccessKey, sessionToken: e2.Token, expiration: new Date(e2.Expiration), ...e2.AccountId && { accountId: e2.AccountId } }), u = ({ maxRetries: e2 = 0, timeout: t2 = 1e3 }) => ({ maxRetries: e2, timeout: t2 }), f = (e2, t2) => {
    let n2 = e2();
    for (let r2 = 0; r2 < t2; r2++) n2 = n2.catch(e2);
    return n2;
  }, p = "AWS_CONTAINER_CREDENTIALS_FULL_URI", g = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", h = "AWS_CONTAINER_AUTHORIZATION_TOKEN", m = (e2 = {}) => {
    const { timeout: t2, maxRetries: n2 } = u(e2);
    return () => f(async () => {
      const n3 = await E({ logger: e2.logger }), o2 = JSON.parse(await v(t2, n3));
      if (!l(o2)) throw new r.C("Invalid response received from instance metadata service.", { logger: e2.logger });
      return d(o2);
    }, n2);
  }, v = async (e2, t2) => {
    process.env[h] && (t2.headers = { ...t2.headers, Authorization: process.env[h] });
    return (await c({ ...t2, timeout: e2 })).toString();
  }, w = { localhost: true, "127.0.0.1": true }, y = { "http:": true, "https:": true }, E = async ({ logger: e2 }) => {
    if (process.env[g]) return { hostname: "169.254.170.2", path: process.env[g] };
    if (process.env[p]) {
      const t2 = (0, o.parse)(process.env[p]);
      if (!t2.hostname || !(t2.hostname in w)) throw new r.C(`${t2.hostname} is not a valid container metadata service hostname`, { tryNextLink: false, logger: e2 });
      if (!t2.protocol || !(t2.protocol in y)) throw new r.C(`${t2.protocol} is not a valid container metadata service protocol`, { tryNextLink: false, logger: e2 });
      return { ...t2, port: t2.port ? parseInt(t2.port, 10) : void 0 };
    }
    throw new r.C(`The container metadata credential provider cannot be used unless the ${g} or ${p} environment variable is set`, { tryNextLink: false, logger: e2 });
  };
  var I = n(56508);
  class A extends r.C {
    tryNextLink;
    name = "InstanceMetadataV1FallbackError";
    constructor(e2, t2 = true) {
      super(e2, t2), this.tryNextLink = t2, Object.setPrototypeOf(this, A.prototype);
    }
  }
  var _, S = n(55264);
  !(function(e2) {
    e2.IPv4 = "http://169.254.169.254", e2.IPv6 = "http://[fd00:ec2::254]";
  })(_ || (_ = {}));
  const C = { environmentVariableSelector: (e2) => e2.AWS_EC2_METADATA_SERVICE_ENDPOINT, configFileSelector: (e2) => e2.ec2_metadata_service_endpoint, default: void 0 };
  var b;
  !(function(e2) {
    e2.IPv4 = "IPv4", e2.IPv6 = "IPv6";
  })(b || (b = {}));
  const R = { environmentVariableSelector: (e2) => e2.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE, configFileSelector: (e2) => e2.ec2_metadata_service_endpoint_mode, default: b.IPv4 }, T = async () => (0, S.parseUrl)(await N() || await O()), N = async () => (0, I.Z)(C)(), O = async () => {
    const e2 = await (0, I.Z)(R)();
    switch (e2) {
      case b.IPv4:
        return _.IPv4;
      case b.IPv6:
        return _.IPv6;
      default:
        throw new Error(`Unsupported endpoint mode: ${e2}. Select from ${Object.values(b)}`);
    }
  }, x = (e2, t2) => {
    const n2 = 300 + Math.floor(300 * Math.random()), r2 = new Date(Date.now() + 1e3 * n2);
    t2.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(r2)}.
For more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`);
    const o2 = e2.originalExpiration ?? e2.expiration;
    return { ...e2, ...o2 ? { originalExpiration: o2 } : {}, expiration: r2 };
  }, D = "/latest/meta-data/iam/security-credentials/", F = "AWS_EC2_METADATA_V1_DISABLED", P = "ec2_metadata_v1_disabled", M = "x-aws-ec2-metadata-token", $ = (e2 = {}) => ((e3, t2 = {}) => {
    const n2 = t2?.logger || console;
    let r2;
    return async () => {
      let t3;
      try {
        t3 = await e3(), t3.expiration && t3.expiration.getTime() < Date.now() && (t3 = x(t3, n2));
      } catch (e4) {
        if (!r2) throw e4;
        n2.warn("Credential renew failed: ", e4), t3 = x(r2, n2);
      }
      return r2 = t3, t3;
    };
  })(L(e2), { logger: e2.logger }), L = (e2 = {}) => {
    let t2 = false;
    const { logger: n2, profile: o2 } = e2, { timeout: a2, maxRetries: s2 } = u(e2), i2 = async (n3, a3) => {
      if (t2 || null == a3.headers?.[M]) {
        let t3 = false, n4 = false;
        const a4 = await (0, I.Z)({ environmentVariableSelector: (t4) => {
          const o3 = t4[F];
          if (n4 = !!o3 && "false" !== o3, void 0 === o3) throw new r.C(`${F} not set in env, checking config file next.`, { logger: e2.logger });
          return n4;
        }, configFileSelector: (e3) => {
          const n5 = e3[P];
          return t3 = !!n5 && "false" !== n5, t3;
        }, default: false }, { profile: o2 })();
        if (e2.ec2MetadataV1Disabled || a4) {
          const r2 = [];
          throw e2.ec2MetadataV1Disabled && r2.push("credential provider initialization (runtime option ec2MetadataV1Disabled)"), t3 && r2.push(`config file profile (${P})`), n4 && r2.push(`process environment variable (${F})`), new A(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${r2.join(", ")}].`);
        }
      }
      const s3 = (await f(async () => {
        let e3;
        try {
          e3 = await j(a3);
        } catch (e4) {
          throw 401 === e4.statusCode && (t2 = false), e4;
        }
        return e3;
      }, n3)).trim();
      return f(async () => {
        let n4;
        try {
          n4 = await V(s3, a3, e2);
        } catch (e3) {
          throw 401 === e3.statusCode && (t2 = false), e3;
        }
        return n4;
      }, n3);
    };
    return async () => {
      const e3 = await T();
      if (t2) return n2?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"), i2(s2, { ...e3, timeout: a2 });
      {
        let r2;
        try {
          r2 = (await k({ ...e3, timeout: a2 })).toString();
        } catch (r3) {
          if (400 === r3?.statusCode) throw Object.assign(r3, { message: "EC2 Metadata token request returned error" });
          return ("TimeoutError" === r3.message || [403, 404, 405].includes(r3.statusCode)) && (t2 = true), n2?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"), i2(s2, { ...e3, timeout: a2 });
        }
        return i2(s2, { ...e3, headers: { [M]: r2 }, timeout: a2 });
      }
    };
  }, k = async (e2) => c({ ...e2, path: "/latest/api/token", method: "PUT", headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" } }), j = async (e2) => (await c({ ...e2, path: D })).toString(), V = async (e2, t2, n2) => {
    const o2 = JSON.parse((await c({ ...t2, path: D + e2 })).toString());
    if (!l(o2)) throw new r.C("Invalid response received from instance metadata service.", { logger: n2.logger });
    return d(o2);
  };
}, 44988: (e, t, n) => {
  n.d(t, { R: () => s });
  var r = n(70857), o = n(16928);
  const a = {}, s = () => {
    const { HOME: e2, USERPROFILE: t2, HOMEPATH: n2, HOMEDRIVE: s2 = `C:${o.sep}` } = process.env;
    if (e2) return e2;
    if (t2) return t2;
    if (n2) return `${s2}${n2}`;
    const i = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return a[i] || (a[i] = (0, r.homedir)()), a[i];
  };
}, 55264: (e, t, n) => {
  n.r(t), n.d(t, { parseUrl: () => r });
  const r = (e2) => {
    if ("string" == typeof e2) return r(new URL(e2));
    const { hostname: t2, pathname: n2, port: o, protocol: a, search: s } = e2;
    let i;
    return s && (i = (function(e3) {
      const t3 = {};
      if (e3 = e3.replace(/^\?/, "")) for (const n3 of e3.split("&")) {
        let [e4, r2 = null] = n3.split("=");
        e4 = decodeURIComponent(e4), r2 && (r2 = decodeURIComponent(r2)), e4 in t3 ? Array.isArray(t3[e4]) ? t3[e4].push(r2) : t3[e4] = [t3[e4], r2] : t3[e4] = r2;
      }
      return t3;
    })(s)), { hostname: t2, port: o ? parseInt(o) : void 0, protocol: a, path: n2, query: i };
  };
}, 56508: (e, t, n) => {
  n.d(t, { Z: () => d });
  var r = n(4644), o = n(34661), a = n(63725);
  function s(e2) {
    try {
      const t2 = new Set(Array.from(e2.match(/([A-Z_]){3,}/g) ?? []));
      return t2.delete("CONFIG"), t2.delete("CONFIG_PREFIX_SEPARATOR"), t2.delete("ENV"), [...t2].join(", ");
    } catch (t2) {
      return e2;
    }
  }
  var i = n(76964), c = n(61247);
  const l = (e2) => {
    return "function" == typeof e2 ? async () => await e2() : (t2 = e2, () => Promise.resolve(t2));
    var t2;
  }, d = ({ environmentVariableSelector: e2, configFileSelector: t2, default: n2 }, d2 = {}) => {
    const { signingName: u, logger: f } = d2, p = { signingName: u, logger: f };
    return (0, r.B)((0, o.c)((g = e2, h = p, async () => {
      try {
        const e3 = g(process.env, h);
        if (void 0 === e3) throw new Error();
        return e3;
      } catch (e3) {
        throw new a.C(e3.message || `Not found in ENV: ${s(g.toString())}`, { logger: h?.logger });
      }
    }), ((e3, { preferredFile: t3 = "config", ...n3 } = {}) => async () => {
      const r2 = (0, i.Bz)(n3), { configFile: o2, credentialsFile: l2 } = await (0, c.p)(n3), d3 = l2[r2] || {}, u2 = o2[r2] || {}, f2 = "config" === t3 ? { ...d3, ...u2 } : { ...u2, ...d3 };
      try {
        const n4 = e3(f2, "config" === t3 ? o2 : l2);
        if (void 0 === n4) throw new Error();
        return n4;
      } catch (t4) {
        throw new a.C(t4.message || `Not found in config files w/ profile [${r2}]: ${s(e3.toString())}`, { logger: n3.logger });
      }
    })(t2, d2), l(n2)));
    var g, h;
  };
}, 61247: (e, t, n) => {
  n.d(t, { p: () => p });
  var r = n(16928), o = n(65835), a = n(21945);
  const s = (e2) => Object.entries(e2).filter(([e3]) => {
    const t2 = e3.indexOf(a.Q);
    return -1 !== t2 && Object.values(o.I).includes(e3.substring(0, t2));
  }).reduce((e3, [t2, n2]) => {
    const r2 = t2.indexOf(a.Q);
    return e3[t2.substring(0, r2) === o.I.PROFILE ? t2.substring(r2 + 1) : t2] = n2, e3;
  }, { ...e2.default && { default: e2.default } });
  var i = n(95519), c = n(44988);
  const l = () => process.env.AWS_SHARED_CREDENTIALS_FILE || (0, r.join)((0, c.R)(), ".aws", "credentials");
  var d = n(74285), u = n(85004);
  const f = () => ({}), p = async (e2 = {}) => {
    const { filepath: t2 = l(), configFilepath: n2 = (0, i.g)() } = e2, o2 = (0, c.R)();
    let a2 = t2;
    t2.startsWith("~/") && (a2 = (0, r.join)(o2, t2.slice(2)));
    let p2 = n2;
    n2.startsWith("~/") && (p2 = (0, r.join)(o2, n2.slice(2)));
    const g = await Promise.all([(0, u.TA)(p2, { ignoreCache: e2.ignoreCache }).then(d.A).then(s).catch(f), (0, u.TA)(a2, { ignoreCache: e2.ignoreCache }).then(d.A).catch(f)]);
    return { configFile: g[0], credentialsFile: g[1] };
  };
}, 74285: (e, t, n) => {
  n.d(t, { A: () => i });
  var r = n(65835), o = n(21945);
  const a = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, s = ["__proto__", "profile __proto__"], i = (e2) => {
    const t2 = {};
    let n2, i2;
    for (const c of e2.split(/\r?\n/)) {
      const e3 = c.split(/(^|\s)[;#]/)[0].trim();
      if ("[" === e3[0] && "]" === e3[e3.length - 1]) {
        n2 = void 0, i2 = void 0;
        const t3 = e3.substring(1, e3.length - 1), c2 = a.exec(t3);
        if (c2) {
          const [, e4, , t4] = c2;
          Object.values(r.I).includes(e4) && (n2 = [e4, t4].join(o.Q));
        } else n2 = t3;
        if (s.includes(t3)) throw new Error(`Found invalid profile name "${t3}"`);
      } else if (n2) {
        const r2 = e3.indexOf("=");
        if (![0, -1].includes(r2)) {
          const [a2, s2] = [e3.substring(0, r2).trim(), e3.substring(r2 + 1).trim()];
          if ("" === s2) i2 = a2;
          else {
            i2 && c.trimStart() === c && (i2 = void 0), t2[n2] = t2[n2] || {};
            const e4 = i2 ? [i2, a2].join(o.Q) : a2;
            t2[n2][e4] = s2;
          }
        }
      }
    }
    return t2;
  };
}, 85004: (e, t, n) => {
  n.d(t, { Jj: () => a, TA: () => s });
  var r = n(51455);
  const o = {}, a = {}, s = (e2, t2) => void 0 !== a[e2] ? a[e2] : (o[e2] && !t2?.ignoreCache || (o[e2] = (0, r.readFile)(e2, "utf8")), o[e2]);
}, 95519: (e, t, n) => {
  n.d(t, { g: () => a });
  var r = n(16928), o = n(44988);
  const a = () => process.env.AWS_CONFIG_FILE || (0, r.join)((0, o.R)(), ".aws", "config");
} };
