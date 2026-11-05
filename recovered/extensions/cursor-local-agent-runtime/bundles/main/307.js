// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 307 range:2740..5874
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
307: (e, t, r) => {
    "use strict";
    r.d(t, { af: () => m, Qu: () => d, _E: () => n, Mw: () => h });
    const n = { beforeShellExecution: "beforeShellExecution", beforeMCPExecution: "beforeMCPExecution", afterShellExecution: "afterShellExecution", afterMCPExecution: "afterMCPExecution", beforeReadFile: "beforeReadFile", afterFileEdit: "afterFileEdit", beforeTabFileRead: "beforeTabFileRead", afterTabFileEdit: "afterTabFileEdit", stop: "stop", beforeSubmitPrompt: "beforeSubmitPrompt", afterAgentResponse: "afterAgentResponse", afterAgentThought: "afterAgentThought", sessionStart: "sessionStart", sessionEnd: "sessionEnd", preCompact: "preCompact", subagentStart: "subagentStart", subagentStop: "subagentStop", preToolUse: "preToolUse", postToolUse: "postToolUse", postToolUseFailure: "postToolUseFailure", workspaceOpen: "workspaceOpen" }, o = { PreToolUse: n.preToolUse, PermissionRequest: null, PostToolUse: n.postToolUse, UserPromptSubmit: n.beforeSubmitPrompt, Stop: n.stop, SubagentStop: n.subagentStop, SessionStart: n.sessionStart, SessionEnd: n.sessionEnd, PreCompact: n.preCompact, Notification: null };
    Object.fromEntries(Object.entries(o).filter((e2) => null !== e2[1]).map(([e2, t2]) => [t2, e2]));
    const s = (e2) => "string" == typeof e2, i = (e2) => null !== e2 && "object" == typeof e2 && !Array.isArray(e2), a = (e2, t2 = []) => ({ isValid: e2, errors: t2 });
    function l(e2, t2, r2) {
      void 0 === e2 || s(e2) || r2.push(`${t2} must be a string if provided`);
    }
    const c = (e2) => {
      const t2 = [];
      return i(e2) ? a(true) : (t2.push("Expected an object"), a(false, t2));
    }, u = (e2) => {
      const t2 = [], r2 = c(e2);
      if (!r2.isValid) return r2;
      if (void 0 !== e2.permission) {
        const r3 = ["allow", "deny", "ask"];
        r3.includes(e2.permission) || t2.push(`Invalid permission value. Expected one of: ${r3.join(", ")}, or undefined`);
      }
      return void 0 !== e2.user_message && "string" != typeof e2.user_message && t2.push("Invalid user_message value. Expected a string if provided"), void 0 !== e2.agent_message && "string" != typeof e2.agent_message && t2.push("Invalid agent_message value. Expected a string if provided"), a(0 === t2.length, t2);
    };
    const d = /* @__PURE__ */ new Set([n.sessionStart, n.beforeSubmitPrompt, n.preToolUse, n.postToolUse, n.postToolUseFailure]);
    n.beforeShellExecution, n.beforeMCPExecution, n.afterShellExecution, n.afterMCPExecution, n.beforeReadFile, n.afterFileEdit, n.beforeTabFileRead, n.afterTabFileEdit, n.beforeSubmitPrompt, n.stop, n.afterAgentResponse, n.afterAgentThought, n.sessionStart, n.sessionEnd, n.preCompact, n.subagentStart, n.subagentStop, n.preToolUse, n.postToolUse, n.postToolUseFailure, n.workspaceOpen, n.beforeShellExecution, n.beforeMCPExecution, n.beforeReadFile, n.beforeTabFileRead, n.subagentStart, n.preToolUse, n.workspaceOpen;
    const p = /<(\/?)system_reminder>/gi;
    function h(e2) {
      return e2.replace(p, (e3, t2) => `<${t2}system_reminder_>`);
    }
    const m = ["stdin", "argv_base64", "argv_heredoc", "windows_temp_file", "prompt"];
  }