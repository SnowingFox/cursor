// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2642 range:713930..714872
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2642: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.PRIVATE_INFERENCE_DISABLED = void 0, e2.isPrivateInferenceLockedDown = function(t3) {
      return "disabled" !== t3;
    }, e2.createPrivateInferenceEnablementSource = function(t3) {
      const e3 = /* @__PURE__ */ new Set();
      let r2 = t3.getEnablement();
      const n2 = () => {
        const n3 = t3.getEnablement();
        if (n3 !== r2) {
          r2 = n3;
          for (const t4 of [...e3]) t4(n3);
        }
      }, s2 = t3.onDidChangeEnablement?.(n2), i2 = t3.onDidChangeActiveTeamId?.(n2);
      return { get state() {
        return t3.getEnablement();
      }, onDidChange: (t4) => (e3.add(t4), { dispose: () => e3.delete(t4) }), dispose() {
        s2?.dispose(), i2?.dispose(), e3.clear();
      } };
    }, e2.PRIVATE_INFERENCE_DISABLED = { state: "disabled", onDidChange: () => ({ dispose: () => {
    } }) };
  }