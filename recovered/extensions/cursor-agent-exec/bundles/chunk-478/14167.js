// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/478.js sha256:03d8c888857521b5af31d5761e74aee40e5eecd292b9b059b8748be5231d88b9
// module: 14167 range:4634..6085
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
14167: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const o = r(58571), n = r(93664), i = r(55909), s = r(98175), c = r(55264), a = r(3865), p = r(49125), d = r(38527), l = r(43721), u = r(38632);
  t.getRuntimeConfig = (e2) => ({ apiVersion: "2019-06-10", base64Decoder: e2?.base64Decoder ?? a.fromBase64, base64Encoder: e2?.base64Encoder ?? a.toBase64, disableHostPrefix: e2?.disableHostPrefix ?? false, endpointProvider: e2?.endpointProvider ?? l.defaultEndpointResolver, extensions: e2?.extensions ?? [], httpAuthSchemeProvider: e2?.httpAuthSchemeProvider ?? d.defaultSSOOIDCHttpAuthSchemeProvider, httpAuthSchemes: e2?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (e3) => e3.getIdentityProvider("aws.auth#sigv4"), signer: new o.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (e3) => e3.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new i.NoAuthSigner() }], logger: e2?.logger ?? new s.NoOpLogger(), protocol: e2?.protocol ?? n.AwsRestJsonProtocol, protocolSettings: e2?.protocolSettings ?? { defaultNamespace: "com.amazonaws.ssooidc", errorTypeRegistries: u.errorTypeRegistries, version: "2019-06-10", serviceTarget: "AWSSSOOIDCService" }, serviceId: e2?.serviceId ?? "SSO OIDC", urlParser: e2?.urlParser ?? c.parseUrl, utf8Decoder: e2?.utf8Decoder ?? p.fromUtf8, utf8Encoder: e2?.utf8Encoder ?? p.toUtf8 });
}