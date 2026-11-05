// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1432 range:489177..501114
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1432: function(t2, e2, r2) {
    "use strict";
    var n2 = this && this.__importDefault || function(t3) {
      return t3 && t3.__esModule ? t3 : { default: t3 };
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.PrivateInferenceHttpGuard = e2.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV = e2.OPTIONAL_PRIVATE_INFERENCE_CURSOR_HOSTS = e2.PrivateInferenceEgressRefusedError = e2.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE = void 0, e2.isPrivateInferenceEgressRefusedError = function(t3) {
      return t3 instanceof Error && "code" in t3 && t3.code === e2.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE;
    }, e2.isCursorControlPlanePath = d, e2.installPrivateInferenceHttpGuard = function(t3 = {}) {
      const e3 = globalThis, r3 = e3[h];
      if (void 0 !== r3) return r3.contribute(t3), r3;
      const n3 = new g(t3);
      return e3[h] = n3, n3.install(), n3;
    }, e2.getPrivateInferenceHttpGuard = function() {
      return globalThis[h];
    }, e2.combinePrivateInferenceEnablements = _;
    const s2 = n2(r2(7067)), i2 = n2(r2(2467)), o2 = n2(r2(4708)), a = r2(8995), u = r2(2642), c = r2(5218);
    e2.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE = "ERR_PRIVATE_INFERENCE_EGRESS_REFUSED";
    class l extends Error {
      constructor(t3, r3) {
        super(void 0 === t3 ? `private inference lockdown: ${r3} egress to an unparseable target is refused` : `private inference lockdown: ${r3} egress to ${t3} is refused`), this.host = t3, this.initiator = r3, this.name = "PrivateInferenceEgressRefusedError", this.code = e2.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE;
      }
    }
    e2.PrivateInferenceEgressRefusedError = l, e2.OPTIONAL_PRIVATE_INFERENCE_CURSOR_HOSTS = { downloads: "downloads.cursor.com", marketplace: "marketplace.cursorapi.com" };
    const m = /^\/([a-z][a-z0-9_]*(?:\.[a-z0-9_]+)*\.[A-Z][A-Za-z0-9_]*)\/([A-Z][A-Za-z0-9_]*)$/;
    function d(t3, e3 = "enabled") {
      const r3 = m.exec(t3);
      if (null === r3) return false;
      const [, n3, s3] = r3;
      return void 0 !== n3 && void 0 !== s3 && (0, c.isPrivateInferenceRpcAllowedInState)(e3, n3, s3);
    }
    e2.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV = "CURSOR_PRIVATE_INFERENCE_ALLOW_HOSTS";
    const f = /* @__PURE__ */ new Set(["data:", "blob:", "file:"]), p = { "http:": "80", "ws:": "80", "https:": "443", "wss:": "443" }, h = /* @__PURE__ */ Symbol.for("anysphere.cursor-network.privateInferenceHttpGuard");
    class g {
      constructor(t3 = {}) {
        this.lockdownSources = [], this.lockdownSubscriptions = [], this.cursorBackendUrlProviders = [], this.allowedHosts = /* @__PURE__ */ new Set(), this.logs = [], this.refusalListeners = [], this.loggedRefusals = /* @__PURE__ */ new Set(), this.allowLoopback = t3.allowLoopback ?? true;
        const r3 = t3.env ?? process.env;
        for (const t4 of (r3[e2.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV] ?? "").split(",")) this.allowHost(t4);
        this.contribute(t3);
      }
      contribute(t3) {
        void 0 === t3.enablement || this.lockdownSources.includes(t3.enablement) || (this.lockdownSources.push(t3.enablement), this.lockdownSubscriptions.push(t3.enablement.onDidChange(() => this.logStateIfChanged())), this.logStateIfChanged()), void 0 !== t3.cursorBackendUrls && this.cursorBackendUrlProviders.push(t3.cursorBackendUrls);
        for (const e3 of t3.optionalHosts ?? []) this.allowHost(e3);
        void 0 === t3.log || this.logs.includes(t3.log) || this.logs.push(t3.log), void 0 !== t3.onRefused && this.refusalListeners.push(t3.onRefused);
      }
      get lockdownState() {
        return _(this.lockdownSources.map((t3) => t3.state));
      }
      isActive() {
        return (0, u.isPrivateInferenceLockedDown)(this.lockdownState);
      }
      logStateIfChanged() {
        const t3 = this.lockdownState;
        t3 !== this.lastLoggedState && (this.lastLoggedState = t3, this.info(`[PrivateInferenceHttpGuard] lockdown ${t3}`));
      }
      allowBaseUrl(t3) {
        const e3 = J(S(t3));
        void 0 !== e3 && this.allowedHosts.add(e3);
      }
      allowHost(t3) {
        const e3 = t3.trim();
        if (0 === e3.length) return;
        if (/:\d+$/.test(e3) && !e3.startsWith("[")) {
          const t4 = J(S(`https://${e3}/`));
          return void (void 0 !== t4 && this.allowedHosts.add(t4));
        }
        for (const t4 of ["http:", "https:"]) {
          const r3 = J(S(`${t4}//${e3}/`));
          void 0 !== r3 && this.allowedHosts.add(r3);
        }
      }
      allowsTarget(t3, e3 = {}) {
        const r3 = void 0 === t3 ? void 0 : S(t3);
        if (void 0 === r3) return false;
        if (f.has(r3.protocol)) return true;
        const n3 = J(r3);
        return void 0 !== n3 && (!!(this.allowLoopback && (i3 = n3, s3 = i3.slice(0, i3.lastIndexOf(":")), "localhost" === s3 || s3.endsWith(".localhost") || "::1" === s3 || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(s3))) || (!!this.allowedHosts.has(n3) || !!this.isCursorBackendHost(n3) && (false === e3.pathKnown || d(r3.pathname, this.lockdownState))));
        var s3, i3;
      }
      isCursorBackendHost(t3) {
        for (const e3 of this.cursorBackendUrlProviders) for (const r3 of e3()) if (void 0 !== r3 && J(S(r3)) === t3) return true;
        return false;
      }
      check(t3, e3) {
        if (!this.isActive() || this.allowsTarget(t3, { pathKnown: "http2.connect" !== e3 })) return;
        const r3 = void 0 === t3 ? void 0 : S(t3), n3 = void 0 === r3 ? void 0 : J(r3);
        throw this.reportRefusal({ host: n3, initiator: e3, stackHint: E() }), new l(n3, e3);
      }
      install() {
        if (void 0 !== this.restore) return;
        const t3 = [], e3 = globalThis.fetch, r3 = (t4, r4) => {
          try {
            this.check((function(t5) {
              if ("string" == typeof t5 || t5 instanceof URL) return t5;
              if (null !== t5 && "object" == typeof t5 && "url" in t5 && "string" == typeof t5.url) return t5.url;
              return;
            })(t4), "fetch");
          } catch (t5) {
            return Promise.reject(t5);
          }
          return e3.call(globalThis, t4, r4);
        };
        globalThis.fetch = r3, t3.push(() => {
          globalThis.fetch === r3 && (globalThis.fetch = e3);
        }), t3.push(this.patchHttpModule(s2.default, "http")), t3.push(this.patchHttpModule(o2.default, "https"));
        const n3 = i2.default.connect, u2 = (t4, e4, r4) => {
          const s3 = "string" == typeof t4 || t4 instanceof URL ? t4 : void 0;
          this.check(s3, "http2.connect");
          const o3 = n3.call(i2.default, t4, e4, r4);
          return this.guardHttp2Session(o3, s3), o3;
        };
        i2.default.connect = u2, t3.push(() => {
          i2.default.connect === u2 && (i2.default.connect = n3);
        }), (0, a.syncBuiltinESMExports)(), this.restore = () => {
          for (const e4 of t3) e4();
          (0, a.syncBuiltinESMExports)();
        }, this.info(`[PrivateInferenceHttpGuard] installed (lockdown ${this.lockdownState})`);
      }
      dispose() {
        this.restore?.(), this.restore = void 0;
        for (const t4 of this.lockdownSubscriptions) t4.dispose();
        this.lockdownSubscriptions.length = 0;
        const t3 = globalThis;
        t3[h] === this && delete t3[h];
      }
      guardHttp2Session(t3, e3) {
        const r3 = void 0 === e3 ? void 0 : S(e3);
        if (void 0 === r3) return;
        const n3 = t3.request;
        t3.request = (e4, s3) => {
          const i3 = (function(t4) {
            if (Array.isArray(t4)) {
              for (let e5 = 0; e5 + 1 < t4.length; e5 += 2) if (":path" === t4[e5] && "string" == typeof t4[e5 + 1]) return t4[e5 + 1];
              return;
            }
            if (null !== t4 && "object" == typeof t4) {
              const e5 = t4[":path"];
              return "string" == typeof e5 ? e5 : void 0;
            }
            return;
          })(e4);
          let o3;
          if ("string" == typeof i3) try {
            o3 = new URL(i3, r3);
          } catch {
            o3 = void 0;
          }
          return this.check(o3, "http2.request"), n3.call(t3, e4, s3);
        };
      }
      patchHttpModule(t3, e3) {
        const r3 = `${e3}:`, n3 = t3.request, s3 = t3.get, i3 = (...s4) => (this.check(w(s4, r3), `${e3}.request`), n3.apply(t3, s4)), o3 = (...n4) => (this.check(w(n4, r3), `${e3}.get`), s3.apply(t3, n4));
        return t3.request = i3, t3.get = o3, () => {
          t3.request === i3 && (t3.request = n3), t3.get === o3 && (t3.get = s3);
        };
      }
      reportRefusal(t3) {
        const e3 = `${t3.initiator} ${t3.host ?? "<unparseable>"}`, r3 = `[PrivateInferenceHttpGuard] refused host=${t3.host ?? "<unparseable>"} initiator=${t3.initiator} from=${t3.stackHint ?? "?"}`;
        if (this.loggedRefusals.has(e3)) for (const t4 of this.logs) t4.trace(r3);
        else {
          this.loggedRefusals.add(e3);
          for (const t4 of this.logs) t4.warn(`${r3} (further refusals of this target are logged at trace level)`);
        }
        for (const e4 of this.refusalListeners) try {
          e4(t3);
        } catch {
        }
      }
      info(t3) {
        for (const e3 of this.logs) e3.info(t3);
      }
    }
    e2.PrivateInferenceHttpGuard = g;
    const A = { disabled: 0, pending: 1, enabled: 2 };
    function _(t3) {
      let e3 = "disabled";
      for (const r3 of t3) A[r3] > A[e3] && (e3 = r3);
      return e3;
    }
    function y(t3) {
      return null !== t3 && "object" == typeof t3 && !(t3 instanceof URL);
    }
    function w(t3, e3) {
      const [r3, n3] = t3;
      let s3, i3;
      if ("string" == typeof r3 || r3 instanceof URL) {
        if (s3 = S(r3), void 0 === s3) return;
        y(n3) && (i3 = n3);
      } else {
        if (!y(r3)) return;
        i3 = r3;
      }
      return void 0 === i3 ? s3 : (function(t4, e4, r4) {
        void 0 === e4 && "string" == typeof t4.href && (e4 = S(t4.href));
        const n4 = "string" == typeof t4.protocol && t4.protocol.length > 0 ? t4.protocol : e4?.protocol ?? r4;
        let s4, i4;
        if ("string" == typeof t4.hostname && t4.hostname.length > 0) s4 = t4.hostname;
        else if ("string" == typeof t4.host && t4.host.length > 0) {
          const e5 = S(`${n4}//${t4.host}`);
          if (void 0 === e5) return;
          s4 = e5.hostname, i4 = e5.port.length > 0 ? e5.port : void 0;
        } else void 0 !== e4 && (s4 = e4.hostname, i4 = e4.port.length > 0 ? e4.port : void 0);
        "string" != typeof t4.port && "number" != typeof t4.port || (i4 = String(t4.port));
        if (void 0 === s4 || 0 === s4.length) return;
        let o3 = "/";
        if ("string" == typeof t4.path) {
          if (!t4.path.startsWith("/")) return;
          o3 = t4.path;
        } else void 0 !== e4 && (o3 = `${e4.pathname}${e4.search}`);
        const a2 = s4.includes(":") ? `[${s4}]` : s4;
        return S(`${n4}//${a2}${void 0 !== i4 ? `:${i4}` : ""}${o3}`);
      })(i3, s3, e3);
    }
    function S(t3) {
      if (t3 instanceof URL) return t3;
      try {
        return new URL(t3);
      } catch {
        return;
      }
    }
    function J(t3) {
      if (void 0 === t3) return;
      const e3 = t3.hostname.toLowerCase().replace(/^\[|\]$/g, "");
      if (0 === e3.length) return;
      const r3 = t3.port.length > 0 ? t3.port : p[t3.protocol];
      return void 0 !== r3 ? `${e3.replace(/\.$/, "")}:${r3}` : void 0;
    }
    const B = /\b(?:PrivateInferenceHttpGuard\.|callerStackHint|guarded(?:Fetch|Request|Get|Connect|SessionRequest))\b/;
    function E() {
      const t3 = new Error().stack;
      if (void 0 !== t3) for (const e3 of t3.split("\n").slice(1)) {
        const t4 = e3.trim();
        if (!t4.startsWith("at ") || B.test(t4) || t4.includes("node:internal") || t4.includes("node:http") || t4.includes("node:https") || t4.includes("node:http2")) continue;
        return /\(([^()]+)\)$/.exec(t4)?.[1] ?? t4.slice(3);
      }
    }
  }