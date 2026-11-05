// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 29400 range:926073..945927
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29400: (e, t, r) => {
    const { CONFIG_PREFIX_SEPARATOR: n, booleanSelector: o, SelectorType: s, loadConfig: i } = r(86344), { toEndpointV1: a, getSmithyContext: l, normalizeProvider: c, isValidHostLabel: u, hasOwn: d } = r(11255);
    t.isValidHostLabel = u, t.middlewareEndpointToEndpointV1 = a, t.toEndpointV1 = a;
    const { EndpointURLScheme: p } = r(52391), h = "AWS_ENDPOINT_URL", m = "endpoint_url", f = { environmentVariableSelector: (e2) => o(e2, "AWS_IGNORE_CONFIGURED_ENDPOINT_URLS", s.ENV), configFileSelector: (e2) => o(e2, "ignore_configured_endpoint_urls", s.CONFIG), default: false }, g = async (e2) => {
      if (!await i(f)()) return i(/* @__PURE__ */ ((e3) => ({ environmentVariableSelector: (t2) => {
        const r2 = e3.split(" ").map((e4) => e4.toUpperCase()), n2 = t2[[h, ...r2].join("_")];
        if (n2) return n2;
        return t2[h] || void 0;
      }, configFileSelector: (t2, r2) => {
        if (t2.services) {
          const o3 = ["services", t2.services].join(n);
          if (!r2 || !r2[o3]) throw new Error(`The services section "${t2.services}" specified in the profile is not present in the shared configuration file.`);
          const s2 = r2[o3][[e3.split(" ").map((e4) => e4.toLowerCase()).join("_"), m].join(n)];
          if (s2) return s2;
        }
        const o2 = t2[m];
        if (o2) return o2;
      }, default: void 0 }))(e2 ?? ""))();
    }, y = /^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$/, v = /(\d+\.){3}\d+/, w = /\.\./, b = (e2) => y.test(e2) && !v.test(e2) && !w.test(e2), _ = (e2) => {
      const [t2, r2, n2, , , o2] = e2.split(":"), s2 = "arn" === t2 && e2.split(":").length >= 6, i2 = Boolean(s2 && r2 && n2 && o2);
      if (s2 && !i2) throw new Error(`Invalid ARN: ${e2} was an invalid ARN.`);
      return i2;
    }, S = (e2, t2, r2, n2 = false) => {
      const o2 = async () => {
        let o3;
        if (n2) {
          const n3 = r2.clientContextParams, s2 = n3?.[e2];
          o3 = s2 ?? r2[e2] ?? r2[t2];
        } else o3 = r2[e2] ?? r2[t2];
        return "function" == typeof o3 ? o3() : o3;
      };
      return "credentialScope" === e2 || "CredentialScope" === t2 ? async () => {
        const e3 = "function" == typeof r2.credentials ? await r2.credentials() : r2.credentials;
        return e3?.credentialScope ?? e3?.CredentialScope;
      } : "accountId" === e2 || "AccountId" === t2 ? async () => {
        const e3 = "function" == typeof r2.credentials ? await r2.credentials() : r2.credentials;
        return e3?.accountId ?? e3?.AccountId;
      } : "endpoint" === e2 || "endpoint" === t2 ? async () => {
        if (false === r2.isCustomEndpoint) return;
        const e3 = await o2();
        if (e3 && "object" == typeof e3) {
          if ("url" in e3) return e3.url.href;
          if ("hostname" in e3) {
            const { protocol: t3, hostname: r3, port: n3, path: o3 } = e3;
            return `${t3}//${r3}${n3 ? ":" + n3 : ""}${o3}`;
          }
        }
        return e3;
      } : o2;
    };
    function x(e2) {
      return async (t2, r2, n2, o2) => {
        if (!n2.isCustomEndpoint && !n2.ignoreConfiguredEndpointUrls) {
          let t3;
          t3 = n2.serviceConfiguredEndpoint ? await n2.serviceConfiguredEndpoint() : await e2(n2.serviceId), t3 && (n2.endpoint = () => Promise.resolve(a(t3)), n2.isCustomEndpoint = true, o2?.logger?.debug?.(`@smithy/core/endpoints - resolved endpoint from config: ${t3}`));
        }
        const s2 = await k(t2, r2, n2);
        if ("function" != typeof n2.endpointProvider) throw new Error("config.endpointProvider is not set.");
        const i2 = n2.endpointProvider(s2, o2);
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
    const k = async (e2, t2, r2) => {
      const n2 = {}, o2 = t2?.getEndpointParameterInstructions?.() || {};
      for (const [t3, s2] of Object.entries(o2)) switch (s2.type) {
        case "staticContextParams":
          n2[t3] = s2.value;
          break;
        case "contextParams":
          n2[t3] = e2[s2.name];
          break;
        case "clientContextParams":
        case "builtInParams":
          n2[t3] = await S(s2.name, t3, r2, "builtInParams" !== s2.type)();
          break;
        case "operationContextParams":
          n2[t3] = s2.get(e2);
          break;
        default:
          throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(s2));
      }
      return 0 === Object.keys(o2).length && Object.assign(n2, r2), "s3" === String(r2.serviceId).toLowerCase() && await (async (e3) => {
        const t3 = e3?.Bucket || "";
        if ("string" == typeof e3.Bucket && (e3.Bucket = t3.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), _(t3)) {
          if (true === e3.ForcePathStyle) throw new Error("Path-style addressing cannot be used with ARN buckets");
        } else (!b(t3) || -1 !== t3.indexOf(".") && !String(e3.Endpoint).startsWith("http:") || t3.toLowerCase() !== t3 || t3.length < 3) && (e3.ForcePathStyle = true);
        return e3.DisableMultiRegionAccessPoints && (e3.disableMultiRegionAccessPoints = true, e3.DisableMRAP = true), e3;
      })(n2), n2;
    };
    function E(e2) {
      const t2 = x(e2);
      return ({ config: e3, instructions: r2 }) => (n2, o2) => async (s2) => {
        e3.isCustomEndpoint && (function(e4, t3, r3) {
          e4.__smithy_context ? e4.__smithy_context.features || (e4.__smithy_context.features = {}) : e4.__smithy_context = { features: {} }, e4.__smithy_context.features[t3] = r3;
        })(o2, "ENDPOINT_OVERRIDE", "N");
        const i2 = await t2(s2.input, { getEndpointParameterInstructions: () => r2 }, { ...e3 }, o2);
        o2.endpointV2 = i2, o2.authSchemes = i2.properties?.authSchemes;
        const a2 = o2.authSchemes?.[0];
        if (a2) {
          o2.signing_region = a2.signingRegion, o2.signing_service = a2.signingName;
          const e4 = l(o2), t3 = e4?.selectedHttpAuthScheme?.httpAuthOption;
          t3 && (t3.signingProperties = Object.assign(t3.signingProperties || {}, { signing_region: a2.signingRegion, signingRegion: a2.signingRegion, signing_service: a2.signingName, signingName: a2.signingName, signingRegionSet: a2.signingRegionSet }, a2.properties));
        }
        return n2({ ...s2 });
      };
    }
    const T = { step: "serialize", tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"], name: "endpointV2Middleware", override: true, relation: "before", toMiddleware: "serializerMiddleware" };
    class C {
      nodes;
      root;
      conditions;
      results;
      constructor(e2, t2, r2, n2) {
        this.nodes = e2, this.root = t2, this.conditions = r2, this.results = n2;
      }
      static from(e2, t2, r2, n2) {
        return new C(e2, t2, r2, n2);
      }
    }
    class I extends Error {
      constructor(e2) {
        super(e2), this.name = "EndpointError";
      }
    }
    const A = "endpoints";
    function P(e2) {
      return "object" != typeof e2 || null == e2 ? e2 : "ref" in e2 ? `$${P(e2.ref)}` : "fn" in e2 ? `${e2.fn}(${(e2.argv || []).map(P).join(", ")})` : JSON.stringify(e2, null, 2);
    }
    const M = {};
    const R = (e2, t2) => ((e3) => {
      const t3 = e3.split("."), r2 = [];
      for (const n2 of t3) {
        const t4 = n2.indexOf("[");
        if (-1 !== t4) {
          if (n2.indexOf("]") !== n2.length - 1) throw new I(`Path: '${e3}' does not end with ']'`);
          const o2 = n2.slice(t4 + 1, -1);
          if (Number.isNaN(parseInt(o2))) throw new I(`Invalid array index: '${o2}' in path: '${e3}'`);
          0 !== t4 && r2.push(n2.slice(0, t4)), r2.push(o2);
        } else r2.push(n2);
      }
      return r2;
    })(t2).reduce((r2, n2) => {
      if ("object" != typeof r2) throw new I(`Index '${n2}' in '${t2}' not found in '${JSON.stringify(e2)}'`);
      if (Array.isArray(r2)) {
        const e3 = parseInt(n2);
        return r2[e3 < 0 ? r2.length + e3 : e3];
      }
      return r2[n2];
    }, e2);
    const O = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), D = (e2) => O.test(e2) || e2.startsWith("[") && e2.endsWith("]"), N = { [p.HTTP]: 80, [p.HTTPS]: 443 };
    const F = { booleanEquals: (e2, t2) => e2 === t2, coalesce: function(...e2) {
      for (const t2 of e2) if (null != t2) return t2;
    }, getAttr: R, isSet: (e2) => null != e2, isValidHostLabel: u, ite: function(e2, t2, r2) {
      return e2 ? t2 : r2;
    }, not: (e2) => !e2, parseURL: (e2) => {
      const t2 = (() => {
        try {
          if (e2 instanceof URL) return e2;
          if ("object" == typeof e2 && "hostname" in e2) {
            const { hostname: t3, port: r3, protocol: n3 = "", path: o3 = "", query: s3 = {} } = e2, i3 = new URL(`${n3}//${t3}${r3 ? `:${r3}` : ""}${o3}`);
            return i3.search = Object.entries(s3).map(([e3, t4]) => `${e3}=${t4}`).join("&"), i3;
          }
          return new URL(e2);
        } catch (e3) {
          return null;
        }
      })();
      if (!t2) return console.error(`Unable to parse ${JSON.stringify(e2)} as a whatwg URL.`), null;
      const r2 = t2.href, { host: n2, hostname: o2, pathname: s2, protocol: i2, search: a2 } = t2;
      if (a2) return null;
      const l2 = i2.slice(0, -1);
      if (!Object.values(p).includes(l2)) return null;
      const c2 = D(o2);
      return { scheme: l2, authority: `${n2}${r2.includes(`${n2}:${N[l2]}`) || "string" == typeof e2 && e2.includes(`${n2}:${N[l2]}`) ? `:${N[l2]}` : ""}`, path: s2, normalizedPath: s2.endsWith("/") ? s2 : `${s2}/`, isIp: c2 };
    }, split: function(e2, t2, r2) {
      if (1 === r2) return [e2];
      if ("" === e2) return [""];
      const n2 = e2.split(t2);
      return 0 === r2 ? n2 : n2.slice(0, r2 - 1).concat(n2.slice(1).join(t2));
    }, stringEquals: (e2, t2) => e2 === t2, substring: (e2, t2, r2, n2) => null == e2 || t2 >= r2 || e2.length < r2 || /[^\u0000-\u007f]/.test(e2) ? null : n2 ? e2.substring(e2.length - r2, e2.length - t2) : e2.substring(t2, r2), uriEncode: (e2) => encodeURIComponent(e2).replace(/[!*'()]/g, (e3) => `%${e3.charCodeAt(0).toString(16).toUpperCase()}`) }, L = (e2, t2) => {
      const r2 = [], { referenceRecord: n2, endpointParams: o2 } = t2;
      let s2 = 0;
      for (; s2 < e2.length; ) {
        const t3 = e2.indexOf("{", s2);
        if (-1 === t3) {
          r2.push(e2.slice(s2));
          break;
        }
        r2.push(e2.slice(s2, t3));
        const i2 = e2.indexOf("}", t3);
        if (-1 === i2) {
          r2.push(e2.slice(t3));
          break;
        }
        "{" === e2[t3 + 1] && "}" === e2[i2 + 1] && (r2.push(e2.slice(t3 + 1, i2)), s2 = i2 + 2);
        const a2 = e2.substring(t3 + 1, i2);
        if (a2.includes("#")) {
          const [e3, t4] = a2.split("#");
          r2.push(R(n2[e3] ?? o2[e3], t4));
        } else r2.push(n2[a2] ?? o2[a2]);
        s2 = i2 + 1;
      }
      return r2.join("");
    }, U = (e2, t2, r2) => {
      if ("string" == typeof e2) return L(e2, r2);
      if (e2.fn) return $.callFunction(e2, r2);
      if (e2.ref) return (({ ref: e3 }, t3) => t3.referenceRecord[e3] ?? t3.endpointParams[e3])(e2, r2);
      throw new I(`'${t2}': ${String(e2)} is not a string, function or reference.`);
    }, B = ({ fn: e2, argv: t2 }, r2) => {
      const n2 = Array(t2.length);
      for (let e3 = 0; e3 < n2.length; ++e3) {
        const o3 = t2[e3];
        n2[e3] = "boolean" == typeof o3 || "number" == typeof o3 ? o3 : $.evaluateExpression(o3, "arg", r2);
      }
      const o2 = e2.indexOf(".");
      if (-1 !== o2) {
        const t3 = M[e2.slice(0, o2)], r3 = t3?.[e2.slice(o2 + 1)];
        if ("function" == typeof r3) return r3(...n2);
      }
      const s2 = F[e2];
      if ("function" == typeof s2) return s2(...n2);
      throw new Error(`function ${e2} not loaded in endpointFunctions.`);
    }, $ = { evaluateExpression: U, callFunction: B }, q = (e2, t2) => {
      const { assign: r2 } = e2;
      if (r2 && r2 in t2.referenceRecord) throw new I(`'${r2}' is already defined in Reference Record.`);
      const n2 = B(e2, t2);
      t2.logger?.debug?.(`${A} evaluateCondition: ${P(e2)} = ${P(n2)}`);
      const o2 = "" === n2 || !!n2;
      return null != r2 ? { result: o2, toAssign: { name: r2, value: n2 } } : { result: o2 };
    }, j = (e2, t2) => Object.entries(e2 ?? {}).reduce((e3, [r2, n2]) => (e3[r2] = n2.map((e4) => {
      const n3 = U(e4, "Header value entry", t2);
      if ("string" != typeof n3) throw new I(`Header '${r2}' value '${n3}' is not a string`);
      return n3;
    }), e3), {}), J = (e2, t2) => Object.entries(e2).reduce((e3, [r2, n2]) => (e3[r2] = H.getEndpointProperty(n2, t2), e3), {}), z = (e2, t2) => {
      if (Array.isArray(e2)) return e2.map((e3) => z(e3, t2));
      switch (typeof e2) {
        case "string":
          return L(e2, t2);
        case "object":
          if (null === e2) throw new I(`Unexpected endpoint property: ${e2}`);
          return H.getEndpointProperties(e2, t2);
        case "boolean":
          return e2;
        default:
          throw new I("Unexpected endpoint property type: " + typeof e2);
      }
    }, H = { getEndpointProperty: z, getEndpointProperties: J }, W = (e2, t2) => {
      const r2 = U(e2, "Endpoint URL", t2);
      if ("string" == typeof r2) try {
        return new URL(r2);
      } catch (e3) {
        throw console.error(`Failed to construct URL with ${r2}`, e3), e3;
      }
      throw new I("Endpoint URL must be a string, got " + typeof r2);
    }, G = 1e8, Y = (e2 = [], t2) => {
      const r2 = {}, n2 = { ...t2, referenceRecord: { ...t2.referenceRecord } };
      let o2 = false;
      for (const s2 of e2) {
        const { result: e3, toAssign: i2 } = q(s2, n2);
        if (!e3) return { result: e3 };
        i2 && (o2 = true, r2[i2.name] = i2.value, n2.referenceRecord[i2.name] = i2.value, t2.logger?.debug?.(`${A} assign: ${i2.name} := ${P(i2.value)}`));
      }
      return o2 ? { result: true, referenceRecord: r2 } : { result: true };
    }, V = (e2, t2) => {
      const { conditions: r2, endpoint: n2 } = e2, { result: o2, referenceRecord: s2 } = Y(r2, t2);
      if (!o2) return;
      const i2 = s2 ? { ...t2, referenceRecord: { ...t2.referenceRecord, ...s2 } } : t2, { url: a2, properties: l2, headers: c2 } = n2;
      t2.logger?.debug?.(`${A} Resolving endpoint from template: ${P(n2)}`);
      const u2 = { url: W(a2, i2) };
      return null != c2 && (u2.headers = j(c2, i2)), null != l2 && (u2.properties = J(l2, i2)), u2;
    }, K = (e2, t2) => {
      const { conditions: r2, error: n2 } = e2, { result: o2, referenceRecord: s2 } = Y(r2, t2);
      if (!o2) return;
      const i2 = s2 ? { ...t2, referenceRecord: { ...t2.referenceRecord, ...s2 } } : t2;
      throw new I(U(n2, "Error", i2));
    }, Z = (e2, t2) => {
      for (const r2 of e2) if ("endpoint" === r2.type) {
        const e3 = V(r2, t2);
        if (e3) return e3;
      } else if ("error" === r2.type) K(r2, t2);
      else {
        if ("tree" !== r2.type) throw new I(`Unknown endpoint rule: ${r2}`);
        {
          const e3 = X.evaluateTreeRule(r2, t2);
          if (e3) return e3;
        }
      }
      throw new I("Rules evaluation failed");
    }, X = { evaluateRules: Z, evaluateTreeRule: (e2, t2) => {
      const { conditions: r2, rules: n2 } = e2, { result: o2, referenceRecord: s2 } = Y(r2, t2);
      if (!o2) return;
      const i2 = s2 ? { ...t2, referenceRecord: { ...t2.referenceRecord, ...s2 } } : t2;
      return X.evaluateRules(n2, i2);
    } }, Q = x(g), ee = /* @__PURE__ */ (function(e2) {
      return (t2) => {
        const r2 = t2.tls ?? true, { endpoint: n2, useDualstackEndpoint: o2, useFipsEndpoint: s2 } = t2, i2 = null != n2 ? async () => a(await c(n2)()) : void 0, l2 = !!n2, u2 = Object.assign(t2, { endpoint: i2, tls: r2, isCustomEndpoint: l2, useDualstackEndpoint: c(o2 ?? false), useFipsEndpoint: c(s2 ?? false), ignoreConfiguredEndpointUrls: !!t2.ignoreConfiguredEndpointUrls });
        let d2;
        return u2.serviceConfiguredEndpoint = async () => (t2.serviceId && !d2 && (d2 = e2(t2.serviceId)), d2), u2;
      };
    })(g), te = E(g), re = (function(e2) {
      const t2 = E(e2);
      return (e3, r2) => ({ applyToStack: (n2) => {
        n2.addRelativeTo(t2({ config: e3, instructions: r2 }), T);
      } });
    })(g);
    t.BinaryDecisionDiagram = C, t.EndpointCache = class {
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
    }, t.EndpointError = I, t.customEndpointFunctions = M, t.decideEndpoint = (e2, t2) => {
      const { nodes: r2, root: n2, results: o2, conditions: s2 } = e2;
      let i2 = n2;
      const a2 = {}, l2 = { referenceRecord: a2, endpointParams: t2.endpointParams, logger: t2.logger };
      for (; 1 !== i2 && -1 !== i2 && i2 < G; ) {
        const e3 = 3 * (Math.abs(i2) - 1), [t3, n3, o3] = [r2[e3], r2[e3 + 1], r2[e3 + 2]], [c2, u2, d2] = s2[t3], p2 = q({ fn: c2, assign: d2, argv: u2 }, l2);
        if (p2.toAssign) {
          const { name: e4, value: t4 } = p2.toAssign;
          a2[e4] = t4;
        }
        i2 = i2 >= 0 === p2.result ? n3 : o3;
      }
      if (i2 >= G) {
        const e3 = o2[i2 - G];
        if (-1 === e3[0]) {
          const [, t4] = e3;
          throw new I(U(t4, "Error", l2));
        }
        const [t3, r3, n3] = e3;
        return { url: W(t3, l2), properties: J(r3, l2), headers: j(n3 ?? {}, l2) };
      }
      throw new I("No matching endpoint.");
    }, t.endpointMiddleware = te, t.endpointMiddlewareOptions = T, t.getEndpointFromInstructions = Q, t.getEndpointPlugin = re, t.isIpAddress = D, t.resolveEndpoint = (e2, t2) => {
      const { endpointParams: r2, logger: n2 } = t2, { parameters: o2, rules: s2 } = e2;
      t2.logger?.debug?.(`${A} Initial EndpointParams: ${P(r2)}`);
      for (const e3 in o2) {
        if (!d(o2, e3)) continue;
        const t3 = o2[e3], n3 = r2[e3];
        if (null != n3 || null == t3.default) {
          if (t3.required && null == n3) throw new I(`Missing required parameter: '${e3}'`);
        } else r2[e3] = t3.default;
      }
      const i2 = Z(s2, { endpointParams: r2, logger: n2, referenceRecord: {} });
      return t2.logger?.debug?.(`${A} Resolved endpoint: ${P(i2)}`), i2;
    }, t.resolveEndpointConfig = ee, t.resolveEndpointRequiredConfig = (e2) => {
      const { endpoint: t2 } = e2;
      return void 0 === t2 && (e2.endpoint = async () => {
        throw new Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
      }), e2;
    }, t.resolveParams = k;
  }