// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/273.js sha256:057ec17488f68f7434e12ce31e59180a7183ddc2aab226744d2893aed3fcf167
// module: 8467 range:84207..84531
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
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