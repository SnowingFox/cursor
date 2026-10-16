"use strict";
exports.id = 165, exports.ids = [165], exports.modules = { 95165: (e, t, a) => {
  a.d(t, { VscodeFileChangeTracker: () => s });
  class s {
    constructor(e2) {
      this.onChange = e2;
    }
    async trackChange(e2, t2, a2, s2) {
      const o = { path: e2, before: t2, after: a2, metadata: s2 };
      this.onChange && await this.onChange(o);
    }
  }
} };
