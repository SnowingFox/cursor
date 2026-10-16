"use strict";
exports.id = 754, exports.ids = [373, 754], exports.modules = { 4644: (e, t, r) => {
  r.d(t, { B: () => n });
  const n = (e2, t2, r2) => {
    let n2, a, o, i = false;
    const s = async () => {
      a || (a = e2());
      try {
        n2 = await a, o = true, i = false;
      } finally {
        a = void 0;
      }
      return n2;
    };
    return void 0 === t2 ? async (e3) => (o && !e3?.forceRefresh || (n2 = await s()), n2) : async (e3) => (o && !e3?.forceRefresh || (n2 = await s()), i ? n2 : r2 && !r2(n2) ? (i = true, n2) : t2(n2) ? (await s(), n2) : n2);
  };
}, 41516: (e, t, r) => {
  r.d(t, { ENV_CMDS_FULL_URI: () => f, ENV_CMDS_RELATIVE_URI: () => g, fromContainerMetadata: () => h, fromInstanceMetadata: () => V, getInstanceMetadataEndpoint: () => T, httpRequest: () => c });
  var n = r(63725), a = r(87016), o = r(38353), i = r(20181), s = r(58611);
  function c(e2) {
    return new Promise((t2, r2) => {
      const n2 = (0, s.request)({ method: "GET", ...e2, hostname: e2.hostname?.replace(/^\[(.+)\]$/, "$1") });
      n2.on("error", (e3) => {
        r2(Object.assign(new o.m("Unable to connect to instance metadata service"), e3)), n2.destroy();
      }), n2.on("timeout", () => {
        r2(new o.m("TimeoutError from instance metadata service")), n2.destroy();
      }), n2.on("response", (e3) => {
        const { statusCode: a2 = 400 } = e3;
        (a2 < 200 || 300 <= a2) && (r2(Object.assign(new o.m("Error response received from instance metadata service"), { statusCode: a2 })), n2.destroy());
        const s2 = [];
        e3.on("data", (e4) => {
          s2.push(e4);
        }), e3.on("end", () => {
          t2(i.Buffer.concat(s2)), n2.destroy();
        });
      }), n2.end();
    });
  }
  const l = (e2) => Boolean(e2) && "object" == typeof e2 && "string" == typeof e2.AccessKeyId && "string" == typeof e2.SecretAccessKey && "string" == typeof e2.Token && "string" == typeof e2.Expiration, d = (e2) => ({ accessKeyId: e2.AccessKeyId, secretAccessKey: e2.SecretAccessKey, sessionToken: e2.Token, expiration: new Date(e2.Expiration), ...e2.AccountId && { accountId: e2.AccountId } }), u = ({ maxRetries: e2 = 0, timeout: t2 = 1e3 }) => ({ maxRetries: e2, timeout: t2 }), p = (e2, t2) => {
    let r2 = e2();
    for (let n2 = 0; n2 < t2; n2++) r2 = r2.catch(e2);
    return r2;
  }, f = "AWS_CONTAINER_CREDENTIALS_FULL_URI", g = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", m = "AWS_CONTAINER_AUTHORIZATION_TOKEN", h = (e2 = {}) => {
    const { timeout: t2, maxRetries: r2 } = u(e2);
    return () => p(async () => {
      const r3 = await I({ logger: e2.logger }), a2 = JSON.parse(await v(t2, r3));
      if (!l(a2)) throw new n.C("Invalid response received from instance metadata service.", { logger: e2.logger });
      return d(a2);
    }, r2);
  }, v = async (e2, t2) => {
    process.env[m] && (t2.headers = { ...t2.headers, Authorization: process.env[m] });
    return (await c({ ...t2, timeout: e2 })).toString();
  }, w = { localhost: true, "127.0.0.1": true }, y = { "http:": true, "https:": true }, I = async ({ logger: e2 }) => {
    if (process.env[g]) return { hostname: "169.254.170.2", path: process.env[g] };
    if (process.env[f]) {
      const t2 = (0, a.parse)(process.env[f]);
      if (!t2.hostname || !(t2.hostname in w)) throw new n.C(`${t2.hostname} is not a valid container metadata service hostname`, { tryNextLink: false, logger: e2 });
      if (!t2.protocol || !(t2.protocol in y)) throw new n.C(`${t2.protocol} is not a valid container metadata service protocol`, { tryNextLink: false, logger: e2 });
      return { ...t2, port: t2.port ? parseInt(t2.port, 10) : void 0 };
    }
    throw new n.C(`The container metadata credential provider cannot be used unless the ${g} or ${f} environment variable is set`, { tryNextLink: false, logger: e2 });
  };
  var E = r(56508);
  class A extends n.C {
    tryNextLink;
    name = "InstanceMetadataV1FallbackError";
    constructor(e2, t2 = true) {
      super(e2, t2), this.tryNextLink = t2, Object.setPrototypeOf(this, A.prototype);
    }
  }
  var _, S = r(55264);
  !(function(e2) {
    e2.IPv4 = "http://169.254.169.254", e2.IPv6 = "http://[fd00:ec2::254]";
  })(_ || (_ = {}));
  const C = { environmentVariableSelector: (e2) => e2.AWS_EC2_METADATA_SERVICE_ENDPOINT, configFileSelector: (e2) => e2.ec2_metadata_service_endpoint, default: void 0 };
  var N;
  !(function(e2) {
    e2.IPv4 = "IPv4", e2.IPv6 = "IPv6";
  })(N || (N = {}));
  const b = { environmentVariableSelector: (e2) => e2.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE, configFileSelector: (e2) => e2.ec2_metadata_service_endpoint_mode, default: N.IPv4 }, T = async () => (0, S.parseUrl)(await x() || await R()), x = async () => (0, E.Z)(C)(), R = async () => {
    const e2 = await (0, E.Z)(b)();
    switch (e2) {
      case N.IPv4:
        return _.IPv4;
      case N.IPv6:
        return _.IPv6;
      default:
        throw new Error(`Unsupported endpoint mode: ${e2}. Select from ${Object.values(N)}`);
    }
  }, D = (e2, t2) => {
    const r2 = 300 + Math.floor(300 * Math.random()), n2 = new Date(Date.now() + 1e3 * r2);
    t2.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(n2)}.
For more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`);
    const a2 = e2.originalExpiration ?? e2.expiration;
    return { ...e2, ...a2 ? { originalExpiration: a2 } : {}, expiration: n2 };
  }, k = "/latest/meta-data/iam/security-credentials/", O = "AWS_EC2_METADATA_V1_DISABLED", M = "ec2_metadata_v1_disabled", P = "x-aws-ec2-metadata-token", V = (e2 = {}) => ((e3, t2 = {}) => {
    const r2 = t2?.logger || console;
    let n2;
    return async () => {
      let t3;
      try {
        t3 = await e3(), t3.expiration && t3.expiration.getTime() < Date.now() && (t3 = D(t3, r2));
      } catch (e4) {
        if (!n2) throw e4;
        r2.warn("Credential renew failed: ", e4), t3 = D(n2, r2);
      }
      return n2 = t3, t3;
    };
  })($(e2), { logger: e2.logger }), $ = (e2 = {}) => {
    let t2 = false;
    const { logger: r2, profile: a2 } = e2, { timeout: o2, maxRetries: i2 } = u(e2), s2 = async (r3, o3) => {
      if (t2 || null == o3.headers?.[P]) {
        let t3 = false, r4 = false;
        const o4 = await (0, E.Z)({ environmentVariableSelector: (t4) => {
          const a3 = t4[O];
          if (r4 = !!a3 && "false" !== a3, void 0 === a3) throw new n.C(`${O} not set in env, checking config file next.`, { logger: e2.logger });
          return r4;
        }, configFileSelector: (e3) => {
          const r5 = e3[M];
          return t3 = !!r5 && "false" !== r5, t3;
        }, default: false }, { profile: a2 })();
        if (e2.ec2MetadataV1Disabled || o4) {
          const n2 = [];
          throw e2.ec2MetadataV1Disabled && n2.push("credential provider initialization (runtime option ec2MetadataV1Disabled)"), t3 && n2.push(`config file profile (${M})`), r4 && n2.push(`process environment variable (${O})`), new A(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${n2.join(", ")}].`);
        }
      }
      const i3 = (await p(async () => {
        let e3;
        try {
          e3 = await U(o3);
        } catch (e4) {
          throw 401 === e4.statusCode && (t2 = false), e4;
        }
        return e3;
      }, r3)).trim();
      return p(async () => {
        let r4;
        try {
          r4 = await F(i3, o3, e2);
        } catch (e3) {
          throw 401 === e3.statusCode && (t2 = false), e3;
        }
        return r4;
      }, r3);
    };
    return async () => {
      const e3 = await T();
      if (t2) return r2?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"), s2(i2, { ...e3, timeout: o2 });
      {
        let n2;
        try {
          n2 = (await L({ ...e3, timeout: o2 })).toString();
        } catch (n3) {
          if (400 === n3?.statusCode) throw Object.assign(n3, { message: "EC2 Metadata token request returned error" });
          return ("TimeoutError" === n3.message || [403, 404, 405].includes(n3.statusCode)) && (t2 = true), r2?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"), s2(i2, { ...e3, timeout: o2 });
        }
        return s2(i2, { ...e3, headers: { [P]: n2 }, timeout: o2 });
      }
    };
  }, L = async (e2) => c({ ...e2, path: "/latest/api/token", method: "PUT", headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" } }), U = async (e2) => (await c({ ...e2, path: k })).toString(), F = async (e2, t2, r2) => {
    const a2 = JSON.parse((await c({ ...t2, path: k + e2 })).toString());
    if (!l(a2)) throw new n.C("Invalid response received from instance metadata service.", { logger: r2.logger });
    return d(a2);
  };
}, 55264: (e, t, r) => {
  r.r(t), r.d(t, { parseUrl: () => n });
  const n = (e2) => {
    if ("string" == typeof e2) return n(new URL(e2));
    const { hostname: t2, pathname: r2, port: a, protocol: o, search: i } = e2;
    let s;
    return i && (s = (function(e3) {
      const t3 = {};
      if (e3 = e3.replace(/^\?/, "")) for (const r3 of e3.split("&")) {
        let [e4, n2 = null] = r3.split("=");
        e4 = decodeURIComponent(e4), n2 && (n2 = decodeURIComponent(n2)), e4 in t3 ? Array.isArray(t3[e4]) ? t3[e4].push(n2) : t3[e4] = [t3[e4], n2] : t3[e4] = n2;
      }
      return t3;
    })(i)), { hostname: t2, port: a ? parseInt(a) : void 0, protocol: o, path: r2, query: s };
  };
}, 56508: (e, t, r) => {
  r.d(t, { Z: () => d });
  var n = r(4644), a = r(34661), o = r(63725);
  function i(e2) {
    try {
      const t2 = new Set(Array.from(e2.match(/([A-Z_]){3,}/g) ?? []));
      return t2.delete("CONFIG"), t2.delete("CONFIG_PREFIX_SEPARATOR"), t2.delete("ENV"), [...t2].join(", ");
    } catch (t2) {
      return e2;
    }
  }
  var s = r(76964), c = r(61247);
  const l = (e2) => {
    return "function" == typeof e2 ? async () => await e2() : (t2 = e2, () => Promise.resolve(t2));
    var t2;
  }, d = ({ environmentVariableSelector: e2, configFileSelector: t2, default: r2 }, d2 = {}) => {
    const { signingName: u, logger: p } = d2, f = { signingName: u, logger: p };
    return (0, n.B)((0, a.c)((g = e2, m = f, async () => {
      try {
        const e3 = g(process.env, m);
        if (void 0 === e3) throw new Error();
        return e3;
      } catch (e3) {
        throw new o.C(e3.message || `Not found in ENV: ${i(g.toString())}`, { logger: m?.logger });
      }
    }), ((e3, { preferredFile: t3 = "config", ...r3 } = {}) => async () => {
      const n2 = (0, s.Bz)(r3), { configFile: a2, credentialsFile: l2 } = await (0, c.p)(r3), d3 = l2[n2] || {}, u2 = a2[n2] || {}, p2 = "config" === t3 ? { ...d3, ...u2 } : { ...u2, ...d3 };
      try {
        const r4 = e3(p2, "config" === t3 ? a2 : l2);
        if (void 0 === r4) throw new Error();
        return r4;
      } catch (t4) {
        throw new o.C(t4.message || `Not found in config files w/ profile [${n2}]: ${i(e3.toString())}`, { logger: r3.logger });
      }
    })(t2, d2), l(r2)));
    var g, m;
  };
} };
