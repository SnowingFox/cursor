// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DirectoryGroupSelect.js range:16974096..16977704
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.640Z
var I7r = L({ "DirectoryGroupSelect.js"() {
  "use strict";
  E(), fd(), P0(), BW();
} });
import { jsxs as G$t, Fragment as wt1, jsx as Q_e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as swn, useId as Bhp, useCallback as oEa } from "./react-runtime/react/esm-index-production.js";
function Ct1(t) {
  return t.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function aEa(t, e, n = []) {
  return t && (e?.length ?? 0) > 0 && n.length === 0;
}
function Uhp({ teamName: t, directoryGroups: e = [], organizationGroups: n = [], enableAccessGrants: i = false, onCancel: r, onSubmit: s }) {
  const [o, a] = swn(""), [l, c] = swn(""), [u, d] = swn([]), [h, p] = swn([]), [g, f] = swn(false), [_, b] = swn(null), y = Bhp(), S = Bhp(), k = Ct1(o), C = k.length > 0 && jhp.test(k), T = aEa(i, n, u), I = oEa((M) => {
    d((O) => O.includes(M) ? O.filter((N) => N !== M) : [...O, M]);
  }, []), A = oEa((M) => {
    p((O) => O.includes(M) ? O.filter((N) => N !== M) : [...O, M]);
  }, []), P = oEa(async () => {
    if (!(!C || g)) {
      f(true), b(null);
      try {
        await s({ scope: "team", mode: "manual", name: k, displayName: o.trim() || void 0, description: l.trim() || void 0, ...T ? { organizationGroupIds: h } : { directoryGroupIds: u } });
      } catch (M) {
        b(M instanceof Error ? M.message : "Failed to create marketplace."), f(false);
      }
    }
  }, [C, g, s, k, o, l, T, h, u]);
  return G$t(wt1, { children: [Q_e(Xr.Content, { children: G$t("div", { className: "ui-78zum5 ui-dt5ytf ui-1jlwbde", children: [G$t("div", { className: "ui-78zum5 ui-dt5ytf ui-pkkfsy", children: [Q_e("label", { htmlFor: y, className: "ui-11wthnw ui-1ja60sm ui-19aaqeu", children: "Name" }), Q_e(nI, { id: y, placeholder: "e.g. My Team Plugins", value: o, onChange: (M) => {
    a(M.target.value), b(null);
  }, onKeyDown: (M) => {
    M.key === "Enter" && C && !g && P();
  }, size: "lg", disabled: g, autoFocus: true }), o.length > 0 ? G$t("p", { className: "ui-y5h43f ui-19ji09o ui-19aaqeu ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b", children: ["Slug: ", Q_e("span", { className: "ui-ul7cyv", children: k || "—" })] }) : null] }), G$t("div", { className: "ui-78zum5 ui-dt5ytf ui-pkkfsy", children: [Q_e("label", { htmlFor: S, className: "ui-11wthnw ui-1ja60sm ui-19aaqeu", children: "Description" }), Q_e(_d.Root, { size: "lg", layout: "textarea", disabled: g, children: Q_e(_d.Textarea, { id: S, placeholder: "What is this marketplace for?", minRows: 3, value: l, onChange: (M) => c(M.target.value), className: "ui-11ooeo3", style: { className: "ui-11ooeo3" }.style }) })] }), G$t("div", { className: "ui-78zum5 ui-dt5ytf ui-pkkfsy", children: [Q_e("span", { className: "ui-11wthnw ui-1ja60sm ui-19aaqeu", children: "Team Access" }), Q_e("div", { className: "ui-78zum5 ui-1cy8zhl", children: T ? Q_e(W$t, { directoryGroups: n.map((M) => ({ id: M.id, name: M.name, memberCount: M.memberCount ?? 0 })), selectedGroupIds: h, onToggleGroupId: A, onSelectAll: () => p([]), teamName: t, disabled: g }) : Q_e(W$t, { directoryGroups: e, selectedGroupIds: u, onToggleGroupId: I, onSelectAll: () => d([]), teamName: t, disabled: g }) })] }), _ !== null ? Q_e("p", { className: "ui-y5h43f ui-19ji09o ui-1jh5svw ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b", children: _ }) : null] }) }), G$t(Xr.Footer, { children: [Q_e(An, { variant: "text", size: "lg", onClick: r, disabled: g, children: "Cancel" }), Q_e(An, { variant: "primary", size: "lg", onClick: () => void P(), disabled: !C || g, children: g ? "Creating…" : "Create" })] })] });
}
var jhp, 