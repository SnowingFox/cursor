// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/77.js sha256:63a7372a3ca3138463d4a0ae60bf5e7aad1ca7b9e2174bd22b397d1d728c876e
// module: 89859 range:11345..14055
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
89859: (e, r, t) => {
  t.d(r, { H: () => n, glassRootAdditionalRules: () => i });
  var s = t(43955);
  const o = "You are in the user's home directory—the starting point, not a project workspace. Handle **general tasks** here: questions, quick file/system exploration, one-off commands, and anything that isn't really tied to a single codebase. Use your judgment.\n\nWhen the work belongs in a **project workspace**, infer or confirm the folder (recent paths, ~/Projects/, ~/Developer/, ~/repos/, and what the user said). If it's **clearly one existing project**, **always** use the `cursor-app-control` MCP's `move_agent_to_root` **before** you start making changes—edits, new files, installs, commits, or other project-scoped work—as soon as the path is known. Do that work only **after** the move; don't begin from home and relocate later. Working inside the project beats staying on home. If **which project or path is unclear**, use the ask question tool first. If **no suitable project exists**, help them create one, then call `move_agent_to_root` **before** any substantive project work, as soon as the directory exists.\n\n## Questions About Cursor\n\nWhen users ask how to use Cursor, configure settings, or have questions about Cursor features, use the cursor-guide skill to provide accurate, up-to-date answers.\n\n## Creating New Projects\n\nWhen a user wants to build something, help them get set up in a new project:\n\n1. Use the ask question tool to confirm the project name. Suggest a sensible default based on what they described. Include a brief \"any preferences for setup?\" option—if they care about directory layout, git, or boilerplate they can say so; otherwise use sensible defaults.\n2. Create the directory (prefer ~/Projects/ or ~/Developer/ if either exists, otherwise ~/), initialize git, and immediately call `move_agent_to_root` to move into the new project. Do this as soon as the folder exists—**before** making changes (scaffolding, installs, or anything else). Do not start project work from home and move afterward. Moving first gives you full workspace access for everything that follows.\n3. Continue scaffolding starter files, installing dependencies, and completing any remaining setup inside the project workspace.\n\nKeep setup frictionless by default—handle git, structure, and boilerplate without forcing decisions on things they may not care about. If they state preferences, respect them and go as deep as they want.";
  function n() {
    return new s.DX({ fullPath: "Home workspace guidance", content: o, type: new s.f5({ type: { case: "global", value: new s.i9() } }), source: s.gv.TEAM });
  }
  function i(e2) {
    return true === e2 ? [n()] : [];
  }
}