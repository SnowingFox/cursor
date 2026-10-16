!(function() {
  try {
    var e2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e2.Error().stack;
    n && (e2._sentryDebugIds = e2._sentryDebugIds || {}, e2._sentryDebugIds[n] = "0c23b904-0f34-59cd-959e-367d4d7d1cb4");
  } catch (e3) {
  }
})();
import { require_react_dom as t } from "../chunk-SGXVKHUB.js";
import "../chunk-ORS33AAG.js";
const e = t();
export const browser = e.browser, createPortal = e.createPortal, flushSync = e.flushSync, preconnect = e.preconnect, prefetchDNS = e.prefetchDNS, preinit = e.preinit, preinitModule = e.preinitModule, preload = e.preload, preloadModule = e.preloadModule, requestFormReset = e.requestFormReset, unstable_batchedUpdates = e.unstable_batchedUpdates, useFormState = e.useFormState, useFormStatus = e.useFormStatus, version = e.version;
export default e;
