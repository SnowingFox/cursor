// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/709.js sha256:178b16cc9cd8c06565bc9aac7b10691bae0eb6d67807efc2887d6c205e5f61c7
// module: 54335 range:12295..14248
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54335: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const o = n(16317).__importDefault(n(181)), r = n(97464), i = n(58571), s = n(67114), a = n(78520), c = n(23296), u = n(39022), d = n(28311), p = n(64702), l = n(98175), g = n(87738), h = n(50941), E = n(18020), S = n(84076);
  t.getRuntimeConfig = (e2) => {
    (0, l.emitWarningIfUnsupportedVersion)(process.version);
    const t2 = (0, h.resolveDefaultsModeConfig)(e2), n2 = () => t2().then(l.loadConfigsForDefaultMode), f = (0, S.getRuntimeConfig)(e2);
    (0, r.emitWarningIfUnsupportedVersion)(process.version);
    const m = { profile: e2?.profile, logger: f.logger };
    return { ...f, ...e2, runtime: "node", defaultsMode: t2, authSchemePreference: e2?.authSchemePreference ?? (0, d.loadConfig)(i.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, m), bodyLengthChecker: e2?.bodyLengthChecker ?? g.calculateBodyLength, defaultUserAgentProvider: e2?.defaultUserAgentProvider ?? (0, s.createDefaultUserAgentProvider)({ serviceId: f.serviceId, clientVersion: o.default.version }), maxAttempts: e2?.maxAttempts ?? (0, d.loadConfig)(u.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e2), region: e2?.region ?? (0, d.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, { ...a.NODE_REGION_CONFIG_FILE_OPTIONS, ...m }), requestHandler: p.NodeHttpHandler.create(e2?.requestHandler ?? n2), retryMode: e2?.retryMode ?? (0, d.loadConfig)({ ...u.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await n2()).retryMode || E.DEFAULT_RETRY_MODE }, e2), sha256: e2?.sha256 ?? c.Hash.bind(null, "sha256"), streamCollector: e2?.streamCollector ?? p.streamCollector, useDualstackEndpoint: e2?.useDualstackEndpoint ?? (0, d.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, m), useFipsEndpoint: e2?.useFipsEndpoint ?? (0, d.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, m), userAgentAppId: e2?.userAgentAppId ?? (0, d.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, m) };
  };
}