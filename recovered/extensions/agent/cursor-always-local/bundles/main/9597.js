// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9597 range:6167330..6167904
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9597: (t2) => {
    "use strict";
    const e2 = /* @__PURE__ */ Symbol("kDone"), r2 = /* @__PURE__ */ Symbol("kRun");
    t2.exports = class {
      constructor(t3) {
        this[e2] = () => {
          this.pending--, this[r2]();
        }, this.concurrency = t3 || 1 / 0, this.jobs = [], this.pending = 0;
      }
      add(t3) {
        this.jobs.push(t3), this[r2]();
      }
      [r2]() {
        if (this.pending !== this.concurrency && this.jobs.length) {
          const t3 = this.jobs.shift();
          this.pending++, t3(this[e2]);
        }
      }
    };
  }