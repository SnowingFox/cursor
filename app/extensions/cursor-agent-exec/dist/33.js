"use strict";
exports.id = 33, exports.ids = [33], exports.modules = { 6635: (e, t, n) => {
  n.r(t), n.d(t, { SignatureV4MultiRegion: () => u, signatureV4CrtContainer: () => d });
  var i = n(84329);
  n(32022), n(70542);
  const o = "X-Amz-S3session-Token", r = o.toLowerCase();
  class s extends i.B {
    async signWithCredentials(e2, t2, n2) {
      const i2 = a(t2);
      e2.headers[r] = t2.sessionToken;
      return c(this, i2), this.signRequest(e2, n2 ?? {});
    }
    async presignWithCredentials(e2, t2, n2) {
      const i2 = a(t2);
      delete e2.headers[r], e2.headers[o] = t2.sessionToken, e2.query = e2.query ?? {}, e2.query[o] = t2.sessionToken;
      return c(this, i2), this.presign(e2, n2);
    }
  }
  function a(e2) {
    return { accessKeyId: e2.accessKeyId, secretAccessKey: e2.secretAccessKey, expiration: e2.expiration };
  }
  function c(e2, t2) {
    const n2 = setTimeout(() => {
      throw new Error("SignatureV4S3Express credential override was created but not called.");
    }, 10), i2 = e2.credentialProvider;
    e2.credentialProvider = () => (clearTimeout(n2), e2.credentialProvider = i2, Promise.resolve(t2));
  }
  var l = n(16936);
  const d = { CrtSignerV4: null };
  class u {
    sigv4aSigner;
    sigv4Signer;
    signerOptions;
    static sigv4aDependency() {
      return "function" == typeof d.CrtSignerV4 ? "crt" : "function" == typeof l.d.SignatureV4a ? "js" : "none";
    }
    constructor(e2) {
      this.sigv4Signer = new s(e2), this.signerOptions = e2;
    }
    async sign(e2, t2 = {}) {
      return "*" === t2.signingRegion ? this.getSigv4aSigner().sign(e2, t2) : this.sigv4Signer.sign(e2, t2);
    }
    async signWithCredentials(e2, t2, n2 = {}) {
      if ("*" === n2.signingRegion) {
        const i2 = this.getSigv4aSigner(), o2 = d.CrtSignerV4;
        if (o2 && i2 instanceof o2) return i2.signWithCredentials(e2, t2, n2);
        throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
      }
      return this.sigv4Signer.signWithCredentials(e2, t2, n2);
    }
    async presign(e2, t2 = {}) {
      if ("*" === t2.signingRegion) {
        const n2 = this.getSigv4aSigner(), i2 = d.CrtSignerV4;
        if (i2 && n2 instanceof i2) return n2.presign(e2, t2);
        throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
      }
      return this.sigv4Signer.presign(e2, t2);
    }
    async presignWithCredentials(e2, t2, n2 = {}) {
      if ("*" === n2.signingRegion) throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
      return this.sigv4Signer.presignWithCredentials(e2, t2, n2);
    }
    getSigv4aSigner() {
      if (!this.sigv4aSigner) {
        const e2 = d.CrtSignerV4, t2 = l.d.SignatureV4a;
        if ("node" === this.signerOptions.runtime) {
          if (!e2 && !t2) throw new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
          if (e2 && "function" == typeof e2) this.sigv4aSigner = new e2({ ...this.signerOptions, signingAlgorithm: 1 });
          else {
            if (!t2 || "function" != typeof t2) throw new Error("Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
            this.sigv4aSigner = new t2({ ...this.signerOptions });
          }
        } else {
          if (!t2 || "function" != typeof t2) throw new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
          this.sigv4aSigner = new t2({ ...this.signerOptions });
        }
      }
      return this.sigv4aSigner;
    }
  }
}, 10869: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.IDPCommunicationErrorException = t.InvalidIdentityTokenException = t.IDPRejectedClaimException = t.RegionDisabledException = t.PackedPolicyTooLargeException = t.MalformedPolicyDocumentException = t.ExpiredTokenException = void 0;
  const i = n(73856);
  class o extends i.STSServiceException {
    name = "ExpiredTokenException";
    $fault = "client";
    constructor(e2) {
      super({ name: "ExpiredTokenException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, o.prototype);
    }
  }
  t.ExpiredTokenException = o;
  class r extends i.STSServiceException {
    name = "MalformedPolicyDocumentException";
    $fault = "client";
    constructor(e2) {
      super({ name: "MalformedPolicyDocumentException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, r.prototype);
    }
  }
  t.MalformedPolicyDocumentException = r;
  class s extends i.STSServiceException {
    name = "PackedPolicyTooLargeException";
    $fault = "client";
    constructor(e2) {
      super({ name: "PackedPolicyTooLargeException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, s.prototype);
    }
  }
  t.PackedPolicyTooLargeException = s;
  class a extends i.STSServiceException {
    name = "RegionDisabledException";
    $fault = "client";
    constructor(e2) {
      super({ name: "RegionDisabledException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, a.prototype);
    }
  }
  t.RegionDisabledException = a;
  class c extends i.STSServiceException {
    name = "IDPRejectedClaimException";
    $fault = "client";
    constructor(e2) {
      super({ name: "IDPRejectedClaimException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, c.prototype);
    }
  }
  t.IDPRejectedClaimException = c;
  class l extends i.STSServiceException {
    name = "InvalidIdentityTokenException";
    $fault = "client";
    constructor(e2) {
      super({ name: "InvalidIdentityTokenException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, l.prototype);
    }
  }
  t.InvalidIdentityTokenException = l;
  class d extends i.STSServiceException {
    name = "IDPCommunicationErrorException";
    $fault = "client";
    $retryable = {};
    constructor(e2) {
      super({ name: "IDPCommunicationErrorException", $fault: "client", ...e2 }), Object.setPrototypeOf(this, d.prototype);
    }
  }
  t.IDPCommunicationErrorException = d;
}, 16901: (e, t) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.resolveHttpAuthRuntimeConfig = t.getHttpAuthExtensionConfiguration = void 0;
  t.getHttpAuthExtensionConfiguration = (e2) => {
    const t2 = e2.httpAuthSchemes;
    let n = e2.httpAuthSchemeProvider, i = e2.credentials;
    return { setHttpAuthScheme(e3) {
      const n2 = t2.findIndex((t3) => t3.schemeId === e3.schemeId);
      -1 === n2 ? t2.push(e3) : t2.splice(n2, 1, e3);
    }, httpAuthSchemes: () => t2, setHttpAuthSchemeProvider(e3) {
      n = e3;
    }, httpAuthSchemeProvider: () => n, setCredentials(e3) {
      i = e3;
    }, credentials: () => i };
  };
  t.resolveHttpAuthRuntimeConfig = (e2) => ({ httpAuthSchemes: e2.httpAuthSchemes(), httpAuthSchemeProvider: e2.httpAuthSchemeProvider(), credentials: e2.credentials() });
}, 32470: (e, t) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.commonParams = t.resolveClientEndpointParameters = void 0;
  t.resolveClientEndpointParameters = (e2) => Object.assign(e2, { useDualstackEndpoint: e2.useDualstackEndpoint ?? false, useFipsEndpoint: e2.useFipsEndpoint ?? false, useGlobalEndpoint: e2.useGlobalEndpoint ?? false, defaultSigningName: "sts" }), t.commonParams = { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
}, 32780: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.defaultEndpointResolver = void 0;
  const i = n(85644), o = n(82713), r = n(41929), s = new o.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"] });
  t.defaultEndpointResolver = (e2, t2 = {}) => s.get(e2, () => (0, o.decideEndpoint)(r.bdd, { endpointParams: e2, logger: t2.logger })), o.customEndpointFunctions.aws = i.awsEndpointFunctions;
}, 41929: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.bdd = void 0;
  const i = n(82713), o = "ref", r = -1, s = true, a = "isSet", c = "PartitionResult", l = "booleanEquals", d = "stringEquals", u = "getAttr", p = "us-east-1", g = "sigv4", m = "https://sts.{Region}.{PartitionResult#dnsSuffix}", h = { [o]: "Endpoint" }, S = { [o]: "Region" }, f = { [o]: c }, v = {}, y = [S], E = { conditions: [[a, [h]], [a, y], ["aws.partition", y, c], [l, [{ [o]: "UseFIPS" }, s]], [l, [{ [o]: "UseDualStack" }, s]], [d, [S, "aws-global"]], [l, [{ [o]: "UseGlobalEndpoint" }, s]], [d, [S, "eu-central-1"]], [l, [{ fn: u, argv: [f, "supportsDualStack"] }, s]], [l, [{ fn: u, argv: [f, "supportsFIPS"] }, s]], [d, [S, "ap-south-1"]], [d, [S, "eu-north-1"]], [d, [S, "eu-west-1"]], [d, [S, "eu-west-2"]], [d, [S, "eu-west-3"]], [d, [S, "sa-east-1"]], [d, [S, p]], [d, [S, "us-east-2"]], [d, [S, "us-west-2"]], [d, [S, "us-west-1"]], [d, [S, "ca-central-1"]], [d, [S, "ap-southeast-1"]], [d, [S, "ap-northeast-1"]], [d, [S, "ap-southeast-2"]], [d, [{ fn: u, argv: [f, "name"] }, "aws-us-gov"]]], results: [[r], ["https://sts.amazonaws.com", { authSchemes: [{ name: g, signingName: "sts", signingRegion: p }] }], [m, { authSchemes: [{ name: g, signingName: "sts", signingRegion: "{Region}" }] }], [r, "Invalid Configuration: FIPS and custom endpoint are not supported"], [r, "Invalid Configuration: Dualstack and custom endpoint are not supported"], [h, v], ["https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", v], [r, "FIPS and DualStack are enabled, but this partition does not support one or both"], ["https://sts.{Region}.amazonaws.com", v], ["https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", v], [r, "FIPS is enabled but this partition does not support FIPS"], ["https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", v], [r, "DualStack is enabled but this partition does not support DualStack"], [m, v], [r, "Invalid Configuration: Missing Region"]] }, P = 1e8, C = new Int32Array([-1, 1, -1, 0, 30, 3, 1, 4, P + 14, 2, 5, P + 14, 3, 25, 6, 4, 24, 7, 5, P + 1, 8, 6, 9, P + 13, 7, P + 1, 10, 10, P + 1, 11, 11, P + 1, 12, 12, P + 1, 13, 13, P + 1, 14, 14, P + 1, 15, 15, P + 1, 16, 16, P + 1, 17, 17, P + 1, 18, 18, P + 1, 19, 19, P + 1, 20, 20, P + 1, 21, 21, P + 1, 22, 22, P + 1, 23, 23, P + 1, P + 2, 8, P + 11, P + 12, 4, 28, 26, 9, 27, P + 10, 24, P + 8, P + 9, 8, 29, P + 7, 9, P + 6, P + 7, 3, P + 3, 31, 4, P + 4, P + 5]);
  t.bdd = i.BinaryDecisionDiagram.from(C, 2, E.conditions, E.results);
}, 63122: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.resolveHttpAuthSchemeConfig = t.resolveStsAuthConfig = t.defaultSTSHttpAuthSchemeProvider = t.defaultSTSHttpAuthSchemeParametersProvider = void 0;
  const i = n(58571), o = n(6635), r = n(53804), s = n(5944), a = n(32780), c = n(83170);
  var l;
  function d(e2) {
    return { schemeId: "aws.auth#sigv4", signingProperties: { name: "sts", region: e2.region }, propertiesExtractor: (e3, t2) => ({ signingProperties: { config: e3, context: t2 } }) };
  }
  function u(e2) {
    return { schemeId: "aws.auth#sigv4a", signingProperties: { name: "sts", region: e2.region }, propertiesExtractor: (e3, t2) => ({ signingProperties: { config: e3, context: t2 } }) };
  }
  function p(e2) {
    return { schemeId: "smithy.api#noAuth" };
  }
  t.defaultSTSHttpAuthSchemeParametersProvider = (l = async (e2, t2, n2) => ({ operation: (0, s.getSmithyContext)(t2).operation, region: await (0, s.normalizeProvider)(e2.region)() || (() => {
    throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
  })() }), async (e2, t2, n2) => {
    if (!n2) throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
    const i2 = await l(e2, t2, n2), o2 = (0, s.getSmithyContext)(t2)?.commandInstance?.constructor?.getEndpointParameterInstructions;
    if (!o2) throw new Error(`getEndpointParameterInstructions() is not defined on '${t2.commandName}'`);
    const a2 = await (0, r.resolveParams)(n2, { getEndpointParameterInstructions: o2 }, e2);
    return Object.assign(i2, a2);
  });
  var g, m, h;
  t.defaultSTSHttpAuthSchemeProvider = (g = a.defaultEndpointResolver, m = (e2) => {
    const t2 = [];
    return "AssumeRoleWithWebIdentity" === e2.operation ? (t2.push({ schemeId: "smithy.api#noAuth" }), t2.push(u(e2))) : (t2.push(d(e2)), t2.push(u(e2))), t2;
  }, h = { "aws.auth#sigv4": d, "aws.auth#sigv4a": u, "smithy.api#noAuth": p }, (e2) => {
    const t2 = g(e2), n2 = t2.properties?.authSchemes;
    if (!n2) return m(e2);
    const i2 = [];
    for (const t3 of n2) {
      const { name: r2, properties: s2 = {}, ...a2 } = t3, c2 = r2.toLowerCase();
      let l2;
      if (r2 !== c2 && console.warn(`HttpAuthScheme has been normalized with lowercasing: '${r2}' to '${c2}'`), "sigv4a" === c2) {
        l2 = "aws.auth#sigv4a";
        const e3 = n2.find((e4) => {
          const t4 = e4.name.toLowerCase();
          return "sigv4a" !== t4 && t4.startsWith("sigv4");
        });
        if ("none" === o.SignatureV4MultiRegion.sigv4aDependency() && e3) continue;
      } else {
        if (!c2.startsWith("sigv4")) throw new Error(`Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${c2}'`);
        l2 = "aws.auth#sigv4";
      }
      const d2 = h[l2];
      if (!d2) throw new Error(`Could not find HttpAuthOption create function for '${l2}'`);
      const u2 = d2(e2);
      u2.schemeId = l2, u2.signingProperties = { ...u2.signingProperties || {}, ...a2, ...s2 }, i2.push(u2);
    }
    return i2;
  });
  t.resolveStsAuthConfig = (e2) => Object.assign(e2, { stsClientCtor: c.STSClient });
  t.resolveHttpAuthSchemeConfig = (e2) => {
    const n2 = (0, t.resolveStsAuthConfig)(e2), o2 = (0, i.resolveAwsSdkSigV4Config)(n2), r2 = (0, i.resolveAwsSdkSigV4AConfig)(o2);
    return Object.assign(r2, { authSchemePreference: (0, s.normalizeProvider)(e2.authSchemePreference ?? []) });
  };
}, 73856: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.STSServiceException = t.__ServiceException = void 0;
  const i = n(98175);
  Object.defineProperty(t, "__ServiceException", { enumerable: true, get: function() {
    return i.ServiceException;
  } });
  class o extends i.ServiceException {
    constructor(e2) {
      super(e2), Object.setPrototypeOf(this, o.prototype);
    }
  }
  t.STSServiceException = o;
}, 77859: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const i = n(16317).__importDefault(n(181)), o = n(97464), r = n(58571), s = n(67114), a = n(78520), c = n(55909), l = n(23296), d = n(39022), u = n(28311), p = n(64702), g = n(98175), m = n(87738), h = n(50941), S = n(18020), f = n(96960);
  t.getRuntimeConfig = (e2) => {
    (0, g.emitWarningIfUnsupportedVersion)(process.version);
    const t2 = (0, h.resolveDefaultsModeConfig)(e2), n2 = () => t2().then(g.loadConfigsForDefaultMode), v = (0, f.getRuntimeConfig)(e2);
    (0, o.emitWarningIfUnsupportedVersion)(process.version);
    const y = { profile: e2?.profile, logger: v.logger };
    return { ...v, ...e2, runtime: "node", defaultsMode: t2, authSchemePreference: e2?.authSchemePreference ?? (0, u.loadConfig)(r.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, y), bodyLengthChecker: e2?.bodyLengthChecker ?? m.calculateBodyLength, defaultUserAgentProvider: e2?.defaultUserAgentProvider ?? (0, s.createDefaultUserAgentProvider)({ serviceId: v.serviceId, clientVersion: i.default.version }), httpAuthSchemes: e2?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (t3) => t3.getIdentityProvider("aws.auth#sigv4") || (async (t4) => await e2.credentialDefaultProvider(t4?.__config || {})()), signer: new r.AwsSdkSigV4Signer() }, { schemeId: "aws.auth#sigv4a", identityProvider: (e3) => e3.getIdentityProvider("aws.auth#sigv4a"), signer: new r.AwsSdkSigV4ASigner() }, { schemeId: "smithy.api#noAuth", identityProvider: (e3) => e3.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new c.NoAuthSigner() }], maxAttempts: e2?.maxAttempts ?? (0, u.loadConfig)(d.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e2), region: e2?.region ?? (0, u.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, { ...a.NODE_REGION_CONFIG_FILE_OPTIONS, ...y }), requestHandler: p.NodeHttpHandler.create(e2?.requestHandler ?? n2), retryMode: e2?.retryMode ?? (0, u.loadConfig)({ ...d.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await n2()).retryMode || S.DEFAULT_RETRY_MODE }, e2), sha256: e2?.sha256 ?? l.Hash.bind(null, "sha256"), sigv4aSigningRegionSet: e2?.sigv4aSigningRegionSet ?? (0, u.loadConfig)(r.NODE_SIGV4A_CONFIG_OPTIONS, y), streamCollector: e2?.streamCollector ?? p.streamCollector, useDualstackEndpoint: e2?.useDualstackEndpoint ?? (0, u.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, y), useFipsEndpoint: e2?.useFipsEndpoint ?? (0, u.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, y), userAgentAppId: e2?.userAgentAppId ?? (0, u.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, y) };
  };
}, 83121: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.AssumeRoleWithWebIdentity$ = t.AssumeRole$ = t.Tag$ = t.ProvidedContext$ = t.PolicyDescriptorType$ = t.Credentials$ = t.AssumeRoleWithWebIdentityResponse$ = t.AssumeRoleWithWebIdentityRequest$ = t.AssumeRoleResponse$ = t.AssumeRoleRequest$ = t.AssumedRoleUser$ = t.errorTypeRegistries = t.RegionDisabledException$ = t.PackedPolicyTooLargeException$ = t.MalformedPolicyDocumentException$ = t.InvalidIdentityTokenException$ = t.IDPRejectedClaimException$ = t.IDPCommunicationErrorException$ = t.ExpiredTokenException$ = t.STSServiceException$ = void 0;
  const i = "AssumedRoleUser", o = "Credentials", r = "DurationSeconds", s = "Policy", a = "PolicyArns", c = "PackedPolicySize", l = "RoleArn", d = "RoleSessionName", u = "SourceIdentity", p = "awsQueryError", g = "client", m = "error", h = "httpError", S = "message", f = "smithy.ts.sdk.synthetic.com.amazonaws.sts", v = "com.amazonaws.sts", y = n(93353), E = n(10869), P = n(73856), C = y.TypeRegistry.for(f);
  t.STSServiceException$ = [-3, f, "STSServiceException", 0, [], []], C.registerError(t.STSServiceException$, P.STSServiceException);
  const A = y.TypeRegistry.for(v);
  t.ExpiredTokenException$ = [-3, v, "ExpiredTokenException", { [p]: ["ExpiredTokenException", 400], [m]: g, [h]: 400 }, [S], [0]], A.registerError(t.ExpiredTokenException$, E.ExpiredTokenException), t.IDPCommunicationErrorException$ = [-3, v, "IDPCommunicationErrorException", { [p]: ["IDPCommunicationError", 400], [m]: g, [h]: 400 }, [S], [0]], A.registerError(t.IDPCommunicationErrorException$, E.IDPCommunicationErrorException), t.IDPRejectedClaimException$ = [-3, v, "IDPRejectedClaimException", { [p]: ["IDPRejectedClaim", 403], [m]: g, [h]: 403 }, [S], [0]], A.registerError(t.IDPRejectedClaimException$, E.IDPRejectedClaimException), t.InvalidIdentityTokenException$ = [-3, v, "InvalidIdentityTokenException", { [p]: ["InvalidIdentityToken", 400], [m]: g, [h]: 400 }, [S], [0]], A.registerError(t.InvalidIdentityTokenException$, E.InvalidIdentityTokenException), t.MalformedPolicyDocumentException$ = [-3, v, "MalformedPolicyDocumentException", { [p]: ["MalformedPolicyDocument", 400], [m]: g, [h]: 400 }, [S], [0]], A.registerError(t.MalformedPolicyDocumentException$, E.MalformedPolicyDocumentException), t.PackedPolicyTooLargeException$ = [-3, v, "PackedPolicyTooLargeException", { [p]: ["PackedPolicyTooLarge", 400], [m]: g, [h]: 400 }, [S], [0]], A.registerError(t.PackedPolicyTooLargeException$, E.PackedPolicyTooLargeException), t.RegionDisabledException$ = [-3, v, "RegionDisabledException", { [p]: ["RegionDisabledException", 403], [m]: g, [h]: 403 }, [S], [0]], A.registerError(t.RegionDisabledException$, E.RegionDisabledException), t.errorTypeRegistries = [C, A];
  var R = [0, v, "accessKeySecretType", 8, 0], w = [0, v, "clientTokenType", 8, 0];
  t.AssumedRoleUser$ = [3, v, i, 0, ["AssumedRoleId", "Arn"], [0, 0], 2], t.AssumeRoleRequest$ = [3, v, "AssumeRoleRequest", 0, [l, d, a, s, r, "Tags", "TransitiveTagKeys", "ExternalId", "SerialNumber", "TokenCode", u, "ProvidedContexts"], [0, 0, () => I, 0, 1, () => T, 64, 0, 0, 0, 0, () => x], 2], t.AssumeRoleResponse$ = [3, v, "AssumeRoleResponse", 0, [o, i, c, u], [[() => t.Credentials$, 0], () => t.AssumedRoleUser$, 1, 0]], t.AssumeRoleWithWebIdentityRequest$ = [3, v, "AssumeRoleWithWebIdentityRequest", 0, [l, d, "WebIdentityToken", "ProviderId", a, s, r], [0, 0, [() => w, 0], 0, () => I, 0, 1], 3], t.AssumeRoleWithWebIdentityResponse$ = [3, v, "AssumeRoleWithWebIdentityResponse", 0, [o, "SubjectFromWebIdentityToken", i, c, "Provider", "Audience", u], [[() => t.Credentials$, 0], 0, () => t.AssumedRoleUser$, 1, 0, 0, 0]], t.Credentials$ = [3, v, o, 0, ["AccessKeyId", "SecretAccessKey", "SessionToken", "Expiration"], [0, [() => R, 0], 0, 4], 4], t.PolicyDescriptorType$ = [3, v, "PolicyDescriptorType", 0, ["arn"], [0]], t.ProvidedContext$ = [3, v, "ProvidedContext", 0, ["ProviderArn", "ContextAssertion"], [0, 0]], t.Tag$ = [3, v, "Tag", 0, ["Key", "Value"], [0, 0], 2];
  var I = [1, v, "policyDescriptorListType", 0, () => t.PolicyDescriptorType$], x = [1, v, "ProvidedContextsListType", 0, () => t.ProvidedContext$], T = [1, v, "tagListType", 0, () => t.Tag$];
  t.AssumeRole$ = [9, v, "AssumeRole", 0, () => t.AssumeRoleRequest$, () => t.AssumeRoleResponse$], t.AssumeRoleWithWebIdentity$ = [9, v, "AssumeRoleWithWebIdentity", 0, () => t.AssumeRoleWithWebIdentityRequest$, () => t.AssumeRoleWithWebIdentityResponse$];
}, 83170: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.STSClient = t.__Client = void 0;
  const i = n(50949), o = n(547), r = n(40619), s = n(54940), a = n(78520), c = n(55909), l = n(93353), d = n(58004), u = n(53804), p = n(39022), g = n(98175);
  Object.defineProperty(t, "__Client", { enumerable: true, get: function() {
    return g.Client;
  } });
  const m = n(63122), h = n(32470), S = n(77859), f = n(89967);
  class v extends g.Client {
    config;
    constructor(...[e2]) {
      const t2 = (0, S.getRuntimeConfig)(e2 || {});
      super(t2), this.initConfig = t2;
      const n2 = (0, h.resolveClientEndpointParameters)(t2), g2 = (0, s.resolveUserAgentConfig)(n2), v2 = (0, p.resolveRetryConfig)(g2), y = (0, a.resolveRegionConfig)(v2), E = (0, i.resolveHostHeaderConfig)(y), P = (0, u.resolveEndpointConfig)(E), C = (0, m.resolveHttpAuthSchemeConfig)(P), A = (0, f.resolveRuntimeExtensions)(C, e2?.extensions || []);
      this.config = A, this.middlewareStack.use((0, l.getSchemaSerdePlugin)(this.config)), this.middlewareStack.use((0, s.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, p.getRetryPlugin)(this.config)), this.middlewareStack.use((0, d.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, i.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, o.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, r.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, c.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, { httpAuthSchemeParametersProvider: m.defaultSTSHttpAuthSchemeParametersProvider, identityProviderConfigProvider: async (e3) => new c.DefaultIdentityProviderConfig({ "aws.auth#sigv4": e3.credentials, "aws.auth#sigv4a": e3.credentials }) })), this.middlewareStack.use((0, c.getHttpSigningPlugin)(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  t.STSClient = v;
}, 89967: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.resolveRuntimeExtensions = void 0;
  const i = n(72212), o = n(59344), r = n(98175), s = n(16901);
  t.resolveRuntimeExtensions = (e2, t2) => {
    const n2 = Object.assign((0, i.getAwsRegionExtensionConfiguration)(e2), (0, r.getDefaultExtensionConfiguration)(e2), (0, o.getHttpHandlerExtensionConfiguration)(e2), (0, s.getHttpAuthExtensionConfiguration)(e2));
    return t2.forEach((e3) => e3.configure(n2)), Object.assign(e2, (0, i.resolveAwsRegionExtensionConfiguration)(n2), (0, r.resolveDefaultRuntimeConfig)(n2), (0, o.resolveHttpHandlerRuntimeConfig)(n2), (0, s.resolveHttpAuthRuntimeConfig)(n2));
  };
}, 96960: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const i = n(58571), o = n(93664), r = n(6635), s = n(55909), a = n(98175), c = n(55264), l = n(3865), d = n(49125), u = n(63122), p = n(32780), g = n(83121);
  t.getRuntimeConfig = (e2) => ({ apiVersion: "2011-06-15", base64Decoder: e2?.base64Decoder ?? l.fromBase64, base64Encoder: e2?.base64Encoder ?? l.toBase64, disableHostPrefix: e2?.disableHostPrefix ?? false, endpointProvider: e2?.endpointProvider ?? p.defaultEndpointResolver, extensions: e2?.extensions ?? [], httpAuthSchemeProvider: e2?.httpAuthSchemeProvider ?? u.defaultSTSHttpAuthSchemeProvider, httpAuthSchemes: e2?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (e3) => e3.getIdentityProvider("aws.auth#sigv4"), signer: new i.AwsSdkSigV4Signer() }, { schemeId: "aws.auth#sigv4a", identityProvider: (e3) => e3.getIdentityProvider("aws.auth#sigv4a"), signer: new i.AwsSdkSigV4ASigner() }, { schemeId: "smithy.api#noAuth", identityProvider: (e3) => e3.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new s.NoAuthSigner() }], logger: e2?.logger ?? new a.NoOpLogger(), protocol: e2?.protocol ?? o.AwsQueryProtocol, protocolSettings: e2?.protocolSettings ?? { defaultNamespace: "com.amazonaws.sts", errorTypeRegistries: g.errorTypeRegistries, xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/", version: "2011-06-15", serviceTarget: "AWSSecurityTokenServiceV20110615" }, serviceId: e2?.serviceId ?? "STS", signerConstructor: e2?.signerConstructor ?? r.SignatureV4MultiRegion, urlParser: e2?.urlParser ?? c.parseUrl, utf8Decoder: e2?.utf8Decoder ?? d.fromUtf8, utf8Encoder: e2?.utf8Encoder ?? d.toUtf8 });
}, 97033: (e, t, n) => {
  var i = n(83170), o = n(98175), r = n(53804), s = n(32470), a = n(83121), c = n(10869), l = n(97464), d = n(72212), u = n(73856);
  class p extends o.Command.classBuilder().ep(s.commonParams).m(function(e2, t2, n2, i2) {
    return [r.getEndpointPlugin(n2, e2.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(a.AssumeRole$).build() {
  }
  class g extends o.Command.classBuilder().ep(s.commonParams).m(function(e2, t2, n2, i2) {
    return [r.getEndpointPlugin(n2, e2.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(a.AssumeRoleWithWebIdentity$).build() {
  }
  const m = { AssumeRoleCommand: p, AssumeRoleWithWebIdentityCommand: g };
  class h extends i.STSClient {
  }
  o.createAggregatedClient(m, h);
  const S = (e2) => {
    if ("string" == typeof e2?.Arn) {
      const t2 = e2.Arn.split(":");
      if (t2.length > 4 && "" !== t2[4]) return t2[4];
    }
  }, f = async (e2, t2, n2, i2 = {}) => {
    const o2 = "function" == typeof e2 ? await e2() : e2, r2 = "function" == typeof t2 ? await t2() : t2;
    let s2 = "";
    const a2 = o2 ?? r2 ?? (s2 = await d.stsRegionDefaultResolver(i2)());
    return n2?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${o2} (credential provider clientConfig)`, `${r2} (contextual client)`, `${s2} (STS default: AWS_REGION, profile region, or us-east-1)`), a2;
  }, v = (e2) => "h2" === e2?.metadata?.handlerProtocol, y = (e2, t2) => t2 ? class extends e2 {
    constructor(e3) {
      super(e3);
      for (const e4 of t2) this.middlewareStack.use(e4);
    }
  } : e2, E = (e2 = {}, t2) => /* @__PURE__ */ ((e3, t3) => {
    let n2, i2;
    return async (o2, r2) => {
      if (i2 = o2, !n2) {
        const { logger: o3 = e3?.parentClientConfig?.logger, profile: r3 = e3?.parentClientConfig?.profile, region: s3, requestHandler: a3 = e3?.parentClientConfig?.requestHandler, credentialProviderLogger: c3, userAgentAppId: l2 = e3?.parentClientConfig?.userAgentAppId } = e3, d3 = await f(s3, e3?.parentClientConfig?.region, c3, { logger: o3, profile: r3 }), u2 = !v(a3);
        n2 = new t3({ ...e3, userAgentAppId: l2, profile: r3, credentialDefaultProvider: () => async () => i2, region: d3, requestHandler: u2 ? a3 : void 0, logger: o3 });
      }
      const { Credentials: s2, AssumedRoleUser: a2 } = await n2.send(new p(r2));
      if (!s2 || !s2.AccessKeyId || !s2.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRole call with role ${r2.RoleArn}`);
      const c2 = S(a2), d2 = { accessKeyId: s2.AccessKeyId, secretAccessKey: s2.SecretAccessKey, sessionToken: s2.SessionToken, expiration: s2.Expiration, ...s2.CredentialScope && { credentialScope: s2.CredentialScope }, ...c2 && { accountId: c2 } };
      return l.setCredentialFeature(d2, "CREDENTIALS_STS_ASSUME_ROLE", "i"), d2;
    };
  })(e2, y(i.STSClient, t2)), P = (e2 = {}, t2) => /* @__PURE__ */ ((e3, t3) => {
    let n2;
    return async (i2) => {
      if (!n2) {
        const { logger: i3 = e3?.parentClientConfig?.logger, profile: o3 = e3?.parentClientConfig?.profile, region: r3, requestHandler: s3 = e3?.parentClientConfig?.requestHandler, credentialProviderLogger: a3, userAgentAppId: c2 = e3?.parentClientConfig?.userAgentAppId } = e3, l2 = await f(r3, e3?.parentClientConfig?.region, a3, { logger: i3, profile: o3 }), d2 = !v(s3);
        n2 = new t3({ ...e3, userAgentAppId: c2, profile: o3, region: l2, requestHandler: d2 ? s3 : void 0, logger: i3 });
      }
      const { Credentials: o2, AssumedRoleUser: r2 } = await n2.send(new g(i2));
      if (!o2 || !o2.AccessKeyId || !o2.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${i2.RoleArn}`);
      const s2 = S(r2), a2 = { accessKeyId: o2.AccessKeyId, secretAccessKey: o2.SecretAccessKey, sessionToken: o2.SessionToken, expiration: o2.Expiration, ...o2.CredentialScope && { credentialScope: o2.CredentialScope }, ...s2 && { accountId: s2 } };
      return s2 && l.setCredentialFeature(a2, "RESOLVED_ACCOUNT_ID", "T"), l.setCredentialFeature(a2, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), a2;
    };
  })(e2, y(i.STSClient, t2));
  t.$Command = o.Command, t.STSServiceException = u.STSServiceException, t.AssumeRoleCommand = p, t.AssumeRoleWithWebIdentityCommand = g, t.STS = h, t.decorateDefaultCredentialProvider = (e2) => (t2) => e2({ roleAssumer: E(t2), roleAssumerWithWebIdentity: P(t2), ...t2 }), t.getDefaultRoleAssumer = E, t.getDefaultRoleAssumerWithWebIdentity = P, Object.prototype.hasOwnProperty.call(i, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: i.__proto__ }), Object.keys(i).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = i[e2]);
  }), Object.prototype.hasOwnProperty.call(a, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: a.__proto__ }), Object.keys(a).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = a[e2]);
  }), Object.prototype.hasOwnProperty.call(c, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", { enumerable: true, value: c.__proto__ }), Object.keys(c).forEach(function(e2) {
    "default" === e2 || Object.prototype.hasOwnProperty.call(t, e2) || (t[e2] = c[e2]);
  });
} };
