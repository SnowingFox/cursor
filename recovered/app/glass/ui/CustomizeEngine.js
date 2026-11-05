// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeEngine.js range:22954771..22959384
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.586Z
ZWm = L({ "CustomizeEngine.js"() {
  "use strict";
  E(), Mt(), J7(), uXa(), i$m(), $ot(), Hot(), NHm(), iCi(), tQ1(), mQ1(), yQ1(), wQ1(), EQ1(), RQ1(), RWm(), rJ1(), tts = { root: { "--ui-customize-view-background": "cursor-ui-1q4akjn", k1xSpc: "cursor-ui-78zum5", kzQI83: "cursor-ui-1iyjqo2", kmuXW: "cursor-ui-s83m0k", kCS8Yb: "cursor-ui-1r8uery", kXwgrk: "cursor-ui-dt5ytf", kZKoxP: "cursor-ui-5yr21d", kAzted: "cursor-ui-2lwn1j", k7Eaqz: "cursor-ui-euugli", kzqmXN: "cursor-ui-h8yej3", kVQacm: "cursor-ui-b3r6kr", kMwMTN: "cursor-ui-1wd3ewq", kWkggS: "cursor-ui-jbqb8w", kq1mRn: "cursor-ui-os9n3", kJU2UC: "cursor-ui-45a3qv", k3UPjn: "cursor-ui-8j35wa", kccURN: "cursor-ui-1e8nljl", k9FuyJ: "cursor-ui-19y1ask", kAnP9W: "cursor-ui-bpcxxz", kHrYDJ: "cursor-ui-kmi6va", $$css: true }, leaderboardWorkspaceOptionIcon: { kMwMTN: "cursor-ui-19aaqeu", $$css: true }, inlineSelector: { k1xSpc: "cursor-ui-t0psk2", kXLuUW: "cursor-ui-11njtxf", kLKAdn: "cursor-ui-exx8yu", kGO01o: "cursor-ui-18d9i69", kZCmMZ: "cursor-ui-tw3t59", kwRFfy: "cursor-ui-1tlft3r", kGuDYH: "cursor-ui-1qlqyl8", kLWn49: "cursor-ui-15bjb6t", k63SB2: "cursor-ui-1pd3egz", kMwMTN: "cursor-ui-1wd3ewq", kWkggS: "cursor-ui-jbqb8w cursor-ui-1iuyybk cursor-ui-10meh72", $$css: true } }, VZa = "default", qWm = [{ id: "plugins", label: "Plugins" }, { id: "skills", label: "Skills" }, { id: "tools", label: "MCPs" }, { id: "subagents", label: "Subagents" }, { id: "commands", label: "Commands" }], zWm = "skills", VWm = "Add a workspace to Cursor to see popular skills, MCPs, subagents, and commands here.", KWm = 420, YWm = 100, XWm = { color: "var(--vscode-descriptionForeground)" };
} });
import { jsx as QWm } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { use as NJ1, createContext as LJ1, Children as OJ1, isValidElement as FJ1 } from "./react-runtime/react/esm-index-production.js";
function ile(t) {
  const e = (n) => null;
  return e.displayName = t, e;
}
function nts(t) {
  const e = [];
  for (const n of OJ1.toArray(t)) if (!(n == null || typeof n == "boolean")) {
    if (!FJ1(n)) throw new Error("Customize parts must be Customize.* elements; found a non-element child.");
    e.push(n);
  }
  return e;
}
function Lqt(t, e) {
  return t.type === e ? t.props : void 0;
}
function its(t, e) {
  return nts(t).some((n) => n.type === e);
}
function BJ1(t) {
  const e = { leaderboardWorkspaceSelector: false, manageSingleScope: false, manageHookLogDetailsEnabled: false, detailGlassChrome: false, globalSearch: false, teamMarketplaceAdmin: false, teamMarketplaceMcpAuthoring: false, teamMarketplaceOriginDistribution: false, teamMarketplaceUserPublish: false };
  for (const n of nts(t)) {
    const i = Lqt(n, YZa);
    if (i !== void 0) {
      e.controller = i;
      continue;
    }
    const r = Lqt(n, XZa);
    if (r !== void 0) {
      for (const l of nts(r.children)) {
        const c = Lqt(l, QZa);
        if (c === void 0) throw new Error("Customize.Browse accepts only Customize.Leaderboard children.");
        e.leaderboard = c, e.leaderboardWorkspaceSelector = its(c.children, ZZa);
      }
      continue;
    }
    const s = Lqt(n, tQa);
    if (s !== void 0) {
      e.manage = s, e.manageSingleScope = its(s.children, JZa), e.manageHookLogDetailsEnabled = its(s.children, eQa);
      continue;
    }
    const o = Lqt(n, iQa);
    if (o !== void 0) {
      e.detail = o, e.detailGlassChrome = its(o.children, nQa);
      continue;
    }
    if (n.type === rQa) {
      e.globalSearch = true;
      continue;
    }
    const a = Lqt(n, uQa);
    if (a !== void 0) {
      e.teamMarketplace = a;
      for (const l of nts(a.children)) {
        if (l.type === sQa) {
          e.teamMarketplaceAdmin = true;
          continue;
        }
        if (l.type === oQa) {
          e.teamMarketplaceMcpAuthoring = true;
          continue;
        }
        const c = Lqt(l, aQa);
        if (c !== void 0) {
          e.teamMarketplaceAccessGrants = c;
          continue;
        }
        if (l.type === lQa) {
          e.teamMarketplaceOriginDistribution = true;
          continue;
        }
        if (l.type === cQa) {
          e.teamMarketplaceUserPublish = true;
          continue;
        }
        throw new Error("Customize.TeamMarketplace accepts only its Admin, McpAuthoring, AccessGrants, OriginDistribution, and UserPublish children.");
      }
      continue;
    }
    throw new Error("Customize.Root accepts only Customize.* part elements as children.");
  }
  return e;
}
var KZa, YZa, XZa, ZZa, QZa, JZa, eQa, tQa, nQa, iQa, rQa, sQa, oQa, aQa, lQa, cQa, uQa, JWm, eGm, yX, 