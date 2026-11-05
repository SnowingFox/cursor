// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 86344 range:7526459..7543129
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86344: (e, t, r) => {
    const { homedir: n } = r(48161), { sep: o, join: s } = r(76760), { createHash: i } = r(77598), { readFile: a } = r(51455), { IniSectionType: l } = r(52391), { normalizeProvider: c } = r(42997), { isValidHostLabel: u } = r(11255);
    class d extends Error {
      name = "ProviderError";
      tryNextLink;
      constructor(e2, t2 = true) {
        let r2, n2 = true;
        "boolean" == typeof t2 ? (r2 = void 0, n2 = t2) : null != t2 && "object" == typeof t2 && (r2 = t2.logger, n2 = t2.tryNextLink ?? true), super(e2), this.tryNextLink = n2, Object.setPrototypeOf(this, d.prototype), r2?.debug?.(`@smithy/property-provider ${n2 ? "->" : "(!)"} ${e2}`);
      }
      static from(e2, t2 = true) {
        return Object.assign(new this(e2.message, t2), e2);
      }
    }
    class p extends d {
      name = "CredentialsProviderError";
      constructor(e2, t2 = true) {
        super(e2, t2), Object.setPrototypeOf(this, p.prototype);
      }
    }
    class h extends d {
      name = "TokenProviderError";
      constructor(e2, t2 = true) {
        super(e2, t2), Object.setPrototypeOf(this, h.prototype);
      }
    }
    const m = (...e2) => async () => {
      if (0 === e2.length) throw new d("No providers in chain");
      let t2;
      for (const r2 of e2) try {
        return await r2();
      } catch (e3) {
        if (t2 = e3, e3?.tryNextLink) continue;
        throw e3;
      }
      throw t2;
    }, f = (e2) => () => Promise.resolve(e2), g = (e2, t2, r2) => {
      let n2, o2, s2, i2 = false;
      const a2 = async () => {
        o2 || (o2 = e2());
        try {
          n2 = await o2, s2 = true, i2 = false;
        } finally {
          o2 = void 0;
        }
        return n2;
      };
      return void 0 === t2 ? async (e3) => (s2 && !e3?.forceRefresh || (n2 = await a2()), n2) : async (e3) => (s2 && !e3?.forceRefresh || (n2 = await a2()), i2 ? n2 : r2 && !r2(n2) ? (i2 = true, n2) : t2(n2) ? (await a2(), n2) : n2);
    }, y = (e2, t2, r2) => {
      if (t2 in e2) {
        if ("true" === e2[t2]) return true;
        if ("false" === e2[t2]) return false;
        throw new Error(`Cannot load ${r2} "${t2}". Expected "true" or "false", got ${e2[t2]}.`);
      }
    };
    var v;
    !(function(e2) {
      e2.ENV = "env", e2.CONFIG = "shared config entry";
    })(v || (v = {}));
    const w = {}, b = () => {
      const { HOME: e2, USERPROFILE: t2, HOMEPATH: r2, HOMEDRIVE: s2 = `C:${o}` } = process.env;
      if (e2) return e2;
      if (t2) return t2;
      if (r2) return `${s2}${r2}`;
      const i2 = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
      return w[i2] || (w[i2] = n()), w[i2];
    }, _ = "AWS_PROFILE", S = "default", x = (e2) => e2.profile || process.env[_] || S, k = (e2) => {
      const t2 = i("sha1").update(e2).digest("hex");
      return s(b(), ".aws", "sso", "cache", `${t2}.json`);
    }, E = {}, T = ".", C = (e2) => Object.entries(e2).filter(([e3]) => {
      const t2 = e3.indexOf(T);
      return -1 !== t2 && Object.values(l).includes(e3.substring(0, t2));
    }).reduce((e3, [t2, r2]) => {
      const n2 = t2.indexOf(T);
      return e3[t2.substring(0, n2) === l.PROFILE ? t2.substring(n2 + 1) : t2] = r2, e3;
    }, { ...e2.default && { default: e2.default } }), I = () => process.env.AWS_CONFIG_FILE || s(b(), ".aws", "config"), A = () => process.env.AWS_SHARED_CREDENTIALS_FILE || s(b(), ".aws", "credentials"), P = /^([\w-]+)\s(["'])?([\w-@+.%:/]+)\2$/, M = ["__proto__", "profile __proto__"], R = (e2) => {
      const t2 = {};
      let r2, n2;
      for (const o2 of e2.split(/\r?\n/)) {
        const e3 = o2.split(/(^|\s)[;#]/)[0].trim();
        if ("[" === e3[0] && "]" === e3[e3.length - 1]) {
          r2 = void 0, n2 = void 0;
          const t3 = e3.substring(1, e3.length - 1), o3 = P.exec(t3);
          if (o3) {
            const [, e4, , t4] = o3;
            Object.values(l).includes(e4) && (r2 = [e4, t4].join(T));
          } else r2 = t3;
          if (M.includes(t3)) throw new Error(`Found invalid profile name "${t3}"`);
        } else if (r2) {
          const s2 = e3.indexOf("=");
          if (![0, -1].includes(s2)) {
            const [i2, a2] = [e3.substring(0, s2).trim(), e3.substring(s2 + 1).trim()];
            if ("" === a2) n2 = i2;
            else {
              n2 && o2.trimStart() === o2 && (n2 = void 0), t2[r2] = t2[r2] || {};
              const e4 = n2 ? [n2, i2].join(T) : i2;
              t2[r2][e4] = a2;
            }
          }
        }
      }
      return t2;
    }, O = {}, D = {}, N = (e2, t2) => void 0 !== D[e2] ? D[e2] : (O[e2] && !t2?.ignoreCache || (O[e2] = a(e2, "utf8")), O[e2]), F = () => ({}), L = async (e2 = {}) => {
      const { filepath: t2 = A(), configFilepath: r2 = I() } = e2, n2 = b();
      let o2 = t2;
      t2.startsWith("~/") && (o2 = s(n2, t2.slice(2)));
      let i2 = r2;
      r2.startsWith("~/") && (i2 = s(n2, r2.slice(2)));
      const a2 = await Promise.all([N(i2, { ignoreCache: e2.ignoreCache }).then(R).then(C).catch(F), N(o2, { ignoreCache: e2.ignoreCache }).then(R).catch(F)]);
      return { configFile: a2[0], credentialsFile: a2[1] };
    }, U = (e2) => Object.entries(e2).filter(([e3]) => e3.startsWith(l.SSO_SESSION + T)).reduce((e3, [t2, r2]) => ({ ...e3, [t2.substring(t2.indexOf(T) + 1)]: r2 }), {}), B = () => ({}), $ = { getFileRecord: () => D, interceptFile(e2, t2) {
      D[e2] = Promise.resolve(t2);
    }, getTokenRecord: () => E, interceptToken(e2, t2) {
      E[e2] = t2;
    } };
    function q(e2) {
      try {
        const t2 = new Set(Array.from(e2.match(/([A-Z_]){3,}/g) ?? []));
        return t2.delete("CONFIG"), t2.delete("CONFIG_PREFIX_SEPARATOR"), t2.delete("ENV"), [...t2].join(", ");
      } catch (t2) {
        return e2;
      }
    }
    const j = (e2) => "function" == typeof e2 ? async () => await e2() : f(e2), J = ({ environmentVariableSelector: e2, configFileSelector: t2, default: r2 }, n2 = {}) => {
      const { signingName: o2, logger: s2 } = n2;
      return g(m((i2 = e2, a2 = { signingName: o2, logger: s2 }, async () => {
        try {
          const e3 = i2(process.env, a2);
          if (void 0 === e3) throw new Error();
          return e3;
        } catch (e3) {
          throw new p(e3.message || `Not found in ENV: ${q(i2.toString())}`, { logger: a2?.logger });
        }
      }), ((e3, { preferredFile: t3 = "config", ...r3 } = {}) => async () => {
        const n3 = x(r3), { configFile: o3, credentialsFile: s3 } = await L(r3), i3 = s3[n3] || {}, a3 = o3[n3] || {}, l2 = "config" === t3 ? { ...i3, ...a3 } : { ...a3, ...i3 };
        try {
          const r4 = e3(l2, "config" === t3 ? o3 : s3);
          if (void 0 === r4) throw new Error();
          return r4;
        } catch (t4) {
          throw new p(t4.message || `Not found in config files w/ profile [${n3}]: ${q(e3.toString())}`, { logger: r3.logger });
        }
      })(t2, n2), j(r2)));
      var i2, a2;
    }, z = "AWS_USE_DUALSTACK_ENDPOINT", H = "use_dualstack_endpoint", W = { environmentVariableSelector: (e2) => y(e2, z, v.ENV), configFileSelector: (e2) => y(e2, H, v.CONFIG), default: false }, G = { environmentVariableSelector: (e2) => y(e2, z, v.ENV), configFileSelector: (e2) => y(e2, H, v.CONFIG), default: void 0 }, Y = "AWS_USE_FIPS_ENDPOINT", V = "use_fips_endpoint", K = { environmentVariableSelector: (e2) => y(e2, Y, v.ENV), configFileSelector: (e2) => y(e2, V, v.CONFIG), default: false }, Z = { environmentVariableSelector: (e2) => y(e2, Y, v.ENV), configFileSelector: (e2) => y(e2, V, v.CONFIG), default: void 0 }, X = "AWS_REGION", Q = "AWS_DEFAULT_REGION", ee = ["in-region", "cross-region", "mobile", "standard", "legacy"], te = "x-aws-ec2-metadata-token", re = "x-aws-ec2-metadata-token-ttl-seconds";
    let ne = 0;
    const oe = async () => {
      if (!(process.env.AWS_EC2_METADATA_DISABLED || Date.now() < ne)) try {
        const e2 = ie(), t2 = (await ae({ ...e2, path: "/latest/api/token", method: "PUT", headers: { [re]: "21600" } })).toString();
        return (await ae({ ...e2, path: "/latest/meta-data/placement/region", method: "GET", headers: { [te]: t2 } })).toString().trim() || se();
      } catch {
        return se();
      }
    }, se = () => {
      ne = Date.now() + 6e4;
    }, ie = () => {
      const e2 = process.env.AWS_EC2_METADATA_SERVICE_ENDPOINT;
      if (e2) {
        const t2 = new URL(e2);
        return { hostname: t2.hostname.replace(/^\[(.+)]$/, "$1"), port: t2.port ? Number(t2.port) : void 0 };
      }
      return "IPv6" === process.env.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE ? { hostname: "fd00:ec2::254" } : { hostname: "169.254.169.254" };
    }, ae = async (e2) => {
      const { request: t2 } = r(37067);
      return new Promise((r2, n2) => {
        const o2 = t2({ hostname: e2.hostname, port: e2.port, path: e2.path, method: e2.method, headers: e2.headers, timeout: 1e3, signal: AbortSignal.timeout(1e3) });
        o2.on("error", (e3) => {
          n2(e3), o2.destroy();
        }), o2.on("timeout", () => {
          n2(new Error("TimeoutError from instance metadata service")), o2.destroy();
        }), o2.on("response", (e3) => {
          const { statusCode: t3 = 400 } = e3;
          if (t3 < 200 || t3 >= 300) return n2(Object.assign(new Error("Error response received from instance metadata service"), { statusCode: t3 })), void o2.destroy();
          const s2 = [];
          e3.on("data", (e4) => s2.push(e4)), e3.on("end", () => {
            r2(Buffer.concat(s2)), o2.destroy();
          });
        }), o2.end();
      });
    }, le = "AWS_REGION", ce = "region", ue = { environmentVariableSelector: (e2) => e2[le], configFileSelector: (e2) => e2[ce], default: async () => {
      const e2 = await oe();
      if (e2) return e2;
      throw new Error("Region is missing");
    } }, de = /* @__PURE__ */ new Set(), pe = (e2) => "string" == typeof e2 && (e2.startsWith("fips-") || e2.endsWith("-fips")), he = (e2 = [], { useFipsEndpoint: t2, useDualstackEndpoint: r2 }) => e2.find(({ tags: e3 }) => t2 === e3.includes("fips") && r2 === e3.includes("dualstack"))?.hostname, me = { environmentVariableSelector: (e2) => e2.AWS_DEFAULTS_MODE, configFileSelector: (e2) => e2.defaults_mode, default: "legacy" }, fe = async (e2) => {
      if (e2) {
        const t2 = "function" == typeof e2 ? await e2() : e2, r2 = await ge();
        return r2 ? t2 === r2 ? "in-region" : "cross-region" : "standard";
      }
      return "standard";
    }, ge = async () => process.env.AWS_EXECUTION_ENV && (process.env[X] || process.env[Q]) ? process.env[X] ?? process.env[Q] : oe();
    t.CONFIG_PREFIX_SEPARATOR = T, t.CONFIG_USE_DUALSTACK_ENDPOINT = H, t.CONFIG_USE_FIPS_ENDPOINT = V, t.CredentialsProviderError = p, t.DEFAULT_PROFILE = S, t.DEFAULT_USE_DUALSTACK_ENDPOINT = false, t.DEFAULT_USE_FIPS_ENDPOINT = false, t.ENV_PROFILE = _, t.ENV_USE_DUALSTACK_ENDPOINT = z, t.ENV_USE_FIPS_ENDPOINT = Y, t.NODE_REGION_CONFIG_FILE_OPTIONS = { preferredFile: "credentials" }, t.NODE_REGION_CONFIG_OPTIONS = ue, t.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = W, t.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = K, t.ProviderError = d, t.REGION_ENV_NAME = le, t.REGION_INI_NAME = ce, t.SelectorType = v, t.TokenProviderError = h, t.booleanSelector = y, t.chain = m, t.externalDataInterceptor = $, t.fromStatic = j, t.fromValue = f, t.getHomeDir = b, t.getProfileName = x, t.getRegionInfo = (e2, { useFipsEndpoint: t2 = false, useDualstackEndpoint: r2 = false, signingService: n2, regionHash: o2, partitionHash: s2 }) => {
      const i2 = ((e3, { partitionHash: t3 }) => Object.keys(t3 || {}).find((r3) => t3[r3].regions.includes(e3)) ?? "aws")(e2, { partitionHash: s2 }), a2 = e2 in o2 ? e2 : s2[i2]?.endpoint ?? e2, l2 = { useFipsEndpoint: t2, useDualstackEndpoint: r2 }, c2 = ((e3, { regionHostname: t3, partitionHostname: r3 }) => t3 || (r3 ? r3.replace("{region}", e3) : void 0))(a2, { regionHostname: he(o2[a2]?.variants, l2), partitionHostname: he(s2[i2]?.variants, l2) });
      if (void 0 === c2) throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion: a2, useFipsEndpoint: t2, useDualstackEndpoint: r2 }}`);
      const u2 = ((e3, { signingRegion: t3, regionRegex: r3, useFipsEndpoint: n3 }) => {
        if (t3) return t3;
        if (n3) {
          const t4 = r3.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."), n4 = e3.match(t4);
          if (n4) return n4[0].slice(1, -1);
        }
      })(c2, { signingRegion: o2[a2]?.signingRegion, regionRegex: s2[i2].regionRegex, useFipsEndpoint: t2 });
      return { partition: i2, signingService: n2, hostname: c2, ...u2 && { signingRegion: u2 }, ...o2[a2]?.signingService && { signingService: o2[a2].signingService } };
    }, t.getSSOTokenFilepath = k, t.getSSOTokenFromFile = async (e2) => {
      if (E[e2]) return E[e2];
      const t2 = k(e2), r2 = await a(t2, "utf8");
      return JSON.parse(r2);
    }, t.loadConfig = J, t.loadSharedConfigFiles = L, t.loadSsoSessionData = async (e2 = {}) => N(e2.configFilepath ?? I()).then(R).then(U).catch(B), t.memoize = g, t.nodeDualstackConfigSelectors = G, t.nodeFipsConfigSelectors = Z, t.numberSelector = (e2, t2, r2) => {
      if (!(t2 in e2)) return;
      const n2 = parseInt(e2[t2], 10);
      if (Number.isNaN(n2)) throw new TypeError(`Cannot load ${r2} '${t2}'. Expected number, got '${e2[t2]}'.`);
      return n2;
    }, t.parseKnownFiles = async (e2) => {
      const t2 = await L(e2);
      return ((...e3) => {
        const t3 = {};
        for (const r2 of e3) for (const [e4, n2] of Object.entries(r2)) void 0 !== t3[e4] ? Object.assign(t3[e4], n2) : t3[e4] = n2;
        return t3;
      })(t2.configFile, t2.credentialsFile);
    }, t.readFile = N, t.resolveCustomEndpointsConfig = (e2) => {
      const { tls: t2, endpoint: r2, urlParser: n2, useDualstackEndpoint: o2 } = e2;
      return Object.assign(e2, { tls: t2 ?? true, endpoint: c("string" == typeof r2 ? n2(r2) : r2), isCustomEndpoint: true, useDualstackEndpoint: c(o2 ?? false) });
    }, t.resolveDefaultsModeConfig = ({ region: e2 = J(ue), defaultsMode: t2 = J(me) } = {}) => g(async () => {
      const r2 = "function" == typeof t2 ? await t2() : t2;
      switch (r2?.toLowerCase()) {
        case "auto":
          return fe(e2);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(r2?.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(`Invalid parameter for "defaultsMode", expect ${ee.join(", ")}, got ${r2}`);
      }
    }), t.resolveEndpointsConfig = (e2) => {
      const t2 = c(e2.useDualstackEndpoint ?? false), { endpoint: r2, useFipsEndpoint: n2, urlParser: o2, tls: s2 } = e2;
      return Object.assign(e2, { tls: s2 ?? true, endpoint: r2 ? c("string" == typeof r2 ? o2(r2) : r2) : () => (async (e3) => {
        const { tls: t3 = true } = e3, r3 = await e3.region();
        if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(r3)) throw new Error("Invalid region in client config");
        const n3 = await e3.useDualstackEndpoint(), o3 = await e3.useFipsEndpoint(), { hostname: s3 } = await e3.regionInfoProvider(r3, { useDualstackEndpoint: n3, useFipsEndpoint: o3 }) ?? {};
        if (!s3) throw new Error("Cannot resolve hostname from client config");
        return e3.urlParser(`${t3 ? "https:" : "http:"}//${s3}`);
      })({ ...e2, useDualstackEndpoint: t2, useFipsEndpoint: n2 }), isCustomEndpoint: !!r2, useDualstackEndpoint: t2 });
    }, t.resolveRegionConfig = (e2) => {
      const { region: t2, useFipsEndpoint: r2 } = e2;
      if (!t2) throw new Error("Region is missing");
      return Object.assign(e2, { region: async () => {
        const e3 = ((e4) => pe(e4) ? ["fips-aws-global", "aws-fips"].includes(e4) ? "us-east-1" : e4.replace(/fips-(dkr-|prod-)?|-fips/, "") : e4)("function" == typeof t2 ? await t2() : t2);
        return ((e4, t3 = u) => {
          if (de.has(e4) || t3(e4)) de.add(e4);
          else {
            if ("*" !== e4) throw new Error(`Region not accepted: region="${e4}" is not a valid hostname component.`);
            console.warn('@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.');
          }
        })(e3), e3;
      }, useFipsEndpoint: async () => {
        const e3 = "string" == typeof t2 ? t2 : await t2();
        return !!pe(e3) || ("function" != typeof r2 ? Promise.resolve(!!r2) : r2());
      } });
    };
  }