// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8881 range:829403..830845
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8881: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { B: () => n2 });
    class n2 {
      constructor(e3 = 864e5) {
        this.ttl = e3, this.staleDirty = false, this.refreshGeneration = 0;
      }
      async get(e3) {
        const t3 = performance.now();
        if (this.state && this.state.expiresAt > t3 && !this.staleDirty) return this.state.value;
        if (this.staleDirty && this.state) {
          const t4 = this.state.value;
          if (!this.refreshInFlight) {
            const t5 = this.refreshGeneration;
            let r4;
            r4 = (async () => {
              try {
                const r5 = await e3();
                if (t5 !== this.refreshGeneration) return;
                this.state = { expiresAt: performance.now() + this.ttl, value: r5 }, this.staleDirty = false;
              } catch {
              } finally {
                r4 && this.refreshInFlight === r4 && (this.refreshInFlight = void 0);
              }
            })(), this.refreshInFlight = r4;
          }
          return t4;
        }
        const r3 = await e3();
        return this.state = { expiresAt: performance.now() + this.ttl, value: r3 }, this.staleDirty = false, r3;
      }
      invalidate() {
        this.refreshGeneration++, this.state = void 0, this.staleDirty = false, this.refreshInFlight = void 0;
      }
      invalidateKeepingStale() {
        this.state && (this.staleDirty = true);
      }
    }
  }