// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 1429 range:79878..85707
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1429: (e, t, r) => {
    "use strict";
    r.d(t, { p: () => o, t: () => s });
    var n = r(17392);
    function s(e2) {
      return { actionCase: void 0, turnModeName: void 0, ...e2 };
    }
    class o extends n.SK {
      constructor(e2, t2) {
        super(`Local loop cannot run this turn: ${e2}`, { displayInfo: { ...i(e2, t2), isRetryable: false } }), this.reason = e2;
      }
    }
    function i(e2, t2) {
      return e2.startsWith("private-inference-") ? { title: "Private inference can't run this turn", detail: c(e2, t2) } : { title: "Local loop can't run this turn", detail: `${c(e2, t2)} Disable agent_host_local_loop to run on the backend loop.` };
    }
    function a(e2) {
      return void 0 === e2.modelId ? "" : ` "${e2.modelId}"`;
    }
    function c(e2, t2) {
      switch (e2) {
        case "action-not-supported":
          return `The local loop only runs user-message turns, plan builds, resumes, summaries, goal continuations, question answers, shell commands, and background wakeups; this turn started from ${void 0 === t2.actionCase ? "an unknown action" : `"${t2.actionCase}"`}.`;
        case "mode-not-supported": {
          const e3 = void 0 === t2.turnModeName ? "an unknown mode" : `mode ${t2.turnModeName}`, r2 = (function(e4) {
            switch (e4) {
              case "backgroundTaskCompletionAction":
                return "Background wakeups";
              case "resumeAction":
                return "Resumes";
              case "summarizeAction":
                return "Summaries";
              case "goalContinuationAction":
                return "Goal continuations";
              case "asyncAskQuestionCompletionAction":
                return "Question answers";
              case "shellCommandAction":
                return "Shell commands";
              default:
                return;
            }
          })(t2.actionCase);
          return void 0 !== r2 ? `${r2} only run locally in Agent, Plan, Ask, Debug, or Multitask mode conversations; this conversation is in ${e3}.` : `The local loop only supports Agent, Plan, Ask, Debug, and Multitask modes; this turn runs in ${e3}.`;
        }
        case "model-not-supported":
          return "The turn resolved no model id for the local loop to request.";
        case "custom-system-prompt-not-supported":
          return "Subagent turns with a custom system prompt are not supported on the local loop.";
        case "harness-not-supported":
          return "Turns with a harness override are not supported on the local loop.";
        case "exclude-workspace-context-not-supported":
          return "Turns that exclude workspace context are not supported on the local loop.";
        case "direct-meta-subagent-not-supported":
          return "Meta parent-child subagent turns are not supported on the local loop.";
        case "private-inference-unavailable":
          return "Private inference is configured but its runtime was not wired into this build. Turns fail rather than falling back to Cursor-managed models; remove the private-inference config (the enterprise private-inference.toml, or CURSOR_PRIVATE_INFERENCE_* for development) to use the backend loop.";
        case "private-inference-enablement-unavailable":
          return "Private inference is configured but your team's private inference setting could not be read. Turns fail rather than falling back to Cursor-managed models; retry, or reload the window.";
        case "private-inference-enrolled-after-activation":
          return "Private inference was enabled for your team after this window started. Turns no longer run on Cursor-managed models; reload the window to run them on private inference.";
        case "private-inference-disabled-for-team":
          return "Private inference is configured on this device but is not enabled for your team. Turns fail rather than falling back to Cursor-managed models; ask your admin to enable private inference, or reload the window to run on Cursor-managed models.";
        case "private-inference-byok-not-supported":
          return `Private inference does not accept per-turn API keys (BYOK) on the request. Each catalog model uses the endpoint and credential from the config file${void 0 === t2.modelId ? "" : ` ("${t2.modelId}")`}. Remove the custom key from this model or pick a catalog model.`;
        case "private-inference-model-not-in-catalog": {
          const e3 = t2.catalogModelIds?.join(", ");
          return `The requested model${a(t2)} is not in the private inference catalog${e3 ? ` (available: ${e3})` : ""}. Pick one of the configured models.`;
        }
        case "private-inference-reasoning-not-supported": {
          const e3 = t2.reasoning?.requested, r2 = t2.reasoning?.supported.join(", ");
          return `The requested reasoning tier${e3 ? ` "${e3}"` : ""} is not one the model${a(t2)} declares${r2 ? ` (supported: ${r2})` : ""}. Pick a supported tier.`;
        }
        case "private-inference-context-not-supported": {
          const e3 = t2.contextWindow?.requested, r2 = t2.contextWindow?.supported.map((e4) => e4.toLocaleString()).join(", ");
          return `The requested context window${e3 ? ` "${e3}"` : ""} is not one the model${a(t2)} advertises${r2 ? ` (supported token counts: ${r2})` : ""}. Pick a supported context size.`;
        }
        case "private-inference-vision-not-supported": {
          const e3 = t2.imageCount ?? 0, r2 = 1 === e3 ? "the attached image was not sent" : `the ${e3} attached images were not sent`;
          return `The model${a(t2)} is not configured for image input, so ${r2}. Remove the attachment, or have your admin set vision = true on this model's private-inference.toml entry if the model accepts images.`;
        }
        default:
          return e2;
      }
    }
  }