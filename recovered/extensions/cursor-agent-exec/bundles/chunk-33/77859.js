// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 77859 range:16099..18721
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77859: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const i = n(16317).__importDefault(n(181)), o = n(97464), r = n(58571), s = n(67114), a = n(78520), c = n(55909), l = n(23296), d = n(39022), u = n(28311), p = n(64702), g = n(98175), m = n(87738), h = n(50941), S = n(18020), f = n(96960);
  t.getRuntimeConfig = (e2) => {
    (0, g.emitWarningIfUnsupportedVersion)(process.version);
    const t2 = (0, h.resolveDefaultsModeConfig)(e2), n2 = () => t2().then(g.loadConfigsForDefaultMode), v = (0, f.getRuntimeConfig)(e2);
    (0, o.emitWarningIfUnsupportedVersion)(process.version);
    const y = { profile: e2?.profile, logger: v.logger };
    return { ...v, ...e2, runtime: "node", defaultsMode: t2, authSchemePreference: e2?.authSchemePreference ?? (0, u.loadConfig)(r.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, y), bodyLengthChecker: e2?.bodyLengthChecker ?? m.calculateBodyLength, defaultUserAgentProvider: e2?.defaultUserAgentProvider ?? (0, s.createDefaultUserAgentProvider)({ serviceId: v.serviceId, clientVersion: i.default.version }), httpAuthSchemes: e2?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (t3) => t3.getIdentityProvider("aws.auth#sigv4") || (async (t4) => await e2.credentialDefaultProvider(t4?.__config || {})()), signer: new r.AwsSdkSigV4Signer() }, { schemeId: "aws.auth#sigv4a", identityProvider: (e3) => e3.getIdentityProvider("aws.auth#sigv4a"), signer: new r.AwsSdkSigV4ASigner() }, { schemeId: "smithy.api#noAuth", identityProvider: (e3) => e3.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new c.NoAuthSigner() }], maxAttempts: e2?.maxAttempts ?? (0, u.loadConfig)(d.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e2), region: e2?.region ?? (0, u.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, { ...a.NODE_REGION_CONFIG_FILE_OPTIONS, ...y }), requestHandler: p.NodeHttpHandler.create(e2?.requestHandler ?? n2), retryMode: e2?.retryMode ?? (0, u.loadConfig)({ ...d.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await n2()).retryMode || S.DEFAULT_RETRY_MODE }, e2), sha256: e2?.sha256 ?? l.Hash.bind(null, "sha256"), sigv4aSigningRegionSet: e2?.sigv4aSigningRegionSet ?? (0, u.loadConfig)(r.NODE_SIGV4A_CONFIG_OPTIONS, y), streamCollector: e2?.streamCollector ?? p.streamCollector, useDualstackEndpoint: e2?.useDualstackEndpoint ?? (0, u.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, y), useFipsEndpoint: e2?.useFipsEndpoint ?? (0, u.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, y), userAgentAppId: e2?.userAgentAppId ?? (0, u.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, y) };
  };
}