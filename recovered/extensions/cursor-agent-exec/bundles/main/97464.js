// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 97464 range:11648994..11669944
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
97464: (e, t, r) => {
    const { Retry: n, RETRY_MODES: s } = r(66948), { HttpRequest: o, parseUrl: i } = r(73931), { InvokeStore: a } = r(18114), { normalizeProvider: c } = r(55909), { platform: l, release: u } = r(48161), { versions: d, env: p } = r(1708), { isValidHostLabel: m, isIpAddress: h, customEndpointFunctions: f } = r(29400), { EndpointError: g, resolveEndpoint: y } = r(29400);
    t.EndpointError = g, t.isIpAddress = h, t.resolveEndpoint = y;
    const { loadConfig: w, NODE_REGION_CONFIG_OPTIONS: v, NODE_REGION_CONFIG_FILE_OPTIONS: _ } = r(86344), { REGION_ENV_NAME: b, REGION_INI_NAME: S, resolveRegionConfig: k } = r(86344);
    t.NODE_REGION_CONFIG_FILE_OPTIONS = _, t.NODE_REGION_CONFIG_OPTIONS = v, t.REGION_ENV_NAME = b, t.REGION_INI_NAME = S, t.resolveRegionConfig = k;
    const x = { warningEmitted: false }, E = { name: "longPollMiddleware", tags: ["RETRY"], step: "initialize", override: true };
    function I(e2, t2, r2) {
      e2.__aws_sdk_context ? e2.__aws_sdk_context.features || (e2.__aws_sdk_context.features = {}) : e2.__aws_sdk_context = { features: {} }, e2.__aws_sdk_context.features[t2] = r2;
    }
    n.v2026 ||= "object" == typeof process && "true" === process.env?.AWS_NEW_RETRIES_2026;
    const T = (e2) => (t2) => async (r2) => {
      if (!o.isInstance(r2.request)) return t2(r2);
      const { request: n2 } = r2, { handlerProtocol: s2 = "" } = e2.requestHandler.metadata || {};
      if (s2.indexOf("h2") >= 0 && !n2.headers[":authority"]) delete n2.headers.host, n2.headers[":authority"] = n2.hostname + (n2.port ? ":" + n2.port : "");
      else if (!n2.headers.host) {
        let e3 = n2.hostname;
        null != n2.port && (e3 += `:${n2.port}`), n2.headers.host = e3;
      }
      return t2(r2);
    }, C = { name: "hostHeaderMiddleware", step: "build", priority: "low", tags: ["HOST"], override: true }, P = () => (e2, t2) => async (r2) => {
      try {
        const n2 = await e2(r2), { clientName: s2, commandName: o2, logger: i2, dynamoDbDocumentClientOptions: a2 = {} } = t2, { overrideInputFilterSensitiveLog: c2, overrideOutputFilterSensitiveLog: l2 } = a2, u2 = c2 ?? t2.inputFilterSensitiveLog, d2 = l2 ?? t2.outputFilterSensitiveLog, { $metadata: p2, ...m2 } = n2.output;
        return i2?.info?.({ clientName: s2, commandName: o2, input: u2(r2.input), output: d2(m2), metadata: p2 }), n2;
      } catch (e3) {
        const { clientName: n2, commandName: s2, logger: o2, dynamoDbDocumentClientOptions: i2 = {} } = t2, { overrideInputFilterSensitiveLog: a2 } = i2, c2 = a2 ?? t2.inputFilterSensitiveLog;
        throw o2?.error?.({ clientName: n2, commandName: s2, input: c2(r2.input), error: e3, metadata: e3.$metadata }), e3;
      }
    }, A = { name: "loggerMiddleware", tags: ["LOGGER"], step: "initialize", override: true }, R = { step: "build", tags: ["RECURSION_DETECTION", "TRACE_CONTEXT_PROPAGATION"], name: "recursionDetectionMiddleware", override: true, priority: "low" }, M = "X-Amzn-Trace-Id", J = "traceparent", O = "tracestate", B = "baggage", D = () => (e2) => async (t2) => {
      const { request: r2 } = t2;
      if (!o.isInstance(r2)) return e2(t2);
      let n2;
      {
        const e3 = Object.keys(r2.headers ?? {}).find((e4) => e4.toLowerCase() === M.toLowerCase()) ?? M;
        if (!r2.headers.hasOwnProperty(e3)) {
          const e4 = process.env.AWS_LAMBDA_FUNCTION_NAME, t3 = process.env._X_AMZN_TRACE_ID;
          n2 ??= await a.getInstanceAsync();
          const s2 = n2?.getXRayTraceId(), o2 = s2 ?? t3, i2 = (e5) => "string" == typeof e5 && e5.length > 0;
          i2(e4) && i2(o2) && (r2.headers[M] = o2);
        }
      }
      !(function(e3) {
        for (const t3 of Object.keys(e3)) {
          const r3 = t3.toLowerCase();
          t3 === r3 || r3 !== J && r3 !== O && r3 !== B || (e3[r3] = e3[t3], delete e3[t3]);
        }
      })(r2.headers);
      if (!r2.headers[J]) {
        const e3 = (n2 ??= await a.getInstanceAsync())?.getTraceparent?.();
        if (e3) {
          r2.headers[J] = e3;
          const t3 = n2?.getTracestate?.();
          t3 && (r2.headers[O] = t3);
          const s2 = n2?.getBaggage?.();
          s2 && (r2.headers[B] = s2);
        }
      }
      return e2(t2);
    };
    const q = void 0;
    const N = { partitions: [{ id: "aws", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-east-1", name: "aws", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$", regions: { "af-south-1": { description: "Africa (Cape Town)" }, "ap-east-1": { description: "Asia Pacific (Hong Kong)" }, "ap-east-2": { description: "Asia Pacific (Taipei)" }, "ap-northeast-1": { description: "Asia Pacific (Tokyo)" }, "ap-northeast-2": { description: "Asia Pacific (Seoul)" }, "ap-northeast-3": { description: "Asia Pacific (Osaka)" }, "ap-south-1": { description: "Asia Pacific (Mumbai)" }, "ap-south-2": { description: "Asia Pacific (Hyderabad)" }, "ap-southeast-1": { description: "Asia Pacific (Singapore)" }, "ap-southeast-2": { description: "Asia Pacific (Sydney)" }, "ap-southeast-3": { description: "Asia Pacific (Jakarta)" }, "ap-southeast-4": { description: "Asia Pacific (Melbourne)" }, "ap-southeast-5": { description: "Asia Pacific (Malaysia)" }, "ap-southeast-6": { description: "Asia Pacific (New Zealand)" }, "ap-southeast-7": { description: "Asia Pacific (Thailand)" }, "aws-global": { description: "aws global region" }, "ca-central-1": { description: "Canada (Central)" }, "ca-west-1": { description: "Canada West (Calgary)" }, "eu-central-1": { description: "Europe (Frankfurt)" }, "eu-central-2": { description: "Europe (Zurich)" }, "eu-north-1": { description: "Europe (Stockholm)" }, "eu-south-1": { description: "Europe (Milan)" }, "eu-south-2": { description: "Europe (Spain)" }, "eu-west-1": { description: "Europe (Ireland)" }, "eu-west-2": { description: "Europe (London)" }, "eu-west-3": { description: "Europe (Paris)" }, "il-central-1": { description: "Israel (Tel Aviv)" }, "me-central-1": { description: "Middle East (UAE)" }, "me-south-1": { description: "Middle East (Bahrain)" }, "mx-central-1": { description: "Mexico (Central)" }, "sa-east-1": { description: "South America (Sao Paulo)" }, "us-east-1": { description: "US East (N. Virginia)" }, "us-east-2": { description: "US East (Ohio)" }, "us-west-1": { description: "US West (N. California)" }, "us-west-2": { description: "US West (Oregon)" } } }, { id: "aws-cn", outputs: { dnsSuffix: "amazonaws.com.cn", dualStackDnsSuffix: "api.amazonwebservices.com.cn", implicitGlobalRegion: "cn-northwest-1", name: "aws-cn", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^cn\\-\\w+\\-\\d+$", regions: { "aws-cn-global": { description: "aws-cn global region" }, "cn-north-1": { description: "China (Beijing)" }, "cn-northwest-1": { description: "China (Ningxia)" } } }, { id: "aws-eusc", outputs: { dnsSuffix: "amazonaws.eu", dualStackDnsSuffix: "api.amazonwebservices.eu", implicitGlobalRegion: "eusc-de-east-1", name: "aws-eusc", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$", regions: { "eusc-de-east-1": { description: "AWS European Sovereign Cloud (Germany)" } } }, { id: "aws-iso", outputs: { dnsSuffix: "c2s.ic.gov", dualStackDnsSuffix: "api.aws.ic.gov", implicitGlobalRegion: "us-iso-east-1", name: "aws-iso", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^us\\-iso\\-\\w+\\-\\d+$", regions: { "aws-iso-global": { description: "aws-iso global region" }, "us-iso-east-1": { description: "US ISO East" }, "us-iso-west-1": { description: "US ISO WEST" } } }, { id: "aws-iso-b", outputs: { dnsSuffix: "sc2s.sgov.gov", dualStackDnsSuffix: "api.aws.scloud", implicitGlobalRegion: "us-isob-east-1", name: "aws-iso-b", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^us\\-isob\\-\\w+\\-\\d+$", regions: { "aws-iso-b-global": { description: "aws-iso-b global region" }, "us-isob-east-1": { description: "US ISOB East (Ohio)" }, "us-isob-west-1": { description: "US ISOB West" } } }, { id: "aws-iso-e", outputs: { dnsSuffix: "cloud.adc-e.uk", dualStackDnsSuffix: "api.cloud-aws.adc-e.uk", implicitGlobalRegion: "eu-isoe-west-1", name: "aws-iso-e", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$", regions: { "aws-iso-e-global": { description: "aws-iso-e global region" }, "eu-isoe-west-1": { description: "EU ISOE West" } } }, { id: "aws-iso-f", outputs: { dnsSuffix: "csp.hci.ic.gov", dualStackDnsSuffix: "api.aws.hci.ic.gov", implicitGlobalRegion: "us-isof-south-1", name: "aws-iso-f", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^us\\-isof\\-\\w+\\-\\d+$", regions: { "aws-iso-f-global": { description: "aws-iso-f global region" }, "us-isof-east-1": { description: "US ISOF EAST" }, "us-isof-south-1": { description: "US ISOF SOUTH" } } }, { id: "aws-us-gov", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-gov-west-1", name: "aws-us-gov", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^us\\-gov\\-\\w+\\-\\d+$", regions: { "aws-us-gov-global": { description: "aws-us-gov global region" }, "us-gov-east-1": { description: "AWS GovCloud (US-East)" }, "us-gov-west-1": { description: "AWS GovCloud (US-West)" } } }], version: "1.1" };
    let F = N, U = "";
    const L = (e2) => {
      const { partitions: t2 } = F;
      for (const r3 of t2) {
        const { regions: t3, outputs: n2 } = r3;
        for (const [r4, s2] of Object.entries(t3)) if (r4 === e2) return { ...n2, ...s2 };
      }
      for (const r3 of t2) {
        const { regionRegex: t3, outputs: n2 } = r3;
        if (new RegExp(t3).test(e2)) return { ...n2 };
      }
      const r2 = t2.find((e3) => "aws" === e3.id);
      if (!r2) throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      return { ...r2.outputs };
    }, $ = (e2, t2 = "") => {
      F = e2, U = t2;
    }, j = () => U, G = /\d{12}\.ddb/;
    const z = "user-agent", W = "x-amz-user-agent", H = /[^!$%&'*+\-.^_`|~\w]/g, K = /[^!$%&'*+\-.^_`|~\w#]/g;
    const V = (e2) => (t2, r2) => async (n2) => {
      const { request: i2 } = n2;
      if (!o.isInstance(i2)) return t2(n2);
      const { headers: a2 } = i2, c2 = r2?.userAgent?.map(Y) || [], l2 = (await e2.defaultUserAgentProvider()).map(Y);
      await (async function(e3, t3, r3) {
        const n3 = r3.request;
        if ("rpc-v2-cbor" === n3?.headers?.["smithy-protocol"] && I(e3, "PROTOCOL_RPC_V2_CBOR", "M"), "function" == typeof t3.retryStrategy) {
          const r4 = await t3.retryStrategy();
          if ("string" == typeof r4.mode) switch (r4.mode) {
            case s.ADAPTIVE:
              I(e3, "RETRY_MODE_ADAPTIVE", "F");
              break;
            case s.STANDARD:
              I(e3, "RETRY_MODE_STANDARD", "E");
          }
        }
        if ("function" == typeof t3.accountIdEndpointMode) {
          const r4 = e3.endpointV2;
          switch (String(r4?.url?.hostname).match(G) && I(e3, "ACCOUNT_ID_ENDPOINT", "O"), await t3.accountIdEndpointMode?.()) {
            case "disabled":
              I(e3, "ACCOUNT_ID_MODE_DISABLED", "Q");
              break;
            case "preferred":
              I(e3, "ACCOUNT_ID_MODE_PREFERRED", "P");
              break;
            case "required":
              I(e3, "ACCOUNT_ID_MODE_REQUIRED", "R");
          }
        }
        const o2 = e3.__smithy_context?.selectedHttpAuthScheme?.identity;
        if (o2?.$source) {
          const t4 = o2;
          t4.accountId && I(e3, "RESOLVED_ACCOUNT_ID", "T");
          for (const [r4, n4] of Object.entries(t4.$source ?? {})) I(e3, r4, n4);
        }
      })(r2, e2, n2);
      const u2 = r2;
      l2.push(`m/${(function(e3) {
        let t3 = "";
        for (const r3 in e3) {
          const n3 = e3[r3];
          if (!(t3.length + n3.length + 1 <= 1024)) break;
          t3.length ? t3 += "," + n3 : t3 += n3;
        }
        return t3;
      })(Object.assign({}, r2.__smithy_context?.features, u2.__aws_sdk_context?.features))}`);
      const d2 = e2?.customUserAgent?.map(Y) || [], p2 = await e2.userAgentAppId();
      p2 && l2.push(Y(["app", `${p2}`]));
      const m2 = j(), h2 = (m2 ? [m2] : []).concat([...l2, ...c2, ...d2]).join(" "), f2 = [...l2.filter((e3) => e3.startsWith("aws-sdk-")), ...d2].join(" ");
      return "browser" !== e2.runtime ? (f2 && (a2[W] = a2[W] ? `${a2[z]} ${f2}` : f2), a2[z] = h2) : a2[W] = h2, t2({ ...n2, request: i2 });
    }, Y = (e2) => {
      const t2 = e2[0].split("/").map((e3) => e3.replace(H, "-")).join("/"), r2 = e2[1]?.replace(K, "-"), n2 = t2.indexOf("/"), s2 = t2.substring(0, n2);
      let o2 = t2.substring(n2 + 1);
      return "api" === s2 && (o2 = o2.toLowerCase()), [s2, o2, r2].filter((e3) => e3 && e3.length > 0).reduce((e3, t3, r3) => {
        switch (r3) {
          case 0:
            return t3;
          case 1:
            return `${e3}/${t3}`;
          default:
            return `${e3}#${t3}`;
        }
      }, "");
    }, Q = { name: "getUserAgentMiddleware", step: "build", priority: "low", tags: ["SET_USER_AGENT", "USER_AGENT"], override: true }, X = { isCrtAvailable: false }, Z = ({ serviceId: e2, clientVersion: t2 }) => {
      const r2 = (() => {
        const e3 = ["deno", "bun", "llrt"];
        for (const t3 of e3) if (d[t3]) return [`md/${t3}`, d[t3]];
        return ["md/nodejs", d.node];
      })();
      return async (n2) => {
        const s2 = [["aws-sdk-js", t2], ["ua", "2.1"], [`os/${l()}`, u()], ["lang/js"], r2], o2 = X.isCrtAvailable ? ["md/crt-avail"] : null;
        o2 && s2.push(o2), e2 && s2.push([`api/${e2}`, t2]), p.AWS_EXECUTION_ENV && s2.push([`exec-env/${p.AWS_EXECUTION_ENV}`]);
        const i2 = await n2?.userAgentAppId?.();
        return i2 ? [...s2, [`app/${i2}`]] : [...s2];
      };
    }, ee = Z, te = "AWS_SDK_UA_APP_ID", re = "sdk_ua_app_id", ne = { environmentVariableSelector: (e2) => e2[te], configFileSelector: (e2) => e2[re] ?? e2["sdk-ua-app-id"], default: q }, se = { os: (e2) => /iPhone|iPad|iPod/.test(e2) ? "iOS" : /Macintosh|Mac OS X/.test(e2) ? "macOS" : /Windows NT/.test(e2) ? "Windows" : /Android/.test(e2) ? "Android" : /Linux/.test(e2) ? "Linux" : void 0, browser: (e2) => /EdgiOS|EdgA|Edg\//.test(e2) ? "Microsoft Edge" : /Firefox\//.test(e2) ? "Firefox" : /Chrome\//.test(e2) ? "Chrome" : /Safari\//.test(e2) ? "Safari" : void 0 }, oe = (e2, t2 = false) => {
      if (t2) {
        for (const t3 of e2.split(".")) if (!oe(t3)) return false;
        return true;
      }
      return !!m(e2) && (!(e2.length < 3 || e2.length > 63) && (e2 === e2.toLowerCase() && !h(e2)));
    }, ie = (e2) => {
      const t2 = e2.split(":");
      if (t2.length < 6) return null;
      const [r2, n2, s2, o2, i2, ...a2] = t2;
      if ("arn" !== r2 || "" === n2 || "" === s2 || "" === a2.join(":")) return null;
      return { partition: n2, service: s2, region: o2, accountId: i2, resourceId: a2.map((e3) => e3.split("/")).flat() };
    }, ae = { isVirtualHostableS3Bucket: oe, parseArn: ie, partition: L };
    f.aws = ae;
    const ce = (e2) => i(e2.url);
    const le = { silence: false };
    t.DEFAULT_UA_APP_ID = q, t.NODE_APP_ID_CONFIG_OPTIONS = ne, t.UA_APP_ID_ENV_NAME = te, t.UA_APP_ID_INI_NAME = re, t.awsEndpointFunctions = ae, t.createDefaultUserAgentProvider = Z, t.createUserAgentStringParsingProvider = ({ serviceId: e2, clientVersion: t2 }) => async (n2) => {
      const s2 = r(36589), o2 = s2.parse ?? s2.default.parse ?? (() => ""), i2 = "undefined" != typeof window && window?.navigator?.userAgent ? o2(window.navigator.userAgent) : void 0, a2 = [["aws-sdk-js", t2], ["ua", "2.1"], [`os/${i2?.os?.name || "other"}`, i2?.os?.version], ["lang/js"], ["md/browser", `${i2?.browser?.name ?? "unknown"}_${i2?.browser?.version ?? "unknown"}`]];
      e2 && a2.push([`api/${e2}`, t2]);
      const c2 = await n2?.userAgentAppId?.();
      return c2 && a2.push([`app/${c2}`]), a2;
    }, t.crtAvailability = X, t.defaultUserAgent = ee, t.emitWarningIfUnsupportedVersion = (e2) => {
      if (e2 && !x.warningEmitted) {
        if ("true" === process.env.AWS_SDK_JS_NODE_VERSION_SUPPORT_WARNING_DISABLED) return void (x.warningEmitted = true);
        const t2 = 22;
        parseInt(e2.substring(1, e2.indexOf("."))) < t2 && (x.warningEmitted = true, process.emitWarning(`NodeVersionSupportWarning: The AWS SDK for JavaScript (v3)
versions published after the first week of January 2027
will require node >=${t2}. You are running node ${e2}.

To continue receiving updates to AWS services, bug fixes,
and security updates please upgrade to node >=${t2}.

More information can be found at: https://a.co/c895JFp`));
      }
    }, t.fallback = se, t.getAwsRegionExtensionConfiguration = (e2) => ({ setRegion(t2) {
      e2.region = t2;
    }, region: () => e2.region }), t.getHostHeaderPlugin = (e2) => ({ applyToStack: (t2) => {
      t2.add(T(e2), C);
    } }), t.getLoggerPlugin = (e2) => ({ applyToStack: (e3) => {
      e3.add((e4, t2) => async (r2) => {
        try {
          const n2 = await e4(r2), { clientName: s2, commandName: o2, logger: i2, dynamoDbDocumentClientOptions: a2 = {} } = t2, { overrideInputFilterSensitiveLog: c2, overrideOutputFilterSensitiveLog: l2 } = a2, u2 = c2 ?? t2.inputFilterSensitiveLog, d2 = l2 ?? t2.outputFilterSensitiveLog, { $metadata: p2, ...m2 } = n2.output;
          return i2?.info?.({ clientName: s2, commandName: o2, input: u2(r2.input), output: d2(m2), metadata: p2 }), n2;
        } catch (e5) {
          const { clientName: n2, commandName: s2, logger: o2, dynamoDbDocumentClientOptions: i2 = {} } = t2, { overrideInputFilterSensitiveLog: a2 } = i2, c2 = a2 ?? t2.inputFilterSensitiveLog;
          throw o2?.error?.({ clientName: n2, commandName: s2, input: c2(r2.input), error: e5, metadata: e5.$metadata }), e5;
        }
      }, A);
    } }), t.getLongPollPlugin = (e2) => ({ applyToStack: (e3) => {
      e3.add((e4, t2) => async (r2) => (t2.__retryLongPoll = true, e4(r2)), E);
    } }), t.getRecursionDetectionPlugin = (e2) => ({ applyToStack: (e3) => {
      e3.add(D(), R);
    } }), t.getUserAgentMiddlewareOptions = Q, t.getUserAgentPlugin = (e2) => ({ applyToStack: (t2) => {
      t2.add(V(e2), Q);
    } }), t.getUserAgentPrefix = j, t.hostHeaderMiddleware = T, t.hostHeaderMiddlewareOptions = C, t.isVirtualHostableS3Bucket = oe, t.loggerMiddleware = P, t.loggerMiddlewareOptions = A, t.parseArn = ie, t.partition = L, t.recursionDetectionMiddleware = D, t.recursionDetectionMiddlewareOptions = R, t.resolveAwsRegionExtensionConfiguration = (e2) => ({ region: e2.region() }), t.resolveDefaultAwsRegionalEndpointsConfig = (e2) => {
      if ("function" != typeof e2.endpointProvider) throw new Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
      const { endpoint: t2 } = e2;
      return void 0 === t2 && (e2.endpoint = async () => ce(e2.endpointProvider({ Region: "function" == typeof e2.region ? await e2.region() : e2.region, UseDualStack: "function" == typeof e2.useDualstackEndpoint ? await e2.useDualstackEndpoint() : e2.useDualstackEndpoint, UseFIPS: "function" == typeof e2.useFipsEndpoint ? await e2.useFipsEndpoint() : e2.useFipsEndpoint, Endpoint: void 0 }, { logger: e2.logger }))), e2;
    }, t.resolveHostHeaderConfig = function(e2) {
      return e2;
    }, t.resolveUserAgentConfig = function(e2) {
      const t2 = c(e2.userAgentAppId ?? q), { customUserAgent: r2 } = e2;
      return Object.assign(e2, { customUserAgent: "string" == typeof r2 ? [[r2]] : r2, userAgentAppId: async () => {
        const r3 = await t2();
        if (!(function(e3) {
          return void 0 === e3 || "string" == typeof e3 && e3.length <= 50;
        })(r3)) {
          const t3 = "NoOpLogger" !== e2.logger?.constructor?.name && e2.logger ? e2.logger : console;
          "string" != typeof r3 ? t3?.warn("userAgentAppId must be a string or undefined.") : r3.length > 50 && t3?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
        return r3;
      } });
    }, t.setCredentialFeature = function(e2, t2, r2) {
      return e2.$source || (e2.$source = {}), e2.$source[t2] = r2, e2;
    }, t.setFeature = I, t.setPartitionInfo = $, t.setTokenFeature = function(e2, t2, r2) {
      return e2.$source || (e2.$source = {}), e2.$source[t2] = r2, e2;
    }, t.state = x, t.stsRegionDefaultResolver = function(e2 = {}) {
      return w({ ...v, default: async () => (le.silence || console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly."), "us-east-1") }, { ..._, ...e2 });
    }, t.stsRegionWarning = le, t.toEndpointV1 = ce, t.useDefaultPartitionInfo = () => {
      $(N, "");
    }, t.userAgentMiddleware = V;
  }