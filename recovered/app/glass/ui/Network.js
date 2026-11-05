// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Network.js range:677330..680166
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.826Z
ted = L({ "Network.js"() {
  "use strict";
  E(), l_t(), _Sy(), Igr = class extends zJu {
    constructor(t, e) {
      super(t, e);
      const n = t?.networkConfig;
      this._option = t, this._initializeUrlConfig = new nEo(Dke._initialize, n?.initializeUrl, n?.api, n?.initializeFallbackUrls);
    }
    async fetchEvaluations(t, e, n, i, r) {
      const s = e ? x6t(e, "has_updates", "InitializeResponse") : null;
      let o = { user: i, hash: this._option?.networkConfig?.initializeHashAlgorithm ?? "djb2", deltasResponseRequested: false, full_checksum: null };
      if (s?.has_updates) {
        const a = s?.hash_used !== (this._option?.networkConfig?.initializeHashAlgorithm ?? "djb2");
        o = { ...o, sinceTime: r && !a ? s.time : 0, previousDerivedFields: "derived_fields" in s && r ? s.derived_fields : {}, deltasResponseRequested: true, full_checksum: s.full_checksum, partialUserMatchSinceTime: a ? 0 : s.time };
      }
      return this._fetchEvaluations(t, s, o, n);
    }
    async _fetchEvaluations(t, e, n, i) {
      const r = await this.post({ sdkKey: t, urlConfig: this._initializeUrlConfig, data: n, retries: 2, isStatsigEncodable: true, priority: i });
      if (r?.code === 204) return '{"has_updates": false}';
      if (r?.code !== 200) return r?.body ?? null;
      if (e?.has_updates !== true || r.body?.includes('"is_delta":true') !== true || n.deltasResponseRequested !== true) return r.body;
      const s = gSy(e, r.body);
      return typeof s == "string" ? s : this._fetchEvaluations(t, e, { ...n, ...s, deltasResponseRequested: false }, i);
    }
  };
} });
function xgr(t) {
  return t == null || t.disableExposureLog === false;
}
function AEo(t, e) {
  return e != null && !$Qu(t, e);
}
function bSy(t, e) {
  return t.value;
}
function ySy(t, e, n) {
  return t.getFeatureGate(e.gate_name, xgr(n) ? void 0 : OZn).value ? e.pass_value : e.fail_value;
}
function SSy(t, e, n, i) {
  const s = t.getDynamicConfig(e.config_name, xgr(i) ? void 0 : OZn).get(e.param_name);
  return AEo(s, n) ? n : s;
}
function kSy(t, e, n, i) {
  const s = t.getExperiment(e.experiment_name, xgr(i) ? void 0 : OZn).get(e.param_name);
  return AEo(s, n) ? n : s;
}
function wSy(t, e, n, i) {
  const s = t.getLayer(e.layer_name, xgr(i) ? void 0 : OZn).get(e.param_name);
  return AEo(s, n) ? n : s;
}
function ned(t, e, n) {
  return (i, r) => {
    if (e == null) return r;
    const s = e[i];
    if (s == null || r != null && jQu(r) !== s.param_type) return r;
    switch (s.ref_type) {
      case "static":
        return bSy(s, n);
      case "gate":
        return ySy(t, s, n);
      case "dynamic_config":
        return SSy(t, s, r, n);
      case "experiment":
        return kSy(t, s, r, n);
      case "layer":
        return wSy(t, s, r, n);
      default:
        return r;
    }
  };
}
var OZn, 