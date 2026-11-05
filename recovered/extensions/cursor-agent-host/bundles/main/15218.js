// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 15218 range:4000909..4002668
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
15218: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.PRIVATE_INFERENCE_PENDING_HOLD_MS = t.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX = void 0, t.isPrivateInferenceRpcAllowedInState = o, t.createBlockedRpcError = i, t.isPrivateInferenceBlockedRpcError = function(e2) {
      if (!(e2 instanceof n.ConnectError)) return false;
      return e2.code === n.Code.FailedPrecondition && e2.rawMessage.startsWith(t.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX);
    }, t.waitForPrivateInferenceEnablement = a, t.createPrivateInferencePerimeterInterceptor = function(e2, t2) {
      return (r2) => async (n2) => {
        const c = n2.service.typeName, l = n2.method.name;
        if ("pending" !== e2.state || (0, s.isPrivateInferenceAllowlistedRpc)(c, l) || await a(e2), !o(e2.state, c, l)) throw t2?.(c, l), i(c, l);
        return await r2(n2);
      };
    };
    const n = r(22712), s = r(44269);
    function o(e2, t2, r2) {
      return "disabled" === e2 || (0, s.isPrivateInferenceAllowlistedRpc)(t2, r2);
    }
    function i(e2, r2) {
      return new n.ConnectError(`${t.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX} ${e2}/${r2} is disabled under private inference`, n.Code.FailedPrecondition);
    }
    function a(e2, r2 = t.PRIVATE_INFERENCE_PENDING_HOLD_MS) {
      return "pending" !== e2.state ? Promise.resolve() : new Promise((t2) => {
        const n2 = () => {
          clearTimeout(o2), s2.dispose(), t2();
        }, s2 = e2.onDidChange((e3) => {
          "pending" !== e3 && n2();
        }), o2 = setTimeout(n2, r2);
        "pending" !== e2.state && n2();
      });
    }
    t.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX = "private inference perimeter:", t.PRIVATE_INFERENCE_PENDING_HOLD_MS = 1e4;
  }