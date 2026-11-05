// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EvaluationStore.js range:672920..677236
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.657Z
mSy = L({ "EvaluationStore.js"() {
  "use strict";
  E(), l_t(), JJu = class {
    constructor(t) {
      this._sdkKey = t, this._rawValues = null, this._values = null, this._source = "Uninitialized", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null, this._warnings = /* @__PURE__ */ new Set();
    }
    reset() {
      this._values = null, this._rawValues = null, this._source = "Loading", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null;
    }
    finalize() {
      this._values || (this._source = "NoValues");
    }
    getValues() {
      return this._rawValues ? x6t(this._rawValues, "has_updates", "EvaluationStoreValues") : null;
    }
    setValues(t, e) {
      if (!t) return false;
      const n = x6t(t.data, "has_updates", "EvaluationResponse");
      return n == null ? false : (this._source = t.source, n?.has_updates !== true || (this._rawValues = t.data, this._lcut = n.time, this._receivedAt = t.receivedAt, this._values = n, this._bootstrapMetadata = this._extractBootstrapMetadata(t.source, n), t.source && n.user && this._setWarningState(e, n), bEo.setFlags(this._sdkKey, n.sdk_flags ?? {})), true);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(t) {
      return this._getDetailedStoreResult(this._values?.feature_gates, t);
    }
    getConfig(t) {
      return this._getDetailedStoreResult(this._values?.dynamic_configs, t);
    }
    getConfigList() {
      return this._values?.dynamic_configs ? Object.values(this._values.dynamic_configs).map((t) => t.name) : [];
    }
    getLayer(t) {
      return this._getDetailedStoreResult(this._values?.layer_configs, t);
    }
    getParamStore(t) {
      return this._getDetailedStoreResult(this._values?.param_stores, t);
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      return this._values?.exposures;
    }
    _extractBootstrapMetadata(t, e) {
      if (t !== "Bootstrap") return null;
      const n = {};
      return e.user && (n.user = e.user), e.sdkInfo && (n.generatorSDKInfo = e.sdkInfo), n.lcut = e.time, n;
    }
    _getDetailedStoreResult(t, e) {
      let n = null;
      return t && (n = t[e] ? t[e] : t[s_t(e)]), { result: n, details: this._getDetails(n == null) };
    }
    _setWarningState(t, e) {
      const n = h$e.get(this._sdkKey);
      if (t.customIDs?.stableID !== n && (t.customIDs?.stableID || n)) {
        this._warnings.add("StableIDMismatch");
        return;
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues") return { reason: this._source };
      const t = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return this._warnings.size > 0 && (t.warnings = Array.from(this._warnings)), t;
    }
    _getDetails(t) {
      const e = this.getCurrentSourceDetails();
      let n = e.reason;
      const i = e.warnings ?? [];
      this._source === "Bootstrap" && i.length > 0 && (n = n + i[0]), n !== "Uninitialized" && n !== "NoValues" && (n = `${n}:${t ? "Unrecognized" : "Recognized"}`);
      const r = this._source === "Bootstrap" ? this._bootstrapMetadata ?? void 0 : void 0;
      return r && (e.bootstrapMetadata = r), { ...e, reason: n };
    }
  };
} });
function gSy(t, e) {
  const n = x6t(e, "checksum", "DeltasEvaluationResponse");
  if (!n) return { hadBadDeltaChecksum: true };
  const i = fSy(t, n), r = vSy(i), s = KTo({ feature_gates: r.feature_gates, dynamic_configs: r.dynamic_configs, layer_configs: r.layer_configs }, eed);
  return s === n.checksumV2 ? JSON.stringify(r) : { hadBadDeltaChecksum: true, badChecksum: s, badMergedConfigs: r, badFullResponse: n.deltas_full_response };
}
function fSy(t, e) {
  return { ...t, ...e, feature_gates: { ...t.feature_gates, ...e.feature_gates }, layer_configs: { ...t.layer_configs, ...e.layer_configs }, dynamic_configs: { ...t.dynamic_configs, ...e.dynamic_configs } };
}
function vSy(t) {
  const e = t;
  return xEo(t.deleted_gates, e.feature_gates), delete e.deleted_gates, xEo(t.deleted_configs, e.dynamic_configs), delete e.deleted_configs, xEo(t.deleted_layers, e.layer_configs), delete e.deleted_layers, e;
}
function xEo(t, e) {
  t?.forEach((n) => {
    delete e[n];
  });
}
var eed, 