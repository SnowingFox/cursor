// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarketplaceScopeSelect.js range:16978519..16982968
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.115Z
// wrapper: xt1 deps:2 [E, Obn]
// declarations: At1
// anchors: esm-jsx-runtime-production, esm-index-production
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
xt1 = L({ "MarketplaceScopeSelect.js"() {
  "use strict";
  E(), Obn(), $hp = [{ value: "user", label: "User" }, { value: "team", label: "Team" }];
} });
import { jsxs as c6e, Fragment as Hhp, jsx as $z } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as q$t, useId as cEa, useCallback as x7r } from "./react-runtime/react/esm-index-production.js";
function At1({ teamName: t, directoryGroups: e = [], organizationGroups: n = [], enableAccessGrants: i = false, onCancel: r, onPickLocalFolder: s, onSubmit: o }) {
  const [a, l] = q$t("user"), [c, u] = q$t(""), [d, h] = q$t(""), [p, g] = q$t([]), [f, _] = q$t([]), [b, y] = q$t(false), [S, k] = q$t(null), C = cEa(), T = cEa(), I = cEa(), A = a === "user", P = s !== void 0, M = P && d.trim().length > 0, O = M || c.trim().length > 0, N = aEa(i, n, p), U = x7r((G) => {
    g((q) => q.includes(G) ? q.filter((K) => K !== G) : [...q, G]);
  }, []), j = x7r((G) => {
    _((q) => q.includes(G) ? q.filter((K) => K !== G) : [...q, G]);
  }, []), $ = x7r(() => {
    s !== void 0 && s().then((G) => {
      typeof G == "string" && G.length > 0 && (h(G), k(null));
    });
  }, [s]), H = x7r(async () => {
    if (!(!O || b)) {
      y(true), k(null);
      try {
        M ? await o({ scope: "user", mode: "import", localPath: d.trim() }) : await o({ scope: a, mode: "import", gitUrl: c.trim(), ...a === "team" ? N ? { organizationGroupIds: f } : { directoryGroupIds: p } : {} });
      } catch (G) {
        k(G instanceof Error ? G.message : "Failed to import marketplace."), y(false);
      }
    }
  }, [O, b, M, o, a, c, d, N, f, p]);
  return c6e(Hhp, { children: [$z(Xr.Content, { children: c6e("div", { className: "ui-78zum5 ui-dt5ytf ui-1jlwbde", children: [c6e("div", { className: "ui-78zum5 ui-dt5ytf ui-pkkfsy", children: [$z("label", { htmlFor: T, className: "ui-11wthnw ui-1ja60sm ui-19aaqeu", children: "Repository" }), $z(nI, { id: T, type: "text", placeholder: "Marketplace repository URL", value: c, onChange: (G) => {
    u(G.target.value), k(null);
  }, onKeyDown: (G) => {
    G.key === "Enter" && O && !b && H();
  }, size: "lg", disabled: b, autoFocus: true })] }), c6e("div", { className: "ui-78zum5 ui-1cy8zhl ui-1jlwbde", children: [c6e("div", { className: "ui-78zum5 ui-dt5ytf ui-pkkfsy ui-98rzlu ui-euugli", children: [$z("label", { htmlFor: C, className: "ui-11wthnw ui-1ja60sm ui-19aaqeu", children: "Scope" }), $z("div", { className: "ui-78zum5 ui-1cy8zhl", children: $z(It1, { id: C, scope: a, onScopeChange: l, disabled: b }) })] }), A ? null : c6e("div", { className: "ui-78zum5 ui-dt5ytf ui-pkkfsy ui-98rzlu ui-euugli", children: [$z("span", { className: "ui-11wthnw ui-1ja60sm ui-19aaqeu", children: "Team Access" }), $z("div", { className: "ui-78zum5 ui-1cy8zhl", children: N ? $z(W$t, { directoryGroups: n.map((G) => ({ id: G.id, name: G.name, memberCount: G.memberCount ?? 0 })), selectedGroupIds: f, onToggleGroupId: j, onSelectAll: () => _([]), teamName: t, disabled: b }) : $z(W$t, { directoryGroups: e, selectedGroupIds: p, onToggleGroupId: U, onSelectAll: () => g([]), teamName: t, disabled: b }) })] })] }), P ? c6e(Hhp, { children: [c6e("div", { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-1om1abp ui-1qaq26d", children: [$z("span", { className: "ui-98rzlu ui-jm9jq1 ui-1m4ooaa" }), $z("span", { className: "ui-y5h43f ui-19ji09o ui-4b2ntj ui-tvhhri ui-bac8wx", children: "or" }), $z("span", { className: "ui-98rzlu ui-jm9jq1 ui-1m4ooaa" })] }), c6e("div", { className: "ui-78zum5 ui-dt5ytf ui-pkkfsy", children: [$z("label", { htmlFor: I, className: "ui-11wthnw ui-1ja60sm ui-19aaqeu", children: "Local folder" }), c6e("div", { className: "ui-78zum5 ui-6s0dn4 ui-ehausa", children: [$z("span", { className: "ui-98rzlu ui-euugli", children: $z(nI, { id: I, type: "text", placeholder: "Path to a local marketplace folder", value: d, onChange: (G) => {
    h(G.target.value), k(null);
  }, size: "lg", disabled: b }) }), $z(An, { variant: "outline", size: "lg", onClick: $, disabled: b, children: "Choose folder…" })] })] })] }) : null, S !== null ? $z("p", { className: "ui-y5h43f ui-19ji09o ui-1jh5svw ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b", children: S }) : null] }) }), c6e(Xr.Footer, { children: [$z(An, { variant: "text", size: "lg", onClick: r, disabled: b, children: "Cancel" }), $z(An, { variant: "primary", size: "lg", onClick: () => void H(), disabled: !O || b, children: b ? "Importing…" : "Import" })] })] });
}
