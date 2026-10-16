"use strict";
var le = Object.create;
var H = Object.defineProperty;
var de = Object.getOwnPropertyDescriptor;
var pe = Object.getOwnPropertyNames;
var he = Object.getPrototypeOf, ge = Object.prototype.hasOwnProperty;
var me = (s, e) => {
  for (var t in e) H(s, t, { get: e[t], enumerable: true });
}, z = (s, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of pe(e)) !ge.call(s, o) && o !== t && H(s, o, { get: () => e[o], enumerable: !(r = de(e, o)) || r.enumerable });
  return s;
};
var E = (s, e, t) => (t = s != null ? le(he(s)) : {}, z(e || !s || !s.__esModule ? H(t, "default", { value: s, enumerable: true }) : t, s)), ve = (s) => z(H({}, "__esModule", { value: true }), s);
var ke = {};
me(ke, { activate: () => Se });
module.exports = ve(ke);
var f = E(require("vscode"));
var _ = { gitHubClientId: "01ab8ac9400c4e429b23" }, J = "Ov23liBW6nyYeQaKwxVR";
var h = E(require("vscode"));
var U = class {
  constructor(e, t, r) {
    this.context = e;
    this.serviceId = t;
    this.Logger = r;
  }
  async setToken(e) {
    try {
      return await this.context.secrets.store(this.serviceId, e);
    } catch (t) {
      this.Logger.error(`Setting token failed: ${t}`);
    }
  }
  async getToken() {
    try {
      let e = await this.context.secrets.get(this.serviceId);
      return e && e !== "[]" && this.Logger.trace("Token acquired from secret storage."), e;
    } catch (e) {
      return this.Logger.error(`Getting token failed: ${e}`), Promise.resolve(void 0);
    }
  }
  async deleteToken() {
    try {
      return await this.context.secrets.delete(this.serviceId);
    } catch (e) {
      return this.Logger.error(`Deleting token failed: ${e}`), Promise.resolve(void 0);
    }
  }
};
var d = E(require("vscode"));
var fe = ["vscode", "vscode-insiders", "vscode-wsl", "vscode-exploration"];
function Y(s) {
  return fe.includes(s.scheme) || /(?:^|\.)vscode\.dev$/.test(s.authority) || /(?:^|\.)github\.dev$/.test(s.authority);
}
function k(s, e) {
  return s === "github" || W(e);
}
function W(s) {
  return /\.ghe\.com$/.test(s.authority);
}
var Q = require("crypto"), A = Q.webcrypto;
var j;
try {
  j = require("electron").net.fetch;
} catch {
  j = fetch;
}
var y = j;
var se = E(require("path")), c = require("vscode");
var Z = E(require("http")), q = require("url"), ee = E(require("fs")), K = E(require("path")), te = require("crypto");
function X(s, e) {
  ee.readFile(e, (t, r) => {
    t ? (console.error(t), s.writeHead(404), s.end()) : (s.writeHead(200, { "content-length": r.length }), s.end(r));
  });
}
var $ = class {
  constructor(e, t) {
    this.nonce = (0, te.randomBytes)(16).toString("base64");
    if (!e) throw new Error("serveRoot must be defined");
    if (!t) throw new Error("startingRedirect must be defined");
    this._startingRedirect = new q.URL(t);
    let r;
    this._resultPromise = new Promise((o, i) => r = { resolve: o, reject: i }), this._server = Z.createServer((o, i) => {
      let n = new q.URL(o.url, `http://${o.headers.host}`);
      switch (n.pathname) {
        case "/signin": {
          (n.searchParams.get("nonce") ?? "").replace(/ /g, "+") !== this.nonce && (i.writeHead(302, { location: `/?error=${encodeURIComponent("Nonce does not match.")}` }), i.end()), i.writeHead(302, { location: this._startingRedirect.toString() }), i.end();
          break;
        }
        case "/callback": {
          let a = n.searchParams.get("code") ?? void 0, u = n.searchParams.get("state") ?? void 0, l = (n.searchParams.get("nonce") ?? "").replace(/ /g, "+");
          if (!a || !u || !l) {
            i.writeHead(400), i.end();
            return;
          }
          if (this.state !== u) throw i.writeHead(302, { location: `/?error=${encodeURIComponent("State does not match.")}` }), i.end(), new Error("State does not match.");
          if (this.nonce !== l) throw i.writeHead(302, { location: `/?error=${encodeURIComponent("Nonce does not match.")}` }), i.end(), new Error("Nonce does not match.");
          r.resolve({ code: a, state: u }), i.writeHead(302, { location: "/" }), i.end();
          break;
        }
        case "/":
          X(i, K.join(e, "index.html"));
          break;
        default:
          X(i, K.join(e, n.pathname.substring(1)));
          break;
      }
    });
  }
  set state(e) {
    e ? this._startingRedirect.searchParams.set("state", e) : this._startingRedirect.searchParams.delete("state");
  }
  get state() {
    return this._startingRedirect.searchParams.get("state") ?? void 0;
  }
  start() {
    return new Promise((e, t) => {
      if (this._server.listening) throw new Error("Server is already started");
      let r = setTimeout(() => {
        t(new Error("Timeout waiting for port"));
      }, 5e3);
      this._server.on("listening", () => {
        let o = this._server.address();
        if (typeof o == "string") this.port = parseInt(o);
        else if (o instanceof Object) this.port = o.port;
        else throw new Error("Unable to determine port");
        clearTimeout(r), this.state = `http://127.0.0.1:${this.port}/callback?nonce=${encodeURIComponent(this.nonce)}`, e(this.port);
      }), this._server.on("error", (o) => {
        t(new Error(`Error listening to server: ${o}`));
      }), this._server.on("close", () => {
        t(new Error("Closed"));
      }), this._server.listen(0, "127.0.0.1");
    });
  }
  stop() {
    return new Promise((e, t) => {
      if (!this._server.listening) throw new Error("Server is not started");
      this._server.close((r) => {
        r ? t(r) : e();
      });
    });
  }
  waitForOAuthResponse() {
    return this._resultPromise;
  }
};
var re = require("vscode");
var we = (s, e) => e(s);
function R(s, e = we) {
  let t, r = new re.EventEmitter();
  return { promise: new Promise((o, i) => {
    r.event((n) => i("Cancelled")), t = s((n) => {
      try {
        Promise.resolve(e(n, o, i)).catch(i);
      } catch (a) {
        i(a);
      }
    });
  }).then((o) => (t.dispose(), o), (o) => {
    throw t.dispose(), o;
  }), cancel: r };
}
function oe(s, e, t = (r, o) => r === o) {
  if (s === e) return true;
  if (!s || !e || s.length !== e.length) return false;
  for (let r = 0, o = s.length; r < o; r++) if (!t(s[r], e[r])) return false;
  return true;
}
var C = "Timed out", b = "User Cancelled", N = "network error", O = "Cancelled";
async function ie(s, e, t, r, o, i) {
  s.info("Exchanging code for token...");
  let n = _.gitHubClientSecret;
  if (!n) throw new Error("No client secret configured for GitHub authentication.");
  let a = new URLSearchParams([["code", r], ["client_id", o], ["redirect_uri", t.toString(true)], ["client_secret", n]]);
  i && a.append("github_enterprise", i.toString(true));
  let u = await y(e.toString(true), { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" }, body: a.toString() });
  if (u.ok) {
    let l = await u.json();
    return s.info("Token exchange success!"), l.access_token;
  } else {
    let l = await u.text(), p = new Error(l);
    throw p.name = "GitHubTokenExchangeError", p;
  }
}
var ye = [new class {
  constructor() {
    this.label = c.l10n.t("url handler");
    this.options = { supportsGitHubDotCom: true, supportsGitHubEnterpriseServer: false, supportsHostedGitHubEnterprise: true, supportsRemoteExtensionHost: true, supportsWebWorkerExtensionHost: true, supportsNoClientSecret: false, supportsSupportedClients: true, supportsUnsupportedClients: false };
  }
  async trigger({ scopes: e, baseUri: t, redirectUri: r, logger: o, nonce: i, callbackUri: n, uriHandler: a, enterpriseUri: u, existingLogin: l, clientId: p }) {
    return o.info(`Trying without local server... (${e})`), await c.window.withProgress({ location: c.ProgressLocation.Notification, title: c.l10n.t({ message: "Signing in to {0}...", args: [t.authority], comment: ["The {0} will be a url, e.g. github.com"] }), cancellable: true }, async (v, w) => {
      let g = a.waitForCode(o, e, i, w), m = new URLSearchParams([["client_id", p], ["redirect_uri", r.toString(true)], ["scope", e], ["state", encodeURIComponent(n.toString(true))]]);
      l ? m.append("login", l) : m.append("prompt", "select_account");
      let S = c.Uri.parse(t.with({ path: "/login/oauth/authorize", query: m.toString() }).toString(true));
      await c.env.openExternal(S);
      let V = await g, x = await c.commands.executeCommand("workbench.getCodeExchangeProxyEndpoints"), I = x?.github ? c.Uri.parse(`${x.github}login/oauth/access_token`) : t.with({ path: "/login/oauth/access_token" });
      return await ie(o, I, r, V, p, u);
    });
  }
}(), new class {
  constructor() {
    this.label = c.l10n.t("local server");
    this.options = { supportsGitHubDotCom: true, supportsGitHubEnterpriseServer: false, supportsHostedGitHubEnterprise: true, supportsRemoteExtensionHost: false, supportsWebWorkerExtensionHost: false, supportsNoClientSecret: false, supportsSupportedClients: true, supportsUnsupportedClients: true };
  }
  async trigger({ scopes: e, baseUri: t, redirectUri: r, logger: o, enterpriseUri: i, existingLogin: n, clientId: a }) {
    return o.info(`Trying with local server... (${e})`), await c.window.withProgress({ location: c.ProgressLocation.Notification, title: c.l10n.t({ message: "Signing in to {0}...", args: [t.authority], comment: ["The {0} will be a url, e.g. github.com"] }), cancellable: true }, async (u, l) => {
      let p = new URLSearchParams([["client_id", a], ["redirect_uri", r.toString(true)], ["scope", e]]);
      n ? p.append("login", n) : p.append("prompt", "select_account");
      let v = t.with({ path: "/login/oauth/authorize", query: p.toString() }), w = new $(se.join(__dirname, "../media"), v.toString(true)), g = await w.start(), m;
      try {
        c.env.openExternal(c.Uri.parse(`http://127.0.0.1:${g}/signin?nonce=${encodeURIComponent(w.nonce)}`));
        let { code: V } = await Promise.race([w.waitForOAuthResponse(), new Promise((x, I) => setTimeout(() => I(C), 3e5)), R(l.onCancellationRequested, (x, I, B) => {
          B(b);
        }).promise]);
        m = V;
      } finally {
        setTimeout(() => {
          w.stop();
        }, 5e3);
      }
      return await ie(o, t.with({ path: "/login/oauth/access_token" }), r, m, a, i);
    });
  }
}(), new class {
  constructor() {
    this.label = c.l10n.t("device code");
    this.options = { supportsGitHubDotCom: true, supportsGitHubEnterpriseServer: true, supportsHostedGitHubEnterprise: true, supportsRemoteExtensionHost: true, supportsWebWorkerExtensionHost: false, supportsNoClientSecret: true, supportsSupportedClients: true, supportsUnsupportedClients: true };
  }
  async trigger({ scopes: e, baseUri: t, logger: r, clientId: o }) {
    r.info(`Trying device code flow... (${e})`);
    let i = t.with({ path: "/login/device/code", query: `client_id=${o}&scope=${e}` }), n = await y(i.toString(true), { method: "POST", headers: { Accept: "application/json" } });
    if (!n.ok) throw new Error(`Failed to get one-time code: ${await n.text()}`);
    let a = await n.json(), u = c.l10n.t("Copy & Continue to GitHub");
    if (await c.window.showInformationMessage(c.l10n.t({ message: "Your Code: {0}", args: [a.user_code], comment: ["The {0} will be a code, e.g. 123-456"] }), { modal: true, detail: c.l10n.t("To finish authenticating, navigate to GitHub and paste in the above one-time code.") }, u) !== u) throw new Error(b);
    await c.env.clipboard.writeText(a.user_code);
    let p = await c.env.asExternalUri(c.Uri.parse(a.verification_uri));
    return await c.env.openExternal(p), await this.waitForDeviceCodeAccessToken(t, a, o);
  }
  async waitForDeviceCodeAccessToken(e, t, r) {
    return await c.window.withProgress({ location: c.ProgressLocation.Notification, cancellable: true, title: c.l10n.t({ message: "Open [{0}]({0}) in a new tab and paste your one-time code: {1}", args: [t.verification_uri, t.user_code], comment: ["The [{0}]({0}) will be a url and the {1} will be a code, e.g. 123-456", '{Locked="[{0}]({0})"}'] }) }, async (o, i) => {
      let n = e.with({ path: "/login/oauth/access_token", query: `client_id=${r}&device_code=${t.device_code}&grant_type=urn:ietf:params:oauth:grant-type:device_code` }), a = 120 / t.interval;
      for (let u = 0; u < a; u++) {
        if (await new Promise((v) => setTimeout(v, t.interval * 1e3)), i.isCancellationRequested) throw new Error(b);
        let l;
        try {
          l = await y(n.toString(true), { method: "POST", headers: { Accept: "application/json" } });
        } catch {
          continue;
        }
        if (!l.ok) continue;
        let p = await l.json();
        if (p.error !== "authorization_pending") {
          if (p.error) throw new Error(p.error_description);
          return p.access_token;
        }
      }
      throw new Error(C);
    });
  }
}(), new class {
  constructor() {
    this.label = c.l10n.t("personal access token");
    this.options = { supportsGitHubDotCom: true, supportsGitHubEnterpriseServer: true, supportsHostedGitHubEnterprise: true, supportsRemoteExtensionHost: true, supportsWebWorkerExtensionHost: true, supportsNoClientSecret: true, supportsSupportedClients: false, supportsUnsupportedClients: true };
  }
  async trigger({ scopes: e, baseUri: t, logger: r, enterpriseUri: o }) {
    r.info(`Trying to retrieve PAT... (${e})`);
    let i = c.l10n.t("Continue to GitHub");
    if (await c.window.showInformationMessage(c.l10n.t("Continue to GitHub to create a Personal Access Token (PAT)"), { modal: true, detail: c.l10n.t("To finish authenticating, navigate to GitHub to create a PAT then paste the PAT into the input box.") }, i) !== i) throw new Error(b);
    let a = `${c.env.appName} (${e})`, u = await c.env.asExternalUri(t.with({ path: "/settings/tokens/new", query: `description=${a}&scopes=${e.split(" ").join(",")}` }));
    await c.env.openExternal(u);
    let l = await c.window.showInputBox({ placeHolder: "ghp_1a2b3c4...", prompt: `GitHub Personal Access Token - ${e}`, ignoreFocusOut: true });
    if (!l) throw new Error(b);
    let p = !o || W(o) ? c.Uri.parse(`${t.scheme}://api.${t.authority}`) : c.Uri.parse(`${t.scheme}://${t.authority}/api/v3`), v = await this.getScopes(l, p, r);
    if (!e.split(" ").every((g) => {
      let m = v.includes(g);
      return m || !g.includes(":") ? m : g.split(":").some((S) => v.includes(S));
    })) throw new Error(`The provided token does not match the requested scopes: ${e}`);
    return l;
  }
  async getScopes(e, t, r) {
    try {
      r.info("Getting token scopes...");
      let o = await y(t.toString(), { headers: { Authorization: `token ${e}`, "User-Agent": `${c.env.appName} (${c.env.appHost})` } });
      if (o.ok) {
        let i = o.headers.get("X-OAuth-Scopes");
        return i ? i.split(",").map((n) => n.trim()) : [];
      } else throw r.error(`Getting scopes failed: ${o.statusText}`), new Error(o.statusText);
    } catch (o) {
      throw r.error(o.message), new Error(N);
    }
  }
}()];
function ne(s) {
  return ye.filter((e) => {
    let t = true;
    switch (s.target) {
      case 0:
        t &&= e.options.supportsGitHubDotCom;
        break;
      case 1:
        t &&= e.options.supportsGitHubEnterpriseServer;
        break;
      case 2:
        t &&= e.options.supportsHostedGitHubEnterprise;
        break;
    }
    switch (s.extensionHost) {
      case 1:
        t &&= e.options.supportsRemoteExtensionHost;
        break;
      case 0:
        t &&= e.options.supportsWebWorkerExtensionHost;
        break;
    }
    return _.gitHubClientSecret && (!s.clientId || s.clientId === _.gitHubClientId) || (t &&= e.options.supportsNoClientSecret), s.isSupportedClient ? t &&= e.options.supportsSupportedClients || s.target !== 0 : t &&= e.options.supportsUnsupportedClients, t;
  });
}
function ae(s) {
  return Buffer.from(s, "binary").toString("base64");
}
var be = "https://vscode.dev/redirect", _e = "https://insiders.vscode.dev/redirect", L = class {
  constructor(e, t, r, o, i, n) {
    this._logger = e;
    this._telemetryReporter = t;
    this._uriHandler = r;
    this._extensionKind = o;
    this._ghesUri = i;
    this._type = i ? "github-enterprise" : "github", this._clientId = n ?? _.gitHubClientId, this.friendlyName = this._type === "github" ? "GitHub" : i?.authority;
  }
  get baseUri() {
    return this._type === "github" ? d.Uri.parse("https://github.com/") : this._ghesUri;
  }
  async getRedirectEndpoint() {
    if (this._redirectEndpoint) return this._redirectEndpoint;
    if (this._type === "github") {
      let e = await d.commands.executeCommand("workbench.getCodeExchangeProxyEndpoints");
      this._redirectEndpoint = be, e?.github && new URL(e.github).hostname === "insiders.vscode.dev" && (this._redirectEndpoint = _e);
    } else this._redirectEndpoint = "https://vscode.dev/redirect";
    return this._redirectEndpoint;
  }
  async isNoCorsEnvironment() {
    if (this._isNoCorsEnvironment !== void 0) return this._isNoCorsEnvironment;
    let e = await d.env.asExternalUri(d.Uri.parse(`${d.env.uriScheme}://vscode.github-authentication/dummy`));
    return this._isNoCorsEnvironment = e.scheme === "https" && /^((insiders\.)?vscode|github)\./.test(e.authority) || e.scheme === "http" && /^localhost/.test(e.authority), this._isNoCorsEnvironment;
  }
  async login(e, t) {
    this._logger.info(`Logging in for the following scopes: ${e}`);
    let r, o = d.l10n.t("Yes"), i = d.l10n.t("No"), n = async (g) => {
      if (r === void 0) return;
      let m = r ? d.l10n.t("Having trouble logging in? Would you like to try a different way? ({0})", g) : d.l10n.t("You have not yet finished authorizing this extension to use GitHub. Would you like to try a different way? ({0})", g);
      if (await d.window.showWarningMessage(m, o, i) !== o) throw new Error(O);
    }, a = A.getRandomValues(new Uint32Array(2)).reduce((g, m) => g += m.toString(16), ""), u = await d.env.asExternalUri(d.Uri.parse(`${d.env.uriScheme}://vscode.github-authentication/did-authenticate?nonce=${encodeURIComponent(a)}`)), l = Y(u), p = k(this._type, this._ghesUri), v = typeof process < "u" && typeof process?.versions?.node == "string", w = ne({ target: this._type === "github" ? 0 : p ? 2 : 1, extensionHost: v ? this._extensionKind === d.ExtensionKind.UI ? 2 : 1 : 0, isSupportedClient: l, clientId: this._clientId });
    for (let g of w) try {
      return g !== w[0] && await n(g.label), await g.trigger({ scopes: e, callbackUri: u, nonce: a, baseUri: this.baseUri, logger: this._logger, uriHandler: this._uriHandler, enterpriseUri: this._ghesUri, redirectUri: d.Uri.parse(await this.getRedirectEndpoint()), existingLogin: t, clientId: this._clientId });
    } catch (m) {
      r = this.processLoginError(m);
    }
    throw new Error(r ? O : "No auth flow succeeded.");
  }
  async logout(e) {
    if (this._logger.trace(`Deleting session (${e.id}) from server...`), !_.gitHubClientSecret) {
      this._logger.warn("No client secret configured for GitHub authentication. The token has been deleted with best effort on this system, but we are unable to delete the token on server without the client secret.");
      return;
    }
    if (this._clientId !== _.gitHubClientId) {
      this._logger.trace("Using non-default client ID without matching client secret. Skipping server-side token revocation.");
      return;
    }
    if (!e.accessToken.startsWith("gho_")) {
      this._logger.warn("The token being deleted is not an OAuth token. It has been deleted locally, but we cannot delete it on server.");
      return;
    }
    if (!k(this._type, this._ghesUri)) {
      this._logger.trace("GitHub.com and GitHub hosted GitHub Enterprise are the only options that support deleting tokens on the server. Skipping.");
      return;
    }
    let t = "Basic " + ae(`${this._clientId}:${_.gitHubClientSecret}`), r = this.getServerUri(`/applications/${this._clientId}/token`);
    try {
      let o = await y(r.toString(true), { method: "DELETE", headers: { Accept: "application/vnd.github+json", Authorization: t, "X-GitHub-Api-Version": "2022-11-28", "User-Agent": `${d.env.appName} (${d.env.appHost})` }, body: JSON.stringify({ access_token: e.accessToken }) });
      if (o.status === 204) {
        this._logger.trace(`Successfully deleted token from session (${e.id}) from server.`);
        return;
      }
      try {
        let i = await o.text();
        throw new Error(i);
      } catch {
        throw new Error(`${o.status} ${o.statusText}`);
      }
    } catch (o) {
      this._logger.warn("Failed to delete token from server." + (o.message ?? o));
    }
  }
  getServerUri(e = "") {
    let t = this.baseUri;
    return k(this._type, this._ghesUri) ? d.Uri.parse(`${t.scheme}://api.${t.authority}`).with({ path: e }) : d.Uri.parse(`${t.scheme}://${t.authority}/api/v3${e}`);
  }
  async getUserInfo(e) {
    let t;
    try {
      this._logger.info("Getting user info..."), t = await y(this.getServerUri("/user").toString(), { headers: { Authorization: `token ${e}`, "User-Agent": `${d.env.appName} (${d.env.appHost})` } });
    } catch (r) {
      throw this._logger.error(r.message), new Error(N);
    }
    if (t.ok) try {
      let r = await t.json();
      return this._logger.info("Got account info!"), { id: `${r.id}`, accountName: r.login };
    } catch (r) {
      throw this._logger.error(`Unexpected error parsing response from GitHub: ${r.message ?? r}`), r;
    }
    else {
      let r = t.statusText;
      try {
        let o = await t.json();
        o.message && (r = o.message);
      } catch {
      }
      throw this._logger.error(`Getting account info failed: ${r}`), new Error(r);
    }
  }
  async sendAdditionalTelemetryInfo(e) {
    if (!(!d.env.isTelemetryEnabled || await this.isNoCorsEnvironment())) {
      if (this._type === "github") return await this.checkUserDetails(e);
      await this.checkEnterpriseVersion(e.accessToken);
    }
  }
  async checkUserDetails(e) {
    let t;
    try {
      let r = await y("https://education.github.com/api/user", { headers: { Authorization: `token ${e.accessToken}`, "faculty-check-preview": "true", "User-Agent": `${d.env.appName} (${d.env.appHost})` } });
      if (r.ok) {
        let o = await r.json();
        t = o.student ? "student" : o.faculty ? "faculty" : "none";
      } else t = "unknown";
    } catch {
      t = "unknown";
    }
    this._telemetryReporter.sendTelemetryEvent("session", { isEdu: t, isManaged: e.account.label.includes("_") ? "true" : "false" });
  }
  async checkEnterpriseVersion(e) {
    try {
      let t;
      if (k(this._type, this._ghesUri)) t = "hosted";
      else {
        let r = await y(this.getServerUri("/meta").toString(), { headers: { Authorization: `token ${e}`, "User-Agent": `${d.env.appName} (${d.env.appHost})` } });
        if (!r.ok) return;
        t = (await r.json()).installed_version;
      }
      this._telemetryReporter.sendTelemetryEvent("ghe-session", { version: t });
    } catch {
    }
  }
  processLoginError(e) {
    if (e.message === O) throw e;
    return this._logger.error(e.message ?? e), e.message === b;
  }
};
var G = class {
  constructor(e, t) {
    this._context = e;
    this.baseReporter = t;
    this.sharedProperties = {};
  }
  async sendTelemetryEvent(e, t, r) {
    this.baseReporter.sendTelemetryEvent(e, { ...this.sharedProperties, ...t }, r);
  }
  async sendTelemetryErrorEvent(e, t, r) {
    this.baseReporter.sendTelemetryErrorEvent(e, { ...this.sharedProperties, ...t });
  }
  setSharedProperty(e, t) {
    this.sharedProperties[e] = t;
  }
  postEvent(e, t) {
    let r = {};
    for (let [o, i] of t) r[o] = i;
    this.sendTelemetryEvent(e, r);
  }
  dispose() {
    return this.baseReporter.dispose();
  }
};
var ce = E(require("vscode"));
var F = class {
  constructor(e) {
    this.type = e;
    let t;
    switch (this.type) {
      case "github":
      case "cursor-github":
        t = "GitHub";
        break;
      case "github-enterprise":
        t = "GitHub Enterprise";
        break;
      default: {
        let r = this.type;
        throw new Error(`Unknown auth provider type: ${r}`);
      }
    }
    this.output = ce.window.createOutputChannel(`${t} Authentication`, { log: true });
  }
  trace(e) {
    this.output.trace(e);
  }
  info(e) {
    this.output.info(e);
  }
  error(e) {
    this.output.error(e);
  }
  warn(e) {
    this.output.warn(e);
  }
};
var Ee = { dispose: () => {
} }, Te = (s, e, t) => Ee, P = class {
  constructor(e, t) {
    this.telemetryLevel = "off";
    this.onDidChangeTelemetryLevel = Te;
  }
  sendTelemetryEvent(e, t, r) {
  }
  sendRawTelemetryEvent(e, t, r) {
  }
  sendDangerousTelemetryEvent(e, t, r) {
  }
  sendTelemetryErrorEvent(e, t, r) {
  }
  sendDangerousTelemetryErrorEvent(e, t, r) {
  }
  dispose() {
    return Promise.resolve();
  }
};
var D = class extends h.EventEmitter {
  constructor() {
    super(...arguments);
    this._pendingNonces = /* @__PURE__ */ new Map();
    this._codeExchangePromises = /* @__PURE__ */ new Map();
    this.handleEvent = (t, r) => (o, i, n) => {
      let a = new URLSearchParams(o.query), u = a.get("code"), l = a.get("nonce");
      if (!u) {
        n(new Error("No code"));
        return;
      }
      if (!l) {
        n(new Error("No nonce"));
        return;
      }
      if (!(this._pendingNonces.get(r) || []).includes(l)) {
        t.info("Nonce not found in accepted nonces. Skipping this execution...");
        return;
      }
      i(u);
    };
  }
  handleUri(t) {
    this.fire(t);
  }
  async waitForCode(t, r, o, i) {
    let n = this._pendingNonces.get(r) || [];
    this._pendingNonces.set(r, [...n, o]);
    let a = this._codeExchangePromises.get(r);
    a || (a = R(this.event, this.handleEvent(t, r)), this._codeExchangePromises.set(r, a));
    try {
      return await Promise.race([a.promise, new Promise((u, l) => setTimeout(() => l(C), 3e5)), R(i.onCancellationRequested, (u, l, p) => {
        p(b);
      }).promise]);
    } finally {
      this._pendingNonces.delete(r), a?.cancel.fire(), this._codeExchangePromises.delete(r);
    }
  }
}, T = class {
  constructor(e, t, r, o) {
    this.context = e;
    this._sessionChangeEmitter = new h.EventEmitter();
    this._accountsSeen = /* @__PURE__ */ new Set();
    this._telemetryReporter = new G(e, new P(""));
    let i = o?.providerId ?? (r ? "github-enterprise" : "github");
    this._logger = new F(i);
    let n = i === "github-enterprise" ? `${r?.authority}${r?.path}.ghes.auth` : `${i}.auth`;
    this._keychain = new U(this.context, n, this._logger), this._githubServer = new L(this._logger, this._telemetryReporter, t, e.extension.extensionKind, r, o?.clientId), this._sessionsPromise = this.readSessions().then((a) => (setTimeout(() => a.forEach((u) => this.afterSessionLoad(u)), 1e3), a)), this._disposable = h.Disposable.from(this._telemetryReporter, h.authentication.registerAuthenticationProvider(i, this._githubServer.friendlyName, this, { supportsMultipleAccounts: true }), this.context.secrets.onDidChange(() => this.checkForUpdates()));
  }
  dispose() {
    this._disposable?.dispose();
  }
  get onDidChangeSessions() {
    return this._sessionChangeEmitter.event;
  }
  async getSessions(e, t) {
    let r = e?.sort() || [];
    this._logger.info(`Getting sessions for ${r.length ? r.join(",") : "all scopes"}...`);
    let o = await this._sessionsPromise, i = t?.account ? o.filter((a) => a.account.label === t.account?.label) : o, n = r.length ? i.filter((a) => {
      let u = new Set(a.scopes);
      return r.every((l) => u.has(l));
    }) : i;
    return this._logger.info(`Got ${n.length} sessions for ${r?.join(",") ?? "all scopes"}...`), n;
  }
  async afterSessionLoad(e) {
    this._accountsSeen.has(e.account.id) || (this._accountsSeen.add(e.account.id), this._githubServer.sendAdditionalTelemetryInfo(e));
  }
  async checkForUpdates() {
    let e = await this._sessionsPromise;
    this._sessionsPromise = this.readSessions();
    let t = await this._sessionsPromise, r = [], o = [];
    t.forEach((i) => {
      e.some((a) => a.id === i.id) || (this._logger.info("Adding session found in keychain"), r.push(i));
    }), e.forEach((i) => {
      t.some((a) => a.id === i.id) || (this._logger.info("Removing session no longer found in keychain"), o.push(i));
    }), (r.length || o.length) && this._sessionChangeEmitter.fire({ added: r, removed: o, changed: [] });
  }
  async readSessions() {
    let e;
    try {
      this._logger.info("Reading sessions from keychain...");
      let n = await this._keychain.getToken();
      if (!n) return [];
      this._logger.info("Got stored sessions!");
      try {
        e = JSON.parse(n);
      } catch (a) {
        throw await this._keychain.deleteToken(), a;
      }
    } catch (n) {
      return this._logger.error(`Error reading token: ${n}`), [];
    }
    let t = false, r = /* @__PURE__ */ new Set(), o = e.map(async (n) => {
      let a = [...n.scopes].sort().join(" "), u;
      if (!n.account) try {
        u = await this._githubServer.getUserInfo(n.accessToken), this._logger.info(`Verified session with the following scopes: ${a}`);
      } catch (p) {
        if (p.message === "Unauthorized") return;
      }
      this._logger.trace(`Read the following session from the keychain with the following scopes: ${a}`), r.add(a);
      let l;
      return n.account?.id ? (typeof n.account.id == "number" && (t = true), l = `${n.account.id}`) : l = u?.id ?? "<unknown>", { id: n.id, account: { label: n.account ? n.account.label ?? n.account.displayName ?? "<unknown>" : u?.accountName ?? "<unknown>", id: l }, scopes: n.scopes, accessToken: n.accessToken };
    }), i = (await Promise.allSettled(o)).filter((n) => n.status === "fulfilled").map((n) => n.value).filter((n) => !!n);
    return this._logger.info(`Got ${i.length} verified sessions.`), (t || i.length !== e.length) && await this.storeSessions(i), i;
  }
  async storeSessions(e) {
    this._logger.info(`Storing ${e.length} sessions...`), this._sessionsPromise = Promise.resolve(e), await this._keychain.setToken(JSON.stringify(e)), this._logger.info(`Stored ${e.length} sessions!`);
  }
  async createSession(e, t) {
    try {
      let r = [...e].sort();
      this._telemetryReporter?.sendTelemetryEvent("login", { scopes: JSON.stringify(e) });
      let o = await this._sessionsPromise, i = t?.account?.label;
      this._logger.info(`Logging in with '${i || "any"}' account...`);
      let n = r.join(" "), a = await this._githubServer.login(n, i), u = await this.tokenToSession(a, e);
      this.afterSessionLoad(u);
      let l = o.findIndex((v) => v.account.id === u.account.id && oe([...v.scopes].sort(), r)), p = new Array();
      return l > -1 ? p.push(...o.splice(l, 1, u)) : o.push(u), await this.storeSessions(o), this._sessionChangeEmitter.fire({ added: [u], removed: p, changed: [] }), this._logger.info("Login success!"), u;
    } catch (r) {
      throw r === "Cancelled" || r.message === "Cancelled" ? (this._telemetryReporter?.sendTelemetryEvent("loginCancelled"), r) : (this._telemetryReporter?.sendTelemetryEvent("loginFailed"), h.window.showErrorMessage(h.l10n.t("Sign in failed: {0}", `${r}`)), this._logger.error(r), r);
    }
  }
  async tokenToSession(e, t) {
    let r = await this._githubServer.getUserInfo(e);
    return { id: A.getRandomValues(new Uint32Array(2)).reduce((o, i) => o += i.toString(16), ""), accessToken: e, account: { label: r.accountName, id: r.id }, scopes: t };
  }
  async removeSession(e) {
    try {
      this._telemetryReporter?.sendTelemetryEvent("logout"), this._logger.info(`Logging out of ${e}`);
      let t = await this._sessionsPromise, r = t.findIndex((o) => o.id === e);
      if (r > -1) {
        let o = t[r];
        t.splice(r, 1), await this.storeSessions(t), await this._githubServer.logout(o), this._sessionChangeEmitter.fire({ added: [], removed: [o], changed: [] });
      } else this._logger.error("Session not found");
    } catch (t) {
      throw this._telemetryReporter?.sendTelemetryEvent("logoutFailed"), h.window.showErrorMessage(h.l10n.t("Sign out failed: {0}", `${t}`)), this._logger.error(t), t;
    }
  }
  _shouldSupportMultipleAccounts() {
    let e = h.workspace.getConfiguration("github.experimental").inspect("multipleAccounts");
    if (e?.workspaceFolderValue !== void 0) return this._logger.trace(`Acquired multi-account enablement value from 'workspaceFolderValue'. Value: ${e.workspaceFolderValue}`), e.workspaceFolderValue;
    if (e?.workspaceValue !== void 0) return this._logger.trace(`Acquired multi-account enablement value from 'workspaceValue'. Value: ${e.workspaceValue}`), e.workspaceValue;
    if (e?.globalValue !== void 0) return this._logger.trace(`Acquired multi-account enablement value from 'globalValue'. Value: ${e.globalValue}`), e.globalValue;
    let t = h.env.uriScheme !== "vscode";
    return this._logger.trace(`Acquired multi-account enablement value from default. Value: ${t} because of uriScheme: ${h.env.uriScheme}`), t;
  }
};
function ue(s, e) {
  let t = f.workspace.getConfiguration().get("github-enterprise.uri");
  if (!t) return;
  let r;
  try {
    r = f.Uri.parse(t, true);
  } catch (i) {
    f.window.showErrorMessage(f.l10n.t("GitHub Enterprise Server URI is not a valid URI: {0}", i.message ?? i));
    return;
  }
  let o = new T(s, e, r);
  return s.subscriptions.push(o), o;
}
function Se(s) {
  let e = new D();
  s.subscriptions.push(e), s.subscriptions.push(f.window.registerUriHandler(e)), s.subscriptions.push(new T(s, e)), s.subscriptions.push(new T(s, e, void 0, { providerId: "cursor-github", clientId: J }));
  let t = ue(s, e);
  s.subscriptions.push(f.workspace.onDidChangeConfiguration(async (r) => {
    r.affectsConfiguration("github-enterprise.uri") && f.workspace.getConfiguration().get("github-enterprise.uri") && (t?.dispose(), t = ue(s, e));
  }));
}
