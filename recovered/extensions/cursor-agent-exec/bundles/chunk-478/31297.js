// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/478.js sha256:03d8c888857521b5af31d5761e74aee40e5eecd292b9b059b8748be5231d88b9
// module: 31297 range:10910..11362
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31297: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.SSOOIDCServiceException = t.__ServiceException = void 0;
  const o = r(98175);
  Object.defineProperty(t, "__ServiceException", { enumerable: true, get: function() {
    return o.ServiceException;
  } });
  class n extends o.ServiceException {
    constructor(e2) {
      super(e2), Object.setPrototypeOf(this, n.prototype);
    }
  }
  t.SSOOIDCServiceException = n;
}