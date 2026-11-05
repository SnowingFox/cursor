// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 26920 range:4741915..4745953
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
26920: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AgentRunWebSocketConnectionContextTracker = void 0, t.agentRunWebSocketConnectionContextsEqual = s, t.fingerprintAgentRunCredential = o, t.fingerprintAgentRunPoolIdentity = function(e2) {
      const t2 = (0, n.createHash)("sha256");
      for (const r2 of i) {
        const n2 = e2.get(r2);
        t2.update(`${r2}\0`), t2.update(null === n2 ? "missing\0" : `present\0${Buffer.byteLength(n2, "utf8")}\0${n2}`), t2.update("\0");
      }
      return t2.digest("hex");
    }, t.createHostAgentRunWebSocketConnectionContextSource = function(e2, t2) {
      return { read: () => ({ endpoint: t2.endpoint, credentialFingerprint: o(e2.getCursorAuthToken()), teamId: e2.getTeamId(), hasEffectiveProxy: e2.hasEffectiveProxy?.() ?? false }), subscribe: (t3) => {
        const r2 = [];
        try {
          r2.push(e2.onDidChangeCursorAuthToken(() => t3("auth_token"))), r2.push(e2.onDidChangeCursorCreds(() => t3("cursor_creds"))), void 0 !== e2.onDidChangeActiveTeamId && r2.push(e2.onDidChangeActiveTeamId(() => t3("active_team"))), void 0 !== e2.onDidChangeProxy && r2.push(e2.onDidChangeProxy(() => t3("proxy")));
        } catch (e3) {
          for (const e4 of r2) try {
            e4.dispose();
          } catch {
          }
          throw e3;
        }
        return { dispose: () => {
          let e3, t4 = false;
          for (const n2 of r2) try {
            n2.dispose();
          } catch (r3) {
            t4 || (t4 = true, e3 = r3);
          }
          if (t4) throw e3;
        } };
      } };
    };
    const n = r(77598);
    function s(e2, t2) {
      return e2.endpoint === t2.endpoint && e2.credentialFingerprint === t2.credentialFingerprint && e2.teamId === t2.teamId && e2.hasEffectiveProxy === t2.hasEffectiveProxy;
    }
    function o(e2) {
      return (0, n.createHash)("sha256").update(void 0 === e2 ? "missing" : `present\0${e2}`).digest("hex");
    }
    t.AgentRunWebSocketConnectionContextTracker = class {
      constructor(e2, t2, r2 = () => true) {
        this.source = e2, this.observeChange = t2, this.shouldObserveChange = r2;
      }
      current() {
        const e2 = this.source.read();
        if (void 0 !== this.context && void 0 !== this.controller && s(this.context, e2)) return this.ensureSubscription(this.controller), { context: this.context, signal: this.controller.signal };
        if (this.invalidate(), void 0 !== this.context && void 0 !== this.controller) return this.current();
        const t2 = new AbortController();
        return this.context = e2, this.controller = t2, this.ensureSubscription(t2), { context: e2, signal: t2.signal };
      }
      pause() {
        const e2 = this.subscription;
        this.subscription = void 0, e2?.dispose();
      }
      invalidate() {
        const e2 = this.subscription, t2 = this.controller;
        this.subscription = void 0, this.context = void 0, this.controller = void 0, t2?.abort(), e2?.dispose();
      }
      ensureSubscription(e2) {
        if (void 0 !== this.subscription) return;
        let t2;
        try {
          t2 = this.source.subscribe((t3) => {
            let r2 = "unknown";
            try {
              r2 = void 0 === this.context || !s(this.context, this.source.read());
            } catch {
            }
            let n2 = false;
            try {
              n2 = this.shouldObserveChange();
            } catch {
            }
            n2 && this.emitChange({ cause: t3, identityChanged: r2 }), false !== r2 && this.invalidateGeneration(e2);
          });
        } catch (t3) {
          throw this.invalidateGeneration(e2), t3;
        }
        this.controller === e2 ? this.subscription = t2 : t2.dispose();
      }
      invalidateGeneration(e2) {
        this.controller === e2 && this.invalidate();
      }
      emitChange(e2) {
        try {
          this.observeChange?.(e2);
        } catch {
        }
      }
    };
    const i = ["authorization"];
  }