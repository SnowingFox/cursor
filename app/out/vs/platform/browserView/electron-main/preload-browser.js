!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2cf9354c-d90d-545a-9d08-577f27bca88a");
  } catch (e2) {
  }
})();
(function() {
  "use strict";
  const { ipcRenderer: n, webFrame: t } = require("electron"), s = [".okta.com", ".okta-emea.com", ".oktapreview.com", ".duosecurity.com", ".duo.com", ".login.microsoftonline.com", ".onelogin.com", ".auth0.com", ".pingidentity.com", ".pingone.com", ".rippling.com"];
  function c() {
    try {
      const e = window.location.hostname.toLowerCase();
      if (!s.some((i) => e === i.slice(1) || e.endsWith(i))) return;
      t.executeJavaScript(`
				(function() {
					if (typeof navigator === 'undefined' || !navigator.permissions || !navigator.permissions.query) {
						return;
					}
					// Avoid double-patching
					if (navigator.permissions.__localNetworkPolyfillApplied) {
						return;
					}
					navigator.permissions.__localNetworkPolyfillApplied = true;

					const originalQuery = navigator.permissions.query.bind(navigator.permissions);
					navigator.permissions.query = async function(descriptor) {
						if (descriptor && (descriptor.name === 'local-network-access' || descriptor.name === 'local-network' || descriptor.name === 'loopback-network')) {
							return {
								state: 'granted',
								name: descriptor.name,
								onchange: null,
								addEventListener: function() {},
								removeEventListener: function() {},
								dispatchEvent: function() { return true; }
							};
						}
						return originalQuery(descriptor);
					};
				})();
			`);
    } catch (e) {
      console.error("[BrowserView Preload] Failed to inject local network access polyfill:", e);
    }
  }
  c(), window.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
      if (!e.altKey) return;
      const r = e.target.closest("a[href]");
      if (!r) return;
      const o = r.href;
      !o || o.startsWith("javascript:") || (e.preventDefault(), e.stopPropagation(), n.send("vscode:browser-view-message", "open-url-side-group", { url: o }));
    }, true);
  });
})();
