"use strict";
exports.id = 695, exports.ids = [695], exports.modules = { 93695: (e, t, n) => {
  n.r(t), n.d(t, { createPrivateInferenceLoopClient: () => p });
  var i = n(37949), a = n(33002), o = n(98691), r = n(82714), s = n(88031), c = n(94698);
  const d = (0, i.h)("agent-host:private-inference");
  async function p(e2) {
    const t2 = e2.piOptions.decision;
    if ("fail-closed" === t2.kind || "enrollment-pending" === t2.kind) return l(e2, t2.configErrorDetail);
    try {
      const n2 = await (0, s._x)({ configFile: t2.configFile, env: e2.piOptions.env, ...void 0 !== e2.piOptions.onCatalogParsed ? { onCatalogParsed: e2.piOptions.onCatalogParsed } : {} }), i2 = new r.Zy();
      return d.info((0, a.q6)(), "Private inference construction active"), (0, o.x)({ sessionProvider: (0, s.uK)(n2), catalog: n2, promptQualityCaptures: i2, getPrivacyModeEnum: () => e2.backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(), attachAttemptContext: e2.attachAttemptContext, ...void 0 === e2.backendClients.privateInferenceBackend || void 0 === e2.host.privateInferenceUsage ? {} : { usageAdmission: (0, c.$)(e2.backendClients.privateInferenceBackend, e2.host.privateInferenceUsage) } });
    } catch (t3) {
      const n2 = t3 instanceof Error ? t3.message : String(t3);
      return l(e2, n2);
    }
  }
  function l(e2, t2) {
    return d.info((0, a.q6)(), `Private inference unusable. Turns will fail: ${t2}`), (0, o.x)({ sessionProvider: void 0, catalog: void 0, configErrorDetail: t2, getPrivacyModeEnum: () => e2.backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(), attachAttemptContext: e2.attachAttemptContext });
  }
} };
