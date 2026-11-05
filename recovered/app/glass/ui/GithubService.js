// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GithubService.js range:26462576..26465404
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.705Z
Dyg = L({ "GithubService.js"() {
  "use strict";
  E(), nl(), Ei(), Gt(), Qe(), Rn(), It(), oMe(), Zas = ["repo"], Qas = "github", Udl = Il("githubService"), Jas = class extends st {
    constructor(t) {
      super(), this.authenticationService = t, this._onDidChangeGitHubConnection = this._register(new tt()), this.onDidChangeGitHubConnection = this._onDidChangeGitHubConnection.event, this._onDidFinishGitHubLogin = this._register(new tt()), this.onDidFinishGitHubLogin = this._onDidFinishGitHubLogin.event, this._refreshInFlight = false, this._refreshPending = false, this._register(this.authenticationService.onDidChangeSessions((e) => {
        e.providerId !== "github" && e.providerId !== "cursor-github" || this._scheduleRefresh();
      })), this._register(this.authenticationService.onDidRegisterAuthenticationProvider((e) => {
        e.id !== "github" && e.id !== "cursor-github" || this._scheduleRefresh();
      })), this._register(this.authenticationService.onDidUnregisterAuthenticationProvider((e) => {
        e.id !== "github" && e.id !== "cursor-github" || this._scheduleRefresh();
      })), this._scheduleRefresh();
    }
    async hasGitHubConnection() {
      try {
        return (await this.authenticationService.getSessions(Qas, Zas, void 0, true)).length > 0;
      } catch {
        return false;
      }
    }
    async triggerGitHubLogin() {
      try {
        return (await this.authenticationService.createSession(Qas, Zas, { activateImmediate: true }))?.accessToken ? (this._onDidChangeGitHubConnection.fire(true), this._onDidFinishGitHubLogin.fire("success"), true) : (this._onDidFinishGitHubLogin.fire("failed"), false);
      } catch (t) {
        const e = Ya(t) ? "cancelled" : "failed";
        return this._onDidFinishGitHubLogin.fire(e), false;
      }
    }
    async getGitHubAccessToken() {
      try {
        return (await this.authenticationService.getSessions(Qas, Zas, void 0, true))[0]?.accessToken;
      } catch {
        return;
      }
    }
    _scheduleRefresh() {
      if (this._refreshInFlight) {
        this._refreshPending = true;
        return;
      }
      this._doRefresh();
    }
    async _doRefresh() {
      this._refreshInFlight = true, this._refreshPending = false;
      try {
        const t = await this.hasGitHubConnection();
        this._store.isDisposed || this._onDidChangeGitHubConnection.fire(t);
      } finally {
        this._refreshInFlight = false, this._refreshPending && !this._store.isDisposed && (this._refreshPending = false, clearTimeout(this._refreshDebounceTimer), this._refreshDebounceTimer = setTimeout(() => this._scheduleRefresh(), 200));
      }
    }
    dispose() {
      clearTimeout(this._refreshDebounceTimer), super.dispose();
    }
  }, Jas = Re([F(0, Ple)], Jas), bn(Udl, Jas, 1, 1);
} }), jdl, Nyg, els, tls, nls, 