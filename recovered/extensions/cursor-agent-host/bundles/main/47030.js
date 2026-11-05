// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 47030 range:7938599..7940659
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47030: (e, t, r) => {
    "use strict";
    r.d(t, { Bk: () => a, Fo: () => i, We: () => d, d_: () => o, ve: () => u });
    var n = r(46144), s = r(20600);
    function o(e2, t2) {
      return e2.isBlobDurable?.(t2) ?? true;
    }
    function i(e2) {
      const t2 = e2.buffer;
      return "undefined" != typeof SharedArrayBuffer && t2 instanceof SharedArrayBuffer ? new Uint8Array(e2) : new Uint8Array(t2, e2.byteOffset, e2.byteLength);
    }
    async function a(e2) {
      const t2 = await crypto.subtle.digest("SHA-256", i(e2));
      return new Uint8Array(t2);
    }
    const c = (0, n.v5)("agent_kv.in_memory.get_blob.duration_ms", { description: "Duration of InMemoryBlobStore getBlob operations in milliseconds" }), l = (0, n.v5)("agent_kv.in_memory.set_blob.duration_ms", { description: "Duration of InMemoryBlobStore setBlob operations in milliseconds" });
    class u {
      constructor() {
        this.blobs = /* @__PURE__ */ new Map();
      }
      getBlob(e2, t2) {
        const r2 = performance.now();
        try {
          const e3 = this.blobs.get((0, s.nj)(t2));
          return Promise.resolve(e3);
        } finally {
          const t3 = performance.now() - r2;
          c.histogram(e2, t3);
        }
      }
      setBlob(e2, t2, r2) {
        const n2 = performance.now();
        try {
          return this.blobs.set((0, s.nj)(t2), r2), Promise.resolve();
        } finally {
          const t3 = performance.now() - n2;
          l.histogram(e2, t3);
        }
      }
      setBlobLocallyOnly(e2, t2, r2) {
        return this.setBlob(e2, t2, r2);
      }
      flush(e2) {
        return Promise.resolve();
      }
    }
    class d {
      constructor() {
        this.store = /* @__PURE__ */ new Map();
      }
      set(e2, t2) {
        this.store.set(e2, t2);
      }
      subscribe(e2, t2) {
        return () => {
        };
      }
      get(e2) {
        const t2 = this.store.get(e2);
        if (void 0 === t2) throw new Error(`Key ${String(e2)} not found in store`);
        return t2;
      }
    }
  }