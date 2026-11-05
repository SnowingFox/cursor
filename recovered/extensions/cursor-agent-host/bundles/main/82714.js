// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 82714 range:11869774..11876164
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82714: (e, t, r) => {
    "use strict";
    r.d(t, { DA: () => l, Zy: () => d, Po: () => u });
    var n = r(6688);
    function s(e2) {
      const t2 = ["## Model requests (private inference)", ""];
      t2.push(`${e2.length} run${1 === e2.length ? "" : "s"} captured on this device. Each request below is what the client sent to the configured gateway and what the gateway returned; nothing here was sent to Cursor.`, "");
      let r2 = 0;
      return e2.forEach((e3, n2) => {
        t2.push(`### Run ${n2 + 1} — ${e3.generationUUID}`, "", `- Status: ${e3.terminalStatus}`, `- Session: ${e3.conversationId}`, `- Captured: ${e3.createdAt}`, `- Requests: ${e3.invocations.length}`, ""), e3.invocations.forEach((e4, n3) => {
          r2++, t2.push(...(function(e5, t3) {
            const r3 = [`#### Request ${t3} — ${e5.modelId}`, "", `- Provider: ${e5.providerName}`, `- Status: ${e5.status}${void 0 === e5.errorMessage ? "" : ` (${e5.errorMessage})`}`, `- Attempt: ${e5.attempt} (${e5.attemptRequestId})`, `- Started: ${e5.startedAt}; completed: ${e5.completedAt}`, `- Tokens: ${e5.promptTokens} prompt + ${e5.completionTokens} completion = ${e5.totalTokens}${void 0 === e5.tokenLimit ? "" : ` (limit ${e5.tokenLimit})`}`, `- Tools offered (${e5.tools.length}): ${e5.tools.map((e6) => `\`${e6.name}\``).join(", ") || "none"}`, "", "**Prompt**", ""];
            for (const t4 of e5.messagesBase64) r3.push(...i(o(t4)));
            r3.push("**Response**", ""), 0 === e5.responseMessagesBase64.length && r3.push("_No response messages._", "");
            for (const t4 of e5.responseMessagesBase64) r3.push(...i(o(t4)));
            return r3;
          })(e4, n3 + 1));
        });
      }), { markdown: `${t2.join("\n").trimEnd()}
`, json: JSON.stringify(e2, null, 2), runCount: e2.length, invocationCount: r2 };
    }
    function o(e2) {
      try {
        return n.A2J.deserialize(Buffer.from(e2, "base64"));
      } catch {
        return;
      }
    }
    function i(e2) {
      if (void 0 === e2) return ["> **(undecodable message)**", ""];
      const t2 = [`**${e2.role}**`, ""];
      if ("string" == typeof e2.content) return t2.push(a(e2.content), ""), t2;
      for (const r2 of e2.content) switch (r2.type) {
        case "text":
          t2.push(a(r2.text), "");
          break;
        case "reasoning":
          t2.push("_reasoning_", "", a(r2.text), "");
          break;
        case "redacted-reasoning":
          t2.push("_reasoning (redacted)_", "");
          break;
        case "image":
          t2.push(`_image${void 0 === r2.mimeType ? "" : ` (${r2.mimeType})`}_`, "");
          break;
        case "file":
          t2.push(`_file (${r2.mimeType})_`, "");
          break;
        case "tool-call":
          t2.push(`_tool call_ \`${r2.toolName}\` (${r2.toolCallId})`, "", a(JSON.stringify(r2.args, null, 2), "json"), "");
          break;
        case "tool-result":
          t2.push(`_tool result_ \`${r2.toolName}\` (${r2.toolCallId})${true === r2.isError ? " — error" : ""}`, "", a("string" == typeof r2.result ? r2.result : JSON.stringify(r2.result, null, 2), "string" == typeof r2.result ? "" : "json"), "");
          break;
        default:
          t2.push(a(JSON.stringify(r2, null, 2), "json"), "");
      }
      return t2;
    }
    function a(e2, t2 = "") {
      const r2 = Math.max(2, ...Array.from(e2.matchAll(/`+/gu), (e3) => e3[0].length)), n2 = "`".repeat(r2 + 1);
      return `${n2}${t2}
${e2}
${n2}`;
    }
    const c = (0, r(37949).h)("@anysphere/agent-host:private-inference-prompt-quality"), l = "CURSOR_PRIVATE_INFERENCE_PQ_SNAPSHOTS";
    function u(e2) {
      return true === e2.isDevelopmentBuild && "1" === e2.env[l];
    }
    class d {
      constructor(e2 = {}) {
        this.options = e2, this.captures = /* @__PURE__ */ new Map(), this.runs = [];
      }
      wrapAttemptSession(e2, t2, r2) {
        const s2 = { generationUUID: e2.originalRequestId, attemptRequestId: e2.attemptRequestId, attempt: e2.attempt, conversationId: e2.runOptions.conversationId }, o2 = (0, n.Xc9)(t2.promptSession, { capture: this.captureForRun({ requestId: e2.originalRequestId, conversationId: e2.runOptions.conversationId, conversationGroupId: e2.runOptions.conversationGroupId ?? e2.runOptions.conversationId }), requestLogMetadata: s2, modelId: r2, providerName: "openai-responses" });
        return { promptSession: o2, promptToolSession: { getExecutor: (e3) => new n.Ycw(o2.getExecutor(e3)) } };
      }
      async finishRun(e2, t2, r2) {
        const n2 = this.captures.get(t2);
        if (void 0 !== n2) {
          this.captures.delete(t2);
          try {
            const s2 = await n2.capture.collect(r2);
            if (void 0 === s2) return;
            this.runs.push({ conversationGroupId: n2.conversationGroupId, snapshot: s2 }), this.runs.length > 200 && this.runs.splice(0, this.runs.length - 200), c.debug(e2, "Kept private-inference run for transcript export", { requestId: t2, conversationId: s2.conversationId, conversationGroupId: n2.conversationGroupId, invocationCount: s2.invocations.length, terminalStatus: s2.terminalStatus }), this.writeSnapshot(e2, t2, s2);
          } catch (r3) {
            c.error(e2, "Failed to collect local Prompt Quality capture", { requestId: t2, error: r3 });
          }
        }
      }
      writeSnapshot(e2, t2, r2) {
        if (void 0 !== this.options.writeSnapshot) try {
          const n2 = this.options.writeSnapshot(r2);
          c.info(e2, "Wrote private-inference run snapshot (dev build)", { requestId: t2, path: n2 });
        } catch (r3) {
          c.error(e2, "Failed to write private-inference run snapshot", { requestId: t2, error: r3 });
        }
      }
      runsForConversation(e2) {
        return this.runs.filter((t2) => t2.conversationGroupId === e2 || t2.snapshot.conversationId === e2).map((e3) => e3.snapshot);
      }
      report(e2) {
        const t2 = this.runsForConversation(e2);
        return 0 === t2.length ? void 0 : s(t2);
      }
      captureForRun(e2) {
        const t2 = this.captures.get(e2.requestId);
        if (void 0 !== t2) return t2.capture;
        const r2 = new n.yZI({ generationUUID: e2.requestId, conversationId: e2.conversationId, uploadEligible: true });
        return this.captures.set(e2.requestId, { capture: r2, conversationGroupId: e2.conversationGroupId }), r2;
      }
    }
  }