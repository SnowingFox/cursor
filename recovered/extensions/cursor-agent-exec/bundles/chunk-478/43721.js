// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/478.js sha256:03d8c888857521b5af31d5761e74aee40e5eecd292b9b059b8748be5231d88b9
// module: 43721 range:16203..16662
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
43721: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.defaultEndpointResolver = void 0;
  const o = r(85644), n = r(82713), i = r(52278), s = new n.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] });
  t.defaultEndpointResolver = (e2, t2 = {}) => s.get(e2, () => (0, n.decideEndpoint)(i.bdd, { endpointParams: e2, logger: t2.logger })), n.customEndpointFunctions.aws = o.awsEndpointFunctions;
}