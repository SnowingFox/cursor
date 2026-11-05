// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 98739 range:15110480..15120614
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98739: (e, t, r) => {
    "use strict";
    r.d(t, { D$: () => u, FC: () => l, Sc: () => i, nb: () => a });
    var n = r(37949), s = r(2798);
    const o = (0, n.h)("RemoteConversationActionManager");
    Error;
    function i(e2) {
      return "object" == typeof e2 && null !== e2 && "intentional" in e2 && true === e2.intentional;
    }
    class a {
      async pop(e2) {
      }
      async peek(e2) {
      }
    }
    class c extends Error {
      constructor() {
        super(...arguments), this.name = "ConversationActionMailboxOverflowError";
      }
    }
    class l {
      constructor(e2) {
        this.maxActions = e2, this.queue = [];
      }
      get length() {
        return this.queue.length;
      }
      push(e2) {
        if (true === this.interceptor?.(e2)) return false;
        if (this.queue.length >= this.maxActions) throw new c("Conversation action mailbox limit exceeded");
        return this.queue.push(e2), true;
      }
      setInterceptor(e2) {
        this.interceptor = e2;
        const t2 = [...this.queue];
        this.clear();
        for (const r2 of t2) e2(r2) || this.queue.push(r2);
      }
      shift() {
        return this.queue.shift();
      }
      peek() {
        return this.queue[0];
      }
      clear() {
        this.queue.length = 0;
      }
    }
    class u {
      constructor(e2, t2, r2, n2) {
        this.mailbox = t2, this.cancel = r2, this.transformedActions = /* @__PURE__ */ new WeakMap(), this.injectionDeliveryBuffer = [], this.injectionAdmittedListeners = /* @__PURE__ */ new Set(), this.listenerCtx = e2, this.subagentCanceler = n2?.subagentCanceler, this.sideChannelHandlers = n2?.sideChannelHandlers ?? {}, this.transform = n2?.transform, this.contextInjectionOptions = n2?.contextInjection, void 0 !== this.contextInjectionOptions && (this.injectionLedger = new s.y(this.contextInjectionOptions.activeRunId, { onStateChange: this.contextInjectionOptions.onInjectionStateChange })), t2.setInterceptor((e3) => this.handleImmediateAction(e3));
      }
      endRun() {
        this.injectionLedger?.endRun({ retagClaimed: false }), this.resyncOverduePendingSteerFallback();
      }
      resyncOverduePendingSteerFallback() {
        const e2 = this.injectionLedger?.oldestPendingAdmittedAtMs("user");
        if (void 0 !== this.overduePendingSteerTimer && (clearTimeout(this.overduePendingSteerTimer), this.overduePendingSteerTimer = void 0), void 0 === e2) return;
        const t2 = Math.max(0, e2 + 3e5 - Date.now()), r2 = setTimeout(() => {
          this.overduePendingSteerTimer = void 0;
          const e3 = this.injectionLedger?.retagQueuedUserInjectionsToNextTurn() ?? [];
          e3.length > 0 && o.info(this.listenerCtx, "Overdue pending context injections converted to queued follow-ups", { convertedInjectionIds: e3 });
        }, t2);
        r2.unref?.(), this.overduePendingSteerTimer = r2;
      }
      handleImmediateAction(e2) {
        if ("cancelAction" === e2.action.case) {
          const t2 = e2.action.value.reason || "unknown";
          o.info(this.listenerCtx, "Cancel action received", { reason: t2 });
          const r2 = [.../* @__PURE__ */ new Set([...e2.action.value.interruptedPendingToolCallResolutions?.resolutions.filter((e3) => "taskResult" === e3.resolution.case).map((e3) => e3.toolCallId) ?? []])];
          return this.mailbox.clear(), this.injectionDeliveryBuffer.length = 0, this.injectionLedger?.endRun(), this.resyncOverduePendingSteerFallback(), this.subagentCanceler?.cancelAll({ intentional: true, reason: "cancel action", excludeToolCallIds: r2 }), this.cancel(), true;
        }
        if ("cancelSubagentAction" === e2.action.case) {
          const t2 = e2.action.value.subagentId;
          return t2 && this.subagentCanceler && this.subagentCanceler.cancel(t2), true;
        }
        if ("injectContextAction" === e2.action.case) return this.handleInjectContext(e2, e2.action.value), true;
        if ("backgroundShellAction" === e2.action.case || "backgroundSubagentAction" === e2.action.case) {
          const t2 = e2.action.case, r2 = e2.action.value.toolCallId, n2 = this.sideChannelHandlers[t2];
          if (r2 && n2) return n2(r2).catch((e3) => {
            o.error(this.listenerCtx, `Error in side-channel handler for ${t2}`, e3);
          }), true;
        }
        return false;
      }
      handleInjectContext(e2, t2) {
        if (void 0 === this.injectionLedger || void 0 === this.contextInjectionOptions) return void o.info(this.listenerCtx, "InjectContextAction received without context-injection support; dropping", { injectionId: t2.injectionId });
        if ("systemContext" === t2.payload.case) return o.info(this.listenerCtx, "System context injection rejected", { injectionId: t2.injectionId, producer: t2.payload.value.producer }), void this.contextInjectionOptions.onInjectionStateChange?.(t2.injectionId, { kind: "rejected", reason: "producer_not_allowlisted" });
        if ("userContext" !== t2.payload.case || void 0 === t2.payload.value.userMessage) return o.info(this.listenerCtx, "Context injection rejected: missing user payload", { injectionId: t2.injectionId }), void this.contextInjectionOptions.onInjectionStateChange?.(t2.injectionId, { kind: "rejected", reason: "invalid_payload" });
        const r2 = this.injectionLedger.admit({ injectionId: t2.injectionId, expectedRunId: t2.expectedRunId, source: "user", payload: { envelope: e2, userContext: t2.payload.value } });
        if (o.info(this.listenerCtx, "Context injection admission", { injectionId: t2.injectionId, expectedRunId: t2.expectedRunId, admission: r2.kind, ..."rejected" === r2.kind ? { reason: r2.reason } : {} }), "queued" === r2.kind) {
          this.resyncOverduePendingSteerFallback();
          for (const e3 of this.injectionAdmittedListeners) try {
            e3();
          } catch (e4) {
            o.error(this.listenerCtx, "Error in injection-admitted listener", e4);
          }
        }
        "rejected" === r2.kind && this.contextInjectionOptions.onInjectionStateChange?.(t2.injectionId, { kind: "rejected", reason: r2.reason });
      }
      cancelInjection(e2) {
        const t2 = this.injectionLedger?.cancel(e2) ?? false;
        return t2 && this.resyncOverduePendingSteerFallback(), t2;
      }
      getInjectionState(e2) {
        return this.injectionLedger?.getState(e2);
      }
      peekIsClaimedInjection() {
        return void 0 !== this.injectionDeliveryBuffer[0];
      }
      failConsumedInjectionDelivery() {
        const e2 = this.lastConsumedInjectionId;
        if (this.lastConsumedInjectionId = void 0, void 0 === e2) return false;
        const t2 = this.injectionLedger?.failDeliveredInjection(e2) ?? false;
        return t2 && o.info(this.listenerCtx, "Consumed injection reverted after turn-build failure", { injectionId: e2 }), t2;
      }
      getContextInjectionToolSignal() {
        const e2 = this.injectionLedger;
        if (void 0 !== e2) return { hasPendingUserInjections: () => e2.pendingCount("user") > 0, onUserInjectionAdmitted: (e3) => (this.injectionAdmittedListeners.add(e3), () => {
          this.injectionAdmittedListeners.delete(e3);
        }) };
      }
      claimPendingInjectionsIfIdle() {
        if (void 0 === this.injectionLedger || this.mailbox.length > 0 || this.injectionDeliveryBuffer.length > 0) return;
        const e2 = this.injectionLedger.claimBatch("user");
        void 0 !== e2 && (e2.injections.forEach((e3) => {
          const { envelope: t2, userContext: r2 } = e3.payload;
          this.injectionDeliveryBuffer.push({ injectionId: e3.injectionId, action: { _privacyMode: t2._privacyMode, triggeringAuthId: t2.triggeringAuthId, triggeringUserInfo: t2.triggeringUserInfo, action: { case: "userMessageAction", value: { _privacyMode: t2._privacyMode, userMessage: r2.userMessage, requestContext: r2.requestContext, prependUserMessages: [] } } } });
        }), o.info(this.listenerCtx, "Context injection batch claimed", { deliveryBatchId: e2.deliveryBatchId, batchSize: e2.injections.length }), this.resyncOverduePendingSteerFallback());
      }
      async pop(e2) {
        const t2 = this.injectionDeliveryBuffer.shift();
        if (void 0 !== t2) return this.injectionLedger?.ackDeliveredInjection(t2.injectionId, this.contextInjectionOptions?.currentStep?.() ?? 0), this.lastConsumedInjectionId = t2.injectionId, t2.action;
        this.lastConsumedInjectionId = void 0;
        const r2 = this.mailbox.length, n2 = this.mailbox.shift(), s2 = this.mailbox.length;
        return "userMessageAction" === n2?.action.case && r2 >= 3 && o.info(this.listenerCtx, "conversation_action_queue_dequeue", { queueDepthBefore: r2, queueDepthAfter: s2, actionCase: n2.action.case, userMessageId: n2.action.value.userMessage?.messageId }), void 0 === n2 ? (this.claimPendingInjectionsIfIdle(), void 0 !== this.injectionDeliveryBuffer[0] ? this.pop(e2) : void 0) : await this.transformOnce(n2);
      }
      async peek(e2) {
        if (void 0 !== this.injectionDeliveryBuffer[0]) return this.injectionDeliveryBuffer[0].action;
        const t2 = this.mailbox.peek();
        return void 0 !== t2 ? await this.transformOnce(t2) : (this.claimPendingInjectionsIfIdle(), this.injectionDeliveryBuffer.at(0)?.action);
      }
      push(e2) {
        const t2 = this.mailbox.length, r2 = "userMessageAction" === e2.action.case ? e2.action.value.userMessage?.messageId : void 0, n2 = "userMessageAction" === e2.action.case ? e2.action.value.prependUserMessages?.length ?? 0 : 0;
        if (!this.mailbox.push(e2)) return;
        const s2 = this.mailbox.length;
        (n2 > 0 || s2 >= 3) && o.info(this.listenerCtx, "conversation_action_queue_enqueue", { queueDepthBefore: t2, queueDepthAfter: s2, actionCase: e2.action.case, userMessageId: r2, prependUserMessagesCount: n2 });
      }
      transformOnce(e2) {
        if (void 0 === this.transform) return Promise.resolve(e2);
        const t2 = this.transformedActions.get(e2);
        if (void 0 !== t2) return t2;
        const r2 = this.transform(e2);
        return this.transformedActions.set(e2, r2), r2;
      }
    }
  }