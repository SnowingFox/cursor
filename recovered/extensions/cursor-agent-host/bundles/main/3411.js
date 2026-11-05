// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 3411 range:130511..135117
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3411: (e, t, r) => {
    "use strict";
    r.d(t, { h: () => a });
    var n = r(37949), s = r(69584), o = r(91434);
    const i = (0, n.h)("ControlledConversationActionManager");
    class a {
      get signal() {
        return this.abortController.signal;
      }
      get abortRequested() {
        return this.abortCalled;
      }
      constructor() {
        this.abortCallbacks = [], this.abortController = new AbortController(), this.acceptsActions = true, this.disposed = false, this.abortStarted = false, this.abortCalled = false, this.runActive = false, this.unprocessedUserMessages = [], this.clientStream = (0, o.Jt)();
      }
      addAbortCallback(e2) {
        this.abortCallbacks.push(e2);
      }
      abort(e2, t2) {
        this.abortCalled = true;
        if (this.abortController.signal.aborted || this.abortStarted) return;
        const r2 = t2?.interruptedPendingToolCallResolutions;
        if (this.abortStarted = true, !this.runActive) {
          this.abortController.abort(e2);
          for (const e3 of this.abortCallbacks) e3();
          return void (this.abortCallbacks.length = 0);
        }
        const n2 = this.abortController, o2 = [...this.abortCallbacks];
        this.abortCallbacks.length = 0, this.submitConversationAction(new s.QFf({ action: { case: "cancelAction", value: new s.TTG({ reason: e2, interruptedPendingToolCallResolutions: r2 }) } })).catch(() => {
        }).finally(() => {
          n2.abort(e2);
          for (const e3 of o2) e3();
          if (this.abortController === n2) {
            const e3 = [...this.abortCallbacks];
            this.abortCallbacks.length = 0;
            for (const t3 of e3) t3();
          }
        });
      }
      async submitConversationAction(e2) {
        if (!this.acceptsActions) throw new o.W2("ControlledConversationActionManager is not accepting actions");
        if ("userMessageAction" === e2.action.case) {
          const t2 = e2.action.value.userMessage;
          t2 && this.unprocessedUserMessages.push(t2);
        }
        await this.clientStream.write(e2);
      }
      queueFollowUpUserMessage(e2) {
        if (this.disposed || this.abortStarted) throw new o.W2("ControlledConversationActionManager run was aborted or disposed");
        this.unprocessedUserMessages.push(e2);
      }
      async enqueueReplayableConversationAction(e2) {
        if ("asyncAskQuestionCompletionAction" !== e2.action.case) throw new TypeError("Only asyncAskQuestionCompletionAction can use enqueue acknowledgement");
        if (!this.acceptsActions) throw new o.W2("ControlledConversationActionManager is not accepting actions");
        this.clientStream.write(e2).catch(() => {
        });
      }
      markMessageAsProcessed(e2) {
        this.unprocessedUserMessages = this.unprocessedUserMessages.filter((t2) => t2.messageId !== e2.messageId);
      }
      requeueMessage(e2) {
        this.unprocessedUserMessages.some((t2) => t2.messageId === e2.messageId) || this.unprocessedUserMessages.unshift(e2);
      }
      getUnprocessedUserMessages() {
        return [...this.unprocessedUserMessages];
      }
      hasUnprocessedMessages() {
        return this.unprocessedUserMessages.length > 0;
      }
      close() {
        this.acceptsActions = false, this.clientStream.close();
      }
      reopen() {
        this.disposed || this.acceptsActions || this.resetStream();
      }
      resetStream() {
        if (this.disposed) throw new o.W2("ControlledConversationActionManager disposed");
        this.acceptsActions = false, this.clientStream.close(), this.clientStream = (0, o.Jt)(), this.acceptsActions = true, this.abortController = new AbortController(), this.abortStarted = false;
        for (const e2 of this.unprocessedUserMessages) this.clientStream.write(new s.QFf({ action: { case: "userMessageAction", value: new s.Vtf({ userMessage: e2 }) } })).catch(() => {
        });
      }
      async run(e2, t2) {
        const r2 = this.clientStream;
        this.runActive = true;
        try {
          for await (const n2 of r2) try {
            await t2.write(n2);
          } catch (t3) {
            i.error(e2, "Error writing conversation action", t3);
          }
        } catch (e3) {
          if (!(e3 instanceof o.W2)) throw e3;
        } finally {
          this.clientStream === r2 && (this.runActive = false);
        }
      }
      dispose() {
        this.disposed || (this.disposed = true, this.abortCallbacks.length = 0, this.acceptsActions = false, this.clientStream.throw(new o.W2("ControlledConversationActionManager disposed")));
      }
    }
  }