// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/478.js sha256:03d8c888857521b5af31d5761e74aee40e5eecd292b9b059b8748be5231d88b9
// module: 50846 range:17947..19900
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50846: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const o = r(16317).__importDefault(r(181)), n = r(97464), i = r(58571), s = r(67114), c = r(78520), a = r(23296), p = r(39022), d = r(28311), l = r(64702), u = r(98175), h = r(87738), E = r(50941), S = r(18020), g = r(14167);
  t.getRuntimeConfig = (e2) => {
    (0, u.emitWarningIfUnsupportedVersion)(process.version);
    const t2 = (0, E.resolveDefaultsModeConfig)(e2), r2 = () => t2().then(u.loadConfigsForDefaultMode), x = (0, g.getRuntimeConfig)(e2);
    (0, n.emitWarningIfUnsupportedVersion)(process.version);
    const f = { profile: e2?.profile, logger: x.logger };
    return { ...x, ...e2, runtime: "node", defaultsMode: t2, authSchemePreference: e2?.authSchemePreference ?? (0, d.loadConfig)(i.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, f), bodyLengthChecker: e2?.bodyLengthChecker ?? h.calculateBodyLength, defaultUserAgentProvider: e2?.defaultUserAgentProvider ?? (0, s.createDefaultUserAgentProvider)({ serviceId: x.serviceId, clientVersion: o.default.version }), maxAttempts: e2?.maxAttempts ?? (0, d.loadConfig)(p.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e2), region: e2?.region ?? (0, d.loadConfig)(c.NODE_REGION_CONFIG_OPTIONS, { ...c.NODE_REGION_CONFIG_FILE_OPTIONS, ...f }), requestHandler: l.NodeHttpHandler.create(e2?.requestHandler ?? r2), retryMode: e2?.retryMode ?? (0, d.loadConfig)({ ...p.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await r2()).retryMode || S.DEFAULT_RETRY_MODE }, e2), sha256: e2?.sha256 ?? a.Hash.bind(null, "sha256"), streamCollector: e2?.streamCollector ?? l.streamCollector, useDualstackEndpoint: e2?.useDualstackEndpoint ?? (0, d.loadConfig)(c.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, f), useFipsEndpoint: e2?.useFipsEndpoint ?? (0, d.loadConfig)(c.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, f), userAgentAppId: e2?.userAgentAppId ?? (0, d.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, f) };
  };
}