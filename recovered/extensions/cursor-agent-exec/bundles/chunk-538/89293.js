// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/538.js sha256:59937a807dffd12f7cc46b403bdda955eb0b59336adfd7cbeb5ae1e50bf20f3d
// module: 89293 range:15133..16569
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
89293: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const n = o(58571), r = o(93664), s = o(55909), i = o(98175), a = o(55264), c = o(3865), d = o(49125), u = o(79109), l = o(2763), p = o(43506);
  t.getRuntimeConfig = (e2) => ({ apiVersion: "2019-06-10", base64Decoder: e2?.base64Decoder ?? c.fromBase64, base64Encoder: e2?.base64Encoder ?? c.toBase64, disableHostPrefix: e2?.disableHostPrefix ?? false, endpointProvider: e2?.endpointProvider ?? l.defaultEndpointResolver, extensions: e2?.extensions ?? [], httpAuthSchemeProvider: e2?.httpAuthSchemeProvider ?? u.defaultSSOHttpAuthSchemeProvider, httpAuthSchemes: e2?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (e3) => e3.getIdentityProvider("aws.auth#sigv4"), signer: new n.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (e3) => e3.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new s.NoAuthSigner() }], logger: e2?.logger ?? new i.NoOpLogger(), protocol: e2?.protocol ?? r.AwsRestJsonProtocol, protocolSettings: e2?.protocolSettings ?? { defaultNamespace: "com.amazonaws.sso", errorTypeRegistries: p.errorTypeRegistries, version: "2019-06-10", serviceTarget: "SWBPortalService" }, serviceId: e2?.serviceId ?? "SSO", urlParser: e2?.urlParser ?? a.parseUrl, utf8Decoder: e2?.utf8Decoder ?? d.fromUtf8, utf8Encoder: e2?.utf8Encoder ?? d.toUtf8 });
}