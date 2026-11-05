// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 91022 range:13037571..13049698
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91022: (e, t, r) => {
    "use strict";
    r.d(t, { af: () => I, Qu: () => S, _E: () => n, fp: () => p, bi: () => m, Qk: () => h, Mw: () => E, U4: () => A, sl: () => d, RV: () => x });
    const n = { beforeShellExecution: "beforeShellExecution", beforeMCPExecution: "beforeMCPExecution", afterShellExecution: "afterShellExecution", afterMCPExecution: "afterMCPExecution", beforeReadFile: "beforeReadFile", afterFileEdit: "afterFileEdit", beforeTabFileRead: "beforeTabFileRead", afterTabFileEdit: "afterTabFileEdit", stop: "stop", beforeSubmitPrompt: "beforeSubmitPrompt", afterAgentResponse: "afterAgentResponse", afterAgentThought: "afterAgentThought", sessionStart: "sessionStart", sessionEnd: "sessionEnd", preCompact: "preCompact", subagentStart: "subagentStart", subagentStop: "subagentStop", preToolUse: "preToolUse", postToolUse: "postToolUse", postToolUseFailure: "postToolUseFailure", workspaceOpen: "workspaceOpen" }, s = { PreToolUse: n.preToolUse, PermissionRequest: null, PostToolUse: n.postToolUse, UserPromptSubmit: n.beforeSubmitPrompt, Stop: n.stop, SubagentStop: n.subagentStop, SessionStart: n.sessionStart, SessionEnd: n.sessionEnd, PreCompact: n.preCompact, Notification: null }, o = (Object.fromEntries(Object.entries(s).filter((e2) => null !== e2[1]).map(([e2, t2]) => [t2, e2])), { Bash: "Shell", Read: "Read", Write: "Write", Edit: "Write", Glob: null, Grep: "Grep", WebFetch: "WebFetch", WebSearch: "WebSearch", Task: "Task" }), i = ["Glob"], a = ["Notification", "PermissionRequest"], c = { warn: () => {
    }, info: () => {
    } };
    function l(e2, t2) {
      const r2 = { loop_limit: null, failClosed: false };
      return t2 && "*" !== t2 && (r2.matcher = t2), void 0 !== e2.timeout && (r2.timeout = e2.timeout), "prompt" === e2.type ? e2.prompt ? { type: "prompt", prompt: e2.prompt, ...r2 } : null : e2.command ? { type: "command", command: e2.command, ...r2 } : null;
    }
    function u(e2, t2, r2 = c) {
      const n2 = [];
      let s2;
      if ("PreToolUse" === t2 || "PostToolUse" === t2) {
        const t3 = (function(e3, t4 = c) {
          if (!e3 || "*" === e3) return "*";
          const r3 = e3.split("|"), n3 = [], s3 = [];
          for (const e4 of r3) {
            const t5 = e4.trim();
            if (t5.startsWith("mcp__")) {
              const e5 = t5.split("__");
              if (e5.length >= 3) {
                const t6 = e5.slice(2).join("__");
                n3.push(`MCP:${t6}`);
                continue;
              }
            }
            const r4 = o[t5];
            null !== r4 ? void 0 !== r4 ? n3.includes(r4) || n3.push(r4) : n3.push(t5) : i.includes(t5) && s3.push(`Tool "${t5}" is not supported in Cursor and will be ignored`);
          }
          for (const e4 of s3) t4.warn(e4);
          return 0 === n3.length ? null : n3.join("|");
        })(e2.matcher, r2);
        if (null === t3) return r2.warn(`All tools in matcher "${e2.matcher}" are unsupported, skipping hooks`), [];
        s2 = "*" === t3 ? void 0 : t3;
      } else "SessionStart" === t2 || "PreCompact" === t2 ? (e2.matcher && "*" !== e2.matcher && "" !== e2.matcher && ("SessionStart" === t2 ? ["startup", "resume", "clear", "compact"].includes(e2.matcher) : ["manual", "auto"].includes(e2.matcher)) && r2.warn(`${t2} trigger matcher "${e2.matcher}" is not supported in Cursor, hooks will fire for all triggers`), s2 = void 0) : s2 = void 0;
      for (const t3 of e2.hooks) {
        const e3 = l(t3, s2);
        e3 && n2.push(e3);
      }
      return n2;
    }
    function d(e2, t2 = c) {
      const r2 = {};
      for (const [n2, o2] of Object.entries(e2)) {
        const e3 = n2;
        if (a.includes(e3)) {
          t2.warn(`Claude Code event "${e3}" is not supported in Cursor and will be ignored`);
          continue;
        }
        const i2 = s[e3];
        if (!i2) {
          t2.warn(`Unknown Claude Code event "${e3}", skipping`);
          continue;
        }
        const c2 = [];
        if (Array.isArray(o2)) for (const r3 of o2) {
          const n3 = u(r3, e3, t2);
          c2.push(...n3);
        }
        else void 0 !== o2 && t2.warn(`Claude Code event "${e3}" has invalid value (expected array), skipping`);
        if (c2.length > 0) {
          const e4 = r2[i2] || [];
          r2[i2] = [...e4, ...c2];
        }
      }
      return { version: 1, hooks: r2 };
    }
    function p(e2) {
      if ("object" != typeof e2 || null === e2) return "unknown";
      const t2 = e2, r2 = "object" == typeof t2.hooks && null !== t2.hooks ? t2.hooks : null;
      if (!r2) return "unknown";
      for (const e3 of Object.values(r2)) {
        if (!Array.isArray(e3) || 0 === e3.length) continue;
        const t3 = e3[0];
        if ("object" != typeof t3 || null === t3) continue;
        const r3 = t3;
        if ("hooks" in r3 && Array.isArray(r3.hooks)) return "claude-code";
        if ("command" in r3 || "prompt" in r3 || "type" in r3) return "cursor";
      }
      return "unknown";
    }
    function m(e2, t2) {
      switch (e2) {
        case "beforeShellExecution":
        case "afterShellExecution":
          return t2.command || void 0;
        case "beforeMCPExecution":
        case "afterMCPExecution": {
          const e3 = t2;
          return e3.tool_name ? `MCP:${e3.tool_name}` : void 0;
        }
        case "beforeReadFile":
          return "Read";
        case "afterFileEdit":
          return "Write";
        case "beforeTabFileRead":
          return "TabRead";
        case "afterTabFileEdit":
          return "TabWrite";
        case "beforeSubmitPrompt":
          return "UserPromptSubmit";
        case "stop":
          return "Stop";
        case "afterAgentResponse":
          return "AgentResponse";
        case "afterAgentThought":
          return "AgentThought";
        case "subagentStart":
          return t2.subagent_type || void 0;
        case "subagentStop":
          return t2.subagent_type || void 0;
        case "preToolUse":
        case "postToolUse":
        case "postToolUseFailure":
          return t2.tool_name || void 0;
        default:
          return;
      }
    }
    function h(e2, t2) {
      return e2.filter((e3) => (function(e4, t3) {
        if (!e4.matcher || "" === e4.matcher || "*" === e4.matcher) return true;
        if (void 0 === t3) return true;
        try {
          return new RegExp(e4.matcher).test(t3);
        } catch {
          return true;
        }
      })(e3, t2));
    }
    const f = (e2) => "string" == typeof e2, g = (e2) => null !== e2 && "object" == typeof e2 && !Array.isArray(e2), y = (e2, t2 = []) => ({ isValid: e2, errors: t2 });
    function w(e2, t2, r2) {
      void 0 === e2 || f(e2) || r2.push(`${t2} must be a string if provided`);
    }
    const v = (e2) => {
      const t2 = [];
      return g(e2) ? y(true) : (t2.push("Expected an object"), y(false, t2));
    }, _ = (e2) => {
      const t2 = [], r2 = v(e2);
      if (!r2.isValid) return r2;
      if (void 0 !== e2.permission) {
        const r3 = ["allow", "deny", "ask"];
        r3.includes(e2.permission) || t2.push(`Invalid permission value. Expected one of: ${r3.join(", ")}, or undefined`);
      }
      return void 0 !== e2.user_message && "string" != typeof e2.user_message && t2.push("Invalid user_message value. Expected a string if provided"), void 0 !== e2.agent_message && "string" != typeof e2.agent_message && t2.push("Invalid agent_message value. Expected a string if provided"), y(0 === t2.length, t2);
    };
    function A(e2) {
      const t2 = e2.modelId, r2 = e2.modelParams;
      return { ...void 0 !== t2 && { model_id: t2 }, ...void 0 !== r2 && r2.length > 0 ? { model_params: r2.map((e3) => ({ id: e3.id, value: e3.value })) } : {} };
    }
    const S = /* @__PURE__ */ new Set([n.sessionStart, n.beforeSubmitPrompt, n.preToolUse, n.postToolUse, n.postToolUseFailure]);
    n.beforeShellExecution, n.beforeMCPExecution, n.afterShellExecution, n.afterMCPExecution, n.beforeReadFile, n.afterFileEdit, n.beforeTabFileRead, n.afterTabFileEdit, n.beforeSubmitPrompt, n.stop, n.afterAgentResponse, n.afterAgentThought, n.sessionStart, n.sessionEnd, n.preCompact, n.subagentStart, n.subagentStop, n.preToolUse, n.postToolUse, n.postToolUseFailure, n.workspaceOpen, n.beforeShellExecution, n.beforeMCPExecution, n.beforeReadFile, n.beforeTabFileRead, n.subagentStart, n.preToolUse, n.workspaceOpen;
    const b = /<(\/?)system_reminder>/gi;
    function E(e2) {
      return e2.replace(b, (e3, t2) => `<${t2}system_reminder_>`);
    }
    const I = ["stdin", "argv_base64", "argv_heredoc", "windows_temp_file", "prompt"];
    const C = (e2) => {
      const t2 = [];
      if (!g(e2)) return t2.push(`Hook script must be an object with either a 'command' property (command hook) or 'type: "prompt"' with a 'prompt' property (prompt hook)`), y(false, t2);
      const r2 = e2.type;
      return "prompt" === r2 ? ((e3, t3) => {
        f(e3.prompt) ? "" === e3.prompt.trim() && t3.push("Prompt hook 'prompt' property cannot be empty") : t3.push("Prompt hook must have a 'prompt' property (string)"), void 0 !== e3.model && (f(e3.model) ? "" === e3.model.trim() && t3.push("Prompt hook 'model' cannot be an empty string") : t3.push("Prompt hook 'model' must be a string if provided"));
      })(e2, t2) : "command" === r2 || void 0 === r2 ? ((e3, t3) => {
        f(e3.command) || t3.push("Hook script command must be a string");
      })(e2, t2) : t2.push(`Invalid hook type: "${r2}". Must be "command", "prompt", or omitted (defaults to "command")`), ((e3, t3) => {
        if (void 0 !== e3.matcher) if (f(e3.matcher)) {
          if ("" !== e3.matcher && "*" !== e3.matcher) try {
            new RegExp(e3.matcher);
          } catch (r3) {
            t3.push(`Hook script matcher "${e3.matcher}" is not a valid regex: ${r3?.message ?? String(r3)}`);
          }
        } else t3.push("Hook script matcher must be a string if provided");
        if (void 0 !== e3.timeout && ("number" != typeof e3.timeout ? t3.push("Hook script timeout must be a number (seconds)") : e3.timeout <= 0 ? t3.push("Hook script timeout must be a positive number") : e3.timeout > 3600 && console.warn(`[hooks] Hook timeout of ${e3.timeout}s is very long (>1 hour)`)), void 0 !== e3.loop_limit) {
          const r3 = e3.loop_limit;
          null !== r3 && ("number" != typeof r3 ? t3.push("Hook script loop_limit must be a positive integer or null") : Number.isInteger(r3) ? r3 <= 0 && t3.push("Hook script loop_limit must be a positive integer (use null for no limit)") : t3.push("Hook script loop_limit must be an integer"));
        }
        void 0 !== e3.failClosed && "boolean" != typeof e3.failClosed && t3.push("Hook script failClosed must be a boolean");
      })(e2, t2), y(0 === t2.length, t2);
    }, k = (e2, t2) => {
      const r2 = [];
      if (!Array.isArray(e2)) return r2.push(`${t2} must be an array of hook scripts`), y(false, r2);
      for (let n2 = 0; n2 < e2.length; n2++) {
        const s2 = C(e2[n2]);
        s2.isValid || r2.push(`${t2}[${n2}]: ${s2.errors.join(", ")}`);
      }
      return y(0 === r2.length, r2);
    }, x = (e2) => {
      const t2 = [];
      if (!g(e2)) return t2.push("Hooks config must be an object"), y(false, t2);
      if ("number" != typeof e2.version ? t2.push("Config version must be a number") : (!Number.isInteger(e2.version) || e2.version < 1) && t2.push("Config version must be a positive integer"), !g(e2.hooks)) return t2.push("Config hooks must be an object"), y(false, t2);
      void 0 !== e2.stop_hook_loop_limit && console.warn("[hooks] DEPRECATION WARNING: 'stop_hook_loop_limit' is deprecated. Use 'loop_limit' on individual hook scripts instead. The configured value is being ignored.");
      const r2 = Object.values(n), s2 = e2.hooks;
      for (const [e3, n2] of Object.entries(s2)) if (r2.includes(e3)) {
        if (void 0 !== n2) {
          const r3 = k(n2, e3);
          r3.isValid || t2.push(...r3.errors);
        }
      } else t2.push(`Unknown hook type: ${e3}. Valid types are: ${r2.join(", ")}`);
      return y(0 === t2.length, t2);
    };
  }