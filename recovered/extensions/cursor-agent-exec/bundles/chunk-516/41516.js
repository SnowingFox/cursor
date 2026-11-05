// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/516.js sha256:00b9230f6f51b75f192bcd1f5c76b0742f88cd64f2190cc62284529e10083705
// module: 41516 range:666..8955
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41516: (e, t, n) => {
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
}