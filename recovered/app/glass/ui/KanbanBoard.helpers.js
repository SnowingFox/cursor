// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: KanbanBoard.helpers.js range:6401916..6402392
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.764Z
Jci = L({ "KanbanBoard.helpers.js"() {
  "use strict";
  E(), Iph(), XSt(), qna = pWe("project-task-card", () => Qci({ boardId: "string", cardId: "string", fromGroupValue: "string" })), Lph = 220, zna = 8, Vna = 2, Kna = 28;
} });
function ZSt(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const i of t.cardOrder) t.cards[i] === void 0 || n.has(i) || (n.add(i), e.push(i));
  for (const i of Object.keys(t.cards)) n.has(i) || (n.add(i), e.push(i));
  return e;
}
