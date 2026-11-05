// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceSettingsDropdown.js range:29377939..29380234
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.210Z
// wrapper: L4k deps:21 [E, at, pi, gs, ta, Ole, vo, Ss, VIn, iye, y9e, N4k]
// declarations: F4k
// anchors: voice-settings-dropdown-trigger, voice-settings-menu, esm-jsx-runtime-production, cursor-icon-accent-primary
// group: settings
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
L4k = L({ "VoiceSettingsDropdown.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), gs(), ta(), Ole(), vo(), Ss(), VIn(), iye(), y9e(), N4k(), rtf = wt('<button class=voice-settings-dropdown-trigger title="Voice settings"><i>'), stf = () => {
    const t = Gr(), [e, n, i] = nye(), [r, s] = Wt("bottom-left"), [o, a] = YB(t.storageService, "voiceInputLanguage"), l = (h) => {
      a(h), i();
    }, c = () => {
      const h = {};
      Object.entries(vel).forEach(([g, f]) => {
        const _ = f.name.split("(")[0].trim();
        h[_] || (h[_] = []), h[_].push({ code: g, name: f.name });
      });
      const p = [];
      return Object.entries(h).forEach(([g, f]) => {
        g === "English" ? p.push({ code: "en-US", name: "English" }) : f.length === 1 ? p.push({ code: f[0].code, name: g }) : p.push(...f);
      }), p.sort((g, f) => g.name.localeCompare(f.name));
    }, u = vt(() => {
      const h = c(), p = o() ?? uWt, g = h.map(({ code: f, name: _ }) => ({ id: f, title: _, onClick: () => l(f), showType: p === f || f === "en-US" && p.startsWith("en-") ? "check" : void 0 }));
      return [{ type: "items", items: [{ id: "auto-detect", title: "Auto-Detect", onClick: () => l(uWt), showType: p === uWt ? "check" : void 0 }] }, { type: "divider" }, { type: "items", items: g }];
    }), d = (h) => {
      const g = h.currentTarget.getBoundingClientRect(), f = g.top < t.window.innerHeight / 2;
      s(f ? "top-left" : "bottom-left"), n({ x: g.left, y: f ? g.bottom + 4 : g.top - 4 });
    };
    return [(() => {
      var h = rtf(), p = h.firstChild;
      return h.addEventListener("click", d), xn(() => Er(p, Gn.asClassName(yt.chevronDown))), h;
    })(), zr(() => zr(() => !!e())() && Ee(vMe, { get position() {
      return e();
    }, id: "voice-settings-menu", onClose: i, get sections() {
      return u();
    }, get anchor() {
      return r();
    }, width: 200, maxHeight: 300 }))];
  };
} });
import { jsx as O4k } from "./react-runtime/react/esm-jsx-runtime-production.js";
function F4k({ stream: t }) {
  return O4k(Ywn, { barColor: "var(--cursor-icon-accent-primary)", barCount: 9, barGap: 1.5, barHeight: 2, barWidth: 2, fadeEdges: false, fallback: "static", height: 10, mode: "scroll", noiseFloor: "adaptive", scrollSpeed: 88, stream: t });
}
