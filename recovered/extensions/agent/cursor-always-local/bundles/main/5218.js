// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5218 range:1229315..1231103
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5218: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.PRIVATE_INFERENCE_PENDING_HOLD_MS = e2.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX = void 0, e2.isPrivateInferenceRpcAllowedInState = i2, e2.createBlockedRpcError = o2, e2.isPrivateInferenceBlockedRpcError = function(t3) {
      if (!(t3 instanceof n2.ConnectError)) return false;
      return t3.code === n2.Code.FailedPrecondition && t3.rawMessage.startsWith(e2.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX);
    }, e2.waitForPrivateInferenceEnablement = a, e2.createPrivateInferencePerimeterInterceptor = function(t3, e3) {
      return (r3) => async (n3) => {
        const u = n3.service.typeName, c = n3.method.name;
        if ("pending" !== t3.state || (0, s2.isPrivateInferenceAllowlistedRpc)(u, c) || await a(t3), !i2(t3.state, u, c)) throw e3?.(u, c), o2(u, c);
        return await r3(n3);
      };
    };
    const n2 = r2(8394), s2 = r2(4269);
    function i2(t3, e3, r3) {
      return "disabled" === t3 || (0, s2.isPrivateInferenceAllowlistedRpc)(e3, r3);
    }
    function o2(t3, r3) {
      return new n2.ConnectError(`${e2.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX} ${t3}/${r3} is disabled under private inference`, n2.Code.FailedPrecondition);
    }
    function a(t3, r3 = e2.PRIVATE_INFERENCE_PENDING_HOLD_MS) {
      return "pending" !== t3.state ? Promise.resolve() : new Promise((e3) => {
        const n3 = () => {
          clearTimeout(i3), s3.dispose(), e3();
        }, s3 = t3.onDidChange((t4) => {
          "pending" !== t4 && n3();
        }), i3 = setTimeout(n3, r3);
        "pending" !== t3.state && n3();
      });
    }
    e2.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX = "private inference perimeter:", e2.PRIVATE_INFERENCE_PENDING_HOLD_MS = 1e4;
  }