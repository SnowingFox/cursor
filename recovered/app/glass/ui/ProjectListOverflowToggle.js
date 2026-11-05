// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectListOverflowToggle.js range:14907836..14912872
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.927Z
var f8h = L({ "ProjectListOverflowToggle.js"() {
  "use strict";
  E(), m8h();
} });
import { jsxs as Pfa, jsx as aae } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as KCS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useId as YCS, useState as XCS } from "./react-runtime/react/esm-index-production.js";
function Y5r(t) {
  const e = KCS(40), { board: n, dependencyGraph: i, layout: r, onCardActivate: s, getCardContextMenu: o, getCardPresentation: a, getCardSelectionValue: l, listContentInset: c, initialVisibleCardCountPerSection: u, sectionHeadingTone: d, onLinkClick: h, scrollMode: p, visibleTaskIds: g } = t, f = c === void 0 ? "default" : c, _ = d === void 0 ? "group" : d, b = p === void 0 ? "contained" : p, y = YCS(), [S, k] = XCS(ZCS);
  let C, T;
  if (e[0] !== n || e[1] !== i || e[2] !== S || e[3] !== o || e[4] !== a || e[5] !== l || e[6] !== y || e[7] !== u || e[8] !== r || e[9] !== f || e[10] !== s || e[11] !== h || e[12] !== b || e[13] !== _ || e[14] !== g) {
    T = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    e: {
      const P = tia(n, g);
      if (r === "list") {
        let O;
        e[17] !== n || e[18] !== i || e[19] !== S || e[20] !== o || e[21] !== a || e[22] !== l || e[23] !== u || e[24] !== s || e[25] !== h || e[26] !== _ ? (O = (N) => {
          const U = u !== void 0 && N.cards.length > u, j = S.has(N.groupValue), $ = U && !j ? N.cards.slice(0, u) : N.cards, H = () => {
            k((G) => {
              const q = new Set(G);
              return j ? q.delete(N.groupValue) : q.add(N.groupValue), q;
            });
          };
          return Pfa(ESn.Section, { count: N.cards.length, title: N.label, titleTone: _ === "neutral" ? "neutral" : "default", tone: _ === "group" ? N.tone : void 0, children: [N.cards.length === 0 ? aae(nn, { as: "div", size: "md", color: "tertiary", className: "ui-f6zju3 ui-cnij5n", children: "No items." }) : $.map((G) => aae(ESn.Row, { children: aae(A5r, { board: n, card: G, contextMenu: o?.(G), sectionGroupValue: N.groupValue, sectionToneKind: N.tone, dependencyState: i.byTaskId[G.id], layout: "list", onActivate: s, onLinkClick: h, presentation: a?.(G), selectionValue: l?.(G) }) }, G.id)), U ? aae(ESn.Row, { children: aae(g8h, { isExpanded: j, onToggle: H }) }) : null] }, N.groupValue);
        }, e[17] = n, e[18] = i, e[19] = S, e[20] = o, e[21] = a, e[22] = l, e[23] = u, e[24] = s, e[25] = h, e[26] = _, e[27] = O) : O = e[27], T = aae(ESn, { contentInset: f, scrollMode: b, surface: "list", children: P.map(O) });
        break e;
      }
      let M;
      e[28] !== n || e[29] !== i || e[30] !== o || e[31] !== a || e[32] !== l || e[33] !== y || e[34] !== s || e[35] !== h ? (M = (O, N) => {
        const U = `${y}-${N}`;
        return Pfa("section", { className: "ui-78zum5 ui-euugli ui-2lah0s ui-dt5ytf ui-11twubx", "aria-labelledby": U, children: [aae("header", { className: "ui-78zum5 ui-3zvfii ui-6s0dn4 ui-f6zju3 ui-cnij5n ui-so031l ui-1q0q8m5 ui-17fyfba", children: Pfa(nn, { as: "div", id: U, role: "heading", "aria-level": 2, size: "sm", weight: "medium", className: "ui-78zum5 ui-euugli ui-1a02dak ui-1pha0wt ui-pkkfsy", children: [aae(mit, { tone: O.tone, children: O.label }), O.cards.length > 0 ? aae(nn, { size: "sm", weight: "regular", color: "tertiary", numeric: true, className: "ui-ss6m8b", children: O.cards.length }) : null] }) }), aae("div", { className: "ui-euugli ui-pkkfsy ui-rvj5dj ui-1mkdm3x ui-1b6slwd ui-5p20rn ui-iqf31s ui-10ukxgv", children: O.cards.length === 0 ? aae(nn, { as: "div", size: "md", color: "tertiary", className: "ui-f6zju3 ui-cnij5n", children: "No items." }) : O.cards.map((j) => aae("div", { className: "ui-78zum5 ui-arig7l ui-euugli", children: aae(A5r, { board: n, card: j, contextMenu: o?.(j), sectionGroupValue: O.groupValue, sectionToneKind: O.tone, dependencyState: i.byTaskId[j.id], layout: "grid", onActivate: s, onLinkClick: h, presentation: a?.(j), selectionValue: l?.(j) }) }, j.id)) })] }, O.groupValue);
      }, e[28] = n, e[29] = i, e[30] = o, e[31] = a, e[32] = l, e[33] = y, e[34] = s, e[35] = h, e[36] = M) : M = e[36], C = P.map(M);
    }
    e[0] = n, e[1] = i, e[2] = S, e[3] = o, e[4] = a, e[5] = l, e[6] = y, e[7] = u, e[8] = r, e[9] = f, e[10] = s, e[11] = h, e[12] = b, e[13] = _, e[14] = g, e[15] = C, e[16] = T;
  } else C = e[15], T = e[16];
  if (T !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return T;
  const I = C;
  let A;
  return e[37] !== b || e[38] !== I ? (A = aae("div", { className: "ui-rvj5dj ui-2lwn1j ui-12lumcd ui-5o4joa ui-1mkdm3x", children: b === "contained" ? aae(xg, { contentStyle: v8h.gridRoot, direction: "vertical", scrollbarVisibility: "never", "data-project-surface": "grid", children: I }) : aae("div", { className: "ui-1oot3zn ui-13ly8rp ui-196pc8s ui-1xlntvz ui-22095l", "data-project-surface": "grid", children: I }) }), e[37] = b, e[38] = I, e[39] = A) : A = e[39], A;
}
function ZCS() {
  return /* @__PURE__ */ new Set();
}
var v8h, 