// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 88774 range:476993..478603
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88774: (A, e, t) => {
  "use strict";
  const { createInflateRaw: r, Z_DEFAULT_WINDOWBITS: s } = t(38522), { isValidClientWindowBits: o } = t(79946), { MessageSizeExceededError: n } = t(38238), i = Buffer.from([0, 0, 255, 255]), a = /* @__PURE__ */ Symbol("kBuffer"), Q = /* @__PURE__ */ Symbol("kLength");
  A.exports = { PerMessageDeflate: class {
    #QA;
    #f = {};
    #b = 0;
    constructor(A2, e2) {
      this.#f.serverNoContextTakeover = A2.has("server_no_context_takeover"), this.#f.serverMaxWindowBits = A2.get("server_max_window_bits"), this.#b = e2.maxPayloadSize;
    }
    decompress(A2, e2, t2) {
      if (!this.#QA) {
        let A3 = s;
        if (this.#f.serverMaxWindowBits) {
          if (!o(this.#f.serverMaxWindowBits)) return void t2(new Error("Invalid server_max_window_bits"));
          A3 = Number.parseInt(this.#f.serverMaxWindowBits);
        }
        try {
          this.#QA = r({ windowBits: A3 });
        } catch (A4) {
          return void t2(A4);
        }
        this.#QA[a] = [], this.#QA[Q] = 0, this.#QA.on("data", (A4) => {
          if (this.#QA[Q] += A4.length, this.#b > 0 && this.#QA[Q] > this.#b) return t2(new n()), this.#QA.removeAllListeners(), void (this.#QA = null);
          this.#QA[a].push(A4);
        }), this.#QA.on("error", (A4) => {
          this.#QA = null, t2(A4);
        });
      }
      this.#QA.write(A2), e2 && this.#QA.write(i), this.#QA.flush(() => {
        if (!this.#QA) return;
        const A3 = Buffer.concat(this.#QA[a], this.#QA[Q]);
        this.#QA[a].length = 0, this.#QA[Q] = 0, t2(null, A3);
      });
    }
  } };
}