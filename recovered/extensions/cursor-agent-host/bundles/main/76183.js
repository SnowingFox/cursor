// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 76183 range:11217778..11238884
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76183: (e, t, r) => {
    "use strict";
    r.d(t, { aJ: () => b, Cw: () => S });
    var n = r(17392), s = r(60525), o = r(56126);
    class i {
      constructor() {
        this.items = [], this.start = 0;
      }
      get length() {
        return this.items.length - this.start;
      }
      get physicalLength() {
        return this.items.length;
      }
      get liveCount() {
        let e2 = 0;
        for (let t2 = this.start; t2 < this.items.length; t2++) void 0 !== this.items[t2] && e2++;
        return e2;
      }
      push(e2) {
        this.items.push(e2);
      }
      at(e2) {
        if (!(e2 < 0 || e2 >= this.length)) return this.items[this.start + e2];
      }
      first() {
        return this.at(0);
      }
      last() {
        return this.at(this.length - 1);
      }
      toArray() {
        const e2 = this.length, t2 = new Array(e2);
        for (let r2 = 0; r2 < e2; r2++) {
          const e3 = this.items[this.start + r2];
          if (void 0 === e3) throw new Error("RetainedWindowBuffer retained window is sparse");
          t2[r2] = e3;
        }
        return t2;
      }
      *values() {
        for (let e2 = this.start; e2 < this.items.length; e2++) {
          const t2 = this.items[e2];
          if (void 0 === t2) throw new Error("RetainedWindowBuffer retained window is sparse");
          yield t2;
        }
      }
      evictOldest(e2) {
        if (e2 <= 0) return [];
        if (e2 > this.length) throw new Error(`RetainedWindowBuffer.evictOldest count ${e2} exceeds length ${this.length}`);
        const t2 = this.start, r2 = new Array(e2);
        for (let n2 = 0; n2 < e2; n2++) {
          const e3 = this.items[t2 + n2];
          if (void 0 === e3) throw new Error("RetainedWindowBuffer evicted a sparse slot");
          r2[n2] = e3, this.items[t2 + n2] = void 0;
        }
        return this.start = t2 + e2, r2;
      }
      enforceCap(e2) {
        const t2 = this.length - e2;
        return t2 <= 0 ? [] : this.evictOldest(t2);
      }
      maybeCompact(e2) {
        e2 <= 0 || this.start < e2 || (this.items = this.items.slice(this.start), this.start = 0);
      }
    }
    class a {
      constructor() {
        this.atLatestCheckpoint = [];
      }
      note(e2) {
        switch (e2.event.case) {
          case "turnStarted":
            return this.running = { turnId: e2.event.value.turnId, started: e2, calls: /* @__PURE__ */ new Map() }, void (this.atLatestCheckpoint = []);
          case "turnSettled":
            return void (this.running?.turnId === e2.event.value.turnId && (this.running = void 0, this.atLatestCheckpoint = []));
          case "turnInteractionsSuperseded":
            return void (this.running?.turnId === e2.event.value.turnId && (this.running.calls.clear(), this.atLatestCheckpoint = this.atLatestCheckpoint.slice(0, 1)));
          case "conversationState":
            return void (this.atLatestCheckpoint = this.snapshot(e2.eventId));
          case "subagentStarted": {
            const t2 = this.running?.calls.get(e2.event.value.parentToolCallId);
            return void (void 0 !== t2 && (t2.subagentStarted = e2));
          }
          case "interactionUpdate":
            return void this.noteInteractionUpdate(e2, e2.event.value.message);
        }
      }
      replay() {
        return this.atLatestCheckpoint.filter((e2) => {
          if ("subagentStarted" !== e2.event.case) return true;
          const t2 = this.running?.calls.get(e2.event.value.parentToolCallId);
          return void 0 === t2?.completed;
        });
      }
      snapshot(e2) {
        const t2 = this.running;
        if (void 0 === t2) return [];
        [...t2.calls.values()].every((e3) => void 0 !== e3.completed) && t2.calls.clear();
        const r2 = [t2.started];
        for (const e3 of t2.calls.values()) r2.push(e3.start), void 0 !== e3.subagentStarted && r2.push(e3.subagentStarted), void 0 !== e3.completed && r2.push(e3.completed);
        return r2.map((t3) => ({ ...t3, eventId: e2 }));
      }
      noteInteractionUpdate(e2, t2) {
        const r2 = this.running?.calls;
        if (void 0 !== r2) switch (t2.case) {
          case "partialToolCall":
          case "toolCallStarted": {
            const n2 = r2.get(t2.value.callId);
            return void (void 0 === n2 ? r2.set(t2.value.callId, { start: e2 }) : n2.start = e2);
          }
          case "toolCallCompleted": {
            const n2 = r2.get(t2.value.callId);
            return void (void 0 !== n2 && (n2.completed = e2));
          }
        }
      }
    }
    const c = 0, l = 1, u = 2, d = 3, p = 4, m = 5;
    function h(e2) {
      switch (e2.event.case) {
        case "turnStarted":
        case "turnSettled":
        case "turnAwaitingInput":
        case "interactionResolved":
        case "subagentStarted":
        case "turnInteractionsSuperseded":
          return e2.event.value.turnId;
        case "conversationState":
        case "interactionUpdate":
        case "backgroundTaskCompleted":
          return;
        default:
          e2.event;
          return;
      }
    }
    function f(e2) {
      if ("conversationState" === e2.event.case) return e2.event.value;
      if ("turnInteractionsSuperseded" === e2.event.case) {
        const t2 = e2.event.value.continuation;
        switch (t2.case) {
          case "replayActionFromState":
          case "resumeFromCheckpoint":
            return t2.value;
          case void 0:
            return;
          default:
            return;
        }
      }
    }
    function g(e2, t2, r2) {
      return t2 ? e2 ? void 0 === r2 ? { status: "missing_history" } : { status: "ok", history: r2 } : { status: "missing_start" } : e2 ? { status: "in_progress" } : { status: "not_found" };
    }
    class y {
      constructor() {
        this.start = 0, this.end = 0, this.tags = new Uint8Array(0), this.turnIds = [], this.histories = [];
      }
      get length() {
        return this.end - this.start;
      }
      append(e2) {
        this.ensureTagCapacity(this.end + 1);
        const t2 = this.end;
        this.tags[t2] = (function(e3) {
          switch (e3.event.case) {
            case "conversationState":
              return l;
            case "turnInteractionsSuperseded":
              return u;
            case "turnStarted":
              return d;
            case "turnSettled":
              return p;
            case "backgroundTaskCompleted":
              return m;
            case "interactionUpdate":
            case "turnAwaitingInput":
            case "interactionResolved":
            case "subagentStarted":
              return c;
            default:
              return e3.event, c;
          }
        })(e2), t2 === this.turnIds.length ? (this.turnIds.push(h(e2)), this.histories.push(f(e2))) : (this.turnIds[t2] = h(e2), this.histories[t2] = f(e2)), this.end = t2 + 1;
      }
      evictOldest(e2) {
        if (e2 <= 0) return;
        if (e2 > this.length) throw new Error(`SessionEventColumns.evictOldest count ${e2} exceeds length ${this.length}`);
        const t2 = this.start;
        for (let r2 = 0; r2 < e2; r2++) {
          const e3 = t2 + r2;
          this.tags[e3] = c, this.turnIds[e3] = void 0, this.histories[e3] = void 0;
        }
        this.start = t2 + e2;
      }
      maybeCompact(e2) {
        if (e2 <= 0 || this.start < e2) return;
        const t2 = this.end - this.start;
        this.tags = this.tags.slice(this.start, this.end), this.turnIds.splice(0, this.start), this.histories.splice(0, this.start), this.start = 0, this.end = t2;
      }
      scanHistoryThroughTurn(e2) {
        return (function(e3, t2, r2, n2, s2, o2) {
          let i2, a2 = false, c2 = false;
          for (let m2 = n2; m2 < s2; m2++) {
            const n3 = e3[m2];
            if (n3 === l || n3 === u) {
              const e4 = r2[m2];
              void 0 !== e4 && (i2 = e4);
              continue;
            }
            if (n3 !== d || t2[m2] !== o2) {
              if (n3 === p && t2[m2] === o2) {
                c2 = true;
                break;
              }
            } else a2 = true;
          }
          return g(a2, c2, i2);
        })(this.tags, this.turnIds, this.histories, this.start, this.end, e2);
      }
      findLatestConversationStateLogicalIndex() {
        return (function(e2, t2, r2) {
          let n2 = -1;
          for (let s2 = t2; s2 < r2; s2++) e2[s2] === l && (n2 = s2 - t2);
          return n2;
        })(this.tags, this.start, this.end);
      }
      ensureTagCapacity(e2) {
        if (e2 <= this.tags.length) return;
        let t2 = 0 === this.tags.length ? 16 : this.tags.length;
        for (; t2 < e2; ) t2 *= 2;
        const r2 = new Uint8Array(t2);
        r2.set(this.tags), this.tags = r2;
      }
    }
    var w = r(98934);
    class v extends Error {
      constructor(e2) {
        super(`Agent host session event cursor too old: requested lastEventId=${void 0 === e2.requestedLastEventId ? "<start>" : e2.requestedLastEventId.toString()}, firstRetainedEventId=${e2.firstRetainedEventId.toString()}`), this.code = "SESSION_EVENT_CURSOR_TOO_OLD", this.name = "AgentHostSessionEventCursorTooOldError", this.requestedLastEventId = e2.requestedLastEventId, this.firstRetainedEventId = e2.firstRetainedEventId;
      }
    }
    class _ extends Error {
      constructor(e2) {
        super(e2.detail ?? `Agent host fork history unavailable for turn ${e2.turnId}: required events were evicted (firstRetainedEventId=${e2.firstRetainedEventId.toString()}) and no durable spill restored them`), this.code = "SESSION_FORK_HISTORY_UNAVAILABLE", this.name = "AgentHostSessionForkHistoryUnavailableError", this.turnId = e2.turnId, this.firstRetainedEventId = e2.firstRetainedEventId;
      }
    }
    const A = { onEvict: () => {
    } }, S = 1e5;
    class b {
      constructor(e2 = {}) {
        this.events = new i(), this.columns = new y(), this.runningTurn = new a(), this.waiters = /* @__PURE__ */ new Set(), this.nextEventId = BigInt(1), this.firstRetainedEventId = BigInt(1), this.completionsAwaitingWakeupTurn = /* @__PURE__ */ new Map(), this.closed = false, this.maxInMemoryEvents = (function(e3) {
          if (void 0 === e3 || !Number.isFinite(e3)) return;
          const t2 = Math.floor(e3);
          return t2 < 1 ? void 0 : t2;
        })(e2.maxInMemoryEvents), this.overflowSink = e2.overflowSink ?? A;
      }
      getLastEventId() {
        return this.nextEventId - BigInt(1);
      }
      getFirstRetainedEventId() {
        return this.firstRetainedEventId;
      }
      getInMemoryEventCount() {
        return this.events.length;
      }
      getPhysicalBufferLength() {
        return this.events.physicalLength;
      }
      getPhysicalLiveEventCount() {
        return this.events.liveCount;
      }
      setOnAppend(e2) {
        this.onAppend = e2;
      }
      setPendingInteractionsSource(e2) {
        this.pendingInteractions = e2;
      }
      close() {
        this.closed || (this.closed = true, this.notifyWaiters());
      }
      appendInteractionUpdate(e2) {
        this.append({ eventId: this.nextEventId, event: { case: "interactionUpdate", value: e2 } });
      }
      appendConversationState(e2) {
        const t2 = this.lastConversationState;
        E(e2.rootPromptMessagesJson, t2?.rootPromptMessagesJson ?? []), E(e2.turns, t2?.turns ?? []), this.lastConversationState = e2, this.append({ eventId: this.nextEventId, event: { case: "conversationState", value: e2 } });
      }
      appendTurnInteractionsSuperseded(e2, t2) {
        switch (t2.case) {
          case "replayActionFromState":
            return void this.append({ eventId: this.nextEventId, event: { case: "turnInteractionsSuperseded", value: { turnId: e2, continuation: { case: "replayActionFromState", value: (0, o.ks)(t2.value) } } } });
          case "resumeFromCheckpoint":
            return void this.append({ eventId: this.nextEventId, event: { case: "turnInteractionsSuperseded", value: { turnId: e2, continuation: { case: "resumeFromCheckpoint", value: (0, o.ks)(t2.value) } } } });
          default:
            return;
        }
      }
      appendTurnStarted(e2) {
        this.append({ eventId: this.nextEventId, event: { case: "turnStarted", value: { turnId: e2 } } });
      }
      appendTurnAwaitingInput(e2, t2, r2, n2) {
        const s2 = this.nextEventId;
        return this.append({ eventId: s2, event: { case: "turnAwaitingInput", value: { turnId: e2, requestId: t2, interactionId: r2, question: n2 } } }), s2;
      }
      appendInteractionResolved(e2, t2, r2) {
        this.append({ eventId: this.nextEventId, event: { case: "interactionResolved", value: { turnId: e2, interactionId: t2, resolution: r2 } } });
      }
      appendTurnCompleted(e2) {
        this.append({ eventId: this.nextEventId, event: { case: "turnSettled", value: { turnId: e2, outcome: s.jz.COMPLETED } } });
      }
      appendTurnSettledByError(e2, t2) {
        return t2 instanceof n.i6 ? (this.append({ eventId: this.nextEventId, event: { case: "turnSettled", value: { turnId: e2, outcome: s.jz.INTERRUPTED, detail: t2.message, interruptedBy: s.TQ.HOST, stopReason: s.Pi.MAX_STEPS_REACHED } } }), s.jz.INTERRUPTED) : (this.append({ eventId: this.nextEventId, event: { case: "turnSettled", value: { turnId: e2, outcome: s.jz.FAILED, detail: (0, w.E)(t2), error: (0, w.V)(t2) } } }), s.jz.FAILED);
      }
      appendTurnCancelled(e2, t2, r2) {
        this.append({ eventId: this.nextEventId, event: { case: "turnSettled", value: { turnId: e2, outcome: s.jz.INTERRUPTED, detail: t2, interruptedBy: r2 } } });
      }
      appendSubagentStarted(e2) {
        this.append({ eventId: this.nextEventId, event: { case: "subagentStarted", value: { turnId: e2.turnId, parentToolCallId: e2.parentToolCallId, childSessionId: e2.childSessionId, rootSessionId: e2.rootSessionId } } });
      }
      appendBackgroundTaskCompleted(e2) {
        this.completionsAwaitingWakeupTurn.set(this.nextEventId, C(e2)), this.append({ eventId: this.nextEventId, event: { case: "backgroundTaskCompleted", value: { completion: e2 } } });
      }
      markBackgroundTaskCompletionsWoken(e2) {
        const t2 = new Set(e2.map(C));
        for (const [e3, r2] of this.completionsAwaitingWakeupTurn) t2.has(r2) && this.completionsAwaitingWakeupTurn.delete(e3);
      }
      getSessionHistoryThroughTurn(e2) {
        const t2 = this.columns.scanHistoryThroughTurn(e2);
        if ("ok" === t2.status) return (0, o.ks)(t2.history);
        if ("in_progress" === t2.status) throw new Error(`Agent host turn is still in progress: ${e2}`);
        if (this.firstRetainedEventId > BigInt(1)) {
          const r2 = this.overflowSink.readEvictedRange?.({ fromEventId: BigInt(1), toEventIdExclusive: this.firstRetainedEventId });
          if (void 0 !== r2) {
            const t3 = (function(e3, t4) {
              let r3, n2 = false, s2 = false;
              for (const o2 of e3) if ("conversationState" !== o2.event.case) {
                if ("turnInteractionsSuperseded" === o2.event.case) {
                  const e4 = o2.event.value.continuation;
                  switch (e4.case) {
                    case "replayActionFromState":
                    case "resumeFromCheckpoint":
                      r3 = e4.value;
                  }
                  continue;
                }
                if ("turnStarted" !== o2.event.case || o2.event.value.turnId !== t4) {
                  if ("turnSettled" === o2.event.case && o2.event.value.turnId === t4) {
                    s2 = true;
                    break;
                  }
                } else n2 = true;
              } else r3 = o2.event.value;
              return g(n2, s2, r3);
            })(r2.concat(this.events.toArray()), e2);
            if ("ok" === t3.status) return (0, o.ks)(t3.history);
            if ("in_progress" === t3.status) throw new Error(`Agent host turn is still in progress: ${e2}`);
            I(e2, t3.status);
          }
          throw new _({ turnId: e2, firstRetainedEventId: this.firstRetainedEventId, detail: "missing_history" === t2.status ? `Missing fork history for agent host turn: ${e2} (required conversationState was evicted; firstRetainedEventId=${this.firstRetainedEventId.toString()})` : void 0 });
        }
        I(e2, t2.status);
      }
      async *subscribe(e2, t2, r2) {
        true === r2?.backgroundTaskCompletionsOnly ? yield* this.streamFrom(e2, (t2 ?? BigInt(0)) + BigInt(1), t2, true) : void 0 === t2 ? yield* this.subscribeFromLatestCheckpoint(e2) : yield* this.subscribeFromCursor(e2, t2);
      }
      async *subscribeFromCursor(e2, t2) {
        this.assertCursorRetained(t2), yield* this.streamFrom(e2, t2 + BigInt(1), t2, false);
      }
      async *subscribeFromLatestCheckpoint(e2) {
        const t2 = this.findLatestConversationStateEvent();
        if (void 0 === t2) return void (yield* this.streamFrom(e2, this.firstRetainedEventId, void 0, false));
        const r2 = this.runningTurn.replay();
        yield t2, yield* r2, yield* this.pendingAwaitingInputBefore(t2.eventId), yield* this.streamFrom(e2, t2.eventId + BigInt(1), void 0, false);
      }
      *pendingAwaitingInputBefore(e2) {
        for (const t2 of this.pendingInteractions?.() ?? []) t2.eventId >= e2 || (yield { eventId: e2, event: { case: "turnAwaitingInput", value: { turnId: t2.turnId, requestId: t2.requestId, interactionId: t2.interactionId, question: t2.question } } });
      }
      async *streamFrom(e2, t2, r2, n2) {
        let s2 = t2;
        for (s2 > this.nextEventId && (s2 = this.firstRetainedEventId); !e2.signal.aborted; ) {
          if (s2 < this.firstRetainedEventId) {
            if (n2) {
              s2 = this.firstRetainedEventId;
              continue;
            }
            throw new v({ requestedLastEventId: r2, firstRetainedEventId: this.firstRetainedEventId });
          }
          const t3 = this.findEventById(s2);
          if (void 0 === t3) {
            if (this.closed) return;
            await this.waitForEvent(e2);
          } else s2 = t3.eventId + BigInt(1), n2 && !this.completionsAwaitingWakeupTurn.has(t3.eventId) || (yield t3);
        }
      }
      findLatestConversationStateEvent() {
        const e2 = this.columns.findLatestConversationStateLogicalIndex();
        if (!(e2 < 0)) return this.events.at(e2);
      }
      assertCursorRetained(e2) {
        if ((e2 ?? BigInt(0)) + BigInt(1) < this.firstRetainedEventId) throw new v({ requestedLastEventId: e2, firstRetainedEventId: this.firstRetainedEventId });
      }
      findEventById(e2) {
        if (e2 < this.firstRetainedEventId || e2 >= this.nextEventId) return;
        const t2 = Number(e2 - this.firstRetainedEventId), r2 = this.events.at(t2);
        if (void 0 !== r2 && r2.eventId === e2) return r2;
        for (const t3 of this.events.values()) if (t3.eventId === e2) return t3;
      }
      append(e2) {
        this.nextEventId += BigInt(1), this.events.push(e2), this.columns.append(e2), this.runningTurn.note(e2), this.enforceInMemoryCap(), this.onAppend?.(), this.notifyWaiters();
      }
      enforceInMemoryCap() {
        const e2 = this.maxInMemoryEvents;
        if (void 0 === e2) return;
        const t2 = this.events.enforceCap(e2);
        if (0 !== t2.length) {
          this.columns.evictOldest(t2.length);
          for (const e3 of t2) this.completionsAwaitingWakeupTurn.delete(e3.eventId);
          this.firstRetainedEventId = this.events.first()?.eventId ?? this.nextEventId;
          try {
            this.overflowSink.onEvict({ evictedEvents: t2, firstRetainedEventId: this.firstRetainedEventId });
          } finally {
            this.events.maybeCompact(e2), this.columns.maybeCompact(e2);
          }
        }
      }
      notifyWaiters() {
        const e2 = Array.from(this.waiters);
        this.waiters.clear();
        for (const t2 of e2) t2();
      }
      waitForEvent(e2) {
        return new Promise((t2) => {
          if (e2.signal.aborted || this.closed) return void t2();
          const r2 = () => {
            this.waiters.delete(n2), e2.signal.removeEventListener("abort", s2);
          }, n2 = () => {
            r2(), t2();
          }, s2 = () => {
            r2(), t2();
          };
          this.waiters.add(n2), e2.signal.addEventListener("abort", s2, { once: true });
        });
      }
    }
    function E(e2, t2) {
      for (let r2 = 0; r2 < e2.length; r2++) {
        const n2 = e2[r2];
        r2 < t2.length && (n2 === t2[r2] || 0 === Buffer.compare(n2, t2[r2])) ? e2[r2] = t2[r2] : n2.byteLength !== n2.buffer.byteLength && (e2[r2] = new Uint8Array(n2));
      }
    }
    function I(e2, t2) {
      if ("missing_history" === t2) throw new Error(`Missing fork history for agent host turn: ${e2}`);
      if ("missing_start" === t2) throw new Error(`Agent host turn has no forkable history: ${e2}`);
      throw new Error(`Agent host turn not found: ${e2}`);
    }
    function C(e2) {
      return `${e2.taskId}\0${e2.toolCallId}\0${e2.reason}`;
    }
  }