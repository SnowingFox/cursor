// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8706 range:1004823..1008198
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8706: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(8323);
    a2.implementation = class {
      constructor(e3) {
        const a3 = e3[0], n3 = e3[1];
        let s2 = null;
        if (void 0 !== n3 && (s2 = t2.basicURLParse(n3), "failure" === s2)) throw new TypeError("Invalid base URL");
        const o2 = t2.basicURLParse(a3, { baseURL: s2 });
        if ("failure" === o2) throw new TypeError("Invalid URL");
        this._url = o2;
      }
      get href() {
        return t2.serializeURL(this._url);
      }
      set href(e3) {
        const a3 = t2.basicURLParse(e3);
        if ("failure" === a3) throw new TypeError("Invalid URL");
        this._url = a3;
      }
      get origin() {
        return t2.serializeURLOrigin(this._url);
      }
      get protocol() {
        return this._url.scheme + ":";
      }
      set protocol(e3) {
        t2.basicURLParse(e3 + ":", { url: this._url, stateOverride: "scheme start" });
      }
      get username() {
        return this._url.username;
      }
      set username(e3) {
        t2.cannotHaveAUsernamePasswordPort(this._url) || t2.setTheUsername(this._url, e3);
      }
      get password() {
        return this._url.password;
      }
      set password(e3) {
        t2.cannotHaveAUsernamePasswordPort(this._url) || t2.setThePassword(this._url, e3);
      }
      get host() {
        const e3 = this._url;
        return null === e3.host ? "" : null === e3.port ? t2.serializeHost(e3.host) : t2.serializeHost(e3.host) + ":" + t2.serializeInteger(e3.port);
      }
      set host(e3) {
        this._url.cannotBeABaseURL || t2.basicURLParse(e3, { url: this._url, stateOverride: "host" });
      }
      get hostname() {
        return null === this._url.host ? "" : t2.serializeHost(this._url.host);
      }
      set hostname(e3) {
        this._url.cannotBeABaseURL || t2.basicURLParse(e3, { url: this._url, stateOverride: "hostname" });
      }
      get port() {
        return null === this._url.port ? "" : t2.serializeInteger(this._url.port);
      }
      set port(e3) {
        t2.cannotHaveAUsernamePasswordPort(this._url) || ("" === e3 ? this._url.port = null : t2.basicURLParse(e3, { url: this._url, stateOverride: "port" }));
      }
      get pathname() {
        return this._url.cannotBeABaseURL ? this._url.path[0] : 0 === this._url.path.length ? "" : "/" + this._url.path.join("/");
      }
      set pathname(e3) {
        this._url.cannotBeABaseURL || (this._url.path = [], t2.basicURLParse(e3, { url: this._url, stateOverride: "path start" }));
      }
      get search() {
        return null === this._url.query || "" === this._url.query ? "" : "?" + this._url.query;
      }
      set search(e3) {
        const a3 = this._url;
        if ("" === e3) return void (a3.query = null);
        const n3 = "?" === e3[0] ? e3.substring(1) : e3;
        a3.query = "", t2.basicURLParse(n3, { url: a3, stateOverride: "query" });
      }
      get hash() {
        return null === this._url.fragment || "" === this._url.fragment ? "" : "#" + this._url.fragment;
      }
      set hash(e3) {
        if ("" === e3) return void (this._url.fragment = null);
        const a3 = "#" === e3[0] ? e3.substring(1) : e3;
        this._url.fragment = "", t2.basicURLParse(a3, { url: this._url, stateOverride: "fragment" });
      }
      toJSON() {
        return this.href;
      }
    };
  }