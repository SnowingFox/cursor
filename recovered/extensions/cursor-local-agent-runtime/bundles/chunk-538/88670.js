// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/538.js sha256:59937a807dffd12f7cc46b403bdda955eb0b59336adfd7cbeb5ae1e50bf20f3d
// module: 88670 range:13317..13761
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88670: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.SSOServiceException = t.__ServiceException = void 0;
  const n = o(98175);
  Object.defineProperty(t, "__ServiceException", { enumerable: true, get: function() {
    return n.ServiceException;
  } });
  class r extends n.ServiceException {
    constructor(e2) {
      super(e2), Object.setPrototypeOf(this, r.prototype);
    }
  }
  t.SSOServiceException = r;
}