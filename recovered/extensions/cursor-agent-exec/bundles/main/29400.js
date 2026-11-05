// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 29400 range:2844607..2864461
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29400: (e, t, r) => {
    const { CONFIG_PREFIX_SEPARATOR: n, booleanSelector: s, SelectorType: o, loadConfig: i } = r(86344), { toEndpointV1: a, getSmithyContext: c, normalizeProvider: l, isValidHostLabel: u, hasOwn: d } = r(11255);
    t.isValidHostLabel = u, t.middlewareEndpointToEndpointV1 = a, t.toEndpointV1 = a;
    const { EndpointURLScheme: p } = r(52391), m = "AWS_ENDPOINT_URL", h = "endpoint_url", f = { environmentVariableSelector: (e2) => s(e2, "AWS_IGNORE_CONFIGURED_ENDPOINT_URLS", o.ENV), configFileSelector: (e2) => s(e2, "ignore_configured_endpoint_urls", o.CONFIG), default: false }, g = async (e2) => {
      if (!await i(f)()) return i(/* @__PURE__ */ ((e3) => ({ environmentVariableSelector: (t2) => {
        const r2 = e3.split(" ").map((e4) => e4.toUpperCase()), n2 = t2[[m, ...r2].join("_")];
        if (n2) return n2;
        return t2[m] || void 0;
      }, configFileSelector: (t2, r2) => {
        if (t2.services) {
          const s3 = ["services", t2.services].join(n);
          if (!r2 || !r2[s3]) throw new Error(`The services section "${t2.services}" specified in the profile is not present in the shared configuration file.`);
          const o2 = r2[s3][[e3.split(" ").map((e4) => e4.toLowerCase()).join("_"), h].join(n)];
          if (o2) return o2;
        }
        const s2 = t2[h];
        if (s2) return s2;
      }, default: void 0 }))(e2 ?? ""))();
    }, y = /^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$/, w = /(\d+\.){3}\d+/, v = /\.\./, _ = (e2) => y.test(e2) && !w.test(e2) && !v.test(e2), b = (e2) => {
      const [t2, r2, n2, , , s2] = e2.split(":"), o2 = "arn" === t2 && e2.split(":").length >= 6, i2 = Boolean(o2 && r2 && n2 && s2);
      if (o2 && !i2) throw new Error(`Invalid ARN: ${e2} was an invalid ARN.`);
      return i2;
    }, S = (e2, t2, r2, n2 = false) => {
      const s2 = async () => {
        let s3;
        if (n2) {
          const n3 = r2.clientContextParams, o2 = n3?.[e2];
          s3 = o2 ?? r2[e2] ?? r2[t2];
        } else s3 = r2[e2] ?? r2[t2];
        return "function" == typeof s3 ? s3() : s3;
      };
      return "credentialScope" === e2 || "CredentialScope" === t2 ? async () => {
        const e3 = "function" == typeof r2.credentials ? await r2.credentials() : r2.credentials;
        return e3?.credentialScope ?? e3?.CredentialScope;
      } : "accountId" === e2 || "AccountId" === t2 ? async () => {
        const e3 = "function" == typeof r2.credentials ? await r2.credentials() : r2.credentials;
        return e3?.accountId ?? e3?.AccountId;
      } : "endpoint" === e2 || "endpoint" === t2 ? async () => {
        if (false === r2.isCustomEndpoint) return;
        const e3 = await s2();
        if (e3 && "object" == typeof e3) {
          if ("url" in e3) return e3.url.href;
          if ("hostname" in e3) {
            const { protocol: t3, hostname: r3, port: n3, path: s3 } = e3;
            return `${t3}//${r3}${n3 ? ":" + n3 : ""}${s3}`;
          }
        }
        return e3;
      } : s2;
    };
    function k(e2) {
      return async (t2, r2, n2, s2) => {
        if (!n2.isCustomEndpoint && !n2.ignoreConfiguredEndpointUrls) {
          let t3;
          t3 = n2.serviceConfiguredEndpoint ? await n2.serviceConfiguredEndpoint() : await e2(n2.serviceId), t3 && (n2.endpoint = () => Promise.resolve(a(t3)), n2.isCustomEndpoint = true, s2?.logger?.debug?.(`@smithy/core/endpoints - resolved endpoint from config: ${t3}`));
        }
        const o2 = await x(t2, r2, n2);
        if ("function" != typeof n2.endpointProvider) throw new Error("config.endpointProvider is not set.");
        const i2 = n2.endpointProvider(o2, s2);
        if (n2.isCustomEndpoint && n2.endpoint) {
          const e3 = await n2.endpoint();
          if (e3?.headers) {
            i2.headers ??= {};
            for (const [t3, r3] of Object.entries(e3.headers)) i2.headers[t3] = Array.isArray(r3) ? r3 : [r3];
          }
        }
        return i2;
      };
    }
    const x = async (e2, t2, r2) => {
      const n2 = {}, s2 = t2?.getEndpointParameterInstructions?.() || {};
      for (const [t3, o2] of Object.entries(s2)) switch (o2.type) {
        case "staticContextParams":
          n2[t3] = o2.value;
          break;
        case "contextParams":
          n2[t3] = e2[o2.name];
          break;
        case "clientContextParams":
        case "builtInParams":
          n2[t3] = await S(o2.name, t3, r2, "builtInParams" !== o2.type)();
          break;
        case "operationContextParams":
          n2[t3] = o2.get(e2);
          break;
        default:
          throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(o2));
      }
      return 0 === Object.keys(s2).length && Object.assign(n2, r2), "s3" === String(r2.serviceId).toLowerCase() && await (async (e3) => {
        const t3 = e3?.Bucket || "";
        if ("string" == typeof e3.Bucket && (e3.Bucket = t3.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), b(t3)) {
          if (true === e3.ForcePathStyle) throw new Error("Path-style addressing cannot be used with ARN buckets");
        } else (!_(t3) || -1 !== t3.indexOf(".") && !String(e3.Endpoint).startsWith("http:") || t3.toLowerCase() !== t3 || t3.length < 3) && (e3.ForcePathStyle = true);
        return e3.DisableMultiRegionAccessPoints && (e3.disableMultiRegionAccessPoints = true, e3.DisableMRAP = true), e3;
      })(n2), n2;
    };
    function E(e2) {
      const t2 = k(e2);
      return ({ config: e3, instructions: r2 }) => (n2, s2) => async (o2) => {
        e3.isCustomEndpoint && (function(e4, t3, r3) {
          e4.__smithy_context ? e4.__smithy_context.features || (e4.__smithy_context.features = {}) : e4.__smithy_context = { features: {} }, e4.__smithy_context.features[t3] = r3;
        })(s2, "ENDPOINT_OVERRIDE", "N");
        const i2 = await t2(o2.input, { getEndpointParameterInstructions: () => r2 }, { ...e3 }, s2);
        s2.endpointV2 = i2, s2.authSchemes = i2.properties?.authSchemes;
        const a2 = s2.authSchemes?.[0];
        if (a2) {
          s2.signing_region = a2.signingRegion, s2.signing_service = a2.signingName;
          const e4 = c(s2), t3 = e4?.selectedHttpAuthScheme?.httpAuthOption;
          t3 && (t3.signingProperties = Object.assign(t3.signingProperties || {}, { signing_region: a2.signingRegion, signingRegion: a2.signingRegion, signing_service: a2.signingName, signingName: a2.signingName, signingRegionSet: a2.signingRegionSet }, a2.properties));
        }
        return n2({ ...o2 });
      };
    }
    const I = { step: "serialize", tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"], name: "endpointV2Middleware", override: true, relation: "before", toMiddleware: "serializerMiddleware" };
    class T {
      nodes;
      root;
      conditions;
      results;
      constructor(e2, t2, r2, n2) {
        this.nodes = e2, this.root = t2, this.conditions = r2, this.results = n2;
      }
      static from(e2, t2, r2, n2) {
        return new T(e2, t2, r2, n2);
      }
    }
    class C extends Error {
      constructor(e2) {
        super(e2), this.name = "EndpointError";
      }
    }
    const P = "endpoints";
    function A(e2) {
      return "object" != typeof e2 || null == e2 ? e2 : "ref" in e2 ? `$${A(e2.ref)}` : "fn" in e2 ? `${e2.fn}(${(e2.argv || []).map(A).join(", ")})` : JSON.stringify(e2, null, 2);
    }
    const R = {};
    const M = (e2, t2) => ((e3) => {
      const t3 = e3.split("."), r2 = [];
      for (const n2 of t3) {
        const t4 = n2.indexOf("[");
        if (-1 !== t4) {
          if (n2.indexOf("]") !== n2.length - 1) throw new C(`Path: '${e3}' does not end with ']'`);
          const s2 = n2.slice(t4 + 1, -1);
          if (Number.isNaN(parseInt(s2))) throw new C(`Invalid array index: '${s2}' in path: '${e3}'`);
          0 !== t4 && r2.push(n2.slice(0, t4)), r2.push(s2);
        } else r2.push(n2);
      }
      return r2;
    })(t2).reduce((r2, n2) => {
      if ("object" != typeof r2) throw new C(`Index '${n2}' in '${t2}' not found in '${JSON.stringify(e2)}'`);
      if (Array.isArray(r2)) {
        const e3 = parseInt(n2);
        return r2[e3 < 0 ? r2.length + e3 : e3];
      }
      return r2[n2];
    }, e2);
    const J = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), O = (e2) => J.test(e2) || e2.startsWith("[") && e2.endsWith("]"), B = { [p.HTTP]: 80, [p.HTTPS]: 443 };
    const D = { booleanEquals: (e2, t2) => e2 === t2, coalesce: function(...e2) {
      for (const t2 of e2) if (null != t2) return t2;
    }, getAttr: M, isSet: (e2) => null != e2, isValidHostLabel: u, ite: function(e2, t2, r2) {
      return e2 ? t2 : r2;
    }, not: (e2) => !e2, parseURL: (e2) => {
      const t2 = (() => {
        try {
          if (e2 instanceof URL) return e2;
          if ("object" == typeof e2 && "hostname" in e2) {
            const { hostname: t3, port: r3, protocol: n3 = "", path: s3 = "", query: o3 = {} } = e2, i3 = new URL(`${n3}//${t3}${r3 ? `:${r3}` : ""}${s3}`);
            return i3.search = Object.entries(o3).map(([e3, t4]) => `${e3}=${t4}`).join("&"), i3;
          }
          return new URL(e2);
        } catch (e3) {
          return null;
        }
      })();
      if (!t2) return console.error(`Unable to parse ${JSON.stringify(e2)} as a whatwg URL.`), null;
      const r2 = t2.href, { host: n2, hostname: s2, pathname: o2, protocol: i2, search: a2 } = t2;
      if (a2) return null;
      const c2 = i2.slice(0, -1);
      if (!Object.values(p).includes(c2)) return null;
      const l2 = O(s2);
      return { scheme: c2, authority: `${n2}${r2.includes(`${n2}:${B[c2]}`) || "string" == typeof e2 && e2.includes(`${n2}:${B[c2]}`) ? `:${B[c2]}` : ""}`, path: o2, normalizedPath: o2.endsWith("/") ? o2 : `${o2}/`, isIp: l2 };
    }, split: function(e2, t2, r2) {
      if (1 === r2) return [e2];
      if ("" === e2) return [""];
      const n2 = e2.split(t2);
      return 0 === r2 ? n2 : n2.slice(0, r2 - 1).concat(n2.slice(1).join(t2));
    }, stringEquals: (e2, t2) => e2 === t2, substring: (e2, t2, r2, n2) => null == e2 || t2 >= r2 || e2.length < r2 || /[^\u0000-\u007f]/.test(e2) ? null : n2 ? e2.substring(e2.length - r2, e2.length - t2) : e2.substring(t2, r2), uriEncode: (e2) => encodeURIComponent(e2).replace(/[!*'()]/g, (e3) => `%${e3.charCodeAt(0).toString(16).toUpperCase()}`) }, q = (e2, t2) => {
      const r2 = [], { referenceRecord: n2, endpointParams: s2 } = t2;
      let o2 = 0;
      for (; o2 < e2.length; ) {
        const t3 = e2.indexOf("{", o2);
        if (-1 === t3) {
          r2.push(e2.slice(o2));
          break;
        }
        r2.push(e2.slice(o2, t3));
        const i2 = e2.indexOf("}", t3);
        if (-1 === i2) {
          r2.push(e2.slice(t3));
          break;
        }
        "{" === e2[t3 + 1] && "}" === e2[i2 + 1] && (r2.push(e2.slice(t3 + 1, i2)), o2 = i2 + 2);
        const a2 = e2.substring(t3 + 1, i2);
        if (a2.includes("#")) {
          const [e3, t4] = a2.split("#");
          r2.push(M(n2[e3] ?? s2[e3], t4));
        } else r2.push(n2[a2] ?? s2[a2]);
        o2 = i2 + 1;
      }
      return r2.join("");
    }, N = (e2, t2, r2) => {
      if ("string" == typeof e2) return q(e2, r2);
      if (e2.fn) return U.callFunction(e2, r2);
      if (e2.ref) return (({ ref: e3 }, t3) => t3.referenceRecord[e3] ?? t3.endpointParams[e3])(e2, r2);
      throw new C(`'${t2}': ${String(e2)} is not a string, function or reference.`);
    }, F = ({ fn: e2, argv: t2 }, r2) => {
      const n2 = Array(t2.length);
      for (let e3 = 0; e3 < n2.length; ++e3) {
        const s3 = t2[e3];
        n2[e3] = "boolean" == typeof s3 || "number" == typeof s3 ? s3 : U.evaluateExpression(s3, "arg", r2);
      }
      const s2 = e2.indexOf(".");
      if (-1 !== s2) {
        const t3 = R[e2.slice(0, s2)], r3 = t3?.[e2.slice(s2 + 1)];
        if ("function" == typeof r3) return r3(...n2);
      }
      const o2 = D[e2];
      if ("function" == typeof o2) return o2(...n2);
      throw new Error(`function ${e2} not loaded in endpointFunctions.`);
    }, U = { evaluateExpression: N, callFunction: F }, L = (e2, t2) => {
      const { assign: r2 } = e2;
      if (r2 && r2 in t2.referenceRecord) throw new C(`'${r2}' is already defined in Reference Record.`);
      const n2 = F(e2, t2);
      t2.logger?.debug?.(`${P} evaluateCondition: ${A(e2)} = ${A(n2)}`);
      const s2 = "" === n2 || !!n2;
      return null != r2 ? { result: s2, toAssign: { name: r2, value: n2 } } : { result: s2 };
    }, $ = (e2, t2) => Object.entries(e2 ?? {}).reduce((e3, [r2, n2]) => (e3[r2] = n2.map((e4) => {
      const n3 = N(e4, "Header value entry", t2);
      if ("string" != typeof n3) throw new C(`Header '${r2}' value '${n3}' is not a string`);
      return n3;
    }), e3), {}), j = (e2, t2) => Object.entries(e2).reduce((e3, [r2, n2]) => (e3[r2] = z.getEndpointProperty(n2, t2), e3), {}), G = (e2, t2) => {
      if (Array.isArray(e2)) return e2.map((e3) => G(e3, t2));
      switch (typeof e2) {
        case "string":
          return q(e2, t2);
        case "object":
          if (null === e2) throw new C(`Unexpected endpoint property: ${e2}`);
          return z.getEndpointProperties(e2, t2);
        case "boolean":
          return e2;
        default:
          throw new C("Unexpected endpoint property type: " + typeof e2);
      }
    }, z = { getEndpointProperty: G, getEndpointProperties: j }, W = (e2, t2) => {
      const r2 = N(e2, "Endpoint URL", t2);
      if ("string" == typeof r2) try {
        return new URL(r2);
      } catch (e3) {
        throw console.error(`Failed to construct URL with ${r2}`, e3), e3;
      }
      throw new C("Endpoint URL must be a string, got " + typeof r2);
    }, H = 1e8, K = (e2 = [], t2) => {
      const r2 = {}, n2 = { ...t2, referenceRecord: { ...t2.referenceRecord } };
      let s2 = false;
      for (const o2 of e2) {
        const { result: e3, toAssign: i2 } = L(o2, n2);
        if (!e3) return { result: e3 };
        i2 && (s2 = true, r2[i2.name] = i2.value, n2.referenceRecord[i2.name] = i2.value, t2.logger?.debug?.(`${P} assign: ${i2.name} := ${A(i2.value)}`));
      }
      return s2 ? { result: true, referenceRecord: r2 } : { result: true };
    }, V = (e2, t2) => {
      const { conditions: r2, endpoint: n2 } = e2, { result: s2, referenceRecord: o2 } = K(r2, t2);
      if (!s2) return;
      const i2 = o2 ? { ...t2, referenceRecord: { ...t2.referenceRecord, ...o2 } } : t2, { url: a2, properties: c2, headers: l2 } = n2;
      t2.logger?.debug?.(`${P} Resolving endpoint from template: ${A(n2)}`);
      const u2 = { url: W(a2, i2) };
      return null != l2 && (u2.headers = $(l2, i2)), null != c2 && (u2.properties = j(c2, i2)), u2;
    }, Y = (e2, t2) => {
      const { conditions: r2, error: n2 } = e2, { result: s2, referenceRecord: o2 } = K(r2, t2);
      if (!s2) return;
      const i2 = o2 ? { ...t2, referenceRecord: { ...t2.referenceRecord, ...o2 } } : t2;
      throw new C(N(n2, "Error", i2));
    }, Q = (e2, t2) => {
      for (const r2 of e2) if ("endpoint" === r2.type) {
        const e3 = V(r2, t2);
        if (e3) return e3;
      } else if ("error" === r2.type) Y(r2, t2);
      else {
        if ("tree" !== r2.type) throw new C(`Unknown endpoint rule: ${r2}`);
        {
          const e3 = X.evaluateTreeRule(r2, t2);
          if (e3) return e3;
        }
      }
      throw new C("Rules evaluation failed");
    }, X = { evaluateRules: Q, evaluateTreeRule: (e2, t2) => {
      const { conditions: r2, rules: n2 } = e2, { result: s2, referenceRecord: o2 } = K(r2, t2);
      if (!s2) return;
      const i2 = o2 ? { ...t2, referenceRecord: { ...t2.referenceRecord, ...o2 } } : t2;
      return X.evaluateRules(n2, i2);
    } }, Z = k(g), ee = /* @__PURE__ */ (function(e2) {
      return (t2) => {
        const r2 = t2.tls ?? true, { endpoint: n2, useDualstackEndpoint: s2, useFipsEndpoint: o2 } = t2, i2 = null != n2 ? async () => a(await l(n2)()) : void 0, c2 = !!n2, u2 = Object.assign(t2, { endpoint: i2, tls: r2, isCustomEndpoint: c2, useDualstackEndpoint: l(s2 ?? false), useFipsEndpoint: l(o2 ?? false), ignoreConfiguredEndpointUrls: !!t2.ignoreConfiguredEndpointUrls });
        let d2;
        return u2.serviceConfiguredEndpoint = async () => (t2.serviceId && !d2 && (d2 = e2(t2.serviceId)), d2), u2;
      };
    })(g), te = E(g), re = (function(e2) {
      const t2 = E(e2);
      return (e3, r2) => ({ applyToStack: (n2) => {
        n2.addRelativeTo(t2({ config: e3, instructions: r2 }), I);
      } });
    })(g);
    t.BinaryDecisionDiagram = T, t.EndpointCache = class {
      capacity;
      data = /* @__PURE__ */ new Map();
      parameters = [];
      constructor({ size: e2, params: t2 }) {
        this.capacity = e2 ?? 50, t2 && (this.parameters = t2);
      }
      get(e2, t2) {
        const r2 = this.hash(e2);
        if (false === r2) return t2();
        if (!this.data.has(r2)) {
          if (this.data.size > this.capacity + 10) {
            const e3 = this.data.keys();
            let t3 = 0;
            for (; ; ) {
              const { value: r3, done: n2 } = e3.next();
              if (this.data.delete(r3), n2 || ++t3 > 10) break;
            }
          }
          this.data.set(r2, t2());
        }
        return this.data.get(r2);
      }
      size() {
        return this.data.size;
      }
      hash(e2) {
        let t2 = "";
        const { parameters: r2 } = this;
        if (0 === r2.length) return false;
        for (const n2 of r2) {
          const r3 = String(e2[n2] ?? "");
          if (r3.includes("|;")) return false;
          t2 += r3 + "|;";
        }
        return t2;
      }
    }, t.EndpointError = C, t.customEndpointFunctions = R, t.decideEndpoint = (e2, t2) => {
      const { nodes: r2, root: n2, results: s2, conditions: o2 } = e2;
      let i2 = n2;
      const a2 = {}, c2 = { referenceRecord: a2, endpointParams: t2.endpointParams, logger: t2.logger };
      for (; 1 !== i2 && -1 !== i2 && i2 < H; ) {
        const e3 = 3 * (Math.abs(i2) - 1), [t3, n3, s3] = [r2[e3], r2[e3 + 1], r2[e3 + 2]], [l2, u2, d2] = o2[t3], p2 = L({ fn: l2, assign: d2, argv: u2 }, c2);
        if (p2.toAssign) {
          const { name: e4, value: t4 } = p2.toAssign;
          a2[e4] = t4;
        }
        i2 = i2 >= 0 === p2.result ? n3 : s3;
      }
      if (i2 >= H) {
        const e3 = s2[i2 - H];
        if (-1 === e3[0]) {
          const [, t4] = e3;
          throw new C(N(t4, "Error", c2));
        }
        const [t3, r3, n3] = e3;
        return { url: W(t3, c2), properties: j(r3, c2), headers: $(n3 ?? {}, c2) };
      }
      throw new C("No matching endpoint.");
    }, t.endpointMiddleware = te, t.endpointMiddlewareOptions = I, t.getEndpointFromInstructions = Z, t.getEndpointPlugin = re, t.isIpAddress = O, t.resolveEndpoint = (e2, t2) => {
      const { endpointParams: r2, logger: n2 } = t2, { parameters: s2, rules: o2 } = e2;
      t2.logger?.debug?.(`${P} Initial EndpointParams: ${A(r2)}`);
      for (const e3 in s2) {
        if (!d(s2, e3)) continue;
        const t3 = s2[e3], n3 = r2[e3];
        if (null != n3 || null == t3.default) {
          if (t3.required && null == n3) throw new C(`Missing required parameter: '${e3}'`);
        } else r2[e3] = t3.default;
      }
      const i2 = Q(o2, { endpointParams: r2, logger: n2, referenceRecord: {} });
      return t2.logger?.debug?.(`${P} Resolved endpoint: ${A(i2)}`), i2;
    }, t.resolveEndpointConfig = ee, t.resolveEndpointRequiredConfig = (e2) => {
      const { endpoint: t2 } = e2;
      return void 0 === t2 && (e2.endpoint = async () => {
        throw new Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
      }), e2;
    }, t.resolveParams = x;
  }