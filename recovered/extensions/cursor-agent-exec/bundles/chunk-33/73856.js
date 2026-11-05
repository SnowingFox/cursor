// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 73856 range:15653..16097
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
73856: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.STSServiceException = t.__ServiceException = void 0;
  const i = n(98175);
  Object.defineProperty(t, "__ServiceException", { enumerable: true, get: function() {
    return i.ServiceException;
  } });
  class o extends i.ServiceException {
    constructor(e2) {
      super(e2), Object.setPrototypeOf(this, o.prototype);
    }
  }
  t.STSServiceException = o;
}