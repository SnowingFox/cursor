// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ErrorBoundary.js range:649098..651304
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.656Z
wJu = L({ "ErrorBoundary.js"() {
  "use strict";
  E(), Nde(), mEo(), Sgr(), SJu = "https://statsigapi.net/v1/sdk_exception", gEo = "[Statsig] UnknownError", kJu = class {
    constructor(t, e, n, i) {
      this._sdkKey = t, this._options = e, this._emitter = n, this._lastSeenError = i, this._seen = /* @__PURE__ */ new Set();
    }
    wrap(t) {
      try {
        const e = t;
        xyy(e).forEach((n) => {
          const i = e[n];
          "$EB" in i || (e[n] = (...r) => this._capture(n, () => i.apply(t, r)), e[n].$EB = true);
        });
      } catch (e) {
        this._onError("eb:wrap", e);
      }
    }
    logError(t, e) {
      this._onError(t, e);
    }
    getLastSeenErrorAndReset() {
      const t = this._lastSeenError;
      return this._lastSeenError = void 0, t ?? null;
    }
    attachErrorIfNoneExists(t) {
      this._lastSeenError || (this._lastSeenError = yJu(bJu(t)));
    }
    _capture(t, e) {
      try {
        const n = e();
        return n && n instanceof Promise ? n.catch((i) => this._onError(t, i)) : n;
      } catch (n) {
        return this._onError(t, n), null;
      }
    }
    _onError(t, e) {
      try {
        QR.warn(`Caught error in ${t}`, { error: e }), (async () => {
          const i = e || Error(gEo), r = i instanceof Error, s = r ? i.name : "No Name";
          if (this._lastSeenError = yJu(bJu(i)), this._seen.has(s)) return;
          if (this._seen.add(s), this._options?.networkConfig?.preventAllNetworkTraffic) {
            this._emitter?.({ name: "error", error: e, tag: t });
            return;
          }
          const o = NZn._get(this._sdkKey), a = aEo.get(), l = r ? i.stack : Iyy(i), c = { tag: t, exception: s, info: l, statsigOptions: Ayy(this._options), ...a, sdkType: o };
          await (this._options?.networkConfig?.networkOverrideFunc ?? fetch)(SJu, { method: "POST", headers: { "STATSIG-API-KEY": this._sdkKey, "STATSIG-SDK-TYPE": String(o), "STATSIG-SDK-VERSION": String(a.sdkVersion), "Content-Type": "application/json" }, body: JSON.stringify(c) }), this._emitter?.({ name: "error", error: e, tag: t });
        })().then(() => {
        }).catch(() => {
        });
      } catch {
      }
    }
  };
} }), 