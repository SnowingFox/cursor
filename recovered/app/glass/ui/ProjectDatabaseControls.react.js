// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectDatabaseControls.react.js range:33750652..33753195
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.918Z
rBw = L({ "ProjectDatabaseControls.react.js"() {
  "use strict";
  E(), Mt(), $Cs(), oYf = ["asc", "desc"], GLi = "", qCs = "";
} });
function sBw(t) {
  if (t.hostHeight <= 0 || t.overlayHeight <= 0) return { kind: "unmeasured" };
  const e = t.hostTop + t.hostHeight, n = Math.min(e, t.portBottom) - t.inset, i = Math.max(t.hostTop, t.portTop);
  return n - i < t.overlayHeight ? { kind: "hidden" } : { kind: "pinned", top: n - t.overlayHeight - t.hostTop };
}
function aYf(t, e) {
  switch (e.kind) {
    case "unmeasured":
      t.style.removeProperty("top"), t.style.removeProperty("bottom"), t.style.removeProperty("visibility");
      return;
    case "hidden":
      t.style.visibility = "hidden";
      return;
    case "pinned":
      t.style.visibility = "", t.style.top = `${e.top}px`, t.style.bottom = "auto";
      return;
  }
}
function lYf(t, e, n) {
  const i = Number.parseFloat(t.getPropertyValue(e));
  return Number.isFinite(i) ? i : n;
}
function oBw(t) {
  const e = $u(t) && t.getAttribute("data-project-surface") === "kanban" ? t : t.querySelector('[data-project-surface="kanban"]');
  if (e === null) return;
  const n = e.querySelector(':scope > .ui-scroll-area__scrollbar[data-orientation="horizontal"]');
  if (n !== null) return n.setAttribute("data-project-database-board-overlay", "true"), { host: e, overlay: n };
}
function aBw(t) {
  const e = [], n = ws(t);
  let i = t.parentElement;
  for (; i !== null; ) {
    const r = n.getComputedStyle(i).overflowY;
    (r === "auto" || r === "scroll" || r === "overlay") && e.push(i), i = i.parentElement;
  }
  return e;
}
function lBw(t) {
  const e = oBw(t);
  if (e === void 0) return;
  const { host: n, overlay: i } = e, r = ws(n), s = aBw(n), o = () => {
    const u = n.getBoundingClientRect(), d = r.getComputedStyle(n), h = lYf(d, "--scrollbar-size", i.offsetHeight || 6), p = lYf(d, "--scrollbar-inset", 1), g = s.at(0), f = g === void 0 ? { top: 0, bottom: r.innerHeight } : g.getBoundingClientRect();
    aYf(i, sBw({ hostTop: u.top, hostHeight: u.height, portTop: f.top, portBottom: f.bottom, overlayHeight: h, inset: p }));
  }, a = [...s, r];
  for (const u of a) u.addEventListener("scroll", o, { passive: true });
  r.addEventListener("resize", o);
  const l = r.ResizeObserver, c = typeof l > "u" ? null : new l(o);
  c?.observe(n);
  for (const u of s) c?.observe(u);
  return o(), () => {
    for (const u of a) u.removeEventListener("scroll", o);
    r.removeEventListener("resize", o), c?.disconnect(), aYf(i, { kind: "unmeasured" });
  };
}
