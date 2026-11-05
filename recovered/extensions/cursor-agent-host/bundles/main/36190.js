// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 36190 range:7297854..7310226
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36190: (e, t, r) => {
    "use strict";
    r.d(t, { c3: () => m, sJ: () => f, vS: () => h, zv: () => u });
    var n = r(38812), s = r(37949), o = r(60525), i = r(69584), a = r(11541), c = r(56126);
    const l = (0, s.h)("agent-host:interactions"), u = "agent_host.interaction.key_reuse";
    class d extends Error {
      constructor(e2) {
        super(e2), this.code = "INTERACTION_RESPONSE_INVALID", this.name = "AgentHostInvalidInteractionResponseError";
      }
    }
    function p(e2, t2) {
      return "interactionQuery" === e2.case && "interactionQuery" === t2.case && i.Pd7.equals(new i.Pd7({ query: e2.value.query }), new i.Pd7({ query: t2.value.query }));
    }
    function m(e2, t2) {
      if ("mcpAuthRequestQuery" !== e2.query.case || "mcpAuthRequestResponse" !== t2.result.case || "approved" !== t2.result.value.result.case) return;
      const r2 = e2.query.value.args?.serverIdentifier.trim() ?? "";
      return r2.length > 0 ? r2 : void 0;
    }
    class h {
      constructor(e2, t2) {
        this.events = e2, this.callbacks = t2, this.pending = /* @__PURE__ */ new Map(), this.resolved = /* @__PURE__ */ new Map(), this.watchQueues = /* @__PURE__ */ new Set(), this.closed = false, e2.setPendingInteractionsSource(() => this.pendingAwaitingInputs());
      }
      async query(e2, t2, r2, n2) {
        const s2 = await this.hold(e2, t2, { case: "interactionQuery", value: r2 }, { interactionId: n2?.interactionId ?? `${t2}:${r2.id}`, requestId: n2?.requestId ?? String(r2.id) });
        if ("responded" !== s2.case) throw new Error(`Agent query ${r2.id} settled with a ${s2.case} answer`);
        return s2.value;
      }
      async askHostQuestion(e2, t2, r2, n2) {
        if (this.pending.has(n2.interactionId) || this.resolved.has(n2.interactionId)) throw new Error(`Host question key ${n2.interactionId} is already in use`);
        const s2 = await this.hold(e2, t2, r2, n2);
        if ("responded" === s2.case) throw new Error(`Host question ${n2.interactionId} settled with an agent response`);
        return s2;
      }
      respond(e2, t2) {
        return this.accept(e2, { case: "responded", value: t2 });
      }
      respondToHostQuestion(e2, t2) {
        return this.accept(e2, t2);
      }
      async hold(e2, t2, r2, n2) {
        if (this.closed) throw new Error("Agent host interaction registry is closed");
        const s2 = n2.interactionId, o2 = this.keyFor(s2, r2), { requestId: i2 } = n2, a2 = { baseInteractionId: s2, interactionId: o2 }, l2 = this.resolved.get(o2);
        if (void 0 !== l2) {
          if (this.reportKeyReuse(e2, r2, "replayed", a2), "responded" === l2.case) return (0, c.VB)(l2.answer);
          throw l2.error;
        }
        const u2 = this.pending.get(o2);
        if (void 0 !== u2) return this.reportKeyReuse(e2, r2, "joined", a2), u2.promise;
        o2 !== s2 && this.reportKeyReuse(e2, r2, "reassigned", a2);
        const d2 = Promise.withResolvers(), p2 = this.events.appendTurnAwaitingInput(t2, i2, o2, r2);
        this.pending.set(o2, { eventId: p2, turnId: t2, requestId: i2, question: (0, c.VB)(r2), promise: d2.promise, resolve: d2.resolve, reject: d2.reject }), this.callbacks?.onAwaitingInputStarted?.(), this.emitState();
        const m2 = () => {
          this.rejectInteraction(o2, "cancelled", g(e2.signal.reason));
        };
        e2.signal.aborted ? m2() : e2.signal.addEventListener("abort", m2, { once: true });
        try {
          return await d2.promise;
        } finally {
          e2.signal.removeEventListener("abort", m2), this.callbacks?.onAwaitingInputEnded?.();
        }
      }
      accept(e2, t2) {
        const r2 = this.pending.get(e2);
        if (void 0 === r2) return this.resolved.has(e2) ? o.Ht.ALREADY_RESOLVED : o.Ht.NOT_FOUND;
        const n2 = (function(e3, t3) {
          switch (e3.case) {
            case "interactionQuery":
              return "responded" !== t3.case ? `A ${t3.case} answer does not answer an agent query` : (function(e4, t4) {
                if (t4.id !== e4.id) return `Interaction response ID ${t4.id} does not match query ID ${e4.id}`;
                const r3 = (function(e5) {
                  const t5 = e5.query.case;
                  if (void 0 === t5) return;
                  const r4 = i.Pd7.fields.list().find((e6) => e6.localName === t5);
                  return void 0 !== r4 ? i.Y5.fields.find(r4.no)?.localName : void 0;
                })(e4);
                if (t4.result.case !== r3) return `Interaction response ${t4.result.case ?? "<empty>"} does not answer a ${e4.query.case ?? "<unknown>"} query (expected ${r3 ?? "<empty>"})`;
                if (!(function(e5) {
                  const t5 = e5.result;
                  switch (t5.case) {
                    case "askQuestionInteractionResponse":
                    case "createPlanRequestResponse":
                      return void 0 !== t5.value.result?.result.case;
                    case "webSearchRequestResponse":
                    case "webFetchRequestResponse":
                    case "switchModeRequestResponse":
                    case "setupVmEnvironmentResult":
                    case "prManagementResult":
                    case "mcpAuthRequestResponse":
                    case "generateImageRequestResponse":
                    case "replaceEnvResult":
                    case "connectScmRequestResponse":
                      return void 0 !== t5.value.result.case;
                    case void 0:
                      return false;
                    default:
                      return t5;
                  }
                })(t4)) return `Interaction response ${t4.result.case ?? "<empty>"} carries no answer`;
                return;
              })(e3.value, t3.value);
            case "execApproval": {
              if ("execApproval" !== t3.case) return `A ${t3.case} answer does not answer an exec approval`;
              const r3 = new Set(e3.value.offeredAllowlistEntries), n3 = t3.value.allowlistEntries.filter((e4) => !r3.has(e4));
              return n3.length > 0 ? `Always allow names entries the approval did not offer: ${n3.join(", ")}` : void 0;
            }
            case "mcpElicitation":
              return "mcpElicitation" !== t3.case ? `A ${t3.case} answer does not answer an MCP form` : t3.value.action === o.M.UNSPECIFIED ? "MCP form answer carries no action" : void 0;
            default:
              return e3;
          }
        })(r2.question, t2);
        if (void 0 !== n2) throw new d(n2);
        const s2 = (0, c.VB)(t2);
        return this.pending.delete(e2), this.resolved.set(e2, { question: r2.question, case: "responded", answer: s2 }), this.events.appendInteractionResolved(r2.turnId, e2, s2), this.emitState(), r2.resolve(s2), "interactionQuery" === r2.question.case && "responded" === s2.case && this.callbacks?.onInteractionResponded?.(r2.question.value, s2.value), o.Ht.ACCEPTED;
      }
      cancelTurn(e2, t2, r2) {
        const n2 = g(t2);
        for (const [t3, s2] of [...this.pending]) s2.turnId === e2 && (true === r2?.settleRejectBubbled && y(s2.requestId) ? this.settleRejectInteraction(t3, n2.message) : this.rejectInteraction(t3, "cancelled", n2));
      }
      settleRejectByRequestId(e2) {
        const t2 = "string" == typeof e2.reason && e2.reason.length > 0 ? e2.reason : "Subagent force-backgrounded; cancelling pending bubbled interaction";
        for (const [r2, n2] of [...this.pending]) n2.requestId === e2.requestId && this.settleRejectInteraction(r2, t2);
      }
      async *watch(e2) {
        const t2 = { events: new a.l(), notify: void 0 };
        this.watchQueues.add(t2);
        try {
          if (this.closed) return;
          for (yield { event: { case: "snapshot", value: { interactions: this.snapshot() } } }; !e2.signal.aborted && !this.closed; ) {
            const r2 = t2.events.shift();
            void 0 === r2 ? await this.waitForEvent(e2, t2) : yield r2;
          }
        } finally {
          this.watchQueues.delete(t2), t2.notify?.(), t2.notify = void 0;
        }
      }
      close(e2 = "Agent host interaction registry closed") {
        if (this.closed) return [];
        this.closed = true;
        const t2 = /* @__PURE__ */ new Set();
        for (const [r2, n2] of this.pending) t2.add(n2.turnId), this.rejectInteraction(r2, "cancelled", g(e2));
        for (const e3 of this.watchQueues) e3.notify?.(), e3.notify = void 0;
        return [...t2];
      }
      keyFor(e2, t2) {
        for (let r2 = 0; ; r2++) {
          const n2 = 0 === r2 ? e2 : `${e2}#${r2}`, s2 = this.pending.get(n2)?.question ?? this.resolved.get(n2)?.question;
          if (void 0 === s2 || p(s2, t2)) return n2;
        }
      }
      reportKeyReuse(e2, t2, r2, n2) {
        const s2 = (function(e3) {
          return "interactionQuery" === e3.case ? e3.value.query.case : e3.case;
        })(t2) ?? "unknown", o2 = { ...n2, queryCase: s2, outcome: r2 };
        "reassigned" === r2 ? l.warn(e2, "Interaction key held by a different question; asking under a new key", o2) : l.info(e2, "Interaction key reused by the same question", o2);
        try {
          this.callbacks?.onInteractionKeyReuse?.({ outcome: r2, queryCase: s2 });
        } catch (t3) {
          l.warn(e2, "Interaction key reuse report failed", { error: String(t3) });
        }
      }
      collectPendingEntries() {
        return [...this.pending].map(([e2, t2]) => ({ interactionId: e2, turnId: t2.turnId, question: t2.question }));
      }
      cloneSnapshotEntries(e2) {
        return e2.map((e3) => ({ interactionId: e3.interactionId, turnId: e3.turnId, question: (0, c.VB)(e3.question) }));
      }
      snapshot() {
        return this.cloneSnapshotEntries(this.collectPendingEntries());
      }
      pendingAwaitingInputs() {
        return [...this.pending].map(([e2, t2]) => ({ eventId: t2.eventId, turnId: t2.turnId, requestId: t2.requestId, interactionId: e2, question: (0, c.VB)(t2.question) }));
      }
      emitState() {
        if (this.closed || 0 === this.watchQueues.size) return;
        const e2 = this.collectPendingEntries();
        for (const t2 of this.watchQueues) t2.events.push({ event: { case: "state", value: { interactions: this.cloneSnapshotEntries(e2) } } }), t2.notify?.(), t2.notify = void 0;
      }
      settleRejectInteraction(e2, t2) {
        const r2 = this.pending.get(e2);
        if (void 0 === r2) return;
        const s2 = (function(e3, t3) {
          if ("interactionQuery" !== e3.case) return f(e3, t3);
          const r3 = (0, n.oF)(e3.value, t3);
          return void 0 === r3 ? void 0 : { case: "responded", value: r3 };
        })(r2.question, t2);
        void 0 === s2 ? this.rejectInteraction(e2, "cancelled", new Error(t2)) : this.accept(e2, s2);
      }
      rejectInteraction(e2, t2, r2) {
        const n2 = this.pending.get(e2);
        void 0 !== n2 && (this.pending.delete(e2), this.resolved.set(e2, { question: n2.question, case: t2, error: r2 }), "cancelled" === t2 ? this.events.appendInteractionResolved(n2.turnId, e2, { case: "cancelled", value: { reason: r2.message } }) : this.events.appendInteractionResolved(n2.turnId, e2, { case: "failed", value: { error: r2.message } }), this.emitState(), n2.reject(r2));
      }
      waitForEvent(e2, t2) {
        return new Promise((r2) => {
          if (e2.signal.aborted || this.closed || t2.events.length > 0) return void r2();
          const n2 = () => {
            t2.notify === s2 && (t2.notify = void 0), e2.signal.removeEventListener("abort", o2);
          }, s2 = () => {
            n2(), r2();
          }, o2 = () => {
            n2(), r2();
          };
          t2.notify = s2, e2.signal.addEventListener("abort", o2, { once: true });
        });
      }
    }
    function f(e2, t2) {
      switch (e2.case) {
        case "execApproval":
          return { case: "execApproval", value: new o.k2({ approved: false, reason: t2 }) };
        case "mcpElicitation":
          return { case: "mcpElicitation", value: new o.vG({ action: o.M.CANCEL }) };
        default:
          return e2;
      }
    }
    function g(e2) {
      return e2 instanceof Error ? e2 : new Error("string" == typeof e2 && e2.length > 0 ? e2 : "Agent host interaction was cancelled");
    }
    function y(e2) {
      return e2.startsWith("subagent:");
    }
  }