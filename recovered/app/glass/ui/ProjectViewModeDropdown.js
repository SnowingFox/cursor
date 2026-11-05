// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectViewModeDropdown.js range:6396899..6398648
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.932Z
Wna = L({ "ProjectViewModeDropdown.js"() {
  "use strict";
  E(), fd(), Obn(), eMr = [{ id: "kanban", label: "Board", iconName: "board-kanban" }, { id: "list", label: "List", iconName: "list-bullets" }, { id: "grid", label: "Grid", iconName: "grid" }, { id: "graph", label: "Graph", iconName: "graph" }], Hna = eMr.filter((t) => t.id !== "graph");
} });
function wph(t) {
  for (let e = 0; e < t.length; e += 1) {
    if (!/^<(?:video|source)(?=[\s/>])/i.test(t.slice(e))) continue;
    let n = null;
    for (let i = e; i < t.length; i += 1) {
      const r = t[i];
      if (n !== null) r === n && (n = null);
      else if (r === '"' || r === "'") n = r;
      else if (r === ">") {
        const s = t.slice(e, i + 1).replace(/"[^"]*"|'[^']*'/g, "");
        if (/\ssrc\s*=/i.test(s)) return true;
        e = i;
        break;
      }
    }
  }
  return false;
}
function lqy(t) {
  let e = false, n = "", i = 0;
  for (const r of t.matchAll(Gna)) {
    const s = r[0], o = r.index ?? i;
    n += t.slice(i, o).replaceAll("<", "&lt;"), wph(s) ? (e = true, n += s) : n += s.replaceAll("<", "&lt;"), i = o + s.length;
  }
  return e ? (n += t.slice(i).replaceAll("<", "&lt;"), { allowHtml: true, markdown: n }) : { allowHtml: false, markdown: t };
}
function Cph(t) {
  return (t.replace(Gna, (i) => wph(i) ? `
` : i).split(`
`).find((i) => {
    const r = i.trim();
    return r.length > 0 && !Tph.test(r) && !Eph.test(r);
  }) ?? "").replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/^#+\s+/, "").replace(/\s+/g, " ").trim();
}
function cqy(t) {
  return { ...lqy(t), displayText: Cph(t) };
}
var Tph, Eph, Gna, 