// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 28467 range:28628..28953
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28467: (e, t) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.Deferred = void 0;
  t.Deferred = class {
    constructor() {
      this.resolve = () => null, this.reject = () => null, this.promise = new Promise((e2, t2) => {
        this.reject = t2, this.resolve = e2;
      });
    }
  };
}