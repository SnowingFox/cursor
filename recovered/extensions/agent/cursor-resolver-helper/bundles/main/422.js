// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 422 range:120362..120892
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
422: (e2, a2) => {
    var n2, o2;
    Object.defineProperty(a2, "__esModule", { value: true }), a2.MethodIdempotency = a2.MethodKind = void 0, (function(e3) {
      e3[e3.Unary = 0] = "Unary", e3[e3.ServerStreaming = 1] = "ServerStreaming", e3[e3.ClientStreaming = 2] = "ClientStreaming", e3[e3.BiDiStreaming = 3] = "BiDiStreaming";
    })(n2 || (a2.MethodKind = n2 = {})), (function(e3) {
      e3[e3.NoSideEffects = 1] = "NoSideEffects", e3[e3.Idempotent = 2] = "Idempotent";
    })(o2 || (a2.MethodIdempotency = o2 = {}));
  }