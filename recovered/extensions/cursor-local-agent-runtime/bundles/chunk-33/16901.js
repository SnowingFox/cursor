// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 16901 range:7622..8446
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16901: (e, t) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.resolveHttpAuthRuntimeConfig = t.getHttpAuthExtensionConfiguration = void 0;
  t.getHttpAuthExtensionConfiguration = (e2) => {
    const t2 = e2.httpAuthSchemes;
    let n = e2.httpAuthSchemeProvider, i = e2.credentials;
    return { setHttpAuthScheme(e3) {
      const n2 = t2.findIndex((t3) => t3.schemeId === e3.schemeId);
      -1 === n2 ? t2.push(e3) : t2.splice(n2, 1, e3);
    }, httpAuthSchemes: () => t2, setHttpAuthSchemeProvider(e3) {
      n = e3;
    }, httpAuthSchemeProvider: () => n, setCredentials(e3) {
      i = e3;
    }, credentials: () => i };
  };
  t.resolveHttpAuthRuntimeConfig = (e2) => ({ httpAuthSchemes: e2.httpAuthSchemes(), httpAuthSchemeProvider: e2.httpAuthSchemeProvider(), credentials: e2.credentials() });
}