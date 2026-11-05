// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 24804 range:4519266..4539646
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
24804: (e, t, r) => {
    "use strict";
    r.d(t, { O2: () => h, YF: () => q, zn: () => g, nb: () => u, sh: () => f, sk: () => l });
    var n = r(98875), s = r(69584), o = r(68503);
    const i = ["user_info", "project_layout", "rules", "always_applied_workspace_rules", "agent_requestable_workspace_rules", "user_rules", "agent_skills", "available_skills", "cloud_instructions", "cloud_task_instructions", "open_and_recently_viewed_files", "system_reminder", "system-reminder", "instructions_update", "mcp_instructions", "mcp_file_system", "mcp_file_system_servers", "git_status", "agent_transcripts", "cursor_rules_context", "attached_files", "system_notification", "task_notification", "agent_notification"];
    function a(e2) {
      return c(e2, i);
    }
    function c(e2, t2) {
      let r2 = e2;
      for (const e3 of t2) {
        const t3 = new RegExp(`<${e3}(?:\\s[^>]*)?>[\\s\\S]*?</${e3}>`, "gi");
        r2 = r2.replace(t3, "");
      }
      return r2.replace(/\n{3,}/g, "\n\n").trim();
    }
    (() => {
      const e2 = globalThis.Intl?.Segmenter;
      e2 && new e2(void 0, { granularity: "grapheme" });
    })();
    function l(e2) {
      const t2 = (0, o.sh)(e2.conversationId);
      if ("subagent" === e2.kind && e2.parentConversationId) {
        const r2 = (0, o.sh)(e2.parentConversationId);
        return `${o.O2}/${r2}/subagents/${t2}.${e2.ext}`;
      }
      return `${o.O2}/${t2}/${t2}.${e2.ext}`;
    }
    async function u(e2, t2, r2) {
      for (let n2 = r2.length - 1; n2 >= 0; n2--) try {
        const o2 = await t2.getBlob(e2, r2[n2]);
        if (!o2) return;
        const i2 = s.cmU.fromBinary(o2, { readUnknownFields: true });
        if ("agentConversationTurn" !== i2.turn.case) continue;
        const a2 = i2.turn.value.requestId;
        return void 0 !== a2 && "" !== a2 ? a2 : void 0;
      } catch {
        return;
      }
    }
    var d;
    !(function(e2) {
      e2.INTERNAL = "INTERNAL", e2.EXTERNAL = "EXTERNAL", e2.NO_PREAMBLE = "NO_PREAMBLE";
    })(d || (d = {}));
    var p = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, m = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const h = o.O2, f = o.sh;
    function g(e2) {
      switch (e2) {
        case s.xyI.AGENT:
          return "agent";
        case s.xyI.ASK:
          return "ask";
        case s.xyI.PLAN:
          return "plan";
        case s.xyI.DEBUG:
          return "debug";
        case s.xyI.TRIAGE:
          return "triage";
        case s.xyI.MULTITASK:
          return "multitask";
        case s.xyI.CUSTOM:
          return "custom";
        case s.xyI.UNSPECIFIED:
        case void 0:
          return "agent";
        default:
          return "agent";
      }
    }
    function y(e2, t2) {
      return t2 instanceof Uint8Array ? { __type: "Uint8Array", hex: (r2 = t2, Array.from(r2).map((e3) => e3.toString(16).padStart(2, "0")).join("")) } : "bigint" == typeof t2 ? t2.toString() : t2;
      var r2;
    }
    function w(e2, t2) {
      if (t2 && "object" == typeof t2 && "Uint8Array" === t2.__type && "string" == typeof t2.hex) {
        return `[Binary data omitted from transcript: ${t2.hex.length / 2} bytes]`;
      }
      return t2;
    }
    const v = new TextEncoder(), _ = new TextDecoder();
    function A(e2) {
      return { role: "assistant", content: `[Oversize transcript blob omitted: ${t2 = e2, `${(t2 / 1e6).toFixed(1)} MB`}]` };
      var t2;
    }
    const S = new class {
      serialize(e2) {
        const t2 = JSON.stringify(e2, y);
        return v.encode(t2);
      }
      deserialize(e2) {
        const t2 = _.decode(e2);
        return t2.includes('"__type":"Uint8Array"') ? JSON.parse(t2, w) : JSON.parse(t2);
      }
    }();
    function b(e2) {
      const t2 = e2.providerOptions;
      return true === t2?.cursor?.isSummary;
    }
    async function E(e2, t2, r2) {
      const n2 = [];
      let s2 = 0, o2 = 0, i2 = 0, a2 = 0, c2 = 0, l2 = 0, u2 = 0;
      for (const d2 of r2) {
        const r3 = await t2.getBlob(e2, d2);
        if (r3) {
          if (r3.length > 5e6) {
            n2.push(A(r3.length)), c2++, l2 += r3.length, u2 = Math.max(u2, r3.length);
            continue;
          }
          try {
            const e3 = performance.now(), t3 = S.deserialize(r3), c3 = performance.now() - e3;
            n2.push(t3), s2++, o2 += r3.length, i2 = Math.max(i2, r3.length), a2 += c3;
          } catch {
          }
        }
      }
      return { messages: n2, hydratedBlobCount: s2, hydratedBlobBytes: o2, largestHydratedBlobBytes: i2, totalDeserializeDurationMs: a2, omittedOversizeBlobCount: c2, omittedOversizeBlobBytes: l2, largestOmittedOversizeBlobBytes: u2 };
    }
    async function I(e2, t2, r2) {
      const o2 = { stack: [], error: void 0, hasError: false };
      try {
        const i2 = p(o2, (0, n.VI)(e2.withName("hydrateSummaryArchives")), false);
        let a2 = 0;
        const c2 = (0, n.OA)(i2.ctx), l2 = [];
        let u2 = 0, d2 = 0, m2 = 0, h2 = 0, f2 = 0, g2 = 0, y2 = 0;
        const w2 = await Promise.all(r2.summaryArchives.map(async (e3) => {
          a2++;
          const r3 = await t2.getBlob(c2, e3);
          if (r3) try {
            const e4 = s.Anz.fromBinary(r3);
            a2 += e4.summarizedMessages.length;
            return await E(c2, t2, e4.summarizedMessages);
          } catch {
          }
          return { messages: [], hydratedBlobCount: 0, hydratedBlobBytes: 0, largestHydratedBlobBytes: 0, totalDeserializeDurationMs: 0, omittedOversizeBlobCount: 0, omittedOversizeBlobBytes: 0, largestOmittedOversizeBlobBytes: 0 };
        }));
        for (const e3 of w2) l2.push(...e3.messages), u2 += e3.hydratedBlobCount, d2 += e3.hydratedBlobBytes, m2 = Math.max(m2, e3.largestHydratedBlobBytes), h2 += e3.totalDeserializeDurationMs, f2 += e3.omittedOversizeBlobCount, g2 += e3.omittedOversizeBlobBytes, y2 = Math.max(y2, e3.largestOmittedOversizeBlobBytes);
        i2.span.setAttribute("getBlobCount", a2), i2.span.setAttribute("hydratedBlobCount", u2), i2.span.setAttribute("hydratedBlobBytes", d2), i2.span.setAttribute("largestHydratedBlobBytes", m2), i2.span.setAttribute("totalDeserializeDurationMs", h2), i2.span.setAttribute("omittedOversizeBlobCount", f2), i2.span.setAttribute("omittedOversizeBlobBytes", g2), i2.span.setAttribute("largestOmittedOversizeBlobBytes", y2);
        const v2 = p(o2, (0, n.VI)(e2.withName("hydratePromptMessages")), false), _2 = await E(c2, t2, r2.rootPromptMessagesJson);
        v2.span.setAttribute("getBlobCount", r2.rootPromptMessagesJson.length), v2.span.setAttribute("hydratedBlobCount", _2.hydratedBlobCount), v2.span.setAttribute("hydratedBlobBytes", _2.hydratedBlobBytes), v2.span.setAttribute("largestHydratedBlobBytes", _2.largestHydratedBlobBytes), v2.span.setAttribute("totalDeserializeDurationMs", _2.totalDeserializeDurationMs), v2.span.setAttribute("omittedOversizeBlobCount", _2.omittedOversizeBlobCount), v2.span.setAttribute("omittedOversizeBlobBytes", _2.omittedOversizeBlobBytes), v2.span.setAttribute("largestOmittedOversizeBlobBytes", _2.largestOmittedOversizeBlobBytes);
        const A2 = _2.messages.filter((e3) => "system" !== e3.role && !b(e3));
        return l2.push(...A2), l2;
      } catch (e3) {
        o2.error = e3, o2.hasError = true;
      } finally {
        m(o2);
      }
    }
    function C(e2, t2) {
      switch (e2.type) {
        case "text":
          return t2 ? k(e2.text) : e2.text;
        case "image":
          return "[Image]";
        case "file":
          return e2.filename ? `[File: ${e2.filename}]` : "[File]";
        case "reasoning":
          return `[Thinking] ${e2.text}`;
        case "redacted-reasoning":
          return "[Thinking]";
        case "tool-call":
          return `[Tool call] ${e2.toolName}${(function(e3) {
            if (null == e3) return "";
            if ("object" != typeof e3) return String(e3);
            const t3 = e3, r2 = Object.entries(t3);
            return 0 === r2.length ? "" : `
${r2.map(([e4, t4]) => {
              let r3;
              return r3 = "string" == typeof t4 ? t4 : "object" == typeof t4 && null !== t4 ? JSON.stringify(t4) : String(t4), `  ${e4}: ${r3}`;
            }).join("\n")}`;
          })(e2.args)}`;
        case "tool-result":
          return `[Tool result] ${e2.toolName}`;
        default:
          return "";
      }
    }
    function k(e2) {
      return a(e2);
    }
    function x(e2) {
      return e2.replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/<thinking>[\s\S]*?<\/thinking>/gi, "").replace(/\n{3,}/g, "\n\n").trim();
    }
    function T(e2, t2, r2) {
      if (void 0 === e2) return "";
      if ("string" == typeof e2) {
        const n2 = t2 ? k(e2) : e2;
        return r2 ? x(n2) : n2;
      }
      return e2.map((e3) => {
        if (r2 && "text" === e3.type) {
          const r3 = x(t2 ? k(e3.text) : e3.text);
          return C({ ...e3, text: r3 }, false);
        }
        return C(e3, t2);
      }).filter(Boolean).join("\n");
    }
    function R(e2) {
      let t2 = e2.filter((e3) => "system" !== e3.role);
      t2.length >= 2 && "user" === t2[0].role && "user" === t2[1].role && (t2 = t2.slice(1));
      const r2 = [];
      for (const e3 of t2) {
        const t3 = "user" === e3.role, n2 = "assistant" === e3.role, s2 = T(e3.content, t3, n2);
        s2.trim() && ("tool" === e3.role ? r2.push(s2) : r2.push(`${e3.role}:
${s2}`));
      }
      return r2.join("\n\n");
    }
    function B(e2, t2) {
      const r2 = { role: e2.role }, n2 = e2.content;
      if ("string" == typeof n2) {
        const s2 = t2 ? k(n2) : n2, o2 = "assistant" === e2.role ? x(s2) : s2;
        o2.trim() && (r2.text = o2);
      } else if (Array.isArray(n2)) {
        const s2 = [], o2 = [], i2 = [];
        let a2;
        for (const r3 of n2) switch (r3.type) {
          case "text": {
            const n3 = t2 ? k(r3.text) : r3.text, o3 = "assistant" === e2.role ? x(n3) : n3;
            o3.trim() && s2.push(o3);
            break;
          }
          case "reasoning":
            r3.text.trim() && o2.push(r3.text);
            break;
          case "redacted-reasoning":
            o2.push("[REDACTED]");
            break;
          case "image":
            s2.push("[Image]");
            break;
          case "file":
            s2.push(r3.filename ? `[File: ${r3.filename}]` : "[File]");
            break;
          case "tool-call":
            i2.push({ toolName: r3.toolName, args: r3.args });
            break;
          case "tool-result":
            a2 = { toolName: r3.toolName };
        }
        s2.length > 0 && (r2.text = s2.join("\n")), o2.length > 0 && (r2.thinking = o2.join("\n")), i2.length > 0 && (r2.toolCalls = i2), a2 && (r2.toolResult = a2);
      }
      return r2;
    }
    function P(e2) {
      return e2.endsWith("\n") ? e2 : `${e2}
`;
    }
    function J(e2) {
      const { turnEnded: t2 } = e2, r2 = [], n2 = {}, s2 = [];
      return void 0 !== t2 && (r2.push((function(e3) {
        switch (e3.status) {
          case "success":
            return "Turn ended: success.";
          case "error":
            return `Turn ended: error: ${e3.error}`;
          case "aborted":
            return e3.error ? `Turn ended: aborted: ${e3.error}` : "Turn ended: aborted.";
          default:
            return e3;
        }
      })(t2)), n2.turnEnded = t2, s2.push(JSON.stringify({ type: "turn_ended", ...t2 }))), { textSuffixes: r2, jsonFields: n2, jsonlLines: s2 };
    }
    function M(e2) {
      if ("system" === e2.role || b(e2)) return;
      const t2 = B(e2, "user" === e2.role), r2 = [], n2 = [];
      if (t2.text && n2.push(t2.text), t2.thinking && n2.push(t2.thinking), n2.length > 0 && r2.push({ type: "text", text: n2.join("\n\n") }), t2.toolCalls) for (const e3 of t2.toolCalls) r2.push({ type: "tool_use", name: e3.toolName, input: e3.args });
      if (0 === r2.length) return;
      const s2 = { role: e2.role, message: { content: r2 } };
      return JSON.stringify(s2);
    }
    class q {
      constructor(e2, t2, r2, n2 = {}) {
        this.projectDir = e2, this.blobStore = t2, this.writeFile = r2, this.options = { writeText: n2.writeText ?? true, writeJson: n2.writeJson ?? false, writeJsonl: n2.writeJsonl ?? false, pathResolver: n2.pathResolver, appendFile: n2.appendFile, fallbackToFullWriteOnIncrementalFailure: n2.fallbackToFullWriteOnIncrementalFailure ?? true };
      }
      resolveFilePath(e2, t2) {
        if (this.options.pathResolver) return this.options.pathResolver(e2, t2);
        const r2 = l({ conversationId: e2, ext: t2, kind: "primary" });
        return `${this.projectDir}/${r2}`;
      }
      async writeFromStateFull(e2, t2, r2, s2 = {}) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          const i2 = p(o2, (0, n.VI)(e2.withName("writeFromState")), false);
          try {
            const e3 = await I(i2.ctx, this.blobStore, t2), { overviewFactory: n2 } = s2, o3 = J(s2);
            if (0 === e3.length && 0 === o3.jsonlLines.length) return true;
            let a2;
            if ((this.options.writeText || n2) && (a2 = R(e3)), this.options.writeText) {
              const e4 = a2 ?? "", t3 = o3.textSuffixes.length > 0 ? e4.trim().length > 0 ? `${e4}

${o3.textSuffixes.join("\n")}` : o3.textSuffixes.join("\n") : e4;
              t3.trim() && await this.writeFile(this.resolveFilePath(r2, "txt"), t3);
            }
            if (this.options.writeJson) {
              const n3 = (function(e4) {
                let t3 = e4.filter((e5) => "system" !== e5.role);
                t3.length >= 2 && "user" === t3[0].role && "user" === t3[1].role && (t3 = t3.slice(1));
                const r3 = [];
                for (const e5 of t3) {
                  const t4 = B(e5, "user" === e5.role);
                  (t4.text || t4.thinking || t4.toolCalls || t4.toolResult) && r3.push(t4);
                }
                return 0 === r3.length ? "" : JSON.stringify(r3, null, 2);
              })(e3);
              if (n3 || o3.jsonlLines.length > 0) {
                const e4 = { mode: g(t2.mode), messages: n3 ? JSON.parse(n3) : [], ...o3.jsonFields };
                await this.writeFile(this.resolveFilePath(r2, "json"), JSON.stringify(e4, null, 2));
              }
            }
            if (this.options.writeJsonl) {
              const t3 = (function(e4) {
                let t4 = e4.filter((e5) => "system" !== e5.role);
                t4.length >= 2 && "user" === t4[0].role && "user" === t4[1].role && (t4 = t4.slice(1));
                const r3 = [];
                for (const e5 of t4) {
                  const t5 = M(e5);
                  t5 && r3.push(t5);
                }
                return r3.join("\n");
              })(e3);
              let s3 = [t3, ...o3.jsonlLines].filter((e4) => e4.length > 0).join("\n");
              if (s3 && n2 && a2?.trim()) try {
                const e4 = (await n2(a2)).trim();
                e4 && (s3 = (function(e5, t4) {
                  const r3 = { type: "metadata", metadata: { overview: t4 } };
                  return `${JSON.stringify(r3)}
${e5}`;
                })(s3, e4));
              } catch (e4) {
                console.error("[TranscriptStore] Failed to generate transcript overview:", e4);
              }
              s3 && await this.writeFile(this.resolveFilePath(r2, "jsonl"), P(s3));
            }
            return true;
          } catch (e3) {
            return console.error("[TranscriptStore] Failed to write transcript:", e3), false;
          }
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          m(o2);
        }
      }
      async writeFromStateIncremental(e2, t2, r2, s2, o2 = {}) {
        const i2 = { stack: [], error: void 0, hasError: false };
        try {
          const a2 = t2.rootPromptMessagesJson.length, c2 = J(o2), l2 = c2.jsonlLines.length > 0;
          if (a2 === s2 && !l2 && !o2.overviewFactory) return a2;
          const u2 = this.options.appendFile;
          if (!(u2 && this.options.writeJsonl && !this.options.writeText && !this.options.writeJson && s2 > 0 && a2 >= s2 && (a2 > s2 || l2) && !o2.overviewFactory)) {
            return await this.writeFromStateFull(e2, t2, r2, o2) ? a2 : 0;
          }
          const d2 = p(i2, (0, n.VI)(e2.withName("writeFromStateIncremental")), false);
          if (a2 === s2 && l2) try {
            return await u2(this.resolveFilePath(r2, "jsonl"), P(c2.jsonlLines.join("\n"))), a2;
          } catch (n2) {
            if (console.error(this.options.fallbackToFullWriteOnIncrementalFailure ? "[TranscriptStore] Failed to append transcript, falling back to full write:" : "[TranscriptStore] Failed to append transcript:", n2), !this.options.fallbackToFullWriteOnIncrementalFailure) return 0;
            return await this.writeFromStateFull(e2, t2, r2, o2) ? a2 : 0;
          }
          try {
            const e3 = t2.rootPromptMessagesJson.slice(s2), n2 = await E(d2.ctx, this.blobStore, e3);
            d2.span.setAttribute("hydratedBlobCount", n2.hydratedBlobCount), d2.span.setAttribute("hydratedBlobBytes", n2.hydratedBlobBytes), d2.span.setAttribute("largestHydratedBlobBytes", n2.largestHydratedBlobBytes), d2.span.setAttribute("totalDeserializeDurationMs", n2.totalDeserializeDurationMs), d2.span.setAttribute("omittedOversizeBlobCount", n2.omittedOversizeBlobCount), d2.span.setAttribute("omittedOversizeBlobBytes", n2.omittedOversizeBlobBytes), d2.span.setAttribute("largestOmittedOversizeBlobBytes", n2.largestOmittedOversizeBlobBytes);
            const o3 = [];
            for (const e4 of n2.messages) {
              const t3 = M(e4);
              t3 && o3.push(t3);
            }
            if (o3.push(...c2.jsonlLines), o3.length > 0) {
              const e4 = P(o3.join("\n"));
              await u2(this.resolveFilePath(r2, "jsonl"), e4);
            }
            return a2;
          } catch (n2) {
            if (console.error(this.options.fallbackToFullWriteOnIncrementalFailure ? "[TranscriptStore] Failed to append transcript, falling back to full write:" : "[TranscriptStore] Failed to append transcript:", n2), !this.options.fallbackToFullWriteOnIncrementalFailure) return 0;
            return await this.writeFromStateFull(e2, t2, r2, o2) ? a2 : 0;
          }
        } catch (e3) {
          i2.error = e3, i2.hasError = true;
        } finally {
          m(i2);
        }
      }
    }
  }