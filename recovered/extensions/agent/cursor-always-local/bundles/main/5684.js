// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5684 range:1287885..1290374
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5684: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.AsyncIterPushable = void 0;
    class r2 {
      constructor(t3) {
        this.timeoutMs = t3, this.queue = [], this.queueHead = 0, this.resolve = void 0, this.reject = void 0, this._end = false, this.e = void 0, this.basicPromise = new Promise((t4, e3) => {
          this.resolve = t4, this.reject = e3;
        });
      }
      hasQueuedValue() {
        return this.queueHead < this.queue.length;
      }
      shiftQueuedValue() {
        const t3 = this.queue[this.queueHead];
        return this.queue[this.queueHead] = void 0, this.queueHead++, this.queueHead > 64 && 2 * this.queueHead >= this.queue.length && (this.queue = this.queue.slice(this.queueHead), this.queueHead = 0), t3;
      }
      push(t3) {
        this.queue.push(t3), this.resolve && this.resolve();
      }
      end() {
        this.resolve && this.resolve(), this._end = true;
      }
      error(t3) {
        this.reject && this.reject(t3), this.e = t3;
      }
      resetPromise() {
        this.basicPromise = new Promise((t3, e3) => {
          this.resolve = t3, this.reject = e3;
        }).catch((t3) => {
          this.e = t3;
        });
      }
      [Symbol.asyncIterator]() {
        const t3 = this.timeoutMs;
        return { next: async () => {
          try {
            if (void 0 !== this.e) throw this.e;
            if (this.hasQueuedValue()) return { done: false, value: this.shiftQueuedValue() };
            if (this._end) return { done: true, value: void 0 };
            const e3 = await (async function(t4, e4) {
              let r3;
              try {
                return await Promise.race([t4.then(() => false), new Promise((t5) => {
                  r3 = setTimeout(() => t5(true), e4);
                })]);
              } finally {
                void 0 !== r3 && clearTimeout(r3);
              }
            })(this.basicPromise, t3);
            if (void 0 !== this.e) throw this.e;
            if (this.hasQueuedValue()) return { done: false, value: this.shiftQueuedValue() };
            if (e3 || this._end) return { done: true, value: void 0 };
            throw new Error("AsyncIterPushable: should not be here");
          } finally {
            this.resetPromise();
          }
        }, throw: async (t4) => (this.error(t4), this._end = true, this.resetPromise(), { done: true, value: void 0 }) };
      }
    }
    e2.AsyncIterPushable = r2;
  }