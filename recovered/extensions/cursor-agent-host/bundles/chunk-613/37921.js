// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 37921 range:207658..208170
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37921: (A, e, t) => {
  "use strict";
  const r = t(47510), s = t(3685);
  A.exports = class extends r {
    #d = null;
    #f = null;
    constructor(A2, e2 = {}) {
      super(e2), this.#d = A2, this.#f = e2;
    }
    dispatch(A2, e2) {
      const t2 = new s({ ...A2, retryOptions: this.#f }, { dispatch: this.#d.dispatch.bind(this.#d), handler: e2 });
      return this.#d.dispatch(A2, t2);
    }
    close() {
      return this.#d.close();
    }
    destroy() {
      return this.#d.destroy();
    }
  };
}