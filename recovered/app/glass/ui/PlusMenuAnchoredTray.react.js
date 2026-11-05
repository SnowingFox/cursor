// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PlusMenuAnchoredTray.react.js range:31375629..31377106
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.859Z
evw = L({ "PlusMenuAnchoredTray.react.js"() {
  "use strict";
  E(), $b(), Mt(), Mt(), Mt(), uSs(), Mt(), JDi(), Huw(), Kuw(), Mt(), d_(), pSs(), $In(), CMf(), Mt(), qIf(), JOl = { mcpStatusWarning: { kMwMTN: "glass-1izesbo", $$css: true }, mcpStatusError: { kMwMTN: "glass-1jh5svw", $$css: true } }, xMf = { default: null, warning: JOl.mcpStatusWarning, error: JOl.mcpStatusError }, AMf = "plus-custom-modes", e5l = ["user", "workspace", "team", "plugin", "extension"], t5l = null;
} });
import { useCallback as tvw } from "./react-runtime/react/esm-index-production.js";
import { jsx as nvw } from "./react-runtime/react/esm-jsx-runtime-production.js";
function RMf({ listboxId: t, triggerRef: e, fileInputRef: n, promptInputRef: i, modeItems: r, onModeSelect: s, onOpenModelPicker: o, modelRowDescription: a, filePickerMode: l, mcpServers: c, mcpConnectProgressByServerId: u, onMCPServerToggle: d, onMCPServerAction: h, onOpenMCPSettings: p, onOpenPluginDetails: g }) {
  return tvw((f, _, b) => nvw(Kfw, { buildSlashSections: b, filePickerMode: l, listboxId: t, mcpConnectProgressByServerId: u, mcpServers: c, modeItems: r, modelRowDescription: a, onDismiss: _, onFilePick: () => n.current?.click(), onMCPServerAction: h, onMCPServerToggle: d, onModeSelect: (y) => {
    s?.(y), i?.current?.editor?.commands.focus("end");
  }, onOpenMCPSettings: p, onOpenModelPicker: o, onOpenPluginDetails: g, shell: f, triggerRef: e }), [n, l, t, u, c, r, a, h, d, s, p, o, g, i, e]);
}
