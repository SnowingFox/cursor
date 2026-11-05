// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 22642 range:4460821..4461747
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22642: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.PRIVATE_INFERENCE_DISABLED = void 0, t.isPrivateInferenceLockedDown = function(e2) {
      return "disabled" !== e2;
    }, t.createPrivateInferenceEnablementSource = function(e2) {
      const t2 = /* @__PURE__ */ new Set();
      let r = e2.getEnablement();
      const n = () => {
        const n2 = e2.getEnablement();
        if (n2 !== r) {
          r = n2;
          for (const e3 of [...t2]) e3(n2);
        }
      }, s = e2.onDidChangeEnablement?.(n), o = e2.onDidChangeActiveTeamId?.(n);
      return { get state() {
        return e2.getEnablement();
      }, onDidChange: (e3) => (t2.add(e3), { dispose: () => t2.delete(e3) }), dispose() {
        s?.dispose(), o?.dispose(), t2.clear();
      } };
    }, t.PRIVATE_INFERENCE_DISABLED = { state: "disabled", onDidChange: () => ({ dispose: () => {
    } }) };
  }