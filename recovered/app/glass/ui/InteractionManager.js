// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InteractionManager.js range:242119..243678
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.755Z
_vy = L({ "InteractionManager.js"() {
  "use strict";
  E(), uKu(), kpr = 10, m0o = 0, dKu = () => p0o() - m0o, hKu = class {
    constructor() {
      this._longestInteractionList = [], this._longestInteractionMap = /* @__PURE__ */ new Map();
    }
    _resetInteractions() {
      m0o = p0o(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear();
    }
    _estimateP98LongestInteraction() {
      const t = Math.min(this._longestInteractionList.length - 1, Math.floor(dKu() / 50));
      return this._longestInteractionList[t];
    }
    _processEntry(t) {
      if (this._onBeforeProcessingEntry?.(t), !(t.interactionId || t.entryType === "first-input")) return;
      const e = this._longestInteractionList.at(-1);
      let n = this._longestInteractionMap.get(t.interactionId);
      if (n || this._longestInteractionList.length < kpr || t.duration > e._latency) {
        if (n ? t.duration > n._latency ? (n.entries = [t], n._latency = t.duration) : t.duration === n._latency && t.startTime === n.entries[0].startTime && n.entries.push(t) : (n = { id: t.interactionId, entries: [t], _latency: t.duration }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort((i, r) => r._latency - i._latency), this._longestInteractionList.length > kpr) {
          const i = this._longestInteractionList.splice(kpr);
          for (const r of i) this._longestInteractionMap.delete(r.id);
        }
        this._onAfterProcessingINPCandidate?.(n);
      }
    }
  };
} }), g0o, 