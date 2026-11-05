// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/273.js sha256:ab64b3e34dc97e1e5c85ecdaec9168b4137705ddedfa3c341bca35d6a42d36bc
// module: 8467 range:84207..84531
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8467: (e, t) => {
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