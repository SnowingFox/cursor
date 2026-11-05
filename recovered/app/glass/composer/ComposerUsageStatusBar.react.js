// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerUsageStatusBar.react.js range:30158377..30161512
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, nl, Mt, Iw, Bs, gs, ta, Um, KMe, ZB, mHk, Tuf, Iuf, IHk
// wrapper-init: Nuf
// hoisted-owner: ComposerUsageStatusBar.js (app-out-vs-workbench-workbench-glass-main-js:5353); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Nuf = L({ "ComposerUsageStatusBar.react.js"() {
  "use strict";
  E(), nl(), Mt(), Iw(), Bs(), gs(), ta(), Um(), KMe(), ZB(), mHk(), Tuf(), Iuf(), IHk(), Duf = { "--cursor-icon-content": `"${gne("gauge")}"`, "--icon-size": "14px" };
} });
import NHk from "./react-runtime/react/esm-index-production.js";
import { flushSync as Luf } from "./react-runtime/react-dom/esm-index-production.js";
import LHk from "./react-runtime/react-dom/esm-client-production.js";
function OHk(t) {
  if (!t) return;
  const e = {};
  for (const [n, i] of Object.entries(t)) {
    const r = n.startsWith("--") ? n : n.replace(/-([a-z])/g, (s, o) => o.toUpperCase());
    e[r] = i;
  }
  return e;
}
function gXx(t) {
}
function Ouf(t) {
  try {
    Luf(() => {
      t.unmount();
    });
  } catch (e) {
    try {
      t.unmount();
    } catch (n) {
      queueMicrotask(() => {
        try {
          t.unmount();
        } catch (i) {
        }
      });
    }
  }
}
function Fuf(t) {
  const e = Gr(), n = jxi("auto_spillover_ui_config", "autoTitle"), i = jxi("auto_spillover_ui_config", "apiTitle"), r = { aiSettingsService: e.aiSettingsService, cursorAuthenticationService: e.cursorAuthenticationService, hoverService: e.hoverService, modelConfigService: e.modelConfigService, reactiveStorageService: e.reactiveStorageService, storageService: e.storageService, uiOverlayService: e.uiOverlayService, usageLimitPolicyStatusService: e.usageLimitPolicyStatusService, composerLogService: e.composerLogService }, s = vt(() => OHk(t.style));
  let o, a;
  const l = (c) => {
    if (o === void 0) return;
    const u = o;
    Luf(() => {
      u.render(NHk.createElement(Muf, c));
    });
  };
  return Cn(V_(() => [t.displayMessage, t.autoModelSelectedDisplayMessage, t.namedModelSelectedDisplayMessage, t.autoBucketModels, t.planUsage, t.spendLimitUsage, t.displayMode, t.usageDisplayEnabled, t.composerDataHandle?.(), s(), n(), i()], ([c, u, d, h, p, g, f, _, b, y, S, k]) => {
    l({ apiTitle: k, autoBucketModels: h, autoModelSelectedDisplayMessage: u, autoTitle: S, composerDataHandle: b, displayMessage: c, displayMode: f, namedModelSelectedDisplayMessage: d, planUsage: p, rootStyle: y, services: r, spendLimitUsage: g, usageDisplayEnabled: _ });
  }, { defer: true })), On(() => {
    if (a = void 0, o === void 0) return;
    const c = o;
    o = void 0, Ouf(c);
  }), (() => {
    var c = Buf();
    return zu((u) => {
      if (u !== void 0 && !(a === u && o !== void 0)) {
        if (o !== void 0) {
          const d = o;
          o = void 0, Ouf(d);
        }
        a = u, o = LHk.createRoot(u), l({ apiTitle: i(), autoBucketModels: t.autoBucketModels, autoModelSelectedDisplayMessage: t.autoModelSelectedDisplayMessage, autoTitle: n(), composerDataHandle: t.composerDataHandle?.(), displayMessage: t.displayMessage, displayMode: t.displayMode, namedModelSelectedDisplayMessage: t.namedModelSelectedDisplayMessage, planUsage: t.planUsage, rootStyle: s(), services: r, spendLimitUsage: t.spendLimitUsage, usageDisplayEnabled: t.usageDisplayEnabled });
      }
    }, c), c.style.setProperty("display", "contents"), c;
  })();
}
var Buf, 