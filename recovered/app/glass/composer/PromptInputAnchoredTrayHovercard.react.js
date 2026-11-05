// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputAnchoredTrayHovercard.react.js range:31357593..31360880
// basis: nls-exact + esbuild-wrapper
// confidence: B
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, kl, Bt, Mt, e3i, d_, vMf
// wrapper-init: xfw
// hoisted-owner: promptInputAnchoredTrayRowPresentation.react.js (app-out-vs-workbench-workbench-glass-main-js:5832); trailing declarations ownership inferred from segment adjacency
// path: src/vs/workbench/contrib/composer/browser/promptInputTrays/PromptInputAnchoredTrayHovercard.react.tsx
// renamed: none

xfw = L({ "PromptInputAnchoredTrayHovercard.react.js"() {
  "use strict";
  E(), kl(), Bt(), Mt(), e3i(), d_(), vMf(), _Mf = 0, XOl = { surface: { kzqmXN: "glass-1dz1jew", kskxy: "glass-uyqlj2", kORKVm: "glass-1odjw0f", k5wCbM: "glass-1597r2g", k6w4Gs: "glass-xkn5u1", $$css: true }, fileTreeSurface: { kzqmXN: "glass-ezivpi", k7Eaqz: "glass-1u2d2a2", ks0D6T: "glass-35r3tr", kXHlph: "glass-6ikm8r", $$css: true } };
} });
import { jsx as Bct } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ZOl() {
  return "glass-9mox06 glass-1pd3egz";
}
function Afw(t) {
  return t.labelMatch === void 0 || t.labelMatch.length === 0 ? t.name : i6e(t.name, t.labelMatch, ZOl());
}
function Rfw(t) {
  if (t.searchDescription !== void 0) {
    const n = Ckn(t.searchDescription.text, t.searchDescription.matches);
    return i6e(n.text, n.matches, ZOl());
  }
  if (t.description === void 0) return;
  if (t.descriptionMatch === void 0 || t.descriptionMatch.length === 0) return t.descriptionIsSearchExcerpt ? t.description : OY1(t.description);
  const e = Ckn(t.description, t.descriptionMatch);
  return i6e(e.text, e.matches, ZOl());
}
function Pfw(t, e) {
  if (e) switch (t.type) {
    case "file":
      return "File";
    case "code":
      return "Code";
    case "folder":
      return "Folder";
    case "doc":
      return "Docs";
    case "cursorRule":
      return "Rule";
    case "terminal":
      return "Terminal";
    case "branch":
      return "Branch";
    case "browser":
      return "Browser";
    case "chat":
      return "Chat";
    case "mcp":
      return "MCP";
    case "canvas":
      return "Canvas";
    case "clipboard":
      return "Clipboard";
    case "subagent":
      return "Subagent";
    case "mode":
      return "Mode";
    case "skill":
      return "Skill";
    case "command":
      return "Command";
    case "action":
      return "Action";
    case "reference":
      return "Reference";
    default:
      return t.type;
  }
}
function Mfw(t, e = false) {
  if (t.type === "mention") {
    const n = Ces(t);
    return n ? Pfw(n, e) : e ? "Mention" : void 0;
  }
  return kfw(t, e);
}
function Dfw(t) {
  if (t.isPinned) return Bct(zt, { "aria-label": "Pinned", color: "tertiary", name: "pin", size: "sm", variant: "filled" });
  if (t.isTeamTrending) return Bct(e$, { size: "sm", variant: "accent", children: "Trending" });
}
function Nfw({ item: t }) {
  if (t.icon === null) return null;
  if (t.icon !== void 0) return t.icon;
  const e = nGe(t.iconAppearance);
  if (e) return Bct(hae, { size: "sm", value: e });
  if (t.type === "command" && xes(t)) return Bct(zt, { color: "primary", name: "cursor-logo", size: "sm", variant: "filled" });
  if (t.leadingIcon != null && typeof t.leadingIcon != "string") return t.leadingIcon;
  if (typeof t.leadingIcon == "string" && g_e(t.leadingIcon)) return Bct(zt, { color: "tertiary", name: t.leadingIcon, size: "sm" });
  const n = t.type === "subagent" ? Bct(zt, { color: "tertiary", name: "agent", size: "sm" }) : xes(t) ? Bct(zt, { color: "primary", name: "cursor-logo", size: "sm", variant: "filled" }) : Bct(zt, { color: "tertiary", name: "cube", size: "sm" }), i = t.pluginAttribution?.logoUrl;
  return i !== void 0 && i !== "" ? Bct(zmi, { fallback: n, src: i }) : n;
}
