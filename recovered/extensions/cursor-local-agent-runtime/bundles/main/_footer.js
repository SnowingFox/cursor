// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: (footer) range:7944175..7959006
// basis: webpack-container confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
}, __webpack_module_cache__ = {}, leafPrototypes, getProto, installedChunks;
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var r = __webpack_module_cache__[e] = { exports: {} };
    return __webpack_modules__[e].call(r.exports, r, r.exports, __webpack_require__), r.exports;
  }
  __webpack_require__.m = __webpack_modules__, __webpack_require__.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return __webpack_require__.d(t, { a: t }), t;
  }, getProto = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__, __webpack_require__.t = function(e, t) {
    if (1 & t && (e = this(e)), 8 & t) return e;
    if ("object" == typeof e && e) {
      if (4 & t && e.__esModule) return e;
      if (16 & t && "function" == typeof e.then) return e;
    }
    var r = /* @__PURE__ */ Object.create(null);
    __webpack_require__.r(r);
    var n = {};
    leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
    for (var o = 2 & t && e; "object" == typeof o && !~leafPrototypes.indexOf(o); o = getProto(o)) Object.getOwnPropertyNames(o).forEach((t2) => n[t2] = () => e[t2]);
    return n.default = () => e, __webpack_require__.d(r, n), r;
  }, __webpack_require__.d = (e, t) => {
    for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, { enumerable: true, get: t[r] });
  }, __webpack_require__.f = {}, __webpack_require__.e = (e) => Promise.all(Object.keys(__webpack_require__.f).reduce((t, r) => (__webpack_require__.f[r](e, t), t), [])), __webpack_require__.u = (e) => e + ".js", __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = (e) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
  }, installedChunks = { 792: 1 }, __webpack_require__.f.require = (e, t) => {
    installedChunks[e] || ((e2) => {
      var t2 = e2.modules, r = e2.ids, n = e2.runtime;
      for (var o in t2) __webpack_require__.o(t2, o) && (__webpack_require__.m[o] = t2[o]);
      n && n(__webpack_require__);
      for (var s = 0; s < r.length; s++) installedChunks[r[s]] = 1;
    })(require("./" + __webpack_require__.u(e)));
  };
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { activate: () => y });
    var e = __webpack_require__(29966), t = __webpack_require__(37949), r = __webpack_require__(69584), n = __webpack_require__(91434);
    const o = (0, t.h)("ControlledConversationActionManager");
    class s {
      get signal() {
        return this.abortController.signal;
      }
      get abortRequested() {
        return this.abortCalled;
      }
      constructor() {
        this.abortCallbacks = [], this.abortController = new AbortController(), this.acceptsActions = true, this.disposed = false, this.abortStarted = false, this.abortCalled = false, this.runActive = false, this.unprocessedUserMessages = [], this.clientStream = (0, n.Jt)();
      }
      addAbortCallback(e2) {
        this.abortCallbacks.push(e2);
      }
      abort(e2, t2) {
        this.abortCalled = true;
        if (this.abortController.signal.aborted || this.abortStarted) return;
        const n2 = t2?.interruptedPendingToolCallResolutions;
        if (this.abortStarted = true, !this.runActive) {
          this.abortController.abort(e2);
          for (const e3 of this.abortCallbacks) e3();
          return void (this.abortCallbacks.length = 0);
        }
        const o2 = this.abortController, s2 = [...this.abortCallbacks];
        this.abortCallbacks.length = 0, this.submitConversationAction(new r.QFf({ action: { case: "cancelAction", value: new r.TTG({ reason: e2, interruptedPendingToolCallResolutions: n2 }) } })).catch(() => {
        }).finally(() => {
          o2.abort(e2);
          for (const e3 of s2) e3();
          if (this.abortController === o2) {
            const e3 = [...this.abortCallbacks];
            this.abortCallbacks.length = 0;
            for (const t3 of e3) t3();
          }
        });
      }
      async submitConversationAction(e2) {
        if (!this.acceptsActions) throw new n.W2("ControlledConversationActionManager is not accepting actions");
        if ("userMessageAction" === e2.action.case) {
          const t2 = e2.action.value.userMessage;
          t2 && this.unprocessedUserMessages.push(t2);
        }
        await this.clientStream.write(e2);
      }
      queueFollowUpUserMessage(e2) {
        if (this.disposed || this.abortStarted) throw new n.W2("ControlledConversationActionManager run was aborted or disposed");
        this.unprocessedUserMessages.push(e2);
      }
      async enqueueReplayableConversationAction(e2) {
        if ("asyncAskQuestionCompletionAction" !== e2.action.case) throw new TypeError("Only asyncAskQuestionCompletionAction can use enqueue acknowledgement");
        if (!this.acceptsActions) throw new n.W2("ControlledConversationActionManager is not accepting actions");
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
        if (this.disposed) throw new n.W2("ControlledConversationActionManager disposed");
        this.acceptsActions = false, this.clientStream.close(), this.clientStream = (0, n.Jt)(), this.acceptsActions = true, this.abortController = new AbortController(), this.abortStarted = false;
        for (const e2 of this.unprocessedUserMessages) this.clientStream.write(new r.QFf({ action: { case: "userMessageAction", value: new r.Vtf({ userMessage: e2 }) } })).catch(() => {
        });
      }
      async run(e2, t2) {
        const r2 = this.clientStream;
        this.runActive = true;
        try {
          for await (const n2 of r2) try {
            await t2.write(n2);
          } catch (t3) {
            o.error(e2, "Error writing conversation action", t3);
          }
        } catch (e3) {
          if (!(e3 instanceof n.W2)) throw e3;
        } finally {
          this.clientStream === r2 && (this.runActive = false);
        }
      }
      dispose() {
        this.disposed || (this.disposed = true, this.abortCallbacks.length = 0, this.acceptsActions = false, this.clientStream.throw(new n.W2("ControlledConversationActionManager disposed")));
      }
    }
    var i = __webpack_require__(33002), a = __webpack_require__(86209), l = __webpack_require__(55094), c = __webpack_require__(12544);
    const u = require("vscode"), d = (0, t.h)("local-agent-runtime-gateway-request");
    class p {
      constructor(e2) {
        this.callbacks = e2, this.nextId = 0;
      }
      async *createExecInstance(e2, t2) {
        const r2 = this.nextId++;
        for await (const n2 of this.callbacks.executeExec(t2(r2).toBinary(), e2.signal)) {
          const e3 = String.fromCharCode(n2[0]), t3 = n2.subarray(1);
          if ("M" === e3) {
            yield l.yT.fromBinary(t3);
            continue;
          }
          if ("C" !== e3) throw new Error(`Invalid renderer exec response prefix ${e3}`);
          const r3 = l.$Y.fromBinary(t3);
          if ("streamClose" === r3.message.case) return;
          if ("throw" === r3.message.case) {
            const e4 = new Error(r3.message.value.error);
            throw r3.message.value.stackTrace && (e4.stack = r3.message.value.stackTrace), "EXEC_BACKEND_UNAVAILABLE" === r3.message.value.errorCode ? e4.name = "ExecBackendUnavailableError" : "AGENT_EXEC_STREAM_START_TIMEOUT" === r3.message.value.errorCode && (e4.name = "AgentExecStreamStartTimeoutError"), e4;
          }
        }
      }
    }
    class h {
      constructor(e2) {
        this.callbacks = e2;
      }
      getBlob(e2, t2) {
        return this.callbacks.getBlob(t2);
      }
      setBlob(e2, t2, r2) {
        return this.callbacks.setBlob(t2, r2, false);
      }
      setBlobLocallyOnly(e2, t2, r2) {
        return this.callbacks.setBlob(t2, r2, true);
      }
      flush() {
        return Promise.resolve();
      }
    }
    class m {
      constructor(e2) {
        this.callbacks = e2, this.postTurnEndedWorkQueue = [];
      }
      async sendUpdate(e2, t2) {
        await this.callbacks.sendInteractionUpdate(t2.toBinary());
      }
      async query(e2, t2) {
        return r.Y5.fromBinary(await this.callbacks.queryInteraction(t2.toBinary()));
      }
      enqueuePostTurnEndedWork(e2) {
        this.postTurnEndedWorkQueue.push(e2);
      }
      async flushPostTurnEndedWork() {
        for (const e2 of this.postTurnEndedWorkQueue.splice(0)) await e2();
      }
    }
    let f;
    class g {
      constructor(e2) {
        this.outputChannel = e2;
      }
      log(e2, t2) {
        const { level: r2, message: n2, metadata: o2, error: s2 } = t2, i2 = void 0 !== o2 && Object.keys(o2).length > 0 ? `${n2} ${JSON.stringify(o2)}` : n2, a2 = void 0 !== s2 ? `${i2}
${s2 instanceof Error ? s2.stack ?? s2.message : String(s2)}` : i2;
        switch (r2) {
          case "debug":
            this.outputChannel.debug(a2);
            break;
          case "info":
            this.outputChannel.info(a2);
            break;
          case "warn":
            this.outputChannel.warn(a2);
            break;
          case "error":
            this.outputChannel.error(a2);
            break;
          default:
            throw new Error(`Unhandled log level: ${r2}`);
        }
      }
    }
    function y(n2) {
      const o2 = u.window.createOutputChannel("Local Agent Runtime", { log: true });
      n2.subscriptions.push(o2);
      const l2 = new g(o2), y2 = { async runLocalAgent(n3, o3, u2) {
        if (!(function(e2) {
          if ("object" != typeof e2 || null === e2) return false;
          const t2 = e2;
          return "string" == typeof t2.baseUrl && t2.defaultModel instanceof Uint8Array && Array.isArray(t2.availableModelIds) && t2.conversationState instanceof Uint8Array && t2.action instanceof Uint8Array && "object" == typeof t2.runOptions && null !== t2.runOptions && Array.isArray(t2.mcpTools);
        })(n3)) throw new Error("Invalid local agent run request");
        if (!(function(e2) {
          if ("object" != typeof e2 || null === e2) return false;
          const t2 = e2;
          return "function" == typeof t2.sendInteractionUpdate && "function" == typeof t2.queryInteraction && "function" == typeof t2.handleCheckpoint && "function" == typeof t2.getBlob && "function" == typeof t2.setBlob && "function" == typeof t2.uploadPromptQualitySnapshot && "function" == typeof t2.executeExec;
        })(o3)) throw new Error("Invalid local agent run callbacks");
        const g2 = n3, y3 = o3, v = await (f ??= Promise.resolve().then(__webpack_require__.bind(__webpack_require__, 73950)), f), w = r.Gmx.fromBinary(g2.defaultModel), b = g2.modelDetails ? r.Gmx.fromBinary(g2.modelDetails) : void 0, _ = r.QFf.fromBinary(g2.action), S = r.Y9z.fromBinary(g2.conversationState), x = "userMessageAction" === _.action.case ? _.action.value.userMessage?.mode : void 0, k = void 0 !== x && x !== r.xyI.UNSPECIFIED ? x : S.mode, E = new e.QHB(new p(y3));
        if (E.register(e.OkD), E.register(e.sOX), E.register(e.ryB), E.register(e.RpG), E.register(e.w4j), E.register(e.PEk), E.register(e.I2x), E.register(e.jH1), E.register(e.u8v), E.register(e.bob), E.register(e.rn8), E.register(e.bL4), E.register(e.ODj), E.register(e.Yib), E.register(e.pY2), E.register(e._As), E.register(e.mlu), E.register(e.MZM), E.register(e.GuN), E.register(e.qkk), E.register(e.wve), E.register(e.rz0), E.register(e.ZnQ), E.register(e.sC3), E.register(e.TQC), E.register(e.Lnu), void 0 !== y3.executeSubagent) {
          const t2 = { execute: async (e2, t3) => c.vS.fromBinary(await y3.executeSubagent(t3.toBinary(), e2.signal)) };
          E.set(e.ZnQ, t2);
        }
        if (void 0 !== y3.forceBackgroundSubagent) {
          const t2 = { execute: async (e2, t3) => c.a3.fromBinary(await y3.forceBackgroundSubagent(t3.toBinary())) };
          E.set(e.I2x, t2);
        }
        if (void 0 !== y3.awaitSubagent) {
          const t2 = { execute: async (e2, t3) => c.zJ.fromBinary(await y3.awaitSubagent(t3.toBinary(), e2.signal)) };
          E.set(e.rz0, t2);
        }
        const T = k === r.xyI.ASK ? (0, e.uaw)(E) : E, C = new v.LocalAgentClient({ localProvider: { kind: "http", endpoints: [{ baseUrl: g2.baseUrl, ...void 0 !== g2.apiKey ? { apiKey: g2.apiKey } : {} }] }, defaultModel: w, availableModels: () => g2.availableModelIds.map((e2) => new r.Gmx({ modelId: e2 })), privacyMode: g2.privacyMode, userAgent: g2.userAgent, customHeaders: g2.customHeaders, urlProtocol: g2.urlProtocol, maxRetries: 10, enableSmartModeClassifier: true, onPromptQualitySnapshot: (e2) => {
          y3.uploadPromptQualitySnapshot(e2.generationUUID, e2.capabilityNonce);
        } }), [I, A] = (0, i.q6)().with(t._O, l2).withCancel(), P = () => A();
        u2?.addEventListener("abort", P, { once: true });
        const M = (e2) => {
          d.info(I, "Gateway request settled", { ...e2 });
        };
        try {
          await C.run(I, S, _, b, new m(y3), T, new h(y3), new s(), { handleCheckpoint: (e2, t2) => y3.handleCheckpoint(t2.toBinary()), getLatestCheckpoint: () => {
          } }, g2.mcpTools, { ...g2.runOptions, requestedModel: g2.runOptions.requestedModel ? a.G4.fromBinary(g2.runOptions.requestedModel) : void 0, subagentModelOverrides: g2.runOptions.subagentModelOverrides?.map((e2) => r.Bjv.fromBinary(e2)), onGatewayRequest: M });
        } finally {
          u2?.removeEventListener("abort", P);
        }
      } };
      n2.subscriptions.push(u.cursor.registerLocalAgentRuntimeProvider(y2));
    }
  })();
  var __webpack_export_target__ = exports;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  __webpack_exports__.__esModule && Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
})();
