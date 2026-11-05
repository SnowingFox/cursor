// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/538.js sha256:59937a807dffd12f7cc46b403bdda955eb0b59336adfd7cbeb5ae1e50bf20f3d
// module: 26732 range:4944..6897
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
26732: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const n = o(16317).__importDefault(o(181)), r = o(97464), s = o(58571), i = o(67114), a = o(78520), c = o(23296), d = o(39022), u = o(28311), l = o(64702), p = o(98175), h = o(87738), g = o(50941), S = o(18020), f = o(89293);
  t.getRuntimeConfig = (e2) => {
    (0, p.emitWarningIfUnsupportedVersion)(process.version);
    const t2 = (0, g.resolveDefaultsModeConfig)(e2), o2 = () => t2().then(p.loadConfigsForDefaultMode), m = (0, f.getRuntimeConfig)(e2);
    (0, r.emitWarningIfUnsupportedVersion)(process.version);
    const E = { profile: e2?.profile, logger: m.logger };
    return { ...m, ...e2, runtime: "node", defaultsMode: t2, authSchemePreference: e2?.authSchemePreference ?? (0, u.loadConfig)(s.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, E), bodyLengthChecker: e2?.bodyLengthChecker ?? h.calculateBodyLength, defaultUserAgentProvider: e2?.defaultUserAgentProvider ?? (0, i.createDefaultUserAgentProvider)({ serviceId: m.serviceId, clientVersion: n.default.version }), maxAttempts: e2?.maxAttempts ?? (0, u.loadConfig)(d.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e2), region: e2?.region ?? (0, u.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, { ...a.NODE_REGION_CONFIG_FILE_OPTIONS, ...E }), requestHandler: l.NodeHttpHandler.create(e2?.requestHandler ?? o2), retryMode: e2?.retryMode ?? (0, u.loadConfig)({ ...d.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await o2()).retryMode || S.DEFAULT_RETRY_MODE }, e2), sha256: e2?.sha256 ?? c.Hash.bind(null, "sha256"), streamCollector: e2?.streamCollector ?? l.streamCollector, useDualstackEndpoint: e2?.useDualstackEndpoint ?? (0, u.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, E), useFipsEndpoint: e2?.useFipsEndpoint ?? (0, u.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, E), userAgentAppId: e2?.userAgentAppId ?? (0, u.loadConfig)(i.NODE_APP_ID_CONFIG_OPTIONS, E) };
  };
}