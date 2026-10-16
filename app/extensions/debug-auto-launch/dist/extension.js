"use strict";
var G = Object.create;
var m = Object.defineProperty;
var L = Object.getOwnPropertyDescriptor;
var W = Object.getOwnPropertyNames;
var F = Object.getPrototypeOf, j = Object.prototype.hasOwnProperty;
var R = (t, a) => {
  for (var s in a) m(t, s, { get: a[s], enumerable: true });
}, E = (t, a, s, o) => {
  if (a && typeof a == "object" || typeof a == "function") for (let n of W(a)) !j.call(t, n) && n !== s && m(t, n, { get: () => a[n], enumerable: !(o = L(a, n)) || o.enumerable });
  return t;
};
var N = (t, a, s) => (s = t != null ? G(F(t)) : {}, E(a || !t || !t.__esModule ? m(s, "default", { value: t, enumerable: true }) : s, t)), V = (t) => E(m({}, "__esModule", { value: true }), t);
var at = {};
R(at, { activate: () => Q, deactivate: () => U });
module.exports = V(at);
var T = require("fs"), I = require("net"), k = require("path"), e = N(require("vscode"));
var X = { disabled: e.l10n.t("Auto Attach: Disabled"), always: e.l10n.t("Auto Attach: Always"), smart: e.l10n.t("Auto Attach: Smart"), onlyWithFlag: e.l10n.t("Auto Attach: With Flag") }, M = { disabled: e.l10n.t("Disabled"), always: e.l10n.t("Always"), smart: e.l10n.t("Smart"), onlyWithFlag: e.l10n.t("Only With Flag") }, $ = { disabled: e.l10n.t("Auto attach is disabled and not shown in status bar"), always: e.l10n.t("Auto attach to every Node.js process launched in the terminal"), smart: e.l10n.t("Auto attach when running scripts that aren't in a node_modules folder"), onlyWithFlag: e.l10n.t("Only auto attach when the `--inspect` flag is given") }, C = e.l10n.t("Toggle auto attach in this workspace"), D = e.l10n.t("Toggle auto attach on this machine"), J = e.l10n.t("Temporarily disable auto attach in this session"), H = e.l10n.t("Re-enable auto attach"), K = e.l10n.t("Auto Attach: Disabled"), _ = "extension.node-debug.toggleAutoAttach", h = "jsDebugIpcState", f = "debug.javascript", g = "autoAttachFilter", x = new Set(["autoAttachSmartPattern", g].map((t) => `${f}.${t}`)), A, d, p, l = false;
function Q(t) {
  A = Promise.resolve({ context: t, state: null }), t.subscriptions.push(e.commands.registerCommand(_, B.bind(null, t))), t.subscriptions.push(e.workspace.onDidChangeConfiguration((a) => {
    (a.affectsConfiguration(`${f}.${g}`) || [...x].some((s) => a.affectsConfiguration(s))) && O();
  })), w(b());
}
async function U() {
  await y();
}
function O() {
  w("disabled"), w(b());
}
function q(t) {
  if (t) {
    if (t.workspaceFolderValue) return e.ConfigurationTarget.WorkspaceFolder;
    if (t.workspaceValue) return e.ConfigurationTarget.Workspace;
    if (t.globalValue) return e.ConfigurationTarget.Global;
  } else return e.ConfigurationTarget.Global;
  return e.ConfigurationTarget.Global;
}
async function B(t, a) {
  let s = e.workspace.getConfiguration(f);
  a = a || q(s.inspect(g));
  let o = a === e.ConfigurationTarget.Global, n = e.window.createQuickPick(), i = b(), u = ["always", "smart", "onlyWithFlag", "disabled"].map((c) => ({ state: c, label: M[c], description: $[c], alwaysShow: true }));
  i !== "disabled" && u.unshift({ setTempDisabled: !l, label: l ? H : J, alwaysShow: true }), n.items = u, n.activeItems = l ? [u[0]] : n.items.filter((c) => "state" in c && c.state === i), n.title = o ? D : C, n.buttons = [{ iconPath: new e.ThemeIcon(o ? "folder" : "globe"), tooltip: o ? C : D }], n.show();
  let r = await new Promise((c) => {
    n.onDidAccept(() => c(n.selectedItems[0])), n.onDidHide(() => c(void 0)), n.onDidTriggerButton(() => {
      c({ scope: o ? e.ConfigurationTarget.Workspace : e.ConfigurationTarget.Global });
    });
  });
  if (n.dispose(), !!r) {
    if ("scope" in r) return await B(t, r.scope);
    "state" in r && (r.state !== i ? s.update(g, r.state, a) : l && (r = { setTempDisabled: false })), "setTempDisabled" in r && (v(t, i, true), l = r.setTempDisabled, r.setTempDisabled ? await y() : await S(t), v(t, i, false));
  }
}
function b() {
  return e.workspace.getConfiguration(f).get(g) ?? "disabled";
}
async function z(t) {
  (p || await t.workspaceState.get(h)) && (await t.workspaceState.update(h, void 0), await e.commands.executeCommand("extension.js-debug.clearAutoAttachVariables"), await y());
}
async function S(t) {
  let a = await tt(t);
  if (a) return p = Y(a).catch(async (s) => {
    if (console.error("[debug-auto-launch] Error creating auto attach server: ", s), process.platform !== "win32") try {
      await T.promises.access((0, k.dirname)(a));
    } catch {
      console.error("[debug-auto-launch] Refreshing variables from error"), O();
      return;
    }
  }), await p;
}
var Y = async (t) => {
  try {
    return await P(t);
  } catch {
    return await T.promises.unlink(t).catch(() => {
    }), await P(t);
  }
}, P = (t) => new Promise((a, s) => {
  let o = (0, I.createServer)((n) => {
    let i = [];
    n.on("data", async (u) => {
      if (u[u.length - 1] !== 0) {
        i.push(u);
        return;
      }
      i.push(u.slice(0, -1));
      try {
        await e.commands.executeCommand("extension.js-debug.autoAttachToProcess", JSON.parse(Buffer.concat(i).toString())), n.write(Buffer.from([0]));
      } catch (r) {
        n.write(Buffer.from([1])), console.error(r);
      }
    });
  }).on("error", s).listen(t, () => a(o));
});
async function y() {
  let t = await p;
  t && await new Promise((a) => t.close(a));
}
var Z = { async disabled(t) {
  await z(t);
}, async onlyWithFlag(t) {
  await S(t);
}, async smart(t) {
  await S(t);
}, async always(t) {
  await S(t);
} };
function v(t, a, s = false) {
  if (a === "disabled" && !s) {
    d?.hide();
    return;
  }
  d || (d = e.window.createStatusBarItem("status.debug.autoAttach", e.StatusBarAlignment.Left), d.name = e.l10n.t("Debug Auto Attach"), d.command = _, d.tooltip = e.l10n.t("Automatically attach to node.js processes in debug mode"), t.subscriptions.push(d));
  let o = s ? "$(loading) " : "";
  o += l ? K : X[a], d.text = o, d.show();
}
function w(t) {
  A = A.then(async ({ context: a, state: s }) => t === s ? { context: a, state: s } : (s !== null && v(a, s, true), await Z[t](a), l = false, v(a, t, false), { context: a, state: t }));
}
async function tt(t) {
  let a = t.workspaceState.get(h), s = e.extensions.getExtension("ms-vscode.js-debug-nightly")?.extensionPath || e.extensions.getExtension("ms-vscode.js-debug")?.extensionPath, o = et();
  if (a?.jsDebugPath === s && a?.settingsValue === o) return a.ipcAddress;
  let n = await e.commands.executeCommand("extension.js-debug.setAutoAttachVariables", a?.ipcAddress);
  if (!n) return;
  let i = n.ipcAddress;
  return await t.workspaceState.update(h, { ipcAddress: i, jsDebugPath: s, settingsValue: o }), i;
}
function et() {
  let t = {}, a = e.workspace.getConfiguration(f);
  for (let s of x) t[s] = a.get(s);
  return JSON.stringify(t);
}
