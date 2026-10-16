!(function() {
  try {
    var e2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e2.Error().stack;
    n && (e2._sentryDebugIds = e2._sentryDebugIds || {}, e2._sentryDebugIds[n] = "796100d4-6792-5007-a8cc-0eed9fea986d");
  } catch (e3) {
  }
})();
import e from "./esm-index-production.js";
export function c(_) {
  return e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H.useMemoCache(_);
}
const t = { c };
export default t;
