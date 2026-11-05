// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeManage.utils.js range:22730052..22734822
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.589Z
Hot = L({ "CustomizeManage.utils.js"() {
  "use strict";
  E(), jes = 5, EHm = 15, IHm = ["user", "plugin", "team", "dashboard", "project", "other"], _In = [{ id: "plugins", label: "Plugins" }, { id: "mcps", label: "MCPs" }, { id: "skills", label: "Skills" }, { id: "agents", label: "Subagents" }, { id: "rules", label: "Rules" }, { id: "commands", label: "Commands" }, { id: "hooks", label: "Hooks" }], S4e = { plugins: { title: "Extend Cursor with Plugins", description: "Plugins bundle rules, skills, subagents, commands, MCP servers, and hooks into one installable package.", docsUrl: "https://cursor.com/docs/plugins" }, mcps: { title: "Connect External Tools with MCP", description: "Model Context Protocol servers connect Cursor to external tools and data sources like Linear, Figma, and Notion.", docsUrl: "https://cursor.com/docs/mcp" }, skills: { title: "Teach Cursor New Skills", description: "Skills package domain-specific knowledge and workflows that Agent applies automatically when relevant.", docsUrl: "https://cursor.com/docs/skills" }, agents: { title: "Delegate Work to Subagents", description: "Subagents are specialized assistants that run in their own context window so Agent can parallelize and stay focused.", docsUrl: "https://cursor.com/docs/agent/subagents" }, rules: { title: "Guide Agent with Rules", description: "Rules give Agent persistent, system-level instructions for your coding standards and workflows.", docsUrl: "https://cursor.com/docs/rules" }, commands: { title: "Create Reusable Commands", description: "Commands are reusable prompts you invoke with /name to standardize common workflows across your team.", docsUrl: "https://cursor.com/docs/agent/chat/commands" }, hooks: { title: "Automate with Hooks", description: "Hooks run custom scripts at lifecycle events to observe, control, and extend the agent loop.", docsUrl: "https://cursor.com/docs/hooks" } }, xHm = [], AHm = ["user", "team", "workspace"], RHm = { user: "User", team: "Team", workspace: "Workspace", workspaces: "Workspaces", sources: "Sources" }, tCi = { skills: "skill", rules: "rule", agents: "subagent", mcps: "mcp", commands: "command" };
} });
import { jsx as PHm, jsxs as $X1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as HX1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as WX1, useState as MHm, useLayoutEffect as GX1, useEffect as qX1 } from "./react-runtime/react/esm-index-production.js";
function DHm(t) {
  const e = HX1(19), { children: n, rightSticky: i, depKey: r } = t, s = WX1(null), [o, a] = MHm(false), [l, c] = MHm(false);
  let u;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = () => {
    const A = s.current;
    A !== null && (a(A.scrollLeft > 4), c(A.scrollLeft < A.scrollWidth - A.clientWidth - 4));
  }, e[0] = u) : u = e[0];
  const d = u;
  let h;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = () => {
    d();
    const A = requestAnimationFrame(d);
    return () => cancelAnimationFrame(A);
  }, e[1] = h) : h = e[1];
  let p;
  e[2] !== r ? (p = [d, r], e[2] = r, e[3] = p) : p = e[3], GX1(h, p);
  let g;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = () => {
    const A = s.current;
    if (A === null) return;
    A.addEventListener("scroll", d, { passive: true });
    const P = new ResizeObserver(d);
    P.observe(A);
    for (const M of Array.from(A.children)) P.observe(M);
    return () => {
      A.removeEventListener("scroll", d), P.disconnect();
    };
  }, e[4] = g) : g = e[4];
  let f;
  e[5] !== r ? (f = [d, r], e[5] = r, e[6] = f) : f = e[6], qX1(g, f);
  const _ = o && l ? "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)" : l ? "linear-gradient(to right, black calc(100% - 48px), transparent)" : o ? "linear-gradient(to right, transparent, black 48px)" : "none";
  let b;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = Sc(Zh.controlsScroll), e[7] = b) : b = e[7];
  const y = b;
  let S;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (S = Sc(Zh.controls), e[8] = S) : S = e[8];
  let k;
  e[9] !== _ ? (k = { ...y.style, scrollbarWidth: "none", maskImage: _, WebkitMaskImage: _ }, e[9] = _, e[10] = k) : k = e[10];
  let C;
  e[11] !== n || e[12] !== k ? (C = PHm("div", { ref: s, className: y.className, style: k, children: n }), e[11] = n, e[12] = k, e[13] = C) : C = e[13];
  let T;
  e[14] !== i ? (T = i !== void 0 ? PHm("div", { ...Sc(Zh.controlsSticky), children: i }) : null, e[14] = i, e[15] = T) : T = e[15];
  let I;
  return e[16] !== T || e[17] !== C ? (I = $X1("div", { ...S, children: [C, T] }), e[16] = T, e[17] = C, e[18] = I) : I = e[18], I;
}
