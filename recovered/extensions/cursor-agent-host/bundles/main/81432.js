// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 81432 range:11698096..11709998
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81432: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    };
    Object.defineProperty(t, "__esModule", { value: true }), t.PrivateInferenceHttpGuard = t.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV = t.OPTIONAL_PRIVATE_INFERENCE_CURSOR_HOSTS = t.PrivateInferenceEgressRefusedError = t.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE = void 0, t.isPrivateInferenceEgressRefusedError = function(e2) {
      return e2 instanceof Error && "code" in e2 && e2.code === t.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE;
    }, t.isCursorControlPlanePath = p, t.installPrivateInferenceHttpGuard = function(e2 = {}) {
      const t2 = globalThis, r2 = t2[f];
      if (void 0 !== r2) return r2.contribute(e2), r2;
      const n2 = new g(e2);
      return t2[f] = n2, n2.install(), n2;
    }, t.getPrivateInferenceHttpGuard = function() {
      return globalThis[f];
    }, t.combinePrivateInferenceEnablements = w;
    const s = n(r(37067)), o = n(r(32467)), i = n(r(44708)), a = r(98995), c = r(22642), l = r(15218);
    t.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE = "ERR_PRIVATE_INFERENCE_EGRESS_REFUSED";
    class u extends Error {
      constructor(e2, r2) {
        super(void 0 === e2 ? `private inference lockdown: ${r2} egress to an unparseable target is refused` : `private inference lockdown: ${r2} egress to ${e2} is refused`), this.host = e2, this.initiator = r2, this.name = "PrivateInferenceEgressRefusedError", this.code = t.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE;
      }
    }
    t.PrivateInferenceEgressRefusedError = u, t.OPTIONAL_PRIVATE_INFERENCE_CURSOR_HOSTS = { downloads: "downloads.cursor.com", marketplace: "marketplace.cursorapi.com" };
    const d = /^\/([a-z][a-z0-9_]*(?:\.[a-z0-9_]+)*\.[A-Z][A-Za-z0-9_]*)\/([A-Z][A-Za-z0-9_]*)$/;
    function p(e2, t2 = "enabled") {
      const r2 = d.exec(e2);
      if (null === r2) return false;
      const [, n2, s2] = r2;
      return void 0 !== n2 && void 0 !== s2 && (0, l.isPrivateInferenceRpcAllowedInState)(t2, n2, s2);
    }
    t.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV = "CURSOR_PRIVATE_INFERENCE_ALLOW_HOSTS";
    const m = /* @__PURE__ */ new Set(["data:", "blob:", "file:"]), h = { "http:": "80", "ws:": "80", "https:": "443", "wss:": "443" }, f = /* @__PURE__ */ Symbol.for("anysphere.cursor-network.privateInferenceHttpGuard");
    class g {
      constructor(e2 = {}) {
        this.lockdownSources = [], this.lockdownSubscriptions = [], this.cursorBackendUrlProviders = [], this.allowedHosts = /* @__PURE__ */ new Set(), this.logs = [], this.refusalListeners = [], this.loggedRefusals = /* @__PURE__ */ new Set(), this.allowLoopback = e2.allowLoopback ?? true;
        const r2 = e2.env ?? process.env;
        for (const e3 of (r2[t.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV] ?? "").split(",")) this.allowHost(e3);
        this.contribute(e2);
      }
      contribute(e2) {
        void 0 === e2.enablement || this.lockdownSources.includes(e2.enablement) || (this.lockdownSources.push(e2.enablement), this.lockdownSubscriptions.push(e2.enablement.onDidChange(() => this.logStateIfChanged())), this.logStateIfChanged()), void 0 !== e2.cursorBackendUrls && this.cursorBackendUrlProviders.push(e2.cursorBackendUrls);
        for (const t2 of e2.optionalHosts ?? []) this.allowHost(t2);
        void 0 === e2.log || this.logs.includes(e2.log) || this.logs.push(e2.log), void 0 !== e2.onRefused && this.refusalListeners.push(e2.onRefused);
      }
      get lockdownState() {
        return w(this.lockdownSources.map((e2) => e2.state));
      }
      isActive() {
        return (0, c.isPrivateInferenceLockedDown)(this.lockdownState);
      }
      logStateIfChanged() {
        const e2 = this.lockdownState;
        e2 !== this.lastLoggedState && (this.lastLoggedState = e2, this.info(`[PrivateInferenceHttpGuard] lockdown ${e2}`));
      }
      allowBaseUrl(e2) {
        const t2 = S(A(e2));
        void 0 !== t2 && this.allowedHosts.add(t2);
      }
      allowHost(e2) {
        const t2 = e2.trim();
        if (0 === t2.length) return;
        if (/:\d+$/.test(t2) && !t2.startsWith("[")) {
          const e3 = S(A(`https://${t2}/`));
          return void (void 0 !== e3 && this.allowedHosts.add(e3));
        }
        for (const e3 of ["http:", "https:"]) {
          const r2 = S(A(`${e3}//${t2}/`));
          void 0 !== r2 && this.allowedHosts.add(r2);
        }
      }
      allowsTarget(e2, t2 = {}) {
        const r2 = void 0 === e2 ? void 0 : A(e2);
        if (void 0 === r2) return false;
        if (m.has(r2.protocol)) return true;
        const n2 = S(r2);
        return void 0 !== n2 && (!!(this.allowLoopback && (o2 = n2, s2 = o2.slice(0, o2.lastIndexOf(":")), "localhost" === s2 || s2.endsWith(".localhost") || "::1" === s2 || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(s2))) || (!!this.allowedHosts.has(n2) || !!this.isCursorBackendHost(n2) && (false === t2.pathKnown || p(r2.pathname, this.lockdownState))));
        var s2, o2;
      }
      isCursorBackendHost(e2) {
        for (const t2 of this.cursorBackendUrlProviders) for (const r2 of t2()) if (void 0 !== r2 && S(A(r2)) === e2) return true;
        return false;
      }
      check(e2, t2) {
        if (!this.isActive() || this.allowsTarget(e2, { pathKnown: "http2.connect" !== t2 })) return;
        const r2 = void 0 === e2 ? void 0 : A(e2), n2 = void 0 === r2 ? void 0 : S(r2);
        throw this.reportRefusal({ host: n2, initiator: t2, stackHint: E() }), new u(n2, t2);
      }
      install() {
        if (void 0 !== this.restore) return;
        const e2 = [], t2 = globalThis.fetch, r2 = (e3, r3) => {
          try {
            this.check((function(e4) {
              if ("string" == typeof e4 || e4 instanceof URL) return e4;
              if (null !== e4 && "object" == typeof e4 && "url" in e4 && "string" == typeof e4.url) return e4.url;
              return;
            })(e3), "fetch");
          } catch (e4) {
            return Promise.reject(e4);
          }
          return t2.call(globalThis, e3, r3);
        };
        globalThis.fetch = r2, e2.push(() => {
          globalThis.fetch === r2 && (globalThis.fetch = t2);
        }), e2.push(this.patchHttpModule(s.default, "http")), e2.push(this.patchHttpModule(i.default, "https"));
        const n2 = o.default.connect, c2 = (e3, t3, r3) => {
          const s2 = "string" == typeof e3 || e3 instanceof URL ? e3 : void 0;
          this.check(s2, "http2.connect");
          const i2 = n2.call(o.default, e3, t3, r3);
          return this.guardHttp2Session(i2, s2), i2;
        };
        o.default.connect = c2, e2.push(() => {
          o.default.connect === c2 && (o.default.connect = n2);
        }), (0, a.syncBuiltinESMExports)(), this.restore = () => {
          for (const t3 of e2) t3();
          (0, a.syncBuiltinESMExports)();
        }, this.info(`[PrivateInferenceHttpGuard] installed (lockdown ${this.lockdownState})`);
      }
      dispose() {
        this.restore?.(), this.restore = void 0;
        for (const e3 of this.lockdownSubscriptions) e3.dispose();
        this.lockdownSubscriptions.length = 0;
        const e2 = globalThis;
        e2[f] === this && delete e2[f];
      }
      guardHttp2Session(e2, t2) {
        const r2 = void 0 === t2 ? void 0 : A(t2);
        if (void 0 === r2) return;
        const n2 = e2.request;
        e2.request = (t3, s2) => {
          const o2 = (function(e3) {
            if (Array.isArray(e3)) {
              for (let t4 = 0; t4 + 1 < e3.length; t4 += 2) if (":path" === e3[t4] && "string" == typeof e3[t4 + 1]) return e3[t4 + 1];
              return;
            }
            if (null !== e3 && "object" == typeof e3) {
              const t4 = e3[":path"];
              return "string" == typeof t4 ? t4 : void 0;
            }
            return;
          })(t3);
          let i2;
          if ("string" == typeof o2) try {
            i2 = new URL(o2, r2);
          } catch {
            i2 = void 0;
          }
          return this.check(i2, "http2.request"), n2.call(e2, t3, s2);
        };
      }
      patchHttpModule(e2, t2) {
        const r2 = `${t2}:`, n2 = e2.request, s2 = e2.get, o2 = (...s3) => (this.check(_(s3, r2), `${t2}.request`), n2.apply(e2, s3)), i2 = (...n3) => (this.check(_(n3, r2), `${t2}.get`), s2.apply(e2, n3));
        return e2.request = o2, e2.get = i2, () => {
          e2.request === o2 && (e2.request = n2), e2.get === i2 && (e2.get = s2);
        };
      }
      reportRefusal(e2) {
        const t2 = `${e2.initiator} ${e2.host ?? "<unparseable>"}`, r2 = `[PrivateInferenceHttpGuard] refused host=${e2.host ?? "<unparseable>"} initiator=${e2.initiator} from=${e2.stackHint ?? "?"}`;
        if (this.loggedRefusals.has(t2)) for (const e3 of this.logs) e3.trace(r2);
        else {
          this.loggedRefusals.add(t2);
          for (const e3 of this.logs) e3.warn(`${r2} (further refusals of this target are logged at trace level)`);
        }
        for (const t3 of this.refusalListeners) try {
          t3(e2);
        } catch {
        }
      }
      info(e2) {
        for (const t2 of this.logs) t2.info(e2);
      }
    }
    t.PrivateInferenceHttpGuard = g;
    const y = { disabled: 0, pending: 1, enabled: 2 };
    function w(e2) {
      let t2 = "disabled";
      for (const r2 of e2) y[r2] > y[t2] && (t2 = r2);
      return t2;
    }
    function v(e2) {
      return null !== e2 && "object" == typeof e2 && !(e2 instanceof URL);
    }
    function _(e2, t2) {
      const [r2, n2] = e2;
      let s2, o2;
      if ("string" == typeof r2 || r2 instanceof URL) {
        if (s2 = A(r2), void 0 === s2) return;
        v(n2) && (o2 = n2);
      } else {
        if (!v(r2)) return;
        o2 = r2;
      }
      return void 0 === o2 ? s2 : (function(e3, t3, r3) {
        void 0 === t3 && "string" == typeof e3.href && (t3 = A(e3.href));
        const n3 = "string" == typeof e3.protocol && e3.protocol.length > 0 ? e3.protocol : t3?.protocol ?? r3;
        let s3, o3;
        if ("string" == typeof e3.hostname && e3.hostname.length > 0) s3 = e3.hostname;
        else if ("string" == typeof e3.host && e3.host.length > 0) {
          const t4 = A(`${n3}//${e3.host}`);
          if (void 0 === t4) return;
          s3 = t4.hostname, o3 = t4.port.length > 0 ? t4.port : void 0;
        } else void 0 !== t3 && (s3 = t3.hostname, o3 = t3.port.length > 0 ? t3.port : void 0);
        "string" != typeof e3.port && "number" != typeof e3.port || (o3 = String(e3.port));
        if (void 0 === s3 || 0 === s3.length) return;
        let i2 = "/";
        if ("string" == typeof e3.path) {
          if (!e3.path.startsWith("/")) return;
          i2 = e3.path;
        } else void 0 !== t3 && (i2 = `${t3.pathname}${t3.search}`);
        const a2 = s3.includes(":") ? `[${s3}]` : s3;
        return A(`${n3}//${a2}${void 0 !== o3 ? `:${o3}` : ""}${i2}`);
      })(o2, s2, t2);
    }
    function A(e2) {
      if (e2 instanceof URL) return e2;
      try {
        return new URL(e2);
      } catch {
        return;
      }
    }
    function S(e2) {
      if (void 0 === e2) return;
      const t2 = e2.hostname.toLowerCase().replace(/^\[|\]$/g, "");
      if (0 === t2.length) return;
      const r2 = e2.port.length > 0 ? e2.port : h[e2.protocol];
      return void 0 !== r2 ? `${t2.replace(/\.$/, "")}:${r2}` : void 0;
    }
    const b = /\b(?:PrivateInferenceHttpGuard\.|callerStackHint|guarded(?:Fetch|Request|Get|Connect|SessionRequest))\b/;
    function E() {
      const e2 = new Error().stack;
      if (void 0 !== e2) for (const t2 of e2.split("\n").slice(1)) {
        const e3 = t2.trim();
        if (!e3.startsWith("at ") || b.test(e3) || e3.includes("node:internal") || e3.includes("node:http") || e3.includes("node:https") || e3.includes("node:http2")) continue;
        return /\(([^()]+)\)$/.exec(e3)?.[1] ?? e3.slice(3);
      }
    }
  }