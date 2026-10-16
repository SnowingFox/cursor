"use strict";
exports.id = 821, exports.ids = [746, 821], exports.modules = { 12746: (e, t, s) => {
  s.d(t, { FD: () => l, dn: () => h, resolveSandboxHelperPath: () => u });
  var i = s(79896), o = s(16928), r = s(25925), n = s(91398), a = s(30306);
  function l() {
    let e2 = n.env.shell ?? "";
    try {
      const t2 = n.workspace.getConfiguration("terminal.integrated"), s2 = "win32" === process.platform ? "windows" : "darwin" === process.platform ? "osx" : "linux", i2 = t2.get(`defaultProfile.${s2}`);
      if (i2) {
        const o2 = t2.get(`profiles.${s2}`), r2 = o2?.[i2]?.path;
        r2 && (e2 = r2);
      }
    } catch (e3) {
      a.gW.warn(`Failed to read terminal config: ${e3}`);
    }
    return e2;
  }
  function u(e2) {
    if ("linux" !== process.platform && "win32" !== process.platform && "darwin" !== process.platform) return;
    const t2 = "win32" === process.platform ? "cursorsandbox.exe" : "cursorsandbox", s2 = process.resourcesPath, r2 = o.dirname(process.execPath), n2 = [o.join(e2, "../../resources/helpers", t2)];
    s2 && (n2.push(o.join(s2, "app", "resources", "helpers", t2)), n2.push(o.join(s2, "resources", "helpers", t2))), n2.push(o.join(r2, "resources", "helpers", t2)), n2.push(o.join(r2, "resources", "app", "resources", "helpers", t2)), "1" === process.env.VSCODE_DEV && n2.push(o.join(e2, "../../node_modules/@anysphere/sandbox-helper/bin", t2));
    for (const e3 of n2) try {
      if (i.existsSync(e3)) return e3;
    } catch {
    }
  }
  function h(e2) {
    return void 0 !== e2.helperPath && (!!(0, r.yo)() && ((0, r.St)({ sandboxBinaryPath: e2.helperPath, workspaceReadEnabled: e2.workspaceReadEnabled }), true));
  }
}, 29534: (e, t, s) => {
  s.d(t, { Qf: () => o, ic: () => i });
  const i = "sandbox_read_control_portal";
  function o(e2) {
    let t2 = false, s2 = 0;
    const o2 = () => {
      const i2 = ++s2;
      Promise.resolve(e2.checkFeatureGate()).then((e3) => {
        i2 === s2 && (t2 = e3);
      }, () => {
        i2 === s2 && (t2 = false);
      });
    };
    o2();
    const r = e2.onDidChangeGates((e3) => {
      var t3;
      (void 0 === (t3 = e3.changedGates) || t3.includes(i)) && o2();
    });
    return { getEnabled: () => t2, dispose: () => r.dispose() };
  }
}, 92821: (e, t, s) => {
  s.d(t, { createIdeShellActivate: () => q });
  var i = s(70857), o = s(69413), r = s(13920), n = s(91105), a = s(25925), l = s(91398), u = s(30306), h = s(77273), d = s(73024), c = s(76760);
  const p = { type: "insecure_none" };
  function m(e2) {
    try {
      const t2 = (0, d.readFileSync)(e2.filePath, "utf-8"), s2 = JSON.parse(t2), i2 = (0, a.$6)(s2);
      return (0, a.l7)(i2, e2.baseDir);
    } catch {
      return;
    }
  }
  function f(e2) {
    return (0, c.join)(e2, ".cursor", "sandbox.json");
  }
  function g(e2) {
    if (void 0 === e2) return [];
    const t2 = /* @__PURE__ */ new Set(), s2 = [];
    for (const i2 of e2) "" === i2 || t2.has(i2) || (t2.add(i2), s2.push(i2));
    return s2;
  }
  function w(e2) {
    const t2 = m({ filePath: (s2 = e2.homeDir, (0, c.join)(s2, ".cursor", "sandbox.json")), baseDir: e2.homeDir });
    var s2;
    const i2 = [];
    for (const t3 of g(e2.workspacePaths)) {
      const e3 = m({ filePath: f(t3), baseDir: t3 });
      void 0 !== e3 && i2.push(e3);
    }
    const o2 = (function(e3) {
      const t3 = e3[0];
      if (void 0 === t3) return;
      const s3 = e3.filter((e4) => e4.type === t3.type && "insecure_none" !== e4.type);
      if (s3.length <= 1) return s3[0] ?? t3;
      const i3 = (0, a.fZ)(...s3.map((e4) => e4.networkPolicy)), o3 = (0, a.s9)(...s3.map((e4) => e4.additionalReadonlyPaths)), r2 = (0, a.s9)(...s3.map((e4) => e4.additionalReadPaths)), n2 = { ...t3, ...void 0 === i3 ? {} : { networkPolicy: i3 }, ...0 === o3.length ? {} : { additionalReadonlyPaths: o3 }, ...0 === r2.length ? {} : { additionalReadPaths: r2 } };
      if ("workspace_readwrite" !== t3.type) return n2;
      const l2 = (0, a.s9)(...s3.map((e4) => "workspace_readwrite" === e4.type ? e4.additionalReadwritePaths : void 0));
      return { ...n2, ...0 === l2.length ? {} : { additionalReadwritePaths: l2 } };
    })(i2);
    if (void 0 !== t2 || void 0 !== o2) return { ...void 0 === t2 ? {} : { perUser: t2 }, ...void 0 === o2 ? {} : { perRepo: o2 } };
  }
  var S = s(12746), v = s(16928);
  function k(e2) {
    const t2 = /* @__PURE__ */ new Set(), s2 = [];
    for (const i2 of e2) "" === i2 || t2.has(i2) || (t2.add(i2), s2.push(i2));
    return s2;
  }
  function y(e2, t2) {
    const s2 = [], i2 = k(t2), o2 = [];
    let r2, a2, h2 = 0, d2 = [], c2 = i2, p2 = 0, m2 = false;
    const f2 = () => {
      if (void 0 === r2) return i2;
      for (let e3 = o2.length - 1; e3 >= 0; e3 -= 1) {
        const t3 = o2[e3];
        if (t3?.sessionKey === r2) return t3.repoPaths;
      }
      return i2;
    }, g2 = async () => {
      if (m2) return;
      const t3 = ++p2, s3 = f2();
      try {
        const i3 = 0 === s3.length ? [await (0, n.myO)(e2)] : await Promise.all(s3.map((t4) => (0, n.myO)(e2, t4)));
        if (m2 || t3 !== p2) return;
        l.cursor.pushSandboxNetworkFileEntries([...new Set(i3.flat())]);
      } catch (e3) {
        if (m2 || t3 !== p2) return;
        u.gW.warn(`Failed to read sandbox network file entries: ${e3}`);
      }
    }, w2 = () => {
      m2 || (void 0 !== a2 && clearTimeout(a2), a2 = setTimeout(() => {
        a2 = void 0, g2();
      }, 500));
    }, S2 = (e3) => {
      const t3 = l.workspace.createFileSystemWatcher(new l.RelativePattern(l.Uri.file((0, v.join)(e3, ".cursor")), "sandbox.json"));
      return t3.onDidChange(w2), t3.onDidCreate(w2), t3.onDidDelete(w2), t3;
    }, y2 = () => {
      m2 || ((() => {
        const e3 = f2();
        if (s3 = c2, (t3 = e3).length !== s3.length || !t3.every((e4, t4) => e4 === s3[t4])) {
          var t3, s3;
          c2 = e3;
          for (const e4 of d2) e4.dispose();
          d2 = c2.map((e4) => S2(e4));
        }
      })(), g2());
    };
    return s2.push(S2(e2)), d2 = c2.map((e3) => S2(e3)), g2(), { acquireSessionRepo(e3) {
      const t3 = k(e3.repoPaths), { sessionId: s3 } = e3;
      if (m2) return { dispose() {
      } };
      const i3 = ++h2, n2 = s3 ?? `lease:${i3}`;
      return o2.push({ id: i3, sessionKey: n2, repoPaths: t3 }), void 0 !== r2 && r2 !== n2 || (r2 = n2, y2()), { dispose() {
        const e4 = o2.findIndex((e5) => e5.id === i3);
        if (-1 === e4) return;
        if (o2.splice(e4, 1), r2 !== n2) return;
        o2.some((e5) => e5.sessionKey === n2) || (r2 = o2.at(-1)?.sessionKey), y2();
      } };
    }, dispose() {
      m2 = true, p2 += 1, void 0 !== a2 && (clearTimeout(a2), a2 = void 0);
      for (const e3 of d2) e3.dispose();
      d2 = [], o2.length = 0, r2 = void 0;
      for (const e3 of s2) e3.dispose();
    } };
  }
  var b = s(29534), C = s(42358);
  const E = "shell_exec_output_backpressure", I = "shell_exec_output_backpressure_config";
  var x = s(9639);
  const O = /* @__PURE__ */ new WeakSet();
  function P(e2) {
    if (e2 instanceof x.R10) return e2.getWakeupRevision();
  }
  class D {
    constructor() {
      this._isDisposed = false, this._disposables = [];
    }
    dispose() {
      this._isDisposed || (this._isDisposed = true, (function(e2) {
        for (; e2.length; ) {
          const t2 = e2.pop();
          t2?.dispose();
        }
      })(this._disposables));
    }
    _register(e2) {
      return this._isDisposed ? e2.dispose() : this._disposables.push(e2), e2;
    }
    get isDisposed() {
      return this._isDisposed;
    }
  }
  class _ extends D {
    constructor() {
      super(...arguments), this.writeEmitter = this._register(new l.EventEmitter()), this.onDidWrite = this.writeEmitter.event, this.writeBufferEmitter = this._register(new l.EventEmitter()), this.onDidWriteBuffer = this.writeBufferEmitter.event, this.closeEmitter = this._register(new l.EventEmitter()), this.onDidClose = this.closeEmitter.event, this.isStarted = false, this.isFirstCommand = true, this.outputQueue = [], this.isOutputPaused = false, this.pauseWaiters = [];
    }
    open(e2) {
      this.isStarted || (this.isStarted = true, this.writeBufferEmitter.fire(Buffer.from(this.osc633("P", "HasRichCommandDetection=True"))), this.ensureOutputDrained());
    }
    pause() {
      this.isOutputPaused = true;
    }
    resume() {
      if (this.isOutputPaused) {
        this.isOutputPaused = false;
        const e2 = this.pauseWaiters;
        this.pauseWaiters = [];
        for (const t2 of e2) t2();
      }
      this.outputQueue.length > 0 && this.ensureOutputDrained();
    }
    async awaitUnpaused() {
      for (; this.isOutputPaused; ) await new Promise((e2) => this.pauseWaiters.push(e2));
    }
    close() {
      this.resume(), this.closeEmitter.fire();
    }
    dispose() {
      this.resume(), super.dispose();
    }
    async showCommand(e2, t2) {
      const s2 = [];
      this.isFirstCommand || s2.push("\r\n"), this.isFirstCommand = false, s2.push(this.osc633("A"));
      const i2 = t2 ? "🔒 " : "";
      s2.push(`${i2}$ `), s2.push(this.osc633("B"));
      const o2 = e2.split("\n")[0];
      s2.push(this.osc633("E", this.escapeOscValue(o2))), s2.push(`${o2}\r
`), s2.push(this.osc633("C")), await this.emitBufferedData(Buffer.from(s2.join("")));
    }
    async handleEvent(e2) {
      switch (e2.type) {
        case "stdout":
        case "stderr":
          await this.handleShellOutput(e2.data);
          break;
        case "exit":
          await this.handleExit(e2.code ?? 0);
          break;
        case "stdin_ready":
        case "sandbox_denies":
          break;
        case "suppressed_output":
          await this.handleShellOutput(Buffer.from(a.Ls));
          break;
        default:
          throw new Error(`Unhandled event type: ${e2.type}`);
      }
    }
    async handleShellOutput(e2) {
      await this.emitBufferedData(e2);
    }
    async handleExit(e2) {
      await this.showCommandCompleted(e2);
    }
    async showCommandCompleted(e2) {
      await this.emitBufferedData(Buffer.from(this.osc633("D", e2.toString())));
    }
    async emitBufferedData(e2) {
      this.outputQueue.push(e2), this.isStarted && await this.ensureOutputDrained();
    }
    async ensureOutputDrained() {
      if (this.isStarted) for (; ; ) {
        if (this.outputDrainPromise) {
          await this.outputDrainPromise;
          continue;
        }
        if (0 === this.outputQueue.length || this.isOutputPaused) return;
        const e2 = this.runOutputDrain();
        this.outputDrainPromise = e2;
        try {
          await e2;
        } finally {
          this.outputDrainPromise === e2 && (this.outputDrainPromise = void 0);
        }
      }
    }
    async runOutputDrain() {
      for (; !this.isOutputPaused && this.outputQueue.length > 0; ) {
        const e2 = this.outputQueue.shift();
        this.writeBufferEmitter.fire(e2), await new Promise((e3) => setImmediate(e3));
      }
    }
    escapeOscValue(e2) {
      return e2.replace(/\\/g, "\\\\").replace(/;/g, "\\x3b").replace(/[\x00-\x1f]/g, (e3) => `\\x${e3.charCodeAt(0).toString(16).padStart(2, "0")}`);
    }
    osc633(e2, ...t2) {
      return `\x1B]633;${[e2, ...t2].filter((e3) => void 0 !== e3).join(";")}\x07`;
    }
  }
  class B extends D {
    constructor(e2, t2 = {}) {
      super(), this.inner = e2, this.shouldSuppressTerminalUiStreaming = t2.shouldSuppressTerminalUiStreaming ?? (async () => false), this.shellExecOutputBackpressureEnabled = t2.shellExecOutputBackpressureEnabled ?? false, this.shellExecOutputSuppressionOptions = t2.shellExecOutputSuppressionOptions, this.pty = this._register(new _());
    }
    ensureTerminal(e2) {
      this.terminal || this.isDisposed || (this.terminal = l.window.createTerminal({ name: "Agent Terminal", pty: this.pty, convertEol: true, iconPath: new l.ThemeIcon("infinity"), hideFromUser: true, metadata: { conversationId: e2, agentOwned: true } }));
    }
    getTerminal() {
      return this.terminal;
    }
    async *execute(e2, t2, s2) {
      if (this.isDisposed) return;
      if (await this.shouldSuppressTerminalUiStreaming()) {
        for await (const i3 of this.inner.execute(e2, t2, s2)) yield i3;
        return;
      }
      const i2 = (0, h.L)(e2, e2.get(r.zN)?.conversationId);
      if (void 0 === i2) {
        for await (const i3 of this.inner.execute(e2, t2, s2)) yield i3;
        return;
      }
      const o2 = s2?.sandboxPolicy?.perRepo?.type ?? s2?.sandboxPolicy?.perUser?.type ?? s2?.sandboxPolicy?.teamAdmin?.type, n2 = "workspace_readonly" === o2 || "workspace_readwrite" === o2;
      this.ensureTerminal(i2), await this.pty.showCommand(t2, n2);
      const l2 = this.shellExecOutputBackpressureEnabled ? new a.vu({ ...this.shellExecOutputSuppressionOptions }) : void 0;
      try {
        for await (const i3 of this.inner.execute(e2, t2, s2)) {
          if (void 0 !== l2 && ("stdout" === i3.type || "stderr" === i3.type)) {
            const e3 = l2.record(i3.data.length);
            if (e3.noticeJustTriggered) {
              const e4 = { type: "stdout", data: Buffer.from(a.Ls) };
              await this.pty.awaitUnpaused(), await this.pty.handleEvent(e4), yield { type: "suppressed_output" };
            }
            if (!e3.shouldForward) {
              yield i3;
              continue;
            }
          }
          await this.pty.awaitUnpaused(), await this.pty.handleEvent(i3), yield i3;
        }
      } finally {
        l2?.dispose();
      }
    }
    async getCwd() {
      return this.inner.getCwd();
    }
    clone(e2) {
      return this.inner.clone(e2);
    }
    dispose() {
      this.isDisposed || (this.terminal && (this.terminal.dispose(), this.terminal = void 0), super.dispose());
    }
  }
  function T(e2, t2) {
    return e2 ? (0, c.join)(e2, "terminals", `${t2}.txt`) : void 0;
  }
  class W {
    constructor() {
      this.tail = Promise.resolve();
    }
    queue(e2) {
      const t2 = this.tail.then(async () => {
        await e2();
      });
      this.tail = t2.catch(() => {
      });
    }
  }
  class F extends D {
    constructor(e2, t2, s2, i2, o2 = () => false, r2 = () => {
    }) {
      super(), this.command = e2, this.cwd = t2, this.abortShell = s2, this.onExit = i2, this.isShellExecOutputBackpressureEnabled = o2, this.getShellExecOutputSuppressionOptions = r2, this.writeEmitter = this._register(new l.EventEmitter()), this.onDidWrite = this.writeEmitter.event, this.writeBufferEmitter = this._register(new l.EventEmitter()), this.onDidWriteBuffer = this.writeBufferEmitter.event, this.closeEmitter = this._register(new l.EventEmitter()), this.onDidClose = this.closeEmitter.event, this.isStarted = false, this.hasExited = false, this.hasClosed = false, this.abortRequestedByUser = false, this.pendingOutput = [], this.isOutputPaused = false, this.pauseWaiters = [];
    }
    handleInput(e2) {
      "" !== e2 || this.hasExited || (this.abortRequestedByUser = true, this.abortShell());
    }
    getEventHandler() {
      return { onStdout: (e2) => this.handleShellOutput(e2), onStderr: (e2) => this.handleShellOutput(e2), onExit: (e2) => this.handleExit(e2), onStart: () => this.handleStart() };
    }
    open(e2) {
      if (!(this.isStarted || this.hasExited || this.isDisposed)) {
        this.isStarted = true, this.emitImmediate(this.osc633("P", `Cwd=${this.escapeOscValue(this.cwd)}`)), this.emitImmediate(this.osc633("P", "HasRichCommandDetection=True")), this.showPrompt(), this.showCommand(this.command);
        for (const e3 of this.pendingOutput) this.writeBufferEmitter.fire(e3);
        this.pendingOutput = [];
      }
    }
    pause() {
      this.isOutputPaused = true;
    }
    resume(e2) {
      if (!this.isOutputPaused && !e2?.force) return;
      this.isOutputPaused = false;
      const t2 = this.pauseWaiters;
      this.pauseWaiters = [];
      for (const e3 of t2) e3();
    }
    async awaitUnpaused() {
      for (; this.isOutputPaused; ) await new Promise((e2) => this.pauseWaiters.push(e2));
    }
    close() {
      this.resume(), this.hasClosed || (this.hasClosed = true, this.hasExited || this.emitImmediate("\r\n[Terminal closing]\r\n"), this.closeEmitter.fire());
    }
    dispose() {
      this.resume(), super.dispose();
    }
    handleStart() {
    }
    async handleShellOutput(e2) {
      this.isTerminalClosed() || this.isDisposed || (await this.awaitUnpaused(), this.isTerminalClosed() || this.isDisposed || this.writeShellStreamOutput(e2));
    }
    writeShellStreamOutput(e2) {
      if (!this.isShellExecOutputBackpressureEnabled()) return void this.emitShellOutput(e2);
      if (this.isDisposed) return;
      void 0 === this.outputSuppressor && (this.outputSuppressor = this._register(new a.vu(this.getShellExecOutputSuppressionOptions())));
      const t2 = this.outputSuppressor.record(Buffer.byteLength(e2, "utf8"));
      t2.noticeJustTriggered && this.emitShellOutput(a.Ls), t2.shouldForward && this.emitShellOutput(e2);
    }
    emitShellOutput(e2) {
      const t2 = Buffer.from(e2);
      this.isStarted ? this.writeBufferEmitter.fire(t2) : this.pendingOutput.push(t2);
    }
    emitImmediate(e2) {
      this.emitShellOutput(e2);
    }
    handleExit(e2) {
      if (!this.hasExited && !this.isDisposed) {
        if (this.resume({ force: true }), !this.isStarted) return this.hasExited = true, void this.onExit({ code: e2, aborted: this.abortRequestedByUser || null === e2 });
        this._completeExit(e2);
      }
    }
    _completeExit(e2) {
      this.hasExited = true, this.showCommandCompleted(e2 ?? 0), this.emitImmediate("\r\n"), this.hasClosed || (this.hasClosed = true, this.closeEmitter.fire(e2 ?? 0)), this.onExit({ code: e2, aborted: this.abortRequestedByUser || null === e2 });
    }
    hasExitOccurred() {
      return this.hasExited;
    }
    acknowledgeExternalTeardown() {
      this.hasExited = true, this.resume({ force: true });
    }
    isTerminalClosed() {
      return this.hasExited || this.hasClosed;
    }
    showPrompt() {
      this.emitImmediate(this.osc633("A")), this.emitImmediate("$ "), this.emitImmediate(this.osc633("B"));
    }
    showCommand(e2) {
      this.emitImmediate(this.osc633("E", this.escapeOscValue(e2))), this.emitImmediate(`${e2}\r
`), this.emitImmediate(this.osc633("C"));
    }
    showCommandCompleted(e2) {
      this.emitImmediate(this.osc633("D", e2.toString()));
    }
    escapeOscValue(e2) {
      return e2.replace(/\\/g, "\\\\").replace(/;/g, "\\x3b").replace(/[\x00-\x1f]/g, (e3) => `\\x${e3.charCodeAt(0).toString(16).padStart(2, "0")}`);
    }
    osc633(e2, ...t2) {
      return `\x1B]633;${[e2, ...t2].filter((e3) => void 0 !== e3).join(";")}\x07`;
    }
  }
  class R extends D {
    constructor(e2) {
      super(), this.projectDir = e2, this.terminals = /* @__PURE__ */ new Map(), this.pseudoTerminals = /* @__PURE__ */ new Map(), this.abortFunctions = /* @__PURE__ */ new Map(), this.closeListeners = /* @__PURE__ */ new Map(), this.trackedWork = /* @__PURE__ */ new Map(), this.headlessShells = /* @__PURE__ */ new Map(), this.completionPublishedShellIds = /* @__PURE__ */ new Set(), this.completionConversationIds = /* @__PURE__ */ new Map(), this.shellWorkNotificationQueue = new W();
    }
    async createTerminal(e2) {
      const { shellId: t2, command: s2, cwd: i2, registerEventHandler: o2, conversationId: r2, completionConversationId: n2, abortShell: a2, description: u2, toolCallId: h2, isShellExecOutputBackpressureEnabled: d2 = () => false, getShellExecOutputSuppressionOptions: c2 = () => {
      } } = e2, p2 = `Cursor (${this.extractCommandDescription(s2)})`;
      let m2;
      const f2 = new F(s2, i2, a2, (e3) => {
        const s3 = e3.aborted ? "aborted" : 0 === e3.code ? "success" : "error", i3 = e3.aborted || 0 === e3.code || null === e3.code ? void 0 : `exit_code=${e3.code}`;
        this.enqueueShellCompletion(t2, s3, i3), this.disposeShellTerminal(t2);
      }, d2, c2);
      this.pseudoTerminals.set(t2, f2), m2 = l.window.createTerminal({ name: p2, pty: f2, convertEol: true, iconPath: new l.ThemeIcon("infinity"), hideFromUser: false, metadata: { backgroundShellId: t2, conversationId: r2, agentOwned: true } }), this.terminals.set(t2, m2), this.abortFunctions.set(t2, a2);
      const g2 = this.createShellWorkItem({ shellId: t2, command: s2, conversationId: r2, description: u2, toolCallId: h2 });
      this.trackedWork.set(t2, g2), this.rememberCompletionConversationId(t2, n2), this.shellWorkNotificationQueue.queue(() => this.notifyShellUpserted(g2)), o2(f2.getEventHandler());
      const w2 = l.window.onDidCloseTerminal((e3) => {
        if (e3 === m2) {
          f2.hasExitOccurred() || this.enqueueShellCompletion(t2, "aborted", "terminated_by_user");
          const e4 = this.abortFunctions.get(t2);
          e4 && e4(), this.cleanupShell(t2);
        }
      });
      this.closeListeners.set(t2, w2);
    }
    async trackHeadlessShell(e2) {
      const { shellId: t2, command: s2, conversationId: i2, completionConversationId: o2, abortShell: r2, description: n2, toolCallId: a2, onCleanup: l2 } = e2;
      this.abortFunctions.set(t2, r2), this.headlessShells.set(t2, l2);
      const u2 = this.createShellWorkItem({ shellId: t2, command: s2, conversationId: i2, description: n2, toolCallId: a2 });
      this.trackedWork.set(t2, u2), this.rememberCompletionConversationId(t2, o2), this.shellWorkNotificationQueue.queue(() => this.notifyShellUpserted(u2));
    }
    shouldForwardShellOutputCompletion(e2) {
      if ("task_progress" === e2.reason) return true;
      if ("task_finished" !== e2.reason) return false;
      const t2 = this.getShellIdFromCompletionTaskId(e2.taskId);
      return void 0 !== t2 && (this.headlessShells.has(t2) || this.terminals.has(t2));
    }
    enqueueShellOutputCompletion(e2, t2) {
      if ("shell" !== e2.kind) return;
      const s2 = this.getShellIdFromCompletionTaskId(e2.taskId);
      if (void 0 === s2) return;
      const i2 = this.trackedWork.get(s2), o2 = t2?.trim(), r2 = o2 || this.completionConversationIdFor(s2, i2?.composerId);
      if ("task_finished" === e2.reason) return this.completionPublishedShellIds.has(s2) || !r2 || (this.completionPublishedShellIds.add(s2), this.forwardShellOutputCompletion(s2, r2, e2.toolCallId ?? i2?.toolCallId, e2)), void this.backupDisposeShellTerminal(s2);
      r2 && this.forwardShellOutputCompletion(s2, r2, e2.toolCallId ?? i2?.toolCallId, e2);
    }
    backupDisposeShellTerminal(e2) {
      if (this.headlessShells.has(e2)) return void this.cleanupShell(e2);
      const t2 = this.pseudoTerminals.get(e2);
      t2?.hasExitOccurred() || (t2?.acknowledgeExternalTeardown(), this.disposeShellTerminal(e2));
    }
    disposeShellTerminal(e2) {
      const t2 = this.terminals.get(e2), s2 = this.pseudoTerminals.get(e2);
      this.cleanupShell(e2, { disposePty: false }), (t2 || s2) && queueMicrotask(() => {
        s2?.dispose(), this.pseudoTerminals.delete(e2), t2?.dispose();
      });
    }
    rememberCompletionConversationId(e2, t2) {
      const s2 = t2?.trim();
      s2 && this.completionConversationIds.set(e2, s2);
    }
    completionConversationIdFor(e2, t2) {
      return this.completionConversationIds.get(e2) || t2;
    }
    createShellWorkItem(e2) {
      return { id: String(e2.shellId), kind: "shell", composerId: e2.conversationId ?? "", title: e2.description || e2.command, startTimeMs: Date.now(), ...void 0 !== e2.toolCallId ? { toolCallId: e2.toolCallId } : {} };
    }
    async notifyShellUpserted(e2) {
      try {
        await l.cursor.upsertBackgroundShellWork(e2);
      } catch {
      }
    }
    async notifyShellCleared(e2) {
      try {
        await l.cursor.clearBackgroundShellWork(String(e2));
      } catch {
      }
    }
    async notifyBackgroundTaskCompletion(e2) {
      try {
        await l.cursor.enqueueBackgroundWakeup({ conversationId: e2.composerId, id: e2.taskId, source: "shell", payload: e2 });
      } catch {
      }
    }
    async getLongRunningJobsEnabled() {
      return void 0 !== this.longRunningJobsEnabled ? this.longRunningJobsEnabled : (this.longRunningJobsEnabledPromise || (this.longRunningJobsEnabledPromise = Promise.resolve(l.cursor.checkFeatureGate("long_running_jobs")).then((e2) => (this.longRunningJobsEnabled = e2, e2), () => (this.longRunningJobsEnabled = false, false))), this.longRunningJobsEnabledPromise);
    }
    enqueueShellCompletion(e2, t2, s2) {
      if (this.completionPublishedShellIds.has(e2)) return;
      const i2 = this.trackedWork.get(e2), o2 = this.completionConversationIdFor(e2, i2?.composerId);
      o2 && (this.completionPublishedShellIds.add(e2), this.shellWorkNotificationQueue.queue(() => this.getLongRunningJobsEnabled().then((r2) => {
        if (r2) return this.notifyBackgroundTaskCompletion((function(e3) {
          const t3 = T(e3.projectDir, e3.shellId);
          return { composerId: e3.composerId, taskId: String(e3.shellId), ...void 0 !== e3.toolCallId ? { toolCallId: e3.toolCallId } : {}, kind: "shell", status: e3.status, title: e3.title, ...e3.detail ? { detail: e3.detail } : {}, ...t3 ? { outputPath: t3 } : {}, reason: "task_finished" };
        })({ projectDir: this.projectDir, shellId: e2, composerId: o2, toolCallId: i2?.toolCallId, title: i2?.title ?? "", status: t2, ...s2 ? { detail: s2 } : {} }));
      })));
    }
    forwardShellOutputCompletion(e2, t2, s2, i2) {
      this.shellWorkNotificationQueue.queue(() => this.getLongRunningJobsEnabled().then((o2) => {
        if (!o2) return;
        const r2 = i2.outputPath ?? T(this.projectDir, e2);
        return this.notifyBackgroundTaskCompletion({ composerId: t2, taskId: i2.taskId, ...void 0 !== s2 ? { toolCallId: s2 } : {}, kind: i2.kind, status: i2.status, title: i2.title, ...i2.detail ? { detail: i2.detail } : {}, ...r2 ? { outputPath: r2 } : {}, ...i2.reason ? { reason: i2.reason } : {} });
      }));
    }
    getShellIdFromCompletionTaskId(e2) {
      const t2 = e2.trim().split(":", 1)[0];
      if (!t2) return;
      const s2 = Number(t2);
      return Number.isInteger(s2) ? s2 : void 0;
    }
    cleanupShell(e2, t2) {
      const s2 = t2?.disposePty ?? true;
      this.terminals.delete(e2), s2 && (this.pseudoTerminals.get(e2)?.dispose(), this.pseudoTerminals.delete(e2)), this.abortFunctions.delete(e2), this.headlessShells.get(e2)?.(), this.headlessShells.delete(e2), this.completionConversationIds.delete(e2), this.disposeCloseListener(e2), this.trackedWork.has(e2) && (this.trackedWork.delete(e2), this.shellWorkNotificationQueue.queue(() => this.notifyShellCleared(e2)));
    }
    disposeCloseListener(e2) {
      const t2 = this.closeListeners.get(e2);
      t2 && (t2.dispose(), this.closeListeners.delete(e2));
    }
    async listBackgroundShellWork(e2) {
      const t2 = [...this.trackedWork.values()];
      return e2 ? t2.filter((t3) => t3.composerId === e2) : t2;
    }
    async killBackgroundShell(e2) {
      const t2 = Number(e2);
      if (!Number.isInteger(t2)) return false;
      const s2 = this.abortFunctions.get(t2);
      return !!s2 && (this.disposeCloseListener(t2), this.terminals.get(t2)?.dispose(), this.enqueueShellCompletion(t2, "aborted", "terminated_by_user"), s2(), this.cleanupShell(t2), true);
    }
    async showBackgroundShell(e2) {
      const t2 = Number(e2);
      if (!Number.isInteger(t2)) return false;
      const s2 = this.terminals.get(t2);
      if (s2) return s2.show(false), true;
      if (this.headlessShells.has(t2) && this.projectDir) {
        const e3 = T(this.projectDir, t2);
        if (void 0 === e3) return false;
        const s3 = l.Uri.file(e3);
        return l.cursor.isGlass ? (await l.commands.executeCommand("glass.openFileInStableTab", { uri: { scheme: s3.scheme, path: s3.path } }), true) : (await l.commands.executeCommand("vscode.open", s3, { preview: false }), true);
      }
      return false;
    }
    extractCommandDescription(e2) {
      const t2 = e2.split("\n")[0];
      return (t2.length > 50 ? t2.substring(0, 47) + "..." : t2) || "Shell";
    }
    getTerminal(e2) {
      return this.terminals.get(e2);
    }
    dispose() {
      if (!this.isDisposed) {
        for (const e2 of this.abortFunctions.values()) e2();
        for (const e2 of this.terminals.values()) e2.dispose();
        for (const e2 of [...this.trackedWork.keys()]) this.cleanupShell(e2);
        for (const e2 of this.pseudoTerminals.values()) e2.dispose();
        this.terminals.clear(), this.pseudoTerminals.clear(), this.abortFunctions.clear(), this.closeListeners.clear(), this.trackedWork.clear(), super.dispose();
      }
    }
  }
  var U = s(46862);
  const j = "disable_terminal_output_ui_streaming";
  async function q(e2) {
    const t2 = e2.homeDir ?? i.homedir(), s2 = [], d2 = (0, S.resolveSandboxHelperPath)(e2.extensionPath);
    let c2 = false;
    const m2 = await (async function(e3) {
      const t3 = e3?.checkFeatureGate ?? ((e4) => l.cursor.checkFeatureGate(e4)), s3 = e3?.getDynamicConfigValue ?? ((e4) => l.cursor.getDynamicConfigValue(e4));
      try {
        if (await t3(E)) {
          const e4 = await s3(I);
          if (e4) return { shellOutputBackpressureOptions: { bufferOutputEvents: true, outputLimiterOptions: { flushIntervalMs: e4.outputLimiterFlushIntervalMs, maxBufferedBytes: e4.outputLimiterMaxBufferedBytes } }, shellExecOutputSuppressionOptions: { windowMs: e4.outputSuppressionWindowMs, minimumThresholdCharsPerSecond: e4.outputSuppressionThresholdCharsPerSecond, minChars: e4.outputSuppressionMinChars } };
        }
      } catch {
      }
      return { shellOutputBackpressureOptions: void 0, shellExecOutputSuppressionOptions: void 0 };
    })(), f2 = m2.shellOutputBackpressureOptions, v2 = m2.shellExecOutputSuppressionOptions;
    let k2 = false;
    try {
      k2 = await l.cursor.checkFeatureGate("shell_exec_powershell_utf8_console");
    } catch {
    }
    const x2 = y(t2, e2.workspacePaths ?? []);
    s2.push(() => x2.dispose());
    const D2 = (0, S.FD)();
    let _2 = false;
    l.cursor.getUseLegacyTerminalTool().then((e3) => {
      _2 = e3;
    });
    const T2 = l.cursor.onDidChangeUseLegacyTerminalTool((e3) => {
      _2 = e3;
    });
    s2.push(() => T2.dispose());
    const W2 = { env: { CURSOR_AGENT: "1" } }, F2 = (0, a.Fn)({ ...W2, userTerminalHint: D2 }), q2 = (0, a.fi)({ ...W2, shell: (0, a.WE)((0, a.G6)(D2)) }), L = new R(e2.projectDir);
    s2.push(() => L.dispose());
    const $ = /* @__PURE__ */ new Map();
    s2.push(() => {
      for (const e3 of $.values()) e3.value.dispose();
      $.clear();
    });
    const N = l.cursor.registerBackgroundShellProvider({ listBackgroundShellWork: async (e3) => L.listBackgroundShellWork(e3), killBackgroundShell: async (e3) => L.killBackgroundShell(e3), showBackgroundShell: async (e3) => L.showBackgroundShell(e3) });
    s2.push(() => N.dispose());
    return { get helperConfigured() {
      return c2;
    }, networkWatcherRegistered: true, backgroundShellProviderRegistered: true, defaultPolicyType: "insecure_none", shellOutputBackpressureEnabled: void 0 !== f2, configureSandboxHelper: () => {
      if (c2) return true;
      if (void 0 === d2) return u.gW.warn("Sandbox helper path not found, sandboxing will be unavailable"), false;
      let e3;
      try {
        e3 = (0, b.Qf)({ checkFeatureGate: () => l.cursor.checkFeatureGate("sandbox_read_control_portal"), onDidChangeGates: (e4) => l.cursor.onDidChangeGates(e4) });
        const t3 = e3;
        c2 = (0, S.dn)({ helperPath: d2, workspaceReadEnabled: () => t3.getEnabled() }), c2 ? (s2.push(() => t3.dispose()), e3 = void 0) : (t3.dispose(), e3 = void 0, u.gW.warn("Sandbox helper not configured: ripgrep is not ready yet"));
      } catch (t3) {
        e3?.dispose(), u.gW.error("Failed to configure sandbox", t3);
      }
      return c2;
    }, createSessionOverrides({ sessionId: s3, rootSessionId: i2, workspacePaths: a2, backgroundWorkRegistry: d3 }) {
      const c3 = (0, U.x3)(a2, t2), m3 = c3[0] ?? t2, S2 = x2.acquireSessionRepo({ repoPaths: c3, sessionId: s3 });
      let y2;
      try {
        const a3 = w({ homeDir: t2, workspacePaths: c3 }), b2 = (function() {
          let e3, t3;
          const s4 = () => (void 0 === e3 && (e3 = (async () => {
            try {
              return await l.cursor.checkFeatureGate(j);
            } catch {
              return false;
            }
          })().then((e4) => (t3 = e4, e4))), e3);
          return s4.getResolvedValue = () => t3, s4;
        })();
        b2();
        const E2 = (function() {
          if (l.cursor.isGlass && void 0 === l.env.remoteName) return (e3) => {
            l.commands.executeCommand(o.t, e3).then(void 0, (e4) => {
              u.gW.warn(`Failed to report a headless shell event to Glass: ${String(e4)}`);
            });
          };
        })(), I2 = { onShellCreated: ({ shellId: e3, command: t3, cwd: s4, registerEventHandler: o2, conversationId: r2, abortShell: a4, description: l2, toolCallId: u2 }) => true === b2.getResolvedValue() ? (E2 && o2((0, n.BQk)(e3, E2)), L.trackHeadlessShell({ shellId: e3, command: t3, conversationId: r2, completionConversationId: i2, abortShell: a4, description: l2, toolCallId: u2, onCleanup: E2 && (() => E2({ kind: "exit", shellId: e3 })) })) : L.createTerminal({ shellId: e3, command: t3, cwd: s4, registerEventHandler: o2, conversationId: r2, completionConversationId: i2, abortShell: a4, description: l2, isShellExecOutputBackpressureEnabled: () => void 0 !== f2, getShellExecOutputSuppressionOptions: () => v2, toolCallId: u2 }) }, x3 = (0, n.hQM)(e2.projectDir, I2, (e3) => (0, h.L)(e3, e3.get(r.zN)?.conversationId));
        !(function(e3, t3) {
          if (O.has(e3)) return e3;
          O.add(e3);
          const s4 = e3.enqueue.bind(e3);
          e3.enqueue = (i3) => {
            const o2 = P(e3);
            s4(i3);
            const r2 = P(e3), n2 = void 0 === o2 || void 0 === r2 || r2 > o2, a4 = i3.payload;
            n2 && "shell" === a4.kind && t3.shouldForwardShellOutputCompletion(a4) && ("task_progress" === a4.reason && e3.suppress(i3.conversationId, a4.taskId), t3.enqueueShellOutputCompletion(a4, i3.conversationId));
          };
        })(d3, L);
        const T3 = (0, C.B4)($, s3, () => {
          const e3 = (_2 ? q2 : F2).clone(m3);
          return new B(e3, { shouldSuppressTerminalUiStreaming: b2, shellExecOutputBackpressureEnabled: void 0 !== f2, shellExecOutputSuppressionOptions: v2 });
        });
        y2 = T3;
        const W3 = T3.value, R2 = e2.teamSettingsService, U2 = c3;
        return { overrides: { _defaultSandboxPolicy: p, _defaultSandboxPolicySources: a3, terminalExecutor: W3, backgroundShellFactory: x3, userTerminalHint: D2, shellOutputBackpressureOptions: f2, powershellUtf8Console: k2, ...void 0 === R2 ? {} : { getNetworkAllowlistInfo: () => (async function(e3, t3, s4) {
          const i3 = g(s4);
          if (0 === i3.length) return (0, n.mAh)(e3, t3);
          const o2 = await Promise.all(i3.map((s5) => (0, n.mAh)(e3, t3, s5))), r2 = [...new Set(o2.flatMap((e4) => e4.explicitEntries))];
          return { hasDefaults: o2.some((e4) => e4.hasDefaults), explicitEntries: r2 };
        })(R2, t2, U2) } }, dispose: () => {
          S2.dispose(), T3.release();
        } };
      } catch (e3) {
        throw y2?.release(), S2.dispose(), e3;
      }
    }, dispose: () => {
      for (const e3 of s2.splice(0).reverse()) e3();
    } };
  }
} };
