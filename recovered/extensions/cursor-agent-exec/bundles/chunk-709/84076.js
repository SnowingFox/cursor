// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/709.js sha256:178b16cc9cd8c06565bc9aac7b10691bae0eb6d67807efc2887d6c205e5f61c7
// module: 84076 range:14711..16147
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
84076: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.getRuntimeConfig = void 0;
  const o = n(58571), r = n(93664), i = n(55909), s = n(98175), a = n(55264), c = n(3865), u = n(49125), d = n(54086), p = n(58208), l = n(41845);
  t.getRuntimeConfig = (e2) => ({ apiVersion: "2023-01-01", base64Decoder: e2?.base64Decoder ?? c.fromBase64, base64Encoder: e2?.base64Encoder ?? c.toBase64, disableHostPrefix: e2?.disableHostPrefix ?? false, endpointProvider: e2?.endpointProvider ?? p.defaultEndpointResolver, extensions: e2?.extensions ?? [], httpAuthSchemeProvider: e2?.httpAuthSchemeProvider ?? d.defaultSigninHttpAuthSchemeProvider, httpAuthSchemes: e2?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: (e3) => e3.getIdentityProvider("aws.auth#sigv4"), signer: new o.AwsSdkSigV4Signer() }, { schemeId: "smithy.api#noAuth", identityProvider: (e3) => e3.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), signer: new i.NoAuthSigner() }], logger: e2?.logger ?? new s.NoOpLogger(), protocol: e2?.protocol ?? r.AwsRestJsonProtocol, protocolSettings: e2?.protocolSettings ?? { defaultNamespace: "com.amazonaws.signin", errorTypeRegistries: l.errorTypeRegistries, version: "2023-01-01", serviceTarget: "Signin" }, serviceId: e2?.serviceId ?? "Signin", urlParser: e2?.urlParser ?? a.parseUrl, utf8Decoder: e2?.utf8Decoder ?? u.fromUtf8, utf8Encoder: e2?.utf8Encoder ?? u.toUtf8 });
}