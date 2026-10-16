"use strict";
var p = Object.defineProperty;
var y = Object.getOwnPropertyDescriptor;
var q = Object.getOwnPropertyNames;
var C = Object.prototype.hasOwnProperty;
var Q = (i, e) => {
  for (var r in e) p(i, r, { get: e[r], enumerable: true });
}, M = (i, e, r, o) => {
  if (e && typeof e == "object" || typeof e == "function") for (let t of q(e)) !C.call(i, t) && t !== r && p(i, t, { get: () => e[t], enumerable: !(o = y(e, t)) || o.enumerable });
  return i;
};
var V = (i) => M(p({}, "__esModule", { value: true }), i), R = (i, e, r, o) => {
  for (var t = o > 1 ? void 0 : o ? y(e, r) : e, n = i.length - 1, s; n >= 0; n--) (s = i[n]) && (t = (o ? s(e, r, t) : s(t)) || t);
  return o && t && p(e, r, t), t;
};
var L = {};
Q(L, { activate: () => T });
module.exports = V(L);
var h = require("vscode");
var u = require("vscode");
function v(i) {
  return { dispose: i };
}
function g(i) {
  return i.then(() => {
  });
}
var O;
((o) => {
  function i(t, n) {
    return typeof t == "string" && (t = r(t)), typeof n == "string" && (n = r(n)), t.major > n.major ? 1 : t.major < n.major ? -1 : t.minor > n.minor ? 1 : t.minor < n.minor ? -1 : t.patch > n.patch ? 1 : t.patch < n.patch ? -1 : t.pre === void 0 && n.pre !== void 0 ? 1 : t.pre !== void 0 && n.pre === void 0 ? -1 : t.pre !== void 0 && n.pre !== void 0 ? t.pre.localeCompare(n.pre) : 0;
  }
  o.compare = i;
  function e(t, n, s, a) {
    return { major: typeof t == "string" ? parseInt(t, 10) : t, minor: typeof n == "string" ? parseInt(n, 10) : n, patch: s == null ? 0 : typeof s == "string" ? parseInt(s, 10) : s, pre: a };
  }
  o.from = e;
  function r(t) {
    let [n, s] = t.split("-"), [a, c, d] = n.split(".");
    return e(a, c, d, s);
  }
  o.fromString = r;
})(O ||= {});
function w(i) {
  return x((e, r) => {
    let o = `$debounce$${r}`;
    return function(...t) {
      clearTimeout(this[o]), this[o] = setTimeout(() => e.apply(this, t), i);
    };
  });
}
var D = x(F);
function F(i, e) {
  let r = `$throttle$current$${e}`, o = `$throttle$next$${e}`, t = function(...n) {
    if (this[o]) return this[o];
    if (this[r]) return this[o] = g(this[r]).then(() => (this[o] = void 0, t.apply(this, n))), this[o];
    this[r] = i.apply(this, n);
    let s = () => this[r] = void 0;
    return g(this[r]).then(s, s), this[r];
  };
  return t;
}
function x(i) {
  return (e, r, o) => {
    let t = null, n = null;
    if (typeof o.value == "function" ? (t = "value", n = o.value) : typeof o.get == "function" && (t = "get", n = o.get), !n || !t) throw new Error("not supported");
    o[t] = i(n, r);
  };
}
async function A(i) {
  let e = [], r = await new Promise((o) => {
    e.push(i.onDidAccept(() => o(i.selectedItems[0])), i.onDidHide(() => o(void 0))), i.show();
  });
  return i.hide(), e.forEach((o) => o.dispose()), r;
}
var l = class {
  constructor(e) {
    this.provider = e;
    this.disposables = [];
    this.isDisposed = false;
  }
  dispose() {
    this.disposables.forEach((e) => e.dispose()), this.disposables = [], this.quickpick = void 0, this.isDisposed = true;
  }
  ensureQuickPick() {
    this.quickpick || (this.quickpick = u.window.createQuickPick(), this.disposables.push(this.quickpick), this.quickpick.ignoreFocusOut = true, this.disposables.push(this.quickpick.onDidHide(() => this.dispose())), this.provider.supportsQuery ? (this.quickpick.placeholder = this.provider.placeholder ?? u.l10n.t("Repository name (type to search)"), this.disposables.push(this.quickpick.onDidChangeValue(this.onDidChangeValue, this))) : this.quickpick.placeholder = this.provider.placeholder ?? u.l10n.t("Repository name"));
  }
  onDidChangeValue() {
    this.query();
  }
  async query() {
    try {
      if (this.isDisposed) return;
      this.ensureQuickPick(), this.quickpick.busy = true, this.quickpick.show();
      let e = await this.provider.getRemoteSources(this.quickpick?.value) || [];
      if (this.isDisposed) return;
      e.length === 0 ? this.quickpick.items = [{ label: u.l10n.t("No remote repositories found."), alwaysShow: true }] : this.quickpick.items = e.map((r) => ({ label: r.icon ? `$(${r.icon}) ${r.name}` : r.name, description: r.description || (typeof r.url == "string" ? r.url : r.url[0]), detail: r.detail, remoteSource: r, alwaysShow: true }));
    } catch (e) {
      this.quickpick.items = [{ label: u.l10n.t("{0} Error: {1}", "$(error)", e.message), alwaysShow: true }], console.error(e);
    } finally {
      this.isDisposed || (this.quickpick.busy = false);
    }
  }
  async pick() {
    return await this.query(), this.isDisposed ? void 0 : (await A(this.quickpick))?.remoteSource;
  }
};
R([w(300)], l.prototype, "onDidChangeValue", 1), R([D], l.prototype, "query", 1);
async function E(i, e) {
  let r = i.getRemoteProviders(), o = [];
  for (let t of r) {
    let n = await t.getRemoteSourceActions?.(e);
    n?.length && o.push(...n);
  }
  return o;
}
async function b(i, e = {}) {
  let r = u.window.createQuickPick();
  if (r.ignoreFocusOut = true, r.title = e.title, e.providerName) {
    let c = i.getRemoteProviders().filter((d) => d.name === e.providerName)[0];
    if (c) return await I(c, e);
  }
  let o = i.getRemoteProviders().map((c) => ({ label: (c.icon ? `$(${c.icon}) ` : "") + (e.providerLabel ? e.providerLabel(c) : c.name), alwaysShow: true, provider: c })), t = [];
  if (e.showRecentSources) for (let { provider: c } of o) {
    let d = (await c.getRecentRemoteSources?.() ?? []).map((m) => ({ ...m, label: (m.icon ? `$(${m.icon}) ` : "") + m.name, url: typeof m.url == "string" ? m.url : m.url[0] }));
    t.push(...d);
  }
  let n = [{ kind: u.QuickPickItemKind.Separator, label: u.l10n.t("remote sources") }, ...o, { kind: u.QuickPickItemKind.Separator, label: u.l10n.t("recently opened") }, ...t.sort((c, d) => d.timestamp - c.timestamp)];
  r.placeholder = e.placeholder ?? (o.length === 0 ? u.l10n.t("Provide repository URL") : u.l10n.t("Provide repository URL or pick a repository source."));
  let s = (c) => {
    if (c) {
      let d = (typeof e.urlLabel == "string" ? e.urlLabel : e.urlLabel?.(c)) ?? u.l10n.t("URL");
      r.items = [{ label: d, description: c, alwaysShow: true, url: c }, ...n];
    } else r.items = n;
  };
  r.onDidChangeValue(s), s();
  let a = await A(r);
  if (a) {
    if (a.url) return a.url;
    if (a.provider) return await I(a.provider, e);
  }
}
async function I(i, e = {}) {
  let r = new l(i), o = await r.pick();
  r.dispose();
  let t;
  if (o && (typeof o.url == "string" ? t = o.url : o.url.length > 0 && (t = await u.window.showQuickPick(o.url, { ignoreFocusOut: true, placeHolder: u.l10n.t("Choose a URL to clone from.") }))), !t || !e.branch) return t;
  if (!i.getBranches) return { url: t };
  let n = await i.getBranches(t);
  if (!n) return { url: t };
  let s = await u.window.showQuickPick(n, { placeHolder: u.l10n.t("Branch name") });
  return s ? { url: t, branch: s } : { url: t };
}
var f = class {
  constructor(e) {
    this._model = e;
  }
  pickRemoteSource(e) {
    return b(this._model, e);
  }
  getRemoteSourceActions(e) {
    return E(this._model, e);
  }
  registerRemoteSourceProvider(e) {
    return this._model.registerRemoteSourceProvider(e);
  }
};
function _(i) {
  let e = [];
  return e.push(h.commands.registerCommand("git-base.api.getRemoteSources", (r) => {
    if (i.model) return b(i.model, r);
  })), h.Disposable.from(...e);
}
var $ = require("vscode");
var k = class {
  constructor(e) {
    this.enabled = false;
    this._onDidChangeEnablement = new $.EventEmitter();
    this.onDidChangeEnablement = this._onDidChangeEnablement.event;
    this._model = void 0;
    e && (this.enabled = true, this._model = e);
  }
  set model(e) {
    this._model = e;
    let r = !!e;
    this.enabled !== r && (this.enabled = r, this._onDidChangeEnablement.fire(this.enabled));
  }
  get model() {
    return this._model;
  }
  getAPI(e) {
    if (!this._model) throw new Error("Git model not found");
    if (e !== 1) throw new Error(`No API version ${e} found.`);
    return new f(this._model);
  }
};
var S = require("vscode");
var P = class {
  constructor() {
    this.remoteSourceProviders = /* @__PURE__ */ new Set();
    this._onDidAddRemoteSourceProvider = new S.EventEmitter();
    this.onDidAddRemoteSourceProvider = this._onDidAddRemoteSourceProvider.event;
    this._onDidRemoveRemoteSourceProvider = new S.EventEmitter();
    this.onDidRemoveRemoteSourceProvider = this._onDidRemoveRemoteSourceProvider.event;
  }
  registerRemoteSourceProvider(e) {
    return this.remoteSourceProviders.add(e), this._onDidAddRemoteSourceProvider.fire(e), v(() => {
      this.remoteSourceProviders.delete(e), this._onDidRemoveRemoteSourceProvider.fire(e);
    });
  }
  getRemoteProviders() {
    return [...this.remoteSourceProviders.values()];
  }
};
function T(i) {
  let e = new k(new P());
  return i.subscriptions.push(_(e)), e;
}
