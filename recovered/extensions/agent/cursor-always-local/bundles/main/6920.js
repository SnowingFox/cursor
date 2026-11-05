// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6920 range:3763985..3768044
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6920: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.AgentRunWebSocketConnectionContextTracker = void 0, e2.agentRunWebSocketConnectionContextsEqual = s2, e2.fingerprintAgentRunCredential = i2, e2.fingerprintAgentRunPoolIdentity = function(t3) {
      const e3 = (0, n2.createHash)("sha256");
      for (const r3 of o2) {
        const n3 = t3.get(r3);
        e3.update(`${r3}\0`), e3.update(null === n3 ? "missing\0" : `present\0${Buffer.byteLength(n3, "utf8")}\0${n3}`), e3.update("\0");
      }
      return e3.digest("hex");
    }, e2.createHostAgentRunWebSocketConnectionContextSource = function(t3, e3) {
      return { read: () => ({ endpoint: e3.endpoint, credentialFingerprint: i2(t3.getCursorAuthToken()), teamId: t3.getTeamId(), hasEffectiveProxy: t3.hasEffectiveProxy?.() ?? false }), subscribe: (e4) => {
        const r3 = [];
        try {
          r3.push(t3.onDidChangeCursorAuthToken(() => e4("auth_token"))), r3.push(t3.onDidChangeCursorCreds(() => e4("cursor_creds"))), void 0 !== t3.onDidChangeActiveTeamId && r3.push(t3.onDidChangeActiveTeamId(() => e4("active_team"))), void 0 !== t3.onDidChangeProxy && r3.push(t3.onDidChangeProxy(() => e4("proxy")));
        } catch (t4) {
          for (const t5 of r3) try {
            t5.dispose();
          } catch {
          }
          throw t4;
        }
        return { dispose: () => {
          let t4, e5 = false;
          for (const n3 of r3) try {
            n3.dispose();
          } catch (r4) {
            e5 || (e5 = true, t4 = r4);
          }
          if (e5) throw t4;
        } };
      } };
    };
    const n2 = r2(7598);
    function s2(t3, e3) {
      return t3.endpoint === e3.endpoint && t3.credentialFingerprint === e3.credentialFingerprint && t3.teamId === e3.teamId && t3.hasEffectiveProxy === e3.hasEffectiveProxy;
    }
    function i2(t3) {
      return (0, n2.createHash)("sha256").update(void 0 === t3 ? "missing" : `present\0${t3}`).digest("hex");
    }
    e2.AgentRunWebSocketConnectionContextTracker = class {
      constructor(t3, e3, r3 = () => true) {
        this.source = t3, this.observeChange = e3, this.shouldObserveChange = r3;
      }
      current() {
        const t3 = this.source.read();
        if (void 0 !== this.context && void 0 !== this.controller && s2(this.context, t3)) return this.ensureSubscription(this.controller), { context: this.context, signal: this.controller.signal };
        if (this.invalidate(), void 0 !== this.context && void 0 !== this.controller) return this.current();
        const e3 = new AbortController();
        return this.context = t3, this.controller = e3, this.ensureSubscription(e3), { context: t3, signal: e3.signal };
      }
      pause() {
        const t3 = this.subscription;
        this.subscription = void 0, t3?.dispose();
      }
      invalidate() {
        const t3 = this.subscription, e3 = this.controller;
        this.subscription = void 0, this.context = void 0, this.controller = void 0, e3?.abort(), t3?.dispose();
      }
      ensureSubscription(t3) {
        if (void 0 !== this.subscription) return;
        let e3;
        try {
          e3 = this.source.subscribe((e4) => {
            let r3 = "unknown";
            try {
              r3 = void 0 === this.context || !s2(this.context, this.source.read());
            } catch {
            }
            let n3 = false;
            try {
              n3 = this.shouldObserveChange();
            } catch {
            }
            n3 && this.emitChange({ cause: e4, identityChanged: r3 }), false !== r3 && this.invalidateGeneration(t3);
          });
        } catch (e4) {
          throw this.invalidateGeneration(t3), e4;
        }
        this.controller === t3 ? this.subscription = e3 : e3.dispose();
      }
      invalidateGeneration(t3) {
        this.controller === t3 && this.invalidate();
      }
      emitChange(t3) {
        try {
          this.observeChange?.(t3);
        } catch {
        }
      }
    };
    const o2 = ["authorization"];
  }