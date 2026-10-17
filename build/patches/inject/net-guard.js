import __lcpDns from "node:dns";
// [cursor-re local mode] Local first: in local mode nothing talks to Cursor's
// backend, telemetry or update feeds. Node's net/tls/fetch resolve hosts
// through dns.lookup, so failing the lookup (ENOTFOUND, like being offline)
// covers every request this process makes; the main process also passes the
// same list to Chromium as host-resolver-rules for the renderers.
var __lcpBlockedDomains = [
  "cursor.sh",
  "cursorapi.com",
  "api.cursor.com",
  "origin.cursor.com",
  "downloads.cursor.com",
  "statsigapi.net",
  "statsigcdn.com",
  "featureassets.org",
  "prodregistryv2.org",
  "sentry.io",
  "datadoghq.com"
];
// The extension gallery stays reachable.
var __lcpAllowedHosts = ["marketplace.cursorapi.com"];
function __lcpLocalMode() {
  const e = process.env.CURSOR_LOCAL_MODE?.trim().toLowerCase();
  if (e === "1" || e === "true") return true;
  if (e === "0" || e === "false") return false;
  return globalThis._VSCODE_PRODUCT_JSON?.cursorLocalMode === true;
}
function __lcpBlockedHost(hostname) {
  const h = String(hostname).toLowerCase().replace(/\.$/, "");
  return !__lcpAllowedHosts.includes(h) && __lcpBlockedDomains.some((d) => h === d || h.endsWith(`.${d}`));
}
function __lcpChromiumRules() {
  return [...__lcpAllowedHosts.map((h) => `EXCLUDE ${h}`), ...__lcpBlockedDomains.flatMap((d) => [`MAP ${d} ~NOTFOUND`, `MAP *.${d} ~NOTFOUND`])].join(", ");
}
function __lcpLookupError(hostname) {
  return Object.assign(new Error(`getaddrinfo ENOTFOUND ${hostname} (blocked in local mode)`), { code: "ENOTFOUND", errno: -3008, syscall: "getaddrinfo", hostname });
}
(() => {
  const lookup = __lcpDns.lookup, lookupPromise = __lcpDns.promises.lookup;
  __lcpDns.lookup = function(hostname, options, callback) {
    if (__lcpLocalMode() && __lcpBlockedHost(hostname)) {
      const cb = typeof options === "function" ? options : callback;
      process.nextTick(() => cb(__lcpLookupError(hostname)));
      return {};
    }
    return lookup.apply(this, arguments);
  };
  __lcpDns.promises.lookup = function(hostname) {
    return __lcpLocalMode() && __lcpBlockedHost(hostname) ? Promise.reject(__lcpLookupError(hostname)) : lookupPromise.apply(this, arguments);
  };
})();
