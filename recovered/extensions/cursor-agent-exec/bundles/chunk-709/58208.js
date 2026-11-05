// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/709.js sha256:178b16cc9cd8c06565bc9aac7b10691bae0eb6d67807efc2887d6c205e5f61c7
// module: 58208 range:14250..14709
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58208: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.defaultEndpointResolver = void 0;
  const o = n(85644), r = n(82713), i = n(48349), s = new r.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] });
  t.defaultEndpointResolver = (e2, t2 = {}) => s.get(e2, () => (0, r.decideEndpoint)(i.bdd, { endpointParams: e2, logger: t2.logger })), r.customEndpointFunctions.aws = o.awsEndpointFunctions;
}