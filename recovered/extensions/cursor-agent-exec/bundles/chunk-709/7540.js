// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/709.js sha256:178b16cc9cd8c06565bc9aac7b10691bae0eb6d67807efc2887d6c205e5f61c7
// module: 7540 range:73..522
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7540: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.SigninServiceException = t.__ServiceException = void 0;
  const o = n(98175);
  Object.defineProperty(t, "__ServiceException", { enumerable: true, get: function() {
    return o.ServiceException;
  } });
  class r extends o.ServiceException {
    constructor(e2) {
      super(e2), Object.setPrototypeOf(this, r.prototype);
    }
  }
  t.SigninServiceException = r;
}