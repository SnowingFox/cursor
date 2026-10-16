"use strict";
var C = Object.create;
var l = Object.defineProperty;
var T = Object.getOwnPropertyDescriptor;
var I = Object.getOwnPropertyNames;
var A = Object.getPrototypeOf, E = Object.prototype.hasOwnProperty;
var x = (s, t) => {
  for (var e in t) l(s, e, { get: t[e], enumerable: true });
}, f = (s, t, e, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n of I(t)) !E.call(s, n) && n !== e && l(s, n, { get: () => t[n], enumerable: !(r = T(t, n)) || r.enumerable });
  return s;
};
var b = (s, t, e) => (e = s != null ? C(A(s)) : {}, f(t || !s || !s.__esModule ? l(e, "default", { value: s, enumerable: true }) : e, s)), R = (s) => f(l({}, "__esModule", { value: true }), s);
var L = {};
x(L, { TunnelPrivacyId: () => y, activate: () => F, deactivate: () => N });
module.exports = R(L);
var S = require("child_process"), h = b(require("path")), o = b(require("vscode"));
var u = class {
  get isRejected() {
    return this.outcome?.outcome === 1;
  }
  get isResolved() {
    return this.outcome?.outcome === 0;
  }
  get isSettled() {
    return !!this.outcome;
  }
  get value() {
    return this.outcome?.outcome === 0 ? this.outcome?.value : void 0;
  }
  constructor() {
    this.p = new Promise((t, e) => {
      this.completeCallback = t, this.errorCallback = e;
    });
  }
  complete(t) {
    return new Promise((e) => {
      this.completeCallback(t), this.outcome = { outcome: 0, value: t }, e();
    });
  }
  error(t) {
    return new Promise((e) => {
      this.errorCallback(t), this.outcome = { outcome: 1, value: t }, e();
    });
  }
};
var w = require("stream"), p = () => new d(10), d = class extends w.Transform {
  constructor(e) {
    super();
    this.splitter = e;
  }
  _transform(e, r, n) {
    this.buffer ? this.buffer = Buffer.concat([this.buffer, e]) : this.buffer = e;
    let a = 0;
    for (; a < this.buffer.length; ) {
      let i = this.buffer.indexOf(this.splitter, a);
      if (i === -1) break;
      this.push(this.buffer.subarray(a, i)), a = i + 1;
    }
    this.buffer = a === this.buffer.length ? void 0 : this.buffer.subarray(a), n();
  }
  _flush(e) {
    this.buffer && this.push(this.buffer), e();
  }
};
var y = ((e) => (e.Private = "private", e.Public = "public", e))(y || {}), _ = 1e4, k = process.env.VSCODE_FORWARDING_IS_DEV ? h.join(__dirname, "../../../cli/target/debug/code") : h.join(o.env.appRoot, process.platform === "darwin" ? "bin" : "../../bin", o.env.appQuality === "stable" ? "code-tunnel" : "code-tunnel-insiders") + (process.platform === "win32" ? ".exe" : ""), m = class {
  constructor(t, e, r) {
    this.remoteAddress = t;
    this.privacy = e;
    this.protocol = r;
    this.disposeEmitter = new o.EventEmitter();
    this.onDidDispose = this.disposeEmitter.event;
  }
  setPortFormat(t) {
    this.localAddress = t.replace("{port}", String(this.remoteAddress.port));
  }
  dispose() {
    this.disposeEmitter.fire();
  }
};
async function F(s) {
  if (o.env.remoteAuthority) return;
  let t = new v(o.l10n.t("Port Forwarding")), e = new g(t, s);
  s.subscriptions.push(o.commands.registerCommand("tunnel-forwarding.showLog", () => t.show()), o.commands.registerCommand("tunnel-forwarding.restart", () => e.restart()), e.onDidStateChange((r) => {
    o.commands.executeCommand("setContext", "tunnelForwardingIsRunning", r.state !== 2);
  }), await o.workspace.registerTunnelProvider(e, { tunnelFeatures: { elevation: false, protocol: true, privacyOptions: [{ themeIcon: "globe", id: "public", label: o.l10n.t("Public") }, { themeIcon: "lock", id: "private", label: o.l10n.t("Private") }] } }));
}
function N() {
}
var v = class {
  constructor(t) {
    this.label = t;
  }
  show() {
    return this.outputChannel?.show();
  }
  clear() {
    this.outputChannel?.clear();
  }
  log(t, e, ...r) {
    this.outputChannel || (this.outputChannel = o.window.createOutputChannel(this.label, { log: true }), o.commands.executeCommand("setContext", "tunnelForwardingHasLog", true)), this.outputChannel[t](e, ...r);
  }
}, P = "didWarnPublic", g = class {
  constructor(t, e) {
    this.logger = t;
    this.context = e;
    this.tunnels = /* @__PURE__ */ new Set();
    this.stateChange = new o.EventEmitter();
    this._state = { state: 2 };
    this.onDidStateChange = this.stateChange.event;
  }
  get state() {
    return this._state;
  }
  set state(t) {
    this._state = t, this.stateChange.fire(t);
  }
  async provideTunnel(t) {
    if (t.privacy === "public" && !await this.consentPublicPort(t.remoteAddress.port)) return;
    let e = new m(t.remoteAddress, t.privacy || "private", t.protocol === "https" ? "https" : "http");
    switch (this.tunnels.add(e), e.onDidDispose(() => {
      this.tunnels.delete(e), this.updateActivePortsIfRunning();
    }), this.state.state) {
      case 3:
      case 2:
        await this.setupPortForwardingProcess();
      case 0:
        return this.updateActivePortsIfRunning(), new Promise((r, n) => {
          let a = this.stateChange.event((i) => {
            i.state === 1 ? (e.setPortFormat(i.portFormat), a.dispose(), r(e)) : i.state === 3 && (a.dispose(), n(new Error(i.error)));
          });
        });
      case 1:
        return e.setPortFormat(this.state.portFormat), this.updateActivePortsIfRunning(), e;
    }
  }
  async restart() {
    this.killRunningProcess(), await this.setupPortForwardingProcess(), this.updateActivePortsIfRunning();
  }
  async consentPublicPort(t) {
    if (this.context.globalState.get(P, false)) return true;
    let r = o.l10n.t("Continue"), n = o.l10n.t("Don't show again"), a = await o.window.showWarningMessage(o.l10n.t("You're about to create a publicly forwarded port. Anyone on the internet will be able to connect to the service listening on port {0}. You should only proceed if this service is secure and non-sensitive.", t), { modal: true }, r, n);
    if (a !== r) if (a === n) await this.context.globalState.update(P, true);
    else return false;
    return true;
  }
  isInStateWithProcess(t) {
    return (this.state.state === 0 || this.state.state === 1) && this.state.process === t;
  }
  killRunningProcess() {
    (this.state.state === 0 || this.state.state === 1) && (this.logger.log("info", "[forwarding] no more ports, stopping forwarding CLI"), this.state.process.kill(), this.state = { state: 2 });
  }
  updateActivePortsIfRunning() {
    if (this.state.state !== 0 && this.state.state !== 1) return;
    let t = [...this.tunnels].map((e) => ({ number: e.remoteAddress.port, privacy: e.privacy, protocol: e.protocol }));
    this.state.process.stdin.write(`${JSON.stringify(t)}
`), t.length === 0 && !this.state.cleanupTimeout ? this.state.cleanupTimeout = setTimeout(() => this.killRunningProcess(), _) : t.length > 0 && this.state.cleanupTimeout && (clearTimeout(this.state.cleanupTimeout), this.state.cleanupTimeout = void 0);
  }
  async setupPortForwardingProcess() {
    let t = await o.authentication.getSession("github", ["user:email", "read:org"], { createIfNone: true }), e = ["--verbose", "tunnel", "forward-internal", "--provider", "github"];
    this.logger.log("info", "[forwarding] starting CLI");
    let r = (0, S.spawn)(k, e, { stdio: "pipe", env: { ...process.env, NO_COLOR: "1", VSCODE_CLI_ACCESS_TOKEN: t.accessToken } });
    this.state = { state: 0, process: r };
    let n = new u();
    o.window.withProgress({ location: o.ProgressLocation.Notification, title: o.l10n.t({ comment: ['do not change link format [Show Log](command), only change the text "Show Log"'], message: "Starting port forwarding system ([Show Log]({0}))", args: ["command:tunnel-forwarding.showLog"] }) }, () => n.p);
    let a;
    r.on("exit", (i) => {
      let c = `[forwarding] exited with code ${i}`;
      this.logger.log("info", c), n.complete(), this.isInStateWithProcess(r) && (this.state = { state: 3, error: c });
    }), r.on("error", (i) => {
      this.logger.log("error", `[forwarding] ${i}`), n.complete(), this.isInStateWithProcess(r) && (this.state = { state: 3, error: String(i) });
    }), r.stdout.pipe(p()).on("data", (i) => this.logger.log("info", `[forwarding] ${i}`)).resume(), r.stderr.pipe(p()).on("data", (i) => {
      try {
        let c = JSON.parse(i);
        c.port_format && c.port_format !== a && (this.state = { state: 1, portFormat: c.port_format, process: r, cleanupTimeout: "cleanupTimeout" in this.state ? this.state.cleanupTimeout : void 0 }, n.complete());
      } catch {
        this.logger.log("error", `[forwarding] ${i}`);
      }
    }).resume(), await new Promise((i, c) => {
      r.on("spawn", i), r.on("error", c);
    });
  }
};
