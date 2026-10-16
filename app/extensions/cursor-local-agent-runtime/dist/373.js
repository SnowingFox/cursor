"use strict";
exports.id = 373, exports.ids = [373], exports.modules = { 41516: (e, t, a) => {
  a.d(t, { ENV_CMDS_FULL_URI: () => m, ENV_CMDS_RELATIVE_URI: () => g, fromContainerMetadata: () => h, fromInstanceMetadata: () => L, getInstanceMetadataEndpoint: () => T, httpRequest: () => c });
  var n = a(63725), r = a(87016), o = a(38353), s = a(20181), i = a(58611);
  function c(e2) {
    return new Promise((t2, a2) => {
      const n2 = (0, i.request)({ method: "GET", ...e2, hostname: e2.hostname?.replace(/^\[(.+)\]$/, "$1") });
      n2.on("error", (e3) => {
        a2(Object.assign(new o.m("Unable to connect to instance metadata service"), e3)), n2.destroy();
      }), n2.on("timeout", () => {
        a2(new o.m("TimeoutError from instance metadata service")), n2.destroy();
      }), n2.on("response", (e3) => {
        const { statusCode: r2 = 400 } = e3;
        (r2 < 200 || 300 <= r2) && (a2(Object.assign(new o.m("Error response received from instance metadata service"), { statusCode: r2 })), n2.destroy());
        const i2 = [];
        e3.on("data", (e4) => {
          i2.push(e4);
        }), e3.on("end", () => {
          t2(s.Buffer.concat(i2)), n2.destroy();
        });
      }), n2.end();
    });
  }
  const l = (e2) => Boolean(e2) && "object" == typeof e2 && "string" == typeof e2.AccessKeyId && "string" == typeof e2.SecretAccessKey && "string" == typeof e2.Token && "string" == typeof e2.Expiration, d = (e2) => ({ accessKeyId: e2.AccessKeyId, secretAccessKey: e2.SecretAccessKey, sessionToken: e2.Token, expiration: new Date(e2.Expiration), ...e2.AccountId && { accountId: e2.AccountId } }), u = ({ maxRetries: e2 = 0, timeout: t2 = 1e3 }) => ({ maxRetries: e2, timeout: t2 }), p = (e2, t2) => {
    let a2 = e2();
    for (let n2 = 0; n2 < t2; n2++) a2 = a2.catch(e2);
    return a2;
  }, m = "AWS_CONTAINER_CREDENTIALS_FULL_URI", g = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", f = "AWS_CONTAINER_AUTHORIZATION_TOKEN", h = (e2 = {}) => {
    const { timeout: t2, maxRetries: a2 } = u(e2);
    return () => p(async () => {
      const a3 = await I({ logger: e2.logger }), r2 = JSON.parse(await v(t2, a3));
      if (!l(r2)) throw new n.C("Invalid response received from instance metadata service.", { logger: e2.logger });
      return d(r2);
    }, a2);
  }, v = async (e2, t2) => {
    process.env[f] && (t2.headers = { ...t2.headers, Authorization: process.env[f] });
    return (await c({ ...t2, timeout: e2 })).toString();
  }, w = { localhost: true, "127.0.0.1": true }, y = { "http:": true, "https:": true }, I = async ({ logger: e2 }) => {
    if (process.env[g]) return { hostname: "169.254.170.2", path: process.env[g] };
    if (process.env[m]) {
      const t2 = (0, r.parse)(process.env[m]);
      if (!t2.hostname || !(t2.hostname in w)) throw new n.C(`${t2.hostname} is not a valid container metadata service hostname`, { tryNextLink: false, logger: e2 });
      if (!t2.protocol || !(t2.protocol in y)) throw new n.C(`${t2.protocol} is not a valid container metadata service protocol`, { tryNextLink: false, logger: e2 });
      return { ...t2, port: t2.port ? parseInt(t2.port, 10) : void 0 };
    }
    throw new n.C(`The container metadata credential provider cannot be used unless the ${g} or ${m} environment variable is set`, { tryNextLink: false, logger: e2 });
  };
  var E = a(56508);
  class _ extends n.C {
    tryNextLink;
    name = "InstanceMetadataV1FallbackError";
    constructor(e2, t2 = true) {
      super(e2, t2), this.tryNextLink = t2, Object.setPrototypeOf(this, _.prototype);
    }
  }
  var A, S = a(55264);
  !(function(e2) {
    e2.IPv4 = "http://169.254.169.254", e2.IPv6 = "http://[fd00:ec2::254]";
  })(A || (A = {}));
  const C = { environmentVariableSelector: (e2) => e2.AWS_EC2_METADATA_SERVICE_ENDPOINT, configFileSelector: (e2) => e2.ec2_metadata_service_endpoint, default: void 0 };
  var b;
  !(function(e2) {
    e2.IPv4 = "IPv4", e2.IPv6 = "IPv6";
  })(b || (b = {}));
  const x = { environmentVariableSelector: (e2) => e2.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE, configFileSelector: (e2) => e2.ec2_metadata_service_endpoint_mode, default: b.IPv4 }, T = async () => (0, S.parseUrl)(await D() || await N()), D = async () => (0, E.Z)(C)(), N = async () => {
    const e2 = await (0, E.Z)(x)();
    switch (e2) {
      case b.IPv4:
        return A.IPv4;
      case b.IPv6:
        return A.IPv6;
      default:
        throw new Error(`Unsupported endpoint mode: ${e2}. Select from ${Object.values(b)}`);
    }
  }, k = (e2, t2) => {
    const a2 = 300 + Math.floor(300 * Math.random()), n2 = new Date(Date.now() + 1e3 * a2);
    t2.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(n2)}.
For more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`);
    const r2 = e2.originalExpiration ?? e2.expiration;
    return { ...e2, ...r2 ? { originalExpiration: r2 } : {}, expiration: n2 };
  }, M = "/latest/meta-data/iam/security-credentials/", R = "AWS_EC2_METADATA_V1_DISABLED", O = "ec2_metadata_v1_disabled", P = "x-aws-ec2-metadata-token", L = (e2 = {}) => ((e3, t2 = {}) => {
    const a2 = t2?.logger || console;
    let n2;
    return async () => {
      let t3;
      try {
        t3 = await e3(), t3.expiration && t3.expiration.getTime() < Date.now() && (t3 = k(t3, a2));
      } catch (e4) {
        if (!n2) throw e4;
        a2.warn("Credential renew failed: ", e4), t3 = k(n2, a2);
      }
      return n2 = t3, t3;
    };
  })(V(e2), { logger: e2.logger }), V = (e2 = {}) => {
    let t2 = false;
    const { logger: a2, profile: r2 } = e2, { timeout: o2, maxRetries: s2 } = u(e2), i2 = async (a3, o3) => {
      if (t2 || null == o3.headers?.[P]) {
        let t3 = false, a4 = false;
        const o4 = await (0, E.Z)({ environmentVariableSelector: (t4) => {
          const r3 = t4[R];
          if (a4 = !!r3 && "false" !== r3, void 0 === r3) throw new n.C(`${R} not set in env, checking config file next.`, { logger: e2.logger });
          return a4;
        }, configFileSelector: (e3) => {
          const a5 = e3[O];
          return t3 = !!a5 && "false" !== a5, t3;
        }, default: false }, { profile: r2 })();
        if (e2.ec2MetadataV1Disabled || o4) {
          const n2 = [];
          throw e2.ec2MetadataV1Disabled && n2.push("credential provider initialization (runtime option ec2MetadataV1Disabled)"), t3 && n2.push(`config file profile (${O})`), a4 && n2.push(`process environment variable (${R})`), new _(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${n2.join(", ")}].`);
        }
      }
      const s3 = (await p(async () => {
        let e3;
        try {
          e3 = await U(o3);
        } catch (e4) {
          throw 401 === e4.statusCode && (t2 = false), e4;
        }
        return e3;
      }, a3)).trim();
      return p(async () => {
        let a4;
        try {
          a4 = await K(s3, o3, e2);
        } catch (e3) {
          throw 401 === e3.statusCode && (t2 = false), e3;
        }
        return a4;
      }, a3);
    };
    return async () => {
      const e3 = await T();
      if (t2) return a2?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"), i2(s2, { ...e3, timeout: o2 });
      {
        let n2;
        try {
          n2 = (await $({ ...e3, timeout: o2 })).toString();
        } catch (n3) {
          if (400 === n3?.statusCode) throw Object.assign(n3, { message: "EC2 Metadata token request returned error" });
          return ("TimeoutError" === n3.message || [403, 404, 405].includes(n3.statusCode)) && (t2 = true), a2?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"), i2(s2, { ...e3, timeout: o2 });
        }
        return i2(s2, { ...e3, headers: { [P]: n2 }, timeout: o2 });
      }
    };
  }, $ = async (e2) => c({ ...e2, path: "/latest/api/token", method: "PUT", headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" } }), U = async (e2) => (await c({ ...e2, path: M })).toString(), K = async (e2, t2, a2) => {
    const r2 = JSON.parse((await c({ ...t2, path: M + e2 })).toString());
    if (!l(r2)) throw new n.C("Invalid response received from instance metadata service.", { logger: a2.logger });
    return d(r2);
  };
} };
