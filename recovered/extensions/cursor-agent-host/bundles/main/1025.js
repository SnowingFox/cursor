// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 1025 range:22612..26128
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1025: (e, t, r) => {
    "use strict";
    r.d(t, { B9: () => a, H8: () => c, ZC: () => u });
    var n = r(65588), s = r(40328), o = r(8032);
    function i(e2, t2) {
      return void 0 === e2 || void 0 === t2 ? e2 === t2 : e2.authId === t2.authId && e2.backendUrl === t2.backendUrl;
    }
    function a(e2, t2) {
      return i(e2, t2);
    }
    function c() {
      return new s.T("Private inference account or backend changed", o.C.Canceled);
    }
    function l() {
      return c();
    }
    class u {
      constructor(e2, t2) {
        this.host = e2, this.client = t2, this.identityController = new AbortController(), this.listeners = /* @__PURE__ */ new Set(), this.disposed = false, this.identity = this.readIdentity(), this.subscriptions = [e2.onDidChangeCursorAuthToken(() => this.updateIdentity()), e2.onDidChangeCursorCreds(() => this.updateIdentity())];
      }
      async getIdentity() {
        return this.updateIdentity(), this.identity;
      }
      onDidChangeIdentity(e2) {
        return this.disposed || this.listeners.add(e2), { dispose: () => this.listeners.delete(e2) };
      }
      async admitRun(e2, t2, r2, { headers: n2 } = {}) {
        return r2?.throwIfAborted(), await this.call(e2, void 0, (e3) => this.client.admitRun(t2, void 0 === n2 ? e3 : { ...e3, headers: n2 }), { abortInFlight: false, fenceAfterResponse: false });
      }
      reportUsage(e2, t2, r2) {
        return this.call(e2, r2, (e3) => this.client.reportUsage(t2, e3));
      }
      dispose() {
        if (!this.disposed) {
          this.disposed = true, this.identity = void 0, this.identityController.abort(l());
          for (const e2 of this.subscriptions) e2.dispose();
          this.listeners.clear();
        }
      }
      readIdentity() {
        const e2 = (function(e3) {
          if (void 0 !== e3) try {
            const { sub: t3 } = (0, n.decodeJwt)(e3);
            return "string" == typeof t3 && "" !== t3.trim() ? t3 : void 0;
          } catch {
            return;
          }
        })(this.host.getCursorAuthToken()), t2 = (function(e3) {
          if (void 0 !== e3) try {
            const t3 = new URL(e3);
            if ("https:" !== t3.protocol && "http:" !== t3.protocol || "" !== t3.username || "" !== t3.password || "" !== t3.search || "" !== t3.hash) return;
            return `${t3.origin}${t3.pathname.replace(/\/+$/, "")}`;
          } catch {
            return;
          }
        })(this.host.getCursorCreds()?.backendUrl);
        return void 0 === e2 || void 0 === t2 ? void 0 : Object.freeze({ authId: e2, backendUrl: t2 });
      }
      updateIdentity() {
        if (this.disposed) return;
        const e2 = this.readIdentity();
        if (i(this.identity, e2)) return;
        this.identity = e2;
        const t2 = this.identityController;
        this.identityController = new AbortController(), t2.abort(l());
        for (const e3 of this.listeners) e3();
      }
      assertCurrent(e2) {
        if (this.updateIdentity(), this.disposed || !i(this.identity, e2)) throw l();
      }
      async call(e2, t2, r2, { abortInFlight: n2 = true, fenceAfterResponse: s2 = true } = {}) {
        const o2 = { ...e2 };
        this.assertCurrent(o2);
        const i2 = void 0 === t2 ? this.identityController.signal : AbortSignal.any([t2, this.identityController.signal]);
        i2.throwIfAborted();
        const a2 = await r2(n2 ? { signal: i2 } : {});
        return s2 && (this.assertCurrent(o2), i2.throwIfAborted()), a2;
      }
    }
  }